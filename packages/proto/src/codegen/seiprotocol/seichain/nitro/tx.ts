import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgRecordTransactionData {
  sender: string;
  slot: Long;
  stateRoot: string;
  txs: string[];
}
export interface MsgRecordTransactionDataSDKType {
  sender: string;
  slot: Long;
  stateRoot: string;
  txs: string[];
}
export interface MsgRecordTransactionDataResponse {}
export interface MsgRecordTransactionDataResponseSDKType {}

function createBaseMsgRecordTransactionData(): MsgRecordTransactionData {
  return {
    sender: "",
    slot: Long.UZERO,
    stateRoot: "",
    txs: []
  };
}

export const MsgRecordTransactionData = {
  encode(message: MsgRecordTransactionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.slot.isZero()) {
      writer.uint32(16).uint64(message.slot);
    }

    if (message.stateRoot !== "") {
      writer.uint32(26).string(message.stateRoot);
    }

    for (const v of message.txs) {
      writer.uint32(34).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordTransactionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordTransactionData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.slot = (reader.uint64() as Long);
          break;

        case 3:
          message.stateRoot = reader.string();
          break;

        case 4:
          message.txs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRecordTransactionData>): MsgRecordTransactionData {
    const message = createBaseMsgRecordTransactionData();
    message.sender = object.sender ?? "";
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    message.stateRoot = object.stateRoot ?? "";
    message.txs = object.txs?.map(e => e) || [];
    return message;
  }

};

function createBaseMsgRecordTransactionDataResponse(): MsgRecordTransactionDataResponse {
  return {};
}

export const MsgRecordTransactionDataResponse = {
  encode(_: MsgRecordTransactionDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordTransactionDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecordTransactionDataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgRecordTransactionDataResponse>): MsgRecordTransactionDataResponse {
    const message = createBaseMsgRecordTransactionDataResponse();
    return message;
  }

};