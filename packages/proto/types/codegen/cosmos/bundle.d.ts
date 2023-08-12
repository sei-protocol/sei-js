import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./authz/v1beta1/authz";
import * as _6 from "./authz/v1beta1/event";
import * as _7 from "./authz/v1beta1/genesis";
import * as _8 from "./authz/v1beta1/query";
import * as _9 from "./authz/v1beta1/tx";
import * as _10 from "./bank/v1beta1/authz";
import * as _11 from "./bank/v1beta1/bank";
import * as _12 from "./bank/v1beta1/genesis";
import * as _13 from "./bank/v1beta1/query";
import * as _14 from "./bank/v1beta1/tx";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/v1beta1/coin";
import * as _19 from "./crypto/ed25519/keys";
import * as _20 from "./crypto/hd/v1/hd";
import * as _21 from "./crypto/keyring/v1/record";
import * as _22 from "./crypto/multisig/keys";
import * as _23 from "./crypto/secp256k1/keys";
import * as _24 from "./crypto/secp256r1/keys";
import * as _25 from "./distribution/v1beta1/distribution";
import * as _26 from "./distribution/v1beta1/genesis";
import * as _27 from "./distribution/v1beta1/query";
import * as _28 from "./distribution/v1beta1/tx";
import * as _29 from "./gov/v1beta1/genesis";
import * as _30 from "./gov/v1beta1/gov";
import * as _31 from "./gov/v1beta1/query";
import * as _32 from "./gov/v1beta1/tx";
import * as _33 from "./staking/v1beta1/authz";
import * as _34 from "./staking/v1beta1/genesis";
import * as _35 from "./staking/v1beta1/query";
import * as _36 from "./staking/v1beta1/staking";
import * as _37 from "./staking/v1beta1/tx";
import * as _38 from "./tx/signing/v1beta1/signing";
import * as _39 from "./tx/v1beta1/service";
import * as _40 from "./tx/v1beta1/tx";
import * as _41 from "./upgrade/v1beta1/query";
import * as _42 from "./upgrade/v1beta1/tx";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _138 from "./auth/v1beta1/query.lcd";
import * as _139 from "./authz/v1beta1/query.lcd";
import * as _140 from "./bank/v1beta1/query.lcd";
import * as _141 from "./distribution/v1beta1/query.lcd";
import * as _142 from "./gov/v1beta1/query.lcd";
import * as _143 from "./staking/v1beta1/query.lcd";
import * as _144 from "./tx/v1beta1/service.lcd";
import * as _145 from "./upgrade/v1beta1/query.lcd";
import * as _146 from "./auth/v1beta1/query.rpc.Query";
import * as _147 from "./authz/v1beta1/query.rpc.Query";
import * as _148 from "./bank/v1beta1/query.rpc.Query";
import * as _149 from "./distribution/v1beta1/query.rpc.Query";
import * as _150 from "./gov/v1beta1/query.rpc.Query";
import * as _151 from "./staking/v1beta1/query.rpc.Query";
import * as _152 from "./tx/v1beta1/service.rpc.Service";
import * as _153 from "./upgrade/v1beta1/query.rpc.Query";
import * as _154 from "./authz/v1beta1/tx.rpc.msg";
import * as _155 from "./bank/v1beta1/tx.rpc.msg";
import * as _156 from "./distribution/v1beta1/tx.rpc.msg";
import * as _157 from "./gov/v1beta1/tx.rpc.msg";
import * as _158 from "./staking/v1beta1/tx.rpc.msg";
import * as _159 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _146.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                moduleAccounts(request?: _4.QueryModuleAccountsRequest): Promise<_4.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _4.Bech32PrefixRequest): Promise<_4.Bech32PrefixResponse>;
                addressBytesToString(request: _4.AddressBytesToStringRequest): Promise<_4.AddressBytesToStringResponse>;
                addressStringToBytes(request: _4.AddressStringToBytesRequest): Promise<_4.AddressStringToBytesResponse>;
            };
            LCDQueryClient: typeof _138.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _4.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsRequest;
                fromPartial(object: any): _4.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _4.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountsResponse;
                fromPartial(object: any): _4.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _4.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountRequest;
                fromPartial(object: any): _4.QueryAccountRequest;
            };
            QueryModuleAccountsRequest: {
                encode(_: _4.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryModuleAccountsRequest;
                fromPartial(_: any): _4.QueryModuleAccountsRequest;
            };
            QueryParamsResponse: {
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsResponse;
                fromPartial(object: any): _4.QueryParamsResponse;
            };
            QueryAccountResponse: {
                encode(message: _4.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountResponse;
                fromPartial(object: any): _4.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsRequest;
                fromPartial(_: any): _4.QueryParamsRequest;
            };
            QueryModuleAccountsResponse: {
                encode(message: _4.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryModuleAccountsResponse;
                fromPartial(object: any): _4.QueryModuleAccountsResponse;
            };
            Bech32PrefixRequest: {
                encode(_: _4.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Bech32PrefixRequest;
                fromPartial(_: any): _4.Bech32PrefixRequest;
            };
            Bech32PrefixResponse: {
                encode(message: _4.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.Bech32PrefixResponse;
                fromPartial(object: any): _4.Bech32PrefixResponse;
            };
            AddressBytesToStringRequest: {
                encode(message: _4.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressBytesToStringRequest;
                fromPartial(object: any): _4.AddressBytesToStringRequest;
            };
            AddressBytesToStringResponse: {
                encode(message: _4.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressBytesToStringResponse;
                fromPartial(object: any): _4.AddressBytesToStringResponse;
            };
            AddressStringToBytesRequest: {
                encode(message: _4.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressStringToBytesRequest;
                fromPartial(object: any): _4.AddressStringToBytesRequest;
            };
            AddressStringToBytesResponse: {
                encode(message: _4.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.AddressStringToBytesResponse;
                fromPartial(object: any): _4.AddressStringToBytesResponse;
            };
            GenesisState: {
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromPartial(object: any): _3.GenesisState;
            };
            BaseAccount: {
                encode(message: _2.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.BaseAccount;
                fromPartial(object: any): _2.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _2.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ModuleAccount;
                fromPartial(object: any): _2.ModuleAccount;
            };
            Params: {
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromPartial(object: any): _2.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _154.MsgClientImpl;
            QueryClientImpl: typeof _147.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _139.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _9.MsgGrant): {
                        typeUrl: string;
                        value: _9.MsgGrant;
                    };
                    exec(value: _9.MsgExec): {
                        typeUrl: string;
                        value: _9.MsgExec;
                    };
                    revoke(value: _9.MsgRevoke): {
                        typeUrl: string;
                        value: _9.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _9.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _9.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _9.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _9.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _9.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _9.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _9.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrant;
                fromPartial(object: any): _9.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _9.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExecResponse;
                fromPartial(object: any): _9.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _9.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgExec;
                fromPartial(object: any): _9.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _9.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgGrantResponse;
                fromPartial(_: any): _9.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _9.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevoke;
                fromPartial(object: any): _9.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _9.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.MsgRevokeResponse;
                fromPartial(_: any): _9.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _8.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsRequest;
                fromPartial(object: any): _8.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _8.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGrantsResponse;
                fromPartial(object: any): _8.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _8.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranterGrantsRequest;
                fromPartial(object: any): _8.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _8.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranterGrantsResponse;
                fromPartial(object: any): _8.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _8.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranteeGrantsRequest;
                fromPartial(object: any): _8.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _8.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryGranteeGrantsResponse;
                fromPartial(object: any): _8.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _7.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.GenesisState;
                fromPartial(object: any): _7.GenesisState;
            };
            EventGrant: {
                encode(message: _6.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventGrant;
                fromPartial(object: any): _6.EventGrant;
            };
            EventRevoke: {
                encode(message: _6.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventRevoke;
                fromPartial(object: any): _6.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _5.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenericAuthorization;
                fromPartial(object: any): _5.GenericAuthorization;
            };
            Grant: {
                encode(message: _5.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.Grant;
                fromPartial(object: any): _5.Grant;
            };
            GrantAuthorization: {
                encode(message: _5.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GrantAuthorization;
                fromPartial(object: any): _5.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _5.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GrantQueueItem;
                fromPartial(object: any): _5.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _155.MsgClientImpl;
            QueryClientImpl: typeof _148.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                denomOwners(request: _13.QueryDenomOwnersRequest): Promise<_13.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _140.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _14.MsgSend): {
                        typeUrl: string;
                        value: _14.MsgSend;
                    };
                    multiSend(value: _14.MsgMultiSend): {
                        typeUrl: string;
                        value: _14.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _14.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _14.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _14.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _14.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _14.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSend;
                fromPartial(object: any): _14.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _14.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgSendResponse;
                fromPartial(_: any): _14.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _14.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSend;
                fromPartial(object: any): _14.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _14.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgMultiSendResponse;
                fromPartial(_: any): _14.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _13.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceRequest;
                fromPartial(object: any): _13.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _13.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryBalanceResponse;
                fromPartial(object: any): _13.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _13.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesRequest;
                fromPartial(object: any): _13.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _13.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryAllBalancesResponse;
                fromPartial(object: any): _13.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _13.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpendableBalancesRequest;
                fromPartial(object: any): _13.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _13.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySpendableBalancesResponse;
                fromPartial(object: any): _13.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _13.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyRequest;
                fromPartial(object: any): _13.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _13.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryTotalSupplyResponse;
                fromPartial(object: any): _13.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _13.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfRequest;
                fromPartial(object: any): _13.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _13.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QuerySupplyOfResponse;
                fromPartial(object: any): _13.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _13.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsRequest;
                fromPartial(_: any): _13.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _13.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryParamsResponse;
                fromPartial(object: any): _13.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _13.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataRequest;
                fromPartial(object: any): _13.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _13.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomsMetadataResponse;
                fromPartial(object: any): _13.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _13.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataRequest;
                fromPartial(object: any): _13.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _13.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomMetadataResponse;
                fromPartial(object: any): _13.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _13.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomOwnersRequest;
                fromPartial(object: any): _13.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _13.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.DenomOwner;
                fromPartial(object: any): _13.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _13.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.QueryDenomOwnersResponse;
                fromPartial(object: any): _13.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _12.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GenesisState;
                fromPartial(object: any): _12.GenesisState;
            };
            Balance: {
                encode(message: _12.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Balance;
                fromPartial(object: any): _12.Balance;
            };
            Params: {
                encode(message: _11.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Params;
                fromPartial(object: any): _11.Params;
            };
            SendEnabled: {
                encode(message: _11.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SendEnabled;
                fromPartial(object: any): _11.SendEnabled;
            };
            Input: {
                encode(message: _11.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Input;
                fromPartial(object: any): _11.Input;
            };
            Output: {
                encode(message: _11.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Output;
                fromPartial(object: any): _11.Output;
            };
            Supply: {
                encode(message: _11.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Supply;
                fromPartial(object: any): _11.Supply;
            };
            DenomUnit: {
                encode(message: _11.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DenomUnit;
                fromPartial(object: any): _11.DenomUnit;
            };
            Metadata: {
                encode(message: _11.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Metadata;
                fromPartial(object: any): _11.Metadata;
            };
            SendAuthorization: {
                encode(message: _10.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.SendAuthorization;
                fromPartial(object: any): _10.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _15.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxResponse;
                    fromPartial(object: any): _15.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _15.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ABCIMessageLog;
                    fromPartial(object: any): _15.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _15.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.StringEvent;
                    fromPartial(object: any): _15.StringEvent;
                };
                Attribute: {
                    encode(message: _15.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Attribute;
                    fromPartial(object: any): _15.Attribute;
                };
                GasInfo: {
                    encode(message: _15.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.GasInfo;
                    fromPartial(object: any): _15.GasInfo;
                };
                Result: {
                    encode(message: _15.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Result;
                    fromPartial(object: any): _15.Result;
                };
                SimulationResponse: {
                    encode(message: _15.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SimulationResponse;
                    fromPartial(object: any): _15.SimulationResponse;
                };
                MsgData: {
                    encode(message: _15.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.MsgData;
                    fromPartial(object: any): _15.MsgData;
                };
                TxMsgData: {
                    encode(message: _15.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TxMsgData;
                    fromPartial(object: any): _15.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _15.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.SearchTxsResult;
                    fromPartial(object: any): _15.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _16.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageRequest;
                    fromPartial(object: any): _16.PageRequest;
                };
                PageResponse: {
                    encode(message: _16.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageResponse;
                    fromPartial(object: any): _16.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _17.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AppDescriptor;
                    fromPartial(object: any): _17.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _17.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.TxDescriptor;
                    fromPartial(object: any): _17.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _17.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.AuthnDescriptor;
                    fromPartial(object: any): _17.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _17.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.SigningModeDescriptor;
                    fromPartial(object: any): _17.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _17.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ChainDescriptor;
                    fromPartial(object: any): _17.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _17.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.CodecDescriptor;
                    fromPartial(object: any): _17.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _17.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceDescriptor;
                    fromPartial(object: any): _17.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _17.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceImplementerDescriptor;
                    fromPartial(object: any): _17.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _17.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: any): _17.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _17.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ConfigurationDescriptor;
                    fromPartial(object: any): _17.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _17.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.MsgDescriptor;
                    fromPartial(object: any): _17.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _17.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorRequest;
                    fromPartial(_: any): _17.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _17.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetAuthnDescriptorResponse;
                    fromPartial(object: any): _17.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _17.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorRequest;
                    fromPartial(_: any): _17.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _17.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetChainDescriptorResponse;
                    fromPartial(object: any): _17.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _17.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorRequest;
                    fromPartial(_: any): _17.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _17.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetCodecDescriptorResponse;
                    fromPartial(object: any): _17.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _17.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorRequest;
                    fromPartial(_: any): _17.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _17.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetConfigurationDescriptorResponse;
                    fromPartial(object: any): _17.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _17.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorRequest;
                    fromPartial(_: any): _17.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _17.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetQueryServicesDescriptorResponse;
                    fromPartial(object: any): _17.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _17.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorRequest;
                    fromPartial(_: any): _17.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _17.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.GetTxDescriptorResponse;
                    fromPartial(object: any): _17.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _17.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServicesDescriptor;
                    fromPartial(object: any): _17.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _17.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryServiceDescriptor;
                    fromPartial(object: any): _17.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _17.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.QueryMethodDescriptor;
                    fromPartial(object: any): _17.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _18.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Coin;
                fromPartial(object: any): _18.Coin;
            };
            DecCoin: {
                encode(message: _18.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecCoin;
                fromPartial(object: any): _18.DecCoin;
            };
            IntProto: {
                encode(message: _18.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.IntProto;
                fromPartial(object: any): _18.IntProto;
            };
            DecProto: {
                encode(message: _18.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.DecProto;
                fromPartial(object: any): _18.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _19.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PubKey;
                fromPartial(object: any): _19.PubKey;
            };
            PrivKey: {
                encode(message: _19.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.PrivKey;
                fromPartial(object: any): _19.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _20.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.BIP44Params;
                    fromPartial(object: any): _20.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _21.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record;
                    fromPartial(object: any): _21.Record;
                };
                Record_Local: {
                    encode(message: _21.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Local;
                    fromPartial(object: any): _21.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _21.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Ledger;
                    fromPartial(object: any): _21.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _21.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Multi;
                    fromPartial(_: any): _21.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _21.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.Record_Offline;
                    fromPartial(_: any): _21.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _22.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.LegacyAminoPubKey;
                fromPartial(object: any): _22.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _23.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PubKey;
                fromPartial(object: any): _23.PubKey;
            };
            PrivKey: {
                encode(message: _23.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.PrivKey;
                fromPartial(object: any): _23.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _24.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PubKey;
                fromPartial(object: any): _24.PubKey;
            };
            PrivKey: {
                encode(message: _24.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.PrivKey;
                fromPartial(object: any): _24.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _156.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _141.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _28.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _28.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _28.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _28.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _28.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _28.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _28.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _28.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _28.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _28.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _28.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _28.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _28.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _28.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _28.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _28.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _28.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddress;
                fromPartial(object: any): _28.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _28.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgSetWithdrawAddressResponse;
                fromPartial(_: any): _28.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _28.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorReward;
                fromPartial(object: any): _28.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _28.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: any): _28.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _28.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommission;
                fromPartial(object: any): _28.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _28.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: any): _28.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _28.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPool;
                fromPartial(object: any): _28.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _28.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.MsgFundCommunityPoolResponse;
                fromPartial(_: any): _28.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _27.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsRequest;
                fromPartial(_: any): _27.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _27.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryParamsResponse;
                fromPartial(object: any): _27.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _27.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: any): _27.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _27.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: any): _27.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _27.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionRequest;
                fromPartial(object: any): _27.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _27.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorCommissionResponse;
                fromPartial(object: any): _27.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _27.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesRequest;
                fromPartial(object: any): _27.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _27.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryValidatorSlashesResponse;
                fromPartial(object: any): _27.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _27.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsRequest;
                fromPartial(object: any): _27.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _27.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationRewardsResponse;
                fromPartial(object: any): _27.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _27.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsRequest;
                fromPartial(object: any): _27.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _27.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegationTotalRewardsResponse;
                fromPartial(object: any): _27.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _27.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _27.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _27.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _27.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _27.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: any): _27.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _27.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: any): _27.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _27.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolRequest;
                fromPartial(_: any): _27.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _27.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.QueryCommunityPoolResponse;
                fromPartial(object: any): _27.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _26.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorWithdrawInfo;
                fromPartial(object: any): _26.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _26.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorOutstandingRewardsRecord;
                fromPartial(object: any): _26.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _26.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: any): _26.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _26.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorHistoricalRewardsRecord;
                fromPartial(object: any): _26.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _26.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorCurrentRewardsRecord;
                fromPartial(object: any): _26.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _26.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.DelegatorStartingInfoRecord;
                fromPartial(object: any): _26.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _26.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.ValidatorSlashEventRecord;
                fromPartial(object: any): _26.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: any): _26.GenesisState;
            };
            Params: {
                encode(message: _25.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Params;
                fromPartial(object: any): _25.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _25.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorHistoricalRewards;
                fromPartial(object: any): _25.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _25.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorCurrentRewards;
                fromPartial(object: any): _25.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _25.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorAccumulatedCommission;
                fromPartial(object: any): _25.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _25.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorOutstandingRewards;
                fromPartial(object: any): _25.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _25.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvent;
                fromPartial(object: any): _25.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _25.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.ValidatorSlashEvents;
                fromPartial(object: any): _25.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _25.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.FeePool;
                fromPartial(object: any): _25.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _25.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposal;
                fromPartial(object: any): _25.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _25.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegatorStartingInfo;
                fromPartial(object: any): _25.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _25.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.DelegationDelegatorReward;
                fromPartial(object: any): _25.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _25.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: any): _25.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _157.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _142.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _32.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _32.MsgSubmitProposal;
                    };
                    vote(value: _32.MsgVote): {
                        typeUrl: string;
                        value: _32.MsgVote;
                    };
                    voteWeighted(value: _32.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _32.MsgVoteWeighted;
                    };
                    deposit(value: _32.MsgDeposit): {
                        typeUrl: string;
                        value: _32.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _32.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _32.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _32.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _32.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _32.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _32.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _32.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _32.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _32.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposal;
                fromPartial(object: any): _32.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _32.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgSubmitProposalResponse;
                fromPartial(object: any): _32.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _32.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVote;
                fromPartial(object: any): _32.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _32.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteResponse;
                fromPartial(_: any): _32.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _32.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeighted;
                fromPartial(object: any): _32.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _32.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgVoteWeightedResponse;
                fromPartial(_: any): _32.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _32.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDeposit;
                fromPartial(object: any): _32.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _32.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.MsgDepositResponse;
                fromPartial(_: any): _32.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _31.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalRequest;
                fromPartial(object: any): _31.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _31.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalResponse;
                fromPartial(object: any): _31.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _31.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsRequest;
                fromPartial(object: any): _31.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _31.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryProposalsResponse;
                fromPartial(object: any): _31.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _31.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteRequest;
                fromPartial(object: any): _31.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _31.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVoteResponse;
                fromPartial(object: any): _31.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _31.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesRequest;
                fromPartial(object: any): _31.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _31.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryVotesResponse;
                fromPartial(object: any): _31.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _31.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsRequest;
                fromPartial(object: any): _31.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _31.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryParamsResponse;
                fromPartial(object: any): _31.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _31.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositRequest;
                fromPartial(object: any): _31.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _31.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositResponse;
                fromPartial(object: any): _31.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _31.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsRequest;
                fromPartial(object: any): _31.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _31.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryDepositsResponse;
                fromPartial(object: any): _31.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _31.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultRequest;
                fromPartial(object: any): _31.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _31.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.QueryTallyResultResponse;
                fromPartial(object: any): _31.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _30.VoteOption;
            voteOptionToJSON(object: _30.VoteOption): string;
            proposalStatusFromJSON(object: any): _30.ProposalStatus;
            proposalStatusToJSON(object: _30.ProposalStatus): string;
            VoteOption: typeof _30.VoteOption;
            VoteOptionSDKType: typeof _30.VoteOption;
            ProposalStatus: typeof _30.ProposalStatus;
            ProposalStatusSDKType: typeof _30.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _30.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.WeightedVoteOption;
                fromPartial(object: any): _30.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _30.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TextProposal;
                fromPartial(object: any): _30.TextProposal;
            };
            Deposit: {
                encode(message: _30.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Deposit;
                fromPartial(object: any): _30.Deposit;
            };
            Proposal: {
                encode(message: _30.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Proposal;
                fromPartial(object: any): _30.Proposal;
            };
            TallyResult: {
                encode(message: _30.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyResult;
                fromPartial(object: any): _30.TallyResult;
            };
            Vote: {
                encode(message: _30.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.Vote;
                fromPartial(object: any): _30.Vote;
            };
            DepositParams: {
                encode(message: _30.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.DepositParams;
                fromPartial(object: any): _30.DepositParams;
            };
            VotingParams: {
                encode(message: _30.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.VotingParams;
                fromPartial(object: any): _30.VotingParams;
            };
            TallyParams: {
                encode(message: _30.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TallyParams;
                fromPartial(object: any): _30.TallyParams;
            };
            GenesisState: {
                encode(message: _29.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.GenesisState;
                fromPartial(object: any): _29.GenesisState;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _158.MsgClientImpl;
            QueryClientImpl: typeof _151.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _35.QueryValidatorsRequest): Promise<_35.QueryValidatorsResponse>;
                validator(request: _35.QueryValidatorRequest): Promise<_35.QueryValidatorResponse>;
                validatorDelegations(request: _35.QueryValidatorDelegationsRequest): Promise<_35.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _35.QueryValidatorUnbondingDelegationsRequest): Promise<_35.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _35.QueryDelegationRequest): Promise<_35.QueryDelegationResponse>;
                unbondingDelegation(request: _35.QueryUnbondingDelegationRequest): Promise<_35.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _35.QueryDelegatorDelegationsRequest): Promise<_35.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _35.QueryDelegatorUnbondingDelegationsRequest): Promise<_35.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _35.QueryRedelegationsRequest): Promise<_35.QueryRedelegationsResponse>;
                delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _35.QueryDelegatorValidatorRequest): Promise<_35.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _35.QueryHistoricalInfoRequest): Promise<_35.QueryHistoricalInfoResponse>;
                pool(request?: _35.QueryPoolRequest): Promise<_35.QueryPoolResponse>;
                params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _143.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _37.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _37.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _37.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _37.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _37.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _37.MsgCreateValidator): {
                        typeUrl: string;
                        value: _37.MsgCreateValidator;
                    };
                    editValidator(value: _37.MsgEditValidator): {
                        typeUrl: string;
                        value: _37.MsgEditValidator;
                    };
                    delegate(value: _37.MsgDelegate): {
                        typeUrl: string;
                        value: _37.MsgDelegate;
                    };
                    beginRedelegate(value: _37.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _37.MsgBeginRedelegate;
                    };
                    undelegate(value: _37.MsgUndelegate): {
                        typeUrl: string;
                        value: _37.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _37.MsgCreateValidator): {
                        typeUrl: string;
                        value: _37.MsgCreateValidator;
                    };
                    editValidator(value: _37.MsgEditValidator): {
                        typeUrl: string;
                        value: _37.MsgEditValidator;
                    };
                    delegate(value: _37.MsgDelegate): {
                        typeUrl: string;
                        value: _37.MsgDelegate;
                    };
                    beginRedelegate(value: _37.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _37.MsgBeginRedelegate;
                    };
                    undelegate(value: _37.MsgUndelegate): {
                        typeUrl: string;
                        value: _37.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _37.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _37.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _37.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _37.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _37.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _37.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _37.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _37.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _37.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _37.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _37.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgCreateValidator;
                fromPartial(object: any): _37.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _37.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgCreateValidatorResponse;
                fromPartial(_: any): _37.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _37.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgEditValidator;
                fromPartial(object: any): _37.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _37.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgEditValidatorResponse;
                fromPartial(_: any): _37.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _37.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgDelegate;
                fromPartial(object: any): _37.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _37.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgDelegateResponse;
                fromPartial(_: any): _37.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _37.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgBeginRedelegate;
                fromPartial(object: any): _37.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _37.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgBeginRedelegateResponse;
                fromPartial(object: any): _37.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _37.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgUndelegate;
                fromPartial(object: any): _37.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _37.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.MsgUndelegateResponse;
                fromPartial(object: any): _37.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _36.BondStatus;
            bondStatusToJSON(object: _36.BondStatus): string;
            BondStatus: typeof _36.BondStatus;
            BondStatusSDKType: typeof _36.BondStatus;
            HistoricalInfo: {
                encode(message: _36.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.HistoricalInfo;
                fromPartial(object: any): _36.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _36.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.CommissionRates;
                fromPartial(object: any): _36.CommissionRates;
            };
            Commission: {
                encode(message: _36.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Commission;
                fromPartial(object: any): _36.Commission;
            };
            Description: {
                encode(message: _36.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Description;
                fromPartial(object: any): _36.Description;
            };
            Validator: {
                encode(message: _36.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Validator;
                fromPartial(object: any): _36.Validator;
            };
            ValAddresses: {
                encode(message: _36.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.ValAddresses;
                fromPartial(object: any): _36.ValAddresses;
            };
            DVPair: {
                encode(message: _36.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVPair;
                fromPartial(object: any): _36.DVPair;
            };
            DVPairs: {
                encode(message: _36.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVPairs;
                fromPartial(object: any): _36.DVPairs;
            };
            DVVTriplet: {
                encode(message: _36.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVVTriplet;
                fromPartial(object: any): _36.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _36.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DVVTriplets;
                fromPartial(object: any): _36.DVVTriplets;
            };
            Delegation: {
                encode(message: _36.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Delegation;
                fromPartial(object: any): _36.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _36.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.UnbondingDelegation;
                fromPartial(object: any): _36.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _36.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.UnbondingDelegationEntry;
                fromPartial(object: any): _36.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _36.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationEntry;
                fromPartial(object: any): _36.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _36.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Redelegation;
                fromPartial(object: any): _36.Redelegation;
            };
            Params: {
                encode(message: _36.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Params;
                fromPartial(object: any): _36.Params;
            };
            DelegationResponse: {
                encode(message: _36.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.DelegationResponse;
                fromPartial(object: any): _36.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _36.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationEntryResponse;
                fromPartial(object: any): _36.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _36.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.RedelegationResponse;
                fromPartial(object: any): _36.RedelegationResponse;
            };
            Pool: {
                encode(message: _36.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Pool;
                fromPartial(object: any): _36.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _35.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorsRequest;
                fromPartial(object: any): _35.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _35.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorsResponse;
                fromPartial(object: any): _35.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _35.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorRequest;
                fromPartial(object: any): _35.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _35.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorResponse;
                fromPartial(object: any): _35.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _35.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorDelegationsRequest;
                fromPartial(object: any): _35.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _35.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorDelegationsResponse;
                fromPartial(object: any): _35.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _35.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: any): _35.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _35.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: any): _35.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _35.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationRequest;
                fromPartial(object: any): _35.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _35.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegationResponse;
                fromPartial(object: any): _35.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _35.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryUnbondingDelegationRequest;
                fromPartial(object: any): _35.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _35.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryUnbondingDelegationResponse;
                fromPartial(object: any): _35.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _35.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorDelegationsRequest;
                fromPartial(object: any): _35.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _35.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorDelegationsResponse;
                fromPartial(object: any): _35.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _35.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: any): _35.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _35.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: any): _35.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _35.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryRedelegationsRequest;
                fromPartial(object: any): _35.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _35.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryRedelegationsResponse;
                fromPartial(object: any): _35.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _35.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsRequest;
                fromPartial(object: any): _35.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _35.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorsResponse;
                fromPartial(object: any): _35.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _35.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorRequest;
                fromPartial(object: any): _35.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _35.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryDelegatorValidatorResponse;
                fromPartial(object: any): _35.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _35.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryHistoricalInfoRequest;
                fromPartial(object: any): _35.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _35.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryHistoricalInfoResponse;
                fromPartial(object: any): _35.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _35.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPoolRequest;
                fromPartial(_: any): _35.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _35.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryPoolResponse;
                fromPartial(object: any): _35.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _35.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsRequest;
                fromPartial(_: any): _35.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _35.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryParamsResponse;
                fromPartial(object: any): _35.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _34.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.GenesisState;
                fromPartial(object: any): _34.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _34.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.LastValidatorPower;
                fromPartial(object: any): _34.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _33.AuthorizationType;
            authorizationTypeToJSON(object: _33.AuthorizationType): string;
            AuthorizationType: typeof _33.AuthorizationType;
            AuthorizationTypeSDKType: typeof _33.AuthorizationType;
            StakeAuthorization: {
                encode(message: _33.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.StakeAuthorization;
                fromPartial(object: any): _33.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _33.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.StakeAuthorization_Validators;
                fromPartial(object: any): _33.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _38.SignMode;
                signModeToJSON(object: _38.SignMode): string;
                SignMode: typeof _38.SignMode;
                SignModeSDKType: typeof _38.SignMode;
                SignatureDescriptors: {
                    encode(message: _38.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptors;
                    fromPartial(object: any): _38.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _38.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor;
                    fromPartial(object: any): _38.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _38.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data;
                    fromPartial(object: any): _38.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _38.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data_Single;
                    fromPartial(object: any): _38.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _38.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.SignatureDescriptor_Data_Multi;
                    fromPartial(object: any): _38.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _152.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _39.SimulateRequest): Promise<_39.SimulateResponse>;
                getTx(request: _39.GetTxRequest): Promise<_39.GetTxResponse>;
                broadcastTx(request: _39.BroadcastTxRequest): Promise<_39.BroadcastTxResponse>;
                getTxsEvent(request: _39.GetTxsEventRequest): Promise<_39.GetTxsEventResponse>;
                getBlockWithTxs(request: _39.GetBlockWithTxsRequest): Promise<_39.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _144.LCDQueryClient;
            Tx: {
                encode(message: _40.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Tx;
                fromPartial(object: any): _40.Tx;
            };
            TxRaw: {
                encode(message: _40.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.TxRaw;
                fromPartial(object: any): _40.TxRaw;
            };
            SignDoc: {
                encode(message: _40.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignDoc;
                fromPartial(object: any): _40.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _40.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignDocDirectAux;
                fromPartial(object: any): _40.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _40.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.TxBody;
                fromPartial(object: any): _40.TxBody;
            };
            AuthInfo: {
                encode(message: _40.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.AuthInfo;
                fromPartial(object: any): _40.AuthInfo;
            };
            SignerInfo: {
                encode(message: _40.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SignerInfo;
                fromPartial(object: any): _40.SignerInfo;
            };
            ModeInfo: {
                encode(message: _40.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo;
                fromPartial(object: any): _40.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _40.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo_Single;
                fromPartial(object: any): _40.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _40.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.ModeInfo_Multi;
                fromPartial(object: any): _40.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _40.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Fee;
                fromPartial(object: any): _40.Fee;
            };
            Tip: {
                encode(message: _40.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Tip;
                fromPartial(object: any): _40.Tip;
            };
            AuxSignerData: {
                encode(message: _40.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.AuxSignerData;
                fromPartial(object: any): _40.AuxSignerData;
            };
            orderByFromJSON(object: any): _39.OrderBy;
            orderByToJSON(object: _39.OrderBy): string;
            broadcastModeFromJSON(object: any): _39.BroadcastMode;
            broadcastModeToJSON(object: _39.BroadcastMode): string;
            OrderBy: typeof _39.OrderBy;
            OrderBySDKType: typeof _39.OrderBy;
            BroadcastMode: typeof _39.BroadcastMode;
            BroadcastModeSDKType: typeof _39.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _39.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxsEventRequest;
                fromPartial(object: any): _39.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _39.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxsEventResponse;
                fromPartial(object: any): _39.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _39.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BroadcastTxRequest;
                fromPartial(object: any): _39.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _39.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BroadcastTxResponse;
                fromPartial(object: any): _39.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _39.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SimulateRequest;
                fromPartial(object: any): _39.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _39.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SimulateResponse;
                fromPartial(object: any): _39.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _39.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxRequest;
                fromPartial(object: any): _39.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _39.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetTxResponse;
                fromPartial(object: any): _39.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _39.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetBlockWithTxsRequest;
                fromPartial(object: any): _39.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _39.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.GetBlockWithTxsResponse;
                fromPartial(object: any): _39.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _159.MsgClientImpl;
            QueryClientImpl: typeof _153.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _41.QueryCurrentPlanRequest): Promise<_41.QueryCurrentPlanResponse>;
                appliedPlan(request: _41.QueryAppliedPlanRequest): Promise<_41.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _41.QueryUpgradedConsensusStateRequest): Promise<_41.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _41.QueryModuleVersionsRequest): Promise<_41.QueryModuleVersionsResponse>;
                authority(request?: _41.QueryAuthorityRequest): Promise<_41.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _145.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _42.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _42.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _42.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _42.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _42.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _42.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _42.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _42.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _42.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _42.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _42.MsgSoftwareUpgrade) => {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    };
                    fromAmino: ({ authority, plan }: {
                        authority: string;
                        plan: {
                            name: string;
                            time: {
                                seconds: string;
                                nanos: number;
                            };
                            height: string;
                            info: string;
                            upgraded_client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                        };
                    }) => _42.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _42.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _42.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _43.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Plan;
                fromPartial(object: any): _43.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _43.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.SoftwareUpgradeProposal;
                fromPartial(object: any): _43.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _43.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.CancelSoftwareUpgradeProposal;
                fromPartial(object: any): _43.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _43.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.ModuleVersion;
                fromPartial(object: any): _43.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _42.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSoftwareUpgrade;
                fromPartial(object: any): _42.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _42.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgSoftwareUpgradeResponse;
                fromPartial(_: any): _42.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _42.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCancelUpgrade;
                fromPartial(object: any): _42.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _42.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgCancelUpgradeResponse;
                fromPartial(_: any): _42.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _41.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCurrentPlanRequest;
                fromPartial(_: any): _41.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _41.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryCurrentPlanResponse;
                fromPartial(object: any): _41.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _41.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAppliedPlanRequest;
                fromPartial(object: any): _41.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _41.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAppliedPlanResponse;
                fromPartial(object: any): _41.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _41.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryUpgradedConsensusStateRequest;
                fromPartial(object: any): _41.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _41.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryUpgradedConsensusStateResponse;
                fromPartial(object: any): _41.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _41.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleVersionsRequest;
                fromPartial(object: any): _41.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _41.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleVersionsResponse;
                fromPartial(object: any): _41.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _41.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAuthorityRequest;
                fromPartial(_: any): _41.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _41.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAuthorityResponse;
                fromPartial(object: any): _41.QueryAuthorityResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _154.MsgClientImpl;
                };
                bank: {
                    v1beta1: _155.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _156.MsgClientImpl;
                };
                gov: {
                    v1beta1: _157.MsgClientImpl;
                };
                staking: {
                    v1beta1: _158.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _159.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _4.QueryAccountsRequest): Promise<_4.QueryAccountsResponse>;
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        moduleAccounts(request?: _4.QueryModuleAccountsRequest): Promise<_4.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _4.Bech32PrefixRequest): Promise<_4.Bech32PrefixResponse>;
                        addressBytesToString(request: _4.AddressBytesToStringRequest): Promise<_4.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _4.AddressStringToBytesRequest): Promise<_4.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _8.QueryGrantsRequest): Promise<_8.QueryGrantsResponse>;
                        granterGrants(request: _8.QueryGranterGrantsRequest): Promise<_8.QueryGranterGrantsResponse>;
                        granteeGrants(request: _8.QueryGranteeGrantsRequest): Promise<_8.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _13.QueryBalanceRequest): Promise<_13.QueryBalanceResponse>;
                        allBalances(request: _13.QueryAllBalancesRequest): Promise<_13.QueryAllBalancesResponse>;
                        spendableBalances(request: _13.QuerySpendableBalancesRequest): Promise<_13.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _13.QueryTotalSupplyRequest): Promise<_13.QueryTotalSupplyResponse>;
                        supplyOf(request: _13.QuerySupplyOfRequest): Promise<_13.QuerySupplyOfResponse>;
                        params(request?: _13.QueryParamsRequest): Promise<_13.QueryParamsResponse>;
                        denomMetadata(request: _13.QueryDenomMetadataRequest): Promise<_13.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _13.QueryDenomsMetadataRequest): Promise<_13.QueryDenomsMetadataResponse>;
                        denomOwners(request: _13.QueryDenomOwnersRequest): Promise<_13.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _27.QueryParamsRequest): Promise<_27.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _27.QueryValidatorOutstandingRewardsRequest): Promise<_27.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _27.QueryValidatorCommissionRequest): Promise<_27.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _27.QueryValidatorSlashesRequest): Promise<_27.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _27.QueryDelegationRewardsRequest): Promise<_27.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _27.QueryDelegationTotalRewardsRequest): Promise<_27.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _27.QueryDelegatorValidatorsRequest): Promise<_27.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _27.QueryDelegatorWithdrawAddressRequest): Promise<_27.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _27.QueryCommunityPoolRequest): Promise<_27.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _31.QueryProposalRequest): Promise<_31.QueryProposalResponse>;
                        proposals(request: _31.QueryProposalsRequest): Promise<_31.QueryProposalsResponse>;
                        vote(request: _31.QueryVoteRequest): Promise<_31.QueryVoteResponse>;
                        votes(request: _31.QueryVotesRequest): Promise<_31.QueryVotesResponse>;
                        params(request: _31.QueryParamsRequest): Promise<_31.QueryParamsResponse>;
                        deposit(request: _31.QueryDepositRequest): Promise<_31.QueryDepositResponse>;
                        deposits(request: _31.QueryDepositsRequest): Promise<_31.QueryDepositsResponse>;
                        tallyResult(request: _31.QueryTallyResultRequest): Promise<_31.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _35.QueryValidatorsRequest): Promise<_35.QueryValidatorsResponse>;
                        validator(request: _35.QueryValidatorRequest): Promise<_35.QueryValidatorResponse>;
                        validatorDelegations(request: _35.QueryValidatorDelegationsRequest): Promise<_35.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _35.QueryValidatorUnbondingDelegationsRequest): Promise<_35.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _35.QueryDelegationRequest): Promise<_35.QueryDelegationResponse>;
                        unbondingDelegation(request: _35.QueryUnbondingDelegationRequest): Promise<_35.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _35.QueryDelegatorDelegationsRequest): Promise<_35.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _35.QueryDelegatorUnbondingDelegationsRequest): Promise<_35.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _35.QueryRedelegationsRequest): Promise<_35.QueryRedelegationsResponse>;
                        delegatorValidators(request: _35.QueryDelegatorValidatorsRequest): Promise<_35.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _35.QueryDelegatorValidatorRequest): Promise<_35.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _35.QueryHistoricalInfoRequest): Promise<_35.QueryHistoricalInfoResponse>;
                        pool(request?: _35.QueryPoolRequest): Promise<_35.QueryPoolResponse>;
                        params(request?: _35.QueryParamsRequest): Promise<_35.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _39.SimulateRequest): Promise<_39.SimulateResponse>;
                        getTx(request: _39.GetTxRequest): Promise<_39.GetTxResponse>;
                        broadcastTx(request: _39.BroadcastTxRequest): Promise<_39.BroadcastTxResponse>;
                        getTxsEvent(request: _39.GetTxsEventRequest): Promise<_39.GetTxsEventResponse>;
                        getBlockWithTxs(request: _39.GetBlockWithTxsRequest): Promise<_39.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _41.QueryCurrentPlanRequest): Promise<_41.QueryCurrentPlanResponse>;
                        appliedPlan(request: _41.QueryAppliedPlanRequest): Promise<_41.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _41.QueryUpgradedConsensusStateRequest): Promise<_41.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _41.QueryModuleVersionsRequest): Promise<_41.QueryModuleVersionsResponse>;
                        authority(request?: _41.QueryAuthorityRequest): Promise<_41.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _138.LCDQueryClient;
                };
                authz: {
                    v1beta1: _139.LCDQueryClient;
                };
                bank: {
                    v1beta1: _140.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _141.LCDQueryClient;
                };
                gov: {
                    v1beta1: _142.LCDQueryClient;
                };
                staking: {
                    v1beta1: _143.LCDQueryClient;
                };
                tx: {
                    v1beta1: _144.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _145.LCDQueryClient;
                };
            };
        }>;
    };
}
