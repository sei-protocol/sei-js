import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import type {
	QueryAllEvidenceRequest as QueryAllEvidenceRequest_type,
	QueryAllEvidenceResponse as QueryAllEvidenceResponse_type,
	QueryEvidenceRequest as QueryEvidenceRequest_type,
	QueryEvidenceResponse as QueryEvidenceResponse_type
} from "../../../../types/cosmos/evidence/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface QueryEvidenceRequest extends QueryEvidenceRequest_type {}
export interface QueryEvidenceResponse extends QueryEvidenceResponse_type {}
export interface QueryAllEvidenceRequest extends QueryAllEvidenceRequest_type {}
export interface QueryAllEvidenceResponse extends QueryAllEvidenceResponse_type {}

export const QueryEvidenceRequest: MessageFns<QueryEvidenceRequest, "cosmos.evidence.v1beta1.QueryEvidenceRequest"> = {
	$type: "cosmos.evidence.v1beta1.QueryEvidenceRequest" as const,

	encode(message: QueryEvidenceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.evidence_hash.length !== 0) {
			writer.uint32(10).bytes(message.evidence_hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryEvidenceRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.evidence_hash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryEvidenceRequest {
		return { evidence_hash: isSet(object.evidence_hash) ? bytesFromBase64(object.evidence_hash) : new Uint8Array(0) };
	},

	toJSON(message: QueryEvidenceRequest): unknown {
		const obj: any = {};
		if (message.evidence_hash.length !== 0) {
			obj.evidence_hash = base64FromBytes(message.evidence_hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryEvidenceRequest>, I>>(base?: I): QueryEvidenceRequest {
		return QueryEvidenceRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryEvidenceRequest>, I>>(object: I): QueryEvidenceRequest {
		const message = createBaseQueryEvidenceRequest();
		message.evidence_hash = object.evidence_hash ?? new Uint8Array(0);
		return message;
	}
};

export const QueryEvidenceResponse: MessageFns<QueryEvidenceResponse, "cosmos.evidence.v1beta1.QueryEvidenceResponse"> = {
	$type: "cosmos.evidence.v1beta1.QueryEvidenceResponse" as const,

	encode(message: QueryEvidenceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.evidence !== undefined) {
			Any.encode(message.evidence, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryEvidenceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.evidence = Any.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryEvidenceResponse {
		return { evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined };
	},

	toJSON(message: QueryEvidenceResponse): unknown {
		const obj: any = {};
		if (message.evidence !== undefined) {
			obj.evidence = Any.toJSON(message.evidence);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryEvidenceResponse>, I>>(base?: I): QueryEvidenceResponse {
		return QueryEvidenceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryEvidenceResponse>, I>>(object: I): QueryEvidenceResponse {
		const message = createBaseQueryEvidenceResponse();
		message.evidence = object.evidence !== undefined && object.evidence !== null ? Any.fromPartial(object.evidence) : undefined;
		return message;
	}
};

export const QueryAllEvidenceRequest: MessageFns<QueryAllEvidenceRequest, "cosmos.evidence.v1beta1.QueryAllEvidenceRequest"> = {
	$type: "cosmos.evidence.v1beta1.QueryAllEvidenceRequest" as const,

	encode(message: QueryAllEvidenceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllEvidenceRequest();
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

	fromJSON(object: any): QueryAllEvidenceRequest {
		return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
	},

	toJSON(message: QueryAllEvidenceRequest): unknown {
		const obj: any = {};
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllEvidenceRequest>, I>>(base?: I): QueryAllEvidenceRequest {
		return QueryAllEvidenceRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllEvidenceRequest>, I>>(object: I): QueryAllEvidenceRequest {
		const message = createBaseQueryAllEvidenceRequest();
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const QueryAllEvidenceResponse: MessageFns<QueryAllEvidenceResponse, "cosmos.evidence.v1beta1.QueryAllEvidenceResponse"> = {
	$type: "cosmos.evidence.v1beta1.QueryAllEvidenceResponse" as const,

	encode(message: QueryAllEvidenceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.evidence) {
			Any.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllEvidenceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.evidence.push(Any.decode(reader, reader.uint32()));
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

	fromJSON(object: any): QueryAllEvidenceResponse {
		return {
			evidence: globalThis.Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Any.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: QueryAllEvidenceResponse): unknown {
		const obj: any = {};
		if (message.evidence?.length) {
			obj.evidence = message.evidence.map((e) => Any.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllEvidenceResponse>, I>>(base?: I): QueryAllEvidenceResponse {
		return QueryAllEvidenceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllEvidenceResponse>, I>>(object: I): QueryAllEvidenceResponse {
		const message = createBaseQueryAllEvidenceResponse();
		message.evidence = object.evidence?.map((e) => Any.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

function createBaseQueryEvidenceRequest(): QueryEvidenceRequest {
	return { evidence_hash: new Uint8Array(0) };
}

function createBaseQueryEvidenceResponse(): QueryEvidenceResponse {
	return { evidence: undefined };
}

function createBaseQueryAllEvidenceRequest(): QueryAllEvidenceRequest {
	return { pagination: undefined };
}

function createBaseQueryAllEvidenceResponse(): QueryAllEvidenceResponse {
	return { evidence: [], pagination: undefined };
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

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.evidence.v1beta1.QueryEvidenceRequest", QueryEvidenceRequest as never],
	["/cosmos.evidence.v1beta1.QueryEvidenceResponse", QueryEvidenceResponse as never],
	["/cosmos.evidence.v1beta1.QueryAllEvidenceRequest", QueryAllEvidenceRequest as never],
	["/cosmos.evidence.v1beta1.QueryAllEvidenceResponse", QueryAllEvidenceResponse as never]
];
export const aminoConverters = {
	"/cosmos.evidence.v1beta1.QueryEvidenceRequest": {
		aminoType: "cosmos-sdk/QueryEvidenceRequest",
		toAmino: (message: QueryEvidenceRequest) => ({ ...message }),
		fromAmino: (object: QueryEvidenceRequest) => ({ ...object })
	},

	"/cosmos.evidence.v1beta1.QueryEvidenceResponse": {
		aminoType: "cosmos-sdk/QueryEvidenceResponse",
		toAmino: (message: QueryEvidenceResponse) => ({ ...message }),
		fromAmino: (object: QueryEvidenceResponse) => ({ ...object })
	},

	"/cosmos.evidence.v1beta1.QueryAllEvidenceRequest": {
		aminoType: "cosmos-sdk/QueryAllEvidenceRequest",
		toAmino: (message: QueryAllEvidenceRequest) => ({ ...message }),
		fromAmino: (object: QueryAllEvidenceRequest) => ({ ...object })
	},

	"/cosmos.evidence.v1beta1.QueryAllEvidenceResponse": {
		aminoType: "cosmos-sdk/QueryAllEvidenceResponse",
		toAmino: (message: QueryAllEvidenceResponse) => ({ ...message }),
		fromAmino: (object: QueryAllEvidenceResponse) => ({ ...object })
	}
};
