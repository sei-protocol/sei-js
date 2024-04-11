import { seiprotocol } from '@sei-js/proto';

import {
	AddressBytesToStringRequest,
	AddressBytesToStringResponseSDKType,
	AddressStringToBytesRequest,
	AddressStringToBytesResponseSDKType,
	Bech32PrefixRequest,
	Bech32PrefixResponseSDKType,
	QueryAccountRequest,
	QueryAccountResponseSDKType,
	QueryAccountsRequest,
	QueryAccountsResponseSDKType,
	QueryModuleAccountsRequest,
	QueryModuleAccountsResponseSDKType,
	QueryParamsRequest,
	QueryParamsResponseSDKType
} from '@sei-js/proto/dist/types/codegen/cosmos/auth/v1beta1/query';

import {
	QueryBalanceRequest,
	QueryBalanceResponseSDKType,
	QueryAllBalancesRequest,
	QueryAllBalancesResponseSDKType,
	QuerySpendableBalancesRequest,
	QuerySpendableBalancesResponseSDKType,
	QueryTotalSupplyRequest,
	QueryTotalSupplyResponseSDKType,
	QuerySupplyOfRequest,
	QuerySupplyOfResponseSDKType,
	QueryParamsRequest as QueryBankParamsRequest,
	QueryParamsResponseSDKType as QueryBankParamsResponseSDKType,
	QueryDenomMetadataRequest,
	QueryDenomMetadataResponseSDKType,
	QueryDenomsMetadataRequest,
	QueryDenomsMetadataResponseSDKType,
	QueryDenomOwnersRequest,
	QueryDenomOwnersResponseSDKType
} from '@sei-js/proto/dist/types/codegen/cosmos/bank/v1beta1/query';

import {
	QueryParamsRequest as QueryDistributionParamsRequest,
	QueryParamsResponseSDKType as QueryDistributionParamsResponseSDKType,
	QueryValidatorOutstandingRewardsRequest,
	QueryValidatorOutstandingRewardsResponseSDKType,
	QueryValidatorCommissionRequest,
	QueryValidatorCommissionResponseSDKType,
	QueryValidatorSlashesRequest,
	QueryValidatorSlashesResponseSDKType,
	QueryDelegationRewardsRequest,
	QueryDelegationRewardsResponseSDKType,
	QueryDelegationTotalRewardsRequest,
	QueryDelegationTotalRewardsResponseSDKType,
	QueryDelegatorValidatorsRequest,
	QueryDelegatorValidatorsResponseSDKType,
	QueryDelegatorWithdrawAddressRequest,
	QueryDelegatorWithdrawAddressResponseSDKType,
	QueryCommunityPoolRequest,
	QueryCommunityPoolResponseSDKType
} from '@sei-js/proto/dist/types/codegen/cosmos/distribution/v1beta1/query';

import {
	QueryProposalRequest,
	QueryProposalResponseSDKType,
	QueryProposalsRequest,
	QueryProposalsResponseSDKType,
	QueryVoteRequest,
	QueryVoteResponseSDKType,
	QueryVotesRequest,
	QueryVotesResponseSDKType,
	QueryParamsRequest as QueryGovParamsRequest,
	QueryParamsResponseSDKType as QueryGovParamsResponseSDKType,
	QueryDepositRequest,
	QueryDepositResponseSDKType,
	QueryDepositsRequest,
	QueryDepositsResponseSDKType,
	QueryTallyResultRequest,
	QueryTallyResultResponseSDKType
} from '@sei-js/proto/dist/types/codegen/cosmos/gov/v1beta1/query';

