import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { PrivKey as PrivKey_type, PubKey as PubKey_type } from "../../../../types/cosmos/crypto/secp256k1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface PubKey extends PubKey_type {}
export interface PrivKey extends PrivKey_type {}

export const PubKey: MessageFns<PubKey, "cosmos.crypto.secp256k1.PubKey"> = {
	$type: "cosmos.crypto.secp256k1.PubKey" as const,

	encode(message: PubKey, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePubKey();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.key = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PubKey {
		return { key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0) };
	},

	toJSON(message: PubKey): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PubKey>, I>>(base?: I): PubKey {
		return PubKey.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PubKey>, I>>(object: I): PubKey {
		const message = createBasePubKey();
		message.key = object.key ?? new Uint8Array(0);
		return message;
	},
};

export const PrivKey: MessageFns<PrivKey, "cosmos.crypto.secp256k1.PrivKey"> = {
	$type: "cosmos.crypto.secp256k1.PrivKey" as const,

	encode(message: PrivKey, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key.length !== 0) {
			writer.uint32(10).bytes(message.key);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PrivKey {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePrivKey();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.key = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PrivKey {
		return { key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0) };
	},

	toJSON(message: PrivKey): unknown {
		const obj: any = {};
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PrivKey>, I>>(base?: I): PrivKey {
		return PrivKey.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PrivKey>, I>>(object: I): PrivKey {
		const message = createBasePrivKey();
		message.key = object.key ?? new Uint8Array(0);
		return message;
	},
};

function createBasePubKey(): PubKey {
	return { key: new Uint8Array(0) };
}

function createBasePrivKey(): PrivKey {
	return { key: new Uint8Array(0) };
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
	["/cosmos.crypto.secp256k1.PubKey", PubKey as never],
	["/cosmos.crypto.secp256k1.PrivKey", PrivKey as never],
];
export const aminoConverters = {
	"/cosmos.crypto.secp256k1.PubKey": {
		aminoType: "cosmos-sdk/PubKey",
		toAmino: (message: PubKey) => ({ ...message }),
		fromAmino: (object: PubKey) => ({ ...object }),
	},

	"/cosmos.crypto.secp256k1.PrivKey": {
		aminoType: "cosmos-sdk/PrivKey",
		toAmino: (message: PrivKey) => ({ ...message }),
		fromAmino: (object: PrivKey) => ({ ...object }),
	},
};
