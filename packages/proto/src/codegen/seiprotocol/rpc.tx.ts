import { Rpc } from '../helpers';
export const createRPCMsgClient = async ({ rpc }: { rpc: Rpc }) => ({
	cosmos: {
		bank: {
			v1beta1: new (await import('../cosmos/bank/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		distribution: {
			v1beta1: new (await import('../cosmos/distribution/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		gov: {
			v1beta1: new (await import('../cosmos/gov/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		staking: {
			v1beta1: new (await import('../cosmos/staking/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		upgrade: {
			v1beta1: new (await import('../cosmos/upgrade/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		}
	},
	seiprotocol: {
		seichain: {
			dex: new (await import('../dex/tx.rpc.msg')).MsgClientImpl(rpc),
			evm: new (await import('../evm/tx.rpc.msg')).MsgClientImpl(rpc),
			oracle: new (await import('../oracle/tx.rpc.msg')).MsgClientImpl(rpc),
			tokenfactory: new (await import('../tokenfactory/tx.rpc.msg')).MsgClientImpl(rpc)
		}
	}
});
