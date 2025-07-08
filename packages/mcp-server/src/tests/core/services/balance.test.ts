import { afterEach, describe, expect, jest, test } from '@jest/globals';
import { getBalance, getERC20Balance, getERC721Balance, getERC1155Balance, isNFTOwner } from '../../../core/services';

// Create valid test addresses with proper type assertions
const VALID_ADDRESS = '0x1234567890123456789012345678901234567890' as `0x${string}`;
const VALID_TOKEN_ADDRESS = '0xabcdef1234567890123456789012345678901234' as `0x${string}`;
const VALID_OWNER_ADDRESS = '0x0987654321098765432109876543210987654321' as `0x${string}`;

// Mock modules
jest.mock('../../../core/services/clients.js', () => ({
	getPublicClient: jest.fn()
}));

jest.mock('../../../core/services/utils.js', () => ({
	utils: {
		validateAddress: jest.fn((address) => address)
	}
}));

jest.mock('../../../core/services/contracts.js', () => ({
	readContract: jest.fn()
}));

jest.mock('viem', () => ({
	formatEther: jest.fn(() => '1'),
	getContract: jest.fn(),
	formatUnits: jest.fn(() => '1')
}));

describe('Balance Service', () => {
	// Reset all mocks after each test
	afterEach(() => {
		jest.resetAllMocks();
	});

	describe('getBalance', () => {
		test('should return the native token balance', async () => {
			// Import mocked modules
			const { getPublicClient } = await import('../../../core/services/clients.js');
			const { formatEther } = await import('viem');

			// Setup mock client with proper type casting
			const mockClient = {
				getBalance: jest.fn().mockImplementation(() => Promise.resolve(BigInt('1000000000000000000')))
			};

			// Configure mocks for this test
			(getPublicClient as jest.Mock).mockReturnValue(mockClient);
			(formatEther as jest.Mock).mockReturnValue('1');

			// Call the function
			const result = await getBalance(VALID_ADDRESS);

			// Verify results
			expect(result).toEqual({
				wei: 1000000000000000000n,
				sei: '1'
			});
		});
	});

	describe('getERC20Balance', () => {
		test('should return the ERC20 token balance with metadata', async () => {
			// Import mocked modules
			const { getContract } = await import('viem');
			const { formatUnits } = await import('viem');

			// Setup mock contract
			const mockContract = {
				read: {
					balanceOf: jest.fn().mockImplementation(() => Promise.resolve(BigInt('1000000000'))),
					symbol: jest.fn().mockImplementation(() => Promise.resolve('TOKEN')),
					decimals: jest.fn().mockImplementation(() => Promise.resolve(9))
				}
			};

			// Configure mocks for this test
			(getContract as jest.Mock).mockReturnValue(mockContract);
			(formatUnits as jest.Mock).mockReturnValue('1');

			// Call the function
			const result = await getERC20Balance(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS);

			// Verify results
			expect(result).toEqual({
				raw: 1000000000n,
				formatted: '1',
				token: {
					symbol: 'TOKEN',
					decimals: 9
				}
			});
		});
	});

	describe('isNFTOwner', () => {
		test('should return true if address owns the NFT', async () => {
			// Import mocked modules
			const { readContract } = await import('../../../core/services/contracts.js');
			const { utils } = await import('../../../core/services/utils.js');

			// Configure mocks for this test
			(readContract as jest.Mock).mockImplementation(() => Promise.resolve(VALID_OWNER_ADDRESS));
			(utils.validateAddress as jest.Mock).mockImplementation((address) => address as `0x${string}`);

			// Call the function
			const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, 1n);

			// Verify results
			expect(result).toBe(true);
		});

		test('should return false if address does not own the NFT', async () => {
			// Import mocked modules
			const { readContract } = await import('../../../core/services/contracts.js');
			const { utils } = await import('../../../core/services/utils.js');

			// Configure mocks for this test
			(readContract as jest.Mock).mockImplementation(() => Promise.resolve('0xDifferentAddress' as `0x${string}`));
			(utils.validateAddress as jest.Mock).mockImplementation((address) => address as `0x${string}`);

			// Call the function
			const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, 1n);

			// Verify results
			expect(result).toBe(false);
		});

		test('should return false if there is an error', async () => {
			// Import mocked modules
			const { readContract } = await import('../../../core/services/contracts.js');
			const { utils } = await import('../../../core/services/utils.js');

			// Configure mocks for this test
			(readContract as jest.Mock).mockImplementation(() => {
				throw new Error('NFT does not exist');
			});
			(utils.validateAddress as jest.Mock).mockImplementation((address) => address as `0x${string}`);

			// Mock console.error to avoid cluttering test output
			const originalConsoleError = console.error;
			console.error = () => {};

			// Call the function
			const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, 1n);

			// Verify results
			expect(result).toBe(false);

			// Restore console.error
			console.error = originalConsoleError;
		});

		test('should return false if there is a non-Error object thrown', async () => {
			// Import mocked modules
			const { readContract } = await import('../../../core/services/contracts.js');
			const { utils } = await import('../../../core/services/utils.js');

			// Configure mocks for this test
			(readContract as jest.Mock).mockImplementation(() => {
				throw 'String error message'; // Non-Error object
			});
			(utils.validateAddress as jest.Mock).mockImplementation((address) => address as `0x${string}`);

			// Mock console.error to avoid cluttering test output
			const originalConsoleError = console.error;
			console.error = () => {};

			// Call the function
			const result = await isNFTOwner(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, 1n);

			// Verify results
			expect(result).toBe(false);

			// Restore console.error
			console.error = originalConsoleError;
		});
	});

	describe('getERC721Balance', () => {
		test('should return the ERC721 token balance with metadata', async () => {
			// Import mocked modules
			const { readContract } = await import('../../../core/services/contracts.js');
			const { utils } = await import('../../../core/services/utils.js');

			// Configure mocks for this test
			(readContract as jest.Mock).mockResolvedValue(BigInt('5'));
			(utils.validateAddress as jest.Mock).mockImplementation((address) => address as `0x${string}`);

			// Call the function
			const result = await getERC721Balance(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS);

			// Verify results
			expect(result).toBe(5n);
		});
	});

	describe('getERC1155Balance', () => {
		test('should return the balance of the ERC1155 token', async () => {
			// Import mocked modules
			const { readContract } = await import('../../../core/services/contracts.js');
			const { utils } = await import('../../../core/services/utils.js');

			// Configure mocks for this test
			(readContract as jest.Mock).mockImplementation(() => Promise.resolve(BigInt('10')));
			(utils.validateAddress as jest.Mock).mockImplementation((address) => address as `0x${string}`);

			// Call the function
			const result = await getERC1155Balance(VALID_TOKEN_ADDRESS, VALID_OWNER_ADDRESS, 2n);

			// Verify results
			expect(result).toBe(10n);
		});
	});
});
