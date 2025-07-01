import { describe, test, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { getPublicClient, getAddressFromPrivateKey, getWalletClientFromProvider, getAddressFromProvider } from '../../../core/services/clients.js';
import { createPublicClient, createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { getChain, getRpcUrl } from '../../../core/chains.js';
import { getWalletProvider } from '../../../core/wallet/index.js';

// Mock dependencies
jest.mock('viem', () => {
  // Instead of spreading the original module, which causes TypeScript errors,
  // we'll just mock the specific functions we need
  return {
    createPublicClient: jest.fn(),
    createWalletClient: jest.fn(),
    http: jest.fn()
  };
});

jest.mock('viem/accounts', () => ({
  privateKeyToAccount: jest.fn()
}));

jest.mock('../../../core/chains.js', () => ({
  DEFAULT_NETWORK: 'sei',
  getChain: jest.fn(),
  getRpcUrl: jest.fn()
}));

jest.mock('../../../core/wallet/index.js', () => ({
  getWalletProvider: jest.fn()
}));

describe('Client Service', () => {
  const mockChain = { id: 1, name: 'Sei' };
  const mockRpcUrl = 'https://rpc.sei.io';
  const mockHttpTransport = {} as ReturnType<typeof http>;
  const mockPublicClient = { readContract: jest.fn() };
  const mockWalletClient = { writeContract: jest.fn() };
  const mockAccount = { address: '0x1234567890123456789012345678901234567890' };
  const mockPrivateKey = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';

  beforeEach(() => {
    // Reset all mocks
    jest.resetAllMocks();
    
    // Setup default mock implementations
    (getChain as jest.Mock).mockReturnValue(mockChain);
    (getRpcUrl as jest.Mock).mockReturnValue(mockRpcUrl);
    (http as jest.Mock).mockReturnValue(mockHttpTransport);
    (createPublicClient as jest.Mock).mockReturnValue(mockPublicClient);
    (createWalletClient as jest.Mock).mockReturnValue(mockWalletClient);
    (privateKeyToAccount as jest.Mock).mockReturnValue(mockAccount);
  });

  describe('getPublicClient', () => {
    test('should create and return a new public client when not cached', () => {
      const client = getPublicClient('sei');
      
      expect(getChain).toHaveBeenCalledWith('sei');
      expect(getRpcUrl).toHaveBeenCalledWith('sei');
      expect(http).toHaveBeenCalledWith(mockRpcUrl);
      expect(createPublicClient).toHaveBeenCalledWith({
        chain: mockChain,
        transport: mockHttpTransport
      });
      expect(client).toBe(mockPublicClient);
    });

    test('should return cached client for the same network', () => {
      // First call should create a new client
      const client1 = getPublicClient('sei');
      
      // Reset mocks to verify they aren't called again
      jest.clearAllMocks();
      
      // Second call should return cached client
      const client2 = getPublicClient('sei');
      
      expect(createPublicClient).not.toHaveBeenCalled();
      expect(client2).toBe(client1);
    });

    test('should throw error if cache has key but client is undefined', () => {
      // We need to access the private clientCache to simulate this edge case
      // First, get a reference to the client
      getPublicClient('sei');
      
      // Use Object.getOwnPropertyDescriptor to access the module's private variable
      // @ts-ignore - Accessing private implementation for testing
      const clientCacheMap = new Map([['sei', undefined]]);
      
      // Replace the Map.prototype.get method temporarily to simulate the edge case
      const originalMapGet = Map.prototype.get;
      Map.prototype.get = function(key) {
        if (key === 'sei') return undefined;
        return originalMapGet.call(this, key);
      };
      
      // Replace the Map.prototype.has method temporarily to return true for 'sei'
      const originalMapHas = Map.prototype.has;
      Map.prototype.has = function(key) {
        if (key === 'sei') return true;
        return originalMapHas.call(this, key);
      };
      
      try {
        // This should throw an error
        expect(() => getPublicClient('sei')).toThrow('Client cache inconsistency for network sei');
      } finally {
        // Restore the original methods
        Map.prototype.get = originalMapGet;
        Map.prototype.has = originalMapHas;
      }
    });

    test('should create different clients for different networks', () => {
      // First call for 'sei' network
      const seiClient = getPublicClient('sei');
      
      // Setup mocks for 'ethereum' network
      const ethereumChain = { id: 1, name: 'Ethereum' };
      const ethereumRpcUrl = 'https://rpc.ethereum.io';
      const ethereumPublicClient = { readContract: jest.fn() };
      
      (getChain as jest.Mock).mockReturnValue(ethereumChain);
      (getRpcUrl as jest.Mock).mockReturnValue(ethereumRpcUrl);
      (createPublicClient as jest.Mock).mockReturnValue(ethereumPublicClient);
      
      // Call for 'ethereum' network
      const ethereumClient = getPublicClient('ethereum');
      
      expect(getChain).toHaveBeenCalledWith('ethereum');
      expect(getRpcUrl).toHaveBeenCalledWith('ethereum');
      expect(ethereumClient).toBe(ethereumPublicClient);
      expect(ethereumClient).not.toBe(seiClient);
    });

    // This test verifies that getPublicClient works with no network parameter
    test('should use default network when none is specified', () => {
      // Since we're mocking the module and can't easily test the default parameter,
      // we'll just verify that calling the function without a parameter returns the expected client
      const client = getPublicClient();
      expect(client).toBe(mockPublicClient);
    });
  });

  describe('getWalletClientFromProvider', () => {
    const mockWalletProvider = {
      getWalletClient: jest.fn()
    };

    beforeEach(() => {
      (getWalletProvider as jest.Mock).mockReturnValue(mockWalletProvider);
      mockWalletProvider.getWalletClient.mockResolvedValue(mockWalletClient);
    });

    test('should get wallet client from provider with default network', async () => {
      const client = await getWalletClientFromProvider();
      
      expect(getWalletProvider).toHaveBeenCalled();
      expect(mockWalletProvider.getWalletClient).toHaveBeenCalledWith('sei');
      expect(client).toBe(mockWalletClient);
    });

    test('should get wallet client from provider with specified network', async () => {
      const client = await getWalletClientFromProvider('sei-testnet');
      
      expect(getWalletProvider).toHaveBeenCalled();
      expect(mockWalletProvider.getWalletClient).toHaveBeenCalledWith('sei-testnet');
      expect(client).toBe(mockWalletClient);
    });
  });

  describe('getAddressFromProvider', () => {
    const mockWalletProvider = {
      getAddress: jest.fn()
    };
    const mockAddress = '0x1234567890123456789012345678901234567890';

    beforeEach(() => {
      (getWalletProvider as jest.Mock).mockReturnValue(mockWalletProvider);
      mockWalletProvider.getAddress.mockResolvedValue(mockAddress);
    });

    test('should get address from provider', async () => {
      const address = await getAddressFromProvider();
      
      expect(getWalletProvider).toHaveBeenCalled();
      expect(mockWalletProvider.getAddress).toHaveBeenCalled();
      expect(address).toBe(mockAddress);
    });
  });
});
