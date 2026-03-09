import { beforeEach, describe, expect, mock, test } from "bun:test";

// Only mock config — do NOT mock provider modules to avoid contaminating provider tests
mock.module("../../../core/config.js", () => ({
  getWalletMode: mock(),
  getPrivateKeyAsHex: mock(),
  config: { privateKey: undefined, walletMode: "disabled" },
  formatPrivateKey: mock(),
  isWalletEnabled: mock(),
}));

import { getPrivateKeyAsHex, getWalletMode } from "../../../core/config.js";
import { getWalletProvider, resetWalletProvider } from "../../../core/wallet/index.js";

describe("Wallet Provider", () => {
  beforeEach(() => {
    // Reset wallet provider instance before each test
    resetWalletProvider();

    // Reset config mocks
    (getWalletMode as ReturnType<typeof mock>).mockReset();
    (getPrivateKeyAsHex as ReturnType<typeof mock>).mockReset();

    // Default: private key available so PrivateKeyWalletProvider constructor works
    (getPrivateKeyAsHex as ReturnType<typeof mock>).mockReturnValue("0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef");
  });

  describe("getWalletProvider", () => {
    test("should create and return PrivateKeyWalletProvider for private-key mode", () => {
      (getWalletMode as ReturnType<typeof mock>).mockReturnValue("private-key");

      const provider = getWalletProvider();

      expect(provider.getName()).toBe("private-key");
      expect(provider.isAvailable()).toBe(true);
    });

    test("should create and return DisabledWalletProvider for disabled mode", () => {
      (getWalletMode as ReturnType<typeof mock>).mockReturnValue("disabled");

      const provider = getWalletProvider();

      expect(provider.getName()).toBe("disabled");
      expect(provider.isAvailable()).toBe(false);
    });

    test("should return cached provider on subsequent calls", () => {
      (getWalletMode as ReturnType<typeof mock>).mockReturnValue("private-key");

      // First call
      const provider1 = getWalletProvider();

      // Second call should return same cached instance
      const provider2 = getWalletProvider();

      expect(provider2).toBe(provider1);
    });

    test("should throw error for unknown wallet mode", () => {
      (getWalletMode as ReturnType<typeof mock>).mockReturnValue("unknown-mode");

      expect(() => getWalletProvider()).toThrow("Unknown wallet mode: unknown-mode");
    });
  });

  describe("resetWalletProvider", () => {
    test("should reset the wallet provider instance", () => {
      (getWalletMode as ReturnType<typeof mock>).mockReturnValue("private-key");

      // Create provider instance
      const provider1 = getWalletProvider();

      // Reset the provider
      resetWalletProvider();

      // Create new provider instance — should be a different object
      const provider2 = getWalletProvider();

      expect(provider2).not.toBe(provider1);
      expect(provider2.getName()).toBe("private-key");
    });
  });
});
