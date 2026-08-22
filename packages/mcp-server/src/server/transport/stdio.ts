import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import type { McpTransport, TransportMode } from './types.js';

export class StdioTransport implements McpTransport {
	public readonly mode: TransportMode = 'stdio';
	private transport?: StdioServerTransport;

	async start(server?: McpServer): Promise<void> {
		if (!server) throw new Error('STDIO transport requires an MCP server.');
		this.transport = new StdioServerTransport();
		await server.connect(this.transport);
		console.error('MCP Server ready (stdio transport)');
	}

	async stop(): Promise<void> {
		await this.transport?.close?.();
		this.transport = undefined;
	}
}
