import { Order, OrderSDKType, Cancellation, CancellationSDKType } from "./order";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ContractInfo, ContractInfoSDKType } from "./contract";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
    contract: ContractInfo;
}
export interface MsgRegisterContractSDKType {
    creator: string;
    contract: ContractInfoSDKType;
}
export interface MsgRegisterContractResponse {
}
export interface MsgRegisterContractResponseSDKType {
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
