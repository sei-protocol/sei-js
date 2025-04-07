import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import type {
	MsgGrantAllowanceResponse as MsgGrantAllowanceResponse_type,
	MsgGrantAllowance as MsgGrantAllowance_type,
	MsgRevokeAllowanceResponse as MsgRevokeAllowanceResponse_type,
	MsgRevokeAllowance as MsgRevokeAllowance_type
} from "../../../../types/cosmos/feegrant/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface MsgGrantAllowance extends MsgGrantAllowance_type {}
export interface MsgGrantAllowanceResponse extends MsgGrantAllowanceResponse_type {}
export interface MsgRevokeAllowance extends MsgRevokeAllowance_type {}
export interface MsgRevokeAllowanceResponse extends MsgRevokeAllowanceResponse_type {}

export const MsgGrantAllowance: MessageFns<MsgGrantAllowance, "cosmos.feegrant.v1beta1.MsgGrantAllowance"> = {
	$type: "cosmos.feegrant.v1beta1.MsgGrantAllowance" as const,

	encode(message: MsgGrantAllowance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(18).string(message.grantee);
		}
		if (message.allowance !== undefined) {
			Any.encode(message.allowance, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgGrantAllowance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.grantee = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.allowance = Any.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgGrantAllowance {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
		};
	},

	toJSON(message: MsgGrantAllowance): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		if (message.allowance !== undefined) {
			obj.allowance = Any.toJSON(message.allowance);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(base?: I): MsgGrantAllowance {
		return MsgGrantAllowance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgGrantAllowance>, I>>(object: I): MsgGrantAllowance {
		const message = createBaseMsgGrantAllowance();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
		return message;
	}
};

export const MsgGrantAllowanceResponse: MessageFns<MsgGrantAllowanceResponse, "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse"> = {
	$type: "cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse" as const,

	encode(_: MsgGrantAllowanceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgGrantAllowanceResponse();
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

	fromJSON(_: any): MsgGrantAllowanceResponse {
		return {};
	},

	toJSON(_: MsgGrantAllowanceResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(base?: I): MsgGrantAllowanceResponse {
		return MsgGrantAllowanceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgGrantAllowanceResponse>, I>>(_: I): MsgGrantAllowanceResponse {
		const message = createBaseMsgGrantAllowanceResponse();
		return message;
	}
};

export const MsgRevokeAllowance: MessageFns<MsgRevokeAllowance, "cosmos.feegrant.v1beta1.MsgRevokeAllowance"> = {
	$type: "cosmos.feegrant.v1beta1.MsgRevokeAllowance" as const,

	encode(message: MsgRevokeAllowance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.granter !== "") {
			writer.uint32(10).string(message.granter);
		}
		if (message.grantee !== "") {
			writer.uint32(18).string(message.grantee);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRevokeAllowance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.granter = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.grantee = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgRevokeAllowance {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : ""
		};
	},

	toJSON(message: MsgRevokeAllowance): unknown {
		const obj: any = {};
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		if (message.grantee !== "") {
			obj.grantee = message.grantee;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(base?: I): MsgRevokeAllowance {
		return MsgRevokeAllowance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowance>, I>>(object: I): MsgRevokeAllowance {
		const message = createBaseMsgRevokeAllowance();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		return message;
	}
};

export const MsgRevokeAllowanceResponse: MessageFns<MsgRevokeAllowanceResponse, "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse"> = {
	$type: "cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse" as const,

	encode(_: MsgRevokeAllowanceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRevokeAllowanceResponse();
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

	fromJSON(_: any): MsgRevokeAllowanceResponse {
		return {};
	},

	toJSON(_: MsgRevokeAllowanceResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(base?: I): MsgRevokeAllowanceResponse {
		return MsgRevokeAllowanceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgRevokeAllowanceResponse>, I>>(_: I): MsgRevokeAllowanceResponse {
		const message = createBaseMsgRevokeAllowanceResponse();
		return message;
	}
};

function createBaseMsgGrantAllowance(): MsgGrantAllowance {
	return { granter: "", grantee: "", allowance: undefined };
}

function createBaseMsgGrantAllowanceResponse(): MsgGrantAllowanceResponse {
	return {};
}

function createBaseMsgRevokeAllowance(): MsgRevokeAllowance {
	return { granter: "", grantee: "" };
}

function createBaseMsgRevokeAllowanceResponse(): MsgRevokeAllowanceResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance as never],
	["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance as never]
];
export const aminoConverters = {
	"/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
		aminoType: "cosmos-sdk/MsgGrantAllowance",
		toAmino: (message: MsgGrantAllowance) => ({ ...message }),
		fromAmino: (object: MsgGrantAllowance) => ({ ...object })
	},

	"/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
		aminoType: "cosmos-sdk/MsgRevokeAllowance",
		toAmino: (message: MsgRevokeAllowance) => ({ ...message }),
		fromAmino: (object: MsgRevokeAllowance) => ({ ...object })
	}
};
