import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { stripVTControlCharacters } from 'node:util';

const packageRoot = path.resolve(import.meta.dir, '..');
const repositoryRoot = path.resolve(packageRoot, '../..');
const precompilesRoot = path.join(repositoryRoot, 'packages/precompiles');
const cliPath = path.join(packageRoot, 'dist/main.js');
const brandAssetHashes = {
	'powered-by-sei-light.png': '2e34eff9ed947367797d5ab7936bad56e15bd5bde34c3d338bb051e20c1ebe0e',
	'sei-lockup-light.svg': 'dd74e3718d5aa5b45a4a681629b4012f439e5273a5587cbb9bbaad272636ea7a',
	'sei-mark.png': '659b876c0cd7b7d12d284ddd541c9900fb86abdb88c0d39c7561bdae9b6bffdf'
} as const;
const buildWarningAllowlist = [
	// Every smoke app starts without a .next cache by design.
	/^⚠ No build cache found\. Please configure build caching for faster rebuilds\. Read more: https:\/\/nextjs\.org\/docs\/messages\/no-cache$/,
	// Next 15 emits this diagnostic for its own webpack cache serialization.
	/^<w> \[webpack\.cache\.PackFileCacheStrategy\] Serializing big strings \(\d+kiB\) impacts deserialization performance \(consider using Buffer instead and decode when needed\)$/,
	// Wallet client code probes localStorage during static generation; the browser provides it at runtime.
	/^\(node:\d+\) ExperimentalWarning: localStorage is not available because --localstorage-file was not provided\.$/,
	// Node prints this continuation immediately after the allowlisted localStorage warning.
	/^\(Use `node --trace-warnings \.\.\.` to show where the warning was created\)$/
];

interface Variant {
	name: string;
	extension?: string;
}

const variants: Variant[] = [{ name: 'release-smoke-base' }, { name: 'release-smoke-precompiles', extension: 'precompiles' }];

const smokeEnvironment = {
	...process.env,
	CI: '1',
	NEXT_TELEMETRY_DISABLED: '1'
};

async function run(label: string, command: string[], cwd: string, warningAllowlist?: RegExp[]): Promise<void> {
	console.log(`\n==> ${label}`);
	const inspectWarnings = warningAllowlist !== undefined;
	const subprocess = Bun.spawn({
		cmd: command,
		cwd,
		env: smokeEnvironment,
		stdout: inspectWarnings ? 'pipe' : 'inherit',
		stderr: inspectWarnings ? 'pipe' : 'inherit'
	});
	const [stdout, stderr, exitCode] = inspectWarnings
		? await Promise.all([new Response(subprocess.stdout).text(), new Response(subprocess.stderr).text(), subprocess.exited])
		: ['', '', await subprocess.exited];

	if (inspectWarnings) {
		process.stdout.write(stdout);
		process.stderr.write(stderr);
	}

	if (exitCode !== 0) {
		throw new Error(`${label} failed with exit code ${exitCode}`);
	}

	const warningLines = `${stdout}\n${stderr}`
		.split(/\r?\n/)
		.map((line) => stripVTControlCharacters(line).trim())
		.filter((line) => /(?:\bwarn(?:ing)?\b|⚠|<w>)/i.test(line));
	const unexpectedWarnings = warningLines.filter((line) => !warningAllowlist?.some((allowed) => allowed.test(line)));
	if (unexpectedWarnings.length > 0) {
		throw new Error(`${label} emitted unexpected warnings:\n${unexpectedWarnings.join('\n')}`);
	}
}

async function pathExists(target: string): Promise<boolean> {
	return fs
		.access(target)
		.then(() => true)
		.catch(() => false);
}

