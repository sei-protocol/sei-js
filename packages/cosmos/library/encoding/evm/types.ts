import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { DeferredInfo as DeferredInfo_type, Whitelist as Whitelist_type } from "../../types/evm";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface Whitelist extends Whitelist_type {}
export interface DeferredInfo extends DeferredInfo_type {}

export const Whitelist: MessageFns<Whitelist, "seiprotocol.seichain.evm.Whitelist"> = {
	$type: "seiprotocol.seichain.evm.Whitelist" as const,

	encode(message: Whitelist, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.hashes) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Whitelist {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWhitelist();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.hashes.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Whitelist {
		return {
			hashes: globalThis.Array.isArray(object?.hashes) ? object.hashes.map((e: any) => globalThis.String(e)) : [],
		};
	},

	toJSON(message: Whitelist): unknown {
		const obj: any = {};
		if (message.hashes?.length) {
			obj.hashes = message.hashes;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Whitelist>, I>>(base?: I): Whitelist {
		return Whitelist.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Whitelist>, I>>(object: I): Whitelist {
		const message = createBaseWhitelist();
		message.hashes = object.hashes?.map((e) => e) || [];
		return message;
	},
};

export const DeferredInfo: MessageFns<DeferredInfo, "seiprotocol.seichain.evm.DeferredInfo"> = {
	$type: "seiprotocol.seichain.evm.DeferredInfo" as const,

	encode(message: DeferredInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx_index !== 0) {
			writer.uint32(8).uint32(message.tx_index);
		}
		if (message.tx_hash.length !== 0) {
			writer.uint32(18).bytes(message.tx_hash);
		}
		if (message.tx_bloom.length !== 0) {
			writer.uint32(26).bytes(message.tx_bloom);
		}
		if (message.surplus !== "") {
			writer.uint32(34).string(message.surplus);
		}
		if (message.error !== "") {
			writer.uint32(42).string(message.error);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DeferredInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDeferredInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.tx_index = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_hash = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.tx_bloom = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.surplus = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.error = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DeferredInfo {
		return {
			tx_index: isSet(object.tx_index) ? globalThis.Number(object.tx_index) : 0,
			tx_hash: isSet(object.tx_hash) ? bytesFromBase64(object.tx_hash) : new Uint8Array(0),
			tx_bloom: isSet(object.tx_bloom) ? bytesFromBase64(object.tx_bloom) : new Uint8Array(0),
			surplus: isSet(object.surplus) ? globalThis.String(object.surplus) : "",
			error: isSet(object.error) ? globalThis.String(object.error) : "",
		};
	},

	toJSON(message: DeferredInfo): unknown {
		const obj: any = {};
		if (message.tx_index !== 0) {
			obj.tx_index = Math.round(message.tx_index);
		}
		if (message.tx_hash.length !== 0) {
			obj.tx_hash = base64FromBytes(message.tx_hash);
		}
		if (message.tx_bloom.length !== 0) {
			obj.tx_bloom = base64FromBytes(message.tx_bloom);
		}
		if (message.surplus !== "") {
			obj.surplus = message.surplus;
		}
		if (message.error !== "") {
			obj.error = message.error;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DeferredInfo>, I>>(base?: I): DeferredInfo {
		return DeferredInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DeferredInfo>, I>>(object: I): DeferredInfo {
		const message = createBaseDeferredInfo();
		message.tx_index = object.tx_index ?? 0;
		message.tx_hash = object.tx_hash ?? new Uint8Array(0);
		message.tx_bloom = object.tx_bloom ?? new Uint8Array(0);
		message.surplus = object.surplus ?? "";
		message.error = object.error ?? "";
		return message;
	},
};

function createBaseWhitelist(): Whitelist {
	return { hashes: [] };
}

function createBaseDeferredInfo(): DeferredInfo {
	return { tx_index: 0, tx_hash: new Uint8Array(0), tx_bloom: new Uint8Array(0), surplus: "", error: "" };
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
	["/seiprotocol.seichain.evm.Whitelist", Whitelist as never],
	["/seiprotocol.seichain.evm.DeferredInfo", DeferredInfo as never],
];
export const aminoConverters = {
	"/seiprotocol.seichain.evm.Whitelist": {
		aminoType: "evm/Whitelist",
		toAmino: (message: Whitelist) => ({ ...message }),
		fromAmino: (object: Whitelist) => ({ ...object }),
	},

	"/seiprotocol.seichain.evm.DeferredInfo": {
		aminoType: "evm/DeferredInfo",
		toAmino: (message: DeferredInfo) => ({ ...message }),
		fromAmino: (object: DeferredInfo) => ({ ...object }),
	},
};
