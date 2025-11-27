import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerEVMTools } from '../core/tools.js';
import { registerEVMResources } from '../core/resources.js';
import { registerEVMPrompts } from '../core/prompts.js';
import { createSeiJSDocsSearchTool } from '../mintlify/search.js';
import { getPackageInfo } from './package-info.js';
import { getSupportedNetworks } from '../core/chains.js';
import { createDocsSearchTool } from '../docs/index.js';
import { registerDockerTools } from '../docker/index.js';

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
		registerDockerTools(server);

		await createSeiJSDocsSearchTool(server);

		// Wrap docs search tool creation in try-catch to handle API rate limiting
		// TODO: move this into trieve like the sei-js docs search tool
		try {
			await createDocsSearchTool(server);
		} catch (error) {
			console.error('Warning: Failed to initialize documentation search tools (API rate limited?):', error instanceof Error ? error.message : String(error));
			console.error('Server will continue without documentation search functionality.');
		}

		console.error('Supported networks:', getSupportedNetworks().join(', '));

		return server;
	} catch (error) {
		console.error('Failed to initialize server:', error);
		process.exit(1);
	}
};
