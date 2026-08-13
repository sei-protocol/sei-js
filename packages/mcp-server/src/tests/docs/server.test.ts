import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import type { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport, StreamableHTTPError } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';

import { createDocsSearchTool, DOCS_MCP_URL, type DocsMcpClientFactory, MAX_DOCS_RESPONSE_CHARS } from '../../docs/server.js';
import { createMockServer } from '../core/helpers/tool-test-helpers.js';

const docsClientInfo = { name: '@sei-js/mcp-server', version: '0.3.3' };

const createMockClient = (result: CallToolResult = { content: [{ type: 'text', text: 'Documentation result' }] }, tools = ['search_sei_docs']) => {
	const connect = jest.fn().mockResolvedValue(undefined as never);
	const callTool = jest.fn().mockResolvedValue(result as never);
	const close = jest.fn().mockResolvedValue(undefined as never);
	const listTools = jest.fn().mockResolvedValue({
		tools: tools.map((name) => ({
			name,
			inputSchema: { type: 'object', properties: { query: { type: 'string' } } }
		}))
	} as never);
	const client = {
		connect,
		callTool,
		close,
		listTools,
		onclose: undefined as (() => void) | undefined
	} as Pick<Client, 'connect' | 'callTool' | 'close' | 'listTools' | 'onclose'>;
	const factory: DocsMcpClientFactory = () => client;

	return { callTool, client, close, connect, factory, listTools };
};

