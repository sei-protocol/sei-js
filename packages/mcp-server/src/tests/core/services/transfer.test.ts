import { describe, test, expect, mock, beforeEach, afterEach } from 'bun:test';
import {
  transferSei,
  transferERC20,
  approveERC20,
  transferERC721,
  transferERC1155
} from '../../../core/services/transfer.js';
import { getPublicClient, getWalletClient } from '../../../core/services/clients.js';
import { getPrivateKeyAsHex } from '../../../core/config.js';
import type { Hash } from 'viem';

// Mock the dependencies
mock.module('../../../core/services/clients.js', () => ({
  getPublicClient: mock(() => {}),
  getWalletClient: mock(() => {})
}));

mock.module('../../../core/config.js', () => ({
  getPrivateKeyAsHex: mock(() => '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef')
}));

describe('Transfer Service', () => {
  const mockPublicClient = {
    readContract: mock((params: { functionName: string }) => {
      if (params.functionName === 'decimals') return 18;
      if (params.functionName === 'symbol') return 'TEST';
      if (params.functionName === 'name') return 'Test NFT';
      return null;
    }),
    getContract: mock(() => {})
  };

  const mockWalletClient = {
    sendTransaction: mock(() => '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash),
    writeContract: mock(() => '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash),
    account: { address: '0x1234567890123456789012345678901234567890' },
    chain: { id: 1 }
  };

  beforeEach(() => {
    // Reset all mocks before each test
    mock.restore();

    // Setup default mock implementations
    (getPublicClient as any).mockReturnValue(mockPublicClient);
    (getWalletClient as any).mockReturnValue(mockWalletClient);
    (getPrivateKeyAsHex as any).mockReturnValue('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
  });

  describe('transferSei', () => {
    test('should transfer SEI tokens successfully', async () => {
      const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
      (mockWalletClient.sendTransaction as any).mockResolvedValue(mockHash);

      const result = await transferSei(
        '0x1234567890123456789012345678901234567890',
        '1.0',
        'sei'
      );

      expect(result).toBe(mockHash);
      expect(mockWalletClient.sendTransaction).toHaveBeenCalledWith({
        to: '0x1234567890123456789012345678901234567890',
        value: 1000000000000000000n,
        account: mockWalletClient.account,
        chain: mockWalletClient.chain
      });
    });

    test('should throw error when private key is not available', async () => {
      (getPrivateKeyAsHex as any).mockReturnValue(null);

      await expect(transferSei(
        '0x1234567890123456789012345678901234567890',
        '1.0'
      )).rejects.toThrow('Private key not available');
    });
  });

  describe('transferERC20', () => {
    test('should transfer ERC20 tokens successfully', async () => {
      const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
      const mockDecimals = 18;
      const mockSymbol = 'TEST';

      (mockPublicClient.readContract as any).mockImplementation((params: { functionName: string }) => {
        if (params.functionName === 'decimals') return mockDecimals;
        if (params.functionName === 'symbol') return mockSymbol;
        return null;
      });

      (mockWalletClient.writeContract as any).mockResolvedValue(mockHash);

      const result = await transferERC20(
        '0x1234567890123456789012345678901234567890',
        '0x0987654321098765432109876543210987654321',
        '1.0'
      );

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
  });

  describe('approveERC20', () => {
    test('should approve ERC20 token spending successfully', async () => {
      const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
      const mockDecimals = 18;
      const mockSymbol = 'TEST';

      (mockPublicClient.readContract as any).mockImplementation((params: { functionName: string }) => {
        if (params.functionName === 'decimals') return mockDecimals;
        if (params.functionName === 'symbol') return mockSymbol;
        return null;
      });

      (mockWalletClient.writeContract as any).mockResolvedValue(mockHash);

      const result = await approveERC20(
        '0x1234567890123456789012345678901234567890',
        '0x0987654321098765432109876543210987654321',
        '1.0'
      );

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
  });

  describe('transferERC721', () => {
    test('should transfer ERC721 token successfully', async () => {
      const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;
      const mockName = 'Test NFT';
      const mockSymbol = 'TNFT';

      (mockPublicClient.readContract as any).mockImplementation((params: { functionName: string }) => {
        if (params.functionName === 'name') return mockName;
        if (params.functionName === 'symbol') return mockSymbol;
        return null;
      });

      (mockWalletClient.writeContract as any).mockResolvedValue(mockHash);

      const result = await transferERC721(
        '0x1234567890123456789012345678901234567890',
        '0x0987654321098765432109876543210987654321',
        1n
      );

      expect(result).toEqual({
        txHash: mockHash,
        tokenId: '1',
        token: {
          name: mockName,
          symbol: mockSymbol
        }
      });
    });
  });

  describe('transferERC1155', () => {
    test('should transfer ERC1155 token successfully', async () => {
      const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;

      (mockWalletClient.writeContract as any).mockResolvedValue(mockHash);

      const result = await transferERC1155(
        '0x1234567890123456789012345678901234567890',
        '0x0987654321098765432109876543210987654321',
        1n,
        '1'
      );

      expect(result).toEqual({
        txHash: mockHash,
        tokenId: '1',
        amount: '1'
      });
    });
  });
});
