import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { MessageDependencyMapping, WasmDependencyMapping } from "../accesscontrol/accesscontrol";

import { Params } from "./genesis";

import type {
	ListResourceDependencyMappingRequest as ListResourceDependencyMappingRequest_type,
	ListResourceDependencyMappingResponse as ListResourceDependencyMappingResponse_type,
	ListWasmDependencyMappingRequest as ListWasmDependencyMappingRequest_type,
	ListWasmDependencyMappingResponse as ListWasmDependencyMappingResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type,
	ResourceDependencyMappingFromMessageKeyRequest as ResourceDependencyMappingFromMessageKeyRequest_type,
	ResourceDependencyMappingFromMessageKeyResponse as ResourceDependencyMappingFromMessageKeyResponse_type,
	WasmDependencyMappingRequest as WasmDependencyMappingRequest_type,
	WasmDependencyMappingResponse as WasmDependencyMappingResponse_type,
} from "../../../types/cosmos/accesscontrol_x";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}
export interface ResourceDependencyMappingFromMessageKeyRequest extends ResourceDependencyMappingFromMessageKeyRequest_type {}
export interface ResourceDependencyMappingFromMessageKeyResponse extends ResourceDependencyMappingFromMessageKeyResponse_type {}
export interface WasmDependencyMappingRequest extends WasmDependencyMappingRequest_type {}
export interface WasmDependencyMappingResponse extends WasmDependencyMappingResponse_type {}
export interface ListResourceDependencyMappingRequest extends ListResourceDependencyMappingRequest_type {}
export interface ListResourceDependencyMappingResponse extends ListResourceDependencyMappingResponse_type {}
export interface ListWasmDependencyMappingRequest extends ListWasmDependencyMappingRequest_type {}
export interface ListWasmDependencyMappingResponse extends ListWasmDependencyMappingResponse_type {}

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.accesscontrol_x.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.QueryParamsRequest" as const,

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

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.accesscontrol_x.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.QueryParamsResponse" as const,

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

export const ResourceDependencyMappingFromMessageKeyRequest: MessageFns<
	ResourceDependencyMappingFromMessageKeyRequest,
	"cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyRequest"
