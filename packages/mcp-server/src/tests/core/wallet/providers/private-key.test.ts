import { afterEach, beforeEach, describe, expect, type Mock, spyOn, test } from "bun:test";
import type { Client } from "viem";
import * as viemModule from "viem";
import * as viemAccountsModule from "viem/accounts";
import * as chainsModule from "../../../../core/chains.js";
import * as configModule from "../../../../core/config.js";
import { PrivateKeyWalletProvider, WalletProviderError } from "../../../../core/wallet";

describe("PrivateKeyWalletProvider", () => {
  const mockPrivateKey = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";
  const mockAddress = "0x1234567890123456789012345678901234567890";
  const mockAccount = { address: mockAddress };
  const mockChain = { id: 1, name: "Sei" };
  const mockRpcUrl = "https://rpc.sei.io";
  const mockTransport = {};
  const mockWalletClient = { account: mockAccount, chain: mockChain } as Client;

  const spies: { mockRestore(): void }[] = [];

  beforeEach(() => {
    spies.length = 0;

    // Spy on module exports
    spies.push(spyOn(configModule, "getPrivateKeyAsHex").mockReturnValue(undefined as never));
    spies.push(spyOn(chainsModule, "getChain").mockReturnValue(mockChain as never));
    spies.push(spyOn(chainsModule, "getRpcUrl").mockReturnValue(mockRpcUrl));
    spies.push(spyOn(viemModule, "http").mockReturnValue(mockTransport as never));
    spies.push(spyOn(viemAccountsModule, "privateKeyToAccount").mockReturnValue(mockAccount as never));
    spies.push(spyOn(viemModule, "createWalletClient").mockReturnValue(mockWalletClient as never));
  });

  afterEach(() => {
    for (const s of spies) s.mockRestore();
  });

  describe("constructor and isAvailable", () => {
    test("should be available when private key is configured", () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.isAvailable()).toBe(true);
      expect(configModule.getPrivateKeyAsHex).toHaveBeenCalled();
    });

    test("should not be available when private key is not configured", () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.isAvailable()).toBe(false);
    });
  });

  describe("getName", () => {
    test('should return "private-key"', () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.getName()).toBe("private-key");
    });
  });

  describe("getAddress", () => {
    test("should return address when private key is configured", async () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();
      const address = await provider.getAddress();

      expect(viemAccountsModule.privateKeyToAccount).toHaveBeenCalledWith(mockPrivateKey);
      expect(address).toBe(mockAddress);
    });

    test("should throw WalletProviderError when private key is not configured", async () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.getAddress()).rejects.toThrow(WalletProviderError);
      expect(provider.getAddress()).rejects.toThrow("Private key not configured");
    });
  });

  describe("signTransaction", () => {
    test("should throw not implemented error when private key is configured", async () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();
      const mockTx = { to: "0x123", value: BigInt(1) } as const;

      expect(provider.signTransaction(mockTx)).rejects.toThrow(WalletProviderError);
      expect(provider.signTransaction(mockTx)).rejects.toThrow("Direct transaction signing not implemented");
    });

    test("should throw private key error when private key is not configured", async () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();
      const mockTx = { to: "0x123", value: BigInt(1) } as const;

      expect(provider.signTransaction(mockTx)).rejects.toThrow(WalletProviderError);
      expect(provider.signTransaction(mockTx)).rejects.toThrow("Private key not configured");
    });
  });

  describe("getWalletClient", () => {
    test("should create and return wallet client when private key is configured", async () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(mockPrivateKey);

      const provider = new PrivateKeyWalletProvider();
      const client = await provider.getWalletClient("sei");

      expect(chainsModule.getChain).toHaveBeenCalledWith("sei");
      expect(chainsModule.getRpcUrl).toHaveBeenCalledWith("sei");
      expect(viemModule.http).toHaveBeenCalledWith(mockRpcUrl);
      expect(viemAccountsModule.privateKeyToAccount).toHaveBeenCalledWith(mockPrivateKey);
      expect(viemModule.createWalletClient).toHaveBeenCalledWith({
        account: mockAccount,
        chain: mockChain,
        transport: mockTransport,
      });
      expect(client).toBe(mockWalletClient);
    });

    test("should throw WalletProviderError when private key is not configured", async () => {
      (configModule.getPrivateKeyAsHex as Mock<typeof configModule.getPrivateKeyAsHex>).mockReturnValue(undefined);

      const provider = new PrivateKeyWalletProvider();

      expect(provider.getWalletClient("sei")).rejects.toThrow(WalletProviderError);
      expect(provider.getWalletClient("sei")).rejects.toThrow("Private key not configured");
    });
  });
});
