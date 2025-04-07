import * as fm from "../../../fetch";

import type {
	QueryAppliedPlanRequest,
	QueryAppliedPlanResponse,
	QueryCurrentPlanRequest,
	QueryCurrentPlanResponse,
	QueryModuleVersionsRequest,
	QueryModuleVersionsResponse,
	QueryUpgradedConsensusStateRequest,
	QueryUpgradedConsensusStateResponse
} from "../../../../types/cosmos/upgrade/v1beta1/query.ts";

export class Query {
	static CurrentPlan(req: QueryCurrentPlanRequest, initReq?: fm.InitReq): Promise<QueryCurrentPlanResponse> {
		return fm.fetchReq<QueryCurrentPlanRequest, QueryCurrentPlanResponse>(`/cosmos/upgrade/v1beta1/current_plan?${fm.renderURLSearchParams(req, [])}`, {
			...initReq,
			method: "GET"
		});
	}
	static AppliedPlan(req: QueryAppliedPlanRequest, initReq?: fm.InitReq): Promise<QueryAppliedPlanResponse> {
		return fm.fetchReq<QueryAppliedPlanRequest, QueryAppliedPlanResponse>(
			`/cosmos/upgrade/v1beta1/applied_plan/${req["name"]}?${fm.renderURLSearchParams(req, ["name"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static UpgradedConsensusState(req: QueryUpgradedConsensusStateRequest, initReq?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse> {
		return fm.fetchReq<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>(
			`/cosmos/upgrade/v1beta1/upgraded_consensus_state/${req["last_height"]}?${fm.renderURLSearchParams(req, ["last_height"])}`,
			{ ...initReq, method: "GET" }
		);
	}
	static ModuleVersions(req: QueryModuleVersionsRequest, initReq?: fm.InitReq): Promise<QueryModuleVersionsResponse> {
		return fm.fetchReq<QueryModuleVersionsRequest, QueryModuleVersionsResponse>(
			`/cosmos/upgrade/v1beta1/module_versions?${fm.renderURLSearchParams(req, [])}`,
			{ ...initReq, method: "GET" }
		);
	}
}
