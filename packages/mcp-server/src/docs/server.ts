import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { CallToolResultSchema, type CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

export const DOCS_MCP_URL = 'https://docs.sei.io/mcp';

const REMOTE_DOCS_SEARCH_TOOL = 'search_sei_docs';
const CONNECT_TIMEOUT_MS = 10_000;
const SEARCH_TIMEOUT_MS = 30_000;

type DocsMcpClient = Pick<Client, 'connect' | 'callTool' | 'close'>;

export type DocsMcpClientFactory = () => DocsMcpClient;

const createDocsMcpClient: DocsMcpClientFactory = () =>
	new Client({
		name: '@sei-js/mcp-server',
		version: '1.0.0'
	});

export const searchDocs = async (query: string, createClient: DocsMcpClientFactory = createDocsMcpClient): Promise<CallToolResult> => {
	const client = createClient();
	const transport = new StreamableHTTPClientTransport(new URL(DOCS_MCP_URL));

	try {
		await client.connect(transport, { timeout: CONNECT_TIMEOUT_MS });

		const result = await client.callTool(
			{
				name: REMOTE_DOCS_SEARCH_TOOL,
				arguments: { query }
			},
			undefined,
			{ timeout: SEARCH_TIMEOUT_MS }
		);

		return CallToolResultSchema.parse(result);
	} catch (error) {
		return {
			content: [
				{
					type: 'text',
					text: `Error searching Sei docs: ${error instanceof Error ? error.message : String(error)}`
				}
			],
			isError: true
		};
	} finally {
		try {
			await client.close();
		} catch {
			// The search result is more useful than a connection cleanup error.
		}
	}
};

export const createDocsSearchTool = (server: McpServer, createClient: DocsMcpClientFactory = createDocsMcpClient): void => {
	server.tool(
		'search_docs',
		'Search the official Sei documentation at docs.sei.io for chain information, developer guides, integrations, and @sei-js references.',
		{
			query: z.string().min(1)
		},
		async ({ query }) => searchDocs(query, createClient)
	);
};
