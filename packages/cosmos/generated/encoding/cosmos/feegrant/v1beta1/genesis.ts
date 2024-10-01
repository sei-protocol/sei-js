import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Grant } from "./feegrant";

import type { GenesisState as GenesisState_type } from "../../../../types/cosmos/feegrant/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.feegrant.v1beta1.GenesisState"> = {
	$type: "cosmos.feegrant.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.allowances) {
			Grant.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.allowances.push(Grant.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisState {
		return {
			allowances: globalThis.Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromJSON(e)) : [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.allowances?.length) {
			obj.allowances = message.allowances.map((e) => Grant.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.allowances = object.allowances?.map((e) => Grant.fromPartial(e)) || [];
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return { allowances: [] };
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.feegrant.v1beta1.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/cosmos.feegrant.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};
