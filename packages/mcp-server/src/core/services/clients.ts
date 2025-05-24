import { http, type Address, type Hex, type PublicClient, type WalletClient, createPublicClient, createWalletClient } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { DEFAULT_NETWORK, getChain, getRpcUrl } from '../chains.js';

// Cache for clients to avoid recreating them for each request
const clientCache = new Map<string, PublicClient>();

/**
 * Get a public client for a specific network
 */
export function getPublicClient(network = DEFAULT_NETWORK): PublicClient {
	const cacheKey = String(network);

	// Return cached client if available
	if (clientCache.has(cacheKey)) {
		const cachedClient = clientCache.get(cacheKey);
		// This should never happen as we just checked with has(), but better to be safe
		if (!cachedClient) {
			throw new Error(`Client cache inconsistency for network ${network}`);
		}
		return cachedClient;
	}

	// Create a new client
	const chain = getChain(network);
	const rpcUrl = getRpcUrl(network);

	const client = createPublicClient({
		chain,
		transport: http(rpcUrl)
	});

	// Cache the client
	clientCache.set(cacheKey, client);

	return client;
}

/**
 * Create a wallet client for a specific network and private key
 */
export function getWalletClient(privateKey: Hex, network = DEFAULT_NETWORK): WalletClient {
	const chain = getChain(network);
	const rpcUrl = getRpcUrl(network);
	const account = privateKeyToAccount(privateKey);

	return createWalletClient({
		account,
		chain,
		transport: http(rpcUrl)
	});
}

/**
 * Get an EVM address from a private key
 * @param privateKey The private key in hex format (with or without 0x prefix)
 * @returns The EVM address derived from the private key
 */
export function getAddressFromPrivateKey(privateKey: Hex): Address {
	const account = privateKeyToAccount(privateKey);
	return account.address;
}
