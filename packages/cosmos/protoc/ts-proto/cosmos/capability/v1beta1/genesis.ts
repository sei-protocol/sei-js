// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/capability/v1beta1/genesis.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CapabilityOwners } from "./capability";

export const protobufPackage = "cosmos.capability.v1beta1";

/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
	/** index is the index of the capability owner. */
	index: number;
	/** index_owners are the owners at the given index. */
	index_owners?: CapabilityOwners | undefined;
}

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
	/** index is the capability global index. */
	index: number;
	/**
	 * owners represents a map from index to owners of the capability index
	 * index key is string to allow amino marshalling.
	 */
	owners: GenesisOwners[];
}

function createBaseGenesisOwners(): GenesisOwners {
	return { index: 0, index_owners: undefined };
}

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
		let end = length === undefined ? reader.len : reader.pos + length;
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
			index_owners: isSet(object.index_owners) ? CapabilityOwners.fromJSON(object.index_owners) : undefined
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
	}
};

function createBaseGenesisState(): GenesisState {
	return { index: 0, owners: [] };
}

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
		let end = length === undefined ? reader.len : reader.pos + length;
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
			owners: globalThis.Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : []
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
	}
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
		? globalThis.Array<DeepPartial<U>>
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: T extends {}
				? { [K in keyof T]?: DeepPartial<T[K]> }
				: Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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

export interface MessageFns<T, V extends string> {
	readonly $type: V;
	encode(message: T, writer?: BinaryWriter): BinaryWriter;
	decode(input: BinaryReader | Uint8Array, length?: number): T;
	fromJSON(object: any): T;
	toJSON(message: T): unknown;
	create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
	fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
