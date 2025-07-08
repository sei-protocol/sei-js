import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { TrieveSDK } from 'trieve-ts-sdk';
import { z } from 'zod';

import { DEFAULT_BASE_URL, SERVER_URL, SUBDOMAIN } from './config.js';
import type { MintlifySearchConfig, SeiSearchResponse, TrieveResponse, TrieveSearchResult } from './types.js';
import { formatErr } from './utils.js';

/**
 * Fetch Mintlify configuration for the given subdomain
 */
const fetchMintlifyConfig = async (subdomain: string): Promise<MintlifySearchConfig> => {
	try {
		const url = `${SERVER_URL}/api/mcp/config/${subdomain}`;
		const response = await fetch(url);
		
		if (!response.ok) {
			if (response.status === 404) {
				throw new Error(`${subdomain} not found`);
			}
			throw new Error(`Failed to fetch MCP config: ${response.status} ${response.statusText}`);
		}
		
		return (await response.json()) as MintlifySearchConfig;
	} catch (err) {
		throw new Error(formatErr(err), { cause: err });
	}
};

/**
 * Search Sei-JS documentation using Mintlify/Trieve API
 */
const searchSeiJSDocs = async (query: string, config: MintlifySearchConfig): Promise<SeiSearchResponse[]> => {
	const trieve = new TrieveSDK({
		apiKey: config.trieveApiKey,
		datasetId: config.trieveDatasetId,
		baseUrl: config.base_url || DEFAULT_BASE_URL
	});

	const data = (await trieve.autocomplete({
		page_size: 10,
		query,
		search_type: 'fulltext',
		extend_results: true,
		score_threshold: 1
	})) as TrieveResponse;

	if (data.chunks === undefined || data.chunks.length === 0) {
		throw new Error('No results found');
	}

	return data.chunks.map((result: TrieveSearchResult) => {
		const { chunk } = result;
		return {
			title: chunk.metadata.title,
			content: chunk.chunk_html,
			link: chunk.link
		};
	});
};

/**
 * Create and register the Sei-JS documentation search tool with the MCP server
 */
export const createSeiJSDocsSearchTool = async (server: McpServer): Promise<void> => {
	const config = await fetchMintlifyConfig(SUBDOMAIN);

	server.tool(
		'search_sei_js_docs',
		'Search all @sei-js libraries documentation for blockchain development, EVM/Ethereum integration, global wallet connections, React Next.js and Vite boilerplates, ledger integration, and the Sei chain registry. Useful for NodeJS based integrations with Sei.',
		{
			query: z.string()
		},
		async ({ query }) => {
			const results = await searchSeiJSDocs(query, config);
			const content = results.map((result) => {
				const { title, content, link } = result;
				const text = `Title: ${title}\nContent: ${content}\nLink: ${link}`;
				return {
					type: 'text' as const,
					text
				};
			});
			return {
				content
			};
		}
	);
};
