import { sei as viemSei, seiTestnet as viemSeiTestnet } from 'viem/chains';
import * as packageRoot from '../../index';
import { sei, seiDevnet, seiLocal, seiTestnet } from '../chain';
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

	it('defines Sei devnet', () => {
		expect(seiDevnet).toMatchObject({
			id: 713715,
			name: 'Sei Devnet',
			nativeCurrency: {
				name: 'Sei',
				symbol: 'SEI',
				decimals: 18
			},
			rpcUrls: {
				default: {
					http: ['https://evm-rpc-arctic-1.sei-apis.com'],
					webSocket: ['wss://evm-ws-arctic-1.sei-apis.com']
				}
			},
			testnet: true
		});
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
			expect(entryPoint.seiDevnet).toBe(seiDevnet);
			expect(entryPoint.seiLocal).toBe(seiLocal);
		}
	});
});
