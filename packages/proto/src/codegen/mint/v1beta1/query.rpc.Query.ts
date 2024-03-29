import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMinterRequest, QueryMinterResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EpochProvisions current minting epoch provisions value. */
  minter(request?: QueryMinterRequest): Promise<QueryMinterResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.minter = this.minter.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.mint.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  minter(request: QueryMinterRequest = {}): Promise<QueryMinterResponse> {
    const data = QueryMinterRequest.encode(request).finish();
    const promise = this.rpc.request("seiprotocol.seichain.mint.Query", "Minter", data);
    return promise.then(data => QueryMinterResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    minter(request?: QueryMinterRequest): Promise<QueryMinterResponse> {
      return queryService.minter(request);
    }
  };
};