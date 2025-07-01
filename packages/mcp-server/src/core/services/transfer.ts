import { type Address, type Hash, getContract, parseEther, parseUnits } from 'viem';
import { DEFAULT_NETWORK } from '../chains.js';
import { getPublicClient, getWalletClientFromProvider } from './clients.js';
import * as services from './index.js';

// Standard ERC20 ABI for transfers
const erc20TransferAbi = [
	{
		inputs: [
			{ type: 'address', name: 'to' },
			{ type: 'uint256', name: 'amount' }
		],
		name: 'transfer',
		outputs: [{ type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ type: 'address', name: 'spender' },
			{ type: 'uint256', name: 'amount' }
		],
		name: 'approve',
		outputs: [{ type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'decimals',
		outputs: [{ type: 'uint8' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [{ type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

// Standard ERC721 ABI for transfers
const erc721TransferAbi = [
	{
		inputs: [
			{ type: 'address', name: 'from' },
			{ type: 'address', name: 'to' },
			{ type: 'uint256', name: 'tokenId' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'name',
		outputs: [{ type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'symbol',
		outputs: [{ type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ type: 'uint256', name: 'tokenId' }],
		name: 'ownerOf',
		outputs: [{ type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

// ERC1155 ABI for transfers
const erc1155TransferAbi = [
	{
		inputs: [
			{ type: 'address', name: 'from' },
			{ type: 'address', name: 'to' },
			{ type: 'uint256', name: 'id' },
			{ type: 'uint256', name: 'amount' },
			{ type: 'bytes', name: 'data' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ type: 'address', name: 'account' },
			{ type: 'uint256', name: 'id' }
		],
		name: 'balanceOf',
		outputs: [{ type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	}
] as const;

/**
 * Transfer Sei to an address
 * @param toAddress Recipient address
 * @param amount Amount to send in Sei
 * @param network Network name or chain ID
 * @returns Transaction hash
 * @throws Error if no private key is available
 */
export async function transferSei(
	toAddress: string,
	amount: string, // in ether
	network = DEFAULT_NETWORK
): Promise<Hash> {
	const validatedToAddress = services.helpers.validateAddress(toAddress);
	// Get wallet client from provider
	const client = await getWalletClientFromProvider(network);
	const amountWei = parseEther(amount);

	// Ensure account exists before using it
	if (!client.account) {
		throw new Error('Wallet account not initialized properly');
	}

	return client.sendTransaction({
		to: validatedToAddress,
		value: amountWei,
		account: client.account,
		chain: client.chain
	});
}

/**
 * Transfer ERC20 tokens to an address
 * @param tokenAddress Token contract address
 * @param toAddress Recipient address
 * @param amount Amount to send (in token units)
 * @param network Network name or chain ID
 * @returns Transaction details
 * @throws Error if no private key is available
 */
export async function transferERC20(
	tokenAddress: string,
	toAddress: string,
	amount: string,
	network = 'sei'
): Promise<{
	txHash: Hash;
	amount: {
		raw: bigint;
		formatted: string;
	};
	token: {
		symbol: string;
		decimals: number;
	};
}> {
	const validatedTokenAddress = services.helpers.validateAddress(tokenAddress);
	const validatedToAddress = services.helpers.validateAddress(toAddress);
	// Get wallet client from provider
	const walletClient = await getWalletClientFromProvider(network);

	const publicClient = getPublicClient(network);

	// Get token details
	const contract = getContract({
		address: tokenAddress as Address,
		abi: erc20TransferAbi,
		client: publicClient
	});

	// Get token decimals and symbol
	const decimals = await contract.read.decimals();
	const symbol = await contract.read.symbol();

	// Parse the amount with the correct number of decimals
	const rawAmount = parseUnits(amount, decimals);

	// Ensure account exists before using it
	if (!walletClient.account) {
		throw new Error('Wallet account not initialized properly');
	}

	// Send the transaction
	const hash = await walletClient.writeContract({
		address: validatedTokenAddress,
		abi: erc20TransferAbi,
		functionName: 'transfer',
		args: [validatedToAddress, rawAmount],
		account: walletClient.account,
		chain: walletClient.chain
	});

	return {
		txHash: hash,
		amount: {
			raw: rawAmount,
			formatted: amount
		},
		token: {
			symbol,
			decimals
		}
	};
}

/**
 * Approve ERC20 token spending
 * @param tokenAddress Token contract address
 * @param spenderAddress Spender address
 * @param amount Amount to approve (in token units)
 * @param network Network name or chain ID
 * @returns Transaction details
 * @throws Error if no private key is available
 */
export async function approveERC20(
	tokenAddress: string,
	spenderAddress: string,
	amount: string,
	network = 'sei'
): Promise<{
	txHash: Hash;
	amount: {
		raw: bigint;
		formatted: string;
	};
	token: {
		symbol: string;
		decimals: number;
	};
}> {
	const validatedTokenAddress = services.helpers.validateAddress(tokenAddress);
	const validatedSpenderAddress = services.helpers.validateAddress(spenderAddress);
	// Get wallet client from provider
	const walletClient = await getWalletClientFromProvider(network);

	const publicClient = getPublicClient(network);
	const contract = getContract({
		address: validatedTokenAddress,
		abi: erc20TransferAbi,
		client: publicClient
	});

	// Get token decimals and symbol
	const decimals = await contract.read.decimals();
	const symbol = await contract.read.symbol();

	// Parse the amount with the correct number of decimals
	const rawAmount = parseUnits(amount, decimals);

	// Ensure account exists before using it
	if (!walletClient.account) {
		throw new Error('Wallet account not initialized properly');
	}

	// Send the transaction
	const hash = await walletClient.writeContract({
		address: validatedTokenAddress,
		abi: erc20TransferAbi,
		functionName: 'approve',
		args: [validatedSpenderAddress, rawAmount],
		account: walletClient.account,
		chain: walletClient.chain
	});

	return {
		txHash: hash,
		amount: {
			raw: rawAmount,
			formatted: amount
		},
		token: {
			symbol,
			decimals
		}
	};
}

/**
 * Transfer an NFT (ERC721) to an address
 * @param tokenAddress NFT contract address
 * @param toAddress Recipient address
 * @param tokenId Token ID to transfer
 * @param network Network name or chain ID
 * @returns Transaction details
 * @throws Error if no private key is available
 */
export async function transferERC721(
	tokenAddress: string,
	toAddress: string,
	tokenId: bigint,
	network = 'sei'
): Promise<{
	txHash: Hash;
	tokenId: string;
	token: {
		name: string;
		symbol: string;
	};
}> {
	const validatedTokenAddress = services.helpers.validateAddress(tokenAddress);
	const validatedToAddress = services.helpers.validateAddress(toAddress);

	// Get wallet client from provider
	const walletClient = await getWalletClientFromProvider(network);

	// Ensure account exists before using it
	if (!walletClient.account) {
		throw new Error('Wallet account not initialized properly');
	}

	const fromAddress = walletClient.account.address;

	// Send the transaction
	const hash = await walletClient.writeContract({
		address: validatedTokenAddress,
		abi: erc721TransferAbi,
		functionName: 'transferFrom',
		args: [fromAddress, validatedToAddress, tokenId],
		account: walletClient.account,
		chain: walletClient.chain
	});

	// Get token metadata
	const publicClient = getPublicClient(network);
	const contract = getContract({
		address: validatedTokenAddress,
		abi: erc721TransferAbi,
		client: publicClient
	});

	// Get token name and symbol
	let name = 'Unknown';
	let symbol = 'NFT';

	try {
		[name, symbol] = await Promise.all([contract.read.name(), contract.read.symbol()]);
	} catch (error) {
		console.error('Error fetching NFT metadata:', error);
	}

	return {
		txHash: hash,
		tokenId: tokenId.toString(),
		token: {
			name,
			symbol
		}
	};
}

/**
 * Transfer ERC1155 tokens to an address
 * @param tokenAddress Token contract
 * @param toAddress Recipient address
 * @param tokenId Token ID to transfer
 * @param amount Amount to transfer
 * @param network Network name or chain ID
 * @returns Transaction details
 * @throws Error if no private key is available
 */
export async function transferERC1155(
	tokenAddress: string,
	toAddress: string,
	tokenId: bigint,
	amount: string,
	network = 'sei'
): Promise<{
	txHash: Hash;
	tokenId: string;
	amount: string;
}> {
	const validatedTokenAddress = services.helpers.validateAddress(tokenAddress);
	const validatedToAddress = services.helpers.validateAddress(toAddress);
	// Get wallet client from provider
	const walletClient = await getWalletClientFromProvider(network);

	// Ensure account exists before using it
	if (!walletClient.account) {
		throw new Error('Wallet account not initialized properly');
	}

	const fromAddress = walletClient.account.address;

	// Parse amount to bigint
	const amountBigInt = BigInt(amount);

	// Send the transaction
	const hash = await walletClient.writeContract({
		address: validatedTokenAddress,
		abi: erc1155TransferAbi,
		functionName: 'safeTransferFrom',
		args: [fromAddress, validatedToAddress, tokenId, amountBigInt, '0x'],
		account: walletClient.account,
		chain: walletClient.chain
	});

	return {
		txHash: hash,
		tokenId: tokenId.toString(),
		amount
	};
}
