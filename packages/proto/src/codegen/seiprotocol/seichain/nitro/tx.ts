import { MerkleProof, MerkleProofSDKType } from "./data";
import { Account, AccountSDKType } from "./account";
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
export interface MsgSubmitFraudChallenge {
  sender: string;
  startSlot: Long;
  endSlot: Long;
  fraudStatePubKey: string;
  merkleProof: MerkleProof;
  accountStates: Account[];
  programs: Account[];
  sysvarAccounts: Account[];
}
export interface MsgSubmitFraudChallengeSDKType {
  sender: string;
  startSlot: Long;
  endSlot: Long;
  fraudStatePubKey: string;
  merkleProof: MerkleProofSDKType;
  accountStates: AccountSDKType[];
  programs: AccountSDKType[];
  sysvarAccounts: AccountSDKType[];
}
export interface MsgRecordTransactionDataResponse {}
export interface MsgRecordTransactionDataResponseSDKType {}
export interface MsgSubmitFraudChallengeResponse {}
export interface MsgSubmitFraudChallengeResponseSDKType {}

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

function createBaseMsgSubmitFraudChallenge(): MsgSubmitFraudChallenge {
  return {
    sender: "",
    startSlot: Long.UZERO,
    endSlot: Long.UZERO,
    fraudStatePubKey: "",
    merkleProof: undefined,
    accountStates: [],
    programs: [],
    sysvarAccounts: []
  };
}

export const MsgSubmitFraudChallenge = {
  encode(message: MsgSubmitFraudChallenge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.startSlot.isZero()) {
      writer.uint32(16).uint64(message.startSlot);
    }

    if (!message.endSlot.isZero()) {
      writer.uint32(24).uint64(message.endSlot);
    }

    if (message.fraudStatePubKey !== "") {
      writer.uint32(34).string(message.fraudStatePubKey);
    }

    if (message.merkleProof !== undefined) {
      MerkleProof.encode(message.merkleProof, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.accountStates) {
      Account.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.programs) {
      Account.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.sysvarAccounts) {
      Account.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitFraudChallenge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitFraudChallenge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.startSlot = (reader.uint64() as Long);
          break;

        case 3:
          message.endSlot = (reader.uint64() as Long);
          break;

        case 4:
          message.fraudStatePubKey = reader.string();
          break;

        case 5:
          message.merkleProof = MerkleProof.decode(reader, reader.uint32());
          break;

        case 6:
          message.accountStates.push(Account.decode(reader, reader.uint32()));
          break;

        case 7:
          message.programs.push(Account.decode(reader, reader.uint32()));
          break;

        case 8:
          message.sysvarAccounts.push(Account.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSubmitFraudChallenge>): MsgSubmitFraudChallenge {
    const message = createBaseMsgSubmitFraudChallenge();
    message.sender = object.sender ?? "";
    message.startSlot = object.startSlot !== undefined && object.startSlot !== null ? Long.fromValue(object.startSlot) : Long.UZERO;
    message.endSlot = object.endSlot !== undefined && object.endSlot !== null ? Long.fromValue(object.endSlot) : Long.UZERO;
    message.fraudStatePubKey = object.fraudStatePubKey ?? "";
    message.merkleProof = object.merkleProof !== undefined && object.merkleProof !== null ? MerkleProof.fromPartial(object.merkleProof) : undefined;
    message.accountStates = object.accountStates?.map(e => Account.fromPartial(e)) || [];
    message.programs = object.programs?.map(e => Account.fromPartial(e)) || [];
    message.sysvarAccounts = object.sysvarAccounts?.map(e => Account.fromPartial(e)) || [];
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

function createBaseMsgSubmitFraudChallengeResponse(): MsgSubmitFraudChallengeResponse {
  return {};
}

export const MsgSubmitFraudChallengeResponse = {
  encode(_: MsgSubmitFraudChallengeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitFraudChallengeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitFraudChallengeResponse();

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

  fromPartial(_: DeepPartial<MsgSubmitFraudChallengeResponse>): MsgSubmitFraudChallengeResponse {
    const message = createBaseMsgSubmitFraudChallengeResponse();
    return message;
  }

};