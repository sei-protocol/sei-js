import { MsgTransfer, MsgInitializeAccount, MsgDeposit, MsgWithdraw, MsgApplyPendingBalance, MsgCloseAccount } from './tx';
export const AminoConverter = {
	'/seiprotocol.seichain.confidentialtransfers.MsgTransfer': {
		aminoType: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer',
		toAmino: MsgTransfer.toAmino,
		fromAmino: MsgTransfer.fromAmino
	},
	'/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount': {
		aminoType: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount',
		toAmino: MsgInitializeAccount.toAmino,
		fromAmino: MsgInitializeAccount.fromAmino
	},
	'/seiprotocol.seichain.confidentialtransfers.MsgDeposit': {
		aminoType: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit',
		toAmino: MsgDeposit.toAmino,
		fromAmino: MsgDeposit.fromAmino
	},
	'/seiprotocol.seichain.confidentialtransfers.MsgWithdraw': {
		aminoType: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw',
		toAmino: MsgWithdraw.toAmino,
		fromAmino: MsgWithdraw.fromAmino
	},
	'/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance': {
		aminoType: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance',
		toAmino: MsgApplyPendingBalance.toAmino,
		fromAmino: MsgApplyPendingBalance.fromAmino
	},
	'/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount': {
		aminoType: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount',
		toAmino: MsgCloseAccount.toAmino,
		fromAmino: MsgCloseAccount.fromAmino
	}
};
