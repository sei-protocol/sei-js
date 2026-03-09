import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";
import type { Hash } from "viem";
import * as configModule from "../../../core/config.js";
import { approveERC20, transferERC20, transferERC721, transferERC1155, transferSei } from "../../../core/services";
import * as clientsModule from "../../../core/services/clients.js";

describe("Transfer Service", () => {
  const mockPublicClient = {
    readContract: mock((params: { functionName: string }) => {
      if (params && typeof params === "object" && "functionName" in params && params.functionName === "decimals") return 18;
      if (params && typeof params === "object" && "functionName" in params && params.functionName === "symbol") return "TEST";
      if (params && typeof params === "object" && "functionName" in params && params.functionName === "name") return "Test NFT";
      return null;
    }),
    getContract: mock(),
  };

  // Define a properly typed hash value
  const defaultMockHash: Hash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef";

  // Define the mock wallet client with properly typed mock functions
  const mockWalletClient = {
    sendTransaction: mock(() => Promise.resolve(defaultMockHash)),
    writeContract: mock(() => Promise.resolve(defaultMockHash)),
    account: { address: "0x1234567890123456789012345678901234567890" },
    chain: { id: 1 },
  };

  let getPublicClientSpy: ReturnType<typeof spyOn>;
  let getWalletClientSpy: ReturnType<typeof spyOn>;
  let getPrivateKeySpy: ReturnType<typeof spyOn>;

  beforeEach(() => {
    // Reset mocks
    mockPublicClient.readContract.mockReset();
    mockWalletClient.sendTransaction.mockReset();
    mockWalletClient.writeContract.mockReset();

    // Spy on module exports
    getPublicClientSpy = spyOn(clientsModule, "getPublicClient").mockReturnValue(mockPublicClient as never);
    getWalletClientSpy = spyOn(clientsModule, "getWalletClientFromProvider").mockReturnValue(Promise.resolve(mockWalletClient) as never);
    getPrivateKeySpy = spyOn(configModule, "getPrivateKeyAsHex").mockReturnValue("0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as never);
  });

  afterEach(() => {
    getPublicClientSpy.mockRestore();
    getWalletClientSpy.mockRestore();
    getPrivateKeySpy.mockRestore();
  });

  describe("transferSei", () => {
    test("should transfer SEI tokens successfully", async () => {
      const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;
      (mockWalletClient.sendTransaction as ReturnType<typeof mock>).mockImplementation(() => Promise.resolve(mockHash));

      const result = await transferSei("0x1234567890123456789012345678901234567890", "1.0", "sei");

      expect(result).toBe(mockHash);
      expect(mockWalletClient.sendTransaction).toHaveBeenCalledWith({
        to: "0x1234567890123456789012345678901234567890",
        value: BigInt("1000000000000000000"),
        account: mockWalletClient.account,
        chain: mockWalletClient.chain,
      });
    });

    test("should throw error when wallet provider fails", async () => {
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockRejectedValue(new Error("Wallet provider unavailable"));

      expect(transferSei("0x1234567890123456789012345678901234567890", "1.0")).rejects.toThrow("Wallet provider unavailable");
    });

    test("should throw error when wallet account is not initialized", async () => {
      // Mock wallet client without an account
      const mockWalletClientWithoutAccount = {
        ...mockWalletClient,
        account: null,
      };
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

      expect(transferSei("0x1234567890123456789012345678901234567890", "1.0")).rejects.toThrow("Wallet account not initialized properly");
    });
  });

  describe("transferERC20", () => {
    test("should transfer ERC20 tokens successfully", async () => {
      const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;
      const mockDecimals = 18;
      const mockSymbol = "TEST";

      (mockPublicClient.readContract as ReturnType<typeof mock>).mockImplementation((params: unknown) => {
        if (params && typeof params === "object" && "functionName" in params && params.functionName === "decimals") return mockDecimals;
        if (params && typeof params === "object" && "functionName" in params && params.functionName === "symbol") return mockSymbol;
        return null;
      });

      (mockWalletClient.writeContract as ReturnType<typeof mock>).mockImplementation(() => Promise.resolve(mockHash));

      const result = await transferERC20("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", "1.0");

      expect(result).toEqual({
        txHash: mockHash,
        amount: {
          raw: BigInt("1000000000000000000"),
          formatted: "1.0",
        },
        token: {
          symbol: mockSymbol,
          decimals: mockDecimals,
        },
      });
    });

    test("should throw error when wallet provider fails", async () => {
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockRejectedValue(new Error("Wallet provider unavailable"));

      expect(transferERC20("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", "1.0")).rejects.toThrow(
        "Wallet provider unavailable",
      );
    });

    test("should throw error when wallet account is not initialized", async () => {
      // Mock wallet client without an account
      const mockWalletClientWithoutAccount = {
        ...mockWalletClient,
        account: null,
      };
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

      expect(transferERC20("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", "1.0")).rejects.toThrow(
        "Wallet account not initialized properly",
      );
    });
  });

  describe("approveERC20", () => {
    test("should approve ERC20 token spending successfully", async () => {
      const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;
      const mockDecimals = 18;
      const mockSymbol = "TEST";

      (mockPublicClient.readContract as ReturnType<typeof mock>).mockImplementation((params: unknown) => {
        if (params && typeof params === "object" && "functionName" in params && params.functionName === "decimals") return mockDecimals;
        if (params && typeof params === "object" && "functionName" in params && params.functionName === "symbol") return mockSymbol;
        return null;
      });

      (mockWalletClient.writeContract as ReturnType<typeof mock>).mockImplementation(() => Promise.resolve(mockHash));

      const result = await approveERC20("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", "1.0");

      expect(result).toEqual({
        txHash: mockHash,
        amount: {
          raw: BigInt("1000000000000000000"),
          formatted: "1.0",
        },
        token: {
          symbol: mockSymbol,
          decimals: mockDecimals,
        },
      });
    });

    test("should throw error when wallet provider fails", async () => {
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockRejectedValue(new Error("Wallet provider unavailable"));

      expect(approveERC20("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", "1.0")).rejects.toThrow(
        "Wallet provider unavailable",
      );
    });

    test("should throw error when wallet account is not initialized", async () => {
      // Mock wallet client without an account
      const mockWalletClientWithoutAccount = {
        ...mockWalletClient,
        account: null,
      };
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

      expect(approveERC20("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", "1.0")).rejects.toThrow(
        "Wallet account not initialized properly",
      );
    });
  });

  describe("transferERC721", () => {
    test("should transfer ERC721 token successfully", async () => {
      const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;
      const mockName = "Test NFT";
      const mockSymbol = "TNFT";

      (mockPublicClient.readContract as ReturnType<typeof mock>).mockImplementation((params: unknown) => {
        if (params && typeof params === "object" && "functionName" in params && params.functionName === "name") return mockName;
        if (params && typeof params === "object" && "functionName" in params && params.functionName === "symbol") return mockSymbol;
        return null;
      });

      (mockWalletClient.writeContract as ReturnType<typeof mock>).mockImplementation(() => Promise.resolve(mockHash));

      const result = await transferERC721("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", BigInt(1));

      expect(result).toEqual({
        txHash: mockHash,
        tokenId: "1",
        token: {
          name: mockName,
          symbol: mockSymbol,
        },
      });
    });

    test("should throw error when wallet provider fails", async () => {
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockRejectedValue(new Error("Wallet provider unavailable"));

      expect(transferERC721("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", BigInt(1))).rejects.toThrow(
        "Wallet provider unavailable",
      );
    });

    test("should throw error when wallet account is not initialized", async () => {
      // Mock wallet client without an account
      const mockWalletClientWithoutAccount = {
        ...mockWalletClient,
        account: null,
      };
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

      expect(transferERC721("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", BigInt(1))).rejects.toThrow(
        "Wallet account not initialized properly",
      );
    });

    test("should handle errors when fetching NFT metadata", async () => {
      const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;

      // Mock successful transaction but failed metadata fetch
      (mockWalletClient.writeContract as ReturnType<typeof mock>).mockImplementation(() => Promise.resolve(mockHash));

      // Mock read contract to throw error for metadata
      (mockPublicClient.readContract as ReturnType<typeof mock>).mockImplementation(() => {
        throw new Error("Failed to fetch metadata");
      });

      // Should still complete but with default values
      const result = await transferERC721("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", BigInt(1));

      expect(result).toEqual({
        txHash: mockHash,
        tokenId: "1",
        token: {
          name: "Unknown",
          symbol: "NFT",
        },
      });
    });
  });

  describe("transferERC1155", () => {
    test("should transfer ERC1155 token successfully", async () => {
      // Define the hash with the correct Hash type
      const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;

      // Reset the mock implementation to ensure it returns the expected value
      (mockWalletClient.writeContract as ReturnType<typeof mock>).mockImplementation(() => Promise.resolve(mockHash));

      const result = await transferERC1155("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", BigInt(1), "1");

      expect(result).toEqual({
        txHash: mockHash,
        tokenId: "1",
        amount: "1",
      });
    });

    test("should throw error when wallet provider fails", async () => {
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockRejectedValue(new Error("Wallet provider unavailable"));

      expect(transferERC1155("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", BigInt(1), "1")).rejects.toThrow(
        "Wallet provider unavailable",
      );
    });

    test("should throw error when wallet account is not initialized", async () => {
      // Mock wallet client without an account
      const mockWalletClientWithoutAccount = {
        ...mockWalletClient,
        account: null,
      };
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

      expect(transferERC1155("0x1234567890123456789012345678901234567890", "0x0987654321098765432109876543210987654321", BigInt(1), "1")).rejects.toThrow(
        "Wallet account not initialized properly",
      );
    });
  });
});
