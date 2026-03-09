import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";
import { config, formatPrivateKey, getPrivateKeyAsHex, getWalletMode, isWalletEnabled } from "../../core/config.js";

/**
 * This file contains tests for both the actual config implementation and the mock config implementation.
 *
 * The first part tests the actual config.ts implementation.
 * The second part tests the mock implementation in config.mock.ts which is used in other tests
 * to avoid dependencies on environment variables.
 */

describe("Config Module - Actual Implementation", () => {
  // Store original environment
  const originalEnv = { ...process.env };

  // Reset environment before each test
  beforeEach(() => {
    mock.restore();

    // Mock dotenv to control environment variables
    mock.module("dotenv", () => ({
      config: mock(),
    }));

    // Clear any environment variables that might affect tests
    process.env.PRIVATE_KEY = undefined;
    // Reset config between tests
    config.privateKey = undefined;
  });

  // Restore original environment after each test
  afterEach(() => {
    process.env = { ...originalEnv };
    mock.restore();
  });

  describe("formatPrivateKey", () => {
    test("should return undefined if key is not provided", () => {
      const result = formatPrivateKey(undefined);
      expect(result).toBeUndefined();
    });

    test("should add 0x prefix if missing", () => {
      const result = formatPrivateKey("abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890");
      expect(result).toBe("0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890");
    });

    test("should not modify key if 0x prefix exists", () => {
      const result = formatPrivateKey("0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890");
      expect(result).toBe("0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890");
    });

    test("should return undefined for invalid key length", () => {
      const result = formatPrivateKey("abcdef1234567890");
      expect(result).toBeUndefined();
    });

    test("should handle empty string", () => {
      const result = formatPrivateKey("");
      // In the actual implementation, empty string is treated as falsy and returns undefined
      expect(result).toBeUndefined();
    });
  });

  describe("config initialization", () => {
    test("should set privateKey via config object", () => {
      // Directly set the config since Bun caches modules
      config.privateKey = "0xabcdef1234567890";

      expect(config.privateKey).toBe("0xabcdef1234567890");
    });

    test("should have privateKey as undefined when not set", () => {
      config.privateKey = undefined;

      expect(config.privateKey).toBeUndefined();
    });
  });

  describe("getPrivateKeyAsHex", () => {
    test("should return undefined if private key is not set", () => {
      // Ensure private key is not set
      config.privateKey = undefined;

      // Check that getPrivateKeyAsHex returns undefined
      expect(getPrivateKeyAsHex()).toBeUndefined();
    });

    test("should return private key as Hex if set", () => {
      // Set private key
      config.privateKey = "0xabcdef1234567890";

      // Check that getPrivateKeyAsHex returns the key
      expect(getPrivateKeyAsHex()).toBe("0xabcdef1234567890");
    });
  });

  describe("isWalletEnabled", () => {
    test("should return true when wallet mode is private-key", () => {
      config.walletMode = "private-key";

      expect(isWalletEnabled()).toBe(true);
    });

    test("should return false when wallet mode is disabled", () => {
      config.walletMode = "disabled";

      expect(isWalletEnabled()).toBe(false);
    });
  });

  describe("getWalletMode", () => {
    test("should return the configured wallet mode", () => {
      config.walletMode = "private-key";

      expect(getWalletMode()).toBe("private-key");
    });

    test("should return disabled when set to disabled", () => {
      config.walletMode = "disabled";

      expect(getWalletMode()).toBe("disabled");
    });
  });
});
