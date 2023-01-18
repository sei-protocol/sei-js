import { Rpc } from '@osmonauts/helpers';
import * as _m0 from 'protobufjs/minimal';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryRecordedTransactionDataRequest, QueryRecordedTransactionDataResponse, QueryStateRootRequest, QueryStateRootResponse, QuerySenderRequest, QuerySenderResponse } from './query';
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*null*/

  recordedTransactionData(request: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponse>;
  /*null*/

  stateRoot(request: QueryStateRootRequest): Promise<QueryStateRootResponse>;
  /*null*/

  sender(request: QuerySenderRequest): Promise<QuerySenderResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.recordedTransactionData = this.recordedTransactionData.bind(this);
    this.stateRoot = this.stateRoot.bind(this);
    this.sender = this.sender.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.nitro.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  recordedTransactionData(request: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponse> {
    const data = QueryRecordedTransactionDataRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.nitro.Query', 'RecordedTransactionData', data);
    return promise.then(data => QueryRecordedTransactionDataResponse.decode(new _m0.Reader(data)));
  }

  stateRoot(request: QueryStateRootRequest): Promise<QueryStateRootResponse> {
    const data = QueryStateRootRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.nitro.Query', 'StateRoot', data);
    return promise.then(data => QueryStateRootResponse.decode(new _m0.Reader(data)));
  }

  sender(request: QuerySenderRequest): Promise<QuerySenderResponse> {
    const data = QuerySenderRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.nitro.Query', 'Sender', data);
    return promise.then(data => QuerySenderResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    recordedTransactionData(request: QueryRecordedTransactionDataRequest): Promise<QueryRecordedTransactionDataResponse> {
      return queryService.recordedTransactionData(request);
    },

    stateRoot(request: QueryStateRootRequest): Promise<QueryStateRootResponse> {
      return queryService.stateRoot(request);
    },

    sender(request: QuerySenderRequest): Promise<QuerySenderResponse> {
      return queryService.sender(request);
    }

  };
};