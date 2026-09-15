import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import { getWalletProvider, resetWalletProvider } from '../../../core/wallet/index.js';
import { DisabledWalletProvider } from '../../../core/wallet/providers/disabled.js';
import { PrivateKeyWalletProvider } from '../../../core/wallet/providers/private-key.js';
import type { WalletProvider } from '../../../core/wallet/types.js';

// Mock dependencies
jest.mock('../../../core/config.js', () => {
	const config = { privateKey: undefined as string | undefined, walletMode: 'disabled', walletApiKey: undefined };
	return {
		config,
		getRuntimeConfig: jest.fn(() => config),
		getScopedAppConfig: jest.fn(),
		snapshotConfig: jest.fn((source = config) => Object.freeze({ ...source }))
	};
});

jest.mock('../../../core/wallet/providers/private-key.js', () => ({
	PrivateKeyWalletProvider: jest.fn()
}));

jest.mock('../../../core/wallet/providers/disabled.js', () => ({
	DisabledWalletProvider: jest.fn()
}));

import { getRuntimeConfig, getScopedAppConfig, config as processConfig, snapshotConfig } from '../../../core/config.js';

describe('Wallet Provider', () => {
	const mockPrivateKeyProvider: WalletProvider = {
		getName: () => 'private-key',
		isAvailable: () => true,
		getAddress: jest.fn(),
		signTransaction: jest.fn(),
		getWalletClient: jest.fn()
	};

	const mockDisabledProvider: WalletProvider = {
		getName: () => 'disabled',
		isAvailable: () => false,
		getAddress: jest.fn(),
		signTransaction: jest.fn(),
		getWalletClient: jest.fn()
	};

	beforeEach(() => {
		// Reset all mocks
		jest.resetAllMocks();

		Object.assign(processConfig, { privateKey: undefined, walletMode: 'disabled', walletApiKey: undefined });
		(getRuntimeConfig as jest.Mock).mockReturnValue(processConfig);
		(getScopedAppConfig as jest.Mock).mockReturnValue(undefined);
		(snapshotConfig as jest.Mock).mockImplementation((source = processConfig) => Object.freeze({ ...source }));

		// Setup default mock implementations
		(PrivateKeyWalletProvider as unknown as jest.Mock).mockImplementation(() => mockPrivateKeyProvider);
		(DisabledWalletProvider as unknown as jest.Mock).mockImplementation(() => mockDisabledProvider);
	});

	describe('getWalletProvider', () => {
		test('should create and return PrivateKeyWalletProvider for private-key mode', () => {
			Object.assign(processConfig, { privateKey: '0xabc', walletMode: 'private-key' });

			const provider = getWalletProvider();

			expect(PrivateKeyWalletProvider).toHaveBeenCalledWith({ privateKey: '0xabc' });
			expect(provider).toBe(mockPrivateKeyProvider);
		});

		test('should create and return DisabledWalletProvider for disabled mode', () => {
			const provider = getWalletProvider();

			expect(DisabledWalletProvider).toHaveBeenCalled();
			expect(provider).toBe(mockDisabledProvider);
		});

		test('should not memoize providers outside a runtime scope', () => {
			Object.assign(processConfig, { privateKey: '0xabc', walletMode: 'private-key' });
			const provider2: WalletProvider = { ...mockPrivateKeyProvider };
			(PrivateKeyWalletProvider as unknown as jest.Mock).mockImplementationOnce(() => mockPrivateKeyProvider).mockImplementationOnce(() => provider2);

			const provider1 = getWalletProvider();
			const nextProvider = getWalletProvider();

			expect(PrivateKeyWalletProvider).toHaveBeenCalledTimes(2);
			expect(nextProvider).toBe(provider2);
			expect(nextProvider).not.toBe(provider1);
		});

		test('should throw error for unknown wallet mode', () => {
			processConfig.walletMode = 'unknown-mode' as never;

			expect(() => getWalletProvider()).toThrow('Unknown wallet mode: unknown-mode');
		});

		test('returns the cached provider for a runtime snapshot', () => {
			const snapshot = snapshotConfig({ privateKey: '0xabc', walletMode: 'private-key', walletApiKey: undefined });
			(getScopedAppConfig as jest.Mock).mockReturnValue(snapshot);

			const provider1 = getWalletProvider();
			expect(PrivateKeyWalletProvider).toHaveBeenCalledWith({ privateKey: '0xabc' });
			expect(provider1).toBe(mockPrivateKeyProvider);

			jest.clearAllMocks();
			(getScopedAppConfig as jest.Mock).mockReturnValue(snapshot);

			const provider2 = getWalletProvider();
			expect(provider2).toBe(provider1);
			expect(PrivateKeyWalletProvider).not.toHaveBeenCalled();
		});

		test('recreates only the provider for a reset snapshot', () => {
			const snapshot = snapshotConfig({ privateKey: '0xabc', walletMode: 'private-key', walletApiKey: undefined });
			const providerAfterReset = { ...mockPrivateKeyProvider };
			(getScopedAppConfig as jest.Mock).mockReturnValue(snapshot);
			(PrivateKeyWalletProvider as unknown as jest.Mock).mockImplementationOnce(() => mockPrivateKeyProvider).mockImplementationOnce(() => providerAfterReset);

			expect(getWalletProvider()).toBe(mockPrivateKeyProvider);
			resetWalletProvider(snapshot);
			expect(getWalletProvider()).toBe(providerAfterReset);
			expect(PrivateKeyWalletProvider).toHaveBeenCalledTimes(2);
		});
	});
});
