import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { Grant } from "./feegrant";

import type {
	QueryAllowanceRequest as QueryAllowanceRequest_type,
	QueryAllowanceResponse as QueryAllowanceResponse_type,
	QueryAllowancesByGranterRequest as QueryAllowancesByGranterRequest_type,
	QueryAllowancesByGranterResponse as QueryAllowancesByGranterResponse_type,
	QueryAllowancesRequest as QueryAllowancesRequest_type,
	QueryAllowancesResponse as QueryAllowancesResponse_type
} from "../../../../types/cosmos/feegrant/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryAllowanceRequest extends QueryAllowanceRequest_type {}
export interface QueryAllowanceResponse extends QueryAllowanceResponse_type {}
export interface QueryAllowancesRequest extends QueryAllowancesRequest_type {}
export interface QueryAllowancesResponse extends QueryAllowancesResponse_type {}
export interface QueryAllowancesByGranterRequest extends QueryAllowancesByGranterRequest_type {}
export interface QueryAllowancesByGranterResponse extends QueryAllowancesByGranterResponse_type {}

export const QueryAllowanceRequest: MessageFns<QueryAllowanceRequest, "cosmos.feegrant.v1beta1.QueryAllowanceRequest"> = {
	$type: "cosmos.feegrant.v1beta1.QueryAllowanceRequest" as const,

	encode(message: QueryAllowanceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(18).string(message.grantee);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowanceRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllowanceRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.grantee = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryAllowanceRequest {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : ""
		};
	},

	toJSON(message: QueryAllowanceRequest): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllowanceRequest>, I>>(base?: I): QueryAllowanceRequest {
		return QueryAllowanceRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllowanceRequest>, I>>(object: I): QueryAllowanceRequest {
		const message = createBaseQueryAllowanceRequest();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		return message;
	}
};

export const QueryAllowanceResponse: MessageFns<QueryAllowanceResponse, "cosmos.feegrant.v1beta1.QueryAllowanceResponse"> = {
	$type: "cosmos.feegrant.v1beta1.QueryAllowanceResponse" as const,

	encode(message: QueryAllowanceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.allowance !== undefined) {
			Grant.encode(message.allowance, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowanceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllowanceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.allowance = Grant.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryAllowanceResponse {
		return { allowance: isSet(object.allowance) ? Grant.fromJSON(object.allowance) : undefined };
	},

	toJSON(message: QueryAllowanceResponse): unknown {
		const obj: any = {};
		if (message.allowance !== undefined) {
			obj.allowance = Grant.toJSON(message.allowance);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllowanceResponse>, I>>(base?: I): QueryAllowanceResponse {
		return QueryAllowanceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllowanceResponse>, I>>(object: I): QueryAllowanceResponse {
		const message = createBaseQueryAllowanceResponse();
		message.allowance = object.allowance !== undefined && object.allowance !== null ? Grant.fromPartial(object.allowance) : undefined;
		return message;
	}
};

export const QueryAllowancesRequest: MessageFns<QueryAllowancesRequest, "cosmos.feegrant.v1beta1.QueryAllowancesRequest"> = {
	$type: "cosmos.feegrant.v1beta1.QueryAllowancesRequest" as const,

	encode(message: QueryAllowancesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.grantee !== "") {
			writer.uint32(10).string(message.grantee);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowancesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllowancesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
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

	fromJSON(object: any): QueryAllowancesRequest {
		return {
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryAllowancesRequest): unknown {
		const obj: any = {};
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllowancesRequest>, I>>(base?: I): QueryAllowancesRequest {
		return QueryAllowancesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllowancesRequest>, I>>(object: I): QueryAllowancesRequest {
		const message = createBaseQueryAllowancesRequest();
		message.grantee = object.grantee ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryAllowancesResponse: MessageFns<QueryAllowancesResponse, "cosmos.feegrant.v1beta1.QueryAllowancesResponse"> = {
	$type: "cosmos.feegrant.v1beta1.QueryAllowancesResponse" as const,

	encode(message: QueryAllowancesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.allowances) {
			Grant.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowancesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllowancesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.allowances.push(Grant.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryAllowancesResponse {
		return {
			allowances: globalThis.Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryAllowancesResponse): unknown {
		const obj: any = {};
		if (message.allowances?.length) {
			obj.allowances = message.allowances.map((e) => Grant.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllowancesResponse>, I>>(base?: I): QueryAllowancesResponse {
		return QueryAllowancesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllowancesResponse>, I>>(object: I): QueryAllowancesResponse {
		const message = createBaseQueryAllowancesResponse();
		message.allowances = object.allowances?.map((e) => Grant.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryAllowancesByGranterRequest: MessageFns<QueryAllowancesByGranterRequest, "cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest"> = {
	$type: "cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest" as const,

	encode(message: QueryAllowancesByGranterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowancesByGranterRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllowancesByGranterRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
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

	fromJSON(object: any): QueryAllowancesByGranterRequest {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryAllowancesByGranterRequest): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllowancesByGranterRequest>, I>>(base?: I): QueryAllowancesByGranterRequest {
		return QueryAllowancesByGranterRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllowancesByGranterRequest>, I>>(object: I): QueryAllowancesByGranterRequest {
		const message = createBaseQueryAllowancesByGranterRequest();
		message.granter = object.granter ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryAllowancesByGranterResponse: MessageFns<QueryAllowancesByGranterResponse, "cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse"> = {
	$type: "cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse" as const,

	encode(message: QueryAllowancesByGranterResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.allowances) {
			Grant.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllowancesByGranterResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllowancesByGranterResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.allowances.push(Grant.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryAllowancesByGranterResponse {
		return {
			allowances: globalThis.Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryAllowancesByGranterResponse): unknown {
		const obj: any = {};
		if (message.allowances?.length) {
			obj.allowances = message.allowances.map((e) => Grant.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllowancesByGranterResponse>, I>>(base?: I): QueryAllowancesByGranterResponse {
		return QueryAllowancesByGranterResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllowancesByGranterResponse>, I>>(object: I): QueryAllowancesByGranterResponse {
		const message = createBaseQueryAllowancesByGranterResponse();
		message.allowances = object.allowances?.map((e) => Grant.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

function createBaseQueryAllowanceRequest(): QueryAllowanceRequest {
	return { granter: "", grantee: "" };
}

function createBaseQueryAllowanceResponse(): QueryAllowanceResponse {
	return { allowance: undefined };
}

function createBaseQueryAllowancesRequest(): QueryAllowancesRequest {
	return { grantee: "", pagination: undefined };
}

function createBaseQueryAllowancesResponse(): QueryAllowancesResponse {
	return { allowances: [], pagination: undefined };
}

function createBaseQueryAllowancesByGranterRequest(): QueryAllowancesByGranterRequest {
	return { granter: "", pagination: undefined };
}

function createBaseQueryAllowancesByGranterResponse(): QueryAllowancesByGranterResponse {
	return { allowances: [], pagination: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.feegrant.v1beta1.QueryAllowanceRequest", QueryAllowanceRequest as never],
	["/cosmos.feegrant.v1beta1.QueryAllowanceResponse", QueryAllowanceResponse as never],
	["/cosmos.feegrant.v1beta1.QueryAllowancesRequest", QueryAllowancesRequest as never],
	["/cosmos.feegrant.v1beta1.QueryAllowancesResponse", QueryAllowancesResponse as never],
	["/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest", QueryAllowancesByGranterRequest as never],
	["/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse", QueryAllowancesByGranterResponse as never]
];
export const aminoConverters = {
	"/cosmos.feegrant.v1beta1.QueryAllowanceRequest": {
		aminoType: "cosmos-sdk/QueryAllowanceRequest",
		toAmino: (message: QueryAllowanceRequest) => ({ ...message }),
		fromAmino: (object: QueryAllowanceRequest) => ({ ...object })
	},

	"/cosmos.feegrant.v1beta1.QueryAllowanceResponse": {
		aminoType: "cosmos-sdk/QueryAllowanceResponse",
		toAmino: (message: QueryAllowanceResponse) => ({ ...message }),
		fromAmino: (object: QueryAllowanceResponse) => ({ ...object })
	},

	"/cosmos.feegrant.v1beta1.QueryAllowancesRequest": {
		aminoType: "cosmos-sdk/QueryAllowancesRequest",
		toAmino: (message: QueryAllowancesRequest) => ({ ...message }),
		fromAmino: (object: QueryAllowancesRequest) => ({ ...object })
	},

	"/cosmos.feegrant.v1beta1.QueryAllowancesResponse": {
		aminoType: "cosmos-sdk/QueryAllowancesResponse",
		toAmino: (message: QueryAllowancesResponse) => ({ ...message }),
		fromAmino: (object: QueryAllowancesResponse) => ({ ...object })
	},

	"/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest": {
		aminoType: "cosmos-sdk/QueryAllowancesByGranterRequest",
		toAmino: (message: QueryAllowancesByGranterRequest) => ({ ...message }),
		fromAmino: (object: QueryAllowancesByGranterRequest) => ({ ...object })
	},

	"/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse": {
		aminoType: "cosmos-sdk/QueryAllowancesByGranterResponse",
		toAmino: (message: QueryAllowancesByGranterResponse) => ({ ...message }),
		fromAmino: (object: QueryAllowancesByGranterResponse) => ({ ...object })
	}
};
