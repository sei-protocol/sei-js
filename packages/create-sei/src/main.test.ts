import { beforeAll, describe, expect, test } from 'bun:test';
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { BRAND_ASSET_HASHES } from '../brand-assets';
import { selectPrecompilesSource } from '../scripts/select-precompiles-source';
import { SEI_NEUTRAL_RAMP } from '../templates/next-template/src/theme';

const packageRoot = path.resolve(import.meta.dir, '..');
const cliPath = path.join(packageRoot, 'dist/main.js');

interface ProcessResult {
	stdout: string;
	stderr: string;
	exitCode: number;
}

interface GeneratedManifest {
	name: string;
	scripts: Record<string, string>;
	dependencies: Record<string, string>;
	devDependencies: Record<string, string>;
	overrides: Record<string, string>;
	[key: string]: unknown;
}

async function runProcess(cmd: string[], cwd: string, environment: Record<string, string> = {}): Promise<ProcessResult> {
	const subprocess = Bun.spawn({
		cmd,
		cwd,
		env: { ...process.env, ...environment },
		stdout: 'pipe',
		stderr: 'pipe'
	});

	const [stdout, stderr, exitCode] = await Promise.all([new Response(subprocess.stdout).text(), new Response(subprocess.stderr).text(), subprocess.exited]);

	return { stdout, stderr, exitCode };
}

async function runCli(args: string[], cwd: string, entrypoint = cliPath, environment: Record<string, string> = {}): Promise<ProcessResult> {
	return runProcess([process.execPath, entrypoint, ...args], cwd, environment);
}

async function pathExists(target: string): Promise<boolean> {
	return fs
		.access(target)
		.then(() => true)
		.catch(() => false);
}

async function readManifest(projectPath: string): Promise<GeneratedManifest> {
	return JSON.parse(await fs.readFile(path.join(projectPath, 'package.json'), 'utf8')) as GeneratedManifest;
}

describe('precompiles source selection', () => {
	test('uses a candidate for an exact pending release', async () => {
		const selection = await selectPrecompilesSource(
			{ currentVersion: '2.1.3', pendingVersion: '3.0.0', requestedSource: 'auto', targetVersion: '3.0.0' },
			async () => false
		);
		expect(selection).toEqual({ basis: 'pending-release', source: 'local' });
	});

	test('uses an exact current manifest after Changesets versioning', async () => {
		const selection = await selectPrecompilesSource({ currentVersion: '3.0.0', requestedSource: 'auto', targetVersion: '3.0.0' }, async () => false);
		expect(selection).toEqual({ basis: 'current-manifest', source: 'local' });
	});

	test('uses the exact published registry version when local state does not match', async () => {
		const selection = await selectPrecompilesSource(
			{ currentVersion: '3.1.0', requestedSource: 'auto', targetVersion: '3.0.0' },
			async (version) => version === '3.0.0'
		);
		expect(selection).toEqual({ basis: 'published-registry', source: 'registry' });
	});

	test('rejects mismatched local state when the exact registry version is unavailable', async () => {
		await expect(
			selectPrecompilesSource({ currentVersion: '3.0.0', pendingVersion: '3.1.0', requestedSource: 'auto', targetVersion: '3.0.0' }, async () => false)
		).rejects.toThrow('neither a matching local source nor the exact npm release is available');
	});
});

