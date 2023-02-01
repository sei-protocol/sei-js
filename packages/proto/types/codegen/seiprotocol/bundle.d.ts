import * as _82 from "./seichain/dex/asset_list";
import * as _83 from "./seichain/dex/contract";
import * as _84 from "./seichain/dex/enums";
import * as _85 from "./seichain/dex/genesis";
import * as _86 from "./seichain/dex/gov";
import * as _87 from "./seichain/dex/long_book";
import * as _88 from "./seichain/dex/match_result";
import * as _89 from "./seichain/dex/order_entry";
import * as _90 from "./seichain/dex/order";
import * as _91 from "./seichain/dex/pair";
import * as _92 from "./seichain/dex/params";
import * as _93 from "./seichain/dex/price";
import * as _94 from "./seichain/dex/query";
import * as _95 from "./seichain/dex/settlement";
import * as _96 from "./seichain/dex/short_book";
import * as _97 from "./seichain/dex/tick_size";
import * as _98 from "./seichain/dex/twap";
import * as _99 from "./seichain/dex/tx";
import * as _100 from "./seichain/epoch/epoch";
import * as _101 from "./seichain/epoch/genesis";
import * as _102 from "./seichain/epoch/params";
import * as _103 from "./seichain/epoch/query";
import * as _105 from "./seichain/mint/v1beta1/genesis";
import * as _106 from "./seichain/mint/v1beta1/mint";
import * as _107 from "./seichain/mint/v1beta1/query";
import * as _108 from "./seichain/nitro/data";
import * as _109 from "./seichain/nitro/genesis";
import * as _110 from "./seichain/nitro/params";
import * as _111 from "./seichain/nitro/query";
import * as _112 from "./seichain/nitro/tx";
import * as _113 from "./seichain/oracle/genesis";
import * as _114 from "./seichain/oracle/oracle";
import * as _115 from "./seichain/oracle/query";
import * as _116 from "./seichain/oracle/tx";
import * as _117 from "./seichain/tokenfactory/authorityMetadata";
import * as _118 from "./seichain/tokenfactory/genesis";
import * as _119 from "./seichain/tokenfactory/gov";
import * as _120 from "./seichain/tokenfactory/params";
import * as _121 from "./seichain/tokenfactory/query";
import * as _122 from "./seichain/tokenfactory/tx";
import * as _204 from "./seichain/dex/query.lcd";
import * as _205 from "./seichain/epoch/query.lcd";
import * as _206 from "./seichain/mint/v1beta1/query.lcd";
import * as _207 from "./seichain/nitro/query.lcd";
import * as _208 from "./seichain/oracle/query.lcd";
import * as _209 from "./seichain/tokenfactory/query.lcd";
import * as _210 from "./seichain/dex/query.rpc.query";
import * as _211 from "./seichain/epoch/query.rpc.query";
import * as _212 from "./seichain/mint/v1beta1/query.rpc.query";
import * as _213 from "./seichain/nitro/query.rpc.query";
import * as _214 from "./seichain/oracle/query.rpc.query";
import * as _215 from "./seichain/tokenfactory/query.rpc.query";
import * as _216 from "./seichain/dex/tx.rpc.msg";
import * as _217 from "./seichain/nitro/tx.rpc.msg";
import * as _218 from "./seichain/oracle/tx.rpc.msg";
import * as _219 from "./seichain/tokenfactory/tx.rpc.msg";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            MsgClientImpl: typeof _216.MsgClientImpl;
            QueryClientImpl: typeof _210.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                longBook(request: _94.QueryGetLongBookRequest): Promise<_94.QueryGetLongBookResponse>;
                longBookAll(request: _94.QueryAllLongBookRequest): Promise<_94.QueryAllLongBookResponse>;
                shortBook(request: _94.QueryGetShortBookRequest): Promise<_94.QueryGetShortBookResponse>;
                shortBookAll(request: _94.QueryAllShortBookRequest): Promise<_94.QueryAllShortBookResponse>;
                getPrice(request: _94.QueryGetPriceRequest): Promise<_94.QueryGetPriceResponse>;
                getPrices(request: _94.QueryGetPricesRequest): Promise<_94.QueryGetPricesResponse>;
                getTwaps(request: _94.QueryGetTwapsRequest): Promise<_94.QueryGetTwapsResponse>;
                assetMetadata(request: _94.QueryAssetMetadataRequest): Promise<_94.QueryAssetMetadataResponse>;
                assetList(request?: _94.QueryAssetListRequest): Promise<_94.QueryAssetListResponse>;
                getRegisteredPairs(request: _94.QueryRegisteredPairsRequest): Promise<_94.QueryRegisteredPairsResponse>;
                getOrders(request: _94.QueryGetOrdersRequest): Promise<_94.QueryGetOrdersResponse>;
                getOrder(request: _94.QueryGetOrderByIDRequest): Promise<_94.QueryGetOrderByIDResponse>;
                getHistoricalPrices(request: _94.QueryGetHistoricalPricesRequest): Promise<_94.QueryGetHistoricalPricesResponse>;
                getMarketSummary(request: _94.QueryGetMarketSummaryRequest): Promise<_94.QueryGetMarketSummaryResponse>;
                getOrderSimulation(request: _94.QueryOrderSimulationRequest): Promise<_94.QueryOrderSimulationResponse>;
                getMatchResult(request: _94.QueryGetMatchResultRequest): Promise<_94.QueryGetMatchResultResponse>;
            };
            LCDQueryClient: typeof _204.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _99.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _99.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _99.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _99.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _99.MsgPlaceOrders;
                    };
                    cancelOrders(value: _99.MsgCancelOrders): {
                        typeUrl: string;
                        value: _99.MsgCancelOrders;
                    };
                    registerContract(value: _99.MsgRegisterContract): {
                        typeUrl: string;
                        value: _99.MsgRegisterContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _99.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _99.MsgPlaceOrders;
                    };
                    cancelOrders(value: _99.MsgCancelOrders): {
                        typeUrl: string;
                        value: _99.MsgCancelOrders;
                    };
                    registerContract(value: _99.MsgRegisterContract): {
                        typeUrl: string;
                        value: _99.MsgRegisterContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: ({ creator, orders, contractAddr, funds }: _99.MsgPlaceOrders) => {
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
                    }) => _99.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: ({ creator, cancellations, contractAddr }: _99.MsgCancelOrders) => {
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
                    }) => _99.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contract }: _99.MsgRegisterContract) => {
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
                    }) => _99.MsgRegisterContract;
                };
            };
            MsgPlaceOrders: {
                encode(message: _99.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgPlaceOrders;
                fromPartial(object: {
                    creator?: string;
                    orders?: {
                        id?: any;
                        status?: _84.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _84.OrderType;
                        positionDirection?: _84.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    }[];
                    contractAddr?: string;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _99.MsgPlaceOrders;
            };
            MsgPlaceOrdersResponse: {
                encode(message: _99.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgPlaceOrdersResponse;
                fromPartial(object: {
                    orderIds?: any[];
                }): _99.MsgPlaceOrdersResponse;
            };
            MsgCancelOrders: {
                encode(message: _99.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCancelOrders;
                fromPartial(object: {
                    creator?: string;
                    cancellations?: {
                        id?: any;
                        initiator?: _84.CancellationInitiator;
                        creator?: string;
                        contractAddr?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        positionDirection?: _84.PositionDirection;
                        price?: string;
                    }[];
                    contractAddr?: string;
                }): _99.MsgCancelOrders;
            };
            MsgCancelOrdersResponse: {
                encode(_: _99.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgCancelOrdersResponse;
                fromPartial(_: {}): _99.MsgCancelOrdersResponse;
            };
            MsgRegisterContract: {
                encode(message: _99.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgRegisterContract;
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
                }): _99.MsgRegisterContract;
            };
            MsgRegisterContractResponse: {
                encode(_: _99.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.MsgRegisterContractResponse;
                fromPartial(_: {}): _99.MsgRegisterContractResponse;
            };
            Twap: {
                encode(message: _98.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Twap;
                fromPartial(object: {
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    };
                    twap?: string;
                    lookbackSeconds?: any;
                }): _98.Twap;
            };
            TickSize: {
                encode(message: _97.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.TickSize;
                fromPartial(object: {
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    };
                    ticksize?: string;
                    contractAddr?: string;
                }): _97.TickSize;
            };
            ShortBook: {
                encode(message: _96.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.ShortBook;
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
                }): _96.ShortBook;
            };
            SettlementEntry: {
                encode(message: _95.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.SettlementEntry;
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
                }): _95.SettlementEntry;
            };
            Settlements: {
                encode(message: _95.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Settlements;
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
                }): _95.Settlements;
            };
            QueryParamsRequest: {
                encode(_: _94.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryParamsRequest;
                fromPartial(_: {}): _94.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _94.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        priceSnapshotRetention?: any;
                    };
                }): _94.QueryParamsResponse;
            };
            QueryGetLongBookRequest: {
                encode(message: _94.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetLongBookRequest;
                fromPartial(object: {
                    price?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _94.QueryGetLongBookRequest;
            };
            QueryGetLongBookResponse: {
                encode(message: _94.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetLongBookResponse;
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
                }): _94.QueryGetLongBookResponse;
            };
            QueryAllLongBookRequest: {
                encode(message: _94.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAllLongBookRequest;
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
                }): _94.QueryAllLongBookRequest;
            };
            QueryAllLongBookResponse: {
                encode(message: _94.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAllLongBookResponse;
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
                }): _94.QueryAllLongBookResponse;
            };
            QueryGetShortBookRequest: {
                encode(message: _94.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetShortBookRequest;
                fromPartial(object: {
                    price?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _94.QueryGetShortBookRequest;
            };
            QueryGetShortBookResponse: {
                encode(message: _94.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetShortBookResponse;
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
                }): _94.QueryGetShortBookResponse;
            };
            QueryAllShortBookRequest: {
                encode(message: _94.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAllShortBookRequest;
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
                }): _94.QueryAllShortBookRequest;
            };
            QueryAllShortBookResponse: {
                encode(message: _94.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAllShortBookResponse;
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
                }): _94.QueryAllShortBookResponse;
            };
            QueryGetPricesRequest: {
                encode(message: _94.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetPricesRequest;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    contractAddr?: string;
                }): _94.QueryGetPricesRequest;
            };
            QueryGetPricesResponse: {
                encode(message: _94.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetPricesResponse;
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
                }): _94.QueryGetPricesResponse;
            };
            QueryGetPriceRequest: {
                encode(message: _94.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetPriceRequest;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    contractAddr?: string;
                    timestamp?: any;
                }): _94.QueryGetPriceRequest;
            };
            QueryGetPriceResponse: {
                encode(message: _94.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetPriceResponse;
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
                }): _94.QueryGetPriceResponse;
            };
            QueryGetTwapsRequest: {
                encode(message: _94.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetTwapsRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    lookbackSeconds?: any;
                }): _94.QueryGetTwapsRequest;
            };
            QueryGetTwapsResponse: {
                encode(message: _94.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetTwapsResponse;
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
                }): _94.QueryGetTwapsResponse;
            };
            QueryAssetListRequest: {
                encode(_: _94.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAssetListRequest;
                fromPartial(_: {}): _94.QueryAssetListRequest;
            };
            QueryAssetListResponse: {
                encode(message: _94.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAssetListResponse;
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
                }): _94.QueryAssetListResponse;
            };
            QueryAssetMetadataRequest: {
                encode(message: _94.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAssetMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _94.QueryAssetMetadataRequest;
            };
            QueryAssetMetadataResponse: {
                encode(message: _94.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryAssetMetadataResponse;
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
                }): _94.QueryAssetMetadataResponse;
            };
            QueryRegisteredPairsRequest: {
                encode(message: _94.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryRegisteredPairsRequest;
                fromPartial(object: {
                    contractAddr?: string;
                }): _94.QueryRegisteredPairsRequest;
            };
            QueryRegisteredPairsResponse: {
                encode(message: _94.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryRegisteredPairsResponse;
                fromPartial(object: {
                    pairs?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    }[];
                }): _94.QueryRegisteredPairsResponse;
            };
            QueryGetOrdersRequest: {
                encode(message: _94.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetOrdersRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    account?: string;
                }): _94.QueryGetOrdersRequest;
            };
            QueryGetOrdersResponse: {
                encode(message: _94.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        id?: any;
                        status?: _84.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _84.OrderType;
                        positionDirection?: _84.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    }[];
                }): _94.QueryGetOrdersResponse;
            };
            QueryGetOrderByIDRequest: {
                encode(message: _94.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetOrderByIDRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    id?: any;
                }): _94.QueryGetOrderByIDRequest;
            };
            QueryGetOrderByIDResponse: {
                encode(message: _94.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetOrderByIDResponse;
                fromPartial(object: {
                    order?: {
                        id?: any;
                        status?: _84.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _84.OrderType;
                        positionDirection?: _84.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    };
                }): _94.QueryGetOrderByIDResponse;
            };
            QueryGetHistoricalPricesRequest: {
                encode(message: _94.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetHistoricalPricesRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    periodLengthInSeconds?: any;
                    numOfPeriods?: any;
                }): _94.QueryGetHistoricalPricesRequest;
            };
            QueryGetHistoricalPricesResponse: {
                encode(message: _94.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetHistoricalPricesResponse;
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
                }): _94.QueryGetHistoricalPricesResponse;
            };
            QueryGetMarketSummaryRequest: {
                encode(message: _94.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetMarketSummaryRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    lookbackInSeconds?: any;
                }): _94.QueryGetMarketSummaryRequest;
            };
            QueryGetMarketSummaryResponse: {
                encode(message: _94.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetMarketSummaryResponse;
                fromPartial(object: {
                    totalVolume?: string;
                    totalVolumeNotional?: string;
                    highPrice?: string;
                    lowPrice?: string;
                    lastPrice?: string;
                }): _94.QueryGetMarketSummaryResponse;
            };
            QueryOrderSimulationRequest: {
                encode(message: _94.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryOrderSimulationRequest;
                fromPartial(object: {
                    order?: {
                        id?: any;
                        status?: _84.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _84.OrderType;
                        positionDirection?: _84.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                    };
                    contractAddr?: string;
                }): _94.QueryOrderSimulationRequest;
            };
            QueryOrderSimulationResponse: {
                encode(message: _94.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryOrderSimulationResponse;
                fromPartial(object: {
                    ExecutedQuantity?: string;
                }): _94.QueryOrderSimulationResponse;
            };
            QueryGetMatchResultRequest: {
                encode(message: _94.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetMatchResultRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    height?: any;
                }): _94.QueryGetMatchResultRequest;
            };
            QueryGetMatchResultResponse: {
                encode(message: _94.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryGetMatchResultResponse;
                fromPartial(object: {
                    result?: {
                        height?: any;
                        contractAddr?: string;
                        orders?: {
                            id?: any;
                            status?: _84.OrderStatus;
                            account?: string;
                            contractAddr?: string;
                            price?: string;
                            quantity?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            orderType?: _84.OrderType;
                            positionDirection?: _84.PositionDirection;
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
                            initiator?: _84.CancellationInitiator;
                            creator?: string;
                            contractAddr?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            positionDirection?: _84.PositionDirection;
                            price?: string;
                        }[];
                    };
                }): _94.QueryGetMatchResultResponse;
            };
            Price: {
                encode(message: _93.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Price;
                fromPartial(object: {
                    snapshotTimestampInSeconds?: any;
                    price?: string;
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    };
                }): _93.Price;
            };
            PriceCandlestick: {
                encode(message: _93.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.PriceCandlestick;
                fromPartial(object: {
                    beginTimestamp?: any;
                    endTimestamp?: any;
                    open?: string;
                    high?: string;
                    low?: string;
                    close?: string;
                    volume?: string;
                }): _93.PriceCandlestick;
            };
            Params: {
                encode(message: _92.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Params;
                fromPartial(object: {
                    priceSnapshotRetention?: any;
                }): _92.Params;
            };
            Pair: {
                encode(message: _91.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Pair;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    ticksize?: string;
                }): _91.Pair;
            };
            BatchContractPair: {
                encode(message: _91.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BatchContractPair;
                fromPartial(object: {
                    contractAddr?: string;
                    pairs?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        ticksize?: string;
                    }[];
                }): _91.BatchContractPair;
            };
            Order: {
                encode(message: _90.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Order;
                fromPartial(object: {
                    id?: any;
                    status?: _84.OrderStatus;
                    account?: string;
                    contractAddr?: string;
                    price?: string;
                    quantity?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    orderType?: _84.OrderType;
                    positionDirection?: _84.PositionDirection;
                    data?: string;
                    statusDescription?: string;
                }): _90.Order;
            };
            Cancellation: {
                encode(message: _90.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Cancellation;
                fromPartial(object: {
                    id?: any;
                    initiator?: _84.CancellationInitiator;
                    creator?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    positionDirection?: _84.PositionDirection;
                    price?: string;
                }): _90.Cancellation;
            };
            ActiveOrders: {
                encode(message: _90.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ActiveOrders;
                fromPartial(object: {
                    ids?: any[];
                }): _90.ActiveOrders;
            };
            OrderEntry: {
                encode(message: _89.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.OrderEntry;
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
                }): _89.OrderEntry;
            };
            Allocation: {
                encode(message: _89.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Allocation;
                fromPartial(object: {
                    orderId?: any;
                    quantity?: string;
                    account?: string;
                }): _89.Allocation;
            };
            MatchResult: {
                encode(message: _88.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MatchResult;
                fromPartial(object: {
                    height?: any;
                    contractAddr?: string;
                    orders?: {
                        id?: any;
                        status?: _84.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _84.OrderType;
                        positionDirection?: _84.PositionDirection;
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
                        initiator?: _84.CancellationInitiator;
                        creator?: string;
                        contractAddr?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        positionDirection?: _84.PositionDirection;
                        price?: string;
                    }[];
                }): _88.MatchResult;
            };
            LongBook: {
                encode(message: _87.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.LongBook;
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
                }): _87.LongBook;
            };
            RegisterPairsProposal: {
                encode(message: _86.RegisterPairsProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.RegisterPairsProposal;
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
                }): _86.RegisterPairsProposal;
            };
            UpdateTickSizeProposal: {
                encode(message: _86.UpdateTickSizeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.UpdateTickSizeProposal;
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
                }): _86.UpdateTickSizeProposal;
            };
            AddAssetMetadataProposal: {
                encode(message: _86.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.AddAssetMetadataProposal;
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
                }): _86.AddAssetMetadataProposal;
            };
            GenesisState: {
                encode(message: _85.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.GenesisState;
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
                }): _85.GenesisState;
            };
            positionDirectionFromJSON(object: any): _84.PositionDirection;
            positionDirectionToJSON(object: _84.PositionDirection): string;
            positionEffectFromJSON(object: any): _84.PositionEffect;
            positionEffectToJSON(object: _84.PositionEffect): string;
            orderTypeFromJSON(object: any): _84.OrderType;
            orderTypeToJSON(object: _84.OrderType): string;
            unitFromJSON(object: any): _84.Unit;
            unitToJSON(object: _84.Unit): string;
            orderStatusFromJSON(object: any): _84.OrderStatus;
            orderStatusToJSON(object: _84.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _84.CancellationInitiator;
            cancellationInitiatorToJSON(object: _84.CancellationInitiator): string;
            PositionDirection: typeof _84.PositionDirection;
            PositionDirectionSDKType: typeof _84.PositionDirectionSDKType;
            PositionEffect: typeof _84.PositionEffect;
            PositionEffectSDKType: typeof _84.PositionEffectSDKType;
            OrderType: typeof _84.OrderType;
            OrderTypeSDKType: typeof _84.OrderTypeSDKType;
            Unit: typeof _84.Unit;
            UnitSDKType: typeof _84.UnitSDKType;
            OrderStatus: typeof _84.OrderStatus;
            OrderStatusSDKType: typeof _84.OrderStatusSDKType;
            CancellationInitiator: typeof _84.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _84.CancellationInitiatorSDKType;
            ContractInfo: {
                encode(message: _83.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ContractInfo;
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
                }): _83.ContractInfo;
            };
            ContractDependencyInfo: {
                encode(message: _83.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ContractDependencyInfo;
                fromPartial(object: {
                    dependency?: string;
                    immediateElderSibling?: string;
                    immediateYoungerSibling?: string;
                }): _83.ContractDependencyInfo;
            };
            LegacyContractInfo: {
                encode(message: _83.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.LegacyContractInfo;
                fromPartial(object: {
                    codeId?: any;
                    contractAddr?: string;
                    needHook?: boolean;
                    needOrderMatching?: boolean;
                    dependentContractAddrs?: string[];
                }): _83.LegacyContractInfo;
            };
            AssetIBCInfo: {
                encode(message: _82.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.AssetIBCInfo;
                fromPartial(object: {
                    sourceChannel?: string;
                    dstChannel?: string;
                    sourceDenom?: string;
                    sourceChainID?: string;
                }): _82.AssetIBCInfo;
            };
            AssetMetadata: {
                encode(message: _82.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.AssetMetadata;
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
                }): _82.AssetMetadata;
            };
        };
        const epoch: {
            QueryClientImpl: typeof _211.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epoch(request?: _103.QueryEpochRequest): Promise<_103.QueryEpochResponse>;
                params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _205.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                fromPartial(_: {}): _103.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _103.QueryParamsResponse;
            };
            QueryEpochRequest: {
                encode(_: _103.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEpochRequest;
                fromPartial(_: {}): _103.QueryEpochRequest;
            };
            QueryEpochResponse: {
                encode(message: _103.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEpochResponse;
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
                }): _103.QueryEpochResponse;
            };
            Params: {
                encode(_: _102.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Params;
                fromPartial(_: {}): _102.Params;
            };
            GenesisState: {
                encode(message: _101.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.GenesisState;
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
                }): _101.GenesisState;
            };
            Epoch: {
                encode(message: _100.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Epoch;
                fromPartial(object: {
                    genesisTime?: Date;
                    epochDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    currentEpochHeight?: any;
                }): _100.Epoch;
            };
        };
        const mint: {
            QueryClientImpl: typeof _212.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                epochProvisions(request?: _107.QueryEpochProvisionsRequest): Promise<_107.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _206.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _107.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsRequest;
                fromPartial(_: {}): _107.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _107.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        tokenReleaseSchedule?: {
                            date?: string;
                            tokenReleaseAmount?: any;
                        }[];
                    };
                }): _107.QueryParamsResponse;
            };
            QueryEpochProvisionsRequest: {
                encode(_: _107.QueryEpochProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryEpochProvisionsRequest;
                fromPartial(_: {}): _107.QueryEpochProvisionsRequest;
            };
            QueryEpochProvisionsResponse: {
                encode(message: _107.QueryEpochProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.QueryEpochProvisionsResponse;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _107.QueryEpochProvisionsResponse;
            };
            Minter: {
                encode(message: _106.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Minter;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _106.Minter;
            };
            ScheduledTokenRelease: {
                encode(message: _106.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.ScheduledTokenRelease;
                fromPartial(object: {
                    date?: string;
                    tokenReleaseAmount?: any;
                }): _106.ScheduledTokenRelease;
            };
            Params: {
                encode(message: _106.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    tokenReleaseSchedule?: {
                        date?: string;
                        tokenReleaseAmount?: any;
                    }[];
                }): _106.Params;
            };
            GenesisState: {
                encode(message: _105.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.GenesisState;
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
                }): _105.GenesisState;
            };
        };
        const nitro: {
            MsgClientImpl: typeof _217.MsgClientImpl;
            QueryClientImpl: typeof _213.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                recordedTransactionData(request: _111.QueryRecordedTransactionDataRequest): Promise<_111.QueryRecordedTransactionDataResponse>;
                stateRoot(request: _111.QueryStateRootRequest): Promise<_111.QueryStateRootResponse>;
                sender(request: _111.QuerySenderRequest): Promise<_111.QuerySenderResponse>;
            };
            LCDQueryClient: typeof _207.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    recordTransactionData(value: _112.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    recordTransactionData(value: _112.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _112.MsgRecordTransactionData;
                    };
                };
                fromPartial: {
                    recordTransactionData(value: _112.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _112.MsgRecordTransactionData;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
                    aminoType: string;
                    toAmino: ({ sender, slot, stateRoot, txs }: _112.MsgRecordTransactionData) => {
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
                    }) => _112.MsgRecordTransactionData;
                };
            };
            MsgRecordTransactionData: {
                encode(message: _112.MsgRecordTransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgRecordTransactionData;
                fromPartial(object: {
                    sender?: string;
                    slot?: any;
                    stateRoot?: string;
                    txs?: string[];
                }): _112.MsgRecordTransactionData;
            };
            MsgRecordTransactionDataResponse: {
                encode(_: _112.MsgRecordTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.MsgRecordTransactionDataResponse;
                fromPartial(_: {}): _112.MsgRecordTransactionDataResponse;
            };
            QueryParamsRequest: {
                encode(_: _111.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsRequest;
                fromPartial(_: {}): _111.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _111.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        whitelistedTxSenders?: string[];
                    };
                }): _111.QueryParamsResponse;
            };
            QueryRecordedTransactionDataRequest: {
                encode(message: _111.QueryRecordedTransactionDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryRecordedTransactionDataRequest;
                fromPartial(object: {
                    slot?: any;
                }): _111.QueryRecordedTransactionDataRequest;
            };
            QueryRecordedTransactionDataResponse: {
                encode(message: _111.QueryRecordedTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryRecordedTransactionDataResponse;
                fromPartial(object: {
                    txs?: string[];
                }): _111.QueryRecordedTransactionDataResponse;
            };
            QueryStateRootRequest: {
                encode(message: _111.QueryStateRootRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryStateRootRequest;
                fromPartial(object: {
                    slot?: any;
                }): _111.QueryStateRootRequest;
            };
            QueryStateRootResponse: {
                encode(message: _111.QueryStateRootResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QueryStateRootResponse;
                fromPartial(object: {
                    root?: string;
                }): _111.QueryStateRootResponse;
            };
            QuerySenderRequest: {
                encode(message: _111.QuerySenderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QuerySenderRequest;
                fromPartial(object: {
                    slot?: any;
                }): _111.QuerySenderRequest;
            };
            QuerySenderResponse: {
                encode(message: _111.QuerySenderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.QuerySenderResponse;
                fromPartial(object: {
                    sender?: string;
                }): _111.QuerySenderResponse;
            };
            Params: {
                encode(message: _110.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Params;
                fromPartial(object: {
                    whitelistedTxSenders?: string[];
                }): _110.Params;
            };
            GenesisState: {
                encode(message: _109.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.GenesisState;
                fromPartial(object: {
                    params?: {
                        whitelistedTxSenders?: string[];
                    };
                    slot?: any;
                    sender?: string;
                    stateRoot?: string;
                    txs?: string[];
                }): _109.GenesisState;
            };
            TransactionData: {
                encode(message: _108.TransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.TransactionData;
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
                }): _108.TransactionData;
            };
        };
        const oracle: {
            MsgClientImpl: typeof _218.MsgClientImpl;
            QueryClientImpl: typeof _214.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRate(request: _115.QueryExchangeRateRequest): Promise<_115.QueryExchangeRateResponse>;
                exchangeRates(request?: _115.QueryExchangeRatesRequest): Promise<_115.QueryExchangeRatesResponse>;
                actives(request?: _115.QueryActivesRequest): Promise<_115.QueryActivesResponse>;
                voteTargets(request?: _115.QueryVoteTargetsRequest): Promise<_115.QueryVoteTargetsResponse>;
                priceSnapshotHistory(request?: _115.QueryPriceSnapshotHistoryRequest): Promise<_115.QueryPriceSnapshotHistoryResponse>;
                twaps(request: _115.QueryTwapsRequest): Promise<_115.QueryTwapsResponse>;
                feederDelegation(request: _115.QueryFeederDelegationRequest): Promise<_115.QueryFeederDelegationResponse>;
                votePenaltyCounter(request: _115.QueryVotePenaltyCounterRequest): Promise<_115.QueryVotePenaltyCounterResponse>;
                aggregateVote(request: _115.QueryAggregateVoteRequest): Promise<_115.QueryAggregateVoteResponse>;
                aggregateVotes(request?: _115.QueryAggregateVotesRequest): Promise<_115.QueryAggregateVotesResponse>;
                params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _208.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _116.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _116.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _116.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _116.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _116.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _116.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _116.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _116.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _116.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _116.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: ({ exchangeRates, feeder, validator }: _116.MsgAggregateExchangeRateVote) => {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ exchange_rates, feeder, validator }: {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    }) => _116.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: ({ operator, delegate }: _116.MsgDelegateFeedConsent) => {
                        operator: string;
                        delegate: string;
                    };
                    fromAmino: ({ operator, delegate }: {
                        operator: string;
                        delegate: string;
                    }) => _116.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                encode(message: _116.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAggregateExchangeRateVote;
                fromPartial(object: {
                    exchangeRates?: string;
                    feeder?: string;
                    validator?: string;
                }): _116.MsgAggregateExchangeRateVote;
            };
            MsgAggregateExchangeRateVoteResponse: {
                encode(_: _116.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: {}): _116.MsgAggregateExchangeRateVoteResponse;
            };
            MsgDelegateFeedConsent: {
                encode(message: _116.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgDelegateFeedConsent;
                fromPartial(object: {
                    operator?: string;
                    delegate?: string;
                }): _116.MsgDelegateFeedConsent;
            };
            MsgDelegateFeedConsentResponse: {
                encode(_: _116.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.MsgDelegateFeedConsentResponse;
                fromPartial(_: {}): _116.MsgDelegateFeedConsentResponse;
            };
            QueryExchangeRateRequest: {
                encode(message: _115.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryExchangeRateRequest;
                fromPartial(object: {
                    denom?: string;
                }): _115.QueryExchangeRateRequest;
            };
            QueryExchangeRateResponse: {
                encode(message: _115.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryExchangeRateResponse;
                fromPartial(object: {
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _115.QueryExchangeRateResponse;
            };
            QueryExchangeRatesRequest: {
                encode(_: _115.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryExchangeRatesRequest;
                fromPartial(_: {}): _115.QueryExchangeRatesRequest;
            };
            DenomOracleExchangeRatePair: {
                encode(message: _115.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DenomOracleExchangeRatePair;
                fromPartial(object: {
                    denom?: string;
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _115.DenomOracleExchangeRatePair;
            };
            QueryExchangeRatesResponse: {
                encode(message: _115.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryExchangeRatesResponse;
                fromPartial(object: {
                    denomOracleExchangeRatePairs?: {
                        denom?: string;
                        oracleExchangeRate?: {
                            exchangeRate?: string;
                            lastUpdate?: string;
                        };
                    }[];
                }): _115.QueryExchangeRatesResponse;
            };
            QueryActivesRequest: {
                encode(_: _115.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryActivesRequest;
                fromPartial(_: {}): _115.QueryActivesRequest;
            };
            QueryActivesResponse: {
                encode(message: _115.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryActivesResponse;
                fromPartial(object: {
                    actives?: string[];
                }): _115.QueryActivesResponse;
            };
            QueryVoteTargetsRequest: {
                encode(_: _115.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryVoteTargetsRequest;
                fromPartial(_: {}): _115.QueryVoteTargetsRequest;
            };
            QueryVoteTargetsResponse: {
                encode(message: _115.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryVoteTargetsResponse;
                fromPartial(object: {
                    voteTargets?: string[];
                }): _115.QueryVoteTargetsResponse;
            };
            QueryPriceSnapshotHistoryRequest: {
                encode(_: _115.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPriceSnapshotHistoryRequest;
                fromPartial(_: {}): _115.QueryPriceSnapshotHistoryRequest;
            };
            QueryPriceSnapshotHistoryResponse: {
                encode(message: _115.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryPriceSnapshotHistoryResponse;
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
                }): _115.QueryPriceSnapshotHistoryResponse;
            };
            QueryTwapsRequest: {
                encode(message: _115.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryTwapsRequest;
                fromPartial(object: {
                    lookbackSeconds?: any;
                }): _115.QueryTwapsRequest;
            };
            QueryTwapsResponse: {
                encode(message: _115.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryTwapsResponse;
                fromPartial(object: {
                    oracleTwaps?: {
                        denom?: string;
                        twap?: string;
                        lookbackSeconds?: any;
                    }[];
                }): _115.QueryTwapsResponse;
            };
            QueryFeederDelegationRequest: {
                encode(message: _115.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryFeederDelegationRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _115.QueryFeederDelegationRequest;
            };
            QueryFeederDelegationResponse: {
                encode(message: _115.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryFeederDelegationResponse;
                fromPartial(object: {
                    feederAddr?: string;
                }): _115.QueryFeederDelegationResponse;
            };
            QueryVotePenaltyCounterRequest: {
                encode(message: _115.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryVotePenaltyCounterRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _115.QueryVotePenaltyCounterRequest;
            };
            QueryVotePenaltyCounterResponse: {
                encode(message: _115.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryVotePenaltyCounterResponse;
                fromPartial(object: {
                    votePenaltyCounter?: {
                        missCount?: any;
                        abstainCount?: any;
                    };
                }): _115.QueryVotePenaltyCounterResponse;
            };
            QueryAggregateVoteRequest: {
                encode(message: _115.QueryAggregateVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAggregateVoteRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _115.QueryAggregateVoteRequest;
            };
            QueryAggregateVoteResponse: {
                encode(message: _115.QueryAggregateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAggregateVoteResponse;
                fromPartial(object: {
                    aggregateVote?: {
                        exchangeRateTuples?: {
                            denom?: string;
                            exchangeRate?: string;
                        }[];
                        voter?: string;
                    };
                }): _115.QueryAggregateVoteResponse;
            };
            QueryAggregateVotesRequest: {
                encode(_: _115.QueryAggregateVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAggregateVotesRequest;
                fromPartial(_: {}): _115.QueryAggregateVotesRequest;
            };
            QueryAggregateVotesResponse: {
                encode(message: _115.QueryAggregateVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryAggregateVotesResponse;
                fromPartial(object: {
                    aggregateVotes?: {
                        exchangeRateTuples?: {
                            denom?: string;
                            exchangeRate?: string;
                        }[];
                        voter?: string;
                    }[];
                }): _115.QueryAggregateVotesResponse;
            };
            QueryParamsRequest: {
                encode(_: _115.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryParamsRequest;
                fromPartial(_: {}): _115.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _115.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryParamsResponse;
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
                }): _115.QueryParamsResponse;
            };
            Params: {
                encode(message: _114.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Params;
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
                }): _114.Params;
            };
            Denom: {
                encode(message: _114.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.Denom;
                fromPartial(object: {
                    name?: string;
                }): _114.Denom;
            };
            AggregateExchangeRateVote: {
                encode(message: _114.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.AggregateExchangeRateVote;
                fromPartial(object: {
                    exchangeRateTuples?: {
                        denom?: string;
                        exchangeRate?: string;
                    }[];
                    voter?: string;
                }): _114.AggregateExchangeRateVote;
            };
            ExchangeRateTuple: {
                encode(message: _114.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.ExchangeRateTuple;
                fromPartial(object: {
                    denom?: string;
                    exchangeRate?: string;
                }): _114.ExchangeRateTuple;
            };
            OracleExchangeRate: {
                encode(message: _114.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.OracleExchangeRate;
                fromPartial(object: {
                    exchangeRate?: string;
                    lastUpdate?: string;
                }): _114.OracleExchangeRate;
            };
            PriceSnapshotItem: {
                encode(message: _114.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PriceSnapshotItem;
                fromPartial(object: {
                    denom?: string;
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _114.PriceSnapshotItem;
            };
            PriceSnapshot: {
                encode(message: _114.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.PriceSnapshot;
                fromPartial(object: {
                    snapshotTimestamp?: any;
                    priceSnapshotItems?: {
                        denom?: string;
                        oracleExchangeRate?: {
                            exchangeRate?: string;
                            lastUpdate?: string;
                        };
                    }[];
                }): _114.PriceSnapshot;
            };
            OracleTwap: {
                encode(message: _114.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.OracleTwap;
                fromPartial(object: {
                    denom?: string;
                    twap?: string;
                    lookbackSeconds?: any;
                }): _114.OracleTwap;
            };
            VotePenaltyCounter: {
                encode(message: _114.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.VotePenaltyCounter;
                fromPartial(object: {
                    missCount?: any;
                    abstainCount?: any;
                }): _114.VotePenaltyCounter;
            };
            GenesisState: {
                encode(message: _113.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.GenesisState;
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
                }): _113.GenesisState;
            };
            FeederDelegation: {
                encode(message: _113.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.FeederDelegation;
                fromPartial(object: {
                    feederAddress?: string;
                    validatorAddress?: string;
                }): _113.FeederDelegation;
            };
            PenaltyCounter: {
                encode(message: _113.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.PenaltyCounter;
                fromPartial(object: {
                    validatorAddress?: string;
                    votePenaltyCounter?: {
                        missCount?: any;
                        abstainCount?: any;
                    };
                }): _113.PenaltyCounter;
            };
        };
        const tokenfactory: {
            MsgClientImpl: typeof _219.MsgClientImpl;
            QueryClientImpl: typeof _215.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                denomAuthorityMetadata(request: _121.QueryDenomAuthorityMetadataRequest): Promise<_121.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _121.QueryDenomsFromCreatorRequest): Promise<_121.QueryDenomsFromCreatorResponse>;
                denomCreationFeeWhitelist(request?: _121.QueryDenomCreationFeeWhitelistRequest): Promise<_121.QueryDenomCreationFeeWhitelistResponse>;
                creatorInDenomFeeWhitelist(request: _121.QueryCreatorInDenomFeeWhitelistRequest): Promise<_121.QueryCreatorInDenomFeeWhitelistResponse>;
            };
            LCDQueryClient: typeof _209.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _122.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _122.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _122.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _122.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _122.MsgCreateDenom): {
                        typeUrl: string;
                        value: _122.MsgCreateDenom;
                    };
                    mint(value: _122.MsgMint): {
                        typeUrl: string;
                        value: _122.MsgMint;
                    };
                    burn(value: _122.MsgBurn): {
                        typeUrl: string;
                        value: _122.MsgBurn;
                    };
                    changeAdmin(value: _122.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _122.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _122.MsgCreateDenom): {
                        typeUrl: string;
                        value: _122.MsgCreateDenom;
                    };
                    mint(value: _122.MsgMint): {
                        typeUrl: string;
                        value: _122.MsgMint;
                    };
                    burn(value: _122.MsgBurn): {
                        typeUrl: string;
                        value: _122.MsgBurn;
                    };
                    changeAdmin(value: _122.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _122.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _122.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _122.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _122.MsgMint) => {
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
                    }) => _122.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _122.MsgBurn) => {
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
                    }) => _122.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _122.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _122.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _122.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _122.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _122.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _122.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _122.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgMint;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _122.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _122.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgMintResponse;
                fromPartial(_: {}): _122.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _122.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgBurn;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _122.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _122.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgBurnResponse;
                fromPartial(_: {}): _122.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _122.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgChangeAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _122.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _122.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.MsgChangeAdminResponse;
                fromPartial(_: {}): _122.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _121.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryParamsRequest;
                fromPartial(_: {}): _121.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _121.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _121.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _121.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _121.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _121.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: {
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _121.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _121.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _121.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _121.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _121.QueryDenomsFromCreatorResponse;
            };
            QueryDenomCreationFeeWhitelistRequest: {
                encode(_: _121.QueryDenomCreationFeeWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryDenomCreationFeeWhitelistRequest;
                fromPartial(_: {}): _121.QueryDenomCreationFeeWhitelistRequest;
            };
            QueryDenomCreationFeeWhitelistResponse: {
                encode(message: _121.QueryDenomCreationFeeWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryDenomCreationFeeWhitelistResponse;
                fromPartial(object: {
                    creators?: string[];
                }): _121.QueryDenomCreationFeeWhitelistResponse;
            };
            QueryCreatorInDenomFeeWhitelistRequest: {
                encode(message: _121.QueryCreatorInDenomFeeWhitelistRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryCreatorInDenomFeeWhitelistRequest;
                fromPartial(object: {
                    creator?: string;
                }): _121.QueryCreatorInDenomFeeWhitelistRequest;
            };
            QueryCreatorInDenomFeeWhitelistResponse: {
                encode(message: _121.QueryCreatorInDenomFeeWhitelistResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.QueryCreatorInDenomFeeWhitelistResponse;
                fromPartial(object: {
                    whitelisted?: boolean;
                }): _121.QueryCreatorInDenomFeeWhitelistResponse;
            };
            Params: {
                encode(message: _120.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Params;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _120.Params;
            };
            AddCreatorsToDenomFeeWhitelistProposal: {
                encode(message: _119.AddCreatorsToDenomFeeWhitelistProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.AddCreatorsToDenomFeeWhitelistProposal;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    creatorList?: string[];
                }): _119.AddCreatorsToDenomFeeWhitelistProposal;
            };
            GenesisState: {
                encode(message: _118.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisState;
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
                }): _118.GenesisState;
            };
            GenesisDenom: {
                encode(message: _118.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.GenesisDenom;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _118.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _117.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.DenomAuthorityMetadata;
                fromPartial(object: {
                    admin?: string;
                }): _117.DenomAuthorityMetadata;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("@osmonauts/helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            seiprotocol: {
                seichain: {
                    dex: _216.MsgClientImpl;
                    nitro: _217.MsgClientImpl;
                    oracle: _218.MsgClientImpl;
                    tokenfactory: _219.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            seiprotocol: {
                seichain: {
                    dex: {
                        params(request?: _94.QueryParamsRequest): Promise<_94.QueryParamsResponse>;
                        longBook(request: _94.QueryGetLongBookRequest): Promise<_94.QueryGetLongBookResponse>;
                        longBookAll(request: _94.QueryAllLongBookRequest): Promise<_94.QueryAllLongBookResponse>;
                        shortBook(request: _94.QueryGetShortBookRequest): Promise<_94.QueryGetShortBookResponse>;
                        shortBookAll(request: _94.QueryAllShortBookRequest): Promise<_94.QueryAllShortBookResponse>;
                        getPrice(request: _94.QueryGetPriceRequest): Promise<_94.QueryGetPriceResponse>;
                        getPrices(request: _94.QueryGetPricesRequest): Promise<_94.QueryGetPricesResponse>;
                        getTwaps(request: _94.QueryGetTwapsRequest): Promise<_94.QueryGetTwapsResponse>;
                        assetMetadata(request: _94.QueryAssetMetadataRequest): Promise<_94.QueryAssetMetadataResponse>;
                        assetList(request?: _94.QueryAssetListRequest): Promise<_94.QueryAssetListResponse>;
                        getRegisteredPairs(request: _94.QueryRegisteredPairsRequest): Promise<_94.QueryRegisteredPairsResponse>;
                        getOrders(request: _94.QueryGetOrdersRequest): Promise<_94.QueryGetOrdersResponse>;
                        getOrder(request: _94.QueryGetOrderByIDRequest): Promise<_94.QueryGetOrderByIDResponse>;
                        getHistoricalPrices(request: _94.QueryGetHistoricalPricesRequest): Promise<_94.QueryGetHistoricalPricesResponse>;
                        getMarketSummary(request: _94.QueryGetMarketSummaryRequest): Promise<_94.QueryGetMarketSummaryResponse>;
                        getOrderSimulation(request: _94.QueryOrderSimulationRequest): Promise<_94.QueryOrderSimulationResponse>;
                        getMatchResult(request: _94.QueryGetMatchResultRequest): Promise<_94.QueryGetMatchResultResponse>;
                    };
                    epoch: {
                        epoch(request?: _103.QueryEpochRequest): Promise<_103.QueryEpochResponse>;
                        params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                    };
                    mint: {
                        params(request?: _107.QueryParamsRequest): Promise<_107.QueryParamsResponse>;
                        epochProvisions(request?: _107.QueryEpochProvisionsRequest): Promise<_107.QueryEpochProvisionsResponse>;
                    };
                    nitro: {
                        params(request?: _111.QueryParamsRequest): Promise<_111.QueryParamsResponse>;
                        recordedTransactionData(request: _111.QueryRecordedTransactionDataRequest): Promise<_111.QueryRecordedTransactionDataResponse>;
                        stateRoot(request: _111.QueryStateRootRequest): Promise<_111.QueryStateRootResponse>;
                        sender(request: _111.QuerySenderRequest): Promise<_111.QuerySenderResponse>;
                    };
                    oracle: {
                        exchangeRate(request: _115.QueryExchangeRateRequest): Promise<_115.QueryExchangeRateResponse>;
                        exchangeRates(request?: _115.QueryExchangeRatesRequest): Promise<_115.QueryExchangeRatesResponse>;
                        actives(request?: _115.QueryActivesRequest): Promise<_115.QueryActivesResponse>;
                        voteTargets(request?: _115.QueryVoteTargetsRequest): Promise<_115.QueryVoteTargetsResponse>;
                        priceSnapshotHistory(request?: _115.QueryPriceSnapshotHistoryRequest): Promise<_115.QueryPriceSnapshotHistoryResponse>;
                        twaps(request: _115.QueryTwapsRequest): Promise<_115.QueryTwapsResponse>;
                        feederDelegation(request: _115.QueryFeederDelegationRequest): Promise<_115.QueryFeederDelegationResponse>;
                        votePenaltyCounter(request: _115.QueryVotePenaltyCounterRequest): Promise<_115.QueryVotePenaltyCounterResponse>;
                        aggregateVote(request: _115.QueryAggregateVoteRequest): Promise<_115.QueryAggregateVoteResponse>;
                        aggregateVotes(request?: _115.QueryAggregateVotesRequest): Promise<_115.QueryAggregateVotesResponse>;
                        params(request?: _115.QueryParamsRequest): Promise<_115.QueryParamsResponse>;
                    };
                    tokenfactory: {
                        params(request?: _121.QueryParamsRequest): Promise<_121.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _121.QueryDenomAuthorityMetadataRequest): Promise<_121.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _121.QueryDenomsFromCreatorRequest): Promise<_121.QueryDenomsFromCreatorResponse>;
                        denomCreationFeeWhitelist(request?: _121.QueryDenomCreationFeeWhitelistRequest): Promise<_121.QueryDenomCreationFeeWhitelistResponse>;
                        creatorInDenomFeeWhitelist(request: _121.QueryCreatorInDenomFeeWhitelistRequest): Promise<_121.QueryCreatorInDenomFeeWhitelistResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
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
                    dex: _204.LCDQueryClient;
                    epoch: _205.LCDQueryClient;
                    mint: _206.LCDQueryClient;
                    nitro: _207.LCDQueryClient;
                    oracle: _208.LCDQueryClient;
                    tokenfactory: _209.LCDQueryClient;
                };
            };
        }>;
    };
}