import {
	QueryValidatorsRequest,
	QueryValidatorsResponseSDKType,
	QueryValidatorRequest,
	QueryValidatorResponseSDKType,
	QueryValidatorDelegationsRequest,
	QueryValidatorDelegationsResponseSDKType,
	QueryValidatorUnbondingDelegationsRequest,
	QueryValidatorUnbondingDelegationsResponseSDKType,
	QueryDelegationRequest,
	QueryDelegationResponseSDKType,
	QueryUnbondingDelegationRequest,
	QueryUnbondingDelegationResponseSDKType,
	QueryDelegatorDelegationsRequest,
	QueryDelegatorDelegationsResponseSDKType,
	QueryDelegatorUnbondingDelegationsRequest,
	QueryDelegatorUnbondingDelegationsResponseSDKType,
	QueryRedelegationsRequest,
	QueryRedelegationsResponseSDKType,
	QueryDelegatorValidatorsRequest as QueryStakingDelegatorValidatorsRequest,
	QueryDelegatorValidatorsResponseSDKType as QueryStakingDelegatorValidatorsResponseSDKTyp,
	QueryDelegatorValidatorRequest,
	QueryDelegatorValidatorResponseSDKType,
	QueryHistoricalInfoRequest,
	QueryHistoricalInfoResponseSDKType,
	QueryPoolRequest,
	QueryPoolResponseSDKType,
	QueryParamsRequest as QueryStakingParamsRequest,
	QueryParamsResponseSDKType as QueryStakingParamsResponseSDKType
} from '@sei-js/proto/dist/types/codegen/cosmos/staking/v1beta1/query';

import {
	GetTxRequest,
	GetTxResponseSDKType,
	GetTxsEventRequest,
	GetTxsEventResponseSDKType,
	GetBlockWithTxsRequest,
	GetBlockWithTxsResponseSDKType
} from '@sei-js/proto/dist/types/codegen/cosmos/tx/v1beta1/service';

import {
	QueryCurrentPlanRequest,
	QueryCurrentPlanResponseSDKType,
	QueryAppliedPlanRequest,
	QueryAppliedPlanResponseSDKType,
	QueryUpgradedConsensusStateRequest,
	QueryUpgradedConsensusStateResponseSDKType,
	QueryModuleVersionsRequest,
	QueryModuleVersionsResponseSDKType,
	QueryAuthorityRequest,
	QueryAuthorityResponseSDKType
} from '@sei-js/proto/dist/types/codegen/cosmos/upgrade/v1beta1/query';

import {
	QueryParamsRequest as QueryDexParamsRequest,
	QueryParamsResponseSDKType as QueryDexParamsResponseSDKType,
	QueryGetLongBookRequest,
	QueryGetLongBookResponseSDKType,
	QueryAllLongBookRequest,
	QueryAllLongBookResponseSDKType,
	QueryGetShortBookRequest,
	QueryGetShortBookResponseSDKType,
	QueryAllShortBookRequest,
	QueryAllShortBookResponseSDKType,
	QueryGetPriceRequest,
	QueryGetPriceResponseSDKType,
	QueryGetLatestPriceRequest,
	QueryGetLatestPriceResponseSDKType,
	QueryGetPricesRequest,
	QueryGetPricesResponseSDKType,
	QueryGetTwapsRequest,
	QueryGetTwapsResponseSDKType,
	QueryAssetMetadataRequest,
	QueryAssetMetadataResponseSDKType,
	QueryAssetListRequest,
	QueryAssetListResponseSDKType,
	QueryRegisteredPairsRequest,
	QueryRegisteredPairsResponseSDKType,
	QueryRegisteredContractRequest,
	QueryRegisteredContractResponseSDKType,
	QueryGetOrdersRequest,
	QueryGetOrdersResponseSDKType,
	QueryGetOrderByIDRequest,
	QueryGetOrderByIDResponseSDKType,
	QueryGetHistoricalPricesRequest,
	QueryGetHistoricalPricesResponseSDKType,
	QueryGetMarketSummaryRequest,
	QueryGetMarketSummaryResponseSDKType
} from '@sei-js/proto/dist/types/codegen/dex/query';

import {
	QueryParamsRequest as QueryMintParamsRequest,
	QueryParamsResponseSDKType as QueryMintParamsResponseSDKType,
	QueryMinterRequest,
	QueryMinterResponseSDKType
} from '@sei-js/proto/dist/types/codegen/mint/v1beta1/query';

import {
	QueryParamsRequest as QueryTokenFactoryParamsRequest,
	QueryParamsResponseSDKType as QueryTokenFactoryParamsResponseSDKType,
	QueryDenomAuthorityMetadataRequest,
	QueryDenomAuthorityMetadataResponseSDKType,
	QueryDenomsFromCreatorRequest,
	QueryDenomsFromCreatorResponseSDKType
} from '@sei-js/proto/dist/types/codegen/tokenfactory/query';

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
	QueryParamsRequest as QueryOracleParamsRequest,
	QueryParamsResponseSDKType as QueryOracleParamsResponseSDKType
} from '@sei-js/proto/dist/types/codegen/oracle/query';

