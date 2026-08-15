import { defineChain } from 'viem';

export { sei, seiTestnet } from 'viem/chains';

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
