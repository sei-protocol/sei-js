import { Any, AnyAmino, AnySDKType } from '../google/protobuf/any';
import { Coin, CoinAmino, CoinSDKType } from '../cosmos/base/v1beta1/coin';
import { PointerType } from './enums';
import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
export interface MsgEVMTransaction {
	data?: Any | undefined;
	derived: Uint8Array;
}
export interface MsgEVMTransactionProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransaction';
	value: Uint8Array;
}
export interface MsgEVMTransactionAmino {
	data?: AnyAmino | undefined;
	derived?: string;
}
export interface MsgEVMTransactionAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgEVMTransaction';
	value: MsgEVMTransactionAmino;
}
export interface MsgEVMTransactionSDKType {
	data?: AnySDKType | undefined;
	derived: Uint8Array;
}
export interface MsgEVMTransactionResponse {
	gasUsed: bigint;
	vmError: string;
	returnData: Uint8Array;
	hash: string;
}
export interface MsgEVMTransactionResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransactionResponse';
	value: Uint8Array;
}
export interface MsgEVMTransactionResponseAmino {
	gas_used?: string;
	vm_error?: string;
	return_data?: string;
	hash?: string;
}
export interface MsgEVMTransactionResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgEVMTransactionResponse';
	value: MsgEVMTransactionResponseAmino;
}
export interface MsgEVMTransactionResponseSDKType {
	gas_used: bigint;
	vm_error: string;
	return_data: Uint8Array;
	hash: string;
}
export interface MsgInternalEVMCall {
	sender: string;
	value: string;
	to: string;
	data: Uint8Array;
}
export interface MsgInternalEVMCallProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMCall';
	value: Uint8Array;
}
export interface MsgInternalEVMCallAmino {
	sender?: string;
	value?: string;
	to?: string;
	data?: string;
}
export interface MsgInternalEVMCallAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgInternalEVMCall';
	value: MsgInternalEVMCallAmino;
}
export interface MsgInternalEVMCallSDKType {
	sender: string;
	value: string;
	to: string;
	data: Uint8Array;
}
export interface MsgInternalEVMCallResponse {}
export interface MsgInternalEVMCallResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMCallResponse';
	value: Uint8Array;
}
export interface MsgInternalEVMCallResponseAmino {}
export interface MsgInternalEVMCallResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgInternalEVMCallResponse';
	value: MsgInternalEVMCallResponseAmino;
}
export interface MsgInternalEVMCallResponseSDKType {}
export interface MsgInternalEVMDelegateCall {
	sender: string;
	codeHash: Uint8Array;
	to: string;
	data: Uint8Array;
	fromContract: string;
}
export interface MsgInternalEVMDelegateCallProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCall';
	value: Uint8Array;
}
export interface MsgInternalEVMDelegateCallAmino {
	sender?: string;
	codeHash?: string;
	to?: string;
	data?: string;
	fromContract?: string;
}
export interface MsgInternalEVMDelegateCallAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCall';
	value: MsgInternalEVMDelegateCallAmino;
}
export interface MsgInternalEVMDelegateCallSDKType {
	sender: string;
	codeHash: Uint8Array;
	to: string;
	data: Uint8Array;
	fromContract: string;
}
export interface MsgInternalEVMDelegateCallResponse {}
export interface MsgInternalEVMDelegateCallResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse';
	value: Uint8Array;
}
export interface MsgInternalEVMDelegateCallResponseAmino {}
export interface MsgInternalEVMDelegateCallResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse';
	value: MsgInternalEVMDelegateCallResponseAmino;
}
export interface MsgInternalEVMDelegateCallResponseSDKType {}
export interface MsgSend {
	fromAddress: string;
	toAddress: string;
	amount: Coin[];
}
export interface MsgSendProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgSend';
	value: Uint8Array;
}
export interface MsgSendAmino {
	from_address?: string;
	to_address?: string;
	amount?: CoinAmino[];
}
export interface MsgSendAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgSend';
	value: MsgSendAmino;
}
export interface MsgSendSDKType {
	from_address: string;
	to_address: string;
	amount: CoinSDKType[];
}
export interface MsgSendResponse {}
export interface MsgSendResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgSendResponse';
	value: Uint8Array;
}
export interface MsgSendResponseAmino {}
export interface MsgSendResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgSendResponse';
	value: MsgSendResponseAmino;
}
export interface MsgSendResponseSDKType {}
export interface MsgRegisterPointer {
	sender: string;
	pointerType: PointerType;
	ercAddress: string;
}
export interface MsgRegisterPointerProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointer';
	value: Uint8Array;
}
export interface MsgRegisterPointerAmino {
	sender?: string;
	pointer_type?: PointerType;
	erc_address?: string;
}
export interface MsgRegisterPointerAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgRegisterPointer';
	value: MsgRegisterPointerAmino;
}
export interface MsgRegisterPointerSDKType {
	sender: string;
	pointer_type: PointerType;
	erc_address: string;
}
export interface MsgRegisterPointerResponse {
	pointerAddress: string;
}
export interface MsgRegisterPointerResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointerResponse';
	value: Uint8Array;
}
export interface MsgRegisterPointerResponseAmino {
	pointer_address?: string;
}
export interface MsgRegisterPointerResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.MsgRegisterPointerResponse';
	value: MsgRegisterPointerResponseAmino;
}
export interface MsgRegisterPointerResponseSDKType {
	pointer_address: string;
}
function createBaseMsgEVMTransaction(): MsgEVMTransaction {
	return {
		data: undefined,
		derived: new Uint8Array()
	};
}
export const MsgEVMTransaction = {
	typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransaction',
	encode(message: MsgEVMTransaction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.data !== undefined) {
			Any.encode(message.data, writer.uint32(10).fork()).ldelim();
		}
		if (message.derived.length !== 0) {
			writer.uint32(18).bytes(message.derived);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgEVMTransaction {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgEVMTransaction();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.data = Any.decode(reader, reader.uint32());
					break;
				case 2:
					message.derived = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgEVMTransaction>): MsgEVMTransaction {
		const message = createBaseMsgEVMTransaction();
		message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
		message.derived = object.derived ?? new Uint8Array();
		return message;
	},
	fromAmino(object: MsgEVMTransactionAmino): MsgEVMTransaction {
		const message = createBaseMsgEVMTransaction();
		if (object.data !== undefined && object.data !== null) {
			message.data = Any.fromAmino(object.data);
		}
		if (object.derived !== undefined && object.derived !== null) {
			message.derived = bytesFromBase64(object.derived);
		}
		return message;
	},
	toAmino(message: MsgEVMTransaction): MsgEVMTransactionAmino {
		const obj: any = {};
		obj.data = message.data ? Any.toAmino(message.data) : undefined;
		obj.derived = message.derived ? base64FromBytes(message.derived) : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgEVMTransactionAminoMsg): MsgEVMTransaction {
		return MsgEVMTransaction.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgEVMTransactionProtoMsg): MsgEVMTransaction {
		return MsgEVMTransaction.decode(message.value);
	},
	toProto(message: MsgEVMTransaction): Uint8Array {
		return MsgEVMTransaction.encode(message).finish();
	},
	toProtoMsg(message: MsgEVMTransaction): MsgEVMTransactionProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransaction',
			value: MsgEVMTransaction.encode(message).finish()
		};
	}
};
function createBaseMsgEVMTransactionResponse(): MsgEVMTransactionResponse {
	return {
		gasUsed: BigInt(0),
		vmError: '',
		returnData: new Uint8Array(),
		hash: ''
	};
}
export const MsgEVMTransactionResponse = {
	typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransactionResponse',
	encode(message: MsgEVMTransactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.gasUsed !== BigInt(0)) {
			writer.uint32(8).uint64(message.gasUsed);
		}
		if (message.vmError !== '') {
			writer.uint32(18).string(message.vmError);
		}
		if (message.returnData.length !== 0) {
			writer.uint32(26).bytes(message.returnData);
		}
		if (message.hash !== '') {
			writer.uint32(34).string(message.hash);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgEVMTransactionResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgEVMTransactionResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.gasUsed = reader.uint64();
					break;
				case 2:
					message.vmError = reader.string();
					break;
				case 3:
					message.returnData = reader.bytes();
					break;
				case 4:
					message.hash = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgEVMTransactionResponse>): MsgEVMTransactionResponse {
		const message = createBaseMsgEVMTransactionResponse();
		message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
		message.vmError = object.vmError ?? '';
		message.returnData = object.returnData ?? new Uint8Array();
		message.hash = object.hash ?? '';
		return message;
	},
	fromAmino(object: MsgEVMTransactionResponseAmino): MsgEVMTransactionResponse {
		const message = createBaseMsgEVMTransactionResponse();
		if (object.gas_used !== undefined && object.gas_used !== null) {
			message.gasUsed = BigInt(object.gas_used);
		}
		if (object.vm_error !== undefined && object.vm_error !== null) {
			message.vmError = object.vm_error;
		}
		if (object.return_data !== undefined && object.return_data !== null) {
			message.returnData = bytesFromBase64(object.return_data);
		}
		if (object.hash !== undefined && object.hash !== null) {
			message.hash = object.hash;
		}
		return message;
	},
	toAmino(message: MsgEVMTransactionResponse): MsgEVMTransactionResponseAmino {
		const obj: any = {};
		obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
		obj.vm_error = message.vmError === '' ? undefined : message.vmError;
		obj.return_data = message.returnData ? base64FromBytes(message.returnData) : undefined;
		obj.hash = message.hash === '' ? undefined : message.hash;
		return obj;
	},
	fromAminoMsg(object: MsgEVMTransactionResponseAminoMsg): MsgEVMTransactionResponse {
		return MsgEVMTransactionResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgEVMTransactionResponseProtoMsg): MsgEVMTransactionResponse {
		return MsgEVMTransactionResponse.decode(message.value);
	},
	toProto(message: MsgEVMTransactionResponse): Uint8Array {
		return MsgEVMTransactionResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgEVMTransactionResponse): MsgEVMTransactionResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgEVMTransactionResponse',
			value: MsgEVMTransactionResponse.encode(message).finish()
		};
	}
};
function createBaseMsgInternalEVMCall(): MsgInternalEVMCall {
	return {
		sender: '',
		value: '',
		to: '',
		data: new Uint8Array()
	};
}
export const MsgInternalEVMCall = {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMCall',
	encode(message: MsgInternalEVMCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.value !== '') {
			writer.uint32(18).string(message.value);
		}
		if (message.to !== '') {
			writer.uint32(26).string(message.to);
		}
		if (message.data.length !== 0) {
			writer.uint32(34).bytes(message.data);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMCall {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInternalEVMCall();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string();
					break;
				case 2:
					message.value = reader.string();
					break;
				case 3:
					message.to = reader.string();
					break;
				case 4:
					message.data = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgInternalEVMCall>): MsgInternalEVMCall {
		const message = createBaseMsgInternalEVMCall();
		message.sender = object.sender ?? '';
		message.value = object.value ?? '';
		message.to = object.to ?? '';
		message.data = object.data ?? new Uint8Array();
		return message;
	},
	fromAmino(object: MsgInternalEVMCallAmino): MsgInternalEVMCall {
		const message = createBaseMsgInternalEVMCall();
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender;
		}
		if (object.value !== undefined && object.value !== null) {
			message.value = object.value;
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		return message;
	},
	toAmino(message: MsgInternalEVMCall): MsgInternalEVMCallAmino {
		const obj: any = {};
		obj.sender = message.sender === '' ? undefined : message.sender;
		obj.value = message.value === '' ? undefined : message.value;
		obj.to = message.to === '' ? undefined : message.to;
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgInternalEVMCallAminoMsg): MsgInternalEVMCall {
		return MsgInternalEVMCall.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgInternalEVMCallProtoMsg): MsgInternalEVMCall {
		return MsgInternalEVMCall.decode(message.value);
	},
	toProto(message: MsgInternalEVMCall): Uint8Array {
		return MsgInternalEVMCall.encode(message).finish();
	},
	toProtoMsg(message: MsgInternalEVMCall): MsgInternalEVMCallProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMCall',
			value: MsgInternalEVMCall.encode(message).finish()
		};
	}
};
function createBaseMsgInternalEVMCallResponse(): MsgInternalEVMCallResponse {
	return {};
}
export const MsgInternalEVMCallResponse = {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMCallResponse',
	encode(_: MsgInternalEVMCallResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMCallResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInternalEVMCallResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(_: Partial<MsgInternalEVMCallResponse>): MsgInternalEVMCallResponse {
		const message = createBaseMsgInternalEVMCallResponse();
		return message;
	},
	fromAmino(_: MsgInternalEVMCallResponseAmino): MsgInternalEVMCallResponse {
		const message = createBaseMsgInternalEVMCallResponse();
		return message;
	},
	toAmino(_: MsgInternalEVMCallResponse): MsgInternalEVMCallResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgInternalEVMCallResponseAminoMsg): MsgInternalEVMCallResponse {
		return MsgInternalEVMCallResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgInternalEVMCallResponseProtoMsg): MsgInternalEVMCallResponse {
		return MsgInternalEVMCallResponse.decode(message.value);
	},
	toProto(message: MsgInternalEVMCallResponse): Uint8Array {
		return MsgInternalEVMCallResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgInternalEVMCallResponse): MsgInternalEVMCallResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMCallResponse',
			value: MsgInternalEVMCallResponse.encode(message).finish()
		};
	}
};
function createBaseMsgInternalEVMDelegateCall(): MsgInternalEVMDelegateCall {
	return {
		sender: '',
		codeHash: new Uint8Array(),
		to: '',
		data: new Uint8Array(),
		fromContract: ''
	};
}
export const MsgInternalEVMDelegateCall = {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCall',
	encode(message: MsgInternalEVMDelegateCall, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.codeHash.length !== 0) {
			writer.uint32(18).bytes(message.codeHash);
		}
		if (message.to !== '') {
			writer.uint32(26).string(message.to);
		}
		if (message.data.length !== 0) {
			writer.uint32(34).bytes(message.data);
		}
		if (message.fromContract !== '') {
			writer.uint32(42).string(message.fromContract);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMDelegateCall {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInternalEVMDelegateCall();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string();
					break;
				case 2:
					message.codeHash = reader.bytes();
					break;
				case 3:
					message.to = reader.string();
					break;
				case 4:
					message.data = reader.bytes();
					break;
				case 5:
					message.fromContract = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgInternalEVMDelegateCall>): MsgInternalEVMDelegateCall {
		const message = createBaseMsgInternalEVMDelegateCall();
		message.sender = object.sender ?? '';
		message.codeHash = object.codeHash ?? new Uint8Array();
		message.to = object.to ?? '';
		message.data = object.data ?? new Uint8Array();
		message.fromContract = object.fromContract ?? '';
		return message;
	},
	fromAmino(object: MsgInternalEVMDelegateCallAmino): MsgInternalEVMDelegateCall {
		const message = createBaseMsgInternalEVMDelegateCall();
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender;
		}
		if (object.codeHash !== undefined && object.codeHash !== null) {
			message.codeHash = bytesFromBase64(object.codeHash);
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		if (object.fromContract !== undefined && object.fromContract !== null) {
			message.fromContract = object.fromContract;
		}
		return message;
	},
	toAmino(message: MsgInternalEVMDelegateCall): MsgInternalEVMDelegateCallAmino {
		const obj: any = {};
		obj.sender = message.sender === '' ? undefined : message.sender;
		obj.codeHash = message.codeHash ? base64FromBytes(message.codeHash) : undefined;
		obj.to = message.to === '' ? undefined : message.to;
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		obj.fromContract = message.fromContract === '' ? undefined : message.fromContract;
		return obj;
	},
	fromAminoMsg(object: MsgInternalEVMDelegateCallAminoMsg): MsgInternalEVMDelegateCall {
		return MsgInternalEVMDelegateCall.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgInternalEVMDelegateCallProtoMsg): MsgInternalEVMDelegateCall {
		return MsgInternalEVMDelegateCall.decode(message.value);
	},
	toProto(message: MsgInternalEVMDelegateCall): Uint8Array {
		return MsgInternalEVMDelegateCall.encode(message).finish();
	},
	toProtoMsg(message: MsgInternalEVMDelegateCall): MsgInternalEVMDelegateCallProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCall',
			value: MsgInternalEVMDelegateCall.encode(message).finish()
		};
	}
};
function createBaseMsgInternalEVMDelegateCallResponse(): MsgInternalEVMDelegateCallResponse {
	return {};
}
export const MsgInternalEVMDelegateCallResponse = {
	typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse',
	encode(_: MsgInternalEVMDelegateCallResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMDelegateCallResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInternalEVMDelegateCallResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(_: Partial<MsgInternalEVMDelegateCallResponse>): MsgInternalEVMDelegateCallResponse {
		const message = createBaseMsgInternalEVMDelegateCallResponse();
		return message;
	},
	fromAmino(_: MsgInternalEVMDelegateCallResponseAmino): MsgInternalEVMDelegateCallResponse {
		const message = createBaseMsgInternalEVMDelegateCallResponse();
		return message;
	},
	toAmino(_: MsgInternalEVMDelegateCallResponse): MsgInternalEVMDelegateCallResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgInternalEVMDelegateCallResponseAminoMsg): MsgInternalEVMDelegateCallResponse {
		return MsgInternalEVMDelegateCallResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgInternalEVMDelegateCallResponseProtoMsg): MsgInternalEVMDelegateCallResponse {
		return MsgInternalEVMDelegateCallResponse.decode(message.value);
	},
	toProto(message: MsgInternalEVMDelegateCallResponse): Uint8Array {
		return MsgInternalEVMDelegateCallResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgInternalEVMDelegateCallResponse): MsgInternalEVMDelegateCallResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse',
			value: MsgInternalEVMDelegateCallResponse.encode(message).finish()
		};
	}
};
function createBaseMsgSend(): MsgSend {
	return {
		fromAddress: '',
		toAddress: '',
		amount: []
	};
}
export const MsgSend = {
	typeUrl: '/seiprotocol.seichain.evm.MsgSend',
	encode(message: MsgSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.toAddress !== '') {
			writer.uint32(18).string(message.toAddress);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSend();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.toAddress = reader.string();
					break;
				case 3:
					message.amount.push(Coin.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgSend>): MsgSend {
		const message = createBaseMsgSend();
		message.fromAddress = object.fromAddress ?? '';
		message.toAddress = object.toAddress ?? '';
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: MsgSendAmino): MsgSend {
		const message = createBaseMsgSend();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.to_address !== undefined && object.to_address !== null) {
			message.toAddress = object.to_address;
		}
		message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: MsgSend): MsgSendAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.to_address = message.toAddress === '' ? undefined : message.toAddress;
		if (message.amount) {
			obj.amount = message.amount.map((e) => (e ? Coin.toAmino(e) : undefined));
		} else {
			obj.amount = message.amount;
		}
		return obj;
	},
	fromAminoMsg(object: MsgSendAminoMsg): MsgSend {
		return MsgSend.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgSendProtoMsg): MsgSend {
		return MsgSend.decode(message.value);
	},
	toProto(message: MsgSend): Uint8Array {
		return MsgSend.encode(message).finish();
	},
	toProtoMsg(message: MsgSend): MsgSendProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgSend',
			value: MsgSend.encode(message).finish()
		};
	}
};
function createBaseMsgSendResponse(): MsgSendResponse {
	return {};
}
export const MsgSendResponse = {
	typeUrl: '/seiprotocol.seichain.evm.MsgSendResponse',
	encode(_: MsgSendResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSendResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse {
		const message = createBaseMsgSendResponse();
		return message;
	},
	fromAmino(_: MsgSendResponseAmino): MsgSendResponse {
		const message = createBaseMsgSendResponse();
		return message;
	},
	toAmino(_: MsgSendResponse): MsgSendResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse {
		return MsgSendResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse {
		return MsgSendResponse.decode(message.value);
	},
	toProto(message: MsgSendResponse): Uint8Array {
		return MsgSendResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgSendResponse',
			value: MsgSendResponse.encode(message).finish()
		};
	}
};
function createBaseMsgRegisterPointer(): MsgRegisterPointer {
	return {
		sender: '',
		pointerType: 0,
		ercAddress: ''
	};
}
export const MsgRegisterPointer = {
	typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointer',
	encode(message: MsgRegisterPointer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.pointerType !== 0) {
			writer.uint32(16).int32(message.pointerType);
		}
		if (message.ercAddress !== '') {
			writer.uint32(26).string(message.ercAddress);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPointer {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterPointer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string();
					break;
				case 2:
					message.pointerType = reader.int32() as any;
					break;
				case 3:
					message.ercAddress = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgRegisterPointer>): MsgRegisterPointer {
		const message = createBaseMsgRegisterPointer();
		message.sender = object.sender ?? '';
		message.pointerType = object.pointerType ?? 0;
		message.ercAddress = object.ercAddress ?? '';
		return message;
	},
	fromAmino(object: MsgRegisterPointerAmino): MsgRegisterPointer {
		const message = createBaseMsgRegisterPointer();
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender;
		}
		if (object.pointer_type !== undefined && object.pointer_type !== null) {
			message.pointerType = object.pointer_type;
		}
		if (object.erc_address !== undefined && object.erc_address !== null) {
			message.ercAddress = object.erc_address;
		}
		return message;
	},
	toAmino(message: MsgRegisterPointer): MsgRegisterPointerAmino {
		const obj: any = {};
		obj.sender = message.sender === '' ? undefined : message.sender;
		obj.pointer_type = message.pointerType === 0 ? undefined : message.pointerType;
		obj.erc_address = message.ercAddress === '' ? undefined : message.ercAddress;
		return obj;
	},
	fromAminoMsg(object: MsgRegisterPointerAminoMsg): MsgRegisterPointer {
		return MsgRegisterPointer.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgRegisterPointerProtoMsg): MsgRegisterPointer {
		return MsgRegisterPointer.decode(message.value);
	},
	toProto(message: MsgRegisterPointer): Uint8Array {
		return MsgRegisterPointer.encode(message).finish();
	},
	toProtoMsg(message: MsgRegisterPointer): MsgRegisterPointerProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointer',
			value: MsgRegisterPointer.encode(message).finish()
		};
	}
};
function createBaseMsgRegisterPointerResponse(): MsgRegisterPointerResponse {
	return {
		pointerAddress: ''
	};
}
export const MsgRegisterPointerResponse = {
	typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointerResponse',
	encode(message: MsgRegisterPointerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.pointerAddress !== '') {
			writer.uint32(10).string(message.pointerAddress);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPointerResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterPointerResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pointerAddress = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgRegisterPointerResponse>): MsgRegisterPointerResponse {
		const message = createBaseMsgRegisterPointerResponse();
		message.pointerAddress = object.pointerAddress ?? '';
		return message;
	},
	fromAmino(object: MsgRegisterPointerResponseAmino): MsgRegisterPointerResponse {
		const message = createBaseMsgRegisterPointerResponse();
		if (object.pointer_address !== undefined && object.pointer_address !== null) {
			message.pointerAddress = object.pointer_address;
		}
		return message;
	},
	toAmino(message: MsgRegisterPointerResponse): MsgRegisterPointerResponseAmino {
		const obj: any = {};
		obj.pointer_address = message.pointerAddress === '' ? undefined : message.pointerAddress;
		return obj;
	},
	fromAminoMsg(object: MsgRegisterPointerResponseAminoMsg): MsgRegisterPointerResponse {
		return MsgRegisterPointerResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgRegisterPointerResponseProtoMsg): MsgRegisterPointerResponse {
		return MsgRegisterPointerResponse.decode(message.value);
	},
	toProto(message: MsgRegisterPointerResponse): Uint8Array {
		return MsgRegisterPointerResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgRegisterPointerResponse): MsgRegisterPointerResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.MsgRegisterPointerResponse',
			value: MsgRegisterPointerResponse.encode(message).finish()
		};
	}
};
