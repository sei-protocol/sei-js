import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { MessageDependencyMapping, WasmDependencyMapping } from "../accesscontrol/accesscontrol";

import type {
	MsgUpdateResourceDependencyMappingProposalJsonFile as MsgUpdateResourceDependencyMappingProposalJsonFile_type,
	MsgUpdateResourceDependencyMappingProposalResponse as MsgUpdateResourceDependencyMappingProposalResponse_type,
	MsgUpdateResourceDependencyMappingProposal as MsgUpdateResourceDependencyMappingProposal_type,
	MsgUpdateWasmDependencyMappingProposalJsonFile as MsgUpdateWasmDependencyMappingProposalJsonFile_type,
	MsgUpdateWasmDependencyMappingProposal as MsgUpdateWasmDependencyMappingProposal_type,
} from "../../../types/cosmos/accesscontrol_x";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface MsgUpdateResourceDependencyMappingProposal extends MsgUpdateResourceDependencyMappingProposal_type {}
export interface MsgUpdateResourceDependencyMappingProposalJsonFile extends MsgUpdateResourceDependencyMappingProposalJsonFile_type {}
export interface MsgUpdateResourceDependencyMappingProposalResponse extends MsgUpdateResourceDependencyMappingProposalResponse_type {}
export interface MsgUpdateWasmDependencyMappingProposal extends MsgUpdateWasmDependencyMappingProposal_type {}
export interface MsgUpdateWasmDependencyMappingProposalJsonFile extends MsgUpdateWasmDependencyMappingProposalJsonFile_type {}

export const MsgUpdateResourceDependencyMappingProposal: MessageFns<
	MsgUpdateResourceDependencyMappingProposal,
	"cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal"
