import type { GetLogsParameters, Hash, Hex, Log, ReadContractParameters, WriteContractParameters } from 'viem';
import { DEFAULT_NETWORK } from '../chains.js';
import { getPrivateKeyAsHex } from '../config.js';
import { getPublicClient, getWalletClientFromProvider } from './clients.js';
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

	const client = await getWalletClientFromProvider(network);
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

/**
 * Deploy a new contract
 * @param bytecode Contract bytecode as hex string
 * @param abi Contract ABI for constructor
 * @param args Constructor arguments (optional)
 * @param network Network name or chain ID
 * @returns Object with contract address and transaction hash
 * @throws Error if no private key is available or deployment fails
 */
export async function deployContract(
	bytecode: Hex,
	abi: any[],
	args?: any[],
	network = DEFAULT_NETWORK
): Promise<{ address: Hash; transactionHash: Hash }> {
	// Get private key from environment
	const key = getPrivateKeyAsHex();

	if (!key) {
		throw new Error('Private key not available. Set the PRIVATE_KEY environment variable and restart the MCP server.');
	}

	const client = await getWalletClientFromProvider(network);
	
	if (!client.account) {
		throw new Error('Wallet client account not available for contract deployment.');
	}
	
	// Deploy the contract
	const hash = await client.deployContract({
		abi,
		bytecode,
		args: args || [],
		account: client.account,
		chain: client.chain,
	});

	// Wait for the transaction to be mined and get the contract address
	const publicClient = getPublicClient(network);
	const receipt = await publicClient.waitForTransactionReceipt({ hash });
	
	if (!receipt.contractAddress) {
		throw new Error('Contract deployment failed - no contract address returned');
	}

	return {
		address: receipt.contractAddress,
		transactionHash: hash,
	};
}
