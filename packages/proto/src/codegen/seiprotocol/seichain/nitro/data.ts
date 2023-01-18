import * as _m0 from 'protobufjs/minimal';
import { Long, DeepPartial } from '@osmonauts/helpers';
export interface TransactionData {
  slot: Long;
  signature: string;
  isVote: boolean;
  messageType: Long;
  legacyMessage: string;
  v0LoadedMessage: string;
  signatures: string[];
  messageHash: string;
  meta: string;
  writeVersion: Long;
}
export interface TransactionDataSDKType {
  slot: Long;
  signature: string;
  is_vote: boolean;
  message_type: Long;
  legacy_message: string;
  v0_loaded_message: string;
  signatures: string[];
  message_hash: string;
  meta: string;
  write_version: Long;
}

function createBaseTransactionData(): TransactionData {
  return {
    slot: Long.UZERO,
    signature: '',
    isVote: false,
    messageType: Long.UZERO,
    legacyMessage: '',
    v0LoadedMessage: '',
    signatures: [],
    messageHash: '',
    meta: '',
    writeVersion: Long.UZERO
  };
}

export const TransactionData = {
  encode(message: TransactionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.slot.isZero()) {
      writer.uint32(8).uint64(message.slot);
    }

    if (message.signature !== '') {
      writer.uint32(18).string(message.signature);
    }

    if (message.isVote === true) {
      writer.uint32(24).bool(message.isVote);
    }

    if (!message.messageType.isZero()) {
      writer.uint32(32).uint64(message.messageType);
    }

    if (message.legacyMessage !== '') {
      writer.uint32(42).string(message.legacyMessage);
    }

    if (message.v0LoadedMessage !== '') {
      writer.uint32(50).string(message.v0LoadedMessage);
    }

    for (const v of message.signatures) {
      writer.uint32(58).string(v!);
    }

    if (message.messageHash !== '') {
      writer.uint32(66).string(message.messageHash);
    }

    if (message.meta !== '') {
      writer.uint32(74).string(message.meta);
    }

    if (!message.writeVersion.isZero()) {
      writer.uint32(80).uint64(message.writeVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.slot = (reader.uint64() as Long);
          break;

        case 2:
          message.signature = reader.string();
          break;

        case 3:
          message.isVote = reader.bool();
          break;

        case 4:
          message.messageType = (reader.uint64() as Long);
          break;

        case 5:
          message.legacyMessage = reader.string();
          break;

        case 6:
          message.v0LoadedMessage = reader.string();
          break;

        case 7:
          message.signatures.push(reader.string());
          break;

        case 8:
          message.messageHash = reader.string();
          break;

        case 9:
          message.meta = reader.string();
          break;

        case 10:
          message.writeVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TransactionData>): TransactionData {
    const message = createBaseTransactionData();
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    message.signature = object.signature ?? '';
    message.isVote = object.isVote ?? false;
    message.messageType = object.messageType !== undefined && object.messageType !== null ? Long.fromValue(object.messageType) : Long.UZERO;
    message.legacyMessage = object.legacyMessage ?? '';
    message.v0LoadedMessage = object.v0LoadedMessage ?? '';
    message.signatures = object.signatures?.map(e => e) || [];
    message.messageHash = object.messageHash ?? '';
    message.meta = object.meta ?? '';
    message.writeVersion = object.writeVersion !== undefined && object.writeVersion !== null ? Long.fromValue(object.writeVersion) : Long.UZERO;
    return message;
  }

};