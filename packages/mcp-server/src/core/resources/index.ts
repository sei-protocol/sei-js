import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerBalanceResources } from "./balance-resources.js";
import { registerBlockResources } from "./block-resources.js";
import { registerNetworkResources } from "./network-resources.js";
import { registerTokenResources } from "./token-resources.js";
import { registerTransactionResources } from "./transaction-resources.js";

/**
 * Register all EVM-related resources
 * @param server The MCP server instance
 */
export function registerEVMResources(server: McpServer) {
  registerNetworkResources(server);
  registerBlockResources(server);
  registerBalanceResources(server);
  registerTransactionResources(server);
  registerTokenResources(server);
}
