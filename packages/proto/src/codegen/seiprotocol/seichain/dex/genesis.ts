import { Params, ParamsSDKType } from "./params";
import { LongBook, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookSDKType } from "./short_book";
import { Twap, TwapSDKType } from "./twap";
import { TickSize, TickSizeSDKType } from "./tick_size";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the dex module's genesis state. */

export interface GenesisState {
  params: Params;
  longBookList: LongBook[];
  shortBookList: ShortBook[];
  twapList: Twap[];
  /** if null, then no restriction, todo(zw) should set it to not nullable? */

  tickSizeList: TickSize[];
  lastEpoch: Long;
}
/** GenesisState defines the dex module's genesis state. */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  longBookList: LongBookSDKType[];
  shortBookList: ShortBookSDKType[];
  twapList: TwapSDKType[];
  /** if null, then no restriction, todo(zw) should set it to not nullable? */

  tickSizeList: TickSizeSDKType[];
  lastEpoch: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    longBookList: [],
    shortBookList: [],
    twapList: [],
    tickSizeList: [],
    lastEpoch: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.longBookList) {
      LongBook.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.shortBookList) {
      ShortBook.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.twapList) {
      Twap.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.tickSizeList) {
      TickSize.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.lastEpoch.isZero()) {
      writer.uint32(48).uint64(message.lastEpoch);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.longBookList.push(LongBook.decode(reader, reader.uint32()));
          break;

        case 3:
          message.shortBookList.push(ShortBook.decode(reader, reader.uint32()));
          break;

        case 4:
          message.twapList.push(Twap.decode(reader, reader.uint32()));
          break;

        case 5:
          message.tickSizeList.push(TickSize.decode(reader, reader.uint32()));
          break;

        case 6:
          message.lastEpoch = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.longBookList = object.longBookList?.map(e => LongBook.fromPartial(e)) || [];
    message.shortBookList = object.shortBookList?.map(e => ShortBook.fromPartial(e)) || [];
    message.twapList = object.twapList?.map(e => Twap.fromPartial(e)) || [];
    message.tickSizeList = object.tickSizeList?.map(e => TickSize.fromPartial(e)) || [];
    message.lastEpoch = object.lastEpoch !== undefined && object.lastEpoch !== null ? Long.fromValue(object.lastEpoch) : Long.UZERO;
    return message;
  }

};