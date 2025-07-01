import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { readContract, writeContract, getLogs, isContract, deployContract } from '../../../core/services/contracts.js';
import { getPublicClient, getWalletClientFromProvider } from '../../../core/services/clients.js';
import { getPrivateKeyAsHex } from '../../../core/config.js';
import type { Hash, Abi, Address, GetLogsParameters, ReadContractParameters, WriteContractParameters } from 'viem';
import * as services from '../../../core/services';

// Mock dependencies
jest.mock('../../../core/services/clients.js');
jest.mock('../../../core/config.js');
jest.mock('../../../core/services/index.js', () => ({
  helpers: {
    validateAddress: jest.fn((address) => address)
  }
}));

describe('Contract Service', () => {
  const mockPublicClient = {
    readContract: jest.fn(),
    getLogs: jest.fn(),
    getBytecode: jest.fn(),
    waitForTransactionReceipt: jest.fn()
  };

  const mockWalletClient = {
    writeContract: jest.fn(),
    deployContract: jest.fn(),
    account: '0x1234567890123456789012345678901234567890' as Address,
    chain: { id: 1, name: 'Sei' }
  };

  const mockPrivateKey = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
  const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
  const mockAddress = '0x1234567890123456789012345678901234567890' as Address;
  const mockAbi = [] as unknown as Abi;

  beforeEach(() => {
    // Reset all mocks
    jest.resetAllMocks();
    
    // Setup default mock implementations
    (getPublicClient as jest.Mock).mockReturnValue(mockPublicClient);
    (getWalletClientFromProvider as jest.Mock).mockReturnValue(Promise.resolve(mockWalletClient));
    (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);
    
    // Use mockImplementation instead of mockResolvedValue to properly type the return values
    mockPublicClient.readContract.mockImplementation(() => Promise.resolve('mockContractData'));
    mockPublicClient.getLogs.mockImplementation(() => Promise.resolve(['mockLog1', 'mockLog2']));
    mockWalletClient.writeContract.mockImplementation(() => Promise.resolve(mockHash));
    
    // Setup validateAddress mock to return the input address
    (services.helpers.validateAddress as jest.Mock).mockImplementation((address) => address);
  });

  describe('readContract', () => {
    test('should call public client readContract with correct parameters', async () => {
      const params = { address: mockAddress, abi: mockAbi, functionName: 'balanceOf' } as ReadContractParameters;
      const result = await readContract(params, 'sei');
      
      expect(getPublicClient).toHaveBeenCalledWith('sei');
      expect(mockPublicClient.readContract).toHaveBeenCalledWith(params);
      expect(result).toBe('mockContractData');
    });

    test('should use default network when none is specified', async () => {
      const params = { address: mockAddress, abi: mockAbi, functionName: 'balanceOf' } as ReadContractParameters;
      await readContract(params);
      
      expect(getPublicClient).toHaveBeenCalledWith('sei');
    });
  });

  describe('writeContract', () => {
    test('should call wallet client writeContract with correct parameters', async () => {
      const params = { 
        address: mockAddress, 
        abi: mockAbi, 
        functionName: 'transfer',
        account: mockAddress,
        chain: { id: 1, name: 'Sei' }
      } as unknown as WriteContractParameters;
      
      const result = await writeContract(params, 'sei');
      
      expect(getPrivateKeyAsHex).toHaveBeenCalled();
      expect(getWalletClientFromProvider).toHaveBeenCalledWith('sei');
      expect(mockWalletClient.writeContract).toHaveBeenCalledWith(params);
      expect(result).toBe(mockHash);
    });

    test('should throw error when private key is not available', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(null);
      const params = { 
        address: mockAddress, 
        abi: mockAbi, 
        functionName: 'transfer',
        account: mockAddress,
        chain: { id: 1, name: 'Sei' }
      } as unknown as WriteContractParameters;
      
      await expect(writeContract(params, 'sei')).rejects.toThrow('Private key not available');
      expect(getWalletClientFromProvider).not.toHaveBeenCalled();
    });

    test('should use default network when none is specified', async () => {
      const params = { 
        address: mockAddress, 
        abi: mockAbi, 
        functionName: 'transfer',
        account: mockAddress,
        chain: { id: 1, name: 'Sei' }
      } as unknown as WriteContractParameters;
      
      await writeContract(params);
      
      expect(getWalletClientFromProvider).toHaveBeenCalledWith('sei');
    });
  });

  describe('getLogs', () => {
    test('should call public client getLogs with correct parameters', async () => {
      const params = { 
        address: mockAddress, 
        fromBlock: 1000n, 
        toBlock: 2000n 
      } as unknown as GetLogsParameters;
      
      const result = await getLogs(params, 'sei');
      
      expect(getPublicClient).toHaveBeenCalledWith('sei');
      expect(mockPublicClient.getLogs).toHaveBeenCalledWith(params);
      expect(result).toEqual(['mockLog1', 'mockLog2']);
    });

    test('should use default network when none is specified', async () => {
      const params = { 
        address: mockAddress, 
        fromBlock: 1000n, 
        toBlock: 2000n 
      } as unknown as GetLogsParameters;
      
      await getLogs(params);
      
      expect(getPublicClient).toHaveBeenCalledWith('sei');
    });
  });

  describe('isContract', () => {
    test('should return true when address has bytecode', async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve('0x1234' as `0x${string}`));
      
      const result = await isContract(mockAddress, 'sei');
      
      expect(services.helpers.validateAddress).toHaveBeenCalledWith(mockAddress);
      expect(getPublicClient).toHaveBeenCalledWith('sei');
      expect(mockPublicClient.getBytecode).toHaveBeenCalledWith({ address: mockAddress });
      expect(result).toBe(true);
    });

    test('should return false when address has no bytecode', async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve('0x' as `0x${string}`));
      
      const result = await isContract(mockAddress, 'sei');
      
      expect(result).toBe(false);
    });

    test('should return false when bytecode is undefined', async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve(undefined));
      
      const result = await isContract(mockAddress, 'sei');
      
      expect(result).toBe(false);
    });

    test('should use default network when none is specified', async () => {
      // Type the mock return value to avoid type errors
      mockPublicClient.getBytecode.mockImplementation(() => Promise.resolve('0x1234' as `0x${string}`));
      
      await isContract(mockAddress);
      
      expect(getPublicClient).toHaveBeenCalledWith('sei');
    });
  });

  describe('deployContract', () => {
    const mockBytecode = '0x608060405234801561001057600080fd5b50' as Hash;
    const mockAbi = [
      {
        inputs: [{ name: 'name', type: 'string' }, { name: 'symbol', type: 'string' }],
        stateMutability: 'nonpayable',
        type: 'constructor'
      }
    ];
    const mockArgs = ['TestToken', 'TTK'];
    const mockContractAddress = '0x9876543210987654321098765432109876543210' as Address;
    const mockTransactionHash = '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890' as Hash;

    beforeEach(() => {
      // Setup successful deployment mocks
      mockWalletClient.deployContract.mockImplementation(() => Promise.resolve(mockTransactionHash));
      mockPublicClient.waitForTransactionReceipt.mockImplementation(() => Promise.resolve({
        contractAddress: mockContractAddress,
        transactionHash: mockTransactionHash,
        status: 'success'
      }));
    });

    test('should deploy contract successfully with all parameters', async () => {
      const result = await deployContract(mockBytecode, mockAbi, mockArgs, 'sei');
      
      expect(getPrivateKeyAsHex).toHaveBeenCalled();
      expect(getWalletClientFromProvider).toHaveBeenCalledWith('sei');
      expect(mockWalletClient.deployContract).toHaveBeenCalledWith({
        abi: mockAbi,
        bytecode: mockBytecode,
        args: mockArgs,
        account: mockWalletClient.account,
        chain: mockWalletClient.chain
      });
      expect(getPublicClient).toHaveBeenCalledWith('sei');
      expect(mockPublicClient.waitForTransactionReceipt).toHaveBeenCalledWith({ hash: mockTransactionHash });
      expect(result).toEqual({
        address: mockContractAddress,
        transactionHash: mockTransactionHash
      });
    });

    test('should deploy contract successfully without constructor arguments', async () => {
      const result = await deployContract(mockBytecode, mockAbi, undefined, 'sei');
      
      expect(mockWalletClient.deployContract).toHaveBeenCalledWith({
        abi: mockAbi,
        bytecode: mockBytecode,
        args: [],
        account: mockWalletClient.account,
        chain: mockWalletClient.chain
      });
      expect(result).toEqual({
        address: mockContractAddress,
        transactionHash: mockTransactionHash
      });
    });

    test('should use default network when none is specified', async () => {
      await deployContract(mockBytecode, mockAbi, mockArgs);
      
      expect(getWalletClientFromProvider).toHaveBeenCalledWith('sei');
      expect(getPublicClient).toHaveBeenCalledWith('sei');
    });

    test('should throw error when private key is not available', async () => {
      (getPrivateKeyAsHex as jest.Mock).mockReturnValue(null);
      
      await expect(deployContract(mockBytecode, mockAbi, mockArgs, 'sei')).rejects.toThrow(
        'Private key not available. Set the PRIVATE_KEY environment variable and restart the MCP server.'
      );
      expect(getWalletClientFromProvider).not.toHaveBeenCalled();
    });

    test('should throw error when wallet client account is not available', async () => {
      const mockWalletClientWithoutAccount = {
        ...mockWalletClient,
        account: undefined
      };
      (getWalletClientFromProvider as jest.Mock).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));
      
      await expect(deployContract(mockBytecode, mockAbi, mockArgs, 'sei')).rejects.toThrow(
        'Wallet client account not available for contract deployment.'
      );
      expect(mockWalletClientWithoutAccount.deployContract).not.toHaveBeenCalled();
    });

    test('should throw error when contract deployment fails - no contract address returned', async () => {
      mockPublicClient.waitForTransactionReceipt.mockImplementation(() => Promise.resolve({
        contractAddress: null,
        transactionHash: mockTransactionHash,
        status: 'success'
      }));
      
      await expect(deployContract(mockBytecode, mockAbi, mockArgs, 'sei')).rejects.toThrow(
        'Contract deployment failed - no contract address returned'
      );
    });

    test('should handle deployment with empty args array', async () => {
      const result = await deployContract(mockBytecode, mockAbi, [], 'sei');
      
      expect(mockWalletClient.deployContract).toHaveBeenCalledWith({
        abi: mockAbi,
        bytecode: mockBytecode,
        args: [],
        account: mockWalletClient.account,
        chain: mockWalletClient.chain
      });
      expect(result).toEqual({
        address: mockContractAddress,
        transactionHash: mockTransactionHash
      });
    });
  });
});
