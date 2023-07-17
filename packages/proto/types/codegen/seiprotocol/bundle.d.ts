import * as _132 from "./seichain/dex/asset_list";
import * as _133 from "./seichain/dex/contract";
import * as _134 from "./seichain/dex/deposit";
import * as _135 from "./seichain/dex/enums";
import * as _136 from "./seichain/dex/genesis";
import * as _137 from "./seichain/dex/gov";
import * as _138 from "./seichain/dex/long_book";
import * as _139 from "./seichain/dex/match_result";
import * as _140 from "./seichain/dex/order_entry";
import * as _141 from "./seichain/dex/order";
import * as _142 from "./seichain/dex/pair";
import * as _143 from "./seichain/dex/params";
import * as _144 from "./seichain/dex/price";
import * as _145 from "./seichain/dex/query";
import * as _146 from "./seichain/dex/settlement";
import * as _147 from "./seichain/dex/short_book";
import * as _148 from "./seichain/dex/tick_size";
import * as _149 from "./seichain/dex/twap";
import * as _150 from "./seichain/dex/tx";
import * as _151 from "./seichain/epoch/epoch";
import * as _152 from "./seichain/epoch/genesis";
import * as _153 from "./seichain/epoch/params";
import * as _154 from "./seichain/epoch/query";
import * as _156 from "./seichain/mint/v1beta1/genesis";
import * as _157 from "./seichain/mint/v1beta1/gov";
import * as _158 from "./seichain/mint/v1beta1/mint";
import * as _159 from "./seichain/mint/v1beta1/query";
import * as _160 from "./seichain/oracle/genesis";
import * as _161 from "./seichain/oracle/oracle";
import * as _162 from "./seichain/oracle/query";
import * as _163 from "./seichain/oracle/tx";
import * as _164 from "./seichain/tokenfactory/authorityMetadata";
import * as _165 from "./seichain/tokenfactory/genesis";
import * as _166 from "./seichain/tokenfactory/params";
import * as _167 from "./seichain/tokenfactory/query";
import * as _168 from "./seichain/tokenfactory/tx";
import * as _246 from "./seichain/dex/query.lcd";
import * as _247 from "./seichain/epoch/query.lcd";
import * as _248 from "./seichain/mint/v1beta1/query.lcd";
import * as _249 from "./seichain/oracle/query.lcd";
import * as _250 from "./seichain/tokenfactory/query.lcd";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            LCDQueryClient: typeof _246.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    placeOrders(value: _150.MsgPlaceOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelOrders(value: _150.MsgCancelOrders): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerContract(value: _150.MsgRegisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    contractDepositRent(value: _150.MsgContractDepositRent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unregisterContract(value: _150.MsgUnregisterContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    registerPairs(value: _150.MsgRegisterPairs): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePriceTickSize(value: _150.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateQuantityTickSize(value: _150.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unsuspendContract(value: _150.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    placeOrders(value: _150.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _150.MsgPlaceOrders;
                    };
                    cancelOrders(value: _150.MsgCancelOrders): {
                        typeUrl: string;
                        value: _150.MsgCancelOrders;
                    };
                    registerContract(value: _150.MsgRegisterContract): {
                        typeUrl: string;
                        value: _150.MsgRegisterContract;
                    };
                    contractDepositRent(value: _150.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _150.MsgContractDepositRent;
                    };
                    unregisterContract(value: _150.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _150.MsgUnregisterContract;
                    };
                    registerPairs(value: _150.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _150.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _150.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _150.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _150.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _150.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _150.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _150.MsgUnsuspendContract;
                    };
                };
                fromPartial: {
                    placeOrders(value: _150.MsgPlaceOrders): {
                        typeUrl: string;
                        value: _150.MsgPlaceOrders;
                    };
                    cancelOrders(value: _150.MsgCancelOrders): {
                        typeUrl: string;
                        value: _150.MsgCancelOrders;
                    };
                    registerContract(value: _150.MsgRegisterContract): {
                        typeUrl: string;
                        value: _150.MsgRegisterContract;
                    };
                    contractDepositRent(value: _150.MsgContractDepositRent): {
                        typeUrl: string;
                        value: _150.MsgContractDepositRent;
                    };
                    unregisterContract(value: _150.MsgUnregisterContract): {
                        typeUrl: string;
                        value: _150.MsgUnregisterContract;
                    };
                    registerPairs(value: _150.MsgRegisterPairs): {
                        typeUrl: string;
                        value: _150.MsgRegisterPairs;
                    };
                    updatePriceTickSize(value: _150.MsgUpdatePriceTickSize): {
                        typeUrl: string;
                        value: _150.MsgUpdatePriceTickSize;
                    };
                    updateQuantityTickSize(value: _150.MsgUpdateQuantityTickSize): {
                        typeUrl: string;
                        value: _150.MsgUpdateQuantityTickSize;
                    };
                    unsuspendContract(value: _150.MsgUnsuspendContract): {
                        typeUrl: string;
                        value: _150.MsgUnsuspendContract;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.dex.MsgPlaceOrders": {
                    aminoType: string;
                    toAmino: ({ creator, orders, contractAddr, funds }: _150.MsgPlaceOrders) => {
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
                    }) => _150.MsgPlaceOrders;
                };
                "/seiprotocol.seichain.dex.MsgCancelOrders": {
                    aminoType: string;
                    toAmino: ({ creator, cancellations, contractAddr }: _150.MsgCancelOrders) => {
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
                    }) => _150.MsgCancelOrders;
                };
                "/seiprotocol.seichain.dex.MsgRegisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contract }: _150.MsgRegisterContract) => {
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
                    }) => _150.MsgRegisterContract;
                };
                "/seiprotocol.seichain.dex.MsgContractDepositRent": {
                    aminoType: string;
                    toAmino: ({ contractAddr, amount, sender }: _150.MsgContractDepositRent) => {
                        contractAddr: string;
                        amount: string;
                        sender: string;
                    };
                    fromAmino: ({ contractAddr, amount, sender }: {
                        contractAddr: string;
                        amount: string;
                        sender: string;
                    }) => _150.MsgContractDepositRent;
                };
                "/seiprotocol.seichain.dex.MsgUnregisterContract": {
                    aminoType: string;
                    toAmino: ({ creator, contractAddr }: _150.MsgUnregisterContract) => {
                        creator: string;
                        contractAddr: string;
                    };
                    fromAmino: ({ creator, contractAddr }: {
                        creator: string;
                        contractAddr: string;
                    }) => _150.MsgUnregisterContract;
                };
                "/seiprotocol.seichain.dex.MsgRegisterPairs": {
                    aminoType: string;
                    toAmino: ({ creator, batchcontractpair }: _150.MsgRegisterPairs) => {
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
                    }) => _150.MsgRegisterPairs;
                };
                "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
                    aminoType: string;
                    toAmino: ({ creator, tickSizeList }: _150.MsgUpdatePriceTickSize) => {
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
                    }) => _150.MsgUpdatePriceTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
                    aminoType: string;
                    toAmino: ({ creator, tickSizeList }: _150.MsgUpdateQuantityTickSize) => {
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
                    }) => _150.MsgUpdateQuantityTickSize;
                };
                "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
                    aminoType: string;
                    toAmino: ({ creator, contractAddr }: _150.MsgUnsuspendContract) => {
                        creator: string;
                        contractAddr: string;
                    };
                    fromAmino: ({ creator, contractAddr }: {
                        creator: string;
                        contractAddr: string;
                    }) => _150.MsgUnsuspendContract;
                };
            };
            MsgPlaceOrders: {
                encode(message: _150.MsgPlaceOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgPlaceOrders;
                fromPartial(object: any): _150.MsgPlaceOrders;
            };
            MsgPlaceOrdersResponse: {
                encode(message: _150.MsgPlaceOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgPlaceOrdersResponse;
                fromPartial(object: any): _150.MsgPlaceOrdersResponse;
            };
            MsgCancelOrders: {
                encode(message: _150.MsgCancelOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCancelOrders;
                fromPartial(object: any): _150.MsgCancelOrders;
            };
            MsgCancelOrdersResponse: {
                encode(_: _150.MsgCancelOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgCancelOrdersResponse;
                fromPartial(_: any): _150.MsgCancelOrdersResponse;
            };
            MsgRegisterContract: {
                encode(message: _150.MsgRegisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgRegisterContract;
                fromPartial(object: any): _150.MsgRegisterContract;
            };
            MsgRegisterContractResponse: {
                encode(_: _150.MsgRegisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgRegisterContractResponse;
                fromPartial(_: any): _150.MsgRegisterContractResponse;
            };
            MsgContractDepositRent: {
                encode(message: _150.MsgContractDepositRent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgContractDepositRent;
                fromPartial(object: any): _150.MsgContractDepositRent;
            };
            MsgContractDepositRentResponse: {
                encode(_: _150.MsgContractDepositRentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgContractDepositRentResponse;
                fromPartial(_: any): _150.MsgContractDepositRentResponse;
            };
            MsgUnregisterContract: {
                encode(message: _150.MsgUnregisterContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnregisterContract;
                fromPartial(object: any): _150.MsgUnregisterContract;
            };
            MsgUnregisterContractResponse: {
                encode(_: _150.MsgUnregisterContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnregisterContractResponse;
                fromPartial(_: any): _150.MsgUnregisterContractResponse;
            };
            MsgRegisterPairs: {
                encode(message: _150.MsgRegisterPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgRegisterPairs;
                fromPartial(object: any): _150.MsgRegisterPairs;
            };
            MsgRegisterPairsResponse: {
                encode(_: _150.MsgRegisterPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgRegisterPairsResponse;
                fromPartial(_: any): _150.MsgRegisterPairsResponse;
            };
            MsgUpdatePriceTickSize: {
                encode(message: _150.MsgUpdatePriceTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUpdatePriceTickSize;
                fromPartial(object: any): _150.MsgUpdatePriceTickSize;
            };
            MsgUpdateQuantityTickSize: {
                encode(message: _150.MsgUpdateQuantityTickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUpdateQuantityTickSize;
                fromPartial(object: any): _150.MsgUpdateQuantityTickSize;
            };
            MsgUpdateTickSizeResponse: {
                encode(_: _150.MsgUpdateTickSizeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUpdateTickSizeResponse;
                fromPartial(_: any): _150.MsgUpdateTickSizeResponse;
            };
            MsgUnsuspendContract: {
                encode(message: _150.MsgUnsuspendContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnsuspendContract;
                fromPartial(object: any): _150.MsgUnsuspendContract;
            };
            MsgUnsuspendContractResponse: {
                encode(_: _150.MsgUnsuspendContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.MsgUnsuspendContractResponse;
                fromPartial(_: any): _150.MsgUnsuspendContractResponse;
            };
            Twap: {
                encode(message: _149.Twap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Twap;
                fromPartial(object: any): _149.Twap;
            };
            TickSize: {
                encode(message: _148.TickSize, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.TickSize;
                fromPartial(object: any): _148.TickSize;
            };
            ShortBook: {
                encode(message: _147.ShortBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.ShortBook;
                fromPartial(object: any): _147.ShortBook;
            };
            SettlementEntry: {
                encode(message: _146.SettlementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.SettlementEntry;
                fromPartial(object: any): _146.SettlementEntry;
            };
            Settlements: {
                encode(message: _146.Settlements, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Settlements;
                fromPartial(object: any): _146.Settlements;
            };
            QueryParamsRequest: {
                encode(_: _145.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsRequest;
                fromPartial(_: any): _145.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _145.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsResponse;
                fromPartial(object: any): _145.QueryParamsResponse;
            };
            QueryGetLongBookRequest: {
                encode(message: _145.QueryGetLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetLongBookRequest;
                fromPartial(object: any): _145.QueryGetLongBookRequest;
            };
            QueryGetLongBookResponse: {
                encode(message: _145.QueryGetLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetLongBookResponse;
                fromPartial(object: any): _145.QueryGetLongBookResponse;
            };
            QueryAllLongBookRequest: {
                encode(message: _145.QueryAllLongBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAllLongBookRequest;
                fromPartial(object: any): _145.QueryAllLongBookRequest;
            };
            QueryAllLongBookResponse: {
                encode(message: _145.QueryAllLongBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAllLongBookResponse;
                fromPartial(object: any): _145.QueryAllLongBookResponse;
            };
            QueryGetShortBookRequest: {
                encode(message: _145.QueryGetShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetShortBookRequest;
                fromPartial(object: any): _145.QueryGetShortBookRequest;
            };
            QueryGetShortBookResponse: {
                encode(message: _145.QueryGetShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetShortBookResponse;
                fromPartial(object: any): _145.QueryGetShortBookResponse;
            };
            QueryAllShortBookRequest: {
                encode(message: _145.QueryAllShortBookRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAllShortBookRequest;
                fromPartial(object: any): _145.QueryAllShortBookRequest;
            };
            QueryAllShortBookResponse: {
                encode(message: _145.QueryAllShortBookResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAllShortBookResponse;
                fromPartial(object: any): _145.QueryAllShortBookResponse;
            };
            QueryGetPricesRequest: {
                encode(message: _145.QueryGetPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetPricesRequest;
                fromPartial(object: any): _145.QueryGetPricesRequest;
            };
            QueryGetPricesResponse: {
                encode(message: _145.QueryGetPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetPricesResponse;
                fromPartial(object: any): _145.QueryGetPricesResponse;
            };
            QueryGetPriceRequest: {
                encode(message: _145.QueryGetPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetPriceRequest;
                fromPartial(object: any): _145.QueryGetPriceRequest;
            };
            QueryGetPriceResponse: {
                encode(message: _145.QueryGetPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetPriceResponse;
                fromPartial(object: any): _145.QueryGetPriceResponse;
            };
            QueryGetLatestPriceRequest: {
                encode(message: _145.QueryGetLatestPriceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetLatestPriceRequest;
                fromPartial(object: any): _145.QueryGetLatestPriceRequest;
            };
            QueryGetLatestPriceResponse: {
                encode(message: _145.QueryGetLatestPriceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetLatestPriceResponse;
                fromPartial(object: any): _145.QueryGetLatestPriceResponse;
            };
            QueryGetTwapsRequest: {
                encode(message: _145.QueryGetTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetTwapsRequest;
                fromPartial(object: any): _145.QueryGetTwapsRequest;
            };
            QueryGetTwapsResponse: {
                encode(message: _145.QueryGetTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetTwapsResponse;
                fromPartial(object: any): _145.QueryGetTwapsResponse;
            };
            QueryAssetListRequest: {
                encode(_: _145.QueryAssetListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAssetListRequest;
                fromPartial(_: any): _145.QueryAssetListRequest;
            };
            QueryAssetListResponse: {
                encode(message: _145.QueryAssetListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAssetListResponse;
                fromPartial(object: any): _145.QueryAssetListResponse;
            };
            QueryAssetMetadataRequest: {
                encode(message: _145.QueryAssetMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAssetMetadataRequest;
                fromPartial(object: any): _145.QueryAssetMetadataRequest;
            };
            QueryAssetMetadataResponse: {
                encode(message: _145.QueryAssetMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryAssetMetadataResponse;
                fromPartial(object: any): _145.QueryAssetMetadataResponse;
            };
            QueryRegisteredPairsRequest: {
                encode(message: _145.QueryRegisteredPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryRegisteredPairsRequest;
                fromPartial(object: any): _145.QueryRegisteredPairsRequest;
            };
            QueryRegisteredPairsResponse: {
                encode(message: _145.QueryRegisteredPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryRegisteredPairsResponse;
                fromPartial(object: any): _145.QueryRegisteredPairsResponse;
            };
            QueryRegisteredContractRequest: {
                encode(message: _145.QueryRegisteredContractRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryRegisteredContractRequest;
                fromPartial(object: any): _145.QueryRegisteredContractRequest;
            };
            QueryRegisteredContractResponse: {
                encode(message: _145.QueryRegisteredContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryRegisteredContractResponse;
                fromPartial(object: any): _145.QueryRegisteredContractResponse;
            };
            QueryGetOrdersRequest: {
                encode(message: _145.QueryGetOrdersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetOrdersRequest;
                fromPartial(object: any): _145.QueryGetOrdersRequest;
            };
            QueryGetOrdersResponse: {
                encode(message: _145.QueryGetOrdersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetOrdersResponse;
                fromPartial(object: any): _145.QueryGetOrdersResponse;
            };
            QueryGetOrderByIDRequest: {
                encode(message: _145.QueryGetOrderByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetOrderByIDRequest;
                fromPartial(object: any): _145.QueryGetOrderByIDRequest;
            };
            QueryGetOrderByIDResponse: {
                encode(message: _145.QueryGetOrderByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetOrderByIDResponse;
                fromPartial(object: any): _145.QueryGetOrderByIDResponse;
            };
            QueryGetHistoricalPricesRequest: {
                encode(message: _145.QueryGetHistoricalPricesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetHistoricalPricesRequest;
                fromPartial(object: any): _145.QueryGetHistoricalPricesRequest;
            };
            QueryGetHistoricalPricesResponse: {
                encode(message: _145.QueryGetHistoricalPricesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetHistoricalPricesResponse;
                fromPartial(object: any): _145.QueryGetHistoricalPricesResponse;
            };
            QueryGetMarketSummaryRequest: {
                encode(message: _145.QueryGetMarketSummaryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetMarketSummaryRequest;
                fromPartial(object: any): _145.QueryGetMarketSummaryRequest;
            };
            QueryGetMarketSummaryResponse: {
                encode(message: _145.QueryGetMarketSummaryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetMarketSummaryResponse;
                fromPartial(object: any): _145.QueryGetMarketSummaryResponse;
            };
            QueryOrderSimulationRequest: {
                encode(message: _145.QueryOrderSimulationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryOrderSimulationRequest;
                fromPartial(object: any): _145.QueryOrderSimulationRequest;
            };
            QueryOrderSimulationResponse: {
                encode(message: _145.QueryOrderSimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryOrderSimulationResponse;
                fromPartial(object: any): _145.QueryOrderSimulationResponse;
            };
            QueryGetMatchResultRequest: {
                encode(message: _145.QueryGetMatchResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetMatchResultRequest;
                fromPartial(object: any): _145.QueryGetMatchResultRequest;
            };
            QueryGetMatchResultResponse: {
                encode(message: _145.QueryGetMatchResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetMatchResultResponse;
                fromPartial(object: any): _145.QueryGetMatchResultResponse;
            };
            QueryGetOrderCountRequest: {
                encode(message: _145.QueryGetOrderCountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetOrderCountRequest;
                fromPartial(object: any): _145.QueryGetOrderCountRequest;
            };
            QueryGetOrderCountResponse: {
                encode(message: _145.QueryGetOrderCountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryGetOrderCountResponse;
                fromPartial(object: any): _145.QueryGetOrderCountResponse;
            };
            Price: {
                encode(message: _144.Price, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.Price;
                fromPartial(object: any): _144.Price;
            };
            PriceCandlestick: {
                encode(message: _144.PriceCandlestick, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.PriceCandlestick;
                fromPartial(object: any): _144.PriceCandlestick;
            };
            Params: {
                encode(message: _143.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.Params;
                fromPartial(object: any): _143.Params;
            };
            Pair: {
                encode(message: _142.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Pair;
                fromPartial(object: any): _142.Pair;
            };
            BatchContractPair: {
                encode(message: _142.BatchContractPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.BatchContractPair;
                fromPartial(object: any): _142.BatchContractPair;
            };
            Order: {
                encode(message: _141.Order, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Order;
                fromPartial(object: any): _141.Order;
            };
            Cancellation: {
                encode(message: _141.Cancellation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.Cancellation;
                fromPartial(object: any): _141.Cancellation;
            };
            ActiveOrders: {
                encode(message: _141.ActiveOrders, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.ActiveOrders;
                fromPartial(object: any): _141.ActiveOrders;
            };
            OrderEntry: {
                encode(message: _140.OrderEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.OrderEntry;
                fromPartial(object: any): _140.OrderEntry;
            };
            Allocation: {
                encode(message: _140.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Allocation;
                fromPartial(object: any): _140.Allocation;
            };
            MatchResult: {
                encode(message: _139.MatchResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.MatchResult;
                fromPartial(object: any): _139.MatchResult;
            };
            LongBook: {
                encode(message: _138.LongBook, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.LongBook;
                fromPartial(object: any): _138.LongBook;
            };
            AddAssetMetadataProposal: {
                encode(message: _137.AddAssetMetadataProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.AddAssetMetadataProposal;
                fromPartial(object: any): _137.AddAssetMetadataProposal;
            };
            GenesisState: {
                encode(message: _136.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.GenesisState;
                fromPartial(object: any): _136.GenesisState;
            };
            ContractState: {
                encode(message: _136.ContractState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ContractState;
                fromPartial(object: any): _136.ContractState;
            };
            ContractPairPrices: {
                encode(message: _136.ContractPairPrices, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.ContractPairPrices;
                fromPartial(object: any): _136.ContractPairPrices;
            };
            positionDirectionFromJSON(object: any): _135.PositionDirection;
            positionDirectionToJSON(object: _135.PositionDirection): string;
            positionEffectFromJSON(object: any): _135.PositionEffect;
            positionEffectToJSON(object: _135.PositionEffect): string;
            orderTypeFromJSON(object: any): _135.OrderType;
            orderTypeToJSON(object: _135.OrderType): string;
            unitFromJSON(object: any): _135.Unit;
            unitToJSON(object: _135.Unit): string;
            orderStatusFromJSON(object: any): _135.OrderStatus;
            orderStatusToJSON(object: _135.OrderStatus): string;
            cancellationInitiatorFromJSON(object: any): _135.CancellationInitiator;
            cancellationInitiatorToJSON(object: _135.CancellationInitiator): string;
            PositionDirection: typeof _135.PositionDirection;
            PositionDirectionSDKType: typeof _135.PositionDirection;
            PositionEffect: typeof _135.PositionEffect;
            PositionEffectSDKType: typeof _135.PositionEffect;
            OrderType: typeof _135.OrderType;
            OrderTypeSDKType: typeof _135.OrderType;
            Unit: typeof _135.Unit;
            UnitSDKType: typeof _135.Unit;
            OrderStatus: typeof _135.OrderStatus;
            OrderStatusSDKType: typeof _135.OrderStatus;
            CancellationInitiator: typeof _135.CancellationInitiator;
            CancellationInitiatorSDKType: typeof _135.CancellationInitiator;
            DepositInfoEntry: {
                encode(message: _134.DepositInfoEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.DepositInfoEntry;
                fromPartial(object: any): _134.DepositInfoEntry;
            };
            ContractInfo: {
                encode(message: _133.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ContractInfo;
                fromPartial(object: any): _133.ContractInfo;
            };
            ContractInfoV2: {
                encode(message: _133.ContractInfoV2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ContractInfoV2;
                fromPartial(object: any): _133.ContractInfoV2;
            };
            ContractDependencyInfo: {
                encode(message: _133.ContractDependencyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ContractDependencyInfo;
                fromPartial(object: any): _133.ContractDependencyInfo;
            };
            LegacyContractInfo: {
                encode(message: _133.LegacyContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.LegacyContractInfo;
                fromPartial(object: any): _133.LegacyContractInfo;
            };
            AssetIBCInfo: {
                encode(message: _132.AssetIBCInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.AssetIBCInfo;
                fromPartial(object: any): _132.AssetIBCInfo;
            };
            AssetMetadata: {
                encode(message: _132.AssetMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.AssetMetadata;
                fromPartial(object: any): _132.AssetMetadata;
            };
        };
        const epoch: {
            LCDQueryClient: typeof _247.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _154.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsRequest;
                fromPartial(_: any): _154.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _154.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryParamsResponse;
                fromPartial(object: any): _154.QueryParamsResponse;
            };
            QueryEpochRequest: {
                encode(_: _154.QueryEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryEpochRequest;
                fromPartial(_: any): _154.QueryEpochRequest;
            };
            QueryEpochResponse: {
                encode(message: _154.QueryEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryEpochResponse;
                fromPartial(object: any): _154.QueryEpochResponse;
            };
            Params: {
                encode(_: _153.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Params;
                fromPartial(_: any): _153.Params;
            };
            GenesisState: {
                encode(message: _152.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.GenesisState;
                fromPartial(object: any): _152.GenesisState;
            };
            Epoch: {
                encode(message: _151.Epoch, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Epoch;
                fromPartial(object: any): _151.Epoch;
            };
        };
        const mint: {
            LCDQueryClient: typeof _248.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _159.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsRequest;
                fromPartial(_: any): _159.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _159.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryParamsResponse;
                fromPartial(object: any): _159.QueryParamsResponse;
            };
            QueryMinterRequest: {
                encode(_: _159.QueryMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryMinterRequest;
                fromPartial(_: any): _159.QueryMinterRequest;
            };
            QueryMinterResponse: {
                encode(message: _159.QueryMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.QueryMinterResponse;
                fromPartial(object: any): _159.QueryMinterResponse;
            };
            Minter: {
                encode(message: _158.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Minter;
                fromPartial(object: any): _158.Minter;
            };
            ScheduledTokenRelease: {
                encode(message: _158.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ScheduledTokenRelease;
                fromPartial(object: any): _158.ScheduledTokenRelease;
            };
            Params: {
                encode(message: _158.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Params;
                fromPartial(object: any): _158.Params;
            };
            Version2Minter: {
                encode(message: _158.Version2Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Version2Minter;
                fromPartial(object: any): _158.Version2Minter;
            };
            Version2ScheduledTokenRelease: {
                encode(message: _158.Version2ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Version2ScheduledTokenRelease;
                fromPartial(object: any): _158.Version2ScheduledTokenRelease;
            };
            Version2Params: {
                encode(message: _158.Version2Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Version2Params;
                fromPartial(object: any): _158.Version2Params;
            };
            UpdateMinterProposal: {
                encode(message: _157.UpdateMinterProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.UpdateMinterProposal;
                fromPartial(object: any): _157.UpdateMinterProposal;
            };
            GenesisState: {
                encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                fromPartial(object: any): _156.GenesisState;
            };
        };
        const oracle: {
            LCDQueryClient: typeof _249.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _163.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _163.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _163.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _163.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _163.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _163.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _163.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _163.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _163.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _163.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: ({ exchangeRates, feeder, validator }: _163.MsgAggregateExchangeRateVote) => {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ exchange_rates, feeder, validator }: {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    }) => _163.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: ({ operator, delegate }: _163.MsgDelegateFeedConsent) => {
                        operator: string;
                        delegate: string;
                    };
                    fromAmino: ({ operator, delegate }: {
                        operator: string;
                        delegate: string;
                    }) => _163.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                encode(message: _163.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgAggregateExchangeRateVote;
                fromPartial(object: any): _163.MsgAggregateExchangeRateVote;
            };
            MsgAggregateExchangeRateVoteResponse: {
                encode(_: _163.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: any): _163.MsgAggregateExchangeRateVoteResponse;
            };
            MsgDelegateFeedConsent: {
                encode(message: _163.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgDelegateFeedConsent;
                fromPartial(object: any): _163.MsgDelegateFeedConsent;
            };
            MsgDelegateFeedConsentResponse: {
                encode(_: _163.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.MsgDelegateFeedConsentResponse;
                fromPartial(_: any): _163.MsgDelegateFeedConsentResponse;
            };
            QueryExchangeRateRequest: {
                encode(message: _162.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRateRequest;
                fromPartial(object: any): _162.QueryExchangeRateRequest;
            };
            QueryExchangeRateResponse: {
                encode(message: _162.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRateResponse;
                fromPartial(object: any): _162.QueryExchangeRateResponse;
            };
            QueryExchangeRatesRequest: {
                encode(_: _162.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRatesRequest;
                fromPartial(_: any): _162.QueryExchangeRatesRequest;
            };
            DenomOracleExchangeRatePair: {
                encode(message: _162.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DenomOracleExchangeRatePair;
                fromPartial(object: any): _162.DenomOracleExchangeRatePair;
            };
            QueryExchangeRatesResponse: {
                encode(message: _162.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryExchangeRatesResponse;
                fromPartial(object: any): _162.QueryExchangeRatesResponse;
            };
            QueryActivesRequest: {
                encode(_: _162.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryActivesRequest;
                fromPartial(_: any): _162.QueryActivesRequest;
            };
            QueryActivesResponse: {
                encode(message: _162.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryActivesResponse;
                fromPartial(object: any): _162.QueryActivesResponse;
            };
            QueryVoteTargetsRequest: {
                encode(_: _162.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVoteTargetsRequest;
                fromPartial(_: any): _162.QueryVoteTargetsRequest;
            };
            QueryVoteTargetsResponse: {
                encode(message: _162.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVoteTargetsResponse;
                fromPartial(object: any): _162.QueryVoteTargetsResponse;
            };
            QueryPriceSnapshotHistoryRequest: {
                encode(_: _162.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPriceSnapshotHistoryRequest;
                fromPartial(_: any): _162.QueryPriceSnapshotHistoryRequest;
            };
            QueryPriceSnapshotHistoryResponse: {
                encode(message: _162.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryPriceSnapshotHistoryResponse;
                fromPartial(object: any): _162.QueryPriceSnapshotHistoryResponse;
            };
            QueryTwapsRequest: {
                encode(message: _162.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTwapsRequest;
                fromPartial(object: any): _162.QueryTwapsRequest;
            };
            QueryTwapsResponse: {
                encode(message: _162.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryTwapsResponse;
                fromPartial(object: any): _162.QueryTwapsResponse;
            };
            QueryFeederDelegationRequest: {
                encode(message: _162.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryFeederDelegationRequest;
                fromPartial(object: any): _162.QueryFeederDelegationRequest;
            };
            QueryFeederDelegationResponse: {
                encode(message: _162.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryFeederDelegationResponse;
                fromPartial(object: any): _162.QueryFeederDelegationResponse;
            };
            QueryVotePenaltyCounterRequest: {
                encode(message: _162.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVotePenaltyCounterRequest;
                fromPartial(object: any): _162.QueryVotePenaltyCounterRequest;
            };
            QueryVotePenaltyCounterResponse: {
                encode(message: _162.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryVotePenaltyCounterResponse;
                fromPartial(object: any): _162.QueryVotePenaltyCounterResponse;
            };
            QuerySlashWindowRequest: {
                encode(_: _162.QuerySlashWindowRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QuerySlashWindowRequest;
                fromPartial(_: any): _162.QuerySlashWindowRequest;
            };
            QuerySlashWindowResponse: {
                encode(message: _162.QuerySlashWindowResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QuerySlashWindowResponse;
                fromPartial(object: any): _162.QuerySlashWindowResponse;
            };
            QueryParamsRequest: {
                encode(_: _162.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsRequest;
                fromPartial(_: any): _162.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _162.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.QueryParamsResponse;
                fromPartial(object: any): _162.QueryParamsResponse;
            };
            Params: {
                encode(message: _161.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Params;
                fromPartial(object: any): _161.Params;
            };
            Denom: {
                encode(message: _161.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Denom;
                fromPartial(object: any): _161.Denom;
            };
            AggregateExchangeRateVote: {
                encode(message: _161.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AggregateExchangeRateVote;
                fromPartial(object: any): _161.AggregateExchangeRateVote;
            };
            ExchangeRateTuple: {
                encode(message: _161.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.ExchangeRateTuple;
                fromPartial(object: any): _161.ExchangeRateTuple;
            };
            OracleExchangeRate: {
                encode(message: _161.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.OracleExchangeRate;
                fromPartial(object: any): _161.OracleExchangeRate;
            };
            PriceSnapshotItem: {
                encode(message: _161.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PriceSnapshotItem;
                fromPartial(object: any): _161.PriceSnapshotItem;
            };
            PriceSnapshot: {
                encode(message: _161.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PriceSnapshot;
                fromPartial(object: any): _161.PriceSnapshot;
            };
            OracleTwap: {
                encode(message: _161.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.OracleTwap;
                fromPartial(object: any): _161.OracleTwap;
            };
            VotePenaltyCounter: {
                encode(message: _161.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.VotePenaltyCounter;
                fromPartial(object: any): _161.VotePenaltyCounter;
            };
            GenesisState: {
                encode(message: _160.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.GenesisState;
                fromPartial(object: any): _160.GenesisState;
            };
            FeederDelegation: {
                encode(message: _160.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.FeederDelegation;
                fromPartial(object: any): _160.FeederDelegation;
            };
            PenaltyCounter: {
                encode(message: _160.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.PenaltyCounter;
                fromPartial(object: any): _160.PenaltyCounter;
            };
        };
        const tokenfactory: {
            LCDQueryClient: typeof _250.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _168.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _168.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _168.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _168.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _168.MsgCreateDenom): {
                        typeUrl: string;
                        value: _168.MsgCreateDenom;
                    };
                    mint(value: _168.MsgMint): {
                        typeUrl: string;
                        value: _168.MsgMint;
                    };
                    burn(value: _168.MsgBurn): {
                        typeUrl: string;
                        value: _168.MsgBurn;
                    };
                    changeAdmin(value: _168.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _168.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _168.MsgCreateDenom): {
                        typeUrl: string;
                        value: _168.MsgCreateDenom;
                    };
                    mint(value: _168.MsgMint): {
                        typeUrl: string;
                        value: _168.MsgMint;
                    };
                    burn(value: _168.MsgBurn): {
                        typeUrl: string;
                        value: _168.MsgBurn;
                    };
                    changeAdmin(value: _168.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _168.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _168.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _168.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _168.MsgMint) => {
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
                    }) => _168.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _168.MsgBurn) => {
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
                    }) => _168.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _168.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _168.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _168.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgCreateDenom;
                fromPartial(object: any): _168.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _168.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgCreateDenomResponse;
                fromPartial(object: any): _168.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _168.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgMint;
                fromPartial(object: any): _168.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _168.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgMintResponse;
                fromPartial(_: any): _168.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _168.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgBurn;
                fromPartial(object: any): _168.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _168.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgBurnResponse;
                fromPartial(_: any): _168.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _168.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgChangeAdmin;
                fromPartial(object: any): _168.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _168.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgChangeAdminResponse;
                fromPartial(_: any): _168.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _167.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsRequest;
                fromPartial(_: any): _167.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _167.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsResponse;
                fromPartial(object: any): _167.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _167.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: any): _167.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _167.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: any): _167.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _167.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomsFromCreatorRequest;
                fromPartial(object: any): _167.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _167.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryDenomsFromCreatorResponse;
                fromPartial(object: any): _167.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(_: _166.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Params;
                fromPartial(_: any): _166.Params;
            };
            GenesisState: {
                encode(message: _165.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisState;
                fromPartial(object: any): _165.GenesisState;
            };
            GenesisDenom: {
                encode(message: _165.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisDenom;
                fromPartial(object: any): _165.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _164.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.DenomAuthorityMetadata;
                fromPartial(object: any): _164.DenomAuthorityMetadata;
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
                    dex: _246.LCDQueryClient;
                    epoch: _247.LCDQueryClient;
                    mint: _248.LCDQueryClient;
                    oracle: _249.LCDQueryClient;
                    tokenfactory: _250.LCDQueryClient;
                };
            };
        }>;
    };
}
