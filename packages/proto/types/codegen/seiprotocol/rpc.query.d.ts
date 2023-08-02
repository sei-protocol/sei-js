import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const createRPCQueryClient: ({ rpcEndpoint }: {
    rpcEndpoint: string | HttpEndpoint;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: {
                accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
            };
        };
        authz: {
            v1beta1: {
                grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
            };
        };
        bank: {
            v1beta1: {
                balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
            };
        };
        distribution: {
            v1beta1: {
                params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
            };
        };
        gov: {
            v1beta1: {
                proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
            };
        };
        staking: {
            v1beta1: {
                validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
            };
        };
        tx: {
            v1beta1: {
                simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
            };
        };
        upgrade: {
            v1beta1: {
                currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
            };
        };
    };
    seiprotocol: {
        seichain: {
            dex: {
                params(request?: import("./seichain/dex/query").QueryParamsRequest): Promise<import("./seichain/dex/query").QueryParamsResponse>;
                longBook(request: import("./seichain/dex/query").QueryGetLongBookRequest): Promise<import("./seichain/dex/query").QueryGetLongBookResponse>;
                longBookAll(request: import("./seichain/dex/query").QueryAllLongBookRequest): Promise<import("./seichain/dex/query").QueryAllLongBookResponse>;
                shortBook(request: import("./seichain/dex/query").QueryGetShortBookRequest): Promise<import("./seichain/dex/query").QueryGetShortBookResponse>;
                shortBookAll(request: import("./seichain/dex/query").QueryAllShortBookRequest): Promise<import("./seichain/dex/query").QueryAllShortBookResponse>;
                getPrice(request: import("./seichain/dex/query").QueryGetPriceRequest): Promise<import("./seichain/dex/query").QueryGetPriceResponse>;
                getLatestPrice(request: import("./seichain/dex/query").QueryGetLatestPriceRequest): Promise<import("./seichain/dex/query").QueryGetLatestPriceResponse>;
                getPrices(request: import("./seichain/dex/query").QueryGetPricesRequest): Promise<import("./seichain/dex/query").QueryGetPricesResponse>;
                getTwaps(request: import("./seichain/dex/query").QueryGetTwapsRequest): Promise<import("./seichain/dex/query").QueryGetTwapsResponse>;
                assetMetadata(request: import("./seichain/dex/query").QueryAssetMetadataRequest): Promise<import("./seichain/dex/query").QueryAssetMetadataResponse>;
                assetList(request?: import("./seichain/dex/query").QueryAssetListRequest): Promise<import("./seichain/dex/query").QueryAssetListResponse>;
                getRegisteredPairs(request: import("./seichain/dex/query").QueryRegisteredPairsRequest): Promise<import("./seichain/dex/query").QueryRegisteredPairsResponse>;
                getRegisteredContract(request: import("./seichain/dex/query").QueryRegisteredContractRequest): Promise<import("./seichain/dex/query").QueryRegisteredContractResponse>;
                getOrders(request: import("./seichain/dex/query").QueryGetOrdersRequest): Promise<import("./seichain/dex/query").QueryGetOrdersResponse>;
                getOrder(request: import("./seichain/dex/query").QueryGetOrderByIDRequest): Promise<import("./seichain/dex/query").QueryGetOrderByIDResponse>;
                getHistoricalPrices(request: import("./seichain/dex/query").QueryGetHistoricalPricesRequest): Promise<import("./seichain/dex/query").QueryGetHistoricalPricesResponse>;
                getMarketSummary(request: import("./seichain/dex/query").QueryGetMarketSummaryRequest): Promise<import("./seichain/dex/query").QueryGetMarketSummaryResponse>;
                getOrderSimulation(request: import("./seichain/dex/query").QueryOrderSimulationRequest): Promise<import("./seichain/dex/query").QueryOrderSimulationResponse>;
                getMatchResult(request: import("./seichain/dex/query").QueryGetMatchResultRequest): Promise<import("./seichain/dex/query").QueryGetMatchResultResponse>;
                getOrderCount(request: import("./seichain/dex/query").QueryGetOrderCountRequest): Promise<import("./seichain/dex/query").QueryGetOrderCountResponse>;
            };
            epoch: {
                epoch(request?: import("./seichain/epoch/query").QueryEpochRequest): Promise<import("./seichain/epoch/query").QueryEpochResponse>;
                params(request?: import("./seichain/epoch/query").QueryParamsRequest): Promise<import("./seichain/epoch/query").QueryParamsResponse>;
            };
            mint: {
                params(request?: import("./seichain/mint/v1beta1/query").QueryParamsRequest): Promise<import("./seichain/mint/v1beta1/query").QueryParamsResponse>;
                minter(request?: import("./seichain/mint/v1beta1/query").QueryMinterRequest): Promise<import("./seichain/mint/v1beta1/query").QueryMinterResponse>;
            };
            oracle: {
                exchangeRate(request: import("./seichain/oracle/query").QueryExchangeRateRequest): Promise<import("./seichain/oracle/query").QueryExchangeRateResponse>;
                exchangeRates(request?: import("./seichain/oracle/query").QueryExchangeRatesRequest): Promise<import("./seichain/oracle/query").QueryExchangeRatesResponse>;
                actives(request?: import("./seichain/oracle/query").QueryActivesRequest): Promise<import("./seichain/oracle/query").QueryActivesResponse>;
                voteTargets(request?: import("./seichain/oracle/query").QueryVoteTargetsRequest): Promise<import("./seichain/oracle/query").QueryVoteTargetsResponse>;
                priceSnapshotHistory(request?: import("./seichain/oracle/query").QueryPriceSnapshotHistoryRequest): Promise<import("./seichain/oracle/query").QueryPriceSnapshotHistoryResponse>;
                twaps(request: import("./seichain/oracle/query").QueryTwapsRequest): Promise<import("./seichain/oracle/query").QueryTwapsResponse>;
                feederDelegation(request: import("./seichain/oracle/query").QueryFeederDelegationRequest): Promise<import("./seichain/oracle/query").QueryFeederDelegationResponse>;
                votePenaltyCounter(request: import("./seichain/oracle/query").QueryVotePenaltyCounterRequest): Promise<import("./seichain/oracle/query").QueryVotePenaltyCounterResponse>;
                slashWindow(request?: import("./seichain/oracle/query").QuerySlashWindowRequest): Promise<import("./seichain/oracle/query").QuerySlashWindowResponse>;
                params(request?: import("./seichain/oracle/query").QueryParamsRequest): Promise<import("./seichain/oracle/query").QueryParamsResponse>;
            };
            tokenfactory: {
                params(request?: import("./seichain/tokenfactory/query").QueryParamsRequest): Promise<import("./seichain/tokenfactory/query").QueryParamsResponse>;
                denomAuthorityMetadata(request: import("./seichain/tokenfactory/query").QueryDenomAuthorityMetadataRequest): Promise<import("./seichain/tokenfactory/query").QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: import("./seichain/tokenfactory/query").QueryDenomsFromCreatorRequest): Promise<import("./seichain/tokenfactory/query").QueryDenomsFromCreatorResponse>;
            };
        };
    };
}>;
