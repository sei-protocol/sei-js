import { OracleExchangeRate, OracleExchangeRateSDKType, PriceSnapshot, PriceSnapshotSDKType, OracleTwap, OracleTwapSDKType, VotePenaltyCounter, VotePenaltyCounterSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType, Params, ParamsSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
    /** denom defines the denomination to query for. */
    denom: string;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestSDKType {
    /** denom defines the denomination to query for. */
    denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
    /** exchange_rate defines the exchange rate of Luna denominated in various Terra */
    oracleExchangeRate: OracleExchangeRate;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseSDKType {
    /** exchange_rate defines the exchange rate of Luna denominated in various Terra */
    oracle_exchange_rate: OracleExchangeRateSDKType;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {
}
export interface DenomOracleExchangeRatePair {
    denom: string;
    oracleExchangeRate: OracleExchangeRate;
}
export interface DenomOracleExchangeRatePairSDKType {
    denom: string;
    oracle_exchange_rate: OracleExchangeRateSDKType;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
    /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
    denomOracleExchangeRatePairs: DenomOracleExchangeRatePair[];
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
    /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
    denom_oracle_exchange_rate_pairs: DenomOracleExchangeRatePairSDKType[];
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
    /** actives defines a list of the denomination which oracle prices aggreed upon. */
    actives: string[];
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseSDKType {
    /** actives defines a list of the denomination which oracle prices aggreed upon. */
    actives: string[];
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
    /**
     * vote_targets defines a list of the denomination in which everyone
     * should vote in the current vote period.
     */
    voteTargets: string[];
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseSDKType {
    /**
     * vote_targets defines a list of the denomination in which everyone
     * should vote in the current vote period.
     */
    vote_targets: string[];
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequest {
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequestSDKType {
}
export interface QueryPriceSnapshotHistoryResponse {
    priceSnapshots: PriceSnapshot[];
}
export interface QueryPriceSnapshotHistoryResponseSDKType {
    price_snapshots: PriceSnapshotSDKType[];
}
/** request type for twap RPC method */
export interface QueryTwapsRequest {
    lookbackSeconds?: Long;
}
/** request type for twap RPC method */
export interface QueryTwapsRequestSDKType {
    lookback_seconds?: Long;
}
export interface QueryTwapsResponse {
    oracleTwaps: OracleTwap[];
}
export interface QueryTwapsResponseSDKType {
    oracle_twaps: OracleTwapSDKType[];
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestSDKType {
    /** validator defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
    /** feeder_addr defines the feeder delegation of a validator */
    feederAddr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
    /** feeder_addr defines the feeder delegation of a validator */
    feeder_addr: string;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequestSDKType {
    /** validator defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponse {
    votePenaltyCounter: VotePenaltyCounter;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponseSDKType {
    vote_penalty_counter: VotePenaltyCounterSDKType;
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequest {
    /** validator defines the validator address to query for. */
    validatorAddr: string;
}
/** QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method. */
export interface QueryAggregateVoteRequestSDKType {
    /** validator defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
    /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
    aggregateVote: AggregateExchangeRateVote;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponseSDKType {
    /** aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period */
    aggregate_vote: AggregateExchangeRateVoteSDKType;
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequest {
}
/** QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method. */
export interface QueryAggregateVotesRequestSDKType {
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
    /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
    aggregateVotes: AggregateExchangeRateVote[];
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponseSDKType {
    /** aggregate_votes defines all oracle aggregate votes submitted in the current vote period */
    aggregate_votes: AggregateExchangeRateVoteSDKType[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params defines the parameters of the module. */
    params: ParamsSDKType;
}
export declare const QueryExchangeRateRequest: {
    encode(message: QueryExchangeRateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest;
    fromPartial(object: DeepPartial<QueryExchangeRateRequest>): QueryExchangeRateRequest;
};
export declare const QueryExchangeRateResponse: {
    encode(message: QueryExchangeRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse;
    fromPartial(object: DeepPartial<QueryExchangeRateResponse>): QueryExchangeRateResponse;
};
export declare const QueryExchangeRatesRequest: {
    encode(_: QueryExchangeRatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesRequest;
    fromPartial(_: DeepPartial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest;
};
export declare const DenomOracleExchangeRatePair: {
    encode(message: DenomOracleExchangeRatePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomOracleExchangeRatePair;
    fromPartial(object: DeepPartial<DenomOracleExchangeRatePair>): DenomOracleExchangeRatePair;
};
export declare const QueryExchangeRatesResponse: {
    encode(message: QueryExchangeRatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesResponse;
    fromPartial(object: DeepPartial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse;
};
export declare const QueryActivesRequest: {
    encode(_: QueryActivesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesRequest;
    fromPartial(_: DeepPartial<QueryActivesRequest>): QueryActivesRequest;
};
export declare const QueryActivesResponse: {
    encode(message: QueryActivesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesResponse;
    fromPartial(object: DeepPartial<QueryActivesResponse>): QueryActivesResponse;
};
export declare const QueryVoteTargetsRequest: {
    encode(_: QueryVoteTargetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsRequest;
    fromPartial(_: DeepPartial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest;
};
export declare const QueryVoteTargetsResponse: {
    encode(message: QueryVoteTargetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsResponse;
    fromPartial(object: DeepPartial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse;
};
export declare const QueryPriceSnapshotHistoryRequest: {
    encode(_: QueryPriceSnapshotHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSnapshotHistoryRequest;
    fromPartial(_: DeepPartial<QueryPriceSnapshotHistoryRequest>): QueryPriceSnapshotHistoryRequest;
};
export declare const QueryPriceSnapshotHistoryResponse: {
    encode(message: QueryPriceSnapshotHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSnapshotHistoryResponse;
    fromPartial(object: DeepPartial<QueryPriceSnapshotHistoryResponse>): QueryPriceSnapshotHistoryResponse;
};
export declare const QueryTwapsRequest: {
    encode(message: QueryTwapsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTwapsRequest;
    fromPartial(object: DeepPartial<QueryTwapsRequest>): QueryTwapsRequest;
};
export declare const QueryTwapsResponse: {
    encode(message: QueryTwapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTwapsResponse;
    fromPartial(object: DeepPartial<QueryTwapsResponse>): QueryTwapsResponse;
};
export declare const QueryFeederDelegationRequest: {
    encode(message: QueryFeederDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationRequest;
    fromPartial(object: DeepPartial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest;
};
export declare const QueryFeederDelegationResponse: {
    encode(message: QueryFeederDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationResponse;
    fromPartial(object: DeepPartial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse;
};
export declare const QueryVotePenaltyCounterRequest: {
    encode(message: QueryVotePenaltyCounterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotePenaltyCounterRequest;
    fromPartial(object: DeepPartial<QueryVotePenaltyCounterRequest>): QueryVotePenaltyCounterRequest;
};
export declare const QueryVotePenaltyCounterResponse: {
    encode(message: QueryVotePenaltyCounterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotePenaltyCounterResponse;
    fromPartial(object: DeepPartial<QueryVotePenaltyCounterResponse>): QueryVotePenaltyCounterResponse;
};
export declare const QueryAggregateVoteRequest: {
    encode(message: QueryAggregateVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteRequest;
    fromPartial(object: DeepPartial<QueryAggregateVoteRequest>): QueryAggregateVoteRequest;
};
export declare const QueryAggregateVoteResponse: {
    encode(message: QueryAggregateVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVoteResponse;
    fromPartial(object: DeepPartial<QueryAggregateVoteResponse>): QueryAggregateVoteResponse;
};
export declare const QueryAggregateVotesRequest: {
    encode(_: QueryAggregateVotesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesRequest;
    fromPartial(_: DeepPartial<QueryAggregateVotesRequest>): QueryAggregateVotesRequest;
};
export declare const QueryAggregateVotesResponse: {
    encode(message: QueryAggregateVotesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAggregateVotesResponse;
    fromPartial(object: DeepPartial<QueryAggregateVotesResponse>): QueryAggregateVotesResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
