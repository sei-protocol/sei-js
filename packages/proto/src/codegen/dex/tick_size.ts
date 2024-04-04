import { Pair, PairAmino, PairSDKType } from './pair';
import { BinaryReader, BinaryWriter } from '../binary';
import { Decimal } from '@cosmjs/math';
export interface TickSize {
	pair?: Pair | undefined;
	ticksize: string;
	contractAddr: string;
}
export interface TickSizeProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.TickSize';
	value: Uint8Array;
}
export interface TickSizeAmino {
	pair: PairAmino | undefined;
	ticksize: string;
	contractAddr: string;
}
export interface TickSizeAminoMsg {
	type: '/seiprotocol.seichain.dex.TickSize';
	value: TickSizeAmino;
}
export interface TickSizeSDKType {
	pair?: PairSDKType | undefined;
	ticksize: string;
	contractAddr: string;
}
function createBaseTickSize(): TickSize {
	return {
		pair: undefined,
		ticksize: '',
		contractAddr: ''
	};
}
export const TickSize = {
	typeUrl: '/seiprotocol.seichain.dex.TickSize',
	encode(message: TickSize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.pair !== undefined) {
			Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
		}
		if (message.ticksize !== '') {
			writer.uint32(18).string(Decimal.fromUserInput(message.ticksize, 18).atomics);
		}
		if (message.contractAddr !== '') {
			writer.uint32(26).string(message.contractAddr);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): TickSize {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTickSize();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pair = Pair.decode(reader, reader.uint32());
					break;
				case 2:
					message.ticksize = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 3:
					message.contractAddr = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<TickSize>): TickSize {
		const message = createBaseTickSize();
		message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
		message.ticksize = object.ticksize ?? '';
		message.contractAddr = object.contractAddr ?? '';
		return message;
	},
	fromAmino(object: TickSizeAmino): TickSize {
		const message = createBaseTickSize();
		if (object.pair !== undefined && object.pair !== null) {
			message.pair = Pair.fromAmino(object.pair);
		}
		if (object.ticksize !== undefined && object.ticksize !== null) {
			message.ticksize = object.ticksize;
		}
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		return message;
	},
	toAmino(message: TickSize): TickSizeAmino {
		const obj: any = {};
		obj.pair = message.pair ? Pair.toAmino(message.pair) : Pair.toAmino(Pair.fromPartial({}));
		obj.ticksize = message.ticksize ?? '';
		obj.contractAddr = message.contractAddr ?? '';
		return obj;
	},
	fromAminoMsg(object: TickSizeAminoMsg): TickSize {
		return TickSize.fromAmino(object.value);
	},
	fromProtoMsg(message: TickSizeProtoMsg): TickSize {
		return TickSize.decode(message.value);
	},
	toProto(message: TickSize): Uint8Array {
		return TickSize.encode(message).finish();
	},
	toProtoMsg(message: TickSize): TickSizeProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.TickSize',
			value: TickSize.encode(message).finish()
		};
	}
};
