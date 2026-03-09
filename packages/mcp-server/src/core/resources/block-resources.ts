import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Hash } from "viem";
import { DEFAULT_NETWORK } from "../chains.js";
import * as services from "../services/index.js";
import { resourceError, resourceResult } from "./helpers.js";

/**
 * Register block-related resources
 */
export function registerBlockResources(server: McpServer) {
  // Get block by number for a specific network
  server.resource("evm_block_by_number", new ResourceTemplate("evm://{network}/block/{blockNumber}", { list: undefined }), async (uri, params) => {
    try {
      const network = params.network as string;
      const blockNumber = params.blockNumber as string;
      const block = await services.getBlockByNumber(Number.parseInt(blockNumber, 10), network);

      return resourceResult(uri.href, services.helpers.formatJson(block));
    } catch (error) {
      return resourceError(uri.href, "fetching block", error);
    }
  });

  // Get block by hash for a specific network
  server.resource("block_by_hash", new ResourceTemplate("evm://{network}/block/hash/{blockHash}", { list: undefined }), async (uri, params) => {
    try {
      const network = params.network as string;
      const blockHash = params.blockHash as string;
      const block = await services.getBlockByHash(blockHash as Hash, network);

      return resourceResult(uri.href, services.helpers.formatJson(block));
    } catch (error) {
      return resourceError(uri.href, "fetching block with hash", error);
    }
  });

  // Get latest block for a specific network
  server.resource("evm_latest_block", new ResourceTemplate("evm://{network}/block/latest", { list: undefined }), async (uri, params) => {
    try {
      const network = params.network as string;
      const block = await services.getLatestBlock(network);

      return resourceResult(uri.href, services.helpers.formatJson(block));
    } catch (error) {
      return resourceError(uri.href, "fetching latest block", error);
    }
  });

  // Default latest block (Sei mainnet)
  server.resource("default_latest_block", "evm://block/latest", async (uri) => {
    try {
      const network = DEFAULT_NETWORK;
      const block = await services.getLatestBlock(network);

      return resourceResult(uri.href, services.helpers.formatJson(block));
    } catch (error) {
      return resourceError(uri.href, "fetching latest block", error);
    }
  });
}
