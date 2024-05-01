import { MsgEVMTransaction, MsgSend, MsgRegisterPointer } from './tx';
export const AminoConverter = {
	'/seiprotocol.seichain.evm.MsgEVMTransaction': {
		aminoType: '/seiprotocol.seichain.evm.MsgEVMTransaction',
		toAmino: MsgEVMTransaction.toAmino,
		fromAmino: MsgEVMTransaction.fromAmino
	},
	'/seiprotocol.seichain.evm.MsgSend': {
		aminoType: '/seiprotocol.seichain.evm.MsgSend',
		toAmino: MsgSend.toAmino,
		fromAmino: MsgSend.fromAmino
	},
	'/seiprotocol.seichain.evm.MsgRegisterPointer': {
		aminoType: '/seiprotocol.seichain.evm.MsgRegisterPointer',
		toAmino: MsgRegisterPointer.toAmino,
		fromAmino: MsgRegisterPointer.fromAmino
	}
};
