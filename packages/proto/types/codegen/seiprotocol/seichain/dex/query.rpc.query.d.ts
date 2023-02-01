import { Rpc } from "@osmonauts/helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLongBookRequest, QueryGetLongBookResponse, QueryAllLongBookRequest, QueryAllLongBookResponse, QueryGetShortBookRequest, QueryGetShortBookResponse, QueryAllShortBookRequest, QueryAllShortBookResponse, QueryGetPriceRequest, QueryGetPriceResponse, QueryGetPricesRequest, QueryGetPricesResponse, QueryGetTwapsRequest, QueryGetTwapsResponse, QueryAssetMetadataRequest, QueryAssetMetadataResponse, QueryAssetListRequest, QueryAssetListResponse, QueryRegisteredPairsRequest, QueryRegisteredPairsResponse, QueryGetOrdersRequest, QueryGetOrdersResponse, QueryGetOrderByIDRequest, QueryGetOrderByIDResponse, QueryGetHistoricalPricesRequest, QueryGetHistoricalPricesResponse, QueryGetMarketSummaryRequest, QueryGetMarketSummaryResponse, QueryOrderSimulationRequest, QueryOrderSimulationResponse, QueryGetMatchResultRequest, QueryGetMatchResultResponse } from "./query";
/** Query defines the RPC service */
export interface Query {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse>;
    longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse>;
    shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse>;
    shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse>;
    getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
    getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse>;
    getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse>;
    assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse>;
    assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse>;
    getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse>;
    getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse>;
    getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse>;
    getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse>;
    getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse>;
    getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse>;
    getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse>;
    longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse>;
    shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse>;
    shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse>;
    getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
    getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse>;
    getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse>;
    assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse>;
    assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse>;
    getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse>;
    getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse>;
    getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse>;
    getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse>;
    getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse>;
    getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse>;
    getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse>;
    longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse>;
    shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse>;
    shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse>;
    getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
    getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse>;
    getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse>;
    assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse>;
    assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse>;
    getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse>;
    getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse>;
    getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse>;
    getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse>;
    getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse>;
    getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse>;
    getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse>;
};
