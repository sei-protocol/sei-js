import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface Pair {
    priceDenom: string;
    assetDenom: string;
    priceTicksize?: string;
    quantityTicksize?: string;
}
export interface PairSDKType {
    priceDenom: string;
    assetDenom: string;
    priceTicksize?: string;
    quantityTicksize?: string;
}
export interface BatchContractPair {
    contractAddr: string;
    pairs: Pair[];
}
export interface BatchContractPairSDKType {
    contractAddr: string;
    pairs: PairSDKType[];
}
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromPartial(object: DeepPartial<Pair>): Pair;
};
export declare const BatchContractPair: {
    encode(message: BatchContractPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BatchContractPair;
    fromPartial(object: DeepPartial<BatchContractPair>): BatchContractPair;
};
