import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";
import type { Address } from "viem";
import * as viemModule from "viem";
import { getERC20TokenInfo, getERC721TokenMetadata, getERC1155TokenURI } from "../../../core/services";
import * as clientsModule from "../../../core/services/clients.js";

describe("Tokens Service", () => {
  // Mock addresses and values
  const mockTokenAddress = "0x1234567890123456789012345678901234567890" as Address;
  const mockTokenId = BigInt(1);
  const mockNetwork = "sei";

  // Mock contract and client
  const mockPublicClient = { readContract: mock() };
  const mockContractInstance = {
    read: {
      name: mock(),
      symbol: mock(),
      decimals: mock(),
      totalSupply: mock(),
      tokenURI: mock(),
      uri: mock(),
    },
  };

  const spies: { mockRestore(): void }[] = [];

  beforeEach(() => {
    spies.length = 0;
    // Reset mock contract methods
    mockContractInstance.read.name.mockReset();
    mockContractInstance.read.symbol.mockReset();
    mockContractInstance.read.decimals.mockReset();
    mockContractInstance.read.totalSupply.mockReset();
    mockContractInstance.read.tokenURI.mockReset();
    mockContractInstance.read.uri.mockReset();

    // Spy on module exports
    spies.push(spyOn(clientsModule, "getPublicClient").mockReturnValue(mockPublicClient as never));
    spies.push(spyOn(viemModule, "getContract").mockReturnValue(mockContractInstance as never));
    spies.push(spyOn(viemModule, "formatUnits").mockReturnValue("1000000000000000000"));
  });

  afterEach(() => {
    for (const s of spies) s.mockRestore();
  });

  describe("getERC20TokenInfo", () => {
    test("should return token information for ERC20 tokens", async () => {
      // Setup mock return values
      const mockName = "Test Token";
      const mockSymbol = "TEST";
      const mockDecimals = 18;
      const mockTotalSupply = BigInt("1000000000000000000");

      // Setup mock implementations
      mockContractInstance.read.name.mockResolvedValue(mockName as never);
      mockContractInstance.read.symbol.mockResolvedValue(mockSymbol as never);
      mockContractInstance.read.decimals.mockResolvedValue(mockDecimals as never);
      mockContractInstance.read.totalSupply.mockResolvedValue(mockTotalSupply as never);

      // Call the function
      const result = await getERC20TokenInfo(mockTokenAddress, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getContract was called with the correct parameters
      expect(viemModule.getContract).toHaveBeenCalledWith({
        address: mockTokenAddress,
        abi: expect.any(Array),
        client: mockPublicClient,
      });

      // Verify contract read methods were called
      expect(mockContractInstance.read.name).toHaveBeenCalled();
      expect(mockContractInstance.read.symbol).toHaveBeenCalled();
      expect(mockContractInstance.read.decimals).toHaveBeenCalled();
      expect(mockContractInstance.read.totalSupply).toHaveBeenCalled();

      // Verify formatUnits was called with the correct parameters
      expect(viemModule.formatUnits).toHaveBeenCalledWith(mockTotalSupply, mockDecimals);

      // Verify the complete result
      expect(result).toEqual({
        name: mockName,
        symbol: mockSymbol,
        decimals: mockDecimals,
        totalSupply: mockTotalSupply,
        formattedTotalSupply: "1000000000000000000",
      });
    });

    test("should use default network when none is specified", async () => {
      // Setup mock return values
      mockContractInstance.read.name.mockResolvedValue("Test Token" as never);
      mockContractInstance.read.symbol.mockResolvedValue("TEST" as never);
      mockContractInstance.read.decimals.mockResolvedValue(18 as never);
      mockContractInstance.read.totalSupply.mockResolvedValue(BigInt("1000000000000000000") as never);

      // Call the function without specifying a network
      await getERC20TokenInfo(mockTokenAddress);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from contract calls", async () => {
      // Setup mock to throw an error
      mockContractInstance.read.name.mockRejectedValueOnce(new Error("Contract call failed") as unknown as never);

      // Verify the function throws the error
      expect(getERC20TokenInfo(mockTokenAddress)).rejects.toThrow("Contract call failed");
    });
  });

  describe("getERC721TokenMetadata", () => {
    test("should return token metadata for ERC721 tokens", async () => {
      // Setup mock return values
      const mockName = "Test NFT";
      const mockSymbol = "tNFT";
      const mockTokenURI = "https://example.com/token/1";

      // Setup mock implementations
      mockContractInstance.read.name.mockResolvedValue(mockName as never);
      mockContractInstance.read.symbol.mockResolvedValue(mockSymbol as never);
      mockContractInstance.read.tokenURI.mockResolvedValue(mockTokenURI as never);

      // Call the function
      const result = await getERC721TokenMetadata(mockTokenAddress, mockTokenId, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getContract was called with the correct parameters
      expect(viemModule.getContract).toHaveBeenCalledWith({
        address: mockTokenAddress,
        abi: expect.any(Array),
        client: mockPublicClient,
      });

      // Verify contract read methods were called
      expect(mockContractInstance.read.name).toHaveBeenCalled();
      expect(mockContractInstance.read.symbol).toHaveBeenCalled();
      expect(mockContractInstance.read.tokenURI).toHaveBeenCalledWith([mockTokenId]);

      // Verify the result
      expect(result).toEqual({
        name: mockName,
        symbol: mockSymbol,
        tokenURI: mockTokenURI,
      });
    });

    test("should use default network when none is specified", async () => {
      // Setup mock return values
      mockContractInstance.read.name.mockResolvedValue("Test NFT" as never);
      mockContractInstance.read.symbol.mockResolvedValue("tNFT" as never);
      mockContractInstance.read.tokenURI.mockResolvedValue("https://example.com/token/1" as never);

      // Call the function without specifying a network
      await getERC721TokenMetadata(mockTokenAddress, mockTokenId);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from contract calls", async () => {
      // Setup mock to throw an error
      mockContractInstance.read.name.mockRejectedValueOnce(new Error("Contract call failed") as unknown as never);

      // Verify the function throws the error
      expect(getERC721TokenMetadata(mockTokenAddress, mockTokenId)).rejects.toThrow("Contract call failed");
    });
  });

  describe("getERC1155TokenURI", () => {
    test("should return token URI for ERC1155 tokens", async () => {
      // Setup mock return values
      const mockURI = "https://example.com/token/1";

      // Setup mock implementations
      mockContractInstance.read.uri.mockResolvedValue(mockURI as never);

      // Call the function
      const result = await getERC1155TokenURI(mockTokenAddress, mockTokenId, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getContract was called with the correct parameters
      expect(viemModule.getContract).toHaveBeenCalledWith({
        address: mockTokenAddress,
        abi: expect.any(Array),
        client: mockPublicClient,
      });

      // Verify contract read methods were called
      expect(mockContractInstance.read.uri).toHaveBeenCalledWith([mockTokenId]);

      // Verify the result
      expect(result).toBe(mockURI);
    });

    test("should use default network when none is specified", async () => {
      // Setup mock return values
      mockContractInstance.read.uri.mockResolvedValue("https://example.com/token/1" as never);

      // Call the function without specifying a network
      await getERC1155TokenURI(mockTokenAddress, mockTokenId);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from contract calls", async () => {
      // Setup mock to throw an error
      mockContractInstance.read.uri.mockRejectedValueOnce(new Error("Contract call failed") as unknown as never);

      // Verify the function throws the error
      expect(getERC1155TokenURI(mockTokenAddress, mockTokenId)).rejects.toThrow("Contract call failed");
    });
  });
});
