import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEpochRequest, QueryEpochResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    epoch(request?: QueryEpochRequest): Promise<QueryEpochResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    epoch(request?: QueryEpochRequest): Promise<QueryEpochResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    epoch(request?: QueryEpochRequest): Promise<QueryEpochResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
};
