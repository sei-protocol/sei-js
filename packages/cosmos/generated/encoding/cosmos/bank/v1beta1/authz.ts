import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin } from "../../base/v1beta1/coin";

import type { SendAuthorization as SendAuthorizationType } from "../../../../types/cosmos/bank/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface SendAuthorization extends SendAuthorizationType {}

export const SendAuthorization: MessageFns<SendAuthorization, "cosmos.bank.v1beta1.SendAuthorization"> = {
	$type: "cosmos.bank.v1beta1.SendAuthorization" as const,

	encode(message: SendAuthorization, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.spend_limit) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SendAuthorization {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSendAuthorization();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.spend_limit.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SendAuthorization {
		return {
			spend_limit: globalThis.Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromJSON(e)) : [],
		};
	},

	toJSON(message: SendAuthorization): unknown {
		const obj: any = {};
		if (message.spend_limit?.length) {
			obj.spend_limit = message.spend_limit.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SendAuthorization>, I>>(base?: I): SendAuthorization {
		return SendAuthorization.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SendAuthorization>, I>>(object: I): SendAuthorization {
		const message = createBaseSendAuthorization();
		message.spend_limit = object.spend_limit?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	},
};

function createBaseSendAuthorization(): SendAuthorization {
	return { spend_limit: [] };
}
export const registry: Array<[string, GeneratedType]> = [["/cosmos.bank.v1beta1.SendAuthorization", SendAuthorization as never]];
export const aminoConverters = {
	"/cosmos.bank.v1beta1.SendAuthorization": {
		aminoType: "cosmos-sdk/SendAuthorization",
		toAmino: (message: SendAuthorization) => ({ ...message }),
		fromAmino: (object: SendAuthorization) => ({ ...object }),
	},
};
