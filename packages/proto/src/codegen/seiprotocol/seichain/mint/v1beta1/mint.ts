import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Minter represents the most recent */

export interface Minter {
  lastMintAmount: string;
  lastMintDate: string;
  lastMintHeight: Long;
  denom: string;
}
/** Minter represents the most recent */

export interface MinterSDKType {
  last_mint_amount: string;
  last_mint_date: string;
  last_mint_height: Long;
  denom: string;
}
export interface ScheduledTokenRelease {
  /** yyyy-mm-dd */
  date: string;
  tokenReleaseAmount: Long;
}
export interface ScheduledTokenReleaseSDKType {
  /** yyyy-mm-dd */
  date: string;
  token_release_amount: Long;
}
/** Params holds parameters for the mint module. */

export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** List of token release schedules */

  tokenReleaseSchedule: ScheduledTokenRelease[];
}
/** Params holds parameters for the mint module. */

export interface ParamsSDKType {
  /** type of coin to mint */
  mint_denom: string;
  /** List of token release schedules */

  token_release_schedule: ScheduledTokenReleaseSDKType[];
}

function createBaseMinter(): Minter {
  return {
    lastMintAmount: "",
    lastMintDate: "",
    lastMintHeight: Long.ZERO,
    denom: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastMintAmount !== "") {
      writer.uint32(10).string(message.lastMintAmount);
    }

    if (message.lastMintDate !== "") {
      writer.uint32(18).string(message.lastMintDate);
    }

    if (!message.lastMintHeight.isZero()) {
      writer.uint32(24).int64(message.lastMintHeight);
    }

    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lastMintAmount = reader.string();
          break;

        case 2:
          message.lastMintDate = reader.string();
          break;

        case 3:
          message.lastMintHeight = (reader.int64() as Long);
          break;

        case 4:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.lastMintAmount = object.lastMintAmount ?? "";
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.ZERO;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseScheduledTokenRelease(): ScheduledTokenRelease {
  return {
    date: "",
    tokenReleaseAmount: Long.ZERO
  };
}

export const ScheduledTokenRelease = {
  encode(message: ScheduledTokenRelease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== "") {
      writer.uint32(10).string(message.date);
    }

    if (!message.tokenReleaseAmount.isZero()) {
      writer.uint32(16).int64(message.tokenReleaseAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScheduledTokenRelease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScheduledTokenRelease();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.date = reader.string();
          break;

        case 2:
          message.tokenReleaseAmount = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ScheduledTokenRelease>): ScheduledTokenRelease {
    const message = createBaseScheduledTokenRelease();
    message.date = object.date ?? "";
    message.tokenReleaseAmount = object.tokenReleaseAmount !== undefined && object.tokenReleaseAmount !== null ? Long.fromValue(object.tokenReleaseAmount) : Long.ZERO;
    return message;
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    tokenReleaseSchedule: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    for (const v of message.tokenReleaseSchedule) {
      ScheduledTokenRelease.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.mintDenom = reader.string();
          break;

        case 2:
          message.tokenReleaseSchedule.push(ScheduledTokenRelease.decode(reader, reader.uint32()));
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
    message.mintDenom = object.mintDenom ?? "";
    message.tokenReleaseSchedule = object.tokenReleaseSchedule?.map(e => ScheduledTokenRelease.fromPartial(e)) || [];
    return message;
  }

};