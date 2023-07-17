import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface SettlementEntry {
  account: string;
  priceDenom: string;
  assetDenom: string;
  quantity: string;
  executionCostOrProceed: string;
  expectedCostOrProceed: string;
  positionDirection: string;
  orderType: string;
  orderId: Long;
  timestamp: Long;
  height: Long;
  settlementId: Long;
}
export interface SettlementEntrySDKType {
  account: string;
  priceDenom: string;
  assetDenom: string;
  quantity: string;
  executionCostOrProceed: string;
  expectedCostOrProceed: string;
  positionDirection: string;
  orderType: string;
  orderId: Long;
  timestamp: Long;
  height: Long;
  settlementId: Long;
}
export interface Settlements {
  epoch: Long;
  entries: SettlementEntry[];
}
export interface SettlementsSDKType {
  epoch: Long;
  entries: SettlementEntrySDKType[];
}
function createBaseSettlementEntry(): SettlementEntry {
  return {
    account: "",
    priceDenom: "",
    assetDenom: "",
    quantity: "",
    executionCostOrProceed: "",
    expectedCostOrProceed: "",
    positionDirection: "",
    orderType: "",
    orderId: Long.UZERO,
    timestamp: Long.UZERO,
    height: Long.UZERO,
    settlementId: Long.UZERO
  };
}
export const SettlementEntry = {
  encode(message: SettlementEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }
    if (message.executionCostOrProceed !== "") {
      writer.uint32(42).string(message.executionCostOrProceed);
    }
    if (message.expectedCostOrProceed !== "") {
      writer.uint32(50).string(message.expectedCostOrProceed);
    }
    if (message.positionDirection !== "") {
      writer.uint32(58).string(message.positionDirection);
    }
    if (message.orderType !== "") {
      writer.uint32(66).string(message.orderType);
    }
    if (!message.orderId.isZero()) {
      writer.uint32(72).uint64(message.orderId);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(80).uint64(message.timestamp);
    }
    if (!message.height.isZero()) {
      writer.uint32(88).uint64(message.height);
    }
    if (!message.settlementId.isZero()) {
      writer.uint32(96).uint64(message.settlementId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SettlementEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettlementEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
          break;
        case 3:
          message.assetDenom = reader.string();
          break;
        case 4:
          message.quantity = reader.string();
          break;
        case 5:
          message.executionCostOrProceed = reader.string();
          break;
        case 6:
          message.expectedCostOrProceed = reader.string();
          break;
        case 7:
          message.positionDirection = reader.string();
          break;
        case 8:
          message.orderType = reader.string();
          break;
        case 9:
          message.orderId = (reader.uint64() as Long);
          break;
        case 10:
          message.timestamp = (reader.uint64() as Long);
          break;
        case 11:
          message.height = (reader.uint64() as Long);
          break;
        case 12:
          message.settlementId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SettlementEntry>): SettlementEntry {
    const message = createBaseSettlementEntry();
    message.account = object.account ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.executionCostOrProceed = object.executionCostOrProceed ?? "";
    message.expectedCostOrProceed = object.expectedCostOrProceed ?? "";
    message.positionDirection = object.positionDirection ?? "";
    message.orderType = object.orderType ?? "";
    message.orderId = object.orderId !== undefined && object.orderId !== null ? Long.fromValue(object.orderId) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    message.settlementId = object.settlementId !== undefined && object.settlementId !== null ? Long.fromValue(object.settlementId) : Long.UZERO;
    return message;
  }
};
function createBaseSettlements(): Settlements {
  return {
    epoch: Long.ZERO,
    entries: []
  };
}
export const Settlements = {
  encode(message: Settlements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.epoch.isZero()) {
      writer.uint32(8).int64(message.epoch);
    }
    for (const v of message.entries) {
      SettlementEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Settlements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettlements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epoch = (reader.int64() as Long);
          break;
        case 2:
          message.entries.push(SettlementEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Settlements>): Settlements {
    const message = createBaseSettlements();
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Long.fromValue(object.epoch) : Long.ZERO;
    message.entries = object.entries?.map(e => SettlementEntry.fromPartial(e)) || [];
    return message;
  }
};