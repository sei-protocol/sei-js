import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { AllowList, Metadata } from "../cosmos/bank/v1beta1/bank";

import { DenomAuthorityMetadata } from "./authorityMetadata";

import { Params } from "./params";

import type {
	QueryDenomAllowListRequest as QueryDenomAllowListRequestType,
	QueryDenomAllowListResponse as QueryDenomAllowListResponseType,
	QueryDenomAuthorityMetadataRequest as QueryDenomAuthorityMetadataRequestType,
	QueryDenomAuthorityMetadataResponse as QueryDenomAuthorityMetadataResponseType,
	QueryDenomMetadataRequest as QueryDenomMetadataRequestType,
	QueryDenomMetadataResponse as QueryDenomMetadataResponseType,
	QueryDenomsFromCreatorRequest as QueryDenomsFromCreatorRequestType,
	QueryDenomsFromCreatorResponse as QueryDenomsFromCreatorResponseType,
	QueryParamsRequest as QueryParamsRequestType,
	QueryParamsResponse as QueryParamsResponseType,
} from "../../types/tokenfactory";

import type { DeepPartial, Exact, MessageFns } from "../common.ts";

interface QueryParamsRequest extends QueryParamsRequestType {}
interface QueryParamsResponse extends QueryParamsResponseType {}
interface QueryDenomAuthorityMetadataRequest extends QueryDenomAuthorityMetadataRequestType {}
interface QueryDenomAuthorityMetadataResponse extends QueryDenomAuthorityMetadataResponseType {}
interface QueryDenomsFromCreatorRequest extends QueryDenomsFromCreatorRequestType {}
interface QueryDenomsFromCreatorResponse extends QueryDenomsFromCreatorResponseType {}
interface QueryDenomMetadataRequest extends QueryDenomMetadataRequestType {}
interface QueryDenomMetadataResponse extends QueryDenomMetadataResponseType {}
interface QueryDenomAllowListRequest extends QueryDenomAllowListRequestType {}
interface QueryDenomAllowListResponse extends QueryDenomAllowListResponseType {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "seiprotocol.seichain.tokenfactory.QueryParamsRequest"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryParamsRequest" as const,

	encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
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

	fromJSON(_: any): QueryParamsRequest {
		return {};
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
		return QueryParamsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		return message;
	},
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "seiprotocol.seichain.tokenfactory.QueryParamsResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryParamsResponse" as const,

	encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
		return QueryParamsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		return message;
	},
};

export const QueryDenomAuthorityMetadataRequest: MessageFns<
	QueryDenomAuthorityMetadataRequest,
	"seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest"
> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataRequest" as const,

	encode(message: QueryDenomAuthorityMetadataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomAuthorityMetadataRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomAuthorityMetadataRequest {
		return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
	},

	toJSON(message: QueryDenomAuthorityMetadataRequest): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataRequest>, I>>(base?: I): QueryDenomAuthorityMetadataRequest {
		return QueryDenomAuthorityMetadataRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataRequest>, I>>(object: I): QueryDenomAuthorityMetadataRequest {
		const message = createBaseQueryDenomAuthorityMetadataRequest();
		message.denom = object.denom ?? "";
		return message;
	},
};

export const QueryDenomAuthorityMetadataResponse: MessageFns<
	QueryDenomAuthorityMetadataResponse,
	"seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse"
> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomAuthorityMetadataResponse" as const,

	encode(message: QueryDenomAuthorityMetadataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.authority_metadata !== undefined) {
			DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomAuthorityMetadataResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomAuthorityMetadataResponse {
		return {
			authority_metadata: isSet(object.authority_metadata) ? DenomAuthorityMetadata.fromJSON(object.authority_metadata) : undefined,
		};
	},

	toJSON(message: QueryDenomAuthorityMetadataResponse): unknown {
		const obj: any = {};
		if (message.authority_metadata !== undefined) {
			obj.authority_metadata = DenomAuthorityMetadata.toJSON(message.authority_metadata);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataResponse>, I>>(base?: I): QueryDenomAuthorityMetadataResponse {
		return QueryDenomAuthorityMetadataResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomAuthorityMetadataResponse>, I>>(object: I): QueryDenomAuthorityMetadataResponse {
		const message = createBaseQueryDenomAuthorityMetadataResponse();
		message.authority_metadata =
			object.authority_metadata !== undefined && object.authority_metadata !== null ? DenomAuthorityMetadata.fromPartial(object.authority_metadata) : undefined;
		return message;
	},
};

export const QueryDenomsFromCreatorRequest: MessageFns<QueryDenomsFromCreatorRequest, "seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorRequest" as const,

	encode(message: QueryDenomsFromCreatorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.creator !== "") {
			writer.uint32(10).string(message.creator);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomsFromCreatorRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.creator = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomsFromCreatorRequest {
		return { creator: isSet(object.creator) ? globalThis.String(object.creator) : "" };
	},

	toJSON(message: QueryDenomsFromCreatorRequest): unknown {
		const obj: any = {};
		if (message.creator !== "") {
			obj.creator = message.creator;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomsFromCreatorRequest>, I>>(base?: I): QueryDenomsFromCreatorRequest {
		return QueryDenomsFromCreatorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorRequest>, I>>(object: I): QueryDenomsFromCreatorRequest {
		const message = createBaseQueryDenomsFromCreatorRequest();
		message.creator = object.creator ?? "";
		return message;
	},
};

export const QueryDenomsFromCreatorResponse: MessageFns<QueryDenomsFromCreatorResponse, "seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomsFromCreatorResponse" as const,

	encode(message: QueryDenomsFromCreatorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.denoms) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomsFromCreatorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denoms.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomsFromCreatorResponse {
		return {
			denoms: globalThis.Array.isArray(object?.denoms) ? object.denoms.map((e: any) => globalThis.String(e)) : [],
		};
	},

	toJSON(message: QueryDenomsFromCreatorResponse): unknown {
		const obj: any = {};
		if (message.denoms?.length) {
			obj.denoms = message.denoms;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomsFromCreatorResponse>, I>>(base?: I): QueryDenomsFromCreatorResponse {
		return QueryDenomsFromCreatorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomsFromCreatorResponse>, I>>(object: I): QueryDenomsFromCreatorResponse {
		const message = createBaseQueryDenomsFromCreatorResponse();
		message.denoms = object.denoms?.map((e) => e) || [];
		return message;
	},
};

export const QueryDenomMetadataRequest: MessageFns<QueryDenomMetadataRequest, "seiprotocol.seichain.tokenfactory.QueryDenomMetadataRequest"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomMetadataRequest" as const,

	encode(message: QueryDenomMetadataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomMetadataRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomMetadataRequest {
		return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
	},

	toJSON(message: QueryDenomMetadataRequest): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(base?: I): QueryDenomMetadataRequest {
		return QueryDenomMetadataRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(object: I): QueryDenomMetadataRequest {
		const message = createBaseQueryDenomMetadataRequest();
		message.denom = object.denom ?? "";
		return message;
	},
};

export const QueryDenomMetadataResponse: MessageFns<QueryDenomMetadataResponse, "seiprotocol.seichain.tokenfactory.QueryDenomMetadataResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomMetadataResponse" as const,

	encode(message: QueryDenomMetadataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.metadata !== undefined) {
			Metadata.encode(message.metadata, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomMetadataResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.metadata = Metadata.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomMetadataResponse {
		return { metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined };
	},

	toJSON(message: QueryDenomMetadataResponse): unknown {
		const obj: any = {};
		if (message.metadata !== undefined) {
			obj.metadata = Metadata.toJSON(message.metadata);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(base?: I): QueryDenomMetadataResponse {
		return QueryDenomMetadataResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(object: I): QueryDenomMetadataResponse {
		const message = createBaseQueryDenomMetadataResponse();
		message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
		return message;
	},
};

export const QueryDenomAllowListRequest: MessageFns<QueryDenomAllowListRequest, "seiprotocol.seichain.tokenfactory.QueryDenomAllowListRequest"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomAllowListRequest" as const,

	encode(message: QueryDenomAllowListRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAllowListRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomAllowListRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomAllowListRequest {
		return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
	},

	toJSON(message: QueryDenomAllowListRequest): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomAllowListRequest>, I>>(base?: I): QueryDenomAllowListRequest {
		return QueryDenomAllowListRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomAllowListRequest>, I>>(object: I): QueryDenomAllowListRequest {
		const message = createBaseQueryDenomAllowListRequest();
		message.denom = object.denom ?? "";
		return message;
	},
};

export const QueryDenomAllowListResponse: MessageFns<QueryDenomAllowListResponse, "seiprotocol.seichain.tokenfactory.QueryDenomAllowListResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.QueryDenomAllowListResponse" as const,

	encode(message: QueryDenomAllowListResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.allow_list !== undefined) {
			AllowList.encode(message.allow_list, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomAllowListResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomAllowListResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.allow_list = AllowList.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomAllowListResponse {
		return { allow_list: isSet(object.allow_list) ? AllowList.fromJSON(object.allow_list) : undefined };
	},

	toJSON(message: QueryDenomAllowListResponse): unknown {
		const obj: any = {};
		if (message.allow_list !== undefined) {
			obj.allow_list = AllowList.toJSON(message.allow_list);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomAllowListResponse>, I>>(base?: I): QueryDenomAllowListResponse {
		return QueryDenomAllowListResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomAllowListResponse>, I>>(object: I): QueryDenomAllowListResponse {
		const message = createBaseQueryDenomAllowListResponse();
		message.allow_list = object.allow_list !== undefined && object.allow_list !== null ? AllowList.fromPartial(object.allow_list) : undefined;
		return message;
	},
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
	return { denom: "" };
}

function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
	return { authority_metadata: undefined };
}

function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
	return { creator: "" };
}

function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
	return { denoms: [] };
}

function createBaseQueryDenomMetadataRequest(): QueryDenomMetadataRequest {
	return { denom: "" };
}

function createBaseQueryDenomMetadataResponse(): QueryDenomMetadataResponse {
	return { metadata: undefined };
}

function createBaseQueryDenomAllowListRequest(): QueryDenomAllowListRequest {
	return { denom: "" };
}

function createBaseQueryDenomAllowListResponse(): QueryDenomAllowListResponse {
	return { allow_list: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
