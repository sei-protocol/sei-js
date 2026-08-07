import { describe, expect, it, jest } from '@jest/globals';
import type { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';

import { createDocsSearchTool, DOCS_MCP_URL, type DocsMcpClientFactory } from '../../docs/server.js';
import { createMockServer } from '../core/helpers/tool-test-helpers.js';

const createMockClient = (result: CallToolResult) => {
	const connect = jest.fn().mockResolvedValue(undefined as never);
	const callTool = jest.fn().mockResolvedValue(result as never);
	const close = jest.fn().mockResolvedValue(undefined as never);
	const client = { connect, callTool, close } as unknown as Pick<Client, 'connect' | 'callTool' | 'close'>;
	const factory: DocsMcpClientFactory = () => client;

	return { callTool, close, connect, factory };
};

describe('documentation search', () => {
	it('proxies search_docs to the official docs.sei.io MCP server', async () => {
		const remoteResult: CallToolResult = {
			content: [
				{
					type: 'text',
					text: 'Title: Sei Precompiles\nLink: https://docs.sei.io/evm/precompiles/example-usage'
				}
			]
		};
		const { callTool, close, connect, factory } = createMockClient(remoteResult);
		const { registeredTools, server } = createMockServer();

		createDocsSearchTool(server, factory);

		const tool = registeredTools.get('search_docs');
		expect(tool).toBeDefined();

		const result = await tool!.handler({ query: 'Sei precompiles' });

		expect(DOCS_MCP_URL).toBe('https://docs.sei.io/mcp');
		expect(connect).toHaveBeenCalledWith(expect.any(StreamableHTTPClientTransport), { timeout: 10_000 });
		expect(callTool).toHaveBeenCalledWith(
			{
				name: 'search_sei_docs',
				arguments: { query: 'Sei precompiles' }
			},
			undefined,
			{ timeout: 30_000 }
		);
		expect(result).toEqual(remoteResult);
		expect(close).toHaveBeenCalled();
	});

	it('returns an MCP tool error when docs.sei.io is unavailable', async () => {
		const { close, connect, factory } = createMockClient({ content: [] });
		connect.mockRejectedValueOnce(new Error('connection failed') as never);
		const { registeredTools, server } = createMockServer();

		createDocsSearchTool(server, factory);

		const result = await registeredTools.get('search_docs')!.handler({ query: 'Sei precompiles' });

		expect(result).toEqual({
			content: [
				{
					type: 'text',
					text: 'Error searching Sei docs: connection failed'
				}
			],
			isError: true
		});
		expect(close).toHaveBeenCalled();
	});
});
