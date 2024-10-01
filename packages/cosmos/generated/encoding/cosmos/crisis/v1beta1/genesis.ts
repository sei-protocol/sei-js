import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin } from "../../base/v1beta1/coin";

import type { GenesisState as GenesisState_type } from "../../../../types/cosmos/crisis/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.crisis.v1beta1.GenesisState"> = {
	$type: "cosmos.crisis.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.constant_fee !== undefined) {
			Coin.encode(message.constant_fee, writer.uint32(26).fork()).join();
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
				case 3:
					if (tag !== 26) {
						break;
					}

					message.constant_fee = Coin.decode(reader, reader.uint32());
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
		return { constant_fee: isSet(object.constant_fee) ? Coin.fromJSON(object.constant_fee) : undefined };
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.constant_fee !== undefined) {
			obj.constant_fee = Coin.toJSON(message.constant_fee);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.constant_fee = object.constant_fee !== undefined && object.constant_fee !== null ? Coin.fromPartial(object.constant_fee) : undefined;
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return { constant_fee: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.crisis.v1beta1.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/cosmos.crisis.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};
