import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the most recent */
export interface Minter {
  /** yyyy-mm-dd */
  startDate: string;
  /** yyyy-mm-dd */
  endDate: string;
  denom: string;
  totalMintAmount: Long;
  remainingMintAmount: Long;
  lastMintAmount: Long;
  lastMintDate: string;
  /** yyyy-mm-dd */
  lastMintHeight: Long;
}
/** Minter represents the most recent */
export interface MinterSDKType {
  start_date: string;
  end_date: string;
  denom: string;
  total_mint_amount: Long;
  remaining_mint_amount: Long;
  last_mint_amount: Long;
  last_mint_date: string;
  last_mint_height: Long;
}
export interface ScheduledTokenRelease {
  /** yyyy-mm-dd */
  startDate: string;
  /** yyyy-mm-dd */
  endDate: string;
  tokenReleaseAmount: Long;
}
export interface ScheduledTokenReleaseSDKType {
  start_date: string;
  end_date: string;
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
  mint_denom: string;
  token_release_schedule: ScheduledTokenReleaseSDKType[];
}
/** Minter represents the most recent */
export interface Version2Minter {
  lastMintAmount: string;
  lastMintDate: string;
  lastMintHeight: Long;
  denom: string;
}
/** Minter represents the most recent */
export interface Version2MinterSDKType {
  last_mint_amount: string;
  last_mint_date: string;
  last_mint_height: Long;
  denom: string;
}
export interface Version2ScheduledTokenRelease {
  /** yyyy-mm-dd */
  date: string;
  tokenReleaseAmount: Long;
}
export interface Version2ScheduledTokenReleaseSDKType {
  date: string;
  token_release_amount: Long;
}
/** Params holds parameters for the mint module. */
export interface Version2Params {
  /** type of coin to mint */
  mintDenom: string;
  /** List of token release schedules */
  tokenReleaseSchedule: Version2ScheduledTokenRelease[];
}
/** Params holds parameters for the mint module. */
export interface Version2ParamsSDKType {
  mint_denom: string;
  token_release_schedule: Version2ScheduledTokenReleaseSDKType[];
}
function createBaseMinter(): Minter {
  return {
    startDate: "",
    endDate: "",
    denom: "",
    totalMintAmount: Long.UZERO,
    remainingMintAmount: Long.UZERO,
    lastMintAmount: Long.UZERO,
    lastMintDate: "",
    lastMintHeight: Long.UZERO
  };
}
export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(18).string(message.endDate);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (!message.totalMintAmount.isZero()) {
      writer.uint32(32).uint64(message.totalMintAmount);
    }
    if (!message.remainingMintAmount.isZero()) {
      writer.uint32(40).uint64(message.remainingMintAmount);
    }
    if (!message.lastMintAmount.isZero()) {
      writer.uint32(48).uint64(message.lastMintAmount);
    }
    if (message.lastMintDate !== "") {
      writer.uint32(58).string(message.lastMintDate);
    }
    if (!message.lastMintHeight.isZero()) {
      writer.uint32(64).uint64(message.lastMintHeight);
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
          message.startDate = reader.string();
          break;
        case 2:
          message.endDate = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.totalMintAmount = (reader.uint64() as Long);
          break;
        case 5:
          message.remainingMintAmount = (reader.uint64() as Long);
          break;
        case 6:
          message.lastMintAmount = (reader.uint64() as Long);
          break;
        case 7:
          message.lastMintDate = reader.string();
          break;
        case 8:
          message.lastMintHeight = (reader.uint64() as Long);
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
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.denom = object.denom ?? "";
    message.totalMintAmount = object.totalMintAmount !== undefined && object.totalMintAmount !== null ? Long.fromValue(object.totalMintAmount) : Long.UZERO;
    message.remainingMintAmount = object.remainingMintAmount !== undefined && object.remainingMintAmount !== null ? Long.fromValue(object.remainingMintAmount) : Long.UZERO;
    message.lastMintAmount = object.lastMintAmount !== undefined && object.lastMintAmount !== null ? Long.fromValue(object.lastMintAmount) : Long.UZERO;
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.UZERO;
    return message;
  }
};
function createBaseScheduledTokenRelease(): ScheduledTokenRelease {
  return {
    startDate: "",
    endDate: "",
    tokenReleaseAmount: Long.UZERO
  };
}
export const ScheduledTokenRelease = {
  encode(message: ScheduledTokenRelease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(18).string(message.endDate);
    }
    if (!message.tokenReleaseAmount.isZero()) {
      writer.uint32(24).uint64(message.tokenReleaseAmount);
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
          message.startDate = reader.string();
          break;
        case 2:
          message.endDate = reader.string();
          break;
        case 3:
          message.tokenReleaseAmount = (reader.uint64() as Long);
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
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.tokenReleaseAmount = object.tokenReleaseAmount !== undefined && object.tokenReleaseAmount !== null ? Long.fromValue(object.tokenReleaseAmount) : Long.UZERO;
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
function createBaseVersion2Minter(): Version2Minter {
  return {
    lastMintAmount: "",
    lastMintDate: "",
    lastMintHeight: Long.ZERO,
    denom: ""
  };
}
export const Version2Minter = {
  encode(message: Version2Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Version2Minter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion2Minter();
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
  fromPartial(object: DeepPartial<Version2Minter>): Version2Minter {
    const message = createBaseVersion2Minter();
    message.lastMintAmount = object.lastMintAmount ?? "";
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.ZERO;
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseVersion2ScheduledTokenRelease(): Version2ScheduledTokenRelease {
  return {
    date: "",
    tokenReleaseAmount: Long.ZERO
  };
}
export const Version2ScheduledTokenRelease = {
  encode(message: Version2ScheduledTokenRelease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.date !== "") {
      writer.uint32(10).string(message.date);
    }
    if (!message.tokenReleaseAmount.isZero()) {
      writer.uint32(16).int64(message.tokenReleaseAmount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Version2ScheduledTokenRelease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion2ScheduledTokenRelease();
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
  fromPartial(object: DeepPartial<Version2ScheduledTokenRelease>): Version2ScheduledTokenRelease {
    const message = createBaseVersion2ScheduledTokenRelease();
    message.date = object.date ?? "";
    message.tokenReleaseAmount = object.tokenReleaseAmount !== undefined && object.tokenReleaseAmount !== null ? Long.fromValue(object.tokenReleaseAmount) : Long.ZERO;
    return message;
  }
};
function createBaseVersion2Params(): Version2Params {
  return {
    mintDenom: "",
    tokenReleaseSchedule: []
  };
}
export const Version2Params = {
  encode(message: Version2Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    for (const v of message.tokenReleaseSchedule) {
      Version2ScheduledTokenRelease.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Version2Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion2Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.tokenReleaseSchedule.push(Version2ScheduledTokenRelease.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Version2Params>): Version2Params {
    const message = createBaseVersion2Params();
    message.mintDenom = object.mintDenom ?? "";
    message.tokenReleaseSchedule = object.tokenReleaseSchedule?.map(e => Version2ScheduledTokenRelease.fromPartial(e)) || [];
    return message;
  }
};