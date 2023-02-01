import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryConfigRequest, QueryConfigResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    config(request?: QueryConfigRequest): Promise<QueryConfigResponse>;
};
