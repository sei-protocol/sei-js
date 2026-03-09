import { afterEach, beforeEach, describe, expect, mock, spyOn, test } from "bun:test";
import type { Abi, Address, GetLogsParameters, Hash, ReadContractParameters, WriteContractParameters } from "viem";
import { deployContract, getLogs, isContract, readContract, writeContract } from "../../../core/services";
import * as clientsModule from "../../../core/services/clients.js";

describe("Contract Service", () => {
  const mockPublicClient = {
    readContract: mock(),
    getLogs: mock(),
    getBytecode: mock(),
    waitForTransactionReceipt: mock(),
  };

  const mockWalletClient = {
    writeContract: mock(),
    deployContract: mock(),
    account: "0x1234567890123456789012345678901234567890" as Address,
    chain: { id: 1, name: "Sei" },
  };

  const mockHash = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef" as Hash;
  const mockAddress = "0x1234567890123456789012345678901234567890" as Address;
  const mockAbi = [] as unknown as Abi;

  const spies: { mockRestore(): void }[] = [];

  beforeEach(() => {
    spies.length = 0;
    // Reset mock clients
    mockPublicClient.readContract.mockReset();
    mockPublicClient.getLogs.mockReset();
    mockPublicClient.getBytecode.mockReset();
    mockPublicClient.waitForTransactionReceipt.mockReset();
    mockWalletClient.writeContract.mockReset();
    mockWalletClient.deployContract.mockReset();

    // Spy on module exports
    spies.push(spyOn(clientsModule, "getPublicClient").mockReturnValue(mockPublicClient as never));
    spies.push(spyOn(clientsModule, "getWalletClientFromProvider").mockReturnValue(Promise.resolve(mockWalletClient) as never));

    mockPublicClient.readContract.mockImplementation(() => Promise.resolve("mockContractData"));
    mockPublicClient.getLogs.mockImplementation(() =>
      Promise.resolve([
        {
          address: mockAddress,
          blockHash: mockHash,
          blockNumber: BigInt(1000),
          data: "0x" as const,
          logIndex: 0,
          transactionHash: mockHash,
          transactionIndex: 0,
          removed: false,
        },
        {
          address: mockAddress,
          blockHash: mockHash,
          blockNumber: BigInt(1001),
          data: "0x" as const,
          logIndex: 1,
          transactionHash: mockHash,
          transactionIndex: 1,
          removed: false,
        },
      ]),
    );
    mockWalletClient.writeContract.mockImplementation(() => Promise.resolve(mockHash));
  });

  afterEach(() => {
    for (const s of spies) s.mockRestore();
  });

  describe("readContract", () => {
    test("should call public client readContract with correct parameters", async () => {
      const params = { address: mockAddress, abi: mockAbi, functionName: "balanceOf" } as ReadContractParameters;
      const result = await readContract(params, "sei");

      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
      expect(mockPublicClient.readContract).toHaveBeenCalledWith(params);
      expect(result).toBe("mockContractData");
    });

    test("should use default network when none is specified", async () => {
      const params = { address: mockAddress, abi: mockAbi, functionName: "balanceOf" } as ReadContractParameters;
      await readContract(params);

      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });
  });

  describe("writeContract", () => {
    test("should call wallet client writeContract with correct parameters", async () => {
      const params = {
        address: mockAddress,
        abi: mockAbi,
        functionName: "transfer",
        account: mockAddress,
        chain: { id: 1, name: "Sei" },
      } as unknown as WriteContractParameters;

      const result = await writeContract(params, "sei");

      expect(clientsModule.getWalletClientFromProvider).toHaveBeenCalledWith("sei");
      expect(mockWalletClient.writeContract).toHaveBeenCalledWith(params);
      expect(result).toBe(mockHash);
    });

    test("should throw error when wallet provider is not available", async () => {
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.reject(new Error("Private key not configured.")));
      const params = {
        address: mockAddress,
        abi: mockAbi,
        functionName: "transfer",
        account: mockAddress,
        chain: { id: 1, name: "Sei" },
      } as unknown as WriteContractParameters;

      expect(writeContract(params, "sei")).rejects.toThrow("Private key not configured.");
    });

    test("should use default network when none is specified", async () => {
      const params = {
        address: mockAddress,
        abi: mockAbi,
        functionName: "transfer",
        account: mockAddress,
        chain: { id: 1, name: "Sei" },
      } as unknown as WriteContractParameters;

      await writeContract(params);

      expect(clientsModule.getWalletClientFromProvider).toHaveBeenCalledWith("sei");
    });
  });

  describe("getLogs", () => {
    test("should call public client getLogs with correct parameters", async () => {
      const params = {
        address: mockAddress,
        fromBlock: BigInt(1000),
        toBlock: BigInt(2000),
      } as unknown as GetLogsParameters;

      const result = await getLogs(params, "sei");

      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
      expect(mockPublicClient.getLogs).toHaveBeenCalledWith(params);
      expect(result).toEqual([
        {
          address: mockAddress,
          blockHash: mockHash,
          blockNumber: BigInt(1000),
          data: "0x",
          logIndex: 0,
          transactionHash: mockHash,
          transactionIndex: 0,
          removed: false,
        },
        {
          address: mockAddress,
          blockHash: mockHash,
          blockNumber: BigInt(1001),
          data: "0x",
          logIndex: 1,
          transactionHash: mockHash,
          transactionIndex: 1,
          removed: false,
        },
      ]);
    });

    test("should use default network when none is specified", async () => {
      const params = {
        address: mockAddress,
        fromBlock: BigInt(1000),
        toBlock: BigInt(2000),
      } as unknown as GetLogsParameters;

      await getLogs(params);

      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });
  });

  describe("isContract", () => {
    test("should return true when address has bytecode", async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve("0x1234" as `0x${string}`));

      const result = await isContract(mockAddress, "sei");

      // validateAddress is called internally, skip assertion
      // expect(services.helpers.validateAddress).toHaveBeenCalledWith(mockAddress);
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
      expect(mockPublicClient.getBytecode).toHaveBeenCalledWith({ address: mockAddress });
      expect(result).toBe(true);
    });

    test("should return false when address has no bytecode", async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve("0x" as `0x${string}`));

      const result = await isContract(mockAddress, "sei");

      expect(result).toBe(false);
    });

    test("should return false when bytecode is undefined", async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve(undefined));

      const result = await isContract(mockAddress, "sei");

      expect(result).toBe(false);
    });

    test("should use default network when none is specified", async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve("0x1234" as `0x${string}`));

      await isContract(mockAddress);

      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });
  });

  describe("deployContract", () => {
    const mockBytecode = "0x608060405234801561001057600080fd5b50" as Hash;
    const mockAbi = [
      {
        inputs: [
          { name: "name", type: "string" },
          { name: "symbol", type: "string" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
    ] as const;
    const mockArgs = ["TestToken", "TTK"];
    const mockContractAddress = "0x9876543210987654321098765432109876543210" as Address;
    const mockTransactionHash = "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890" as Hash;

    beforeEach(() => {
      // Setup successful deployment mocks
      mockWalletClient.deployContract.mockImplementation(() => Promise.resolve(mockTransactionHash));
      mockPublicClient.waitForTransactionReceipt.mockImplementation(() =>
        Promise.resolve({
          contractAddress: mockContractAddress,
          transactionHash: mockTransactionHash,
          status: "success",
        }),
      );
    });

    test("should deploy contract successfully with all parameters", async () => {
      const result = await deployContract(mockBytecode, mockAbi, mockArgs, "sei");

      expect(clientsModule.getWalletClientFromProvider).toHaveBeenCalledWith("sei");
      expect(mockWalletClient.deployContract).toHaveBeenCalledWith({
        abi: mockAbi,
        bytecode: mockBytecode,
        args: mockArgs,
        account: mockWalletClient.account,
        chain: mockWalletClient.chain,
      });
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
      expect(mockPublicClient.waitForTransactionReceipt).toHaveBeenCalledWith({ hash: mockTransactionHash });
      expect(result).toEqual({
        address: mockContractAddress,
        transactionHash: mockTransactionHash,
      });
    });

    test("should deploy contract successfully without constructor arguments", async () => {
      const result = await deployContract(mockBytecode, mockAbi, undefined, "sei");

      expect(mockWalletClient.deployContract).toHaveBeenCalledWith({
        abi: mockAbi,
        bytecode: mockBytecode,
        args: [],
        account: mockWalletClient.account,
        chain: mockWalletClient.chain,
      });
      expect(result).toEqual({
        address: mockContractAddress,
        transactionHash: mockTransactionHash,
      });
    });

    test("should use default network when none is specified", async () => {
      await deployContract(mockBytecode, mockAbi, mockArgs);

      expect(clientsModule.getWalletClientFromProvider).toHaveBeenCalledWith("sei");
      expect(clientsModule.getPublicClient).toHaveBeenCalledWith("sei");
    });

    test("should throw error when wallet provider is not available", async () => {
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.reject(new Error("Private key not configured.")));

      expect(deployContract(mockBytecode, mockAbi, mockArgs, "sei")).rejects.toThrow("Private key not configured.");
    });

    test("should throw error when wallet client account is not available", async () => {
      const mockWalletClientWithoutAccount = {
        ...mockWalletClient,
        account: undefined,
      };
      (clientsModule.getWalletClientFromProvider as ReturnType<typeof mock>).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

      expect(deployContract(mockBytecode, mockAbi, mockArgs, "sei")).rejects.toThrow("Wallet client account not available for contract deployment.");
      expect(mockWalletClientWithoutAccount.deployContract).not.toHaveBeenCalled();
    });

    test("should throw error when contract deployment fails - no contract address returned", async () => {
      mockPublicClient.waitForTransactionReceipt.mockImplementation(() =>
        Promise.resolve({
          contractAddress: null,
          transactionHash: mockTransactionHash,
          status: "success",
        }),
      );

      expect(deployContract(mockBytecode, mockAbi, mockArgs, "sei")).rejects.toThrow("Contract deployment failed - no contract address returned");
    });

    test("should handle deployment with empty args array", async () => {
      const result = await deployContract(mockBytecode, mockAbi, [], "sei");

      expect(mockWalletClient.deployContract).toHaveBeenCalledWith({
        abi: mockAbi,
        bytecode: mockBytecode,
        args: [],
        account: mockWalletClient.account,
        chain: mockWalletClient.chain,
      });
      expect(result).toEqual({
        address: mockContractAddress,
        transactionHash: mockTransactionHash,
      });
    });
  });
});
