import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { GrantAuthorization } from "./authz";

import type { GenesisState as GenesisStateType } from "../../../../types/cosmos/authz/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface GenesisState extends GenesisStateType {}

export const GenesisState: MessageFns<GenesisState, "cosmos.authz.v1beta1.GenesisState"> = {
	$type: "cosmos.authz.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.authorization) {
			GrantAuthorization.encode(v!, writer.uint32(10).fork()).join();
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

					message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
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
			authorization: globalThis.Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GrantAuthorization.fromJSON(e)) : [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.authorization?.length) {
			obj.authorization = message.authorization.map((e) => GrantAuthorization.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.authorization = object.authorization?.map((e) => GrantAuthorization.fromPartial(e)) || [];
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return { authorization: [] };
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.authz.v1beta1.GenesisState", GenesisState as never]];
export const aminoConverters = {
	"/cosmos.authz.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};
