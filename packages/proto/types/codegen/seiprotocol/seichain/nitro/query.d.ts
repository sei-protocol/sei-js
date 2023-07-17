import { Params, ParamsSDKType } from "./params";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryRecordedTransactionDataRequest {
    slot: Long;
}
export interface QueryRecordedTransactionDataRequestSDKType {
    slot: Long;
}
export interface QueryRecordedTransactionDataResponse {
    txs: string[];
}
export interface QueryRecordedTransactionDataResponseSDKType {
    txs: string[];
}
export interface QueryStateRootRequest {
    slot: Long;
}
export interface QueryStateRootRequestSDKType {
    slot: Long;
}
export interface QueryStateRootResponse {
    root: string;
}
export interface QueryStateRootResponseSDKType {
    root: string;
}
export interface QuerySenderRequest {
    slot: Long;
}
export interface QuerySenderRequestSDKType {
    slot: Long;
}
export interface QuerySenderResponse {
    sender: string;
}
export interface QuerySenderResponseSDKType {
    sender: string;
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
export declare const QueryRecordedTransactionDataRequest: {
    encode(message: QueryRecordedTransactionDataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordedTransactionDataRequest;
    fromPartial(object: DeepPartial<QueryRecordedTransactionDataRequest>): QueryRecordedTransactionDataRequest;
};
export declare const QueryRecordedTransactionDataResponse: {
    encode(message: QueryRecordedTransactionDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordedTransactionDataResponse;
    fromPartial(object: DeepPartial<QueryRecordedTransactionDataResponse>): QueryRecordedTransactionDataResponse;
};
export declare const QueryStateRootRequest: {
    encode(message: QueryStateRootRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRootRequest;
    fromPartial(object: DeepPartial<QueryStateRootRequest>): QueryStateRootRequest;
};
export declare const QueryStateRootResponse: {
    encode(message: QueryStateRootResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRootResponse;
    fromPartial(object: DeepPartial<QueryStateRootResponse>): QueryStateRootResponse;
};
export declare const QuerySenderRequest: {
    encode(message: QuerySenderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySenderRequest;
    fromPartial(object: DeepPartial<QuerySenderRequest>): QuerySenderRequest;
};
export declare const QuerySenderResponse: {
    encode(message: QuerySenderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySenderResponse;
    fromPartial(object: DeepPartial<QuerySenderResponse>): QuerySenderResponse;
};
