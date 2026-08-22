import { afterEach, beforeEach, describe, expect, it, jest } from 'bun:test';
import type { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { Address } from 'viem';
import * as chains from '../../core/chains.js';
import { parseBlockNumber, registerEVMResources } from '../../core/resources.js';
import * as services from '../../core/services/index.js';

type ResourceResult = { contents: Array<{ uri: string; text: string }> };
type ResourceHandler = (uri: { href: string }, params?: Record<string, string>) => Promise<ResourceResult>;
type ResourceRegistration = { template: string | ResourceTemplate; handler: ResourceHandler };

// Default spies throw so a new handler dependency fails loudly. That mutates the real
// `chains`/`services` module namespaces, which is only safe because this package's `test`
// script and the root `test:coverage` job both run `bun test --isolate`.
const spyFunctions = (mod: object) => {
	for (const [key, value] of Object.entries(mod)) {
		if (typeof value === 'function') {
			(jest.spyOn(mod as Record<string, CallableFunction>, key) as jest.Mock).mockImplementation(() => {
				throw new Error(`Unmocked function: ${key}`);
			});
		}
	}
};

const ADDRESS = '0x1234567890123456789012345678901234567890' as Address;
const TOKEN = '0x0987654321098765432109876543210987654321' as Address;
const TX_HASH = '0xabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabca';
const BLOCK_HASH = '0xdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefdefd';
const NETWORK = 'sei-testnet';
const RESOURCE_CASES = {
	chain_info_by_network: { uri: 'evm://{network}/chain', params: { network: NETWORK } },
	sei_chain_info: { uri: 'evm://chain', params: {} },
	evm_block_by_number: { uri: 'evm://{network}/block/{blockNumber}', params: { network: NETWORK, blockNumber: '123' } },
	block_by_hash: { uri: 'evm://{network}/block/hash/{blockHash}', params: { network: NETWORK, blockHash: BLOCK_HASH } },
	evm_latest_block: { uri: 'evm://{network}/block/latest', params: { network: NETWORK } },
	default_latest_block: { uri: 'evm://block/latest', params: {} },
	evm_address_native_balance: { uri: 'evm://{network}/address/{address}/balance', params: { network: NETWORK, address: ADDRESS } },
	default_sei_balance: { uri: 'evm://address/{address}/sei-balance', params: { address: ADDRESS } },
	erc20_balance: {
		uri: 'evm://{network}/address/{address}/token/{tokenAddress}/balance',
		params: { network: NETWORK, address: ADDRESS, tokenAddress: TOKEN }
	},
	default_erc20_balance: {
		uri: 'evm://address/{address}/token/{tokenAddress}/balance',
		params: { address: ADDRESS, tokenAddress: TOKEN }
	},
	evm_transaction_details: { uri: 'evm://{network}/tx/{txHash}', params: { network: NETWORK, txHash: TX_HASH } },
	default_transaction_by_hash: { uri: 'evm://tx/{txHash}', params: { txHash: TX_HASH } },
	supported_networks: { uri: 'evm://networks', params: {} },
	erc20_token_details: { uri: 'evm://{network}/token/{tokenAddress}', params: { network: NETWORK, tokenAddress: TOKEN } },
	erc20_token_address_balance: {
		uri: 'evm://{network}/token/{tokenAddress}/balanceOf/{address}',
		params: { network: NETWORK, tokenAddress: TOKEN, address: ADDRESS }
	},
	erc721_nft_token_details: {
		uri: 'evm://{network}/nft/{tokenAddress}/{tokenId}',
		params: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7' }
	},
	erc721_nft_ownership_check: {
		uri: 'evm://{network}/nft/{tokenAddress}/{tokenId}/isOwnedBy/{address}',
		params: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7', address: ADDRESS }
	},
	erc1155_token_metadata_uri: {
		uri: 'evm://{network}/erc1155/{tokenAddress}/{tokenId}/uri',
		params: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7' }
	},
	erc1155_token_address_balance: {
		uri: 'evm://{network}/erc1155/{tokenAddress}/{tokenId}/balanceOf/{address}',
		params: { network: NETWORK, tokenAddress: TOKEN, tokenId: '7', address: ADDRESS }
	}
} satisfies Record<string, { uri: string; params: Record<string, string> }>;
type ResourceName = keyof typeof RESOURCE_CASES;

function createMockResourceServer(): { server: McpServer; registered: Map<string, ResourceRegistration> } {
	const registered = new Map<string, ResourceRegistration>();
	const server = {
		resource: jest.fn((name: string, template: string | ResourceTemplate, handler: ResourceHandler) => {
			registered.set(name, { template, handler });
		})
	} as unknown as McpServer;

	return { server, registered };
}

function textOf(result: ResourceResult): string {
	return result.contents[0].text;
}

function uriOf(template: string | ResourceTemplate): string {
	return typeof template === 'string' ? template : template.uriTemplate.toString();
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
	let registered: Map<string, ResourceRegistration>;

	const invoke = async (name: ResourceName, params: Record<string, string> = RESOURCE_CASES[name].params): Promise<ResourceResult> => {
		const registration = registered.get(name);
		if (!registration) {
			throw new Error(`Resource ${name} was not registered`);
		}
		return registration.handler({ href: `evm://test/${name}` }, params);
	};

	beforeEach(() => {
		spyFunctions(chains);
		spyFunctions(services);

		(chains.getSupportedNetworks as jest.Mock).mockReturnValue(['sei', 'sei-testnet']);
		(chains.normalizeNetwork as jest.Mock).mockImplementation((network: string) => {
			const normalized = network.trim().toLowerCase();
			if (normalized === 'sei' || normalized === '1329' || normalized === '0x531') return 'sei';
			if (normalized === 'sei-testnet' || normalized === '1328' || normalized === '0x530') return 'sei-testnet';
			throw new Error(`Unsupported network: ${network}`);
		});
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
		(services.getERC721Owner as jest.Mock).mockResolvedValue(ADDRESS);
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
		expect([...registered.keys()].sort()).toEqual(Object.keys(RESOURCE_CASES).sort());
	});

	it('registers every EVM resource with its expected URI template', () => {
		for (const [name, { uri }] of Object.entries(RESOURCE_CASES)) {
			const registration = registered.get(name);
			if (!registration) {
				throw new Error(`Resource ${name} was not registered`);
			}
			expect(uriOf(registration.template)).toBe(uri);
		}
	});

	it('returns chain info for a named network', async () => {
		const result = await invoke('chain_info_by_network');
		expect(JSON.parse(textOf(result))).toEqual({
			network: 'sei-testnet',
			chainId: 1329,
			blockNumber: '100'
		});
		expect(services.getChainId).toHaveBeenCalledWith('sei-testnet');
	});

	it.each(['sei-testnet', '1328', '0x530', ' Sei-Testnet ', '0X530'])('normalizes supported testnet selector %s', async (network) => {
		const result = await invoke('chain_info_by_network', { network });
		expect(JSON.parse(textOf(result)).network).toBe('sei-testnet');
		expect(services.getChainId).toHaveBeenCalledWith('sei-testnet');
	});

	it('rejects unknown network selectors without falling back', async () => {
		const result = await invoke('chain_info_by_network', { network: 'unknown-network' });
		expect(textOf(result)).toBe('Error fetching chain info: Unsupported network: unknown-network');
		expect(services.getChainId).not.toHaveBeenCalled();
	});

	it('returns default chain info for Sei mainnet', async () => {
		const result = await invoke('sei_chain_info');
		expect(JSON.parse(textOf(result))).toEqual({
			network: 'sei',
			chainId: 1329,
			blockNumber: '100'
		});
		expect(services.getChainId).toHaveBeenCalledWith('sei');
	});

	it('redacts configured RPC secrets from upstream resource errors', async () => {
		const originalRpcUrl = chains.rpcUrlMap[1328];
		const fakePathSecret = 'fake-path-secret';
		const fakeQuerySecret = 'fake-query-secret';
		const configuredUrl = new URL('https://rpc.example.test');
		configuredUrl.username = 'fake-user';
		configuredUrl.password = 'fake-password';
		configuredUrl.pathname = `/v2/${fakePathSecret}`;
		configuredUrl.searchParams.set('token', fakeQuerySecret);
		chains.rpcUrlMap[1328] = configuredUrl.href;
		(services.getBlockByNumber as jest.Mock).mockRejectedValue(
			new Error(`HTTP request failed. Status: 500. URL: ${chains.rpcUrlMap[1328]}. Details: ${fakeQuerySecret}`)
		);

		try {
			const result = await invoke('evm_block_by_number', { network: '1328', blockNumber: '7' });
			const text = textOf(result);
			expect(text).toContain('Status: 500');
			expect(text).toContain('[redacted');
			expect(text).not.toContain('fake-user');
			expect(text).not.toContain('fake-password');
			expect(text).not.toContain(fakePathSecret);
			expect(text).not.toContain(fakeQuerySecret);
			expect(text).not.toContain('rpc.example.test');
		} finally {
			chains.rpcUrlMap[1328] = originalRpcUrl;
		}
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

	it('returns NFT metadata with its current owner', async () => {
		const result = await invoke('erc721_nft_token_details');
		expect(JSON.parse(textOf(result))).toEqual({
			contract: TOKEN,
			tokenId: '7',
			network: 'sei-testnet',
			name: 'NFT',
			symbol: 'NFTS',
			tokenURI: 'ipfs://nft',
			owner: ADDRESS
		});
		expect(services.getERC721Owner).toHaveBeenCalledWith(TOKEN, 7n, 'sei-testnet');
	});

	it('returns NFT metadata with an unknown owner when owner lookup fails', async () => {
		(services.getERC721Owner as jest.Mock).mockRejectedValue(new Error('owner lookup failed'));
		const result = await invoke('erc721_nft_token_details');
		expect(JSON.parse(textOf(result))).toMatchObject({
			owner: 'Unknown',
			ownerError: 'owner lookup failed'
		});
	});

	it('stringifies non-Error NFT owner lookup failures', async () => {
		(services.getERC721Owner as jest.Mock).mockRejectedValue('owner unavailable');
		const result = await invoke('erc721_nft_token_details');
		expect(JSON.parse(textOf(result)).ownerError).toBe('owner unavailable');
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
		const result = await invoke('evm_block_by_number', { ...RESOURCE_CASES.evm_block_by_number.params, blockNumber: 'abc' });
		expect(textOf(result)).toBe('Error fetching block: Invalid block number: abc');
	});

	it('surfaces invalid token IDs through the ERC-721 error path', async () => {
		const result = await invoke('erc721_nft_token_details', { ...RESOURCE_CASES.erc721_nft_token_details.params, tokenId: 'abc' });
		expect(textOf(result)).toMatch(/^Error fetching NFT info: .*bigint/i);
	});

	it('surfaces invalid token IDs through the ERC-1155 error path', async () => {
		const result = await invoke('erc1155_token_metadata_uri', { ...RESOURCE_CASES.erc1155_token_metadata_uri.params, tokenId: 'abc' });
		expect(textOf(result)).toMatch(/^Error fetching ERC1155 token URI: .*bigint/i);
	});
});
