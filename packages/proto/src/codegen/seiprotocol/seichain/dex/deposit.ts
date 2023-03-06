import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface DepositInfoEntry {
  creator: string;
  denom: string;
  amount: string;
}
export interface DepositInfoEntrySDKType {
  creator: string;
  denom: string;
  amount: string;
}

function createBaseDepositInfoEntry(): DepositInfoEntry {
  return {
    creator: "",
    denom: "",
    amount: ""
  };
}

export const DepositInfoEntry = {
  encode(message: DepositInfoEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositInfoEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositInfoEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<DepositInfoEntry>): DepositInfoEntry {
    const message = createBaseDepositInfoEntry();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};