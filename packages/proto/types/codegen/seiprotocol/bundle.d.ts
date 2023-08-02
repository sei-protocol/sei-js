import * as _78 from "./seichain/dex/asset_list";
import * as _79 from "./seichain/dex/contract";
import * as _80 from "./seichain/dex/deposit";
import * as _81 from "./seichain/dex/enums";
import * as _82 from "./seichain/dex/genesis";
import * as _83 from "./seichain/dex/gov";
import * as _84 from "./seichain/dex/long_book";
import * as _85 from "./seichain/dex/match_result";
import * as _86 from "./seichain/dex/order_entry";
import * as _87 from "./seichain/dex/order";
import * as _88 from "./seichain/dex/pair";
import * as _89 from "./seichain/dex/params";
import * as _90 from "./seichain/dex/price";
import * as _91 from "./seichain/dex/query";
import * as _92 from "./seichain/dex/settlement";
import * as _93 from "./seichain/dex/short_book";
import * as _94 from "./seichain/dex/tick_size";
import * as _95 from "./seichain/dex/twap";
import * as _96 from "./seichain/dex/tx";
import * as _97 from "./seichain/epoch/epoch";
import * as _98 from "./seichain/epoch/genesis";
import * as _99 from "./seichain/epoch/params";
import * as _100 from "./seichain/epoch/query";
import * as _102 from "./seichain/mint/v1beta1/genesis";
import * as _103 from "./seichain/mint/v1beta1/gov";
import * as _104 from "./seichain/mint/v1beta1/mint";
import * as _105 from "./seichain/mint/v1beta1/query";
import * as _106 from "./seichain/oracle/genesis";
import * as _107 from "./seichain/oracle/oracle";
import * as _108 from "./seichain/oracle/query";
import * as _109 from "./seichain/oracle/tx";
import * as _110 from "./seichain/tokenfactory/authorityMetadata";
import * as _111 from "./seichain/tokenfactory/genesis";
import * as _112 from "./seichain/tokenfactory/params";
import * as _113 from "./seichain/tokenfactory/query";
import * as _114 from "./seichain/tokenfactory/tx";
import * as _191 from "./seichain/dex/query.lcd";
import * as _192 from "./seichain/epoch/query.lcd";
import * as _193 from "./seichain/mint/v1beta1/query.lcd";
import * as _194 from "./seichain/oracle/query.lcd";
import * as _195 from "./seichain/tokenfactory/query.lcd";
import * as _196 from "./seichain/dex/query.rpc.Query";
import * as _197 from "./seichain/epoch/query.rpc.Query";
import * as _198 from "./seichain/mint/v1beta1/query.rpc.Query";
import * as _199 from "./seichain/oracle/query.rpc.Query";
import * as _200 from "./seichain/tokenfactory/query.rpc.Query";
import * as _201 from "./seichain/dex/tx.rpc.msg";
import * as _202 from "./seichain/oracle/tx.rpc.msg";
import * as _203 from "./seichain/tokenfactory/tx.rpc.msg";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            MsgClientImpl: typeof _201.MsgClientImpl;
            QueryClientImpl: typeof _196.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                longBook(request: _91.QueryGetLongBookRequest): Promise<_91.QueryGetLongBookResponse>;
                longBookAll(request: _91.QueryAllLongBookRequest): Promise<_91.QueryAllLongBookResponse>;
                shortBook(request: _91.QueryGetShortBookRequest): Promise<_91.QueryGetShortBookResponse>;
                shortBookAll(request: _91.QueryAllShortBookRequest): Promise<_91.QueryAllShortBookResponse>;
                getPrice(request: _91.QueryGetPriceRequest): Promise<_91.QueryGetPriceResponse>;
                getLatestPrice(request: _91.QueryGetLatestPriceRequest): Promise<_91.QueryGetLatestPriceResponse>;
                getPrices(request: _91.QueryGetPricesRequest): Promise<_91.QueryGetPricesResponse>;
                getTwaps(request: _91.QueryGetTwapsRequest): Promise<_91.QueryGetTwapsResponse>;
                assetMetadata(request: _91.QueryAssetMetadataRequest): Promise<_91.QueryAssetMetadataResponse>;
                assetList(request?: _91.QueryAssetListRequest): Promise<_91.QueryAssetListResponse>;
                getRegisteredPairs(request: _91.QueryRegisteredPairsRequest): Promise<_91.QueryRegisteredPairsResponse>;
                getRegisteredContract(request: _91.QueryRegisteredContractRequest): Promise<_91.QueryRegisteredContractResponse>;
                getOrders(request: _91.QueryGetOrdersRequest): Promise<_91.QueryGetOrdersResponse>;
                getOrder(request: _91.QueryGetOrderByIDRequest): Promise<_91.QueryGetOrderByIDResponse>;
                getHistoricalPrices(request: _91.QueryGetHistoricalPricesRequest): Promise<_91.QueryGetHistoricalPricesResponse>;
                getMarketSummary(request: _91.QueryGetMarketSummaryRequest): Promise<_91.QueryGetMarketSummaryResponse>;
                getOrderSimulation(request: _91.QueryOrderSimulationRequest): Promise<_91.QueryOrderSimulationResponse>;
                getMatchResult(request: _91.QueryGetMatchResultRequest): Promise<_91.QueryGetMatchResultResponse>;
                getOrderCount(request: _91.QueryGetOrderCountRequest): Promise<_91.QueryGetOrderCountResponse>;
            };
            LCDQueryClient: typeof _191.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _96.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _96.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _96.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    contractDepositRent(value: _96.MsgContractDepositRent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterContract(value: _96.MsgUnregisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerPairs(value: _96.MsgRegisterPairs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePriceTickSize(value: _96.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateQuantityTickSize(value: _96.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unsuspendContract(value: _96.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _96.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _96.MsgPlaceOrders;
                    };
                    cancelOrders(value: _96.MsgCancelOrders): {
                        typeUrl: string;
                        value: _96.MsgCancelOrders;
                    };
                    registerContract(value: _96.MsgRegisterContract): {
                        typeUrl: string;
                        value: _96.MsgRegisterContract;
                    };
                    contractDepositRent(value: _96.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _96.MsgContractDepositRent;
                    };
                    unregisterContract(value: _96.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _96.MsgUnregisterContract;
                    };
                    registerPairs(value: _96.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _96.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _96.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _96.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _96.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _96.MsgUnsuspendContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _96.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _96.MsgPlaceOrders;
                    };
                    cancelOrders(value: _96.MsgCancelOrders): {
                        typeUrl: string;
                        value: _96.MsgCancelOrders;
                    };
                    registerContract(value: _96.MsgRegisterContract): {
                        typeUrl: string;
                        value: _96.MsgRegisterContract;
                    };
                    contractDepositRent(value: _96.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _96.MsgContractDepositRent;
                    };
                    unregisterContract(value: _96.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _96.MsgUnregisterContract;
                    };
                    registerPairs(value: _96.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _96.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _96.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _96.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _96.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _96.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _96.MsgUnsuspendContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: ({ creator, orders, contractAddr, funds }: _96.MsgPlaceOrders) => {
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
                    }) => _96.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: ({ creator, cancellations, contractAddr }: _96.MsgCancelOrders) => {
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
                    }) => _96.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contract }: _96.MsgRegisterContract) => {
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
                    }) => _96.MsgRegisterContract;
                };
                "/seiprotocol.seichain.dex.MsgContractDepositRent": {
                    aminoType: string;
                    toAmino: ({ contractAddr, amount, sender }: _96.MsgContractDepositRent) => {
                        contractAddr: string;
                        amount: string;
                        sender: string;
                    };
                    fromAmino: ({ contractAddr, amount, sender }: {
                        contractAddr: string;
                        amount: string;
                        sender: string;
                    }) => _96.MsgContractDepositRent;
                };
                "/seiprotocol.seichain.dex.MsgUnregisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contractAddr }: _96.MsgUnregisterContract) => {
                        creator: string;
                        contractAddr: string;
                    };
                    fromAmino: ({ creator, contractAddr }: {
                        creator: string;
                        contractAddr: string;
                    }) => _96.MsgUnregisterContract;
                };
                "/seiprotocol.seichain.dex.MsgRegisterPairs": {
                    aminoType: string;
                    toAmino: ({ creator, batchcontractpair }: _96.MsgRegisterPairs) => {
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
                    }) => _96.MsgRegisterPairs;
                };
                "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
                    aminoType: string;
                    toAmino: ({ creator, tickSizeList }: _96.MsgUpdatePriceTickSize) => {
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
                    }) => _96.MsgUpdatePriceTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
                    aminoType: string;
                    toAmino: ({ creator, tickSizeList }: _96.MsgUpdateQuantityTickSize) => {
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
                    }) => _96.MsgUpdateQuantityTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
                    aminoType: string;
                    toAmino: ({ creator, contractAddr }: _96.MsgUnsuspendContract) => {
                        creator: string;
                        contractAddr: string;
                    };
                    fromAmino: ({ creator, contractAddr }: {
                        creator: string;
                        contractAddr: string;
                    }) => _96.MsgUnsuspendContract;
                };
            };
            MsgPlaceOrders: {
                encode(message: _96.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgPlaceOrders;
                fromPartial(object: any): _96.MsgPlaceOrders;
            };
            MsgPlaceOrdersResponse: {
                encode(message: _96.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgPlaceOrdersResponse;
                fromPartial(object: any): _96.MsgPlaceOrdersResponse;
            };
            MsgCancelOrders: {
                encode(message: _96.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCancelOrders;
                fromPartial(object: any): _96.MsgCancelOrders;
            };
            MsgCancelOrdersResponse: {
                encode(_: _96.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgCancelOrdersResponse;
                fromPartial(_: any): _96.MsgCancelOrdersResponse;
            };
            MsgRegisterContract: {
                encode(message: _96.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterContract;
                fromPartial(object: any): _96.MsgRegisterContract;
            };
            MsgRegisterContractResponse: {
                encode(_: _96.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterContractResponse;
                fromPartial(_: any): _96.MsgRegisterContractResponse;
            };
            MsgContractDepositRent: {
                encode(message: _96.MsgContractDepositRent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgContractDepositRent;
                fromPartial(object: any): _96.MsgContractDepositRent;
            };
            MsgContractDepositRentResponse: {
                encode(_: _96.MsgContractDepositRentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgContractDepositRentResponse;
                fromPartial(_: any): _96.MsgContractDepositRentResponse;
            };
            MsgUnregisterContract: {
                encode(message: _96.MsgUnregisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnregisterContract;
                fromPartial(object: any): _96.MsgUnregisterContract;
            };
            MsgUnregisterContractResponse: {
                encode(_: _96.MsgUnregisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnregisterContractResponse;
                fromPartial(_: any): _96.MsgUnregisterContractResponse;
            };
            MsgRegisterPairs: {
                encode(message: _96.MsgRegisterPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterPairs;
                fromPartial(object: any): _96.MsgRegisterPairs;
            };
            MsgRegisterPairsResponse: {
                encode(_: _96.MsgRegisterPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgRegisterPairsResponse;
                fromPartial(_: any): _96.MsgRegisterPairsResponse;
            };
            MsgUpdatePriceTickSize: {
                encode(message: _96.MsgUpdatePriceTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUpdatePriceTickSize;
                fromPartial(object: any): _96.MsgUpdatePriceTickSize;
            };
            MsgUpdateQuantityTickSize: {
                encode(message: _96.MsgUpdateQuantityTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUpdateQuantityTickSize;
                fromPartial(object: any): _96.MsgUpdateQuantityTickSize;
            };
            MsgUpdateTickSizeResponse: {
                encode(_: _96.MsgUpdateTickSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUpdateTickSizeResponse;
                fromPartial(_: any): _96.MsgUpdateTickSizeResponse;
            };
            MsgUnsuspendContract: {
                encode(message: _96.MsgUnsuspendContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnsuspendContract;
                fromPartial(object: any): _96.MsgUnsuspendContract;
            };
            MsgUnsuspendContractResponse: {
                encode(_: _96.MsgUnsuspendContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.MsgUnsuspendContractResponse;
                fromPartial(_: any): _96.MsgUnsuspendContractResponse;
            };
            Twap: {
                encode(message: _95.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Twap;
                fromPartial(object: any): _95.Twap;
            };
            TickSize: {
                encode(message: _94.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.TickSize;
                fromPartial(object: any): _94.TickSize;
            };
            ShortBook: {
                encode(message: _93.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.ShortBook;
                fromPartial(object: any): _93.ShortBook;
            };
            SettlementEntry: {
                encode(message: _92.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SettlementEntry;
                fromPartial(object: any): _92.SettlementEntry;
            };
            Settlements: {
                encode(message: _92.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Settlements;
                fromPartial(object: any): _92.Settlements;
            };
            QueryParamsRequest: {
                encode(_: _91.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsRequest;
                fromPartial(_: any): _91.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _91.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryParamsResponse;
                fromPartial(object: any): _91.QueryParamsResponse;
            };
            QueryGetLongBookRequest: {
                encode(message: _91.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLongBookRequest;
                fromPartial(object: any): _91.QueryGetLongBookRequest;
            };
            QueryGetLongBookResponse: {
                encode(message: _91.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLongBookResponse;
                fromPartial(object: any): _91.QueryGetLongBookResponse;
            };
            QueryAllLongBookRequest: {
                encode(message: _91.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllLongBookRequest;
                fromPartial(object: any): _91.QueryAllLongBookRequest;
            };
            QueryAllLongBookResponse: {
                encode(message: _91.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllLongBookResponse;
                fromPartial(object: any): _91.QueryAllLongBookResponse;
            };
            QueryGetShortBookRequest: {
                encode(message: _91.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetShortBookRequest;
                fromPartial(object: any): _91.QueryGetShortBookRequest;
            };
            QueryGetShortBookResponse: {
                encode(message: _91.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetShortBookResponse;
                fromPartial(object: any): _91.QueryGetShortBookResponse;
            };
            QueryAllShortBookRequest: {
                encode(message: _91.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllShortBookRequest;
                fromPartial(object: any): _91.QueryAllShortBookRequest;
            };
            QueryAllShortBookResponse: {
                encode(message: _91.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAllShortBookResponse;
                fromPartial(object: any): _91.QueryAllShortBookResponse;
            };
            QueryGetPricesRequest: {
                encode(message: _91.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPricesRequest;
                fromPartial(object: any): _91.QueryGetPricesRequest;
            };
            QueryGetPricesResponse: {
                encode(message: _91.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPricesResponse;
                fromPartial(object: any): _91.QueryGetPricesResponse;
            };
            QueryGetPriceRequest: {
                encode(message: _91.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPriceRequest;
                fromPartial(object: any): _91.QueryGetPriceRequest;
            };
            QueryGetPriceResponse: {
                encode(message: _91.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetPriceResponse;
                fromPartial(object: any): _91.QueryGetPriceResponse;
            };
            QueryGetLatestPriceRequest: {
                encode(message: _91.QueryGetLatestPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLatestPriceRequest;
                fromPartial(object: any): _91.QueryGetLatestPriceRequest;
            };
            QueryGetLatestPriceResponse: {
                encode(message: _91.QueryGetLatestPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetLatestPriceResponse;
                fromPartial(object: any): _91.QueryGetLatestPriceResponse;
            };
            QueryGetTwapsRequest: {
                encode(message: _91.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetTwapsRequest;
                fromPartial(object: any): _91.QueryGetTwapsRequest;
            };
            QueryGetTwapsResponse: {
                encode(message: _91.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetTwapsResponse;
                fromPartial(object: any): _91.QueryGetTwapsResponse;
            };
            QueryAssetListRequest: {
                encode(_: _91.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetListRequest;
                fromPartial(_: any): _91.QueryAssetListRequest;
            };
            QueryAssetListResponse: {
                encode(message: _91.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetListResponse;
                fromPartial(object: any): _91.QueryAssetListResponse;
            };
            QueryAssetMetadataRequest: {
                encode(message: _91.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetMetadataRequest;
                fromPartial(object: any): _91.QueryAssetMetadataRequest;
            };
            QueryAssetMetadataResponse: {
                encode(message: _91.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryAssetMetadataResponse;
                fromPartial(object: any): _91.QueryAssetMetadataResponse;
            };
            QueryRegisteredPairsRequest: {
                encode(message: _91.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredPairsRequest;
                fromPartial(object: any): _91.QueryRegisteredPairsRequest;
            };
            QueryRegisteredPairsResponse: {
                encode(message: _91.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredPairsResponse;
                fromPartial(object: any): _91.QueryRegisteredPairsResponse;
            };
            QueryRegisteredContractRequest: {
                encode(message: _91.QueryRegisteredContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredContractRequest;
                fromPartial(object: any): _91.QueryRegisteredContractRequest;
            };
            QueryRegisteredContractResponse: {
                encode(message: _91.QueryRegisteredContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRegisteredContractResponse;
                fromPartial(object: any): _91.QueryRegisteredContractResponse;
            };
            QueryGetOrdersRequest: {
                encode(message: _91.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrdersRequest;
                fromPartial(object: any): _91.QueryGetOrdersRequest;
            };
            QueryGetOrdersResponse: {
                encode(message: _91.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrdersResponse;
                fromPartial(object: any): _91.QueryGetOrdersResponse;
            };
            QueryGetOrderByIDRequest: {
                encode(message: _91.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderByIDRequest;
                fromPartial(object: any): _91.QueryGetOrderByIDRequest;
            };
            QueryGetOrderByIDResponse: {
                encode(message: _91.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderByIDResponse;
                fromPartial(object: any): _91.QueryGetOrderByIDResponse;
            };
            QueryGetHistoricalPricesRequest: {
                encode(message: _91.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetHistoricalPricesRequest;
                fromPartial(object: any): _91.QueryGetHistoricalPricesRequest;
            };
            QueryGetHistoricalPricesResponse: {
                encode(message: _91.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetHistoricalPricesResponse;
                fromPartial(object: any): _91.QueryGetHistoricalPricesResponse;
            };
            QueryGetMarketSummaryRequest: {
                encode(message: _91.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMarketSummaryRequest;
                fromPartial(object: any): _91.QueryGetMarketSummaryRequest;
            };
            QueryGetMarketSummaryResponse: {
                encode(message: _91.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMarketSummaryResponse;
                fromPartial(object: any): _91.QueryGetMarketSummaryResponse;
            };
            QueryOrderSimulationRequest: {
                encode(message: _91.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryOrderSimulationRequest;
                fromPartial(object: any): _91.QueryOrderSimulationRequest;
            };
            QueryOrderSimulationResponse: {
                encode(message: _91.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryOrderSimulationResponse;
                fromPartial(object: any): _91.QueryOrderSimulationResponse;
            };
            QueryGetMatchResultRequest: {
                encode(message: _91.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMatchResultRequest;
                fromPartial(object: any): _91.QueryGetMatchResultRequest;
            };
            QueryGetMatchResultResponse: {
                encode(message: _91.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetMatchResultResponse;
                fromPartial(object: any): _91.QueryGetMatchResultResponse;
            };
            QueryGetOrderCountRequest: {
                encode(message: _91.QueryGetOrderCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderCountRequest;
                fromPartial(object: any): _91.QueryGetOrderCountRequest;
            };
            QueryGetOrderCountResponse: {
                encode(message: _91.QueryGetOrderCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryGetOrderCountResponse;
                fromPartial(object: any): _91.QueryGetOrderCountResponse;
            };
            Price: {
                encode(message: _90.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Price;
                fromPartial(object: any): _90.Price;
            };
            PriceCandlestick: {
                encode(message: _90.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.PriceCandlestick;
                fromPartial(object: any): _90.PriceCandlestick;
            };
            Params: {
                encode(message: _89.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Params;
                fromPartial(object: any): _89.Params;
            };
            Pair: {
                encode(message: _88.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Pair;
                fromPartial(object: any): _88.Pair;
            };
            BatchContractPair: {
                encode(message: _88.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.BatchContractPair;
                fromPartial(object: any): _88.BatchContractPair;
            };
            Order: {
                encode(message: _87.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Order;
                fromPartial(object: any): _87.Order;
            };
            Cancellation: {
                encode(message: _87.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Cancellation;
                fromPartial(object: any): _87.Cancellation;
            };
            ActiveOrders: {
                encode(message: _87.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ActiveOrders;
                fromPartial(object: any): _87.ActiveOrders;
            };
            OrderEntry: {
                encode(message: _86.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.OrderEntry;
                fromPartial(object: any): _86.OrderEntry;
            };
            Allocation: {
                encode(message: _86.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Allocation;
                fromPartial(object: any): _86.Allocation;
            };
            MatchResult: {
                encode(message: _85.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.MatchResult;
                fromPartial(object: any): _85.MatchResult;
            };
            LongBook: {
                encode(message: _84.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.LongBook;
                fromPartial(object: any): _84.LongBook;
            };
            AddAssetMetadataProposal: {
                encode(message: _83.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.AddAssetMetadataProposal;
                fromPartial(object: any): _83.AddAssetMetadataProposal;
            };
            GenesisState: {
                encode(message: _82.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.GenesisState;
                fromPartial(object: any): _82.GenesisState;
            };
            ContractState: {
                encode(message: _82.ContractState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ContractState;
                fromPartial(object: any): _82.ContractState;
            };
            ContractPairPrices: {
                encode(message: _82.ContractPairPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.ContractPairPrices;
                fromPartial(object: any): _82.ContractPairPrices;
            };
            positionDirectionFromJSON(object: any): _81.PositionDirection;
            positionDirectionToJSON(object: _81.PositionDirection): string;
            positionEffectFromJSON(object: any): _81.PositionEffect;
            positionEffectToJSON(object: _81.PositionEffect): string;
            orderTypeFromJSON(object: any): _81.OrderType;
            orderTypeToJSON(object: _81.OrderType): string;
            unitFromJSON(object: any): _81.Unit;
            unitToJSON(object: _81.Unit): string;
            orderStatusFromJSON(object: any): _81.OrderStatus;
            orderStatusToJSON(object: _81.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _81.CancellationInitiator;
            cancellationInitiatorToJSON(object: _81.CancellationInitiator): string;
            PositionDirection: typeof _81.PositionDirection;
            PositionDirectionSDKType: typeof _81.PositionDirection;
            PositionEffect: typeof _81.PositionEffect;
            PositionEffectSDKType: typeof _81.PositionEffect;
            OrderType: typeof _81.OrderType;
            OrderTypeSDKType: typeof _81.OrderType;
            Unit: typeof _81.Unit;
            UnitSDKType: typeof _81.Unit;
            OrderStatus: typeof _81.OrderStatus;
            OrderStatusSDKType: typeof _81.OrderStatus;
            CancellationInitiator: typeof _81.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _81.CancellationInitiator;
            DepositInfoEntry: {
                encode(message: _80.DepositInfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.DepositInfoEntry;
                fromPartial(object: any): _80.DepositInfoEntry;
            };
            ContractInfo: {
                encode(message: _79.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ContractInfo;
                fromPartial(object: any): _79.ContractInfo;
            };
            ContractInfoV2: {
                encode(message: _79.ContractInfoV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ContractInfoV2;
                fromPartial(object: any): _79.ContractInfoV2;
            };
            ContractDependencyInfo: {
                encode(message: _79.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.ContractDependencyInfo;
                fromPartial(object: any): _79.ContractDependencyInfo;
            };
            LegacyContractInfo: {
                encode(message: _79.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.LegacyContractInfo;
                fromPartial(object: any): _79.LegacyContractInfo;
            };
            AssetIBCInfo: {
                encode(message: _78.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.AssetIBCInfo;
                fromPartial(object: any): _78.AssetIBCInfo;
            };
            AssetMetadata: {
                encode(message: _78.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.AssetMetadata;
                fromPartial(object: any): _78.AssetMetadata;
            };
        };
        const epoch: {
            QueryClientImpl: typeof _197.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epoch(request?: _100.QueryEpochRequest): Promise<_100.QueryEpochResponse>;
                params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _192.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _100.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsRequest;
                fromPartial(_: any): _100.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _100.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryParamsResponse;
                fromPartial(object: any): _100.QueryParamsResponse;
            };
            QueryEpochRequest: {
                encode(_: _100.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryEpochRequest;
                fromPartial(_: any): _100.QueryEpochRequest;
            };
            QueryEpochResponse: {
                encode(message: _100.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryEpochResponse;
                fromPartial(object: any): _100.QueryEpochResponse;
            };
            Params: {
                encode(_: _99.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Params;
                fromPartial(_: any): _99.Params;
            };
            GenesisState: {
                encode(message: _98.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.GenesisState;
                fromPartial(object: any): _98.GenesisState;
            };
            Epoch: {
                encode(message: _97.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Epoch;
                fromPartial(object: any): _97.Epoch;
            };
        };
        const mint: {
            QueryClientImpl: typeof _198.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                minter(request?: _105.QueryMinterRequest): Promise<_105.QueryMinterResponse>;
            };
            LCDQueryClient: typeof _193.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _105.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsRequest;
                fromPartial(_: any): _105.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _105.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryParamsResponse;
                fromPartial(object: any): _105.QueryParamsResponse;
            };
            QueryMinterRequest: {
                encode(_: _105.QueryMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryMinterRequest;
                fromPartial(_: any): _105.QueryMinterRequest;
            };
            QueryMinterResponse: {
                encode(message: _105.QueryMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryMinterResponse;
                fromPartial(object: any): _105.QueryMinterResponse;
            };
            Minter: {
                encode(message: _104.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Minter;
                fromPartial(object: any): _104.Minter;
            };
            ScheduledTokenRelease: {
                encode(message: _104.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ScheduledTokenRelease;
                fromPartial(object: any): _104.ScheduledTokenRelease;
            };
            Params: {
                encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                fromPartial(object: any): _104.Params;
            };
            Version2Minter: {
                encode(message: _104.Version2Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Version2Minter;
                fromPartial(object: any): _104.Version2Minter;
            };
            Version2ScheduledTokenRelease: {
                encode(message: _104.Version2ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Version2ScheduledTokenRelease;
                fromPartial(object: any): _104.Version2ScheduledTokenRelease;
            };
            Version2Params: {
                encode(message: _104.Version2Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Version2Params;
                fromPartial(object: any): _104.Version2Params;
            };
            UpdateMinterProposal: {
                encode(message: _103.UpdateMinterProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.UpdateMinterProposal;
                fromPartial(object: any): _103.UpdateMinterProposal;
            };
            GenesisState: {
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                fromPartial(object: any): _102.GenesisState;
            };
        };
        const oracle: {
            MsgClientImpl: typeof _202.MsgClientImpl;
            QueryClientImpl: typeof _199.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                exchangeRate(request: _108.QueryExchangeRateRequest): Promise<_108.QueryExchangeRateResponse>;
                exchangeRates(request?: _108.QueryExchangeRatesRequest): Promise<_108.QueryExchangeRatesResponse>;
                actives(request?: _108.QueryActivesRequest): Promise<_108.QueryActivesResponse>;
                voteTargets(request?: _108.QueryVoteTargetsRequest): Promise<_108.QueryVoteTargetsResponse>;
                priceSnapshotHistory(request?: _108.QueryPriceSnapshotHistoryRequest): Promise<_108.QueryPriceSnapshotHistoryResponse>;
                twaps(request: _108.QueryTwapsRequest): Promise<_108.QueryTwapsResponse>;
                feederDelegation(request: _108.QueryFeederDelegationRequest): Promise<_108.QueryFeederDelegationResponse>;
                votePenaltyCounter(request: _108.QueryVotePenaltyCounterRequest): Promise<_108.QueryVotePenaltyCounterResponse>;
                slashWindow(request?: _108.QuerySlashWindowRequest): Promise<_108.QuerySlashWindowResponse>;
                params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _194.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _109.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _109.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _109.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _109.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _109.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _109.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _109.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _109.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _109.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _109.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: ({ exchangeRates, feeder, validator }: _109.MsgAggregateExchangeRateVote) => {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ exchange_rates, feeder, validator }: {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    }) => _109.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: ({ operator, delegate }: _109.MsgDelegateFeedConsent) => {
                        operator: string;
                        delegate: string;
                    };
                    fromAmino: ({ operator, delegate }: {
                        operator: string;
                        delegate: string;
                    }) => _109.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                encode(message: _109.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgAggregateExchangeRateVote;
                fromPartial(object: any): _109.MsgAggregateExchangeRateVote;
            };
            MsgAggregateExchangeRateVoteResponse: {
                encode(_: _109.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: any): _109.MsgAggregateExchangeRateVoteResponse;
            };
            MsgDelegateFeedConsent: {
                encode(message: _109.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgDelegateFeedConsent;
                fromPartial(object: any): _109.MsgDelegateFeedConsent;
            };
            MsgDelegateFeedConsentResponse: {
                encode(_: _109.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgDelegateFeedConsentResponse;
                fromPartial(_: any): _109.MsgDelegateFeedConsentResponse;
            };
            QueryExchangeRateRequest: {
                encode(message: _108.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRateRequest;
                fromPartial(object: any): _108.QueryExchangeRateRequest;
            };
            QueryExchangeRateResponse: {
                encode(message: _108.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRateResponse;
                fromPartial(object: any): _108.QueryExchangeRateResponse;
            };
            QueryExchangeRatesRequest: {
                encode(_: _108.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRatesRequest;
                fromPartial(_: any): _108.QueryExchangeRatesRequest;
            };
            DenomOracleExchangeRatePair: {
                encode(message: _108.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.DenomOracleExchangeRatePair;
                fromPartial(object: any): _108.DenomOracleExchangeRatePair;
            };
            QueryExchangeRatesResponse: {
                encode(message: _108.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryExchangeRatesResponse;
                fromPartial(object: any): _108.QueryExchangeRatesResponse;
            };
            QueryActivesRequest: {
                encode(_: _108.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryActivesRequest;
                fromPartial(_: any): _108.QueryActivesRequest;
            };
            QueryActivesResponse: {
                encode(message: _108.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryActivesResponse;
                fromPartial(object: any): _108.QueryActivesResponse;
            };
            QueryVoteTargetsRequest: {
                encode(_: _108.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVoteTargetsRequest;
                fromPartial(_: any): _108.QueryVoteTargetsRequest;
            };
            QueryVoteTargetsResponse: {
                encode(message: _108.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVoteTargetsResponse;
                fromPartial(object: any): _108.QueryVoteTargetsResponse;
            };
            QueryPriceSnapshotHistoryRequest: {
                encode(_: _108.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPriceSnapshotHistoryRequest;
                fromPartial(_: any): _108.QueryPriceSnapshotHistoryRequest;
            };
            QueryPriceSnapshotHistoryResponse: {
                encode(message: _108.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryPriceSnapshotHistoryResponse;
                fromPartial(object: any): _108.QueryPriceSnapshotHistoryResponse;
            };
            QueryTwapsRequest: {
                encode(message: _108.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTwapsRequest;
                fromPartial(object: any): _108.QueryTwapsRequest;
            };
            QueryTwapsResponse: {
                encode(message: _108.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTwapsResponse;
                fromPartial(object: any): _108.QueryTwapsResponse;
            };
            QueryFeederDelegationRequest: {
                encode(message: _108.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryFeederDelegationRequest;
                fromPartial(object: any): _108.QueryFeederDelegationRequest;
            };
            QueryFeederDelegationResponse: {
                encode(message: _108.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryFeederDelegationResponse;
                fromPartial(object: any): _108.QueryFeederDelegationResponse;
            };
            QueryVotePenaltyCounterRequest: {
                encode(message: _108.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVotePenaltyCounterRequest;
                fromPartial(object: any): _108.QueryVotePenaltyCounterRequest;
            };
            QueryVotePenaltyCounterResponse: {
                encode(message: _108.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVotePenaltyCounterResponse;
                fromPartial(object: any): _108.QueryVotePenaltyCounterResponse;
            };
            QuerySlashWindowRequest: {
                encode(_: _108.QuerySlashWindowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySlashWindowRequest;
                fromPartial(_: any): _108.QuerySlashWindowRequest;
            };
            QuerySlashWindowResponse: {
                encode(message: _108.QuerySlashWindowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QuerySlashWindowResponse;
                fromPartial(object: any): _108.QuerySlashWindowResponse;
            };
            QueryParamsRequest: {
                encode(_: _108.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsRequest;
                fromPartial(_: any): _108.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _108.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsResponse;
                fromPartial(object: any): _108.QueryParamsResponse;
            };
            Params: {
                encode(message: _107.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Params;
                fromPartial(object: any): _107.Params;
            };
            Denom: {
                encode(message: _107.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Denom;
                fromPartial(object: any): _107.Denom;
            };
            AggregateExchangeRateVote: {
                encode(message: _107.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.AggregateExchangeRateVote;
                fromPartial(object: any): _107.AggregateExchangeRateVote;
            };
            ExchangeRateTuple: {
                encode(message: _107.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.ExchangeRateTuple;
                fromPartial(object: any): _107.ExchangeRateTuple;
            };
            OracleExchangeRate: {
                encode(message: _107.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.OracleExchangeRate;
                fromPartial(object: any): _107.OracleExchangeRate;
            };
            PriceSnapshotItem: {
                encode(message: _107.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PriceSnapshotItem;
                fromPartial(object: any): _107.PriceSnapshotItem;
            };
            PriceSnapshot: {
                encode(message: _107.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PriceSnapshot;
                fromPartial(object: any): _107.PriceSnapshot;
            };
            OracleTwap: {
                encode(message: _107.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.OracleTwap;
                fromPartial(object: any): _107.OracleTwap;
            };
            VotePenaltyCounter: {
                encode(message: _107.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.VotePenaltyCounter;
                fromPartial(object: any): _107.VotePenaltyCounter;
            };
            GenesisState: {
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromPartial(object: any): _106.GenesisState;
            };
            FeederDelegation: {
                encode(message: _106.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FeederDelegation;
                fromPartial(object: any): _106.FeederDelegation;
            };
            PenaltyCounter: {
                encode(message: _106.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.PenaltyCounter;
                fromPartial(object: any): _106.PenaltyCounter;
            };
        };
        const tokenfactory: {
            MsgClientImpl: typeof _203.MsgClientImpl;
            QueryClientImpl: typeof _200.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                denomAuthorityMetadata(request: _113.QueryDenomAuthorityMetadataRequest): Promise<_113.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _113.QueryDenomsFromCreatorRequest): Promise<_113.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _195.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _114.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _114.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _114.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _114.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _114.MsgCreateDenom): {
                        typeUrl: string;
                        value: _114.MsgCreateDenom;
                    };
                    mint(value: _114.MsgMint): {
                        typeUrl: string;
                        value: _114.MsgMint;
                    };
                    burn(value: _114.MsgBurn): {
                        typeUrl: string;
                        value: _114.MsgBurn;
                    };
                    changeAdmin(value: _114.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _114.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _114.MsgCreateDenom): {
                        typeUrl: string;
                        value: _114.MsgCreateDenom;
                    };
                    mint(value: _114.MsgMint): {
                        typeUrl: string;
                        value: _114.MsgMint;
                    };
                    burn(value: _114.MsgBurn): {
                        typeUrl: string;
                        value: _114.MsgBurn;
                    };
                    changeAdmin(value: _114.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _114.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _114.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _114.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _114.MsgMint) => {
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
                    }) => _114.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _114.MsgBurn) => {
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
                    }) => _114.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _114.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _114.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _114.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateDenom;
                fromPartial(object: any): _114.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _114.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateDenomResponse;
                fromPartial(object: any): _114.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _114.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgMint;
                fromPartial(object: any): _114.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _114.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgMintResponse;
                fromPartial(_: any): _114.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _114.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgBurn;
                fromPartial(object: any): _114.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _114.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgBurnResponse;
                fromPartial(_: any): _114.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _114.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChangeAdmin;
                fromPartial(object: any): _114.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _114.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgChangeAdminResponse;
                fromPartial(_: any): _114.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _113.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsRequest;
                fromPartial(_: any): _113.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _113.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryParamsResponse;
                fromPartial(object: any): _113.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _113.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: any): _113.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _113.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: any): _113.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _113.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomsFromCreatorRequest;
                fromPartial(object: any): _113.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _113.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryDenomsFromCreatorResponse;
                fromPartial(object: any): _113.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(_: _112.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Params;
                fromPartial(_: any): _112.Params;
            };
            GenesisState: {
                encode(message: _111.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisState;
                fromPartial(object: any): _111.GenesisState;
            };
            GenesisDenom: {
                encode(message: _111.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.GenesisDenom;
                fromPartial(object: any): _111.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _110.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.DenomAuthorityMetadata;
                fromPartial(object: any): _110.DenomAuthorityMetadata;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
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
                    dex: _201.MsgClientImpl;
                    oracle: _202.MsgClientImpl;
                    tokenfactory: _203.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
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
                        params(request?: _91.QueryParamsRequest): Promise<_91.QueryParamsResponse>;
                        longBook(request: _91.QueryGetLongBookRequest): Promise<_91.QueryGetLongBookResponse>;
                        longBookAll(request: _91.QueryAllLongBookRequest): Promise<_91.QueryAllLongBookResponse>;
                        shortBook(request: _91.QueryGetShortBookRequest): Promise<_91.QueryGetShortBookResponse>;
                        shortBookAll(request: _91.QueryAllShortBookRequest): Promise<_91.QueryAllShortBookResponse>;
                        getPrice(request: _91.QueryGetPriceRequest): Promise<_91.QueryGetPriceResponse>;
                        getLatestPrice(request: _91.QueryGetLatestPriceRequest): Promise<_91.QueryGetLatestPriceResponse>;
                        getPrices(request: _91.QueryGetPricesRequest): Promise<_91.QueryGetPricesResponse>;
                        getTwaps(request: _91.QueryGetTwapsRequest): Promise<_91.QueryGetTwapsResponse>;
                        assetMetadata(request: _91.QueryAssetMetadataRequest): Promise<_91.QueryAssetMetadataResponse>;
                        assetList(request?: _91.QueryAssetListRequest): Promise<_91.QueryAssetListResponse>;
                        getRegisteredPairs(request: _91.QueryRegisteredPairsRequest): Promise<_91.QueryRegisteredPairsResponse>;
                        getRegisteredContract(request: _91.QueryRegisteredContractRequest): Promise<_91.QueryRegisteredContractResponse>;
                        getOrders(request: _91.QueryGetOrdersRequest): Promise<_91.QueryGetOrdersResponse>;
                        getOrder(request: _91.QueryGetOrderByIDRequest): Promise<_91.QueryGetOrderByIDResponse>;
                        getHistoricalPrices(request: _91.QueryGetHistoricalPricesRequest): Promise<_91.QueryGetHistoricalPricesResponse>;
                        getMarketSummary(request: _91.QueryGetMarketSummaryRequest): Promise<_91.QueryGetMarketSummaryResponse>;
                        getOrderSimulation(request: _91.QueryOrderSimulationRequest): Promise<_91.QueryOrderSimulationResponse>;
                        getMatchResult(request: _91.QueryGetMatchResultRequest): Promise<_91.QueryGetMatchResultResponse>;
                        getOrderCount(request: _91.QueryGetOrderCountRequest): Promise<_91.QueryGetOrderCountResponse>;
                    };
                    epoch: {
                        epoch(request?: _100.QueryEpochRequest): Promise<_100.QueryEpochResponse>;
                        params(request?: _100.QueryParamsRequest): Promise<_100.QueryParamsResponse>;
                    };
                    mint: {
                        params(request?: _105.QueryParamsRequest): Promise<_105.QueryParamsResponse>;
                        minter(request?: _105.QueryMinterRequest): Promise<_105.QueryMinterResponse>;
                    };
                    oracle: {
                        exchangeRate(request: _108.QueryExchangeRateRequest): Promise<_108.QueryExchangeRateResponse>;
                        exchangeRates(request?: _108.QueryExchangeRatesRequest): Promise<_108.QueryExchangeRatesResponse>;
                        actives(request?: _108.QueryActivesRequest): Promise<_108.QueryActivesResponse>;
                        voteTargets(request?: _108.QueryVoteTargetsRequest): Promise<_108.QueryVoteTargetsResponse>;
                        priceSnapshotHistory(request?: _108.QueryPriceSnapshotHistoryRequest): Promise<_108.QueryPriceSnapshotHistoryResponse>;
                        twaps(request: _108.QueryTwapsRequest): Promise<_108.QueryTwapsResponse>;
                        feederDelegation(request: _108.QueryFeederDelegationRequest): Promise<_108.QueryFeederDelegationResponse>;
                        votePenaltyCounter(request: _108.QueryVotePenaltyCounterRequest): Promise<_108.QueryVotePenaltyCounterResponse>;
                        slashWindow(request?: _108.QuerySlashWindowRequest): Promise<_108.QuerySlashWindowResponse>;
                        params(request?: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                    };
                    tokenfactory: {
                        params(request?: _113.QueryParamsRequest): Promise<_113.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _113.QueryDenomAuthorityMetadataRequest): Promise<_113.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _113.QueryDenomsFromCreatorRequest): Promise<_113.QueryDenomsFromCreatorResponse>;
                    };
                };
            };
        }>;
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
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
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
                    dex: _191.LCDQueryClient;
                    epoch: _192.LCDQueryClient;
                    mint: _193.LCDQueryClient;
                    oracle: _194.LCDQueryClient;
                    tokenfactory: _195.LCDQueryClient;
                };
            };
        }>;
    };
}
