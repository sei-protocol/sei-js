import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const packageDir = join(root, 'packages/mcp-server');
const packageJson = await Bun.file(join(packageDir, 'package.json')).json();

const checkVersion = async (entrypoint: string) => {
	const process = Bun.spawn(['node', entrypoint, '--version'], {
		cwd: root,
		stdout: 'pipe',
		stderr: 'pipe'
	});
	const [exitCode, stdout, stderr] = await Promise.all([process.exited, new Response(process.stdout).text(), new Response(process.stderr).text()]);

	if (exitCode !== 0 || stdout.trim() !== packageJson.version || stderr.trim()) {
		throw new Error(
			`MCP CLI check failed for ${entrypoint}: exit=${exitCode}, stdout=${JSON.stringify(stdout.trim())}, stderr=${JSON.stringify(stderr.trim())}`
		);
	}
};

await checkVersion(join(packageDir, 'bin/mcp-server.js'));
await checkVersion(join(packageDir, 'dist/index.js'));

console.log(`MCP CLI version OK: ${packageJson.version}`);
