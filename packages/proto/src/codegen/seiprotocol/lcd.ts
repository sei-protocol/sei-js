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
			authz: {
				v1beta1: new (await import('../cosmos/authz/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			bank: {
				v1beta1: new (await import('../cosmos/bank/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			base: {
				tendermint: {
					v1beta1: new (await import('../cosmos/base/tendermint/v1beta1/query.lcd')).LCDQueryClient({
						requestClient
					})
				}
			},
			distribution: {
				v1beta1: new (await import('../cosmos/distribution/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			evidence: {
				v1beta1: new (await import('../cosmos/evidence/v1beta1/query.lcd')).LCDQueryClient({
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
			slashing: {
				v1beta1: new (await import('../cosmos/slashing/v1beta1/query.lcd')).LCDQueryClient({
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
		seiprotocol: {
			seichain: {
				epoch: new (await import('../epoch/query.lcd')).LCDQueryClient({
					requestClient
				}),
				evm: new (await import('../evm/query.lcd')).LCDQueryClient({
					requestClient
				}),
				mint: new (await import('../mint/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				}),
				oracle: new (await import('../oracle/query.lcd')).LCDQueryClient({
					requestClient
				}),
				tokenfactory: new (await import('../tokenfactory/query.lcd')).LCDQueryClient({
					requestClient
				})
			}
		}
	};
};
