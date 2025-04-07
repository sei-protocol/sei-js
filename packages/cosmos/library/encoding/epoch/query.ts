import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Epoch } from "./epoch";

import { Params } from "./params";

import type {
	QueryEpochRequest as QueryEpochRequest_type,
	QueryEpochResponse as QueryEpochResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type
} from "../../types/epoch";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface QueryEpochRequest extends QueryEpochRequest_type {}
export interface QueryEpochResponse extends QueryEpochResponse_type {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "seiprotocol.seichain.epoch.QueryParamsRequest"> = {
	$type: "seiprotocol.seichain.epoch.QueryParamsRequest" as const,

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

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "seiprotocol.seichain.epoch.QueryParamsResponse"> = {
	$type: "seiprotocol.seichain.epoch.QueryParamsResponse" as const,

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

export const QueryEpochRequest: MessageFns<QueryEpochRequest, "seiprotocol.seichain.epoch.QueryEpochRequest"> = {
	$type: "seiprotocol.seichain.epoch.QueryEpochRequest" as const,

	encode(_: QueryEpochRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryEpochRequest();
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

	fromJSON(_: any): QueryEpochRequest {
		return {};
	},

	toJSON(_: QueryEpochRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryEpochRequest>, I>>(base?: I): QueryEpochRequest {
		return QueryEpochRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryEpochRequest>, I>>(_: I): QueryEpochRequest {
		const message = createBaseQueryEpochRequest();
		return message;
	}
};

export const QueryEpochResponse: MessageFns<QueryEpochResponse, "seiprotocol.seichain.epoch.QueryEpochResponse"> = {
	$type: "seiprotocol.seichain.epoch.QueryEpochResponse" as const,

	encode(message: QueryEpochResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.epoch !== undefined) {
			Epoch.encode(message.epoch, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryEpochResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.epoch = Epoch.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryEpochResponse {
		return { epoch: isSet(object.epoch) ? Epoch.fromJSON(object.epoch) : undefined };
	},

	toJSON(message: QueryEpochResponse): unknown {
		const obj: any = {};
		if (message.epoch !== undefined) {
			obj.epoch = Epoch.toJSON(message.epoch);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryEpochResponse>, I>>(base?: I): QueryEpochResponse {
		return QueryEpochResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryEpochResponse>, I>>(object: I): QueryEpochResponse {
		const message = createBaseQueryEpochResponse();
		message.epoch = object.epoch !== undefined && object.epoch !== null ? Epoch.fromPartial(object.epoch) : undefined;
		return message;
	}
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQueryEpochRequest(): QueryEpochRequest {
	return {};
}

function createBaseQueryEpochResponse(): QueryEpochResponse {
	return { epoch: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.epoch.QueryParamsRequest", QueryParamsRequest as never],
	["/seiprotocol.seichain.epoch.QueryParamsResponse", QueryParamsResponse as never],
	["/seiprotocol.seichain.epoch.QueryEpochRequest", QueryEpochRequest as never],
	["/seiprotocol.seichain.epoch.QueryEpochResponse", QueryEpochResponse as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.epoch.QueryParamsRequest": {
		aminoType: "epoch/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.epoch.QueryParamsResponse": {
		aminoType: "epoch/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.epoch.QueryEpochRequest": {
		aminoType: "epoch/QueryEpochRequest",
		toAmino: (message: QueryEpochRequest) => ({ ...message }),
		fromAmino: (object: QueryEpochRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.epoch.QueryEpochResponse": {
		aminoType: "epoch/QueryEpochResponse",
		toAmino: (message: QueryEpochResponse) => ({ ...message }),
		fromAmino: (object: QueryEpochResponse) => ({ ...object })
	}
};
