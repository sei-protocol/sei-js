import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryRecordedTransactionDataRequest, QueryRecordedTransactionDataResponse, QueryStateRootRequest, QueryStateRootResponse, QuerySenderRequest, QuerySenderResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    recordedTransactionData(request: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponse>;
    stateRoot(request: QueryStateRootRequest): Promise<QueryStateRootResponse>;
    sender(request: QuerySenderRequest): Promise<QuerySenderResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    recordedTransactionData(request: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponse>;
    stateRoot(request: QueryStateRootRequest): Promise<QueryStateRootResponse>;
    sender(request: QuerySenderRequest): Promise<QuerySenderResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    recordedTransactionData(request: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponse>;
    stateRoot(request: QueryStateRootRequest): Promise<QueryStateRootResponse>;
    sender(request: QuerySenderRequest): Promise<QuerySenderResponse>;
};
