import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import { config, formatPrivateKey, getPrivateKeyAsHex } from '../../core/config.js';

const loadConfig = () => import(`../../core/config.js?reload=${Date.now()}-${Math.random()}`);

describe('Config Module - Actual Implementation', () => {
	const originalEnv = { ...process.env };

	beforeEach(() => {
		process.env.PRIVATE_KEY = undefined;
		// @ts-expect-error - Accessing private implementation
		config.privateKey = undefined;
	});

	afterEach(() => {
		process.env = { ...originalEnv };
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

	describe('config initialization', () => {
		test('should set privateKey when env parsing succeeds', async () => {
			process.env.PRIVATE_KEY = 'abcdef1234567890';
			const { config: freshConfig } = await loadConfig();
			expect(freshConfig.privateKey).toBe('0xabcdef1234567890');
		});

		test('should set privateKey to undefined when env parsing fails', async () => {
			// @ts-expect-error - Intentionally setting to a non-string value
			process.env.PRIVATE_KEY = 123;
			const { config: freshConfig } = await loadConfig();
			expect(freshConfig.privateKey).toBeUndefined();
		});
	});

	describe('getPrivateKeyAsHex', () => {
		test('should return undefined if private key is not set', () => {
			// @ts-expect-error - Accessing private implementation
			config.privateKey = undefined;
			expect(getPrivateKeyAsHex()).toBeUndefined();
		});

		test('should return private key as Hex if set', () => {
			// @ts-expect-error - Accessing private implementation
			config.privateKey = '0xabcdef1234567890';
			expect(getPrivateKeyAsHex()).toBe('0xabcdef1234567890');
		});
	});

	describe('isWalletEnabled', () => {
		test('should return true when wallet mode is private-key', async () => {
			process.env.WALLET_MODE = 'private-key';
			const { isWalletEnabled } = await loadConfig();
			expect(isWalletEnabled()).toBe(true);
		});

		test('should return false when wallet mode is disabled', async () => {
			process.env.WALLET_MODE = 'disabled';
			const { isWalletEnabled } = await loadConfig();
			expect(isWalletEnabled()).toBe(false);
		});

		test('should return false when wallet mode is not set (defaults to disabled)', async () => {
			delete process.env.WALLET_MODE;
			const { isWalletEnabled } = await loadConfig();
			expect(isWalletEnabled()).toBe(false);
		});
	});

	describe('getWalletMode', () => {
		test('should return the configured wallet mode', async () => {
			process.env.WALLET_MODE = 'private-key';
			const { getWalletMode } = await loadConfig();
			expect(getWalletMode()).toBe('private-key');
		});

		test('should return disabled as default when not set', async () => {
			delete process.env.WALLET_MODE;
			const { getWalletMode } = await loadConfig();
			expect(getWalletMode()).toBe('disabled');
		});
	});
});
