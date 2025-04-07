import * as fm from "../fetch";

import type {
	QueryActivesRequest,
	QueryActivesResponse,
	QueryExchangeRateRequest,
	QueryExchangeRateResponse,
	QueryExchangeRatesRequest,
	QueryExchangeRatesResponse,
	QueryFeederDelegationRequest,
	QueryFeederDelegationResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryPriceSnapshotHistoryRequest,
	QueryPriceSnapshotHistoryResponse,
	QuerySlashWindowRequest,
	QuerySlashWindowResponse,
	QueryTwapsRequest,
	QueryTwapsResponse,
	QueryVotePenaltyCounterRequest,
	QueryVotePenaltyCounterResponse,
	QueryVoteTargetsRequest,
	QueryVoteTargetsResponse
} from "../../types/oracle/query.ts";

export class Query {
	static ExchangeRate(req: QueryExchangeRateRequest, initReq?: fm.InitReq): Promise<QueryExchangeRateResponse> {
		return fm.fetchReq<QueryExchangeRateRequest, QueryExchangeRateResponse>(
			`/sei-protocol/sei-chain/oracle/denoms/${req["denom"]}/exchange_rate?${fm.renderURLSearchParams(req, ["denom"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static ExchangeRates(req: QueryExchangeRatesRequest, initReq?: fm.InitReq): Promise<QueryExchangeRatesResponse> {
		return fm.fetchReq<QueryExchangeRatesRequest, QueryExchangeRatesResponse>(
			`/sei-protocol/sei-chain/oracle/denoms/exchange_rates?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static Actives(req: QueryActivesRequest, initReq?: fm.InitReq): Promise<QueryActivesResponse> {
		return fm.fetchReq<QueryActivesRequest, QueryActivesResponse>(`/sei-protocol/sei-chain/oracle/denoms/actives?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static VoteTargets(req: QueryVoteTargetsRequest, initReq?: fm.InitReq): Promise<QueryVoteTargetsResponse> {
		return fm.fetchReq<QueryVoteTargetsRequest, QueryVoteTargetsResponse>(
			`/sei-protocol/sei-chain/oracle/denoms/vote_targets?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static PriceSnapshotHistory(req: QueryPriceSnapshotHistoryRequest, initReq?: fm.InitReq): Promise<QueryPriceSnapshotHistoryResponse> {
		return fm.fetchReq<QueryPriceSnapshotHistoryRequest, QueryPriceSnapshotHistoryResponse>(
			`/sei-protocol/sei-chain/oracle/denoms/price_snapshot_history?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static Twaps(req: QueryTwapsRequest, initReq?: fm.InitReq): Promise<QueryTwapsResponse> {
		return fm.fetchReq<QueryTwapsRequest, QueryTwapsResponse>(
			`/sei-protocol/sei-chain/oracle/denoms/twaps/${req["lookback_seconds"]}?${fm.renderURLSearchParams(req, ["lookback_seconds"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static FeederDelegation(req: QueryFeederDelegationRequest, initReq?: fm.InitReq): Promise<QueryFeederDelegationResponse> {
		return fm.fetchReq<QueryFeederDelegationRequest, QueryFeederDelegationResponse>(
			`/sei-protocol/sei-chain/oracle/validators/${req["validator_addr"]}/feeder?${fm.renderURLSearchParams(req, ["validator_addr"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static VotePenaltyCounter(req: QueryVotePenaltyCounterRequest, initReq?: fm.InitReq): Promise<QueryVotePenaltyCounterResponse> {
		return fm.fetchReq<QueryVotePenaltyCounterRequest, QueryVotePenaltyCounterResponse>(
			`/sei-protocol/sei-chain/oracle/validators/${req["validator_addr"]}/vote_penalty_counter?${fm.renderURLSearchParams(req, ["validator_addr"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static SlashWindow(req: QuerySlashWindowRequest, initReq?: fm.InitReq): Promise<QuerySlashWindowResponse> {
		return fm.fetchReq<QuerySlashWindowRequest, QuerySlashWindowResponse>(`/sei-protocol/sei-chain/oracle/slash_window?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/sei-protocol/sei-chain/oracle/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
}
