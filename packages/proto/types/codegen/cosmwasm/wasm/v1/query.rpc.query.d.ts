import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
    code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
};
