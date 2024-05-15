import { LCDClient } from '@cosmology/lcd';
export const createLCDClient = async ({ restEndpoint }: { restEndpoint: string }) => {
	const requestClient = new LCDClient({
		restEndpoint
	});
	return {
		cosmos: {
			accesscontrol_x: {
				v1beta1: new (await import('../cosmos/accesscontrol_x/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			auth: {
				v1beta1: new (await import('../cosmos/auth/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			bank: {
				v1beta1: new (await import('../cosmos/bank/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			distribution: {
				v1beta1: new (await import('../cosmos/distribution/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			feegrant: {
				v1beta1: new (await import('../cosmos/feegrant/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			gov: {
				v1beta1: new (await import('../cosmos/gov/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			staking: {
				v1beta1: new (await import('../cosmos/staking/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			tx: {
				v1beta1: new (await import('../cosmos/tx/v1beta1/service.lcd')).LCDQueryClient({
					requestClient
				})
			},
			upgrade: {
				v1beta1: new (await import('../cosmos/upgrade/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			}
		},
		cosmwasm: {
			wasm: {
				v1: new (await import('./wasm/v1/query.lcd')).LCDQueryClient({
					requestClient
				})
			}
		}
	};
};
