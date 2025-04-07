import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { Params } from "./auth";

import type {
	QueryAccountRequest as QueryAccountRequest_type,
	QueryAccountResponse as QueryAccountResponse_type,
	QueryAccountsRequest as QueryAccountsRequest_type,
	QueryAccountsResponse as QueryAccountsResponse_type,
	QueryNextAccountNumberRequest as QueryNextAccountNumberRequest_type,
	QueryNextAccountNumberResponse as QueryNextAccountNumberResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type
} from "../../../../types/cosmos/auth/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryAccountsRequest extends QueryAccountsRequest_type {}
export interface QueryAccountsResponse extends QueryAccountsResponse_type {}
export interface QueryAccountRequest extends QueryAccountRequest_type {}
export interface QueryAccountResponse extends QueryAccountResponse_type {}
export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface QueryNextAccountNumberRequest extends QueryNextAccountNumberRequest_type {}
export interface QueryNextAccountNumberResponse extends QueryNextAccountNumberResponse_type {}

export const QueryAccountsRequest: MessageFns<QueryAccountsRequest, "cosmos.auth.v1beta1.QueryAccountsRequest"> = {
	$type: "cosmos.auth.v1beta1.QueryAccountsRequest" as const,

	encode(message: QueryAccountsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAccountsRequest();
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

	fromJSON(object: any): QueryAccountsRequest {
		return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
	},

	toJSON(message: QueryAccountsRequest): unknown {
		const obj: any = {};
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(base?: I): QueryAccountsRequest {
		return QueryAccountsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAccountsRequest>, I>>(object: I): QueryAccountsRequest {
		const message = createBaseQueryAccountsRequest();
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryAccountsResponse: MessageFns<QueryAccountsResponse, "cosmos.auth.v1beta1.QueryAccountsResponse"> = {
	$type: "cosmos.auth.v1beta1.QueryAccountsResponse" as const,

	encode(message: QueryAccountsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.accounts) {
			Any.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAccountsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.accounts.push(Any.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryAccountsResponse {
		return {
			accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Any.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryAccountsResponse): unknown {
		const obj: any = {};
		if (message.accounts?.length) {
			obj.accounts = message.accounts.map((e) => Any.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAccountsResponse>, I>>(base?: I): QueryAccountsResponse {
		return QueryAccountsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAccountsResponse>, I>>(object: I): QueryAccountsResponse {
		const message = createBaseQueryAccountsResponse();
		message.accounts = object.accounts?.map((e) => Any.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryAccountRequest: MessageFns<QueryAccountRequest, "cosmos.auth.v1beta1.QueryAccountRequest"> = {
	$type: "cosmos.auth.v1beta1.QueryAccountRequest" as const,

	encode(message: QueryAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAccountRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
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

	fromJSON(object: any): QueryAccountRequest {
		return { address: isSet(object.address) ? globalThis.String(object.address) : "" };
	},

	toJSON(message: QueryAccountRequest): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(base?: I): QueryAccountRequest {
		return QueryAccountRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(object: I): QueryAccountRequest {
		const message = createBaseQueryAccountRequest();
		message.address = object.address ?? "";
		return message;
	}
};

export const QueryAccountResponse: MessageFns<QueryAccountResponse, "cosmos.auth.v1beta1.QueryAccountResponse"> = {
	$type: "cosmos.auth.v1beta1.QueryAccountResponse" as const,

	encode(message: QueryAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.account !== undefined) {
			Any.encode(message.account, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAccountResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.account = Any.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryAccountResponse {
		return { account: isSet(object.account) ? Any.fromJSON(object.account) : undefined };
	},

	toJSON(message: QueryAccountResponse): unknown {
		const obj: any = {};
		if (message.account !== undefined) {
			obj.account = Any.toJSON(message.account);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAccountResponse>, I>>(base?: I): QueryAccountResponse {
		return QueryAccountResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAccountResponse>, I>>(object: I): QueryAccountResponse {
		const message = createBaseQueryAccountResponse();
		message.account = object.account !== undefined && object.account !== null ? Any.fromPartial(object.account) : undefined;
		return message;
	}
};

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.auth.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.auth.v1beta1.QueryParamsRequest" as const,

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

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.auth.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.auth.v1beta1.QueryParamsResponse" as const,

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

export const QueryNextAccountNumberRequest: MessageFns<QueryNextAccountNumberRequest, "cosmos.auth.v1beta1.QueryNextAccountNumberRequest"> = {
	$type: "cosmos.auth.v1beta1.QueryNextAccountNumberRequest" as const,

	encode(_: QueryNextAccountNumberRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryNextAccountNumberRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryNextAccountNumberRequest();
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

	fromJSON(_: any): QueryNextAccountNumberRequest {
		return {};
	},

	toJSON(_: QueryNextAccountNumberRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryNextAccountNumberRequest>, I>>(base?: I): QueryNextAccountNumberRequest {
		return QueryNextAccountNumberRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryNextAccountNumberRequest>, I>>(_: I): QueryNextAccountNumberRequest {
		const message = createBaseQueryNextAccountNumberRequest();
		return message;
	}
};

export const QueryNextAccountNumberResponse: MessageFns<QueryNextAccountNumberResponse, "cosmos.auth.v1beta1.QueryNextAccountNumberResponse"> = {
	$type: "cosmos.auth.v1beta1.QueryNextAccountNumberResponse" as const,

	encode(message: QueryNextAccountNumberResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.count !== 0) {
			writer.uint32(8).uint64(message.count);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryNextAccountNumberResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryNextAccountNumberResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.count = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryNextAccountNumberResponse {
		return { count: isSet(object.count) ? globalThis.Number(object.count) : 0 };
	},

	toJSON(message: QueryNextAccountNumberResponse): unknown {
		const obj: any = {};
		if (message.count !== 0) {
			obj.count = Math.round(message.count);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryNextAccountNumberResponse>, I>>(base?: I): QueryNextAccountNumberResponse {
		return QueryNextAccountNumberResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryNextAccountNumberResponse>, I>>(object: I): QueryNextAccountNumberResponse {
		const message = createBaseQueryNextAccountNumberResponse();
		message.count = object.count ?? 0;
		return message;
	}
};

function createBaseQueryAccountsRequest(): QueryAccountsRequest {
	return { pagination: undefined };
}

function createBaseQueryAccountsResponse(): QueryAccountsResponse {
	return { accounts: [], pagination: undefined };
}

function createBaseQueryAccountRequest(): QueryAccountRequest {
	return { address: "" };
}

function createBaseQueryAccountResponse(): QueryAccountResponse {
	return { account: undefined };
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQueryNextAccountNumberRequest(): QueryNextAccountNumberRequest {
	return {};
}

function createBaseQueryNextAccountNumberResponse(): QueryNextAccountNumberResponse {
	return { count: 0 };
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
	["/cosmos.auth.v1beta1.QueryAccountsRequest", QueryAccountsRequest as never],
	["/cosmos.auth.v1beta1.QueryAccountsResponse", QueryAccountsResponse as never],
	["/cosmos.auth.v1beta1.QueryAccountRequest", QueryAccountRequest as never],
	["/cosmos.auth.v1beta1.QueryAccountResponse", QueryAccountResponse as never],
	["/cosmos.auth.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.auth.v1beta1.QueryParamsResponse", QueryParamsResponse as never]
];
export const aminoConverters = {
	"/cosmos.auth.v1beta1.QueryAccountsRequest": {
		aminoType: "cosmos-sdk/QueryAccountsRequest",
		toAmino: (message: QueryAccountsRequest) => ({ ...message }),
		fromAmino: (object: QueryAccountsRequest) => ({ ...object })
	},

	"/cosmos.auth.v1beta1.QueryAccountsResponse": {
		aminoType: "cosmos-sdk/QueryAccountsResponse",
		toAmino: (message: QueryAccountsResponse) => ({ ...message }),
		fromAmino: (object: QueryAccountsResponse) => ({ ...object })
	},

	"/cosmos.auth.v1beta1.QueryAccountRequest": {
		aminoType: "cosmos-sdk/QueryAccountRequest",
		toAmino: (message: QueryAccountRequest) => ({ ...message }),
		fromAmino: (object: QueryAccountRequest) => ({ ...object })
	},

	"/cosmos.auth.v1beta1.QueryAccountResponse": {
		aminoType: "cosmos-sdk/QueryAccountResponse",
		toAmino: (message: QueryAccountResponse) => ({ ...message }),
		fromAmino: (object: QueryAccountResponse) => ({ ...object })
	},

	"/cosmos.auth.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object })
	},

	"/cosmos.auth.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object })
	}
};
