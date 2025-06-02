import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals';
/**
 * Integration Tests for MCP Tools
 * 
 * This file contains integration tests for tools registered with the MCP server.
 * These tests verify the complete flow of tool registration and execution,
 * focusing on how tools interact with the MCP framework and services.
 * 
 * Key differences from unit tests (tools.unit.test.ts):
 * - Tests the entire tool flow from registration to execution
 * - Uses helper functions to simulate realistic tool usage
 * - Tests both success and error paths for each tool
 * - Verifies proper integration between tools and the MCP server
 */

import type { Address } from 'viem';
import { getRpcUrl, getSupportedNetworks } from '../../core/chains.js';
import { getPrivateKeyAsHex } from '../../core/config.js';
import { registerEVMTools } from '../../core/tools.js';
import * as services from '../../core/services/index.js';
import { createMockServer, setupBalanceMocks, setupTransactionMocks, testToolError, testToolSuccess, verifyErrorResponse, verifySuccessResponse } from './helpers/tool-test-helpers.js';

// Mock all service functions
jest.mock('../../core/services/index.js');
jest.mock('../../core/chains.js');
jest.mock('../../core/config.js');

describe('EVM Tools', () => {
  // Common test variables
  const mockAddress = '0x1234567890123456789012345678901234567890' as Address;
  const mockTokenAddress = '0x0987654321098765432109876543210987654321' as Address;
  const mockTokenId = '123';
  const mockNetwork = 'sei';
  const mockError = new Error('Test error');
  
  // Setup mock server and tools
  const { server, registeredTools } = createMockServer();
  
  // Register tools with the mock server - do this once before all tests
  registerEVMTools(server);
  
  beforeEach(() => {
    // Default mock implementations
    (getRpcUrl as jest.Mock).mockReturnValue('https://rpc.sei.io');
    (getSupportedNetworks as jest.Mock).mockReturnValue(['sei', 'sei-testnet']);
    (getPrivateKeyAsHex as jest.Mock).mockReturnValue('0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890');
    (services.getAddressFromPrivateKey as jest.Mock).mockReturnValue(mockAddress);
    (services.getChainId as jest.Mock).mockResolvedValue(1 as never);
    (services.getBlockNumber as jest.Mock).mockResolvedValue(BigInt(12345678) as never);
    
    // Mock formatJson function
    // Create a type for the helpers object to avoid read-only property error
    type ServiceHelpers = typeof services.helpers;
    const helpersObj: ServiceHelpers = {
      formatJson: jest.fn().mockImplementation((data: unknown) => JSON.stringify(data)) as unknown as (obj: unknown) => string,
      parseEther: jest.fn() as unknown as (ether: string, unit?: "wei" | "gwei") => bigint,
      validateAddress: jest.fn() as unknown as (address: string) => `0x${string}`
    };
    
    // Use Object.assign to avoid the read-only property error
    Object.assign(services, { helpers: helpersObj });
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  // Helper function to check if a tool exists
  const checkToolExists = (toolName: string) => {
    const tool = registeredTools.get(toolName);
    if (!tool) {
      console.log(`Tool '${toolName}' not found. Available tools: ${Array.from(registeredTools.keys()).join(', ')}`);
    }
    return tool;
  };
  
  // Group 1: Network Information Tools
  describe('Network Information Tools', () => {
    test('get_chain_info - success path', async () => {
      const tool = checkToolExists('get_chain_info');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { network: mockNetwork });
      
      expect(services.getChainId).toHaveBeenCalledWith(mockNetwork);
      expect(services.getBlockNumber).toHaveBeenCalledWith(mockNetwork);
      expect(getRpcUrl).toHaveBeenCalledWith(mockNetwork);
      
      verifySuccessResponse(response, {
        network: mockNetwork,
        chainId: 1,
        blockNumber: '12345678',
        rpcUrl: 'https://rpc.sei.io'
      });
    });
    
    test('get_chain_info - error path', async () => {
      const tool = checkToolExists('get_chain_info');
      if (!tool) return;
      
      const response = await testToolError(tool, { network: mockNetwork }, services.getChainId as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching chain info: Test error');
    });
    
    test('get_chain_info - success path with default network', async () => {
      const tool = checkToolExists('get_chain_info');
      if (!tool) return;
      
      // Call without specifying network to test default parameter branch
      const response = await testToolSuccess(tool, {});
      
      expect(services.getChainId).toHaveBeenCalledWith('sei'); // DEFAULT_NETWORK is mocked as 'sei'
      expect(services.getBlockNumber).toHaveBeenCalledWith('sei');
      expect(getRpcUrl).toHaveBeenCalledWith('sei');
      
      verifySuccessResponse(response, {
        network: 'sei', // DEFAULT_NETWORK
        chainId: 1,
        blockNumber: '12345678',
        rpcUrl: 'https://rpc.sei.io'
      });
    });
    
    test('get_chain_info - error with non-Error object', async () => {
      const tool = checkToolExists('get_chain_info');
      if (!tool) return;
      
      // Test the branch where error is not an Error instance
      const nonErrorObject = "This is a string error";
      (services.getChainId as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching chain info: This is a string error');
    });
    
    test('get_chain_info - error with blockNumber', async () => {
      const tool = checkToolExists('get_chain_info');
      if (!tool) return;
      
      // Let getChainId succeed but getBlockNumber fail
      (services.getChainId as jest.Mock).mockResolvedValueOnce(1);
      (services.getBlockNumber as jest.Mock).mockImplementationOnce(() => {
        throw mockError;
      });
      
      const response = await tool.handler({ network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching chain info: Test error');
    });
    
    test('get_supported_networks - success path', async () => {
      const tool = checkToolExists('get_supported_networks');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, {});
      
      expect(getSupportedNetworks).toHaveBeenCalled();
      
      verifySuccessResponse(response, {
        supportedNetworks: ['sei', 'sei-testnet']
      });
    });
    
    test('get_supported_networks - error path', async () => {
      const tool = checkToolExists('get_supported_networks');
      if (!tool) return;
      
      const response = await testToolError(tool, {}, getSupportedNetworks as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching supported networks: Test error');
    });
    
    test('get_supported_networks - error with non-Error object', async () => {
      const tool = checkToolExists('get_supported_networks');
      if (!tool) return;
      
      // Test the branch where error is not an Error instance
      const nonErrorObject = "This is a string error";
      (getSupportedNetworks as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({});
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching supported networks: This is a string error');
    });
  });
  
  // Group 2: Block Tools
  describe('Block Tools', () => {
    const mockBlock = {
      number: 12345678,
      hash: '0xabcdef',
      timestamp: 1234567890
    };
    
    beforeEach(() => {
      (services.getBlockByNumber as jest.Mock).mockResolvedValue(mockBlock as never);
      (services.getLatestBlock as jest.Mock).mockResolvedValue(mockBlock as never);
    });
    
    test('get_block_by_number - success path', async () => {
      const tool = checkToolExists('get_block_by_number');
      if (!tool) return;
      
      const blockNumber = 12345678;
      const response = await testToolSuccess(tool, { blockNumber, network: mockNetwork });
      
      expect(services.getBlockByNumber).toHaveBeenCalledWith(blockNumber, mockNetwork);
      expect(services.helpers.formatJson).toHaveBeenCalledWith(mockBlock);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_block_by_number - error path', async () => {
      const tool = checkToolExists('get_block_by_number');
      if (!tool) return;
      
      const blockNumber = 12345678;
      const response = await testToolError(tool, { blockNumber, network: mockNetwork }, services.getBlockByNumber as jest.Mock, mockError);
      
      verifyErrorResponse(response, `Error fetching block ${blockNumber}: Test error`);
    });
    
    test('get_block_by_number - success path with default network', async () => {
      const tool = checkToolExists('get_block_by_number');
      if (!tool) return;
      
      const blockNumber = 12345678;
      
      const response = await testToolSuccess(tool, { blockNumber });
      
      expect(services.getBlockByNumber).toHaveBeenCalledWith(blockNumber, 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_block_by_number - error with non-Error object', async () => {
      const tool = checkToolExists('get_block_by_number');
      if (!tool) return;
      
      const blockNumber = 12345678;
      const nonErrorObject = "This is a string error";
      
      (services.getBlockByNumber as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ blockNumber, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain(`Error fetching block ${blockNumber}: This is a string error`);
    });
    
    test('get_latest_block - success path', async () => {
      const tool = checkToolExists('get_latest_block');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { network: mockNetwork });
      
      expect(services.getLatestBlock).toHaveBeenCalledWith(mockNetwork);
      expect(services.helpers.formatJson).toHaveBeenCalledWith(mockBlock);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_latest_block - error path', async () => {
      const tool = checkToolExists('get_latest_block');
      if (!tool) return;
      
      const response = await testToolError(tool, { network: mockNetwork }, services.getLatestBlock as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching latest block: Test error');
    });
    
    test('get_latest_block - success path with default network', async () => {
      const tool = checkToolExists('get_latest_block');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, {});
      
      expect(services.getLatestBlock).toHaveBeenCalledWith('sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_latest_block - error with non-Error object', async () => {
      const tool = checkToolExists('get_latest_block');
      if (!tool) return;
      
      const nonErrorObject = "This is a string error";
      
      (services.getLatestBlock as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching latest block: This is a string error');
    });
  });
  
  // Group 3: Balance Tools
  describe('Balance Tools', () => {
    const { mockBalance, mockTokenInfo, mockNftInfo } = setupBalanceMocks();
    
    beforeEach(() => {
      (services.getBalance as jest.Mock).mockResolvedValue({ wei: BigInt(100), sei: '0.0000000000000001' } as never);
      (services.getERC20Balance as jest.Mock).mockResolvedValue({
        raw: BigInt(100),
        formatted: '0.0000000000000001',
        token: { symbol: 'TEST', decimals: 18 }
      } as never);
      (services.getERC721Balance as jest.Mock).mockResolvedValue(BigInt(2) as never);
      (services.getERC1155Balance as jest.Mock).mockResolvedValue(BigInt(5) as never);
      (services.getERC20TokenInfo as jest.Mock).mockResolvedValue(mockTokenInfo as never);
      (services.getERC721TokenMetadata as jest.Mock).mockResolvedValue(mockNftInfo as never);
    });
    
    test('get_balance - success path', async () => {
      const tool = checkToolExists('get_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { address: mockAddress, network: mockNetwork });
      
      expect(services.getBalance).toHaveBeenCalledWith(mockAddress, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_balance - error path', async () => {
      const tool = checkToolExists('get_balance');
      if (!tool) return;
      
      const response = await testToolError(tool, { address: mockAddress, network: mockNetwork }, services.getBalance as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching balance: Test error');
    });
    
    test('get_balance - success path with default network', async () => {
      const tool = checkToolExists('get_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { address: mockAddress });
      
      expect(services.getBalance).toHaveBeenCalledWith(mockAddress, 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_balance - error with non-Error object', async () => {
      const tool = checkToolExists('get_balance');
      if (!tool) return;
      
      const nonErrorObject = "This is a string error";
      
      (services.getBalance as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ address: mockAddress, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching balance: This is a string error');
    });

    test('get_erc20_balance - success path', async () => {
      const tool = checkToolExists('get_erc20_balance');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      
      const response = await testToolSuccess(tool, { tokenAddress, address, network: mockNetwork });
      
      expect(services.getERC20Balance).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('0.0000000000000001');
      expect(response.content[0].text).toContain('raw');
      expect(response.content[0].text).toContain('formatted');
      expect(response.content[0].text).toContain('decimals');
    });

    test('get_erc20_balance - error path', async () => {
      const tool = checkToolExists('get_erc20_balance');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      
      const response = await testToolError(tool, { tokenAddress, address, network: mockNetwork }, services.getERC20Balance as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching ERC20 balance for 0x1234567890123456789012345678901234567890: Test error');
    });
    
    test('get_erc20_balance - success path with default network', async () => {
      const tool = checkToolExists('get_erc20_balance');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      
      // Create a mock balance response
      const mockBalance = {
        raw: BigInt('1000000000000000000'),
        formatted: '1.0',
        token: {
          decimals: 18,
          symbol: 'TEST',
          name: 'Test Token'
        }
      };
      
      // Mock the getERC20Balance function to return a specific value
      (services.getERC20Balance as jest.Mock).mockImplementationOnce((tokenAddress, address, network) => {
        return Promise.resolve(mockBalance);
      });
      
      const params = {
        tokenAddress,
        address
      };
      
      const response = await tool.handler(params);
      
      expect(services.getERC20Balance).toHaveBeenCalledWith(
        tokenAddress,
        address,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(JSON.parse(response.content[0].text)).toHaveProperty('balance');
    });
    
    test('get_erc20_balance - error with non-Error object', async () => {
      const tool = checkToolExists('get_erc20_balance');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      const nonErrorObject = "This is a string error";
      
      (services.getERC20Balance as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ tokenAddress, address, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain(`Error fetching ERC20 balance for ${address}: This is a string error`);
    });
    
    test('get_token_balance - success path', async () => {
      const tool = checkToolExists('get_token_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { tokenAddress: mockTokenAddress, ownerAddress: mockAddress, network: mockNetwork });
      
      expect(services.getERC20Balance).toHaveBeenCalledWith(mockTokenAddress, mockAddress, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_token_balance - error path', async () => {
      const tool = checkToolExists('get_token_balance');
      if (!tool) return;
      
      const response = await testToolError(
        tool,
        { address: mockAddress, tokenAddress: mockTokenAddress, network: mockNetwork },
        services.getERC20Balance as jest.Mock,
        mockError
      );
      
      verifyErrorResponse(response, 'Error fetching token balance: Test error');
    });
    
    test('get_token_balance - success path with default network', async () => {
      const tool = checkToolExists('get_token_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { ownerAddress: mockAddress, tokenAddress: mockTokenAddress });
      
      expect(services.getERC20Balance).toHaveBeenCalledWith(mockTokenAddress, mockAddress, 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_token_balance - error with non-Error object', async () => {
      const tool = checkToolExists('get_token_balance');
      if (!tool) return;
      
      const nonErrorObject = "This is a string error";
      
      (services.getERC20Balance as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ address: mockAddress, tokenAddress: mockTokenAddress, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching token balance: This is a string error');
    });
    
    test('get_nft_balance - success path', async () => {
      const tool = checkToolExists('get_nft_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { tokenAddress: mockTokenAddress, ownerAddress: mockAddress, network: mockNetwork });
      
      expect(services.getERC721Balance).toHaveBeenCalledWith(mockTokenAddress, mockAddress, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_nft_balance - error path', async () => {
      const tool = checkToolExists('get_nft_balance');
      if (!tool) return;
      
      const response = await testToolError(tool, { tokenAddress: mockTokenAddress, ownerAddress: mockAddress, network: mockNetwork }, services.getERC721Balance as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching NFT balance: Test error');
    });
    
    test('get_nft_balance - success path with default network', async () => {
      const tool = checkToolExists('get_nft_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { tokenAddress: mockTokenAddress, ownerAddress: mockAddress });
      
      expect(services.getERC721Balance).toHaveBeenCalledWith(mockTokenAddress, mockAddress, 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_nft_balance - error with non-Error object', async () => {
      const tool = checkToolExists('get_nft_balance');
      if (!tool) return;
      
      const nonErrorObject = "This is a string error";
      
      (services.getERC721Balance as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ tokenAddress: mockTokenAddress, ownerAddress: mockAddress, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching NFT balance: This is a string error');
    });
    
    test('get_erc1155_balance - success path', async () => {
      const tool = checkToolExists('get_erc1155_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { tokenAddress: mockTokenAddress, tokenId: mockTokenId, ownerAddress: mockAddress, network: mockNetwork });
      
      expect(services.getERC1155Balance).toHaveBeenCalledWith(mockTokenAddress, mockAddress, BigInt(mockTokenId), mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_erc1155_balance - error path', async () => {
      const tool = checkToolExists('get_erc1155_balance');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      const tokenId = '123';
      const response = await testToolError(tool, { tokenAddress, tokenId, ownerAddress: address, network: mockNetwork }, services.getERC1155Balance as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching ERC1155 token balance: Test error');
    });
    
    test('get_erc1155_balance - error path with invalid token id', async () => {
      const tool = checkToolExists('get_erc1155_balance');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      const tokenId = 'abc';
      const response = await tool.handler({ tokenAddress, tokenId, ownerAddress: address, network: mockNetwork });
      
      verifyErrorResponse(response, 'Error fetching ERC1155 token balance: Cannot convert abc to a BigInt');
    });
    
    test('get_erc1155_balance - success path with default network', async () => {
      const tool = checkToolExists('get_erc1155_balance');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { tokenAddress: mockTokenAddress, tokenId: mockTokenId, ownerAddress: mockAddress });
      
      expect(services.getERC1155Balance).toHaveBeenCalledWith(mockTokenAddress, mockAddress, BigInt(mockTokenId), 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_erc1155_balance - error with non-Error object', async () => {
      const tool = checkToolExists('get_erc1155_balance');
      if (!tool) return;
      
      const nonErrorObject = "This is a string error";
      
      (services.getERC1155Balance as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ tokenAddress: mockTokenAddress, tokenId: mockTokenId, ownerAddress: mockAddress, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching ERC1155 token balance: This is a string error');
    });

    test('get_token_balance_erc20 - success path', async () => {
      const tool = checkToolExists('get_token_balance_erc20');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      
      const response = await testToolSuccess(tool, { tokenAddress, address, network: mockNetwork });
      
      expect(services.getERC20Balance).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('0.0000000000000001');
    });
    
    test('get_token_balance_erc20 - error path', async () => {
      const tool = checkToolExists('get_token_balance_erc20');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      
      const response = await testToolError(tool, { tokenAddress, address, network: mockNetwork }, services.getERC20Balance as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching ERC20 balance for 0x1234567890123456789012345678901234567890: Test error');
    });
    
    test('get_token_balance_erc20 - success path with default network', async () => {
      const tool = checkToolExists('get_token_balance_erc20');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      
      // Create a mock balance response
      const mockBalance = {
        raw: BigInt('1000000000000000000'),
        formatted: '1.0',
        token: {
          decimals: 18,
          symbol: 'TEST',
          name: 'Test Token'
        }
      };
      
      // Mock the getERC20Balance function to return a specific value
      (services.getERC20Balance as jest.Mock).mockImplementationOnce((tokenAddress, address, network) => {
        return Promise.resolve(mockBalance);
      });
      
      const params = {
        tokenAddress,
        address
      };
      
      const response = await tool.handler(params);
      
      expect(services.getERC20Balance).toHaveBeenCalledWith(
        tokenAddress,
        address,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(JSON.parse(response.content[0].text)).toHaveProperty('balance');
    });
    
    test('get_token_balance_erc20 - error with non-Error object', async () => {
      const tool = checkToolExists('get_token_balance_erc20');
      if (!tool) return;
      
      const address = '0x1234567890123456789012345678901234567890';
      const tokenAddress = '0x0987654321098765432109876543210987654321';
      const nonErrorObject = "This is a string error";
      
      (services.getERC20Balance as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ tokenAddress, address, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain(`Error fetching ERC20 balance for ${address}: This is a string error`);
    });
  });
  
  // Verify all expected tools are registered
  describe('Wallet Tools', () => {
    describe('get_address_from_private_key', () => {
      test('get_address_from_private_key - success path', async () => {
        const tool = checkToolExists('get_address_from_private_key');
        if (!tool) return;
        
        const mockPrivateKey = '0x1234567890abcdef';
        const mockAddress = '0xabcdef1234567890';
        
        // Mock the config function
        (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);
        
        // Mock the service function
        (services.getAddressFromPrivateKey as jest.Mock).mockReturnValue(mockAddress);
        
        const response = await testToolSuccess(tool, {});
        
        expect(services.getAddressFromPrivateKey).toHaveBeenCalledWith(mockPrivateKey);
        
        expect(response).toHaveProperty('content');
        expect(response.content[0]).toHaveProperty('type', 'text');
        
        const parsedResponse = JSON.parse(response.content[0].text);
        expect(parsedResponse).toEqual({ address: mockAddress });
      });
      
      test('get_address_from_private_key - private key not set', async () => {
        const tool = checkToolExists('get_address_from_private_key');
        if (!tool) return;
        
        // Mock the config function to return undefined (private key not set)
        (getPrivateKeyAsHex as jest.Mock).mockReturnValue(undefined);
        
        // For this test, we're not using a mock function to throw an error
        // Instead, we're directly calling the handler and expecting it to return an error response
        const response = await tool.handler({});
        
        verifyErrorResponse(response, 'Error: The PRIVATE_KEY environment variable is not set');
        expect(services.getAddressFromPrivateKey).not.toHaveBeenCalled();
      });
      
      test('get_address_from_private_key - error path', async () => {
        const tool = checkToolExists('get_address_from_private_key');
        if (!tool) return;
        
        const mockPrivateKey = '0x1234567890abcdef';
        
        // Mock the config function
        (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);
        
        // Mock the service function to throw an error
        const error = new Error('Invalid private key format');
        const mockFn = services.getAddressFromPrivateKey as jest.Mock;
        
        const response = await testToolError(tool, {}, mockFn, error);
        
        verifyErrorResponse(response, 'Error deriving address from private key: Invalid private key format');
        expect(services.getAddressFromPrivateKey).toHaveBeenCalledWith(mockPrivateKey);
      });
      
      test('get_address_from_private_key - error with non-Error object', async () => {
        const tool = checkToolExists('get_address_from_private_key');
        if (!tool) return;
        
        const mockPrivateKey = '0x1234567890abcdef';
        
        // Mock the config function
        (getPrivateKeyAsHex as jest.Mock).mockReturnValue(mockPrivateKey);
        
        // Mock the service function to throw a non-Error object
        const nonErrorObject = "This is a string error";
        (services.getAddressFromPrivateKey as jest.Mock).mockImplementationOnce(() => {
          throw nonErrorObject;
        });
        
        const response = await tool.handler({});
        
        expect(response).toHaveProperty('isError', true);
        expect(response.content[0].text).toContain('Error deriving address from private key: This is a string error');
        expect(services.getAddressFromPrivateKey).toHaveBeenCalledWith(mockPrivateKey);
      });
    });
  });

  // Verify all expected tools are registered
  test('should register all expected tools', () => {
    // Log the registered tools for debugging
    console.log('Registered tools:', Array.from(registeredTools.keys()));
    
    // Verify network information tools
    expect(registeredTools.has('get_chain_info')).toBe(true);
    expect(registeredTools.has('get_supported_networks')).toBe(true);
    
    // Verify block tools
    expect(registeredTools.has('get_block_by_number')).toBe(true);
    expect(registeredTools.has('get_latest_block')).toBe(true);
    
    // Verify balance tools
    expect(registeredTools.has('get_balance')).toBe(true);
    expect(registeredTools.has('get_token_balance')).toBe(true);
    expect(registeredTools.has('get_nft_balance')).toBe(true);
    expect(registeredTools.has('get_erc1155_balance')).toBe(true);
    
    // Verify wallet tools
    expect(registeredTools.has('get_address_from_private_key')).toBe(true);
    
    // Verify transaction tools
    expect(registeredTools.has('get_transaction')).toBe(true);
    expect(registeredTools.has('get_transaction_receipt')).toBe(true);
    
    // Verify transfer tools
    expect(registeredTools.has('transfer_sei')).toBe(true);
    expect(registeredTools.has('transfer_token')).toBe(true);
    expect(registeredTools.has('transfer_nft')).toBe(true);
    
    // Verify token information tools
    expect(registeredTools.has('get_token_info')).toBe(true);
    expect(registeredTools.has('get_nft_info')).toBe(true);
    
    // Verify contract interaction tools
    expect(registeredTools.has('read_contract')).toBe(true);
    expect(registeredTools.has('write_contract')).toBe(true);
  });

  // Group 4: Transaction Tools
  describe('Transaction Tools', () => {
    const { mockHash, mockTransaction, mockTransactionReceipt } = setupTransactionMocks();
    
    beforeEach(() => {
      (services.getTransaction as jest.Mock).mockResolvedValue(mockTransaction as never);
      (services.getTransactionReceipt as jest.Mock).mockResolvedValue(mockTransactionReceipt as never);
      (services.estimateGas as jest.Mock).mockResolvedValue(BigInt(21000) as never);
    });
    
    test('get_transaction - success path', async () => {
      const tool = checkToolExists('get_transaction');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const response = await testToolSuccess(tool, { txHash, network: mockNetwork });
      
      expect(services.getTransaction).toHaveBeenCalledWith(txHash, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_transaction - error path', async () => {
      const tool = checkToolExists('get_transaction');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const response = await testToolError(tool, { txHash, network: mockNetwork }, services.getTransaction as jest.Mock, mockError);
      
      verifyErrorResponse(response, `Error fetching transaction ${txHash}: Test error`);
    });
    
    test('get_transaction - success path with default network', async () => {
      const tool = checkToolExists('get_transaction');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const response = await testToolSuccess(tool, { txHash });
      
      expect(services.getTransaction).toHaveBeenCalledWith(txHash, 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_transaction - error with non-Error object', async () => {
      const tool = checkToolExists('get_transaction');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const nonErrorObject = "This is a string error";
      
      (services.getTransaction as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ txHash, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain(`Error fetching transaction ${txHash}: This is a string error`);
    });
    
    test('get_transaction_receipt - success path', async () => {
      const tool = checkToolExists('get_transaction_receipt');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const response = await testToolSuccess(tool, { txHash, network: mockNetwork });
      
      expect(services.getTransactionReceipt).toHaveBeenCalledWith(txHash, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_transaction_receipt - error path', async () => {
      const tool = checkToolExists('get_transaction_receipt');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const response = await testToolError(tool, { txHash, network: mockNetwork }, services.getTransactionReceipt as jest.Mock, mockError);
      
      verifyErrorResponse(response, `Error fetching transaction receipt ${txHash}: Test error`);
    });
    
    test('get_transaction_receipt - success path with default network', async () => {
      const tool = checkToolExists('get_transaction_receipt');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const response = await testToolSuccess(tool, { txHash });
      
      expect(services.getTransactionReceipt).toHaveBeenCalledWith(txHash, 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_transaction_receipt - error with non-Error object', async () => {
      const tool = checkToolExists('get_transaction_receipt');
      if (!tool) return;
      
      const txHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const nonErrorObject = "This is a string error";
      
      (services.getTransactionReceipt as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler({ txHash, network: mockNetwork });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain(`Error fetching transaction receipt ${txHash}: This is a string error`);
    });

    test('estimate_gas - success path', async () => {
      const tool = checkToolExists('estimate_gas');
      if (!tool) return;
      
      const txParams = {
        to: '0x1234567890123456789012345678901234567890',
        value: '1000000000000000000', // 1 ETH in wei
        data: '0x',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, txParams);
      
      expect(services.estimateGas).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      
      // Verify the response contains the estimated gas
      const responseText = response.content[0].text;
      expect(responseText).toContain('21000');
    });
    
    test('estimate_gas - error path', async () => {
      const tool = checkToolExists('estimate_gas');
      if (!tool) return;
      
      const params = {
        to: '0x1234567890123456789012345678901234567890',
        value: '1000000000000000000',
        data: '0x',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, params, services.estimateGas as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error estimating gas: Test error');
    });
    
    test('estimate_gas - success path with default network', async () => {
      const tool = checkToolExists('estimate_gas');
      if (!tool) return;
      
      const params = {
        to: '0x1234567890123456789012345678901234567890',
        value: '1.0',
        data: '0x'
      };
      
      // Mock the estimateGas function to return a specific value
      (services.estimateGas as jest.Mock).mockImplementationOnce((txParams, network) => {
        return Promise.resolve(BigInt('21000'));
      });
      
      // Mock the parseEther function
      (services.helpers.parseEther as jest.Mock).mockReturnValueOnce(BigInt('1000000000000000000'));
      
      const response = await tool.handler(params);
      
      expect(services.estimateGas).toHaveBeenCalledWith({
        to: params.to as `0x${string}`,
        value: BigInt('1000000000000000000'),
        data: params.data as `0x${string}`
      }, 'sei'); // DEFAULT_NETWORK
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('estimate_gas - error with non-Error object', async () => {
      const tool = checkToolExists('estimate_gas');
      if (!tool) return;
      
      const params = {
        to: '0x1234567890123456789012345678901234567890',
        value: '1000000000000000000',
        data: '0x',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.estimateGas as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(params);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error estimating gas: This is a string error');
    });
  });
  
  // Group 5: Transfer Tools
  describe('Transfer Tools', () => {
    const { mockHash } = setupTransactionMocks();
    
    beforeEach(() => {
      (services.transferSei as jest.Mock).mockResolvedValue(mockHash as never);
      (services.transferERC20 as jest.Mock).mockResolvedValue({
        txHash: mockHash,
        amount: { formatted: '1.0', raw: BigInt('1000000000000000000') },
        token: { symbol: 'TEST', decimals: 18 }
      } as never);
      (services.approveERC20 as jest.Mock).mockResolvedValue(mockHash as never);
      (services.transferERC721 as jest.Mock).mockResolvedValue(mockHash as never);
      (services.transferERC1155 as jest.Mock).mockResolvedValue(mockHash as never);
    });

    test('transfer_sei - success path', async () => {
      const tool = checkToolExists('transfer_sei');
      if (!tool) return;
      
      // Mock the transferSei function
      (services.transferSei as jest.Mock).mockResolvedValue(mockHash as never);
      
      const transferParams = {
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1000000000000000000',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, transferParams);
      
      expect(services.transferSei).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('success');
      expect(response.content[0].text).toContain(mockHash);
    });
    
    test('transfer_sei - error path', async () => {
      const tool = checkToolExists('transfer_sei');
      if (!tool) return;
      
      const transferParams = {
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1000000000000000000',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, transferParams, services.transferSei as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error transferring Sei: Test error');
    });
    
    test('transfer_sei - success path with default network', async () => {
      const tool = checkToolExists('transfer_sei');
      if (!tool) return;
      
      const transferParams = {
        to: '0x1234567890123456789012345678901234567890',
        amount: '1.0'
      };
      
      // Mock the transferSei function to return a specific value
      (services.transferSei as jest.Mock).mockImplementationOnce((to, amount, network) => {
        return Promise.resolve(mockHash);
      });
      
      const response = await tool.handler(transferParams);
      
      expect(services.transferSei).toHaveBeenCalledWith(
        transferParams.to,
        transferParams.amount,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('transfer_sei - error with non-Error object', async () => {
      const tool = checkToolExists('transfer_sei');
      if (!tool) return;
      
      const transferParams = {
        to: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.transferSei as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring Sei: This is a string error');
    });
    
    test('transfer_sei - error with invalid amount', async () => {
      const tool = checkToolExists('transfer_sei');
      if (!tool) return;
      
      const transferParams = {
        to: '0x1234567890123456789012345678901234567890',
        amount: 'invalid',
        network: mockNetwork
      };
      
      // Mock the transferSei function to throw an error for invalid amount
      (services.transferSei as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Invalid amount');
      });
      
      const response = await tool.handler(transferParams);
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring Sei: Invalid amount');
    });

    test('approve_token_spending - success path', async () => {
      const tool = checkToolExists('approve_token_spending');
      if (!tool) return;
      
      const approveParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        spenderAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, approveParams);
      
      expect(services.approveERC20).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('approve_token_spending - success path with default network', async () => {
      const tool = checkToolExists('approve_token_spending');
      if (!tool) return;
      
      const approveParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        spenderAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0'
      };
      
      // Mock the approveERC20 function to return a specific value
      (services.approveERC20 as jest.Mock).mockImplementationOnce((tokenAddress, spenderAddress, amount, network) => {
        return Promise.resolve(mockHash);
      });
      
      const response = await tool.handler(approveParams);
      
      expect(services.approveERC20).toHaveBeenCalledWith(
        approveParams.tokenAddress,
        approveParams.spenderAddress,
        approveParams.amount,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('approve_token_spending - error with non-Error object', async () => {
      const tool = checkToolExists('approve_token_spending');
      if (!tool) return;
      
      const approveParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        spenderAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.approveERC20 as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(approveParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error approving token spending: This is a string error');
    });

    test('transfer_erc20 - success path', async () => {
      const tool = checkToolExists('transfer_erc20');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1000000000000000000', // 1 token with 18 decimals
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, transferParams);
      
      expect(services.transferERC20).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('success');
      expect(response.content[0].text).toContain('TEST');
      expect(response.content[0].text).toContain('1.0');
    });
    
    test('transfer_erc20 - error path', async () => {
      const tool = checkToolExists('transfer_erc20');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1000000000000000000',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, transferParams, services.transferERC20 as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error transferring ERC20 tokens: Test error');
    });
    
    test('transfer_erc20 - success path with default network', async () => {
      const tool = checkToolExists('transfer_erc20');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0'
      };
      
      // Mock the transferERC20 function to return a specific value
      (services.transferERC20 as jest.Mock).mockImplementationOnce((tokenAddress, toAddress, amount, network) => {
        return Promise.resolve({
          txHash: mockHash,
          amount: { formatted: '1.0', raw: BigInt('1000000000000000000') },
          token: { symbol: 'TEST', decimals: 18 }
        });
      });
      
      const response = await tool.handler(transferParams);
      
      expect(services.transferERC20).toHaveBeenCalledWith(
        transferParams.tokenAddress,
        transferParams.toAddress,
        transferParams.amount,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('transfer_erc20 - error with non-Error object', async () => {
      const tool = checkToolExists('transfer_erc20');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.transferERC20 as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring ERC20 tokens: This is a string error');
    });
    
    test('transfer_erc20 - success path', async () => {
      const tool = checkToolExists('transfer_erc20');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, transferParams);
      
      expect(response.content[0].text).toContain('TEST');
    });
    
    test('approve_token_spending - success path', async () => {
      const tool = checkToolExists('approve_token_spending');
      if (!tool) return;
      
      // Mock the approveERC20 function with the correct return type
      jest.spyOn(services, 'approveERC20').mockResolvedValue({
        txHash: mockHash,
        amount: {
          raw: BigInt('1000000000000000000'),
          formatted: '1.0'
        },
        token: {
          symbol: 'TEST',
          decimals: 18
        }
      });
      
      const approveParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        spenderAddress: '0x1234567890123456789012345678901234567890',
        amount: '1000000000000000000',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, approveParams);
      
      expect(services.approveERC20).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('success');
      expect(response.content[0].text).toContain(mockHash);
    });

    test('transfer_nft - success path', async () => {
      const tool = checkToolExists('transfer_nft');
      if (!tool) return;
      
      // Reset mocks to ensure clean state
      jest.clearAllMocks();
      
      // Mock the transferERC721 function with the correct return type
      jest.spyOn(services, 'transferERC721').mockResolvedValue({
        txHash: mockHash,
        tokenId: '123',
        token: {
          name: 'Test NFT',
          symbol: 'TNFT'
        }
      });
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, transferParams);
      
      expect(services.transferERC721).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('success');
      expect(response.content[0].text).toContain(mockHash);
    });
    
    test('transfer_nft - error path', async () => {
      const tool = checkToolExists('transfer_nft');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, transferParams, services.transferERC721 as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error transferring NFT: Test error');
    });

    test('transfer_nft - success path', async () => {
      const tool = checkToolExists('transfer_nft');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, transferParams);
      
      expect(services.transferERC721).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    // This test has been moved to the Contract Tools section
    test('transfer_nft - error with non-Error object', async () => {
      const tool = checkToolExists('transfer_nft');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.transferERC721 as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring NFT: This is a string error');
    });
    
    test('read_contract - error with non-Error object', async () => {
      const tool = checkToolExists('read_contract');
      if (!tool) return;
      
      const readParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        methodName: 'balanceOf',
        methodParams: ['0x1234567890123456789012345678901234567890'],
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.readContract as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(readParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error reading contract: This is a string error');
    });
    
    test('transfer_nft - success path with default network', async () => {
      const tool = checkToolExists('transfer_nft');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123'
      };
      
      // Mock the transferERC721 function to return a specific value
      (services.transferERC721 as jest.Mock).mockImplementationOnce((tokenAddress, toAddress, tokenId, network) => {
        return Promise.resolve(mockHash);
      });
      
      const response = await tool.handler(transferParams);
      
      expect(services.transferERC721).toHaveBeenCalledWith(
        transferParams.tokenAddress,
        transferParams.toAddress,
        BigInt(transferParams.tokenId),
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('transfer_nft - error with non-Error object', async () => {
      const tool = checkToolExists('transfer_nft');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.transferERC721 as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring NFT: This is a string error');
    });

    test('transfer_erc1155 - success path', async () => {
      const tool = checkToolExists('transfer_erc1155');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        amount: '5',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, transferParams);
      
      expect(services.transferERC1155).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });

    test('transfer_erc1155 - error path', async () => {
      const tool = checkToolExists('transfer_erc1155');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        amount: '5',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, transferParams, services.transferERC1155 as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error transferring ERC1155 tokens: Test error');
    });
    
    test('transfer_erc1155 - success path with default network', async () => {
      const tool = checkToolExists('transfer_erc1155');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        amount: '5'
      };
      
      // Mock the transferERC1155 function to return a specific value
      (services.transferERC1155 as jest.Mock).mockImplementationOnce((tokenAddress, toAddress, tokenId, amount, network) => {
        return Promise.resolve(mockHash);
      });
      
      const response = await tool.handler(transferParams);
      
      expect(services.transferERC1155).toHaveBeenCalledWith(
        transferParams.tokenAddress,
        transferParams.toAddress,
        BigInt(transferParams.tokenId),
        transferParams.amount,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('transfer_erc1155 - error with non-Error object', async () => {
      const tool = checkToolExists('transfer_erc1155');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        tokenId: '123',
        amount: '5',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.transferERC1155 as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring ERC1155 tokens: This is a string error');
    });

    test('transfer_token - success path', async () => {
      const tool = checkToolExists('transfer_token');
      if (!tool) return;
      
      // Mock the transferERC20 function for token transfers
      (services.transferERC20 as jest.Mock).mockResolvedValue({
        txHash: mockHash,
        amount: { formatted: '1.0', raw: BigInt('1000000000000000000') },
        token: { symbol: 'TEST', decimals: 18 }
      } as never);
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1000000000000000000',
        tokenType: 'erc20',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, transferParams);
      
      expect(services.transferERC20).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('success');
      expect(response.content[0].text).toContain('TEST');
    });
    
    // Note: The transfer_token tool only supports ERC20 tokens, not NFTs
    
    test('transfer_token - error path', async () => {
      const tool = checkToolExists('transfer_token');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1000000000000000000',
        tokenType: 'erc20',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, transferParams, services.transferERC20 as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error transferring tokens: Test error');
    });
    
    test('transfer_token - error with non-numeric amount', async () => {
      const tool = checkToolExists('transfer_token');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: 'abc',
        tokenType: 'erc20',
        network: mockNetwork
      };
      
      // Mock the transferERC20 function to throw an error for invalid amount
      (services.transferERC20 as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Invalid amount');
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring tokens: Invalid amount');
    });
    
    test('transfer_token - error with non-Error object', async () => {
      const tool = checkToolExists('transfer_token');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        tokenType: 'erc20',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.transferERC20 as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring tokens: This is a string error');
    });
    
    test('transfer_token - error with unsupported token type', async () => {
      const tool = checkToolExists('transfer_token');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        tokenType: 'unsupported',
        network: mockNetwork
      };
      
      // Mock the transferERC20 function to throw an error for unsupported token type
      (services.transferERC20 as jest.Mock).mockImplementationOnce(() => {
        throw new Error('Unsupported token type');
      });
      
      const response = await tool.handler(transferParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error transferring tokens: Unsupported token type');
    });
    
    test('transfer_token - success path with default network', async () => {
      const tool = checkToolExists('transfer_token');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        tokenType: 'erc20'
      };
      
      // Mock the transferERC20 function to return a specific value
      (services.transferERC20 as jest.Mock).mockImplementationOnce((tokenAddress, toAddress, amount, network) => {
        return Promise.resolve({
          txHash: mockHash,
          amount: { formatted: '1.0', raw: BigInt('1000000000000000000') },
          token: { symbol: 'TEST', decimals: 18 }
        });
      });
      
      const response = await tool.handler(transferParams);
      
      expect(services.transferERC20).toHaveBeenCalledWith(
        transferParams.tokenAddress,
        transferParams.toAddress,
        transferParams.amount,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('transfer_token - error path with default network', async () => {
      const tool = checkToolExists('transfer_token');
      if (!tool) return;
      
      const transferParams = {
        tokenAddress: '0x0987654321098765432109876543210987654321',
        toAddress: '0x1234567890123456789012345678901234567890',
        amount: '1.0',
        tokenType: 'erc20'
      };
      
      const response = await testToolError(tool, transferParams, services.transferERC20 as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error transferring tokens: Test error');
    });
  });

  // Group 6: Contract Tools
  describe('Contract Tools', () => {
    beforeEach(() => {
      (services.readContract as jest.Mock).mockResolvedValue('0x1234' as never);
      (services.writeContract as jest.Mock).mockResolvedValue('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as never);
      (services.isContract as jest.Mock).mockResolvedValue(true as never);
    });

    test('read_contract - success path', async () => {
      const tool = checkToolExists('read_contract');
      if (!tool) return;
      
      const readParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'balanceOf',
        args: ['0x1234567890123456789012345678901234567890'],
        abi: [{ type: 'function', name: 'balanceOf', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] }],
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, readParams);
      
      expect(services.readContract).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('0x1234');
    });
    
    test('read_contract - error path', async () => {
      const tool = checkToolExists('read_contract');
      if (!tool) return;
      
      const readParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'balanceOf',
        args: ['0x1234567890123456789012345678901234567890'],
        abi: [{ type: 'function', name: 'balanceOf', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] }],
        network: mockNetwork
      };
      
      const response = await testToolError(tool, readParams, services.readContract as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error reading contract: Test error');
    });
    
    test('read_contract - success path with default network', async () => {
      const tool = checkToolExists('read_contract');
      if (!tool) return;
      
      const readParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'balanceOf',
        args: ['0x1234567890123456789012345678901234567890'],
        abi: [{ type: 'function', name: 'balanceOf', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] }]
      };
      
      // Mock the readContract function to return a specific value
      (services.readContract as jest.Mock).mockImplementationOnce((params, network) => {
        return Promise.resolve(BigInt('1000000000000000000'));
      });
      
      const response = await tool.handler(readParams);
      
      expect(services.readContract).toHaveBeenCalledWith(
        {
          address: readParams.contractAddress,
          abi: readParams.abi,
          functionName: readParams.functionName,
          args: readParams.args
        },
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('read_contract - error with non-Error object', async () => {
      const tool = checkToolExists('read_contract');
      if (!tool) return;
      
      const readParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'balanceOf',
        args: ['0x1234567890123456789012345678901234567890'],
        abi: [{ type: 'function', name: 'balanceOf', inputs: [{ type: 'address' }], outputs: [{ type: 'uint256' }] }],
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.readContract as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(readParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error reading contract: This is a string error');
    });

    test('write_contract - success path', async () => {
      const tool = checkToolExists('write_contract');
      if (!tool) return;
      
      const writeParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'transfer',
        args: ['0x1234567890123456789012345678901234567890', '1000000000000000000'],
        abi: [{ type: 'function', name: 'transfer', inputs: [{ type: 'address' }, { type: 'uint256' }], outputs: [{ type: 'bool' }] }],
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, writeParams);
      
      expect(services.writeContract).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
    });
    
    test('write_contract - error path', async () => {
      const tool = checkToolExists('write_contract');
      if (!tool) return;
      
      const writeParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'transfer',
        args: ['0x1234567890123456789012345678901234567890', '1000000000000000000'],
        abi: [{ type: 'function', name: 'transfer', inputs: [{ type: 'address' }, { type: 'uint256' }], outputs: [{ type: 'bool' }] }],
        network: mockNetwork
      };
      
      const response = await testToolError(tool, writeParams, services.writeContract as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error writing to contract: Test error');
    });
    
    test('write_contract - success path with default network', async () => {
      const tool = checkToolExists('write_contract');
      if (!tool) return;
      
      const writeParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'transfer',
        args: ['0x1234567890123456789012345678901234567890', '1000000000000000000'],
        abi: [{ type: 'function', name: 'transfer', inputs: [{ type: 'address' }, { type: 'uint256' }], outputs: [{ type: 'bool' }] }]
      };
      
      // Mock the writeContract function to return a specific value
      (services.writeContract as jest.Mock).mockImplementationOnce((params, network) => {
        return Promise.resolve('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef');
      });
      
      const response = await tool.handler(writeParams);
      
      expect(services.writeContract).toHaveBeenCalledWith(
        {
          address: writeParams.contractAddress,
          abi: writeParams.abi,
          functionName: writeParams.functionName,
          args: writeParams.args
        },
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('write_contract - error with non-Error object', async () => {
      const tool = checkToolExists('write_contract');
      if (!tool) return;
      
      const writeParams = {
        contractAddress: '0x0987654321098765432109876543210987654321',
        functionName: 'transfer',
        args: ['0x1234567890123456789012345678901234567890', '1000000000000000000'],
        abi: [{ type: 'function', name: 'transfer', inputs: [{ type: 'address' }, { type: 'uint256' }], outputs: [{ type: 'bool' }] }],
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.writeContract as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(writeParams);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error writing to contract: This is a string error');
    });

    test('is_contract - success path', async () => {
      const tool = checkToolExists('is_contract');
      if (!tool) return;
      
      const params = {
        address: '0x0987654321098765432109876543210987654321',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, params);
      
      expect(services.isContract).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('true');
    });
    
    test('is_contract - success path with default network', async () => {
      const tool = checkToolExists('is_contract');
      if (!tool) return;
      
      const params = {
        address: '0x0987654321098765432109876543210987654321'
      };
      
      // Mock the isContract function to return a specific value
      (services.isContract as jest.Mock).mockImplementationOnce((address, network) => {
        return Promise.resolve(true);
      });
      
      const response = await tool.handler(params);
      
      expect(services.isContract).toHaveBeenCalledWith(
        params.address,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('true');
    });
    
    test('is_contract - error with non-Error object', async () => {
      const tool = checkToolExists('is_contract');
      if (!tool) return;
      
      const params = {
        address: '0x0987654321098765432109876543210987654321',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.isContract as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(params);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error checking if address is a contract: This is a string error');
    });
    
    test('is_contract - error path', async () => {
      const tool = checkToolExists('is_contract');
      if (!tool) return;
      
      const params = {
        address: '0x0987654321098765432109876543210987654321',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, params, services.isContract as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error checking if address is a contract: Test error');
    });
  });

  // Group 7: Token Information Tools
  describe('Token Information Tools', () => {
    const { mockTokenInfo, mockNftInfo } = setupBalanceMocks();
    
    beforeEach(() => {
      (services.getERC20TokenInfo as jest.Mock).mockResolvedValue(mockTokenInfo as never);
      (services.getERC721TokenMetadata as jest.Mock).mockResolvedValue(mockNftInfo as never);
    });
    
    test('get_token_info - success path', async () => {
      const tool = checkToolExists('get_token_info');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { tokenAddress: mockTokenAddress, network: mockNetwork });
      
      expect(services.getERC20TokenInfo).toHaveBeenCalledWith(mockTokenAddress, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_token_info - error path', async () => {
      const tool = checkToolExists('get_token_info');
      if (!tool) return;
      
      const response = await testToolError(tool, { tokenAddress: mockTokenAddress, network: mockNetwork }, services.getERC20TokenInfo as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching token info: Test error');
    });
    
    test('get_token_info - success path with default network', async () => {
      const tool = checkToolExists('get_token_info');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress
      };
      
      // Mock the getERC20TokenInfo function to return a specific value
      (services.getERC20TokenInfo as jest.Mock).mockImplementationOnce((tokenAddress, network) => {
        return Promise.resolve(mockTokenInfo);
      });
      
      const response = await tool.handler(params);
      
      expect(services.getERC20TokenInfo).toHaveBeenCalledWith(
        mockTokenAddress,
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_token_info - error with non-Error object', async () => {
      const tool = checkToolExists('get_token_info');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.getERC20TokenInfo as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(params);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching token info: This is a string error');
    });
    
    test('get_nft_info - success path', async () => {
      const tool = checkToolExists('get_nft_info');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { tokenAddress: mockTokenAddress, tokenId: mockTokenId, network: mockNetwork });
      
      expect(services.getERC721TokenMetadata).toHaveBeenCalledWith(mockTokenAddress, BigInt(mockTokenId), mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_nft_info - error path', async () => {
      const tool = checkToolExists('get_nft_info');
      if (!tool) return;
      
      const response = await testToolError(tool, { tokenAddress: mockTokenAddress, tokenId: mockTokenId, network: mockNetwork }, services.getERC721TokenMetadata as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching NFT info: Test error');
    });
    
    test('get_nft_info - success path with default network', async () => {
      const tool = checkToolExists('get_nft_info');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId
      };
      
      // Mock the getERC721TokenMetadata function to return a specific value
      (services.getERC721TokenMetadata as jest.Mock).mockImplementationOnce((tokenAddress, tokenId, network) => {
        return Promise.resolve(mockNftInfo);
      });
      
      const response = await tool.handler(params);
      
      expect(services.getERC721TokenMetadata).toHaveBeenCalledWith(
        mockTokenAddress,
        BigInt(mockTokenId),
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('get_nft_info - error with non-Error object', async () => {
      const tool = checkToolExists('get_nft_info');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.getERC721TokenMetadata as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(params);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching NFT info: This is a string error');
    });

    test('check_nft_ownership - success path', async () => {
      const tool = checkToolExists('check_nft_ownership');
      if (!tool) return;
      
      (services.isNFTOwner as jest.Mock).mockResolvedValue(true as never);
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        ownerAddress: '0x1234567890123456789012345678901234567890',
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, params);
      
      expect(services.isNFTOwner).toHaveBeenCalledWith(mockTokenAddress, params.ownerAddress, BigInt(mockTokenId), mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('true');
    });
    
    test('check_nft_ownership - success path with default network', async () => {
      const tool = checkToolExists('check_nft_ownership');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        ownerAddress: '0x1234567890123456789012345678901234567890'
      };
      
      // Mock the isNFTOwner function to return a specific value
      (services.isNFTOwner as jest.Mock).mockImplementationOnce((tokenAddress, ownerAddress, tokenId, network) => {
        return Promise.resolve(true);
      });
      
      const response = await tool.handler(params);
      
      expect(services.isNFTOwner).toHaveBeenCalledWith(
        mockTokenAddress,
        params.ownerAddress,
        BigInt(mockTokenId),
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('true');
    });
    
    test('check_nft_ownership - error with non-Error object', async () => {
      const tool = checkToolExists('check_nft_ownership');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        ownerAddress: '0x1234567890123456789012345678901234567890',
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.isNFTOwner as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(params);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error checking NFT ownership: This is a string error');
    });
    
    test('check_nft_ownership - error path', async () => {
      const tool = checkToolExists('check_nft_ownership');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        ownerAddress: '0x1234567890123456789012345678901234567890',
        network: mockNetwork
      };
      
      const response = await testToolError(tool, params, services.isNFTOwner as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error checking NFT ownership: Test error');
    });

    test('get_erc1155_token_uri - success path', async () => {
      const tool = checkToolExists('get_erc1155_token_uri');
      if (!tool) return;
      
      (services.getERC1155TokenURI as jest.Mock).mockResolvedValue('https://example.com/metadata/123' as never);
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, params);
      
      expect(services.getERC1155TokenURI).toHaveBeenCalled();
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('https://example.com/metadata/123');
    });
    
    test('get_erc1155_token_uri - error path', async () => {
      const tool = checkToolExists('get_erc1155_token_uri');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        network: mockNetwork
      };
      
      const response = await testToolError(tool, params, services.getERC1155TokenURI as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error fetching ERC1155 token URI: Test error');
    });
    
    test('get_erc1155_token_uri - success path with default network', async () => {
      const tool = checkToolExists('get_erc1155_token_uri');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId
      };
      
      // Mock the getERC1155TokenURI function to return a specific value
      (services.getERC1155TokenURI as jest.Mock).mockImplementationOnce((tokenAddress, tokenId, network) => {
        return Promise.resolve('https://example.com/metadata/123');
      });
      
      const response = await tool.handler(params);
      
      expect(services.getERC1155TokenURI).toHaveBeenCalledWith(
        mockTokenAddress,
        BigInt(mockTokenId),
        'sei' // DEFAULT_NETWORK
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(JSON.parse(response.content[0].text)).toHaveProperty('uri', 'https://example.com/metadata/123');
    });
    
    test('get_erc1155_token_uri - error with non-Error object', async () => {
      const tool = checkToolExists('get_erc1155_token_uri');
      if (!tool) return;
      
      const params = {
        tokenAddress: mockTokenAddress,
        tokenId: mockTokenId,
        network: mockNetwork
      };
      
      const nonErrorObject = "This is a string error";
      
      (services.getERC1155TokenURI as jest.Mock).mockImplementationOnce(() => {
        throw nonErrorObject;
      });
      
      const response = await tool.handler(params);
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error fetching ERC1155 token URI: This is a string error');
    });
  });
  
  // Group 6: Contract Interaction Tools
  describe('Contract Interaction Tools', () => {
    beforeEach(() => {
      (services.readContract as jest.Mock).mockResolvedValue('contract result' as never);
      (services.writeContract as jest.Mock).mockResolvedValue('0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as never);
      (services.isContract as jest.Mock).mockResolvedValue(true as never);
    });
    
    test('read_contract - success path', async () => {
      const tool = checkToolExists('read_contract');
      if (!tool) return;
      
      const contractParams = {
        contractAddress: mockTokenAddress,
        functionName: 'balanceOf',
        abi: '[{"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]',
        functionParams: JSON.stringify([mockAddress]),
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, contractParams);
      
      expect(services.readContract).toHaveBeenCalled();
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('read_contract - error path', async () => {
      const tool = checkToolExists('read_contract');
      if (!tool) return;
      
      const contractParams = {
        contractAddress: mockTokenAddress,
        functionName: 'balanceOf',
        abi: '[{"inputs":[{"name":"account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]',
        functionParams: JSON.stringify([mockAddress]),
        network: mockNetwork
      };
      
      const response = await testToolError(tool, contractParams, services.readContract as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error reading contract: Test error');
    });
    
    test('write_contract - success path', async () => {
      const tool = checkToolExists('write_contract');
      if (!tool) return;
      
      const contractParams = {
        contractAddress: mockTokenAddress,
        functionName: 'transfer',
        abi: '[{"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]',
        functionParams: JSON.stringify([mockAddress, '1000000000000000000']),
        network: mockNetwork
      };
      
      const response = await testToolSuccess(tool, contractParams);
      
      expect(services.writeContract).toHaveBeenCalled();
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('write_contract - error path', async () => {
      const tool = checkToolExists('write_contract');
      if (!tool) return;
      
      const contractParams = {
        contractAddress: mockTokenAddress,
        functionName: 'transfer',
        abi: '[{"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]',
        functionParams: JSON.stringify([mockAddress, '1000000000000000000']),
        network: mockNetwork
      };
      
      const response = await testToolError(tool, contractParams, services.writeContract as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error writing to contract: Test error');
    });
    
    test('is_contract - success path', async () => {
      const tool = checkToolExists('is_contract');
      if (!tool) return;
      
      const response = await testToolSuccess(tool, { address: mockTokenAddress, network: mockNetwork });
      
      expect(services.isContract).toHaveBeenCalledWith(mockTokenAddress, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
    });
    
    test('is_contract - error path', async () => {
      const tool = checkToolExists('is_contract');
      if (!tool) return;
      
      const response = await testToolError(tool, { address: mockTokenAddress, network: mockNetwork }, services.isContract as jest.Mock, mockError);
      
      verifyErrorResponse(response, 'Error checking if address is a contract: Test error');
    });
  });
});
