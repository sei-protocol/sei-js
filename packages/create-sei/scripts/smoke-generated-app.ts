import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const packageRoot = path.resolve(import.meta.dir, '..');
const repositoryRoot = path.resolve(packageRoot, '../..');
const precompilesRoot = path.join(repositoryRoot, 'packages/precompiles');
const cliPath = path.join(packageRoot, 'dist/main.js');
const templateManifestPath = path.join(packageRoot, 'templates/next-template/package.json');
const brandAssetHashes = {
	'powered-by-sei-light.png': '2e34eff9ed947367797d5ab7936bad56e15bd5bde34c3d338bb051e20c1ebe0e',
	'sei-lockup-light.svg': 'dd74e3718d5aa5b45a4a681629b4012f439e5273a5587cbb9bbaad272636ea7a',
	'sei-mark.png': '659b876c0cd7b7d12d284ddd541c9900fb86abdb88c0d39c7561bdae9b6bffdf'
} as const;

type PrecompilesSource = 'local' | 'registry';

interface Variant {
	name: string;
	extension?: string;
}

interface ReleasePlan {
	releases: Array<{
		name: string;
		newVersion: string;
	}>;
}

const variants: Variant[] = [{ name: 'release-smoke-base' }, { name: 'release-smoke-precompiles', extension: 'precompiles' }];

const smokeEnvironment = {
	...process.env,
	CI: '1',
	NEXT_TELEMETRY_DISABLED: '1'
};

function readPrecompilesSource(): PrecompilesSource {
	const optionIndex = process.argv.indexOf('--precompiles-source');
	const source = optionIndex === -1 ? 'local' : process.argv[optionIndex + 1];
	if (source !== 'local' && source !== 'registry') {
		throw new Error("Use '--precompiles-source local' or '--precompiles-source registry'.");
	}
	return source;
}

async function run(label: string, command: string[], cwd: string, fatal = true): Promise<number> {
	console.log(`\n==> ${label}`);
	const subprocess = Bun.spawn({
		cmd: command,
		cwd,
		env: smokeEnvironment,
		stdout: 'inherit',
		stderr: 'inherit'
	});
	const exitCode = await subprocess.exited;

	if (fatal && exitCode !== 0) {
		throw new Error(`${label} failed with exit code ${exitCode}`);
	}
	return exitCode;
}

async function pathExists(target: string): Promise<boolean> {
	return fs
		.access(target)
		.then(() => true)
		.catch(() => false);
}

async function resolvePrecompilesTarget(tempRoot: string): Promise<string> {
	const templateManifest = JSON.parse(await fs.readFile(templateManifestPath, 'utf8')) as {
		dependencies?: Record<string, string>;
	};
	const templateTarget = templateManifest.dependencies?.['@sei-js/precompiles'];
	if (!templateTarget || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(templateTarget)) {
		throw new Error('The template must pin @sei-js/precompiles to one exact version.');
	}

	const releasePlanPath = path.join(tempRoot, 'changeset-status.json');
	await run('Compute pending release metadata', [process.execPath, 'run', 'changeset', 'status', '--output', releasePlanPath], repositoryRoot);
	const releasePlan = JSON.parse(await fs.readFile(releasePlanPath, 'utf8')) as ReleasePlan;
	const pendingRelease = releasePlan.releases.find((release) => release.name === '@sei-js/precompiles');
	const currentManifest = JSON.parse(await fs.readFile(path.join(precompilesRoot, 'package.json'), 'utf8')) as {
		version: string;
	};
	const computedTarget = pendingRelease?.newVersion ?? currentManifest.version;

	if (computedTarget !== templateTarget) {
		throw new Error(`Template pins @sei-js/precompiles@${templateTarget}, but release metadata computes ${computedTarget}.`);
	}

	console.log(`\nValidated @sei-js/precompiles target: ${computedTarget}`);
	return computedTarget;
}

