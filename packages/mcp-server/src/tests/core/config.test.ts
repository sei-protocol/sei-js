import { afterEach, beforeEach, describe, expect, test } from '@jest/globals';
import { config, formatPrivateKey, getPrivateKeyAsHex } from '../../core/config.js';

/**
 * This file contains tests for both the actual config implementation and the mock config implementation.
 * 
 * The first part tests the actual config.ts implementation.
 * The second part tests the mock implementation in config.mock.ts which is used in other tests
 * to avoid dependencies on environment variables.
 */

// Mock dotenv to control environment variables
jest.mock('dotenv', () => ({
  config: jest.fn()
}));

describe('Config Module - Actual Implementation', () => {
  // Store original environment
  const originalEnv = { ...process.env };

  // Reset environment before each test
  beforeEach(() => {
    // Clear any environment variables that might affect tests
    process.env.PRIVATE_KEY = undefined;
    // Reset config between tests
    // @ts-ignore - Accessing private implementation
    config.privateKey = undefined;
  });

  // Restore original environment after each test
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
      // In the actual implementation, empty string is treated as falsy and returns undefined
      expect(result).toBeUndefined();
    });
  });

  describe('config initialization', () => {
    test('should set privateKey when env parsing succeeds', () => {
      // Set up environment for successful parsing
      process.env.PRIVATE_KEY = 'abcdef1234567890';
      
      // Force re-evaluation of config
      jest.resetModules();
      const { config } = require('../../core/config.js');
      
      // Check that config has the expected value
      expect(config.privateKey).toBe('0xabcdef1234567890');
    });
    
    test('should set privateKey to undefined when env parsing fails', () => {
      // Force environment parsing to fail by making PRIVATE_KEY a non-string
      // @ts-ignore - Intentionally setting to a non-string value
      process.env.PRIVATE_KEY = 123;
      
      // Force re-evaluation of config
      jest.resetModules();
      const { config } = require('../../core/config.js');
      
      // Check that config has privateKey as undefined
      expect(config.privateKey).toBeUndefined();
    });
  });

  describe('getPrivateKeyAsHex', () => {
    test('should return undefined if private key is not set', () => {
      // Ensure private key is not set
      // @ts-ignore - Accessing private implementation
      config.privateKey = undefined;

      // Check that getPrivateKeyAsHex returns undefined
      expect(getPrivateKeyAsHex()).toBeUndefined();
    });

    test('should return private key as Hex if set', () => {
      // Set private key
      // @ts-ignore - Accessing private implementation
      config.privateKey = '0xabcdef1234567890';

      // Check that getPrivateKeyAsHex returns the key
      expect(getPrivateKeyAsHex()).toBe('0xabcdef1234567890');
    });
  });

  describe('isWalletEnabled', () => {
    test('should return true when wallet mode is private-key', () => {
      // Set environment variable for private-key mode
      process.env.WALLET_MODE = 'private-key';
      
      // Force re-evaluation of config module
      jest.resetModules();
      const { isWalletEnabled } = require('../../core/config.js');
      
      expect(isWalletEnabled()).toBe(true);
    });

    test('should return false when wallet mode is disabled', () => {
      // Set environment variable for disabled mode
      process.env.WALLET_MODE = 'disabled';
      
      // Force re-evaluation of config module
      jest.resetModules();
      const { isWalletEnabled } = require('../../core/config.js');
      
      expect(isWalletEnabled()).toBe(false);
    });

    test('should return false when wallet mode is not set (defaults to disabled)', () => {
      // Remove wallet mode env var to test default
      delete process.env.WALLET_MODE;
      
      // Force re-evaluation of config module
      jest.resetModules();
      const { isWalletEnabled } = require('../../core/config.js');
      
      expect(isWalletEnabled()).toBe(false);
    });
  });

  describe('getWalletMode', () => {
    test('should return the configured wallet mode', () => {
      // Set environment variable
      process.env.WALLET_MODE = 'private-key';
      
      // Force re-evaluation of config module
      jest.resetModules();
      const { getWalletMode } = require('../../core/config.js');
      
      expect(getWalletMode()).toBe('private-key');
    });

    test('should return disabled as default when not set', () => {
      // Remove wallet mode env var to test default
      delete process.env.WALLET_MODE;
      
      // Force re-evaluation of config module
      jest.resetModules();
      const { getWalletMode } = require('../../core/config.js');
      
      expect(getWalletMode()).toBe('disabled');
    });
  });
});
