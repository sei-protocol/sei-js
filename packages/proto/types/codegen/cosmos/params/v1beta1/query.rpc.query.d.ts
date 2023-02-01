import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    subspaces(request?: QuerySubspacesRequest): Promise<QuerySubspacesResponse>;
};
