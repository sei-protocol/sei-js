import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';
import { getSupportedNetworks } from '../core/chains.js';
import { type AppConfigSnapshot, runWithAppConfig, snapshotConfig, wrapWithAppConfig } from '../core/config.js';
import { sanitizeError } from '../core/errors.js';
import { registerEVMPrompts } from '../core/prompts.js';
import { registerEVMResources } from '../core/resources.js';
import { registerEVMTools } from '../core/tools.js';
import { createDocsSearchTool } from '../docs/index.js';
import { getPackageInfo } from './package-info.js';

function bindTransportToAppConfig(transport: Transport, appConfig: AppConfigSnapshot): void {
	const start = transport.start.bind(transport);
	let bound = false;
	transport.start = async () => {
		if (!bound && transport.onmessage) {
			bound = true;
			transport.onmessage = wrapWithAppConfig(appConfig, transport.onmessage);
		}
		return start();
	};
}

function bindServerToAppConfig(server: McpServer, appConfig: AppConfigSnapshot): McpServer {
	const connect = server.connect.bind(server);
	server.connect = (async (...args: Parameters<McpServer['connect']>) => {
		const [transport] = args;
		bindTransportToAppConfig(transport, appConfig);
		return connect(...args);
	}) as typeof server.connect;
	return server;
}

export const getServer = async (appConfig: AppConfigSnapshot = snapshotConfig()) => {
	const config = snapshotConfig(appConfig);
	return runWithAppConfig(config, async () => {
		try {
			const packageInfo = getPackageInfo();
			const server = new McpServer({
				name: packageInfo.name,
				version: packageInfo.version
			});

			registerEVMResources(server);
			registerEVMTools(server);
			registerEVMPrompts(server);
			createDocsSearchTool(server, packageInfo);

			console.error('Supported networks:', getSupportedNetworks().join(', '));

			return bindServerToAppConfig(server, config);
		} catch (error) {
			console.error('Failed to initialize server:', sanitizeError(error));
			throw error;
		}
	});
};
