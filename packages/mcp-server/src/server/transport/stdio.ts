import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { type AppConfig, runWithAppConfig, snapshotConfig, wrapWithAppConfig } from '../../core/config.js';
import type { McpTransport, TransportMode } from './types.js';

export class StdioTransport implements McpTransport {
	public readonly mode: TransportMode = 'stdio';
	private readonly appConfig: AppConfig;
	private transport?: StdioServerTransport;

	constructor(appConfig?: AppConfig) {
		this.appConfig = appConfig ?? snapshotConfig();
	}

	async start(server?: McpServer): Promise<void> {
		if (!server) throw new Error('STDIO transport requires an MCP server.');
		const transport = new StdioServerTransport();
		this.transport = transport;
		await runWithAppConfig(this.appConfig, () => server.connect(transport));
		if (transport.onmessage) {
			transport.onmessage = wrapWithAppConfig(this.appConfig, transport.onmessage);
		}
		console.error('MCP Server ready (stdio transport)');
	}

	async stop(): Promise<void> {
		await this.transport?.close?.();
		this.transport = undefined;
	}
}
