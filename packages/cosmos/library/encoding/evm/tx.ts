import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin } from "../cosmos/base/v1beta1/coin";

import { Any } from "../google/protobuf/any";

import { assetTypeFromJSON, assetTypeToJSON, pointerTypeFromJSON, pointerTypeToJSON } from "./enums";

import { Log } from "./receipt";

import type {
	Asset as Asset_type,
	MsgAssociateContractAddressResponse as MsgAssociateContractAddressResponse_type,
	MsgAssociateContractAddress as MsgAssociateContractAddress_type,
	MsgAssociateResponse as MsgAssociateResponse_type,
	MsgAssociate as MsgAssociate_type,
	MsgClaimSpecific as MsgClaimSpecific_type,
	MsgClaim as MsgClaim_type,
	MsgEVMTransactionResponse as MsgEVMTransactionResponse_type,
	MsgEVMTransaction as MsgEVMTransaction_type,
	MsgInternalEVMCallResponse as MsgInternalEVMCallResponse_type,
	MsgInternalEVMCall as MsgInternalEVMCall_type,
	MsgInternalEVMDelegateCallResponse as MsgInternalEVMDelegateCallResponse_type,
	MsgInternalEVMDelegateCall as MsgInternalEVMDelegateCall_type,
	MsgRegisterPointerResponse as MsgRegisterPointerResponse_type,
	MsgRegisterPointer as MsgRegisterPointer_type,
	MsgSendResponse as MsgSendResponse_type,
	MsgSend as MsgSend_type
} from "../../types/evm";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface MsgEVMTransaction extends MsgEVMTransaction_type {}
export interface MsgEVMTransactionResponse extends MsgEVMTransactionResponse_type {}
export interface MsgInternalEVMCall extends MsgInternalEVMCall_type {}
export interface MsgInternalEVMCallResponse extends MsgInternalEVMCallResponse_type {}
export interface MsgInternalEVMDelegateCall extends MsgInternalEVMDelegateCall_type {}
export interface MsgInternalEVMDelegateCallResponse extends MsgInternalEVMDelegateCallResponse_type {}
export interface MsgSend extends MsgSend_type {}
export interface MsgSendResponse extends MsgSendResponse_type {}
export interface MsgRegisterPointer extends MsgRegisterPointer_type {}
export interface MsgRegisterPointerResponse extends MsgRegisterPointerResponse_type {}
export interface MsgAssociateContractAddress extends MsgAssociateContractAddress_type {}
export interface MsgAssociateContractAddressResponse extends MsgAssociateContractAddressResponse_type {}
export interface MsgAssociate extends MsgAssociate_type {}
export interface MsgAssociateResponse extends MsgAssociateResponse_type {}
export interface MsgClaim extends MsgClaim_type {}
export interface Asset extends Asset_type {}
export interface MsgClaimSpecific extends MsgClaimSpecific_type {}

