import { getServer } from './server/server.js';
import { createTransport } from './server/transport/index.js';
import { isWalletEnabled } from './core/config.js';
import { parseArgs } from './server/args.js';

const main = async () => {
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

main().catch((error) => {
	console.error('Fatal error in main():', error);
	process.exit(1);
});
