import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport, StreamableHTTPError } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

export const DOCS_MCP_URL = 'https://docs.sei.io/mcp';
export const MAX_DOCS_RESPONSE_CHARS = 40_000;

const PREFERRED_REMOTE_DOCS_SEARCH_TOOL = 'search_sei_docs';
const CONNECT_TIMEOUT_MS = 10_000;
const SEARCH_TIMEOUT_MS = 30_000;
const TRUNCATION_NOTICE = '\n\n[Documentation response truncated]';

type DocsMcpClient = Pick<Client, 'connect' | 'callTool' | 'close' | 'listTools' | 'onclose'>;

export type DocsMcpClientFactory = () => DocsMcpClient;

interface DocsClientInfo {
	name: string;
	version: string;
}

const formatSearchError = (error: unknown): CallToolResult => ({
	content: [
		{
			type: 'text',
			text: `Error searching Sei docs: ${error instanceof Error ? error.message : String(error)}`
		}
	],
	isError: true
});

const sanitizeSearchResult = (result: CallToolResult): CallToolResult => {
	const text = result.content.flatMap((block) => (block.type === 'text' ? [block.text] : [])).join('\n\n');

	if (!text) {
		return formatSearchError(new Error('The Sei docs MCP server returned no text content'));
	}

	const safeText = text.length > MAX_DOCS_RESPONSE_CHARS ? `${text.slice(0, MAX_DOCS_RESPONSE_CHARS - TRUNCATION_NOTICE.length)}${TRUNCATION_NOTICE}` : text;

	return {
		content: [{ type: 'text', text: safeText }],
		...(result.isError ? { isError: true } : {})
	};
};

const selectRemoteSearchTool = async (client: DocsMcpClient): Promise<string> => {
	const { tools } = await client.listTools(undefined, { timeout: CONNECT_TIMEOUT_MS });
	const acceptsQuery = (tool: (typeof tools)[number]) => {
		const properties = tool.inputSchema.properties;
		return properties !== undefined && 'query' in properties;
	};
	const preferred = tools.find((tool) => tool.name === PREFERRED_REMOTE_DOCS_SEARCH_TOOL && acceptsQuery(tool));

	if (preferred) {
		return preferred.name;
	}

	const availableTools = tools.map((tool) => tool.name).join(', ') || 'none';
	throw new Error(`The Sei docs MCP server does not advertise a documentation search tool (available: ${availableTools})`);
};

export const createDocsSearch = (createClient: DocsMcpClientFactory) => {
	let activeClient: DocsMcpClient | undefined;
	let clientPromise: Promise<DocsMcpClient> | undefined;
	let remoteToolPromise: Promise<string> | undefined;

	const clearConnection = () => {
		activeClient = undefined;
		clientPromise = undefined;
		remoteToolPromise = undefined;
	};

	const closeClient = async (client: DocsMcpClient) => {
		if (activeClient === client) {
			clearConnection();
		}

		try {
			await client.close();
		} catch {
			// Preserve the search or connection error that caused cleanup.
		}
	};

	const getClient = (): Promise<DocsMcpClient> => {
		if (!clientPromise) {
			clientPromise = (async () => {
				const client = createClient();
				const transport = new StreamableHTTPClientTransport(new URL(DOCS_MCP_URL));

				client.onclose = () => {
					if (activeClient === client) {
						clearConnection();
					}
				};

				try {
					await client.connect(transport, { timeout: CONNECT_TIMEOUT_MS });
					activeClient = client;
					return client;
				} catch (error) {
					clientPromise = undefined;
					await closeClient(client);
					throw error;
				}
			})();
		}

		return clientPromise;
	};

	const getRemoteTool = (client: DocsMcpClient): Promise<string> => {
		if (!remoteToolPromise) {
			remoteToolPromise = selectRemoteSearchTool(client).catch((error) => {
				remoteToolPromise = undefined;
				throw error;
			});
		}

		return remoteToolPromise;
	};

	const search = async (query: string): Promise<CallToolResult> => {
		let shouldRetryExpiredSession = true;

		while (true) {
			let client: DocsMcpClient | undefined;

			try {
				client = await getClient();
				const remoteTool = await getRemoteTool(client);
				// callTool validates CallToolResultSchema by default; narrow the SDK's compatibility union before filtering.
				const result = (await client.callTool(
					{
						name: remoteTool,
						arguments: { query }
					},
					undefined,
					{ timeout: SEARCH_TIMEOUT_MS }
				)) as CallToolResult;

				return sanitizeSearchResult(result);
			} catch (error) {
				if (client && error instanceof StreamableHTTPError && (error.code === 404 || error.code === 410)) {
					await closeClient(client);

					if (shouldRetryExpiredSession) {
						shouldRetryExpiredSession = false;
						continue;
					}
				}

				return formatSearchError(error);
			}
		}
	};

	const close = async (): Promise<void> => {
		const pendingClient = clientPromise;
		clearConnection();

		if (!pendingClient) {
			return;
		}

		try {
			await closeClient(await pendingClient);
		} catch {
			// Connection setup already performs its own cleanup.
		}
	};

	return { close, search };
};

export const createDocsSearchTool = (
	server: McpServer,
	clientInfo: DocsClientInfo,
	createClient: DocsMcpClientFactory = () =>
		new Client({
			name: clientInfo.name,
			version: clientInfo.version
		})
): void => {
	const docsSearch = createDocsSearch(createClient);
	const previousOnClose = server.server.onclose;

	server.server.onclose = () => {
		previousOnClose?.();
		void docsSearch.close();
	};

	server.tool(
		'search_docs',
		'Search the official Sei documentation at docs.sei.io for chain information, developer guides, integrations, and @sei-js references.',
		{
			query: z.string().min(1)
		},
		async ({ query }) => docsSearch.search(query)
	);
};
