import { Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequest {
}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequestSDKType {
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponse {
    lastMintAmount: string;
    lastMintDate: string;
    lastMintHeight: Long;
    denom: string;
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponseSDKType {
    last_mint_amount: string;
    last_mint_date: string;
    last_mint_height: Long;
    denom: string;
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
export declare const QueryMinterRequest: {
    encode(_: QueryMinterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterRequest;
    fromPartial(_: DeepPartial<QueryMinterRequest>): QueryMinterRequest;
};
export declare const QueryMinterResponse: {
    encode(message: QueryMinterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterResponse;
    fromPartial(object: DeepPartial<QueryMinterResponse>): QueryMinterResponse;
};
