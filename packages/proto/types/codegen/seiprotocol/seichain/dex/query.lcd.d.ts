import { LCDClient } from "@osmonauts/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetLongBookRequest, QueryGetLongBookResponseSDKType, QueryAllLongBookRequest, QueryAllLongBookResponseSDKType, QueryGetShortBookRequest, QueryGetShortBookResponseSDKType, QueryAllShortBookRequest, QueryAllShortBookResponseSDKType, QueryGetPriceRequest, QueryGetPriceResponseSDKType, QueryGetLatestPriceRequest, QueryGetLatestPriceResponseSDKType, QueryGetPricesRequest, QueryGetPricesResponseSDKType, QueryGetTwapsRequest, QueryGetTwapsResponseSDKType, QueryAssetMetadataRequest, QueryAssetMetadataResponseSDKType, QueryAssetListRequest, QueryAssetListResponseSDKType, QueryRegisteredPairsRequest, QueryRegisteredPairsResponseSDKType, QueryRegisteredContractRequest, QueryRegisteredContractResponseSDKType, QueryGetOrdersRequest, QueryGetOrdersResponseSDKType, QueryGetOrderByIDRequest, QueryGetOrderByIDResponseSDKType, QueryGetHistoricalPricesRequest, QueryGetHistoricalPricesResponseSDKType, QueryGetMarketSummaryRequest, QueryGetMarketSummaryResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    longBook(params: QueryGetLongBookRequest): Promise<QueryGetLongBookResponseSDKType>;
    longBookAll(params: QueryAllLongBookRequest): Promise<QueryAllLongBookResponseSDKType>;
    shortBook(params: QueryGetShortBookRequest): Promise<QueryGetShortBookResponseSDKType>;
    shortBookAll(params: QueryAllShortBookRequest): Promise<QueryAllShortBookResponseSDKType>;
    getPrice(params: QueryGetPriceRequest): Promise<QueryGetPriceResponseSDKType>;
    getLatestPrice(params: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponseSDKType>;
    getPrices(params: QueryGetPricesRequest): Promise<QueryGetPricesResponseSDKType>;
    getTwaps(params: QueryGetTwapsRequest): Promise<QueryGetTwapsResponseSDKType>;
    assetMetadata(params: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponseSDKType>;
    assetList(_params?: QueryAssetListRequest): Promise<QueryAssetListResponseSDKType>;
    getRegisteredPairs(params: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponseSDKType>;
    getRegisteredContract(params: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponseSDKType>;
    getOrders(params: QueryGetOrdersRequest): Promise<QueryGetOrdersResponseSDKType>;
    getOrder(params: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponseSDKType>;
    getHistoricalPrices(params: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponseSDKType>;
    getMarketSummary(params: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponseSDKType>;
}
