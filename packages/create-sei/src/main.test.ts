import { afterEach, beforeAll, beforeEach, describe, expect, test } from 'bun:test';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const packageRoot = path.resolve(import.meta.dir, '..');
const cliPath = path.join(packageRoot, 'dist/main.js');

async function runCli(args: string[], cwd: string) {
	const subprocess = Bun.spawn({
		cmd: [process.execPath, cliPath, ...args],
		cwd,
		stdout: 'pipe',
		stderr: 'pipe'
	});

	const [stdout, stderr, exitCode] = await Promise.all([new Response(subprocess.stdout).text(), new Response(subprocess.stderr).text(), subprocess.exited]);

	return { stdout, stderr, exitCode };
}

describe('CLI', () => {
	beforeAll(async () => {
		const subprocess = Bun.spawn({
			cmd: [process.execPath, 'run', 'build'],
			cwd: packageRoot,
			stdout: 'pipe',
			stderr: 'pipe'
		});

		const [stdout, stderr, exitCode] = await Promise.all([new Response(subprocess.stdout).text(), new Response(subprocess.stderr).text(), subprocess.exited]);

		if (exitCode !== 0) {
			throw new Error(`Failed to build create-sei before CLI tests:\n${stderr || stdout}`);
		}
	}, 20_000);

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

	test('scaffolds an app with the short name option', async () => {
		const testDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-sei-cli-'));
		const projectName = 'valid-name';

		try {
			const { stdout, exitCode } = await runCli(['app', '-n', projectName], testDir);

			expect(exitCode).toBe(0);
			expect(stdout).toContain('Project setup complete!');
			expect(await fs.readdir(path.join(testDir, projectName))).toContain('package.json');
		} finally {
			await fs.rm(testDir, { recursive: true, force: true });
		}
	}, 10_000);
});

describe('Extension System', () => {
	const testDir = path.join(packageRoot, 'test-output');
	const extensionsDir = path.join(packageRoot, 'extensions');

	beforeEach(async () => {
		// Clean up test directory
		try {
			await fs.rm(testDir, { recursive: true, force: true });
		} catch (e) {
			// Directory might not exist
		}
		await fs.mkdir(testDir, { recursive: true });
	});

	afterEach(async () => {
		// Clean up test directory
		try {
			await fs.rm(testDir, { recursive: true, force: true });
		} catch (e) {
			// Directory might not exist
		}
	});

	test('should list available extensions', async () => {
		const extensionExists = await fs
			.access(path.join(extensionsDir, 'precompiles'))
			.then(() => true)
			.catch(() => false);

		expect(extensionExists).toBe(true);

		const extensionFiles = await fs.readdir(extensionsDir);
		expect(extensionFiles).toContain('precompiles');
	});

	test('should scaffold the new precompiles major', async () => {
		const [templatePackage, extensionPackage] = await Promise.all([
			fs.readFile(path.join(packageRoot, 'templates/next-template/package.json'), 'utf8').then((contents) => JSON.parse(contents)),
			fs.readFile(path.join(extensionsDir, 'precompiles/package.json'), 'utf8').then((contents) => JSON.parse(contents))
		]);

		expect(templatePackage.dependencies['@sei-js/precompiles']).toBe('^3.0.0');
		expect(extensionPackage.dependencies['@sei-js/precompiles']).toBe('^3.0.0');
	});
});
