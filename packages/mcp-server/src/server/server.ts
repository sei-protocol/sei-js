import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerEVMTools } from '../core/tools.js';
import { registerEVMResources } from '../core/resources.js';
import { registerEVMPrompts } from '../core/prompts.js';
import { createDocsSearchTool } from '../docs/index.js';
import { getPackageInfo } from './package-info.js';
import { getSupportedNetworks } from '../core/chains.js';

export const getServer = async () => {
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

		return server;
	} catch (error) {
		console.error('Failed to initialize server:', error);
		process.exit(1);
	}
};
