import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import {
	QueryExchangeRateRequest,
	QueryExchangeRateResponse,
	QueryExchangeRatesRequest,
	QueryExchangeRatesResponse,
	QueryActivesRequest,
	QueryActivesResponse,
	QueryVoteTargetsRequest,
	QueryVoteTargetsResponse,
	QueryPriceSnapshotHistoryRequest,
	QueryPriceSnapshotHistoryResponse,
	QueryTwapsRequest,
	QueryTwapsResponse,
	QueryFeederDelegationRequest,
	QueryFeederDelegationResponse,
	QueryVotePenaltyCounterRequest,
	QueryVotePenaltyCounterResponse,
	QuerySlashWindowRequest,
	QuerySlashWindowResponse,
	QueryParamsRequest,
	QueryParamsResponse
} from './query';
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
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
		this.exchangeRate = this.exchangeRate.bind(this);
		this.exchangeRates = this.exchangeRates.bind(this);
		this.actives = this.actives.bind(this);
		this.voteTargets = this.voteTargets.bind(this);
		this.priceSnapshotHistory = this.priceSnapshotHistory.bind(this);
		this.twaps = this.twaps.bind(this);
		this.feederDelegation = this.feederDelegation.bind(this);
		this.votePenaltyCounter = this.votePenaltyCounter.bind(this);
		this.slashWindow = this.slashWindow.bind(this);
		this.params = this.params.bind(this);
	}
	exchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
		const data = QueryExchangeRateRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'ExchangeRate', data);
		return promise.then((data) => QueryExchangeRateResponse.decode(new BinaryReader(data)));
	}
	exchangeRates(request: QueryExchangeRatesRequest = {}): Promise<QueryExchangeRatesResponse> {
		const data = QueryExchangeRatesRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'ExchangeRates', data);
		return promise.then((data) => QueryExchangeRatesResponse.decode(new BinaryReader(data)));
	}
	actives(request: QueryActivesRequest = {}): Promise<QueryActivesResponse> {
		const data = QueryActivesRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'Actives', data);
		return promise.then((data) => QueryActivesResponse.decode(new BinaryReader(data)));
	}
	voteTargets(request: QueryVoteTargetsRequest = {}): Promise<QueryVoteTargetsResponse> {
		const data = QueryVoteTargetsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'VoteTargets', data);
		return promise.then((data) => QueryVoteTargetsResponse.decode(new BinaryReader(data)));
	}
	priceSnapshotHistory(request: QueryPriceSnapshotHistoryRequest = {}): Promise<QueryPriceSnapshotHistoryResponse> {
		const data = QueryPriceSnapshotHistoryRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'PriceSnapshotHistory', data);
		return promise.then((data) => QueryPriceSnapshotHistoryResponse.decode(new BinaryReader(data)));
	}
	twaps(request: QueryTwapsRequest): Promise<QueryTwapsResponse> {
		const data = QueryTwapsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'Twaps', data);
		return promise.then((data) => QueryTwapsResponse.decode(new BinaryReader(data)));
	}
	feederDelegation(request: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponse> {
		const data = QueryFeederDelegationRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'FeederDelegation', data);
		return promise.then((data) => QueryFeederDelegationResponse.decode(new BinaryReader(data)));
	}
	votePenaltyCounter(request: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponse> {
		const data = QueryVotePenaltyCounterRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'VotePenaltyCounter', data);
		return promise.then((data) => QueryVotePenaltyCounterResponse.decode(new BinaryReader(data)));
	}
	slashWindow(request: QuerySlashWindowRequest = {}): Promise<QuerySlashWindowResponse> {
		const data = QuerySlashWindowRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'SlashWindow', data);
		return promise.then((data) => QuerySlashWindowResponse.decode(new BinaryReader(data)));
	}
	params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
		const data = QueryParamsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.oracle.Query', 'Params', data);
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
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
		slashWindow(request?: QuerySlashWindowRequest): Promise<QuerySlashWindowResponse> {
			return queryService.slashWindow(request);
		},
		params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
			return queryService.params(request);
		}
	};
};
