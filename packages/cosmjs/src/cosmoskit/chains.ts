/**
 * A pre-configured chain object for Sei for use with Cosmos Kit.
 * @category Cosmos Kit
 */
export const SEI_BASE_COSMOS_KIT_CHAIN = {
	bech32_config: {
		bech32PrefixAccAddr: 'sei',
		bech32PrefixAccPub: 'seipub',
		bech32PrefixValAddr: 'seivaloper',
		bech32PrefixValPub: 'seivaloperpub',
		bech32PrefixConsAddr: 'seivalcons',
		bech32PrefixConsPub: 'seivalconspub'
	},
	bech32_prefix: 'sei',
	chain_name: 'sei',
	daemon_name: 'seid',
	description: 'Sei is the fastest Layer 1 blockchain, designed to scale with the industry.',
	website: 'https://www.sei.io/',
	fees: {
		fee_tokens: [
			{
				denom: 'usei',
				fixed_min_gas_price: 0.02,
				low_gas_price: 0.02,
				average_gas_price: 0.02,
				high_gas_price: 0.04,
				gas_costs: {
					cosmos_send: 25000,
					ibc_transfer: 50000
				}
			}
		]
	},
	key_algos: ['secp256k1'],
	keywords: ['sei'],
	logo_URIs: {
		png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
		svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
	},
	network_type: 'mainnet',
	node_home: '$HOME/.sei',
	pretty_name: 'Sei',
	slip44: 118,
	status: 'live',
	alternative_slip44s: [60],
	staking: {
		staking_tokens: [{ denom: 'usei' }]
	},
	images: [
		{
			png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png',
			svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg'
		}
	]
};

/**
 * A pre-configured chain object for the pacific-1 network on Sei, for use with Cosmos Kit.
 * @category Cosmos Kit
 */
export const PACIFIC_1_SEI_COSMOS_KIT_CHAIN = {
	...SEI_BASE_COSMOS_KIT_CHAIN,
	apis: {
		rpc: [],
		rest: [],
		grpc: []
	},
	chain_id: 'pacific-1',
	explorers: [
		{
			kind: 'seiscan',
			url: 'https://www.seiscan.app/pacific-1',
			tx_page: 'https://www.seiscan.app/pacific-1/txs/${txHash}',
			account_page: 'https://www.seiscan.app/pacific-1/accounts/${accountAddress}'
		},
		{
			kind: 'ping.pub',
			url: 'https://ping.pub/sei',
			tx_page: 'https://ping.pub/sei/tx/${txHash}',
			account_page: 'https://ping.pub/sei/account/${accountAddress}'
		},
		{
			kind: 'mintscan',
			url: 'https://www.mintscan.io/sei',
			tx_page: 'https://www.mintscan.io/sei/transactions/${txHash}',
			account_page: 'https://www.mintscan.io/sei/accounts/${accountAddress}'
		}
	],
	peers: {
		seeds: [],
		persistent_peers: []
	}
};

/**
 * A pre-configured chain object for the atlantic-2 network on Sei, for use with Cosmos Kit.
 * @category Cosmos Kit
 */
export const ATLANTIC_2_SEI_COSMOS_KIT_CHAIN = {
	...SEI_BASE_COSMOS_KIT_CHAIN,
	apis: {
		rpc: [],
		rest: [],
		grpc: []
	},
	chain_id: 'atlantic-2',
	explorers: [
		{
			kind: 'seiscan',
			url: 'https://www.seiscan.app/atlantic-2',
			tx_page: 'https://www.seiscan.app/atlantic-2/txs/${txHash}',
			account_page: 'https://www.seiscan.app/atlantic-2/accounts/${accountAddress}'
		}
	],
	peers: {
		seeds: [],
		persistent_peers: []
	}
};

/**
 * A pre-configured chain object for the arctic-1 network on Sei, for use with Cosmos Kit.
 * @category Cosmos Kit
 */
export const ARCTIC_1_SEI_COSMOS_KIT_CHAIN = {
	...SEI_BASE_COSMOS_KIT_CHAIN,
	apis: {
		rpc: [],
		rest: [],
		grpc: []
	},
	chain_id: 'arctic-1',
	explorers: [
		{
			kind: 'seiscan',
			url: 'https://seitrace.com',
			tx_page: 'https://seitrace.com/tx/${txHash}',
			account_page: 'https://seitrace.com/address/${accountAddress}'
		}
	],
	peers: {
		seeds: [],
		persistent_peers: []
	}
};
