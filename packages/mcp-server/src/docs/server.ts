import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import type { SeiSearchResponse } from '../mintlify/types';

const DOCS_SEARCH_URL = 'https://docs.sei-apis.io/search';

export const createDocsSearchTool = async (server: McpServer) => {
	server.tool(
		'search_docs',
		'Search the main Sei docs for general chain information, ecosystem providers, and user onboarding guides. Useful for all queries for up-to-date information about Sei.',
		{
			query: z.string()
		},
		async ({ query }) => {
			try {
				const results = await searchDocs(query);
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
			} catch (error) {
				return {
					content: [
						{
							type: 'text',
							text: `Error searching docs: ${error instanceof Error ? error.message : String(error)}`
						}
					],
					isError: true
				};
			}
		}
	);
};

const searchDocs = async (query: string): Promise<SeiSearchResponse[]> => {
	const url = `${DOCS_SEARCH_URL}?q=${encodeURIComponent(query)}`;
	
	try {
		const response = await fetch(url);
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		const data = await response.json() as SeiSearchResponse[];
		
		if (!data || data.length === 0) {
			throw new Error('No results found');
		}
		
		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(`Search failed: ${error.message}`);
		}

		throw error;
	}
};
