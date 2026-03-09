import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Hash } from "viem";
import { DEFAULT_NETWORK } from "../chains.js";
import * as services from "../services/index.js";
import { resourceError, resourceResult } from "./helpers.js";

/**
 * Register transaction-related resources
 */
export function registerTransactionResources(server: McpServer) {
  // Get transaction by hash for a specific network
  server.resource("evm_transaction_details", new ResourceTemplate("evm://{network}/tx/{txHash}", { list: undefined }), async (uri, params) => {
    try {
      const network = params.network as string;
      const txHash = params.txHash as string;
      const tx = await services.getTransaction(txHash as Hash, network);

      return resourceResult(uri.href, services.helpers.formatJson(tx));
    } catch (error) {
      return resourceError(uri.href, "fetching transaction", error);
    }
  });

  // Default transaction by hash (Sei mainnet)
  server.resource("default_transaction_by_hash", new ResourceTemplate("evm://tx/{txHash}", { list: undefined }), async (uri, params) => {
    try {
      const network = DEFAULT_NETWORK;
      const txHash = params.txHash as string;
      const tx = await services.getTransaction(txHash as Hash, network);

      return resourceResult(uri.href, services.helpers.formatJson(tx));
    } catch (error) {
      return resourceError(uri.href, "fetching transaction", error);
    }
  });
}
