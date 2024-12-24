import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Minter, Params } from "./mint";

import type { GenesisState as GenesisState_type } from "../../../../types/cosmos/mint/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.mint.v1beta1.GenesisState"> = {
	$type: "cosmos.mint.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.minter !== undefined) {
			Minter.encode(message.minter, writer.uint32(10).fork()).join();
		}
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(18).fork()).join();
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

					message.minter = Minter.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
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
			minter: isSet(object.minter) ? Minter.fromJSON(object.minter) : undefined,
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.minter !== undefined) {
			obj.minter = Minter.toJSON(message.minter);
		}
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return { minter: undefined, params: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.mint.v1beta1.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/cosmos.mint.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};
