import { Rpc } from '../helpers';
export const createRPCMsgClient = async ({ rpc }: { rpc: Rpc }) => ({
	cosmos: {
		accesscontrol_x: {
			v1beta1: new (await import('./accesscontrol_x/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		bank: {
			v1beta1: new (await import('./bank/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		distribution: {
			v1beta1: new (await import('./distribution/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		feegrant: {
			v1beta1: new (await import('./feegrant/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		gov: {
			v1beta1: new (await import('./gov/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		staking: {
			v1beta1: new (await import('./staking/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		},
		upgrade: {
			v1beta1: new (await import('./upgrade/v1beta1/tx.rpc.msg')).MsgClientImpl(rpc)
		}
	}
});
