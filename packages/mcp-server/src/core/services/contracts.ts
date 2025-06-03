import type { GetLogsParameters, Hash, Hex, Log, ReadContractParameters, WriteContractParameters } from 'viem';
import { DEFAULT_NETWORK } from '../chains.js';
import { getPrivateKeyAsHex } from '../config.js';
import { getPublicClient, getWalletClient } from './clients.js';
import * as services from './index.js';

/**
 * Read from a contract for a specific network
 */
export async function readContract(params: ReadContractParameters, network = DEFAULT_NETWORK) {
	const client = getPublicClient(network);
	return await client.readContract(params);
}

/**
 * Write to a contract for a specific network
 * @param params Contract parameters
 * @param network Network name or chain ID
 * @returns Transaction hash
 * @throws Error if no private key is available
 */
export async function writeContract(params: Record<string, any>, network = DEFAULT_NETWORK): Promise<Hash> {
	// Get private key from environment
	const key = getPrivateKeyAsHex();

	if (!key) {
		throw new Error('Private key not available. Set the PRIVATE_KEY environment variable and restart the MCP server.');
	}

	const client = getWalletClient(key, network);
	return await client.writeContract(params as any);
}

/**
 * Get logs for a specific network
 */
export async function getLogs(params: GetLogsParameters, network = DEFAULT_NETWORK): Promise<Log[]> {
	const client = getPublicClient(network);
	return await client.getLogs(params);
}

/**
 * Check if an address is a contract
 * @param address Address
 * @param network Network name or chain ID
 * @returns True if the address is a contract, false if it's an EOA
 */
export async function isContract(address: string, network = DEFAULT_NETWORK): Promise<boolean> {
	const validatedAddress = services.helpers.validateAddress(address);

	const client = getPublicClient(network);
	const code = await client.getBytecode({ address: validatedAddress });
	return code !== undefined && code !== '0x';
}
