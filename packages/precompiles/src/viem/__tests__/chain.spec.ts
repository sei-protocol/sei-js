import { sei as viemSei, seiTestnet as viemSeiTestnet } from 'viem/chains';
import * as packageRoot from '../../index';
import { sei, seiLocal, seiTestnet } from '../chain';
import * as viemEntryPoint from '../index';

describe('Sei chain definitions', () => {
	it('re-exports Viem Sei mainnet', () => {
		expect(sei).toBe(viemSei);
		expect(sei.id).toBe(1329);
	});

	it('re-exports Viem Sei testnet', () => {
		expect(seiTestnet).toBe(viemSeiTestnet);
		expect(seiTestnet.id).toBe(1328);
	});

	it('defines Sei local', () => {
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

	it('exports every chain from the public entry points', () => {
		for (const entryPoint of [viemEntryPoint, packageRoot]) {
			expect(entryPoint.sei).toBe(sei);
			expect(entryPoint.seiTestnet).toBe(seiTestnet);
			expect(entryPoint.seiLocal).toBe(seiLocal);
		}
	});
});
