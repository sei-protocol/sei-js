import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { PageRequest as PageRequestType, PageResponse as PageResponseType } from "../../../../../types/cosmos/base/query/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common.ts";

interface PageRequest extends PageRequestType {}
interface PageResponse extends PageResponseType {}

export const PageRequest: MessageFns<PageRequest, "cosmos.base.query.v1beta1.PageRequest"> = {
	$type: "cosmos.base.query.v1beta1.PageRequest" as const,

	encode(message: PageRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		if (message.offset !== 0) {
			writer.uint32(16).uint64(message.offset);
		}
		if (message.limit !== 0) {
			writer.uint32(24).uint64(message.limit);
		}
		if (message.count_total !== false) {
			writer.uint32(32).bool(message.count_total);
		}
		if (message.reverse !== false) {
			writer.uint32(40).bool(message.reverse);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PageRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePageRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.key = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.offset = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.limit = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.count_total = reader.bool();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.reverse = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PageRequest {
		return {
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			offset: isSet(object.offset) ? globalThis.Number(object.offset) : 0,
			limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
			count_total: isSet(object.count_total) ? globalThis.Boolean(object.count_total) : false,
			reverse: isSet(object.reverse) ? globalThis.Boolean(object.reverse) : false,
		};
	},

	toJSON(message: PageRequest): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.offset !== 0) {
			obj.offset = Math.round(message.offset);
		}
		if (message.limit !== 0) {
			obj.limit = Math.round(message.limit);
		}
		if (message.count_total !== false) {
			obj.count_total = message.count_total;
		}
		if (message.reverse !== false) {
			obj.reverse = message.reverse;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PageRequest>, I>>(base?: I): PageRequest {
		return PageRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PageRequest>, I>>(object: I): PageRequest {
		const message = createBasePageRequest();
		message.key = object.key ?? new Uint8Array(0);
		message.offset = object.offset ?? 0;
		message.limit = object.limit ?? 0;
		message.count_total = object.count_total ?? false;
		message.reverse = object.reverse ?? false;
		return message;
	},
};

export const PageResponse: MessageFns<PageResponse, "cosmos.base.query.v1beta1.PageResponse"> = {
	$type: "cosmos.base.query.v1beta1.PageResponse" as const,

	encode(message: PageResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.next_key.length !== 0) {
			writer.uint32(10).bytes(message.next_key);
		}
		if (message.total !== 0) {
			writer.uint32(16).uint64(message.total);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PageResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePageResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.next_key = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.total = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PageResponse {
		return {
			next_key: isSet(object.next_key) ? bytesFromBase64(object.next_key) : new Uint8Array(0),
			total: isSet(object.total) ? globalThis.Number(object.total) : 0,
		};
	},

	toJSON(message: PageResponse): unknown {
		const obj: any = {};
		if (message.next_key.length !== 0) {
			obj.next_key = base64FromBytes(message.next_key);
		}
		if (message.total !== 0) {
			obj.total = Math.round(message.total);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PageResponse>, I>>(base?: I): PageResponse {
		return PageResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PageResponse>, I>>(object: I): PageResponse {
		const message = createBasePageResponse();
		message.next_key = object.next_key ?? new Uint8Array(0);
		message.total = object.total ?? 0;
		return message;
	},
};

function createBasePageRequest(): PageRequest {
	return { key: new Uint8Array(0), offset: 0, limit: 0, count_total: false, reverse: false };
}

function createBasePageResponse(): PageResponse {
	return { next_key: new Uint8Array(0), total: 0 };
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
	["/cosmos.base.query.v1beta1.PageRequest", PageRequest as never],
	["/cosmos.base.query.v1beta1.PageResponse", PageResponse as never],
];
export const aminoConverters = {
	"/cosmos.base.query.v1beta1.PageRequest": {
		aminoType: "cosmos-sdk/PageRequest",
		toAmino: (message: PageRequest) => ({ ...message }),
		fromAmino: (object: PageRequest) => ({ ...object }),
	},

	"/cosmos.base.query.v1beta1.PageResponse": {
		aminoType: "cosmos-sdk/PageResponse",
		toAmino: (message: PageResponse) => ({ ...message }),
		fromAmino: (object: PageResponse) => ({ ...object }),
	},
};
