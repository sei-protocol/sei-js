import { createServer } from 'node:net';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const packageDir = join(root, 'packages/mcp-server');
const packageJson = await Bun.file(join(packageDir, 'package.json')).json();

const checkVersion = async (entrypoint: string) => {
	const child = Bun.spawn(['node', entrypoint, '--version'], {
		cwd: root,
		stdout: 'pipe',
		stderr: 'pipe'
	});
	const [exitCode, stdout, stderr] = await Promise.all([child.exited, new Response(child.stdout).text(), new Response(child.stderr).text()]);

	if (exitCode !== 0 || stdout.trim() !== packageJson.version || stderr.trim()) {
		throw new Error(
			`MCP CLI check failed for ${entrypoint}: exit=${exitCode}, stdout=${JSON.stringify(stdout.trim())}, stderr=${JSON.stringify(stderr.trim())}`
		);
	}
};

const getAvailablePort = async (): Promise<number> =>
	new Promise((resolve, reject) => {
		const server = createServer();
		server.once('error', reject);
		server.listen(0, '127.0.0.1', () => {
			const address = server.address();
			if (!address || typeof address === 'string') {
				server.close();
				reject(new Error('Could not allocate a port for the MCP HTTP startup check'));
				return;
			}

			server.close((error) => {
				if (error) reject(error);
				else resolve(address.port);
			});
		});
	});

const waitForHealth = async (child: ReturnType<typeof Bun.spawn>, port: number): Promise<boolean> => {
	const deadline = Date.now() + 10_000;
	while (Date.now() < deadline && child.exitCode === null) {
		try {
			const response = await fetch(`http://127.0.0.1:${port}/health`, { signal: AbortSignal.timeout(500) });
			if (response.ok) return true;
		} catch {
			// The listener may not be ready yet.
		}
		await Bun.sleep(50);
	}
	return false;
};

const stopChild = async (child: ReturnType<typeof Bun.spawn>): Promise<void> => {
	if (child.exitCode !== null) return;

	child.kill();
	const stopped = await Promise.race([child.exited.then(() => true), Bun.sleep(2_000).then(() => false)]);
	if (!stopped) {
		child.kill(9);
		await child.exited;
	}
};

const checkHttpStart = async (script: 'start:http' | 'start:http-sse', transport: 'streamable-http' | 'http-sse') => {
	const port = await getAvailablePort();
	const child = Bun.spawn(['bun', 'run', '--cwd', packageDir, script], {
		cwd: root,
		env: {
			...process.env,
			SERVER_TRANSPORT: 'stdio',
			SERVER_HOST: '127.0.0.1',
			SERVER_PORT: String(port),
			SERVER_PATH: '/mcp',
			WALLET_MODE: 'disabled'
		},
		stdin: 'ignore',
		stdout: 'pipe',
		stderr: 'pipe'
	});
	const stdoutPromise = new Response(child.stdout).text();
	const stderrPromise = new Response(child.stderr).text();
	const healthy = await waitForHealth(child, port);

	await stopChild(child);
	const [stdout, stderr] = await Promise.all([stdoutPromise, stderrPromise]);
	if (!healthy || !stderr.includes(`MCP Server ready (${transport} transport`)) {
		throw new Error(
			`MCP HTTP startup check failed for ${script}: exit=${child.exitCode}, healthy=${healthy}, stdout=${JSON.stringify(stdout.trim())}, stderr=${JSON.stringify(
				stderr.trim()
			)}`
		);
	}
};

await checkVersion(join(packageDir, 'bin/mcp-server.js'));
await checkVersion(join(packageDir, 'dist/index.js'));
await checkHttpStart('start:http', 'streamable-http');
await checkHttpStart('start:http-sse', 'http-sse');

console.log(`MCP CLI and HTTP startup OK: ${packageJson.version}`);
