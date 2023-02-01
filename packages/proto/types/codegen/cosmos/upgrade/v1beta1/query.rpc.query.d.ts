import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    currentPlan(request?: QueryCurrentPlanRequest): Promise<QueryCurrentPlanResponse>;
    appliedPlan(request: QueryAppliedPlanRequest): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(request: QueryModuleVersionsRequest): Promise<QueryModuleVersionsResponse>;
    authority(request?: QueryAuthorityRequest): Promise<QueryAuthorityResponse>;
};
