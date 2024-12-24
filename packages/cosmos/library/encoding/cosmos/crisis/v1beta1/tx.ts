import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	MsgVerifyInvariantResponse as MsgVerifyInvariantResponse_type,
	MsgVerifyInvariant as MsgVerifyInvariant_type,
} from "../../../../types/cosmos/crisis/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface MsgVerifyInvariant extends MsgVerifyInvariant_type {}
export interface MsgVerifyInvariantResponse extends MsgVerifyInvariantResponse_type {}

export const MsgVerifyInvariant: MessageFns<MsgVerifyInvariant, "cosmos.crisis.v1beta1.MsgVerifyInvariant"> = {
	$type: "cosmos.crisis.v1beta1.MsgVerifyInvariant" as const,

	encode(message: MsgVerifyInvariant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.invariant_module_name !== "") {
			writer.uint32(18).string(message.invariant_module_name);
		}
		if (message.invariant_route !== "") {
			writer.uint32(26).string(message.invariant_route);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariant {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgVerifyInvariant();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.invariant_module_name = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.invariant_route = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgVerifyInvariant {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			invariant_module_name: isSet(object.invariant_module_name) ? globalThis.String(object.invariant_module_name) : "",
			invariant_route: isSet(object.invariant_route) ? globalThis.String(object.invariant_route) : "",
		};
	},

	toJSON(message: MsgVerifyInvariant): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.invariant_module_name !== "") {
			obj.invariant_module_name = message.invariant_module_name;
		}
		if (message.invariant_route !== "") {
			obj.invariant_route = message.invariant_route;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgVerifyInvariant>, I>>(base?: I): MsgVerifyInvariant {
		return MsgVerifyInvariant.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariant>, I>>(object: I): MsgVerifyInvariant {
		const message = createBaseMsgVerifyInvariant();
		message.sender = object.sender ?? "";
		message.invariant_module_name = object.invariant_module_name ?? "";
		message.invariant_route = object.invariant_route ?? "";
		return message;
	},
};

export const MsgVerifyInvariantResponse: MessageFns<MsgVerifyInvariantResponse, "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse"> = {
	$type: "cosmos.crisis.v1beta1.MsgVerifyInvariantResponse" as const,

	encode(_: MsgVerifyInvariantResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariantResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgVerifyInvariantResponse();
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

	fromJSON(_: any): MsgVerifyInvariantResponse {
		return {};
	},

	toJSON(_: MsgVerifyInvariantResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgVerifyInvariantResponse>, I>>(base?: I): MsgVerifyInvariantResponse {
		return MsgVerifyInvariantResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariantResponse>, I>>(_: I): MsgVerifyInvariantResponse {
		const message = createBaseMsgVerifyInvariantResponse();
		return message;
	},
};

function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
	return { sender: "", invariant_module_name: "", invariant_route: "" };
}

function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant as never]];
export const aminoConverters = {
	"/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
		aminoType: "cosmos-sdk/MsgVerifyInvariant",
		toAmino: (message: MsgVerifyInvariant) => ({ ...message }),
		fromAmino: (object: MsgVerifyInvariant) => ({ ...object }),
	},
};
