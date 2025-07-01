import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { DEFAULT_NETWORK } from './chains.js';
import { isWalletEnabled } from './config.js';

/**
 * Register all EVM-related prompts with the MCP server
 * @param server The MCP server instance
 */
export function registerEVMPrompts(server: McpServer) {
	// Register read-only prompts (always available)
	registerReadOnlyPrompts(server);

	// Register wallet-dependent prompts (only if wallet is enabled)
	if (isWalletEnabled()) {
		registerWalletPrompts(server);
	} else {
		console.error('Wallet functionality is disabled. Wallet-dependent prompts will not be available.');
	}
}

/**
 * Register read-only prompts that don't require wallet functionality
 * @param server The MCP server instance
 */
function registerReadOnlyPrompts(server: McpServer) {
	// Basic block explorer prompt
	server.prompt(
		'explore_block',
		'Explore information about a specific block',
		{
			blockNumber: z.string().optional().describe('Block number to explore. If not provided, latest block will be used.'),
			network: z
				.string()
				.optional()
				.describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet' etc.) or chain ID. Supports all Sei networks. Defaults to Sei mainnet.")
		},
		({ blockNumber, network = DEFAULT_NETWORK }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: blockNumber
							? `Please analyze block #${blockNumber} on the ${network} network and provide information about its key metrics, transactions, and significance.`
							: `Please analyze the latest block on the ${network} network and provide information about its key metrics, transactions, and significance.`
					}
				}
			]
		})
	);

	// Transaction analysis prompt
	server.prompt(
		'analyze_transaction',
		'Analyze a specific transaction',
		{
			txHash: z.string().describe('Transaction hash to analyze'),
			network: z
				.string()
				.optional()
				.describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet' etc.) or chain ID. Supports all Sei networks. Defaults to Sei mainnet.")
		},
		({ txHash, network = DEFAULT_NETWORK }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: `Please analyze transaction ${txHash} on the ${network} network and provide a detailed explanation of what this transaction does, who the parties involved are, the amount transferred (if applicable), gas used, and any other relevant information.`
					}
				}
			]
		})
	);



	// Address analysis prompt
	server.prompt(
		'analyze_address',
		'Analyze an EVM address',
		{
			address: z.string().describe('Sei 0x address to analyze'),
			network: z
				.string()
				.optional()
				.describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet' etc.) or chain ID. Supports all Sei networks. Defaults to Sei mainnet.")
		},
		({ address, network = DEFAULT_NETWORK }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: `Please analyze the address ${address} on the ${network} network. Provide information about its balance, transaction count, and any other relevant information you can find.`
					}
				}
			]
		})
	);

	// Smart contract interaction guidance
	server.prompt(
		'interact_with_contract',
		'Get guidance on interacting with a smart contract',
		{
			contractAddress: z.string().describe('The contract address'),
			abiJson: z.string().optional().describe('The contract ABI as a JSON string'),
			network: z.string().optional().describe('Network name or chain ID. Defaults to Sei mainnet.')
		},
		({ contractAddress, abiJson, network = DEFAULT_NETWORK }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: abiJson
							? `I need to interact with the smart contract at address ${contractAddress} on the ${network} network. Here's the ABI:\n\n${abiJson}\n\nPlease analyze this contract's functions and provide guidance on how to interact with it safely. Explain what each function does and what parameters it requires.`
							: `I need to interact with the smart contract at address ${contractAddress} on the ${network} network. Please help me understand what this contract does and how I can interact with it safely.`
					}
				}
			]
		})
	);

	// EVM concept explanation
	server.prompt(
		'explain_evm_concept',
		'Get an explanation of an EVM concept',
		{
			concept: z.string().describe('The EVM concept to explain (e.g., gas, nonce, etc.)')
		},
		({ concept }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: `Please explain the EVM Blockchain concept of "${concept}" in detail. Include how it works, why it's important, and provide examples if applicable.`
					}
				}
			]
		})
	);

	// Network comparison
	server.prompt(
		'compare_networks',
		'Compare Sei networks',
		{
			networkList: z.string().describe("Comma-separated list of networks to compare (e.g., 'sei,sei-testnet,sei-devnet')")
		},
		({ networkList }) => {
			const networks = networkList.split(',').map((n) => n.trim());
			return {
				messages: [
					{
						role: 'user',
						content: {
							type: 'text',
							text: `Please compare the following Sei networks: ${networks.join(', ')}. Include information about their gas fees, transaction speed, security, and any other relevant differences.`
						}
					}
				]
			};
		}
	);

	// Token analysis prompt
	server.prompt(
		'analyze_token',
		'Analyze an ERC20 or NFT token',
		{
			tokenAddress: z.string().describe('Token contract address to analyze'),
			tokenType: z.string().optional().describe('Type of token to analyze (erc20, erc721/nft, or auto-detect). Defaults to auto.'),
			tokenId: z.string().optional().describe('Token ID (required for NFT analysis)'),
			network: z
				.string()
				.optional()
				.describe("Network name (e.g., 'sei', 'sei-testnet', 'sei-devnet', etc.) or chain ID. Supports all Sei networks. Defaults to Sei mainnet.")
		},
		({ tokenAddress, tokenType = 'auto', tokenId, network = DEFAULT_NETWORK }) => {
			let promptText = '';

			if (tokenType === 'erc20' || tokenType === 'auto') {
				promptText = `Please analyze the ERC20 token at address ${tokenAddress} on the ${network} network. Provide information about its name, symbol, total supply, and any other relevant details. If possible, explain the token's purpose, utility, and market context.`;
			} else if ((tokenType === 'erc721' || tokenType === 'nft') && tokenId) {
				promptText = `Please analyze the NFT with token ID ${tokenId} from the collection at address ${tokenAddress} on the ${network} network. Provide information about the collection name, token details, ownership history if available, and any other relevant information about this specific NFT.`;
			} else if (tokenType === 'nft' || tokenType === 'erc721') {
				promptText = `Please analyze the NFT collection at address ${tokenAddress} on the ${network} network. Provide information about the collection name, symbol, total supply if available, floor price if available, and any other relevant details about this NFT collection.`;
			}

			return {
				messages: [
					{
						role: 'user',
						content: {
							type: 'text',
							text: promptText
						}
					}
				]
			};
		}
	);
}

