import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryActivesRequest, QueryActivesResponse, QueryVoteTargetsRequest, QueryVoteTargetsResponse, QueryPriceSnapshotHistoryRequest, QueryPriceSnapshotHistoryResponse, QueryTwapsRequest, QueryTwapsResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryVotePenaltyCounterRequest, QueryVotePenaltyCounterResponse, QuerySlashWindowRequest, QuerySlashWindowResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** ExchangeRate returns exchange rate of a denom */
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
    /** ExchangeRates returns exchange rates of all denoms */
    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
    /** Actives returns all active denoms */
    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
    /** VoteTargets returns all vote target denoms */
    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
    /** PriceSnapshotHistory returns the history of price snapshots for all assets */
    priceSnapshotHistory(request?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponse>;
    twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse>;
    /** FeederDelegation returns feeder delegation of a validator */
    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
    /** MissCounter returns oracle miss counter of a validator */
    votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse>;
    /** SlashWindow returns slash window information */
    slashWindow(request?: QuerySlashWindowRequest): Promise<QuerySlashWindowResponse>;
    /** Params queries all parameters. */
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
    slashWindow(request?: QuerySlashWindowRequest): Promise<QuerySlashWindowResponse>;
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
    slashWindow(request?: QuerySlashWindowRequest): Promise<QuerySlashWindowResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
