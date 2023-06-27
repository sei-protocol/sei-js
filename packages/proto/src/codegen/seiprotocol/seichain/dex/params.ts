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
  minRentDeposit: Long;
  gasAllowancePerSettlement: Long;
  minProcessableRent: Long;
  orderBookEntriesPerLoad: Long;
  contractUnsuspendCost: Long;
  maxOrderPerPrice: Long;
  maxPairsPerContract: Long;
  defaultGasPerOrderDataByte: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  price_snapshot_retention: Long;
  sudo_call_gas_price: string;
  begin_block_gas_limit: Long;
  end_block_gas_limit: Long;
  default_gas_per_order: Long;
  default_gas_per_cancel: Long;
  min_rent_deposit: Long;
  gas_allowance_per_settlement: Long;
  min_processable_rent: Long;
  order_book_entries_per_load: Long;
  contract_unsuspend_cost: Long;
  max_order_per_price: Long;
  max_pairs_per_contract: Long;
  default_gas_per_order_data_byte: Long;
}
function createBaseParams(): Params {
  return {
    priceSnapshotRetention: Long.UZERO,
    sudoCallGasPrice: "",
    beginBlockGasLimit: Long.UZERO,
    endBlockGasLimit: Long.UZERO,
    defaultGasPerOrder: Long.UZERO,
    defaultGasPerCancel: Long.UZERO,
    minRentDeposit: Long.UZERO,
    gasAllowancePerSettlement: Long.UZERO,
    minProcessableRent: Long.UZERO,
    orderBookEntriesPerLoad: Long.UZERO,
    contractUnsuspendCost: Long.UZERO,
    maxOrderPerPrice: Long.UZERO,
    maxPairsPerContract: Long.UZERO,
    defaultGasPerOrderDataByte: Long.UZERO
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
    if (!message.minRentDeposit.isZero()) {
      writer.uint32(56).uint64(message.minRentDeposit);
    }
    if (!message.gasAllowancePerSettlement.isZero()) {
      writer.uint32(64).uint64(message.gasAllowancePerSettlement);
    }
    if (!message.minProcessableRent.isZero()) {
      writer.uint32(72).uint64(message.minProcessableRent);
    }
    if (!message.orderBookEntriesPerLoad.isZero()) {
      writer.uint32(80).uint64(message.orderBookEntriesPerLoad);
    }
    if (!message.contractUnsuspendCost.isZero()) {
      writer.uint32(88).uint64(message.contractUnsuspendCost);
    }
    if (!message.maxOrderPerPrice.isZero()) {
      writer.uint32(96).uint64(message.maxOrderPerPrice);
    }
    if (!message.maxPairsPerContract.isZero()) {
      writer.uint32(104).uint64(message.maxPairsPerContract);
    }
    if (!message.defaultGasPerOrderDataByte.isZero()) {
      writer.uint32(112).uint64(message.defaultGasPerOrderDataByte);
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
        case 7:
          message.minRentDeposit = (reader.uint64() as Long);
          break;
        case 8:
          message.gasAllowancePerSettlement = (reader.uint64() as Long);
          break;
        case 9:
          message.minProcessableRent = (reader.uint64() as Long);
          break;
        case 10:
          message.orderBookEntriesPerLoad = (reader.uint64() as Long);
          break;
        case 11:
          message.contractUnsuspendCost = (reader.uint64() as Long);
          break;
        case 12:
          message.maxOrderPerPrice = (reader.uint64() as Long);
          break;
        case 13:
          message.maxPairsPerContract = (reader.uint64() as Long);
          break;
        case 14:
          message.defaultGasPerOrderDataByte = (reader.uint64() as Long);
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
    message.minRentDeposit = object.minRentDeposit !== undefined && object.minRentDeposit !== null ? Long.fromValue(object.minRentDeposit) : Long.UZERO;
    message.gasAllowancePerSettlement = object.gasAllowancePerSettlement !== undefined && object.gasAllowancePerSettlement !== null ? Long.fromValue(object.gasAllowancePerSettlement) : Long.UZERO;
    message.minProcessableRent = object.minProcessableRent !== undefined && object.minProcessableRent !== null ? Long.fromValue(object.minProcessableRent) : Long.UZERO;
    message.orderBookEntriesPerLoad = object.orderBookEntriesPerLoad !== undefined && object.orderBookEntriesPerLoad !== null ? Long.fromValue(object.orderBookEntriesPerLoad) : Long.UZERO;
    message.contractUnsuspendCost = object.contractUnsuspendCost !== undefined && object.contractUnsuspendCost !== null ? Long.fromValue(object.contractUnsuspendCost) : Long.UZERO;
    message.maxOrderPerPrice = object.maxOrderPerPrice !== undefined && object.maxOrderPerPrice !== null ? Long.fromValue(object.maxOrderPerPrice) : Long.UZERO;
    message.maxPairsPerContract = object.maxPairsPerContract !== undefined && object.maxPairsPerContract !== null ? Long.fromValue(object.maxPairsPerContract) : Long.UZERO;
    message.defaultGasPerOrderDataByte = object.defaultGasPerOrderDataByte !== undefined && object.defaultGasPerOrderDataByte !== null ? Long.fromValue(object.defaultGasPerOrderDataByte) : Long.UZERO;
    return message;
  }
};