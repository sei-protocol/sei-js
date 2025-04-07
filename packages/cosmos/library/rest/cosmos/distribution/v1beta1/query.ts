import * as fm from "../../../fetch";

import type {
	QueryCommunityPoolRequest,
	QueryCommunityPoolResponse,
	QueryDelegationRewardsRequest,
	QueryDelegationRewardsResponse,
	QueryDelegationTotalRewardsRequest,
	QueryDelegationTotalRewardsResponse,
	QueryDelegatorValidatorsRequest,
	QueryDelegatorValidatorsResponse,
	QueryDelegatorWithdrawAddressRequest,
	QueryDelegatorWithdrawAddressResponse,
	QueryParamsRequest,
	QueryParamsResponse,
	QueryValidatorCommissionRequest,
	QueryValidatorCommissionResponse,
	QueryValidatorOutstandingRewardsRequest,
	QueryValidatorOutstandingRewardsResponse,
	QueryValidatorSlashesRequest,
	QueryValidatorSlashesResponse
} from "../../../../types/cosmos/distribution/v1beta1/query.ts";

export class Query {
	static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
		return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static ValidatorOutstandingRewards(req: QueryValidatorOutstandingRewardsRequest, initReq?: fm.InitReq): Promise<QueryValidatorOutstandingRewardsResponse> {
		return fm.fetchReq<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>(
			`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams(req, ["validator_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static ValidatorCommission(req: QueryValidatorCommissionRequest, initReq?: fm.InitReq): Promise<QueryValidatorCommissionResponse> {
		return fm.fetchReq<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>(
			`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/commission?${fm.renderURLSearchParams(req, ["validator_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static ValidatorSlashes(req: QueryValidatorSlashesRequest, initReq?: fm.InitReq): Promise<QueryValidatorSlashesResponse> {
		return fm.fetchReq<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>(
			`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/slashes?${fm.renderURLSearchParams(req, ["validator_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DelegationRewards(req: QueryDelegationRewardsRequest, initReq?: fm.InitReq): Promise<QueryDelegationRewardsResponse> {
		return fm.fetchReq<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>(
			`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/rewards/${req["validator_address"]}?${fm.renderURLSearchParams(req, ["delegator_address", "validator_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DelegationTotalRewards(req: QueryDelegationTotalRewardsRequest, initReq?: fm.InitReq): Promise<QueryDelegationTotalRewardsResponse> {
		return fm.fetchReq<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>(
			`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/rewards?${fm.renderURLSearchParams(req, ["delegator_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DelegatorValidators(req: QueryDelegatorValidatorsRequest, initReq?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse> {
		return fm.fetchReq<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>(
			`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/validators?${fm.renderURLSearchParams(req, ["delegator_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static DelegatorWithdrawAddress(req: QueryDelegatorWithdrawAddressRequest, initReq?: fm.InitReq): Promise<QueryDelegatorWithdrawAddressResponse> {
		return fm.fetchReq<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>(
			`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams(req, ["delegator_address"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static CommunityPool(req: QueryCommunityPoolRequest, initReq?: fm.InitReq): Promise<QueryCommunityPoolResponse> {
		return fm.fetchReq<QueryCommunityPoolRequest, QueryCommunityPoolResponse>(
			`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
}
