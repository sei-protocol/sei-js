import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import * as fs from "node:fs";
import path from "node:path";

const packageDir = path.resolve(import.meta.dir, "../..");
const cliPath = path.join(packageDir, "dist", "main.js");
const e2eDir = path.join(packageDir, "test-output-e2e");
const e2eTmpDir = path.join(e2eDir, ".tmp");
const baseProjectName = "e2e-basic";
const precompilesProjectName = "e2e-precompiles";
const e2eTmpDirEnv = `${e2eTmpDir}${path.sep}`;
const e2eSpawnEnv = {
	...process.env,
	TMPDIR: e2eTmpDirEnv,
	BUN_TMPDIR: e2eTmpDirEnv,
};

async function runCli(
	args: string[],
	cwd: string,
): Promise<{ stdout: string; stderr: string; exitCode: number }> {
	const proc = Bun.spawn(["node", cliPath, ...args], {
		cwd,
		stdout: "pipe",
		stderr: "pipe",
		env: { ...process.env, NO_COLOR: "1" },
	});

	const [stdout, stderr] = await Promise.all([
		new Response(proc.stdout).text(),
		new Response(proc.stderr).text(),
	]);
	const exitCode = await proc.exited;

	return { stdout, stderr, exitCode };
}

async function pathExists(targetPath: string): Promise<boolean> {
	return fs.promises
		.access(targetPath)
		.then(() => true)
		.catch(() => false);
}

async function ensureCliBuilt(): Promise<void> {
	if (await pathExists(cliPath)) {
		return;
	}

	const proc = Bun.spawn(["bun", "run", "build"], {
		cwd: packageDir,
		stdout: "pipe",
		stderr: "pipe",
		env: { ...process.env, NO_COLOR: "1" },
	});
	const [stdout, stderr] = await Promise.all([
		new Response(proc.stdout).text(),
		new Response(proc.stderr).text(),
	]);
	await proc.exited;
	if (proc.exitCode !== 0 || !(await pathExists(cliPath))) {
		throw new Error(
			`Failed to build create-sei CLI before e2e tests.\nstdout:\n${stdout}\nstderr:\n${stderr}`,
		);
	}
}

async function ensureProject(
	projectName: string,
	args: string[] = [],
): Promise<void> {
	const projectDir = path.join(e2eDir, projectName);
	if (await pathExists(projectDir)) {
		return;
	}

	const { exitCode, stderr } = await runCli(
		["app", "--name", projectName, ...args],
		e2eDir,
	);
	if (exitCode !== 0) {
		throw new Error(
			`Failed to create fixture project '${projectName}'.\nstderr:\n${stderr}`,
		);
	}
}

async function installDeps(projectDir: string): Promise<void> {
	const proc = Bun.spawn(["bun", "install"], {
		cwd: projectDir,
		stdout: "pipe",
		stderr: "pipe",
		env: e2eSpawnEnv,
	});
	const [stdout, stderr] = await Promise.all([
		new Response(proc.stdout).text(),
		new Response(proc.stderr).text(),
	]);
	await proc.exited;
	if (proc.exitCode !== 0) {
		throw new Error(
			`bun install failed in '${projectDir}'.\nstdout:\n${stdout}\nstderr:\n${stderr}`,
		);
	}
}

