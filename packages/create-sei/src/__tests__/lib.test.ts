import { afterEach, beforeEach, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import path from "node:path";
import {
	isValidDirectoryName,
	listExtensions,
	runWizard,
	validateOptions,
} from "../lib.js";

const packageDir = path.resolve(import.meta.dir, "../..");

// ─── Unit Tests ──────────────────────────────────────────────────────────────

describe("isValidDirectoryName", () => {
	test("accepts simple lowercase names", () => {
		expect(isValidDirectoryName("my-app")).toBe(true);
		expect(isValidDirectoryName("my-dapp")).toBe(true);
		expect(isValidDirectoryName("test123")).toBe(true);
	});

	test("rejects scoped npm names (contain slash which is illegal)", () => {
		expect(isValidDirectoryName("@sei/my-app")).toBe(false);
		expect(isValidDirectoryName("@scope/package-name")).toBe(false);
	});

	test("accepts names with dots and underscores", () => {
		expect(isValidDirectoryName("my.app")).toBe(true);
		expect(isValidDirectoryName("my_app")).toBe(true);
	});

	test("rejects empty string", () => {
		expect(isValidDirectoryName("")).toBe(false);
	});

	test("rejects names with illegal characters", () => {
		expect(isValidDirectoryName("my<app")).toBe(false);
		expect(isValidDirectoryName("my>app")).toBe(false);
		expect(isValidDirectoryName('my"app')).toBe(false);
		expect(isValidDirectoryName("my|app")).toBe(false);
		expect(isValidDirectoryName("my?app")).toBe(false);
		expect(isValidDirectoryName("my*app")).toBe(false);
	});

	test("rejects Windows reserved names", () => {
		expect(isValidDirectoryName("con")).toBe(false);
		expect(isValidDirectoryName("prn")).toBe(false);
		expect(isValidDirectoryName("aux")).toBe(false);
		expect(isValidDirectoryName("nul")).toBe(false);
		expect(isValidDirectoryName("com1")).toBe(false);
		expect(isValidDirectoryName("lpt1")).toBe(false);
		expect(isValidDirectoryName("CON")).toBe(false);
		expect(isValidDirectoryName("PRN")).toBe(false);
	});

	test("rejects names with trailing dots or spaces", () => {
		expect(isValidDirectoryName("myapp.")).toBe(false);
		expect(isValidDirectoryName("myapp ")).toBe(false);
		expect(isValidDirectoryName("myapp..")).toBe(false);
	});

	test("rejects names that are not valid npm package names", () => {
		expect(isValidDirectoryName("MyApp")).toBe(false);
		expect(isValidDirectoryName("MY-APP")).toBe(false);
		expect(isValidDirectoryName(".hidden")).toBe(false);
	});

	test("accepts hyphen-prefixed names (valid per npm regex)", () => {
		expect(isValidDirectoryName("-startswithdash")).toBe(true);
	});
});

describe("validateOptions", () => {
	test("returns true when no name is provided", () => {
		expect(validateOptions({})).toBe(true);
	});

	test("returns true for valid name", () => {
		expect(validateOptions({ name: "my-app" })).toBe(true);
	});

	test("returns false for invalid name", () => {
		expect(validateOptions({ name: "INVALID NAME!" })).toBe(false);
	});

	test("returns true when only extension is provided", () => {
		expect(validateOptions({ extension: "precompiles" })).toBe(true);
	});

	test("returns false for Windows reserved name", () => {
		expect(validateOptions({ name: "con" })).toBe(false);
	});
});

// ─── Integration Tests ───────────────────────────────────────────────────────

describe("listExtensions", () => {
	test("prints available extensions without throwing", async () => {
		const logs: string[] = [];
		const originalLog = console.log;
		console.log = (...args: unknown[]) => logs.push(args.join(" "));

		try {
			await listExtensions(packageDir);
		} finally {
			console.log = originalLog;
		}

		const output = logs.join("\n");
		expect(output).toContain("Available extensions:");
		expect(output).toContain("precompiles");
	});

	test("prints message when extensions directory does not exist", async () => {
		const logs: string[] = [];
		const originalLog = console.log;
		console.log = (...args: unknown[]) => logs.push(args.join(" "));

		try {
			await listExtensions("/nonexistent/path");
		} finally {
			console.log = originalLog;
		}

		expect(logs.join("\n")).toContain("No extensions directory found.");
	});

	test("prints message when extensions directory is empty", async () => {
		const emptyDir = path.join(packageDir, "test-output-empty-ext");
		const extDir = path.join(emptyDir, "extensions");
		await fs.promises.mkdir(extDir, { recursive: true });

		const logs: string[] = [];
		const originalLog = console.log;
		console.log = (...args: unknown[]) => logs.push(args.join(" "));

		try {
			await listExtensions(emptyDir);
		} finally {
			console.log = originalLog;
			await fs.promises.rm(emptyDir, { recursive: true, force: true });
		}

		expect(logs.join("\n")).toContain("No extensions available.");
	});
});

describe("runWizard", () => {
	const testDir = path.join(packageDir, "test-output-integration");

	beforeEach(async () => {
		await fs.promises.rm(testDir, { recursive: true, force: true });
		await fs.promises.mkdir(testDir, { recursive: true });
	});

	afterEach(async () => {
		await fs.promises.rm(testDir, { recursive: true, force: true });
	});

	test("creates project from base template with --name", async () => {
		const originalCwd = process.cwd;
		process.cwd = () => testDir;

		try {
			await runWizard({ name: "test-app" }, packageDir);
		} finally {
			process.cwd = originalCwd;
		}

		const projectDir = path.join(testDir, "test-app");
		const exists = await fs.promises
			.access(projectDir)
			.then(() => true)
			.catch(() => false);
		expect(exists).toBe(true);

		// Verify key template files were copied
		const packageJson = JSON.parse(
			await fs.promises.readFile(
				path.join(projectDir, "package.json"),
				"utf-8",
			),
		);
		expect(packageJson).toBeDefined();
		expect(packageJson.scripts).toBeDefined();
		expect(packageJson.scripts.dev).toBe("next dev");
		expect(packageJson.scripts.build).toBe("next build");
	});

	test("applies extension overlay when --extension is provided", async () => {
		const originalCwd = process.cwd;
		process.cwd = () => testDir;

		try {
			await runWizard(
				{ name: "test-ext-app", extension: "precompiles" },
				packageDir,
			);
		} finally {
			process.cwd = originalCwd;
		}

		const projectDir = path.join(testDir, "test-ext-app");

		// Extension's package.json should overwrite the base
		const packageJson = JSON.parse(
			await fs.promises.readFile(
				path.join(projectDir, "package.json"),
				"utf-8",
			),
		);
		expect(packageJson.name).toBe("template-next-create-sei-app-precompiles");
	});

	test("handles non-existent extension gracefully", async () => {
		const originalCwd = process.cwd;
		process.cwd = () => testDir;

		const logs: string[] = [];
		const originalLog = console.log;
		console.log = (...args: unknown[]) => logs.push(args.join(" "));

		try {
			await runWizard(
				{ name: "test-fallback-app", extension: "nonexistent" },
				packageDir,
			);
		} finally {
			process.cwd = originalCwd;
			console.log = originalLog;
		}

		// Project should still be created from base template
		const projectDir = path.join(testDir, "test-fallback-app");
		const exists = await fs.promises
			.access(projectDir)
			.then(() => true)
			.catch(() => false);
		expect(exists).toBe(true);

		// Should warn about missing extension
		expect(logs.some((l) => l.includes("Warning"))).toBe(true);
		expect(logs.some((l) => l.includes("nonexistent"))).toBe(true);
	});

	test("does not create project when name is invalid", async () => {
		const originalCwd = process.cwd;
		process.cwd = () => testDir;

		try {
			await runWizard({ name: "INVALID NAME!" }, packageDir);
		} finally {
			process.cwd = originalCwd;
		}

		// No directory should have been created
		const entries = await fs.promises.readdir(testDir);
		expect(entries.length).toBe(0);
	});

	test("copies expected directory structure", async () => {
		const originalCwd = process.cwd;
		process.cwd = () => testDir;

		try {
			await runWizard({ name: "test-structure" }, packageDir);
		} finally {
			process.cwd = originalCwd;
		}

		const projectDir = path.join(testDir, "test-structure");

		// Check key Next.js project files exist
		const expectedFiles = [
			"package.json",
			"tsconfig.json",
			"next.config.mjs",
			"src",
		];

		for (const file of expectedFiles) {
			const filePath = path.join(projectDir, file);
			const exists = await fs.promises
				.access(filePath)
				.then(() => true)
				.catch(() => false);
			expect(exists).toBe(true);
		}
	});
});
