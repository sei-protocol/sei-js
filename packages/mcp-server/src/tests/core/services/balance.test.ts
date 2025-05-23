import { describe, test, expect, mock, spyOn, afterEach } from 'bun:test';
import { 
  getBalance, 
  getERC20Balance, 
  isNFTOwner, 
  getERC721Balance, 
  getERC1155Balance 
} from '../../../core/services/balance.js';

// Create valid test addresses
const VALID_ADDRESS = '0x1234567890123456789012345678901234567890';
const VALID_TOKEN_ADDRESS = '0xabcdef1234567890123456789012345678901234';
const VALID_OWNER_ADDRESS = '0x0987654321098765432109876543210987654321';

describe('Balance Service', () => {
  // Reset all mocks after each test
  afterEach(() => {
    mock.restore();
  });

  describe('getBalance', () => {
    test('should return the native token balance', async () => {
      // Mock the getPublicClient function
      const mockClient = {
        getBalance: () => Promise.resolve(1000000000000000000n)
      };
      
      // Mock the modules
      mock.module('../../../core/services/clients.js', () => ({
        getPublicClient: () => mockClient
      }));
      
      mock.module('../../../core/services/utils.js', () => ({
        helpers: {
          validateAddress: (address: string) => address
        }
      }));
      
      mock.module('viem', () => ({
        formatEther: () => '1',
        getContract: () => ({}),
        formatUnits: () => ''
      }));
      
      // Call the function
      const result = await getBalance(VALID_ADDRESS);
      
      // Verify results
      expect(result).toEqual({
        wei: 1000000000000000000n,
        ether: '1'
      });
    });
  });

  describe('getERC20Balance', () => {
    test('should return the ERC20 token balance with metadata', async () => {
      // Mock the contract object
      const mockContract = {
        read: {
          balanceOf: () => Promise.resolve(1000000000n),
          symbol: () => Promise.resolve('TOKEN'),
          decimals: () => Promise.resolve(9)
        }
      };
      
      // Mock the modules
      mock.module('viem', () => ({
        getContract: () => mockContract,
        formatUnits: () => '1',
        formatEther: () => ''
      }));
      
      mock.module('../../../core/services/utils.js', () => ({
        helpers: {
          validateAddress: (address: string) => address
        }
      }));
      
      // Call the function
      const result = await getERC20Balance(
        VALID_TOKEN_ADDRESS,
        VALID_OWNER_ADDRESS
      );
      
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
      // Mock the modules
      mock.module('../../../core/services/contracts.js', () => ({
        readContract: () => Promise.resolve(VALID_OWNER_ADDRESS)
      }));
      
      mock.module('../../../core/services/utils.js', () => ({
        helpers: {
          validateAddress: (address: string) => address
        }
      }));
      
      // Call the function
      const result = await isNFTOwner(
        VALID_TOKEN_ADDRESS,
        VALID_OWNER_ADDRESS,
        1n
      );
      
      // Verify results
      expect(result).toBe(true);
    });
    
    test('should return false if address does not own the NFT', async () => {
      // Mock the modules
      mock.module('../../../core/services/contracts.js', () => ({
        readContract: () => Promise.resolve('0xDifferentAddress')
      }));
      
      mock.module('../../../core/services/utils.js', () => ({
        helpers: {
          validateAddress: (address: string) => address
        }
      }));
      
      // Call the function
      const result = await isNFTOwner(
        VALID_TOKEN_ADDRESS,
        VALID_OWNER_ADDRESS,
        1n
      );
      
      // Verify results
      expect(result).toBe(false);
    });
    
    test('should return false if there is an error', async () => {
      // Mock the modules
      mock.module('../../../core/services/contracts.js', () => ({
        readContract: () => {
          throw new Error('NFT does not exist');
        }
      }));
      
      mock.module('../../../core/services/utils.js', () => ({
        helpers: {
          validateAddress: (address: string) => address
        }
      }));
      
      // Mock console.error to avoid cluttering test output
      const originalConsoleError = console.error;
      console.error = () => {};
      
      // Call the function
      const result = await isNFTOwner(
        VALID_TOKEN_ADDRESS,
        VALID_OWNER_ADDRESS,
        1n
      );
      
      // Verify results
      expect(result).toBe(false);
      
      // Restore console.error
      console.error = originalConsoleError;
    });
  });

  describe('getERC721Balance', () => {
    test('should return the number of NFTs owned', async () => {
      // Mock the modules
      mock.module('../../../core/services/contracts.js', () => ({
        readContract: () => Promise.resolve(5n)
      }));
      
      mock.module('../../../core/services/utils.js', () => ({
        helpers: {
          validateAddress: (address: string) => address
        }
      }));
      
      // Call the function
      const result = await getERC721Balance(
        VALID_TOKEN_ADDRESS,
        VALID_OWNER_ADDRESS
      );
      
      // Verify results
      expect(result).toBe(5n);
    });
  });

  describe('getERC1155Balance', () => {
    test('should return the balance of the ERC1155 token', async () => {
      // Mock the modules
      mock.module('../../../core/services/contracts.js', () => ({
        readContract: () => Promise.resolve(10n)
      }));
      
      mock.module('../../../core/services/utils.js', () => ({
        helpers: {
          validateAddress: (address: string) => address
        }
      }));
      
      // Call the function
      const result = await getERC1155Balance(
        VALID_TOKEN_ADDRESS,
        VALID_OWNER_ADDRESS,
        2n
      );
      
      // Verify results
      expect(result).toBe(10n);
    });
  });
});
