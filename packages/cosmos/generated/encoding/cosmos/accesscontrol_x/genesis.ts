import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { MessageDependencyMapping, WasmDependencyMapping } from "../accesscontrol/accesscontrol";

import type { GenesisState as GenesisState_type, Params as Params_type } from "../../../types/cosmos/accesscontrol_x";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface GenesisState extends GenesisState_type {}
export interface Params extends Params_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.accesscontrol_x.v1beta1.GenesisState"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.message_dependency_mapping) {
			MessageDependencyMapping.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.wasm_dependency_mappings) {
			WasmDependencyMapping.encode(v!, writer.uint32(26).fork()).join();
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

					message.message_dependency_mapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.wasm_dependency_mappings.push(WasmDependencyMapping.decode(reader, reader.uint32()));
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
			message_dependency_mapping: globalThis.Array.isArray(object?.message_dependency_mapping)
				? object.message_dependency_mapping.map((e: any) => MessageDependencyMapping.fromJSON(e))
				: [],
			wasm_dependency_mappings: globalThis.Array.isArray(object?.wasm_dependency_mappings)
				? object.wasm_dependency_mappings.map((e: any) => WasmDependencyMapping.fromJSON(e))
				: [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.message_dependency_mapping?.length) {
			obj.message_dependency_mapping = message.message_dependency_mapping.map((e) => MessageDependencyMapping.toJSON(e));
		}
		if (message.wasm_dependency_mappings?.length) {
			obj.wasm_dependency_mappings = message.wasm_dependency_mappings.map((e) => WasmDependencyMapping.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.message_dependency_mapping = object.message_dependency_mapping?.map((e) => MessageDependencyMapping.fromPartial(e)) || [];
		message.wasm_dependency_mappings = object.wasm_dependency_mappings?.map((e) => WasmDependencyMapping.fromPartial(e)) || [];
		return message;
	},
};

export const Params: MessageFns<Params, "cosmos.accesscontrol_x.v1beta1.Params"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.Params" as const,

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

function createBaseGenesisState(): GenesisState {
	return { params: undefined, message_dependency_mapping: [], wasm_dependency_mappings: [] };
}

function createBaseParams(): Params {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.accesscontrol_x.v1beta1.GenesisState", GenesisState as never],
	["/cosmos.accesscontrol_x.v1beta1.Params", Params as never],
];
export const aminoConverters = {
	"/cosmos.accesscontrol_x.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},

	"/cosmos.accesscontrol_x.v1beta1.Params": {
		aminoType: "cosmos-sdk/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object }),
	},
};
