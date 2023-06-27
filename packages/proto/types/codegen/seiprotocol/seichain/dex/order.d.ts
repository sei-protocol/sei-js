import { OrderStatus, OrderType, PositionDirection, CancellationInitiator } from "./enums";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    nominal: string;
    triggerPrice: string;
    triggerStatus: boolean;
}
export interface OrderSDKType {
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
    nominal: string;
    triggerPrice: string;
    triggerStatus: boolean;
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
    initiator: CancellationInitiator;
    creator?: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    positionDirection: PositionDirection;
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
