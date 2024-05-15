import { LCDClient } from '@cosmology/lcd';
export const createLCDClient = async ({ restEndpoint }: { restEndpoint: string }) => {
	const requestClient = new LCDClient({
		restEndpoint
	});
	return {
		cosmos: {
			accesscontrol_x: {
				v1beta1: new (await import('./accesscontrol_x/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			auth: {
				v1beta1: new (await import('./auth/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			bank: {
				v1beta1: new (await import('./bank/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			distribution: {
				v1beta1: new (await import('./distribution/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			feegrant: {
				v1beta1: new (await import('./feegrant/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			gov: {
				v1beta1: new (await import('./gov/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			staking: {
				v1beta1: new (await import('./staking/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			},
			tx: {
				v1beta1: new (await import('./tx/v1beta1/service.lcd')).LCDQueryClient({
					requestClient
				})
			},
			upgrade: {
				v1beta1: new (await import('./upgrade/v1beta1/query.lcd')).LCDQueryClient({
					requestClient
				})
			}
		}
	};
};
