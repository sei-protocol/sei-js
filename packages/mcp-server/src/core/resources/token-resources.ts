import { type McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Address } from "viem";
import * as services from "../services/index.js";
import { resourceError, resourceResult } from "./helpers.js";

/**
 * Register token-related resources (ERC20 info, NFT, ERC1155)
 */
export function registerTokenResources(server: McpServer) {
  // ERC20 token info resource
  server.resource("erc20_token_details", new ResourceTemplate("evm://{network}/token/{tokenAddress}", { list: undefined }), async (uri, params) => {
    try {
      const network = params.network as string;
      const tokenAddress = params.tokenAddress as Address;

      const tokenInfo = await services.getERC20TokenInfo(tokenAddress, network);

      return resourceResult(uri.href, {
        address: tokenAddress,
        network,
        ...tokenInfo,
      });
    } catch (error) {
      return resourceError(uri.href, "fetching ERC20 token info", error);
    }
  });

  // ERC20 token balance resource
  server.resource(
    "erc20_token_address_balance",
    new ResourceTemplate("evm://{network}/token/{tokenAddress}/balanceOf/{address}", { list: undefined }),
    async (uri, params) => {
      try {
        const network = params.network as string;
        const tokenAddress = params.tokenAddress as Address;
        const address = params.address as Address;

        const balance = await services.getERC20Balance(tokenAddress, address, network);

        return resourceResult(uri.href, {
          tokenAddress,
          owner: address,
          network,
          raw: balance.raw.toString(),
          formatted: balance.formatted,
          symbol: balance.token.symbol,
          decimals: balance.token.decimals,
        });
      } catch (error) {
        return resourceError(uri.href, "fetching ERC20 token balance", error);
      }
    },
  );

  // NFT (ERC721) token info resource
  server.resource(
    "erc721_nft_token_details",
    new ResourceTemplate("evm://{network}/nft/{tokenAddress}/{tokenId}", { list: undefined }),
    async (uri, params) => {
      try {
        const network = params.network as string;
        const tokenAddress = params.tokenAddress as Address;
        const tokenId = BigInt(params.tokenId as string);

        const nftInfo = await services.getERC721TokenMetadata(tokenAddress, tokenId, network);

        // Get owner separately
        let owner = "Unknown";
        try {
          const isOwner = await services.isNFTOwner(tokenAddress, params.address as Address, tokenId, network);
          if (isOwner) {
            owner = params.address as string;
          }
        } catch {
          // Owner info not available
        }

        return resourceResult(uri.href, {
          contract: tokenAddress,
          tokenId: tokenId.toString(),
          network,
          ...nftInfo,
          owner,
        });
      } catch (error) {
        return resourceError(uri.href, "fetching NFT info", error);
      }
    },
  );

  // NFT ownership check resource
  server.resource(
    "erc721_nft_ownership_check",
    new ResourceTemplate("evm://{network}/nft/{tokenAddress}/{tokenId}/isOwnedBy/{address}", { list: undefined }),
    async (uri, params) => {
      try {
        const network = params.network as string;
        const tokenAddress = params.tokenAddress as Address;
        const tokenId = BigInt(params.tokenId as string);
        const address = params.address as Address;

        const isOwner = await services.isNFTOwner(tokenAddress, address, tokenId, network);

        return resourceResult(uri.href, {
          contract: tokenAddress,
          tokenId: tokenId.toString(),
          owner: address,
          network,
          isOwner,
        });
      } catch (error) {
        return resourceError(uri.href, "checking NFT ownership", error);
      }
    },
  );

  // ERC1155 token URI resource
  server.resource(
    "erc1155_token_metadata_uri",
    new ResourceTemplate("evm://{network}/erc1155/{tokenAddress}/{tokenId}/uri", { list: undefined }),
    async (uri, params) => {
      try {
        const network = params.network as string;
        const tokenAddress = params.tokenAddress as Address;
        const tokenId = BigInt(params.tokenId as string);

        const tokenURI = await services.getERC1155TokenURI(tokenAddress, tokenId, network);

        return resourceResult(uri.href, {
          contract: tokenAddress,
          tokenId: tokenId.toString(),
          network,
          uri: tokenURI,
        });
      } catch (error) {
        return resourceError(uri.href, "fetching ERC1155 token URI", error);
      }
    },
  );

  // ERC1155 token balance resource
  server.resource(
    "erc1155_token_address_balance",
    new ResourceTemplate("evm://{network}/erc1155/{tokenAddress}/{tokenId}/balanceOf/{address}", { list: undefined }),
    async (uri, params) => {
      try {
        const network = params.network as string;
        const tokenAddress = params.tokenAddress as Address;
        const tokenId = BigInt(params.tokenId as string);
        const address = params.address as Address;

        const balance = await services.getERC1155Balance(tokenAddress, address, tokenId, network);

        return resourceResult(uri.href, {
          contract: tokenAddress,
          tokenId: tokenId.toString(),
          owner: address,
          network,
          balance: balance.toString(),
        });
      } catch (error) {
        return resourceError(uri.href, "fetching ERC1155 token balance", error);
      }
    },
  );
}
