import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { readContract, writeContract, getLogs, isContract } from '../../../core/services/contracts.js';
import { getPublicClient, getWalletClient } from '../../../core/services/clients.js';
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
    getBytecode: jest.fn()
  };

  const mockWalletClient = {
    writeContract: jest.fn()
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
    (getWalletClient as jest.Mock).mockReturnValue(mockWalletClient);
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
      expect(getWalletClient).toHaveBeenCalledWith(mockPrivateKey, 'sei');
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
      expect(getWalletClient).not.toHaveBeenCalled();
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
      
      expect(getWalletClient).toHaveBeenCalledWith(mockPrivateKey, 'sei');
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
});
