import { BinaryReader, BinaryWriter } from '../binary';
export interface AddERCNativePointerProposal {
	title: string;
	description: string;
	token: string;
	pointer: string;
	version: number;
}
export interface AddERCNativePointerProposalProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.AddERCNativePointerProposal';
	value: Uint8Array;
}
export interface AddERCNativePointerProposalAmino {
	title?: string;
	description?: string;
	token?: string;
	pointer?: string;
	version?: number;
}
export interface AddERCNativePointerProposalAminoMsg {
	type: '/seiprotocol.seichain.evm.AddERCNativePointerProposal';
	value: AddERCNativePointerProposalAmino;
}
export interface AddERCNativePointerProposalSDKType {
	title: string;
	description: string;
	token: string;
	pointer: string;
	version: number;
}
export interface AddERCCW20PointerProposal {
	title: string;
	description: string;
	pointee: string;
	pointer: string;
	version: number;
}
export interface AddERCCW20PointerProposalProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.AddERCCW20PointerProposal';
	value: Uint8Array;
}
export interface AddERCCW20PointerProposalAmino {
	title?: string;
	description?: string;
	pointee?: string;
	pointer?: string;
	version?: number;
}
export interface AddERCCW20PointerProposalAminoMsg {
	type: '/seiprotocol.seichain.evm.AddERCCW20PointerProposal';
	value: AddERCCW20PointerProposalAmino;
}
export interface AddERCCW20PointerProposalSDKType {
	title: string;
	description: string;
	pointee: string;
	pointer: string;
	version: number;
}
export interface AddERCCW721PointerProposal {
	title: string;
	description: string;
	pointee: string;
	pointer: string;
	version: number;
}
export interface AddERCCW721PointerProposalProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.AddERCCW721PointerProposal';
	value: Uint8Array;
}
export interface AddERCCW721PointerProposalAmino {
	title?: string;
	description?: string;
	pointee?: string;
	pointer?: string;
	version?: number;
}
export interface AddERCCW721PointerProposalAminoMsg {
	type: '/seiprotocol.seichain.evm.AddERCCW721PointerProposal';
	value: AddERCCW721PointerProposalAmino;
}
export interface AddERCCW721PointerProposalSDKType {
	title: string;
	description: string;
	pointee: string;
	pointer: string;
	version: number;
}
function createBaseAddERCNativePointerProposal(): AddERCNativePointerProposal {
	return {
		title: '',
		description: '',
		token: '',
		pointer: '',
		version: 0
	};
}
export const AddERCNativePointerProposal = {
	typeUrl: '/seiprotocol.seichain.evm.AddERCNativePointerProposal',
	encode(message: AddERCNativePointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.title !== '') {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== '') {
			writer.uint32(18).string(message.description);
		}
		if (message.token !== '') {
			writer.uint32(26).string(message.token);
		}
		if (message.pointer !== '') {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): AddERCNativePointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddERCNativePointerProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.title = reader.string();
					break;
				case 2:
					message.description = reader.string();
					break;
				case 3:
					message.token = reader.string();
					break;
				case 4:
					message.pointer = reader.string();
					break;
				case 5:
					message.version = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<AddERCNativePointerProposal>): AddERCNativePointerProposal {
		const message = createBaseAddERCNativePointerProposal();
		message.title = object.title ?? '';
		message.description = object.description ?? '';
		message.token = object.token ?? '';
		message.pointer = object.pointer ?? '';
		message.version = object.version ?? 0;
		return message;
	},
	fromAmino(object: AddERCNativePointerProposalAmino): AddERCNativePointerProposal {
		const message = createBaseAddERCNativePointerProposal();
		if (object.title !== undefined && object.title !== null) {
			message.title = object.title;
		}
		if (object.description !== undefined && object.description !== null) {
			message.description = object.description;
		}
		if (object.token !== undefined && object.token !== null) {
			message.token = object.token;
		}
		if (object.pointer !== undefined && object.pointer !== null) {
			message.pointer = object.pointer;
		}
		if (object.version !== undefined && object.version !== null) {
			message.version = object.version;
		}
		return message;
	},
	toAmino(message: AddERCNativePointerProposal): AddERCNativePointerProposalAmino {
		const obj: any = {};
		obj.title = message.title === '' ? undefined : message.title;
		obj.description = message.description === '' ? undefined : message.description;
		obj.token = message.token === '' ? undefined : message.token;
		obj.pointer = message.pointer === '' ? undefined : message.pointer;
		obj.version = message.version === 0 ? undefined : message.version;
		return obj;
	},
	fromAminoMsg(object: AddERCNativePointerProposalAminoMsg): AddERCNativePointerProposal {
		return AddERCNativePointerProposal.fromAmino(object.value);
	},
	fromProtoMsg(message: AddERCNativePointerProposalProtoMsg): AddERCNativePointerProposal {
		return AddERCNativePointerProposal.decode(message.value);
	},
	toProto(message: AddERCNativePointerProposal): Uint8Array {
		return AddERCNativePointerProposal.encode(message).finish();
	},
	toProtoMsg(message: AddERCNativePointerProposal): AddERCNativePointerProposalProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.AddERCNativePointerProposal',
			value: AddERCNativePointerProposal.encode(message).finish()
		};
	}
};
function createBaseAddERCCW20PointerProposal(): AddERCCW20PointerProposal {
	return {
		title: '',
		description: '',
		pointee: '',
		pointer: '',
		version: 0
	};
}
export const AddERCCW20PointerProposal = {
	typeUrl: '/seiprotocol.seichain.evm.AddERCCW20PointerProposal',
	encode(message: AddERCCW20PointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.title !== '') {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== '') {
			writer.uint32(18).string(message.description);
		}
		if (message.pointee !== '') {
			writer.uint32(26).string(message.pointee);
		}
		if (message.pointer !== '') {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): AddERCCW20PointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddERCCW20PointerProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.title = reader.string();
					break;
				case 2:
					message.description = reader.string();
					break;
				case 3:
					message.pointee = reader.string();
					break;
				case 4:
					message.pointer = reader.string();
					break;
				case 5:
					message.version = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<AddERCCW20PointerProposal>): AddERCCW20PointerProposal {
		const message = createBaseAddERCCW20PointerProposal();
		message.title = object.title ?? '';
		message.description = object.description ?? '';
		message.pointee = object.pointee ?? '';
		message.pointer = object.pointer ?? '';
		message.version = object.version ?? 0;
		return message;
	},
	fromAmino(object: AddERCCW20PointerProposalAmino): AddERCCW20PointerProposal {
		const message = createBaseAddERCCW20PointerProposal();
		if (object.title !== undefined && object.title !== null) {
			message.title = object.title;
		}
		if (object.description !== undefined && object.description !== null) {
			message.description = object.description;
		}
		if (object.pointee !== undefined && object.pointee !== null) {
			message.pointee = object.pointee;
		}
		if (object.pointer !== undefined && object.pointer !== null) {
			message.pointer = object.pointer;
		}
		if (object.version !== undefined && object.version !== null) {
			message.version = object.version;
		}
		return message;
	},
	toAmino(message: AddERCCW20PointerProposal): AddERCCW20PointerProposalAmino {
		const obj: any = {};
		obj.title = message.title === '' ? undefined : message.title;
		obj.description = message.description === '' ? undefined : message.description;
		obj.pointee = message.pointee === '' ? undefined : message.pointee;
		obj.pointer = message.pointer === '' ? undefined : message.pointer;
		obj.version = message.version === 0 ? undefined : message.version;
		return obj;
	},
	fromAminoMsg(object: AddERCCW20PointerProposalAminoMsg): AddERCCW20PointerProposal {
		return AddERCCW20PointerProposal.fromAmino(object.value);
	},
	fromProtoMsg(message: AddERCCW20PointerProposalProtoMsg): AddERCCW20PointerProposal {
		return AddERCCW20PointerProposal.decode(message.value);
	},
	toProto(message: AddERCCW20PointerProposal): Uint8Array {
		return AddERCCW20PointerProposal.encode(message).finish();
	},
	toProtoMsg(message: AddERCCW20PointerProposal): AddERCCW20PointerProposalProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.AddERCCW20PointerProposal',
			value: AddERCCW20PointerProposal.encode(message).finish()
		};
	}
};
function createBaseAddERCCW721PointerProposal(): AddERCCW721PointerProposal {
	return {
		title: '',
		description: '',
		pointee: '',
		pointer: '',
		version: 0
	};
}
export const AddERCCW721PointerProposal = {
	typeUrl: '/seiprotocol.seichain.evm.AddERCCW721PointerProposal',
	encode(message: AddERCCW721PointerProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.title !== '') {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== '') {
			writer.uint32(18).string(message.description);
		}
		if (message.pointee !== '') {
			writer.uint32(26).string(message.pointee);
		}
		if (message.pointer !== '') {
			writer.uint32(34).string(message.pointer);
		}
		if (message.version !== 0) {
			writer.uint32(40).uint32(message.version);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): AddERCCW721PointerProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddERCCW721PointerProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.title = reader.string();
					break;
				case 2:
					message.description = reader.string();
					break;
				case 3:
					message.pointee = reader.string();
					break;
				case 4:
					message.pointer = reader.string();
					break;
				case 5:
					message.version = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<AddERCCW721PointerProposal>): AddERCCW721PointerProposal {
		const message = createBaseAddERCCW721PointerProposal();
		message.title = object.title ?? '';
		message.description = object.description ?? '';
		message.pointee = object.pointee ?? '';
		message.pointer = object.pointer ?? '';
		message.version = object.version ?? 0;
		return message;
	},
	fromAmino(object: AddERCCW721PointerProposalAmino): AddERCCW721PointerProposal {
		const message = createBaseAddERCCW721PointerProposal();
		if (object.title !== undefined && object.title !== null) {
			message.title = object.title;
		}
		if (object.description !== undefined && object.description !== null) {
			message.description = object.description;
		}
		if (object.pointee !== undefined && object.pointee !== null) {
			message.pointee = object.pointee;
		}
		if (object.pointer !== undefined && object.pointer !== null) {
			message.pointer = object.pointer;
		}
		if (object.version !== undefined && object.version !== null) {
			message.version = object.version;
		}
		return message;
	},
	toAmino(message: AddERCCW721PointerProposal): AddERCCW721PointerProposalAmino {
		const obj: any = {};
		obj.title = message.title === '' ? undefined : message.title;
		obj.description = message.description === '' ? undefined : message.description;
		obj.pointee = message.pointee === '' ? undefined : message.pointee;
		obj.pointer = message.pointer === '' ? undefined : message.pointer;
		obj.version = message.version === 0 ? undefined : message.version;
		return obj;
	},
	fromAminoMsg(object: AddERCCW721PointerProposalAminoMsg): AddERCCW721PointerProposal {
		return AddERCCW721PointerProposal.fromAmino(object.value);
	},
	fromProtoMsg(message: AddERCCW721PointerProposalProtoMsg): AddERCCW721PointerProposal {
		return AddERCCW721PointerProposal.decode(message.value);
	},
	toProto(message: AddERCCW721PointerProposal): Uint8Array {
		return AddERCCW721PointerProposal.encode(message).finish();
	},
	toProtoMsg(message: AddERCCW721PointerProposal): AddERCCW721PointerProposalProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.AddERCCW721PointerProposal',
			value: AddERCCW721PointerProposal.encode(message).finish()
		};
	}
};
