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
export declare const Price: {
    encode(message: Price, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Price;
    fromPartial(object: DeepPartial<Price>): Price;
};
export declare const PriceCandlestick: {
    encode(message: PriceCandlestick, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceCandlestick;
    fromPartial(object: DeepPartial<PriceCandlestick>): PriceCandlestick;
};
