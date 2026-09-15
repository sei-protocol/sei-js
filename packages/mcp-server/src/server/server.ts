import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getSupportedNetworks } from '../core/chains.js';
import { type AppConfigSnapshot, runWithAppConfig, snapshotConfig, wrapWithAppConfig } from '../core/config.js';
import { sanitizeError } from '../core/errors.js';
import { registerEVMPrompts } from '../core/prompts.js';
import { registerEVMResources } from '../core/resources.js';
import { registerEVMTools } from '../core/tools.js';
import { createDocsSearchTool } from '../docs/index.js';
import { getPackageInfo } from './package-info.js';

const SCOPED_REGISTRATION_METHODS = new Set<PropertyKey>(['tool', 'resource', 'prompt', 'registerTool', 'registerResource', 'registerPrompt']);

function withScopedCallbacks(server: McpServer, appConfig: AppConfigSnapshot): McpServer {
	return new Proxy(server, {
		get(target, property) {
			const value = Reflect.get(target, property, target);
			if (typeof value !== 'function') return value;
			if (!SCOPED_REGISTRATION_METHODS.has(property)) return value.bind(target);

			return (...args: unknown[]) => {
				let callbackIndex = args.length - 1;
				while (callbackIndex >= 0 && typeof args[callbackIndex] !== 'function') callbackIndex--;
				if (callbackIndex < 0) throw new Error(`MCP ${String(property)} registration requires a callback.`);
				args[callbackIndex] = wrapWithAppConfig(appConfig, args[callbackIndex] as (...callbackArgs: unknown[]) => unknown);
				return Reflect.apply(value, target, args);
			};
		}
	});
}

export const getServer = async (appConfig: AppConfigSnapshot) => {
	const config = snapshotConfig(appConfig);
	return runWithAppConfig(config, async () => {
		try {
			const packageInfo = getPackageInfo();
			const server = new McpServer({
				name: packageInfo.name,
				version: packageInfo.version
			});
			const scopedServer = withScopedCallbacks(server, config);

			// Registration stays inside this scope for wallet-gated policy, and
			// every request callback is permanently bound to the same snapshot.
			registerEVMResources(scopedServer);
			registerEVMTools(scopedServer);
			registerEVMPrompts(scopedServer);
			createDocsSearchTool(scopedServer, packageInfo);

			console.error('Supported networks:', getSupportedNetworks().join(', '));

			return server;
		} catch (error) {
			console.error('Failed to initialize server:', sanitizeError(error));
			throw error;
		}
	});
};
