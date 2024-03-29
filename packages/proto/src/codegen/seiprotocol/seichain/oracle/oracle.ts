import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  /** The number of blocks per voting window, at the end of the vote period, the oracle votes are assessed and exchange rates are calculated. If the vote period is 1 this is equivalent to having oracle votes assessed and exchange rates calculated in each block. */
  votePeriod: Long;
  voteThreshold: string;
  rewardBand: string;
  whitelist: Denom[];
  slashFraction: string;
  /** The interval in blocks at which the oracle module will assess validator penalty counters, and penalize validators with too poor performance. */
  slashWindow: Long;
  /** The minimum percentage of voting windows for which a validator must have `success`es in order to not be penalized at the end of the slash window. */
  minValidPerWindow: string;
  lookbackDuration: Long;
}
export interface ParamsSDKType {
  vote_period: Long;
  vote_threshold: string;
  reward_band: string;
  whitelist: DenomSDKType[];
  slash_fraction: string;
  slash_window: Long;
  min_valid_per_window: string;
  lookback_duration: Long;
}
export interface Denom {
  name: string;
}
export interface DenomSDKType {
  name: string;
}
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}
export interface AggregateExchangeRateVoteSDKType {
  exchange_rate_tuples: ExchangeRateTupleSDKType[];
  voter: string;
}
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}
export interface ExchangeRateTupleSDKType {
  denom: string;
  exchange_rate: string;
}
export interface OracleExchangeRate {
  exchangeRate: string;
  lastUpdate: string;
}
export interface OracleExchangeRateSDKType {
  exchange_rate: string;
  last_update: string;
}
export interface PriceSnapshotItem {
  denom: string;
  oracleExchangeRate: OracleExchangeRate;
}
export interface PriceSnapshotItemSDKType {
  denom: string;
  oracle_exchange_rate: OracleExchangeRateSDKType;
}
export interface PriceSnapshot {
  snapshotTimestamp: Long;
  priceSnapshotItems: PriceSnapshotItem[];
}
export interface PriceSnapshotSDKType {
  snapshotTimestamp: Long;
  price_snapshot_items: PriceSnapshotItemSDKType[];
}
export interface OracleTwap {
  denom: string;
  twap: string;
  lookbackSeconds: Long;
}
export interface OracleTwapSDKType {
  denom: string;
  twap: string;
  lookback_seconds: Long;
}
export interface VotePenaltyCounter {
  missCount: Long;
  abstainCount: Long;
  successCount: Long;
}
export interface VotePenaltyCounterSDKType {
  miss_count: Long;
  abstain_count: Long;
  success_count: Long;
}
function createBaseParams(): Params {
  return {
    votePeriod: Long.UZERO,
    voteThreshold: "",
    rewardBand: "",
    whitelist: [],
    slashFraction: "",
    slashWindow: Long.UZERO,
    minValidPerWindow: "",
    lookbackDuration: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.votePeriod.isZero()) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }
    for (const v of message.whitelist) {
      Denom.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.slashFraction !== "") {
      writer.uint32(42).string(message.slashFraction);
    }
    if (!message.slashWindow.isZero()) {
      writer.uint32(48).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(58).string(message.minValidPerWindow);
    }
    if (!message.lookbackDuration.isZero()) {
      writer.uint32(72).uint64(message.lookbackDuration);
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
          message.votePeriod = (reader.uint64() as Long);
          break;
        case 2:
          message.voteThreshold = reader.string();
          break;
        case 3:
          message.rewardBand = reader.string();
          break;
        case 4:
          message.whitelist.push(Denom.decode(reader, reader.uint32()));
          break;
        case 5:
          message.slashFraction = reader.string();
          break;
        case 6:
          message.slashWindow = (reader.uint64() as Long);
          break;
        case 7:
          message.minValidPerWindow = reader.string();
          break;
        case 9:
          message.lookbackDuration = (reader.uint64() as Long);
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
    message.votePeriod = object.votePeriod !== undefined && object.votePeriod !== null ? Long.fromValue(object.votePeriod) : Long.UZERO;
    message.voteThreshold = object.voteThreshold ?? "";
    message.rewardBand = object.rewardBand ?? "";
    message.whitelist = object.whitelist?.map(e => Denom.fromPartial(e)) || [];
    message.slashFraction = object.slashFraction ?? "";
    message.slashWindow = object.slashWindow !== undefined && object.slashWindow !== null ? Long.fromValue(object.slashWindow) : Long.UZERO;
    message.minValidPerWindow = object.minValidPerWindow ?? "";
    message.lookbackDuration = object.lookbackDuration !== undefined && object.lookbackDuration !== null ? Long.fromValue(object.lookbackDuration) : Long.UZERO;
    return message;
  }
};
function createBaseDenom(): Denom {
  return {
    name: ""
  };
}
export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Denom>): Denom {
    const message = createBaseDenom();
    message.name = object.name ?? "";
    return message;
  }
};
function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
  return {
    exchangeRateTuples: [],
    voter: ""
  };
}
export const AggregateExchangeRateVote = {
  encode(message: AggregateExchangeRateVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAggregateExchangeRateVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AggregateExchangeRateVote>): AggregateExchangeRateVote {
    const message = createBaseAggregateExchangeRateVote();
    message.exchangeRateTuples = object.exchangeRateTuples?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
    message.voter = object.voter ?? "";
    return message;
  }
};
function createBaseExchangeRateTuple(): ExchangeRateTuple {
  return {
    denom: "",
    exchangeRate: ""
  };
}
export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRateTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = createBaseExchangeRateTuple();
    message.denom = object.denom ?? "";
    message.exchangeRate = object.exchangeRate ?? "";
    return message;
  }
};
function createBaseOracleExchangeRate(): OracleExchangeRate {
  return {
    exchangeRate: "",
    lastUpdate: ""
  };
}
export const OracleExchangeRate = {
  encode(message: OracleExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(message.exchangeRate);
    }
    if (message.lastUpdate !== "") {
      writer.uint32(18).string(message.lastUpdate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OracleExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleExchangeRate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = reader.string();
          break;
        case 2:
          message.lastUpdate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OracleExchangeRate>): OracleExchangeRate {
    const message = createBaseOracleExchangeRate();
    message.exchangeRate = object.exchangeRate ?? "";
    message.lastUpdate = object.lastUpdate ?? "";
    return message;
  }
};
function createBasePriceSnapshotItem(): PriceSnapshotItem {
  return {
    denom: "",
    oracleExchangeRate: OracleExchangeRate.fromPartial({})
  };
}
export const PriceSnapshotItem = {
  encode(message: PriceSnapshotItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oracleExchangeRate !== undefined) {
      OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshotItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceSnapshotItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceSnapshotItem>): PriceSnapshotItem {
    const message = createBasePriceSnapshotItem();
    message.denom = object.denom ?? "";
    message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
    return message;
  }
};
function createBasePriceSnapshot(): PriceSnapshot {
  return {
    snapshotTimestamp: Long.ZERO,
    priceSnapshotItems: []
  };
}
export const PriceSnapshot = {
  encode(message: PriceSnapshot, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.snapshotTimestamp.isZero()) {
      writer.uint32(8).int64(message.snapshotTimestamp);
    }
    for (const v of message.priceSnapshotItems) {
      PriceSnapshotItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshot {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePriceSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.snapshotTimestamp = (reader.int64() as Long);
          break;
        case 2:
          message.priceSnapshotItems.push(PriceSnapshotItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PriceSnapshot>): PriceSnapshot {
    const message = createBasePriceSnapshot();
    message.snapshotTimestamp = object.snapshotTimestamp !== undefined && object.snapshotTimestamp !== null ? Long.fromValue(object.snapshotTimestamp) : Long.ZERO;
    message.priceSnapshotItems = object.priceSnapshotItems?.map(e => PriceSnapshotItem.fromPartial(e)) || [];
    return message;
  }
};
function createBaseOracleTwap(): OracleTwap {
  return {
    denom: "",
    twap: "",
    lookbackSeconds: Long.ZERO
  };
}
export const OracleTwap = {
  encode(message: OracleTwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.twap !== "") {
      writer.uint32(18).string(message.twap);
    }
    if (!message.lookbackSeconds.isZero()) {
      writer.uint32(24).int64(message.lookbackSeconds);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): OracleTwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleTwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.twap = reader.string();
          break;
        case 3:
          message.lookbackSeconds = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OracleTwap>): OracleTwap {
    const message = createBaseOracleTwap();
    message.denom = object.denom ?? "";
    message.twap = object.twap ?? "";
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.ZERO;
    return message;
  }
};
function createBaseVotePenaltyCounter(): VotePenaltyCounter {
  return {
    missCount: Long.UZERO,
    abstainCount: Long.UZERO,
    successCount: Long.UZERO
  };
}
export const VotePenaltyCounter = {
  encode(message: VotePenaltyCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.missCount.isZero()) {
      writer.uint32(8).uint64(message.missCount);
    }
    if (!message.abstainCount.isZero()) {
      writer.uint32(16).uint64(message.abstainCount);
    }
    if (!message.successCount.isZero()) {
      writer.uint32(24).uint64(message.successCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): VotePenaltyCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotePenaltyCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCount = (reader.uint64() as Long);
          break;
        case 2:
          message.abstainCount = (reader.uint64() as Long);
          break;
        case 3:
          message.successCount = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<VotePenaltyCounter>): VotePenaltyCounter {
    const message = createBaseVotePenaltyCounter();
    message.missCount = object.missCount !== undefined && object.missCount !== null ? Long.fromValue(object.missCount) : Long.UZERO;
    message.abstainCount = object.abstainCount !== undefined && object.abstainCount !== null ? Long.fromValue(object.abstainCount) : Long.UZERO;
    message.successCount = object.successCount !== undefined && object.successCount !== null ? Long.fromValue(object.successCount) : Long.UZERO;
    return message;
  }
};