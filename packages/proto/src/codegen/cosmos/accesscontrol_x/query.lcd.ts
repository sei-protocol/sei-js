import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, ResourceDependencyMappingFromMessageKeyRequest, ResourceDependencyMappingFromMessageKeyResponseSDKType, ListResourceDependencyMappingRequest, ListResourceDependencyMappingResponseSDKType, WasmDependencyMappingRequest, WasmDependencyMappingResponseSDKType, ListWasmDependencyMappingRequest, ListWasmDependencyMappingResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.resourceDependencyMappingFromMessageKey = this.resourceDependencyMappingFromMessageKey.bind(this);
    this.listResourceDependencyMapping = this.listResourceDependencyMapping.bind(this);
    this.wasmDependencyMapping = this.wasmDependencyMapping.bind(this);
    this.listWasmDependencyMapping = this.listWasmDependencyMapping.bind(this);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/cosmos-sdk/accesscontrol/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ResourceDependencyMappingFromMessageKey */
  async resourceDependencyMappingFromMessageKey(params: ResourceDependencyMappingFromMessageKeyRequest): Promise<ResourceDependencyMappingFromMessageKeyResponseSDKType> {
    const endpoint = `cosmos/cosmos-sdk/accesscontrol/resource_dependency_mapping_from_message_key/${params.messageKey}`;
    return await this.req.get<ResourceDependencyMappingFromMessageKeyResponseSDKType>(endpoint);
  }
  /* ListResourceDependencyMapping */
  async listResourceDependencyMapping(_params: ListResourceDependencyMappingRequest = {}): Promise<ListResourceDependencyMappingResponseSDKType> {
    const endpoint = `cosmos/cosmos-sdk/accesscontrol/list_resource_dependency_mapping`;
    return await this.req.get<ListResourceDependencyMappingResponseSDKType>(endpoint);
  }
  /* WasmDependencyMapping */
  async wasmDependencyMapping(params: WasmDependencyMappingRequest): Promise<WasmDependencyMappingResponseSDKType> {
    const endpoint = `cosmos/cosmos-sdk/accesscontrol/wasm_dependency_mapping/${params.contractAddress}`;
    return await this.req.get<WasmDependencyMappingResponseSDKType>(endpoint);
  }
  /* ListWasmDependencyMapping */
  async listWasmDependencyMapping(_params: ListWasmDependencyMappingRequest = {}): Promise<ListWasmDependencyMappingResponseSDKType> {
    const endpoint = `cosmos/cosmos-sdk/accesscontrol/list_wasm_dependency_mapping`;
    return await this.req.get<ListWasmDependencyMappingResponseSDKType>(endpoint);
  }
}