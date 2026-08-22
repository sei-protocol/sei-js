import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import type { Chain } from 'viem';
import { sei, seiTestnet } from 'viem/chains';
import {
	chainMap,
	DEFAULT_CHAIN_ID,
	DEFAULT_NETWORK,
	DEFAULT_RPC_URL,
	getChain,
	getRpcUrl,
	getSupportedNetworks,
	networkNameMap,
	networkSchema,
	normalizeNetwork,
	resolveChainId,
	rpcUrlMap
} from '../../core/chains.js';

describe('chains module', () => {
	// Test constants
	describe('constants', () => {
		test('DEFAULT_NETWORK is set correctly', () => {
			expect(DEFAULT_NETWORK).toBe('sei');
		});

		test('DEFAULT_RPC_URL is set correctly', () => {
			expect(DEFAULT_RPC_URL).toBe('https://evm-rpc.sei-apis.com');
		});

		test('DEFAULT_CHAIN_ID is set correctly', () => {
			expect(DEFAULT_CHAIN_ID).toBe(1329);
		});

		test('chainMap contains expected chains', () => {
			expect(chainMap[1329]).toBe(sei);
			expect(chainMap[1328]).toBe(seiTestnet);
		});

		test('networkNameMap contains expected mappings', () => {
			expect(networkNameMap.sei).toBe(1329);
			expect(networkNameMap['sei-testnet']).toBe(1328);
		});

		test('rpcUrlMap contains expected URLs', () => {
			expect(rpcUrlMap[1329]).toBe('https://evm-rpc.sei-apis.com');
			expect(rpcUrlMap[1328]).toBe('https://evm-rpc-testnet.sei-apis.com');
		});
	});

	// Test resolveChainId function
	describe('resolveChainId', () => {
		test('resolves number chain IDs directly', () => {
			expect(resolveChainId(1329)).toBe(1329);
			expect(resolveChainId(1328)).toBe(1328);
		});

		test('resolves network names to chain IDs', () => {
			expect(resolveChainId('sei')).toBe(1329);
			expect(resolveChainId('sei-testnet')).toBe(1328);
		});

		test('resolves case-insensitive network names', () => {
			expect(resolveChainId('SEI')).toBe(1329);
			expect(resolveChainId('Sei-Testnet')).toBe(1328);
		});

		test('resolves string numbers to chain IDs', () => {
			expect(resolveChainId('1329')).toBe(1329);
			expect(resolveChainId('1328')).toBe(1328);
		});

		test('resolves hex-encoded chain IDs', () => {
			expect(resolveChainId('0x531')).toBe(1329);
			expect(resolveChainId('0x530')).toBe(1328);
		});

		test.each(['unknown-network', '', '   ', '1e3', '9999'])('rejects unknown selector %s', (selector) => {
			expect(() => resolveChainId(selector)).toThrow(`Unsupported network: ${selector}`);
		});

		test('rejects unsupported numeric chain IDs', () => {
			expect(() => resolveChainId(9999)).toThrow('Unsupported network: 9999');
		});
	});

	describe('normalizeNetwork', () => {
		test.each([
			['sei', 'sei'],
			['1329', 'sei'],
			['0x531', 'sei'],
			['sei-testnet', 'sei-testnet'],
			['1328', 'sei-testnet'],
			['0x530', 'sei-testnet']
		] as const)('normalizes %s to %s', (selector, expected) => {
			expect(normalizeNetwork(selector)).toBe(expected);
		});
	});

	describe('networkSchema', () => {
		test('accepts only advertised supported string selectors', () => {
			expect(['sei', '1329', '0x531'].map((selector) => networkSchema.parse(selector))).toEqual(['sei', 'sei', 'sei']);
			expect(['sei-testnet', '1328', '0x530'].map((selector) => networkSchema.parse(selector))).toEqual(['sei-testnet', 'sei-testnet', 'sei-testnet']);
			expect(['SEI', ' Sei-Testnet ', '0X531', ' 0X530 '].map((selector) => networkSchema.parse(selector))).toEqual([
				'sei',
				'sei-testnet',
				'sei',
				'sei-testnet'
			]);
			expect(networkSchema.safeParse('unknown-network').success).toBe(false);
			expect(networkSchema.safeParse(' 9999 ').success).toBe(false);
			expect(networkSchema.safeParse(1329).success).toBe(false);
		});
	});

	// Test getChain function
	describe('getChain', () => {
		test('returns chain for numeric chain ID', () => {
			expect(getChain(1329)).toBe(sei);
			expect(getChain(1328)).toBe(seiTestnet);
		});

		test('returns chain for network name', () => {
			expect(getChain('sei')).toBe(sei);
			expect(getChain('sei-testnet')).toBe(seiTestnet);
		});

		test('returns chain for case-insensitive network name', () => {
			expect(getChain('SEI')).toBe(sei);
			expect(getChain('Sei-Testnet')).toBe(seiTestnet);
		});

		test('returns default chain when no parameter is provided', () => {
			expect(getChain()).toBe(sei);
		});

		test('accepts supported decimal and hexadecimal string IDs', () => {
			expect(getChain('1329')).toBe(sei);
			expect(getChain('0x530')).toBe(seiTestnet);
		});

		test('throws error for unsupported numeric strings', () => {
			expect(() => getChain('9999')).toThrow('Unsupported network: 9999');
		});

		test('throws error for unknown network name', () => {
			expect(() => getChain('unknown-network')).toThrow('Unsupported network: unknown-network');
		});

		test('throws error for unsupported numeric chain IDs', () => {
			expect(() => getChain(9999)).toThrow('Unsupported network: 9999');
		});
	});

	// Test getRpcUrl function
	describe('getRpcUrl', () => {
		test('returns correct RPC URL for numeric chain ID', () => {
			expect(getRpcUrl(1329)).toBe('https://evm-rpc.sei-apis.com');
			expect(getRpcUrl(1328)).toBe('https://evm-rpc-testnet.sei-apis.com');
		});

		test('returns correct RPC URL for network name', () => {
			expect(getRpcUrl('sei')).toBe('https://evm-rpc.sei-apis.com');
			expect(getRpcUrl('sei-testnet')).toBe('https://evm-rpc-testnet.sei-apis.com');
		});

		test('accepts supported decimal and hexadecimal string IDs', () => {
			expect(getRpcUrl('1329')).toBe('https://evm-rpc.sei-apis.com');
			expect(getRpcUrl('0x530')).toBe('https://evm-rpc-testnet.sei-apis.com');
		});

		test('rejects unknown chain IDs instead of falling back', () => {
			expect(() => getRpcUrl(9999)).toThrow('Unsupported network: 9999');
			expect(() => getRpcUrl('unknown-network')).toThrow('Unsupported network: unknown-network');
		});

		test('returns default RPC URL when no parameter is provided', () => {
			expect(getRpcUrl()).toBe(DEFAULT_RPC_URL);
		});
	});

	// Test getSupportedNetworks function
	describe('getSupportedNetworks', () => {
		test('returns sorted list of supported networks', () => {
			const networks = getSupportedNetworks();

			// Check that all expected networks are included
			expect(networks).toContain('sei');
			expect(networks).toContain('sei-testnet');

			// Check that the list is sorted
			expect(networks).toEqual([...networks].sort());

			// Check that the length matches the expected number of networks
			expect(networks.length).toBe(Object.keys(networkNameMap).length);
		});
	});
});
