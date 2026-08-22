import { beforeAll, describe, expect, test } from 'bun:test';
import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const packageRoot = path.resolve(import.meta.dir, '..');
const cliPath = path.join(packageRoot, 'dist/main.js');
const brandAssetHashes = {
	'powered-by-sei-light.png': '2e34eff9ed947367797d5ab7936bad56e15bd5bde34c3d338bb051e20c1ebe0e',
	'sei-lockup-light.svg': 'dd74e3718d5aa5b45a4a681629b4012f439e5273a5587cbb9bbaad272636ea7a',
	'sei-mark.png': '659b876c0cd7b7d12d284ddd541c9900fb86abdb88c0d39c7561bdae9b6bffdf'
} as const;

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

async function runProcess(cmd: string[], cwd: string): Promise<ProcessResult> {
	const subprocess = Bun.spawn({
		cmd,
		cwd,
		stdout: 'pipe',
		stderr: 'pipe'
	});

	const [stdout, stderr, exitCode] = await Promise.all([new Response(subprocess.stdout).text(), new Response(subprocess.stderr).text(), subprocess.exited]);

	return { stdout, stderr, exitCode };
}

async function runCli(args: string[], cwd: string, entrypoint = cliPath): Promise<ProcessResult> {
	return runProcess([process.execPath, entrypoint, ...args], cwd);
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

	test('returns a nonzero status and removes partial output when template copying fails', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const templatePath = path.join(packageRoot, 'dist/templates/next-template');
		const unavailableTemplatePath = `${templatePath}-unavailable`;

		await fs.rename(templatePath, unavailableTemplatePath);
		try {
			const { stdout, stderr, exitCode } = await runCli(['app', '-n', 'copy-failure-app'], testDir);

			expect(exitCode).toBe(1);
			expect(stderr).toContain('ENOENT');
			expect(stdout).not.toContain('Project setup complete!');
			expect(await pathExists(path.join(testDir, 'copy-failure-app'))).toBe(false);
		} finally {
			await fs.rename(unavailableTemplatePath, templatePath);
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

			const [baseManifest, extensionManifest, gitignore, extensionComponent, lockup, poweredBy, mark, layout, providers, globals] = await Promise.all([
				readManifest(basePath),
				readManifest(extensionPath),
				fs.readFile(path.join(basePath, '.gitignore'), 'utf8'),
				fs.readFile(path.join(extensionPath, 'src/components/default/index.tsx'), 'utf8'),
				fs.readFile(path.join(basePath, 'public/brand/sei-lockup-light.svg')),
				fs.readFile(path.join(basePath, 'public/brand/powered-by-sei-light.png')),
				fs.readFile(path.join(basePath, 'public/brand/sei-mark.png')),
				fs.readFile(path.join(basePath, 'src/app/layout.tsx'), 'utf8'),
				fs.readFile(path.join(basePath, 'src/components/providers/providers.tsx'), 'utf8'),
				fs.readFile(path.join(basePath, 'src/app/globals.css'), 'utf8')
			]);

			expect(baseManifest.name).toBe(baseName);
			expect(extensionManifest.name).toBe(extensionName);
			expect({ ...extensionManifest, name: baseName }).toEqual(baseManifest);
			expect(baseManifest.scripts.prebuild).toBe('biome check .');
			expect(baseManifest.devDependencies['@biomejs/biome']).toBe('2.5.8');
			expect(baseManifest.dependencies['@sei-js/precompiles']).toBe('3.0.0');
			expect(baseManifest.dependencies.next).toBe('15.5.21');
			expect(baseManifest.dependencies.react).toBe('19.1.2');
			expect(baseManifest.dependencies['react-dom']).toBe('19.1.2');
			expect(baseManifest.dependencies['@rainbow-me/rainbowkit']).toBe('2.2.8');
			expect(baseManifest.dependencies.wagmi).toBe('2.16.9');
			expect(baseManifest.dependencies.viem).toBe('2.55.19');
			expect(baseManifest.overrides['@metamask/sdk']).toBe('0.33.1');
			expect(baseManifest.overrides.sharp).toBe('0.35.3');
			expect(baseManifest.overrides['use-sync-external-store']).toBe('1.6.0');
			expect(baseManifest.scripts.deploy).toBeUndefined();
			expect(gitignore).toContain('!.env.example');
			expect(await pathExists(path.join(basePath, 'gitignore'))).toBe(false);
			expect(extensionComponent).toContain('Sei Precompiles');
			expect((await fs.readdir(path.join(basePath, 'public/brand'))).sort()).toEqual(Object.keys(brandAssetHashes).sort());
			expect(createHash('sha256').update(lockup).digest('hex')).toBe(brandAssetHashes['sei-lockup-light.svg']);
			expect(createHash('sha256').update(poweredBy).digest('hex')).toBe(brandAssetHashes['powered-by-sei-light.png']);
			expect(createHash('sha256').update(mark).digest('hex')).toBe(brandAssetHashes['sei-mark.png']);
			expect(lockup.toString('utf8')).toContain('<svg width="312" height="120"');
			expect(layout).toContain('icon: "/brand/sei-mark.png"');
			expect(layout).toContain('apple: "/brand/sei-mark.png"');
			const grayThemeSource = providers.match(/gray:\s*\[([\s\S]*?)\]/)?.[1] || '';
			expect([...grayThemeSource.matchAll(/"(#[0-9a-f]+)"/g)].map((match) => match[1])).toEqual([
				'#f5f5f7',
				'#f5f5f7',
				'#cccccc',
				'#999999',
				'#666666',
				'#666666',
				'#333333',
				'#333333',
				'#131313',
				'#000000'
			]);
			expect(providers).toContain('primaryColor: "seiMaroon"');
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

		try {
			const packResult = await runProcess(['npm', 'pack', '--json', '--pack-destination', testDir], packageRoot);
			expect(packResult.exitCode).toBe(0);
			const packOutput = JSON.parse(packResult.stdout) as Array<{ filename: string }>;
			expect(packOutput).toHaveLength(1);
			const tarballPath = path.join(testDir, packOutput[0].filename);
			expect(await pathExists(tarballPath)).toBe(true);

			await fs.mkdir(consumerPath);
			await fs.writeFile(
				path.join(consumerPath, 'package.json'),
				`${JSON.stringify({ private: true, dependencies: { '@sei-js/create-sei': `file:${tarballPath}` } }, null, '\t')}\n`
			);

			const installResult = await runProcess(['npm', 'install', '--ignore-scripts', '--no-audit', '--no-fund', '--package-lock=false'], consumerPath);
			expect(installResult.exitCode).toBe(0);

			const packedBinPath = path.join(consumerPath, 'node_modules/.bin/create-sei');
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
				expect((await fs.readdir(path.join(consumerPath, projectName, 'public/brand'))).sort()).toEqual(Object.keys(brandAssetHashes).sort());
			}
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 60_000);
});
