import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { WasmDependencyMapping } from "../accesscontrol/accesscontrol";

import type {
	MsgRegisterWasmDependencyResponse as MsgRegisterWasmDependencyResponseType,
	MsgRegisterWasmDependency as MsgRegisterWasmDependencyType,
	RegisterWasmDependencyJSONFile as RegisterWasmDependencyJSONFileType,
} from "../../../types/cosmos/accesscontrol_x";

import type { DeepPartial, Exact, MessageFns } from "../../common.ts";

interface RegisterWasmDependencyJSONFile extends RegisterWasmDependencyJSONFileType {}
interface MsgRegisterWasmDependency extends MsgRegisterWasmDependencyType {}
interface MsgRegisterWasmDependencyResponse extends MsgRegisterWasmDependencyResponseType {}

export const RegisterWasmDependencyJSONFile: MessageFns<RegisterWasmDependencyJSONFile, "cosmos.accesscontrol_x.v1beta1.RegisterWasmDependencyJSONFile"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.RegisterWasmDependencyJSONFile" as const,

	encode(message: RegisterWasmDependencyJSONFile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.wasm_dependency_mapping !== undefined) {
			WasmDependencyMapping.encode(message.wasm_dependency_mapping, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RegisterWasmDependencyJSONFile {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRegisterWasmDependencyJSONFile();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.wasm_dependency_mapping = WasmDependencyMapping.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RegisterWasmDependencyJSONFile {
		return {
			wasm_dependency_mapping: isSet(object.wasm_dependency_mapping) ? WasmDependencyMapping.fromJSON(object.wasm_dependency_mapping) : undefined,
		};
	},

	toJSON(message: RegisterWasmDependencyJSONFile): unknown {
		const obj: any = {};
		if (message.wasm_dependency_mapping !== undefined) {
			obj.wasm_dependency_mapping = WasmDependencyMapping.toJSON(message.wasm_dependency_mapping);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RegisterWasmDependencyJSONFile>, I>>(base?: I): RegisterWasmDependencyJSONFile {
		return RegisterWasmDependencyJSONFile.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RegisterWasmDependencyJSONFile>, I>>(object: I): RegisterWasmDependencyJSONFile {
		const message = createBaseRegisterWasmDependencyJSONFile();
		message.wasm_dependency_mapping =
			object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null
				? WasmDependencyMapping.fromPartial(object.wasm_dependency_mapping)
				: undefined;
		return message;
	},
};

export const MsgRegisterWasmDependency: MessageFns<MsgRegisterWasmDependency, "cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency"> = {
	$type: "cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependency" as const,

	encode(message: MsgRegisterWasmDependency, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.wasm_dependency_mapping !== undefined) {
			WasmDependencyMapping.encode(message.wasm_dependency_mapping, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWasmDependency {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterWasmDependency();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.wasm_dependency_mapping = WasmDependencyMapping.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgRegisterWasmDependency {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			wasm_dependency_mapping: isSet(object.wasm_dependency_mapping) ? WasmDependencyMapping.fromJSON(object.wasm_dependency_mapping) : undefined,
		};
	},

	toJSON(message: MsgRegisterWasmDependency): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.wasm_dependency_mapping !== undefined) {
			obj.wasm_dependency_mapping = WasmDependencyMapping.toJSON(message.wasm_dependency_mapping);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRegisterWasmDependency>, I>>(base?: I): MsgRegisterWasmDependency {
		return MsgRegisterWasmDependency.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRegisterWasmDependency>, I>>(object: I): MsgRegisterWasmDependency {
		const message = createBaseMsgRegisterWasmDependency();
		message.from_address = object.from_address ?? "";
		message.wasm_dependency_mapping =
			object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null
				? WasmDependencyMapping.fromPartial(object.wasm_dependency_mapping)
				: undefined;
		return message;
	},
};

export const MsgRegisterWasmDependencyResponse: MessageFns<
	MsgRegisterWasmDependencyResponse,
	"cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse"
> = {
	$type: "cosmos.accesscontrol_x.v1beta1.MsgRegisterWasmDependencyResponse" as const,

	encode(_: MsgRegisterWasmDependencyResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterWasmDependencyResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterWasmDependencyResponse();
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

	fromJSON(_: any): MsgRegisterWasmDependencyResponse {
		return {};
	},

	toJSON(_: MsgRegisterWasmDependencyResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRegisterWasmDependencyResponse>, I>>(base?: I): MsgRegisterWasmDependencyResponse {
		return MsgRegisterWasmDependencyResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRegisterWasmDependencyResponse>, I>>(_: I): MsgRegisterWasmDependencyResponse {
		const message = createBaseMsgRegisterWasmDependencyResponse();
		return message;
	},
};

function createBaseRegisterWasmDependencyJSONFile(): RegisterWasmDependencyJSONFile {
	return { wasm_dependency_mapping: undefined };
}

function createBaseMsgRegisterWasmDependency(): MsgRegisterWasmDependency {
	return { from_address: "", wasm_dependency_mapping: undefined };
}

function createBaseMsgRegisterWasmDependencyResponse(): MsgRegisterWasmDependencyResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
