import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import {
	QueryParamsRequest,
	QueryParamsResponse,
	QueryDenomAuthorityMetadataRequest,
	QueryDenomAuthorityMetadataResponse,
	QueryDenomMetadataRequest,
	QueryDenomMetadataResponse,
	QueryDenomsFromCreatorRequest,
	QueryDenomsFromCreatorResponse
} from './query';
/** Query defines the gRPC querier service. */
export interface Query {
	/**
	 * Params defines a gRPC query method that returns the tokenfactory module's
	 * parameters.
	 */
	params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
	/**
	 * DenomAuthorityMetadata defines a gRPC query method for fetching
	 * DenomAuthorityMetadata for a particular denom.
	 */
	denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
	/**
	 * DenomsMetadata defines a gRPC query method for fetching
	 *  DenomMetadata for a particular denom.
	 */
	denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse>;
	/**
	 * DenomsFromCreator defines a gRPC query method for fetching all
	 * denominations created by a specific admin/creator.
	 */
	denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
}
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
		this.params = this.params.bind(this);
		this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
		this.denomMetadata = this.denomMetadata.bind(this);
		this.denomsFromCreator = this.denomsFromCreator.bind(this);
	}
	params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
		const data = QueryParamsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'Params', data);
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
	}
	denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse> {
		const data = QueryDenomAuthorityMetadataRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'DenomAuthorityMetadata', data);
		return promise.then((data) => QueryDenomAuthorityMetadataResponse.decode(new BinaryReader(data)));
	}
	denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
		const data = QueryDenomMetadataRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'DenomMetadata', data);
		return promise.then((data) => QueryDenomMetadataResponse.decode(new BinaryReader(data)));
	}
	denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
		const data = QueryDenomsFromCreatorRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.tokenfactory.Query', 'DenomsFromCreator', data);
		return promise.then((data) => QueryDenomsFromCreatorResponse.decode(new BinaryReader(data)));
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
		denomMetadata(request: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponse> {
			return queryService.denomMetadata(request);
		},
		denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse> {
			return queryService.denomsFromCreator(request);
		}
	};
};
