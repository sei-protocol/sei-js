import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { StoreKVPair as StoreKVPair_type } from "../../../../../types/cosmos/base/store/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface StoreKVPair extends StoreKVPair_type {}

export const StoreKVPair: MessageFns<StoreKVPair, "cosmos.base.store.v1beta1.StoreKVPair"> = {
	$type: "cosmos.base.store.v1beta1.StoreKVPair" as const,

	encode(message: StoreKVPair, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.store_key !== "") {
			writer.uint32(10).string(message.store_key);
		}
		if (message.delete !== false) {
			writer.uint32(16).bool(message.delete);
		}
		if (message.key.length !== 0) {
			writer.uint32(26).bytes(message.key);
		}
		if (message.value.length !== 0) {
			writer.uint32(34).bytes(message.value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseStoreKVPair();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.store_key = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.delete = reader.bool();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.key = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
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

	fromJSON(object: any): StoreKVPair {
		return {
			store_key: isSet(object.store_key) ? globalThis.String(object.store_key) : "",
			delete: isSet(object.delete) ? globalThis.Boolean(object.delete) : false,
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
		};
	},

	toJSON(message: StoreKVPair): unknown {
		const obj: any = {};
		if (message.store_key !== "") {
			obj.store_key = message.store_key;
		}
		if (message.delete !== false) {
			obj.delete = message.delete;
		}
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<StoreKVPair>, I>>(base?: I): StoreKVPair {
		return StoreKVPair.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<StoreKVPair>, I>>(object: I): StoreKVPair {
		const message = createBaseStoreKVPair();
		message.store_key = object.store_key ?? "";
		message.delete = object.delete ?? false;
		message.key = object.key ?? new Uint8Array(0);
		message.value = object.value ?? new Uint8Array(0);
		return message;
	},
};

function createBaseStoreKVPair(): StoreKVPair {
	return { store_key: "", delete: false, key: new Uint8Array(0), value: new Uint8Array(0) };
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
export const registry: Array<[string, GeneratedType]> = [["/cosmos.base.store.v1beta1.StoreKVPair", StoreKVPair as never]];
export const aminoConverters = {
	"/cosmos.base.store.v1beta1.StoreKVPair": {
		aminoType: "cosmos-sdk/StoreKVPair",
		toAmino: (message: StoreKVPair) => ({ ...message }),
		fromAmino: (object: StoreKVPair) => ({ ...object }),
	},
};
