import type { Chain } from 'viem';
import { sei, seiDevnet, seiTestnet } from 'viem/chains';

// Default configuration values
export const DEFAULT_NETWORK = 'sei';
export const DEFAULT_RPC_URL = 'https://evm-rpc.sei-apis.com';
export const DEFAULT_CHAIN_ID = 1329;

// Map chain IDs to chains
export const chainMap: Record<number, Chain> = {
	1329: sei,
	1328: seiTestnet,
	713715: seiDevnet
};

// Map network names to chain IDs for easier reference
export const networkNameMap: Record<string, number> = {
	sei: 1329,
	'sei-testnet': 1328,
	'sei-devnet': 713_715
};

// Map chain IDs to RPC URLs
export const rpcUrlMap: Record<number, string> = {
	1329: 'https://evm-rpc.sei-apis.com',
	1328: 'https://evm-rpc-testnet.sei-apis.com',
	713715: 'https://evm-rpc-arctic-1.sei-apis.com'
};

/**
 * Resolves a chain identifier (number or string) to a chain ID
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The resolved chain ID
 */
export function resolveChainId(chainIdentifier: number | string): number {
	if (typeof chainIdentifier === 'number') {
		return chainIdentifier;
	}

	// Convert to lowercase for case-insensitive matching
	const networkName = chainIdentifier.toLowerCase();

	// Check if the network name is in our map
	if (networkName in networkNameMap) {
		return networkNameMap[networkName];
	}

	// Try parsing as a number
	const parsedId = Number.parseInt(networkName);
	if (!Number.isNaN(parsedId)) {
		return parsedId;
	}

	// Default to mainnet if not found
	return DEFAULT_CHAIN_ID;
}

/**
 * Returns the chain configuration for the specified chain ID or network name
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The chain configuration
 * @throws Error if the network is not supported (when string is provided)
 */
export function getChain(chainIdentifier: number | string = DEFAULT_CHAIN_ID): Chain {
	if (typeof chainIdentifier === 'string') {
		const networkName = chainIdentifier.toLowerCase();
		// Try to get from direct network name mapping first
		if (networkNameMap[networkName]) {
			return chainMap[networkNameMap[networkName]] || sei;
		}

		// If not found, throw an error
		throw new Error(`Unsupported network: ${chainIdentifier}`);
	}

	// If it's a number, return the chain from chainMap
	return chainMap[chainIdentifier] || sei;
}

/**
 * Gets the appropriate RPC URL for the specified chain ID or network name
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The RPC URL for the specified chain
 */
export function getRpcUrl(chainIdentifier: number | string = DEFAULT_CHAIN_ID): string {
	const chainId = typeof chainIdentifier === 'string' ? resolveChainId(chainIdentifier) : chainIdentifier;

	return rpcUrlMap[chainId] || DEFAULT_RPC_URL;
}

/**
 * Get a list of supported networks
 * @returns Array of supported network names (excluding short aliases)
 */
export function getSupportedNetworks(): string[] {
	return Object.keys(networkNameMap)
		.filter((name) => name.length > 2) // Filter out short aliases
		.sort();
}
