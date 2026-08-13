import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import { promises as fs } from 'node:fs';
import path from 'node:path';

describe('Extension System', () => {
	const packageRoot = path.resolve(import.meta.dir, '..');
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
});
