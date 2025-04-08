import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { pointerTypeFromJSON, pointerTypeToJSON } from "./enums";

import type {
	QueryEVMAddressBySeiAddressRequest as QueryEVMAddressBySeiAddressRequest_type,
	QueryEVMAddressBySeiAddressResponse as QueryEVMAddressBySeiAddressResponse_type,
	QueryPointeeRequest as QueryPointeeRequest_type,
	QueryPointeeResponse as QueryPointeeResponse_type,
	QueryPointerRequest as QueryPointerRequest_type,
	QueryPointerResponse as QueryPointerResponse_type,
	QueryPointerVersionRequest as QueryPointerVersionRequest_type,
	QueryPointerVersionResponse as QueryPointerVersionResponse_type,
	QuerySeiAddressByEVMAddressRequest as QuerySeiAddressByEVMAddressRequest_type,
	QuerySeiAddressByEVMAddressResponse as QuerySeiAddressByEVMAddressResponse_type,
	QueryStaticCallRequest as QueryStaticCallRequest_type,
	QueryStaticCallResponse as QueryStaticCallResponse_type
} from "../../types/evm";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface QuerySeiAddressByEVMAddressRequest extends QuerySeiAddressByEVMAddressRequest_type {}
export interface QuerySeiAddressByEVMAddressResponse extends QuerySeiAddressByEVMAddressResponse_type {}
export interface QueryEVMAddressBySeiAddressRequest extends QueryEVMAddressBySeiAddressRequest_type {}
export interface QueryEVMAddressBySeiAddressResponse extends QueryEVMAddressBySeiAddressResponse_type {}
export interface QueryStaticCallRequest extends QueryStaticCallRequest_type {}
export interface QueryStaticCallResponse extends QueryStaticCallResponse_type {}
export interface QueryPointerRequest extends QueryPointerRequest_type {}
export interface QueryPointerResponse extends QueryPointerResponse_type {}
export interface QueryPointerVersionRequest extends QueryPointerVersionRequest_type {}
export interface QueryPointerVersionResponse extends QueryPointerVersionResponse_type {}
export interface QueryPointeeRequest extends QueryPointeeRequest_type {}
export interface QueryPointeeResponse extends QueryPointeeResponse_type {}

