import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";
import type { Block, Hash } from "viem";
import { getBlockByHash, getBlockByNumber, getBlockNumber, getLatestBlock } from "../../../core/services";
import * as clientsModule from "../../../core/services/clients.js";

describe("Blocks Service", () => {
  // Mock values
  const mockBlockNumber = BigInt(12345678);
  const mockBlockHash = "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890" as Hash;
  const mockNetwork = "sei";

  // Create a simplified mock block response
  const mockBlockResponse = { hash: mockBlockHash, number: mockBlockNumber } as unknown as Block;

  // Mock public client
  const mockPublicClient = {
    getBlockNumber: mock(),
    getBlock: mock(),
  };

  let getPublicClientSpy: ReturnType<typeof spyOn>;

  beforeEach(() => {
    // Reset mocks
    mockPublicClient.getBlockNumber.mockReset();
    mockPublicClient.getBlock.mockReset();

    // Spy on clients module export instead of mock.module to avoid cross-file contamination
    getPublicClientSpy = spyOn(clientsModule, "getPublicClient").mockReturnValue(mockPublicClient as never);
    mockPublicClient.getBlockNumber.mockResolvedValue(mockBlockNumber as never);
    // Use a simplified mock to avoid TypeScript errors with the Block type
    mockPublicClient.getBlock.mockResolvedValue(mockBlockResponse as never);
  });

  afterEach(() => {
    getPublicClientSpy.mockRestore();
  });

  describe("getBlockNumber", () => {
    test("should return the current block number for a given network", async () => {
      // Call the function
      const result = await getBlockNumber(mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getBlockNumber was called
      expect(mockPublicClient.getBlockNumber).toHaveBeenCalled();

      // Verify the result
      expect(result).toBe(mockBlockNumber);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getBlockNumber();

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getBlockNumber.mockRejectedValue(new Error("Network error") as never);

      // Verify the function throws the error
      expect(getBlockNumber()).rejects.toThrow("Network error");
    });
  });

  describe("getBlockByNumber", () => {
    test("should return block data for a given block number", async () => {
      // Call the function
      const result = await getBlockByNumber(12345678, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getBlock was called with the correct parameters
      expect(mockPublicClient.getBlock).toHaveBeenCalledWith({ blockNumber: BigInt(12345678) });

      // Verify the result
      expect(result).toEqual(mockBlockResponse);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getBlockByNumber(12345678);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getBlock.mockRejectedValue(new Error("Block not found") as never);

      // Verify the function throws the error
      expect(getBlockByNumber(12345678)).rejects.toThrow("Block not found");
    });
  });

  describe("getBlockByHash", () => {
    test("should return block data for a given block hash", async () => {
      // Call the function
      const result = await getBlockByHash(mockBlockHash, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getBlock was called with the correct parameters
      expect(mockPublicClient.getBlock).toHaveBeenCalledWith({ blockHash: mockBlockHash });

      // Verify the result
      expect(result).toEqual(mockBlockResponse);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getBlockByHash(mockBlockHash);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getBlock.mockRejectedValue(new Error("Block not found") as never);

      // Verify the function throws the error
      expect(getBlockByHash(mockBlockHash)).rejects.toThrow("Block not found");
    });
  });

  describe("getLatestBlock", () => {
    test("should return the latest block for a given network", async () => {
      // Call the function
      const result = await getLatestBlock(mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getBlock was called with no parameters
      expect(mockPublicClient.getBlock).toHaveBeenCalledWith();

      // Verify the result
      expect(result).toEqual(mockBlockResponse);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getLatestBlock();

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getBlock.mockRejectedValue(new Error("Network error") as never);

      // Verify the function throws the error
      expect(getLatestBlock()).rejects.toThrow("Network error");
    });
  });
});
