import { describe, test, expect } from '@jest/globals';
import { DisabledWalletProvider } from '../../../../core/wallet/providers/disabled.js';
import { WalletProviderError } from '../../../../core/wallet/types.js';

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
      const mockTx = { to: '0x123', value: '0x1' };
      
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
