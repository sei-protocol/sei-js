import { Rpc } from '@osmonauts/helpers';
import * as _m0 from 'protobufjs/minimal';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryDenomCreationFeeWhitelistRequest, QueryDenomCreationFeeWhitelistResponse, QueryCreatorInDenomFeeWhitelistRequest, QueryCreatorInDenomFeeWhitelistResponse } from './query';
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Params defines a gRPC query method that returns the tokenfactory module's
   parameters.*/

  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
  /*DenomAuthorityMetadata defines a gRPC query method for fetching
   DenomAuthorityMetadata for a particular denom.*/

  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
  /*DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator.*/

  denomCreationFeeWhitelist(request?: QueryDenomCreationFeeWhitelistRequest): Promise<QueryDenomCreationFeeWhitelistResponse>;
  /*DenomCreationFeeWhitelist defines a gRPC query method for fetching all
   creators who are whitelisted from paying the denom creation fee.*/

  creatorInDenomFeeWhitelist(request: QueryCreatorInDenomFeeWhitelistRequest): Promise<QueryCreatorInDenomFeeWhitelistResponse>;
  /*CreatorInDenomFeeWhitelist defines a gRPC query method for fetching
   whether a creator is whitelisted from denom creation fees.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
    this.denomCreationFeeWhitelist = this.denomCreationFeeWhitelist.bind(this);
    this.creatorInDenomFeeWhitelist = this.creatorInDenomFeeWhitelist.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
    const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'DenomAuthorityMetadata', data);
    return promise.then(data => QueryDenomAuthorityMetadataResponse.decode(new _m0.Reader(data)));
  }

  denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
    const data = QueryDenomsFromCreatorRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'DenomsFromCreator', data);
    return promise.then(data => QueryDenomsFromCreatorResponse.decode(new _m0.Reader(data)));
  }

  denomCreationFeeWhitelist(request: QueryDenomCreationFeeWhitelistRequest = {}): Promise<QueryDenomCreationFeeWhitelistResponse> {
    const data = QueryDenomCreationFeeWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'DenomCreationFeeWhitelist', data);
    return promise.then(data => QueryDenomCreationFeeWhitelistResponse.decode(new _m0.Reader(data)));
  }

  creatorInDenomFeeWhitelist(request: QueryCreatorInDenomFeeWhitelistRequest): Promise<QueryCreatorInDenomFeeWhitelistResponse> {
    const data = QueryCreatorInDenomFeeWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'CreatorInDenomFeeWhitelist', data);
    return promise.then(data => QueryCreatorInDenomFeeWhitelistResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
      return queryService.denomAuthorityMetadata(request);
    },

    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
      return queryService.denomsFromCreator(request);
    },

    denomCreationFeeWhitelist(request?: QueryDenomCreationFeeWhitelistRequest): Promise<QueryDenomCreationFeeWhitelistResponse> {
      return queryService.denomCreationFeeWhitelist(request);
    },

    creatorInDenomFeeWhitelist(request: QueryCreatorInDenomFeeWhitelistRequest): Promise<QueryCreatorInDenomFeeWhitelistResponse> {
      return queryService.creatorInDenomFeeWhitelist(request);
    }

  };
};