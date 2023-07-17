import { Order, OrderSDKType, Cancellation, CancellationSDKType } from "./order";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ContractInfoV2, ContractInfoV2SDKType } from "./contract";
import { BatchContractPair, BatchContractPairSDKType } from "./pair";
import { TickSize, TickSizeSDKType } from "./tick_size";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgPlaceOrders {
    creator: string;
    orders: Order[];
    contractAddr: string;
    funds: Coin[];
}
export interface MsgPlaceOrdersSDKType {
    creator: string;
    orders: OrderSDKType[];
    contractAddr: string;
    funds: CoinSDKType[];
}
export interface MsgPlaceOrdersResponse {
    orderIds: Long[];
}
export interface MsgPlaceOrdersResponseSDKType {
    orderIds: Long[];
}
export interface MsgCancelOrders {
    creator: string;
    cancellations: Cancellation[];
    contractAddr: string;
}
export interface MsgCancelOrdersSDKType {
    creator: string;
    cancellations: CancellationSDKType[];
    contractAddr: string;
}
export interface MsgCancelOrdersResponse {
}
export interface MsgCancelOrdersResponseSDKType {
}
export interface MsgRegisterContract {
    creator: string;
    contract: ContractInfoV2;
}
export interface MsgRegisterContractSDKType {
    creator: string;
    contract: ContractInfoV2SDKType;
}
export interface MsgRegisterContractResponse {
}
export interface MsgRegisterContractResponseSDKType {
}
export interface MsgContractDepositRent {
    contractAddr: string;
    amount: Long;
    sender: string;
}
export interface MsgContractDepositRentSDKType {
    contractAddr: string;
    amount: Long;
    sender: string;
}
export interface MsgContractDepositRentResponse {
}
export interface MsgContractDepositRentResponseSDKType {
}
export interface MsgUnregisterContract {
    creator: string;
    contractAddr: string;
}
export interface MsgUnregisterContractSDKType {
    creator: string;
    contractAddr: string;
}
export interface MsgUnregisterContractResponse {
}
export interface MsgUnregisterContractResponseSDKType {
}
export interface MsgRegisterPairs {
    creator: string;
    batchcontractpair: BatchContractPair[];
}
export interface MsgRegisterPairsSDKType {
    creator: string;
    batchcontractpair: BatchContractPairSDKType[];
}
export interface MsgRegisterPairsResponse {
}
export interface MsgRegisterPairsResponseSDKType {
}
export interface MsgUpdatePriceTickSize {
    creator: string;
    tickSizeList: TickSize[];
}
export interface MsgUpdatePriceTickSizeSDKType {
    creator: string;
    tickSizeList: TickSizeSDKType[];
}
export interface MsgUpdateQuantityTickSize {
    creator: string;
    tickSizeList: TickSize[];
}
export interface MsgUpdateQuantityTickSizeSDKType {
    creator: string;
    tickSizeList: TickSizeSDKType[];
}
export interface MsgUpdateTickSizeResponse {
}
export interface MsgUpdateTickSizeResponseSDKType {
}
export interface MsgUnsuspendContract {
    creator: string;
    contractAddr: string;
}
export interface MsgUnsuspendContractSDKType {
    creator: string;
    contractAddr: string;
}
export interface MsgUnsuspendContractResponse {
}
export interface MsgUnsuspendContractResponseSDKType {
}
export declare const MsgPlaceOrders: {
    encode(message: MsgPlaceOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceOrders;
    fromPartial(object: DeepPartial<MsgPlaceOrders>): MsgPlaceOrders;
};
export declare const MsgPlaceOrdersResponse: {
    encode(message: MsgPlaceOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgPlaceOrdersResponse;
    fromPartial(object: DeepPartial<MsgPlaceOrdersResponse>): MsgPlaceOrdersResponse;
};
export declare const MsgCancelOrders: {
    encode(message: MsgCancelOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrders;
    fromPartial(object: DeepPartial<MsgCancelOrders>): MsgCancelOrders;
};
export declare const MsgCancelOrdersResponse: {
    encode(_: MsgCancelOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelOrdersResponse;
    fromPartial(_: DeepPartial<MsgCancelOrdersResponse>): MsgCancelOrdersResponse;
};
export declare const MsgRegisterContract: {
    encode(message: MsgRegisterContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContract;
    fromPartial(object: DeepPartial<MsgRegisterContract>): MsgRegisterContract;
};
export declare const MsgRegisterContractResponse: {
    encode(_: MsgRegisterContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterContractResponse;
    fromPartial(_: DeepPartial<MsgRegisterContractResponse>): MsgRegisterContractResponse;
};
export declare const MsgContractDepositRent: {
    encode(message: MsgContractDepositRent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgContractDepositRent;
    fromPartial(object: DeepPartial<MsgContractDepositRent>): MsgContractDepositRent;
};
export declare const MsgContractDepositRentResponse: {
    encode(_: MsgContractDepositRentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgContractDepositRentResponse;
    fromPartial(_: DeepPartial<MsgContractDepositRentResponse>): MsgContractDepositRentResponse;
};
export declare const MsgUnregisterContract: {
    encode(message: MsgUnregisterContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterContract;
    fromPartial(object: DeepPartial<MsgUnregisterContract>): MsgUnregisterContract;
};
export declare const MsgUnregisterContractResponse: {
    encode(_: MsgUnregisterContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterContractResponse;
    fromPartial(_: DeepPartial<MsgUnregisterContractResponse>): MsgUnregisterContractResponse;
};
export declare const MsgRegisterPairs: {
    encode(message: MsgRegisterPairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPairs;
    fromPartial(object: DeepPartial<MsgRegisterPairs>): MsgRegisterPairs;
};
export declare const MsgRegisterPairsResponse: {
    encode(_: MsgRegisterPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterPairsResponse;
    fromPartial(_: DeepPartial<MsgRegisterPairsResponse>): MsgRegisterPairsResponse;
};
export declare const MsgUpdatePriceTickSize: {
    encode(message: MsgUpdatePriceTickSize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePriceTickSize;
    fromPartial(object: DeepPartial<MsgUpdatePriceTickSize>): MsgUpdatePriceTickSize;
};
export declare const MsgUpdateQuantityTickSize: {
    encode(message: MsgUpdateQuantityTickSize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuantityTickSize;
    fromPartial(object: DeepPartial<MsgUpdateQuantityTickSize>): MsgUpdateQuantityTickSize;
};
export declare const MsgUpdateTickSizeResponse: {
    encode(_: MsgUpdateTickSizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTickSizeResponse;
    fromPartial(_: DeepPartial<MsgUpdateTickSizeResponse>): MsgUpdateTickSizeResponse;
};
export declare const MsgUnsuspendContract: {
    encode(message: MsgUnsuspendContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsuspendContract;
    fromPartial(object: DeepPartial<MsgUnsuspendContract>): MsgUnsuspendContract;
};
export declare const MsgUnsuspendContractResponse: {
    encode(_: MsgUnsuspendContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnsuspendContractResponse;
    fromPartial(_: DeepPartial<MsgUnsuspendContractResponse>): MsgUnsuspendContractResponse;
};
