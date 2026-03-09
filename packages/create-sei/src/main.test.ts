import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import { promises as fs } from "node:fs";
import path from "node:path";

describe("Extension System", () => {
	const packageDir = path.resolve(import.meta.dir, "..");
	const testDir = path.join(packageDir, "test-output");
	const extensionsDir = path.join(packageDir, "extensions");

	beforeEach(async () => {
		// Clean up test directory
		try {
			await fs.rm(testDir, { recursive: true, force: true });
		} catch {
			// Directory might not exist
		}
		await fs.mkdir(testDir, { recursive: true });
	});

	afterEach(async () => {
		// Clean up test directory
		try {
			await fs.rm(testDir, { recursive: true, force: true });
		} catch {
			// Directory might not exist
		}
	});

	test("should list available extensions", async () => {
		const extensionExists = await fs
			.access(path.join(extensionsDir, "precompiles"))
			.then(() => true)
			.catch(() => false);

		expect(extensionExists).toBe(true);

		const extensionFiles = await fs.readdir(extensionsDir);
		expect(extensionFiles).toContain("precompiles");
	});
});
