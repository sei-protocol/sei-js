import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import type { LegacyAminoPubKey as LegacyAminoPubKeyType } from "../../../../types/cosmos/crypto/multisig";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface LegacyAminoPubKey extends LegacyAminoPubKeyType {}

export const LegacyAminoPubKey: MessageFns<LegacyAminoPubKey, "cosmos.crypto.multisig.LegacyAminoPubKey"> = {
	$type: "cosmos.crypto.multisig.LegacyAminoPubKey" as const,

	encode(message: LegacyAminoPubKey, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.threshold !== 0) {
			writer.uint32(8).uint32(message.threshold);
		}
		for (const v of message.public_keys) {
			Any.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): LegacyAminoPubKey {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseLegacyAminoPubKey();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.threshold = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.public_keys.push(Any.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): LegacyAminoPubKey {
		return {
			threshold: isSet(object.threshold) ? globalThis.Number(object.threshold) : 0,
			public_keys: globalThis.Array.isArray(object?.public_keys) ? object.public_keys.map((e: any) => Any.fromJSON(e)) : [],
		};
	},

	toJSON(message: LegacyAminoPubKey): unknown {
		const obj: any = {};
		if (message.threshold !== 0) {
			obj.threshold = Math.round(message.threshold);
		}
		if (message.public_keys?.length) {
			obj.public_keys = message.public_keys.map((e) => Any.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<LegacyAminoPubKey>, I>>(base?: I): LegacyAminoPubKey {
		return LegacyAminoPubKey.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<LegacyAminoPubKey>, I>>(object: I): LegacyAminoPubKey {
		const message = createBaseLegacyAminoPubKey();
		message.threshold = object.threshold ?? 0;
		message.public_keys = object.public_keys?.map((e) => Any.fromPartial(e)) || [];
		return message;
	},
};

function createBaseLegacyAminoPubKey(): LegacyAminoPubKey {
	return { threshold: 0, public_keys: [] };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.crypto.multisig.LegacyAminoPubKey", LegacyAminoPubKey as never]];
export const aminoConverters = {
	"/cosmos.crypto.multisig.LegacyAminoPubKey": {
		aminoType: "cosmos-sdk/LegacyAminoPubKey",
		toAmino: (message: LegacyAminoPubKey) => ({ ...message }),
		fromAmino: (object: LegacyAminoPubKey) => ({ ...object }),
	},
};
