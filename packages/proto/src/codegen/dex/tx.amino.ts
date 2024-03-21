import {
	MsgPlaceOrders,
	MsgCancelOrders,
	MsgRegisterContract,
	MsgContractDepositRent,
	MsgUnregisterContract,
	MsgRegisterPairs,
	MsgUpdatePriceTickSize,
	MsgUpdateQuantityTickSize,
	MsgUnsuspendContract
} from './tx';
export const AminoConverter = {
	'/seiprotocol.seichain.dex.MsgPlaceOrders': {
		aminoType: '/seiprotocol.seichain.dex.MsgPlaceOrders',
		toAmino: MsgPlaceOrders.toAmino,
		fromAmino: MsgPlaceOrders.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgCancelOrders': {
		aminoType: '/seiprotocol.seichain.dex.MsgCancelOrders',
		toAmino: MsgCancelOrders.toAmino,
		fromAmino: MsgCancelOrders.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgRegisterContract': {
		aminoType: '/seiprotocol.seichain.dex.MsgRegisterContract',
		toAmino: MsgRegisterContract.toAmino,
		fromAmino: MsgRegisterContract.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgContractDepositRent': {
		aminoType: '/seiprotocol.seichain.dex.MsgContractDepositRent',
		toAmino: MsgContractDepositRent.toAmino,
		fromAmino: MsgContractDepositRent.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgUnregisterContract': {
		aminoType: '/seiprotocol.seichain.dex.MsgUnregisterContract',
		toAmino: MsgUnregisterContract.toAmino,
		fromAmino: MsgUnregisterContract.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgRegisterPairs': {
		aminoType: '/seiprotocol.seichain.dex.MsgRegisterPairs',
		toAmino: MsgRegisterPairs.toAmino,
		fromAmino: MsgRegisterPairs.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgUpdatePriceTickSize': {
		aminoType: '/seiprotocol.seichain.dex.MsgUpdatePriceTickSize',
		toAmino: MsgUpdatePriceTickSize.toAmino,
		fromAmino: MsgUpdatePriceTickSize.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize': {
		aminoType: '/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize',
		toAmino: MsgUpdateQuantityTickSize.toAmino,
		fromAmino: MsgUpdateQuantityTickSize.fromAmino
	},
	'/seiprotocol.seichain.dex.MsgUnsuspendContract': {
		aminoType: '/seiprotocol.seichain.dex.MsgUnsuspendContract',
		toAmino: MsgUnsuspendContract.toAmino,
		fromAmino: MsgUnsuspendContract.fromAmino
	}
};
