import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Order, OrderSDKType } from "./order";
import { PositionDirection } from "./enums";
import { Params, ParamsSDKType } from "./params";
import { LongBook, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookSDKType } from "./short_book";
import { Price, PriceSDKType, PriceCandlestick, PriceCandlestickSDKType } from "./price";
import { Twap, TwapSDKType } from "./twap";
import { AssetMetadata, AssetMetadataSDKType } from "./asset_list";
import { Pair, PairSDKType } from "./pair";
import { ContractInfoV2, ContractInfoV2SDKType } from "./contract";
import { MatchResult, MatchResultSDKType } from "./match_result";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGetLongBookRequest {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetLongBookRequestSDKType {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetLongBookResponse {
    LongBook: LongBook;
}
export interface QueryGetLongBookResponseSDKType {
    LongBook: LongBookSDKType;
}
export interface QueryAllLongBookRequest {
    pagination: PageRequest;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllLongBookRequestSDKType {
    pagination: PageRequestSDKType;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllLongBookResponse {
    LongBook: LongBook[];
    pagination: PageResponse;
}
export interface QueryAllLongBookResponseSDKType {
    LongBook: LongBookSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetShortBookRequest {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetShortBookRequestSDKType {
    price: string;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryGetShortBookResponse {
    ShortBook: ShortBook;
}
export interface QueryGetShortBookResponseSDKType {
    ShortBook: ShortBookSDKType;
}
export interface QueryAllShortBookRequest {
    pagination: PageRequest;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllShortBookRequestSDKType {
    pagination: PageRequestSDKType;
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
}
export interface QueryAllShortBookResponse {
    ShortBook: ShortBook[];
    pagination: PageResponse;
}
export interface QueryAllShortBookResponseSDKType {
    ShortBook: ShortBookSDKType[];
    pagination: PageResponseSDKType;
}
export interface QueryGetPricesRequest {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetPricesRequestSDKType {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetPricesResponse {
    prices: Price[];
}
export interface QueryGetPricesResponseSDKType {
    prices: PriceSDKType[];
}
export interface QueryGetPriceRequest {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
    timestamp: Long;
}
export interface QueryGetPriceRequestSDKType {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
    timestamp: Long;
}
export interface QueryGetPriceResponse {
    price: Price;
    found: boolean;
}
export interface QueryGetPriceResponseSDKType {
    price: PriceSDKType;
    found: boolean;
}
export interface QueryGetLatestPriceRequest {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetLatestPriceRequestSDKType {
    priceDenom: string;
    assetDenom: string;
    contractAddr: string;
}
export interface QueryGetLatestPriceResponse {
    price: Price;
}
export interface QueryGetLatestPriceResponseSDKType {
    price: PriceSDKType;
}
export interface QueryGetTwapsRequest {
    contractAddr: string;
    lookbackSeconds: Long;
}
export interface QueryGetTwapsRequestSDKType {
    contractAddr: string;
    lookbackSeconds: Long;
}
export interface QueryGetTwapsResponse {
    twaps: Twap[];
}
export interface QueryGetTwapsResponseSDKType {
    twaps: TwapSDKType[];
}
export interface QueryAssetListRequest {
}
export interface QueryAssetListRequestSDKType {
}
export interface QueryAssetListResponse {
    assetList: AssetMetadata[];
}
export interface QueryAssetListResponseSDKType {
    assetList: AssetMetadataSDKType[];
}
export interface QueryAssetMetadataRequest {
    denom: string;
}
export interface QueryAssetMetadataRequestSDKType {
    denom: string;
}
export interface QueryAssetMetadataResponse {
    metadata: AssetMetadata;
}
export interface QueryAssetMetadataResponseSDKType {
    metadata: AssetMetadataSDKType;
}
export interface QueryRegisteredPairsRequest {
    contractAddr: string;
}
export interface QueryRegisteredPairsRequestSDKType {
    contractAddr: string;
}
export interface QueryRegisteredPairsResponse {
    pairs: Pair[];
}
export interface QueryRegisteredPairsResponseSDKType {
    pairs: PairSDKType[];
}
export interface QueryRegisteredContractRequest {
    contractAddr: string;
}
export interface QueryRegisteredContractRequestSDKType {
    contractAddr: string;
}
export interface QueryRegisteredContractResponse {
    contractInfo: ContractInfoV2;
}
export interface QueryRegisteredContractResponseSDKType {
    contract_info: ContractInfoV2SDKType;
}
export interface QueryGetOrdersRequest {
    contractAddr: string;
    account: string;
}
export interface QueryGetOrdersRequestSDKType {
    contractAddr: string;
    account: string;
}
export interface QueryGetOrdersResponse {
    orders: Order[];
}
export interface QueryGetOrdersResponseSDKType {
    orders: OrderSDKType[];
}
export interface QueryGetOrderByIDRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    id: Long;
}
export interface QueryGetOrderByIDRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    id: Long;
}
export interface QueryGetOrderByIDResponse {
    order: Order;
}
export interface QueryGetOrderByIDResponseSDKType {
    order: OrderSDKType;
}
export interface QueryGetHistoricalPricesRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    periodLengthInSeconds: Long;
    numOfPeriods: Long;
}
export interface QueryGetHistoricalPricesRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    periodLengthInSeconds: Long;
    numOfPeriods: Long;
}
export interface QueryGetHistoricalPricesResponse {
    prices: PriceCandlestick[];
}
export interface QueryGetHistoricalPricesResponseSDKType {
    prices: PriceCandlestickSDKType[];
}
export interface QueryGetMarketSummaryRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    lookbackInSeconds: Long;
}
export interface QueryGetMarketSummaryRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    lookbackInSeconds: Long;
}
export interface QueryGetMarketSummaryResponse {
    totalVolume: string;
    totalVolumeNotional: string;
    highPrice: string;
    lowPrice: string;
    lastPrice: string;
}
export interface QueryGetMarketSummaryResponseSDKType {
    totalVolume: string;
    totalVolumeNotional: string;
    highPrice: string;
    lowPrice: string;
    lastPrice: string;
}
export interface QueryOrderSimulationRequest {
    order: Order;
    contractAddr: string;
}
export interface QueryOrderSimulationRequestSDKType {
    order: OrderSDKType;
    contractAddr: string;
}
export interface QueryOrderSimulationResponse {
    ExecutedQuantity: string;
}
export interface QueryOrderSimulationResponseSDKType {
    ExecutedQuantity: string;
}
export interface QueryGetMatchResultRequest {
    contractAddr: string;
}
export interface QueryGetMatchResultRequestSDKType {
    contractAddr: string;
}
export interface QueryGetMatchResultResponse {
    result: MatchResult;
}
export interface QueryGetMatchResultResponseSDKType {
    result: MatchResultSDKType;
}
export interface QueryGetOrderCountRequest {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    price: string;
    positionDirection: PositionDirection;
}
export interface QueryGetOrderCountRequestSDKType {
    contractAddr: string;
    priceDenom: string;
    assetDenom: string;
    price: string;
    positionDirection: PositionDirection;
}
export interface QueryGetOrderCountResponse {
    count: Long;
}
export interface QueryGetOrderCountResponseSDKType {
    count: Long;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetLongBookRequest: {
    encode(message: QueryGetLongBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLongBookRequest;
    fromPartial(object: DeepPartial<QueryGetLongBookRequest>): QueryGetLongBookRequest;
};
export declare const QueryGetLongBookResponse: {
    encode(message: QueryGetLongBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLongBookResponse;
    fromPartial(object: DeepPartial<QueryGetLongBookResponse>): QueryGetLongBookResponse;
};
export declare const QueryAllLongBookRequest: {
    encode(message: QueryAllLongBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLongBookRequest;
    fromPartial(object: DeepPartial<QueryAllLongBookRequest>): QueryAllLongBookRequest;
};
export declare const QueryAllLongBookResponse: {
    encode(message: QueryAllLongBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLongBookResponse;
    fromPartial(object: DeepPartial<QueryAllLongBookResponse>): QueryAllLongBookResponse;
};
export declare const QueryGetShortBookRequest: {
    encode(message: QueryGetShortBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetShortBookRequest;
    fromPartial(object: DeepPartial<QueryGetShortBookRequest>): QueryGetShortBookRequest;
};
export declare const QueryGetShortBookResponse: {
    encode(message: QueryGetShortBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetShortBookResponse;
    fromPartial(object: DeepPartial<QueryGetShortBookResponse>): QueryGetShortBookResponse;
};
export declare const QueryAllShortBookRequest: {
    encode(message: QueryAllShortBookRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllShortBookRequest;
    fromPartial(object: DeepPartial<QueryAllShortBookRequest>): QueryAllShortBookRequest;
};
export declare const QueryAllShortBookResponse: {
    encode(message: QueryAllShortBookResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllShortBookResponse;
    fromPartial(object: DeepPartial<QueryAllShortBookResponse>): QueryAllShortBookResponse;
};
export declare const QueryGetPricesRequest: {
    encode(message: QueryGetPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricesRequest;
    fromPartial(object: DeepPartial<QueryGetPricesRequest>): QueryGetPricesRequest;
};
export declare const QueryGetPricesResponse: {
    encode(message: QueryGetPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricesResponse;
    fromPartial(object: DeepPartial<QueryGetPricesResponse>): QueryGetPricesResponse;
};
export declare const QueryGetPriceRequest: {
    encode(message: QueryGetPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPriceRequest;
    fromPartial(object: DeepPartial<QueryGetPriceRequest>): QueryGetPriceRequest;
};
export declare const QueryGetPriceResponse: {
    encode(message: QueryGetPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPriceResponse;
    fromPartial(object: DeepPartial<QueryGetPriceResponse>): QueryGetPriceResponse;
};
export declare const QueryGetLatestPriceRequest: {
    encode(message: QueryGetLatestPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestPriceRequest;
    fromPartial(object: DeepPartial<QueryGetLatestPriceRequest>): QueryGetLatestPriceRequest;
};
export declare const QueryGetLatestPriceResponse: {
    encode(message: QueryGetLatestPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestPriceResponse;
    fromPartial(object: DeepPartial<QueryGetLatestPriceResponse>): QueryGetLatestPriceResponse;
};
export declare const QueryGetTwapsRequest: {
    encode(message: QueryGetTwapsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTwapsRequest;
    fromPartial(object: DeepPartial<QueryGetTwapsRequest>): QueryGetTwapsRequest;
};
export declare const QueryGetTwapsResponse: {
    encode(message: QueryGetTwapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTwapsResponse;
    fromPartial(object: DeepPartial<QueryGetTwapsResponse>): QueryGetTwapsResponse;
};
export declare const QueryAssetListRequest: {
    encode(_: QueryAssetListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetListRequest;
    fromPartial(_: DeepPartial<QueryAssetListRequest>): QueryAssetListRequest;
};
export declare const QueryAssetListResponse: {
    encode(message: QueryAssetListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetListResponse;
    fromPartial(object: DeepPartial<QueryAssetListResponse>): QueryAssetListResponse;
};
export declare const QueryAssetMetadataRequest: {
    encode(message: QueryAssetMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMetadataRequest;
    fromPartial(object: DeepPartial<QueryAssetMetadataRequest>): QueryAssetMetadataRequest;
};
export declare const QueryAssetMetadataResponse: {
    encode(message: QueryAssetMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMetadataResponse;
    fromPartial(object: DeepPartial<QueryAssetMetadataResponse>): QueryAssetMetadataResponse;
};
export declare const QueryRegisteredPairsRequest: {
    encode(message: QueryRegisteredPairsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredPairsRequest;
    fromPartial(object: DeepPartial<QueryRegisteredPairsRequest>): QueryRegisteredPairsRequest;
};
export declare const QueryRegisteredPairsResponse: {
    encode(message: QueryRegisteredPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredPairsResponse;
    fromPartial(object: DeepPartial<QueryRegisteredPairsResponse>): QueryRegisteredPairsResponse;
};
export declare const QueryRegisteredContractRequest: {
    encode(message: QueryRegisteredContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredContractRequest;
    fromPartial(object: DeepPartial<QueryRegisteredContractRequest>): QueryRegisteredContractRequest;
};
export declare const QueryRegisteredContractResponse: {
    encode(message: QueryRegisteredContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredContractResponse;
    fromPartial(object: DeepPartial<QueryRegisteredContractResponse>): QueryRegisteredContractResponse;
};
export declare const QueryGetOrdersRequest: {
    encode(message: QueryGetOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrdersRequest;
    fromPartial(object: DeepPartial<QueryGetOrdersRequest>): QueryGetOrdersRequest;
};
export declare const QueryGetOrdersResponse: {
    encode(message: QueryGetOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrdersResponse;
    fromPartial(object: DeepPartial<QueryGetOrdersResponse>): QueryGetOrdersResponse;
};
export declare const QueryGetOrderByIDRequest: {
    encode(message: QueryGetOrderByIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderByIDRequest;
    fromPartial(object: DeepPartial<QueryGetOrderByIDRequest>): QueryGetOrderByIDRequest;
};
export declare const QueryGetOrderByIDResponse: {
    encode(message: QueryGetOrderByIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderByIDResponse;
    fromPartial(object: DeepPartial<QueryGetOrderByIDResponse>): QueryGetOrderByIDResponse;
};
export declare const QueryGetHistoricalPricesRequest: {
    encode(message: QueryGetHistoricalPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoricalPricesRequest;
    fromPartial(object: DeepPartial<QueryGetHistoricalPricesRequest>): QueryGetHistoricalPricesRequest;
};
export declare const QueryGetHistoricalPricesResponse: {
    encode(message: QueryGetHistoricalPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoricalPricesResponse;
    fromPartial(object: DeepPartial<QueryGetHistoricalPricesResponse>): QueryGetHistoricalPricesResponse;
};
export declare const QueryGetMarketSummaryRequest: {
    encode(message: QueryGetMarketSummaryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketSummaryRequest;
    fromPartial(object: DeepPartial<QueryGetMarketSummaryRequest>): QueryGetMarketSummaryRequest;
};
export declare const QueryGetMarketSummaryResponse: {
    encode(message: QueryGetMarketSummaryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketSummaryResponse;
    fromPartial(object: DeepPartial<QueryGetMarketSummaryResponse>): QueryGetMarketSummaryResponse;
};
export declare const QueryOrderSimulationRequest: {
    encode(message: QueryOrderSimulationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderSimulationRequest;
    fromPartial(object: DeepPartial<QueryOrderSimulationRequest>): QueryOrderSimulationRequest;
};
export declare const QueryOrderSimulationResponse: {
    encode(message: QueryOrderSimulationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderSimulationResponse;
    fromPartial(object: DeepPartial<QueryOrderSimulationResponse>): QueryOrderSimulationResponse;
};
export declare const QueryGetMatchResultRequest: {
    encode(message: QueryGetMatchResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMatchResultRequest;
    fromPartial(object: DeepPartial<QueryGetMatchResultRequest>): QueryGetMatchResultRequest;
};
export declare const QueryGetMatchResultResponse: {
    encode(message: QueryGetMatchResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMatchResultResponse;
    fromPartial(object: DeepPartial<QueryGetMatchResultResponse>): QueryGetMatchResultResponse;
};
export declare const QueryGetOrderCountRequest: {
    encode(message: QueryGetOrderCountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderCountRequest;
    fromPartial(object: DeepPartial<QueryGetOrderCountRequest>): QueryGetOrderCountRequest;
};
export declare const QueryGetOrderCountResponse: {
    encode(message: QueryGetOrderCountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderCountResponse;
    fromPartial(object: DeepPartial<QueryGetOrderCountResponse>): QueryGetOrderCountResponse;
};
