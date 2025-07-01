import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { getWalletProvider, resetWalletProvider } from '../../../core/wallet/index.js';
import { PrivateKeyWalletProvider } from '../../../core/wallet/providers/private-key.js';
import { DisabledWalletProvider } from '../../../core/wallet/providers/disabled.js';

// Mock dependencies
jest.mock('../../../core/config.js', () => ({
  getWalletMode: jest.fn()
}));

jest.mock('../../../core/wallet/providers/private-key.js', () => ({
  PrivateKeyWalletProvider: jest.fn()
}));

jest.mock('../../../core/wallet/providers/disabled.js', () => ({
  DisabledWalletProvider: jest.fn()
}));

import { getWalletMode } from '../../../core/config.js';

describe('Wallet Provider', () => {
  const mockPrivateKeyProvider = {
    getName: () => 'private-key',
    isAvailable: () => true
  };

  const mockDisabledProvider = {
    getName: () => 'disabled',
    isAvailable: () => false
  };

  beforeEach(() => {
    // Reset wallet provider instance before each test
    resetWalletProvider();
    
    // Reset all mocks
    jest.resetAllMocks();
    
    // Setup default mock implementations
    (PrivateKeyWalletProvider as jest.Mock).mockImplementation(() => mockPrivateKeyProvider);
    (DisabledWalletProvider as jest.Mock).mockImplementation(() => mockDisabledProvider);
  });

  describe('getWalletProvider', () => {
    test('should create and return PrivateKeyWalletProvider for private-key mode', () => {
      (getWalletMode as jest.Mock).mockReturnValue('private-key');

      const provider = getWalletProvider();

      expect(getWalletMode).toHaveBeenCalled();
      expect(PrivateKeyWalletProvider).toHaveBeenCalled();
      expect(provider).toBe(mockPrivateKeyProvider);
    });

    test('should create and return DisabledWalletProvider for disabled mode', () => {
      (getWalletMode as jest.Mock).mockReturnValue('disabled');

      const provider = getWalletProvider();

      expect(getWalletMode).toHaveBeenCalled();
      expect(DisabledWalletProvider).toHaveBeenCalled();
      expect(provider).toBe(mockDisabledProvider);
    });

    test('should return cached provider on subsequent calls', () => {
      (getWalletMode as jest.Mock).mockReturnValue('private-key');

      // First call
      const provider1 = getWalletProvider();
      
      // Reset mocks to verify they aren't called again
      jest.clearAllMocks();
      
      // Second call should return cached provider
      const provider2 = getWalletProvider();

      expect(getWalletMode).not.toHaveBeenCalled();
      expect(PrivateKeyWalletProvider).not.toHaveBeenCalled();
      expect(provider2).toBe(provider1);
    });

    test('should throw error for unknown wallet mode', () => {
      (getWalletMode as jest.Mock).mockReturnValue('unknown-mode');

      expect(() => getWalletProvider()).toThrow('Unknown wallet mode: unknown-mode');
    });
  });

  describe('resetWalletProvider', () => {
    test('should reset the wallet provider instance', () => {
      (getWalletMode as jest.Mock).mockReturnValue('private-key');

      // Create separate mock instances for each call
      const mockProvider1 = {
        getName: () => 'private-key',
        isAvailable: () => true
      };
      const mockProvider2 = {
        getName: () => 'private-key', 
        isAvailable: () => true
      };

      // Mock constructor to return different instances on each call
      (PrivateKeyWalletProvider as jest.Mock)
        .mockImplementationOnce(() => mockProvider1)
        .mockImplementationOnce(() => mockProvider2);

      // Create provider instance
      const provider1 = getWalletProvider();
      expect(provider1).toBe(mockProvider1);

      // Reset the provider
      resetWalletProvider();

      // Create new provider instance
      const provider2 = getWalletProvider();
      expect(provider2).toBe(mockProvider2);

      // Should have created a new instance
      expect(PrivateKeyWalletProvider).toHaveBeenCalledTimes(2);
      expect(provider2).not.toBe(provider1);
    });
  });
});
