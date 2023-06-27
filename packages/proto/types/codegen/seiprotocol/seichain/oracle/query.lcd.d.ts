import { LCDClient } from "@osmonauts/lcd";
import { QueryExchangeRateRequest, QueryExchangeRateResponseSDKType, QueryExchangeRatesRequest, QueryExchangeRatesResponseSDKType, QueryActivesRequest, QueryActivesResponseSDKType, QueryVoteTargetsRequest, QueryVoteTargetsResponseSDKType, QueryPriceSnapshotHistoryRequest, QueryPriceSnapshotHistoryResponseSDKType, QueryTwapsRequest, QueryTwapsResponseSDKType, QueryFeederDelegationRequest, QueryFeederDelegationResponseSDKType, QueryVotePenaltyCounterRequest, QueryVotePenaltyCounterResponseSDKType, QuerySlashWindowRequest, QuerySlashWindowResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    exchangeRate(params: QueryExchangeRateRequest): Promise<QueryExchangeRateResponseSDKType>;
    exchangeRates(_params?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponseSDKType>;
    actives(_params?: QueryActivesRequest): Promise<QueryActivesResponseSDKType>;
    voteTargets(_params?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponseSDKType>;
    priceSnapshotHistory(_params?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponseSDKType>;
    twaps(params: QueryTwapsRequest): Promise<QueryTwapsResponseSDKType>;
    feederDelegation(params: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponseSDKType>;
    votePenaltyCounter(params: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponseSDKType>;
    slashWindow(_params?: QuerySlashWindowRequest): Promise<QuerySlashWindowResponseSDKType>;
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
}
