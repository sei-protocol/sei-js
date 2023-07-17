import { Order, OrderSDKType, Cancellation, CancellationSDKType } from "./order";
import { SettlementEntry, SettlementEntrySDKType } from "./settlement";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MatchResult {
  height: Long;
  contractAddr: string;
  orders: Order[];
  settlements: SettlementEntry[];
  cancellations: Cancellation[];
}
export interface MatchResultSDKType {
  height: Long;
  contractAddr: string;
  orders: OrderSDKType[];
  settlements: SettlementEntrySDKType[];
  cancellations: CancellationSDKType[];
}
function createBaseMatchResult(): MatchResult {
  return {
    height: Long.ZERO,
    contractAddr: "",
    orders: [],
    settlements: [],
    cancellations: []
  };
}
export const MatchResult = {
  encode(message: MatchResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.settlements) {
      SettlementEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.cancellations) {
      Cancellation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MatchResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMatchResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 4:
          message.settlements.push(SettlementEntry.decode(reader, reader.uint32()));
          break;
        case 5:
          message.cancellations.push(Cancellation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MatchResult>): MatchResult {
    const message = createBaseMatchResult();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.contractAddr = object.contractAddr ?? "";
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.settlements = object.settlements?.map(e => SettlementEntry.fromPartial(e)) || [];
    message.cancellations = object.cancellations?.map(e => Cancellation.fromPartial(e)) || [];
    return message;
  }
};