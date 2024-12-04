import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	ListAllInterfacesRequest as ListAllInterfacesRequest_type,
	ListAllInterfacesResponse as ListAllInterfacesResponse_type,
	ListImplementationsRequest as ListImplementationsRequest_type,
	ListImplementationsResponse as ListImplementationsResponse_type,
} from "../../../../../types/cosmos/base/reflection/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface ListAllInterfacesRequest extends ListAllInterfacesRequest_type {}
export interface ListAllInterfacesResponse extends ListAllInterfacesResponse_type {}
export interface ListImplementationsRequest extends ListImplementationsRequest_type {}
export interface ListImplementationsResponse extends ListImplementationsResponse_type {}

export const ListAllInterfacesRequest: MessageFns<ListAllInterfacesRequest, "cosmos.base.reflection.v1beta1.ListAllInterfacesRequest"> = {
	$type: "cosmos.base.reflection.v1beta1.ListAllInterfacesRequest" as const,

	encode(_: ListAllInterfacesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseListAllInterfacesRequest();
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

	fromJSON(_: any): ListAllInterfacesRequest {
		return {};
	},

	toJSON(_: ListAllInterfacesRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<ListAllInterfacesRequest>, I>>(base?: I): ListAllInterfacesRequest {
		return ListAllInterfacesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ListAllInterfacesRequest>, I>>(_: I): ListAllInterfacesRequest {
		const message = createBaseListAllInterfacesRequest();
		return message;
	},
};

export const ListAllInterfacesResponse: MessageFns<ListAllInterfacesResponse, "cosmos.base.reflection.v1beta1.ListAllInterfacesResponse"> = {
	$type: "cosmos.base.reflection.v1beta1.ListAllInterfacesResponse" as const,

	encode(message: ListAllInterfacesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.interface_names) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseListAllInterfacesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.interface_names.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ListAllInterfacesResponse {
		return {
			interface_names: globalThis.Array.isArray(object?.interface_names) ? object.interface_names.map((e: any) => globalThis.String(e)) : [],
		};
	},

	toJSON(message: ListAllInterfacesResponse): unknown {
		const obj: any = {};
		if (message.interface_names?.length) {
			obj.interface_names = message.interface_names;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ListAllInterfacesResponse>, I>>(base?: I): ListAllInterfacesResponse {
		return ListAllInterfacesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ListAllInterfacesResponse>, I>>(object: I): ListAllInterfacesResponse {
		const message = createBaseListAllInterfacesResponse();
		message.interface_names = object.interface_names?.map((e) => e) || [];
		return message;
	},
};

export const ListImplementationsRequest: MessageFns<ListImplementationsRequest, "cosmos.base.reflection.v1beta1.ListImplementationsRequest"> = {
	$type: "cosmos.base.reflection.v1beta1.ListImplementationsRequest" as const,

	encode(message: ListImplementationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.interface_name !== "") {
			writer.uint32(10).string(message.interface_name);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseListImplementationsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.interface_name = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ListImplementationsRequest {
		return { interface_name: isSet(object.interface_name) ? globalThis.String(object.interface_name) : "" };
	},

	toJSON(message: ListImplementationsRequest): unknown {
		const obj: any = {};
		if (message.interface_name !== "") {
			obj.interface_name = message.interface_name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ListImplementationsRequest>, I>>(base?: I): ListImplementationsRequest {
		return ListImplementationsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ListImplementationsRequest>, I>>(object: I): ListImplementationsRequest {
		const message = createBaseListImplementationsRequest();
		message.interface_name = object.interface_name ?? "";
		return message;
	},
};

export const ListImplementationsResponse: MessageFns<ListImplementationsResponse, "cosmos.base.reflection.v1beta1.ListImplementationsResponse"> = {
	$type: "cosmos.base.reflection.v1beta1.ListImplementationsResponse" as const,

	encode(message: ListImplementationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.implementation_message_names) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseListImplementationsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.implementation_message_names.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ListImplementationsResponse {
		return {
			implementation_message_names: globalThis.Array.isArray(object?.implementation_message_names)
				? object.implementation_message_names.map((e: any) => globalThis.String(e))
				: [],
		};
	},

	toJSON(message: ListImplementationsResponse): unknown {
		const obj: any = {};
		if (message.implementation_message_names?.length) {
			obj.implementation_message_names = message.implementation_message_names;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ListImplementationsResponse>, I>>(base?: I): ListImplementationsResponse {
		return ListImplementationsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ListImplementationsResponse>, I>>(object: I): ListImplementationsResponse {
		const message = createBaseListImplementationsResponse();
		message.implementation_message_names = object.implementation_message_names?.map((e) => e) || [];
		return message;
	},
};

function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
	return {};
}

function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
	return { interface_names: [] };
}

function createBaseListImplementationsRequest(): ListImplementationsRequest {
	return { interface_name: "" };
}

function createBaseListImplementationsResponse(): ListImplementationsResponse {
	return { implementation_message_names: [] };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
