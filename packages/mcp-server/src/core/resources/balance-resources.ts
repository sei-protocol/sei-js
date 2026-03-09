import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Address } from "viem";
import { DEFAULT_NETWORK } from "../chains.js";
import * as services from "../services/index.js";
import { resourceError, resourceResult } from "./helpers.js";

/**
 * Register balance-related resources (native and ERC20)
 */
export function registerBalanceResources(server: McpServer) {
  // Get native token balance for a specific network
  server.resource("evm_address_native_balance", new ResourceTemplate("evm://{network}/address/{address}/balance", { list: undefined }), async (uri, params) => {
    try {
      const network = params.network as string;
      const address = params.address as string;
      const balance = await services.getBalance(address as Address, network);

      return resourceResult(uri.href, {
        network,
        address,
        balance: {
          wei: balance.wei.toString(),
          ether: balance.sei,
        },
      });
    } catch (error) {
      return resourceError(uri.href, "fetching Sei balance", error);
    }
  });

  // Default Sei balance (Sei mainnet)
  server.resource("default_sei_balance", new ResourceTemplate("evm://address/{address}/sei-balance", { list: undefined }), async (uri, params) => {
    try {
      const network = DEFAULT_NETWORK;
      const address = params.address as string;
      const balance = await services.getBalance(address as Address, network);

      return resourceResult(uri.href, {
        network,
        address,
        balance: {
          wei: balance.wei.toString(),
          ether: balance.sei,
        },
      });
    } catch (error) {
      return resourceError(uri.href, "fetching Sei balance", error);
    }
  });

  // Get ERC20 balance for a specific network
  server.resource(
    "erc20_balance",
    new ResourceTemplate("evm://{network}/address/{address}/token/{tokenAddress}/balance", { list: undefined }),
    async (uri, params) => {
      try {
        const network = params.network as string;
        const address = params.address as string;
        const tokenAddress = params.tokenAddress as string;

        const balance = await services.getERC20Balance(tokenAddress as Address, address as Address, network);

        return resourceResult(uri.href, {
          network,
          address,
          tokenAddress,
          balance: {
            raw: balance.raw.toString(),
            formatted: balance.formatted,
            decimals: balance.token.decimals,
          },
        });
      } catch (error) {
        return resourceError(uri.href, "fetching ERC20 balance", error);
      }
    },
  );

  // Default ERC20 balance (Sei mainnet)
  server.resource(
    "default_erc20_balance",
    new ResourceTemplate("evm://address/{address}/token/{tokenAddress}/balance", { list: undefined }),
    async (uri, params) => {
      try {
        const network = DEFAULT_NETWORK;
        const address = params.address as string;
        const tokenAddress = params.tokenAddress as string;

        const balance = await services.getERC20Balance(tokenAddress as Address, address as Address, network);

        return resourceResult(uri.href, {
          network,
          address,
          tokenAddress,
          balance: {
            raw: balance.raw.toString(),
            formatted: balance.formatted,
            decimals: balance.token.decimals,
          },
        });
      } catch (error) {
        return resourceError(uri.href, "fetching ERC20 balance", error);
      }
    },
  );
}
