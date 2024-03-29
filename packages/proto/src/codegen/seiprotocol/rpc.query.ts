import { Tendermint34Client, HttpEndpoint } from '@cosmjs/tendermint-rpc';
import { QueryClient } from '@cosmjs/stargate';
export const createRPCQueryClient = async ({ rpcEndpoint }: { rpcEndpoint: string | HttpEndpoint }) => {
	const tmClient = await Tendermint34Client.connect(rpcEndpoint);
	const client = new QueryClient(tmClient);
	return {
		cosmos: {
			auth: {
				v1beta1: (await import('../cosmos/auth/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
			},
			bank: {
				v1beta1: (await import('../cosmos/bank/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
			},
			distribution: {
				v1beta1: (await import('../cosmos/distribution/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
			},
			gov: {
				v1beta1: (await import('../cosmos/gov/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
			},
			staking: {
				v1beta1: (await import('../cosmos/staking/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
			},
			tx: {
				v1beta1: (await import('../cosmos/tx/v1beta1/service.rpc.Service')).createRpcQueryExtension(client)
			},
			upgrade: {
				v1beta1: (await import('../cosmos/upgrade/v1beta1/query.rpc.Query')).createRpcQueryExtension(client)
			}
		},
		seiprotocol: {
			seichain: {
				dex: (await import('../dex/query.rpc.Query')).createRpcQueryExtension(client),
				epoch: (await import('../epoch/query.rpc.Query')).createRpcQueryExtension(client),
				mint: (await import('../mint/v1beta1/query.rpc.Query')).createRpcQueryExtension(client),
				oracle: (await import('../oracle/query.rpc.Query')).createRpcQueryExtension(client),
				tokenfactory: (await import('../tokenfactory/query.rpc.Query')).createRpcQueryExtension(client)
			}
		}
	};
};
