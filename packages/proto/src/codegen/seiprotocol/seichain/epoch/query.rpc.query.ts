import { Rpc } from '@osmonauts/helpers';
import * as _m0 from 'protobufjs/minimal';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryEpochRequest, QueryEpochResponse, QueryParamsRequest, QueryParamsResponse } from './query';
/** Query defines the RPC service */

export interface Query {
  epoch(request?: QueryEpochRequest): Promise<QueryEpochResponse>;
  /*Query the epoch in the chain*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

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
    const promise = this.rpc.request('seiprotocol.seichain.epoch.Query', 'Epoch', data);
    return promise.then(data => QueryEpochResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.epoch.Query', 'Params', data);
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