import { Params, ParamsAmino, ParamsSDKType, Metadata, MetadataAmino, MetadataSDKType } from '../cosmos/bank/v1beta1/bank';
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from './authorityMetadata';
import { BinaryReader, BinaryWriter } from '../binary';
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryParamsRequest';
	value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryParamsRequest';
	value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
	/** params defines the parameters of the module. */
	params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryParamsResponse';
	value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
	/** params defines the parameters of the module. */
	params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryParamsResponse';
	value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
	params: ParamsSDKType | undefined;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
	denom: string;
}
export interface QueryDenomAuthorityMetadataRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest';
	value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestAmino {
	denom?: string;
}
export interface QueryDenomAuthorityMetadataRequestAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest';
	value: QueryDenomAuthorityMetadataRequestAmino;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
	denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
	authorityMetadata: DenomAuthorityMetadata | undefined;
}
export interface QueryDenomAuthorityMetadataResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse';
	value: Uint8Array;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseAmino {
	authority_metadata?: DenomAuthorityMetadataAmino | undefined;
}
export interface QueryDenomAuthorityMetadataResponseAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse';
	value: QueryDenomAuthorityMetadataResponseAmino;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
	authority_metadata: DenomAuthorityMetadataSDKType | undefined;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
	creator: string;
}
export interface QueryDenomsFromCreatorRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest';
	value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestAmino {
	creator?: string;
}
export interface QueryDenomsFromCreatorRequestAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest';
	value: QueryDenomsFromCreatorRequestAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
	creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
	denoms: string[];
}
export interface QueryDenomsFromCreatorResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse';
	value: Uint8Array;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseAmino {
	denoms?: string[];
}
export interface QueryDenomsFromCreatorResponseAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse';
	value: QueryDenomsFromCreatorResponseAmino;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
	denoms: string[];
}
/** QueryDenomMetadataRequest is the request type for the DenomMetadata gRPC method. */
export interface QueryDenomMetadataRequest {
	/** denom is the coin denom to query the metadata for. */
	denom: string;
}
export interface QueryDenomMetadataRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataRequest';
	value: Uint8Array;
}
/** QueryDenomMetadataRequest is the request type for the DenomMetadata gRPC method. */
export interface QueryDenomMetadataRequestAmino {
	/** denom is the coin denom to query the metadata for. */
	denom?: string;
}
export interface QueryDenomMetadataRequestAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataRequest';
	value: QueryDenomMetadataRequestAmino;
}
/** QueryDenomMetadataRequest is the request type for the DenomMetadata gRPC method. */
export interface QueryDenomMetadataRequestSDKType {
	denom: string;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata gRPC
 * method.
 */
export interface QueryDenomMetadataResponse {
	/** metadata describes and provides all the client information for the requested token. */
	metadata: Metadata | undefined;
}
export interface QueryDenomMetadataResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataResponse';
	value: Uint8Array;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata gRPC
 * method.
 */
export interface QueryDenomMetadataResponseAmino {
	/** metadata describes and provides all the client information for the requested token. */
	metadata?: MetadataAmino | undefined;
}
export interface QueryDenomMetadataResponseAminoMsg {
	type: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataResponse';
	value: QueryDenomMetadataResponseAmino;
}
/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata gRPC
 * method.
 */
export interface QueryDenomMetadataResponseSDKType {
	metadata: MetadataSDKType | undefined;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}
export const QueryParamsRequest = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryParamsRequest',
	encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
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
	fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		return message;
	},
	fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		return message;
	},
	toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
		return QueryParamsRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
		return QueryParamsRequest.decode(message.value);
	},
	toProto(message: QueryParamsRequest): Uint8Array {
		return QueryParamsRequest.encode(message).finish();
	},
	toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryParamsRequest',
			value: QueryParamsRequest.encode(message).finish()
		};
	}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
	return {
		params: Params.fromPartial({})
	};
}
export const QueryParamsResponse = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryParamsResponse',
	encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		return message;
	},
	fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params);
		}
		return message;
	},
	toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
		const obj: any = {};
		obj.params = message.params ? Params.toAmino(message.params) : undefined;
		return obj;
	},
	fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
		return QueryParamsResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
		return QueryParamsResponse.decode(message.value);
	},
	toProto(message: QueryParamsResponse): Uint8Array {
		return QueryParamsResponse.encode(message).finish();
	},
	toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryParamsResponse',
			value: QueryParamsResponse.encode(message).finish()
		};
	}
};
function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
	return {
		denom: ''
	};
}
export const QueryDenomAuthorityMetadataRequest = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest',
	encode(message: QueryDenomAuthorityMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.denom !== '') {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomAuthorityMetadataRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.denom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest {
		const message = createBaseQueryDenomAuthorityMetadataRequest();
		message.denom = object.denom ?? '';
		return message;
	},
	fromAmino(object: QueryDenomAuthorityMetadataRequestAmino): QueryDenomAuthorityMetadataRequest {
		const message = createBaseQueryDenomAuthorityMetadataRequest();
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		return message;
	},
	toAmino(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestAmino {
		const obj: any = {};
		obj.denom = message.denom;
		return obj;
	},
	fromAminoMsg(object: QueryDenomAuthorityMetadataRequestAminoMsg): QueryDenomAuthorityMetadataRequest {
		return QueryDenomAuthorityMetadataRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryDenomAuthorityMetadataRequestProtoMsg): QueryDenomAuthorityMetadataRequest {
		return QueryDenomAuthorityMetadataRequest.decode(message.value);
	},
	toProto(message: QueryDenomAuthorityMetadataRequest): Uint8Array {
		return QueryDenomAuthorityMetadataRequest.encode(message).finish();
	},
	toProtoMsg(message: QueryDenomAuthorityMetadataRequest): QueryDenomAuthorityMetadataRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest',
			value: QueryDenomAuthorityMetadataRequest.encode(message).finish()
		};
	}
};
function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
	return {
		authorityMetadata: DenomAuthorityMetadata.fromPartial({})
	};
}
export const QueryDenomAuthorityMetadataResponse = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse',
	encode(message: QueryDenomAuthorityMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.authorityMetadata !== undefined) {
			DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomAuthorityMetadataResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse {
		const message = createBaseQueryDenomAuthorityMetadataResponse();
		message.authorityMetadata =
			object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
		return message;
	},
	fromAmino(object: QueryDenomAuthorityMetadataResponseAmino): QueryDenomAuthorityMetadataResponse {
		const message = createBaseQueryDenomAuthorityMetadataResponse();
		if (object.authority_metadata !== undefined && object.authority_metadata !== null) {
			message.authorityMetadata = DenomAuthorityMetadata.fromAmino(object.authority_metadata);
		}
		return message;
	},
	toAmino(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseAmino {
		const obj: any = {};
		obj.authority_metadata = message.authorityMetadata ? DenomAuthorityMetadata.toAmino(message.authorityMetadata) : undefined;
		return obj;
	},
	fromAminoMsg(object: QueryDenomAuthorityMetadataResponseAminoMsg): QueryDenomAuthorityMetadataResponse {
		return QueryDenomAuthorityMetadataResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryDenomAuthorityMetadataResponseProtoMsg): QueryDenomAuthorityMetadataResponse {
		return QueryDenomAuthorityMetadataResponse.decode(message.value);
	},
	toProto(message: QueryDenomAuthorityMetadataResponse): Uint8Array {
		return QueryDenomAuthorityMetadataResponse.encode(message).finish();
	},
	toProtoMsg(message: QueryDenomAuthorityMetadataResponse): QueryDenomAuthorityMetadataResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse',
			value: QueryDenomAuthorityMetadataResponse.encode(message).finish()
		};
	}
};
function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
	return {
		creator: ''
	};
}
export const QueryDenomsFromCreatorRequest = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest',
	encode(message: QueryDenomsFromCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomsFromCreatorRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
		const message = createBaseQueryDenomsFromCreatorRequest();
		message.creator = object.creator ?? '';
		return message;
	},
	fromAmino(object: QueryDenomsFromCreatorRequestAmino): QueryDenomsFromCreatorRequest {
		const message = createBaseQueryDenomsFromCreatorRequest();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		return message;
	},
	toAmino(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestAmino {
		const obj: any = {};
		obj.creator = message.creator;
		return obj;
	},
	fromAminoMsg(object: QueryDenomsFromCreatorRequestAminoMsg): QueryDenomsFromCreatorRequest {
		return QueryDenomsFromCreatorRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryDenomsFromCreatorRequestProtoMsg): QueryDenomsFromCreatorRequest {
		return QueryDenomsFromCreatorRequest.decode(message.value);
	},
	toProto(message: QueryDenomsFromCreatorRequest): Uint8Array {
		return QueryDenomsFromCreatorRequest.encode(message).finish();
	},
	toProtoMsg(message: QueryDenomsFromCreatorRequest): QueryDenomsFromCreatorRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest',
			value: QueryDenomsFromCreatorRequest.encode(message).finish()
		};
	}
};
function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
	return {
		denoms: []
	};
}
export const QueryDenomsFromCreatorResponse = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse',
	encode(message: QueryDenomsFromCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		for (const v of message.denoms) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomsFromCreatorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.denoms.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
		const message = createBaseQueryDenomsFromCreatorResponse();
		message.denoms = object.denoms?.map((e) => e) || [];
		return message;
	},
	fromAmino(object: QueryDenomsFromCreatorResponseAmino): QueryDenomsFromCreatorResponse {
		const message = createBaseQueryDenomsFromCreatorResponse();
		message.denoms = object.denoms?.map((e) => e) || [];
		return message;
	},
	toAmino(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseAmino {
		const obj: any = {};
		if (message.denoms) {
			obj.denoms = message.denoms.map((e) => e);
		} else {
			obj.denoms = [];
		}
		return obj;
	},
	fromAminoMsg(object: QueryDenomsFromCreatorResponseAminoMsg): QueryDenomsFromCreatorResponse {
		return QueryDenomsFromCreatorResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryDenomsFromCreatorResponseProtoMsg): QueryDenomsFromCreatorResponse {
		return QueryDenomsFromCreatorResponse.decode(message.value);
	},
	toProto(message: QueryDenomsFromCreatorResponse): Uint8Array {
		return QueryDenomsFromCreatorResponse.encode(message).finish();
	},
	toProtoMsg(message: QueryDenomsFromCreatorResponse): QueryDenomsFromCreatorResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse',
			value: QueryDenomsFromCreatorResponse.encode(message).finish()
		};
	}
};
function createBaseQueryDenomMetadataRequest(): QueryDenomMetadataRequest {
	return {
		denom: ''
	};
}
export const QueryDenomMetadataRequest = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataRequest',
	encode(message: QueryDenomMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.denom !== '') {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomMetadataRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.denom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryDenomMetadataRequest>): QueryDenomMetadataRequest {
		const message = createBaseQueryDenomMetadataRequest();
		message.denom = object.denom ?? '';
		return message;
	},
	fromAmino(object: QueryDenomMetadataRequestAmino): QueryDenomMetadataRequest {
		const message = createBaseQueryDenomMetadataRequest();
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		return message;
	},
	toAmino(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestAmino {
		const obj: any = {};
		obj.denom = message.denom;
		return obj;
	},
	fromAminoMsg(object: QueryDenomMetadataRequestAminoMsg): QueryDenomMetadataRequest {
		return QueryDenomMetadataRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryDenomMetadataRequestProtoMsg): QueryDenomMetadataRequest {
		return QueryDenomMetadataRequest.decode(message.value);
	},
	toProto(message: QueryDenomMetadataRequest): Uint8Array {
		return QueryDenomMetadataRequest.encode(message).finish();
	},
	toProtoMsg(message: QueryDenomMetadataRequest): QueryDenomMetadataRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataRequest',
			value: QueryDenomMetadataRequest.encode(message).finish()
		};
	}
};
function createBaseQueryDenomMetadataResponse(): QueryDenomMetadataResponse {
	return {
		metadata: Metadata.fromPartial({})
	};
}
export const QueryDenomMetadataResponse = {
	typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataResponse',
	encode(message: QueryDenomMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.metadata !== undefined) {
			Metadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomMetadataResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.metadata = Metadata.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<QueryDenomMetadataResponse>): QueryDenomMetadataResponse {
		const message = createBaseQueryDenomMetadataResponse();
		message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
		return message;
	},
	fromAmino(object: QueryDenomMetadataResponseAmino): QueryDenomMetadataResponse {
		const message = createBaseQueryDenomMetadataResponse();
		if (object.metadata !== undefined && object.metadata !== null) {
			message.metadata = Metadata.fromAmino(object.metadata);
		}
		return message;
	},
	toAmino(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseAmino {
		const obj: any = {};
		obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
		return obj;
	},
	fromAminoMsg(object: QueryDenomMetadataResponseAminoMsg): QueryDenomMetadataResponse {
		return QueryDenomMetadataResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: QueryDenomMetadataResponseProtoMsg): QueryDenomMetadataResponse {
		return QueryDenomMetadataResponse.decode(message.value);
	},
	toProto(message: QueryDenomMetadataResponse): Uint8Array {
		return QueryDenomMetadataResponse.encode(message).finish();
	},
	toProtoMsg(message: QueryDenomMetadataResponse): QueryDenomMetadataResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.tokenfactory.QueryDenomMetadataResponse',
			value: QueryDenomMetadataResponse.encode(message).finish()
		};
	}
};
