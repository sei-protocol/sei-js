import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
  priceSnapshotRetention: Long;
  sudoCallGasPrice: string;
  beginBlockGasLimit: Long;
  endBlockGasLimit: Long;
  defaultGasPerOrder: Long;
  defaultGasPerCancel: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  price_snapshot_retention: Long;
  sudo_call_gas_price: string;
  begin_block_gas_limit: Long;
  end_block_gas_limit: Long;
  default_gas_per_order: Long;
  default_gas_per_cancel: Long;
}
function createBaseParams(): Params {
  return {
    priceSnapshotRetention: Long.UZERO,
    sudoCallGasPrice: "",
    beginBlockGasLimit: Long.UZERO,
    endBlockGasLimit: Long.UZERO,
    defaultGasPerOrder: Long.UZERO,
    defaultGasPerCancel: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.priceSnapshotRetention.isZero()) {
      writer.uint32(8).uint64(message.priceSnapshotRetention);
    }
    if (message.sudoCallGasPrice !== "") {
      writer.uint32(18).string(message.sudoCallGasPrice);
    }
    if (!message.beginBlockGasLimit.isZero()) {
      writer.uint32(24).uint64(message.beginBlockGasLimit);
    }
    if (!message.endBlockGasLimit.isZero()) {
      writer.uint32(32).uint64(message.endBlockGasLimit);
    }
    if (!message.defaultGasPerOrder.isZero()) {
      writer.uint32(40).uint64(message.defaultGasPerOrder);
    }
    if (!message.defaultGasPerCancel.isZero()) {
      writer.uint32(48).uint64(message.defaultGasPerCancel);
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
        case 2:
          message.sudoCallGasPrice = reader.string();
          break;
        case 3:
          message.beginBlockGasLimit = (reader.uint64() as Long);
          break;
        case 4:
          message.endBlockGasLimit = (reader.uint64() as Long);
          break;
        case 5:
          message.defaultGasPerOrder = (reader.uint64() as Long);
          break;
        case 6:
          message.defaultGasPerCancel = (reader.uint64() as Long);
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
    message.sudoCallGasPrice = object.sudoCallGasPrice ?? "";
    message.beginBlockGasLimit = object.beginBlockGasLimit !== undefined && object.beginBlockGasLimit !== null ? Long.fromValue(object.beginBlockGasLimit) : Long.UZERO;
    message.endBlockGasLimit = object.endBlockGasLimit !== undefined && object.endBlockGasLimit !== null ? Long.fromValue(object.endBlockGasLimit) : Long.UZERO;
    message.defaultGasPerOrder = object.defaultGasPerOrder !== undefined && object.defaultGasPerOrder !== null ? Long.fromValue(object.defaultGasPerOrder) : Long.UZERO;
    message.defaultGasPerCancel = object.defaultGasPerCancel !== undefined && object.defaultGasPerCancel !== null ? Long.fromValue(object.defaultGasPerCancel) : Long.UZERO;
    return message;
  }
};