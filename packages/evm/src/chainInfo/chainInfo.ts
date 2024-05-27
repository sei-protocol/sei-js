/**
 * The static chain information to be used in various wallet providers, tools, and libraries.
 * @category Chain Constants
 */
export const SEI_CHAIN_INFO = {
	devnet: {
		chainId: 713715,
		defaultRpc: 'https://evm-rpc-arctic-1.sei-apis.com'
	},
	testnet: {
		chainId: 1328,
		defaultRpc: 'https://evm-rpc-testnet.sei-apis.com/'
	},
	mainnet: {
		chainId: 1329,
		defaultRpc: 'https://evm-rpc.sei-apis.com/'
	}
};
