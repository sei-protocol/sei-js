import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMinterRequest, QueryMinterResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** EpochProvisions current minting epoch provisions value. */
    minter(request?: QueryMinterRequest): Promise<QueryMinterResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    minter(request?: QueryMinterRequest): Promise<QueryMinterResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    minter(request?: QueryMinterRequest): Promise<QueryMinterResponse>;
};
