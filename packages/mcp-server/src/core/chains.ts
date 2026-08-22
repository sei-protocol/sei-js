import type { Chain } from 'viem';
import { sei, seiTestnet } from 'viem/chains';
import { z } from 'zod';

// Default configuration values
export const DEFAULT_NETWORK = 'sei';
export const DEFAULT_RPC_URL = 'https://evm-rpc.sei-apis.com';
export const DEFAULT_CHAIN_ID = 1329;
export const SUPPORTED_CHAIN_IDS = [1329, 1328] as const;
export const SUPPORTED_NETWORK_NAMES = ['sei', 'sei-testnet'] as const;
export const SUPPORTED_NETWORK_INPUTS = ['sei', 'sei-testnet', '1329', '1328', '0x531', '0x530'] as const;

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number];
export type SupportedNetworkName = (typeof SUPPORTED_NETWORK_NAMES)[number];
export type NetworkIdentifier = number | string;

export const networkSchema = z
	.preprocess((value) => (typeof value === 'string' ? value.trim().toLowerCase() : value), z.enum(SUPPORTED_NETWORK_INPUTS))
	.transform((network) => normalizeNetwork(network))
	.describe("Supported network: 'sei', 'sei-testnet', '1329', '1328', '0x531', or '0x530'. Defaults to Sei mainnet.");

// Map chain IDs to chains
export const chainMap: Record<SupportedChainId, Chain> = {
	1329: sei,
	1328: seiTestnet
};

// Map network names to chain IDs for easier reference
export const networkNameMap: Record<SupportedNetworkName, SupportedChainId> = {
	sei: 1329,
	'sei-testnet': 1328
};

// Map chain IDs to RPC URLs
export const rpcUrlMap: Record<SupportedChainId, string> = {
	1329: process.env.MAINNET_RPC_URL || 'https://evm-rpc.sei-apis.com',
	1328: process.env.TESTNET_RPC_URL || 'https://evm-rpc-testnet.sei-apis.com'
};

const networkNameByChainId: Record<SupportedChainId, SupportedNetworkName> = {
	1329: 'sei',
	1328: 'sei-testnet'
};

function isSupportedChainId(chainId: number): chainId is SupportedChainId {
	return SUPPORTED_CHAIN_IDS.includes(chainId as SupportedChainId);
}

/**
 * Resolves a chain identifier (number or string) to a chain ID
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The resolved chain ID
 */
export function resolveChainId(chainIdentifier: NetworkIdentifier): SupportedChainId {
	if (typeof chainIdentifier === 'number') {
		if (isSupportedChainId(chainIdentifier)) {
			return chainIdentifier;
		}
		throw new Error(`Unsupported network: ${chainIdentifier}`);
	}

	const networkName = chainIdentifier.trim().toLowerCase();

	if (Object.hasOwn(networkNameMap, networkName)) {
		return networkNameMap[networkName as SupportedNetworkName];
	}

	if (/^(?:\d+|0x[0-9a-f]+)$/i.test(networkName)) {
		const parsedId = Number(networkName);
		if (isSupportedChainId(parsedId)) {
			return parsedId;
		}
	}

	throw new Error(`Unsupported network: ${chainIdentifier}`);
}

/**
 * Normalizes every supported selector to its canonical network name.
 */
export function normalizeNetwork(chainIdentifier: NetworkIdentifier = DEFAULT_NETWORK): SupportedNetworkName {
	return networkNameByChainId[resolveChainId(chainIdentifier)];
}

/**
 * Returns the chain configuration for the specified chain ID or network name
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The chain configuration
 * @throws Error if the network is not supported
 */
export function getChain(chainIdentifier: NetworkIdentifier = DEFAULT_CHAIN_ID): Chain {
	return chainMap[resolveChainId(chainIdentifier)];
}

/**
 * Gets the appropriate RPC URL for the specified chain ID or network name
 * @param chainIdentifier Chain ID (number) or network name (string)
 * @returns The RPC URL for the specified chain
 */
export function getRpcUrl(chainIdentifier: NetworkIdentifier = DEFAULT_CHAIN_ID): string {
	return rpcUrlMap[resolveChainId(chainIdentifier)];
}

/**
 * Get a list of supported networks
 * @returns Array of supported network names (excluding short aliases)
 */
export function getSupportedNetworks(): SupportedNetworkName[] {
	return [...SUPPORTED_NETWORK_NAMES].sort();
}
