import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query";
/** Service defines the RPC service */
export interface Service {
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
export declare class QueryClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    getNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    getSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
    getLatestBlock(request?: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    getBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(request?: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
};
