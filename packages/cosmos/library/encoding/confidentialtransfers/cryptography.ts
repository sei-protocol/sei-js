import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Ciphertext as Ciphertext_type } from "../../types/confidentialtransfers";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface Ciphertext extends Ciphertext_type {}

export const Ciphertext: MessageFns<Ciphertext, "seiprotocol.seichain.confidentialtransfers.Ciphertext"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.Ciphertext" as const,

	encode(message: Ciphertext, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.c.length !== 0) {
			writer.uint32(10).bytes(message.c);
		}
		if (message.d.length !== 0) {
			writer.uint32(18).bytes(message.d);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Ciphertext {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCiphertext();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.c = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.d = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Ciphertext {
		return {
			c: isSet(object.c) ? bytesFromBase64(object.c) : new Uint8Array(0),
			d: isSet(object.d) ? bytesFromBase64(object.d) : new Uint8Array(0)
		};
	},

	toJSON(message: Ciphertext): unknown {
		const obj: any = {};
		if (message.c.length !== 0) {
			obj.c = base64FromBytes(message.c);
		}
		if (message.d.length !== 0) {
			obj.d = base64FromBytes(message.d);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Ciphertext>, I>>(base?: I): Ciphertext {
		return Ciphertext.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Ciphertext>, I>>(object: I): Ciphertext {
		const message = createBaseCiphertext();
		message.c = object.c ?? new Uint8Array(0);
		message.d = object.d ?? new Uint8Array(0);
		return message;
	}
};

function createBaseCiphertext(): Ciphertext {
	return { c: new Uint8Array(0), d: new Uint8Array(0) };
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
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.confidentialtransfers.Ciphertext", Ciphertext as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.confidentialtransfers.Ciphertext": {
		aminoType: "confidentialtransfers/Ciphertext",
		toAmino: (message: Ciphertext) => ({ ...message }),
		fromAmino: (object: Ciphertext) => ({ ...object })
	}
};
