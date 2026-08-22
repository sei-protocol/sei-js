import { realpathSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { isWalletEnabled } from './core/config.js';
import { sanitizeError } from './core/errors.js';
import { parseArgs } from './server/args.js';
import { getServer } from './server/server.js';
import { createTransport } from './server/transport/index.js';
import { collectOperationErrors, throwCollectedErrors } from './server/transport/lifecycle.js';
import type { McpTransport } from './server/transport/types.js';

export interface RunningMcpServer {
	stop(): Promise<void>;
}

export function registerShutdownHandlers(stop: () => Promise<void>): () => void {
	let shuttingDown = false;

	const shutdown = (signal: NodeJS.Signals) => {
		if (shuttingDown) return;
		shuttingDown = true;
		console.error(`Received ${signal}; shutting down MCP server...`);
		void stop().catch((error) => {
			console.error('Error stopping MCP server:', sanitizeError(error));
			process.exitCode = 1;
		});
	};

	const onSigint = () => shutdown('SIGINT');
	const onSigterm = () => shutdown('SIGTERM');
	process.once('SIGINT', onSigint);
	process.once('SIGTERM', onSigterm);

	return () => {
		process.off('SIGINT', onSigint);
		process.off('SIGTERM', onSigterm);
	};
}

export async function startMcpServer(): Promise<RunningMcpServer> {
	const config = parseArgs();
	const server = config.mode === 'stdio' ? await getServer() : undefined;
	let transport: McpTransport | undefined;

	try {
		transport = createTransport(config);
		await transport.start(server);
	} catch (error) {
		const cleanupErrors = await collectOperationErrors([() => transport?.stop(), () => server?.close()]);
		if (cleanupErrors.length > 0) {
			throw new AggregateError([error, ...cleanupErrors], sanitizeError(error));
		}
		throw error;
	}

	if (!isWalletEnabled()) console.error('Wallet functionality is disabled. Signing and broadcasting tools are not available.');

	let stopPromise: Promise<void> | undefined;
	let removeShutdownHandlers = () => {};
	const stop = (): Promise<void> => {
		if (!stopPromise) {
			removeShutdownHandlers();
			stopPromise = (async () => {
				const errors = await collectOperationErrors([() => transport.stop(), () => server?.close()]);
				throwCollectedErrors(errors, 'Failed to stop all MCP server resources.');
			})();
		}
		return stopPromise;
	};

	removeShutdownHandlers = registerShutdownHandlers(stop);
	return { stop };
}

export const main = async (): Promise<RunningMcpServer | undefined> => {
	try {
		return await startMcpServer();
	} catch (error) {
		console.error('Error starting MCP server:', sanitizeError(error));
		throw error;
	}
};

export const runCli = async (): Promise<RunningMcpServer | undefined> => {
	try {
		return await main();
	} catch {
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
	await runCli();
}