import {
	QueryEpochRequest,
	QueryEpochResponseSDKType,
	QueryParamsRequest as QueryEpochParamsRequest,
	QueryParamsResponseSDKType as QueryEpochParamsResponseSDKType
} from '@sei-js/proto/dist/types/codegen/epoch/query';

/**
 * A typescript interface for the default Cosmos query client for use in the LCD client.
 * @category Interfaces
 */
export interface CosmosQueryClients {
	auth: {
		v1beta1: {
			accounts: (params: QueryAccountsRequest) => Promise<QueryAccountsResponseSDKType>;
			account: (params: QueryAccountRequest) => Promise<QueryAccountResponseSDKType>;
			params: (params: QueryParamsRequest) => Promise<QueryParamsResponseSDKType>;
			moduleAccounts: (params: QueryModuleAccountsRequest) => Promise<QueryModuleAccountsResponseSDKType>;
			bech32Prefix: (params: Bech32PrefixRequest) => Promise<Bech32PrefixResponseSDKType>;
			addressBytesToString: (params: AddressBytesToStringRequest) => Promise<AddressBytesToStringResponseSDKType>;
			addressStringToBytes: (params: AddressStringToBytesRequest) => Promise<AddressStringToBytesResponseSDKType>;
		};
	};
	bank: {
		v1beta1: {
			balance: (params: QueryBalanceRequest) => Promise<QueryBalanceResponseSDKType>;
			allBalances: (params: QueryAllBalancesRequest) => Promise<QueryAllBalancesResponseSDKType>;
			spendableBalances: (params: QuerySpendableBalancesRequest) => Promise<QuerySpendableBalancesResponseSDKType>;
			totalSupply: (params: QueryTotalSupplyRequest) => Promise<QueryTotalSupplyResponseSDKType>;
			supplyOf: (params: QuerySupplyOfRequest) => Promise<QuerySupplyOfResponseSDKType>;
			params: (params: QueryBankParamsRequest) => Promise<QueryBankParamsResponseSDKType>;
			denomMetadata: (params: QueryDenomMetadataRequest) => Promise<QueryDenomMetadataResponseSDKType>;
			denomsMetadata: (params: QueryDenomsMetadataRequest) => Promise<QueryDenomsMetadataResponseSDKType>;
			denomOwners: (params: QueryDenomOwnersRequest) => Promise<QueryDenomOwnersResponseSDKType>;
		};
	};
	distribution: {
		v1beta1: {
			params: (params: QueryDistributionParamsRequest) => Promise<QueryDistributionParamsResponseSDKType>;
			validatorOutstandingRewards: (params: QueryValidatorOutstandingRewardsRequest) => Promise<QueryValidatorOutstandingRewardsResponseSDKType>;
			validatorCommission: (params: QueryValidatorCommissionRequest) => Promise<QueryValidatorCommissionResponseSDKType>;
			validatorSlashes: (params: QueryValidatorSlashesRequest) => Promise<QueryValidatorSlashesResponseSDKType>;
			delegationRewards: (params: QueryDelegationRewardsRequest) => Promise<QueryDelegationRewardsResponseSDKType>;
			delegationTotalRewards: (params: QueryDelegationTotalRewardsRequest) => Promise<QueryDelegationTotalRewardsResponseSDKType>;
			delegatorValidators: (params: QueryDelegatorValidatorsRequest) => Promise<QueryDelegatorValidatorsResponseSDKType>;
			delegatorWithdrawAddress: (params: QueryDelegatorWithdrawAddressRequest) => Promise<QueryDelegatorWithdrawAddressResponseSDKType>;
			communityPool: (params: QueryCommunityPoolRequest) => Promise<QueryCommunityPoolResponseSDKType>;
		};
	};
	gov: {
		v1beta1: {
			proposal: (params: QueryProposalRequest) => Promise<QueryProposalResponseSDKType>;
			proposals: (params: QueryProposalsRequest) => Promise<QueryProposalsResponseSDKType>;
			vote: (params: QueryVoteRequest) => Promise<QueryVoteResponseSDKType>;
			votes: (params: QueryVotesRequest) => Promise<QueryVotesResponseSDKType>;
			params: (params: QueryGovParamsRequest) => Promise<QueryGovParamsResponseSDKType>;
			deposit: (params: QueryDepositRequest) => Promise<QueryDepositResponseSDKType>;
			deposits: (params: QueryDepositsRequest) => Promise<QueryDepositsResponseSDKType>;
			tallyResult: (params: QueryTallyResultRequest) => Promise<QueryTallyResultResponseSDKType>;
		};
	};
	staking: {
		v1beta1: {
			validators: (params: QueryValidatorsRequest) => Promise<QueryValidatorsResponseSDKType>;
			validator: (params: QueryValidatorRequest) => Promise<QueryValidatorResponseSDKType>;
			validatorDelegations: (params: QueryValidatorDelegationsRequest) => Promise<QueryValidatorDelegationsResponseSDKType>;
			validatorUnbondingDelegations: (params: QueryValidatorUnbondingDelegationsRequest) => Promise<QueryValidatorUnbondingDelegationsResponseSDKType>;
			delegation: (params: QueryDelegationRequest) => Promise<QueryDelegationResponseSDKType>;
			unbondingDelegation: (params: QueryUnbondingDelegationRequest) => Promise<QueryUnbondingDelegationResponseSDKType>;
			delegatorDelegations: (params: QueryDelegatorDelegationsRequest) => Promise<QueryDelegatorDelegationsResponseSDKType>;
			delegatorUnbondingDelegations: (params: QueryDelegatorUnbondingDelegationsRequest) => Promise<QueryDelegatorUnbondingDelegationsResponseSDKType>;
			redelegations: (params: QueryRedelegationsRequest) => Promise<QueryRedelegationsResponseSDKType>;
			delegatorValidators: (params: QueryStakingDelegatorValidatorsRequest) => Promise<QueryStakingDelegatorValidatorsResponseSDKTyp>;
			delegatorValidator: (params: QueryDelegatorValidatorRequest) => Promise<QueryDelegatorValidatorResponseSDKType>;
			historicalInfo: (params: QueryHistoricalInfoRequest) => Promise<QueryHistoricalInfoResponseSDKType>;
			pool: (params: QueryPoolRequest) => Promise<QueryPoolResponseSDKType>;
			params: (params: QueryStakingParamsRequest) => Promise<QueryStakingParamsResponseSDKType>;
		};
	};
	tx: {
		v1beta1: {
			getTx: (params: GetTxRequest) => Promise<GetTxResponseSDKType>;
			getTxsEvent: (params: GetTxsEventRequest) => Promise<GetTxsEventResponseSDKType>;
			getBlockWithTxs: (params: GetBlockWithTxsRequest) => Promise<GetBlockWithTxsResponseSDKType>;
		};
	};
	upgrade: {
		v1beta1: {
			currentPlan: (params: QueryCurrentPlanRequest) => Promise<QueryCurrentPlanResponseSDKType>;
			appliedPlan: (params: QueryAppliedPlanRequest) => Promise<QueryAppliedPlanResponseSDKType>;
			upgradedConsensusState: (params: QueryUpgradedConsensusStateRequest) => Promise<QueryUpgradedConsensusStateResponseSDKType>;
			moduleVersions: (params: QueryModuleVersionsRequest) => Promise<QueryModuleVersionsResponseSDKType>;
			authority: (params: QueryAuthorityRequest) => Promise<QueryAuthorityResponseSDKType>;
		};
	};
}

