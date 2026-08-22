import { HttpSseTransport } from './http-sse.js';
import { StdioTransport } from './stdio.js';
import { StreamableHttpTransport } from './streamable-http.js';
import type { McpTransport, TransportConfig } from './types.js';

export const createTransport = (config: TransportConfig): McpTransport => {
	switch (config.mode) {
		case 'stdio':
			return new StdioTransport();

		case 'streamable-http':
			return new StreamableHttpTransport({
				port: config.port,
				host: config.host,
				path: config.path,
				walletMode: config.walletMode,
				maxActiveRequests: config.maxStreamableRequests
			});

		case 'http-sse':
			return new HttpSseTransport({
				port: config.port,
				host: config.host,
				path: config.path,
				walletMode: config.walletMode,
				maxSessions: config.maxSseSessions
			});

		default:
			throw new Error(`Unsupported transport mode: ${config.mode}`);
	}
};
