import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { PrivateKeyWalletProvider } from '../../../../core/wallet/providers/private-key.js';
import { WalletProviderError } from '../../../../core/wallet/types.js';
import { createWalletClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';

// Mock dependencies
jest.mock('../../../../core/config.js', () => ({
  getPrivateKeyAsHex: jest.fn()
}));

jest.mock('../../../../core/chains.js', () => ({
  getChain: jest.fn(),
  getRpcUrl: jest.fn()
}));

jest.mock('viem', () => ({
  createWalletClient: jest.fn(),
  http: jest.fn()
}));

jest.mock('viem/accounts', () => ({
  privateKeyToAccount: jest.fn()
}));

import { getPrivateKeyAsHex } from '../../../../core/config.js';
import { getChain, getRpcUrl } from '../../../../core/chains.js';

describe('PrivateKeyWalletProvider', () => {
  const mockPrivateKey = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
  const mockAddress = '0x1234567890123456789012345678901234567890';
  const mockAccount = { address: mockAddress };
  const mockChain = { id: 1, name: 'Sei' };
  const mockRpcUrl = 'https://rpc.sei.io';
  const mockTransport = {};
  const mockWalletClient = { account: mockAccount, chain: mockChain };

  beforeEach(() => {
    jest.resetAllMocks();
    
    // Setup default mocks
    (getChain as jest.Mock).mockReturnValue(mockChain);
    (getRpcUrl as jest.Mock).mockReturnValue(mockRpcUrl);
    (http as jest.Mock).mockReturnValue(mockTransport);
    (privateKeyToAccount as jest.Mock).mockReturnValue(mockAccount);
    (createWalletClient as jest.Mock).mockReturnValue(mockWalletClient);
  });

  describe('constructor and isAvailable', () => {
    test('should be available when private key is configured', () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.isAvailable()).toBe(true);
      expect(getPrivateKeyAsHex).toHaveBeenCalled();
    });

    test('should not be available when private key is not configured', () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.isAvailable()).toBe(false);
    });
  });

  describe('getName', () => {
    test('should return "private-key"', () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.getName()).toBe('private-key');
    });
  });

  describe('getAddress', () => {
    test('should return address when private key is configured', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();
      const address = await provider.getAddress();

      expect(privateKeyToAccount).toHaveBeenCalledWith(mockPrivateKey);
      expect(address).toBe(mockAddress);
    });

    test('should throw WalletProviderError when private key is not configured', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();

      await expect(provider.getAddress()).rejects.toThrow(WalletProviderError);
      await expect(provider.getAddress()).rejects.toThrow('Private key not configured');
    });
  });

  describe('signTransaction', () => {
    test('should throw not implemented error when private key is configured', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();
      const mockTx = { to: '0x123', value: '0x1' };

      await expect(provider.signTransaction(mockTx)).rejects.toThrow(WalletProviderError);
      await expect(provider.signTransaction(mockTx)).rejects.toThrow('Direct transaction signing not implemented');
    });

    test('should throw private key error when private key is not configured', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();
      const mockTx = { to: '0x123', value: '0x1' };

      await expect(provider.signTransaction(mockTx)).rejects.toThrow(WalletProviderError);
      await expect(provider.signTransaction(mockTx)).rejects.toThrow('Private key not configured');
    });
  });

  describe('getWalletClient', () => {
    test('should create and return wallet client when private key is configured', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();
      const client = await provider.getWalletClient('sei');

      expect(getChain).toHaveBeenCalledWith('sei');
      expect(getRpcUrl).toHaveBeenCalledWith('sei');
      expect(http).toHaveBeenCalledWith(mockRpcUrl);
      expect(privateKeyToAccount).toHaveBeenCalledWith(mockPrivateKey);
      expect(createWalletClient).toHaveBeenCalledWith({
        account: mockAccount,
        chain: mockChain,
        transport: mockTransport
      });
      expect(client).toBe(mockWalletClient);
    });

    test('should throw WalletProviderError when private key is not configured', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();

      await expect(provider.getWalletClient('sei')).rejects.toThrow(WalletProviderError);
      await expect(provider.getWalletClient('sei')).rejects.toThrow('Private key not configured');
    });
  });
});
