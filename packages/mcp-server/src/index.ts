import { realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { isWalletEnabled } from './core/config.js';
import { parseArgs } from './server/args.js';
import { getServer } from './server/server.js';
import { createTransport } from './server/transport/index.js';

export const main = async () => {
	try {
		const config = parseArgs();
		const server = await getServer();
		const transport = createTransport(config);
		await transport.start(server);

		if (!isWalletEnabled()) console.error('Wallet functionality is disabled. Wallet-dependent tools will not be available.');
	} catch (error) {
		console.error('Error starting MCP server:', error);
		process.exit(1);
	}
};

export const isDirectExecution = (moduleUrl: string, entrypoint = process.argv[1]): boolean => {
	if (!entrypoint) return false;
	try {
		return moduleUrl === pathToFileURL(realpathSync(entrypoint)).href;
	} catch {
		return false;
	}
};

if (isDirectExecution(import.meta.url)) {
	await main();
}
