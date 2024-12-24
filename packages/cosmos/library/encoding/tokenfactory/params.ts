import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Params as Params_type } from "../../types/tokenfactory";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface Params extends Params_type {}

export const Params: MessageFns<Params, "seiprotocol.seichain.tokenfactory.Params"> = {
	$type: "seiprotocol.seichain.tokenfactory.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom_allowlist_max_size !== 0) {
			writer.uint32(8).uint32(message.denom_allowlist_max_size);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.denom_allowlist_max_size = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Params {
		return {
			denom_allowlist_max_size: isSet(object.denom_allowlist_max_size) ? globalThis.Number(object.denom_allowlist_max_size) : 0,
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.denom_allowlist_max_size !== 0) {
			obj.denom_allowlist_max_size = Math.round(message.denom_allowlist_max_size);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.denom_allowlist_max_size = object.denom_allowlist_max_size ?? 0;
		return message;
	},
};

function createBaseParams(): Params {
	return { denom_allowlist_max_size: 0 };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.tokenfactory.Params", Params as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.tokenfactory.Params": {
		aminoType: "tokenfactory/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object }),
	},
};
