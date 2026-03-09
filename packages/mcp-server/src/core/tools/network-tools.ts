import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Address, Hash } from "viem";
import { z } from "zod";
import { DEFAULT_NETWORK, getRpcUrl, getSupportedNetworks } from "../chains.js";
import * as services from "../services/index.js";

/**
 * Register network, block, transaction, and gas tools (read-only)
 */
export function registerNetworkTools(server: McpServer) {
  // Get chain information
  server.tool(
    "get_chain_info",
    "Get information about Sei network",
    {
      network: z
        .string()
        .optional()
        .describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet', etc.) or chain ID. Supports all Sei networks. Defaults to Sei mainnet."),
    },
    async ({ network = DEFAULT_NETWORK }) => {
      try {
        const chainId = await services.getChainId(network);
        const blockNumber = await services.getBlockNumber(network);
        const rpcUrl = getRpcUrl(network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  network,
                  chainId,
                  blockNumber: blockNumber.toString(),
                  rpcUrl,
                },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching chain info: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Get supported networks
  server.tool("get_supported_networks", "Get a list of supported EVM networks", {}, async () => {
    try {
      const networks = getSupportedNetworks();

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(
              {
                supportedNetworks: networks,
              },
              null,
              2,
            ),
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error fetching supported networks: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  });

  // BLOCK TOOLS

  // Get block by number
  server.tool(
    "get_block_by_number",
    "Get a block by its block number",
    {
      blockNumber: z.number().describe("The block number to fetch"),
      network: z.string().optional().describe("Network name or chain ID. Defaults to Sei mainnet."),
    },
    async ({ blockNumber, network = DEFAULT_NETWORK }) => {
      try {
        const block = await services.getBlockByNumber(blockNumber, network);

        return {
          content: [
            {
              type: "text",
              text: services.helpers.formatJson(block),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching block ${blockNumber}: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Get latest block
  server.tool(
    "get_latest_block",
    "Get the latest block from the EVM",
    {
      network: z.string().optional().describe("Network name or chain ID. Defaults to Sei mainnet."),
    },
    async ({ network = DEFAULT_NETWORK }) => {
      try {
        const block = await services.getLatestBlock(network);

        return {
          content: [
            {
              type: "text",
              text: services.helpers.formatJson(block),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching latest block: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // TRANSACTION TOOLS

  // Get transaction by hash
  server.tool(
    "get_transaction",
    "Get detailed information about a specific transaction by its hash. Includes sender, recipient, value, data, and more.",
    {
      txHash: z.string().describe("The transaction hash to look up (e.g., '0x1234...')"),
      network: z.string().optional().describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet', etc.) or chain ID. Defaults to Sei mainnet."),
    },
    async ({ txHash, network = DEFAULT_NETWORK }) => {
      try {
        const tx = await services.getTransaction(txHash as Hash, network);

        return {
          content: [
            {
              type: "text",
              text: services.helpers.formatJson(tx),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching transaction ${txHash}: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Get transaction receipt
  server.tool(
    "get_transaction_receipt",
    "Get a transaction receipt by its hash",
    {
      txHash: z.string().describe("The transaction hash to look up"),
      network: z.string().optional().describe("Network name or chain ID. Defaults to Sei mainnet."),
    },
    async ({ txHash, network = DEFAULT_NETWORK }) => {
      try {
        const receipt = await services.getTransactionReceipt(txHash as Hash, network);

        return {
          content: [
            {
              type: "text",
              text: services.helpers.formatJson(receipt),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching transaction receipt ${txHash}: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Estimate gas
  server.tool(
    "estimate_gas",
    "Estimate the gas cost for a transaction",
    {
      to: z.string().describe("The recipient address"),
      value: z.string().optional().describe("The amount of Sei to send (e.g., '0.1')"),
      data: z.string().optional().describe("The transaction data as a hex string"),
      network: z.string().optional().describe("Network name or chain ID. Defaults to Sei mainnet."),
    },
    async ({ to, value, data, network = DEFAULT_NETWORK }) => {
      try {
        const params: { to: Address; value?: bigint; data?: `0x${string}` } = { to: to as Address };

        if (value) {
          params.value = services.helpers.parseEther(value);
        }

        if (data) {
          params.data = data as `0x${string}`;
        }

        const gas = await services.estimateGas(params, network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  network,
                  estimatedGas: gas.toString(),
                },
                null,
                2,
              ),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error estimating gas: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );
}
