import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Params defines the parameters for the module. */

export interface Params {
  priceSnapshotRetention: Long;
}
/** Params defines the parameters for the module. */

export interface ParamsSDKType {
  price_snapshot_retention: Long;
}

function createBaseParams(): Params {
  return {
    priceSnapshotRetention: Long.UZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.priceSnapshotRetention.isZero()) {
      writer.uint32(8).uint64(message.priceSnapshotRetention);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceSnapshotRetention = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.priceSnapshotRetention = object.priceSnapshotRetention !== undefined && object.priceSnapshotRetention !== null ? Long.fromValue(object.priceSnapshotRetention) : Long.UZERO;
    return message;
  }

};