export const MsgEVMTransaction: MessageFns<MsgEVMTransaction, "seiprotocol.seichain.evm.MsgEVMTransaction"> = {
	$type: "seiprotocol.seichain.evm.MsgEVMTransaction" as const,

	encode(message: MsgEVMTransaction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.data !== undefined) {
			Any.encode(message.data, writer.uint32(10).fork()).join();
		}
		if (message.derived.length !== 0) {
			writer.uint32(18).bytes(message.derived);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgEVMTransaction {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgEVMTransaction();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.data = Any.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.derived = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgEVMTransaction {
		return {
			data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
			derived: isSet(object.derived) ? bytesFromBase64(object.derived) : new Uint8Array(0)
		};
	},

	toJSON(message: MsgEVMTransaction): unknown {
		const obj: any = {};
		if (message.data !== undefined) {
			obj.data = Any.toJSON(message.data);
		}
		if (message.derived.length !== 0) {
			obj.derived = base64FromBytes(message.derived);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgEVMTransaction>, I>>(base?: I): MsgEVMTransaction {
		return MsgEVMTransaction.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgEVMTransaction>, I>>(object: I): MsgEVMTransaction {
		const message = createBaseMsgEVMTransaction();
		message.data = object.data !== undefined && object.data !== null ? Any.fromPartial(object.data) : undefined;
		message.derived = object.derived ?? new Uint8Array(0);
		return message;
	}
};

export const MsgEVMTransactionResponse: MessageFns<MsgEVMTransactionResponse, "seiprotocol.seichain.evm.MsgEVMTransactionResponse"> = {
	$type: "seiprotocol.seichain.evm.MsgEVMTransactionResponse" as const,

	encode(message: MsgEVMTransactionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.gas_used !== 0) {
			writer.uint32(8).uint64(message.gas_used);
		}
		if (message.vm_error !== "") {
			writer.uint32(18).string(message.vm_error);
		}
		if (message.return_data.length !== 0) {
			writer.uint32(26).bytes(message.return_data);
		}
		if (message.hash !== "") {
			writer.uint32(34).string(message.hash);
		}
		for (const v of message.logs) {
			Log.encode(v!, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgEVMTransactionResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgEVMTransactionResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.gas_used = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.vm_error = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.return_data = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.hash = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.logs.push(Log.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgEVMTransactionResponse {
		return {
			gas_used: isSet(object.gas_used) ? globalThis.Number(object.gas_used) : 0,
			vm_error: isSet(object.vm_error) ? globalThis.String(object.vm_error) : "",
			return_data: isSet(object.return_data) ? bytesFromBase64(object.return_data) : new Uint8Array(0),
			hash: isSet(object.hash) ? globalThis.String(object.hash) : "",
			logs: globalThis.Array.isArray(object?.logs) ? object.logs.map((e: any) => Log.fromJSON(e)) : []
		};
	},

	toJSON(message: MsgEVMTransactionResponse): unknown {
		const obj: any = {};
		if (message.gas_used !== 0) {
			obj.gas_used = Math.round(message.gas_used);
		}
		if (message.vm_error !== "") {
			obj.vm_error = message.vm_error;
		}
		if (message.return_data.length !== 0) {
			obj.return_data = base64FromBytes(message.return_data);
		}
		if (message.hash !== "") {
			obj.hash = message.hash;
		}
		if (message.logs?.length) {
			obj.logs = message.logs.map((e) => Log.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgEVMTransactionResponse>, I>>(base?: I): MsgEVMTransactionResponse {
		return MsgEVMTransactionResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgEVMTransactionResponse>, I>>(object: I): MsgEVMTransactionResponse {
		const message = createBaseMsgEVMTransactionResponse();
		message.gas_used = object.gas_used ?? 0;
		message.vm_error = object.vm_error ?? "";
		message.return_data = object.return_data ?? new Uint8Array(0);
		message.hash = object.hash ?? "";
		message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
		return message;
	}
};

export const MsgInternalEVMCall: MessageFns<MsgInternalEVMCall, "seiprotocol.seichain.evm.MsgInternalEVMCall"> = {
	$type: "seiprotocol.seichain.evm.MsgInternalEVMCall" as const,

	encode(message: MsgInternalEVMCall, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.value !== "") {
			writer.uint32(18).string(message.value);
		}
		if (message.to !== "") {
			writer.uint32(26).string(message.to);
		}
		if (message.data.length !== 0) {
			writer.uint32(34).bytes(message.data);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMCall {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInternalEVMCall();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.value = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.to = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgInternalEVMCall {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			value: isSet(object.value) ? globalThis.String(object.value) : "",
			to: isSet(object.to) ? globalThis.String(object.to) : "",
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0)
		};
	},

	toJSON(message: MsgInternalEVMCall): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.value !== "") {
			obj.value = message.value;
		}
		if (message.to !== "") {
			obj.to = message.to;
		}
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgInternalEVMCall>, I>>(base?: I): MsgInternalEVMCall {
		return MsgInternalEVMCall.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgInternalEVMCall>, I>>(object: I): MsgInternalEVMCall {
		const message = createBaseMsgInternalEVMCall();
		message.sender = object.sender ?? "";
		message.value = object.value ?? "";
		message.to = object.to ?? "";
		message.data = object.data ?? new Uint8Array(0);
		return message;
	}
};

export const MsgInternalEVMCallResponse: MessageFns<MsgInternalEVMCallResponse, "seiprotocol.seichain.evm.MsgInternalEVMCallResponse"> = {
	$type: "seiprotocol.seichain.evm.MsgInternalEVMCallResponse" as const,

	encode(_: MsgInternalEVMCallResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMCallResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInternalEVMCallResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgInternalEVMCallResponse {
		return {};
	},

	toJSON(_: MsgInternalEVMCallResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgInternalEVMCallResponse>, I>>(base?: I): MsgInternalEVMCallResponse {
		return MsgInternalEVMCallResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgInternalEVMCallResponse>, I>>(_: I): MsgInternalEVMCallResponse {
		const message = createBaseMsgInternalEVMCallResponse();
		return message;
	}
};

export const MsgInternalEVMDelegateCall: MessageFns<MsgInternalEVMDelegateCall, "seiprotocol.seichain.evm.MsgInternalEVMDelegateCall"> = {
	$type: "seiprotocol.seichain.evm.MsgInternalEVMDelegateCall" as const,

	encode(message: MsgInternalEVMDelegateCall, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.codeHash.length !== 0) {
			writer.uint32(18).bytes(message.codeHash);
		}
		if (message.to !== "") {
			writer.uint32(26).string(message.to);
		}
		if (message.data.length !== 0) {
			writer.uint32(34).bytes(message.data);
		}
		if (message.fromContract !== "") {
			writer.uint32(42).string(message.fromContract);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMDelegateCall {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgInternalEVMDelegateCall();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.codeHash = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.to = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.data = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.fromContract = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgInternalEVMDelegateCall {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			codeHash: isSet(object.codeHash) ? bytesFromBase64(object.codeHash) : new Uint8Array(0),
			to: isSet(object.to) ? globalThis.String(object.to) : "",
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
			fromContract: isSet(object.fromContract) ? globalThis.String(object.fromContract) : ""
		};
	},

	toJSON(message: MsgInternalEVMDelegateCall): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.codeHash.length !== 0) {
			obj.codeHash = base64FromBytes(message.codeHash);
		}
		if (message.to !== "") {
			obj.to = message.to;
		}
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		if (message.fromContract !== "") {
			obj.fromContract = message.fromContract;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgInternalEVMDelegateCall>, I>>(base?: I): MsgInternalEVMDelegateCall {
		return MsgInternalEVMDelegateCall.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgInternalEVMDelegateCall>, I>>(object: I): MsgInternalEVMDelegateCall {
		const message = createBaseMsgInternalEVMDelegateCall();
		message.sender = object.sender ?? "";
		message.codeHash = object.codeHash ?? new Uint8Array(0);
		message.to = object.to ?? "";
		message.data = object.data ?? new Uint8Array(0);
		message.fromContract = object.fromContract ?? "";
		return message;
	}
};

export const MsgInternalEVMDelegateCallResponse: MessageFns<MsgInternalEVMDelegateCallResponse, "seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse"> =
	{
		$type: "seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse" as const,

		encode(_: MsgInternalEVMDelegateCallResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): MsgInternalEVMDelegateCallResponse {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseMsgInternalEVMDelegateCallResponse();
			while (reader.pos < end) {
				const tag = reader.uint32();
				switch (tag >>> 3) {
				}
				if ((tag & 7) === 4 || tag === 0) {
					break;
				}
				reader.skip(tag & 7);
			}
			return message;
		},

		fromJSON(_: any): MsgInternalEVMDelegateCallResponse {
			return {};
		},

		toJSON(_: MsgInternalEVMDelegateCallResponse): unknown {
			const obj: any = {};
			return obj;
		},

		create<I extends Exact<DeepPartial<MsgInternalEVMDelegateCallResponse>, I>>(base?: I): MsgInternalEVMDelegateCallResponse {
			return MsgInternalEVMDelegateCallResponse.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<MsgInternalEVMDelegateCallResponse>, I>>(_: I): MsgInternalEVMDelegateCallResponse {
			const message = createBaseMsgInternalEVMDelegateCallResponse();
			return message;
		}
	};

export const MsgSend: MessageFns<MsgSend, "seiprotocol.seichain.evm.MsgSend"> = {
	$type: "seiprotocol.seichain.evm.MsgSend" as const,

	encode(message: MsgSend, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.to_address !== "") {
			writer.uint32(18).string(message.to_address);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSend();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.to_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSend {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			to_address: isSet(object.to_address) ? globalThis.String(object.to_address) : "",
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
		};
	},

	toJSON(message: MsgSend): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.to_address !== "") {
			obj.to_address = message.to_address;
		}
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSend>, I>>(base?: I): MsgSend {
		return MsgSend.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
		const message = createBaseMsgSend();
		message.from_address = object.from_address ?? "";
		message.to_address = object.to_address ?? "";
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	}
};

export const MsgSendResponse: MessageFns<MsgSendResponse, "seiprotocol.seichain.evm.MsgSendResponse"> = {
	$type: "seiprotocol.seichain.evm.MsgSendResponse" as const,

	encode(_: MsgSendResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSendResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgSendResponse {
		return {};
	},

	toJSON(_: MsgSendResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSendResponse>, I>>(base?: I): MsgSendResponse {
		return MsgSendResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(_: I): MsgSendResponse {
		const message = createBaseMsgSendResponse();
		return message;
	}
};

export const MsgRegisterPointer: MessageFns<MsgRegisterPointer, "seiprotocol.seichain.evm.MsgRegisterPointer"> = {
	$type: "seiprotocol.seichain.evm.MsgRegisterPointer" as const,

	encode(message: MsgRegisterPointer, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.pointer_type !== 0) {
			writer.uint32(16).int32(message.pointer_type);
		}
		if (message.erc_address !== "") {
			writer.uint32(26).string(message.erc_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPointer {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterPointer();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.pointer_type = reader.int32() as any;
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.erc_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgRegisterPointer {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			pointer_type: isSet(object.pointer_type) ? pointerTypeFromJSON(object.pointer_type) : 0,
			erc_address: isSet(object.erc_address) ? globalThis.String(object.erc_address) : ""
		};
	},

	toJSON(message: MsgRegisterPointer): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.pointer_type !== 0) {
			obj.pointer_type = pointerTypeToJSON(message.pointer_type);
		}
		if (message.erc_address !== "") {
			obj.erc_address = message.erc_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRegisterPointer>, I>>(base?: I): MsgRegisterPointer {
		return MsgRegisterPointer.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRegisterPointer>, I>>(object: I): MsgRegisterPointer {
		const message = createBaseMsgRegisterPointer();
		message.sender = object.sender ?? "";
		message.pointer_type = object.pointer_type ?? 0;
		message.erc_address = object.erc_address ?? "";
		return message;
	}
};

export const MsgRegisterPointerResponse: MessageFns<MsgRegisterPointerResponse, "seiprotocol.seichain.evm.MsgRegisterPointerResponse"> = {
	$type: "seiprotocol.seichain.evm.MsgRegisterPointerResponse" as const,

	encode(message: MsgRegisterPointerResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pointer_address !== "") {
			writer.uint32(10).string(message.pointer_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPointerResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterPointerResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pointer_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgRegisterPointerResponse {
		return { pointer_address: isSet(object.pointer_address) ? globalThis.String(object.pointer_address) : "" };
	},

	toJSON(message: MsgRegisterPointerResponse): unknown {
		const obj: any = {};
		if (message.pointer_address !== "") {
			obj.pointer_address = message.pointer_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRegisterPointerResponse>, I>>(base?: I): MsgRegisterPointerResponse {
		return MsgRegisterPointerResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRegisterPointerResponse>, I>>(object: I): MsgRegisterPointerResponse {
		const message = createBaseMsgRegisterPointerResponse();
		message.pointer_address = object.pointer_address ?? "";
		return message;
	}
};

export const MsgAssociateContractAddress: MessageFns<MsgAssociateContractAddress, "seiprotocol.seichain.evm.MsgAssociateContractAddress"> = {
	$type: "seiprotocol.seichain.evm.MsgAssociateContractAddress" as const,

	encode(message: MsgAssociateContractAddress, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.address !== "") {
			writer.uint32(18).string(message.address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgAssociateContractAddress {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAssociateContractAddress();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgAssociateContractAddress {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			address: isSet(object.address) ? globalThis.String(object.address) : ""
		};
	},

	toJSON(message: MsgAssociateContractAddress): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.address !== "") {
			obj.address = message.address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgAssociateContractAddress>, I>>(base?: I): MsgAssociateContractAddress {
		return MsgAssociateContractAddress.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgAssociateContractAddress>, I>>(object: I): MsgAssociateContractAddress {
		const message = createBaseMsgAssociateContractAddress();
		message.sender = object.sender ?? "";
		message.address = object.address ?? "";
		return message;
	}
};

export const MsgAssociateContractAddressResponse: MessageFns<
	MsgAssociateContractAddressResponse,
	"seiprotocol.seichain.evm.MsgAssociateContractAddressResponse"
> = {
	$type: "seiprotocol.seichain.evm.MsgAssociateContractAddressResponse" as const,

	encode(_: MsgAssociateContractAddressResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgAssociateContractAddressResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAssociateContractAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgAssociateContractAddressResponse {
		return {};
	},

	toJSON(_: MsgAssociateContractAddressResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgAssociateContractAddressResponse>, I>>(base?: I): MsgAssociateContractAddressResponse {
		return MsgAssociateContractAddressResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgAssociateContractAddressResponse>, I>>(_: I): MsgAssociateContractAddressResponse {
		const message = createBaseMsgAssociateContractAddressResponse();
		return message;
	}
};

export const MsgAssociate: MessageFns<MsgAssociate, "seiprotocol.seichain.evm.MsgAssociate"> = {
	$type: "seiprotocol.seichain.evm.MsgAssociate" as const,

	encode(message: MsgAssociate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.custom_message !== "") {
			writer.uint32(18).string(message.custom_message);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgAssociate {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAssociate();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.custom_message = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgAssociate {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			custom_message: isSet(object.custom_message) ? globalThis.String(object.custom_message) : ""
		};
	},

	toJSON(message: MsgAssociate): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.custom_message !== "") {
			obj.custom_message = message.custom_message;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgAssociate>, I>>(base?: I): MsgAssociate {
		return MsgAssociate.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgAssociate>, I>>(object: I): MsgAssociate {
		const message = createBaseMsgAssociate();
		message.sender = object.sender ?? "";
		message.custom_message = object.custom_message ?? "";
		return message;
	}
};

export const MsgAssociateResponse: MessageFns<MsgAssociateResponse, "seiprotocol.seichain.evm.MsgAssociateResponse"> = {
	$type: "seiprotocol.seichain.evm.MsgAssociateResponse" as const,

	encode(_: MsgAssociateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgAssociateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgAssociateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgAssociateResponse {
		return {};
	},

	toJSON(_: MsgAssociateResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgAssociateResponse>, I>>(base?: I): MsgAssociateResponse {
		return MsgAssociateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgAssociateResponse>, I>>(_: I): MsgAssociateResponse {
		const message = createBaseMsgAssociateResponse();
		return message;
	}
};

export const MsgClaim: MessageFns<MsgClaim, "seiprotocol.seichain.evm.MsgClaim"> = {
	$type: "seiprotocol.seichain.evm.MsgClaim" as const,

	encode(message: MsgClaim, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.claimer !== "") {
			writer.uint32(18).string(message.claimer);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgClaim {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgClaim();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.claimer = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgClaim {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			claimer: isSet(object.claimer) ? globalThis.String(object.claimer) : ""
		};
	},

	toJSON(message: MsgClaim): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.claimer !== "") {
			obj.claimer = message.claimer;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgClaim>, I>>(base?: I): MsgClaim {
		return MsgClaim.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgClaim>, I>>(object: I): MsgClaim {
		const message = createBaseMsgClaim();
		message.sender = object.sender ?? "";
		message.claimer = object.claimer ?? "";
		return message;
	}
};

export const Asset: MessageFns<Asset, "seiprotocol.seichain.evm.Asset"> = {
	$type: "seiprotocol.seichain.evm.Asset" as const,

	encode(message: Asset, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.asset_type !== 0) {
			writer.uint32(8).int32(message.asset_type);
		}
		if (message.contract_address !== "") {
			writer.uint32(18).string(message.contract_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Asset {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAsset();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.asset_type = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.contract_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Asset {
		return {
			asset_type: isSet(object.asset_type) ? assetTypeFromJSON(object.asset_type) : 0,
			contract_address: isSet(object.contract_address) ? globalThis.String(object.contract_address) : ""
		};
	},

	toJSON(message: Asset): unknown {
		const obj: any = {};
		if (message.asset_type !== 0) {
			obj.asset_type = assetTypeToJSON(message.asset_type);
		}
		if (message.contract_address !== "") {
			obj.contract_address = message.contract_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Asset>, I>>(base?: I): Asset {
		return Asset.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
		const message = createBaseAsset();
		message.asset_type = object.asset_type ?? 0;
		message.contract_address = object.contract_address ?? "";
		return message;
	}
};

export const MsgClaimSpecific: MessageFns<MsgClaimSpecific, "seiprotocol.seichain.evm.MsgClaimSpecific"> = {
	$type: "seiprotocol.seichain.evm.MsgClaimSpecific" as const,

	encode(message: MsgClaimSpecific, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.claimer !== "") {
			writer.uint32(18).string(message.claimer);
		}
		for (const v of message.assets) {
			Asset.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgClaimSpecific {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgClaimSpecific();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.claimer = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.assets.push(Asset.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgClaimSpecific {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			claimer: isSet(object.claimer) ? globalThis.String(object.claimer) : "",
			assets: globalThis.Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : []
		};
	},

	toJSON(message: MsgClaimSpecific): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.claimer !== "") {
			obj.claimer = message.claimer;
		}
		if (message.assets?.length) {
			obj.assets = message.assets.map((e) => Asset.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgClaimSpecific>, I>>(base?: I): MsgClaimSpecific {
		return MsgClaimSpecific.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgClaimSpecific>, I>>(object: I): MsgClaimSpecific {
		const message = createBaseMsgClaimSpecific();
		message.sender = object.sender ?? "";
		message.claimer = object.claimer ?? "";
		message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
		return message;
	}
};

function createBaseMsgEVMTransaction(): MsgEVMTransaction {
	return { data: undefined, derived: new Uint8Array(0) };
}

function createBaseMsgEVMTransactionResponse(): MsgEVMTransactionResponse {
	return { gas_used: 0, vm_error: "", return_data: new Uint8Array(0), hash: "", logs: [] };
}

function createBaseMsgInternalEVMCall(): MsgInternalEVMCall {
	return { sender: "", value: "", to: "", data: new Uint8Array(0) };
}

function createBaseMsgInternalEVMCallResponse(): MsgInternalEVMCallResponse {
	return {};
}

function createBaseMsgInternalEVMDelegateCall(): MsgInternalEVMDelegateCall {
	return { sender: "", codeHash: new Uint8Array(0), to: "", data: new Uint8Array(0), fromContract: "" };
}

function createBaseMsgInternalEVMDelegateCallResponse(): MsgInternalEVMDelegateCallResponse {
	return {};
}

function createBaseMsgSend(): MsgSend {
	return { from_address: "", to_address: "", amount: [] };
}

function createBaseMsgSendResponse(): MsgSendResponse {
	return {};
}

function createBaseMsgRegisterPointer(): MsgRegisterPointer {
	return { sender: "", pointer_type: 0, erc_address: "" };
}

function createBaseMsgRegisterPointerResponse(): MsgRegisterPointerResponse {
	return { pointer_address: "" };
}

function createBaseMsgAssociateContractAddress(): MsgAssociateContractAddress {
	return { sender: "", address: "" };
}

function createBaseMsgAssociateContractAddressResponse(): MsgAssociateContractAddressResponse {
	return {};
}

function createBaseMsgAssociate(): MsgAssociate {
	return { sender: "", custom_message: "" };
}

function createBaseMsgAssociateResponse(): MsgAssociateResponse {
	return {};
}

function createBaseMsgClaim(): MsgClaim {
	return { sender: "", claimer: "" };
}

function createBaseAsset(): Asset {
	return { asset_type: 0, contract_address: "" };
}

function createBaseMsgClaimSpecific(): MsgClaimSpecific {
	return { sender: "", claimer: "", assets: [] };
}

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.evm.MsgEVMTransaction", MsgEVMTransaction as never],
	["/seiprotocol.seichain.evm.MsgEVMTransactionResponse", MsgEVMTransactionResponse as never],
	["/seiprotocol.seichain.evm.MsgInternalEVMCall", MsgInternalEVMCall as never],
	["/seiprotocol.seichain.evm.MsgInternalEVMCallResponse", MsgInternalEVMCallResponse as never],
	["/seiprotocol.seichain.evm.MsgInternalEVMDelegateCall", MsgInternalEVMDelegateCall as never],
	["/seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse", MsgInternalEVMDelegateCallResponse as never],
	["/seiprotocol.seichain.evm.MsgSend", MsgSend as never],
	["/seiprotocol.seichain.evm.MsgSendResponse", MsgSendResponse as never],
	["/seiprotocol.seichain.evm.MsgRegisterPointer", MsgRegisterPointer as never],
	["/seiprotocol.seichain.evm.MsgRegisterPointerResponse", MsgRegisterPointerResponse as never],
	["/seiprotocol.seichain.evm.MsgAssociateContractAddress", MsgAssociateContractAddress as never],
	["/seiprotocol.seichain.evm.MsgAssociateContractAddressResponse", MsgAssociateContractAddressResponse as never],
	["/seiprotocol.seichain.evm.MsgAssociate", MsgAssociate as never],
	["/seiprotocol.seichain.evm.MsgAssociateResponse", MsgAssociateResponse as never],
	["/seiprotocol.seichain.evm.MsgClaim", MsgClaim as never],
	["/seiprotocol.seichain.evm.Asset", Asset as never],
	["/seiprotocol.seichain.evm.MsgClaimSpecific", MsgClaimSpecific as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.evm.MsgEVMTransaction": {
		aminoType: "evm/MsgEVMTransaction",
		toAmino: (message: MsgEVMTransaction) => ({ ...message }),
		fromAmino: (object: MsgEVMTransaction) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgEVMTransactionResponse": {
		aminoType: "evm/MsgEVMTransactionResponse",
		toAmino: (message: MsgEVMTransactionResponse) => ({ ...message }),
		fromAmino: (object: MsgEVMTransactionResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgInternalEVMCall": {
		aminoType: "evm/MsgInternalEVMCall",
		toAmino: (message: MsgInternalEVMCall) => ({ ...message }),
		fromAmino: (object: MsgInternalEVMCall) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgInternalEVMCallResponse": {
		aminoType: "evm/MsgInternalEVMCallResponse",
		toAmino: (message: MsgInternalEVMCallResponse) => ({ ...message }),
		fromAmino: (object: MsgInternalEVMCallResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgInternalEVMDelegateCall": {
		aminoType: "evm/MsgInternalEVMDelegateCall",
		toAmino: (message: MsgInternalEVMDelegateCall) => ({ ...message }),
		fromAmino: (object: MsgInternalEVMDelegateCall) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgInternalEVMDelegateCallResponse": {
		aminoType: "evm/MsgInternalEVMDelegateCallResponse",
		toAmino: (message: MsgInternalEVMDelegateCallResponse) => ({ ...message }),
		fromAmino: (object: MsgInternalEVMDelegateCallResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgSend": {
		aminoType: "evm/MsgSend",
		toAmino: (message: MsgSend) => ({ ...message }),
		fromAmino: (object: MsgSend) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgSendResponse": {
		aminoType: "evm/MsgSendResponse",
		toAmino: (message: MsgSendResponse) => ({ ...message }),
		fromAmino: (object: MsgSendResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgRegisterPointer": {
		aminoType: "evm/MsgRegisterPointer",
		toAmino: (message: MsgRegisterPointer) => ({ ...message }),
		fromAmino: (object: MsgRegisterPointer) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgRegisterPointerResponse": {
		aminoType: "evm/MsgRegisterPointerResponse",
		toAmino: (message: MsgRegisterPointerResponse) => ({ ...message }),
		fromAmino: (object: MsgRegisterPointerResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgAssociateContractAddress": {
		aminoType: "evm/MsgAssociateContractAddress",
		toAmino: (message: MsgAssociateContractAddress) => ({ ...message }),
		fromAmino: (object: MsgAssociateContractAddress) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgAssociateContractAddressResponse": {
		aminoType: "evm/MsgAssociateContractAddressResponse",
		toAmino: (message: MsgAssociateContractAddressResponse) => ({ ...message }),
		fromAmino: (object: MsgAssociateContractAddressResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgAssociate": {
		aminoType: "evm/MsgAssociate",
		toAmino: (message: MsgAssociate) => ({ ...message }),
		fromAmino: (object: MsgAssociate) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgAssociateResponse": {
		aminoType: "evm/MsgAssociateResponse",
		toAmino: (message: MsgAssociateResponse) => ({ ...message }),
		fromAmino: (object: MsgAssociateResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgClaim": {
		aminoType: "evm/MsgClaim",
		toAmino: (message: MsgClaim) => ({ ...message }),
		fromAmino: (object: MsgClaim) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.Asset": {
		aminoType: "evm/Asset",
		toAmino: (message: Asset) => ({ ...message }),
		fromAmino: (object: Asset) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.MsgClaimSpecific": {
		aminoType: "evm/MsgClaimSpecific",
		toAmino: (message: MsgClaimSpecific) => ({ ...message }),
		fromAmino: (object: MsgClaimSpecific) => ({ ...object })
	}
};
