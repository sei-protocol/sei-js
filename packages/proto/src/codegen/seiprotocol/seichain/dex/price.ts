import { Pair, PairSDKType } from "./pair";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Price {
  snapshotTimestampInSeconds: Long;
  price: string;
  pair: Pair;
}
export interface PriceSDKType {
  snapshotTimestampInSeconds: Long;
  price: string;
  pair: PairSDKType;
}
export interface PriceCandlestick {
  beginTimestamp: Long;
  endTimestamp: Long;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
export interface PriceCandlestickSDKType {
  beginTimestamp: Long;
  endTimestamp: Long;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}
function createBasePrice(): Price {
  return {
    snapshotTimestampInSeconds: Long.UZERO,
    price: "",
    pair: Pair.fromPartial({})
  };
}
export const Price = {
  encode(message: Price, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.snapshotTimestampInSeconds.isZero()) {
      writer.uint32(8).uint64(message.snapshotTimestampInSeconds);
    }
    if (message.price !== "") {
      writer.uint32(18).string(message.price);
    }
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Price {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshotTimestampInSeconds = (reader.uint64() as Long);
          break;
        case 2:
          message.price = reader.string();
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
  fromPartial(object: DeepPartial<Price>): Price {
    const message = createBasePrice();
    message.snapshotTimestampInSeconds = object.snapshotTimestampInSeconds !== undefined && object.snapshotTimestampInSeconds !== null ? Long.fromValue(object.snapshotTimestampInSeconds) : Long.UZERO;
    message.price = object.price ?? "";
    message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
    return message;
  }
};
function createBasePriceCandlestick(): PriceCandlestick {
  return {
    beginTimestamp: Long.UZERO,
    endTimestamp: Long.UZERO,
    open: "",
    high: "",
    low: "",
    close: "",
    volume: ""
  };
}
export const PriceCandlestick = {
  encode(message: PriceCandlestick, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.beginTimestamp.isZero()) {
      writer.uint32(8).uint64(message.beginTimestamp);
    }
    if (!message.endTimestamp.isZero()) {
      writer.uint32(16).uint64(message.endTimestamp);
    }
    if (message.open !== "") {
      writer.uint32(26).string(message.open);
    }
    if (message.high !== "") {
      writer.uint32(34).string(message.high);
    }
    if (message.low !== "") {
      writer.uint32(42).string(message.low);
    }
    if (message.close !== "") {
      writer.uint32(50).string(message.close);
    }
    if (message.volume !== "") {
      writer.uint32(58).string(message.volume);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PriceCandlestick {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceCandlestick();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.beginTimestamp = (reader.uint64() as Long);
          break;
        case 2:
          message.endTimestamp = (reader.uint64() as Long);
          break;
        case 3:
          message.open = reader.string();
          break;
        case 4:
          message.high = reader.string();
          break;
        case 5:
          message.low = reader.string();
          break;
        case 6:
          message.close = reader.string();
          break;
        case 7:
          message.volume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceCandlestick>): PriceCandlestick {
    const message = createBasePriceCandlestick();
    message.beginTimestamp = object.beginTimestamp !== undefined && object.beginTimestamp !== null ? Long.fromValue(object.beginTimestamp) : Long.UZERO;
    message.endTimestamp = object.endTimestamp !== undefined && object.endTimestamp !== null ? Long.fromValue(object.endTimestamp) : Long.UZERO;
    message.open = object.open ?? "";
    message.high = object.high ?? "";
    message.low = object.low ?? "";
    message.close = object.close ?? "";
    message.volume = object.volume ?? "";
    return message;
  }
};