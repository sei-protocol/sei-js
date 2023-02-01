import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    /** params defines the parameters of the module. */
    params: ParamsSDKType;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequest {
    denom: string;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataRequestSDKType {
    denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponse {
    authorityMetadata: DenomAuthorityMetadata;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */
export interface QueryDenomAuthorityMetadataResponseSDKType {
    authority_metadata: DenomAuthorityMetadataSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequest {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorRequestSDKType {
    creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponse {
    denoms: string[];
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomsFromCreatorResponseSDKType {
    denoms: string[];
}
/**
 * QueryDenomCreationFeeWhitelistRequest defines the request structure for the
 * DenomCreationFeeWhitelist gRPC query.
 */
export interface QueryDenomCreationFeeWhitelistRequest {
}
/**
 * QueryDenomCreationFeeWhitelistRequest defines the request structure for the
 * DenomCreationFeeWhitelist gRPC query.
 */
export interface QueryDenomCreationFeeWhitelistRequestSDKType {
}
/**
 * QueryDenomCreationFeeWhitelistResponse defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomCreationFeeWhitelistResponse {
    creators: string[];
}
/**
 * QueryDenomCreationFeeWhitelistResponse defines the response structure for the
 * DenomsFromCreator gRPC query.
 */
export interface QueryDenomCreationFeeWhitelistResponseSDKType {
    creators: string[];
}
/**
 * QueryCreatorInDenomFeeWhitelistRequest defines the request structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */
export interface QueryCreatorInDenomFeeWhitelistRequest {
    creator: string;
}
/**
 * QueryCreatorInDenomFeeWhitelistRequest defines the request structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */
export interface QueryCreatorInDenomFeeWhitelistRequestSDKType {
    creator: string;
}
/**
 * QueryCreatorInDenomFeeWhitelistResponse defines the response structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */
export interface QueryCreatorInDenomFeeWhitelistResponse {
    whitelisted: boolean;
}
/**
 * QueryCreatorInDenomFeeWhitelistResponse defines the response structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */
export interface QueryCreatorInDenomFeeWhitelistResponseSDKType {
    whitelisted: boolean;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryDenomAuthorityMetadataRequest: {
    encode(message: QueryDenomAuthorityMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest;
};
export declare const QueryDenomAuthorityMetadataResponse: {
    encode(message: QueryDenomAuthorityMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse;
    fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse;
};
export declare const QueryDenomsFromCreatorRequest: {
    encode(message: QueryDenomsFromCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest;
};
export declare const QueryDenomsFromCreatorResponse: {
    encode(message: QueryDenomsFromCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse;
    fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse;
};
export declare const QueryDenomCreationFeeWhitelistRequest: {
    encode(_: QueryDenomCreationFeeWhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomCreationFeeWhitelistRequest;
    fromPartial(_: DeepPartial<QueryDenomCreationFeeWhitelistRequest>): QueryDenomCreationFeeWhitelistRequest;
};
export declare const QueryDenomCreationFeeWhitelistResponse: {
    encode(message: QueryDenomCreationFeeWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomCreationFeeWhitelistResponse;
    fromPartial(object: DeepPartial<QueryDenomCreationFeeWhitelistResponse>): QueryDenomCreationFeeWhitelistResponse;
};
export declare const QueryCreatorInDenomFeeWhitelistRequest: {
    encode(message: QueryCreatorInDenomFeeWhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreatorInDenomFeeWhitelistRequest;
    fromPartial(object: DeepPartial<QueryCreatorInDenomFeeWhitelistRequest>): QueryCreatorInDenomFeeWhitelistRequest;
};
export declare const QueryCreatorInDenomFeeWhitelistResponse: {
    encode(message: QueryCreatorInDenomFeeWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreatorInDenomFeeWhitelistResponse;
    fromPartial(object: DeepPartial<QueryCreatorInDenomFeeWhitelistResponse>): QueryCreatorInDenomFeeWhitelistResponse;
};
