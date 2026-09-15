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

const transportConfigs = new WeakMap<Transport, AppConfigSnapshot>();

function findPropertyDescriptor(target: object, property: PropertyKey): PropertyDescriptor | undefined {
	let current: object | null = target;
	while (current) {
		const descriptor = Object.getOwnPropertyDescriptor(current, property);
		if (descriptor) return descriptor;
		current = Object.getPrototypeOf(current);
	}
	return undefined;
}

export function bindTransportToAppConfig(transport: Transport, appConfig: AppConfigSnapshot): void {
	const existingConfig = transportConfigs.get(transport);
	if (existingConfig) {
		if (existingConfig !== appConfig) throw new Error('MCP transport is already bound to a different AppConfig snapshot.');
		return;
	}

	const initialHandler = transport.onmessage;
	const descriptor = findPropertyDescriptor(transport, 'onmessage');
	let boundHandler: Transport['onmessage'];
	Object.defineProperty(transport, 'onmessage', {
		configurable: true,
		enumerable: true,
		get: () => (descriptor?.get ? descriptor.get.call(transport) : boundHandler),
		set: (handler: Transport['onmessage']) => {
			const wrappedHandler = handler ? wrapWithAppConfig(appConfig, handler) : undefined;
			if (descriptor?.set) descriptor.set.call(transport, wrappedHandler);
			else boundHandler = wrappedHandler;
		}
	});
	transportConfigs.set(transport, appConfig);
	if (initialHandler) transport.onmessage = initialHandler;
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