async function makePrecompilesCandidate(tempRoot: string, targetVersion: string): Promise<string> {
	await run('Build local precompiles candidate', [process.execPath, 'run', 'build'], precompilesRoot);

	const candidateRoot = path.join(tempRoot, 'precompiles-candidate');
	const tarballRoot = path.join(tempRoot, 'tarballs');
	const sourceManifest = JSON.parse(await fs.readFile(path.join(precompilesRoot, 'package.json'), 'utf8')) as Record<string, unknown>;
	const candidateManifest = { ...sourceManifest, version: targetVersion };

	await fs.mkdir(candidateRoot);
	await fs.mkdir(tarballRoot);
	await fs.writeFile(path.join(candidateRoot, 'package.json'), `${JSON.stringify(candidateManifest, null, '\t')}\n`);
	await fs.cp(path.join(precompilesRoot, 'dist'), path.join(candidateRoot, 'dist'), { recursive: true });

	await run(
		`Pack local precompiles ${targetVersion} candidate`,
		[process.execPath, 'pm', 'pack', '--destination', tarballRoot, '--ignore-scripts'],
		candidateRoot
	);

	const tarballs = (await fs.readdir(tarballRoot)).filter((entry) => entry.endsWith('.tgz'));
	if (tarballs.length !== 1) {
		throw new Error(`Expected one local precompiles tarball, found ${tarballs.length}`);
	}
	return path.join(tarballRoot, tarballs[0]);
}

async function verifyProductionRuntime(projectRoot: string, variantName: string): Promise<void> {
	console.log(`\n==> Production runtime ${variantName}`);

	for (let attempt = 1; attempt <= 3; attempt++) {
		const portReservation = Bun.serve({
			hostname: '127.0.0.1',
			port: 0,
			fetch: () => new Response('reserved')
		});
		const port = portReservation.port;
		await portReservation.stop(true);

		const baseUrl = `http://127.0.0.1:${port}`;
		const subprocess = Bun.spawn({
			cmd: [path.join(projectRoot, 'node_modules/.bin/next'), 'start', '--hostname', '127.0.0.1', '--port', String(port)],
			cwd: projectRoot,
			env: smokeEnvironment,
			detached: true,
			stdout: 'pipe',
			stderr: 'pipe'
		});
		const stdoutPromise = new Response(subprocess.stdout).text();
		const stderrPromise = new Response(subprocess.stderr).text();
		const deadline = Date.now() + 30_000;
		let failure: unknown;

		const fetchBeforeDeadline = (url: string, maximumTimeout = 10_000) => {
			const remaining = deadline - Date.now();
			if (remaining <= 0) {
				throw new Error('Production runtime exceeded its 30 second wall-clock deadline');
			}
			return fetch(url, { signal: AbortSignal.timeout(Math.min(maximumTimeout, remaining)) });
		};

		try {
			let ready = false;
			while (Date.now() < deadline) {
				if (subprocess.exitCode !== null) {
					throw new Error(`Production server exited early with code ${subprocess.exitCode}`);
				}

				try {
					const response = await fetchBeforeDeadline(baseUrl, 1_000);
					if (response.ok) {
						ready = true;
						break;
					}
				} catch {
					// Server is still starting.
				}
				await Bun.sleep(Math.min(250, Math.max(0, deadline - Date.now())));
			}

			if (!ready) {
				throw new Error('Production server did not become ready before the 30 second wall-clock deadline');
			}

			const routeBodies = new Map<string, string>();
			for (const route of ['/', '/development', '/resources']) {
				const response = await fetchBeforeDeadline(`${baseUrl}${route}`);
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
				const response = await fetchBeforeDeadline(`${baseUrl}/brand/${assetName}`);
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

			const staticAssetPath = homeBody.match(/(?:src|href)="(\/_next\/static\/[^"]+)"/)?.[1];
			if (!staticAssetPath) {
				throw new Error('Home page did not reference a Next.js static asset');
			}
			const staticAssetResponse = await fetchBeforeDeadline(new URL(staticAssetPath, baseUrl).toString());
			if (!staticAssetResponse.ok) {
				throw new Error(`${staticAssetPath} returned ${staticAssetResponse.status}`);
			}
		} catch (error) {
			failure = error;
		} finally {
			if (subprocess.exitCode === null) {
				try {
					process.kill(-subprocess.pid, 'SIGTERM');
				} catch {
					subprocess.kill();
				}
				const stopped = await Promise.race([subprocess.exited.then(() => true), Bun.sleep(5_000).then(() => false)]);
				if (!stopped && subprocess.exitCode === null) {
					try {
						process.kill(-subprocess.pid, 'SIGKILL');
					} catch {
						subprocess.kill(9);
					}
				}
			}
			await subprocess.exited;
		}

		const [stdout, stderr] = await Promise.all([stdoutPromise, stderrPromise]);
		if (!failure) {
			return;
		}
		const serverOutput = `${stderr}\n${stdout}`;
		if (attempt < 3 && /EADDRINUSE|address already in use/i.test(serverOutput)) {
			console.warn(`Port ${port} was claimed before Next started; retrying runtime probe.`);
			continue;
		}
		throw new Error(`${variantName} runtime probe failed: ${failure instanceof Error ? failure.message : String(failure)}\n${serverOutput}`);
	}

	throw new Error(`${variantName} runtime probe exhausted all port retries`);
}

