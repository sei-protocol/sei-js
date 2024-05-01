import { PointerType } from './enums';
import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
export interface QuerySeiAddressByEVMAddressRequest {
	evmAddress: string;
}
export interface QuerySeiAddressByEVMAddressRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest';
	value: Uint8Array;
}
export interface QuerySeiAddressByEVMAddressRequestAmino {
	evm_address?: string;
}
export interface QuerySeiAddressByEVMAddressRequestAminoMsg {
	type: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest';
	value: QuerySeiAddressByEVMAddressRequestAmino;
}
export interface QuerySeiAddressByEVMAddressRequestSDKType {
	evm_address: string;
}
export interface QuerySeiAddressByEVMAddressResponse {
	seiAddress: string;
	associated: boolean;
}
export interface QuerySeiAddressByEVMAddressResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse';
	value: Uint8Array;
}
export interface QuerySeiAddressByEVMAddressResponseAmino {
	sei_address?: string;
	associated?: boolean;
}
export interface QuerySeiAddressByEVMAddressResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse';
	value: QuerySeiAddressByEVMAddressResponseAmino;
}
export interface QuerySeiAddressByEVMAddressResponseSDKType {
	sei_address: string;
	associated: boolean;
}
export interface QueryEVMAddressBySeiAddressRequest {
	seiAddress: string;
}
export interface QueryEVMAddressBySeiAddressRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest';
	value: Uint8Array;
}
export interface QueryEVMAddressBySeiAddressRequestAmino {
	sei_address?: string;
}
export interface QueryEVMAddressBySeiAddressRequestAminoMsg {
	type: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest';
	value: QueryEVMAddressBySeiAddressRequestAmino;
}
export interface QueryEVMAddressBySeiAddressRequestSDKType {
	sei_address: string;
}
export interface QueryEVMAddressBySeiAddressResponse {
	evmAddress: string;
	associated: boolean;
}
export interface QueryEVMAddressBySeiAddressResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse';
	value: Uint8Array;
}
export interface QueryEVMAddressBySeiAddressResponseAmino {
	evm_address?: string;
	associated?: boolean;
}
export interface QueryEVMAddressBySeiAddressResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse';
	value: QueryEVMAddressBySeiAddressResponseAmino;
}
export interface QueryEVMAddressBySeiAddressResponseSDKType {
	evm_address: string;
	associated: boolean;
}
export interface QueryStaticCallRequest {
	data: Uint8Array;
	to: string;
}
export interface QueryStaticCallRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QueryStaticCallRequest';
	value: Uint8Array;
}
export interface QueryStaticCallRequestAmino {
	data?: string;
	to?: string;
}
export interface QueryStaticCallRequestAminoMsg {
	type: '/seiprotocol.seichain.evm.QueryStaticCallRequest';
	value: QueryStaticCallRequestAmino;
}
export interface QueryStaticCallRequestSDKType {
	data: Uint8Array;
	to: string;
}
export interface QueryStaticCallResponse {
	data: Uint8Array;
}
export interface QueryStaticCallResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QueryStaticCallResponse';
	value: Uint8Array;
}
export interface QueryStaticCallResponseAmino {
	data?: string;
}
export interface QueryStaticCallResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.QueryStaticCallResponse';
	value: QueryStaticCallResponseAmino;
}
export interface QueryStaticCallResponseSDKType {
	data: Uint8Array;
}
export interface QueryPointerRequest {
	pointerType: PointerType;
	pointee: string;
}
export interface QueryPointerRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QueryPointerRequest';
	value: Uint8Array;
}
export interface QueryPointerRequestAmino {
	pointer_type?: PointerType;
	pointee?: string;
}
export interface QueryPointerRequestAminoMsg {
	type: '/seiprotocol.seichain.evm.QueryPointerRequest';
	value: QueryPointerRequestAmino;
}
export interface QueryPointerRequestSDKType {
	pointer_type: PointerType;
	pointee: string;
}
export interface QueryPointerResponse {
	pointer: string;
	version: number;
	exists: boolean;
}
export interface QueryPointerResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.QueryPointerResponse';
	value: Uint8Array;
}
export interface QueryPointerResponseAmino {
	pointer?: string;
	version?: number;
	exists?: boolean;
}
export interface QueryPointerResponseAminoMsg {
	type: '/seiprotocol.seichain.evm.QueryPointerResponse';
	value: QueryPointerResponseAmino;
}
export interface QueryPointerResponseSDKType {
	pointer: string;
	version: number;
	exists: boolean;
}
function createBaseQuerySeiAddressByEVMAddressRequest(): QuerySeiAddressByEVMAddressRequest {
	return {
		evmAddress: ''
	};
}
export const QuerySeiAddressByEVMAddressRequest = {
	typeUrl: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest',
	encode(message: QuerySeiAddressByEVMAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.evmAddress !== '') {
			writer.uint32(10).string(message.evmAddress);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QuerySeiAddressByEVMAddressRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySeiAddressByEVMAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.evmAddress = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QuerySeiAddressByEVMAddressRequest>): QuerySeiAddressByEVMAddressRequest {
		const message = createBaseQuerySeiAddressByEVMAddressRequest();
		message.evmAddress = object.evmAddress ?? '';
		return message;
	},
	fromAmino(object: QuerySeiAddressByEVMAddressRequestAmino): QuerySeiAddressByEVMAddressRequest {
		const message = createBaseQuerySeiAddressByEVMAddressRequest();
		if (object.evm_address !== undefined && object.evm_address !== null) {
			message.evmAddress = object.evm_address;
		}
		return message;
	},
	toAmino(message: QuerySeiAddressByEVMAddressRequest): QuerySeiAddressByEVMAddressRequestAmino {
		const obj: any = {};
		obj.evm_address = message.evmAddress === '' ? undefined : message.evmAddress;
		return obj;
	},
	fromAminoMsg(object: QuerySeiAddressByEVMAddressRequestAminoMsg): QuerySeiAddressByEVMAddressRequest {
		return QuerySeiAddressByEVMAddressRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QuerySeiAddressByEVMAddressRequestProtoMsg): QuerySeiAddressByEVMAddressRequest {
		return QuerySeiAddressByEVMAddressRequest.decode(message.value);
	},
	toProto(message: QuerySeiAddressByEVMAddressRequest): Uint8Array {
		return QuerySeiAddressByEVMAddressRequest.encode(message).finish();
	},
	toProtoMsg(message: QuerySeiAddressByEVMAddressRequest): QuerySeiAddressByEVMAddressRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest',
			value: QuerySeiAddressByEVMAddressRequest.encode(message).finish()
		};
	}
};
function createBaseQuerySeiAddressByEVMAddressResponse(): QuerySeiAddressByEVMAddressResponse {
	return {
		seiAddress: '',
		associated: false
	};
}
export const QuerySeiAddressByEVMAddressResponse = {
	typeUrl: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse',
	encode(message: QuerySeiAddressByEVMAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.seiAddress !== '') {
			writer.uint32(10).string(message.seiAddress);
		}
		if (message.associated === true) {
			writer.uint32(16).bool(message.associated);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QuerySeiAddressByEVMAddressResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySeiAddressByEVMAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.seiAddress = reader.string();
					break;
				case 2:
					message.associated = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QuerySeiAddressByEVMAddressResponse>): QuerySeiAddressByEVMAddressResponse {
		const message = createBaseQuerySeiAddressByEVMAddressResponse();
		message.seiAddress = object.seiAddress ?? '';
		message.associated = object.associated ?? false;
		return message;
	},
	fromAmino(object: QuerySeiAddressByEVMAddressResponseAmino): QuerySeiAddressByEVMAddressResponse {
		const message = createBaseQuerySeiAddressByEVMAddressResponse();
		if (object.sei_address !== undefined && object.sei_address !== null) {
			message.seiAddress = object.sei_address;
		}
		if (object.associated !== undefined && object.associated !== null) {
			message.associated = object.associated;
		}
		return message;
	},
	toAmino(message: QuerySeiAddressByEVMAddressResponse): QuerySeiAddressByEVMAddressResponseAmino {
		const obj: any = {};
		obj.sei_address = message.seiAddress === '' ? undefined : message.seiAddress;
		obj.associated = message.associated === false ? undefined : message.associated;
		return obj;
	},
	fromAminoMsg(object: QuerySeiAddressByEVMAddressResponseAminoMsg): QuerySeiAddressByEVMAddressResponse {
		return QuerySeiAddressByEVMAddressResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QuerySeiAddressByEVMAddressResponseProtoMsg): QuerySeiAddressByEVMAddressResponse {
		return QuerySeiAddressByEVMAddressResponse.decode(message.value);
	},
	toProto(message: QuerySeiAddressByEVMAddressResponse): Uint8Array {
		return QuerySeiAddressByEVMAddressResponse.encode(message).finish();
	},
	toProtoMsg(message: QuerySeiAddressByEVMAddressResponse): QuerySeiAddressByEVMAddressResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse',
			value: QuerySeiAddressByEVMAddressResponse.encode(message).finish()
		};
	}
};
function createBaseQueryEVMAddressBySeiAddressRequest(): QueryEVMAddressBySeiAddressRequest {
	return {
		seiAddress: ''
	};
}
export const QueryEVMAddressBySeiAddressRequest = {
	typeUrl: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest',
	encode(message: QueryEVMAddressBySeiAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.seiAddress !== '') {
			writer.uint32(10).string(message.seiAddress);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryEVMAddressBySeiAddressRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryEVMAddressBySeiAddressRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.seiAddress = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryEVMAddressBySeiAddressRequest>): QueryEVMAddressBySeiAddressRequest {
		const message = createBaseQueryEVMAddressBySeiAddressRequest();
		message.seiAddress = object.seiAddress ?? '';
		return message;
	},
	fromAmino(object: QueryEVMAddressBySeiAddressRequestAmino): QueryEVMAddressBySeiAddressRequest {
		const message = createBaseQueryEVMAddressBySeiAddressRequest();
		if (object.sei_address !== undefined && object.sei_address !== null) {
			message.seiAddress = object.sei_address;
		}
		return message;
	},
	toAmino(message: QueryEVMAddressBySeiAddressRequest): QueryEVMAddressBySeiAddressRequestAmino {
		const obj: any = {};
		obj.sei_address = message.seiAddress === '' ? undefined : message.seiAddress;
		return obj;
	},
	fromAminoMsg(object: QueryEVMAddressBySeiAddressRequestAminoMsg): QueryEVMAddressBySeiAddressRequest {
		return QueryEVMAddressBySeiAddressRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryEVMAddressBySeiAddressRequestProtoMsg): QueryEVMAddressBySeiAddressRequest {
		return QueryEVMAddressBySeiAddressRequest.decode(message.value);
	},
	toProto(message: QueryEVMAddressBySeiAddressRequest): Uint8Array {
		return QueryEVMAddressBySeiAddressRequest.encode(message).finish();
	},
	toProtoMsg(message: QueryEVMAddressBySeiAddressRequest): QueryEVMAddressBySeiAddressRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest',
			value: QueryEVMAddressBySeiAddressRequest.encode(message).finish()
		};
	}
};
function createBaseQueryEVMAddressBySeiAddressResponse(): QueryEVMAddressBySeiAddressResponse {
	return {
		evmAddress: '',
		associated: false
	};
}
export const QueryEVMAddressBySeiAddressResponse = {
	typeUrl: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse',
	encode(message: QueryEVMAddressBySeiAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.evmAddress !== '') {
			writer.uint32(10).string(message.evmAddress);
		}
		if (message.associated === true) {
			writer.uint32(16).bool(message.associated);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryEVMAddressBySeiAddressResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryEVMAddressBySeiAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.evmAddress = reader.string();
					break;
				case 2:
					message.associated = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryEVMAddressBySeiAddressResponse>): QueryEVMAddressBySeiAddressResponse {
		const message = createBaseQueryEVMAddressBySeiAddressResponse();
		message.evmAddress = object.evmAddress ?? '';
		message.associated = object.associated ?? false;
		return message;
	},
	fromAmino(object: QueryEVMAddressBySeiAddressResponseAmino): QueryEVMAddressBySeiAddressResponse {
		const message = createBaseQueryEVMAddressBySeiAddressResponse();
		if (object.evm_address !== undefined && object.evm_address !== null) {
			message.evmAddress = object.evm_address;
		}
		if (object.associated !== undefined && object.associated !== null) {
			message.associated = object.associated;
		}
		return message;
	},
	toAmino(message: QueryEVMAddressBySeiAddressResponse): QueryEVMAddressBySeiAddressResponseAmino {
		const obj: any = {};
		obj.evm_address = message.evmAddress === '' ? undefined : message.evmAddress;
		obj.associated = message.associated === false ? undefined : message.associated;
		return obj;
	},
	fromAminoMsg(object: QueryEVMAddressBySeiAddressResponseAminoMsg): QueryEVMAddressBySeiAddressResponse {
		return QueryEVMAddressBySeiAddressResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryEVMAddressBySeiAddressResponseProtoMsg): QueryEVMAddressBySeiAddressResponse {
		return QueryEVMAddressBySeiAddressResponse.decode(message.value);
	},
	toProto(message: QueryEVMAddressBySeiAddressResponse): Uint8Array {
		return QueryEVMAddressBySeiAddressResponse.encode(message).finish();
	},
	toProtoMsg(message: QueryEVMAddressBySeiAddressResponse): QueryEVMAddressBySeiAddressResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse',
			value: QueryEVMAddressBySeiAddressResponse.encode(message).finish()
		};
	}
};
function createBaseQueryStaticCallRequest(): QueryStaticCallRequest {
	return {
		data: new Uint8Array(),
		to: ''
	};
}
export const QueryStaticCallRequest = {
	typeUrl: '/seiprotocol.seichain.evm.QueryStaticCallRequest',
	encode(message: QueryStaticCallRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.data.length !== 0) {
			writer.uint32(10).bytes(message.data);
		}
		if (message.to !== '') {
			writer.uint32(18).string(message.to);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticCallRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryStaticCallRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.data = reader.bytes();
					break;
				case 2:
					message.to = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryStaticCallRequest>): QueryStaticCallRequest {
		const message = createBaseQueryStaticCallRequest();
		message.data = object.data ?? new Uint8Array();
		message.to = object.to ?? '';
		return message;
	},
	fromAmino(object: QueryStaticCallRequestAmino): QueryStaticCallRequest {
		const message = createBaseQueryStaticCallRequest();
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		return message;
	},
	toAmino(message: QueryStaticCallRequest): QueryStaticCallRequestAmino {
		const obj: any = {};
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		obj.to = message.to === '' ? undefined : message.to;
		return obj;
	},
	fromAminoMsg(object: QueryStaticCallRequestAminoMsg): QueryStaticCallRequest {
		return QueryStaticCallRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryStaticCallRequestProtoMsg): QueryStaticCallRequest {
		return QueryStaticCallRequest.decode(message.value);
	},
	toProto(message: QueryStaticCallRequest): Uint8Array {
		return QueryStaticCallRequest.encode(message).finish();
	},
	toProtoMsg(message: QueryStaticCallRequest): QueryStaticCallRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QueryStaticCallRequest',
			value: QueryStaticCallRequest.encode(message).finish()
		};
	}
};
function createBaseQueryStaticCallResponse(): QueryStaticCallResponse {
	return {
		data: new Uint8Array()
	};
}
export const QueryStaticCallResponse = {
	typeUrl: '/seiprotocol.seichain.evm.QueryStaticCallResponse',
	encode(message: QueryStaticCallResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.data.length !== 0) {
			writer.uint32(10).bytes(message.data);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticCallResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryStaticCallResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.data = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryStaticCallResponse>): QueryStaticCallResponse {
		const message = createBaseQueryStaticCallResponse();
		message.data = object.data ?? new Uint8Array();
		return message;
	},
	fromAmino(object: QueryStaticCallResponseAmino): QueryStaticCallResponse {
		const message = createBaseQueryStaticCallResponse();
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		return message;
	},
	toAmino(message: QueryStaticCallResponse): QueryStaticCallResponseAmino {
		const obj: any = {};
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		return obj;
	},
	fromAminoMsg(object: QueryStaticCallResponseAminoMsg): QueryStaticCallResponse {
		return QueryStaticCallResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryStaticCallResponseProtoMsg): QueryStaticCallResponse {
		return QueryStaticCallResponse.decode(message.value);
	},
	toProto(message: QueryStaticCallResponse): Uint8Array {
		return QueryStaticCallResponse.encode(message).finish();
	},
	toProtoMsg(message: QueryStaticCallResponse): QueryStaticCallResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QueryStaticCallResponse',
			value: QueryStaticCallResponse.encode(message).finish()
		};
	}
};
function createBaseQueryPointerRequest(): QueryPointerRequest {
	return {
		pointerType: 0,
		pointee: ''
	};
}
export const QueryPointerRequest = {
	typeUrl: '/seiprotocol.seichain.evm.QueryPointerRequest',
	encode(message: QueryPointerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.pointerType !== 0) {
			writer.uint32(8).int32(message.pointerType);
		}
		if (message.pointee !== '') {
			writer.uint32(18).string(message.pointee);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointerRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pointerType = reader.int32() as any;
					break;
				case 2:
					message.pointee = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryPointerRequest>): QueryPointerRequest {
		const message = createBaseQueryPointerRequest();
		message.pointerType = object.pointerType ?? 0;
		message.pointee = object.pointee ?? '';
		return message;
	},
	fromAmino(object: QueryPointerRequestAmino): QueryPointerRequest {
		const message = createBaseQueryPointerRequest();
		if (object.pointer_type !== undefined && object.pointer_type !== null) {
			message.pointerType = object.pointer_type;
		}
		if (object.pointee !== undefined && object.pointee !== null) {
			message.pointee = object.pointee;
		}
		return message;
	},
	toAmino(message: QueryPointerRequest): QueryPointerRequestAmino {
		const obj: any = {};
		obj.pointer_type = message.pointerType === 0 ? undefined : message.pointerType;
		obj.pointee = message.pointee === '' ? undefined : message.pointee;
		return obj;
	},
	fromAminoMsg(object: QueryPointerRequestAminoMsg): QueryPointerRequest {
		return QueryPointerRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryPointerRequestProtoMsg): QueryPointerRequest {
		return QueryPointerRequest.decode(message.value);
	},
	toProto(message: QueryPointerRequest): Uint8Array {
		return QueryPointerRequest.encode(message).finish();
	},
	toProtoMsg(message: QueryPointerRequest): QueryPointerRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QueryPointerRequest',
			value: QueryPointerRequest.encode(message).finish()
		};
	}
};
function createBaseQueryPointerResponse(): QueryPointerResponse {
	return {
		pointer: '',
		version: 0,
		exists: false
	};
}
export const QueryPointerResponse = {
	typeUrl: '/seiprotocol.seichain.evm.QueryPointerResponse',
	encode(message: QueryPointerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.pointer !== '') {
			writer.uint32(10).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(16).uint32(message.version);
		}
		if (message.exists === true) {
			writer.uint32(24).bool(message.exists);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointerResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pointer = reader.string();
					break;
				case 2:
					message.version = reader.uint32();
					break;
				case 3:
					message.exists = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryPointerResponse>): QueryPointerResponse {
		const message = createBaseQueryPointerResponse();
		message.pointer = object.pointer ?? '';
		message.version = object.version ?? 0;
		message.exists = object.exists ?? false;
		return message;
	},
	fromAmino(object: QueryPointerResponseAmino): QueryPointerResponse {
		const message = createBaseQueryPointerResponse();
		if (object.pointer !== undefined && object.pointer !== null) {
			message.pointer = object.pointer;
		}
		if (object.version !== undefined && object.version !== null) {
			message.version = object.version;
		}
		if (object.exists !== undefined && object.exists !== null) {
			message.exists = object.exists;
		}
		return message;
	},
	toAmino(message: QueryPointerResponse): QueryPointerResponseAmino {
		const obj: any = {};
		obj.pointer = message.pointer === '' ? undefined : message.pointer;
		obj.version = message.version === 0 ? undefined : message.version;
		obj.exists = message.exists === false ? undefined : message.exists;
		return obj;
	},
	fromAminoMsg(object: QueryPointerResponseAminoMsg): QueryPointerResponse {
		return QueryPointerResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryPointerResponseProtoMsg): QueryPointerResponse {
		return QueryPointerResponse.decode(message.value);
	},
	toProto(message: QueryPointerResponse): Uint8Array {
		return QueryPointerResponse.encode(message).finish();
	},
	toProtoMsg(message: QueryPointerResponse): QueryPointerResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.QueryPointerResponse',
			value: QueryPointerResponse.encode(message).finish()
		};
	}
};