describe('documentation search', () => {
	it('reuses one docs.sei.io session and discovered tool across searches', async () => {
		const remoteResult: CallToolResult = {
			content: [
				{
					type: 'text',
					text: 'Title: Sei Precompiles\nLink: https://docs.sei.io/evm/precompiles/example-usage'
				}
			]
		};
		const { callTool, close, connect, factory, listTools } = createMockClient(remoteResult);
		const { registeredTools, server } = createMockServer();

		createDocsSearchTool(server, docsClientInfo, factory);

		const tool = registeredTools.get('search_docs');
		expect(tool).toBeDefined();

		const firstResult = await tool!.handler({ query: 'Sei precompiles' });
		const secondResult = await tool!.handler({ query: 'Sei SDK' });

		expect(DOCS_MCP_URL).toBe('https://docs.sei.io/mcp');
		expect(connect).toHaveBeenCalledWith(expect.any(StreamableHTTPClientTransport), { timeout: 10_000 });
		expect(connect).toHaveBeenCalledTimes(1);
		expect(listTools).toHaveBeenCalledWith(undefined, { timeout: 10_000 });
		expect(listTools).toHaveBeenCalledTimes(1);
		expect(callTool).toHaveBeenNthCalledWith(
			1,
			{
				name: 'search_sei_docs',
				arguments: { query: 'Sei precompiles' }
			},
			undefined,
			{ timeout: 30_000 }
		);
		expect(callTool).toHaveBeenNthCalledWith(
			2,
			{
				name: 'search_sei_docs',
				arguments: { query: 'Sei SDK' }
			},
			undefined,
			{ timeout: 30_000 }
		);
		expect(firstResult).toEqual(remoteResult as unknown as typeof firstResult);
		expect(secondResult).toEqual(remoteResult as unknown as typeof secondResult);
		expect(close).not.toHaveBeenCalled();
	});

	it('reconnects and rediscovers tools after the transport closes', async () => {
		const { client, connect, factory, listTools } = createMockClient();
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);
		const tool = registeredTools.get('search_docs')!;

		await tool.handler({ query: 'first' });
		client.onclose?.();
		await tool.handler({ query: 'second' });

		expect(connect).toHaveBeenCalledTimes(2);
		expect(listTools).toHaveBeenCalledTimes(2);
	});

	it('does not dispatch queries to a renamed lookalike tool', async () => {
		const { callTool, factory } = createMockClient(undefined, ['search_product_docs']);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);

		const result = await registeredTools.get('search_docs')!.handler({ query: 'Sei precompiles' });

		expect(result).toEqual({
			content: [
				{
					type: 'text',
					text: 'Error searching Sei docs: The Sei docs MCP server does not advertise a documentation search tool (available: search_product_docs)'
				}
			],
			isError: true
		});
		expect(callTool).not.toHaveBeenCalled();
	});

	it('rejects the preferred tool when it does not accept a query argument', async () => {
		const { factory, listTools } = createMockClient();
		listTools.mockResolvedValueOnce({
			tools: [
				{
					name: 'search_sei_docs',
					inputSchema: { type: 'object', properties: { command: { type: 'string' } } }
				}
			]
		} as never);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);

		const result = await registeredTools.get('search_docs')!.handler({ query: 'Sei precompiles' });

		expect(result).toEqual({
			content: [
				{
					type: 'text',
					text: 'Error searching Sei docs: The Sei docs MCP server does not advertise a documentation search tool (available: search_sei_docs)'
				}
			],
			isError: true
		});
	});

	it('reports an explicit contract error when no search tool is advertised', async () => {
		const { close, factory } = createMockClient(undefined, ['submit_feedback']);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);

		const result = await registeredTools.get('search_docs')!.handler({ query: 'Sei precompiles' });

		expect(result).toEqual({
			content: [
				{
					type: 'text',
					text: 'Error searching Sei docs: The Sei docs MCP server does not advertise a documentation search tool (available: submit_feedback)'
				}
			],
			isError: true
		});
		expect(close).not.toHaveBeenCalled();
	});

	it('filters non-text blocks and caps remote text', async () => {
		const remoteResult = {
			content: [
				{ type: 'image', data: 'aW1hZ2U=', mimeType: 'image/png' },
				{ type: 'text', text: 'x'.repeat(MAX_DOCS_RESPONSE_CHARS + 100) }
			]
		} as CallToolResult;
		const { factory } = createMockClient(remoteResult);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);

		const result = await registeredTools.get('search_docs')!.handler({ query: 'large result' });
		const [content] = result.content;

		expect(result.content).toHaveLength(1);
		expect(content.type).toBe('text');
		expect(content.type === 'text' ? content.text.length : 0).toBe(MAX_DOCS_RESPONSE_CHARS);
		expect((content.type === 'text' ? content.text : '').endsWith('[Documentation response truncated]')).toBe(true);
	});

	it('rejects remote responses without text content', async () => {
		const remoteResult = {
			content: [{ type: 'image', data: 'aW1hZ2U=', mimeType: 'image/png' }]
		} as CallToolResult;
		const { factory } = createMockClient(remoteResult);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);

		const result = await registeredTools.get('search_docs')!.handler({ query: 'image only' });

		expect(result).toEqual({
			content: [
				{
					type: 'text',
					text: 'Error searching Sei docs: The Sei docs MCP server returned no text content'
				}
			],
			isError: true
		});
	});

	it('preserves a connection error when cleanup also fails', async () => {
		const { close, connect, factory } = createMockClient();
		connect.mockRejectedValueOnce(new Error('connection failed') as never);
		close.mockRejectedValueOnce(new Error('cleanup failed') as never);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);

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

	it('closes the outbound docs session when the local MCP server closes', async () => {
		const { close, factory } = createMockClient();
		const { registeredTools, server } = createMockServer();
		const previousOnClose = jest.fn();
		server.server.onclose = previousOnClose;
		createDocsSearchTool(server, docsClientInfo, factory);

		await registeredTools.get('search_docs')!.handler({ query: 'Sei precompiles' });
		server.server.onclose?.();
		await new Promise((resolve) => setImmediate(resolve));

		expect(previousOnClose).toHaveBeenCalled();
		expect(close).toHaveBeenCalledTimes(1);
	});

	it.each([404, 410])('transparently retries after the remote session expires with status %i', async (status) => {
		const { callTool, close, connect, factory, listTools } = createMockClient();
		callTool.mockRejectedValueOnce(new StreamableHTTPError(status, 'Session not found') as never);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);
		const tool = registeredTools.get('search_docs')!;

		const result = await tool.handler({ query: 'Sei precompiles' });

		expect(result).toEqual({
			content: [{ type: 'text', text: 'Documentation result' }]
		});
		expect(callTool).toHaveBeenCalledTimes(2);
		expect(close).toHaveBeenCalledTimes(1);
		expect(connect).toHaveBeenCalledTimes(2);
		expect(listTools).toHaveBeenCalledTimes(2);
	});

	it('returns an error after one retry if the replacement session also expires', async () => {
		const { callTool, close, connect, factory, listTools } = createMockClient();
		callTool.mockRejectedValue(new StreamableHTTPError(410, 'Session expired') as never);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);

		const result = await registeredTools.get('search_docs')!.handler({ query: 'Sei precompiles' });

		expect(result.isError).toBe(true);
		expect(callTool).toHaveBeenCalledTimes(2);
		expect(close).toHaveBeenCalledTimes(2);
		expect(connect).toHaveBeenCalledTimes(2);
		expect(listTools).toHaveBeenCalledTimes(2);
	});

	it('keeps the shared session available after an individual tool failure', async () => {
		const { callTool, close, connect, factory, listTools } = createMockClient();
		callTool.mockRejectedValueOnce('remote failure' as never);
		const { registeredTools, server } = createMockServer();
		createDocsSearchTool(server, docsClientInfo, factory);
		const tool = registeredTools.get('search_docs')!;

		const failedResult = await tool.handler({ query: 'first' });
		const recoveredResult = await tool.handler({ query: 'second' });

		expect(failedResult).toEqual({
			content: [{ type: 'text', text: 'Error searching Sei docs: remote failure' }],
			isError: true
		});
		expect(recoveredResult).toEqual({
			content: [{ type: 'text', text: 'Documentation result' }]
		});
		expect(close).not.toHaveBeenCalled();
		expect(connect).toHaveBeenCalledTimes(1);
		expect(listTools).toHaveBeenCalledTimes(1);
	});
});
