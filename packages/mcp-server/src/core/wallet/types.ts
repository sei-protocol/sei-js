import type { Address, Hash, Hex, WalletClient } from 'viem';

/**
 * Transaction request interface for wallet providers
 */
export interface TransactionRequest {
	to?: Address;
	value?: bigint;
	data?: Hex;
	gas?: bigint;
	gasPrice?: bigint;
	maxFeePerGas?: bigint;
	maxPriorityFeePerGas?: bigint;
	nonce?: number;
}

/**
 * Abstract wallet provider interface
 * Allows different wallet implementations to be used interchangeably
 */
export interface WalletProvider {
	/**
	 * Check if this wallet provider is available and configured
	 */
	isAvailable(): boolean;

	/**
	 * Get the wallet address
	 */
	getAddress(): Promise<Address>;

	/**
	 * Sign a transaction
	 */
	signTransaction(tx: TransactionRequest): Promise<Hash>;

	/**
	 * Get a wallet client for the specified network
	 */
	getWalletClient(network: string): Promise<WalletClient>;

	/**
	 * Get the wallet provider name
	 */
	getName(): string;
}

/**
 * Wallet provider error class
 */
export class WalletProviderError extends Error {
	constructor(
		message: string,
		public readonly provider: string,
		public readonly code?: string
	) {
		super(message);
		this.name = 'WalletProviderError';
	}
}