export const QuerySeiAddressByEVMAddressRequest: MessageFns<QuerySeiAddressByEVMAddressRequest, "seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest"> =
	{
		$type: "seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest" as const,

		encode(message: QuerySeiAddressByEVMAddressRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			if (message.evm_address !== "") {
				writer.uint32(10).string(message.evm_address);
			}
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): QuerySeiAddressByEVMAddressRequest {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseQuerySeiAddressByEVMAddressRequest();
			while (reader.pos < end) {
				const tag = reader.uint32();
				switch (tag >>> 3) {
					case 1:
						if (tag !== 10) {
							break;
						}

						message.evm_address = reader.string();
						continue;
				}
				if ((tag & 7) === 4 || tag === 0) {
					break;
				}
				reader.skip(tag & 7);
			}
			return message;
		},

		fromJSON(object: any): QuerySeiAddressByEVMAddressRequest {
			return { evm_address: isSet(object.evm_address) ? globalThis.String(object.evm_address) : "" };
		},

		toJSON(message: QuerySeiAddressByEVMAddressRequest): unknown {
			const obj: any = {};
			if (message.evm_address !== "") {
				obj.evm_address = message.evm_address;
			}
			return obj;
		},

		create<I extends Exact<DeepPartial<QuerySeiAddressByEVMAddressRequest>, I>>(base?: I): QuerySeiAddressByEVMAddressRequest {
			return QuerySeiAddressByEVMAddressRequest.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<QuerySeiAddressByEVMAddressRequest>, I>>(object: I): QuerySeiAddressByEVMAddressRequest {
			const message = createBaseQuerySeiAddressByEVMAddressRequest();
			message.evm_address = object.evm_address ?? "";
			return message;
		}
	};

export const QuerySeiAddressByEVMAddressResponse: MessageFns<
	QuerySeiAddressByEVMAddressResponse,
	"seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse"
> = {
	$type: "seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse" as const,

	encode(message: QuerySeiAddressByEVMAddressResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sei_address !== "") {
			writer.uint32(10).string(message.sei_address);
		}
		if (message.associated !== false) {
			writer.uint32(16).bool(message.associated);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySeiAddressByEVMAddressResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySeiAddressByEVMAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sei_address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.associated = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySeiAddressByEVMAddressResponse {
		return {
			sei_address: isSet(object.sei_address) ? globalThis.String(object.sei_address) : "",
			associated: isSet(object.associated) ? globalThis.Boolean(object.associated) : false
		};
	},

	toJSON(message: QuerySeiAddressByEVMAddressResponse): unknown {
		const obj: any = {};
		if (message.sei_address !== "") {
			obj.sei_address = message.sei_address;
		}
		if (message.associated !== false) {
			obj.associated = message.associated;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySeiAddressByEVMAddressResponse>, I>>(base?: I): QuerySeiAddressByEVMAddressResponse {
		return QuerySeiAddressByEVMAddressResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySeiAddressByEVMAddressResponse>, I>>(object: I): QuerySeiAddressByEVMAddressResponse {
		const message = createBaseQuerySeiAddressByEVMAddressResponse();
		message.sei_address = object.sei_address ?? "";
		message.associated = object.associated ?? false;
		return message;
	}
};

export const QueryEVMAddressBySeiAddressRequest: MessageFns<QueryEVMAddressBySeiAddressRequest, "seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest"> =
	{
		$type: "seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest" as const,

		encode(message: QueryEVMAddressBySeiAddressRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			if (message.sei_address !== "") {
				writer.uint32(10).string(message.sei_address);
			}
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): QueryEVMAddressBySeiAddressRequest {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseQueryEVMAddressBySeiAddressRequest();
			while (reader.pos < end) {
				const tag = reader.uint32();
				switch (tag >>> 3) {
					case 1:
						if (tag !== 10) {
							break;
						}

						message.sei_address = reader.string();
						continue;
				}
				if ((tag & 7) === 4 || tag === 0) {
					break;
				}
				reader.skip(tag & 7);
			}
			return message;
		},

		fromJSON(object: any): QueryEVMAddressBySeiAddressRequest {
			return { sei_address: isSet(object.sei_address) ? globalThis.String(object.sei_address) : "" };
		},

		toJSON(message: QueryEVMAddressBySeiAddressRequest): unknown {
			const obj: any = {};
			if (message.sei_address !== "") {
				obj.sei_address = message.sei_address;
			}
			return obj;
		},

		create<I extends Exact<DeepPartial<QueryEVMAddressBySeiAddressRequest>, I>>(base?: I): QueryEVMAddressBySeiAddressRequest {
			return QueryEVMAddressBySeiAddressRequest.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<QueryEVMAddressBySeiAddressRequest>, I>>(object: I): QueryEVMAddressBySeiAddressRequest {
			const message = createBaseQueryEVMAddressBySeiAddressRequest();
			message.sei_address = object.sei_address ?? "";
			return message;
		}
	};

export const QueryEVMAddressBySeiAddressResponse: MessageFns<
	QueryEVMAddressBySeiAddressResponse,
	"seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse"
> = {
	$type: "seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse" as const,

	encode(message: QueryEVMAddressBySeiAddressResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.evm_address !== "") {
			writer.uint32(10).string(message.evm_address);
		}
		if (message.associated !== false) {
			writer.uint32(16).bool(message.associated);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryEVMAddressBySeiAddressResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryEVMAddressBySeiAddressResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.evm_address = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.associated = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryEVMAddressBySeiAddressResponse {
		return {
			evm_address: isSet(object.evm_address) ? globalThis.String(object.evm_address) : "",
			associated: isSet(object.associated) ? globalThis.Boolean(object.associated) : false
		};
	},

	toJSON(message: QueryEVMAddressBySeiAddressResponse): unknown {
		const obj: any = {};
		if (message.evm_address !== "") {
			obj.evm_address = message.evm_address;
		}
		if (message.associated !== false) {
			obj.associated = message.associated;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryEVMAddressBySeiAddressResponse>, I>>(base?: I): QueryEVMAddressBySeiAddressResponse {
		return QueryEVMAddressBySeiAddressResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryEVMAddressBySeiAddressResponse>, I>>(object: I): QueryEVMAddressBySeiAddressResponse {
		const message = createBaseQueryEVMAddressBySeiAddressResponse();
		message.evm_address = object.evm_address ?? "";
		message.associated = object.associated ?? false;
		return message;
	}
};

export const QueryStaticCallRequest: MessageFns<QueryStaticCallRequest, "seiprotocol.seichain.evm.QueryStaticCallRequest"> = {
	$type: "seiprotocol.seichain.evm.QueryStaticCallRequest" as const,

	encode(message: QueryStaticCallRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.data.length !== 0) {
			writer.uint32(10).bytes(message.data);
		}
		if (message.to !== "") {
			writer.uint32(18).string(message.to);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticCallRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryStaticCallRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.data = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.to = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryStaticCallRequest {
		return {
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
			to: isSet(object.to) ? globalThis.String(object.to) : ""
		};
	},

	toJSON(message: QueryStaticCallRequest): unknown {
		const obj: any = {};
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		if (message.to !== "") {
			obj.to = message.to;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryStaticCallRequest>, I>>(base?: I): QueryStaticCallRequest {
		return QueryStaticCallRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryStaticCallRequest>, I>>(object: I): QueryStaticCallRequest {
		const message = createBaseQueryStaticCallRequest();
		message.data = object.data ?? new Uint8Array(0);
		message.to = object.to ?? "";
		return message;
	}
};

export const QueryStaticCallResponse: MessageFns<QueryStaticCallResponse, "seiprotocol.seichain.evm.QueryStaticCallResponse"> = {
	$type: "seiprotocol.seichain.evm.QueryStaticCallResponse" as const,

	encode(message: QueryStaticCallResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.data.length !== 0) {
			writer.uint32(10).bytes(message.data);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryStaticCallResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryStaticCallResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.data = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryStaticCallResponse {
		return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
	},

	toJSON(message: QueryStaticCallResponse): unknown {
		const obj: any = {};
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryStaticCallResponse>, I>>(base?: I): QueryStaticCallResponse {
		return QueryStaticCallResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryStaticCallResponse>, I>>(object: I): QueryStaticCallResponse {
		const message = createBaseQueryStaticCallResponse();
		message.data = object.data ?? new Uint8Array(0);
		return message;
	}
};

export const QueryPointerRequest: MessageFns<QueryPointerRequest, "seiprotocol.seichain.evm.QueryPointerRequest"> = {
	$type: "seiprotocol.seichain.evm.QueryPointerRequest" as const,

	encode(message: QueryPointerRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pointer_type !== 0) {
			writer.uint32(8).int32(message.pointer_type);
		}
		if (message.pointee !== "") {
			writer.uint32(18).string(message.pointee);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointerRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.pointer_type = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pointee = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryPointerRequest {
		return {
			pointer_type: isSet(object.pointer_type) ? pointerTypeFromJSON(object.pointer_type) : 0,
			pointee: isSet(object.pointee) ? globalThis.String(object.pointee) : ""
		};
	},

	toJSON(message: QueryPointerRequest): unknown {
		const obj: any = {};
		if (message.pointer_type !== 0) {
			obj.pointer_type = pointerTypeToJSON(message.pointer_type);
		}
		if (message.pointee !== "") {
			obj.pointee = message.pointee;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPointerRequest>, I>>(base?: I): QueryPointerRequest {
		return QueryPointerRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPointerRequest>, I>>(object: I): QueryPointerRequest {
		const message = createBaseQueryPointerRequest();
		message.pointer_type = object.pointer_type ?? 0;
		message.pointee = object.pointee ?? "";
		return message;
	}
};

export const QueryPointerResponse: MessageFns<QueryPointerResponse, "seiprotocol.seichain.evm.QueryPointerResponse"> = {
	$type: "seiprotocol.seichain.evm.QueryPointerResponse" as const,

	encode(message: QueryPointerResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pointer !== "") {
			writer.uint32(10).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(16).uint32(message.version);
		}
		if (message.exists !== false) {
			writer.uint32(24).bool(message.exists);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointerResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pointer = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.version = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.exists = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryPointerResponse {
		return {
			pointer: isSet(object.pointer) ? globalThis.String(object.pointer) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			exists: isSet(object.exists) ? globalThis.Boolean(object.exists) : false
		};
	},

	toJSON(message: QueryPointerResponse): unknown {
		const obj: any = {};
		if (message.pointer !== "") {
			obj.pointer = message.pointer;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		if (message.exists !== false) {
			obj.exists = message.exists;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPointerResponse>, I>>(base?: I): QueryPointerResponse {
		return QueryPointerResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPointerResponse>, I>>(object: I): QueryPointerResponse {
		const message = createBaseQueryPointerResponse();
		message.pointer = object.pointer ?? "";
		message.version = object.version ?? 0;
		message.exists = object.exists ?? false;
		return message;
	}
};

export const QueryPointerVersionRequest: MessageFns<QueryPointerVersionRequest, "seiprotocol.seichain.evm.QueryPointerVersionRequest"> = {
	$type: "seiprotocol.seichain.evm.QueryPointerVersionRequest" as const,

	encode(message: QueryPointerVersionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pointer_type !== 0) {
			writer.uint32(8).int32(message.pointer_type);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerVersionRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointerVersionRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.pointer_type = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryPointerVersionRequest {
		return { pointer_type: isSet(object.pointer_type) ? pointerTypeFromJSON(object.pointer_type) : 0 };
	},

	toJSON(message: QueryPointerVersionRequest): unknown {
		const obj: any = {};
		if (message.pointer_type !== 0) {
			obj.pointer_type = pointerTypeToJSON(message.pointer_type);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPointerVersionRequest>, I>>(base?: I): QueryPointerVersionRequest {
		return QueryPointerVersionRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPointerVersionRequest>, I>>(object: I): QueryPointerVersionRequest {
		const message = createBaseQueryPointerVersionRequest();
		message.pointer_type = object.pointer_type ?? 0;
		return message;
	}
};

export const QueryPointerVersionResponse: MessageFns<QueryPointerVersionResponse, "seiprotocol.seichain.evm.QueryPointerVersionResponse"> = {
	$type: "seiprotocol.seichain.evm.QueryPointerVersionResponse" as const,

	encode(message: QueryPointerVersionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.version !== 0) {
			writer.uint32(8).uint32(message.version);
		}
		if (message.cw_code_id !== 0) {
			writer.uint32(16).uint64(message.cw_code_id);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointerVersionResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointerVersionResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.version = reader.uint32();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.cw_code_id = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryPointerVersionResponse {
		return {
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			cw_code_id: isSet(object.cw_code_id) ? globalThis.Number(object.cw_code_id) : 0
		};
	},

	toJSON(message: QueryPointerVersionResponse): unknown {
		const obj: any = {};
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		if (message.cw_code_id !== 0) {
			obj.cw_code_id = Math.round(message.cw_code_id);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPointerVersionResponse>, I>>(base?: I): QueryPointerVersionResponse {
		return QueryPointerVersionResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPointerVersionResponse>, I>>(object: I): QueryPointerVersionResponse {
		const message = createBaseQueryPointerVersionResponse();
		message.version = object.version ?? 0;
		message.cw_code_id = object.cw_code_id ?? 0;
		return message;
	}
};

export const QueryPointeeRequest: MessageFns<QueryPointeeRequest, "seiprotocol.seichain.evm.QueryPointeeRequest"> = {
	$type: "seiprotocol.seichain.evm.QueryPointeeRequest" as const,

	encode(message: QueryPointeeRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pointer_type !== 0) {
			writer.uint32(8).int32(message.pointer_type);
		}
		if (message.pointer !== "") {
			writer.uint32(18).string(message.pointer);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointeeRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointeeRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.pointer_type = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pointer = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryPointeeRequest {
		return {
			pointer_type: isSet(object.pointer_type) ? pointerTypeFromJSON(object.pointer_type) : 0,
			pointer: isSet(object.pointer) ? globalThis.String(object.pointer) : ""
		};
	},

	toJSON(message: QueryPointeeRequest): unknown {
		const obj: any = {};
		if (message.pointer_type !== 0) {
			obj.pointer_type = pointerTypeToJSON(message.pointer_type);
		}
		if (message.pointer !== "") {
			obj.pointer = message.pointer;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPointeeRequest>, I>>(base?: I): QueryPointeeRequest {
		return QueryPointeeRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPointeeRequest>, I>>(object: I): QueryPointeeRequest {
		const message = createBaseQueryPointeeRequest();
		message.pointer_type = object.pointer_type ?? 0;
		message.pointer = object.pointer ?? "";
		return message;
	}
};

export const QueryPointeeResponse: MessageFns<QueryPointeeResponse, "seiprotocol.seichain.evm.QueryPointeeResponse"> = {
	$type: "seiprotocol.seichain.evm.QueryPointeeResponse" as const,

	encode(message: QueryPointeeResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pointee !== "") {
			writer.uint32(10).string(message.pointee);
		}
		if (message.version !== 0) {
			writer.uint32(16).uint32(message.version);
		}
		if (message.exists !== false) {
			writer.uint32(24).bool(message.exists);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPointeeResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPointeeResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pointee = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.version = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.exists = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryPointeeResponse {
		return {
			pointee: isSet(object.pointee) ? globalThis.String(object.pointee) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			exists: isSet(object.exists) ? globalThis.Boolean(object.exists) : false
		};
	},

	toJSON(message: QueryPointeeResponse): unknown {
		const obj: any = {};
		if (message.pointee !== "") {
			obj.pointee = message.pointee;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		if (message.exists !== false) {
			obj.exists = message.exists;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPointeeResponse>, I>>(base?: I): QueryPointeeResponse {
		return QueryPointeeResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPointeeResponse>, I>>(object: I): QueryPointeeResponse {
		const message = createBaseQueryPointeeResponse();
		message.pointee = object.pointee ?? "";
		message.version = object.version ?? 0;
		message.exists = object.exists ?? false;
		return message;
	}
};

function createBaseQuerySeiAddressByEVMAddressRequest(): QuerySeiAddressByEVMAddressRequest {
	return { evm_address: "" };
}

function createBaseQuerySeiAddressByEVMAddressResponse(): QuerySeiAddressByEVMAddressResponse {
	return { sei_address: "", associated: false };
}

function createBaseQueryEVMAddressBySeiAddressRequest(): QueryEVMAddressBySeiAddressRequest {
	return { sei_address: "" };
}

function createBaseQueryEVMAddressBySeiAddressResponse(): QueryEVMAddressBySeiAddressResponse {
	return { evm_address: "", associated: false };
}

function createBaseQueryStaticCallRequest(): QueryStaticCallRequest {
	return { data: new Uint8Array(0), to: "" };
}

function createBaseQueryStaticCallResponse(): QueryStaticCallResponse {
	return { data: new Uint8Array(0) };
}

function createBaseQueryPointerRequest(): QueryPointerRequest {
	return { pointer_type: 0, pointee: "" };
}

function createBaseQueryPointerResponse(): QueryPointerResponse {
	return { pointer: "", version: 0, exists: false };
}

function createBaseQueryPointerVersionRequest(): QueryPointerVersionRequest {
	return { pointer_type: 0 };
}

function createBaseQueryPointerVersionResponse(): QueryPointerVersionResponse {
	return { version: 0, cw_code_id: 0 };
}

function createBaseQueryPointeeRequest(): QueryPointeeRequest {
	return { pointer_type: 0, pointer: "" };
}

function createBaseQueryPointeeResponse(): QueryPointeeResponse {
	return { pointee: "", version: 0, exists: false };
}

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
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
	["/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest", QuerySeiAddressByEVMAddressRequest as never],
	["/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse", QuerySeiAddressByEVMAddressResponse as never],
	["/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest", QueryEVMAddressBySeiAddressRequest as never],
	["/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse", QueryEVMAddressBySeiAddressResponse as never],
	["/seiprotocol.seichain.evm.QueryStaticCallRequest", QueryStaticCallRequest as never],
	["/seiprotocol.seichain.evm.QueryStaticCallResponse", QueryStaticCallResponse as never],
	["/seiprotocol.seichain.evm.QueryPointerRequest", QueryPointerRequest as never],
	["/seiprotocol.seichain.evm.QueryPointerResponse", QueryPointerResponse as never],
	["/seiprotocol.seichain.evm.QueryPointerVersionRequest", QueryPointerVersionRequest as never],
	["/seiprotocol.seichain.evm.QueryPointerVersionResponse", QueryPointerVersionResponse as never],
	["/seiprotocol.seichain.evm.QueryPointeeRequest", QueryPointeeRequest as never],
	["/seiprotocol.seichain.evm.QueryPointeeResponse", QueryPointeeResponse as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressRequest": {
		aminoType: "evm/QuerySeiAddressByEVMAddressRequest",
		toAmino: (message: QuerySeiAddressByEVMAddressRequest) => ({ ...message }),
		fromAmino: (object: QuerySeiAddressByEVMAddressRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QuerySeiAddressByEVMAddressResponse": {
		aminoType: "evm/QuerySeiAddressByEVMAddressResponse",
		toAmino: (message: QuerySeiAddressByEVMAddressResponse) => ({ ...message }),
		fromAmino: (object: QuerySeiAddressByEVMAddressResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressRequest": {
		aminoType: "evm/QueryEVMAddressBySeiAddressRequest",
		toAmino: (message: QueryEVMAddressBySeiAddressRequest) => ({ ...message }),
		fromAmino: (object: QueryEVMAddressBySeiAddressRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryEVMAddressBySeiAddressResponse": {
		aminoType: "evm/QueryEVMAddressBySeiAddressResponse",
		toAmino: (message: QueryEVMAddressBySeiAddressResponse) => ({ ...message }),
		fromAmino: (object: QueryEVMAddressBySeiAddressResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryStaticCallRequest": {
		aminoType: "evm/QueryStaticCallRequest",
		toAmino: (message: QueryStaticCallRequest) => ({ ...message }),
		fromAmino: (object: QueryStaticCallRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryStaticCallResponse": {
		aminoType: "evm/QueryStaticCallResponse",
		toAmino: (message: QueryStaticCallResponse) => ({ ...message }),
		fromAmino: (object: QueryStaticCallResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryPointerRequest": {
		aminoType: "evm/QueryPointerRequest",
		toAmino: (message: QueryPointerRequest) => ({ ...message }),
		fromAmino: (object: QueryPointerRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryPointerResponse": {
		aminoType: "evm/QueryPointerResponse",
		toAmino: (message: QueryPointerResponse) => ({ ...message }),
		fromAmino: (object: QueryPointerResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryPointerVersionRequest": {
		aminoType: "evm/QueryPointerVersionRequest",
		toAmino: (message: QueryPointerVersionRequest) => ({ ...message }),
		fromAmino: (object: QueryPointerVersionRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryPointerVersionResponse": {
		aminoType: "evm/QueryPointerVersionResponse",
		toAmino: (message: QueryPointerVersionResponse) => ({ ...message }),
		fromAmino: (object: QueryPointerVersionResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryPointeeRequest": {
		aminoType: "evm/QueryPointeeRequest",
		toAmino: (message: QueryPointeeRequest) => ({ ...message }),
		fromAmino: (object: QueryPointeeRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.evm.QueryPointeeResponse": {
		aminoType: "evm/QueryPointeeResponse",
		toAmino: (message: QueryPointeeResponse) => ({ ...message }),
		fromAmino: (object: QueryPointeeResponse) => ({ ...object })
	}
};