async function makePrecompilesCandidate(tempRoot: string): Promise<string> {
	await run('Build local precompiles candidate', [process.execPath, 'run', 'build'], precompilesRoot);

	const candidateRoot = path.join(tempRoot, 'precompiles-candidate');
	const tarballRoot = path.join(tempRoot, 'tarballs');
	const sourceManifest = JSON.parse(await fs.readFile(path.join(precompilesRoot, 'package.json'), 'utf8')) as Record<string, unknown>;
	const candidateManifest = { ...sourceManifest, version: '3.0.0' };

	await fs.mkdir(candidateRoot);
	await fs.mkdir(tarballRoot);
	await fs.writeFile(path.join(candidateRoot, 'package.json'), `${JSON.stringify(candidateManifest, null, '\t')}\n`);
	await fs.cp(path.join(precompilesRoot, 'dist'), path.join(candidateRoot, 'dist'), { recursive: true });

	await run('Pack local precompiles 3 candidate', [process.execPath, 'pm', 'pack', '--destination', tarballRoot, '--ignore-scripts'], candidateRoot);

	const tarballs = (await fs.readdir(tarballRoot)).filter((entry) => entry.endsWith('.tgz'));
	if (tarballs.length !== 1) {
		throw new Error(`Expected one local precompiles tarball, found ${tarballs.length}`);
	}
	return path.join(tarballRoot, tarballs[0]);
}

async function verifyProductionRuntime(projectRoot: string, variantName: string): Promise<void> {
	console.log(`\n==> Production runtime ${variantName}`);
	const portReservation = Bun.serve({
		hostname: '127.0.0.1',
		port: 0,
		fetch: () => new Response('reserved')
	});
	const port = portReservation.port;
	await portReservation.stop(true);

	const baseUrl = `http://127.0.0.1:${port}`;
	const subprocess = Bun.spawn({
		cmd: [process.execPath, 'run', 'start', '--', '--hostname', '127.0.0.1', '--port', String(port)],
		cwd: projectRoot,
		env: smokeEnvironment,
		stdout: 'pipe',
		stderr: 'pipe'
	});
	const stdoutPromise = new Response(subprocess.stdout).text();
	const stderrPromise = new Response(subprocess.stderr).text();
	let failure: unknown;

	try {
		let ready = false;
		for (let attempt = 0; attempt < 80; attempt++) {
			if (subprocess.exitCode !== null) {
				throw new Error(`Production server exited early with code ${subprocess.exitCode}`);
			}

			try {
				const response = await fetch(baseUrl, { signal: AbortSignal.timeout(1_000) });
				if (response.ok) {
					ready = true;
					break;
				}
			} catch {
				// Server is still starting.
			}
			await Bun.sleep(250);
		}

		if (!ready) {
			throw new Error('Production server did not become ready within 20 seconds');
		}

		const routeBodies = new Map<string, string>();
		for (const route of ['/', '/development', '/resources']) {
			const response = await fetch(`${baseUrl}${route}`, { signal: AbortSignal.timeout(10_000) });
			if (!response.ok) {
				throw new Error(`${route} returned ${response.status}`);
			}
			routeBodies.set(route, await response.text());
		}

		const homeBody = routeBodies.get('/') || '';
		if (
			!homeBody.includes('src="/brand/sei-lockup-light.svg"') ||
			!homeBody.includes('src="/brand/powered-by-sei-light.png"') ||
			!/<link rel="icon" href="\/brand\/sei-mark\.png"/.test(homeBody) ||
			!/<link rel="apple-touch-icon" href="\/brand\/sei-mark\.png"/.test(homeBody) ||
			homeBody.includes('/_next/image')
		) {
			throw new Error('Home page did not render the official Sei assets and icon metadata directly');
		}

		for (const [assetName, expectedHash] of Object.entries(brandAssetHashes)) {
			const response = await fetch(`${baseUrl}/brand/${assetName}`, { signal: AbortSignal.timeout(10_000) });
			const bytes = await response.arrayBuffer();
			const expectedContentType = assetName.endsWith('.png') ? 'image/png' : 'image/svg+xml';
			if (
				!response.ok ||
				response.headers.get('content-type') !== expectedContentType ||
				createHash('sha256').update(new Uint8Array(bytes)).digest('hex') !== expectedHash
			) {
				throw new Error(`/brand/${assetName} was not served with its official contents`);
			}
		}

		const staticAssetPath = routeBodies.get('/')?.match(/(?:src|href)="(\/_next\/static\/[^"]+)"/)?.[1];
		if (!staticAssetPath) {
			throw new Error('Home page did not reference a Next.js static asset');
		}
		const staticAssetResponse = await fetch(new URL(staticAssetPath, baseUrl), { signal: AbortSignal.timeout(10_000) });
		if (!staticAssetResponse.ok) {
			throw new Error(`${staticAssetPath} returned ${staticAssetResponse.status}`);
		}
	} catch (error) {
		failure = error;
	} finally {
		if (subprocess.exitCode === null) {
			subprocess.kill();
		}
		await subprocess.exited;
	}

	const [stdout, stderr] = await Promise.all([stdoutPromise, stderrPromise]);
	if (failure) {
		throw new Error(`${variantName} runtime probe failed: ${failure instanceof Error ? failure.message : String(failure)}\n${stderr || stdout}`);
	}
}

