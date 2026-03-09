import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";
import type { Client } from "viem";
import * as viemModule from "viem";
import * as viemAccountsModule from "viem/accounts";
import * as chainsModule from "../../../core/chains.js";
import { getAddressFromProvider, getPublicClient, getWalletClientFromProvider } from "../../../core/services";
import * as walletModule from "../../../core/wallet/index.js";

describe("Client Service", () => {
  const mockChain = { id: 1, name: "Sei" };
  const mockRpcUrl = "https://rpc.sei.io";
  const mockHttpTransport = {} as ReturnType<typeof viemModule.http>;
  const mockPublicClient = { readContract: mock() } as Client;
  const mockWalletClient = { writeContract: mock() } as Client;
  const mockAccount = { address: "0x1234567890123456789012345678901234567890" };

  const spies: { mockRestore(): void }[] = [];

  beforeEach(() => {
    spies.length = 0;

    // Spy on module exports
    spies.push(spyOn(chainsModule, "getChain").mockReturnValue(mockChain as never));
    spies.push(spyOn(chainsModule, "getRpcUrl").mockReturnValue(mockRpcUrl));
    spies.push(spyOn(viemModule, "http").mockReturnValue(mockHttpTransport as never));
    spies.push(spyOn(viemModule, "createPublicClient").mockReturnValue(mockPublicClient as never));
    spies.push(spyOn(viemModule, "createWalletClient").mockReturnValue(mockWalletClient as never));
    spies.push(spyOn(viemAccountsModule, "privateKeyToAccount").mockReturnValue(mockAccount as never));
  });

  afterEach(() => {
    for (const s of spies) s.mockRestore();
  });

  describe("getPublicClient", () => {
    test("should create and return a new public client when not cached", () => {
      const client = getPublicClient("sei");

      expect(chainsModule.getChain).toHaveBeenCalledWith("sei");
      expect(chainsModule.getRpcUrl).toHaveBeenCalledWith("sei");
      expect(viemModule.http).toHaveBeenCalledWith(mockRpcUrl);
      expect(viemModule.createPublicClient).toHaveBeenCalledWith({
        chain: mockChain,
        transport: mockHttpTransport,
      });
      expect(client).toBe(mockPublicClient);
    });

    test("should return cached client for the same network", () => {
      // First call should create a new client
      const client1 = getPublicClient("sei");

      // Second call should return cached client
      const client2 = getPublicClient("sei");

      expect(client2).toBe(client1);
    });

    test("should create different clients for different networks", () => {
      // First call for 'sei' network
      const seiClient = getPublicClient("sei");

      // Setup mocks for 'ethereum' network
      const ethereumChain = { id: 1, name: "Ethereum" };
      const ethereumRpcUrl = "https://rpc.ethereum.io";
      const ethereumPublicClient = { readContract: mock() } as Client;

      (chainsModule.getChain as ReturnType<typeof mock>).mockReturnValue(ethereumChain);
      (chainsModule.getRpcUrl as ReturnType<typeof mock>).mockReturnValue(ethereumRpcUrl);
      (viemModule.createPublicClient as ReturnType<typeof mock>).mockReturnValue(ethereumPublicClient);

      // Call for 'ethereum' network
      const ethereumClient = getPublicClient("ethereum");

      expect(chainsModule.getChain).toHaveBeenCalledWith("ethereum");
      expect(chainsModule.getRpcUrl).toHaveBeenCalledWith("ethereum");
      expect(ethereumClient).toBe(ethereumPublicClient);
      expect(ethereumClient).not.toBe(seiClient);
    });

    test("should use default network when none is specified", () => {
      const client = getPublicClient();
      expect(client).toBe(mockPublicClient);
    });
  });

  describe("getWalletClientFromProvider", () => {
    const mockWalletProvider = {
      getWalletClient: mock(),
    };

    beforeEach(() => {
      spies.push(spyOn(walletModule, "getWalletProvider").mockReturnValue(mockWalletProvider as never));
      mockWalletProvider.getWalletClient.mockResolvedValue(mockWalletClient);
    });

    test("should get wallet client from provider with default network", async () => {
      const client = await getWalletClientFromProvider();

      expect(walletModule.getWalletProvider).toHaveBeenCalled();
      expect(mockWalletProvider.getWalletClient).toHaveBeenCalledWith("sei");
      expect(client).toBe(mockWalletClient);
    });

    test("should get wallet client from provider with specified network", async () => {
      const client = await getWalletClientFromProvider("sei-testnet");

      expect(walletModule.getWalletProvider).toHaveBeenCalled();
      expect(mockWalletProvider.getWalletClient).toHaveBeenCalledWith("sei-testnet");
      expect(client).toBe(mockWalletClient);
    });
  });

  describe("getAddressFromProvider", () => {
    const mockWalletProvider = {
      getAddress: mock(),
    };
    const mockAddress = "0x1234567890123456789012345678901234567890";

    beforeEach(() => {
      spies.push(spyOn(walletModule, "getWalletProvider").mockReturnValue(mockWalletProvider as never));
      mockWalletProvider.getAddress.mockResolvedValue(mockAddress);
    });

    test("should get address from provider", async () => {
      const address = await getAddressFromProvider();

      expect(walletModule.getWalletProvider).toHaveBeenCalled();
      expect(mockWalletProvider.getAddress).toHaveBeenCalled();
      expect(address).toBe(mockAddress);
    });
  });
});
