import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponseSDKType, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponseSDKType, QueryDenomCreationFeeWhitelistRequest, QueryDenomCreationFeeWhitelistResponseSDKType, QueryCreatorInDenomFeeWhitelistRequest, QueryCreatorInDenomFeeWhitelistResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.denomAuthorityMetadata = this.denomAuthorityMetadata.bind(this);
    this.denomsFromCreator = this.denomsFromCreator.bind(this);
    this.denomCreationFeeWhitelist = this.denomCreationFeeWhitelist.bind(this);
    this.creatorInDenomFeeWhitelist = this.creatorInDenomFeeWhitelist.bind(this);
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
  /* DenomsFromCreator defines a gRPC query method for fetching all
   denominations created by a specific admin/creator. */


  async denomsFromCreator(params: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponseSDKType> {
    const endpoint = `sei-protocol/seichain/tokenfactory/denoms_from_creator/${params.creator}`;
    return await this.req.get<QueryDenomsFromCreatorResponseSDKType>(endpoint);
  }
  /* DenomCreationFeeWhitelist defines a gRPC query method for fetching all
   creators who are whitelisted from paying the denom creation fee. */


  async denomCreationFeeWhitelist(_params: QueryDenomCreationFeeWhitelistRequest = {}): Promise<QueryDenomCreationFeeWhitelistResponseSDKType> {
    const endpoint = `sei-protocol/seichain/tokenfactory/denom_creation_fee_whitelist`;
    return await this.req.get<QueryDenomCreationFeeWhitelistResponseSDKType>(endpoint);
  }
  /* CreatorInDenomFeeWhitelist defines a gRPC query method for fetching
   whether a creator is whitelisted from denom creation fees. */


  async creatorInDenomFeeWhitelist(params: QueryCreatorInDenomFeeWhitelistRequest): Promise<QueryCreatorInDenomFeeWhitelistResponseSDKType> {
    const endpoint = `sei-protocol/seichain/tokenfactory/denom_creation_fee_whitelist/${params.creator}`;
    return await this.req.get<QueryCreatorInDenomFeeWhitelistResponseSDKType>(endpoint);
  }

}