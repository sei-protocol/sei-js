import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Params as Params_type } from "../../types/epoch";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface Params extends Params_type {}

export const Params: MessageFns<Params, "seiprotocol.seichain.epoch.Params"> = {
	$type: "seiprotocol.seichain.epoch.Params" as const,

	encode(_: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): Params {
		return {};
	},

	toJSON(_: Params): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(_: I): Params {
		const message = createBaseParams();
		return message;
	},
};

function createBaseParams(): Params {
	return {};
}
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.epoch.Params", Params as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.epoch.Params": {
		aminoType: "seiprotocol.seichain.epoch.Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object }),
	},
};
