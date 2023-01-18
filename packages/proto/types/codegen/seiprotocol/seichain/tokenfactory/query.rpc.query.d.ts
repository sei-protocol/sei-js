import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryDenomCreationFeeWhitelistRequest, QueryDenomCreationFeeWhitelistResponse, QueryCreatorInDenomFeeWhitelistRequest, QueryCreatorInDenomFeeWhitelistResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    denomCreationFeeWhitelist(request?: QueryDenomCreationFeeWhitelistRequest): Promise<QueryDenomCreationFeeWhitelistResponse>;
    creatorInDenomFeeWhitelist(request: QueryCreatorInDenomFeeWhitelistRequest): Promise<QueryCreatorInDenomFeeWhitelistResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    denomCreationFeeWhitelist(request?: QueryDenomCreationFeeWhitelistRequest): Promise<QueryDenomCreationFeeWhitelistResponse>;
    creatorInDenomFeeWhitelist(request: QueryCreatorInDenomFeeWhitelistRequest): Promise<QueryCreatorInDenomFeeWhitelistResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomAuthorityMetadata(request: QueryDenomAuthorityMetadataRequest): Promise<QueryDenomAuthorityMetadataResponse>;
    denomsFromCreator(request: QueryDenomsFromCreatorRequest): Promise<QueryDenomsFromCreatorResponse>;
    denomCreationFeeWhitelist(request?: QueryDenomCreationFeeWhitelistRequest): Promise<QueryDenomCreationFeeWhitelistResponse>;
    creatorInDenomFeeWhitelist(request: QueryCreatorInDenomFeeWhitelistRequest): Promise<QueryCreatorInDenomFeeWhitelistResponse>;
};
