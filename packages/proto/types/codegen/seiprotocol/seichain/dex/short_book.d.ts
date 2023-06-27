import { OrderEntry, OrderEntrySDKType } from "./order_entry";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface ShortBook {
    price: string;
    entry: OrderEntry;
}
export interface ShortBookSDKType {
    price: string;
    entry: OrderEntrySDKType;
}
export declare const ShortBook: {
    encode(message: ShortBook, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ShortBook;
    fromPartial(object: DeepPartial<ShortBook>): ShortBook;
};