async function verifyVariant(tempRoot: string, candidateTarball: string, variant: Variant): Promise<void> {
	const cliArguments = [cliPath, 'app', '-n', variant.name];
	if (variant.extension) {
		cliArguments.push('--extension', variant.extension);
	}

	await run(`Scaffold ${variant.name}`, [process.execPath, ...cliArguments], tempRoot);

	const projectRoot = path.join(tempRoot, variant.name);
	const manifestPath = path.join(projectRoot, 'package.json');
	const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8')) as {
		dependencies: Record<string, string>;
	};

	if (manifest.dependencies['@sei-js/precompiles'] !== '3.0.0') {
		throw new Error(`${variant.name} did not preserve the shipped @sei-js/precompiles 3.0.0 requirement`);
	}
	if ((await pathExists(path.join(projectRoot, 'node_modules'))) || (await pathExists(path.join(projectRoot, 'bun.lock')))) {
		throw new Error(`${variant.name} was not a clean scaffold`);
	}
	const brandRoot = path.join(projectRoot, 'public/brand');
	const brandAssets = (await fs.readdir(brandRoot)).sort();
	if (JSON.stringify(brandAssets) !== JSON.stringify(Object.keys(brandAssetHashes).sort())) {
		throw new Error(`${variant.name} included an unexpected public/brand asset set: ${brandAssets.join(', ')}`);
	}
	for (const [brandAsset, expectedHash] of Object.entries(brandAssetHashes)) {
		const actualHash = createHash('sha256')
			.update(await fs.readFile(path.join(brandRoot, brandAsset)))
			.digest('hex');
		if (actualHash !== expectedHash) {
			throw new Error(`${variant.name} included modified brand asset ${brandAsset}`);
		}
	}

	// Version 3 is not published yet, so a valid registry-resolved lockfile cannot
	// be shipped. Override only this disposable app; exact pins plus this live
	// release gate protect consumers until a real v3 lockfile can be generated.
	manifest.dependencies['@sei-js/precompiles'] = `file:${candidateTarball}`;
	await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, '\t')}\n`);

	await run(`Install ${variant.name}`, [process.execPath, 'install'], projectRoot, []);
	await run(`Audit ${variant.name}`, [process.execPath, 'audit'], projectRoot);
	await run(`Biome check ${variant.name}`, [process.execPath, 'run', 'check'], projectRoot, []);
	await run(`Next production build ${variant.name}`, [process.execPath, 'run', 'build'], projectRoot, buildWarningAllowlist);
	await verifyProductionRuntime(projectRoot, variant.name);
}

const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-release-smoke-'));

try {
	await run('Build create-sei', [process.execPath, 'run', 'build'], packageRoot);
	const candidateTarball = await makePrecompilesCandidate(tempRoot);

	for (const variant of variants) {
		await verifyVariant(tempRoot, candidateTarball, variant);
	}

	console.log('\ncreate-sei release smoke passed for base and precompiles variants.');
} finally {
	await fs.rm(tempRoot, { recursive: true, force: true });
}
