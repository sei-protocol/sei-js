import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryEpochRequest, QueryEpochResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Query the epoch in the chain */
    epoch(request?: QueryEpochRequest): Promise<QueryEpochResponse>;
    /** Parameters queries the parameters of the module. */
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
