import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface OrderEntry {
    price: string;
    quantity: string;
    allocations: Allocation[];
    priceDenom: string;
    assetDenom: string;
}
export interface OrderEntrySDKType {
    price: string;
    quantity: string;
    allocations: AllocationSDKType[];
    priceDenom: string;
    assetDenom: string;
}
export interface Allocation {
    orderId: Long;
    quantity: string;
    account: string;
}
export interface AllocationSDKType {
    orderId: Long;
    quantity: string;
    account: string;
}
export declare const OrderEntry: {
    encode(message: OrderEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderEntry;
    fromPartial(object: DeepPartial<OrderEntry>): OrderEntry;
};
export declare const Allocation: {
    encode(message: Allocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Allocation;
    fromPartial(object: DeepPartial<Allocation>): Allocation;
};
