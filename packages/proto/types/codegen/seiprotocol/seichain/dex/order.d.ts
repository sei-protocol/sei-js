import { OrderStatus, OrderStatusSDKType, OrderType, OrderTypeSDKType, PositionDirection, PositionDirectionSDKType, CancellationInitiator, CancellationInitiatorSDKType } from "./enums";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Order {
    id?: Long;
    status?: OrderStatus;
    account?: string;
    contractAddr?: string;
    price: string;
    quantity: string;
    priceDenom: string;
    assetDenom: string;
    orderType: OrderType;
    positionDirection: PositionDirection;
    data: string;
    statusDescription: string;
}
export interface OrderSDKType {
    id?: Long;
    status?: OrderStatusSDKType;
    account?: string;
    contractAddr?: string;
    price: string;
    quantity: string;
    priceDenom: string;
    assetDenom: string;
    orderType: OrderTypeSDKType;
    positionDirection: PositionDirectionSDKType;
    data: string;
    statusDescription: string;
}
export interface Cancellation {
    id: Long;
    initiator: CancellationInitiator;
    creator?: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    positionDirection: PositionDirection;
    price: string;
}
export interface CancellationSDKType {
    id: Long;
    initiator: CancellationInitiatorSDKType;
    creator?: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    positionDirection: PositionDirectionSDKType;
    price: string;
}
export interface ActiveOrders {
    ids: Long[];
}
export interface ActiveOrdersSDKType {
    ids: Long[];
}
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromPartial(object: DeepPartial<Order>): Order;
};
export declare const Cancellation: {
    encode(message: Cancellation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Cancellation;
    fromPartial(object: DeepPartial<Cancellation>): Cancellation;
};
export declare const ActiveOrders: {
    encode(message: ActiveOrders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ActiveOrders;
    fromPartial(object: DeepPartial<ActiveOrders>): ActiveOrders;
};
