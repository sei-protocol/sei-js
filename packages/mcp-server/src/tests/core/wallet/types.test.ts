import { describe, test, expect } from '@jest/globals';
import { WalletProviderError } from '../../../core/wallet/types.js';

describe('WalletProviderError', () => {
  test('should create error with message, provider, and code properties', () => {
    const message = 'Test error message';
    const provider = 'test-provider';
    const code = 'TEST_CODE';

    const error = new WalletProviderError(message, provider, code);

    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(WalletProviderError);
    expect(error.message).toBe(message);
    expect(error.provider).toBe(provider);
    expect(error.code).toBe(code);
    expect(error.name).toBe('WalletProviderError');
  });

  test('should have correct error name', () => {
    const error = new WalletProviderError('Test message', 'test-provider', 'TEST_CODE');
    
    expect(error.name).toBe('WalletProviderError');
  });

  test('should be throwable and catchable', () => {
    const message = 'Test error';
    const provider = 'test-provider';
    const code = 'TEST_CODE';

    expect(() => {
      throw new WalletProviderError(message, provider, code);
    }).toThrow(WalletProviderError);

    try {
      throw new WalletProviderError(message, provider, code);
    } catch (error) {
      expect(error).toBeInstanceOf(WalletProviderError);
      if (error instanceof WalletProviderError) {
        expect(error.message).toBe(message);
        expect(error.provider).toBe(provider);
        expect(error.code).toBe(code);
      }
    }
  });
});
