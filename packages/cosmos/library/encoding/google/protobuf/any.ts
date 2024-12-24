import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Any as Any_type } from "../../../types/google/protobuf";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface Any extends Any_type {}

export const Any: MessageFns<Any, "google.protobuf.Any"> = {
	$type: "google.protobuf.Any" as const,

	encode(message: Any, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.type_url !== "") {
			writer.uint32(10).string(message.type_url);
		}
		if (message.value.length !== 0) {
			writer.uint32(18).bytes(message.value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Any {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAny();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.type_url = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.value = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Any {
		return {
			type_url: isSet(object.type_url) ? globalThis.String(object.type_url) : "",
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
		};
	},

	toJSON(message: Any): unknown {
		const obj: any = {};
		if (message.type_url !== "") {
			obj.type_url = message.type_url;
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Any>, I>>(base?: I): Any {
		return Any.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Any>, I>>(object: I): Any {
		const message = createBaseAny();
		message.type_url = object.type_url ?? "";
		message.value = object.value ?? new Uint8Array(0);
		return message;
	},
};

function createBaseAny(): Any {
	return { type_url: "", value: new Uint8Array(0) };
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
export const registry: Array<[string, GeneratedType]> = [["/google.protobuf.Any", Any as never]];
export const aminoConverters = {
	"/google.protobuf.Any": {
		aminoType: "google.protobuf.Any",
		toAmino: (message: Any) => ({ ...message }),
		fromAmino: (object: Any) => ({ ...object }),
	},
};
