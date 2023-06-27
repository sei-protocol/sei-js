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
function createBaseLongBook(): LongBook {
  return {
    price: "",
    entry: OrderEntry.fromPartial({})
  };
}
export const LongBook = {
  encode(message: LongBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.entry !== undefined) {
      OrderEntry.encode(message.entry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LongBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.entry = OrderEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LongBook>): LongBook {
    const message = createBaseLongBook();
    message.price = object.price ?? "";
    message.entry = object.entry !== undefined && object.entry !== null ? OrderEntry.fromPartial(object.entry) : undefined;
    return message;
  }
};