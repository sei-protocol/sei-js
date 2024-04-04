import { Pair, PairAmino, PairSDKType } from './pair';
import { BinaryReader, BinaryWriter } from '../binary';
import { Decimal } from '@cosmjs/math';
export interface Price {
	snapshotTimestampInSeconds: bigint;
	price: string;
	pair?: Pair | undefined;
}
export interface PriceProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.Price';
	value: Uint8Array;
}
export interface PriceAmino {
	snapshotTimestampInSeconds: string;
	price: string;
	pair: PairAmino | undefined;
}
export interface PriceAminoMsg {
	type: '/seiprotocol.seichain.dex.Price';
	value: PriceAmino;
}
export interface PriceSDKType {
	snapshotTimestampInSeconds: bigint;
	price: string;
	pair?: PairSDKType | undefined;
}
export interface PriceCandlestick {
	beginTimestamp: bigint;
	endTimestamp: bigint;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
}
export interface PriceCandlestickProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.PriceCandlestick';
	value: Uint8Array;
}
export interface PriceCandlestickAmino {
	beginTimestamp: string;
	endTimestamp: string;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
}
export interface PriceCandlestickAminoMsg {
	type: '/seiprotocol.seichain.dex.PriceCandlestick';
	value: PriceCandlestickAmino;
}
export interface PriceCandlestickSDKType {
	beginTimestamp: bigint;
	endTimestamp: bigint;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: string;
}
function createBasePrice(): Price {
	return {
		snapshotTimestampInSeconds: BigInt(0),
		price: '',
		pair: undefined
	};
}
export const Price = {
	typeUrl: '/seiprotocol.seichain.dex.Price',
	encode(message: Price, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.snapshotTimestampInSeconds !== BigInt(0)) {
			writer.uint32(8).uint64(message.snapshotTimestampInSeconds);
		}
		if (message.price !== '') {
			writer.uint32(18).string(Decimal.fromUserInput(message.price, 18).atomics);
		}
		if (message.pair !== undefined) {
			Pair.encode(message.pair, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Price {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePrice();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.snapshotTimestampInSeconds = reader.uint64();
					break;
				case 2:
					message.price = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 3:
					message.pair = Pair.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Price>): Price {
		const message = createBasePrice();
		message.snapshotTimestampInSeconds =
			object.snapshotTimestampInSeconds !== undefined && object.snapshotTimestampInSeconds !== null
				? BigInt(object.snapshotTimestampInSeconds.toString())
				: BigInt(0);
		message.price = object.price ?? '';
		message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
		return message;
	},
	fromAmino(object: PriceAmino): Price {
		const message = createBasePrice();
		if (object.snapshotTimestampInSeconds !== undefined && object.snapshotTimestampInSeconds !== null) {
			message.snapshotTimestampInSeconds = BigInt(object.snapshotTimestampInSeconds);
		}
		if (object.price !== undefined && object.price !== null) {
			message.price = object.price;
		}
		if (object.pair !== undefined && object.pair !== null) {
			message.pair = Pair.fromAmino(object.pair);
		}
		return message;
	},
	toAmino(message: Price): PriceAmino {
		const obj: any = {};
		obj.snapshotTimestampInSeconds = message.snapshotTimestampInSeconds ? message.snapshotTimestampInSeconds.toString() : '0';
		obj.price = message.price ?? '';
		obj.pair = message.pair ? Pair.toAmino(message.pair) : Pair.toAmino(Pair.fromPartial({}));
		return obj;
	},
	fromAminoMsg(object: PriceAminoMsg): Price {
		return Price.fromAmino(object.value);
	},
	fromProtoMsg(message: PriceProtoMsg): Price {
		return Price.decode(message.value);
	},
	toProto(message: Price): Uint8Array {
		return Price.encode(message).finish();
	},
	toProtoMsg(message: Price): PriceProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.Price',
			value: Price.encode(message).finish()
		};
	}
};
function createBasePriceCandlestick(): PriceCandlestick {
	return {
		beginTimestamp: BigInt(0),
		endTimestamp: BigInt(0),
		open: '',
		high: '',
		low: '',
		close: '',
		volume: ''
	};
}
export const PriceCandlestick = {
	typeUrl: '/seiprotocol.seichain.dex.PriceCandlestick',
	encode(message: PriceCandlestick, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.beginTimestamp !== BigInt(0)) {
			writer.uint32(8).uint64(message.beginTimestamp);
		}
		if (message.endTimestamp !== BigInt(0)) {
			writer.uint32(16).uint64(message.endTimestamp);
		}
		if (message.open !== '') {
			writer.uint32(26).string(Decimal.fromUserInput(message.open, 18).atomics);
		}
		if (message.high !== '') {
			writer.uint32(34).string(Decimal.fromUserInput(message.high, 18).atomics);
		}
		if (message.low !== '') {
			writer.uint32(42).string(Decimal.fromUserInput(message.low, 18).atomics);
		}
		if (message.close !== '') {
			writer.uint32(50).string(Decimal.fromUserInput(message.close, 18).atomics);
		}
		if (message.volume !== '') {
			writer.uint32(58).string(Decimal.fromUserInput(message.volume, 18).atomics);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): PriceCandlestick {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePriceCandlestick();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.beginTimestamp = reader.uint64();
					break;
				case 2:
					message.endTimestamp = reader.uint64();
					break;
				case 3:
					message.open = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 4:
					message.high = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 5:
					message.low = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 6:
					message.close = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 7:
					message.volume = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<PriceCandlestick>): PriceCandlestick {
		const message = createBasePriceCandlestick();
		message.beginTimestamp = object.beginTimestamp !== undefined && object.beginTimestamp !== null ? BigInt(object.beginTimestamp.toString()) : BigInt(0);
		message.endTimestamp = object.endTimestamp !== undefined && object.endTimestamp !== null ? BigInt(object.endTimestamp.toString()) : BigInt(0);
		message.open = object.open ?? '';
		message.high = object.high ?? '';
		message.low = object.low ?? '';
		message.close = object.close ?? '';
		message.volume = object.volume ?? '';
		return message;
	},
	fromAmino(object: PriceCandlestickAmino): PriceCandlestick {
		const message = createBasePriceCandlestick();
		if (object.beginTimestamp !== undefined && object.beginTimestamp !== null) {
			message.beginTimestamp = BigInt(object.beginTimestamp);
		}
		if (object.endTimestamp !== undefined && object.endTimestamp !== null) {
			message.endTimestamp = BigInt(object.endTimestamp);
		}
		if (object.open !== undefined && object.open !== null) {
			message.open = object.open;
		}
		if (object.high !== undefined && object.high !== null) {
			message.high = object.high;
		}
		if (object.low !== undefined && object.low !== null) {
			message.low = object.low;
		}
		if (object.close !== undefined && object.close !== null) {
			message.close = object.close;
		}
		if (object.volume !== undefined && object.volume !== null) {
			message.volume = object.volume;
		}
		return message;
	},
	toAmino(message: PriceCandlestick): PriceCandlestickAmino {
		const obj: any = {};
		obj.beginTimestamp = message.beginTimestamp ? message.beginTimestamp.toString() : '0';
		obj.endTimestamp = message.endTimestamp ? message.endTimestamp.toString() : '0';
		obj.open = message.open ?? '';
		obj.high = message.high ?? '';
		obj.low = message.low ?? '';
		obj.close = message.close ?? '';
		obj.volume = message.volume ?? '';
		return obj;
	},
	fromAminoMsg(object: PriceCandlestickAminoMsg): PriceCandlestick {
		return PriceCandlestick.fromAmino(object.value);
	},
	fromProtoMsg(message: PriceCandlestickProtoMsg): PriceCandlestick {
		return PriceCandlestick.decode(message.value);
	},
	toProto(message: PriceCandlestick): Uint8Array {
		return PriceCandlestick.encode(message).finish();
	},
	toProtoMsg(message: PriceCandlestick): PriceCandlestickProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.PriceCandlestick',
			value: PriceCandlestick.encode(message).finish()
		};
	}
};
