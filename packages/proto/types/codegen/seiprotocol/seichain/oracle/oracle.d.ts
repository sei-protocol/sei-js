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
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const Denom: {
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Denom;
    fromPartial(object: DeepPartial<Denom>): Denom;
};
export declare const AggregateExchangeRateVote: {
    encode(message: AggregateExchangeRateVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AggregateExchangeRateVote;
    fromPartial(object: DeepPartial<AggregateExchangeRateVote>): AggregateExchangeRateVote;
};
export declare const ExchangeRateTuple: {
    encode(message: ExchangeRateTuple, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRateTuple;
    fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple;
};
export declare const OracleExchangeRate: {
    encode(message: OracleExchangeRate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleExchangeRate;
    fromPartial(object: DeepPartial<OracleExchangeRate>): OracleExchangeRate;
};
export declare const PriceSnapshotItem: {
    encode(message: PriceSnapshotItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshotItem;
    fromPartial(object: DeepPartial<PriceSnapshotItem>): PriceSnapshotItem;
};
export declare const PriceSnapshot: {
    encode(message: PriceSnapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PriceSnapshot;
    fromPartial(object: DeepPartial<PriceSnapshot>): PriceSnapshot;
};
export declare const OracleTwap: {
    encode(message: OracleTwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleTwap;
    fromPartial(object: DeepPartial<OracleTwap>): OracleTwap;
};
export declare const VotePenaltyCounter: {
    encode(message: VotePenaltyCounter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VotePenaltyCounter;
    fromPartial(object: DeepPartial<VotePenaltyCounter>): VotePenaltyCounter;
};
