import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { AccessOperation } from "./accesscontrol";

import { accessOperationSelectorTypeFromJSON, accessOperationSelectorTypeToJSON } from "./constants";

import type {
	LegacyAccessOperationWithSelector as LegacyAccessOperationWithSelector_type,
	LegacyWasmDependencyMapping as LegacyWasmDependencyMapping_type
} from "../../../types/cosmos/accesscontrol";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface LegacyAccessOperationWithSelector extends LegacyAccessOperationWithSelector_type {}
export interface LegacyWasmDependencyMapping extends LegacyWasmDependencyMapping_type {}

export const LegacyAccessOperationWithSelector: MessageFns<
	LegacyAccessOperationWithSelector,
	"cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector"
> = {
	$type: "cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector" as const,

	encode(message: LegacyAccessOperationWithSelector, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.operation !== undefined) {
			AccessOperation.encode(message.operation, writer.uint32(10).fork()).join();
		}
		if (message.selector_type !== 0) {
			writer.uint32(16).int32(message.selector_type);
		}
		if (message.selector !== "") {
			writer.uint32(26).string(message.selector);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): LegacyAccessOperationWithSelector {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseLegacyAccessOperationWithSelector();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.operation = AccessOperation.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.selector_type = reader.int32() as any;
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.selector = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): LegacyAccessOperationWithSelector {
		return {
			operation: isSet(object.operation) ? AccessOperation.fromJSON(object.operation) : undefined,
			selector_type: isSet(object.selector_type) ? accessOperationSelectorTypeFromJSON(object.selector_type) : 0,
			selector: isSet(object.selector) ? globalThis.String(object.selector) : ""
		};
	},

	toJSON(message: LegacyAccessOperationWithSelector): unknown {
		const obj: any = {};
		if (message.operation !== undefined) {
			obj.operation = AccessOperation.toJSON(message.operation);
		}
		if (message.selector_type !== 0) {
			obj.selector_type = accessOperationSelectorTypeToJSON(message.selector_type);
		}
		if (message.selector !== "") {
			obj.selector = message.selector;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<LegacyAccessOperationWithSelector>, I>>(base?: I): LegacyAccessOperationWithSelector {
		return LegacyAccessOperationWithSelector.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<LegacyAccessOperationWithSelector>, I>>(object: I): LegacyAccessOperationWithSelector {
		const message = createBaseLegacyAccessOperationWithSelector();
		message.operation = object.operation !== undefined && object.operation !== null ? AccessOperation.fromPartial(object.operation) : undefined;
		message.selector_type = object.selector_type ?? 0;
		message.selector = object.selector ?? "";
		return message;
	}
};

export const LegacyWasmDependencyMapping: MessageFns<LegacyWasmDependencyMapping, "cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping"> = {
	$type: "cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping" as const,

	encode(message: LegacyWasmDependencyMapping, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.enabled !== false) {
			writer.uint32(8).bool(message.enabled);
		}
		for (const v of message.access_ops) {
			LegacyAccessOperationWithSelector.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.reset_reason !== "") {
			writer.uint32(26).string(message.reset_reason);
		}
		if (message.contract_address !== "") {
			writer.uint32(34).string(message.contract_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): LegacyWasmDependencyMapping {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseLegacyWasmDependencyMapping();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.enabled = reader.bool();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.access_ops.push(LegacyAccessOperationWithSelector.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.reset_reason = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.contract_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): LegacyWasmDependencyMapping {
		return {
			enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
			access_ops: globalThis.Array.isArray(object?.access_ops) ? object.access_ops.map((e: any) => LegacyAccessOperationWithSelector.fromJSON(e)) : [],
			reset_reason: isSet(object.reset_reason) ? globalThis.String(object.reset_reason) : "",
			contract_address: isSet(object.contract_address) ? globalThis.String(object.contract_address) : ""
		};
	},

	toJSON(message: LegacyWasmDependencyMapping): unknown {
		const obj: any = {};
		if (message.enabled !== false) {
			obj.enabled = message.enabled;
		}
		if (message.access_ops?.length) {
			obj.access_ops = message.access_ops.map((e) => LegacyAccessOperationWithSelector.toJSON(e));
		}
		if (message.reset_reason !== "") {
			obj.reset_reason = message.reset_reason;
		}
		if (message.contract_address !== "") {
			obj.contract_address = message.contract_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<LegacyWasmDependencyMapping>, I>>(base?: I): LegacyWasmDependencyMapping {
		return LegacyWasmDependencyMapping.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<LegacyWasmDependencyMapping>, I>>(object: I): LegacyWasmDependencyMapping {
		const message = createBaseLegacyWasmDependencyMapping();
		message.enabled = object.enabled ?? false;
		message.access_ops = object.access_ops?.map((e) => LegacyAccessOperationWithSelector.fromPartial(e)) || [];
		message.reset_reason = object.reset_reason ?? "";
		message.contract_address = object.contract_address ?? "";
		return message;
	}
};

function createBaseLegacyAccessOperationWithSelector(): LegacyAccessOperationWithSelector {
	return { operation: undefined, selector_type: 0, selector: "" };
}

function createBaseLegacyWasmDependencyMapping(): LegacyWasmDependencyMapping {
	return { enabled: false, access_ops: [], reset_reason: "", contract_address: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector", LegacyAccessOperationWithSelector as never],
	["/cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping", LegacyWasmDependencyMapping as never]
];
export const aminoConverters = {
	"/cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector": {
		aminoType: "cosmos-sdk/LegacyAccessOperationWithSelector",
		toAmino: (message: LegacyAccessOperationWithSelector) => ({ ...message }),
		fromAmino: (object: LegacyAccessOperationWithSelector) => ({ ...object })
	},

	"/cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping": {
		aminoType: "cosmos-sdk/LegacyWasmDependencyMapping",
		toAmino: (message: LegacyWasmDependencyMapping) => ({ ...message }),
		fromAmino: (object: LegacyWasmDependencyMapping) => ({ ...object })
	}
};
