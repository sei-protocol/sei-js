import * as _135 from "./seichain/dex/asset_list";
import * as _136 from "./seichain/dex/contract";
import * as _137 from "./seichain/dex/enums";
import * as _138 from "./seichain/dex/genesis";
import * as _139 from "./seichain/dex/gov";
import * as _140 from "./seichain/dex/long_book";
import * as _141 from "./seichain/dex/match_result";
import * as _142 from "./seichain/dex/order_entry";
import * as _143 from "./seichain/dex/order";
import * as _144 from "./seichain/dex/pair";
import * as _145 from "./seichain/dex/params";
import * as _146 from "./seichain/dex/price";
import * as _147 from "./seichain/dex/query";
import * as _148 from "./seichain/dex/settlement";
import * as _149 from "./seichain/dex/short_book";
import * as _150 from "./seichain/dex/tick_size";
import * as _151 from "./seichain/dex/twap";
import * as _152 from "./seichain/dex/tx";
import * as _153 from "./seichain/epoch/epoch";
import * as _154 from "./seichain/epoch/genesis";
import * as _155 from "./seichain/epoch/params";
import * as _156 from "./seichain/epoch/query";
import * as _158 from "./seichain/mint/v1beta1/genesis";
import * as _159 from "./seichain/mint/v1beta1/mint";
import * as _160 from "./seichain/mint/v1beta1/query";
import * as _161 from "./seichain/nitro/data";
import * as _162 from "./seichain/nitro/genesis";
import * as _163 from "./seichain/nitro/params";
import * as _164 from "./seichain/nitro/query";
import * as _165 from "./seichain/nitro/tx";
import * as _166 from "./seichain/oracle/genesis";
import * as _167 from "./seichain/oracle/oracle";
import * as _168 from "./seichain/oracle/query";
import * as _169 from "./seichain/oracle/tx";
import * as _170 from "./seichain/tokenfactory/authorityMetadata";
import * as _171 from "./seichain/tokenfactory/genesis";
import * as _172 from "./seichain/tokenfactory/gov";
import * as _173 from "./seichain/tokenfactory/params";
import * as _174 from "./seichain/tokenfactory/query";
import * as _175 from "./seichain/tokenfactory/tx";
import * as _255 from "./seichain/dex/query.lcd";
import * as _256 from "./seichain/epoch/query.lcd";
import * as _257 from "./seichain/mint/v1beta1/query.lcd";
import * as _258 from "./seichain/nitro/query.lcd";
import * as _259 from "./seichain/oracle/query.lcd";
import * as _260 from "./seichain/tokenfactory/query.lcd";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _152.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _152.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _152.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _152.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _152.MsgPlaceOrders;
                    };
                    cancelOrders(value: _152.MsgCancelOrders): {
                        typeUrl: string;
                        value: _152.MsgCancelOrders;
                    };
                    registerContract(value: _152.MsgRegisterContract): {
                        typeUrl: string;
                        value: _152.MsgRegisterContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _152.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _152.MsgPlaceOrders;
                    };
                    cancelOrders(value: _152.MsgCancelOrders): {
                        typeUrl: string;
                        value: _152.MsgCancelOrders;
                    };
                    registerContract(value: _152.MsgRegisterContract): {
                        typeUrl: string;
                        value: _152.MsgRegisterContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: ({ creator, orders, contractAddr, funds }: _152.MsgPlaceOrders) => {
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
                    }) => _152.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: ({ creator, cancellations, contractAddr }: _152.MsgCancelOrders) => {
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
                    }) => _152.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contract }: _152.MsgRegisterContract) => {
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
                    }) => _152.MsgRegisterContract;
                };
            };
            MsgPlaceOrders: {
                encode(message: _152.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgPlaceOrders;
                fromPartial(object: {
                    creator?: string;
                    orders?: {
                        id?: any;
                        status?: _137.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _137.OrderType;
                        positionDirection?: _137.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    }[];
                    contractAddr?: string;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _152.MsgPlaceOrders;
            };
            MsgPlaceOrdersResponse: {
                encode(message: _152.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgPlaceOrdersResponse;
                fromPartial(object: {
                    orderIds?: any[];
                }): _152.MsgPlaceOrdersResponse;
            };
            MsgCancelOrders: {
                encode(message: _152.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgCancelOrders;
                fromPartial(object: {
                    creator?: string;
                    cancellations?: {
                        id?: any;
                        initiator?: _137.CancellationInitiator;
                        creator?: string;
                        contractAddr?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        positionDirection?: _137.PositionDirection;
                        price?: string;
                    }[];
                    contractAddr?: string;
                }): _152.MsgCancelOrders;
            };
            MsgCancelOrdersResponse: {
                encode(_: _152.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgCancelOrdersResponse;
                fromPartial(_: {}): _152.MsgCancelOrdersResponse;
            };
            MsgRegisterContract: {
                encode(message: _152.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgRegisterContract;
                fromPartial(object: {
                    creator?: string;
                    contract?: {
                        codeId?: any;
                        contractAddr?: string;
                        needHook?: boolean;
                        needOrderMatching?: boolean;
                        dependencies?: {
                            dependency?: string;
                            immediateElderSibling?: string;
                            immediateYoungerSibling?: string;
                        }[];
                        numIncomingDependencies?: any;
                    };
                }): _152.MsgRegisterContract;
            };
            MsgRegisterContractResponse: {
                encode(_: _152.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.MsgRegisterContractResponse;
                fromPartial(_: {}): _152.MsgRegisterContractResponse;
            };
            Twap: {
                encode(message: _151.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Twap;
                fromPartial(object: {
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    };
                    twap?: string;
                    lookbackSeconds?: any;
                }): _151.Twap;
            };
            TickSize: {
                encode(message: _150.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TickSize;
                fromPartial(object: {
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    };
                    ticksize?: string;
                    contractAddr?: string;
                }): _150.TickSize;
            };
            ShortBook: {
                encode(message: _149.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.ShortBook;
                fromPartial(object: {
                    price?: string;
                    entry?: {
                        price?: string;
                        quantity?: string;
                        allocations?: {
                            orderId?: any;
                            quantity?: string;
                            account?: string;
                        }[];
                        priceDenom?: string;
                        assetDenom?: string;
                    };
                }): _149.ShortBook;
            };
            SettlementEntry: {
                encode(message: _148.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.SettlementEntry;
                fromPartial(object: {
                    account?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    quantity?: string;
                    executionCostOrProceed?: string;
                    expectedCostOrProceed?: string;
                    positionDirection?: string;
                    orderType?: string;
                    orderId?: any;
                    timestamp?: any;
                    height?: any;
                    settlementId?: any;
                }): _148.SettlementEntry;
            };
            Settlements: {
                encode(message: _148.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Settlements;
                fromPartial(object: {
                    epoch?: any;
                    entries?: {
                        account?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        quantity?: string;
                        executionCostOrProceed?: string;
                        expectedCostOrProceed?: string;
                        positionDirection?: string;
                        orderType?: string;
                        orderId?: any;
                        timestamp?: any;
                        height?: any;
                        settlementId?: any;
                    }[];
                }): _148.Settlements;
            };
            QueryParamsRequest: {
                encode(_: _147.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsRequest;
                fromPartial(_: {}): _147.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _147.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        priceSnapshotRetention?: any;
                    };
                }): _147.QueryParamsResponse;
            };
            QueryGetLongBookRequest: {
                encode(message: _147.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetLongBookRequest;
                fromPartial(object: {
                    price?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _147.QueryGetLongBookRequest;
            };
            QueryGetLongBookResponse: {
                encode(message: _147.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetLongBookResponse;
                fromPartial(object: {
                    LongBook?: {
                        price?: string;
                        entry?: {
                            price?: string;
                            quantity?: string;
                            allocations?: {
                                orderId?: any;
                                quantity?: string;
                                account?: string;
                            }[];
                            priceDenom?: string;
                            assetDenom?: string;
                        };
                    };
                }): _147.QueryGetLongBookResponse;
            };
            QueryAllLongBookRequest: {
                encode(message: _147.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllLongBookRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _147.QueryAllLongBookRequest;
            };
            QueryAllLongBookResponse: {
                encode(message: _147.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllLongBookResponse;
                fromPartial(object: {
                    LongBook?: {
                        price?: string;
                        entry?: {
                            price?: string;
                            quantity?: string;
                            allocations?: {
                                orderId?: any;
                                quantity?: string;
                                account?: string;
                            }[];
                            priceDenom?: string;
                            assetDenom?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryAllLongBookResponse;
            };
            QueryGetShortBookRequest: {
                encode(message: _147.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetShortBookRequest;
                fromPartial(object: {
                    price?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _147.QueryGetShortBookRequest;
            };
            QueryGetShortBookResponse: {
                encode(message: _147.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetShortBookResponse;
                fromPartial(object: {
                    ShortBook?: {
                        price?: string;
                        entry?: {
                            price?: string;
                            quantity?: string;
                            allocations?: {
                                orderId?: any;
                                quantity?: string;
                                account?: string;
                            }[];
                            priceDenom?: string;
                            assetDenom?: string;
                        };
                    };
                }): _147.QueryGetShortBookResponse;
            };
            QueryAllShortBookRequest: {
                encode(message: _147.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllShortBookRequest;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: any;
                        limit?: any;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _147.QueryAllShortBookRequest;
            };
            QueryAllShortBookResponse: {
                encode(message: _147.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAllShortBookResponse;
                fromPartial(object: {
                    ShortBook?: {
                        price?: string;
                        entry?: {
                            price?: string;
                            quantity?: string;
                            allocations?: {
                                orderId?: any;
                                quantity?: string;
                                account?: string;
                            }[];
                            priceDenom?: string;
                            assetDenom?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: any;
                    };
                }): _147.QueryAllShortBookResponse;
            };
            QueryGetPricesRequest: {
                encode(message: _147.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetPricesRequest;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    contractAddr?: string;
                }): _147.QueryGetPricesRequest;
            };
            QueryGetPricesResponse: {
                encode(message: _147.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetPricesResponse;
                fromPartial(object: {
                    prices?: {
                        snapshotTimestampInSeconds?: any;
                        price?: string;
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            ticksize?: string;
                        };
                    }[];
                }): _147.QueryGetPricesResponse;
            };
            QueryGetPriceRequest: {
                encode(message: _147.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetPriceRequest;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    contractAddr?: string;
                    timestamp?: any;
                }): _147.QueryGetPriceRequest;
            };
            QueryGetPriceResponse: {
                encode(message: _147.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetPriceResponse;
                fromPartial(object: {
                    price?: {
                        snapshotTimestampInSeconds?: any;
                        price?: string;
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            ticksize?: string;
                        };
                    };
                    found?: boolean;
                }): _147.QueryGetPriceResponse;
            };
            QueryGetTwapsRequest: {
                encode(message: _147.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetTwapsRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    lookbackSeconds?: any;
                }): _147.QueryGetTwapsRequest;
            };
            QueryGetTwapsResponse: {
                encode(message: _147.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetTwapsResponse;
                fromPartial(object: {
                    twaps?: {
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            ticksize?: string;
                        };
                        twap?: string;
                        lookbackSeconds?: any;
                    }[];
                }): _147.QueryGetTwapsResponse;
            };
            QueryAssetListRequest: {
                encode(_: _147.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAssetListRequest;
                fromPartial(_: {}): _147.QueryAssetListRequest;
            };
            QueryAssetListResponse: {
                encode(message: _147.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAssetListResponse;
                fromPartial(object: {
                    assetList?: {
                        ibcInfo?: {
                            sourceChannel?: string;
                            dstChannel?: string;
                            sourceDenom?: string;
                            sourceChainID?: string;
                        };
                        typeAsset?: string;
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
                    }[];
                }): _147.QueryAssetListResponse;
            };
            QueryAssetMetadataRequest: {
                encode(message: _147.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAssetMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _147.QueryAssetMetadataRequest;
            };
            QueryAssetMetadataResponse: {
                encode(message: _147.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryAssetMetadataResponse;
                fromPartial(object: {
                    metadata?: {
                        ibcInfo?: {
                            sourceChannel?: string;
                            dstChannel?: string;
                            sourceDenom?: string;
                            sourceChainID?: string;
                        };
                        typeAsset?: string;
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
                    };
                }): _147.QueryAssetMetadataResponse;
            };
            QueryRegisteredPairsRequest: {
                encode(message: _147.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryRegisteredPairsRequest;
                fromPartial(object: {
                    contractAddr?: string;
                }): _147.QueryRegisteredPairsRequest;
            };
            QueryRegisteredPairsResponse: {
                encode(message: _147.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryRegisteredPairsResponse;
                fromPartial(object: {
                    pairs?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    }[];
                }): _147.QueryRegisteredPairsResponse;
            };
            QueryGetOrdersRequest: {
                encode(message: _147.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetOrdersRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    account?: string;
                }): _147.QueryGetOrdersRequest;
            };
            QueryGetOrdersResponse: {
                encode(message: _147.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        id?: any;
                        status?: _137.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _137.OrderType;
                        positionDirection?: _137.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    }[];
                }): _147.QueryGetOrdersResponse;
            };
            QueryGetOrderByIDRequest: {
                encode(message: _147.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetOrderByIDRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    id?: any;
                }): _147.QueryGetOrderByIDRequest;
            };
            QueryGetOrderByIDResponse: {
                encode(message: _147.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetOrderByIDResponse;
                fromPartial(object: {
                    order?: {
                        id?: any;
                        status?: _137.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _137.OrderType;
                        positionDirection?: _137.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    };
                }): _147.QueryGetOrderByIDResponse;
            };
            QueryGetHistoricalPricesRequest: {
                encode(message: _147.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetHistoricalPricesRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    periodLengthInSeconds?: any;
                    numOfPeriods?: any;
                }): _147.QueryGetHistoricalPricesRequest;
            };
            QueryGetHistoricalPricesResponse: {
                encode(message: _147.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetHistoricalPricesResponse;
                fromPartial(object: {
                    prices?: {
                        beginTimestamp?: any;
                        endTimestamp?: any;
                        open?: string;
                        high?: string;
                        low?: string;
                        close?: string;
                        volume?: string;
                    }[];
                }): _147.QueryGetHistoricalPricesResponse;
            };
            QueryGetMarketSummaryRequest: {
                encode(message: _147.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetMarketSummaryRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    lookbackInSeconds?: any;
                }): _147.QueryGetMarketSummaryRequest;
            };
            QueryGetMarketSummaryResponse: {
                encode(message: _147.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetMarketSummaryResponse;
                fromPartial(object: {
                    totalVolume?: string;
                    totalVolumeNotional?: string;
                    highPrice?: string;
                    lowPrice?: string;
                    lastPrice?: string;
                }): _147.QueryGetMarketSummaryResponse;
            };
            QueryOrderSimulationRequest: {
                encode(message: _147.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryOrderSimulationRequest;
                fromPartial(object: {
                    order?: {
                        id?: any;
                        status?: _137.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _137.OrderType;
                        positionDirection?: _137.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    };
                    contractAddr?: string;
                }): _147.QueryOrderSimulationRequest;
            };
            QueryOrderSimulationResponse: {
                encode(message: _147.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryOrderSimulationResponse;
                fromPartial(object: {
                    ExecutedQuantity?: string;
                }): _147.QueryOrderSimulationResponse;
            };
            QueryGetMatchResultRequest: {
                encode(message: _147.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetMatchResultRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    height?: any;
                }): _147.QueryGetMatchResultRequest;
            };
            QueryGetMatchResultResponse: {
                encode(message: _147.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.QueryGetMatchResultResponse;
                fromPartial(object: {
                    result?: {
                        height?: any;
                        contractAddr?: string;
                        orders?: {
                            id?: any;
                            status?: _137.OrderStatus;
                            account?: string;
                            contractAddr?: string;
                            price?: string;
                            quantity?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            orderType?: _137.OrderType;
                            positionDirection?: _137.PositionDirection;
                            data?: string;
                            statusDescription?: string;
                        }[];
                        settlements?: {
                            account?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            quantity?: string;
                            executionCostOrProceed?: string;
                            expectedCostOrProceed?: string;
                            positionDirection?: string;
                            orderType?: string;
                            orderId?: any;
                            timestamp?: any;
                            height?: any;
                            settlementId?: any;
                        }[];
                        cancellations?: {
                            id?: any;
                            initiator?: _137.CancellationInitiator;
                            creator?: string;
                            contractAddr?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            positionDirection?: _137.PositionDirection;
                            price?: string;
                        }[];
                    };
                }): _147.QueryGetMatchResultResponse;
            };
            Price: {
                encode(message: _146.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Price;
                fromPartial(object: {
                    snapshotTimestampInSeconds?: any;
                    price?: string;
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    };
                }): _146.Price;
            };
            PriceCandlestick: {
                encode(message: _146.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.PriceCandlestick;
                fromPartial(object: {
                    beginTimestamp?: any;
                    endTimestamp?: any;
                    open?: string;
                    high?: string;
                    low?: string;
                    close?: string;
                    volume?: string;
                }): _146.PriceCandlestick;
            };
            Params: {
                encode(message: _145.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Params;
                fromPartial(object: {
                    priceSnapshotRetention?: any;
                }): _145.Params;
            };
            Pair: {
                encode(message: _144.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Pair;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    ticksize?: string;
                }): _144.Pair;
            };
            BatchContractPair: {
                encode(message: _144.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.BatchContractPair;
                fromPartial(object: {
                    contractAddr?: string;
                    pairs?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    }[];
                }): _144.BatchContractPair;
            };
            Order: {
                encode(message: _143.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Order;
                fromPartial(object: {
                    id?: any;
                    status?: _137.OrderStatus;
                    account?: string;
                    contractAddr?: string;
                    price?: string;
                    quantity?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    orderType?: _137.OrderType;
                    positionDirection?: _137.PositionDirection;
                    data?: string;
                    statusDescription?: string;
                }): _143.Order;
            };
            Cancellation: {
                encode(message: _143.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Cancellation;
                fromPartial(object: {
                    id?: any;
                    initiator?: _137.CancellationInitiator;
                    creator?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    positionDirection?: _137.PositionDirection;
                    price?: string;
                }): _143.Cancellation;
            };
            ActiveOrders: {
                encode(message: _143.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.ActiveOrders;
                fromPartial(object: {
                    ids?: any[];
                }): _143.ActiveOrders;
            };
            OrderEntry: {
                encode(message: _142.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.OrderEntry;
                fromPartial(object: {
                    price?: string;
                    quantity?: string;
                    allocations?: {
                        orderId?: any;
                        quantity?: string;
                        account?: string;
                    }[];
                    priceDenom?: string;
                    assetDenom?: string;
                }): _142.OrderEntry;
            };
            Allocation: {
                encode(message: _142.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Allocation;
                fromPartial(object: {
                    orderId?: any;
                    quantity?: string;
                    account?: string;
                }): _142.Allocation;
            };
            MatchResult: {
                encode(message: _141.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MatchResult;
                fromPartial(object: {
                    height?: any;
                    contractAddr?: string;
                    orders?: {
                        id?: any;
                        status?: _137.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _137.OrderType;
                        positionDirection?: _137.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    }[];
                    settlements?: {
                        account?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        quantity?: string;
                        executionCostOrProceed?: string;
                        expectedCostOrProceed?: string;
                        positionDirection?: string;
                        orderType?: string;
                        orderId?: any;
                        timestamp?: any;
                        height?: any;
                        settlementId?: any;
                    }[];
                    cancellations?: {
                        id?: any;
                        initiator?: _137.CancellationInitiator;
                        creator?: string;
                        contractAddr?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        positionDirection?: _137.PositionDirection;
                        price?: string;
                    }[];
                }): _141.MatchResult;
            };
            LongBook: {
                encode(message: _140.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.LongBook;
                fromPartial(object: {
                    price?: string;
                    entry?: {
                        price?: string;
                        quantity?: string;
                        allocations?: {
                            orderId?: any;
                            quantity?: string;
                            account?: string;
                        }[];
                        priceDenom?: string;
                        assetDenom?: string;
                    };
                }): _140.LongBook;
            };
            RegisterPairsProposal: {
                encode(message: _139.RegisterPairsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.RegisterPairsProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    batchcontractpair?: {
                        contractAddr?: string;
                        pairs?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            ticksize?: string;
                        }[];
                    }[];
                }): _139.RegisterPairsProposal;
            };
            UpdateTickSizeProposal: {
                encode(message: _139.UpdateTickSizeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.UpdateTickSizeProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    tickSizeList?: {
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            ticksize?: string;
                        };
                        ticksize?: string;
                        contractAddr?: string;
                    }[];
                }): _139.UpdateTickSizeProposal;
            };
            AddAssetMetadataProposal: {
                encode(message: _139.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.AddAssetMetadataProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    assetList?: {
                        ibcInfo?: {
                            sourceChannel?: string;
                            dstChannel?: string;
                            sourceDenom?: string;
                            sourceChainID?: string;
                        };
                        typeAsset?: string;
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
                    }[];
                }): _139.AddAssetMetadataProposal;
            };
            GenesisState: {
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromPartial(object: {
                    params?: {
                        priceSnapshotRetention?: any;
                    };
                    longBookList?: {
                        price?: string;
                        entry?: {
                            price?: string;
                            quantity?: string;
                            allocations?: {
                                orderId?: any;
                                quantity?: string;
                                account?: string;
                            }[];
                            priceDenom?: string;
                            assetDenom?: string;
                        };
                    }[];
                    shortBookList?: {
                        price?: string;
                        entry?: {
                            price?: string;
                            quantity?: string;
                            allocations?: {
                                orderId?: any;
                                quantity?: string;
                                account?: string;
                            }[];
                            priceDenom?: string;
                            assetDenom?: string;
                        };
                    }[];
                    twapList?: {
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            ticksize?: string;
                        };
                        twap?: string;
                        lookbackSeconds?: any;
                    }[];
                    tickSizeList?: {
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            ticksize?: string;
                        };
                        ticksize?: string;
                        contractAddr?: string;
                    }[];
                    lastEpoch?: any;
                }): _138.GenesisState;
            };
            positionDirectionFromJSON(object: any): _137.PositionDirection;
            positionDirectionToJSON(object: _137.PositionDirection): string;
            positionEffectFromJSON(object: any): _137.PositionEffect;
            positionEffectToJSON(object: _137.PositionEffect): string;
            orderTypeFromJSON(object: any): _137.OrderType;
            orderTypeToJSON(object: _137.OrderType): string;
            unitFromJSON(object: any): _137.Unit;
            unitToJSON(object: _137.Unit): string;
            orderStatusFromJSON(object: any): _137.OrderStatus;
            orderStatusToJSON(object: _137.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _137.CancellationInitiator;
            cancellationInitiatorToJSON(object: _137.CancellationInitiator): string;
            PositionDirection: typeof _137.PositionDirection;
            PositionDirectionSDKType: typeof _137.PositionDirectionSDKType;
            PositionEffect: typeof _137.PositionEffect;
            PositionEffectSDKType: typeof _137.PositionEffectSDKType;
            OrderType: typeof _137.OrderType;
            OrderTypeSDKType: typeof _137.OrderTypeSDKType;
            Unit: typeof _137.Unit;
            UnitSDKType: typeof _137.UnitSDKType;
            OrderStatus: typeof _137.OrderStatus;
            OrderStatusSDKType: typeof _137.OrderStatusSDKType;
            CancellationInitiator: typeof _137.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _137.CancellationInitiatorSDKType;
            ContractInfo: {
                encode(message: _136.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ContractInfo;
                fromPartial(object: {
                    codeId?: any;
                    contractAddr?: string;
                    needHook?: boolean;
                    needOrderMatching?: boolean;
                    dependencies?: {
                        dependency?: string;
                        immediateElderSibling?: string;
                        immediateYoungerSibling?: string;
                    }[];
                    numIncomingDependencies?: any;
                }): _136.ContractInfo;
            };
            ContractDependencyInfo: {
                encode(message: _136.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ContractDependencyInfo;
                fromPartial(object: {
                    dependency?: string;
                    immediateElderSibling?: string;
                    immediateYoungerSibling?: string;
                }): _136.ContractDependencyInfo;
            };
            LegacyContractInfo: {
                encode(message: _136.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.LegacyContractInfo;
                fromPartial(object: {
                    codeId?: any;
                    contractAddr?: string;
                    needHook?: boolean;
                    needOrderMatching?: boolean;
                    dependentContractAddrs?: string[];
                }): _136.LegacyContractInfo;
            };
            AssetIBCInfo: {
                encode(message: _135.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.AssetIBCInfo;
                fromPartial(object: {
                    sourceChannel?: string;
                    dstChannel?: string;
                    sourceDenom?: string;
                    sourceChainID?: string;
                }): _135.AssetIBCInfo;
            };
            AssetMetadata: {
                encode(message: _135.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.AssetMetadata;
                fromPartial(object: {
                    ibcInfo?: {
                        sourceChannel?: string;
                        dstChannel?: string;
                        sourceDenom?: string;
                        sourceChainID?: string;
                    };
                    typeAsset?: string;
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
                }): _135.AssetMetadata;
            };
        };
        const epoch: {
            LCDQueryClient: typeof _256.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _156.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsRequest;
                fromPartial(_: {}): _156.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _156.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _156.QueryParamsResponse;
            };
            QueryEpochRequest: {
                encode(_: _156.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryEpochRequest;
                fromPartial(_: {}): _156.QueryEpochRequest;
            };
            QueryEpochResponse: {
                encode(message: _156.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.QueryEpochResponse;
                fromPartial(object: {
                    epoch?: {
                        genesisTime?: Date;
                        epochDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        currentEpochHeight?: any;
                    };
                }): _156.QueryEpochResponse;
            };
            Params: {
                encode(_: _155.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Params;
                fromPartial(_: {}): _155.Params;
            };
            GenesisState: {
                encode(message: _154.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.GenesisState;
                fromPartial(object: {
                    params?: {};
                    epoch?: {
                        genesisTime?: Date;
                        epochDuration?: {
                            seconds?: any;
                            nanos?: number;
                        };
                        currentEpoch?: any;
                        currentEpochStartTime?: Date;
                        currentEpochHeight?: any;
                    };
                }): _154.GenesisState;
            };
            Epoch: {
                encode(message: _153.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Epoch;
                fromPartial(object: {
                    genesisTime?: Date;
                    epochDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    currentEpochHeight?: any;
                }): _153.Epoch;
            };
        };
        const mint: {
            LCDQueryClient: typeof _257.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _160.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsRequest;
                fromPartial(_: {}): _160.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _160.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        tokenReleaseSchedule?: {
                            date?: string;
                            tokenReleaseAmount?: any;
                        }[];
                    };
                }): _160.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _160.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _160.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _160.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryEpochProvisionsResponse;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _160.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _159.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _159.Minter;
            };
            ScheduledTokenRelease: {
                encode(message: _159.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ScheduledTokenRelease;
                fromPartial(object: {
                    date?: string;
                    tokenReleaseAmount?: any;
                }): _159.ScheduledTokenRelease;
            };
            Params: {
                encode(message: _159.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    tokenReleaseSchedule?: {
                        date?: string;
                        tokenReleaseAmount?: any;
                    }[];
                }): _159.Params;
            };
            GenesisState: {
                encode(message: _158.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.GenesisState;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        tokenReleaseSchedule?: {
                            date?: string;
                            tokenReleaseAmount?: any;
                        }[];
                    };
                }): _158.GenesisState;
            };
        };
        const nitro: {
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    recordTransactionData(value: _165.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    recordTransactionData(value: _165.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _165.MsgRecordTransactionData;
                    };
                };
                fromPartial: {
                    recordTransactionData(value: _165.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _165.MsgRecordTransactionData;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
                    aminoType: string;
                    toAmino: ({ sender, slot, stateRoot, txs }: _165.MsgRecordTransactionData) => {
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
                    }) => _165.MsgRecordTransactionData;
                };
            };
            MsgRecordTransactionData: {
                encode(message: _165.MsgRecordTransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRecordTransactionData;
                fromPartial(object: {
                    sender?: string;
                    slot?: any;
                    stateRoot?: string;
                    txs?: string[];
                }): _165.MsgRecordTransactionData;
            };
            MsgRecordTransactionDataResponse: {
                encode(_: _165.MsgRecordTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRecordTransactionDataResponse;
                fromPartial(_: {}): _165.MsgRecordTransactionDataResponse;
            };
            QueryParamsRequest: {
                encode(_: _164.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsRequest;
                fromPartial(_: {}): _164.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _164.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        whitelistedTxSenders?: string[];
                    };
                }): _164.QueryParamsResponse;
            };
            QueryRecordedTransactionDataRequest: {
                encode(message: _164.QueryRecordedTransactionDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryRecordedTransactionDataRequest;
                fromPartial(object: {
                    slot?: any;
                }): _164.QueryRecordedTransactionDataRequest;
            };
            QueryRecordedTransactionDataResponse: {
                encode(message: _164.QueryRecordedTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryRecordedTransactionDataResponse;
                fromPartial(object: {
                    txs?: string[];
                }): _164.QueryRecordedTransactionDataResponse;
            };
            QueryStateRootRequest: {
                encode(message: _164.QueryStateRootRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryStateRootRequest;
                fromPartial(object: {
                    slot?: any;
                }): _164.QueryStateRootRequest;
            };
            QueryStateRootResponse: {
                encode(message: _164.QueryStateRootResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryStateRootResponse;
                fromPartial(object: {
                    root?: string;
                }): _164.QueryStateRootResponse;
            };
            QuerySenderRequest: {
                encode(message: _164.QuerySenderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QuerySenderRequest;
                fromPartial(object: {
                    slot?: any;
                }): _164.QuerySenderRequest;
            };
            QuerySenderResponse: {
                encode(message: _164.QuerySenderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QuerySenderResponse;
                fromPartial(object: {
                    sender?: string;
                }): _164.QuerySenderResponse;
            };
            Params: {
                encode(message: _163.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Params;
                fromPartial(object: {
                    whitelistedTxSenders?: string[];
                }): _163.Params;
            };
            GenesisState: {
                encode(message: _162.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GenesisState;
                fromPartial(object: {
                    params?: {
                        whitelistedTxSenders?: string[];
                    };
                    slot?: any;
                    sender?: string;
                    stateRoot?: string;
                    txs?: string[];
                }): _162.GenesisState;
            };
            TransactionData: {
                encode(message: _161.TransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.TransactionData;
                fromPartial(object: {
                    slot?: any;
                    signature?: string;
                    isVote?: boolean;
                    messageType?: any;
                    legacyMessage?: string;
                    v0LoadedMessage?: string;
                    signatures?: string[];
                    messageHash?: string;
                    meta?: string;
                    writeVersion?: any;
                }): _161.TransactionData;
            };
        };
        const oracle: {
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _169.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _169.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _169.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _169.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _169.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _169.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _169.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _169.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _169.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _169.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: ({ exchangeRates, feeder, validator }: _169.MsgAggregateExchangeRateVote) => {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ exchange_rates, feeder, validator }: {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    }) => _169.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: ({ operator, delegate }: _169.MsgDelegateFeedConsent) => {
                        operator: string;
                        delegate: string;
                    };
                    fromAmino: ({ operator, delegate }: {
                        operator: string;
                        delegate: string;
                    }) => _169.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                encode(message: _169.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgAggregateExchangeRateVote;
                fromPartial(object: {
                    exchangeRates?: string;
                    feeder?: string;
                    validator?: string;
                }): _169.MsgAggregateExchangeRateVote;
            };
            MsgAggregateExchangeRateVoteResponse: {
                encode(_: _169.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: {}): _169.MsgAggregateExchangeRateVoteResponse;
            };
            MsgDelegateFeedConsent: {
                encode(message: _169.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgDelegateFeedConsent;
                fromPartial(object: {
                    operator?: string;
                    delegate?: string;
                }): _169.MsgDelegateFeedConsent;
            };
            MsgDelegateFeedConsentResponse: {
                encode(_: _169.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.MsgDelegateFeedConsentResponse;
                fromPartial(_: {}): _169.MsgDelegateFeedConsentResponse;
            };
            QueryExchangeRateRequest: {
                encode(message: _168.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryExchangeRateRequest;
                fromPartial(object: {
                    denom?: string;
                }): _168.QueryExchangeRateRequest;
            };
            QueryExchangeRateResponse: {
                encode(message: _168.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryExchangeRateResponse;
                fromPartial(object: {
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _168.QueryExchangeRateResponse;
            };
            QueryExchangeRatesRequest: {
                encode(_: _168.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryExchangeRatesRequest;
                fromPartial(_: {}): _168.QueryExchangeRatesRequest;
            };
            DenomOracleExchangeRatePair: {
                encode(message: _168.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.DenomOracleExchangeRatePair;
                fromPartial(object: {
                    denom?: string;
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _168.DenomOracleExchangeRatePair;
            };
            QueryExchangeRatesResponse: {
                encode(message: _168.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryExchangeRatesResponse;
                fromPartial(object: {
                    denomOracleExchangeRatePairs?: {
                        denom?: string;
                        oracleExchangeRate?: {
                            exchangeRate?: string;
                            lastUpdate?: string;
                        };
                    }[];
                }): _168.QueryExchangeRatesResponse;
            };
            QueryActivesRequest: {
                encode(_: _168.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryActivesRequest;
                fromPartial(_: {}): _168.QueryActivesRequest;
            };
            QueryActivesResponse: {
                encode(message: _168.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryActivesResponse;
                fromPartial(object: {
                    actives?: string[];
                }): _168.QueryActivesResponse;
            };
            QueryVoteTargetsRequest: {
                encode(_: _168.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryVoteTargetsRequest;
                fromPartial(_: {}): _168.QueryVoteTargetsRequest;
            };
            QueryVoteTargetsResponse: {
                encode(message: _168.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryVoteTargetsResponse;
                fromPartial(object: {
                    voteTargets?: string[];
                }): _168.QueryVoteTargetsResponse;
            };
            QueryPriceSnapshotHistoryRequest: {
                encode(_: _168.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPriceSnapshotHistoryRequest;
                fromPartial(_: {}): _168.QueryPriceSnapshotHistoryRequest;
            };
            QueryPriceSnapshotHistoryResponse: {
                encode(message: _168.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryPriceSnapshotHistoryResponse;
                fromPartial(object: {
                    priceSnapshots?: {
                        snapshotTimestamp?: any;
                        priceSnapshotItems?: {
                            denom?: string;
                            oracleExchangeRate?: {
                                exchangeRate?: string;
                                lastUpdate?: string;
                            };
                        }[];
                    }[];
                }): _168.QueryPriceSnapshotHistoryResponse;
            };
            QueryTwapsRequest: {
                encode(message: _168.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTwapsRequest;
                fromPartial(object: {
                    lookbackSeconds?: any;
                }): _168.QueryTwapsRequest;
            };
            QueryTwapsResponse: {
                encode(message: _168.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryTwapsResponse;
                fromPartial(object: {
                    oracleTwaps?: {
                        denom?: string;
                        twap?: string;
                        lookbackSeconds?: any;
                    }[];
                }): _168.QueryTwapsResponse;
            };
            QueryFeederDelegationRequest: {
                encode(message: _168.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryFeederDelegationRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _168.QueryFeederDelegationRequest;
            };
            QueryFeederDelegationResponse: {
                encode(message: _168.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryFeederDelegationResponse;
                fromPartial(object: {
                    feederAddr?: string;
                }): _168.QueryFeederDelegationResponse;
            };
            QueryVotePenaltyCounterRequest: {
                encode(message: _168.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryVotePenaltyCounterRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _168.QueryVotePenaltyCounterRequest;
            };
            QueryVotePenaltyCounterResponse: {
                encode(message: _168.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryVotePenaltyCounterResponse;
                fromPartial(object: {
                    votePenaltyCounter?: {
                        missCount?: any;
                        abstainCount?: any;
                    };
                }): _168.QueryVotePenaltyCounterResponse;
            };
            QueryAggregateVoteRequest: {
                encode(message: _168.QueryAggregateVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryAggregateVoteRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _168.QueryAggregateVoteRequest;
            };
            QueryAggregateVoteResponse: {
                encode(message: _168.QueryAggregateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryAggregateVoteResponse;
                fromPartial(object: {
                    aggregateVote?: {
                        exchangeRateTuples?: {
                            denom?: string;
                            exchangeRate?: string;
                        }[];
                        voter?: string;
                    };
                }): _168.QueryAggregateVoteResponse;
            };
            QueryAggregateVotesRequest: {
                encode(_: _168.QueryAggregateVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryAggregateVotesRequest;
                fromPartial(_: {}): _168.QueryAggregateVotesRequest;
            };
            QueryAggregateVotesResponse: {
                encode(message: _168.QueryAggregateVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryAggregateVotesResponse;
                fromPartial(object: {
                    aggregateVotes?: {
                        exchangeRateTuples?: {
                            denom?: string;
                            exchangeRate?: string;
                        }[];
                        voter?: string;
                    }[];
                }): _168.QueryAggregateVotesResponse;
            };
            QueryParamsRequest: {
                encode(_: _168.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsRequest;
                fromPartial(_: {}): _168.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _168.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        votePeriod?: any;
                        voteThreshold?: string;
                        rewardBand?: string;
                        whitelist?: {
                            name?: string;
                        }[];
                        slashFraction?: string;
                        slashWindow?: any;
                        minValidPerWindow?: string;
                        lookbackDuration?: any;
                    };
                }): _168.QueryParamsResponse;
            };
            Params: {
                encode(message: _167.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Params;
                fromPartial(object: {
                    votePeriod?: any;
                    voteThreshold?: string;
                    rewardBand?: string;
                    whitelist?: {
                        name?: string;
                    }[];
                    slashFraction?: string;
                    slashWindow?: any;
                    minValidPerWindow?: string;
                    lookbackDuration?: any;
                }): _167.Params;
            };
            Denom: {
                encode(message: _167.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.Denom;
                fromPartial(object: {
                    name?: string;
                }): _167.Denom;
            };
            AggregateExchangeRateVote: {
                encode(message: _167.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.AggregateExchangeRateVote;
                fromPartial(object: {
                    exchangeRateTuples?: {
                        denom?: string;
                        exchangeRate?: string;
                    }[];
                    voter?: string;
                }): _167.AggregateExchangeRateVote;
            };
            ExchangeRateTuple: {
                encode(message: _167.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.ExchangeRateTuple;
                fromPartial(object: {
                    denom?: string;
                    exchangeRate?: string;
                }): _167.ExchangeRateTuple;
            };
            OracleExchangeRate: {
                encode(message: _167.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.OracleExchangeRate;
                fromPartial(object: {
                    exchangeRate?: string;
                    lastUpdate?: string;
                }): _167.OracleExchangeRate;
            };
            PriceSnapshotItem: {
                encode(message: _167.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.PriceSnapshotItem;
                fromPartial(object: {
                    denom?: string;
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _167.PriceSnapshotItem;
            };
            PriceSnapshot: {
                encode(message: _167.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.PriceSnapshot;
                fromPartial(object: {
                    snapshotTimestamp?: any;
                    priceSnapshotItems?: {
                        denom?: string;
                        oracleExchangeRate?: {
                            exchangeRate?: string;
                            lastUpdate?: string;
                        };
                    }[];
                }): _167.PriceSnapshot;
            };
            OracleTwap: {
                encode(message: _167.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.OracleTwap;
                fromPartial(object: {
                    denom?: string;
                    twap?: string;
                    lookbackSeconds?: any;
                }): _167.OracleTwap;
            };
            VotePenaltyCounter: {
                encode(message: _167.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.VotePenaltyCounter;
                fromPartial(object: {
                    missCount?: any;
                    abstainCount?: any;
                }): _167.VotePenaltyCounter;
            };
            GenesisState: {
                encode(message: _166.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.GenesisState;
                fromPartial(object: {
                    params?: {
                        votePeriod?: any;
                        voteThreshold?: string;
                        rewardBand?: string;
                        whitelist?: {
                            name?: string;
                        }[];
                        slashFraction?: string;
                        slashWindow?: any;
                        minValidPerWindow?: string;
                        lookbackDuration?: any;
                    };
                    feederDelegations?: {
                        feederAddress?: string;
                        validatorAddress?: string;
                    }[];
                    exchangeRates?: {
                        denom?: string;
                        exchangeRate?: string;
                    }[];
                    penaltyCounters?: {
                        validatorAddress?: string;
                        votePenaltyCounter?: {
                            missCount?: any;
                            abstainCount?: any;
                        };
                    }[];
                    aggregateExchangeRateVotes?: {
                        exchangeRateTuples?: {
                            denom?: string;
                            exchangeRate?: string;
                        }[];
                        voter?: string;
                    }[];
                }): _166.GenesisState;
            };
            FeederDelegation: {
                encode(message: _166.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.FeederDelegation;
                fromPartial(object: {
                    feederAddress?: string;
                    validatorAddress?: string;
                }): _166.FeederDelegation;
            };
            PenaltyCounter: {
                encode(message: _166.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.PenaltyCounter;
                fromPartial(object: {
                    validatorAddress?: string;
                    votePenaltyCounter?: {
                        missCount?: any;
                        abstainCount?: any;
                    };
                }): _166.PenaltyCounter;
            };
        };
        const tokenfactory: {
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _175.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _175.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _175.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _175.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _175.MsgCreateDenom): {
                        typeUrl: string;
                        value: _175.MsgCreateDenom;
                    };
                    mint(value: _175.MsgMint): {
                        typeUrl: string;
                        value: _175.MsgMint;
                    };
                    burn(value: _175.MsgBurn): {
                        typeUrl: string;
                        value: _175.MsgBurn;
                    };
                    changeAdmin(value: _175.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _175.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _175.MsgCreateDenom): {
                        typeUrl: string;
                        value: _175.MsgCreateDenom;
                    };
                    mint(value: _175.MsgMint): {
                        typeUrl: string;
                        value: _175.MsgMint;
                    };
                    burn(value: _175.MsgBurn): {
                        typeUrl: string;
                        value: _175.MsgBurn;
                    };
                    changeAdmin(value: _175.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _175.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _175.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _175.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _175.MsgMint) => {
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
                    }) => _175.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _175.MsgBurn) => {
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
                    }) => _175.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _175.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _175.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _175.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _175.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _175.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _175.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _175.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgMint;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _175.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _175.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgMintResponse;
                fromPartial(_: {}): _175.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _175.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgBurn;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _175.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _175.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgBurnResponse;
                fromPartial(_: {}): _175.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _175.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgChangeAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _175.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _175.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.MsgChangeAdminResponse;
                fromPartial(_: {}): _175.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _174.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryParamsRequest;
                fromPartial(_: {}): _174.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _174.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _174.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _174.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _174.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _174.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: {
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _174.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _174.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _174.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _174.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _174.QueryDenomsFromCreatorResponse;
            };
            QueryDenomCreationFeeWhitelistRequest: {
                encode(_: _174.QueryDenomCreationFeeWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomCreationFeeWhitelistRequest;
                fromPartial(_: {}): _174.QueryDenomCreationFeeWhitelistRequest;
            };
            QueryDenomCreationFeeWhitelistResponse: {
                encode(message: _174.QueryDenomCreationFeeWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryDenomCreationFeeWhitelistResponse;
                fromPartial(object: {
                    creators?: string[];
                }): _174.QueryDenomCreationFeeWhitelistResponse;
            };
            QueryCreatorInDenomFeeWhitelistRequest: {
                encode(message: _174.QueryCreatorInDenomFeeWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryCreatorInDenomFeeWhitelistRequest;
                fromPartial(object: {
                    creator?: string;
                }): _174.QueryCreatorInDenomFeeWhitelistRequest;
            };
            QueryCreatorInDenomFeeWhitelistResponse: {
                encode(message: _174.QueryCreatorInDenomFeeWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.QueryCreatorInDenomFeeWhitelistResponse;
                fromPartial(object: {
                    whitelisted?: boolean;
                }): _174.QueryCreatorInDenomFeeWhitelistResponse;
            };
            Params: {
                encode(message: _173.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _173.Params;
            };
            AddCreatorsToDenomFeeWhitelistProposal: {
                encode(message: _172.AddCreatorsToDenomFeeWhitelistProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.AddCreatorsToDenomFeeWhitelistProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creatorList?: string[];
                }): _172.AddCreatorsToDenomFeeWhitelistProposal;
            };
            GenesisState: {
                encode(message: _171.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GenesisState;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    factoryDenoms?: {
                        denom?: string;
                        authorityMetadata?: {
                            admin?: string;
                        };
                    }[];
                }): _171.GenesisState;
            };
            GenesisDenom: {
                encode(message: _171.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.GenesisDenom;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _171.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _170.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DenomAuthorityMetadata;
                fromPartial(object: {
                    admin?: string;
                }): _170.DenomAuthorityMetadata;
            };
        };
    }
    const ClientFactory: {
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            seiprotocol: {
                seichain: {
                    dex: _255.LCDQueryClient;
                    epoch: _256.LCDQueryClient;
                    mint: _257.LCDQueryClient;
                    nitro: _258.LCDQueryClient;
                    oracle: _259.LCDQueryClient;
                    tokenfactory: _260.LCDQueryClient;
                };
            };
        }>;
    };
}
