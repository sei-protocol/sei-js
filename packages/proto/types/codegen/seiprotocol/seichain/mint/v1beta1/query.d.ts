import { Params, ParamsSDKType } from "./mint";
import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    startDate: string;
    endDate: string;
    denom: string;
    totalMintAmount: Long;
    remainingMintAmount: Long;
    lastMintAmount: Long;
    lastMintDate: string;
    lastMintHeight: Long;
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponseSDKType {
    start_date: string;
    end_date: string;
    denom: string;
    total_mint_amount: Long;
    remaining_mint_amount: Long;
    last_mint_amount: Long;
    last_mint_date: string;
    last_mint_height: Long;
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
