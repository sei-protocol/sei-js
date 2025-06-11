import { seiLocal } from '../chain';

describe('seiLocal chain', () => {
	it('should be a valid chain definition', () => {
		expect(seiLocal).toMatchObject({
			id: 713714,
			name: 'Sei Local',
			nativeCurrency: {
				name: 'Sei',
				symbol: 'SEI',
				decimals: 18
			},
			rpcUrls: {
				default: {
					http: ['http://localhost:8545']
				}
			}
		});
	});
});
