import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
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
                nominal: string;
                triggerPrice: string;
                triggerStatus: boolean;
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
                nominal: string;
                triggerPrice: string;
                triggerStatus: boolean;
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
                creator: string;
                rentBalance: string;
                suspended: boolean;
                suspensionReason: string;
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
                creator: string;
                rentBalance: string;
                suspended: boolean;
                suspensionReason: string;
            };
        }) => import("./seichain/dex/tx").MsgRegisterContract;
    };
    "/seiprotocol.seichain.dex.MsgContractDepositRent": {
        aminoType: string;
        toAmino: ({ contractAddr, amount, sender }: import("./seichain/dex/tx").MsgContractDepositRent) => {
            contractAddr: string;
            amount: string;
            sender: string;
        };
        fromAmino: ({ contractAddr, amount, sender }: {
            contractAddr: string;
            amount: string;
            sender: string;
        }) => import("./seichain/dex/tx").MsgContractDepositRent;
    };
    "/seiprotocol.seichain.dex.MsgUnregisterContract": {
        aminoType: string;
        toAmino: ({ creator, contractAddr }: import("./seichain/dex/tx").MsgUnregisterContract) => {
            creator: string;
            contractAddr: string;
        };
        fromAmino: ({ creator, contractAddr }: {
            creator: string;
            contractAddr: string;
        }) => import("./seichain/dex/tx").MsgUnregisterContract;
    };
    "/seiprotocol.seichain.dex.MsgRegisterPairs": {
        aminoType: string;
        toAmino: ({ creator, batchcontractpair }: import("./seichain/dex/tx").MsgRegisterPairs) => {
            creator: string;
            batchcontractpair: {
                contractAddr: string;
                pairs: {
                    priceDenom: string;
                    assetDenom: string;
                    priceTicksize: string;
                    quantityTicksize: string;
                }[];
            }[];
        };
        fromAmino: ({ creator, batchcontractpair }: {
            creator: string;
            batchcontractpair: {
                contractAddr: string;
                pairs: {
                    priceDenom: string;
                    assetDenom: string;
                    priceTicksize: string;
                    quantityTicksize: string;
                }[];
            }[];
        }) => import("./seichain/dex/tx").MsgRegisterPairs;
    };
    "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
        aminoType: string;
        toAmino: ({ creator, tickSizeList }: import("./seichain/dex/tx").MsgUpdatePriceTickSize) => {
            creator: string;
            tickSizeList: {
                pair: {
                    priceDenom: string;
                    assetDenom: string;
                    priceTicksize: string;
                    quantityTicksize: string;
                };
                ticksize: string;
                contractAddr: string;
            }[];
        };
        fromAmino: ({ creator, tickSizeList }: {
            creator: string;
            tickSizeList: {
                pair: {
                    priceDenom: string;
                    assetDenom: string;
                    priceTicksize: string;
                    quantityTicksize: string;
                };
                ticksize: string;
                contractAddr: string;
            }[];
        }) => import("./seichain/dex/tx").MsgUpdatePriceTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
        aminoType: string;
        toAmino: ({ creator, tickSizeList }: import("./seichain/dex/tx").MsgUpdateQuantityTickSize) => {
            creator: string;
            tickSizeList: {
                pair: {
                    priceDenom: string;
                    assetDenom: string;
                    priceTicksize: string;
                    quantityTicksize: string;
                };
                ticksize: string;
                contractAddr: string;
            }[];
        };
        fromAmino: ({ creator, tickSizeList }: {
            creator: string;
            tickSizeList: {
                pair: {
                    priceDenom: string;
                    assetDenom: string;
                    priceTicksize: string;
                    quantityTicksize: string;
                };
                ticksize: string;
                contractAddr: string;
            }[];
        }) => import("./seichain/dex/tx").MsgUpdateQuantityTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
        aminoType: string;
        toAmino: ({ creator, contractAddr }: import("./seichain/dex/tx").MsgUnsuspendContract) => {
            creator: string;
            contractAddr: string;
        };
        fromAmino: ({ creator, contractAddr }: {
            creator: string;
            contractAddr: string;
        }) => import("./seichain/dex/tx").MsgUnsuspendContract;
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
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
