import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { Params, ValidatorSigningInfo } from "./slashing";

import type {
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type,
	QuerySigningInfoRequest as QuerySigningInfoRequest_type,
	QuerySigningInfoResponse as QuerySigningInfoResponse_type,
	QuerySigningInfosRequest as QuerySigningInfosRequest_type,
	QuerySigningInfosResponse as QuerySigningInfosResponse_type
} from "../../../../types/cosmos/slashing/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface QuerySigningInfoRequest extends QuerySigningInfoRequest_type {}
export interface QuerySigningInfoResponse extends QuerySigningInfoResponse_type {}
export interface QuerySigningInfosRequest extends QuerySigningInfosRequest_type {}
export interface QuerySigningInfosResponse extends QuerySigningInfosResponse_type {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.slashing.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.slashing.v1beta1.QueryParamsRequest" as const,

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
	}
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.slashing.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.slashing.v1beta1.QueryParamsResponse" as const,

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
	}
};

export const QuerySigningInfoRequest: MessageFns<QuerySigningInfoRequest, "cosmos.slashing.v1beta1.QuerySigningInfoRequest"> = {
	$type: "cosmos.slashing.v1beta1.QuerySigningInfoRequest" as const,

	encode(message: QuerySigningInfoRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.cons_address !== "") {
			writer.uint32(10).string(message.cons_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfoRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySigningInfoRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.cons_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySigningInfoRequest {
		return { cons_address: isSet(object.cons_address) ? globalThis.String(object.cons_address) : "" };
	},

	toJSON(message: QuerySigningInfoRequest): unknown {
		const obj: any = {};
		if (message.cons_address !== "") {
			obj.cons_address = message.cons_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySigningInfoRequest>, I>>(base?: I): QuerySigningInfoRequest {
		return QuerySigningInfoRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySigningInfoRequest>, I>>(object: I): QuerySigningInfoRequest {
		const message = createBaseQuerySigningInfoRequest();
		message.cons_address = object.cons_address ?? "";
		return message;
	}
};

export const QuerySigningInfoResponse: MessageFns<QuerySigningInfoResponse, "cosmos.slashing.v1beta1.QuerySigningInfoResponse"> = {
	$type: "cosmos.slashing.v1beta1.QuerySigningInfoResponse" as const,

	encode(message: QuerySigningInfoResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.val_signing_info !== undefined) {
			ValidatorSigningInfo.encode(message.val_signing_info, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfoResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySigningInfoResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.val_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySigningInfoResponse {
		return {
			val_signing_info: isSet(object.val_signing_info) ? ValidatorSigningInfo.fromJSON(object.val_signing_info) : undefined
		};
	},

	toJSON(message: QuerySigningInfoResponse): unknown {
		const obj: any = {};
		if (message.val_signing_info !== undefined) {
			obj.val_signing_info = ValidatorSigningInfo.toJSON(message.val_signing_info);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySigningInfoResponse>, I>>(base?: I): QuerySigningInfoResponse {
		return QuerySigningInfoResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySigningInfoResponse>, I>>(object: I): QuerySigningInfoResponse {
		const message = createBaseQuerySigningInfoResponse();
		message.val_signing_info =
			object.val_signing_info !== undefined && object.val_signing_info !== null ? ValidatorSigningInfo.fromPartial(object.val_signing_info) : undefined;
		return message;
	}
};

export const QuerySigningInfosRequest: MessageFns<QuerySigningInfosRequest, "cosmos.slashing.v1beta1.QuerySigningInfosRequest"> = {
	$type: "cosmos.slashing.v1beta1.QuerySigningInfosRequest" as const,

	encode(message: QuerySigningInfosRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfosRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySigningInfosRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySigningInfosRequest {
		return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
	},

	toJSON(message: QuerySigningInfosRequest): unknown {
		const obj: any = {};
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySigningInfosRequest>, I>>(base?: I): QuerySigningInfosRequest {
		return QuerySigningInfosRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySigningInfosRequest>, I>>(object: I): QuerySigningInfosRequest {
		const message = createBaseQuerySigningInfosRequest();
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QuerySigningInfosResponse: MessageFns<QuerySigningInfosResponse, "cosmos.slashing.v1beta1.QuerySigningInfosResponse"> = {
	$type: "cosmos.slashing.v1beta1.QuerySigningInfosResponse" as const,

	encode(message: QuerySigningInfosResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.info) {
			ValidatorSigningInfo.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfosResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySigningInfosResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySigningInfosResponse {
		return {
			info: globalThis.Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QuerySigningInfosResponse): unknown {
		const obj: any = {};
		if (message.info?.length) {
			obj.info = message.info.map((e) => ValidatorSigningInfo.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySigningInfosResponse>, I>>(base?: I): QuerySigningInfosResponse {
		return QuerySigningInfosResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySigningInfosResponse>, I>>(object: I): QuerySigningInfosResponse {
		const message = createBaseQuerySigningInfosResponse();
		message.info = object.info?.map((e) => ValidatorSigningInfo.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQuerySigningInfoRequest(): QuerySigningInfoRequest {
	return { cons_address: "" };
}

function createBaseQuerySigningInfoResponse(): QuerySigningInfoResponse {
	return { val_signing_info: undefined };
}

function createBaseQuerySigningInfosRequest(): QuerySigningInfosRequest {
	return { pagination: undefined };
}

function createBaseQuerySigningInfosResponse(): QuerySigningInfosResponse {
	return { info: [], pagination: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.slashing.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.slashing.v1beta1.QueryParamsResponse", QueryParamsResponse as never],
	["/cosmos.slashing.v1beta1.QuerySigningInfoRequest", QuerySigningInfoRequest as never],
	["/cosmos.slashing.v1beta1.QuerySigningInfoResponse", QuerySigningInfoResponse as never],
	["/cosmos.slashing.v1beta1.QuerySigningInfosRequest", QuerySigningInfosRequest as never],
	["/cosmos.slashing.v1beta1.QuerySigningInfosResponse", QuerySigningInfosResponse as never]
];
export const aminoConverters = {
	"/cosmos.slashing.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.QuerySigningInfoRequest": {
		aminoType: "cosmos-sdk/QuerySigningInfoRequest",
		toAmino: (message: QuerySigningInfoRequest) => ({ ...message }),
		fromAmino: (object: QuerySigningInfoRequest) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.QuerySigningInfoResponse": {
		aminoType: "cosmos-sdk/QuerySigningInfoResponse",
		toAmino: (message: QuerySigningInfoResponse) => ({ ...message }),
		fromAmino: (object: QuerySigningInfoResponse) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.QuerySigningInfosRequest": {
		aminoType: "cosmos-sdk/QuerySigningInfosRequest",
		toAmino: (message: QuerySigningInfosRequest) => ({ ...message }),
		fromAmino: (object: QuerySigningInfosRequest) => ({ ...object })
	},

	"/cosmos.slashing.v1beta1.QuerySigningInfosResponse": {
		aminoType: "cosmos-sdk/QuerySigningInfosResponse",
		toAmino: (message: QuerySigningInfosResponse) => ({ ...message }),
		fromAmino: (object: QuerySigningInfosResponse) => ({ ...object })
	}
};
