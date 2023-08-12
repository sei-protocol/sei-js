import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryEpochRequest, QueryEpochResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Query the epoch in the chain */
  epoch(request?: QueryEpochRequest): Promise<QueryEpochResponse>;
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epoch = this.epoch.bind(this);
    this.params = this.params.bind(this);
  }
  epoch(request: QueryEpochRequest = {}): Promise<QueryEpochResponse> {
    const data = QueryEpochRequest.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.epoch.Query", "Epoch", data);
    return promise.then(data => QueryEpochResponse.decode(new _m0.Reader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.epoch.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    epoch(request?: QueryEpochRequest): Promise<QueryEpochResponse> {
      return queryService.epoch(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};