/**
 * A typescript interface for the Seichain query client for use in the LCD client.
 * @category Interfaces
 */
export interface SeichainQueryClients {
	dex: {
		params(params?: QueryDexParamsRequest): Promise<QueryDexParamsResponseSDKType>;
		longBook(params: QueryGetLongBookRequest): Promise<QueryGetLongBookResponseSDKType>;
		longBookAll(params: QueryAllLongBookRequest): Promise<QueryAllLongBookResponseSDKType>;
		shortBook(params: QueryGetShortBookRequest): Promise<QueryGetShortBookResponseSDKType>;
		shortBookAll(params: QueryAllShortBookRequest): Promise<QueryAllShortBookResponseSDKType>;
		getPrice(params: QueryGetPriceRequest): Promise<QueryGetPriceResponseSDKType>;
		getLatestPrice(params: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponseSDKType>;
		getPrices(params: QueryGetPricesRequest): Promise<QueryGetPricesResponseSDKType>;
		getTwaps(params: QueryGetTwapsRequest): Promise<QueryGetTwapsResponseSDKType>;
		assetMetadata(params: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponseSDKType>;
		assetList(_params?: QueryAssetListRequest): Promise<QueryAssetListResponseSDKType>;
		getRegisteredPairs(params: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponseSDKType>;
		getRegisteredContract(params: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponseSDKType>;
		getOrders(params: QueryGetOrdersRequest): Promise<QueryGetOrdersResponseSDKType>;
		getOrder(params: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponseSDKType>;
		getHistoricalPrices(params: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponseSDKType>;
		getMarketSummary(params: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponseSDKType>;
	};
	epoch: {
		epoch(params?: QueryEpochRequest): Promise<QueryEpochResponseSDKType>;
		params(params?: QueryEpochParamsRequest): Promise<QueryEpochParamsResponseSDKType>;
	};
	mint: {
		params(params?: QueryMintParamsRequest): Promise<QueryMintParamsResponseSDKType>;
		minter(params?: QueryMinterRequest): Promise<QueryMinterResponseSDKType>;
	};
	oracle: {
		params(params?: QueryOracleParamsRequest): Promise<QueryOracleParamsResponseSDKType>;
		exchangeRate(params: QueryExchangeRateRequest): Promise<QueryExchangeRateResponseSDKType>;
		exchangeRates(params?: QueryExchangeRatesRequest): Promise<QueryExchangeRatesResponseSDKType>;
		actives(params?: QueryActivesRequest): Promise<QueryActivesResponseSDKType>;
		voteTargets(params?: QueryVoteTargetsRequest): Promise<QueryVoteTargetsResponseSDKType>;
		priceSnapshotHistory(params?: QueryPriceSnapshotHistoryRequest): Promise<QueryPriceSnapshotHistoryResponseSDKType>;
		twaps(params: QueryTwapsRequest): Promise<QueryTwapsResponseSDKType>;
		feederDelegation(params: QueryFeederDelegationRequest): Promise<QueryFeederDelegationResponseSDKType>;
		votePenaltyCounter(params: QueryVotePenaltyCounterRequest): Promise<QueryVotePenaltyCounterResponseSDKType>;
		slashWindow(params?: QuerySlashWindowRequest): Promise<QuerySlashWindowResponseSDKType>;
	};
	tokenfactory: {
		params(params?: QueryTokenFactoryParamsRequest): Promise<QueryTokenFactoryParamsResponseSDKType>;
		denomAuthorityMetadata(params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType>;
		denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType>;
	};
}

/**
 * A typescript interface for the Sei query client for use in the LCD client.
 * @category Interfaces
 */
export interface SeiQueryClients {
	seichain: SeichainQueryClients;
}

/**
 * A typescript interface for the Sei query client returned from the `getQueryClient` function.
 * @category Interfaces
 */
export interface SeiLCDQueryClient {
	cosmos: CosmosQueryClients;
	seiprotocol: SeiQueryClients;
}

/**
 * Gets a client used to interact with the Sei chain.
 *
 * @example
 * ```tsx
 * import { getQueryClient } from '@sei-js/cosmjs';
 *
 * const queryClient = await getQueryClient(REST_URL);
 *
 * // Getting the market summary from the Sei dex module
 * const dexMarketSummary = await queryClient.seiprotocol.seichain.dex.getMarketSummary(params);
 *
 * // Query the bank balance of a given address
 * const balances = await queryClient.cosmos.bank.v1beta1.allBalances({ address });
 *
 * // Query a specific transaction hash
 * const txInfo = await queryClient.cosmos.tx.v1beta1.getTx({ hash });
 * ```
 *
 * @param restEndpoint The endpoint of the REST node used to interact to the Sei chain.
 * @returns An LCD client object that can be used to query the Sei chain.
 * @category Clients
 */
export const getQueryClient = async (restEndpoint: string) => {
	return (await seiprotocol.ClientFactory.createLCDClient({ restEndpoint })) as SeiLCDQueryClient;
};
