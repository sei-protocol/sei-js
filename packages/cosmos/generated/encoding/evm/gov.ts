import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	AddCWERC20PointerProposal as AddCWERC20PointerProposalType,
	AddCWERC721PointerProposal as AddCWERC721PointerProposalType,
	AddERCCW20PointerProposal as AddERCCW20PointerProposalType,
	AddERCCW721PointerProposal as AddERCCW721PointerProposalType,
	AddERCNativePointerProposal as AddERCNativePointerProposalType,
	AddERCNativePointerProposalV2 as AddERCNativePointerProposalV2Type,
} from "../../types/evm";

import type { DeepPartial, Exact, MessageFns } from "../common.ts";

interface AddERCNativePointerProposal extends AddERCNativePointerProposalType {}
interface AddERCCW20PointerProposal extends AddERCCW20PointerProposalType {}
interface AddERCCW721PointerProposal extends AddERCCW721PointerProposalType {}
interface AddCWERC20PointerProposal extends AddCWERC20PointerProposalType {}
interface AddCWERC721PointerProposal extends AddCWERC721PointerProposalType {}
interface AddERCNativePointerProposalV2 extends AddERCNativePointerProposalV2Type {}

export const AddERCNativePointerProposal: MessageFns<AddERCNativePointerProposal, "seiprotocol.seichain.evm.AddERCNativePointerProposal"> = {
	$type: "seiprotocol.seichain.evm.AddERCNativePointerProposal" as const,

	encode(message: AddERCNativePointerProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.token !== "") {
			writer.uint32(26).string(message.token);
		}
		if (message.pointer !== "") {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AddERCNativePointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddERCNativePointerProposal();
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

					message.token = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pointer = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.version = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AddERCNativePointerProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			token: isSet(object.token) ? globalThis.String(object.token) : "",
			pointer: isSet(object.pointer) ? globalThis.String(object.pointer) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
		};
	},

	toJSON(message: AddERCNativePointerProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.token !== "") {
			obj.token = message.token;
		}
		if (message.pointer !== "") {
			obj.pointer = message.pointer;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AddERCNativePointerProposal>, I>>(base?: I): AddERCNativePointerProposal {
		return AddERCNativePointerProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AddERCNativePointerProposal>, I>>(object: I): AddERCNativePointerProposal {
		const message = createBaseAddERCNativePointerProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.token = object.token ?? "";
		message.pointer = object.pointer ?? "";
		message.version = object.version ?? 0;
		return message;
	},
};

export const AddERCCW20PointerProposal: MessageFns<AddERCCW20PointerProposal, "seiprotocol.seichain.evm.AddERCCW20PointerProposal"> = {
	$type: "seiprotocol.seichain.evm.AddERCCW20PointerProposal" as const,

	encode(message: AddERCCW20PointerProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.pointee !== "") {
			writer.uint32(26).string(message.pointee);
		}
		if (message.pointer !== "") {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AddERCCW20PointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddERCCW20PointerProposal();
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

					message.pointee = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pointer = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.version = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AddERCCW20PointerProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			pointee: isSet(object.pointee) ? globalThis.String(object.pointee) : "",
			pointer: isSet(object.pointer) ? globalThis.String(object.pointer) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
		};
	},

	toJSON(message: AddERCCW20PointerProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.pointee !== "") {
			obj.pointee = message.pointee;
		}
		if (message.pointer !== "") {
			obj.pointer = message.pointer;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AddERCCW20PointerProposal>, I>>(base?: I): AddERCCW20PointerProposal {
		return AddERCCW20PointerProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AddERCCW20PointerProposal>, I>>(object: I): AddERCCW20PointerProposal {
		const message = createBaseAddERCCW20PointerProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.pointee = object.pointee ?? "";
		message.pointer = object.pointer ?? "";
		message.version = object.version ?? 0;
		return message;
	},
};

export const AddERCCW721PointerProposal: MessageFns<AddERCCW721PointerProposal, "seiprotocol.seichain.evm.AddERCCW721PointerProposal"> = {
	$type: "seiprotocol.seichain.evm.AddERCCW721PointerProposal" as const,

	encode(message: AddERCCW721PointerProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.pointee !== "") {
			writer.uint32(26).string(message.pointee);
		}
		if (message.pointer !== "") {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AddERCCW721PointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddERCCW721PointerProposal();
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

					message.pointee = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pointer = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.version = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AddERCCW721PointerProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			pointee: isSet(object.pointee) ? globalThis.String(object.pointee) : "",
			pointer: isSet(object.pointer) ? globalThis.String(object.pointer) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
		};
	},

	toJSON(message: AddERCCW721PointerProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.pointee !== "") {
			obj.pointee = message.pointee;
		}
		if (message.pointer !== "") {
			obj.pointer = message.pointer;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AddERCCW721PointerProposal>, I>>(base?: I): AddERCCW721PointerProposal {
		return AddERCCW721PointerProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AddERCCW721PointerProposal>, I>>(object: I): AddERCCW721PointerProposal {
		const message = createBaseAddERCCW721PointerProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.pointee = object.pointee ?? "";
		message.pointer = object.pointer ?? "";
		message.version = object.version ?? 0;
		return message;
	},
};

export const AddCWERC20PointerProposal: MessageFns<AddCWERC20PointerProposal, "seiprotocol.seichain.evm.AddCWERC20PointerProposal"> = {
	$type: "seiprotocol.seichain.evm.AddCWERC20PointerProposal" as const,

	encode(message: AddCWERC20PointerProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.pointee !== "") {
			writer.uint32(26).string(message.pointee);
		}
		if (message.pointer !== "") {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AddCWERC20PointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddCWERC20PointerProposal();
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

					message.pointee = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pointer = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.version = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AddCWERC20PointerProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			pointee: isSet(object.pointee) ? globalThis.String(object.pointee) : "",
			pointer: isSet(object.pointer) ? globalThis.String(object.pointer) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
		};
	},

	toJSON(message: AddCWERC20PointerProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.pointee !== "") {
			obj.pointee = message.pointee;
		}
		if (message.pointer !== "") {
			obj.pointer = message.pointer;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AddCWERC20PointerProposal>, I>>(base?: I): AddCWERC20PointerProposal {
		return AddCWERC20PointerProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AddCWERC20PointerProposal>, I>>(object: I): AddCWERC20PointerProposal {
		const message = createBaseAddCWERC20PointerProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.pointee = object.pointee ?? "";
		message.pointer = object.pointer ?? "";
		message.version = object.version ?? 0;
		return message;
	},
};

export const AddCWERC721PointerProposal: MessageFns<AddCWERC721PointerProposal, "seiprotocol.seichain.evm.AddCWERC721PointerProposal"> = {
	$type: "seiprotocol.seichain.evm.AddCWERC721PointerProposal" as const,

	encode(message: AddCWERC721PointerProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.pointee !== "") {
			writer.uint32(26).string(message.pointee);
		}
		if (message.pointer !== "") {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AddCWERC721PointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddCWERC721PointerProposal();
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

					message.pointee = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.pointer = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.version = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AddCWERC721PointerProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			pointee: isSet(object.pointee) ? globalThis.String(object.pointee) : "",
			pointer: isSet(object.pointer) ? globalThis.String(object.pointer) : "",
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
		};
	},

	toJSON(message: AddCWERC721PointerProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.pointee !== "") {
			obj.pointee = message.pointee;
		}
		if (message.pointer !== "") {
			obj.pointer = message.pointer;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AddCWERC721PointerProposal>, I>>(base?: I): AddCWERC721PointerProposal {
		return AddCWERC721PointerProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AddCWERC721PointerProposal>, I>>(object: I): AddCWERC721PointerProposal {
		const message = createBaseAddCWERC721PointerProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.pointee = object.pointee ?? "";
		message.pointer = object.pointer ?? "";
		message.version = object.version ?? 0;
		return message;
	},
};

export const AddERCNativePointerProposalV2: MessageFns<AddERCNativePointerProposalV2, "seiprotocol.seichain.evm.AddERCNativePointerProposalV2"> = {
	$type: "seiprotocol.seichain.evm.AddERCNativePointerProposalV2" as const,

	encode(message: AddERCNativePointerProposalV2, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.token !== "") {
			writer.uint32(26).string(message.token);
		}
		if (message.name !== "") {
			writer.uint32(34).string(message.name);
		}
		if (message.symbol !== "") {
			writer.uint32(42).string(message.symbol);
		}
		if (message.decimals !== 0) {
			writer.uint32(48).uint32(message.decimals);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AddERCNativePointerProposalV2 {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddERCNativePointerProposalV2();
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

					message.token = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.name = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.symbol = reader.string();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.decimals = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AddERCNativePointerProposalV2 {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			token: isSet(object.token) ? globalThis.String(object.token) : "",
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			symbol: isSet(object.symbol) ? globalThis.String(object.symbol) : "",
			decimals: isSet(object.decimals) ? globalThis.Number(object.decimals) : 0,
		};
	},

	toJSON(message: AddERCNativePointerProposalV2): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.token !== "") {
			obj.token = message.token;
		}
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.symbol !== "") {
			obj.symbol = message.symbol;
		}
		if (message.decimals !== 0) {
			obj.decimals = Math.round(message.decimals);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AddERCNativePointerProposalV2>, I>>(base?: I): AddERCNativePointerProposalV2 {
		return AddERCNativePointerProposalV2.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AddERCNativePointerProposalV2>, I>>(object: I): AddERCNativePointerProposalV2 {
		const message = createBaseAddERCNativePointerProposalV2();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.token = object.token ?? "";
		message.name = object.name ?? "";
		message.symbol = object.symbol ?? "";
		message.decimals = object.decimals ?? 0;
		return message;
	},
};

function createBaseAddERCNativePointerProposal(): AddERCNativePointerProposal {
	return { title: "", description: "", token: "", pointer: "", version: 0 };
}

function createBaseAddERCCW20PointerProposal(): AddERCCW20PointerProposal {
	return { title: "", description: "", pointee: "", pointer: "", version: 0 };
}

function createBaseAddERCCW721PointerProposal(): AddERCCW721PointerProposal {
	return { title: "", description: "", pointee: "", pointer: "", version: 0 };
}

function createBaseAddCWERC20PointerProposal(): AddCWERC20PointerProposal {
	return { title: "", description: "", pointee: "", pointer: "", version: 0 };
}

function createBaseAddCWERC721PointerProposal(): AddCWERC721PointerProposal {
	return { title: "", description: "", pointee: "", pointer: "", version: 0 };
}

function createBaseAddERCNativePointerProposalV2(): AddERCNativePointerProposalV2 {
	return { title: "", description: "", token: "", name: "", symbol: "", decimals: 0 };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
