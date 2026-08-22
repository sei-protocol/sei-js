import { type Address, createPublicClient, http, type PublicClient, type WalletClient } from 'viem';
import { DEFAULT_NETWORK, getChain, getRpcUrl, type NetworkIdentifier, normalizeNetwork } from '../chains.js';
import { getWalletProvider } from '../wallet/index.js';

// Cache for clients to avoid recreating them for each request
const clientCache = new Map<string, PublicClient>();

export function resetPublicClientCache(): void {
	clientCache.clear();
}

/**
 * Get a public client for a specific network
 */
export function getPublicClient(network: NetworkIdentifier = DEFAULT_NETWORK): PublicClient {
	const normalizedNetwork = normalizeNetwork(network);
	const cacheKey = normalizedNetwork;

	// Return cached client if available
	if (clientCache.has(cacheKey)) {
		const cachedClient = clientCache.get(cacheKey);
		// This should never happen as we just checked with has(), but better to be safe
		if (!cachedClient) {
			throw new Error(`Client cache inconsistency for network ${normalizedNetwork}`);
		}
		return cachedClient;
	}

	// Create a new client
	const chain = getChain(normalizedNetwork);
	const rpcUrl = getRpcUrl(normalizedNetwork);

	const client = createPublicClient({
		chain,
		transport: http(rpcUrl)
	});

	// Cache the client
	clientCache.set(cacheKey, client);

	return client;
}

/**
 * Get a wallet client using the configured wallet provider
 */
export async function getWalletClientFromProvider(network = DEFAULT_NETWORK): Promise<WalletClient> {
	const walletProvider = getWalletProvider();
	return walletProvider.getWalletClient(network);
}

/**
 * Get an EVM address from the configured wallet provider
 */
export async function getAddressFromProvider(): Promise<Address> {
	const walletProvider = getWalletProvider();
	return walletProvider.getAddress();
}
