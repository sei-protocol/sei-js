import { defineChain } from 'viem';

export { sei, seiTestnet } from 'viem/chains';

/**
 * The Viem chain definition for Sei devnet.
 * @category Chain
 */
export const seiDevnet = defineChain({
	id: 713715,
	name: 'Sei Devnet',
	nativeCurrency: { name: 'Sei', symbol: 'SEI', decimals: 18 },
	rpcUrls: {
		default: {
			http: ['https://evm-rpc-arctic-1.sei-apis.com'],
			webSocket: ['wss://evm-ws-arctic-1.sei-apis.com']
		}
	},
	testnet: true
});

/**
 * The Viem chain definition for the Sei local chain.
 * @category Chain
 */
export const seiLocal = defineChain({
	id: 713714,
	name: 'Sei Local',
	nativeCurrency: { name: 'Sei', symbol: 'SEI', decimals: 18 },
	rpcUrls: {
		default: {
			http: ['http://localhost:8545']
		}
	}
});
