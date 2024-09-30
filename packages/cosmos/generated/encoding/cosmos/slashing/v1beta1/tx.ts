import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { MsgUnjailResponse as MsgUnjailResponseType, MsgUnjail as MsgUnjailType } from "../../../../types/cosmos/slashing/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface MsgUnjail extends MsgUnjailType {}
interface MsgUnjailResponse extends MsgUnjailResponseType {}

export const MsgUnjail: MessageFns<MsgUnjail, "cosmos.slashing.v1beta1.MsgUnjail"> = {
	$type: "cosmos.slashing.v1beta1.MsgUnjail" as const,

	encode(message: MsgUnjail, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_addr !== "") {
			writer.uint32(10).string(message.validator_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjail {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUnjail();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgUnjail {
		return { validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : "" };
	},

	toJSON(message: MsgUnjail): unknown {
		const obj: any = {};
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUnjail>, I>>(base?: I): MsgUnjail {
		return MsgUnjail.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUnjail>, I>>(object: I): MsgUnjail {
		const message = createBaseMsgUnjail();
		message.validator_addr = object.validator_addr ?? "";
		return message;
	},
};

export const MsgUnjailResponse: MessageFns<MsgUnjailResponse, "cosmos.slashing.v1beta1.MsgUnjailResponse"> = {
	$type: "cosmos.slashing.v1beta1.MsgUnjailResponse" as const,

	encode(_: MsgUnjailResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUnjailResponse();
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

	fromJSON(_: any): MsgUnjailResponse {
		return {};
	},

	toJSON(_: MsgUnjailResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUnjailResponse>, I>>(base?: I): MsgUnjailResponse {
		return MsgUnjailResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUnjailResponse>, I>>(_: I): MsgUnjailResponse {
		const message = createBaseMsgUnjailResponse();
		return message;
	},
};

function createBaseMsgUnjail(): MsgUnjail {
	return { validator_addr: "" };
}

function createBaseMsgUnjailResponse(): MsgUnjailResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail as never],
	["/cosmos.slashing.v1beta1.MsgUnjailResponse", MsgUnjailResponse as never],
];
export const aminoConverters = {
	"/cosmos.slashing.v1beta1.MsgUnjail": {
		aminoType: "cosmos-sdk/MsgUnjail",
		toAmino: (message: MsgUnjail) => ({ ...message }),
		fromAmino: (object: MsgUnjail) => ({ ...object }),
	},

	"/cosmos.slashing.v1beta1.MsgUnjailResponse": {
		aminoType: "cosmos-sdk/MsgUnjailResponse",
		toAmino: (message: MsgUnjailResponse) => ({ ...message }),
		fromAmino: (object: MsgUnjailResponse) => ({ ...object }),
	},
};
