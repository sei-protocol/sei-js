import { beforeEach, describe, expect, test } from '@jest/globals';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerEVMTools } from '../../../core/tools.js';

// Define types for the tools
type ToolSchema = Record<string, unknown>;
type ToolHandler = (...args: unknown[]) => Promise<unknown>;
type Tool = {
	name: string;
	description: string;
	schema: ToolSchema;
	handler: ToolHandler;
};

// Mock the MCP server
class MockServer {
	tools: Tool[] = [];
	tool(name: string, description: string, schema: ToolSchema, handler: ToolHandler): void {
		this.tools.push({ name, description, schema, handler });
	}
}

describe('registerEVMTools', () => {
	let server: MockServer;

	beforeEach(() => {
		server = new MockServer();
	});

	test('registers all expected tools', () => {
		// Cast to unknown first, then to McpServer to avoid direct 'any' usage
		registerEVMTools(server as unknown as McpServer);
		// Check that some key tools are registered
		const toolNames = server.tools.map((t) => t.name);
		expect(toolNames).toContain('get_chain_info');
		expect(toolNames).toContain('get_supported_networks');
		expect(toolNames).toContain('get_block_by_number');
		expect(toolNames).toContain('get_balance');
		expect(toolNames).toContain('transfer_sei');
		expect(toolNames).toContain('transfer_erc20');
		expect(toolNames).toContain('approve_token_spending');
		expect(toolNames).toContain('transfer_nft');
		expect(toolNames).toContain('get_token_info');
		expect(toolNames).toContain('get_nft_info');
		expect(toolNames).toContain('get_erc1155_token_uri');
		expect(toolNames).toContain('get_nft_balance');
		expect(toolNames).toContain('get_erc1155_balance');
		expect(toolNames).toContain('get_address_from_private_key');
	});

	test('each registered tool has a handler function', () => {
		// Cast to unknown first, then to McpServer to avoid direct 'any' usage
		registerEVMTools(server as unknown as McpServer);

		// Using for...of instead of forEach for better performance (Biome rule)
		for (const tool of server.tools) {
			expect(typeof tool.handler).toBe('function');
		}
	});
});
