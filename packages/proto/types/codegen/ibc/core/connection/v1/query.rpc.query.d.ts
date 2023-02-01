import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    connections(request?: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    clientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    connectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
};
