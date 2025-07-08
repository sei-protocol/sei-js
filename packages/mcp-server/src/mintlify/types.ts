export interface MintlifySearchConfig {
	name: string;
	trieveDatasetId: string;
	trieveApiKey: string;
	base_url?: string;
}

export interface SeiSearchResponse {
	title: string;
	content: string;
	link: string;
}

export interface TrieveChunk {
	chunk_html: string;
	link: string;
	metadata: {
		title: string;
	};
}

export interface TrieveSearchResult {
	chunk: TrieveChunk;
}

export interface TrieveResponse {
	chunks: TrieveSearchResult[];
}