async function verifyVariant(
	tempRoot: string,
	precompilesSource: PrecompilesSource,
	precompilesTarget: string,
	candidateTarball: string | undefined,
	variant: Variant
): Promise<void> {
	const cliArguments = [cliPath, 'app', '-n', variant.name];
	if (variant.extension) {
		cliArguments.push('--extension', variant.extension);
	}

	await run(`Scaffold ${variant.name}`, [process.execPath, ...cliArguments], tempRoot);

	const projectRoot = path.join(tempRoot, variant.name);
	const manifestPath = path.join(projectRoot, 'package.json');
	const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8')) as {
		dependencies: Record<string, string>;
		overrides: Record<string, string>;
	};

	if (manifest.dependencies['@sei-js/precompiles'] !== precompilesTarget) {
		throw new Error(`${variant.name} did not preserve the shipped @sei-js/precompiles@${precompilesTarget} requirement`);
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

	if (precompilesSource === 'local') {
		if (!candidateTarball) {
			throw new Error('Local precompiles mode requires a candidate tarball.');
		}
		// The candidate is stamped only after Changesets metadata and the shipped
		// template pin agree. This rewrite is confined to the disposable smoke app.
		manifest.dependencies['@sei-js/precompiles'] = `file:${candidateTarball}`;
		await fs.writeFile(manifestPath, `${JSON.stringify(manifest, null, '\t')}\n`);
	}

	await run(`Install ${variant.name}`, [process.execPath, 'install'], projectRoot);
	const installedPrecompiles = JSON.parse(await fs.readFile(path.join(projectRoot, 'node_modules/@sei-js/precompiles/package.json'), 'utf8')) as {
		version: string;
	};
	if (installedPrecompiles.version !== precompilesTarget) {
		throw new Error(`${variant.name} resolved @sei-js/precompiles@${installedPrecompiles.version}; expected ${precompilesTarget}.`);
	}
	const expectedExternalStore = manifest.overrides['use-sync-external-store'];
	const installedExternalStore = JSON.parse(await fs.readFile(path.join(projectRoot, 'node_modules/use-sync-external-store/package.json'), 'utf8')) as {
		version: string;
	};
	if (!expectedExternalStore || installedExternalStore.version !== expectedExternalStore) {
		throw new Error(`${variant.name} did not resolve the template's React-compatible use-sync-external-store override.`);
	}
	console.log(`${variant.name} resolved @sei-js/precompiles@${installedPrecompiles.version} from ${precompilesSource}.`);

	const auditExitCode = await run(`Audit ${variant.name}`, [process.execPath, 'audit'], projectRoot, precompilesSource === 'local');
	if (auditExitCode !== 0) {
		console.warn(`Audit reported findings for staged registry verification of ${variant.name}; install, build, and runtime verification will continue.`);
	}
	await run(`Biome check ${variant.name}`, [process.execPath, 'run', 'check'], projectRoot);
	await run(`Next production build ${variant.name}`, [process.execPath, 'run', 'build'], projectRoot);
	await verifyProductionRuntime(projectRoot, variant.name);
}

const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-release-smoke-'));

try {
	const precompilesSource = readPrecompilesSource();
	await run('Build create-sei', [process.execPath, 'run', 'build'], packageRoot);
	const precompilesTarget = await resolvePrecompilesTarget(tempRoot);
	const candidateTarball = precompilesSource === 'local' ? await makePrecompilesCandidate(tempRoot, precompilesTarget) : undefined;

	for (const variant of variants) {
		await verifyVariant(tempRoot, precompilesSource, precompilesTarget, candidateTarball, variant);
	}

	console.log(`\ncreate-sei ${precompilesSource} smoke passed for base and precompiles variants at @sei-js/precompiles@${precompilesTarget}.`);
} finally {
	await fs.rm(tempRoot, { recursive: true, force: true });
}
