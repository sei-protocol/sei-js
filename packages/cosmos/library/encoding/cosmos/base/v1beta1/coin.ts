import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Coin as Coin_type, DecCoin as DecCoin_type, DecProto as DecProto_type, IntProto as IntProto_type } from "../../../../types/cosmos/base/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface Coin extends Coin_type {}
export interface DecCoin extends DecCoin_type {}
export interface IntProto extends IntProto_type {}
export interface DecProto extends DecProto_type {}

export const Coin: MessageFns<Coin, "cosmos.base.v1beta1.Coin"> = {
	$type: "cosmos.base.v1beta1.Coin" as const,

	encode(message: Coin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.amount !== "") {
			writer.uint32(18).string(message.amount);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Coin {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCoin();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.amount = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Coin {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
		};
	},

	toJSON(message: Coin): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.amount !== "") {
			obj.amount = message.amount;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Coin>, I>>(base?: I): Coin {
		return Coin.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Coin>, I>>(object: I): Coin {
		const message = createBaseCoin();
		message.denom = object.denom ?? "";
		message.amount = object.amount ?? "";
		return message;
	},
};

export const DecCoin: MessageFns<DecCoin, "cosmos.base.v1beta1.DecCoin"> = {
	$type: "cosmos.base.v1beta1.DecCoin" as const,

	encode(message: DecCoin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.amount !== "") {
			writer.uint32(18).string(message.amount);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DecCoin {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDecCoin();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.amount = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DecCoin {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
		};
	},

	toJSON(message: DecCoin): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.amount !== "") {
			obj.amount = message.amount;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DecCoin>, I>>(base?: I): DecCoin {
		return DecCoin.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DecCoin>, I>>(object: I): DecCoin {
		const message = createBaseDecCoin();
		message.denom = object.denom ?? "";
		message.amount = object.amount ?? "";
		return message;
	},
};

export const IntProto: MessageFns<IntProto, "cosmos.base.v1beta1.IntProto"> = {
	$type: "cosmos.base.v1beta1.IntProto" as const,

	encode(message: IntProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.int !== "") {
			writer.uint32(10).string(message.int);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): IntProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseIntProto();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.int = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): IntProto {
		return { int: isSet(object.int) ? globalThis.String(object.int) : "" };
	},

	toJSON(message: IntProto): unknown {
		const obj: any = {};
		if (message.int !== "") {
			obj.int = message.int;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<IntProto>, I>>(base?: I): IntProto {
		return IntProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<IntProto>, I>>(object: I): IntProto {
		const message = createBaseIntProto();
		message.int = object.int ?? "";
		return message;
	},
};

export const DecProto: MessageFns<DecProto, "cosmos.base.v1beta1.DecProto"> = {
	$type: "cosmos.base.v1beta1.DecProto" as const,

	encode(message: DecProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.dec !== "") {
			writer.uint32(10).string(message.dec);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DecProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDecProto();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.dec = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DecProto {
		return { dec: isSet(object.dec) ? globalThis.String(object.dec) : "" };
	},

	toJSON(message: DecProto): unknown {
		const obj: any = {};
		if (message.dec !== "") {
			obj.dec = message.dec;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DecProto>, I>>(base?: I): DecProto {
		return DecProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DecProto>, I>>(object: I): DecProto {
		const message = createBaseDecProto();
		message.dec = object.dec ?? "";
		return message;
	},
};

function createBaseCoin(): Coin {
	return { denom: "", amount: "" };
}

function createBaseDecCoin(): DecCoin {
	return { denom: "", amount: "" };
}

function createBaseIntProto(): IntProto {
	return { int: "" };
}

function createBaseDecProto(): DecProto {
	return { dec: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.base.v1beta1.Coin", Coin as never],
	["/cosmos.base.v1beta1.DecCoin", DecCoin as never],
	["/cosmos.base.v1beta1.IntProto", IntProto as never],
	["/cosmos.base.v1beta1.DecProto", DecProto as never],
];
export const aminoConverters = {
	"/cosmos.base.v1beta1.Coin": {
		aminoType: "cosmos-sdk/Coin",
		toAmino: (message: Coin) => ({ ...message }),
		fromAmino: (object: Coin) => ({ ...object }),
	},

	"/cosmos.base.v1beta1.DecCoin": {
		aminoType: "cosmos-sdk/DecCoin",
		toAmino: (message: DecCoin) => ({ ...message }),
		fromAmino: (object: DecCoin) => ({ ...object }),
	},

	"/cosmos.base.v1beta1.IntProto": {
		aminoType: "cosmos-sdk/IntProto",
		toAmino: (message: IntProto) => ({ ...message }),
		fromAmino: (object: IntProto) => ({ ...object }),
	},

	"/cosmos.base.v1beta1.DecProto": {
		aminoType: "cosmos-sdk/DecProto",
		toAmino: (message: DecProto) => ({ ...message }),
		fromAmino: (object: DecProto) => ({ ...object }),
	},
};
