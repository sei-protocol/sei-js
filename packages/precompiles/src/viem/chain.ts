import { defineChain } from 'viem';

export const seiLocal = defineChain({
	id: 713715,
	name: 'Sei Local',
	nativeCurrency: { name: 'Sei', symbol: 'SEI', decimals: 18 },
	rpcUrls: {
		default: {
			http: ['http://localhost:8545']
		}
	}
});
