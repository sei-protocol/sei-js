import type { Address, Hash, WalletClient } from 'viem';
import type { TransactionRequest, WalletProvider } from '../types.js';
import { WalletProviderError } from '../types.js';

/**
 * Disabled Wallet Provider
 * Throws errors for all wallet operations when wallet functionality is disabled
 */
export class DisabledWalletProvider implements WalletProvider {
	isAvailable(): boolean {
		return false;
	}

	async getAddress(): Promise<Address> {
		throw new WalletProviderError(
			'Wallet functionality is disabled. Enable wallet functionality to use this feature.',
			'disabled',
			'WALLET_DISABLED'
		);
	}

	async signTransaction(tx: TransactionRequest): Promise<Hash> {
		throw new WalletProviderError(
			'Wallet functionality is disabled. Enable wallet functionality to sign transactions.',
			'disabled',
			'WALLET_DISABLED'
		);
	}

	async getWalletClient(network: string): Promise<WalletClient> {
		throw new WalletProviderError(
			'Wallet functionality is disabled. Enable wallet functionality to create wallet clients.',
			'disabled',
			'WALLET_DISABLED'
		);
	}

	getName(): string {
		return 'disabled';
	}
}
