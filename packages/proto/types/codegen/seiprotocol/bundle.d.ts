import * as _135 from "./seichain/dex/asset_list";
import * as _136 from "./seichain/dex/contract";
import * as _137 from "./seichain/dex/deposit";
import * as _138 from "./seichain/dex/enums";
import * as _139 from "./seichain/dex/genesis";
import * as _140 from "./seichain/dex/gov";
import * as _141 from "./seichain/dex/long_book";
import * as _142 from "./seichain/dex/match_result";
import * as _143 from "./seichain/dex/order_entry";
import * as _144 from "./seichain/dex/order";
import * as _145 from "./seichain/dex/pair";
import * as _146 from "./seichain/dex/params";
import * as _147 from "./seichain/dex/price";
import * as _148 from "./seichain/dex/query";
import * as _149 from "./seichain/dex/settlement";
import * as _150 from "./seichain/dex/short_book";
import * as _151 from "./seichain/dex/tick_size";
import * as _152 from "./seichain/dex/twap";
import * as _153 from "./seichain/dex/tx";
import * as _154 from "./seichain/epoch/epoch";
import * as _155 from "./seichain/epoch/genesis";
import * as _156 from "./seichain/epoch/params";
import * as _157 from "./seichain/epoch/query";
import * as _159 from "./seichain/mint/v1beta1/genesis";
import * as _160 from "./seichain/mint/v1beta1/mint";
import * as _161 from "./seichain/mint/v1beta1/query";
import * as _162 from "./seichain/nitro/account";
import * as _163 from "./seichain/nitro/data";
import * as _164 from "./seichain/nitro/genesis";
import * as _165 from "./seichain/nitro/params";
import * as _166 from "./seichain/nitro/query";
import * as _167 from "./seichain/nitro/tx";
import * as _168 from "./seichain/oracle/genesis";
import * as _169 from "./seichain/oracle/oracle";
import * as _170 from "./seichain/oracle/query";
import * as _171 from "./seichain/oracle/tx";
import * as _172 from "./seichain/tokenfactory/authorityMetadata";
import * as _173 from "./seichain/tokenfactory/genesis";
import * as _174 from "./seichain/tokenfactory/params";
import * as _175 from "./seichain/tokenfactory/query";
import * as _176 from "./seichain/tokenfactory/tx";
import * as _256 from "./seichain/dex/query.lcd";
import * as _257 from "./seichain/epoch/query.lcd";
import * as _258 from "./seichain/mint/v1beta1/query.lcd";
import * as _259 from "./seichain/nitro/query.lcd";
import * as _260 from "./seichain/oracle/query.lcd";
import * as _261 from "./seichain/tokenfactory/query.lcd";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _153.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _153.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _153.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    contractDepositRent(value: _153.MsgContractDepositRent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterContract(value: _153.MsgUnregisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerPairs(value: _153.MsgRegisterPairs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePriceTickSize(value: _153.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateQuantityTickSize(value: _153.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _153.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _153.MsgPlaceOrders;
                    };
                    cancelOrders(value: _153.MsgCancelOrders): {
                        typeUrl: string;
                        value: _153.MsgCancelOrders;
                    };
                    registerContract(value: _153.MsgRegisterContract): {
                        typeUrl: string;
                        value: _153.MsgRegisterContract;
                    };
                    contractDepositRent(value: _153.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _153.MsgContractDepositRent;
                    };
                    unregisterContract(value: _153.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _153.MsgUnregisterContract;
                    };
                    registerPairs(value: _153.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _153.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _153.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _153.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _153.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _153.MsgUpdateQuantityTickSize;
                    };
                };
                fromPartial: {
                    placeOrders(value: _153.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _153.MsgPlaceOrders;
                    };
                    cancelOrders(value: _153.MsgCancelOrders): {
                        typeUrl: string;
                        value: _153.MsgCancelOrders;
                    };
                    registerContract(value: _153.MsgRegisterContract): {
                        typeUrl: string;
                        value: _153.MsgRegisterContract;
                    };
                    contractDepositRent(value: _153.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _153.MsgContractDepositRent;
                    };
                    unregisterContract(value: _153.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _153.MsgUnregisterContract;
                    };
                    registerPairs(value: _153.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _153.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _153.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _153.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _153.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _153.MsgUpdateQuantityTickSize;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: ({ creator, orders, contractAddr, funds }: _153.MsgPlaceOrders) => {
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
                    }) => _153.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: ({ creator, cancellations, contractAddr }: _153.MsgCancelOrders) => {
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
                    }) => _153.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contract }: _153.MsgRegisterContract) => {
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
                        };
                    }) => _153.MsgRegisterContract;
                };
                "/seiprotocol.seichain.dex.MsgContractDepositRent": {
                    aminoType: string;
                    toAmino: ({ contractAddr, amount, sender }: _153.MsgContractDepositRent) => {
                        contractAddr: string;
                        amount: string;
                        sender: string;
                    };
                    fromAmino: ({ contractAddr, amount, sender }: {
                        contractAddr: string;
                        amount: string;
                        sender: string;
                    }) => _153.MsgContractDepositRent;
                };
                "/seiprotocol.seichain.dex.MsgUnregisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contractAddr }: _153.MsgUnregisterContract) => {
                        creator: string;
                        contractAddr: string;
                    };
                    fromAmino: ({ creator, contractAddr }: {
                        creator: string;
                        contractAddr: string;
                    }) => _153.MsgUnregisterContract;
                };
                "/seiprotocol.seichain.dex.MsgRegisterPairs": {
                    aminoType: string;
                    toAmino: ({ creator, batchcontractpair }: _153.MsgRegisterPairs) => {
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
                    }) => _153.MsgRegisterPairs;
                };
                "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
                    aminoType: string;
                    toAmino: ({ creator, tickSizeList }: _153.MsgUpdatePriceTickSize) => {
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
                    }) => _153.MsgUpdatePriceTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
                    aminoType: string;
                    toAmino: ({ creator, tickSizeList }: _153.MsgUpdateQuantityTickSize) => {
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
                    }) => _153.MsgUpdateQuantityTickSize;
                };
            };
            MsgPlaceOrders: {
                encode(message: _153.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgPlaceOrders;
                fromPartial(object: {
                    creator?: string;
                    orders?: {
                        id?: any;
                        status?: _138.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _138.OrderType;
                        positionDirection?: _138.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                        nominal?: string;
                        triggerPrice?: string;
                        triggerStatus?: boolean;
                    }[];
                    contractAddr?: string;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _153.MsgPlaceOrders;
            };
            MsgPlaceOrdersResponse: {
                encode(message: _153.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgPlaceOrdersResponse;
                fromPartial(object: {
                    orderIds?: any[];
                }): _153.MsgPlaceOrdersResponse;
            };
            MsgCancelOrders: {
                encode(message: _153.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelOrders;
                fromPartial(object: {
                    creator?: string;
                    cancellations?: {
                        id?: any;
                        initiator?: _138.CancellationInitiator;
                        creator?: string;
                        contractAddr?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        positionDirection?: _138.PositionDirection;
                        price?: string;
                    }[];
                    contractAddr?: string;
                }): _153.MsgCancelOrders;
            };
            MsgCancelOrdersResponse: {
                encode(_: _153.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgCancelOrdersResponse;
                fromPartial(_: {}): _153.MsgCancelOrdersResponse;
            };
            MsgRegisterContract: {
                encode(message: _153.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRegisterContract;
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
                        creator?: string;
                        rentBalance?: any;
                    };
                }): _153.MsgRegisterContract;
            };
            MsgRegisterContractResponse: {
                encode(_: _153.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRegisterContractResponse;
                fromPartial(_: {}): _153.MsgRegisterContractResponse;
            };
            MsgContractDepositRent: {
                encode(message: _153.MsgContractDepositRent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgContractDepositRent;
                fromPartial(object: {
                    contractAddr?: string;
                    amount?: any;
                    sender?: string;
                }): _153.MsgContractDepositRent;
            };
            MsgContractDepositRentResponse: {
                encode(_: _153.MsgContractDepositRentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgContractDepositRentResponse;
                fromPartial(_: {}): _153.MsgContractDepositRentResponse;
            };
            MsgUnregisterContract: {
                encode(message: _153.MsgUnregisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUnregisterContract;
                fromPartial(object: {
                    creator?: string;
                    contractAddr?: string;
                }): _153.MsgUnregisterContract;
            };
            MsgUnregisterContractResponse: {
                encode(_: _153.MsgUnregisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUnregisterContractResponse;
                fromPartial(_: {}): _153.MsgUnregisterContractResponse;
            };
            MsgRegisterPairs: {
                encode(message: _153.MsgRegisterPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRegisterPairs;
                fromPartial(object: {
                    creator?: string;
                    batchcontractpair?: {
                        contractAddr?: string;
                        pairs?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        }[];
                    }[];
                }): _153.MsgRegisterPairs;
            };
            MsgRegisterPairsResponse: {
                encode(_: _153.MsgRegisterPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgRegisterPairsResponse;
                fromPartial(_: {}): _153.MsgRegisterPairsResponse;
            };
            MsgUpdatePriceTickSize: {
                encode(message: _153.MsgUpdatePriceTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdatePriceTickSize;
                fromPartial(object: {
                    creator?: string;
                    tickSizeList?: {
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                        ticksize?: string;
                        contractAddr?: string;
                    }[];
                }): _153.MsgUpdatePriceTickSize;
            };
            MsgUpdateQuantityTickSize: {
                encode(message: _153.MsgUpdateQuantityTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateQuantityTickSize;
                fromPartial(object: {
                    creator?: string;
                    tickSizeList?: {
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                        ticksize?: string;
                        contractAddr?: string;
                    }[];
                }): _153.MsgUpdateQuantityTickSize;
            };
            MsgUpdateTickSizeResponse: {
                encode(_: _153.MsgUpdateTickSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.MsgUpdateTickSizeResponse;
                fromPartial(_: {}): _153.MsgUpdateTickSizeResponse;
            };
            Twap: {
                encode(message: _152.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Twap;
                fromPartial(object: {
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        priceTicksize?: string;
                        quantityTicksize?: string;
                    };
                    twap?: string;
                    lookbackSeconds?: any;
                }): _152.Twap;
            };
            TickSize: {
                encode(message: _151.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.TickSize;
                fromPartial(object: {
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        priceTicksize?: string;
                        quantityTicksize?: string;
                    };
                    ticksize?: string;
                    contractAddr?: string;
                }): _151.TickSize;
            };
            ShortBook: {
                encode(message: _150.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.ShortBook;
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
                }): _150.ShortBook;
            };
            SettlementEntry: {
                encode(message: _149.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SettlementEntry;
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
                }): _149.SettlementEntry;
            };
            Settlements: {
                encode(message: _149.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Settlements;
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
                }): _149.Settlements;
            };
            QueryParamsRequest: {
                encode(_: _148.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsRequest;
                fromPartial(_: {}): _148.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _148.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        priceSnapshotRetention?: any;
                        sudoCallGasPrice?: string;
                        beginBlockGasLimit?: any;
                        endBlockGasLimit?: any;
                        defaultGasPerOrder?: any;
                        defaultGasPerCancel?: any;
                    };
                }): _148.QueryParamsResponse;
            };
            QueryGetLongBookRequest: {
                encode(message: _148.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetLongBookRequest;
                fromPartial(object: {
                    price?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _148.QueryGetLongBookRequest;
            };
            QueryGetLongBookResponse: {
                encode(message: _148.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetLongBookResponse;
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
                }): _148.QueryGetLongBookResponse;
            };
            QueryAllLongBookRequest: {
                encode(message: _148.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAllLongBookRequest;
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
                }): _148.QueryAllLongBookRequest;
            };
            QueryAllLongBookResponse: {
                encode(message: _148.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAllLongBookResponse;
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
                }): _148.QueryAllLongBookResponse;
            };
            QueryGetShortBookRequest: {
                encode(message: _148.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetShortBookRequest;
                fromPartial(object: {
                    price?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                }): _148.QueryGetShortBookRequest;
            };
            QueryGetShortBookResponse: {
                encode(message: _148.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetShortBookResponse;
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
                }): _148.QueryGetShortBookResponse;
            };
            QueryAllShortBookRequest: {
                encode(message: _148.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAllShortBookRequest;
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
                }): _148.QueryAllShortBookRequest;
            };
            QueryAllShortBookResponse: {
                encode(message: _148.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAllShortBookResponse;
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
                }): _148.QueryAllShortBookResponse;
            };
            QueryGetPricesRequest: {
                encode(message: _148.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetPricesRequest;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    contractAddr?: string;
                }): _148.QueryGetPricesRequest;
            };
            QueryGetPricesResponse: {
                encode(message: _148.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetPricesResponse;
                fromPartial(object: {
                    prices?: {
                        snapshotTimestampInSeconds?: any;
                        price?: string;
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                    }[];
                }): _148.QueryGetPricesResponse;
            };
            QueryGetPriceRequest: {
                encode(message: _148.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetPriceRequest;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    contractAddr?: string;
                    timestamp?: any;
                }): _148.QueryGetPriceRequest;
            };
            QueryGetPriceResponse: {
                encode(message: _148.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetPriceResponse;
                fromPartial(object: {
                    price?: {
                        snapshotTimestampInSeconds?: any;
                        price?: string;
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                    };
                    found?: boolean;
                }): _148.QueryGetPriceResponse;
            };
            QueryGetLatestPriceRequest: {
                encode(message: _148.QueryGetLatestPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetLatestPriceRequest;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    contractAddr?: string;
                }): _148.QueryGetLatestPriceRequest;
            };
            QueryGetLatestPriceResponse: {
                encode(message: _148.QueryGetLatestPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetLatestPriceResponse;
                fromPartial(object: {
                    price?: {
                        snapshotTimestampInSeconds?: any;
                        price?: string;
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                    };
                }): _148.QueryGetLatestPriceResponse;
            };
            QueryGetTwapsRequest: {
                encode(message: _148.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetTwapsRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    lookbackSeconds?: any;
                }): _148.QueryGetTwapsRequest;
            };
            QueryGetTwapsResponse: {
                encode(message: _148.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetTwapsResponse;
                fromPartial(object: {
                    twaps?: {
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                        twap?: string;
                        lookbackSeconds?: any;
                    }[];
                }): _148.QueryGetTwapsResponse;
            };
            QueryAssetListRequest: {
                encode(_: _148.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAssetListRequest;
                fromPartial(_: {}): _148.QueryAssetListRequest;
            };
            QueryAssetListResponse: {
                encode(message: _148.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAssetListResponse;
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
                }): _148.QueryAssetListResponse;
            };
            QueryAssetMetadataRequest: {
                encode(message: _148.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAssetMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _148.QueryAssetMetadataRequest;
            };
            QueryAssetMetadataResponse: {
                encode(message: _148.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryAssetMetadataResponse;
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
                }): _148.QueryAssetMetadataResponse;
            };
            QueryRegisteredPairsRequest: {
                encode(message: _148.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryRegisteredPairsRequest;
                fromPartial(object: {
                    contractAddr?: string;
                }): _148.QueryRegisteredPairsRequest;
            };
            QueryRegisteredPairsResponse: {
                encode(message: _148.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryRegisteredPairsResponse;
                fromPartial(object: {
                    pairs?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        priceTicksize?: string;
                        quantityTicksize?: string;
                    }[];
                }): _148.QueryRegisteredPairsResponse;
            };
            QueryGetOrdersRequest: {
                encode(message: _148.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetOrdersRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    account?: string;
                }): _148.QueryGetOrdersRequest;
            };
            QueryGetOrdersResponse: {
                encode(message: _148.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetOrdersResponse;
                fromPartial(object: {
                    orders?: {
                        id?: any;
                        status?: _138.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _138.OrderType;
                        positionDirection?: _138.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                        nominal?: string;
                        triggerPrice?: string;
                        triggerStatus?: boolean;
                    }[];
                }): _148.QueryGetOrdersResponse;
            };
            QueryGetOrderByIDRequest: {
                encode(message: _148.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetOrderByIDRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    id?: any;
                }): _148.QueryGetOrderByIDRequest;
            };
            QueryGetOrderByIDResponse: {
                encode(message: _148.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetOrderByIDResponse;
                fromPartial(object: {
                    order?: {
                        id?: any;
                        status?: _138.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _138.OrderType;
                        positionDirection?: _138.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                        nominal?: string;
                        triggerPrice?: string;
                        triggerStatus?: boolean;
                    };
                }): _148.QueryGetOrderByIDResponse;
            };
            QueryGetHistoricalPricesRequest: {
                encode(message: _148.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetHistoricalPricesRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    periodLengthInSeconds?: any;
                    numOfPeriods?: any;
                }): _148.QueryGetHistoricalPricesRequest;
            };
            QueryGetHistoricalPricesResponse: {
                encode(message: _148.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetHistoricalPricesResponse;
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
                }): _148.QueryGetHistoricalPricesResponse;
            };
            QueryGetMarketSummaryRequest: {
                encode(message: _148.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetMarketSummaryRequest;
                fromPartial(object: {
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    lookbackInSeconds?: any;
                }): _148.QueryGetMarketSummaryRequest;
            };
            QueryGetMarketSummaryResponse: {
                encode(message: _148.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetMarketSummaryResponse;
                fromPartial(object: {
                    totalVolume?: string;
                    totalVolumeNotional?: string;
                    highPrice?: string;
                    lowPrice?: string;
                    lastPrice?: string;
                }): _148.QueryGetMarketSummaryResponse;
            };
            QueryOrderSimulationRequest: {
                encode(message: _148.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryOrderSimulationRequest;
                fromPartial(object: {
                    order?: {
                        id?: any;
                        status?: _138.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _138.OrderType;
                        positionDirection?: _138.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                        nominal?: string;
                        triggerPrice?: string;
                        triggerStatus?: boolean;
                    };
                    contractAddr?: string;
                }): _148.QueryOrderSimulationRequest;
            };
            QueryOrderSimulationResponse: {
                encode(message: _148.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryOrderSimulationResponse;
                fromPartial(object: {
                    ExecutedQuantity?: string;
                }): _148.QueryOrderSimulationResponse;
            };
            QueryGetMatchResultRequest: {
                encode(message: _148.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetMatchResultRequest;
                fromPartial(object: {
                    contractAddr?: string;
                }): _148.QueryGetMatchResultRequest;
            };
            QueryGetMatchResultResponse: {
                encode(message: _148.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.QueryGetMatchResultResponse;
                fromPartial(object: {
                    result?: {
                        height?: any;
                        contractAddr?: string;
                        orders?: {
                            id?: any;
                            status?: _138.OrderStatus;
                            account?: string;
                            contractAddr?: string;
                            price?: string;
                            quantity?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            orderType?: _138.OrderType;
                            positionDirection?: _138.PositionDirection;
                            data?: string;
                            statusDescription?: string;
                            nominal?: string;
                            triggerPrice?: string;
                            triggerStatus?: boolean;
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
                            initiator?: _138.CancellationInitiator;
                            creator?: string;
                            contractAddr?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            positionDirection?: _138.PositionDirection;
                            price?: string;
                        }[];
                    };
                }): _148.QueryGetMatchResultResponse;
            };
            Price: {
                encode(message: _147.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.Price;
                fromPartial(object: {
                    snapshotTimestampInSeconds?: any;
                    price?: string;
                    pair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        priceTicksize?: string;
                        quantityTicksize?: string;
                    };
                }): _147.Price;
            };
            PriceCandlestick: {
                encode(message: _147.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.PriceCandlestick;
                fromPartial(object: {
                    beginTimestamp?: any;
                    endTimestamp?: any;
                    open?: string;
                    high?: string;
                    low?: string;
                    close?: string;
                    volume?: string;
                }): _147.PriceCandlestick;
            };
            Params: {
                encode(message: _146.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Params;
                fromPartial(object: {
                    priceSnapshotRetention?: any;
                    sudoCallGasPrice?: string;
                    beginBlockGasLimit?: any;
                    endBlockGasLimit?: any;
                    defaultGasPerOrder?: any;
                    defaultGasPerCancel?: any;
                }): _146.Params;
            };
            Pair: {
                encode(message: _145.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Pair;
                fromPartial(object: {
                    priceDenom?: string;
                    assetDenom?: string;
                    priceTicksize?: string;
                    quantityTicksize?: string;
                }): _145.Pair;
            };
            BatchContractPair: {
                encode(message: _145.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.BatchContractPair;
                fromPartial(object: {
                    contractAddr?: string;
                    pairs?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        priceTicksize?: string;
                        quantityTicksize?: string;
                    }[];
                }): _145.BatchContractPair;
            };
            Order: {
                encode(message: _144.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Order;
                fromPartial(object: {
                    id?: any;
                    status?: _138.OrderStatus;
                    account?: string;
                    contractAddr?: string;
                    price?: string;
                    quantity?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    orderType?: _138.OrderType;
                    positionDirection?: _138.PositionDirection;
                    data?: string;
                    statusDescription?: string;
                    nominal?: string;
                    triggerPrice?: string;
                    triggerStatus?: boolean;
                }): _144.Order;
            };
            Cancellation: {
                encode(message: _144.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Cancellation;
                fromPartial(object: {
                    id?: any;
                    initiator?: _138.CancellationInitiator;
                    creator?: string;
                    contractAddr?: string;
                    priceDenom?: string;
                    assetDenom?: string;
                    positionDirection?: _138.PositionDirection;
                    price?: string;
                }): _144.Cancellation;
            };
            ActiveOrders: {
                encode(message: _144.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.ActiveOrders;
                fromPartial(object: {
                    ids?: any[];
                }): _144.ActiveOrders;
            };
            OrderEntry: {
                encode(message: _143.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.OrderEntry;
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
                }): _143.OrderEntry;
            };
            Allocation: {
                encode(message: _143.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Allocation;
                fromPartial(object: {
                    orderId?: any;
                    quantity?: string;
                    account?: string;
                }): _143.Allocation;
            };
            MatchResult: {
                encode(message: _142.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.MatchResult;
                fromPartial(object: {
                    height?: any;
                    contractAddr?: string;
                    orders?: {
                        id?: any;
                        status?: _138.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _138.OrderType;
                        positionDirection?: _138.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                        nominal?: string;
                        triggerPrice?: string;
                        triggerStatus?: boolean;
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
                        initiator?: _138.CancellationInitiator;
                        creator?: string;
                        contractAddr?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        positionDirection?: _138.PositionDirection;
                        price?: string;
                    }[];
                }): _142.MatchResult;
            };
            LongBook: {
                encode(message: _141.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.LongBook;
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
                }): _141.LongBook;
            };
            AddAssetMetadataProposal: {
                encode(message: _140.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.AddAssetMetadataProposal;
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
                }): _140.AddAssetMetadataProposal;
            };
            GenesisState: {
                encode(message: _139.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.GenesisState;
                fromPartial(object: {
                    params?: {
                        priceSnapshotRetention?: any;
                        sudoCallGasPrice?: string;
                        beginBlockGasLimit?: any;
                        endBlockGasLimit?: any;
                        defaultGasPerOrder?: any;
                        defaultGasPerCancel?: any;
                    };
                    contractState?: {
                        contractInfo?: {
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
                            creator?: string;
                            rentBalance?: any;
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
                        triggeredOrdersList?: {
                            id?: any;
                            status?: _138.OrderStatus;
                            account?: string;
                            contractAddr?: string;
                            price?: string;
                            quantity?: string;
                            priceDenom?: string;
                            assetDenom?: string;
                            orderType?: _138.OrderType;
                            positionDirection?: _138.PositionDirection;
                            data?: string;
                            statusDescription?: string;
                            nominal?: string;
                            triggerPrice?: string;
                            triggerStatus?: boolean;
                        }[];
                        pairList?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        }[];
                        priceList?: {
                            pricePair?: {
                                priceDenom?: string;
                                assetDenom?: string;
                                priceTicksize?: string;
                                quantityTicksize?: string;
                            };
                            prices?: {
                                snapshotTimestampInSeconds?: any;
                                price?: string;
                                pair?: {
                                    priceDenom?: string;
                                    assetDenom?: string;
                                    priceTicksize?: string;
                                    quantityTicksize?: string;
                                };
                            }[];
                        }[];
                    }[];
                    lastEpoch?: any;
                }): _139.GenesisState;
            };
            ContractState: {
                encode(message: _139.ContractState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ContractState;
                fromPartial(object: {
                    contractInfo?: {
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
                        creator?: string;
                        rentBalance?: any;
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
                    triggeredOrdersList?: {
                        id?: any;
                        status?: _138.OrderStatus;
                        account?: string;
                        contractAddr?: string;
                        price?: string;
                        quantity?: string;
                        priceDenom?: string;
                        assetDenom?: string;
                        orderType?: _138.OrderType;
                        positionDirection?: _138.PositionDirection;
                        data?: string;
                        statusDescription?: string;
                        nominal?: string;
                        triggerPrice?: string;
                        triggerStatus?: boolean;
                    }[];
                    pairList?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        priceTicksize?: string;
                        quantityTicksize?: string;
                    }[];
                    priceList?: {
                        pricePair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                        prices?: {
                            snapshotTimestampInSeconds?: any;
                            price?: string;
                            pair?: {
                                priceDenom?: string;
                                assetDenom?: string;
                                priceTicksize?: string;
                                quantityTicksize?: string;
                            };
                        }[];
                    }[];
                }): _139.ContractState;
            };
            ContractPairPrices: {
                encode(message: _139.ContractPairPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.ContractPairPrices;
                fromPartial(object: {
                    pricePair?: {
                        priceDenom?: string;
                        assetDenom?: string;
                        priceTicksize?: string;
                        quantityTicksize?: string;
                    };
                    prices?: {
                        snapshotTimestampInSeconds?: any;
                        price?: string;
                        pair?: {
                            priceDenom?: string;
                            assetDenom?: string;
                            priceTicksize?: string;
                            quantityTicksize?: string;
                        };
                    }[];
                }): _139.ContractPairPrices;
            };
            positionDirectionFromJSON(object: any): _138.PositionDirection;
            positionDirectionToJSON(object: _138.PositionDirection): string;
            positionEffectFromJSON(object: any): _138.PositionEffect;
            positionEffectToJSON(object: _138.PositionEffect): string;
            orderTypeFromJSON(object: any): _138.OrderType;
            orderTypeToJSON(object: _138.OrderType): string;
            unitFromJSON(object: any): _138.Unit;
            unitToJSON(object: _138.Unit): string;
            orderStatusFromJSON(object: any): _138.OrderStatus;
            orderStatusToJSON(object: _138.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _138.CancellationInitiator;
            cancellationInitiatorToJSON(object: _138.CancellationInitiator): string;
            PositionDirection: typeof _138.PositionDirection;
            PositionDirectionSDKType: typeof _138.PositionDirectionSDKType;
            PositionEffect: typeof _138.PositionEffect;
            PositionEffectSDKType: typeof _138.PositionEffectSDKType;
            OrderType: typeof _138.OrderType;
            OrderTypeSDKType: typeof _138.OrderTypeSDKType;
            Unit: typeof _138.Unit;
            UnitSDKType: typeof _138.UnitSDKType;
            OrderStatus: typeof _138.OrderStatus;
            OrderStatusSDKType: typeof _138.OrderStatusSDKType;
            CancellationInitiator: typeof _138.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _138.CancellationInitiatorSDKType;
            DepositInfoEntry: {
                encode(message: _137.DepositInfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.DepositInfoEntry;
                fromPartial(object: {
                    creator?: string;
                    denom?: string;
                    amount?: string;
                }): _137.DepositInfoEntry;
            };
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
            ContractInfoV2: {
                encode(message: _136.ContractInfoV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ContractInfoV2;
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
                    creator?: string;
                    rentBalance?: any;
                }): _136.ContractInfoV2;
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
            LCDQueryClient: typeof _257.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _157.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsRequest;
                fromPartial(_: {}): _157.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _157.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _157.QueryParamsResponse;
            };
            QueryEpochRequest: {
                encode(_: _157.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryEpochRequest;
                fromPartial(_: {}): _157.QueryEpochRequest;
            };
            QueryEpochResponse: {
                encode(message: _157.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryEpochResponse;
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
                }): _157.QueryEpochResponse;
            };
            Params: {
                encode(_: _156.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Params;
                fromPartial(_: {}): _156.Params;
            };
            GenesisState: {
                encode(message: _155.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.GenesisState;
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
                }): _155.GenesisState;
            };
            Epoch: {
                encode(message: _154.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.Epoch;
                fromPartial(object: {
                    genesisTime?: Date;
                    epochDuration?: {
                        seconds?: any;
                        nanos?: number;
                    };
                    currentEpoch?: any;
                    currentEpochStartTime?: Date;
                    currentEpochHeight?: any;
                }): _154.Epoch;
            };
        };
        const mint: {
            LCDQueryClient: typeof _258.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _161.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsRequest;
                fromPartial(_: {}): _161.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _161.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        tokenReleaseSchedule?: {
                            date?: string;
                            tokenReleaseAmount?: any;
                        }[];
                    };
                }): _161.QueryParamsResponse;
            };
            QueryMinterRequest: {
                encode(_: _161.QueryMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryMinterRequest;
                fromPartial(_: {}): _161.QueryMinterRequest;
            };
            QueryMinterResponse: {
                encode(message: _161.QueryMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryMinterResponse;
                fromPartial(object: {
                    lastMintAmount?: string;
                    lastMintDate?: string;
                    lastMintHeight?: any;
                    denom?: string;
                }): _161.QueryMinterResponse;
            };
            Minter: {
                encode(message: _160.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Minter;
                fromPartial(object: {
                    lastMintAmount?: string;
                    lastMintDate?: string;
                    lastMintHeight?: any;
                    denom?: string;
                }): _160.Minter;
            };
            ScheduledTokenRelease: {
                encode(message: _160.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.ScheduledTokenRelease;
                fromPartial(object: {
                    date?: string;
                    tokenReleaseAmount?: any;
                }): _160.ScheduledTokenRelease;
            };
            Params: {
                encode(message: _160.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Params;
                fromPartial(object: {
                    mintDenom?: string;
                    tokenReleaseSchedule?: {
                        date?: string;
                        tokenReleaseAmount?: any;
                    }[];
                }): _160.Params;
            };
            GenesisState: {
                encode(message: _159.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.GenesisState;
                fromPartial(object: {
                    minter?: {
                        lastMintAmount?: string;
                        lastMintDate?: string;
                        lastMintHeight?: any;
                        denom?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        tokenReleaseSchedule?: {
                            date?: string;
                            tokenReleaseAmount?: any;
                        }[];
                    };
                }): _159.GenesisState;
            };
        };
        const nitro: {
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    recordTransactionData(value: _167.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitFraudChallenge(value: _167.MsgSubmitFraudChallenge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    recordTransactionData(value: _167.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _167.MsgRecordTransactionData;
                    };
                    submitFraudChallenge(value: _167.MsgSubmitFraudChallenge): {
                        typeUrl: string;
                        value: _167.MsgSubmitFraudChallenge;
                    };
                };
                fromPartial: {
                    recordTransactionData(value: _167.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _167.MsgRecordTransactionData;
                    };
                    submitFraudChallenge(value: _167.MsgSubmitFraudChallenge): {
                        typeUrl: string;
                        value: _167.MsgSubmitFraudChallenge;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
                    aminoType: string;
                    toAmino: ({ sender, slot, stateRoot, txs }: _167.MsgRecordTransactionData) => {
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
                    }) => _167.MsgRecordTransactionData;
                };
                "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge": {
                    aminoType: string;
                    toAmino: ({ sender, startSlot, endSlot, fraudStatePubKey, merkleProof, accountStates, programs, sysvarAccounts }: _167.MsgSubmitFraudChallenge) => {
                        sender: string;
                        startSlot: string;
                        endSlot: string;
                        fraudStatePubKey: string;
                        merkleProof: {
                            commitment: string;
                            hash: string[];
                            direction: Long[];
                        };
                        accountStates: {
                            pubkey: string;
                            owner: string;
                            lamports: string;
                            slot: string;
                            executable: boolean;
                            rent_epoch: string;
                            data: string;
                        }[];
                        programs: {
                            pubkey: string;
                            owner: string;
                            lamports: string;
                            slot: string;
                            executable: boolean;
                            rent_epoch: string;
                            data: string;
                        }[];
                        sysvarAccounts: {
                            pubkey: string;
                            owner: string;
                            lamports: string;
                            slot: string;
                            executable: boolean;
                            rent_epoch: string;
                            data: string;
                        }[];
                    };
                    fromAmino: ({ sender, startSlot, endSlot, fraudStatePubKey, merkleProof, accountStates, programs, sysvarAccounts }: {
                        sender: string;
                        startSlot: string;
                        endSlot: string;
                        fraudStatePubKey: string;
                        merkleProof: {
                            commitment: string;
                            hash: string[];
                            direction: Long[];
                        };
                        accountStates: {
                            pubkey: string;
                            owner: string;
                            lamports: string;
                            slot: string;
                            executable: boolean;
                            rent_epoch: string;
                            data: string;
                        }[];
                        programs: {
                            pubkey: string;
                            owner: string;
                            lamports: string;
                            slot: string;
                            executable: boolean;
                            rent_epoch: string;
                            data: string;
                        }[];
                        sysvarAccounts: {
                            pubkey: string;
                            owner: string;
                            lamports: string;
                            slot: string;
                            executable: boolean;
                            rent_epoch: string;
                            data: string;
                        }[];
                    }) => _167.MsgSubmitFraudChallenge;
                };
            };
            MsgRecordTransactionData: {
                encode(message: _167.MsgRecordTransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgRecordTransactionData;
                fromPartial(object: {
                    sender?: string;
                    slot?: any;
                    stateRoot?: string;
                    txs?: string[];
                }): _167.MsgRecordTransactionData;
            };
            MsgSubmitFraudChallenge: {
                encode(message: _167.MsgSubmitFraudChallenge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgSubmitFraudChallenge;
                fromPartial(object: {
                    sender?: string;
                    startSlot?: any;
                    endSlot?: any;
                    fraudStatePubKey?: string;
                    merkleProof?: {
                        commitment?: string;
                        hash?: string[];
                        direction?: any[];
                    };
                    accountStates?: {
                        pubkey?: string;
                        owner?: string;
                        lamports?: any;
                        slot?: any;
                        executable?: boolean;
                        rentEpoch?: any;
                        data?: string;
                    }[];
                    programs?: {
                        pubkey?: string;
                        owner?: string;
                        lamports?: any;
                        slot?: any;
                        executable?: boolean;
                        rentEpoch?: any;
                        data?: string;
                    }[];
                    sysvarAccounts?: {
                        pubkey?: string;
                        owner?: string;
                        lamports?: any;
                        slot?: any;
                        executable?: boolean;
                        rentEpoch?: any;
                        data?: string;
                    }[];
                }): _167.MsgSubmitFraudChallenge;
            };
            MsgRecordTransactionDataResponse: {
                encode(_: _167.MsgRecordTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgRecordTransactionDataResponse;
                fromPartial(_: {}): _167.MsgRecordTransactionDataResponse;
            };
            MsgSubmitFraudChallengeResponse: {
                encode(_: _167.MsgSubmitFraudChallengeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.MsgSubmitFraudChallengeResponse;
                fromPartial(_: {}): _167.MsgSubmitFraudChallengeResponse;
            };
            QueryParamsRequest: {
                encode(_: _166.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsRequest;
                fromPartial(_: {}): _166.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _166.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryParamsResponse;
                fromPartial(object: {
                    params?: {
                        whitelistedTxSenders?: string[];
                    };
                }): _166.QueryParamsResponse;
            };
            QueryRecordedTransactionDataRequest: {
                encode(message: _166.QueryRecordedTransactionDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryRecordedTransactionDataRequest;
                fromPartial(object: {
                    slot?: any;
                }): _166.QueryRecordedTransactionDataRequest;
            };
            QueryRecordedTransactionDataResponse: {
                encode(message: _166.QueryRecordedTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryRecordedTransactionDataResponse;
                fromPartial(object: {
                    txs?: string[];
                }): _166.QueryRecordedTransactionDataResponse;
            };
            QueryStateRootRequest: {
                encode(message: _166.QueryStateRootRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryStateRootRequest;
                fromPartial(object: {
                    slot?: any;
                }): _166.QueryStateRootRequest;
            };
            QueryStateRootResponse: {
                encode(message: _166.QueryStateRootResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QueryStateRootResponse;
                fromPartial(object: {
                    root?: string;
                }): _166.QueryStateRootResponse;
            };
            QuerySenderRequest: {
                encode(message: _166.QuerySenderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QuerySenderRequest;
                fromPartial(object: {
                    slot?: any;
                }): _166.QuerySenderRequest;
            };
            QuerySenderResponse: {
                encode(message: _166.QuerySenderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.QuerySenderResponse;
                fromPartial(object: {
                    sender?: string;
                }): _166.QuerySenderResponse;
            };
            Params: {
                encode(message: _165.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.Params;
                fromPartial(object: {
                    whitelistedTxSenders?: string[];
                }): _165.Params;
            };
            GenesisState: {
                encode(message: _164.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.GenesisState;
                fromPartial(object: {
                    params?: {
                        whitelistedTxSenders?: string[];
                    };
                    slot?: any;
                    sender?: string;
                    stateRoot?: string;
                    txs?: string[];
                }): _164.GenesisState;
            };
            TransactionData: {
                encode(message: _163.TransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.TransactionData;
                fromPartial(object: {
                    slot?: any;
                    signature?: string;
                    isVote?: boolean;
                    messageType?: any;
                    legacyMessage?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: string[];
                        recentBlockhash?: string;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: number[];
                            data?: string;
                        }[];
                    };
                    v0LoadedMessage?: {
                        message?: {
                            header?: {
                                numRequiredSignatures?: number;
                                numReadonlySignedAccounts?: number;
                                numReadonlyUnsignedAccounts?: number;
                            };
                            accountKeys?: string[];
                            recentBlockhash?: string;
                            instructions?: {
                                programIdIndex?: number;
                                accounts?: number[];
                                data?: string;
                            }[];
                            addressTableLookups?: {
                                accountKey?: string;
                                writableIndexes?: number[];
                                readonlyIndexes?: number[];
                            }[];
                        };
                        loadedAddresses?: {
                            writable?: string[];
                            readonly?: string[];
                        };
                    };
                    signatures?: string[];
                    messageHash?: string;
                    writeVersion?: any;
                }): _163.TransactionData;
            };
            LegacyMessage: {
                encode(message: _163.LegacyMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LegacyMessage;
                fromPartial(object: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: string[];
                    recentBlockhash?: string;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: number[];
                        data?: string;
                    }[];
                }): _163.LegacyMessage;
            };
            LoadedMessage: {
                encode(message: _163.LoadedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LoadedMessage;
                fromPartial(object: {
                    message?: {
                        header?: {
                            numRequiredSignatures?: number;
                            numReadonlySignedAccounts?: number;
                            numReadonlyUnsignedAccounts?: number;
                        };
                        accountKeys?: string[];
                        recentBlockhash?: string;
                        instructions?: {
                            programIdIndex?: number;
                            accounts?: number[];
                            data?: string;
                        }[];
                        addressTableLookups?: {
                            accountKey?: string;
                            writableIndexes?: number[];
                            readonlyIndexes?: number[];
                        }[];
                    };
                    loadedAddresses?: {
                        writable?: string[];
                        readonly?: string[];
                    };
                }): _163.LoadedMessage;
            };
            Message: {
                encode(message: _163.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Message;
                fromPartial(object: {
                    header?: {
                        numRequiredSignatures?: number;
                        numReadonlySignedAccounts?: number;
                        numReadonlyUnsignedAccounts?: number;
                    };
                    accountKeys?: string[];
                    recentBlockhash?: string;
                    instructions?: {
                        programIdIndex?: number;
                        accounts?: number[];
                        data?: string;
                    }[];
                    addressTableLookups?: {
                        accountKey?: string;
                        writableIndexes?: number[];
                        readonlyIndexes?: number[];
                    }[];
                }): _163.Message;
            };
            MessageHeader: {
                encode(message: _163.MessageHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MessageHeader;
                fromPartial(object: {
                    numRequiredSignatures?: number;
                    numReadonlySignedAccounts?: number;
                    numReadonlyUnsignedAccounts?: number;
                }): _163.MessageHeader;
            };
            CompiledInstruction: {
                encode(message: _163.CompiledInstruction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.CompiledInstruction;
                fromPartial(object: {
                    programIdIndex?: number;
                    accounts?: number[];
                    data?: string;
                }): _163.CompiledInstruction;
            };
            MessageAddressTableLookup: {
                encode(message: _163.MessageAddressTableLookup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MessageAddressTableLookup;
                fromPartial(object: {
                    accountKey?: string;
                    writableIndexes?: number[];
                    readonlyIndexes?: number[];
                }): _163.MessageAddressTableLookup;
            };
            LoadedAddresses: {
                encode(message: _163.LoadedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.LoadedAddresses;
                fromPartial(object: {
                    writable?: string[];
                    readonly?: string[];
                }): _163.LoadedAddresses;
            };
            MerkleProof: {
                encode(message: _163.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MerkleProof;
                fromPartial(object: {
                    commitment?: string;
                    hash?: string[];
                    direction?: any[];
                }): _163.MerkleProof;
            };
            Account: {
                encode(message: _162.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Account;
                fromPartial(object: {
                    pubkey?: string;
                    owner?: string;
                    lamports?: any;
                    slot?: any;
                    executable?: boolean;
                    rentEpoch?: any;
                    data?: string;
                }): _162.Account;
            };
        };
        const oracle: {
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _171.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _171.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _171.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _171.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _171.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _171.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _171.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _171.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _171.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _171.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: ({ exchangeRates, feeder, validator }: _171.MsgAggregateExchangeRateVote) => {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ exchange_rates, feeder, validator }: {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    }) => _171.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: ({ operator, delegate }: _171.MsgDelegateFeedConsent) => {
                        operator: string;
                        delegate: string;
                    };
                    fromAmino: ({ operator, delegate }: {
                        operator: string;
                        delegate: string;
                    }) => _171.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                encode(message: _171.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgAggregateExchangeRateVote;
                fromPartial(object: {
                    exchangeRates?: string;
                    feeder?: string;
                    validator?: string;
                }): _171.MsgAggregateExchangeRateVote;
            };
            MsgAggregateExchangeRateVoteResponse: {
                encode(_: _171.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: {}): _171.MsgAggregateExchangeRateVoteResponse;
            };
            MsgDelegateFeedConsent: {
                encode(message: _171.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgDelegateFeedConsent;
                fromPartial(object: {
                    operator?: string;
                    delegate?: string;
                }): _171.MsgDelegateFeedConsent;
            };
            MsgDelegateFeedConsentResponse: {
                encode(_: _171.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.MsgDelegateFeedConsentResponse;
                fromPartial(_: {}): _171.MsgDelegateFeedConsentResponse;
            };
            QueryExchangeRateRequest: {
                encode(message: _170.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryExchangeRateRequest;
                fromPartial(object: {
                    denom?: string;
                }): _170.QueryExchangeRateRequest;
            };
            QueryExchangeRateResponse: {
                encode(message: _170.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryExchangeRateResponse;
                fromPartial(object: {
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _170.QueryExchangeRateResponse;
            };
            QueryExchangeRatesRequest: {
                encode(_: _170.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryExchangeRatesRequest;
                fromPartial(_: {}): _170.QueryExchangeRatesRequest;
            };
            DenomOracleExchangeRatePair: {
                encode(message: _170.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.DenomOracleExchangeRatePair;
                fromPartial(object: {
                    denom?: string;
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _170.DenomOracleExchangeRatePair;
            };
            QueryExchangeRatesResponse: {
                encode(message: _170.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryExchangeRatesResponse;
                fromPartial(object: {
                    denomOracleExchangeRatePairs?: {
                        denom?: string;
                        oracleExchangeRate?: {
                            exchangeRate?: string;
                            lastUpdate?: string;
                        };
                    }[];
                }): _170.QueryExchangeRatesResponse;
            };
            QueryActivesRequest: {
                encode(_: _170.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryActivesRequest;
                fromPartial(_: {}): _170.QueryActivesRequest;
            };
            QueryActivesResponse: {
                encode(message: _170.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryActivesResponse;
                fromPartial(object: {
                    actives?: string[];
                }): _170.QueryActivesResponse;
            };
            QueryVoteTargetsRequest: {
                encode(_: _170.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVoteTargetsRequest;
                fromPartial(_: {}): _170.QueryVoteTargetsRequest;
            };
            QueryVoteTargetsResponse: {
                encode(message: _170.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVoteTargetsResponse;
                fromPartial(object: {
                    voteTargets?: string[];
                }): _170.QueryVoteTargetsResponse;
            };
            QueryPriceSnapshotHistoryRequest: {
                encode(_: _170.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryPriceSnapshotHistoryRequest;
                fromPartial(_: {}): _170.QueryPriceSnapshotHistoryRequest;
            };
            QueryPriceSnapshotHistoryResponse: {
                encode(message: _170.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryPriceSnapshotHistoryResponse;
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
                }): _170.QueryPriceSnapshotHistoryResponse;
            };
            QueryTwapsRequest: {
                encode(message: _170.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryTwapsRequest;
                fromPartial(object: {
                    lookbackSeconds?: any;
                }): _170.QueryTwapsRequest;
            };
            QueryTwapsResponse: {
                encode(message: _170.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryTwapsResponse;
                fromPartial(object: {
                    oracleTwaps?: {
                        denom?: string;
                        twap?: string;
                        lookbackSeconds?: any;
                    }[];
                }): _170.QueryTwapsResponse;
            };
            QueryFeederDelegationRequest: {
                encode(message: _170.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryFeederDelegationRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _170.QueryFeederDelegationRequest;
            };
            QueryFeederDelegationResponse: {
                encode(message: _170.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryFeederDelegationResponse;
                fromPartial(object: {
                    feederAddr?: string;
                }): _170.QueryFeederDelegationResponse;
            };
            QueryVotePenaltyCounterRequest: {
                encode(message: _170.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVotePenaltyCounterRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _170.QueryVotePenaltyCounterRequest;
            };
            QueryVotePenaltyCounterResponse: {
                encode(message: _170.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryVotePenaltyCounterResponse;
                fromPartial(object: {
                    votePenaltyCounter?: {
                        missCount?: any;
                        abstainCount?: any;
                    };
                }): _170.QueryVotePenaltyCounterResponse;
            };
            QueryAggregateVoteRequest: {
                encode(message: _170.QueryAggregateVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryAggregateVoteRequest;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _170.QueryAggregateVoteRequest;
            };
            QueryAggregateVoteResponse: {
                encode(message: _170.QueryAggregateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryAggregateVoteResponse;
                fromPartial(object: {
                    aggregateVote?: {
                        exchangeRateTuples?: {
                            denom?: string;
                            exchangeRate?: string;
                        }[];
                        voter?: string;
                    };
                }): _170.QueryAggregateVoteResponse;
            };
            QueryAggregateVotesRequest: {
                encode(_: _170.QueryAggregateVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryAggregateVotesRequest;
                fromPartial(_: {}): _170.QueryAggregateVotesRequest;
            };
            QueryAggregateVotesResponse: {
                encode(message: _170.QueryAggregateVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryAggregateVotesResponse;
                fromPartial(object: {
                    aggregateVotes?: {
                        exchangeRateTuples?: {
                            denom?: string;
                            exchangeRate?: string;
                        }[];
                        voter?: string;
                    }[];
                }): _170.QueryAggregateVotesResponse;
            };
            QueryParamsRequest: {
                encode(_: _170.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsRequest;
                fromPartial(_: {}): _170.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _170.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.QueryParamsResponse;
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
                }): _170.QueryParamsResponse;
            };
            Params: {
                encode(message: _169.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Params;
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
                }): _169.Params;
            };
            Denom: {
                encode(message: _169.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.Denom;
                fromPartial(object: {
                    name?: string;
                }): _169.Denom;
            };
            AggregateExchangeRateVote: {
                encode(message: _169.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.AggregateExchangeRateVote;
                fromPartial(object: {
                    exchangeRateTuples?: {
                        denom?: string;
                        exchangeRate?: string;
                    }[];
                    voter?: string;
                }): _169.AggregateExchangeRateVote;
            };
            ExchangeRateTuple: {
                encode(message: _169.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ExchangeRateTuple;
                fromPartial(object: {
                    denom?: string;
                    exchangeRate?: string;
                }): _169.ExchangeRateTuple;
            };
            OracleExchangeRate: {
                encode(message: _169.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.OracleExchangeRate;
                fromPartial(object: {
                    exchangeRate?: string;
                    lastUpdate?: string;
                }): _169.OracleExchangeRate;
            };
            PriceSnapshotItem: {
                encode(message: _169.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PriceSnapshotItem;
                fromPartial(object: {
                    denom?: string;
                    oracleExchangeRate?: {
                        exchangeRate?: string;
                        lastUpdate?: string;
                    };
                }): _169.PriceSnapshotItem;
            };
            PriceSnapshot: {
                encode(message: _169.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.PriceSnapshot;
                fromPartial(object: {
                    snapshotTimestamp?: any;
                    priceSnapshotItems?: {
                        denom?: string;
                        oracleExchangeRate?: {
                            exchangeRate?: string;
                            lastUpdate?: string;
                        };
                    }[];
                }): _169.PriceSnapshot;
            };
            OracleTwap: {
                encode(message: _169.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.OracleTwap;
                fromPartial(object: {
                    denom?: string;
                    twap?: string;
                    lookbackSeconds?: any;
                }): _169.OracleTwap;
            };
            VotePenaltyCounter: {
                encode(message: _169.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.VotePenaltyCounter;
                fromPartial(object: {
                    missCount?: any;
                    abstainCount?: any;
                }): _169.VotePenaltyCounter;
            };
            GenesisState: {
                encode(message: _168.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.GenesisState;
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
                }): _168.GenesisState;
            };
            FeederDelegation: {
                encode(message: _168.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.FeederDelegation;
                fromPartial(object: {
                    feederAddress?: string;
                    validatorAddress?: string;
                }): _168.FeederDelegation;
            };
            PenaltyCounter: {
                encode(message: _168.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.PenaltyCounter;
                fromPartial(object: {
                    validatorAddress?: string;
                    votePenaltyCounter?: {
                        missCount?: any;
                        abstainCount?: any;
                    };
                }): _168.PenaltyCounter;
            };
        };
        const tokenfactory: {
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _176.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _176.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _176.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _176.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _176.MsgCreateDenom): {
                        typeUrl: string;
                        value: _176.MsgCreateDenom;
                    };
                    mint(value: _176.MsgMint): {
                        typeUrl: string;
                        value: _176.MsgMint;
                    };
                    burn(value: _176.MsgBurn): {
                        typeUrl: string;
                        value: _176.MsgBurn;
                    };
                    changeAdmin(value: _176.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _176.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _176.MsgCreateDenom): {
                        typeUrl: string;
                        value: _176.MsgCreateDenom;
                    };
                    mint(value: _176.MsgMint): {
                        typeUrl: string;
                        value: _176.MsgMint;
                    };
                    burn(value: _176.MsgBurn): {
                        typeUrl: string;
                        value: _176.MsgBurn;
                    };
                    changeAdmin(value: _176.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _176.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _176.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _176.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _176.MsgMint) => {
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
                    }) => _176.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _176.MsgBurn) => {
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
                    }) => _176.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _176.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _176.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _176.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgCreateDenom;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _176.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _176.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgCreateDenomResponse;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _176.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _176.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgMint;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _176.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _176.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgMintResponse;
                fromPartial(_: {}): _176.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _176.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgBurn;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _176.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _176.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgBurnResponse;
                fromPartial(_: {}): _176.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _176.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgChangeAdmin;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _176.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _176.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.MsgChangeAdminResponse;
                fromPartial(_: {}): _176.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _175.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsRequest;
                fromPartial(_: {}): _175.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _175.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryParamsResponse;
                fromPartial(object: {
                    params?: {};
                }): _175.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _175.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: {
                    denom?: string;
                }): _175.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _175.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: {
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _175.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _175.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryDenomsFromCreatorRequest;
                fromPartial(object: {
                    creator?: string;
                }): _175.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _175.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.QueryDenomsFromCreatorResponse;
                fromPartial(object: {
                    denoms?: string[];
                }): _175.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(_: _174.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.Params;
                fromPartial(_: {}): _174.Params;
            };
            GenesisState: {
                encode(message: _173.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GenesisState;
                fromPartial(object: {
                    params?: {};
                    factoryDenoms?: {
                        denom?: string;
                        authorityMetadata?: {
                            admin?: string;
                        };
                    }[];
                }): _173.GenesisState;
            };
            GenesisDenom: {
                encode(message: _173.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.GenesisDenom;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _173.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _172.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.DenomAuthorityMetadata;
                fromPartial(object: {
                    admin?: string;
                }): _172.DenomAuthorityMetadata;
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
                    dex: _256.LCDQueryClient;
                    epoch: _257.LCDQueryClient;
                    mint: _258.LCDQueryClient;
                    nitro: _259.LCDQueryClient;
                    oracle: _260.LCDQueryClient;
                    tokenfactory: _261.LCDQueryClient;
                };
            };
        }>;
    };
}
