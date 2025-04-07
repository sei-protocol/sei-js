import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { ParamChange as ParamChange_type, ParameterChangeProposal as ParameterChangeProposal_type } from "../../../../types/cosmos/params/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface ParameterChangeProposal extends ParameterChangeProposal_type {}
export interface ParamChange extends ParamChange_type {}

export const ParameterChangeProposal: MessageFns<ParameterChangeProposal, "cosmos.params.v1beta1.ParameterChangeProposal"> = {
	$type: "cosmos.params.v1beta1.ParameterChangeProposal" as const,

	encode(message: ParameterChangeProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		for (const v of message.changes) {
			ParamChange.encode(v!, writer.uint32(26).fork()).join();
		}
		if (message.is_expedited !== false) {
			writer.uint32(32).bool(message.is_expedited);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ParameterChangeProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParameterChangeProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.title = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.description = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.changes.push(ParamChange.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.is_expedited = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ParameterChangeProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			changes: globalThis.Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromJSON(e)) : [],
			is_expedited: isSet(object.is_expedited) ? globalThis.Boolean(object.is_expedited) : false
		};
	},

	toJSON(message: ParameterChangeProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.changes?.length) {
			obj.changes = message.changes.map((e) => ParamChange.toJSON(e));
		}
		if (message.is_expedited !== false) {
			obj.is_expedited = message.is_expedited;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(base?: I): ParameterChangeProposal {
		return ParameterChangeProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(object: I): ParameterChangeProposal {
		const message = createBaseParameterChangeProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.changes = object.changes?.map((e) => ParamChange.fromPartial(e)) || [];
		message.is_expedited = object.is_expedited ?? false;
		return message;
	}
};

export const ParamChange: MessageFns<ParamChange, "cosmos.params.v1beta1.ParamChange"> = {
	$type: "cosmos.params.v1beta1.ParamChange" as const,

	encode(message: ParamChange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.subspace !== "") {
			writer.uint32(10).string(message.subspace);
		}
		if (message.key !== "") {
			writer.uint32(18).string(message.key);
		}
		if (message.value !== "") {
			writer.uint32(26).string(message.value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ParamChange {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParamChange();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.subspace = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.key = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.value = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ParamChange {
		return {
			subspace: isSet(object.subspace) ? globalThis.String(object.subspace) : "",
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? globalThis.String(object.value) : ""
		};
	},

	toJSON(message: ParamChange): unknown {
		const obj: any = {};
		if (message.subspace !== "") {
			obj.subspace = message.subspace;
		}
		if (message.key !== "") {
			obj.key = message.key;
		}
		if (message.value !== "") {
			obj.value = message.value;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ParamChange>, I>>(base?: I): ParamChange {
		return ParamChange.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ParamChange>, I>>(object: I): ParamChange {
		const message = createBaseParamChange();
		message.subspace = object.subspace ?? "";
		message.key = object.key ?? "";
		message.value = object.value ?? "";
		return message;
	}
};

function createBaseParameterChangeProposal(): ParameterChangeProposal {
	return { title: "", description: "", changes: [], is_expedited: false };
}

function createBaseParamChange(): ParamChange {
	return { subspace: "", key: "", value: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.params.v1beta1.ParamChange", ParamChange as never]];
export const aminoConverters = {
	"/cosmos.params.v1beta1.ParamChange": {
		aminoType: "cosmos-sdk/ParamChange",
		toAmino: (message: ParamChange) => ({ ...message }),
		fromAmino: (object: ParamChange) => ({ ...object })
	}
};