describe("create-sei CLI e2e", () => {
	beforeAll(async () => {
		await fs.promises.rm(e2eDir, { recursive: true, force: true });
		await fs.promises.mkdir(e2eDir, { recursive: true });
		await fs.promises.mkdir(e2eTmpDir, { recursive: true });
		await ensureCliBuilt();
	}, 120_000);

	afterAll(async () => {
		await fs.promises.rm(e2eDir, { recursive: true, force: true });
	}, 120_000);

	test("app --name creates a project directory", async () => {
		const projectName = "e2e-create-check";
		const { exitCode } = await runCli(["app", "--name", projectName], e2eDir);
		expect(exitCode).toBe(0);

		const projectDir = path.join(e2eDir, projectName);
		const exists = await pathExists(projectDir);
		expect(exists).toBe(true);
	});

	test("generated project has valid package.json", async () => {
		await ensureProject(baseProjectName);
		const pkgPath = path.join(e2eDir, baseProjectName, "package.json");
		const raw = await fs.promises.readFile(pkgPath, "utf-8");
		const pkg = JSON.parse(raw);

		expect(pkg.scripts).toBeDefined();
		expect(pkg.scripts.dev).toBe("next dev");
		expect(pkg.scripts.build).toBe("next build");
		expect(pkg.dependencies).toBeDefined();
		expect(pkg.dependencies.next).toBeDefined();
		expect(pkg.dependencies.react).toBeDefined();
		expect(pkg.dependencies.viem).toBeDefined();
	});

	test("generated project has expected file structure", async () => {
		await ensureProject(baseProjectName);
		const projectDir = path.join(e2eDir, baseProjectName);
		const expectedFiles = [
			"package.json",
			"tsconfig.json",
			"next.config.mjs",
			"src",
		];

		for (const file of expectedFiles) {
			const exists = await pathExists(path.join(projectDir, file));
			expect(exists).toBe(true);
		}
	});

	test("generated project can install dependencies", async () => {
		await ensureProject(baseProjectName);
		const projectDir = path.join(e2eDir, baseProjectName);
		await installDeps(projectDir);

		// node_modules should exist
		const nmExists = await pathExists(path.join(projectDir, "node_modules"));
		expect(nmExists).toBe(true);
	}, 60_000);

	test("generated project can build successfully", async () => {
		await ensureProject(baseProjectName);
		const projectDir = path.join(e2eDir, baseProjectName);
		await installDeps(projectDir);

		const proc = Bun.spawn(["bun", "run", "build"], {
			cwd: projectDir,
			stdout: "pipe",
			stderr: "pipe",
			env: e2eSpawnEnv,
		});

		const [stdout, stderr] = await Promise.all([
			new Response(proc.stdout).text(),
			new Response(proc.stderr).text(),
		]);
		await proc.exited;
		const exitCode = proc.exitCode;

		if (exitCode !== 0) {
			console.error("Build stdout:", stdout);
			console.error("Build stderr:", stderr);
		}
		expect(exitCode).toBe(0);
	}, 120_000);

	test("app --name --extension precompiles creates project with extension", async () => {
		const projectName = "e2e-precompiles-create-check";
		const { exitCode, stdout } = await runCli(
			["app", "--name", projectName, "--extension", "precompiles"],
			e2eDir,
		);
		expect(exitCode).toBe(0);
		expect(stdout).toContain("Applied extension: precompiles");

		// Extension should have overwritten package.json
		const pkgPath = path.join(e2eDir, projectName, "package.json");
		const pkg = JSON.parse(await fs.promises.readFile(pkgPath, "utf-8"));
		expect(pkg.name).toBe("template-next-create-sei-app-precompiles");
	});

	test("extension project can install dependencies", async () => {
		await ensureProject(precompilesProjectName, ["--extension", "precompiles"]);
		const projectDir = path.join(e2eDir, precompilesProjectName);
		await installDeps(projectDir);
	}, 60_000);

	test("extension project can build successfully", async () => {
		await ensureProject(precompilesProjectName, ["--extension", "precompiles"]);
		const projectDir = path.join(e2eDir, precompilesProjectName);
		await installDeps(projectDir);

		const proc = Bun.spawn(["bun", "run", "build"], {
			cwd: projectDir,
			stdout: "pipe",
			stderr: "pipe",
			env: e2eSpawnEnv,
		});

		const [stdout, stderr] = await Promise.all([
			new Response(proc.stdout).text(),
			new Response(proc.stderr).text(),
		]);
		await proc.exited;

		if (proc.exitCode !== 0) {
			console.error("Build stdout:", stdout);
			console.error("Build stderr:", stderr);
		}
		expect(proc.exitCode).toBe(0);
	}, 120_000);

	test("list-extensions command outputs available extensions", async () => {
		const { exitCode, stdout } = await runCli(["list-extensions"], e2eDir);
		expect(exitCode).toBe(0);
		expect(stdout).toContain("Available extensions:");
		expect(stdout).toContain("precompiles");
	});

	test("app with invalid name does not create directory", async () => {
		const { exitCode, stdout } = await runCli(
			["app", "--name", "INVALID NAME!"],
			e2eDir,
		);
		expect(exitCode).toBe(0);
		expect(stdout).toContain("Invalid package name");

		const exists = await pathExists(path.join(e2eDir, "INVALID NAME!"));
		expect(exists).toBe(false);
	});

	test("app with nonexistent extension falls back to base template", async () => {
		const { exitCode, stdout } = await runCli(
			["app", "--name", "e2e-fallback", "--extension", "does-not-exist"],
			e2eDir,
		);
		expect(exitCode).toBe(0);
		expect(stdout).toContain("Warning");
		expect(stdout).toContain("does-not-exist");

		// Should still have created the project from base template
		const pkgPath = path.join(e2eDir, "e2e-fallback", "package.json");
		const pkg = JSON.parse(await fs.promises.readFile(pkgPath, "utf-8"));
		expect(pkg.scripts.dev).toBe("next dev");
	});
});
