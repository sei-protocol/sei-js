import { Params, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType, PriceSnapshot, PriceSnapshotSDKType, VotePenaltyCounter, VotePenaltyCounterSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
    params: Params;
    feederDelegations: FeederDelegation[];
    exchangeRates: ExchangeRateTuple[];
    penaltyCounters: PenaltyCounter[];
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
    priceSnapshots: PriceSnapshot[];
}
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    feeder_delegations: FeederDelegationSDKType[];
    exchange_rates: ExchangeRateTupleSDKType[];
    penalty_counters: PenaltyCounterSDKType[];
    aggregate_exchange_rate_votes: AggregateExchangeRateVoteSDKType[];
    price_snapshots: PriceSnapshotSDKType[];
}
export interface FeederDelegation {
    feederAddress: string;
    validatorAddress: string;
}
export interface FeederDelegationSDKType {
    feeder_address: string;
    validator_address: string;
}
export interface PenaltyCounter {
    validatorAddress: string;
    votePenaltyCounter: VotePenaltyCounter;
}
export interface PenaltyCounterSDKType {
    validator_address: string;
    vote_penalty_counter: VotePenaltyCounterSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const FeederDelegation: {
    encode(message: FeederDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeederDelegation;
    fromPartial(object: DeepPartial<FeederDelegation>): FeederDelegation;
};
export declare const PenaltyCounter: {
    encode(message: PenaltyCounter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PenaltyCounter;
    fromPartial(object: DeepPartial<PenaltyCounter>): PenaltyCounter;
};
