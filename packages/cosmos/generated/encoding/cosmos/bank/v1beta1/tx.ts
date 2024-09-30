import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin } from "../../base/v1beta1/coin";

import { Input, Output } from "./bank";

import type {
	MsgMultiSendResponse as MsgMultiSendResponseType,
	MsgMultiSend as MsgMultiSendType,
	MsgSendResponse as MsgSendResponseType,
	MsgSend as MsgSendType,
} from "../../../../types/cosmos/bank/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface MsgSend extends MsgSendType {}
interface MsgSendResponse extends MsgSendResponseType {}
interface MsgMultiSend extends MsgMultiSendType {}
interface MsgMultiSendResponse extends MsgMultiSendResponseType {}

export const MsgSend: MessageFns<MsgSend, "cosmos.bank.v1beta1.MsgSend"> = {
	$type: "cosmos.bank.v1beta1.MsgSend" as const,

	encode(message: MsgSend, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.to_address !== "") {
			writer.uint32(18).string(message.to_address);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSend {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSend();
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

					message.to_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSend {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			to_address: isSet(object.to_address) ? globalThis.String(object.to_address) : "",
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
		};
	},

	toJSON(message: MsgSend): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.to_address !== "") {
			obj.to_address = message.to_address;
		}
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSend>, I>>(base?: I): MsgSend {
		return MsgSend.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
		const message = createBaseMsgSend();
		message.from_address = object.from_address ?? "";
		message.to_address = object.to_address ?? "";
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	},
};

export const MsgSendResponse: MessageFns<MsgSendResponse, "cosmos.bank.v1beta1.MsgSendResponse"> = {
	$type: "cosmos.bank.v1beta1.MsgSendResponse" as const,

	encode(_: MsgSendResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSendResponse();
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

	fromJSON(_: any): MsgSendResponse {
		return {};
	},

	toJSON(_: MsgSendResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSendResponse>, I>>(base?: I): MsgSendResponse {
		return MsgSendResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(_: I): MsgSendResponse {
		const message = createBaseMsgSendResponse();
		return message;
	},
};

export const MsgMultiSend: MessageFns<MsgMultiSend, "cosmos.bank.v1beta1.MsgMultiSend"> = {
	$type: "cosmos.bank.v1beta1.MsgMultiSend" as const,

	encode(message: MsgMultiSend, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.inputs) {
			Input.encode(v!, writer.uint32(10).fork()).join();
		}
		for (const v of message.outputs) {
			Output.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSend {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgMultiSend();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.inputs.push(Input.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.outputs.push(Output.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgMultiSend {
		return {
			inputs: globalThis.Array.isArray(object?.inputs) ? object.inputs.map((e: any) => Input.fromJSON(e)) : [],
			outputs: globalThis.Array.isArray(object?.outputs) ? object.outputs.map((e: any) => Output.fromJSON(e)) : [],
		};
	},

	toJSON(message: MsgMultiSend): unknown {
		const obj: any = {};
		if (message.inputs?.length) {
			obj.inputs = message.inputs.map((e) => Input.toJSON(e));
		}
		if (message.outputs?.length) {
			obj.outputs = message.outputs.map((e) => Output.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgMultiSend>, I>>(base?: I): MsgMultiSend {
		return MsgMultiSend.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgMultiSend>, I>>(object: I): MsgMultiSend {
		const message = createBaseMsgMultiSend();
		message.inputs = object.inputs?.map((e) => Input.fromPartial(e)) || [];
		message.outputs = object.outputs?.map((e) => Output.fromPartial(e)) || [];
		return message;
	},
};

export const MsgMultiSendResponse: MessageFns<MsgMultiSendResponse, "cosmos.bank.v1beta1.MsgMultiSendResponse"> = {
	$type: "cosmos.bank.v1beta1.MsgMultiSendResponse" as const,

	encode(_: MsgMultiSendResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSendResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgMultiSendResponse();
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

	fromJSON(_: any): MsgMultiSendResponse {
		return {};
	},

	toJSON(_: MsgMultiSendResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgMultiSendResponse>, I>>(base?: I): MsgMultiSendResponse {
		return MsgMultiSendResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgMultiSendResponse>, I>>(_: I): MsgMultiSendResponse {
		const message = createBaseMsgMultiSendResponse();
		return message;
	},
};

function createBaseMsgSend(): MsgSend {
	return { from_address: "", to_address: "", amount: [] };
}

function createBaseMsgSendResponse(): MsgSendResponse {
	return {};
}

function createBaseMsgMultiSend(): MsgMultiSend {
	return { inputs: [], outputs: [] };
}

function createBaseMsgMultiSendResponse(): MsgMultiSendResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.bank.v1beta1.MsgSend", MsgSend as never],
	["/cosmos.bank.v1beta1.MsgSendResponse", MsgSendResponse as never],
	["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend as never],
	["/cosmos.bank.v1beta1.MsgMultiSendResponse", MsgMultiSendResponse as never],
];
export const aminoConverters = {
	"/cosmos.bank.v1beta1.MsgSend": {
		aminoType: "cosmos-sdk/MsgSend",
		toAmino: (message: MsgSend) => ({ ...message }),
		fromAmino: (object: MsgSend) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.MsgSendResponse": {
		aminoType: "cosmos-sdk/MsgSendResponse",
		toAmino: (message: MsgSendResponse) => ({ ...message }),
		fromAmino: (object: MsgSendResponse) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.MsgMultiSend": {
		aminoType: "cosmos-sdk/MsgMultiSend",
		toAmino: (message: MsgMultiSend) => ({ ...message }),
		fromAmino: (object: MsgMultiSend) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.MsgMultiSendResponse": {
		aminoType: "cosmos-sdk/MsgMultiSendResponse",
		toAmino: (message: MsgMultiSendResponse) => ({ ...message }),
		fromAmino: (object: MsgMultiSendResponse) => ({ ...object }),
	},
};
