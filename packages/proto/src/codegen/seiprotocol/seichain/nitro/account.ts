import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Account {
  pubkey: string;
  owner: string;
  lamports: Long;
  slot: Long;
  executable: boolean;
  rentEpoch: Long;
  data: string;
}
export interface AccountSDKType {
  pubkey: string;
  owner: string;
  lamports: Long;
  slot: Long;
  executable: boolean;
  rent_epoch: Long;
  data: string;
}
function createBaseAccount(): Account {
  return {
    pubkey: "",
    owner: "",
    lamports: Long.UZERO,
    slot: Long.UZERO,
    executable: false,
    rentEpoch: Long.UZERO,
    data: ""
  };
}
export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubkey !== "") {
      writer.uint32(10).string(message.pubkey);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (!message.lamports.isZero()) {
      writer.uint32(24).uint64(message.lamports);
    }
    if (!message.slot.isZero()) {
      writer.uint32(32).uint64(message.slot);
    }
    if (message.executable === true) {
      writer.uint32(40).bool(message.executable);
    }
    if (!message.rentEpoch.isZero()) {
      writer.uint32(48).uint64(message.rentEpoch);
    }
    if (message.data !== "") {
      writer.uint32(58).string(message.data);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.lamports = (reader.uint64() as Long);
          break;
        case 4:
          message.slot = (reader.uint64() as Long);
          break;
        case 5:
          message.executable = reader.bool();
          break;
        case 6:
          message.rentEpoch = (reader.uint64() as Long);
          break;
        case 7:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Account>): Account {
    const message = createBaseAccount();
    message.pubkey = object.pubkey ?? "";
    message.owner = object.owner ?? "";
    message.lamports = object.lamports !== undefined && object.lamports !== null ? Long.fromValue(object.lamports) : Long.UZERO;
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    message.executable = object.executable ?? false;
    message.rentEpoch = object.rentEpoch !== undefined && object.rentEpoch !== null ? Long.fromValue(object.rentEpoch) : Long.UZERO;
    message.data = object.data ?? "";
    return message;
  }
};