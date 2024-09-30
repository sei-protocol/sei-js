import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { CapabilityOwners } from "./capability";

import type { GenesisOwners as GenesisOwnersType, GenesisState as GenesisStateType } from "../../../../types/cosmos/capability/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface GenesisOwners extends GenesisOwnersType {}
interface GenesisState extends GenesisStateType {}

export const GenesisOwners: MessageFns<GenesisOwners, "cosmos.capability.v1beta1.GenesisOwners"> = {
	$type: "cosmos.capability.v1beta1.GenesisOwners" as const,

	encode(message: GenesisOwners, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.index !== 0) {
			writer.uint32(8).uint64(message.index);
		}
		if (message.index_owners !== undefined) {
			CapabilityOwners.encode(message.index_owners, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisOwners {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisOwners();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.index = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.index_owners = CapabilityOwners.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisOwners {
		return {
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			index_owners: isSet(object.index_owners) ? CapabilityOwners.fromJSON(object.index_owners) : undefined,
		};
	},

	toJSON(message: GenesisOwners): unknown {
		const obj: any = {};
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		if (message.index_owners !== undefined) {
			obj.index_owners = CapabilityOwners.toJSON(message.index_owners);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisOwners>, I>>(base?: I): GenesisOwners {
		return GenesisOwners.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisOwners>, I>>(object: I): GenesisOwners {
		const message = createBaseGenesisOwners();
		message.index = object.index ?? 0;
		message.index_owners = object.index_owners !== undefined && object.index_owners !== null ? CapabilityOwners.fromPartial(object.index_owners) : undefined;
		return message;
	},
};

export const GenesisState: MessageFns<GenesisState, "cosmos.capability.v1beta1.GenesisState"> = {
	$type: "cosmos.capability.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.index !== 0) {
			writer.uint32(8).uint64(message.index);
		}
		for (const v of message.owners) {
			GenesisOwners.encode(v!, writer.uint32(18).fork()).join();
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
					if (tag !== 8) {
						break;
					}

					message.index = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			owners: globalThis.Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		if (message.owners?.length) {
			obj.owners = message.owners.map((e) => GenesisOwners.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.index = object.index ?? 0;
		message.owners = object.owners?.map((e) => GenesisOwners.fromPartial(e)) || [];
		return message;
	},
};

function createBaseGenesisOwners(): GenesisOwners {
	return { index: 0, index_owners: undefined };
}

function createBaseGenesisState(): GenesisState {
	return { index: 0, owners: [] };
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
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.capability.v1beta1.GenesisOwners", GenesisOwners as never],
	["/cosmos.capability.v1beta1.GenesisState", GenesisState as never],
];
export const aminoConverters = {
	"/cosmos.capability.v1beta1.GenesisOwners": {
		aminoType: "cosmos-sdk/GenesisOwners",
		toAmino: (message: GenesisOwners) => ({ ...message }),
		fromAmino: (object: GenesisOwners) => ({ ...object }),
	},

	"/cosmos.capability.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},
};
