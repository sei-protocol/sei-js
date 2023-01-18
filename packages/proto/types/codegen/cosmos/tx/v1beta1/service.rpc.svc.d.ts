import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
/** Service defines the RPC service */
export interface Service {
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
export declare class QueryClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    simulate(request: SimulateRequest): Promise<SimulateResponse>;
    getTx(request: GetTxRequest): Promise<GetTxResponse>;
    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
};
