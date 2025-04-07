import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { ChainConfig as ChainConfig_type } from "../../types/evm";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface ChainConfig extends ChainConfig_type {}

export const ChainConfig: MessageFns<ChainConfig, "seiprotocol.seichain.evm.ChainConfig"> = {
	$type: "seiprotocol.seichain.evm.ChainConfig" as const,

	encode(message: ChainConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.cancun_time !== 0) {
			writer.uint32(8).int64(message.cancun_time);
		}
		if (message.prague_time !== 0) {
			writer.uint32(16).int64(message.prague_time);
		}
		if (message.verkle_time !== 0) {
			writer.uint32(24).int64(message.verkle_time);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ChainConfig {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseChainConfig();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.cancun_time = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.prague_time = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.verkle_time = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ChainConfig {
		return {
			cancun_time: isSet(object.cancun_time) ? globalThis.Number(object.cancun_time) : 0,
			prague_time: isSet(object.prague_time) ? globalThis.Number(object.prague_time) : 0,
			verkle_time: isSet(object.verkle_time) ? globalThis.Number(object.verkle_time) : 0
		};
	},

	toJSON(message: ChainConfig): unknown {
		const obj: any = {};
		if (message.cancun_time !== 0) {
			obj.cancun_time = Math.round(message.cancun_time);
		}
		if (message.prague_time !== 0) {
			obj.prague_time = Math.round(message.prague_time);
		}
		if (message.verkle_time !== 0) {
			obj.verkle_time = Math.round(message.verkle_time);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ChainConfig>, I>>(base?: I): ChainConfig {
		return ChainConfig.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ChainConfig>, I>>(object: I): ChainConfig {
		const message = createBaseChainConfig();
		message.cancun_time = object.cancun_time ?? 0;
		message.prague_time = object.prague_time ?? 0;
		message.verkle_time = object.verkle_time ?? 0;
		return message;
	}
};

function createBaseChainConfig(): ChainConfig {
	return { cancun_time: 0, prague_time: 0, verkle_time: 0 };
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
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.evm.ChainConfig", ChainConfig as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.evm.ChainConfig": {
		aminoType: "evm/ChainConfig",
		toAmino: (message: ChainConfig) => ({ ...message }),
		fromAmino: (object: ChainConfig) => ({ ...object })
	}
};
