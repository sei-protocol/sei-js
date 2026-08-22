import { afterEach, beforeEach, describe, expect, it, jest, test } from 'bun:test';
import type { Hash } from 'viem';
import { getPrivateKeyAsHex } from '../../../core/config.js';
import {
	approveERC20,
	getPublicClient,
	getWalletClientFromProvider,
	transferERC20,
	transferERC721,
	transferERC1155,
	transferSei
} from '../../../core/services';

// Mock the dependencies
jest.mock('../../../core/services/clients.js', () => ({
	getPublicClient: jest.fn(),
	getWalletClientFromProvider: jest.fn(),
	getAddressFromProvider: jest.fn()
}));
jest.mock('../../../core/config.js', () => ({
	getPrivateKeyAsHex: jest.fn(),
	isWalletEnabled: jest.fn(),
	getWalletMode: jest.fn(),
	formatPrivateKey: jest.fn(),
	config: {}
}));

describe('Transfer Service', () => {
	const mockPublicClient = {
		readContract: jest.fn((params: { functionName: string }) => {
			if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'decimals') return 18;
			if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'symbol') return 'TEST';
			if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'name') return 'Test NFT';
			return null;
		}),
		getContract: jest.fn()
	};

	// Define a properly typed hash value
	const defaultMockHash: Hash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';

	// Define the mock wallet client with properly typed mock functions
	const mockWalletClient = {
		sendTransaction: jest.fn().mockImplementation(() => Promise.resolve(defaultMockHash)),
		writeContract: jest.fn().mockImplementation(() => Promise.resolve(defaultMockHash)),
		account: { address: '0x1234567890123456789012345678901234567890' },
		chain: { id: 1 }
	};

	beforeEach(() => {
		jest.clearAllMocks();
		(getPublicClient as jest.Mock).mockReset().mockReturnValue(mockPublicClient);
		(getWalletClientFromProvider as jest.Mock).mockReset().mockReturnValue(Promise.resolve(mockWalletClient));
		(getPrivateKeyAsHex as jest.MockedFunction<typeof getPrivateKeyAsHex>)
			.mockReset()
			.mockReturnValue('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
		mockPublicClient.readContract.mockReset().mockImplementation((params: { functionName: string }) => {
			if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'decimals') return 18;
			if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'symbol') return 'TEST';
			if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'name') return 'Test NFT';
			return null;
		});
		mockPublicClient.getContract.mockReset();
		mockWalletClient.sendTransaction.mockReset().mockImplementation(() => Promise.resolve(defaultMockHash));
		mockWalletClient.writeContract.mockReset().mockImplementation(() => Promise.resolve(defaultMockHash));
	});

	describe('transferSei', () => {
		test('should transfer SEI tokens successfully', async () => {
			const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
			(mockWalletClient.sendTransaction as jest.Mock).mockImplementation(() => Promise.resolve(mockHash));

			const result = await transferSei('0x1234567890123456789012345678901234567890', '1.0', 'sei');

			expect(result).toBe(mockHash);
			expect(mockWalletClient.sendTransaction).toHaveBeenCalledWith({
				to: '0x1234567890123456789012345678901234567890',
				value: 1000000000000000000n,
				account: mockWalletClient.account,
				chain: mockWalletClient.chain
			});
		});

		test('should throw error when wallet provider fails', async () => {
			(getWalletClientFromProvider as jest.Mock).mockRejectedValue(new Error('Wallet provider unavailable'));

			await expect(transferSei('0x1234567890123456789012345678901234567890', '1.0')).rejects.toThrow('Wallet provider unavailable');
		});

		test('should throw error when wallet account is not initialized', async () => {
			// Mock wallet client without an account
			const mockWalletClientWithoutAccount = {
				...mockWalletClient,
				account: null
			};
			(getWalletClientFromProvider as jest.Mock).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

			await expect(transferSei('0x1234567890123456789012345678901234567890', '1.0')).rejects.toThrow('Wallet account not initialized properly');
		});
	});

	describe('transferERC20', () => {
		test('should transfer ERC20 tokens successfully', async () => {
			const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
			const mockDecimals = 18;
			const mockSymbol = 'TEST';

			(mockPublicClient.readContract as jest.Mock).mockImplementation((params: unknown) => {
				if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'decimals') return mockDecimals;
				if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'symbol') return mockSymbol;
				return null;
			});

			(mockWalletClient.writeContract as jest.Mock).mockImplementation(() => Promise.resolve(mockHash));

			const result = await transferERC20('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', '1.0');

			expect(result).toEqual({
				txHash: mockHash,
				amount: {
					raw: 1000000000000000000n,
					formatted: '1.0'
				},
				token: {
					symbol: mockSymbol,
					decimals: mockDecimals
				}
			});
		});

		test('should throw error when wallet provider fails', async () => {
			(getWalletClientFromProvider as jest.Mock).mockRejectedValue(new Error('Wallet provider unavailable'));

			await expect(transferERC20('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', '1.0')).rejects.toThrow(
				'Wallet provider unavailable'
			);
		});

		test('should throw error when wallet account is not initialized', async () => {
			// Mock wallet client without an account
			const mockWalletClientWithoutAccount = {
				...mockWalletClient,
				account: null
			};
			(getWalletClientFromProvider as jest.Mock).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

			await expect(transferERC20('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', '1.0')).rejects.toThrow(
				'Wallet account not initialized properly'
			);
		});
	});

	describe('approveERC20', () => {
		test('should approve ERC20 token spending successfully', async () => {
			const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
			const mockDecimals = 18;
			const mockSymbol = 'TEST';

			(mockPublicClient.readContract as jest.Mock).mockImplementation((params: unknown) => {
				if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'decimals') return mockDecimals;
				if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'symbol') return mockSymbol;
				return null;
			});

			(mockWalletClient.writeContract as jest.Mock).mockImplementation(() => Promise.resolve(mockHash));

			const result = await approveERC20('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', '1.0');

			expect(result).toEqual({
				txHash: mockHash,
				amount: {
					raw: 1000000000000000000n,
					formatted: '1.0'
				},
				token: {
					symbol: mockSymbol,
					decimals: mockDecimals
				}
			});
		});

		test('should throw error when wallet provider fails', async () => {
			(getWalletClientFromProvider as jest.Mock).mockRejectedValue(new Error('Wallet provider unavailable'));

			await expect(approveERC20('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', '1.0')).rejects.toThrow(
				'Wallet provider unavailable'
			);
		});

		test('should throw error when wallet account is not initialized', async () => {
			// Mock wallet client without an account
			const mockWalletClientWithoutAccount = {
				...mockWalletClient,
				account: null
			};
			(getWalletClientFromProvider as jest.Mock).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

			await expect(approveERC20('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', '1.0')).rejects.toThrow(
				'Wallet account not initialized properly'
			);
		});
	});

	describe('transferERC721', () => {
		test('should transfer ERC721 token successfully', async () => {
			const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
			const mockName = 'Test NFT';
			const mockSymbol = 'TNFT';

			(mockPublicClient.readContract as jest.Mock).mockImplementation((params: unknown) => {
				if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'name') return mockName;
				if (params && typeof params === 'object' && 'functionName' in params && params.functionName === 'symbol') return mockSymbol;
				return null;
			});

			(mockWalletClient.writeContract as jest.Mock).mockImplementation(() => Promise.resolve(mockHash));

			const result = await transferERC721('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', 1n);

			expect(result).toEqual({
				txHash: mockHash,
				tokenId: '1',
				token: {
					name: mockName,
					symbol: mockSymbol
				}
			});
			expect(mockWalletClient.writeContract).toHaveBeenCalledWith(
				expect.objectContaining({
					functionName: 'safeTransferFrom',
					args: [mockWalletClient.account.address, '0x0987654321098765432109876543210987654321', 1n],
					abi: expect.arrayContaining([expect.objectContaining({ name: 'safeTransferFrom' })])
				})
			);
		});

		test('should throw error when wallet provider fails', async () => {
			(getWalletClientFromProvider as jest.Mock).mockRejectedValue(new Error('Wallet provider unavailable'));

			await expect(transferERC721('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', 1n)).rejects.toThrow(
				'Wallet provider unavailable'
			);
		});

		test('should throw error when wallet account is not initialized', async () => {
			// Mock wallet client without an account
			const mockWalletClientWithoutAccount = {
				...mockWalletClient,
				account: null
			};
			(getWalletClientFromProvider as jest.Mock).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

			await expect(transferERC721('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', 1n)).rejects.toThrow(
				'Wallet account not initialized properly'
			);
		});

		test('should handle errors when fetching NFT metadata', async () => {
			const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;

			// Mock successful transaction but failed metadata fetch
			(mockWalletClient.writeContract as jest.Mock).mockImplementation(() => Promise.resolve(mockHash));

			// Mock read contract to throw error for metadata
			(mockPublicClient.readContract as jest.Mock).mockImplementation(() => {
				throw new Error('Failed to fetch metadata');
			});

			// Should still complete but with default values
			const result = await transferERC721('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', 1n);

			expect(result).toEqual({
				txHash: mockHash,
				tokenId: '1',
				token: {
					name: 'Unknown',
					symbol: 'NFT'
				}
			});
		});
	});

	describe('transferERC1155', () => {
		test('should transfer ERC1155 token successfully', async () => {
			// Define the hash with the correct Hash type
			const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;

			// Reset the mock implementation to ensure it returns the expected value
			(mockWalletClient.writeContract as jest.Mock).mockImplementation(() => Promise.resolve(mockHash));

			const result = await transferERC1155('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', 1n, '1');

			expect(result).toEqual({
				txHash: mockHash,
				tokenId: '1',
				amount: '1'
			});
		});

		test('should throw error when wallet provider fails', async () => {
			(getWalletClientFromProvider as jest.Mock).mockRejectedValue(new Error('Wallet provider unavailable'));

			await expect(transferERC1155('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', 1n, '1')).rejects.toThrow(
				'Wallet provider unavailable'
			);
		});

		test('should throw error when wallet account is not initialized', async () => {
			// Mock wallet client without an account
			const mockWalletClientWithoutAccount = {
				...mockWalletClient,
				account: null
			};
			(getWalletClientFromProvider as jest.Mock).mockReturnValue(Promise.resolve(mockWalletClientWithoutAccount));

			await expect(transferERC1155('0x1234567890123456789012345678901234567890', '0x0987654321098765432109876543210987654321', 1n, '1')).rejects.toThrow(
				'Wallet account not initialized properly'
			);
		});
	});
});
