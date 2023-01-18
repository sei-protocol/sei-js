import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
