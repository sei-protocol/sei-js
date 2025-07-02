import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import type { Address, EstimateGasParameters, Hash, TransactionReceipt } from 'viem';
import { getPublicClient } from '../../../core/services/clients.js';
import { estimateGas, getChainId, getTransaction, getTransactionCount, getTransactionReceipt } from '../../../core/services/transactions.js';

// Mock dependencies
jest.mock('../../../core/services/clients.js');

describe('Transactions Service', () => {
	// Mock values
	const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
	const mockAddress = '0x1234567890123456789012345678901234567890' as Address;
	const mockNetwork = 'sei';

	// Mock transaction data
	const mockTransaction = {
		hash: mockHash,
		from: mockAddress,
		to: '0x0987654321098765432109876543210987654321' as Address,
		value: 1000000000000000000n
	};

	// Mock transaction receipt
	const mockReceipt: TransactionReceipt = {
		blockHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890' as Hash,
		blockNumber: 12345678n,
		contractAddress: null,
		cumulativeGasUsed: 21000n,
		effectiveGasPrice: 20000000000n,
		from: mockAddress,
		gasUsed: 21000n,
		logs: [],
		logsBloom: '0x' as `0x${string}`,
		status: 'success',
		to: '0x0987654321098765432109876543210987654321' as Address,
		transactionHash: mockHash,
		transactionIndex: 1,
		type: 'eip1559'
	};

	// Mock gas parameters
	const mockGasParams: EstimateGasParameters = {
		account: mockAddress,
		to: '0x0987654321098765432109876543210987654321' as Address,
		value: 1000000000000000000n
	};

	// Mock public client
	const mockPublicClient = {
		getTransaction: jest.fn(),
		getTransactionReceipt: jest.fn(),
		getTransactionCount: jest.fn(),
		estimateGas: jest.fn(),
		getChainId: jest.fn()
	};

	beforeEach(() => {
		// Reset all mocks
		jest.resetAllMocks();

		// Setup default mock implementations
		(getPublicClient as jest.Mock).mockReturnValue(mockPublicClient);
		mockPublicClient.getTransaction.mockResolvedValue(mockTransaction as never);
		mockPublicClient.getTransactionReceipt.mockResolvedValue(mockReceipt as never);
		mockPublicClient.getTransactionCount.mockResolvedValue(5n as never);
		mockPublicClient.estimateGas.mockResolvedValue(21000n as never);
		mockPublicClient.getChainId.mockResolvedValue(1 as never);
	});

	describe('getTransaction', () => {
		test('should return transaction data for a given hash', async () => {
			// Call the function
			const result = await getTransaction(mockHash, mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getTransaction was called with the correct parameters
			expect(mockPublicClient.getTransaction).toHaveBeenCalledWith({ hash: mockHash });

			// Verify the result
			expect(result).toEqual(mockTransaction);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getTransaction(mockHash);

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getTransaction.mockRejectedValue(new Error('Transaction not found') as never);

			// Verify the function throws the error
			await expect(getTransaction(mockHash)).rejects.toThrow('Transaction not found');
		});
	});

	describe('getTransactionReceipt', () => {
		test('should return transaction receipt for a given hash', async () => {
			// Call the function
			const result = await getTransactionReceipt(mockHash, mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getTransactionReceipt was called with the correct parameters
			expect(mockPublicClient.getTransactionReceipt).toHaveBeenCalledWith({ hash: mockHash });

			// Verify the result
			expect(result).toEqual(mockReceipt);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getTransactionReceipt(mockHash);

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getTransactionReceipt.mockRejectedValue(new Error('Receipt not found') as never);

			// Verify the function throws the error
			await expect(getTransactionReceipt(mockHash)).rejects.toThrow('Receipt not found');
		});
	});

	describe('getTransactionCount', () => {
		test('should return transaction count for a given address', async () => {
			// Call the function
			const result = await getTransactionCount(mockAddress, mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getTransactionCount was called with the correct parameters
			expect(mockPublicClient.getTransactionCount).toHaveBeenCalledWith({ address: mockAddress });

			// Verify the result is converted to a number
			expect(result).toBe(5);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getTransactionCount(mockAddress);

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getTransactionCount.mockRejectedValue(new Error('Invalid address') as never);

			// Verify the function throws the error
			await expect(getTransactionCount(mockAddress)).rejects.toThrow('Invalid address');
		});
	});

	describe('estimateGas', () => {
		test('should return gas estimate for given parameters', async () => {
			// Call the function
			const result = await estimateGas(mockGasParams, mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify estimateGas was called with the correct parameters
			expect(mockPublicClient.estimateGas).toHaveBeenCalledWith(mockGasParams);

			// Verify the result
			expect(result).toBe(21000n);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await estimateGas(mockGasParams);

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.estimateGas.mockRejectedValue(new Error('Insufficient funds') as never);

			// Verify the function throws the error
			await expect(estimateGas(mockGasParams)).rejects.toThrow('Insufficient funds');
		});
	});

	describe('getChainId', () => {
		test('should return chain ID for a given network', async () => {
			// Call the function
			const result = await getChainId(mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getChainId was called
			expect(mockPublicClient.getChainId).toHaveBeenCalled();

			// Verify the result is converted to a number
			expect(result).toBe(1);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getChainId();

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getChainId.mockRejectedValue(new Error('Network error') as never);

			// Verify the function throws the error
			await expect(getChainId()).rejects.toThrow('Network error');
		});
	});
});
