import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Duration } from "../../../google/protobuf/duration";

import { Timestamp } from "../../../google/protobuf/timestamp";

import { Coin } from "../../base/v1beta1/coin";

import type {
	AllowedMsgAllowance as AllowedMsgAllowanceType,
	BasicAllowance as BasicAllowanceType,
	Grant as GrantType,
	PeriodicAllowance as PeriodicAllowanceType,
} from "../../../../types/cosmos/feegrant/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface BasicAllowance extends BasicAllowanceType {}
interface PeriodicAllowance extends PeriodicAllowanceType {}
interface AllowedMsgAllowance extends AllowedMsgAllowanceType {}
interface Grant extends GrantType {}

export const BasicAllowance: MessageFns<BasicAllowance, "cosmos.feegrant.v1beta1.BasicAllowance"> = {
	$type: "cosmos.feegrant.v1beta1.BasicAllowance" as const,

	encode(message: BasicAllowance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.spend_limit) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.expiration !== undefined) {
			Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BasicAllowance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBasicAllowance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.spend_limit.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BasicAllowance {
		return {
			spend_limit: globalThis.Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromJSON(e)) : [],
			expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
		};
	},

	toJSON(message: BasicAllowance): unknown {
		const obj: any = {};
		if (message.spend_limit?.length) {
			obj.spend_limit = message.spend_limit.map((e) => Coin.toJSON(e));
		}
		if (message.expiration !== undefined) {
			obj.expiration = message.expiration.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BasicAllowance>, I>>(base?: I): BasicAllowance {
		return BasicAllowance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BasicAllowance>, I>>(object: I): BasicAllowance {
		const message = createBaseBasicAllowance();
		message.spend_limit = object.spend_limit?.map((e) => Coin.fromPartial(e)) || [];
		message.expiration = object.expiration ?? undefined;
		return message;
	},
};

export const PeriodicAllowance: MessageFns<PeriodicAllowance, "cosmos.feegrant.v1beta1.PeriodicAllowance"> = {
	$type: "cosmos.feegrant.v1beta1.PeriodicAllowance" as const,

	encode(message: PeriodicAllowance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.basic !== undefined) {
			BasicAllowance.encode(message.basic, writer.uint32(10).fork()).join();
		}
		if (message.period !== undefined) {
			Duration.encode(message.period, writer.uint32(18).fork()).join();
		}
		for (const v of message.period_spend_limit) {
			Coin.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.period_can_spend) {
			Coin.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.period_reset !== undefined) {
			Timestamp.encode(toTimestamp(message.period_reset), writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PeriodicAllowance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePeriodicAllowance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.basic = BasicAllowance.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.period = Duration.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.period_spend_limit.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.period_can_spend.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.period_reset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PeriodicAllowance {
		return {
			basic: isSet(object.basic) ? BasicAllowance.fromJSON(object.basic) : undefined,
			period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,
			period_spend_limit: globalThis.Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e: any) => Coin.fromJSON(e)) : [],
			period_can_spend: globalThis.Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e: any) => Coin.fromJSON(e)) : [],
			period_reset: isSet(object.period_reset) ? fromJsonTimestamp(object.period_reset) : undefined,
		};
	},

	toJSON(message: PeriodicAllowance): unknown {
		const obj: any = {};
		if (message.basic !== undefined) {
			obj.basic = BasicAllowance.toJSON(message.basic);
		}
		if (message.period !== undefined) {
			obj.period = Duration.toJSON(message.period);
		}
		if (message.period_spend_limit?.length) {
			obj.period_spend_limit = message.period_spend_limit.map((e) => Coin.toJSON(e));
		}
		if (message.period_can_spend?.length) {
			obj.period_can_spend = message.period_can_spend.map((e) => Coin.toJSON(e));
		}
		if (message.period_reset !== undefined) {
			obj.period_reset = message.period_reset.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PeriodicAllowance>, I>>(base?: I): PeriodicAllowance {
		return PeriodicAllowance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PeriodicAllowance>, I>>(object: I): PeriodicAllowance {
		const message = createBasePeriodicAllowance();
		message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
		message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
		message.period_spend_limit = object.period_spend_limit?.map((e) => Coin.fromPartial(e)) || [];
		message.period_can_spend = object.period_can_spend?.map((e) => Coin.fromPartial(e)) || [];
		message.period_reset = object.period_reset ?? undefined;
		return message;
	},
};

export const AllowedMsgAllowance: MessageFns<AllowedMsgAllowance, "cosmos.feegrant.v1beta1.AllowedMsgAllowance"> = {
	$type: "cosmos.feegrant.v1beta1.AllowedMsgAllowance" as const,

	encode(message: AllowedMsgAllowance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.allowance !== undefined) {
			Any.encode(message.allowance, writer.uint32(10).fork()).join();
		}
		for (const v of message.allowed_messages) {
			writer.uint32(18).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AllowedMsgAllowance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAllowedMsgAllowance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.allowance = Any.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.allowed_messages.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AllowedMsgAllowance {
		return {
			allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
			allowed_messages: globalThis.Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e: any) => globalThis.String(e)) : [],
		};
	},

	toJSON(message: AllowedMsgAllowance): unknown {
		const obj: any = {};
		if (message.allowance !== undefined) {
			obj.allowance = Any.toJSON(message.allowance);
		}
		if (message.allowed_messages?.length) {
			obj.allowed_messages = message.allowed_messages;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AllowedMsgAllowance>, I>>(base?: I): AllowedMsgAllowance {
		return AllowedMsgAllowance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AllowedMsgAllowance>, I>>(object: I): AllowedMsgAllowance {
		const message = createBaseAllowedMsgAllowance();
		message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
		message.allowed_messages = object.allowed_messages?.map((e) => e) || [];
		return message;
	},
};

export const Grant: MessageFns<Grant, "cosmos.feegrant.v1beta1.Grant"> = {
	$type: "cosmos.feegrant.v1beta1.Grant" as const,

	encode(message: Grant, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
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

	decode(input: BinaryReader | Uint8Array, length?: number): Grant {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGrant();
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

	fromJSON(object: any): Grant {
		return {
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
			grantee: isSet(object.grantee) ? globalThis.String(object.grantee) : "",
			allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
		};
	},

	toJSON(message: Grant): unknown {
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

	create<I extends Exact<DeepPartial<Grant>, I>>(base?: I): Grant {
		return Grant.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
		const message = createBaseGrant();
		message.granter = object.granter ?? "";
		message.grantee = object.grantee ?? "";
		message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
		return message;
	},
};

function createBaseBasicAllowance(): BasicAllowance {
	return { spend_limit: [], expiration: undefined };
}

function createBasePeriodicAllowance(): PeriodicAllowance {
	return { basic: undefined, period: undefined, period_spend_limit: [], period_can_spend: [], period_reset: undefined };
}

function createBaseAllowedMsgAllowance(): AllowedMsgAllowance {
	return { allowance: undefined, allowed_messages: [] };
}

function createBaseGrant(): Grant {
	return { granter: "", grantee: "", allowance: undefined };
}

function toTimestamp(date: Date): Timestamp {
	const seconds = Math.trunc(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = (t.seconds || 0) * 1_000;
	millis += (t.nanos || 0) / 1_000_000;
	return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof globalThis.Date) {
		return o;
	} else if (typeof o === "string") {
		return new globalThis.Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.feegrant.v1beta1.BasicAllowance", BasicAllowance as never],
	["/cosmos.feegrant.v1beta1.PeriodicAllowance", PeriodicAllowance as never],
	["/cosmos.feegrant.v1beta1.AllowedMsgAllowance", AllowedMsgAllowance as never],
	["/cosmos.feegrant.v1beta1.Grant", Grant as never],
];
export const aminoConverters = {
	"/cosmos.feegrant.v1beta1.BasicAllowance": {
		aminoType: "cosmos-sdk/BasicAllowance",
		toAmino: (message: BasicAllowance) => ({ ...message }),
		fromAmino: (object: BasicAllowance) => ({ ...object }),
	},

	"/cosmos.feegrant.v1beta1.PeriodicAllowance": {
		aminoType: "cosmos-sdk/PeriodicAllowance",
		toAmino: (message: PeriodicAllowance) => ({ ...message }),
		fromAmino: (object: PeriodicAllowance) => ({ ...object }),
	},

	"/cosmos.feegrant.v1beta1.AllowedMsgAllowance": {
		aminoType: "cosmos-sdk/AllowedMsgAllowance",
		toAmino: (message: AllowedMsgAllowance) => ({ ...message }),
		fromAmino: (object: AllowedMsgAllowance) => ({ ...object }),
	},

	"/cosmos.feegrant.v1beta1.Grant": {
		aminoType: "cosmos-sdk/Grant",
		toAmino: (message: Grant) => ({ ...message }),
		fromAmino: (object: Grant) => ({ ...object }),
	},
};
