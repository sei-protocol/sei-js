import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { DenomAuthorityMetadata } from "./authorityMetadata";

import { Params } from "./params";

import type { GenesisDenom as GenesisDenom_type, GenesisState as GenesisState_type } from "../../types/tokenfactory";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface GenesisState extends GenesisState_type {}
export interface GenesisDenom extends GenesisDenom_type {}

export const GenesisState: MessageFns<GenesisState, "seiprotocol.seichain.tokenfactory.GenesisState"> = {
	$type: "seiprotocol.seichain.tokenfactory.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.factory_denoms) {
			GenesisDenom.encode(v!, writer.uint32(18).fork()).join();
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

					message.factory_denoms.push(GenesisDenom.decode(reader, reader.uint32()));
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
			factory_denoms: globalThis.Array.isArray(object?.factory_denoms) ? object.factory_denoms.map((e: any) => GenesisDenom.fromJSON(e)) : [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.factory_denoms?.length) {
			obj.factory_denoms = message.factory_denoms.map((e) => GenesisDenom.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.factory_denoms = object.factory_denoms?.map((e) => GenesisDenom.fromPartial(e)) || [];
		return message;
	},
};

export const GenesisDenom: MessageFns<GenesisDenom, "seiprotocol.seichain.tokenfactory.GenesisDenom"> = {
	$type: "seiprotocol.seichain.tokenfactory.GenesisDenom" as const,

	encode(message: GenesisDenom, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.authority_metadata !== undefined) {
			DenomAuthorityMetadata.encode(message.authority_metadata, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisDenom {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisDenom();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.authority_metadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisDenom {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			authority_metadata: isSet(object.authority_metadata) ? DenomAuthorityMetadata.fromJSON(object.authority_metadata) : undefined,
		};
	},

	toJSON(message: GenesisDenom): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.authority_metadata !== undefined) {
			obj.authority_metadata = DenomAuthorityMetadata.toJSON(message.authority_metadata);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisDenom>, I>>(base?: I): GenesisDenom {
		return GenesisDenom.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisDenom>, I>>(object: I): GenesisDenom {
		const message = createBaseGenesisDenom();
		message.denom = object.denom ?? "";
		message.authority_metadata =
			object.authority_metadata !== undefined && object.authority_metadata !== null ? DenomAuthorityMetadata.fromPartial(object.authority_metadata) : undefined;
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return { params: undefined, factory_denoms: [] };
}

function createBaseGenesisDenom(): GenesisDenom {
	return { denom: "", authority_metadata: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.tokenfactory.GenesisState", GenesisState as never],
	["/seiprotocol.seichain.tokenfactory.GenesisDenom", GenesisDenom as never],
];
export const aminoConverters = {
	"/seiprotocol.seichain.tokenfactory.GenesisState": {
		aminoType: "tokenfactory/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},

	"/seiprotocol.seichain.tokenfactory.GenesisDenom": {
		aminoType: "tokenfactory/GenesisDenom",
		toAmino: (message: GenesisDenom) => ({ ...message }),
		fromAmino: (object: GenesisDenom) => ({ ...object }),
	},
};
