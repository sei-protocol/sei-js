import { OfflineSigner, GeneratedType, Registry } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
export declare const seiprotocolAminoConverters: {
    "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: import("./seichain/tokenfactory/tx").MsgCreateDenom) => {
            sender: string;
            subdenom: string;
        };
        fromAmino: ({ sender, subdenom }: {
            sender: string;
            subdenom: string;
        }) => import("./seichain/tokenfactory/tx").MsgCreateDenom;
    };
    "/seiprotocol.seichain.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./seichain/tokenfactory/tx").MsgMint) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./seichain/tokenfactory/tx").MsgMint;
    };
    "/seiprotocol.seichain.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: import("./seichain/tokenfactory/tx").MsgBurn) => {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        };
        fromAmino: ({ sender, amount }: {
            sender: string;
            amount: {
                denom: string;
                amount: string;
            };
        }) => import("./seichain/tokenfactory/tx").MsgBurn;
    };
    "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: import("./seichain/tokenfactory/tx").MsgChangeAdmin) => {
            sender: string;
            denom: string;
            new_admin: string;
        };
        fromAmino: ({ sender, denom, new_admin }: {
            sender: string;
            denom: string;
            new_admin: string;
        }) => import("./seichain/tokenfactory/tx").MsgChangeAdmin;
    };
    "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: ({ exchangeRates, feeder, validator }: import("./seichain/oracle/tx").MsgAggregateExchangeRateVote) => {
            exchange_rates: string;
            feeder: string;
            validator: string;
        };
        fromAmino: ({ exchange_rates, feeder, validator }: {
            exchange_rates: string;
            feeder: string;
            validator: string;
        }) => import("./seichain/oracle/tx").MsgAggregateExchangeRateVote;
    };
    "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: ({ operator, delegate }: import("./seichain/oracle/tx").MsgDelegateFeedConsent) => {
            operator: string;
            delegate: string;
        };
        fromAmino: ({ operator, delegate }: {
            operator: string;
            delegate: string;
        }) => import("./seichain/oracle/tx").MsgDelegateFeedConsent;
    };
    "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
        aminoType: string;
        toAmino: ({ sender, slot, stateRoot, txs }: import("./seichain/nitro/tx").MsgRecordTransactionData) => {
            sender: string;
            slot: string;
            stateRoot: string;
            txs: string[];
        };
        fromAmino: ({ sender, slot, stateRoot, txs }: {
            sender: string;
            slot: string;
            stateRoot: string;
            txs: string[];
        }) => import("./seichain/nitro/tx").MsgRecordTransactionData;
    };
    "/seiprotocol.seichain.dex.MsgPlaceOrders": {
        aminoType: string;
        toAmino: ({ creator, orders, contractAddr, funds }: import("./seichain/dex/tx").MsgPlaceOrders) => {
            creator: string;
            orders: {
                id: string;
                status: number;
                account: string;
                contractAddr: string;
                price: string;
                quantity: string;
                priceDenom: string;
                assetDenom: string;
                orderType: number;
                positionDirection: number;
                data: string;
                statusDescription: string;
            }[];
            contractAddr: string;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ creator, orders, contractAddr, funds }: {
            creator: string;
            orders: {
                id: string;
                status: number;
                account: string;
                contractAddr: string;
                price: string;
                quantity: string;
                priceDenom: string;
                assetDenom: string;
                orderType: number;
                positionDirection: number;
                data: string;
                statusDescription: string;
            }[];
            contractAddr: string;
            funds: {
                denom: string;
                amount: string;
            }[];
        }) => import("./seichain/dex/tx").MsgPlaceOrders;
    };
    "/seiprotocol.seichain.dex.MsgCancelOrders": {
        aminoType: string;
        toAmino: ({ creator, cancellations, contractAddr }: import("./seichain/dex/tx").MsgCancelOrders) => {
            creator: string;
            cancellations: {
                id: string;
                initiator: number;
                creator: string;
                contractAddr: string;
                priceDenom: string;
                assetDenom: string;
                positionDirection: number;
                price: string;
            }[];
            contractAddr: string;
        };
        fromAmino: ({ creator, cancellations, contractAddr }: {
            creator: string;
            cancellations: {
                id: string;
                initiator: number;
                creator: string;
                contractAddr: string;
                priceDenom: string;
                assetDenom: string;
                positionDirection: number;
                price: string;
            }[];
            contractAddr: string;
        }) => import("./seichain/dex/tx").MsgCancelOrders;
    };
    "/seiprotocol.seichain.dex.MsgRegisterContract": {
        aminoType: string;
        toAmino: ({ creator, contract }: import("./seichain/dex/tx").MsgRegisterContract) => {
            creator: string;
            contract: {
                codeId: string;
                contractAddr: string;
                needHook: boolean;
                needOrderMatching: boolean;
                dependencies: {
                    dependency: string;
                    immediateElderSibling: string;
                    immediateYoungerSibling: string;
                }[];
                numIncomingDependencies: string;
            };
        };
        fromAmino: ({ creator, contract }: {
            creator: string;
            contract: {
                codeId: string;
                contractAddr: string;
                needHook: boolean;
                needOrderMatching: boolean;
                dependencies: {
                    dependency: string;
                    immediateElderSibling: string;
                    immediateYoungerSibling: string;
                }[];
                numIncomingDependencies: string;
            };
        }) => import("./seichain/dex/tx").MsgRegisterContract;
    };
};
export declare const seiprotocolProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningSeiprotocolClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningSeiprotocolClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
