import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { type AppConfigSnapshot, runWithAppConfig, snapshotConfig } from '../../core/config.js';
import { bindTransportToAppConfig } from '../server.js';
import type { McpTransport, TransportMode } from './types.js';

export class StdioTransport implements McpTransport {
	public readonly mode: TransportMode = 'stdio';
	private readonly appConfig: AppConfigSnapshot;
	private transport?: StdioServerTransport;

	constructor(appConfig?: AppConfigSnapshot) {
		this.appConfig = snapshotConfig(appConfig);
	}

	async start(server?: McpServer): Promise<void> {
		if (!server) throw new Error('STDIO transport requires an MCP server.');
		const transport = new StdioServerTransport();
		this.transport = transport;
		bindTransportToAppConfig(transport, this.appConfig);
		await runWithAppConfig(this.appConfig, () => server.connect(transport));
		console.error('MCP Server ready (stdio transport)');
	}

	async stop(): Promise<void> {
		await this.transport?.close?.();
		this.transport = undefined;
	}
}
