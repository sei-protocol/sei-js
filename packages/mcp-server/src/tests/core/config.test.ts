import { afterEach, beforeEach, describe, expect, jest, test } from 'bun:test';
import {
	config,
	formatPrivateKey,
	getPrivateKeyAsHex,
	getRuntimeConfig,
	getScopedAppConfig,
	getWalletMode,
	initializeConfig,
	isValidPrivateKey,
	isWalletEnabled,
	loadConfig,
	runWithAppConfig,
	snapshotConfig,
	wrapWithAppConfig
} from '../../core/config.js';

describe('Config Module - Actual Implementation', () => {
	const originalConfig = { ...config };

	beforeEach(() => {
		Object.assign(config, {
			privateKey: undefined,
			walletMode: 'disabled',
			walletApiKey: undefined
		});
	});

	afterEach(() => {
		Object.assign(config, originalConfig);
	});

	describe('formatPrivateKey', () => {
		test('should return undefined if key is not provided', () => {
			const result = formatPrivateKey(undefined);
			expect(result).toBeUndefined();
		});

		test('should add 0x prefix if missing', () => {
			const result = formatPrivateKey('abcdef1234567890');
			expect(result).toBe('0xabcdef1234567890');
		});

		test('should not modify key if 0x prefix exists', () => {
			const result = formatPrivateKey('0xabcdef1234567890');
			expect(result).toBe('0xabcdef1234567890');
		});

		test('should handle empty string', () => {
			const result = formatPrivateKey('');
			expect(result).toBeUndefined();
		});
	});

	describe('configuration parsing', () => {
		test('should set privateKey when env parsing succeeds', () => {
			const freshConfig = loadConfig({ PRIVATE_KEY: 'abcdef1234567890' });
			expect(freshConfig.privateKey).toBe('0xabcdef1234567890');
		});

		test('rejects invalid environment values instead of silently disabling the wallet', () => {
			expect(() => loadConfig({ PRIVATE_KEY: 123, WALLET_MODE: 'private-key' })).toThrow();
		});

		test('requires a private key in private-key wallet mode', () => {
			expect(() => loadConfig({ WALLET_MODE: 'private-key' })).toThrow('PRIVATE_KEY is required');
		});

		test('rejects malformed and zero private keys in private-key wallet mode', () => {
			expect(() => loadConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: 'not-a-key' })).toThrow('valid 32-byte secp256k1 private key');
			expect(() => loadConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: '0'.repeat(64) })).toThrow('valid 32-byte secp256k1 private key');
		});

		test('accepts a valid private key in private-key wallet mode', () => {
			const privateKey = '1'.repeat(64);
			expect(isValidPrivateKey(privateKey)).toBe(true);
			expect(loadConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: privateKey })).toEqual({
				privateKey: `0x${privateKey}`,
				walletMode: 'private-key',
				walletApiKey: undefined
			});
		});

		test('initializes the shared runtime config only when explicitly requested', () => {
			const privateKey = '2'.repeat(64);
			expect(initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: privateKey })).toBe(config);
			expect(config).toEqual({
				privateKey: `0x${privateKey}`,
				walletMode: 'private-key',
				walletApiKey: undefined
			});
		});

		test('snapshots freeze a copy that later initializeConfig mutations cannot change', () => {
			const snapshot = snapshotConfig();
			expect(snapshot).toEqual({
				privateKey: undefined,
				walletMode: 'disabled',
				walletApiKey: undefined
			});
			expect(snapshot).not.toBe(config);
			expect(Object.isFrozen(snapshot)).toBe(true);
			expect(snapshotConfig(snapshot)).toBe(snapshot);

			const privateKey = '3'.repeat(64);
			initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: privateKey });
			expect(snapshot.walletMode).toBe('disabled');
			expect(snapshot.privateKey).toBeUndefined();
			expect(config.walletMode).toBe('private-key');
		});

		test('runWithAppConfig rejects mutable configuration objects', () => {
			expect(() =>
				runWithAppConfig(
					{
						privateKey: undefined,
						walletMode: 'disabled',
						walletApiKey: undefined
					},
					() => undefined
				)
			).toThrow('runWithAppConfig requires a frozen AppConfig snapshot.');
		});

		test('runWithAppConfig makes getters read the snapshot instead of the process singleton', () => {
			const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
			config.walletMode = 'private-key';
			config.privateKey = '0xabcdef';
			const snapshot = snapshotConfig({
				privateKey: undefined,
				walletMode: 'disabled',
				walletApiKey: undefined
			});

			expect(isWalletEnabled()).toBe(true);
			runWithAppConfig(snapshot, () => {
				expect(isWalletEnabled()).toBe(false);
				expect(getWalletMode()).toBe('disabled');
				expect(getPrivateKeyAsHex()).toBeUndefined();
				expect(getRuntimeConfig()).toBe(snapshot);
				expect(getScopedAppConfig()).toBe(snapshot);
			});
			expect(isWalletEnabled()).toBe(true);
			expect(getPrivateKeyAsHex()).toBe('0xabcdef');
			expect(getScopedAppConfig()).toBeUndefined();
			consoleErrorSpy.mockRestore();
		});

		test('warns once when an enabled wallet is read outside a runtime scope', () => {
			const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
			initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: '5'.repeat(64) });

			expect(getWalletMode()).toBe('private-key');
			expect(isWalletEnabled()).toBe(true);

			expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
			expect(consoleErrorSpy).toHaveBeenCalledWith('Wallet configuration was read outside an MCP runtime scope; using the mutable process configuration.');
			consoleErrorSpy.mockRestore();
		});

		test('wrapWithAppConfig keeps later callbacks on the snapshot', () => {
			const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
			config.walletMode = 'private-key';
			const snapshot = snapshotConfig({
				privateKey: undefined,
				walletMode: 'disabled',
				walletApiKey: undefined
			});
			const readMode = wrapWithAppConfig(snapshot, () => getWalletMode());

			expect(getWalletMode()).toBe('private-key');
			expect(readMode()).toBe('disabled');
			initializeConfig({ WALLET_MODE: 'private-key', PRIVATE_KEY: '4'.repeat(64) });
			expect(getWalletMode()).toBe('private-key');
			expect(readMode()).toBe('disabled');
			consoleErrorSpy.mockRestore();
		});
	});

	describe('getPrivateKeyAsHex', () => {
		test('should return undefined if private key is not set', () => {
			config.privateKey = undefined;
			expect(getPrivateKeyAsHex()).toBeUndefined();
		});

		test('should return private key as Hex if set', () => {
			config.privateKey = '0xabcdef1234567890';
			expect(getPrivateKeyAsHex()).toBe('0xabcdef1234567890');
		});
	});

	describe('isWalletEnabled', () => {
		test('should return true when wallet mode is private-key', () => {
			config.walletMode = 'private-key';
			expect(isWalletEnabled()).toBe(true);
		});

		test('should return false when wallet mode is disabled', () => {
			config.walletMode = 'disabled';
			expect(isWalletEnabled()).toBe(false);
		});

		test('should default to disabled when wallet mode is not set', () => {
			expect(loadConfig({}).walletMode).toBe('disabled');
		});
	});

	describe('getWalletMode', () => {
		test('should return the configured wallet mode', () => {
			config.walletMode = 'private-key';
			expect(getWalletMode()).toBe('private-key');
		});

		test('should return disabled as default when not set', () => {
			config.walletMode = 'disabled';
			expect(getWalletMode()).toBe('disabled');
		});
	});
});
