import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, ResourceDependencyMappingFromMessageKeyRequest, ResourceDependencyMappingFromMessageKeyResponse, ListResourceDependencyMappingRequest, ListResourceDependencyMappingResponse, WasmDependencyMappingRequest, WasmDependencyMappingResponse, ListWasmDependencyMappingRequest, ListWasmDependencyMappingResponse } from "./query";
export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  resourceDependencyMappingFromMessageKey(request: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponse>;
  listResourceDependencyMapping(request?: ListResourceDependencyMappingRequest): Promise<ListResourceDependencyMappingResponse>;
  wasmDependencyMapping(request: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponse>;
  listWasmDependencyMapping(request?: ListWasmDependencyMappingRequest): Promise<ListWasmDependencyMappingResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.resourceDependencyMappingFromMessageKey = this.resourceDependencyMappingFromMessageKey.bind(this);
    this.listResourceDependencyMapping = this.listResourceDependencyMapping.bind(this);
    this.wasmDependencyMapping = this.wasmDependencyMapping.bind(this);
    this.listWasmDependencyMapping = this.listWasmDependencyMapping.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  resourceDependencyMappingFromMessageKey(request: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponse> {
    const data = ResourceDependencyMappingFromMessageKeyRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "ResourceDependencyMappingFromMessageKey", data);
    return promise.then(data => ResourceDependencyMappingFromMessageKeyResponse.decode(new BinaryReader(data)));
  }
  listResourceDependencyMapping(request: ListResourceDependencyMappingRequest = {}): Promise<ListResourceDependencyMappingResponse> {
    const data = ListResourceDependencyMappingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "ListResourceDependencyMapping", data);
    return promise.then(data => ListResourceDependencyMappingResponse.decode(new BinaryReader(data)));
  }
  wasmDependencyMapping(request: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponse> {
    const data = WasmDependencyMappingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "WasmDependencyMapping", data);
    return promise.then(data => WasmDependencyMappingResponse.decode(new BinaryReader(data)));
  }
  listWasmDependencyMapping(request: ListWasmDependencyMappingRequest = {}): Promise<ListWasmDependencyMappingResponse> {
    const data = ListWasmDependencyMappingRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.accesscontrol_x.v1beta1.Query", "ListWasmDependencyMapping", data);
    return promise.then(data => ListWasmDependencyMappingResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    resourceDependencyMappingFromMessageKey(request: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponse> {
      return queryService.resourceDependencyMappingFromMessageKey(request);
    },
    listResourceDependencyMapping(request?: ListResourceDependencyMappingRequest): Promise<ListResourceDependencyMappingResponse> {
      return queryService.listResourceDependencyMapping(request);
    },
    wasmDependencyMapping(request: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponse> {
      return queryService.wasmDependencyMapping(request);
    },
    listWasmDependencyMapping(request?: ListWasmDependencyMappingRequest): Promise<ListWasmDependencyMappingResponse> {
      return queryService.listWasmDependencyMapping(request);
    }
  };
};