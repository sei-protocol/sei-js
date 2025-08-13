import type { McpTransport, TransportConfig } from './types.js';
import { StdioTransport } from './stdio.js';
import { StreamableHttpTransport } from './streamable-http.js';
import { HttpSseTransport } from './http-sse.js';

export const createTransport = (config: TransportConfig): McpTransport => {
	switch (config.mode) {
		case 'stdio':
			return new StdioTransport();
		
		case 'streamable-http':
			return new StreamableHttpTransport(config.port, config.host, config.path);
		
		case 'http-sse':
			return new HttpSseTransport(config.port, config.host, config.path);
		
		default:
			throw new Error(`Unsupported transport mode: ${config.mode}`);
	}
};


