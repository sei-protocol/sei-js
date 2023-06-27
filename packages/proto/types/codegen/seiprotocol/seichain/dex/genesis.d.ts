import { Params, ParamsSDKType } from "./params";
import { ContractInfoV2, ContractInfoV2SDKType } from "./contract";
import { LongBook, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookSDKType } from "./short_book";
import { Order, OrderSDKType } from "./order";
import { Pair, PairSDKType } from "./pair";
import { Price, PriceSDKType } from "./price";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
    params: Params;
    contractState: ContractState[];
    lastEpoch: Long;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    contractState: ContractStateSDKType[];
    lastEpoch: Long;
}
export interface ContractState {
    contractInfo: ContractInfoV2;
    longBookList: LongBook[];
    shortBookList: ShortBook[];
    triggeredOrdersList: Order[];
    pairList: Pair[];
    priceList: ContractPairPrices[];
    nextOrderId: Long;
}
export interface ContractStateSDKType {
    contractInfo: ContractInfoV2SDKType;
    longBookList: LongBookSDKType[];
    shortBookList: ShortBookSDKType[];
    triggeredOrdersList: OrderSDKType[];
    pairList: PairSDKType[];
    priceList: ContractPairPricesSDKType[];
    nextOrderId: Long;
}
export interface ContractPairPrices {
    pricePair: Pair;
    prices: Price[];
}
export interface ContractPairPricesSDKType {
    pricePair: PairSDKType;
    prices: PriceSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const ContractState: {
    encode(message: ContractState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractState;
    fromPartial(object: DeepPartial<ContractState>): ContractState;
};
export declare const ContractPairPrices: {
    encode(message: ContractPairPrices, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractPairPrices;
    fromPartial(object: DeepPartial<ContractPairPrices>): ContractPairPrices;
};
