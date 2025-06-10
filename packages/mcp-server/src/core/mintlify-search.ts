import axios from 'axios';
import type { AxiosResponse } from 'axios';
import { TrieveSDK } from 'trieve-ts-sdk';
import { z } from 'zod';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

// Mintlify configuration constants for Sei-JS docs
const SUBDOMAIN = 'seilabs';
const SERVER_URL = 'https://leaves.mintlify.com';
const DEFAULT_BASE_URL = 'https://api.mintlifytrieve.com';

// TypeScript interfaces for Mintlify search
interface MintlifySearchConfig {
  name: string;
  trieveDatasetId: string;
  trieveApiKey: string;
  base_url?: string;
}

interface SeiJSSearchResult {
  title: string;
  content: string;
  link: string;
}

interface TrieveChunk {
  chunk_html: string;
  link: string;
  metadata: {
    title: string;
  };
}

interface TrieveSearchResult {
  chunk: TrieveChunk;
}

interface TrieveResponse {
  chunks?: TrieveSearchResult[];
}

// Utility functions
export function throwOnAxiosError(response: AxiosResponse, errMsg: string): void {
  if (response.status !== 200) {
    if (response.headers['content-type']?.includes('application/json') && response.data?.error) {
      throw new Error(`${errMsg}: ${response.data.error}`);
    } else {
      throw new Error(`${errMsg}: ${response.status} ${response.statusText || ''}`);
    }
  }
  if (!response.data) {
    throw new Error(`${errMsg}: ${response.status} ${response.statusText}`);
  }
}

export function formatErr(err: unknown): string {
  if (axios.isAxiosError(err)) {
    if (err.message) {
      return err.message;
    } else if (err.response) {
      return err.response.data?.error ?? `${err.response.status} ${err.response.statusText}`;
    } else if (err.request) {
      return 'No response received from server';
    } else {
      return 'An unknown error occurred';
    }
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return JSON.stringify(err, undefined, 2);
  }
}

async function fetchMintlifyConfig(subdomain: string): Promise<MintlifySearchConfig> {
  try {
    const url = `${SERVER_URL}/api/mcp/config/${subdomain}`;
    const response = await axios.get(url, {
      validateStatus() {
        return true;
      },
    });
    throwOnAxiosError(response, 'Failed to fetch MCP config');
    return response.data;
  } catch (err) {
    throw new Error(formatErr(err).replace('Request failed with status code 404', `${subdomain} not found`));
  }
}

async function searchSeiJSDocs(query: string, config: MintlifySearchConfig): Promise<SeiJSSearchResult[]> {
  const trieve = new TrieveSDK({
    apiKey: config.trieveApiKey,
    datasetId: config.trieveDatasetId,
    baseUrl: config.base_url || DEFAULT_BASE_URL,
  });
  const data = await trieve.autocomplete({
    page_size: 10,
    query,
    search_type: 'fulltext',
    extend_results: true,
    score_threshold: 1,
  }) as TrieveResponse;

  if (data.chunks === undefined || data.chunks.length === 0) {
    throw new Error('No results found');
  }
  
  return data.chunks.map((result: TrieveSearchResult) => {
    const { chunk } = result;
    return {
      title: chunk.metadata.title,
      content: chunk.chunk_html,
      link: chunk.link,
    };
  });
}

export async function createSeiJSDocsSearchTool(server: McpServer): Promise<void> {
  const config = await fetchMintlifyConfig(SUBDOMAIN);
  server.tool(
    'search_seiJS_docs', 
    'Search Sei-JS TypeScript SDK documentation for blockchain development, EVM/Ethereum integration, global wallet connections, React next.js and vite boilerplates, ledger integration, and the Sei chain registry', 
    {
      query: z.string(),
    }, 
    async ({ query }: { query: string }) => {
      const results = await searchSeiJSDocs(query, config);
      const content = results.map((result: SeiJSSearchResult) => {
        const { title, content: resultContent, link } = result;
        const text = `Title: ${title}\nContent: ${resultContent}\nLink: ${link}`;
        return {
          type: 'text' as const,
          text,
        };
      });
      return {
        content,
      };
    }
  );
}
