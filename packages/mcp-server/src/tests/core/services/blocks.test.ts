import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import type { Hash } from 'viem';
import { getBlockByHash, getBlockByNumber, getBlockNumber, getLatestBlock } from '../../../core/services/blocks.js';
import { getPublicClient } from '../../../core/services/clients.js';

// Mock dependencies
jest.mock('../../../core/services/clients.js');

describe('Blocks Service', () => {
	// Mock values
	const mockBlockNumber = 12345678n;
	const mockBlockHash = '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890' as Hash;
	const mockNetwork = 'sei';

	// Create a simplified mock block response
	const mockBlockResponse = { hash: mockBlockHash, number: mockBlockNumber };

	// Mock public client
	const mockPublicClient = {
		getBlockNumber: jest.fn(),
		getBlock: jest.fn()
	};

	beforeEach(() => {
		// Reset all mocks
		jest.resetAllMocks();

		// Setup default mock implementations
		(getPublicClient as jest.Mock).mockReturnValue(mockPublicClient);
		mockPublicClient.getBlockNumber.mockResolvedValue(mockBlockNumber as never);
		// Use a simplified mock to avoid TypeScript errors with the Block type
		mockPublicClient.getBlock.mockResolvedValue(mockBlockResponse as never);
	});

	describe('getBlockNumber', () => {
		test('should return the current block number for a given network', async () => {
			// Call the function
			const result = await getBlockNumber(mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getBlockNumber was called
			expect(mockPublicClient.getBlockNumber).toHaveBeenCalled();

			// Verify the result
			expect(result).toBe(mockBlockNumber);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getBlockNumber();

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getBlockNumber.mockRejectedValue(new Error('Network error') as never);

			// Verify the function throws the error
			await expect(getBlockNumber()).rejects.toThrow('Network error');
		});
	});

	describe('getBlockByNumber', () => {
		test('should return block data for a given block number', async () => {
			// Call the function
			const result = await getBlockByNumber(12345678, mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getBlock was called with the correct parameters
			expect(mockPublicClient.getBlock).toHaveBeenCalledWith({ blockNumber: 12345678n });

			// Verify the result
			expect(result).toEqual(mockBlockResponse);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getBlockByNumber(12345678);

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getBlock.mockRejectedValue(new Error('Block not found') as never);

			// Verify the function throws the error
			await expect(getBlockByNumber(12345678)).rejects.toThrow('Block not found');
		});
	});

	describe('getBlockByHash', () => {
		test('should return block data for a given block hash', async () => {
			// Call the function
			const result = await getBlockByHash(mockBlockHash, mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getBlock was called with the correct parameters
			expect(mockPublicClient.getBlock).toHaveBeenCalledWith({ blockHash: mockBlockHash });

			// Verify the result
			expect(result).toEqual(mockBlockResponse);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getBlockByHash(mockBlockHash);

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getBlock.mockRejectedValue(new Error('Block not found') as never);

			// Verify the function throws the error
			await expect(getBlockByHash(mockBlockHash)).rejects.toThrow('Block not found');
		});
	});

	describe('getLatestBlock', () => {
		test('should return the latest block for a given network', async () => {
			// Call the function
			const result = await getLatestBlock(mockNetwork);

			// Verify the public client was retrieved with the correct network
			expect(getPublicClient).toHaveBeenCalledWith(mockNetwork);

			// Verify getBlock was called with no parameters
			expect(mockPublicClient.getBlock).toHaveBeenCalledWith();

			// Verify the result
			expect(result).toEqual(mockBlockResponse);
		});

		test('should use default network when none is specified', async () => {
			// Call the function without specifying a network
			await getLatestBlock();

			// Verify the public client was retrieved with the default network
			expect(getPublicClient).toHaveBeenCalledWith('sei');
		});

		test('should handle errors from client calls', async () => {
			// Setup mock to throw an error
			mockPublicClient.getBlock.mockRejectedValue(new Error('Network error') as never);

			// Verify the function throws the error
			await expect(getLatestBlock()).rejects.toThrow('Network error');
		});
	});
});
