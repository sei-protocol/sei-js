import { Pair, PairAmino, PairSDKType } from './pair';
import { BinaryReader, BinaryWriter } from '../binary';
import { Decimal } from '@cosmjs/math';
export interface Twap {
	pair?: Pair | undefined;
	twap: string;
	lookbackSeconds: bigint;
}
export interface TwapProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.Twap';
	value: Uint8Array;
}
export interface TwapAmino {
	pair: PairAmino | undefined;
	twap: string;
	lookbackSeconds: string;
}
export interface TwapAminoMsg {
	type: '/seiprotocol.seichain.dex.Twap';
	value: TwapAmino;
}
export interface TwapSDKType {
	pair?: PairSDKType | undefined;
	twap: string;
	lookbackSeconds: bigint;
}
function createBaseTwap(): Twap {
	return {
		pair: undefined,
		twap: '',
		lookbackSeconds: BigInt(0)
	};
}
export const Twap = {
	typeUrl: '/seiprotocol.seichain.dex.Twap',
	encode(message: Twap, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.pair !== undefined) {
			Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
		}
		if (message.twap !== '') {
			writer.uint32(18).string(Decimal.fromUserInput(message.twap, 18).atomics);
		}
		if (message.lookbackSeconds !== BigInt(0)) {
			writer.uint32(24).uint64(message.lookbackSeconds);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Twap {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTwap();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pair = Pair.decode(reader, reader.uint32());
					break;
				case 2:
					message.twap = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 3:
					message.lookbackSeconds = reader.uint64();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Twap>): Twap {
		const message = createBaseTwap();
		message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
		message.twap = object.twap ?? '';
		message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? BigInt(object.lookbackSeconds.toString()) : BigInt(0);
		return message;
	},
	fromAmino(object: TwapAmino): Twap {
		const message = createBaseTwap();
		if (object.pair !== undefined && object.pair !== null) {
			message.pair = Pair.fromAmino(object.pair);
		}
		if (object.twap !== undefined && object.twap !== null) {
			message.twap = object.twap;
		}
		if (object.lookbackSeconds !== undefined && object.lookbackSeconds !== null) {
			message.lookbackSeconds = BigInt(object.lookbackSeconds);
		}
		return message;
	},
	toAmino(message: Twap): TwapAmino {
		const obj: any = {};
		obj.pair = message.pair ? Pair.toAmino(message.pair) : Pair.toAmino(Pair.fromPartial({}));
		obj.twap = message.twap ?? '';
		obj.lookbackSeconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : '0';
		return obj;
	},
	fromAminoMsg(object: TwapAminoMsg): Twap {
		return Twap.fromAmino(object.value);
	},
	fromProtoMsg(message: TwapProtoMsg): Twap {
		return Twap.decode(message.value);
	},
	toProto(message: Twap): Uint8Array {
		return Twap.encode(message).finish();
	},
	toProtoMsg(message: Twap): TwapProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.Twap',
			value: Twap.encode(message).finish()
		};
	}
};
