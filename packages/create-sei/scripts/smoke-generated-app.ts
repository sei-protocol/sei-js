import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { BRAND_ASSET_HASHES } from '../brand-assets';
import { type PrecompilesSource, type PrecompilesSourceSelection, type RequestedPrecompilesSource, selectPrecompilesSource } from './select-precompiles-source';

const packageRoot = path.resolve(import.meta.dir, '..');
const repositoryRoot = path.resolve(packageRoot, '../..');
const precompilesRoot = path.join(repositoryRoot, 'packages/precompiles');
const cliPath = path.join(packageRoot, 'dist/main.js');
const templateManifestPath = path.join(packageRoot, 'templates/next-template/package.json');

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

interface PrecompilesTarget {
	currentVersion: string;
	pendingVersion?: string;
	version: string;
}

interface AuditAdvisory {
	severity: string;
	title?: string;
	url?: string;
}

const variants: Variant[] = [{ name: 'release-smoke-base' }, { name: 'release-smoke-precompiles', extension: 'precompiles' }];

const smokeEnvironment = {
	...process.env,
	CI: '1',
	NEXT_TELEMETRY_DISABLED: '1'
};

function readPrecompilesSource(): RequestedPrecompilesSource {
	const optionIndex = process.argv.indexOf('--precompiles-source');
	const source = optionIndex === -1 ? 'auto' : process.argv[optionIndex + 1];
	if (source !== 'auto' && source !== 'local' && source !== 'registry') {
		throw new Error("Use '--precompiles-source auto', '--precompiles-source local', or '--precompiles-source registry'.");
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

async function capture(command: string[], cwd: string): Promise<{ exitCode: number; stderr: string; stdout: string }> {
	const subprocess = Bun.spawn({
		cmd: command,
		cwd,
		env: smokeEnvironment,
		stdout: 'pipe',
		stderr: 'pipe'
	});
	const [stdout, stderr, exitCode] = await Promise.all([new Response(subprocess.stdout).text(), new Response(subprocess.stderr).text(), subprocess.exited]);
	return { exitCode, stderr, stdout };
}

async function pathExists(target: string): Promise<boolean> {
	return fs
		.access(target)
		.then(() => true)
		.catch(() => false);
}

async function resolvePrecompilesTarget(tempRoot: string): Promise<PrecompilesTarget> {
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

	console.log(`\nTemplate pins @sei-js/precompiles@${templateTarget}.`);
	return { version: templateTarget, currentVersion: currentManifest.version, pendingVersion: pendingRelease?.newVersion };
}

async function registryHasPrecompilesVersion(version: string): Promise<boolean> {
	const result = await capture(['npm', 'view', `@sei-js/precompiles@${version}`, 'version', '--json'], repositoryRoot);
	if (result.exitCode !== 0) {
		return false;
	}
	try {
		const resolvedVersion = JSON.parse(result.stdout) as unknown;
		return resolvedVersion === version || (Array.isArray(resolvedVersion) && resolvedVersion.includes(version));
	} catch {
		return false;
	}
}

async function makePrecompilesCandidate(tempRoot: string, targetVersion: string, selection: PrecompilesSourceSelection): Promise<string> {
	await run('Build local precompiles candidate', [process.execPath, 'run', 'build'], precompilesRoot);

	const candidateRoot = path.join(tempRoot, 'precompiles-candidate');
	const tarballRoot = path.join(tempRoot, 'tarballs');
	const sourceManifest = JSON.parse(await fs.readFile(path.join(precompilesRoot, 'package.json'), 'utf8')) as Record<string, unknown> & { version: string };
	if (selection.source !== 'local') {
		throw new Error('A registry selection cannot be packed as a local candidate.');
	}
	if (selection.basis === 'current-manifest' && sourceManifest.version !== targetVersion) {
		throw new Error(`Current local manifest changed to ${sourceManifest.version}; refusing to package it as ${targetVersion}.`);
	}
	const candidateManifest = selection.basis === 'pending-release' ? { ...sourceManifest, version: targetVersion } : sourceManifest;

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

async function auditVariant(projectRoot: string, variantName: string, precompilesSource: PrecompilesSource): Promise<void> {
	console.log(`\n==> Audit ${variantName}`);
	const result = await capture([process.execPath, 'audit', '--json'], projectRoot);
	if (result.stderr) {
		process.stderr.write(result.stderr);
	}

	let advisories: AuditAdvisory[];
	try {
		const report = JSON.parse(result.stdout) as unknown;
		if (!report || Array.isArray(report) || typeof report !== 'object') {
			throw new Error('audit response was not an advisory object');
		}
		advisories = Object.values(report).flatMap((packageAdvisories) => {
			if (!Array.isArray(packageAdvisories)) {
				throw new Error('audit response contained a non-array package entry');
			}
			return packageAdvisories.map((advisory) => {
				if (!advisory || typeof advisory !== 'object' || !('severity' in advisory) || typeof advisory.severity !== 'string') {
					throw new Error('audit advisory did not include a severity');
				}
				return advisory as AuditAdvisory;
			});
		});
	} catch (error) {
		const message = `Could not interpret JSON audit results for ${variantName}: ${error instanceof Error ? error.message : String(error)}`;
		if (precompilesSource === 'registry') {
			console.warn(`${message}. Registry-mode audit is report-only.`);
			return;
		}
		throw new Error(message);
	}

	if (advisories.length === 0) {
		if (result.exitCode !== 0) {
			const message = `Audit exited ${result.exitCode} without reporting an advisory for ${variantName}`;
			if (precompilesSource === 'registry') {
				console.warn(`${message}. Registry-mode audit is report-only.`);
				return;
			}
			throw new Error(message);
		}
		console.log('No vulnerabilities found');
		return;
	}

	const severityCounts = new Map<string, number>();
	for (const advisory of advisories) {
		const severity = advisory.severity.toLowerCase();
		severityCounts.set(severity, (severityCounts.get(severity) ?? 0) + 1);
	}
	const summary = [...severityCounts.entries()]
		.sort(([left], [right]) => left.localeCompare(right))
		.map(([severity, count]) => `${count} ${severity}`)
		.join(', ');
	console.warn(`Audit reported ${summary} finding(s) for ${variantName}.`);
	process.stdout.write(result.stdout.endsWith('\n') ? result.stdout : `${result.stdout}\n`);

	if (precompilesSource === 'registry') {
		console.warn('Registry-mode audit is report-only; install, check, build, and runtime verification will continue.');
		return;
	}

	const blockingAdvisories = advisories.filter((advisory) => {
		const severity = advisory.severity.toLowerCase();
		return severity === 'high' || severity === 'critical';
	});
	if (blockingAdvisories.length > 0) {
		throw new Error(`Audit found ${blockingAdvisories.length} high/critical vulnerability finding(s) in ${variantName}.`);
	}
	console.warn('Only low/moderate audit findings were reported; local candidate verification will continue.');
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
		const readinessDeadline = Date.now() + 30_000;
		let failure: unknown;

		const fetchBeforeReadinessDeadline = (url: string) => {
			const remaining = readinessDeadline - Date.now();
			if (remaining <= 0) {
				throw new Error('Production server exceeded its 30 second readiness deadline');
			}
			return fetch(url, { signal: AbortSignal.timeout(Math.min(1_000, remaining)) });
		};
		const probe = (url: string) => fetch(url, { signal: AbortSignal.timeout(10_000) });

		try {
			let ready = false;
			while (Date.now() < readinessDeadline) {
				if (subprocess.exitCode !== null) {
					throw new Error(`Production server exited early with code ${subprocess.exitCode}`);
				}

				try {
					const response = await fetchBeforeReadinessDeadline(baseUrl);
					if (response.ok) {
						ready = true;
						break;
					}
				} catch {
					// Server is still starting.
				}
				await Bun.sleep(Math.min(250, Math.max(0, readinessDeadline - Date.now())));
			}

			if (!ready) {
				throw new Error('Production server did not become ready before the 30 second wall-clock deadline');
			}

			const routeBodies = new Map<string, string>();
			for (const route of ['/', '/development', '/resources']) {
				const response = await probe(`${baseUrl}${route}`);
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

			for (const [assetName, expectedHash] of Object.entries(BRAND_ASSET_HASHES)) {
				const response = await probe(`${baseUrl}/brand/${assetName}`);
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

			const faviconResponse = await probe(`${baseUrl}/favicon.ico`);
			const faviconBytes = await faviconResponse.arrayBuffer();
			if (
				!faviconResponse.ok ||
				faviconResponse.headers.get('content-type') !== 'image/png' ||
				createHash('sha256').update(new Uint8Array(faviconBytes)).digest('hex') !== BRAND_ASSET_HASHES['sei-mark.png']
			) {
				throw new Error('/favicon.ico did not resolve to the official PNG app mark');
			}

			const staticAssetPath = homeBody.match(/(?:src|href)="(\/_next\/static\/[^"]+)"/)?.[1];
			if (!staticAssetPath) {
				throw new Error('Home page did not reference a Next.js static asset');
			}
			const staticAssetResponse = await probe(new URL(staticAssetPath, baseUrl).toString());
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
	if (JSON.stringify(brandAssets) !== JSON.stringify(Object.keys(BRAND_ASSET_HASHES).sort())) {
		throw new Error(`${variant.name} included an unexpected public/brand asset set: ${brandAssets.join(', ')}`);
	}
	for (const [brandAsset, expectedHash] of Object.entries(BRAND_ASSET_HASHES)) {
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

	await auditVariant(projectRoot, variant.name, precompilesSource);
	await run(`Biome check ${variant.name}`, [process.execPath, 'run', 'check'], projectRoot);
	await run(`Next production build ${variant.name}`, [process.execPath, 'run', 'build'], projectRoot);
	await verifyProductionRuntime(projectRoot, variant.name);
}

const tempRoot = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-release-smoke-'));

try {
	const requestedSource = readPrecompilesSource();
	await run('Build create-sei', [process.execPath, 'run', 'build'], packageRoot);
	const precompilesTarget = await resolvePrecompilesTarget(tempRoot);
	const selection = await selectPrecompilesSource(
		{
			currentVersion: precompilesTarget.currentVersion,
			pendingVersion: precompilesTarget.pendingVersion,
			requestedSource,
			targetVersion: precompilesTarget.version
		},
		registryHasPrecompilesVersion
	);
	if (selection.basis === 'pending-release') {
		console.log(`Changesets computes the exact template pin; using a local @sei-js/precompiles@${precompilesTarget.version} candidate.`);
	} else if (selection.basis === 'current-manifest') {
		console.log(`The local manifest already matches the exact template pin; using @sei-js/precompiles@${precompilesTarget.version} without retagging it.`);
	} else {
		console.log(`Using published @sei-js/precompiles@${precompilesTarget.version} from npm.`);
	}
	const candidateTarball = selection.source === 'local' ? await makePrecompilesCandidate(tempRoot, precompilesTarget.version, selection) : undefined;

	for (const variant of variants) {
		await verifyVariant(tempRoot, selection.source, precompilesTarget.version, candidateTarball, variant);
	}

	console.log(`\ncreate-sei ${selection.source} smoke passed for base and precompiles variants at @sei-js/precompiles@${precompilesTarget.version}.`);
} finally {
	await fs.rm(tempRoot, { recursive: true, force: true });
}
