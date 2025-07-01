import { jest } from '@jest/globals';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { Address, Hash } from 'viem';

// Define types for tools and responses
type ToolSchema = Record<string, unknown>;
type ToolHandler = (params: Record<string, unknown>) => Promise<ToolResponse>;

export interface Tool {
  name: string;
  description: string;
  schema: ToolSchema;
  handler: ToolHandler;
}

interface ToolResponse {
  content: Array<{type: string; text: string}>;
  isError?: boolean;
}

interface TokenInfo {
  name: string;
  symbol: string;
  decimals: number;
}

interface NftInfo {
  name: string;
  symbol: string;
}

interface MockBalance {
  mockBalance: jest.Mock;
  mockTokenInfo: jest.Mock;
  mockNftInfo: jest.Mock;
}

interface Transaction {
  hash: string;
  blockNumber: number;
  from: string;
  to: string;
  value: bigint;
  data: string;
  nonce: number;
  gasLimit: bigint;
}

interface TransactionReceipt {
  transactionHash: string;
  blockNumber: number;
  status: string;
  gasUsed: bigint;
  effectiveGasPrice: bigint;
  logs: unknown[];
}

interface MockTransaction {
  mockHash: Hash;
  mockTxReceipt: Record<string, unknown>;
  mockTransaction: Transaction;
  mockTransactionReceipt: TransactionReceipt;
}

/**
 * Helper function to create a mock MCP server for testing tools
 * @returns A mock MCP server object with the tool method
 */
export function createMockServer(): { server: McpServer; registeredTools: Map<string, Tool> } {
  const registeredTools = new Map<string, Tool>();
  
  const server = {
    tool: jest.fn((name: string, description: string, schema: ToolSchema, handler: ToolHandler) => {
      registeredTools.set(name, { name, description, schema, handler });
    })
  } as unknown as McpServer;
  
  return { server, registeredTools };
}

/**
 * Helper function to test a tool's success path
 * @param tool The tool object from registeredTools
 * @param params The parameters to pass to the tool handler
 * @returns The result of the tool handler
 */
export async function testToolSuccess(tool: Tool, params: Record<string, unknown>): Promise<ToolResponse> {
  return await tool.handler(params);
}

/**
 * Helper function to test a tool's error path
 * @param tool The tool object from registeredTools
 * @param params The parameters to pass to the tool handler
 * @param mockFn The mock function that should throw an error
 * @param error The error to throw
 * @returns The result of the tool handler
 */
export async function testToolError(
  tool: Tool, 
  params: Record<string, unknown>, 
  mockFn: jest.Mock, 
  error: Error
): Promise<ToolResponse> {
  mockFn.mockImplementationOnce(() => {
    throw error;
  });
  return await tool.handler(params);
}

/**
 * Helper function to verify a successful tool response
 * @param response The response from the tool handler
 * @param expectedData The expected data in the response
 */
export function verifySuccessResponse(response: ToolResponse, expectedData: Record<string, unknown>): void {
  expect(response).toHaveProperty('content');
  expect(response.content).toBeInstanceOf(Array);
  expect(response.content[0]).toHaveProperty('type', 'text');
  
  // Parse the JSON response
  const responseData = JSON.parse(response.content[0].text);
  expect(responseData).toEqual(expectedData);
}

/**
 * Helper function to verify an error tool response
 * @param response The response from the tool handler
 * @param errorMessage The expected error message
 */
export function verifyErrorResponse(response: ToolResponse, errorMessage: string): void {
  expect(response).toHaveProperty('content');
  expect(response.content).toBeInstanceOf(Array);
  expect(response.content[0]).toHaveProperty('type', 'text');
  expect(response.content[0].text).toContain(errorMessage);
  expect(response).toHaveProperty('isError', true);
}

/**
 * Common mock setup for balance-related tests
 */
export function setupBalanceMocks(): MockBalance {
  const mockBalance = jest.fn().mockResolvedValue(BigInt(100) as never);

  const mockTokenInfo = jest.fn().mockResolvedValue({
    name: 'Test Token',
    symbol: 'TEST',
    decimals: 18
  } as never);

  const mockNftInfo = jest.fn().mockResolvedValue({
    name: 'Test NFT',
    symbol: 'TNFT'
  } as never);

  return {
    mockBalance,
    mockTokenInfo,
    mockNftInfo
  };
}

/**
 * Common mock setup for transaction-related tests
 */
export function setupTransactionMocks(): MockTransaction {
  const mockHash = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' as Hash;

  return {
    mockHash,
    mockTxReceipt: {
      transactionHash: mockHash,
      blockNumber: 12345678,
      status: 'success'
    },
    mockTransaction: {
      hash: mockHash,
      blockNumber: 12345678,
      from: '0x1234567890abcdef1234567890abcdef12345678',
      to: '0x1234567890abcdef1234567890abcdef12345679',
      value: BigInt(1000000000000000000),
      data: '0x',
      nonce: 1,
      gasLimit: BigInt(21000)
    } as Transaction,
    mockTransactionReceipt: {
      transactionHash: mockHash,
      blockNumber: 12345678,
      status: 'success',
      gasUsed: BigInt(21000),
      effectiveGasPrice: BigInt(1000000000),
      logs: []
    } as TransactionReceipt
  };
}
