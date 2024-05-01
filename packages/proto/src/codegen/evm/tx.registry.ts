import { TelescopeGeneratedType } from '../types';
import { Registry } from '@cosmjs/proto-signing';
import { MsgEVMTransaction, MsgSend, MsgRegisterPointer } from './tx';
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
	['/seiprotocol.seichain.evm.MsgEVMTransaction', MsgEVMTransaction],
	['/seiprotocol.seichain.evm.MsgSend', MsgSend],
	['/seiprotocol.seichain.evm.MsgRegisterPointer', MsgRegisterPointer]
];
export const load = (protoRegistry: Registry) => {
	registry.forEach(([typeUrl, mod]) => {
		protoRegistry.register(typeUrl, mod);
	});
};
export const MessageComposer = {
	encoded: {
		eVMTransaction(value: MsgEVMTransaction) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransaction',
				value: MsgEVMTransaction.encode(value).finish()
			};
		},
		send(value: MsgSend) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgSend',
				value: MsgSend.encode(value).finish()
			};
		},
		registerPointer(value: MsgRegisterPointer) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointer',
				value: MsgRegisterPointer.encode(value).finish()
			};
		}
	},
	withTypeUrl: {
		eVMTransaction(value: MsgEVMTransaction) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransaction',
				value
			};
		},
		send(value: MsgSend) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgSend',
				value
			};
		},
		registerPointer(value: MsgRegisterPointer) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointer',
				value
			};
		}
	},
	fromPartial: {
		eVMTransaction(value: MsgEVMTransaction) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransaction',
				value: MsgEVMTransaction.fromPartial(value)
			};
		},
		send(value: MsgSend) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgSend',
				value: MsgSend.fromPartial(value)
			};
		},
		registerPointer(value: MsgRegisterPointer) {
			return {
				typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointer',
				value: MsgRegisterPointer.fromPartial(value)
			};
		}
	}
};
