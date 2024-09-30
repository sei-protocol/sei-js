import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { ParamChange } from "./params";

import type { QueryParamsRequest as QueryParamsRequestType, QueryParamsResponse as QueryParamsResponseType } from "../../../../types/cosmos/params/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface QueryParamsRequest extends QueryParamsRequestType {}
interface QueryParamsResponse extends QueryParamsResponseType {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.params.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.params.v1beta1.QueryParamsRequest" as const,

	encode(message: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.subspace !== "") {
			writer.uint32(10).string(message.subspace);
		}
		if (message.key !== "") {
			writer.uint32(18).string(message.key);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.subspace = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.key = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryParamsRequest {
		return {
			subspace: isSet(object.subspace) ? globalThis.String(object.subspace) : "",
			key: isSet(object.key) ? globalThis.String(object.key) : "",
		};
	},

	toJSON(message: QueryParamsRequest): unknown {
		const obj: any = {};
		if (message.subspace !== "") {
			obj.subspace = message.subspace;
		}
		if (message.key !== "") {
			obj.key = message.key;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
		return QueryParamsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(object: I): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		message.subspace = object.subspace ?? "";
		message.key = object.key ?? "";
		return message;
	},
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.params.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.params.v1beta1.QueryParamsResponse" as const,

	encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.param !== undefined) {
			ParamChange.encode(message.param, writer.uint32(10).fork()).join();
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

					message.param = ParamChange.decode(reader, reader.uint32());
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
		return { param: isSet(object.param) ? ParamChange.fromJSON(object.param) : undefined };
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		if (message.param !== undefined) {
			obj.param = ParamChange.toJSON(message.param);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
		return QueryParamsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
		return message;
	},
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return { subspace: "", key: "" };
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { param: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.params.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.params.v1beta1.QueryParamsResponse", QueryParamsResponse as never],
];
export const aminoConverters = {
	"/cosmos.params.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object }),
	},

	"/cosmos.params.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object }),
	},
};
