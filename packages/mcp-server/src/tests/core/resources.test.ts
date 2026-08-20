import { afterEach, beforeEach, describe, expect, it, jest } from 'bun:test';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { Address } from 'viem';
import * as chains from '../../core/chains.js';
import { parseBlockNumber, registerEVMResources } from '../../core/resources.js';
import * as services from '../../core/services/index.js';

type ResourceResult = { contents: Array<{ uri: string; text: string }> };
type ResourceHandler = (uri: { href: string }, params?: Record<string, string>) => Promise<ResourceResult>;

const spyFunctions = (mod: object) => {
	for (const [key, value] of Object.entries(mod)) {
		if (typeof value === 'function') {
			(jest.spyOn(mod as Record<string, CallableFunction>, key) as jest.Mock).mockImplementation(() => undefined);
		}
	}
};

const ADDRESS = '0x1234567890123456789012345678901234567890' as Address;
const TOKEN = '0x0987654321098765432109876543210987654321' as Address;
const TX_HASH = '0xabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca';
const BLOCK_HASH = '0xdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefd';
const NETWORK = 'sei-testnet';
const RESOURCE_PARAMS = {
	chain_info_by_network: { network: NETWORK },
	sei_chain_info: {},
	evm_block_by_number: { network: NETWORK, blockNumber: '123' },
	block_by_hash: { network: NETWORK, blockHash: BLOCK_HASH },
	evm_latest_block: { network: NETWORK },
	default_latest_block: {},
	evm_address_native_balance: { network: NETWORK, address: ADDRESS },
	default_sei_balance: { address: ADDRESS },
	erc20_balance: { network: NETWORK, address: ADDRESS, tokenAddress: TOKEN },
	default_erc20_balance: { address: ADDRESS, tokenAddress: TOKEN },
	evm_transaction_details: { network: NETWORK, txHash: TX_HASH },
	default_transaction_by_hash: { txHash: TX_HASH },
	supported_networks: {},
	erc20_token_details: { network: NETWORK, tokenAddress: TOKEN },
	erc20_token_address_balance: { network: NETWORK, tokenAddress: TOKEN, address: ADDRESS },
	erc721_nft_token_details: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7' },
	erc721_nft_ownership_check: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7', address: ADDRESS },
	erc1155_token_metadata_uri: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7' },
	erc1155_token_address_balance: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7', address: ADDRESS }
} satisfies Record<string, Record<string, string>>;
type ResourceName = keyof typeof RESOURCE_PARAMS;

function createMockResourceServer(): { server: McpServer; registered: Map<string, ResourceHandler> } {
	const registered = new Map<string, ResourceHandler>();
	const server = {
		resource: jest.fn((name: string, _template: unknown, handler: ResourceHandler) => {
			registered.set(name, handler);
		})
	} as unknown as McpServer;

	return { server, registered };
}

function textOf(result: ResourceResult): string {
	return result.contents[0].text;
}

describe('parseBlockNumber', () => {
	it('accepts decimal and hexadecimal block numbers', () => {
		expect(parseBlockNumber('6699')).toBe(6699);
		expect(parseBlockNumber('0x1a2b')).toBe(6699);
	});

	it.each(['', '   ', '1e3', 'abc', '-1', '1.5', '9007199254740992'])('rejects invalid block number %s', (value) => {
		expect(() => parseBlockNumber(value)).toThrow(`Invalid block number: ${value}`);
	});
});

