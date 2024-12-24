import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Timestamp } from "../../../google/protobuf/timestamp";

import type { Equivocation as Equivocation_type } from "../../../../types/cosmos/evidence/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface Equivocation extends Equivocation_type {}

export const Equivocation: MessageFns<Equivocation, "cosmos.evidence.v1beta1.Equivocation"> = {
	$type: "cosmos.evidence.v1beta1.Equivocation" as const,

	encode(message: Equivocation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		if (message.time !== undefined) {
			Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).join();
		}
		if (message.power !== 0) {
			writer.uint32(24).int64(message.power);
		}
		if (message.consensus_address !== "") {
			writer.uint32(34).string(message.consensus_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Equivocation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEquivocation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.power = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.consensus_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Equivocation {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
			power: isSet(object.power) ? globalThis.Number(object.power) : 0,
			consensus_address: isSet(object.consensus_address) ? globalThis.String(object.consensus_address) : "",
		};
	},

	toJSON(message: Equivocation): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.time !== undefined) {
			obj.time = message.time.toISOString();
		}
		if (message.power !== 0) {
			obj.power = Math.round(message.power);
		}
		if (message.consensus_address !== "") {
			obj.consensus_address = message.consensus_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Equivocation>, I>>(base?: I): Equivocation {
		return Equivocation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Equivocation>, I>>(object: I): Equivocation {
		const message = createBaseEquivocation();
		message.height = object.height ?? 0;
		message.time = object.time ?? undefined;
		message.power = object.power ?? 0;
		message.consensus_address = object.consensus_address ?? "";
		return message;
	},
};

function createBaseEquivocation(): Equivocation {
	return { height: 0, time: undefined, power: 0, consensus_address: "" };
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

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.evidence.v1beta1.Equivocation", Equivocation as never]];
export const aminoConverters = {
	"/cosmos.evidence.v1beta1.Equivocation": {
		aminoType: "cosmos-sdk/Equivocation",
		toAmino: (message: Equivocation) => ({ ...message }),
		fromAmino: (object: Equivocation) => ({ ...object }),
	},
};
