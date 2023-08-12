import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryGetLongBookRequest, QueryGetLongBookResponse, QueryAllLongBookRequest, QueryAllLongBookResponse, QueryGetShortBookRequest, QueryGetShortBookResponse, QueryAllShortBookRequest, QueryAllShortBookResponse, QueryGetPriceRequest, QueryGetPriceResponse, QueryGetLatestPriceRequest, QueryGetLatestPriceResponse, QueryGetPricesRequest, QueryGetPricesResponse, QueryGetTwapsRequest, QueryGetTwapsResponse, QueryAssetMetadataRequest, QueryAssetMetadataResponse, QueryAssetListRequest, QueryAssetListResponse, QueryRegisteredPairsRequest, QueryRegisteredPairsResponse, QueryRegisteredContractRequest, QueryRegisteredContractResponse, QueryGetOrdersRequest, QueryGetOrdersResponse, QueryGetOrderByIDRequest, QueryGetOrderByIDResponse, QueryGetHistoricalPricesRequest, QueryGetHistoricalPricesResponse, QueryGetMarketSummaryRequest, QueryGetMarketSummaryResponse, QueryOrderSimulationRequest, QueryOrderSimulationResponse, QueryGetMatchResultRequest, QueryGetMatchResultResponse, QueryGetOrderCountRequest, QueryGetOrderCountResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a LongBook by id. */
    longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse>;
    /** Queries a list of LongBook items. */
    longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse>;
    /** Queries a ShortBook by id. */
    shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse>;
    /** Queries a list of ShortBook items. */
    shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse>;
    getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
    getLatestPrice(request: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponse>;
    getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse>;
    getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse>;
    /** Returns the metadata for a specified denom / display type */
    assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse>;
    /** Returns metadata for all the assets */
    assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse>;
    /** Returns all registered pairs for specified contract address */
    getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse>;
    /** Returns registered contract information */
    getRegisteredContract(request: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponse>;
    getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse>;
    getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse>;
    getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse>;
    getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse>;
    getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse>;
    getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse>;
    getOrderCount(request: QueryGetOrderCountRequest): Promise<QueryGetOrderCountResponse>;
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
    getLatestPrice(request: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponse>;
    getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse>;
    getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse>;
    assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse>;
    assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse>;
    getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse>;
    getRegisteredContract(request: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponse>;
    getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse>;
    getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse>;
    getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse>;
    getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse>;
    getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse>;
    getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse>;
    getOrderCount(request: QueryGetOrderCountRequest): Promise<QueryGetOrderCountResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse>;
    longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse>;
    shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse>;
    shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse>;
    getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
    getLatestPrice(request: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponse>;
    getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse>;
    getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse>;
    assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse>;
    assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse>;
    getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse>;
    getRegisteredContract(request: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponse>;
    getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse>;
    getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse>;
    getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse>;
    getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse>;
    getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse>;
    getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse>;
    getOrderCount(request: QueryGetOrderCountRequest): Promise<QueryGetOrderCountResponse>;
};