/**
 * Register wallet-dependent prompts that require wallet functionality
 * @param server The MCP server instance
 */
function registerWalletPrompts(server: McpServer) {
	// Get wallet address from private key prompt
	server.prompt('my_wallet_address', 'What is my wallet EVM address', {}, () => ({
		messages: [
			{
				role: 'user',
				content: {
					type: 'text',
					text: 'Please retrieve my wallet EVM address using tools get_address_from_private_key via MCP server.'
				}
			}
		]
	}));

	// Send transaction prompt
	server.prompt(
		'send_transaction_guidance',
		'Get guidance on sending a transaction',
		{
			toAddress: z.string().describe('The recipient address'),
			amount: z.string().describe('The amount to send (in SEI)'),
			network: z.string().optional().describe('Network name or chain ID. Defaults to Sei mainnet.')
		},
		({ toAddress, amount, network = DEFAULT_NETWORK }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: `I want to send ${amount} SEI to ${toAddress} on the ${network} network. Please guide me through this process, including checking my balance first, estimating gas, and executing the transaction safely.`
					}
				}
			]
		})
	);

	// Token transfer guidance
	server.prompt(
		'token_transfer_guidance',
		'Get guidance on transferring tokens',
		{
			tokenAddress: z.string().describe('The token contract address'),
			toAddress: z.string().describe('The recipient address'),
			amount: z.string().describe('The amount to transfer'),
			network: z.string().optional().describe('Network name or chain ID. Defaults to Sei mainnet.')
		},
		({ tokenAddress, toAddress, amount, network = DEFAULT_NETWORK }) => ({
			messages: [
				{
					role: 'user',
					content: {
						type: 'text',
						text: `I want to transfer ${amount} tokens from contract ${tokenAddress} to ${toAddress} on the ${network} network. Please guide me through this process, including checking my balance first, approving the token if needed, and executing the transfer safely.`
					}
				}
			]
		})
	);
}
