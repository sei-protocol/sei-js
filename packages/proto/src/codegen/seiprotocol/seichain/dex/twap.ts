import { Pair, PairSDKType } from "./pair";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Twap {
  pair: Pair;
  twap: string;
  lookbackSeconds: Long;
}
export interface TwapSDKType {
  pair: PairSDKType;
  twap: string;
  lookbackSeconds: Long;
}
function createBaseTwap(): Twap {
  return {
    pair: Pair.fromPartial({}),
    twap: "",
    lookbackSeconds: Long.UZERO
  };
}
export const Twap = {
  encode(message: Twap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }
    if (message.twap !== "") {
      writer.uint32(18).string(message.twap);
    }
    if (!message.lookbackSeconds.isZero()) {
      writer.uint32(24).uint64(message.lookbackSeconds);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Twap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pair = Pair.decode(reader, reader.uint32());
          break;
        case 2:
          message.twap = reader.string();
          break;
        case 3:
          message.lookbackSeconds = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Twap>): Twap {
    const message = createBaseTwap();
    message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
    message.twap = object.twap ?? "";
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.UZERO;
    return message;
  }
};