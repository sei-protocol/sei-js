import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import { DisabledWalletProvider } from '../../../../core/wallet/providers/disabled.js';
import { type TransactionRequest, WalletProviderError } from '../../../../core/wallet/types.js';

describe('DisabledWalletProvider', () => {
	let provider: DisabledWalletProvider;

	beforeEach(() => {
		provider = new DisabledWalletProvider();
	});

	describe('isAvailable', () => {
		test('should return false', () => {
			expect(provider.isAvailable()).toBe(false);
		});
	});

	describe('getName', () => {
		test('should return "disabled"', () => {
			expect(provider.getName()).toBe('disabled');
		});
	});

	describe('getAddress', () => {
		test('should throw WalletProviderError', async () => {
			await expect(provider.getAddress()).rejects.toThrow(WalletProviderError);
			await expect(provider.getAddress()).rejects.toThrow('Wallet functionality is disabled');
		});
	});

	describe('signTransaction', () => {
		test('should throw WalletProviderError', async () => {
			const mockTx: TransactionRequest = { to: '0x1234567890123456789012345678901234567890', value: 1n };

			await expect(provider.signTransaction(mockTx)).rejects.toThrow(WalletProviderError);
			await expect(provider.signTransaction(mockTx)).rejects.toThrow('Wallet functionality is disabled');
		});
	});

	describe('getWalletClient', () => {
		test('should throw WalletProviderError', async () => {
			await expect(provider.getWalletClient('sei')).rejects.toThrow(WalletProviderError);
			await expect(provider.getWalletClient('sei')).rejects.toThrow('Wallet functionality is disabled');
		});
	});
});
