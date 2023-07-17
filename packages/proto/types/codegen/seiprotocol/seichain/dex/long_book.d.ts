import { OrderEntry, OrderEntrySDKType } from "./order_entry";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface LongBook {
    price: string;
    entry: OrderEntry;
}
export interface LongBookSDKType {
    price: string;
    entry: OrderEntrySDKType;
}
export declare const LongBook: {
    encode(message: LongBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LongBook;
    fromPartial(object: DeepPartial<LongBook>): LongBook;
};
