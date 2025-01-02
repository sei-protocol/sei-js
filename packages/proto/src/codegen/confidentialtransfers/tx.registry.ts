import { TelescopeGeneratedType } from '../types';
import { Registry } from '@cosmjs/proto-signing';
import { MsgTransfer, MsgInitializeAccount, MsgDeposit, MsgWithdraw, MsgApplyPendingBalance, MsgCloseAccount } from './tx';
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
	['/seiprotocol.seichain.confidentialtransfers.MsgTransfer', MsgTransfer],
	['/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount', MsgInitializeAccount],
	['/seiprotocol.seichain.confidentialtransfers.MsgDeposit', MsgDeposit],
	['/seiprotocol.seichain.confidentialtransfers.MsgWithdraw', MsgWithdraw],
	['/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance', MsgApplyPendingBalance],
	['/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount', MsgCloseAccount]
];
export const load = (protoRegistry: Registry) => {
	registry.forEach(([typeUrl, mod]) => {
		protoRegistry.register(typeUrl, mod);
	});
};
export const MessageComposer = {
	encoded: {
		transfer(value: MsgTransfer) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer',
				value: MsgTransfer.encode(value).finish()
			};
		},
		initializeAccount(value: MsgInitializeAccount) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount',
				value: MsgInitializeAccount.encode(value).finish()
			};
		},
		deposit(value: MsgDeposit) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit',
				value: MsgDeposit.encode(value).finish()
			};
		},
		withdraw(value: MsgWithdraw) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw',
				value: MsgWithdraw.encode(value).finish()
			};
		},
		applyPendingBalance(value: MsgApplyPendingBalance) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance',
				value: MsgApplyPendingBalance.encode(value).finish()
			};
		},
		closeAccount(value: MsgCloseAccount) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount',
				value: MsgCloseAccount.encode(value).finish()
			};
		}
	},
	withTypeUrl: {
		transfer(value: MsgTransfer) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer',
				value
			};
		},
		initializeAccount(value: MsgInitializeAccount) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount',
				value
			};
		},
		deposit(value: MsgDeposit) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit',
				value
			};
		},
		withdraw(value: MsgWithdraw) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw',
				value
			};
		},
		applyPendingBalance(value: MsgApplyPendingBalance) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance',
				value
			};
		},
		closeAccount(value: MsgCloseAccount) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount',
				value
			};
		}
	},
	fromPartial: {
		transfer(value: MsgTransfer) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgTransfer',
				value: MsgTransfer.fromPartial(value)
			};
		},
		initializeAccount(value: MsgInitializeAccount) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgInitializeAccount',
				value: MsgInitializeAccount.fromPartial(value)
			};
		},
		deposit(value: MsgDeposit) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgDeposit',
				value: MsgDeposit.fromPartial(value)
			};
		},
		withdraw(value: MsgWithdraw) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgWithdraw',
				value: MsgWithdraw.fromPartial(value)
			};
		},
		applyPendingBalance(value: MsgApplyPendingBalance) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgApplyPendingBalance',
				value: MsgApplyPendingBalance.fromPartial(value)
			};
		},
		closeAccount(value: MsgCloseAccount) {
			return {
				typeUrl: '/seiprotocol.seichain.confidentialtransfers.MsgCloseAccount',
				value: MsgCloseAccount.fromPartial(value)
			};
		}
	}
};
