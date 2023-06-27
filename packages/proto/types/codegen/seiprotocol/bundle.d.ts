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
import * as _157 from "./seichain/mint/v1beta1/mint";
import * as _158 from "./seichain/mint/v1beta1/query";
import * as _159 from "./seichain/nitro/account";
import * as _160 from "./seichain/nitro/data";
import * as _161 from "./seichain/nitro/genesis";
import * as _162 from "./seichain/nitro/params";
import * as _163 from "./seichain/nitro/query";
import * as _164 from "./seichain/nitro/tx";
import * as _165 from "./seichain/oracle/genesis";
import * as _166 from "./seichain/oracle/oracle";
import * as _167 from "./seichain/oracle/query";
import * as _168 from "./seichain/oracle/tx";
import * as _169 from "./seichain/tokenfactory/authorityMetadata";
import * as _170 from "./seichain/tokenfactory/genesis";
import * as _171 from "./seichain/tokenfactory/params";
import * as _172 from "./seichain/tokenfactory/query";
import * as _173 from "./seichain/tokenfactory/tx";
import * as _253 from "./seichain/dex/query.lcd";
import * as _254 from "./seichain/epoch/query.lcd";
import * as _255 from "./seichain/mint/v1beta1/query.lcd";
import * as _256 from "./seichain/nitro/query.lcd";
import * as _257 from "./seichain/oracle/query.lcd";
import * as _258 from "./seichain/tokenfactory/query.lcd";
export declare namespace seiprotocol {
    namespace seichain {
        const dex: {
            LCDQueryClient: typeof _253.LCDQueryClient;
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
            LCDQueryClient: typeof _254.LCDQueryClient;
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
            LCDQueryClient: typeof _255.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _158.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsRequest;
                fromPartial(_: any): _158.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _158.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryParamsResponse;
                fromPartial(object: any): _158.QueryParamsResponse;
            };
            QueryMinterRequest: {
                encode(_: _158.QueryMinterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryMinterRequest;
                fromPartial(_: any): _158.QueryMinterRequest;
            };
            QueryMinterResponse: {
                encode(message: _158.QueryMinterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryMinterResponse;
                fromPartial(object: any): _158.QueryMinterResponse;
            };
            Minter: {
                encode(message: _157.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Minter;
                fromPartial(object: any): _157.Minter;
            };
            ScheduledTokenRelease: {
                encode(message: _157.ScheduledTokenRelease, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.ScheduledTokenRelease;
                fromPartial(object: any): _157.ScheduledTokenRelease;
            };
            Params: {
                encode(message: _157.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.Params;
                fromPartial(object: any): _157.Params;
            };
            GenesisState: {
                encode(message: _156.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.GenesisState;
                fromPartial(object: any): _156.GenesisState;
            };
        };
        const nitro: {
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    recordTransactionData(value: _164.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitFraudChallenge(value: _164.MsgSubmitFraudChallenge): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    recordTransactionData(value: _164.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _164.MsgRecordTransactionData;
                    };
                    submitFraudChallenge(value: _164.MsgSubmitFraudChallenge): {
                        typeUrl: string;
                        value: _164.MsgSubmitFraudChallenge;
                    };
                };
                fromPartial: {
                    recordTransactionData(value: _164.MsgRecordTransactionData): {
                        typeUrl: string;
                        value: _164.MsgRecordTransactionData;
                    };
                    submitFraudChallenge(value: _164.MsgSubmitFraudChallenge): {
                        typeUrl: string;
                        value: _164.MsgSubmitFraudChallenge;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
                    aminoType: string;
                    toAmino: ({ sender, slot, stateRoot, txs }: _164.MsgRecordTransactionData) => {
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
                    }) => _164.MsgRecordTransactionData;
                };
                "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge": {
                    aminoType: string;
                    toAmino: ({ sender, startSlot, endSlot, fraudStatePubKey, merkleProof, accountStates, programs, sysvarAccounts }: _164.MsgSubmitFraudChallenge) => {
                        sender: string;
                        startSlot: string;
                        endSlot: string;
                        fraudStatePubKey: string;
                        merkleProof: {
                            commitment: string;
                            hash: string[];
                            direction: string[];
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
                            direction: string[];
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
                    }) => _164.MsgSubmitFraudChallenge;
                };
            };
            MsgRecordTransactionData: {
                encode(message: _164.MsgRecordTransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRecordTransactionData;
                fromPartial(object: any): _164.MsgRecordTransactionData;
            };
            MsgSubmitFraudChallenge: {
                encode(message: _164.MsgSubmitFraudChallenge, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSubmitFraudChallenge;
                fromPartial(object: any): _164.MsgSubmitFraudChallenge;
            };
            MsgRecordTransactionDataResponse: {
                encode(_: _164.MsgRecordTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgRecordTransactionDataResponse;
                fromPartial(_: any): _164.MsgRecordTransactionDataResponse;
            };
            MsgSubmitFraudChallengeResponse: {
                encode(_: _164.MsgSubmitFraudChallengeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.MsgSubmitFraudChallengeResponse;
                fromPartial(_: any): _164.MsgSubmitFraudChallengeResponse;
            };
            QueryParamsRequest: {
                encode(_: _163.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsRequest;
                fromPartial(_: any): _163.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _163.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryParamsResponse;
                fromPartial(object: any): _163.QueryParamsResponse;
            };
            QueryRecordedTransactionDataRequest: {
                encode(message: _163.QueryRecordedTransactionDataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryRecordedTransactionDataRequest;
                fromPartial(object: any): _163.QueryRecordedTransactionDataRequest;
            };
            QueryRecordedTransactionDataResponse: {
                encode(message: _163.QueryRecordedTransactionDataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryRecordedTransactionDataResponse;
                fromPartial(object: any): _163.QueryRecordedTransactionDataResponse;
            };
            QueryStateRootRequest: {
                encode(message: _163.QueryStateRootRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryStateRootRequest;
                fromPartial(object: any): _163.QueryStateRootRequest;
            };
            QueryStateRootResponse: {
                encode(message: _163.QueryStateRootResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryStateRootResponse;
                fromPartial(object: any): _163.QueryStateRootResponse;
            };
            QuerySenderRequest: {
                encode(message: _163.QuerySenderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QuerySenderRequest;
                fromPartial(object: any): _163.QuerySenderRequest;
            };
            QuerySenderResponse: {
                encode(message: _163.QuerySenderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QuerySenderResponse;
                fromPartial(object: any): _163.QuerySenderResponse;
            };
            Params: {
                encode(message: _162.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.Params;
                fromPartial(object: any): _162.Params;
            };
            GenesisState: {
                encode(message: _161.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.GenesisState;
                fromPartial(object: any): _161.GenesisState;
            };
            TransactionData: {
                encode(message: _160.TransactionData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.TransactionData;
                fromPartial(object: any): _160.TransactionData;
            };
            LegacyMessage: {
                encode(message: _160.LegacyMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.LegacyMessage;
                fromPartial(object: any): _160.LegacyMessage;
            };
            LoadedMessage: {
                encode(message: _160.LoadedMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.LoadedMessage;
                fromPartial(object: any): _160.LoadedMessage;
            };
            Message: {
                encode(message: _160.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.Message;
                fromPartial(object: any): _160.Message;
            };
            MessageHeader: {
                encode(message: _160.MessageHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MessageHeader;
                fromPartial(object: any): _160.MessageHeader;
            };
            CompiledInstruction: {
                encode(message: _160.CompiledInstruction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.CompiledInstruction;
                fromPartial(object: any): _160.CompiledInstruction;
            };
            MessageAddressTableLookup: {
                encode(message: _160.MessageAddressTableLookup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MessageAddressTableLookup;
                fromPartial(object: any): _160.MessageAddressTableLookup;
            };
            LoadedAddresses: {
                encode(message: _160.LoadedAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.LoadedAddresses;
                fromPartial(object: any): _160.LoadedAddresses;
            };
            MerkleProof: {
                encode(message: _160.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.MerkleProof;
                fromPartial(object: any): _160.MerkleProof;
            };
            Account: {
                encode(message: _159.Account, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Account;
                fromPartial(object: any): _159.Account;
            };
        };
        const oracle: {
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    aggregateExchangeRateVote(value: _168.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateFeedConsent(value: _168.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    aggregateExchangeRateVote(value: _168.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _168.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _168.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _168.MsgDelegateFeedConsent;
                    };
                };
                fromPartial: {
                    aggregateExchangeRateVote(value: _168.MsgAggregateExchangeRateVote): {
                        typeUrl: string;
                        value: _168.MsgAggregateExchangeRateVote;
                    };
                    delegateFeedConsent(value: _168.MsgDelegateFeedConsent): {
                        typeUrl: string;
                        value: _168.MsgDelegateFeedConsent;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
                    aminoType: string;
                    toAmino: ({ exchangeRates, feeder, validator }: _168.MsgAggregateExchangeRateVote) => {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    };
                    fromAmino: ({ exchange_rates, feeder, validator }: {
                        exchange_rates: string;
                        feeder: string;
                        validator: string;
                    }) => _168.MsgAggregateExchangeRateVote;
                };
                "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
                    aminoType: string;
                    toAmino: ({ operator, delegate }: _168.MsgDelegateFeedConsent) => {
                        operator: string;
                        delegate: string;
                    };
                    fromAmino: ({ operator, delegate }: {
                        operator: string;
                        delegate: string;
                    }) => _168.MsgDelegateFeedConsent;
                };
            };
            MsgAggregateExchangeRateVote: {
                encode(message: _168.MsgAggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgAggregateExchangeRateVote;
                fromPartial(object: any): _168.MsgAggregateExchangeRateVote;
            };
            MsgAggregateExchangeRateVoteResponse: {
                encode(_: _168.MsgAggregateExchangeRateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgAggregateExchangeRateVoteResponse;
                fromPartial(_: any): _168.MsgAggregateExchangeRateVoteResponse;
            };
            MsgDelegateFeedConsent: {
                encode(message: _168.MsgDelegateFeedConsent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgDelegateFeedConsent;
                fromPartial(object: any): _168.MsgDelegateFeedConsent;
            };
            MsgDelegateFeedConsentResponse: {
                encode(_: _168.MsgDelegateFeedConsentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgDelegateFeedConsentResponse;
                fromPartial(_: any): _168.MsgDelegateFeedConsentResponse;
            };
            QueryExchangeRateRequest: {
                encode(message: _167.QueryExchangeRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryExchangeRateRequest;
                fromPartial(object: any): _167.QueryExchangeRateRequest;
            };
            QueryExchangeRateResponse: {
                encode(message: _167.QueryExchangeRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryExchangeRateResponse;
                fromPartial(object: any): _167.QueryExchangeRateResponse;
            };
            QueryExchangeRatesRequest: {
                encode(_: _167.QueryExchangeRatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryExchangeRatesRequest;
                fromPartial(_: any): _167.QueryExchangeRatesRequest;
            };
            DenomOracleExchangeRatePair: {
                encode(message: _167.DenomOracleExchangeRatePair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.DenomOracleExchangeRatePair;
                fromPartial(object: any): _167.DenomOracleExchangeRatePair;
            };
            QueryExchangeRatesResponse: {
                encode(message: _167.QueryExchangeRatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryExchangeRatesResponse;
                fromPartial(object: any): _167.QueryExchangeRatesResponse;
            };
            QueryActivesRequest: {
                encode(_: _167.QueryActivesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryActivesRequest;
                fromPartial(_: any): _167.QueryActivesRequest;
            };
            QueryActivesResponse: {
                encode(message: _167.QueryActivesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryActivesResponse;
                fromPartial(object: any): _167.QueryActivesResponse;
            };
            QueryVoteTargetsRequest: {
                encode(_: _167.QueryVoteTargetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryVoteTargetsRequest;
                fromPartial(_: any): _167.QueryVoteTargetsRequest;
            };
            QueryVoteTargetsResponse: {
                encode(message: _167.QueryVoteTargetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryVoteTargetsResponse;
                fromPartial(object: any): _167.QueryVoteTargetsResponse;
            };
            QueryPriceSnapshotHistoryRequest: {
                encode(_: _167.QueryPriceSnapshotHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryPriceSnapshotHistoryRequest;
                fromPartial(_: any): _167.QueryPriceSnapshotHistoryRequest;
            };
            QueryPriceSnapshotHistoryResponse: {
                encode(message: _167.QueryPriceSnapshotHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryPriceSnapshotHistoryResponse;
                fromPartial(object: any): _167.QueryPriceSnapshotHistoryResponse;
            };
            QueryTwapsRequest: {
                encode(message: _167.QueryTwapsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTwapsRequest;
                fromPartial(object: any): _167.QueryTwapsRequest;
            };
            QueryTwapsResponse: {
                encode(message: _167.QueryTwapsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryTwapsResponse;
                fromPartial(object: any): _167.QueryTwapsResponse;
            };
            QueryFeederDelegationRequest: {
                encode(message: _167.QueryFeederDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryFeederDelegationRequest;
                fromPartial(object: any): _167.QueryFeederDelegationRequest;
            };
            QueryFeederDelegationResponse: {
                encode(message: _167.QueryFeederDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryFeederDelegationResponse;
                fromPartial(object: any): _167.QueryFeederDelegationResponse;
            };
            QueryVotePenaltyCounterRequest: {
                encode(message: _167.QueryVotePenaltyCounterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryVotePenaltyCounterRequest;
                fromPartial(object: any): _167.QueryVotePenaltyCounterRequest;
            };
            QueryVotePenaltyCounterResponse: {
                encode(message: _167.QueryVotePenaltyCounterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryVotePenaltyCounterResponse;
                fromPartial(object: any): _167.QueryVotePenaltyCounterResponse;
            };
            QueryAggregateVoteRequest: {
                encode(message: _167.QueryAggregateVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryAggregateVoteRequest;
                fromPartial(object: any): _167.QueryAggregateVoteRequest;
            };
            QueryAggregateVoteResponse: {
                encode(message: _167.QueryAggregateVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryAggregateVoteResponse;
                fromPartial(object: any): _167.QueryAggregateVoteResponse;
            };
            QueryAggregateVotesRequest: {
                encode(_: _167.QueryAggregateVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryAggregateVotesRequest;
                fromPartial(_: any): _167.QueryAggregateVotesRequest;
            };
            QueryAggregateVotesResponse: {
                encode(message: _167.QueryAggregateVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryAggregateVotesResponse;
                fromPartial(object: any): _167.QueryAggregateVotesResponse;
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
            Params: {
                encode(message: _166.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Params;
                fromPartial(object: any): _166.Params;
            };
            Denom: {
                encode(message: _166.Denom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Denom;
                fromPartial(object: any): _166.Denom;
            };
            AggregateExchangeRateVote: {
                encode(message: _166.AggregateExchangeRateVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.AggregateExchangeRateVote;
                fromPartial(object: any): _166.AggregateExchangeRateVote;
            };
            ExchangeRateTuple: {
                encode(message: _166.ExchangeRateTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.ExchangeRateTuple;
                fromPartial(object: any): _166.ExchangeRateTuple;
            };
            OracleExchangeRate: {
                encode(message: _166.OracleExchangeRate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.OracleExchangeRate;
                fromPartial(object: any): _166.OracleExchangeRate;
            };
            PriceSnapshotItem: {
                encode(message: _166.PriceSnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.PriceSnapshotItem;
                fromPartial(object: any): _166.PriceSnapshotItem;
            };
            PriceSnapshot: {
                encode(message: _166.PriceSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.PriceSnapshot;
                fromPartial(object: any): _166.PriceSnapshot;
            };
            OracleTwap: {
                encode(message: _166.OracleTwap, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.OracleTwap;
                fromPartial(object: any): _166.OracleTwap;
            };
            VotePenaltyCounter: {
                encode(message: _166.VotePenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.VotePenaltyCounter;
                fromPartial(object: any): _166.VotePenaltyCounter;
            };
            GenesisState: {
                encode(message: _165.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.GenesisState;
                fromPartial(object: any): _165.GenesisState;
            };
            FeederDelegation: {
                encode(message: _165.FeederDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.FeederDelegation;
                fromPartial(object: any): _165.FeederDelegation;
            };
            PenaltyCounter: {
                encode(message: _165.PenaltyCounter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.PenaltyCounter;
                fromPartial(object: any): _165.PenaltyCounter;
            };
        };
        const tokenfactory: {
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _173.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _173.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _173.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _173.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _173.MsgCreateDenom): {
                        typeUrl: string;
                        value: _173.MsgCreateDenom;
                    };
                    mint(value: _173.MsgMint): {
                        typeUrl: string;
                        value: _173.MsgMint;
                    };
                    burn(value: _173.MsgBurn): {
                        typeUrl: string;
                        value: _173.MsgBurn;
                    };
                    changeAdmin(value: _173.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _173.MsgChangeAdmin;
                    };
                };
                fromPartial: {
                    createDenom(value: _173.MsgCreateDenom): {
                        typeUrl: string;
                        value: _173.MsgCreateDenom;
                    };
                    mint(value: _173.MsgMint): {
                        typeUrl: string;
                        value: _173.MsgMint;
                    };
                    burn(value: _173.MsgBurn): {
                        typeUrl: string;
                        value: _173.MsgBurn;
                    };
                    changeAdmin(value: _173.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _173.MsgChangeAdmin;
                    };
                };
            };
            AminoConverter: {
                "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: ({ sender, subdenom }: _173.MsgCreateDenom) => {
                        sender: string;
                        subdenom: string;
                    };
                    fromAmino: ({ sender, subdenom }: {
                        sender: string;
                        subdenom: string;
                    }) => _173.MsgCreateDenom;
                };
                "/seiprotocol.seichain.tokenfactory.MsgMint": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _173.MsgMint) => {
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
                    }) => _173.MsgMint;
                };
                "/seiprotocol.seichain.tokenfactory.MsgBurn": {
                    aminoType: string;
                    toAmino: ({ sender, amount }: _173.MsgBurn) => {
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
                    }) => _173.MsgBurn;
                };
                "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, denom, newAdmin }: _173.MsgChangeAdmin) => {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    };
                    fromAmino: ({ sender, denom, new_admin }: {
                        sender: string;
                        denom: string;
                        new_admin: string;
                    }) => _173.MsgChangeAdmin;
                };
            };
            MsgCreateDenom: {
                encode(message: _173.MsgCreateDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgCreateDenom;
                fromPartial(object: any): _173.MsgCreateDenom;
            };
            MsgCreateDenomResponse: {
                encode(message: _173.MsgCreateDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgCreateDenomResponse;
                fromPartial(object: any): _173.MsgCreateDenomResponse;
            };
            MsgMint: {
                encode(message: _173.MsgMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgMint;
                fromPartial(object: any): _173.MsgMint;
            };
            MsgMintResponse: {
                encode(_: _173.MsgMintResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgMintResponse;
                fromPartial(_: any): _173.MsgMintResponse;
            };
            MsgBurn: {
                encode(message: _173.MsgBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgBurn;
                fromPartial(object: any): _173.MsgBurn;
            };
            MsgBurnResponse: {
                encode(_: _173.MsgBurnResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgBurnResponse;
                fromPartial(_: any): _173.MsgBurnResponse;
            };
            MsgChangeAdmin: {
                encode(message: _173.MsgChangeAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChangeAdmin;
                fromPartial(object: any): _173.MsgChangeAdmin;
            };
            MsgChangeAdminResponse: {
                encode(_: _173.MsgChangeAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.MsgChangeAdminResponse;
                fromPartial(_: any): _173.MsgChangeAdminResponse;
            };
            QueryParamsRequest: {
                encode(_: _172.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsRequest;
                fromPartial(_: any): _172.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _172.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryParamsResponse;
                fromPartial(object: any): _172.QueryParamsResponse;
            };
            QueryDenomAuthorityMetadataRequest: {
                encode(message: _172.QueryDenomAuthorityMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomAuthorityMetadataRequest;
                fromPartial(object: any): _172.QueryDenomAuthorityMetadataRequest;
            };
            QueryDenomAuthorityMetadataResponse: {
                encode(message: _172.QueryDenomAuthorityMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomAuthorityMetadataResponse;
                fromPartial(object: any): _172.QueryDenomAuthorityMetadataResponse;
            };
            QueryDenomsFromCreatorRequest: {
                encode(message: _172.QueryDenomsFromCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomsFromCreatorRequest;
                fromPartial(object: any): _172.QueryDenomsFromCreatorRequest;
            };
            QueryDenomsFromCreatorResponse: {
                encode(message: _172.QueryDenomsFromCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.QueryDenomsFromCreatorResponse;
                fromPartial(object: any): _172.QueryDenomsFromCreatorResponse;
            };
            Params: {
                encode(_: _171.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.Params;
                fromPartial(_: any): _171.Params;
            };
            GenesisState: {
                encode(message: _170.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisState;
                fromPartial(object: any): _170.GenesisState;
            };
            GenesisDenom: {
                encode(message: _170.GenesisDenom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.GenesisDenom;
                fromPartial(object: any): _170.GenesisDenom;
            };
            DenomAuthorityMetadata: {
                encode(message: _169.DenomAuthorityMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.DenomAuthorityMetadata;
                fromPartial(object: any): _169.DenomAuthorityMetadata;
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
                    dex: _253.LCDQueryClient;
                    epoch: _254.LCDQueryClient;
                    mint: _255.LCDQueryClient;
                    nitro: _256.LCDQueryClient;
                    oracle: _257.LCDQueryClient;
                    tokenfactory: _258.LCDQueryClient;
                };
            };
        }>;
    };
}
