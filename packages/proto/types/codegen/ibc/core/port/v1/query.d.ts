import { Order, OrderSDKType, Counterparty, CounterpartySDKType } from "../../channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
    /** port unique identifier */
    portId: string;
    /** connection unique identifier */
    connectionId: string;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty: Counterparty;
    /** proposed version */
    proposedVersion: string;
}
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequestSDKType {
    /** port unique identifier */
    port_id: string;
    /** connection unique identifier */
    connection_id: string;
    /** whether the channel is ordered or unordered */
    ordering: OrderSDKType;
    /** counterparty channel end */
    counterparty: CounterpartySDKType;
    /** proposed version */
    proposed_version: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
    /** port id associated with the request identifiers */
    portId: string;
    /** supported app version */
    version: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponseSDKType {
    /** port id associated with the request identifiers */
    port_id: string;
    /** supported app version */
    version: string;
}
export declare const QueryAppVersionRequest: {
    encode(message: QueryAppVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionRequest;
    fromPartial(object: DeepPartial<QueryAppVersionRequest>): QueryAppVersionRequest;
};
export declare const QueryAppVersionResponse: {
    encode(message: QueryAppVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionResponse;
    fromPartial(object: DeepPartial<QueryAppVersionResponse>): QueryAppVersionResponse;
};
