import type { Address, Hash, WalletClient } from 'viem';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { getChain, getRpcUrl } from '../../chains.js';
import { getPrivateKeyAsHex } from '../../config.js';
import type { TransactionRequest, WalletProvider } from '../types.js';
import { WalletProviderError } from '../types.js';

/**
 * Private Key Wallet Provider
 * Uses a private key from environment variables
 */
export class PrivateKeyWalletProvider implements WalletProvider {
	private privateKey: string | undefined;

	constructor() {
		this.privateKey = getPrivateKeyAsHex();
	}

	isAvailable(): boolean {
		return this.privateKey !== undefined;
	}

	async getAddress(): Promise<Address> {
		if (!this.privateKey) {
			throw new WalletProviderError(
				'Private key not configured. Set PRIVATE_KEY environment variable.',
				'private-key',
				'MISSING_PRIVATE_KEY'
			);
		}

		const account = privateKeyToAccount(this.privateKey as `0x${string}`);
		return account.address;
	}

	async signTransaction(tx: TransactionRequest): Promise<Hash> {
		if (!this.privateKey) {
			throw new WalletProviderError(
				'Private key not configured. Cannot sign transaction.',
				'private-key',
				'MISSING_PRIVATE_KEY'
			);
		}

		// For now, return a placeholder - full implementation would involve actual signing
		throw new WalletProviderError(
			'Direct transaction signing not implemented for private key provider.',
			'private-key',
			'NOT_IMPLEMENTED'
		);
	}

	async getWalletClient(network: string): Promise<WalletClient> {
		if (!this.privateKey) {
			throw new WalletProviderError(
				'Private key not configured. Cannot create wallet client.',
				'private-key',
				'MISSING_PRIVATE_KEY'
			);
		}

		const chain = getChain(network);
		const rpcUrl = getRpcUrl(network);
		const account = privateKeyToAccount(this.privateKey as `0x${string}`);

		return createWalletClient({
			account,
			chain,
			transport: http(rpcUrl)
		});
	}

	getName(): string {
		return 'private-key';
	}
}