describe('CLI', () => {
	beforeAll(async () => {
		const { stdout, stderr, exitCode } = await runProcess([process.execPath, 'run', 'build'], packageRoot);

		if (exitCode !== 0) {
			throw new Error(`Failed to build create-sei before CLI tests:\n${stderr || stdout}`);
		}
	}, 30_000);

	test('supports the short name option', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));

		try {
			const { stdout, stderr, exitCode } = await runCli(['app', '-n', 'Invalid Name'], testDir);

			expect(exitCode).toBe(1);
			expect(stdout).not.toContain('Invalid package name.');
			expect(stderr).toContain('Invalid package name.');
			expect(await fs.readdir(testDir)).toEqual([]);
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('prints portable startup guidance for a valid project name', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const projectName = 'wallet-app';

		try {
			const { stdout, exitCode } = await runCli(['app', '-n', projectName], testDir);

			expect(exitCode).toBe(0);
			expect(stdout).toContain(`cd "./${projectName}"`);
			expect((await readManifest(path.join(testDir, projectName))).name).toBe(projectName);
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('rejects npm-invalid and Windows-reserved project names', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const invalidNames = [
			'Uppercase',
			'.hidden',
			'_private',
			'~wallet',
			'wallet~',
			'wallet$name',
			'node_modules',
			'favicon.ico',
			'con',
			'con.txt',
			'prn.md',
			'aux.js',
			'nul.log',
			'com1.txt',
			'lpt9.json'
		];

		try {
			for (const invalidName of invalidNames) {
				const { stderr, exitCode } = await runCli(['app', '-n', invalidName], testDir);

				expect(exitCode).toBe(1);
				expect(stderr).toContain('Invalid package name.');
			}
			expect(await fs.readdir(testDir)).toEqual([]);
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 20_000);

	test('refuses to merge into an existing destination', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const destination = path.join(testDir, 'existing-app');
		const sentinel = path.join(destination, 'keep.txt');

		try {
			await fs.mkdir(destination);
			await fs.writeFile(sentinel, 'do not overwrite');

			const { stdout, stderr, exitCode } = await runCli(['app', '-n', 'existing-app'], testDir);

			expect(exitCode).toBe(1);
			expect(stderr).toContain("Destination 'existing-app' already exists.");
			expect(stdout).not.toContain('Project setup complete!');
			expect(await fs.readFile(sentinel, 'utf8')).toBe('do not overwrite');
			expect(await pathExists(path.join(destination, 'package.json'))).toBe(false);
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('rejects extension traversal before creating a destination', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));

		try {
			const { stdout, stderr, exitCode } = await runCli(['app', '-n', 'traversal-app', '--extension', '../../templates/next-template'], testDir);

			expect(exitCode).toBe(1);
			expect(stderr).toContain("Invalid extension '../../templates/next-template'.");
			expect(stdout).not.toContain('Project setup complete!');
			expect(await pathExists(path.join(testDir, 'traversal-app'))).toBe(false);
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('prints error stacks only in DEBUG mode', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const args = ['app', '-n', 'debug-app', '--extension', '../invalid'];

		try {
			const conciseResult = await runCli(args, testDir, cliPath, { DEBUG: '' });
			const debugResult = await runCli(args, testDir, cliPath, { DEBUG: '1' });

			expect(conciseResult.exitCode).toBe(1);
			expect(conciseResult.stderr).toContain("An error occurred: Invalid extension '../invalid'.");
			expect(conciseResult.stderr).not.toContain('\n    at ');
			expect(debugResult.exitCode).toBe(1);
			expect(debugResult.stderr).toContain("Error: Invalid extension '../invalid'.");
			expect(debugResult.stderr).toContain('\n    at ');
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('returns a nonzero status and removes partial output when template copying fails', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const fixtureRoot = path.join(testDir, 'cli-fixture');
		const fixtureDist = path.join(fixtureRoot, 'dist');

		try {
			await fs.mkdir(fixtureRoot);
			await fs.cp(path.join(packageRoot, 'dist'), fixtureDist, { recursive: true });
			await fs.copyFile(path.join(packageRoot, 'package.json'), path.join(fixtureRoot, 'package.json'));
			await fs.symlink(path.join(packageRoot, 'node_modules'), path.join(fixtureRoot, 'node_modules'), 'dir');
			await fs.rm(path.join(fixtureDist, 'templates/next-template'), { recursive: true });

			const fixtureCliPath = path.join(fixtureDist, 'main.js');
			const { stdout, stderr, exitCode } = await runCli(['app', '-n', 'copy-failure-app'], testDir, fixtureCliPath);

			expect(exitCode).toBe(1);
			expect(stderr).toContain('ENOENT');
			expect(stdout).not.toContain('Project setup complete!');
			expect(await pathExists(path.join(testDir, 'copy-failure-app'))).toBe(false);
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('warns truthfully for a missing extension and generates the base template', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));

		try {
			const { stdout, stderr, exitCode } = await runCli(['app', '-n', 'base-fallback', '--extension', 'not-installed'], testDir);

			expect(exitCode).toBe(0);
			expect(stderr).toContain("Warning: Extension 'not-installed' not found.");
			expect(stdout).toContain('Project setup complete! Using template next-template');
			expect(stdout).not.toContain('Applied extension:');
			expect(stdout).not.toContain('with not-installed extension');
			expect((await readManifest(path.join(testDir, 'base-fallback'))).name).toBe('base-fallback');
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('generates complete base and precompiles variants', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const baseName = 'base-variant';
		const extensionName = 'precompiles-variant';
		const basePath = path.join(testDir, baseName);
		const extensionPath = path.join(testDir, extensionName);

		try {
			const baseResult = await runCli(['app', '-n', baseName], testDir);
			const extensionResult = await runCli(['app', '-n', extensionName, '--extension', 'precompiles'], testDir);

			expect(baseResult.exitCode).toBe(0);
			expect(baseResult.stdout).toContain('Project setup complete! Using template next-template');
			expect(baseResult.stdout).not.toContain('with precompiles extension');
			expect(extensionResult.exitCode).toBe(0);
			expect(extensionResult.stdout).toContain('Applied extension: precompiles');
			expect(extensionResult.stdout).toContain('with precompiles extension');

			const [baseManifest, extensionManifest, gitignore, extensionComponent, lockup, poweredBy, mark, layout, faviconRoute, globals] = await Promise.all([
				readManifest(basePath),
				readManifest(extensionPath),
				fs.readFile(path.join(basePath, '.gitignore'), 'utf8'),
				fs.readFile(path.join(extensionPath, 'src/components/default/index.tsx'), 'utf8'),
				fs.readFile(path.join(basePath, 'public/brand/sei-lockup-light.svg')),
				fs.readFile(path.join(basePath, 'public/brand/powered-by-sei-light.png')),
				fs.readFile(path.join(basePath, 'public/brand/sei-mark.png')),
				fs.readFile(path.join(basePath, 'src/app/layout.tsx'), 'utf8'),
				fs.readFile(path.join(basePath, 'src/app/favicon.ico/route.ts'), 'utf8'),
				fs.readFile(path.join(basePath, 'src/app/globals.css'), 'utf8')
			]);

			expect(baseManifest.name).toBe(baseName);
			expect(extensionManifest.name).toBe(extensionName);
			expect({ ...extensionManifest, name: baseName }).toEqual(baseManifest);
			expect(baseManifest.scripts.prebuild).toBe('biome check .');
			expect(baseManifest.scripts.dev).toBe('next dev');
			expect(baseManifest.devDependencies['@biomejs/biome']).toBeDefined();
			expect(baseManifest.dependencies['@sei-js/precompiles']).toMatch(/^\d+\.\d+\.\d+/);
			for (const requiredOverride of ['@metamask/sdk', 'sharp', 'use-sync-external-store', 'uuid', 'ws']) {
				expect(baseManifest.overrides[requiredOverride]).toBeDefined();
			}
			expect(baseManifest.overrides['@vercel/blob']).toBeUndefined();
			expect(baseManifest.scripts.deploy).toBeUndefined();
			expect(gitignore).toContain('!.env.example');
			expect(await pathExists(path.join(basePath, 'gitignore'))).toBe(false);
			expect(extensionComponent).toContain('Sei Precompiles');
			expect((await fs.readdir(path.join(basePath, 'public/brand'))).sort()).toEqual(Object.keys(BRAND_ASSET_HASHES).sort());
			expect(createHash('sha256').update(lockup).digest('hex')).toBe(BRAND_ASSET_HASHES['sei-lockup-light.svg']);
			expect(createHash('sha256').update(poweredBy).digest('hex')).toBe(BRAND_ASSET_HASHES['powered-by-sei-light.png']);
			expect(createHash('sha256').update(mark).digest('hex')).toBe(BRAND_ASSET_HASHES['sei-mark.png']);
			expect(lockup.toString('utf8')).toContain('<svg width="312" height="120"');
			expect(layout).toContain('icon: "/brand/sei-mark.png"');
			expect(layout).toContain('apple: "/brand/sei-mark.png"');
			expect(faviconRoute).toContain('"/brand/sei-mark.png"');
			expect(SEI_NEUTRAL_RAMP).toEqual(['#f5f5f7', '#f5f5f7', '#cccccc', '#999999', '#666666', '#666666', '#333333', '#333333', '#131313', '#000000']);
			for (const neutralToken of ['25', '50', '100', '200', '400', '600']) {
				expect(globals).toContain(`--color-sei-neutral-${neutralToken}:`);
				expect(globals).toContain(`--sei-neutral-${neutralToken}:`);
			}
			expect(globals).not.toContain('!important');
			expect(await pathExists(path.join(extensionPath, 'public/brand/powered-by-sei-light.png'))).toBe(true);
			expect(await pathExists(path.join(basePath, 'public/favicon.ico'))).toBe(false);
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 15_000);

	test('lists only packaged extension directories', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));

		try {
			const { stdout, stderr, exitCode } = await runCli(['list-extensions'], testDir);

			expect(exitCode).toBe(0);
			expect(stderr).toBe('');
			expect(stdout).toContain('Available extensions:');
			expect(stdout).toContain('  - precompiles');
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);

	test('packs and executes the published CLI artifact', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-packed-'));
		const consumerPath = path.join(testDir, 'consumer');
		const extractedPath = path.join(testDir, 'extracted');

		try {
			const packResult = await runProcess(['npm', 'pack', '--json', '--pack-destination', testDir], packageRoot);
			expect(packResult.exitCode).toBe(0);
			const packOutput = JSON.parse(packResult.stdout) as Array<{ filename: string }>;
			expect(packOutput).toHaveLength(1);
			const tarballPath = path.join(testDir, packOutput[0].filename);
			expect(await pathExists(tarballPath)).toBe(true);

			await fs.mkdir(extractedPath);
			const extractResult = await runProcess(['tar', '-xzf', tarballPath, '-C', extractedPath], testDir);
			expect(extractResult.exitCode).toBe(0);

			const packedPackagePath = path.join(consumerPath, 'node_modules/@sei-js/create-sei');
			await fs.mkdir(path.dirname(packedPackagePath), { recursive: true });
			await fs.rename(path.join(extractedPath, 'package'), packedPackagePath);
			const packedManifest = JSON.parse(await fs.readFile(path.join(packedPackagePath, 'package.json'), 'utf8')) as {
				dependencies: Record<string, string>;
			};
			for (const dependency of Object.keys(packedManifest.dependencies)) {
				const dependencyPath = path.join(consumerPath, 'node_modules', dependency);
				await fs.mkdir(path.dirname(dependencyPath), { recursive: true });
				await fs.symlink(path.join(packageRoot, 'node_modules', dependency), dependencyPath, 'dir');
			}

			const packedBinPath = path.join(consumerPath, 'node_modules/.bin/create-sei');
			await fs.mkdir(path.dirname(packedBinPath), { recursive: true });
			await fs.symlink('../@sei-js/create-sei/dist/main.js', packedBinPath);
			const packedCliMode = (await fs.stat(packedBinPath)).mode;
			expect(packedCliMode & 0o111).not.toBe(0);

			const baseResult = await runProcess([packedBinPath, 'app', '-n', 'packed-base'], consumerPath);
			const extensionResult = await runProcess([packedBinPath, 'app', '-n', 'packed-precompiles', '--extension', 'precompiles'], consumerPath);
			expect(baseResult.exitCode).toBe(0);
			expect(baseResult.stdout).toContain('Project setup complete! Using template next-template');
			expect(extensionResult.exitCode).toBe(0);
			expect(extensionResult.stdout).toContain('Applied extension: precompiles');
			expect((await readManifest(path.join(consumerPath, 'packed-base'))).name).toBe('packed-base');
			expect((await readManifest(path.join(consumerPath, 'packed-precompiles'))).name).toBe('packed-precompiles');
			expect(await pathExists(path.join(consumerPath, 'packed-base/.gitignore'))).toBe(true);
			expect(await fs.readFile(path.join(consumerPath, 'packed-precompiles/src/components/default/index.tsx'), 'utf8')).toContain('Sei Precompiles');
			for (const projectName of ['packed-base', 'packed-precompiles']) {
				expect((await fs.readdir(path.join(consumerPath, projectName, 'public/brand'))).sort()).toEqual(Object.keys(BRAND_ASSET_HASHES).sort());
			}
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 30_000);
});
