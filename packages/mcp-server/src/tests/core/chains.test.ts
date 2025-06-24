import { describe, expect, test } from '@jest/globals';
import type { Chain } from 'viem';
import { sei, seiDevnet, seiTestnet } from 'viem/chains';
import {
	DEFAULT_CHAIN_ID,
	DEFAULT_NETWORK,
	DEFAULT_RPC_URL,
	chainMap,
	getChain,
	getRpcUrl,
	getSupportedNetworks,
	networkNameMap,
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
			expect(chainMap[713715]).toBe(seiDevnet);
		});

		test('networkNameMap contains expected mappings', () => {
			expect(networkNameMap.sei).toBe(1329);
			expect(networkNameMap['sei-testnet']).toBe(1328);
			expect(networkNameMap['sei-devnet']).toBe(713715);
		});

		test('rpcUrlMap contains expected URLs', () => {
			expect(rpcUrlMap[1329]).toBe('https://evm-rpc.sei-apis.com');
			expect(rpcUrlMap[1328]).toBe('https://evm-rpc-testnet.sei-apis.com');
			expect(rpcUrlMap[713715]).toBe('https://evm-rpc-arctic-1.sei-apis.com');
		});
	});

	// Test resolveChainId function
	describe('resolveChainId', () => {
		test('resolves number chain IDs directly', () => {
			expect(resolveChainId(1329)).toBe(1329);
			expect(resolveChainId(1328)).toBe(1328);
			expect(resolveChainId(713715)).toBe(713715);
		});

		test('resolves network names to chain IDs', () => {
			expect(resolveChainId('sei')).toBe(1329);
			expect(resolveChainId('sei-testnet')).toBe(1328);
			expect(resolveChainId('sei-devnet')).toBe(713715);
		});

		test('resolves case-insensitive network names', () => {
			expect(resolveChainId('SEI')).toBe(1329);
			expect(resolveChainId('Sei-Testnet')).toBe(1328);
			expect(resolveChainId('SEI-DEVNET')).toBe(713715);
		});

		test('resolves string numbers to chain IDs', () => {
			expect(resolveChainId('1329')).toBe(1329);
			expect(resolveChainId('1328')).toBe(1328);
			expect(resolveChainId('713715')).toBe(713715);
		});

		test('defaults to DEFAULT_CHAIN_ID for unknown network names', () => {
			expect(resolveChainId('unknown-network')).toBe(DEFAULT_CHAIN_ID);
		});
	});

	// Test getChain function
	describe('getChain', () => {
		test('returns chain for numeric chain ID', () => {
			expect(getChain(1329)).toBe(sei);
			expect(getChain(1328)).toBe(seiTestnet);
			expect(getChain(713715)).toBe(seiDevnet);
		});

		test('returns chain for network name', () => {
			expect(getChain('sei')).toBe(sei);
			expect(getChain('sei-testnet')).toBe(seiTestnet);
			expect(getChain('sei-devnet')).toBe(seiDevnet);
		});

		test('returns sei chain when network name exists but chain mapping is missing', () => {
			// Create a temporary entry in networkNameMap for a non-existent chain ID
			const originalNetworkNameMap = { ...networkNameMap };
			// @ts-ignore - Intentionally modifying for test
			networkNameMap['test-network'] = 9999;

			try {
				// This should return sei as fallback since chainMap[9999] doesn't exist
				expect(getChain('test-network')).toBe(sei);
			} finally {
				// Restore the original map
				// @ts-ignore - Restoring original state
				for (const key of Object.keys(networkNameMap)) {
					if (key !== 'sei' && key !== 'sei-testnet' && key !== 'sei-devnet') {
						// @ts-ignore - Cleanup
						delete networkNameMap[key];
					}
				}
			}
		});

		test('returns chain for case-insensitive network name', () => {
			expect(getChain('SEI')).toBe(sei);
			expect(getChain('Sei-Testnet')).toBe(seiTestnet);
			expect(getChain('SEI-DEVNET')).toBe(seiDevnet);
		});

		test('returns default chain when no parameter is provided', () => {
			expect(getChain()).toBe(sei);
		});

		test('returns sei chain for unknown numeric chain ID', () => {
			expect(getChain(9999)).toBe(sei);
		});

		test('throws error for numeric string that is not in networkNameMap', () => {
			// This should throw an error just like other unknown network names
			expect(() => getChain('9999')).toThrow('Unsupported network: 9999');
		});

		test('throws error for unknown network name', () => {
			expect(() => getChain('unknown-network')).toThrow('Unsupported network: unknown-network');
		});
	});

	// Test getRpcUrl function
	describe('getRpcUrl', () => {
		test('returns correct RPC URL for numeric chain ID', () => {
			expect(getRpcUrl(1329)).toBe('https://evm-rpc.sei-apis.com');
			expect(getRpcUrl(1328)).toBe('https://evm-rpc-testnet.sei-apis.com');
			expect(getRpcUrl(713715)).toBe('https://evm-rpc-arctic-1.sei-apis.com');
		});

		test('returns correct RPC URL for network name', () => {
			expect(getRpcUrl('sei')).toBe('https://evm-rpc.sei-apis.com');
			expect(getRpcUrl('sei-testnet')).toBe('https://evm-rpc-testnet.sei-apis.com');
			expect(getRpcUrl('sei-devnet')).toBe('https://evm-rpc-arctic-1.sei-apis.com');
		});

		test('returns default RPC URL for unknown chain ID', () => {
			expect(getRpcUrl(9999)).toBe(DEFAULT_RPC_URL);
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
			expect(networks).toContain('sei-devnet');

			// Check that the list is sorted
			expect(networks).toEqual([...networks].sort());

			// Check that the length matches the expected number of networks
			expect(networks.length).toBe(Object.keys(networkNameMap).length);
		});
	});
});
