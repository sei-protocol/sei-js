import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Address } from "viem";
import { z } from "zod";
import { DEFAULT_NETWORK } from "../chains.js";
import * as services from "../services/index.js";
import { getWalletProvider } from "../wallet/index.js";

/**
 * Register wallet-dependent token, NFT, and wallet address tools
 */
export function registerTokenTools(server: McpServer) {
  // Get ERC20 token information
  server.tool(
    "get_token_info",
    "Get comprehensive information about an ERC20 token including name, symbol, decimals, total supply, and other metadata. Use this to analyze any token on EVM chains.",
    {
      tokenAddress: z.string().describe("The contract address of the ERC20 token (e.g., '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')"),
      network: z.string().optional().describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet') or chain ID. Defaults to Sei mainnet."),
    },
    async ({ tokenAddress, network = DEFAULT_NETWORK }) => {
      try {
        const tokenInfo = await services.getERC20TokenInfo(tokenAddress as Address, network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  address: tokenAddress,
                  network,
                  ...tokenInfo,
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
              text: `Error fetching token info: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Get NFT (ERC721) information
  server.tool(
    "get_nft_info",
    "Get detailed information about a specific NFT (ERC721 token), including collection name, symbol, token URI, and current owner if available.",
    {
      tokenAddress: z.string().describe("The contract address of the NFT collection (e.g., '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D')"),
      tokenId: z.string().describe("The ID of the specific NFT token to query (e.g., '1234')"),
      network: z.string().optional().describe("Network name (e.g., 'sei', ) or chain ID. Most NFTs are on Sei mainnet, which is the default."),
    },
    async ({ tokenAddress, tokenId, network = DEFAULT_NETWORK }) => {
      try {
        const nftInfo = await services.getERC721TokenMetadata(tokenAddress as Address, BigInt(tokenId), network);

        // Check ownership separately
        let owner: `0x${string}` | null = null;
        try {
          // This may fail if tokenId doesn't exist
          owner = await services.getPublicClient(network).readContract({
            address: tokenAddress as Address,
            abi: [
              {
                inputs: [{ type: "uint256" }],
                name: "ownerOf",
                outputs: [{ type: "address" }],
                stateMutability: "view",
                type: "function",
              },
            ],
            functionName: "ownerOf",
            args: [BigInt(tokenId)],
          });
        } catch {
          // Ownership info not available
        }

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  contract: tokenAddress,
                  tokenId,
                  network,
                  ...nftInfo,
                  owner: owner || "Unknown",
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
              text: `Error fetching NFT info: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Check NFT ownership
  server.tool(
    "check_nft_ownership",
    "Check if an address owns a specific NFT",
    {
      tokenAddress: z.string().describe("The contract address of the NFT collection (e.g., '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D')"),
      tokenId: z.string().describe("The ID of the NFT to check (e.g., '1234')"),
      ownerAddress: z.string().describe("The wallet address to check ownership against (e.g., '0x1234...')"),
      network: z
        .string()
        .optional()
        .describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet' etc.) or chain ID. Supports all Sei networks. Defaults to Sei mainnet."),
    },
    async ({ tokenAddress, tokenId, ownerAddress, network = DEFAULT_NETWORK }) => {
      try {
        const isOwner = await services.isNFTOwner(tokenAddress, ownerAddress, BigInt(tokenId), network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  tokenAddress,
                  tokenId,
                  ownerAddress,
                  network,
                  isOwner,
                  result: isOwner ? "Address owns this NFT" : "Address does not own this NFT",
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
              text: `Error checking NFT ownership: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Add tool for getting ERC1155 token URI
  server.tool(
    "get_erc1155_token_uri",
    "Get the metadata URI for an ERC1155 token (multi-token standard used for both fungible and non-fungible tokens). The URI typically points to JSON metadata about the token.",
    {
      tokenAddress: z.string().describe("The contract address of the ERC1155 token collection (e.g., '0x5B6D32f2B55b62da7a8cd553857EB6Dc26bFDC63')"),
      tokenId: z.string().describe("The ID of the specific token to query metadata for (e.g., '1234')"),
      network: z
        .string()
        .optional()
        .describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet') or chain ID. ERC1155 tokens exist across many networks. Defaults to Sei mainnet."),
    },
    async ({ tokenAddress, tokenId, network = DEFAULT_NETWORK }) => {
      try {
        const uri = await services.getERC1155TokenURI(tokenAddress as Address, BigInt(tokenId), network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  contract: tokenAddress,
                  tokenId,
                  network,
                  uri,
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
              text: `Error fetching ERC1155 token URI: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Add tool for getting ERC721 NFT balance
  server.tool(
    "get_nft_balance",
    "Get the total number of NFTs owned by an address from a specific collection. This returns the count of NFTs, not individual token IDs.",
    {
      tokenAddress: z.string().describe("The contract address of the NFT collection (e.g., '0x5B6D32f2B55b62da7a8cd553857EB6Dc26bFDC63')"),
      ownerAddress: z.string().describe("The wallet address to check the NFT balance for (e.g., '0x1234...')"),
      network: z
        .string()
        .optional()
        .describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet') or chain ID. Most NFTs are on Sei mainnet, which is the default."),
    },
    async ({ tokenAddress, ownerAddress, network = DEFAULT_NETWORK }) => {
      try {
        const balance = await services.getERC721Balance(tokenAddress as Address, ownerAddress as Address, network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  collection: tokenAddress,
                  owner: ownerAddress,
                  network,
                  balance: balance.toString(),
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
              text: `Error fetching NFT balance: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Add tool for getting ERC1155 token balance
  server.tool(
    "get_erc1155_balance",
    "Get the balance of a specific ERC1155 token ID owned by an address. ERC1155 allows multiple tokens of the same ID, so the balance can be greater than 1.",
    {
      tokenAddress: z.string().describe("The contract address of the ERC1155 token collection (e.g., '0x5B6D32f2B55b62da7a8cd553857EB6Dc26bFDC63')"),
      tokenId: z.string().describe("The ID of the specific token to check the balance for (e.g., '1234')"),
      ownerAddress: z.string().describe("The wallet address to check the token balance for (e.g., '0x1234...')"),
      network: z
        .string()
        .optional()
        .describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet') or chain ID. ERC1155 tokens exist across many networks. Defaults to Sei mainnet."),
    },
    async ({ tokenAddress, tokenId, ownerAddress, network = DEFAULT_NETWORK }) => {
      try {
        const balance = await services.getERC1155Balance(tokenAddress as Address, ownerAddress as Address, BigInt(tokenId), network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  contract: tokenAddress,
                  tokenId,
                  owner: ownerAddress,
                  network,
                  balance: balance.toString(),
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
              text: `Error fetching ERC1155 token balance: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // WALLET TOOLS

  // Get address from private key
  server.tool(
    "get_address_from_private_key",
    "Get the EVM address derived from a private key",
    {}, // Schema is empty as privateKey parameter was removed
    async () => {
      // Handler function starts here
      try {
        const walletProvider = getWalletProvider();
        if (!walletProvider.isAvailable()) {
          return {
            content: [
              {
                type: "text",
                text: `Error: Wallet provider '${walletProvider.getName()}' is not available. Please configure the wallet provider and restart the MCP server.`,
              },
            ],
            isError: true,
          };
        }

        const address = await services.getAddressFromProvider();

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  address,
                  // Do not return the private key in the response.
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
              text: `Error deriving address from private key: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );
}
