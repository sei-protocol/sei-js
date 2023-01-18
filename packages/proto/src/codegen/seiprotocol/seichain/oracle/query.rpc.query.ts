import { Rpc } from '@osmonauts/helpers';
import * as _m0 from 'protobufjs/minimal';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryActivesRequest, QueryActivesResponse, QueryVoteTargetsRequest, QueryVoteTargetsResponse, QueryPriceSnapshotHistoryRequest, QueryPriceSnapshotHistoryResponse, QueryTwapsRequest, QueryTwapsResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryVotePenaltyCounterRequest, QueryVotePenaltyCounterResponse, QueryAggregateVoteRequest, QueryAggregateVoteResponse, QueryAggregateVotesRequest, QueryAggregateVotesResponse, QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the RPC service */

export interface Query {
  exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
  /*ExchangeRate returns exchange rate of a denom*/

  exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse>;
  /*ExchangeRates returns exchange rates of all denoms*/

  actives(request?: QueryActivesRequest): Promise<QueryActivesResponse>;
  /*Actives returns all active denoms*/

  voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse>;
  /*VoteTargets returns all vote target denoms*/

  priceSnapshotHistory(request?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponse>;
  /*PriceSnapshotHistory returns the history of price snapshots for all assets*/

  twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse>;
  /*null*/

  feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse>;
  /*FeederDelegation returns feeder delegation of a validator*/

  votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse>;
  /*MissCounter returns oracle miss counter of a validator*/

  aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse>;
  /*AggregateVote returns an aggregate vote of a validator*/

  aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse>;
  /*AggregateVotes returns aggregate votes of all validators*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params queries all parameters.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.exchangeRate = this.exchangeRate.bind(this);
    this.exchangeRates = this.exchangeRates.bind(this);
    this.actives = this.actives.bind(this);
    this.voteTargets = this.voteTargets.bind(this);
    this.priceSnapshotHistory = this.priceSnapshotHistory.bind(this);
    this.twaps = this.twaps.bind(this);
    this.feederDelegation = this.feederDelegation.bind(this);
    this.votePenaltyCounter = this.votePenaltyCounter.bind(this);
    this.aggregateVote = this.aggregateVote.bind(this);
    this.aggregateVotes = this.aggregateVotes.bind(this);
    this.params = this.params.bind(this);
  }

  exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'ExchangeRate', data);
    return promise.then(data => QueryExchangeRateResponse.decode(new _m0.Reader(data)));
  }

  exchangeRates(request: QueryExchangeRatesRequest = {}): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRatesRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'ExchangeRates', data);
    return promise.then(data => QueryExchangeRatesResponse.decode(new _m0.Reader(data)));
  }

  actives(request: QueryActivesRequest = {}): Promise<QueryActivesResponse> {
    const data = QueryActivesRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'Actives', data);
    return promise.then(data => QueryActivesResponse.decode(new _m0.Reader(data)));
  }

  voteTargets(request: QueryVoteTargetsRequest = {}): Promise<QueryVoteTargetsResponse> {
    const data = QueryVoteTargetsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'VoteTargets', data);
    return promise.then(data => QueryVoteTargetsResponse.decode(new _m0.Reader(data)));
  }

  priceSnapshotHistory(request: QueryPriceSnapshotHistoryRequest = {}): Promise<QueryPriceSnapshotHistoryResponse> {
    const data = QueryPriceSnapshotHistoryRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'PriceSnapshotHistory', data);
    return promise.then(data => QueryPriceSnapshotHistoryResponse.decode(new _m0.Reader(data)));
  }

  twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse> {
    const data = QueryTwapsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'Twaps', data);
    return promise.then(data => QueryTwapsResponse.decode(new _m0.Reader(data)));
  }

  feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'FeederDelegation', data);
    return promise.then(data => QueryFeederDelegationResponse.decode(new _m0.Reader(data)));
  }

  votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse> {
    const data = QueryVotePenaltyCounterRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'VotePenaltyCounter', data);
    return promise.then(data => QueryVotePenaltyCounterResponse.decode(new _m0.Reader(data)));
  }

  aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVoteRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'AggregateVote', data);
    return promise.then(data => QueryAggregateVoteResponse.decode(new _m0.Reader(data)));
  }

  aggregateVotes(request: QueryAggregateVotesRequest = {}): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotesRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'AggregateVotes', data);
    return promise.then(data => QueryAggregateVotesResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
      return queryService.exchangeRate(request);
    },

    exchangeRates(request?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponse> {
      return queryService.exchangeRates(request);
    },

    actives(request?: QueryActivesRequest): Promise<QueryActivesResponse> {
      return queryService.actives(request);
    },

    voteTargets(request?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponse> {
      return queryService.voteTargets(request);
    },

    priceSnapshotHistory(request?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponse> {
      return queryService.priceSnapshotHistory(request);
    },

    twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse> {
      return queryService.twaps(request);
    },

    feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse> {
      return queryService.feederDelegation(request);
    },

    votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse> {
      return queryService.votePenaltyCounter(request);
    },

    aggregateVote(request: QueryAggregateVoteRequest): Promise<QueryAggregateVoteResponse> {
      return queryService.aggregateVote(request);
    },

    aggregateVotes(request?: QueryAggregateVotesRequest): Promise<QueryAggregateVotesResponse> {
      return queryService.aggregateVotes(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};