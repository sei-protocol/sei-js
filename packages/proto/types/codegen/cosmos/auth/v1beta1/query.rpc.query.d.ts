import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
};
