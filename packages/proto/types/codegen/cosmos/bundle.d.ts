import * as _2 from "./authz/v1beta1/authz";
import * as _3 from "./authz/v1beta1/event";
import * as _4 from "./authz/v1beta1/genesis";
import * as _5 from "./authz/v1beta1/query";
import * as _6 from "./authz/v1beta1/tx";
import * as _7 from "./bank/v1beta1/authz";
import * as _8 from "./bank/v1beta1/bank";
import * as _9 from "./bank/v1beta1/genesis";
import * as _10 from "./bank/v1beta1/query";
import * as _11 from "./bank/v1beta1/tx";
import * as _12 from "./base/abci/v1beta1/abci";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/reflection/v2alpha1/reflection";
import * as _15 from "./base/v1beta1/coin";
import * as _16 from "./crypto/ed25519/keys";
import * as _17 from "./crypto/hd/v1/hd";
import * as _18 from "./crypto/keyring/v1/record";
import * as _19 from "./crypto/multisig/keys";
import * as _20 from "./crypto/secp256k1/keys";
import * as _21 from "./crypto/secp256r1/keys";
import * as _22 from "./distribution/v1beta1/distribution";
import * as _23 from "./distribution/v1beta1/genesis";
import * as _24 from "./distribution/v1beta1/query";
import * as _25 from "./distribution/v1beta1/tx";
import * as _26 from "./gov/v1/genesis";
import * as _27 from "./gov/v1/gov";
import * as _28 from "./gov/v1/query";
import * as _29 from "./gov/v1/tx";
import * as _30 from "./gov/v1beta1/genesis";
import * as _31 from "./gov/v1beta1/gov";
import * as _32 from "./gov/v1beta1/query";
import * as _33 from "./gov/v1beta1/tx";
import * as _34 from "./staking/v1beta1/authz";
import * as _35 from "./staking/v1beta1/genesis";
import * as _36 from "./staking/v1beta1/query";
import * as _37 from "./staking/v1beta1/staking";
import * as _38 from "./staking/v1beta1/tx";
import * as _39 from "./tx/signing/v1beta1/signing";
import * as _40 from "./tx/v1beta1/service";
import * as _41 from "./tx/v1beta1/tx";
import * as _42 from "./upgrade/v1beta1/query";
import * as _43 from "./upgrade/v1beta1/tx";
import * as _44 from "./upgrade/v1beta1/upgrade";
import * as _148 from "./authz/v1beta1/query.lcd";
import * as _149 from "./bank/v1beta1/query.lcd";
import * as _150 from "./distribution/v1beta1/query.lcd";
import * as _151 from "./gov/v1/query.lcd";
import * as _152 from "./gov/v1beta1/query.lcd";
import * as _153 from "./staking/v1beta1/query.lcd";
import * as _154 from "./tx/v1beta1/service.lcd";
import * as _155 from "./upgrade/v1beta1/query.lcd";
import * as _156 from "./authz/v1beta1/query.rpc.query";
import * as _157 from "./bank/v1beta1/query.rpc.query";
import * as _158 from "./distribution/v1beta1/query.rpc.query";
import * as _159 from "./gov/v1/query.rpc.query";
import * as _160 from "./gov/v1beta1/query.rpc.query";
import * as _161 from "./staking/v1beta1/query.rpc.query";
import * as _162 from "./tx/v1beta1/service.rpc.svc";
import * as _163 from "./upgrade/v1beta1/query.rpc.query";
import * as _164 from "./authz/v1beta1/tx.rpc.msg";
import * as _165 from "./bank/v1beta1/tx.rpc.msg";
import * as _166 from "./distribution/v1beta1/tx.rpc.msg";
import * as _167 from "./gov/v1/tx.rpc.msg";
import * as _168 from "./gov/v1beta1/tx.rpc.msg";
import * as _169 from "./staking/v1beta1/tx.rpc.msg";
import * as _170 from "./upgrade/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _156.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _5.QueryGrantsRequest): Promise<_5.QueryGrantsResponse>;
                granterGrants(request: _5.QueryGranterGrantsRequest): Promise<_5.QueryGranterGrantsResponse>;
                granteeGrants(request: _5.QueryGranteeGrantsRequest): Promise<_5.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _6.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _6.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _6.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _6.MsgGrant): {
                        typeUrl: string;
                        value: _6.MsgGrant;
                    };
                    exec(value: _6.MsgExec): {
                        typeUrl: string;
                        value: _6.MsgExec;
                    };
                    revoke(value: _6.MsgRevoke): {
                        typeUrl: string;
                        value: _6.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _6.MsgGrant): {
                        typeUrl: string;
                        value: _6.MsgGrant;
                    };
                    exec(value: _6.MsgExec): {
                        typeUrl: string;
                        value: _6.MsgExec;
                    };
                    revoke(value: _6.MsgRevoke): {
                        typeUrl: string;
                        value: _6.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _6.MsgGrant) => {
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
                    }) => _6.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _6.MsgExec) => {
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
                    }) => _6.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _6.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _6.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _6.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgGrant;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _6.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _6.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgExecResponse;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _6.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _6.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgExec;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _6.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _6.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgGrantResponse;
                fromPartial(_: {}): _6.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _6.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgRevoke;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _6.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _6.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.MsgRevokeResponse;
                fromPartial(_: {}): _6.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _5.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _5.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _5.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _5.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _5.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranterGrantsRequest;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _5.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _5.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranterGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _5.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _5.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranteeGrantsRequest;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _5.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _5.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryGranteeGrantsResponse;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _5.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _4.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.GenesisState;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _4.GenesisState;
            };
            EventGrant: {
                encode(message: _3.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventGrant;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _3.EventGrant;
            };
            EventRevoke: {
                encode(message: _3.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.EventRevoke;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _3.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _2.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GenericAuthorization;
                fromPartial(object: {
                    msg?: string;
                }): _2.GenericAuthorization;
            };
            Grant: {
                encode(message: _2.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Grant;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _2.Grant;
            };
            GrantAuthorization: {
                encode(message: _2.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GrantAuthorization;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _2.GrantAuthorization;
            };
            GrantQueueItem: {
                encode(message: _2.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.GrantQueueItem;
                fromPartial(object: {
                    msgTypeUrls?: string[];
                }): _2.GrantQueueItem;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _165.MsgClientImpl;
            QueryClientImpl: typeof _157.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _10.QueryBalanceRequest): Promise<_10.QueryBalanceResponse>;
                allBalances(request: _10.QueryAllBalancesRequest): Promise<_10.QueryAllBalancesResponse>;
                spendableBalances(request: _10.QuerySpendableBalancesRequest): Promise<_10.QuerySpendableBalancesResponse>;
                totalSupply(request?: _10.QueryTotalSupplyRequest): Promise<_10.QueryTotalSupplyResponse>;
                supplyOf(request: _10.QuerySupplyOfRequest): Promise<_10.QuerySupplyOfResponse>;
                params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                denomMetadata(request: _10.QueryDenomMetadataRequest): Promise<_10.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _10.QueryDenomsMetadataRequest): Promise<_10.QueryDenomsMetadataResponse>;
                denomOwners(request: _10.QueryDenomOwnersRequest): Promise<_10.QueryDenomOwnersResponse>;
            };
            LCDQueryClient: typeof _149.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: _11.MsgSend;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: _11.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _11.MsgSend): {
                        typeUrl: string;
                        value: _11.MsgSend;
                    };
                    multiSend(value: _11.MsgMultiSend): {
                        typeUrl: string;
                        value: _11.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _11.MsgSend) => {
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
                    }) => _11.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _11.MsgMultiSend) => {
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
                    }) => _11.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _11.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgSend;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _11.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _11.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgSendResponse;
                fromPartial(_: {}): _11.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _11.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgMultiSend;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _11.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _11.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MsgMultiSendResponse;
                fromPartial(_: {}): _11.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _10.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryBalanceRequest;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _10.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _10.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryBalanceResponse;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _10.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _10.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAllBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _10.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _10.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryAllBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _10.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _10.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySpendableBalancesRequest;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _10.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _10.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySpendableBalancesResponse;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _10.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _10.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryTotalSupplyRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _10.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _10.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryTotalSupplyResponse;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _10.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _10.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySupplyOfRequest;
                fromPartial(object: {
                    denom?: string;
                }): _10.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _10.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QuerySupplyOfResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _10.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _10.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsRequest;
                fromPartial(_: {}): _10.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _10.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _10.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _10.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomsMetadataRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _10.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _10.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomsMetadataResponse;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _10.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _10.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _10.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _10.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _10.QueryDenomMetadataResponse;
            };
            QueryDenomOwnersRequest: {
                encode(message: _10.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomOwnersRequest;
                fromPartial(object: {
                    denom?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _10.QueryDenomOwnersRequest;
            };
            DenomOwner: {
                encode(message: _10.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.DenomOwner;
                fromPartial(object: {
                    address?: string;
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _10.DenomOwner;
            };
            QueryDenomOwnersResponse: {
                encode(message: _10.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.QueryDenomOwnersResponse;
                fromPartial(object: {
                    denomOwners?: {
                        address?: string;
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _10.QueryDenomOwnersResponse;
            };
            GenesisState: {
                encode(message: _9.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.GenesisState;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    }[];
                }): _9.GenesisState;
            };
            Balance: {
                encode(message: _9.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Balance;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _9.Balance;
            };
            Params: {
                encode(message: _8.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Params;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _8.Params;
            };
            SendEnabled: {
                encode(message: _8.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SendEnabled;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _8.SendEnabled;
            };
            Input: {
                encode(message: _8.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Input;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.Input;
            };
            Output: {
                encode(message: _8.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Output;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.Output;
            };
            Supply: {
                encode(message: _8.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Supply;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.Supply;
            };
            DenomUnit: {
                encode(message: _8.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.DenomUnit;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _8.DenomUnit;
            };
            Metadata: {
                encode(message: _8.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Metadata;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                    uri?: string;
                    uriHash?: string;
                }): _8.Metadata;
            };
            SendAuthorization: {
                encode(message: _7.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.SendAuthorization;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _7.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _12.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.TxResponse;
                    fromPartial(object: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _12.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _12.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ABCIMessageLog;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _12.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _12.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.StringEvent;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _12.StringEvent;
                };
                Attribute: {
                    encode(message: _12.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Attribute;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _12.Attribute;
                };
                GasInfo: {
                    encode(message: _12.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.GasInfo;
                    fromPartial(object: {
                        gasWanted?: any;
                        gasUsed?: any;
                    }): _12.GasInfo;
                };
                Result: {
                    encode(message: _12.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Result;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _12.Result;
                };
                SimulationResponse: {
                    encode(message: _12.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SimulationResponse;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: any;
                            gasUsed?: any;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                            msgResponses?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                    }): _12.SimulationResponse;
                };
                MsgData: {
                    encode(message: _12.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgData;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _12.MsgData;
                };
                TxMsgData: {
                    encode(message: _12.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.TxMsgData;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _12.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _12.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.SearchTxsResult;
                    fromPartial(object: {
                        totalCount?: any;
                        count?: any;
                        pageNumber?: any;
                        pageTotal?: any;
                        limit?: any;
                        txs?: {
                            height?: any;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: any;
                            gasUsed?: any;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _12.SearchTxsResult;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _13.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageRequest;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _13.PageRequest;
                };
                PageResponse: {
                    encode(message: _13.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.PageResponse;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: any;
                    }): _13.PageResponse;
                };
            };
        }
        namespace reflection {
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _14.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AppDescriptor;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _14.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _14.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.TxDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _14.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _14.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.AuthnDescriptor;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _14.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _14.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.SigningModeDescriptor;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _14.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _14.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ChainDescriptor;
                    fromPartial(object: {
                        id?: string;
                    }): _14.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _14.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.CodecDescriptor;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _14.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _14.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _14.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _14.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceImplementerDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _14.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _14.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.InterfaceAcceptingMessageDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _14.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _14.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ConfigurationDescriptor;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _14.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _14.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.MsgDescriptor;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _14.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _14.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorRequest;
                    fromPartial(_: {}): _14.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _14.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetAuthnDescriptorResponse;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _14.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _14.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorRequest;
                    fromPartial(_: {}): _14.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _14.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetChainDescriptorResponse;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _14.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _14.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorRequest;
                    fromPartial(_: {}): _14.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _14.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetCodecDescriptorResponse;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _14.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _14.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorRequest;
                    fromPartial(_: {}): _14.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _14.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetConfigurationDescriptorResponse;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _14.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _14.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorRequest;
                    fromPartial(_: {}): _14.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _14.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetQueryServicesDescriptorResponse;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _14.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _14.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorRequest;
                    fromPartial(_: {}): _14.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _14.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.GetTxDescriptorResponse;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _14.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _14.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServicesDescriptor;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _14.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _14.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryServiceDescriptor;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _14.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _14.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.QueryMethodDescriptor;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _14.QueryMethodDescriptor;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _15.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.Coin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _15.Coin;
            };
            DecCoin: {
                encode(message: _15.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecCoin;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _15.DecCoin;
            };
            IntProto: {
                encode(message: _15.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.IntProto;
                fromPartial(object: {
                    int?: string;
                }): _15.IntProto;
            };
            DecProto: {
                encode(message: _15.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.DecProto;
                fromPartial(object: {
                    dec?: string;
                }): _15.DecProto;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _16.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _16.PubKey;
            };
            PrivKey: {
                encode(message: _16.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _16.PrivKey;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _17.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.BIP44Params;
                    fromPartial(object: {
                        purpose?: number;
                        coinType?: number;
                        account?: number;
                        change?: boolean;
                        addressIndex?: number;
                    }): _17.BIP44Params;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _18.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record;
                    fromPartial(object: {
                        name?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        local?: {
                            privKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            privKeyType?: string;
                        };
                        ledger?: {
                            path?: {
                                purpose?: number;
                                coinType?: number;
                                account?: number;
                                change?: boolean;
                                addressIndex?: number;
                            };
                        };
                        multi?: {};
                        offline?: {};
                    }): _18.Record;
                };
                Record_Local: {
                    encode(message: _18.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Local;
                    fromPartial(object: {
                        privKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        privKeyType?: string;
                    }): _18.Record_Local;
                };
                Record_Ledger: {
                    encode(message: _18.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Ledger;
                    fromPartial(object: {
                        path?: {
                            purpose?: number;
                            coinType?: number;
                            account?: number;
                            change?: boolean;
                            addressIndex?: number;
                        };
                    }): _18.Record_Ledger;
                };
                Record_Multi: {
                    encode(_: _18.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Multi;
                    fromPartial(_: {}): _18.Record_Multi;
                };
                Record_Offline: {
                    encode(_: _18.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.Record_Offline;
                    fromPartial(_: {}): _18.Record_Offline;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _19.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.LegacyAminoPubKey;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _19.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _20.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _20.PubKey;
            };
            PrivKey: {
                encode(message: _20.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.PrivKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _20.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _21.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PubKey;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _21.PubKey;
            };
            PrivKey: {
                encode(message: _21.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.PrivKey;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _21.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _166.MsgClientImpl;
            QueryClientImpl: typeof _158.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _150.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _25.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _25.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _25.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _25.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _25.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _25.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _25.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _25.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _25.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _25.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _25.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _25.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _25.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _25.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _25.MsgFundCommunityPool) => {
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
                    }) => _25.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _25.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddress;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _25.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _25.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgSetWithdrawAddressResponse;
                fromPartial(_: {}): _25.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _25.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorReward;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _25.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _25.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawDelegatorRewardResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _25.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommission;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _25.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _25.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgWithdrawValidatorCommissionResponse;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _25.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _25.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPool;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _25.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _25.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.MsgFundCommunityPoolResponse;
                fromPartial(_: {}): _25.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _24.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsRequest;
                fromPartial(_: {}): _24.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _24.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _24.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _24.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _24.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _24.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorOutstandingRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _24.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _24.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _24.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _24.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorCommissionResponse;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _24.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _24.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesRequest;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: any;
                    endingHeight?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _24.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _24.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryValidatorSlashesResponse;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _24.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _24.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _24.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _24.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _24.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _24.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _24.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _24.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegationTotalRewardsResponse;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _24.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _24.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _24.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _24.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: string[];
                }): _24.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _24.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressRequest;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _24.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _24.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryDelegatorWithdrawAddressResponse;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _24.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _24.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolRequest;
                fromPartial(_: {}): _24.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _24.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.QueryCommunityPoolResponse;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _24.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _23.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorWithdrawInfo;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _23.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _23.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorOutstandingRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _23.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _23.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorAccumulatedCommissionRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _23.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _23.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorHistoricalRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: any;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _23.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _23.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorCurrentRewardsRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: any;
                    };
                }): _23.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _23.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DelegatorStartingInfoRecord;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: any;
                        stake?: string;
                        height?: any;
                    };
                }): _23.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _23.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.ValidatorSlashEventRecord;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: any;
                    period?: any;
                    validatorSlashEvent?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    };
                }): _23.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _23.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.GenesisState;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: any;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: any;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: any;
                            stake?: string;
                            height?: any;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: any;
                        period?: any;
                        validatorSlashEvent?: {
                            validatorPeriod?: any;
                            fraction?: string;
                        };
                    }[];
                }): _23.GenesisState;
            };
            Params: {
                encode(message: _22.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Params;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _22.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _22.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorHistoricalRewards;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _22.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _22.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorCurrentRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: any;
                }): _22.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _22.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorAccumulatedCommission;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _22.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _22.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorOutstandingRewards;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _22.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _22.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvent;
                fromPartial(object: {
                    validatorPeriod?: any;
                    fraction?: string;
                }): _22.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _22.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.ValidatorSlashEvents;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: any;
                        fraction?: string;
                    }[];
                }): _22.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _22.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.FeePool;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _22.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _22.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _22.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _22.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegatorStartingInfo;
                fromPartial(object: {
                    previousPeriod?: any;
                    stake?: string;
                    height?: any;
                }): _22.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _22.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.DelegationDelegatorReward;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _22.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _22.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.CommunityPoolSpendProposalWithDeposit;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _22.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _167.MsgClientImpl;
            QueryClientImpl: typeof _159.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _151.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _29.MsgExecLegacyContent;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _29.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _29.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _29.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _29.MsgExecLegacyContent;
                    };
                    vote(value: _29.MsgVote): {
                        typeUrl: string;
                        value: _29.MsgVote;
                    };
                    voteWeighted(value: _29.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _29.MsgVoteWeighted;
                    };
                    deposit(value: _29.MsgDeposit): {
                        typeUrl: string;
                        value: _29.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ messages, initialDeposit, proposer, metadata }: _29.MsgSubmitProposal) => {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    };
                    fromAmino: ({ messages, initial_deposit, proposer, metadata }: {
                        messages: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                        metadata: string;
                    }) => _29.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: ({ content, authority }: _29.MsgExecLegacyContent) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    };
                    fromAmino: ({ content, authority }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        authority: string;
                    }) => _29.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option, metadata }: _29.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, option, metadata }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                        metadata: string;
                    }) => _29.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options, metadata }: _29.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    };
                    fromAmino: ({ proposal_id, voter, options, metadata }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                        metadata: string;
                    }) => _29.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _29.MsgDeposit) => {
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
                    }) => _29.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _29.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposal;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                    metadata?: string;
                }): _29.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _29.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: any;
                }): _29.MsgSubmitProposalResponse;
            };
            MsgExecLegacyContent: {
                encode(message: _29.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExecLegacyContent;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    authority?: string;
                }): _29.MsgExecLegacyContent;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _29.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgExecLegacyContentResponse;
                fromPartial(_: {}): _29.MsgExecLegacyContentResponse;
            };
            MsgVote: {
                encode(message: _29.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _27.VoteOption;
                    metadata?: string;
                }): _29.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _29.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteResponse;
                fromPartial(_: {}): _29.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _29.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _27.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _29.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _29.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgVoteWeightedResponse;
                fromPartial(_: {}): _29.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _29.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDeposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _29.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _29.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.MsgDepositResponse;
                fromPartial(_: {}): _29.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _28.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _28.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _28.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _27.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    };
                }): _28.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _28.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _27.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _28.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _28.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _27.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _28.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _28.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _28.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _28.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _27.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    };
                }): _28.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _28.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _28.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _28.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _27.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _28.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _28.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _28.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _28.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _28.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _28.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _28.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _28.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _28.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _28.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _28.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _28.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _28.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _28.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _28.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _28.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                }): _28.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _27.VoteOption;
            voteOptionToJSON(object: _27.VoteOption): string;
            proposalStatusFromJSON(object: any): _27.ProposalStatus;
            proposalStatusToJSON(object: _27.ProposalStatus): string;
            VoteOption: typeof _27.VoteOption;
            VoteOptionSDKType: typeof _27.VoteOptionSDKType;
            ProposalStatus: typeof _27.ProposalStatus;
            ProposalStatusSDKType: typeof _27.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _27.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.WeightedVoteOption;
                fromPartial(object: {
                    option?: _27.VoteOption;
                    weight?: string;
                }): _27.WeightedVoteOption;
            };
            Deposit: {
                encode(message: _27.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Deposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _27.Deposit;
            };
            Proposal: {
                encode(message: _27.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Proposal;
                fromPartial(object: {
                    id?: any;
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    status?: _27.ProposalStatus;
                    finalTallyResult?: {
                        yesCount?: string;
                        abstainCount?: string;
                        noCount?: string;
                        noWithVetoCount?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                    metadata?: string;
                }): _27.Proposal;
            };
            TallyResult: {
                encode(message: _27.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyResult;
                fromPartial(object: {
                    yesCount?: string;
                    abstainCount?: string;
                    noCount?: string;
                    noWithVetoCount?: string;
                }): _27.TallyResult;
            };
            Vote: {
                encode(message: _27.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.Vote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _27.VoteOption;
                        weight?: string;
                    }[];
                    metadata?: string;
                }): _27.Vote;
            };
            DepositParams: {
                encode(message: _27.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _27.DepositParams;
            };
            VotingParams: {
                encode(message: _27.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _27.VotingParams;
            };
            TallyParams: {
                encode(message: _27.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TallyParams;
                fromPartial(object: {
                    quorum?: string;
                    threshold?: string;
                    vetoThreshold?: string;
                }): _27.TallyParams;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        options?: {
                            option?: _27.VoteOption;
                            weight?: string;
                        }[];
                        metadata?: string;
                    }[];
                    proposals?: {
                        id?: any;
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        status?: _27.ProposalStatus;
                        finalTallyResult?: {
                            yesCount?: string;
                            abstainCount?: string;
                            noCount?: string;
                            noWithVetoCount?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                        metadata?: string;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: string;
                        threshold?: string;
                        vetoThreshold?: string;
                    };
                }): _26.GenesisState;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _168.MsgClientImpl;
            QueryClientImpl: typeof _160.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _152.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _33.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _33.MsgSubmitProposal;
                    };
                    vote(value: _33.MsgVote): {
                        typeUrl: string;
                        value: _33.MsgVote;
                    };
                    voteWeighted(value: _33.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _33.MsgVoteWeighted;
                    };
                    deposit(value: _33.MsgDeposit): {
                        typeUrl: string;
                        value: _33.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _33.MsgSubmitProposal) => {
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
                    }) => _33.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _33.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _33.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _33.MsgVoteWeighted) => {
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
                    }) => _33.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _33.MsgDeposit) => {
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
                    }) => _33.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _33.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposal;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _33.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _33.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgSubmitProposalResponse;
                fromPartial(object: {
                    proposalId?: any;
                }): _33.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _33.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _31.VoteOption;
                }): _33.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _33.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteResponse;
                fromPartial(_: {}): _33.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _33.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeighted;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    options?: {
                        option?: _31.VoteOption;
                        weight?: string;
                    }[];
                }): _33.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _33.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgVoteWeightedResponse;
                fromPartial(_: {}): _33.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _33.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDeposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _33.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _33.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.MsgDepositResponse;
                fromPartial(_: {}): _33.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _32.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _32.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _32.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalResponse;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _31.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _32.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _32.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsRequest;
                fromPartial(object: {
                    proposalStatus?: _31.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _32.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryProposalsResponse;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _31.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _32.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _32.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteRequest;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                }): _32.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _32.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVoteResponse;
                fromPartial(object: {
                    vote?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _31.VoteOption;
                        options?: {
                            option?: _31.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _32.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _32.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _32.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryVotesResponse;
                fromPartial(object: {
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _31.VoteOption;
                        options?: {
                            option?: _31.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _32.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _32.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsRequest;
                fromPartial(object: {
                    paramsType?: string;
                }): _32.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _32.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryParamsResponse;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _32.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _32.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositRequest;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                }): _32.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _32.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositResponse;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _32.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _32.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsRequest;
                fromPartial(object: {
                    proposalId?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _32.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _32.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryDepositsResponse;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _32.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _32.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultRequest;
                fromPartial(object: {
                    proposalId?: any;
                }): _32.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _32.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.QueryTallyResultResponse;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _32.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _31.VoteOption;
            voteOptionToJSON(object: _31.VoteOption): string;
            proposalStatusFromJSON(object: any): _31.ProposalStatus;
            proposalStatusToJSON(object: _31.ProposalStatus): string;
            VoteOption: typeof _31.VoteOption;
            VoteOptionSDKType: typeof _31.VoteOptionSDKType;
            ProposalStatus: typeof _31.ProposalStatus;
            ProposalStatusSDKType: typeof _31.ProposalStatusSDKType;
            WeightedVoteOption: {
                encode(message: _31.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.WeightedVoteOption;
                fromPartial(object: {
                    option?: _31.VoteOption;
                    weight?: string;
                }): _31.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _31.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TextProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _31.TextProposal;
            };
            Deposit: {
                encode(message: _31.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Deposit;
                fromPartial(object: {
                    proposalId?: any;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _31.Deposit;
            };
            Proposal: {
                encode(message: _31.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Proposal;
                fromPartial(object: {
                    proposalId?: any;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _31.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _31.Proposal;
            };
            TallyResult: {
                encode(message: _31.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyResult;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _31.TallyResult;
            };
            Vote: {
                encode(message: _31.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Vote;
                fromPartial(object: {
                    proposalId?: any;
                    voter?: string;
                    option?: _31.VoteOption;
                    options?: {
                        option?: _31.VoteOption;
                        weight?: string;
                    }[];
                }): _31.Vote;
            };
            DepositParams: {
                encode(message: _31.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.DepositParams;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _31.DepositParams;
            };
            VotingParams: {
                encode(message: _31.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.VotingParams;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: any;
                        nanos?: number;
                    };
                }): _31.VotingParams;
            };
            TallyParams: {
                encode(message: _31.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TallyParams;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _31.TallyParams;
            };
            GenesisState: {
                encode(message: _30.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.GenesisState;
                fromPartial(object: {
                    startingProposalId?: any;
                    deposits?: {
                        proposalId?: any;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: any;
                        voter?: string;
                        option?: _31.VoteOption;
                        options?: {
                            option?: _31.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: any;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _31.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: any;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _30.GenesisState;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _169.MsgClientImpl;
            QueryClientImpl: typeof _161.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _153.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _38.MsgCreateValidator): {
                        typeUrl: string;
                        value: _38.MsgCreateValidator;
                    };
                    editValidator(value: _38.MsgEditValidator): {
                        typeUrl: string;
                        value: _38.MsgEditValidator;
                    };
                    delegate(value: _38.MsgDelegate): {
                        typeUrl: string;
                        value: _38.MsgDelegate;
                    };
                    beginRedelegate(value: _38.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _38.MsgBeginRedelegate;
                    };
                    undelegate(value: _38.MsgUndelegate): {
                        typeUrl: string;
                        value: _38.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _38.MsgCreateValidator) => {
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
                    }) => _38.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _38.MsgEditValidator) => {
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
                    }) => _38.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _38.MsgDelegate) => {
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
                    }) => _38.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _38.MsgBeginRedelegate) => {
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
                    }) => _38.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _38.MsgUndelegate) => {
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
                    }) => _38.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _38.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgCreateValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _38.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _38.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgCreateValidatorResponse;
                fromPartial(_: {}): _38.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _38.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditValidator;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _38.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _38.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgEditValidatorResponse;
                fromPartial(_: {}): _38.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _38.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _38.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _38.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgDelegateResponse;
                fromPartial(_: {}): _38.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _38.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgBeginRedelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _38.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _38.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgBeginRedelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _38.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _38.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUndelegate;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _38.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _38.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.MsgUndelegateResponse;
                fromPartial(object: {
                    completionTime?: Date;
                }): _38.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _37.BondStatus;
            bondStatusToJSON(object: _37.BondStatus): string;
            BondStatus: typeof _37.BondStatus;
            BondStatusSDKType: typeof _37.BondStatusSDKType;
            HistoricalInfo: {
                encode(message: _37.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.HistoricalInfo;
                fromPartial(object: {
                    header?: {
                        version?: {
                            block?: any;
                            app?: any;
                        };
                        chainId?: string;
                        height?: any;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _37.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _37.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _37.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.CommissionRates;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _37.CommissionRates;
            };
            Commission: {
                encode(message: _37.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Commission;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _37.Commission;
            };
            Description: {
                encode(message: _37.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Description;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _37.Description;
            };
            Validator: {
                encode(message: _37.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Validator;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _37.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: any;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _37.Validator;
            };
            ValAddresses: {
                encode(message: _37.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.ValAddresses;
                fromPartial(object: {
                    addresses?: string[];
                }): _37.ValAddresses;
            };
            DVPair: {
                encode(message: _37.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVPair;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _37.DVPair;
            };
            DVPairs: {
                encode(message: _37.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVPairs;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _37.DVPairs;
            };
            DVVTriplet: {
                encode(message: _37.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVVTriplet;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _37.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _37.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DVVTriplets;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _37.DVVTriplets;
            };
            Delegation: {
                encode(message: _37.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Delegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _37.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _37.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.UnbondingDelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _37.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _37.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.UnbondingDelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _37.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _37.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationEntry;
                fromPartial(object: {
                    creationHeight?: any;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _37.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _37.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Redelegation;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _37.Redelegation;
            };
            Params: {
                encode(message: _37.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Params;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                    minCommissionRate?: string;
                }): _37.Params;
            };
            DelegationResponse: {
                encode(message: _37.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.DelegationResponse;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _37.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _37.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationEntryResponse;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: any;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _37.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _37.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.RedelegationResponse;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _37.RedelegationResponse;
            };
            Pool: {
                encode(message: _37.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.Pool;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _37.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _36.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorsRequest;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _36.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _37.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _36.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _36.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _36.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _36.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _37.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _36.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _36.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _36.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _36.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _36.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _36.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryValidatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _36.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _36.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _36.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _36.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegationResponse;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _36.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _36.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryUnbondingDelegationRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _36.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _36.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryUnbondingDelegationResponse;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _36.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _36.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _36.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorDelegationsResponse;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _36.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _36.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorUnbondingDelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _36.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorUnbondingDelegationsResponse;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _36.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _36.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryRedelegationsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _36.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryRedelegationsResponse;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: any;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _36.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _36.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _36.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _36.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorsResponse;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _37.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _36.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _36.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorRequest;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _36.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _36.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryDelegatorValidatorResponse;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _37.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _36.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _36.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryHistoricalInfoRequest;
                fromPartial(object: {
                    height?: any;
                }): _36.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _36.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryHistoricalInfoResponse;
                fromPartial(object: {
                    hist?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _37.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: any;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _36.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _36.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryPoolRequest;
                fromPartial(_: {}): _36.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _36.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryPoolResponse;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _36.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _36.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsRequest;
                fromPartial(_: {}): _36.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _36.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                }): _36.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _35.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GenesisState;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                        minCommissionRate?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: any;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _37.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: any;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: any;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _35.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _35.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.LastValidatorPower;
                fromPartial(object: {
                    address?: string;
                    power?: any;
                }): _35.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _34.AuthorizationType;
            authorizationTypeToJSON(object: _34.AuthorizationType): string;
            AuthorizationType: typeof _34.AuthorizationType;
            AuthorizationTypeSDKType: typeof _34.AuthorizationTypeSDKType;
            StakeAuthorization: {
                encode(message: _34.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StakeAuthorization;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _34.AuthorizationType;
                }): _34.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _34.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StakeAuthorization_Validators;
                fromPartial(object: {
                    address?: string[];
                }): _34.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _39.SignMode;
                signModeToJSON(object: _39.SignMode): string;
                SignMode: typeof _39.SignMode;
                SignModeSDKType: typeof _39.SignModeSDKType;
                SignatureDescriptors: {
                    encode(message: _39.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptors;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _39.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                    }): _39.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _39.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _39.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: any;
                    }): _39.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _39.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data;
                    fromPartial(object: {
                        single?: {
                            mode?: _39.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _39.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _39.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data_Single;
                    fromPartial(object: {
                        mode?: _39.SignMode;
                        signature?: Uint8Array;
                    }): _39.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _39.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.SignatureDescriptor_Data_Multi;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _39.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _162.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
                getBlockWithTxs(request: _40.GetBlockWithTxsRequest): Promise<_40.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _154.LCDQueryClient;
            Tx: {
                encode(message: _41.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Tx;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: any;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _39.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: any;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: any;
                            payer?: string;
                            granter?: string;
                        };
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _41.Tx;
            };
            TxRaw: {
                encode(message: _41.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.TxRaw;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _41.TxRaw;
            };
            SignDoc: {
                encode(message: _41.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignDoc;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: any;
                }): _41.SignDoc;
            };
            SignDocDirectAux: {
                encode(message: _41.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignDocDirectAux;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    chainId?: string;
                    accountNumber?: any;
                    sequence?: any;
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _41.SignDocDirectAux;
            };
            TxBody: {
                encode(message: _41.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.TxBody;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: any;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _41.TxBody;
            };
            AuthInfo: {
                encode(message: _41.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AuthInfo;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _39.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: any;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: any;
                        payer?: string;
                        granter?: string;
                    };
                    tip?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        tipper?: string;
                    };
                }): _41.AuthInfo;
            };
            SignerInfo: {
                encode(message: _41.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.SignerInfo;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _39.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: any;
                }): _41.SignerInfo;
            };
            ModeInfo: {
                encode(message: _41.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo;
                fromPartial(object: {
                    single?: {
                        mode?: _39.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _41.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _41.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo_Single;
                fromPartial(object: {
                    mode?: _39.SignMode;
                }): _41.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _41.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.ModeInfo_Multi;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _41.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _41.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Fee;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: any;
                    payer?: string;
                    granter?: string;
                }): _41.Fee;
            };
            Tip: {
                encode(message: _41.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Tip;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    tipper?: string;
                }): _41.Tip;
            };
            AuxSignerData: {
                encode(message: _41.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AuxSignerData;
                fromPartial(object: {
                    address?: string;
                    signDoc?: {
                        bodyBytes?: Uint8Array;
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        chainId?: string;
                        accountNumber?: any;
                        sequence?: any;
                        tip?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            tipper?: string;
                        };
                    };
                    mode?: _39.SignMode;
                    sig?: Uint8Array;
                }): _41.AuxSignerData;
            };
            orderByFromJSON(object: any): _40.OrderBy;
            orderByToJSON(object: _40.OrderBy): string;
            broadcastModeFromJSON(object: any): _40.BroadcastMode;
            broadcastModeToJSON(object: _40.BroadcastMode): string;
            OrderBy: typeof _40.OrderBy;
            OrderBySDKType: typeof _40.OrderBySDKType;
            BroadcastMode: typeof _40.BroadcastMode;
            BroadcastModeSDKType: typeof _40.BroadcastModeSDKType;
            GetTxsEventRequest: {
                encode(message: _40.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxsEventRequest;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _40.OrderBy;
                }): _40.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _40.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxsEventResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _40.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _40.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BroadcastTxRequest;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _40.BroadcastMode;
                }): _40.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _40.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BroadcastTxResponse;
                fromPartial(object: {
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _40.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _40.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SimulateRequest;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _40.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _40.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.SimulateResponse;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: any;
                        gasUsed?: any;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                        msgResponses?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                }): _40.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _40.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxRequest;
                fromPartial(object: {
                    hash?: string;
                }): _40.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _40.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetTxResponse;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: any;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: any;
                        gasUsed?: any;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _40.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _40.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetBlockWithTxsRequest;
                fromPartial(object: {
                    height?: any;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _40.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _40.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GetBlockWithTxsResponse;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: any;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _39.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: any;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: any;
                                payer?: string;
                                granter?: string;
                            };
                            tip?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                tipper?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
                        header?: {
                            version?: {
                                block?: any;
                                app?: any;
                            };
                            chainId?: string;
                            height?: any;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: any;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: any;
                                    validatorPower?: any;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
                                        signedHeader?: {
                                            header?: {
                                                version?: {
                                                    block?: any;
                                                    app?: any;
                                                };
                                                chainId?: string;
                                                height?: any;
                                                time?: Date;
                                                lastBlockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                lastCommitHash?: Uint8Array;
                                                dataHash?: Uint8Array;
                                                validatorsHash?: Uint8Array;
                                                nextValidatorsHash?: Uint8Array;
                                                consensusHash?: Uint8Array;
                                                appHash?: Uint8Array;
                                                lastResultsHash?: Uint8Array;
                                                evidenceHash?: Uint8Array;
                                                proposerAddress?: Uint8Array;
                                            };
                                            commit?: {
                                                height?: any;
                                                round?: number;
                                                blockId?: {
                                                    hash?: Uint8Array;
                                                    partSetHeader?: {
                                                        total?: number;
                                                        hash?: Uint8Array;
                                                    };
                                                };
                                                signatures?: {
                                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                                    validatorAddress?: Uint8Array;
                                                    timestamp?: Date;
                                                    signature?: Uint8Array;
                                                }[];
                                            };
                                        };
                                        validatorSet?: {
                                            validators?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            }[];
                                            proposer?: {
                                                address?: Uint8Array;
                                                pubKey?: {
                                                    ed25519?: Uint8Array;
                                                    secp256k1?: Uint8Array;
                                                };
                                                votingPower?: any;
                                                proposerPriority?: any;
                                            };
                                            totalVotingPower?: any;
                                        };
                                    };
                                    commonHeight?: any;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: any;
                                        proposerPriority?: any;
                                    }[];
                                    totalVotingPower?: any;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
                            height?: any;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _40.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _170.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
                authority(request?: _42.QueryAuthorityRequest): Promise<_42.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _43.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _43.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _43.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _43.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _43.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _43.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority, plan }: _43.MsgSoftwareUpgrade) => {
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
                    }) => _43.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: ({ authority }: _43.MsgCancelUpgrade) => {
                        authority: string;
                    };
                    fromAmino: ({ authority }: {
                        authority: string;
                    }) => _43.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _44.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Plan;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: any;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _44.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _44.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.SoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _44.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _44.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.CancelSoftwareUpgradeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _44.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _44.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.ModuleVersion;
                fromPartial(object: {
                    name?: string;
                    version?: any;
                }): _44.ModuleVersion;
            };
            MsgSoftwareUpgrade: {
                encode(message: _43.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSoftwareUpgrade;
                fromPartial(object: {
                    authority?: string;
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _43.MsgSoftwareUpgrade;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _43.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgSoftwareUpgradeResponse;
                fromPartial(_: {}): _43.MsgSoftwareUpgradeResponse;
            };
            MsgCancelUpgrade: {
                encode(message: _43.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgCancelUpgrade;
                fromPartial(object: {
                    authority?: string;
                }): _43.MsgCancelUpgrade;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _43.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgCancelUpgradeResponse;
                fromPartial(_: {}): _43.MsgCancelUpgradeResponse;
            };
            QueryCurrentPlanRequest: {
                encode(_: _42.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCurrentPlanRequest;
                fromPartial(_: {}): _42.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _42.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryCurrentPlanResponse;
                fromPartial(object: {
                    plan?: {
                        name?: string;
                        time?: Date;
                        height?: any;
                        info?: string;
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _42.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _42.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAppliedPlanRequest;
                fromPartial(object: {
                    name?: string;
                }): _42.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _42.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAppliedPlanResponse;
                fromPartial(object: {
                    height?: any;
                }): _42.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _42.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryUpgradedConsensusStateRequest;
                fromPartial(object: {
                    lastHeight?: any;
                }): _42.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _42.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryUpgradedConsensusStateResponse;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _42.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _42.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryModuleVersionsRequest;
                fromPartial(object: {
                    moduleName?: string;
                }): _42.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _42.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryModuleVersionsResponse;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: any;
                    }[];
                }): _42.QueryModuleVersionsResponse;
            };
            QueryAuthorityRequest: {
                encode(_: _42.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAuthorityRequest;
                fromPartial(_: {}): _42.QueryAuthorityRequest;
            };
            QueryAuthorityResponse: {
                encode(message: _42.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAuthorityResponse;
                fromPartial(object: {
                    address?: string;
                }): _42.QueryAuthorityResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _164.MsgClientImpl;
                };
                bank: {
                    v1beta1: _165.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _166.MsgClientImpl;
                };
                gov: {
                    v1: _167.MsgClientImpl;
                    v1beta1: _168.MsgClientImpl;
                };
                staking: {
                    v1beta1: _169.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _170.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: _5.QueryGrantsRequest): Promise<_5.QueryGrantsResponse>;
                        granterGrants(request: _5.QueryGranterGrantsRequest): Promise<_5.QueryGranterGrantsResponse>;
                        granteeGrants(request: _5.QueryGranteeGrantsRequest): Promise<_5.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _10.QueryBalanceRequest): Promise<_10.QueryBalanceResponse>;
                        allBalances(request: _10.QueryAllBalancesRequest): Promise<_10.QueryAllBalancesResponse>;
                        spendableBalances(request: _10.QuerySpendableBalancesRequest): Promise<_10.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _10.QueryTotalSupplyRequest): Promise<_10.QueryTotalSupplyResponse>;
                        supplyOf(request: _10.QuerySupplyOfRequest): Promise<_10.QuerySupplyOfResponse>;
                        params(request?: _10.QueryParamsRequest): Promise<_10.QueryParamsResponse>;
                        denomMetadata(request: _10.QueryDenomMetadataRequest): Promise<_10.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _10.QueryDenomsMetadataRequest): Promise<_10.QueryDenomsMetadataResponse>;
                        denomOwners(request: _10.QueryDenomOwnersRequest): Promise<_10.QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _24.QueryValidatorOutstandingRewardsRequest): Promise<_24.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _24.QueryValidatorCommissionRequest): Promise<_24.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _24.QueryValidatorSlashesRequest): Promise<_24.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _24.QueryDelegationRewardsRequest): Promise<_24.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _24.QueryDelegationTotalRewardsRequest): Promise<_24.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _24.QueryDelegatorValidatorsRequest): Promise<_24.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _24.QueryDelegatorWithdrawAddressRequest): Promise<_24.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _24.QueryCommunityPoolRequest): Promise<_24.QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _28.QueryProposalRequest): Promise<_28.QueryProposalResponse>;
                        proposals(request: _28.QueryProposalsRequest): Promise<_28.QueryProposalsResponse>;
                        vote(request: _28.QueryVoteRequest): Promise<_28.QueryVoteResponse>;
                        votes(request: _28.QueryVotesRequest): Promise<_28.QueryVotesResponse>;
                        params(request: _28.QueryParamsRequest): Promise<_28.QueryParamsResponse>;
                        deposit(request: _28.QueryDepositRequest): Promise<_28.QueryDepositResponse>;
                        deposits(request: _28.QueryDepositsRequest): Promise<_28.QueryDepositsResponse>;
                        tallyResult(request: _28.QueryTallyResultRequest): Promise<_28.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _32.QueryProposalRequest): Promise<_32.QueryProposalResponse>;
                        proposals(request: _32.QueryProposalsRequest): Promise<_32.QueryProposalsResponse>;
                        vote(request: _32.QueryVoteRequest): Promise<_32.QueryVoteResponse>;
                        votes(request: _32.QueryVotesRequest): Promise<_32.QueryVotesResponse>;
                        params(request: _32.QueryParamsRequest): Promise<_32.QueryParamsResponse>;
                        deposit(request: _32.QueryDepositRequest): Promise<_32.QueryDepositResponse>;
                        deposits(request: _32.QueryDepositsRequest): Promise<_32.QueryDepositsResponse>;
                        tallyResult(request: _32.QueryTallyResultRequest): Promise<_32.QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _36.QueryValidatorsRequest): Promise<_36.QueryValidatorsResponse>;
                        validator(request: _36.QueryValidatorRequest): Promise<_36.QueryValidatorResponse>;
                        validatorDelegations(request: _36.QueryValidatorDelegationsRequest): Promise<_36.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _36.QueryValidatorUnbondingDelegationsRequest): Promise<_36.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _36.QueryDelegationRequest): Promise<_36.QueryDelegationResponse>;
                        unbondingDelegation(request: _36.QueryUnbondingDelegationRequest): Promise<_36.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _36.QueryDelegatorDelegationsRequest): Promise<_36.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _36.QueryDelegatorUnbondingDelegationsRequest): Promise<_36.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _36.QueryRedelegationsRequest): Promise<_36.QueryRedelegationsResponse>;
                        delegatorValidators(request: _36.QueryDelegatorValidatorsRequest): Promise<_36.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _36.QueryDelegatorValidatorRequest): Promise<_36.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _36.QueryHistoricalInfoRequest): Promise<_36.QueryHistoricalInfoResponse>;
                        pool(request?: _36.QueryPoolRequest): Promise<_36.QueryPoolResponse>;
                        params(request?: _36.QueryParamsRequest): Promise<_36.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _40.SimulateRequest): Promise<_40.SimulateResponse>;
                        getTx(request: _40.GetTxRequest): Promise<_40.GetTxResponse>;
                        broadcastTx(request: _40.BroadcastTxRequest): Promise<_40.BroadcastTxResponse>;
                        getTxsEvent(request: _40.GetTxsEventRequest): Promise<_40.GetTxsEventResponse>;
                        getBlockWithTxs(request: _40.GetBlockWithTxsRequest): Promise<_40.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _42.QueryCurrentPlanRequest): Promise<_42.QueryCurrentPlanResponse>;
                        appliedPlan(request: _42.QueryAppliedPlanRequest): Promise<_42.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _42.QueryUpgradedConsensusStateRequest): Promise<_42.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _42.QueryModuleVersionsRequest): Promise<_42.QueryModuleVersionsResponse>;
                        authority(request?: _42.QueryAuthorityRequest): Promise<_42.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _148.LCDQueryClient;
                };
                bank: {
                    v1beta1: _149.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _150.LCDQueryClient;
                };
                gov: {
                    v1: _151.LCDQueryClient;
                    v1beta1: _152.LCDQueryClient;
                };
                staking: {
                    v1beta1: _153.LCDQueryClient;
                };
                tx: {
                    v1beta1: _154.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _155.LCDQueryClient;
                };
            };
        }>;
    };
}