> = {
	$type: "cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal" as const,

	encode(message: MsgUpdateResourceDependencyMappingProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		for (const v of message.message_dependency_mapping) {
			MessageDependencyMapping.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateResourceDependencyMappingProposal();
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

					message.message_dependency_mapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateResourceDependencyMappingProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			message_dependency_mapping: globalThis.Array.isArray(object?.message_dependency_mapping)
				? object.message_dependency_mapping.map((e: any) => MessageDependencyMapping.fromJSON(e))
				: [],
		};
	},

	toJSON(message: MsgUpdateResourceDependencyMappingProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.message_dependency_mapping?.length) {
			obj.message_dependency_mapping = message.message_dependency_mapping.map((e) => MessageDependencyMapping.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUpdateResourceDependencyMappingProposal>, I>>(base?: I): MsgUpdateResourceDependencyMappingProposal {
		return MsgUpdateResourceDependencyMappingProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUpdateResourceDependencyMappingProposal>, I>>(object: I): MsgUpdateResourceDependencyMappingProposal {
		const message = createBaseMsgUpdateResourceDependencyMappingProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.message_dependency_mapping = object.message_dependency_mapping?.map((e) => MessageDependencyMapping.fromPartial(e)) || [];
		return message;
	},
};

export const MsgUpdateResourceDependencyMappingProposalJsonFile: MessageFns<
	MsgUpdateResourceDependencyMappingProposalJsonFile,
	"cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile"
> = {
	$type: "cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile" as const,

	encode(message: MsgUpdateResourceDependencyMappingProposalJsonFile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.deposit !== "") {
			writer.uint32(26).string(message.deposit);
		}
		for (const v of message.message_dependency_mapping) {
			MessageDependencyMapping.encode(v!, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposalJsonFile {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
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

					message.deposit = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.message_dependency_mapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateResourceDependencyMappingProposalJsonFile {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			deposit: isSet(object.deposit) ? globalThis.String(object.deposit) : "",
			message_dependency_mapping: globalThis.Array.isArray(object?.message_dependency_mapping)
				? object.message_dependency_mapping.map((e: any) => MessageDependencyMapping.fromJSON(e))
				: [],
		};
	},

	toJSON(message: MsgUpdateResourceDependencyMappingProposalJsonFile): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.deposit !== "") {
			obj.deposit = message.deposit;
		}
		if (message.message_dependency_mapping?.length) {
			obj.message_dependency_mapping = message.message_dependency_mapping.map((e) => MessageDependencyMapping.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUpdateResourceDependencyMappingProposalJsonFile>, I>>(base?: I): MsgUpdateResourceDependencyMappingProposalJsonFile {
		return MsgUpdateResourceDependencyMappingProposalJsonFile.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUpdateResourceDependencyMappingProposalJsonFile>, I>>(
		object: I,
	): MsgUpdateResourceDependencyMappingProposalJsonFile {
		const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.deposit = object.deposit ?? "";
		message.message_dependency_mapping = object.message_dependency_mapping?.map((e) => MessageDependencyMapping.fromPartial(e)) || [];
		return message;
	},
};

export const MsgUpdateResourceDependencyMappingProposalResponse: MessageFns<
	MsgUpdateResourceDependencyMappingProposalResponse,
	"cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse"
> = {
	$type: "cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse" as const,

	encode(_: MsgUpdateResourceDependencyMappingProposalResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposalResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
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

	fromJSON(_: any): MsgUpdateResourceDependencyMappingProposalResponse {
		return {};
	},

	toJSON(_: MsgUpdateResourceDependencyMappingProposalResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUpdateResourceDependencyMappingProposalResponse>, I>>(base?: I): MsgUpdateResourceDependencyMappingProposalResponse {
		return MsgUpdateResourceDependencyMappingProposalResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUpdateResourceDependencyMappingProposalResponse>, I>>(_: I): MsgUpdateResourceDependencyMappingProposalResponse {
		const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
		return message;
	},
};

export const MsgUpdateWasmDependencyMappingProposal: MessageFns<
	MsgUpdateWasmDependencyMappingProposal,
	"cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal"
> = {
	$type: "cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal" as const,

	encode(message: MsgUpdateWasmDependencyMappingProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.contract_address !== "") {
			writer.uint32(26).string(message.contract_address);
		}
		if (message.wasm_dependency_mapping !== undefined) {
			WasmDependencyMapping.encode(message.wasm_dependency_mapping, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWasmDependencyMappingProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateWasmDependencyMappingProposal();
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

					message.contract_address = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
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

	fromJSON(object: any): MsgUpdateWasmDependencyMappingProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			contract_address: isSet(object.contract_address) ? globalThis.String(object.contract_address) : "",
			wasm_dependency_mapping: isSet(object.wasm_dependency_mapping) ? WasmDependencyMapping.fromJSON(object.wasm_dependency_mapping) : undefined,
		};
	},

	toJSON(message: MsgUpdateWasmDependencyMappingProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.contract_address !== "") {
			obj.contract_address = message.contract_address;
		}
		if (message.wasm_dependency_mapping !== undefined) {
			obj.wasm_dependency_mapping = WasmDependencyMapping.toJSON(message.wasm_dependency_mapping);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUpdateWasmDependencyMappingProposal>, I>>(base?: I): MsgUpdateWasmDependencyMappingProposal {
		return MsgUpdateWasmDependencyMappingProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUpdateWasmDependencyMappingProposal>, I>>(object: I): MsgUpdateWasmDependencyMappingProposal {
		const message = createBaseMsgUpdateWasmDependencyMappingProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.contract_address = object.contract_address ?? "";
		message.wasm_dependency_mapping =
			object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null
				? WasmDependencyMapping.fromPartial(object.wasm_dependency_mapping)
				: undefined;
		return message;
	},
};

export const MsgUpdateWasmDependencyMappingProposalJsonFile: MessageFns<
	MsgUpdateWasmDependencyMappingProposalJsonFile,
	"cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile"
> = {
	$type: "cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile" as const,

	encode(message: MsgUpdateWasmDependencyMappingProposalJsonFile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.deposit !== "") {
			writer.uint32(26).string(message.deposit);
		}
		if (message.contract_address !== "") {
			writer.uint32(34).string(message.contract_address);
		}
		if (message.wasm_dependency_mapping !== undefined) {
			WasmDependencyMapping.encode(message.wasm_dependency_mapping, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWasmDependencyMappingProposalJsonFile {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
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

					message.deposit = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.contract_address = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
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

	fromJSON(object: any): MsgUpdateWasmDependencyMappingProposalJsonFile {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			deposit: isSet(object.deposit) ? globalThis.String(object.deposit) : "",
			contract_address: isSet(object.contract_address) ? globalThis.String(object.contract_address) : "",
			wasm_dependency_mapping: isSet(object.wasm_dependency_mapping) ? WasmDependencyMapping.fromJSON(object.wasm_dependency_mapping) : undefined,
		};
	},

	toJSON(message: MsgUpdateWasmDependencyMappingProposalJsonFile): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.deposit !== "") {
			obj.deposit = message.deposit;
		}
		if (message.contract_address !== "") {
			obj.contract_address = message.contract_address;
		}
		if (message.wasm_dependency_mapping !== undefined) {
			obj.wasm_dependency_mapping = WasmDependencyMapping.toJSON(message.wasm_dependency_mapping);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUpdateWasmDependencyMappingProposalJsonFile>, I>>(base?: I): MsgUpdateWasmDependencyMappingProposalJsonFile {
		return MsgUpdateWasmDependencyMappingProposalJsonFile.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUpdateWasmDependencyMappingProposalJsonFile>, I>>(object: I): MsgUpdateWasmDependencyMappingProposalJsonFile {
		const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.deposit = object.deposit ?? "";
		message.contract_address = object.contract_address ?? "";
		message.wasm_dependency_mapping =
			object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null
				? WasmDependencyMapping.fromPartial(object.wasm_dependency_mapping)
				: undefined;
		return message;
	},
};

function createBaseMsgUpdateResourceDependencyMappingProposal(): MsgUpdateResourceDependencyMappingProposal {
	return { title: "", description: "", message_dependency_mapping: [] };
}

function createBaseMsgUpdateResourceDependencyMappingProposalJsonFile(): MsgUpdateResourceDependencyMappingProposalJsonFile {
	return { title: "", description: "", deposit: "", message_dependency_mapping: [] };
}

function createBaseMsgUpdateResourceDependencyMappingProposalResponse(): MsgUpdateResourceDependencyMappingProposalResponse {
	return {};
}

function createBaseMsgUpdateWasmDependencyMappingProposal(): MsgUpdateWasmDependencyMappingProposal {
	return { title: "", description: "", contract_address: "", wasm_dependency_mapping: undefined };
}

function createBaseMsgUpdateWasmDependencyMappingProposalJsonFile(): MsgUpdateWasmDependencyMappingProposalJsonFile {
	return { title: "", description: "", deposit: "", contract_address: "", wasm_dependency_mapping: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
