import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	CapabilityOwners as CapabilityOwners_type,
	Capability as Capability_type,
	Owner as Owner_type,
} from "../../../../types/cosmos/capability/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface Capability extends Capability_type {}
export interface Owner extends Owner_type {}
export interface CapabilityOwners extends CapabilityOwners_type {}

export const Capability: MessageFns<Capability, "cosmos.capability.v1beta1.Capability"> = {
	$type: "cosmos.capability.v1beta1.Capability" as const,

	encode(message: Capability, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.index !== 0) {
			writer.uint32(8).uint64(message.index);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Capability {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCapability();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.index = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Capability {
		return { index: isSet(object.index) ? globalThis.Number(object.index) : 0 };
	},

	toJSON(message: Capability): unknown {
		const obj: any = {};
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Capability>, I>>(base?: I): Capability {
		return Capability.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Capability>, I>>(object: I): Capability {
		const message = createBaseCapability();
		message.index = object.index ?? 0;
		return message;
	},
};

export const Owner: MessageFns<Owner, "cosmos.capability.v1beta1.Owner"> = {
	$type: "cosmos.capability.v1beta1.Owner" as const,

	encode(message: Owner, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.module !== "") {
			writer.uint32(10).string(message.module);
		}
		if (message.name !== "") {
			writer.uint32(18).string(message.name);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Owner {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseOwner();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.module = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.name = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Owner {
		return {
			module: isSet(object.module) ? globalThis.String(object.module) : "",
			name: isSet(object.name) ? globalThis.String(object.name) : "",
		};
	},

	toJSON(message: Owner): unknown {
		const obj: any = {};
		if (message.module !== "") {
			obj.module = message.module;
		}
		if (message.name !== "") {
			obj.name = message.name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Owner>, I>>(base?: I): Owner {
		return Owner.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
		const message = createBaseOwner();
		message.module = object.module ?? "";
		message.name = object.name ?? "";
		return message;
	},
};

export const CapabilityOwners: MessageFns<CapabilityOwners, "cosmos.capability.v1beta1.CapabilityOwners"> = {
	$type: "cosmos.capability.v1beta1.CapabilityOwners" as const,

	encode(message: CapabilityOwners, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.owners) {
			Owner.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CapabilityOwners {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCapabilityOwners();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.owners.push(Owner.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CapabilityOwners {
		return { owners: globalThis.Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromJSON(e)) : [] };
	},

	toJSON(message: CapabilityOwners): unknown {
		const obj: any = {};
		if (message.owners?.length) {
			obj.owners = message.owners.map((e) => Owner.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CapabilityOwners>, I>>(base?: I): CapabilityOwners {
		return CapabilityOwners.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CapabilityOwners>, I>>(object: I): CapabilityOwners {
		const message = createBaseCapabilityOwners();
		message.owners = object.owners?.map((e) => Owner.fromPartial(e)) || [];
		return message;
	},
};

function createBaseCapability(): Capability {
	return { index: 0 };
}

function createBaseOwner(): Owner {
	return { module: "", name: "" };
}

function createBaseCapabilityOwners(): CapabilityOwners {
	return { owners: [] };
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
	["/cosmos.capability.v1beta1.Capability", Capability as never],
	["/cosmos.capability.v1beta1.Owner", Owner as never],
	["/cosmos.capability.v1beta1.CapabilityOwners", CapabilityOwners as never],
];
export const aminoConverters = {
	"/cosmos.capability.v1beta1.Capability": {
		aminoType: "cosmos-sdk/Capability",
		toAmino: (message: Capability) => ({ ...message }),
		fromAmino: (object: Capability) => ({ ...object }),
	},

	"/cosmos.capability.v1beta1.Owner": {
		aminoType: "cosmos-sdk/Owner",
		toAmino: (message: Owner) => ({ ...message }),
		fromAmino: (object: Owner) => ({ ...object }),
	},

	"/cosmos.capability.v1beta1.CapabilityOwners": {
		aminoType: "cosmos-sdk/CapabilityOwners",
		toAmino: (message: CapabilityOwners) => ({ ...message }),
		fromAmino: (object: CapabilityOwners) => ({ ...object }),
	},
};
