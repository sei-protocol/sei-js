import { LCDClient } from '@cosmology/lcd';
import {
	QueryParamsRequest,
	QueryParamsResponseSDKType,
	QueryDenomAuthorityMetadataRequest,
	QueryDenomAuthorityMetadataResponseSDKType,
	QueryDenomMetadataRequest,
	QueryDenomMetadataResponseSDKType,
	QueryDenomsFromCreatorRequest,
	QueryDenomsFromCreatorResponseSDKType
} from './query';
export class LCDQueryClient {
	req: LCDClient;
	constructor({ requestClient }: { requestClient: LCDClient }) {
		this.req = requestClient;
		this.params = this.params.bind(this);
		this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
		this.denomMetadata = this.denomMetadata.bind(this);
		this.denomsFromCreator = this.denomsFromCreator.bind(this);
	}
	/* Params defines a gRPC query method that returns the tokenfactory module's
   parameters. */
	async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
		const endpoint = `sei-protocol/seichain/tokenfactory/params`;
		return await this.req.get<QueryParamsResponseSDKType>(endpoint);
	}
	/* DenomAuthorityMetadata defines a gRPC query method for fetching
   DenomAuthorityMetadata for a particular denom. */
	async denomAuthorityMetadata(params: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponseSDKType> {
		const endpoint = `sei-protocol/seichain/tokenfactory/denoms/${params.denom}/authority_metadata`;
		return await this.req.get<QueryDenomAuthorityMetadataResponseSDKType>(endpoint);
	}
	/* DenomsMetadata defines a gRPC query method for fetching
    DenomMetadata for a particular denom. */
	async denomMetadata(params: QueryDenomMetadataRequest): Promise<QueryDenomMetadataResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.denom !== 'undefined') {
			options.params.denom = params.denom;
		}
		const endpoint = `sei-protocol/seichain/tokenfactory/denoms/metadata`;
		return await this.req.get<QueryDenomMetadataResponseSDKType>(endpoint, options);
	}
	/* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */
	async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
		const endpoint = `sei-protocol/seichain/tokenfactory/denoms_from_creator/${params.creator}`;
		return await this.req.get<QueryDenomsFromCreatorResponseSDKType>(endpoint);
	}
}
