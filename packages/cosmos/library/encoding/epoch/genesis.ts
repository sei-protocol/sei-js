import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Epoch } from "./epoch";

import { Params } from "./params";

import type { GenesisState as GenesisState_type } from "../../types/epoch";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface GenesisState extends GenesisState_type {}

export const GenesisState: MessageFns<GenesisState, "seiprotocol.seichain.epoch.GenesisState"> = {
	$type: "seiprotocol.seichain.epoch.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		if (message.epoch !== undefined) {
			Epoch.encode(message.epoch, writer.uint32(18).fork()).join();
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

					message.params = Params.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.epoch = Epoch.decode(reader, reader.uint32());
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
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
			epoch: isSet(object.epoch) ? Epoch.fromJSON(object.epoch) : undefined,
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.epoch !== undefined) {
			obj.epoch = Epoch.toJSON(message.epoch);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.epoch = object.epoch !== undefined && object.epoch !== null ? Epoch.fromPartial(object.epoch) : undefined;
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return { params: undefined, epoch: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/seiprotocol.seichain.epoch.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/seiprotocol.seichain.epoch.GenesisState": {
		aminoType: "epoch/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};