describe('registerEVMResources', () => {
	let registered: Map<string, ResourceHandler>;

	const invoke = async (name: ResourceName, params: Record<string, string> = RESOURCE_PARAMS[name]): Promise<ResourceResult> => {
		const handler = registered.get(name);
		if (!handler) {
			throw new Error(`Resource ${name} was not registered`);
		}
		return handler({ href: `evm://test/${name}` }, params);
	};

	beforeEach(() => {
		spyFunctions(chains);
		spyFunctions(services);

		(chains.getRpcUrl as jest.Mock).mockReturnValue('https://rpc.sei.io');
		(chains.getSupportedNetworks as jest.Mock).mockReturnValue(['sei', 'sei-testnet']);
		(services.getChainId as jest.Mock).mockResolvedValue(1329);
		(services.getBlockNumber as jest.Mock).mockResolvedValue(100n);
		(services.getBlockByNumber as jest.Mock).mockResolvedValue({ number: 123n });
		(services.getBlockByHash as jest.Mock).mockResolvedValue({ hash: BLOCK_HASH, number: 123n });
		(services.getLatestBlock as jest.Mock).mockResolvedValue({ number: 999n });
		(services.getBalance as jest.Mock).mockResolvedValue({ wei: 1n, sei: '0.000000000000000001' });
		(services.getERC20Balance as jest.Mock).mockResolvedValue({
			raw: 1000n,
			formatted: '1.0',
			token: { symbol: 'TEST', decimals: 18 }
		});
		(services.getTransaction as jest.Mock).mockResolvedValue({ hash: TX_HASH, blockNumber: 123n });
		(services.getERC20TokenInfo as jest.Mock).mockResolvedValue({
			name: 'Test',
			symbol: 'TEST',
			decimals: 18,
			totalSupply: '1000',
			formattedTotalSupply: '1000'
		});
		(services.getERC721TokenMetadata as jest.Mock).mockResolvedValue({
			name: 'NFT',
			symbol: 'NFTS',
			tokenURI: 'ipfs://nft'
		});
		(services.isNFTOwner as jest.Mock).mockResolvedValue(false);
		(services.getERC1155TokenURI as jest.Mock).mockResolvedValue('ipfs://1155');
		(services.getERC1155Balance as jest.Mock).mockResolvedValue(5n);

		const mockServer = createMockResourceServer();
		registerEVMResources(mockServer.server);
		registered = mockServer.registered;
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('registers every EVM resource', () => {
		expect([...registered.keys()]).toEqual([
			'chain_info_by_network',
			'sei_chain_info',
			'evm_block_by_number',
			'block_by_hash',
			'evm_latest_block',
			'default_latest_block',
			'evm_address_native_balance',
			'default_sei_balance',
			'erc20_balance',
			'default_erc20_balance',
			'evm_transaction_details',
			'default_transaction_by_hash',
			'supported_networks',
			'erc20_token_details',
			'erc20_token_address_balance',
			'erc721_nft_token_details',
			'erc721_nft_ownership_check',
			'erc1155_token_metadata_uri',
			'erc1155_token_address_balance'
		]);
	});

	it('returns chain info for a named network', async () => {
		const result = await invoke('chain_info_by_network');
		expect(JSON.parse(textOf(result))).toEqual({
			network: 'sei-testnet',
			chainId: 1329,
			blockNumber: '100',
			rpcUrl: 'https://rpc.sei.io'
		});
		expect(services.getChainId).toHaveBeenCalledWith('sei-testnet');
	});

	it('returns default chain info for Sei mainnet', async () => {
		const result = await invoke('sei_chain_info');
		expect(JSON.parse(textOf(result))).toEqual({
			network: 'sei',
			chainId: 1329,
			blockNumber: '100',
			rpcUrl: 'https://rpc.sei.io'
		});
		expect(services.getChainId).toHaveBeenCalledWith('sei');
	});

	it('returns a block by number', async () => {
		const result = await invoke('evm_block_by_number');
		expect(JSON.parse(textOf(result))).toEqual({ number: '123' });
		expect(services.getBlockByNumber).toHaveBeenCalledWith(123, 'sei-testnet');
	});

	it('returns a block by hash', async () => {
		const result = await invoke('block_by_hash');
		expect(JSON.parse(textOf(result))).toEqual({ hash: BLOCK_HASH, number: '123' });
		expect(services.getBlockByHash).toHaveBeenCalledWith(BLOCK_HASH, 'sei-testnet');
	});

	it('returns the latest block for a named network', async () => {
		const result = await invoke('evm_latest_block');
		expect(JSON.parse(textOf(result))).toEqual({ number: '999' });
		expect(services.getLatestBlock).toHaveBeenCalledWith('sei-testnet');
	});

	it('returns the default latest block', async () => {
		const result = await invoke('default_latest_block');
		expect(JSON.parse(textOf(result))).toEqual({ number: '999' });
		expect(services.getLatestBlock).toHaveBeenCalledWith('sei');
	});

	it('returns a native balance for a named network', async () => {
		const result = await invoke('evm_address_native_balance');
		expect(JSON.parse(textOf(result))).toEqual({
			network: 'sei-testnet',
			address: ADDRESS,
			balance: { wei: '1', ether: '0.000000000000000001' }
		});
	});

	it('returns the default native balance', async () => {
		const result = await invoke('default_sei_balance');
		expect(JSON.parse(textOf(result)).network).toBe('sei');
		expect(services.getBalance).toHaveBeenCalledWith(ADDRESS, 'sei');
	});

	it('returns an ERC20 balance for a named network', async () => {
		const result = await invoke('erc20_balance');
		expect(JSON.parse(textOf(result))).toEqual({
			network: 'sei-testnet',
			address: ADDRESS,
			tokenAddress: TOKEN,
			balance: { raw: '1000', formatted: '1.0', decimals: 18 }
		});
	});

	it('returns the default ERC20 balance', async () => {
		const result = await invoke('default_erc20_balance');
		expect(JSON.parse(textOf(result)).network).toBe('sei');
		expect(services.getERC20Balance).toHaveBeenCalledWith(TOKEN, ADDRESS, 'sei');
	});

	it('returns a transaction for a named network', async () => {
		const result = await invoke('evm_transaction_details');
		expect(JSON.parse(textOf(result))).toEqual({ hash: TX_HASH, blockNumber: '123' });
		expect(services.getTransaction).toHaveBeenCalledWith(TX_HASH, 'sei-testnet');
	});

	it('returns the default transaction', async () => {
		const result = await invoke('default_transaction_by_hash');
		expect(services.getTransaction).toHaveBeenCalledWith(TX_HASH, 'sei');
		expect(JSON.parse(textOf(result))).toEqual({ hash: TX_HASH, blockNumber: '123' });
	});

	it('lists supported networks', async () => {
		const result = await invoke('supported_networks');
		expect(JSON.parse(textOf(result))).toEqual({ supportedNetworks: ['sei', 'sei-testnet'] });
	});

	it('returns ERC20 token details', async () => {
		const result = await invoke('erc20_token_details');
		expect(JSON.parse(textOf(result))).toEqual({
			address: TOKEN,
			network: 'sei-testnet',
			name: 'Test',
			symbol: 'TEST',
			decimals: 18,
			totalSupply: '1000',
			formattedTotalSupply: '1000'
		});
	});

	it('returns an ERC20 balanceOf resource', async () => {
		const result = await invoke('erc20_token_address_balance');
		expect(JSON.parse(textOf(result))).toEqual({
			tokenAddress: TOKEN,
			owner: ADDRESS,
			network: 'sei-testnet',
			raw: '1000',
			formatted: '1.0',
			symbol: 'TEST',
			decimals: 18
		});
	});

	it('returns NFT metadata with unknown owner because the resource template has no address parameter', async () => {
		const result = await invoke('erc721_nft_token_details');
		expect(JSON.parse(textOf(result))).toEqual({
			contract: TOKEN,
			tokenId: '7',
			network: 'sei-testnet',
			name: 'NFT',
			symbol: 'NFTS',
			tokenURI: 'ipfs://nft',
			owner: 'Unknown'
		});
	});

	it('checks NFT ownership', async () => {
		(services.isNFTOwner as jest.Mock).mockResolvedValue(true);
		const result = await invoke('erc721_nft_ownership_check');
		expect(JSON.parse(textOf(result))).toEqual({
			contract: TOKEN,
			tokenId: '7',
			owner: ADDRESS,
			network: 'sei-testnet',
			isOwner: true
		});
	});

	it('returns an ERC1155 token URI', async () => {
		const result = await invoke('erc1155_token_metadata_uri');
		expect(JSON.parse(textOf(result))).toEqual({
			contract: TOKEN,
			tokenId: '7',
			network: 'sei-testnet',
			uri: 'ipfs://1155'
		});
	});

	it('returns an ERC1155 balance', async () => {
		const result = await invoke('erc1155_token_address_balance');
		expect(JSON.parse(textOf(result))).toEqual({
			contract: TOKEN,
			tokenId: '7',
			owner: ADDRESS,
			network: 'sei-testnet',
			balance: '5'
		});
	});

	const errorCases: [ResourceName, () => jest.Mock, string, 'async' | 'sync'][] = [
		['chain_info_by_network', () => services.getChainId as jest.Mock, 'Error fetching chain info', 'async'],
		['sei_chain_info', () => services.getChainId as jest.Mock, 'Error fetching chain info', 'async'],
		['evm_block_by_number', () => services.getBlockByNumber as jest.Mock, 'Error fetching block', 'async'],
		['block_by_hash', () => services.getBlockByHash as jest.Mock, 'Error fetching block with hash', 'async'],
		['evm_latest_block', () => services.getLatestBlock as jest.Mock, 'Error fetching latest block', 'async'],
		['default_latest_block', () => services.getLatestBlock as jest.Mock, 'Error fetching latest block', 'async'],
		['evm_address_native_balance', () => services.getBalance as jest.Mock, 'Error fetching Sei balance', 'async'],
		['default_sei_balance', () => services.getBalance as jest.Mock, 'Error fetching Sei balance', 'async'],
		['erc20_balance', () => services.getERC20Balance as jest.Mock, 'Error fetching ERC20 balance', 'async'],
		['default_erc20_balance', () => services.getERC20Balance as jest.Mock, 'Error fetching ERC20 balance', 'async'],
		['evm_transaction_details', () => services.getTransaction as jest.Mock, 'Error fetching transaction', 'async'],
		['default_transaction_by_hash', () => services.getTransaction as jest.Mock, 'Error fetching transaction', 'async'],
		['supported_networks', () => chains.getSupportedNetworks as jest.Mock, 'Error fetching supported networks', 'sync'],
		['erc20_token_details', () => services.getERC20TokenInfo as jest.Mock, 'Error fetching ERC20 token info', 'async'],
		['erc20_token_address_balance', () => services.getERC20Balance as jest.Mock, 'Error fetching ERC20 token balance', 'async'],
		['erc721_nft_token_details', () => services.getERC721TokenMetadata as jest.Mock, 'Error fetching NFT info', 'async'],
		['erc721_nft_ownership_check', () => services.isNFTOwner as jest.Mock, 'Error checking NFT ownership', 'async'],
		['erc1155_token_metadata_uri', () => services.getERC1155TokenURI as jest.Mock, 'Error fetching ERC1155 token URI', 'async'],
		['erc1155_token_address_balance', () => services.getERC1155Balance as jest.Mock, 'Error fetching ERC1155 token balance', 'async']
	];

	it.each(errorCases)('%s returns the Error message', async (name, getMock, prefix, kind) => {
		const fn = getMock();
		if (kind === 'sync') {
			fn.mockImplementation(() => {
				throw new Error('fail');
			});
		} else {
			fn.mockRejectedValue(new Error('fail'));
		}

		const result = await invoke(name);
		expect(textOf(result)).toBe(`${prefix}: fail`);
		expect(result.contents[0].uri).toBe(`evm://test/${name}`);
	});

	it.each(errorCases)('%s stringifies a non-Error rejection', async (name, getMock, prefix, kind) => {
		const fn = getMock();
		if (kind === 'sync') {
			fn.mockImplementation(() => {
				throw 'nope';
			});
		} else {
			fn.mockRejectedValue('nope');
		}

		const result = await invoke(name);
		expect(textOf(result)).toBe(`${prefix}: nope`);
	});

	it('surfaces invalid block numbers through the block-by-number error path', async () => {
		const result = await invoke('evm_block_by_number', { ...RESOURCE_PARAMS.evm_block_by_number, blockNumber: 'abc' });
		expect(textOf(result)).toBe('Error fetching block: Invalid block number: abc');
	});
});
