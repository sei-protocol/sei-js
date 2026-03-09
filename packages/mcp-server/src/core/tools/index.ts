import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { isWalletEnabled } from "../config.js";
import { registerBalanceTools } from "./balance-tools.js";
import { registerContractReadTools, registerContractWriteTools } from "./contract-tools.js";
import { registerNetworkTools } from "./network-tools.js";
import { registerTokenTools } from "./token-tools.js";
import { registerTransferTools } from "./transfer-tools.js";

/**
 * Register all EVM-related tools with the MCP server
 *
 * @param server The MCP server instance
 */
export function registerEVMTools(server: McpServer) {
  // Register read-only tools (always available)
  registerNetworkTools(server);
  registerBalanceTools(server);
  registerContractReadTools(server);

  // Register wallet-dependent tools (only if wallet is enabled)
  if (isWalletEnabled()) {
    registerTransferTools(server);
    registerContractWriteTools(server);
    registerTokenTools(server);
  }
}
