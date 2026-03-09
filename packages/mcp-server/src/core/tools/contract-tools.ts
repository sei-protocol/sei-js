import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Address, Hex, WriteContractParameters } from "viem";
import { z } from "zod";
import { DEFAULT_NETWORK } from "../chains.js";
import * as services from "../services/index.js";

/**
 * Register read-only contract tools
 */
export function registerContractReadTools(server: McpServer) {
  // Read contract
  server.tool(
    "read_contract",
    "Read data from a smart contract by calling a view/pure function. This doesn't modify blockchain state and doesn't require gas or signing.",
    {
      contractAddress: z.string().describe("The address of the smart contract to interact with"),
      abi: z.array(z.any()).describe("The ABI (Application Binary Interface) of the smart contract function, as a JSON array"),
      functionName: z.string().describe("The name of the function to call on the contract (e.g., 'balanceOf')"),
      args: z.array(z.any()).optional().describe("The arguments to pass to the function, as an array (e.g., ['0x1234...'])"),
      network: z.string().optional().describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet') or chain ID. Defaults to Sei mainnet."),
    },
    async ({ contractAddress, abi, functionName, args = [], network = DEFAULT_NETWORK }) => {
      try {
        // Parse ABI if it's a string
        const parsedAbi = typeof abi === "string" ? JSON.parse(abi) : abi;

        const params = {
          address: contractAddress as Address,
          abi: parsedAbi,
          functionName,
          args,
        };

        const result = await services.readContract(params, network);

        return {
          content: [
            {
              type: "text",
              text: services.helpers.formatJson(result),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error reading contract: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );
}

/**
 * Register wallet-dependent contract tools
 */
export function registerContractWriteTools(server: McpServer) {
  // Write to contract
  server.tool(
    "write_contract",
    "Write data to a smart contract by calling a state-changing function. This modifies blockchain state and requires gas payment and transaction signing.",
    {
      contractAddress: z.string().describe("The address of the smart contract to interact with"),
      abi: z.array(z.any()).describe("The ABI (Application Binary Interface) of the smart contract function, as a JSON array"),
      functionName: z.string().describe("The name of the function to call on the contract (e.g., 'transfer')"),
      args: z.array(z.any()).describe("The arguments to pass to the function, as an array (e.g., ['0x1234...', '1000000000000000000'])"),
      network: z.string().optional().describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet') or chain ID. Defaults to Sei mainnet."),
    },
    async ({ contractAddress, abi, functionName, args, network = DEFAULT_NETWORK }) => {
      try {
        // Parse ABI if it's a string
        const parsedAbi = typeof abi === "string" ? JSON.parse(abi) : abi;

        const contractParams = {
          address: contractAddress as Address,
          abi: parsedAbi,
          functionName,
          args,
          chain: null,
          account: null,
        } satisfies WriteContractParameters;

        const txHash = await services.writeContract(contractParams, network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  network,
                  transactionHash: txHash,
                  message: "Contract write transaction sent successfully",
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
              text: `Error writing to contract: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Deploy contract
  server.tool(
    "deploy_contract",
    "Deploy a new smart contract to the blockchain. This creates a new contract instance and returns both the deployment transaction hash and the deployed contract address.",
    {
      bytecode: z.string().describe("The compiled contract bytecode as a hex string (e.g., '0x608060405234801561001057600080fd5b50...')"),
      abi: z.array(z.any()).describe("The contract ABI (Application Binary Interface) as a JSON array, needed for constructor function"),
      args: z
        .array(z.any())
        .optional()
        .describe(
          "The constructor arguments to pass during deployment, as an array (e.g., ['param1', 'param2']). Leave empty if constructor has no parameters.",
        ),
      network: z.string().optional().describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet') or chain ID. Defaults to Sei mainnet."),
    },
    async ({ bytecode, abi, args = [], network = DEFAULT_NETWORK }) => {
      try {
        // Parse ABI if it's a string
        const parsedAbi = typeof abi === "string" ? JSON.parse(abi) : abi;

        // Ensure bytecode is a proper hex string
        const formattedBytecode = bytecode.startsWith("0x") ? (bytecode as Hex) : (`0x${bytecode}` as Hex);

        const result = await services.deployContract(formattedBytecode, parsedAbi, args, network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  success: true,
                  network,
                  contractAddress: result.address,
                  transactionHash: result.transactionHash,
                  message: "Contract deployed successfully",
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
              text: `Error deploying contract: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Check if address is a contract
  server.tool(
    "is_contract",
    "Check if an address is a smart contract or an externally owned account (EOA)",
    {
      address: z.string().describe("The wallet or contract address to check (e.g., '0x1234...')"),
      network: z
        .string()
        .optional()
        .describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet', etc.) or chain ID. Supports all Sei networks. Defaults to Sei mainnet."),
    },
    async ({ address, network = DEFAULT_NETWORK }) => {
      try {
        const isContract = await services.isContract(address, network);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  address,
                  network,
                  isContract,
                  type: isContract ? "Contract" : "Externally Owned Account (EOA)",
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
              text: `Error checking if address is a contract: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    },
  );
}
