import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Timestamp as Timestamp_type } from "../../../types/google/protobuf";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface Timestamp extends Timestamp_type {}

export const Timestamp: MessageFns<Timestamp, "google.protobuf.Timestamp"> = {
	$type: "google.protobuf.Timestamp" as const,

	encode(message: Timestamp, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.seconds !== 0) {
			writer.uint32(8).int64(message.seconds);
		}
		if (message.nanos !== 0) {
			writer.uint32(16).int32(message.nanos);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Timestamp {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTimestamp();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.seconds = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.nanos = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Timestamp {
		return {
			seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
			nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
		};
	},

	toJSON(message: Timestamp): unknown {
		const obj: any = {};
		if (message.seconds !== 0) {
			obj.seconds = Math.round(message.seconds);
		}
		if (message.nanos !== 0) {
			obj.nanos = Math.round(message.nanos);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Timestamp>, I>>(base?: I): Timestamp {
		return Timestamp.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Timestamp>, I>>(object: I): Timestamp {
		const message = createBaseTimestamp();
		message.seconds = object.seconds ?? 0;
		message.nanos = object.nanos ?? 0;
		return message;
	},
};

function createBaseTimestamp(): Timestamp {
	return { seconds: 0, nanos: 0 };
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
export const registry: Array<[string, GeneratedType]> = [["/google.protobuf.Timestamp", Timestamp as never]];
export const aminoConverters = {
	"/google.protobuf.Timestamp": {
		aminoType: "google.protobuf.Timestamp",
		toAmino: (message: Timestamp) => ({ ...message }),
		fromAmino: (object: Timestamp) => ({ ...object }),
	},
};
