import { describe, test, expect, beforeEach } from 'bun:test';
import { registerEVMTools } from '../../../core/tools.js';

// Mock the MCP server
class MockServer {
  tools: { name: string; description: string; schema: any; handler: Function }[] = [];
  tool(name: string, description: string, schema: any, handler: Function) {
    this.tools.push({ name, description, schema, handler });
  }
}

describe('registerEVMTools', () => {
  let server: MockServer;

  beforeEach(() => {
    server = new MockServer();
  });

  test('registers all expected tools', () => {
    registerEVMTools(server as any);
    // Check that some key tools are registered
    const toolNames = server.tools.map(t => t.name);
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
    registerEVMTools(server as any);
    server.tools.forEach(tool => {
      expect(typeof tool.handler).toBe('function');
    });
  });
});
