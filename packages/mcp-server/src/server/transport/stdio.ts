import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { McpTransport, TransportMode } from './types.js';

export class StdioTransport implements McpTransport {
	public readonly mode: TransportMode = 'stdio';
	private transport?: StdioServerTransport;

	async start(server: McpServer): Promise<void> {
		this.transport = new StdioServerTransport();
		await server.connect(this.transport);
		console.error('MCP Server ready (stdio transport)');
	}

	async stop(): Promise<void> {
		this.transport = undefined;
	}
}
