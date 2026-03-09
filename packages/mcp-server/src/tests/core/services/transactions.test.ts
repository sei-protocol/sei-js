import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";
import type { Address, EstimateGasParameters, Hash, TransactionReceipt } from "viem";
import { estimateGas, getChainId, getTransaction, getTransactionCount, getTransactionReceipt } from "../../../core/services";
import * as clientsModule from "../../../core/services/clients.js";

describe("Transactions Service", () => {
  // Mock values
  const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;
  const mockAddress = "0x1234567890123456789012345678901234567890" as Address;
  const mockNetwork = "sei";

  // Mock transaction data
  const mockTransaction = {
    hash: mockHash,
    from: mockAddress,
    to: "0x0987654321098765432109876543210987654321" as Address,
    value: BigInt("1000000000000000000"),
  };

  // Mock transaction receipt
  const mockReceipt: TransactionReceipt = {
    blockHash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890" as Hash,
    blockNumber: BigInt(12345678),
    contractAddress: null,
    cumulativeGasUsed: BigInt(21000),
    effectiveGasPrice: BigInt(20000000000),
    from: mockAddress,
    gasUsed: BigInt(21000),
    logs: [],
    logsBloom: "0x" as `0x${string}`,
    status: "success",
    to: "0x0987654321098765432109876543210987654321" as Address,
    transactionHash: mockHash,
    transactionIndex: 1,
    type: "eip1559",
  };

  // Mock gas parameters
  const mockGasParams: EstimateGasParameters = {
    account: mockAddress,
    to: "0x0987654321098765432109876543210987654321" as Address,
    value: BigInt("1000000000000000000"),
  };

  // Mock public client
  const mockPublicClient = {
    getTransaction: mock(),
    getTransactionReceipt: mock(),
    getTransactionCount: mock(),
    estimateGas: mock(),
    getChainId: mock(),
  };

  let getPublicClientSpy: ReturnType<typeof spyOn>;

  beforeEach(() => {
    // Reset mocks
    mockPublicClient.getTransaction.mockReset();
    mockPublicClient.getTransactionReceipt.mockReset();
    mockPublicClient.getTransactionCount.mockReset();
    mockPublicClient.estimateGas.mockReset();
    mockPublicClient.getChainId.mockReset();

    // Spy on clients module export
    getPublicClientSpy = spyOn(clientsModule, "getPublicClient").mockReturnValue(mockPublicClient as never);
    mockPublicClient.getTransaction.mockResolvedValue(mockTransaction as never);
    mockPublicClient.getTransactionReceipt.mockResolvedValue(mockReceipt as never);
    mockPublicClient.getTransactionCount.mockResolvedValue(BigInt(5));
    mockPublicClient.estimateGas.mockResolvedValue(BigInt(21000));
    mockPublicClient.getChainId.mockResolvedValue(1 as never);
  });

  afterEach(() => {
    getPublicClientSpy.mockRestore();
  });

  describe("getTransaction", () => {
    test("should return transaction data for a given hash", async () => {
      // Call the function
      const result = await getTransaction(mockHash, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getTransaction was called with the correct parameters
      expect(mockPublicClient.getTransaction).toHaveBeenCalledWith({ hash: mockHash });

      // Verify the result
      expect(result).toEqual(mockTransaction as unknown as typeof result);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getTransaction(mockHash);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getTransaction.mockRejectedValue(new Error("Transaction not found") as never);

      // Verify the function throws the error
      expect(getTransaction(mockHash)).rejects.toThrow("Transaction not found");
    });
  });

  describe("getTransactionReceipt", () => {
    test("should return transaction receipt for a given hash", async () => {
      // Call the function
      const result = await getTransactionReceipt(mockHash, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getTransactionReceipt was called with the correct parameters
      expect(mockPublicClient.getTransactionReceipt).toHaveBeenCalledWith({ hash: mockHash });

      // Verify the result
      expect(result).toEqual(mockReceipt);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getTransactionReceipt(mockHash);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getTransactionReceipt.mockRejectedValue(new Error("Receipt not found") as never);

      // Verify the function throws the error
      expect(getTransactionReceipt(mockHash)).rejects.toThrow("Receipt not found");
    });
  });

  describe("getTransactionCount", () => {
    test("should return transaction count for a given address", async () => {
      // Call the function
      const result = await getTransactionCount(mockAddress, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getTransactionCount was called with the correct parameters
      expect(mockPublicClient.getTransactionCount).toHaveBeenCalledWith({ address: mockAddress });

      // Verify the result is converted to a number
      expect(result).toBe(5);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getTransactionCount(mockAddress);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getTransactionCount.mockRejectedValue(new Error("Invalid address") as never);

      // Verify the function throws the error
      expect(getTransactionCount(mockAddress)).rejects.toThrow("Invalid address");
    });
  });

  describe("estimateGas", () => {
    test("should return gas estimate for given parameters", async () => {
      // Call the function
      const result = await estimateGas(mockGasParams, mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify estimateGas was called with the correct parameters
      expect(mockPublicClient.estimateGas).toHaveBeenCalledWith(mockGasParams);

      // Verify the result
      expect(result).toBe(BigInt(21000));
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await estimateGas(mockGasParams);

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.estimateGas.mockRejectedValue(new Error("Insufficient funds") as never);

      // Verify the function throws the error
      expect(estimateGas(mockGasParams)).rejects.toThrow("Insufficient funds");
    });
  });

  describe("getChainId", () => {
    test("should return chain ID for a given network", async () => {
      // Call the function
      const result = await getChainId(mockNetwork);

      // Verify the public client was retrieved with the correct network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith(mockNetwork);

      // Verify getChainId was called
      expect(mockPublicClient.getChainId).toHaveBeenCalled();

      // Verify the result is converted to a number
      expect(result).toBe(1);
    });

    test("should use default network when none is specified", async () => {
      // Call the function without specifying a network
      await getChainId();

      // Verify the public client was retrieved with the default network
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should handle errors from client calls", async () => {
      // Setup mock to throw an error
      mockPublicClient.getChainId.mockRejectedValue(new Error("Network error") as never);

      // Verify the function throws the error
      expect(getChainId()).rejects.toThrow("Network error");
    });
  });
});
