import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { CompactBitArray as CompactBitArray_type, MultiSignature as MultiSignature_type } from "../../../../../types/cosmos/crypto/multisig/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface MultiSignature extends MultiSignature_type {}
export interface CompactBitArray extends CompactBitArray_type {}

export const MultiSignature: MessageFns<MultiSignature, "cosmos.crypto.multisig.v1beta1.MultiSignature"> = {
	$type: "cosmos.crypto.multisig.v1beta1.MultiSignature" as const,

	encode(message: MultiSignature, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.signatures) {
			writer.uint32(10).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MultiSignature {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMultiSignature();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.signatures.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MultiSignature {
		return {
			signatures: globalThis.Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : []
		};
	},

	toJSON(message: MultiSignature): unknown {
		const obj: any = {};
		if (message.signatures?.length) {
			obj.signatures = message.signatures.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MultiSignature>, I>>(base?: I): MultiSignature {
		return MultiSignature.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MultiSignature>, I>>(object: I): MultiSignature {
		const message = createBaseMultiSignature();
		message.signatures = object.signatures?.map((e) => e) || [];
		return message;
	}
};

export const CompactBitArray: MessageFns<CompactBitArray, "cosmos.crypto.multisig.v1beta1.CompactBitArray"> = {
	$type: "cosmos.crypto.multisig.v1beta1.CompactBitArray" as const,

	encode(message: CompactBitArray, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.extra_bits_stored !== 0) {
			writer.uint32(8).uint32(message.extra_bits_stored);
		}
		if (message.elems.length !== 0) {
			writer.uint32(18).bytes(message.elems);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CompactBitArray {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCompactBitArray();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.extra_bits_stored = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.elems = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CompactBitArray {
		return {
			extra_bits_stored: isSet(object.extra_bits_stored) ? globalThis.Number(object.extra_bits_stored) : 0,
			elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array(0)
		};
	},

	toJSON(message: CompactBitArray): unknown {
		const obj: any = {};
		if (message.extra_bits_stored !== 0) {
			obj.extra_bits_stored = Math.round(message.extra_bits_stored);
		}
		if (message.elems.length !== 0) {
			obj.elems = base64FromBytes(message.elems);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CompactBitArray>, I>>(base?: I): CompactBitArray {
		return CompactBitArray.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CompactBitArray>, I>>(object: I): CompactBitArray {
		const message = createBaseCompactBitArray();
		message.extra_bits_stored = object.extra_bits_stored ?? 0;
		message.elems = object.elems ?? new Uint8Array(0);
		return message;
	}
};

function createBaseMultiSignature(): MultiSignature {
	return { signatures: [] };
}

function createBaseCompactBitArray(): CompactBitArray {
	return { extra_bits_stored: 0, elems: new Uint8Array(0) };
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
	["/cosmos.crypto.multisig.v1beta1.MultiSignature", MultiSignature as never],
	["/cosmos.crypto.multisig.v1beta1.CompactBitArray", CompactBitArray as never]
];
export const aminoConverters = {
	"/cosmos.crypto.multisig.v1beta1.MultiSignature": {
		aminoType: "cosmos-sdk/MultiSignature",
		toAmino: (message: MultiSignature) => ({ ...message }),
		fromAmino: (object: MultiSignature) => ({ ...object })
	},

	"/cosmos.crypto.multisig.v1beta1.CompactBitArray": {
		aminoType: "cosmos-sdk/CompactBitArray",
		toAmino: (message: CompactBitArray) => ({ ...message }),
		fromAmino: (object: CompactBitArray) => ({ ...object })
	}
};
