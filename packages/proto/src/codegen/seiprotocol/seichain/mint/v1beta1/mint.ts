import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** Minter represents the minting state. */

export interface Minter {
  /** current epoch provisions */
  epochProvisions: string;
}
/** Minter represents the minting state. */

export interface MinterSDKType {
  /** current epoch provisions */
  epoch_provisions: string;
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
  /** epoch provisions from the first epoch */

  genesisEpochProvisions: string;
  /** List of token release schedules */

  tokenReleaseSchedule: ScheduledTokenRelease[];
}
/** Params holds parameters for the mint module. */

export interface ParamsSDKType {
  /** type of coin to mint */
  mint_denom: string;
  /** epoch provisions from the first epoch */

  genesis_epoch_provisions: string;
  /** List of token release schedules */

  token_release_schedule: ScheduledTokenReleaseSDKType[];
}

function createBaseMinter(): Minter {
  return {
    epochProvisions: ""
  };
}

export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.epochProvisions !== "") {
      writer.uint32(10).string(message.epochProvisions);
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
          message.epochProvisions = reader.string();
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
    message.epochProvisions = object.epochProvisions ?? "";
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
    genesisEpochProvisions: "",
    tokenReleaseSchedule: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }

    if (message.genesisEpochProvisions !== "") {
      writer.uint32(18).string(message.genesisEpochProvisions);
    }

    for (const v of message.tokenReleaseSchedule) {
      ScheduledTokenRelease.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.genesisEpochProvisions = reader.string();
          break;

        case 3:
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
    message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
    message.tokenReleaseSchedule = object.tokenReleaseSchedule?.map(e => ScheduledTokenRelease.fromPartial(e)) || [];
    return message;
  }

};