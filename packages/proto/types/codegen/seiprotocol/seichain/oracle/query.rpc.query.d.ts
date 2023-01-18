import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryActivesRequest, QueryActivesResponse, QueryVoteTargetsRequest, QueryVoteTargetsResponse, QueryPriceSnapshotHistoryRequest, QueryPriceSnapshotHistoryResponse, QueryTwapsRequest, QueryTwapsResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryVotePenaltyCounterRequest, QueryVotePenaltyCounterResponse, QueryAggregateVoteRequest, QueryAggregateVoteResponse, QueryAggregateVotesRequest, QueryAggregateVotesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
    priceSnapshotHistory(request?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponse>;
    twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
    priceSnapshotHistory(request?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponse>;
    twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
    priceSnapshotHistory(request?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponse>;
    twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse>;
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse>;
    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
