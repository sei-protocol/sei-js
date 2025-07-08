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
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getRpcUrl, getSupportedNetworks } from '../../core/chains.js';
import { getPrivateKeyAsHex, isWalletEnabled, getWalletMode } from '../../core/config.js';
import { registerEVMTools } from '../../core/tools.js';
import * as services from '../../core/services/index.js';
import { getWalletProvider } from '../../core/wallet/index.js';
import { createDocsSearchTool } from '../../docs/index.js';
import { createMockServer, setupBalanceMocks, setupTransactionMocks, testToolError, testToolSuccess, verifyErrorResponse, verifySuccessResponse, type Tool } from './helpers/tool-test-helpers.js';

// Mock fetch globally
const mockFetch = jest.fn();
global.fetch = mockFetch as jest.MockedFunction<typeof fetch>;

// Mock all service functions
jest.mock('../../core/services/index.js');
jest.mock('../../core/chains.js');
jest.mock('../../core/config.js');
jest.mock('../../core/wallet/index.js');

describe('EVM Tools', () => {
  // Common test variables
  const mockAddress = '0x1234567890123456789012345678901234567890' as Address;
  const mockTokenAddress = '0x0987654321098765432109876543210987654321' as Address;
  const mockTokenId = '123';
  const mockNetwork = 'sei';
  const mockError = new Error('Test error');
  
  // Variables to hold server and registeredTools
  let server: McpServer;
  let registeredTools: Map<string, Tool>;
  
  beforeEach(async () => {
    // Create fresh mock server for each test
    const mockServerResult = createMockServer();
    server = mockServerResult.server;
    registeredTools = mockServerResult.registeredTools;
    
    // Setup configuration mocks first
    (getRpcUrl as jest.Mock).mockReturnValue('https://rpc.sei.io');
    (getSupportedNetworks as jest.Mock).mockReturnValue(['sei', 'sei-testnet']);
    (getPrivateKeyAsHex as jest.Mock).mockReturnValue('0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890');
    (isWalletEnabled as jest.Mock).mockReturnValue(true); // Enable wallet for testing
    (getWalletMode as jest.Mock).mockReturnValue('private-key'); // Set wallet mode
    
    // Mock wallet provider
    const mockWalletProvider = {
      isAvailable: jest.fn().mockReturnValue(true),
      getName: jest.fn().mockReturnValue('private-key'),
      getAddress: jest.fn().mockResolvedValue(mockAddress),
      getWalletClient: jest.fn().mockResolvedValue({ account: { address: mockAddress } })
    };
    (getWalletProvider as jest.Mock).mockReturnValue(mockWalletProvider);
    
    // Mock service functions
    (services.getAddressFromProvider as jest.Mock).mockResolvedValue(mockAddress);
    (services.getChainId as jest.Mock).mockResolvedValue(1 as never);
    (services.getBlockNumber as jest.Mock).mockResolvedValue(BigInt(12345678) as never);
    
    // Register tools after mocks are set up
    registerEVMTools(server);
    
    // Register docs search tool
    await createDocsSearchTool(server);
    
    // Reset fetch mock
    mockFetch.mockReset();
    
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
        (services.getAddressFromProvider as jest.Mock).mockResolvedValue(mockAddress);
        
        const response = await testToolSuccess(tool, {});
        
        expect(services.getAddressFromProvider).toHaveBeenCalled();
        
        expect(response).toHaveProperty('content');
        expect(response.content[0]).toHaveProperty('type', 'text');
        
        const parsedResponse = JSON.parse(response.content[0].text);
        expect(parsedResponse).toEqual({ address: mockAddress });
      });
      
      test('get_address_from_private_key - wallet not available', async () => {
        const tool = checkToolExists('get_address_from_private_key');
        if (!tool) return;
        
        // Mock wallet provider to be unavailable
        const mockWalletProvider = {
          isAvailable: jest.fn().mockReturnValue(false),
          getName: jest.fn().mockReturnValue('private-key')
        };
        (getWalletProvider as jest.Mock).mockReturnValue(mockWalletProvider);
        
        const response = await testToolSuccess(tool, {});
        
        verifyErrorResponse(response, "Error: Wallet provider 'private-key' is not available");
      });
      
      test('get_address_from_private_key - error path', async () => {
        const tool = checkToolExists('get_address_from_private_key');
        if (!tool) return;
        
        // Mock wallet provider as available
        const mockWalletProvider = {
          isAvailable: jest.fn().mockReturnValue(true),
          getName: jest.fn().mockReturnValue('private-key')
        };
        (getWalletProvider as jest.Mock).mockReturnValue(mockWalletProvider);
        
        const response = await testToolError(tool, {}, services.getAddressFromProvider as jest.Mock, mockError);
        
        verifyErrorResponse(response, 'Error deriving address from private key: Test error');
      });
      
      test('get_address_from_private_key - error with non-Error object', async () => {
        const tool = checkToolExists('get_address_from_private_key');
        if (!tool) return;
        
        // Mock wallet provider as available
        const mockWalletProvider = {
          isAvailable: jest.fn().mockReturnValue(true),
          getName: jest.fn().mockReturnValue('private-key')
        };
        (getWalletProvider as jest.Mock).mockReturnValue(mockWalletProvider);
        
        // Mock the service function to throw a non-Error object
        const nonErrorObject = "This is a string error";
        (services.getAddressFromProvider as jest.Mock).mockImplementationOnce(() => {
          throw nonErrorObject;
        });
        
        const response = await tool.handler({});
        
        expect(response).toHaveProperty('isError', true);
        expect(response.content[0].text).toContain('Error deriving address from private key: This is a string error');
      });
  });

  // Test disabled wallet scenario
  test('should handle disabled wallet mode', () => {
    // Create a new server for this test
    const mockServerResult = createMockServer();
    const disabledWalletServer = mockServerResult.server;
    const disabledWalletTools = mockServerResult.registeredTools;
    
    // Mock wallet as disabled
    (isWalletEnabled as jest.Mock).mockReturnValue(false);
    
    // Mock console.error to verify it's called
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    
    // Register tools with disabled wallet
    registerEVMTools(disabledWalletServer);
    
    // Verify console.error was called with the expected message
    expect(consoleSpy).toHaveBeenCalledWith('Wallet functionality is disabled. Wallet-dependent tools will not be available.');
    
    // Verify wallet tools are not registered
    expect(disabledWalletTools.has('get_address_from_private_key')).toBe(false);
    expect(disabledWalletTools.has('transfer_sei')).toBe(false);
    expect(disabledWalletTools.has('transfer_erc20')).toBe(false);
    
    // Verify read-only tools are still registered
    expect(disabledWalletTools.has('get_chain_info')).toBe(true);
    expect(disabledWalletTools.has('get_balance')).toBe(true);
    
    // Clean up
    consoleSpy.mockRestore();
    // Restore wallet enabled for other tests
    (isWalletEnabled as jest.Mock).mockReturnValue(true);
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
    expect(registeredTools.has('deploy_contract')).toBe(true);
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

    test('estimate_gas - with contract call data', async () => {
      const tool = checkToolExists('estimate_gas');
      if (!tool) return;
      
      const params = {
        to: '0x1234567890123456789012345678901234567890',
        value: '0.5',
        data: '0xa9059cbb000000000000000000000000742d35cc6cd6b4c0532a6b329dc52b4eca13a623000000000000000000000000000000000000000000000000016345785d8a0000',
        network: mockNetwork
      };
      
      // Mock the estimateGas function to return a specific value for contract calls
      (services.estimateGas as jest.Mock).mockImplementationOnce((txParams, network) => {
        return Promise.resolve(BigInt('45000')); // Higher gas for contract calls
      });
      
      // Mock the parseEther function
      (services.helpers.parseEther as jest.Mock).mockReturnValueOnce(BigInt('500000000000000000')); // 0.5 ETH
      
      const response = await tool.handler(params);
      
      expect(services.estimateGas).toHaveBeenCalledWith({
        to: params.to as `0x${string}`,
        value: BigInt('500000000000000000'),
        data: params.data as `0x${string}`
      }, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('45000');
    });

    test('estimate_gas - without data parameter', async () => {
      const tool = checkToolExists('estimate_gas');
      if (!tool) return;
      
      const params = {
        to: '0x1234567890123456789012345678901234567890',
        value: '1.0',
        network: mockNetwork
        // No data parameter provided
      };
      
      // Mock the estimateGas function to return a specific value
      (services.estimateGas as jest.Mock).mockImplementationOnce((txParams, network) => {
        return Promise.resolve(BigInt('21000')); // Basic transfer gas
      });
      
      // Mock the parseEther function
      (services.helpers.parseEther as jest.Mock).mockReturnValueOnce(BigInt('1000000000000000000')); // 1 ETH
      
      const response = await tool.handler(params);
      
      expect(services.estimateGas).toHaveBeenCalledWith({
        to: params.to as `0x${string}`,
        value: BigInt('1000000000000000000')
        // data should not be included since it wasn't provided
      }, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('21000');
    });

    test('estimate_gas - without value parameter', async () => {
      const tool = checkToolExists('estimate_gas');
      if (!tool) return;
      
      const params = {
        to: '0x1234567890123456789012345678901234567890',
        data: '0xa9059cbb000000000000000000000000742d35cc6cd6b4c0532a6b329dc52b4eca13a623000000000000000000000000000000000000000000000000016345785d8a0000',
        network: mockNetwork
        // No value parameter provided
      };
      
      // Mock the estimateGas function to return a specific value
      (services.estimateGas as jest.Mock).mockImplementationOnce((txParams, network) => {
        return Promise.resolve(BigInt('35000')); // Contract call without value
      });
      
      const response = await tool.handler(params);
      
      expect(services.estimateGas).toHaveBeenCalledWith({
        to: params.to as `0x${string}`,
        data: params.data as `0x${string}`
        // value should not be included since it wasn't provided
      }, mockNetwork);
      
      expect(response).toHaveProperty('content');
      expect(response.content[0]).toHaveProperty('type', 'text');
      expect(response.content[0].text).toContain('35000');
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

  test('write_contract - error with non-Error object', async () => {
    const tool = checkToolExists('write_contract');
    if (!tool) return;
    
    const params = {
      contractAddress: '0x1234567890123456789012345678901234567890',
      abi: [
        {
          inputs: [{ name: 'to', type: 'address' }, { name: 'value', type: 'uint256' }],
          name: 'transfer',
          outputs: [{ name: '', type: 'bool' }],
          stateMutability: 'nonpayable',
          type: 'function'
        }
      ],
      functionName: 'transfer',
      args: ['0x0987654321098765432109876543210987654321', '1000000000000000000'],
      network: mockNetwork
    };
    
    const nonErrorObject = "This is a string error";
    
    (services.writeContract as jest.Mock).mockImplementationOnce(() => {
      throw nonErrorObject;
    });
    
    const response = await tool.handler(params);
    
    expect(response).toHaveProperty('isError', true);
    expect(response.content[0].text).toContain('Error writing to contract: This is a string error');
  });

  test('deploy_contract - success path', async () => {
    const tool = checkToolExists('deploy_contract');
    if (!tool) return;
    
    const mockDeployResult = {
      address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890' as `0x${string}`
    };
    
    // Mock the deployContract function before calling testToolSuccess
    (services.deployContract as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve(mockDeployResult);
    });
    
    const params = {
      bytecode: '0x608060405234801561001057600080fd5b50',
      abi: [
        {
          inputs: [{ name: 'initialValue', type: 'uint256' }],
          stateMutability: 'nonpayable',
          type: 'constructor'
        }
      ],
      args: ['1000'],
      network: mockNetwork
    };
    
    const response = await testToolSuccess(tool, params);
    
    expect(services.deployContract).toHaveBeenCalledWith(
      '0x608060405234801561001057600080fd5b50',
      params.abi,
      params.args,
      mockNetwork
    );
    
    expect(response).toHaveProperty('content');
    expect(response.content[0]).toHaveProperty('type', 'text');
    
    const responseData = JSON.parse(response.content[0].text);
    expect(responseData).toMatchObject({
      success: true,
      network: mockNetwork,
      contractAddress: mockDeployResult.address,
      transactionHash: mockDeployResult.transactionHash,
      message: 'Contract deployed successfully'
    });
  });

  test('deploy_contract - success path without 0x prefix in bytecode', async () => {
    const tool = checkToolExists('deploy_contract');
    if (!tool) return;
    
    const mockDeployResult = {
      address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890' as `0x${string}`
    };
    
    // Mock the deployContract function before calling testToolSuccess
    (services.deployContract as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve(mockDeployResult);
    });
    
    const params = {
      bytecode: '608060405234801561001057600080fd5b50', // Without 0x prefix
      abi: [
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor'
        }
      ],
      network: mockNetwork
    };
    
    const response = await testToolSuccess(tool, params);
    
    expect(services.deployContract).toHaveBeenCalledWith(
      '0x608060405234801561001057600080fd5b50', // Should be formatted with 0x
      params.abi,
      [],
      mockNetwork
    );
    
    expect(response).toHaveProperty('content');
    expect(response.content[0]).toHaveProperty('type', 'text');
  });

  test('deploy_contract - success path with default network and no args', async () => {
    const tool = checkToolExists('deploy_contract');
    if (!tool) return;
    
    const mockDeployResult = {
      address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890' as `0x${string}`
    };
    
    // Mock the deployContract function before calling testToolSuccess
    (services.deployContract as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve(mockDeployResult);
    });
    
    const params = {
      bytecode: '0x608060405234801561001057600080fd5b50',
      abi: [
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor'
        }
      ]
    };
    
    const response = await testToolSuccess(tool, params);
    
    expect(services.deployContract).toHaveBeenCalledWith(
      params.bytecode,
      params.abi,
      [],
      'sei' // DEFAULT_NETWORK
    );
    
    expect(response).toHaveProperty('content');
    expect(response.content[0]).toHaveProperty('type', 'text');
  });

  test('deploy_contract - error path', async () => {
    const tool = checkToolExists('deploy_contract');
    if (!tool) return;
    
    const params = {
      bytecode: '0x608060405234801561001057600080fd5b50',
      abi: [
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor'
        }
      ],
      network: mockNetwork
    };
    
    const response = await testToolError(tool, params, services.deployContract as jest.Mock, mockError);
    
    verifyErrorResponse(response, 'Error deploying contract: Test error');
  });

  test('deploy_contract - error with non-Error object', async () => {
    const tool = checkToolExists('deploy_contract');
    if (!tool) return;
    
    const params = {
      bytecode: '0x608060405234801561001057600080fd5b50',
      abi: [
        {
          inputs: [],
          stateMutability: 'nonpayable',
          type: 'constructor'
        }
      ],
      network: mockNetwork
    };
    
    const nonErrorObject = "This is a string error";
    
    (services.deployContract as jest.Mock).mockImplementationOnce(() => {
      throw nonErrorObject;
    });
    
    const response = await tool.handler(params);
    
    expect(response).toHaveProperty('isError', true);
    expect(response.content[0].text).toContain('Error deploying contract: This is a string error');
  });

  test('deploy_contract - with ABI as string', async () => {
    const tool = checkToolExists('deploy_contract');
    if (!tool) return;
    
    const mockDeployResult = {
      address: '0x1234567890123456789012345678901234567890' as `0x${string}`,
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890' as `0x${string}`
    };
    
    (services.deployContract as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve(mockDeployResult);
    });
    
    const params = {
      bytecode: '0x608060405234801561001057600080fd5b50',
      abi: JSON.stringify([{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' }]), // ABI as string
      network: mockNetwork
    };
    
    const response = await testToolSuccess(tool, params);
    
    expect(response).toHaveProperty('content');
    expect(response.content[0]).toHaveProperty('type', 'text');
  });

  test('is_contract - returns false (EOA)', async () => {
    const tool = checkToolExists('is_contract');
    if (!tool) return;
    
    (services.isContract as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve(false);
    });
    
    const params = {
      address: '0x0987654321098765432109876543210987654321',
      network: mockNetwork
    };
    
    const response = await tool.handler(params);
    
    expect(response.content[0].text).toContain('Externally Owned Account (EOA)');
  });

  test('check_nft_ownership - returns false (does not own)', async () => {
    const tool = checkToolExists('check_nft_ownership');
    if (!tool) return;
    
    (services.isNFTOwner as jest.Mock).mockImplementationOnce(() => {
      return Promise.resolve(false);
    });
    
    const params = {
      tokenAddress: mockTokenAddress,
      tokenId: mockTokenId,
      ownerAddress: '0x1234567890123456789012345678901234567890',
      network: mockNetwork
    };
    
    const response = await tool.handler(params);
    
    expect(response.content[0].text).toContain('Address does not own this NFT');
  });

  // Documentation Search Tests
  describe('Documentation Search Tools', () => {
    test('search_docs - successful search with results', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      const mockResults = [
        {
          title: 'Getting Started',
          content: 'Learn how to get started with Sei',
          link: 'https://docs.sei.io/getting-started'
        },
        {
          title: 'Bridging Tokens',
          content: 'How to bridge tokens to Sei',
          link: 'https://docs.sei.io/bridging'
        }
      ];
      
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResults)
      } as unknown as Response);
      
      const response = await testToolSuccess(tool, { query: 'bridging tokens' });
      
      expect(mockFetch).toHaveBeenCalledWith(
        'https://docs.sei-apis.io/search?q=bridging%20tokens'
      );
      
      expect(response).toHaveProperty('content');
      expect(response.content).toHaveLength(2);
      expect(response.content[0]).toEqual({
        type: 'text',
        text: 'Title: Getting Started\nContent: Learn how to get started with Sei\nLink: https://docs.sei.io/getting-started'
      });
      expect(response.content[1]).toEqual({
        type: 'text',
        text: 'Title: Bridging Tokens\nContent: How to bridge tokens to Sei\nLink: https://docs.sei.io/bridging'
      });
    });
    
    test('search_docs - HTTP error response', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404
      } as unknown as Response);
      
      const response = await tool.handler({ query: 'test query' });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error searching docs: Search failed: HTTP error! status: 404');
    });
    
    test('search_docs - empty results', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce([])
      } as unknown as Response);
      
      const response = await tool.handler({ query: 'nonexistent' });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error searching docs: Search failed: No results found');
    });
    
    test('search_docs - null results', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(null)
      } as unknown as Response);
      
      const response = await tool.handler({ query: 'test' });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error searching docs: Search failed: No results found');
    });
    
    test('search_docs - network error', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      mockFetch.mockRejectedValueOnce(new Error('Network error'));
      
      const response = await tool.handler({ query: 'test' });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error searching docs: Search failed: Network error');
    });
    
    test('search_docs - unknown error type', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      mockFetch.mockRejectedValueOnce('Unknown error');
      
      const response = await tool.handler({ query: 'test' });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error searching docs: Unknown error');
    });
    
    test('search_docs - JSON parsing error', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockRejectedValueOnce(new Error('Invalid JSON'))
      } as unknown as Response);
      
      const response = await tool.handler({ query: 'test' });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error searching docs: Search failed: Invalid JSON');
    });
    
    test('search_docs - non-Error object thrown', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      // Mock fetch to throw a non-Error object that will pass through searchDocs
      mockFetch.mockRejectedValueOnce({ message: 'Custom error object' });
      
      const response = await tool.handler({ query: 'test' });
      
      expect(response).toHaveProperty('isError', true);
      expect(response.content[0].text).toContain('Error searching docs: [object Object]');
    });

    test('search_docs - properly encode query parameters', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      const mockResults = [{
        title: 'Test Result',
        content: 'Test content',
        link: 'https://docs.sei.io/test'
      }];
      
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResults)
      } as unknown as Response);
      
      await tool.handler({ query: 'special chars: @#$%^&*()' });
      
      expect(mockFetch).toHaveBeenCalledWith(
        'https://docs.sei-apis.io/search?q=special%20chars%3A%20%40%23%24%25%5E%26*()'
      );
    });
    
    test('search_docs - single result', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      const mockResults = [{
        title: 'Single Result',
        content: 'Single content',
        link: 'https://docs.sei.io/single'
      }];
      
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResults)
      } as unknown as Response);
      
      const response = await testToolSuccess(tool, { query: 'single' });
      
      expect(response.content).toHaveLength(1);
      expect(response.content[0]).toEqual({
        type: 'text',
        text: 'Title: Single Result\nContent: Single content\nLink: https://docs.sei.io/single'
      });
    });
    
    test('search_docs - results with special characters', async () => {
      const tool = checkToolExists('search_docs');
      if (!tool) return;
      
      const mockResults = [{
        title: 'Special & Characters',
        content: 'Content with "quotes" and <tags> & symbols',
        link: 'https://docs.sei.io/special'
      }];
      
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(mockResults)
      } as unknown as Response);
      
      const response = await testToolSuccess(tool, { query: 'special' });
      
      expect(response.content[0]).toEqual({
        type: 'text',
        text: 'Title: Special & Characters\nContent: Content with "quotes" and <tags> & symbols\nLink: https://docs.sei.io/special'
      });
    });
  });
});
});
