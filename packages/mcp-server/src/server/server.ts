import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getSupportedNetworks } from '../core/chains.js';
import { type AppConfig, config as processConfig, runWithAppConfig } from '../core/config.js';
import { sanitizeError } from '../core/errors.js';
import { registerEVMPrompts } from '../core/prompts.js';
import { registerEVMResources } from '../core/resources.js';
import { registerEVMTools } from '../core/tools.js';
import { createDocsSearchTool } from '../docs/index.js';
import { getPackageInfo } from './package-info.js';

export const getServer = async (appConfig: AppConfig = processConfig) => {
	return runWithAppConfig(appConfig, async () => {
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
			console.error('Failed to initialize server:', sanitizeError(error));
			throw error;
		}
	});
};
