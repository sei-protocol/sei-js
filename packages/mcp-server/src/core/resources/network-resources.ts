import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { DEFAULT_NETWORK, getRpcUrl, getSupportedNetworks } from "../chains.js";
import * as services from "../services/index.js";
import { resourceError, resourceResult } from "./helpers.js";

/**
 * Register network and chain info resources
 */
export function registerNetworkResources(server: McpServer) {
  // Get EVM info for a specific network
  server.resource("chain_info_by_network", new ResourceTemplate("evm://{network}/chain", { list: undefined }), async (uri, params) => {
    try {
      const network = params.network as string;
      const chainId = await services.getChainId(network);
      const blockNumber = await services.getBlockNumber(network);
      const rpcUrl = getRpcUrl(network);

      return resourceResult(uri.href, {
        network,
        chainId,
        blockNumber: blockNumber.toString(),
        rpcUrl,
      });
    } catch (error) {
      return resourceError(uri.href, "fetching chain info", error);
    }
  });

  // Default chain info (Sei mainnet)
  server.resource("sei_chain_info", "evm://chain", async (uri) => {
    try {
      const network = DEFAULT_NETWORK;
      const chainId = await services.getChainId(network);
      const blockNumber = await services.getBlockNumber(network);
      const rpcUrl = getRpcUrl(network);

      return resourceResult(uri.href, {
        network,
        chainId,
        blockNumber: blockNumber.toString(),
        rpcUrl,
      });
    } catch (error) {
      return resourceError(uri.href, "fetching chain info", error);
    }
  });

  // Get supported networks
  server.resource("supported_networks", "evm://networks", async (uri) => {
    try {
      const networks = getSupportedNetworks();
      return resourceResult(uri.href, { supportedNetworks: networks });
    } catch (error) {
      return resourceError(uri.href, "fetching supported networks", error);
    }
  });
}
