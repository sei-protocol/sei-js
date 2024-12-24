import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type { Duration as Duration_type } from "../../../types/google/protobuf";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface Duration extends Duration_type {}

export const Duration: MessageFns<Duration, "google.protobuf.Duration"> = {
	$type: "google.protobuf.Duration" as const,

	encode(message: Duration, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.seconds !== 0) {
			writer.uint32(8).int64(message.seconds);
		}
		if (message.nanos !== 0) {
			writer.uint32(16).int32(message.nanos);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Duration {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDuration();
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

	fromJSON(object: any): Duration {
		return {
			seconds: isSet(object.seconds) ? globalThis.Number(object.seconds) : 0,
			nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
		};
	},

	toJSON(message: Duration): unknown {
		const obj: any = {};
		if (message.seconds !== 0) {
			obj.seconds = Math.round(message.seconds);
		}
		if (message.nanos !== 0) {
			obj.nanos = Math.round(message.nanos);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Duration>, I>>(base?: I): Duration {
		return Duration.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Duration>, I>>(object: I): Duration {
		const message = createBaseDuration();
		message.seconds = object.seconds ?? 0;
		message.nanos = object.nanos ?? 0;
		return message;
	},
};

function createBaseDuration(): Duration {
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
export const registry: Array<[string, GeneratedType]> = [["/google.protobuf.Duration", Duration as never]];
export const aminoConverters = {
	"/google.protobuf.Duration": {
		aminoType: "google.protobuf.Duration",
		toAmino: (message: Duration) => ({ ...message }),
		fromAmino: (object: Duration) => ({ ...object }),
	},
};
