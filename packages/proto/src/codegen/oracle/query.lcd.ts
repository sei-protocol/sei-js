import { LCDClient } from '@cosmology/lcd';
import {
	QueryExchangeRateRequest,
	QueryExchangeRateResponseSDKType,
	QueryExchangeRatesRequest,
	QueryExchangeRatesResponseSDKType,
	QueryActivesRequest,
	QueryActivesResponseSDKType,
	QueryVoteTargetsRequest,
	QueryVoteTargetsResponseSDKType,
	QueryPriceSnapshotHistoryRequest,
	QueryPriceSnapshotHistoryResponseSDKType,
	QueryTwapsRequest,
	QueryTwapsResponseSDKType,
	QueryFeederDelegationRequest,
	QueryFeederDelegationResponseSDKType,
	QueryVotePenaltyCounterRequest,
	QueryVotePenaltyCounterResponseSDKType,
	QuerySlashWindowRequest,
	QuerySlashWindowResponseSDKType,
	QueryParamsRequest,
	QueryParamsResponseSDKType
} from './query';
export class LCDQueryClient {
	req: LCDClient;
	constructor({ requestClient }: { requestClient: LCDClient }) {
		this.req = requestClient;
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
	/* ExchangeRate returns exchange rate of a denom */
	async exchangeRate(params: QueryExchangeRateRequest): Promise<QueryExchangeRateResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/denoms/${params.denom}/exchange_rate`;
		return await this.req.get<QueryExchangeRateResponseSDKType>(endpoint);
	}
	/* ExchangeRates returns exchange rates of all denoms */
	async exchangeRates(_params: QueryExchangeRatesRequest = {}): Promise<QueryExchangeRatesResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/denoms/exchange_rates`;
		return await this.req.get<QueryExchangeRatesResponseSDKType>(endpoint);
	}
	/* Actives returns all active denoms */
	async actives(_params: QueryActivesRequest = {}): Promise<QueryActivesResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/denoms/actives`;
		return await this.req.get<QueryActivesResponseSDKType>(endpoint);
	}
	/* VoteTargets returns all vote target denoms */
	async voteTargets(_params: QueryVoteTargetsRequest = {}): Promise<QueryVoteTargetsResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/denoms/vote_targets`;
		return await this.req.get<QueryVoteTargetsResponseSDKType>(endpoint);
	}
	/* PriceSnapshotHistory returns the history of price snapshots for all assets */
	async priceSnapshotHistory(_params: QueryPriceSnapshotHistoryRequest = {}): Promise<QueryPriceSnapshotHistoryResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/denoms/price_snapshot_history`;
		return await this.req.get<QueryPriceSnapshotHistoryResponseSDKType>(endpoint);
	}
	/* Twaps */
	async twaps(params: QueryTwapsRequest): Promise<QueryTwapsResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/denoms/twaps/${params.lookbackSeconds}`;
		return await this.req.get<QueryTwapsResponseSDKType>(endpoint);
	}
	/* FeederDelegation returns feeder delegation of a validator */
	async feederDelegation(params: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/validators/${params.validatorAddr}/feeder`;
		return await this.req.get<QueryFeederDelegationResponseSDKType>(endpoint);
	}
	/* MissCounter returns oracle miss counter of a validator */
	async votePenaltyCounter(params: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/validators/${params.validatorAddr}/vote_penalty_counter`;
		return await this.req.get<QueryVotePenaltyCounterResponseSDKType>(endpoint);
	}
	/* SlashWindow returns slash window information */
	async slashWindow(_params: QuerySlashWindowRequest = {}): Promise<QuerySlashWindowResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/slash_window`;
		return await this.req.get<QuerySlashWindowResponseSDKType>(endpoint);
	}
	/* Params queries all parameters. */
	async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
		const endpoint = `sei-protocol/sei-chain/oracle/params`;
		return await this.req.get<QueryParamsResponseSDKType>(endpoint);
	}
}