> = {
	$type: "cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyRequest" as const,

	encode(message: ResourceDependencyMappingFromMessageKeyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.message_key !== "") {
			writer.uint32(10).string(message.message_key);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResourceDependencyMappingFromMessageKeyRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.message_key = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResourceDependencyMappingFromMessageKeyRequest {
		return { message_key: isSet(object.message_key) ? globalThis.String(object.message_key) : "" };
	},

	toJSON(message: ResourceDependencyMappingFromMessageKeyRequest): unknown {
		const obj: any = {};
		if (message.message_key !== "") {
			obj.message_key = message.message_key;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResourceDependencyMappingFromMessageKeyRequest>, I>>(base?: I): ResourceDependencyMappingFromMessageKeyRequest {
		return ResourceDependencyMappingFromMessageKeyRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResourceDependencyMappingFromMessageKeyRequest>, I>>(object: I): ResourceDependencyMappingFromMessageKeyRequest {
		const message = createBaseResourceDependencyMappingFromMessageKeyRequest();
		message.message_key = object.message_key ?? "";
		return message;
	},
};

export const ResourceDependencyMappingFromMessageKeyResponse: MessageFns<
	ResourceDependencyMappingFromMessageKeyResponse,
	"cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyResponse"
> = {
	$type: "cosmos.accesscontrol_x.v1beta1.ResourceDependencyMappingFromMessageKeyResponse" as const,

	encode(message: ResourceDependencyMappingFromMessageKeyResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.message_dependency_mapping !== undefined) {
			MessageDependencyMapping.encode(message.message_dependency_mapping, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResourceDependencyMappingFromMessageKeyResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.message_dependency_mapping = MessageDependencyMapping.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResourceDependencyMappingFromMessageKeyResponse {
		return {
			message_dependency_mapping: isSet(object.message_dependency_mapping) ? MessageDependencyMapping.fromJSON(object.message_dependency_mapping) : undefined,
		};
	},

	toJSON(message: ResourceDependencyMappingFromMessageKeyResponse): unknown {
		const obj: any = {};
		if (message.message_dependency_mapping !== undefined) {
			obj.message_dependency_mapping = MessageDependencyMapping.toJSON(message.message_dependency_mapping);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResourceDependencyMappingFromMessageKeyResponse>, I>>(base?: I): ResourceDependencyMappingFromMessageKeyResponse {
		return ResourceDependencyMappingFromMessageKeyResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResourceDependencyMappingFromMessageKeyResponse>, I>>(object: I): ResourceDependencyMappingFromMessageKeyResponse {
		const message = createBaseResourceDependencyMappingFromMessageKeyResponse();
		message.message_dependency_mapping =
			object.message_dependency_mapping !== undefined && object.message_dependency_mapping !== null
				? MessageDependencyMapping.fromPartial(object.message_dependency_mapping)
				: undefined;
		return message;
	},
};

export const WasmDependencyMappingRequest: MessageFns<WasmDependencyMappingRequest, "cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingRequest"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingRequest" as const,

	encode(message: WasmDependencyMappingRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.contract_address !== "") {
			writer.uint32(10).string(message.contract_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): WasmDependencyMappingRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWasmDependencyMappingRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
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

	fromJSON(object: any): WasmDependencyMappingRequest {
		return { contract_address: isSet(object.contract_address) ? globalThis.String(object.contract_address) : "" };
	},

	toJSON(message: WasmDependencyMappingRequest): unknown {
		const obj: any = {};
		if (message.contract_address !== "") {
			obj.contract_address = message.contract_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<WasmDependencyMappingRequest>, I>>(base?: I): WasmDependencyMappingRequest {
		return WasmDependencyMappingRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<WasmDependencyMappingRequest>, I>>(object: I): WasmDependencyMappingRequest {
		const message = createBaseWasmDependencyMappingRequest();
		message.contract_address = object.contract_address ?? "";
		return message;
	},
};

export const WasmDependencyMappingResponse: MessageFns<WasmDependencyMappingResponse, "cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingResponse"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.WasmDependencyMappingResponse" as const,

	encode(message: WasmDependencyMappingResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.wasm_dependency_mapping !== undefined) {
			WasmDependencyMapping.encode(message.wasm_dependency_mapping, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): WasmDependencyMappingResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWasmDependencyMappingResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.wasm_dependency_mapping = WasmDependencyMapping.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): WasmDependencyMappingResponse {
		return {
			wasm_dependency_mapping: isSet(object.wasm_dependency_mapping) ? WasmDependencyMapping.fromJSON(object.wasm_dependency_mapping) : undefined,
		};
	},

	toJSON(message: WasmDependencyMappingResponse): unknown {
		const obj: any = {};
		if (message.wasm_dependency_mapping !== undefined) {
			obj.wasm_dependency_mapping = WasmDependencyMapping.toJSON(message.wasm_dependency_mapping);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<WasmDependencyMappingResponse>, I>>(base?: I): WasmDependencyMappingResponse {
		return WasmDependencyMappingResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<WasmDependencyMappingResponse>, I>>(object: I): WasmDependencyMappingResponse {
		const message = createBaseWasmDependencyMappingResponse();
		message.wasm_dependency_mapping =
			object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null
				? WasmDependencyMapping.fromPartial(object.wasm_dependency_mapping)
				: undefined;
		return message;
	},
};

export const ListResourceDependencyMappingRequest: MessageFns<
	ListResourceDependencyMappingRequest,
	"cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest"
> = {
	$type: "cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingRequest" as const,

	encode(_: ListResourceDependencyMappingRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ListResourceDependencyMappingRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseListResourceDependencyMappingRequest();
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

	fromJSON(_: any): ListResourceDependencyMappingRequest {
		return {};
	},

	toJSON(_: ListResourceDependencyMappingRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<ListResourceDependencyMappingRequest>, I>>(base?: I): ListResourceDependencyMappingRequest {
		return ListResourceDependencyMappingRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ListResourceDependencyMappingRequest>, I>>(_: I): ListResourceDependencyMappingRequest {
		const message = createBaseListResourceDependencyMappingRequest();
		return message;
	},
};

export const ListResourceDependencyMappingResponse: MessageFns<
	ListResourceDependencyMappingResponse,
	"cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingResponse"
> = {
	$type: "cosmos.accesscontrol_x.v1beta1.ListResourceDependencyMappingResponse" as const,

	encode(message: ListResourceDependencyMappingResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.message_dependency_mapping_list) {
			MessageDependencyMapping.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ListResourceDependencyMappingResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseListResourceDependencyMappingResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.message_dependency_mapping_list.push(MessageDependencyMapping.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ListResourceDependencyMappingResponse {
		return {
			message_dependency_mapping_list: globalThis.Array.isArray(object?.message_dependency_mapping_list)
				? object.message_dependency_mapping_list.map((e: any) => MessageDependencyMapping.fromJSON(e))
				: [],
		};
	},

	toJSON(message: ListResourceDependencyMappingResponse): unknown {
		const obj: any = {};
		if (message.message_dependency_mapping_list?.length) {
			obj.message_dependency_mapping_list = message.message_dependency_mapping_list.map((e) => MessageDependencyMapping.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ListResourceDependencyMappingResponse>, I>>(base?: I): ListResourceDependencyMappingResponse {
		return ListResourceDependencyMappingResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ListResourceDependencyMappingResponse>, I>>(object: I): ListResourceDependencyMappingResponse {
		const message = createBaseListResourceDependencyMappingResponse();
		message.message_dependency_mapping_list = object.message_dependency_mapping_list?.map((e) => MessageDependencyMapping.fromPartial(e)) || [];
		return message;
	},
};

export const ListWasmDependencyMappingRequest: MessageFns<ListWasmDependencyMappingRequest, "cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest"> =
	{
		$type: "cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingRequest" as const,

		encode(_: ListWasmDependencyMappingRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): ListWasmDependencyMappingRequest {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseListWasmDependencyMappingRequest();
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

		fromJSON(_: any): ListWasmDependencyMappingRequest {
			return {};
		},

		toJSON(_: ListWasmDependencyMappingRequest): unknown {
			const obj: any = {};
			return obj;
		},

		create<I extends Exact<DeepPartial<ListWasmDependencyMappingRequest>, I>>(base?: I): ListWasmDependencyMappingRequest {
			return ListWasmDependencyMappingRequest.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<ListWasmDependencyMappingRequest>, I>>(_: I): ListWasmDependencyMappingRequest {
			const message = createBaseListWasmDependencyMappingRequest();
			return message;
		},
	};

export const ListWasmDependencyMappingResponse: MessageFns<
	ListWasmDependencyMappingResponse,
	"cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingResponse"
> = {
	$type: "cosmos.accesscontrol_x.v1beta1.ListWasmDependencyMappingResponse" as const,

	encode(message: ListWasmDependencyMappingResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.wasm_dependency_mapping_list) {
			WasmDependencyMapping.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ListWasmDependencyMappingResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseListWasmDependencyMappingResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.wasm_dependency_mapping_list.push(WasmDependencyMapping.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ListWasmDependencyMappingResponse {
		return {
			wasm_dependency_mapping_list: globalThis.Array.isArray(object?.wasm_dependency_mapping_list)
				? object.wasm_dependency_mapping_list.map((e: any) => WasmDependencyMapping.fromJSON(e))
				: [],
		};
	},

	toJSON(message: ListWasmDependencyMappingResponse): unknown {
		const obj: any = {};
		if (message.wasm_dependency_mapping_list?.length) {
			obj.wasm_dependency_mapping_list = message.wasm_dependency_mapping_list.map((e) => WasmDependencyMapping.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ListWasmDependencyMappingResponse>, I>>(base?: I): ListWasmDependencyMappingResponse {
		return ListWasmDependencyMappingResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ListWasmDependencyMappingResponse>, I>>(object: I): ListWasmDependencyMappingResponse {
		const message = createBaseListWasmDependencyMappingResponse();
		message.wasm_dependency_mapping_list = object.wasm_dependency_mapping_list?.map((e) => WasmDependencyMapping.fromPartial(e)) || [];
		return message;
	},
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseResourceDependencyMappingFromMessageKeyRequest(): ResourceDependencyMappingFromMessageKeyRequest {
	return { message_key: "" };
}

function createBaseResourceDependencyMappingFromMessageKeyResponse(): ResourceDependencyMappingFromMessageKeyResponse {
	return { message_dependency_mapping: undefined };
}

function createBaseWasmDependencyMappingRequest(): WasmDependencyMappingRequest {
	return { contract_address: "" };
}

function createBaseWasmDependencyMappingResponse(): WasmDependencyMappingResponse {
	return { wasm_dependency_mapping: undefined };
}

function createBaseListResourceDependencyMappingRequest(): ListResourceDependencyMappingRequest {
	return {};
}

function createBaseListResourceDependencyMappingResponse(): ListResourceDependencyMappingResponse {
	return { message_dependency_mapping_list: [] };
}

function createBaseListWasmDependencyMappingRequest(): ListWasmDependencyMappingRequest {
	return {};
}

function createBaseListWasmDependencyMappingResponse(): ListWasmDependencyMappingResponse {
	return { wasm_dependency_mapping_list: [] };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest", QueryParamsRequest as never]];
export const aminoConverters = {
	"/cosmos.accesscontrol_x.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object }),
	},
};
