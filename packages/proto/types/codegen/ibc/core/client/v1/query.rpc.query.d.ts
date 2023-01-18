import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    clientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    clientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    consensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    consensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    clientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    clientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    upgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
};
