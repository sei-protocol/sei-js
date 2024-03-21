import { setPaginationParams } from '../helpers';
import { LCDClient } from '@cosmology/lcd';
import {
	QueryParamsRequest,
	QueryParamsResponseSDKType,
	QueryGetLongBookRequest,
	QueryGetLongBookResponseSDKType,
	QueryAllLongBookRequest,
	QueryAllLongBookResponseSDKType,
	QueryGetShortBookRequest,
	QueryGetShortBookResponseSDKType,
	QueryAllShortBookRequest,
	QueryAllShortBookResponseSDKType,
	QueryGetPriceRequest,
	QueryGetPriceResponseSDKType,
	QueryGetLatestPriceRequest,
	QueryGetLatestPriceResponseSDKType,
	QueryGetPricesRequest,
	QueryGetPricesResponseSDKType,
	QueryGetTwapsRequest,
	QueryGetTwapsResponseSDKType,
	QueryAssetMetadataRequest,
	QueryAssetMetadataResponseSDKType,
	QueryAssetListRequest,
	QueryAssetListResponseSDKType,
	QueryRegisteredPairsRequest,
	QueryRegisteredPairsResponseSDKType,
	QueryRegisteredContractRequest,
	QueryRegisteredContractResponseSDKType,
	QueryGetOrdersRequest,
	QueryGetOrdersResponseSDKType,
	QueryGetOrderByIDRequest,
	QueryGetOrderByIDResponseSDKType,
	QueryGetHistoricalPricesRequest,
	QueryGetHistoricalPricesResponseSDKType,
	QueryGetMarketSummaryRequest,
	QueryGetMarketSummaryResponseSDKType
} from './query';
export class LCDQueryClient {
	req: LCDClient;
	constructor({ requestClient }: { requestClient: LCDClient }) {
		this.req = requestClient;
		this.params = this.params.bind(this);
		this.longBook = this.longBook.bind(this);
		this.longBookAll = this.longBookAll.bind(this);
		this.shortBook = this.shortBook.bind(this);
		this.shortBookAll = this.shortBookAll.bind(this);
		this.getPrice = this.getPrice.bind(this);
		this.getLatestPrice = this.getLatestPrice.bind(this);
		this.getPrices = this.getPrices.bind(this);
		this.getTwaps = this.getTwaps.bind(this);
		this.assetMetadata = this.assetMetadata.bind(this);
		this.assetList = this.assetList.bind(this);
		this.getRegisteredPairs = this.getRegisteredPairs.bind(this);
		this.getRegisteredContract = this.getRegisteredContract.bind(this);
		this.getOrders = this.getOrders.bind(this);
		this.getOrder = this.getOrder.bind(this);
		this.getHistoricalPrices = this.getHistoricalPrices.bind(this);
		this.getMarketSummary = this.getMarketSummary.bind(this);
	}
	/* Parameters queries the parameters of the module. */
	async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/params`;
		return await this.req.get<QueryParamsResponseSDKType>(endpoint);
	}
	/* Queries a LongBook by id. */
	async longBook(params: QueryGetLongBookRequest): Promise<QueryGetLongBookResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/long_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.price}`;
		return await this.req.get<QueryGetLongBookResponseSDKType>(endpoint);
	}
	/* Queries a list of LongBook items. */
	async longBookAll(params: QueryAllLongBookRequest): Promise<QueryAllLongBookResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.pagination !== 'undefined') {
			setPaginationParams(options, params.pagination);
		}
		const endpoint = `sei-protocol/seichain/dex/long_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
		return await this.req.get<QueryAllLongBookResponseSDKType>(endpoint, options);
	}
	/* Queries a ShortBook by id. */
	async shortBook(params: QueryGetShortBookRequest): Promise<QueryGetShortBookResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/short_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.price}`;
		return await this.req.get<QueryGetShortBookResponseSDKType>(endpoint);
	}
	/* Queries a list of ShortBook items. */
	async shortBookAll(params: QueryAllShortBookRequest): Promise<QueryAllShortBookResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.pagination !== 'undefined') {
			setPaginationParams(options, params.pagination);
		}
		const endpoint = `sei-protocol/seichain/dex/short_book/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
		return await this.req.get<QueryAllShortBookResponseSDKType>(endpoint, options);
	}
	/* GetPrice */
	async getPrice(params: QueryGetPriceRequest): Promise<QueryGetPriceResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_price/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.timestamp}`;
		return await this.req.get<QueryGetPriceResponseSDKType>(endpoint);
	}
	/* GetLatestPrice */
	async getLatestPrice(params: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_latest_price/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
		return await this.req.get<QueryGetLatestPriceResponseSDKType>(endpoint);
	}
	/* GetPrices */
	async getPrices(params: QueryGetPricesRequest): Promise<QueryGetPricesResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_prices/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}`;
		return await this.req.get<QueryGetPricesResponseSDKType>(endpoint);
	}
	/* GetTwaps */
	async getTwaps(params: QueryGetTwapsRequest): Promise<QueryGetTwapsResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_twaps/${params.contractAddr}/${params.lookbackSeconds}`;
		return await this.req.get<QueryGetTwapsResponseSDKType>(endpoint);
	}
	/* Returns the metadata for a specified denom / display type */
	async assetMetadata(params: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/asset_list/${params.denom}`;
		return await this.req.get<QueryAssetMetadataResponseSDKType>(endpoint);
	}
	/* Returns metadata for all the assets */
	async assetList(_params: QueryAssetListRequest = {}): Promise<QueryAssetListResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/asset_list`;
		return await this.req.get<QueryAssetListResponseSDKType>(endpoint);
	}
	/* Returns all registered pairs for specified contract address */
	async getRegisteredPairs(params: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponseSDKType> {
		const options: any = {
			params: {}
		};
		if (typeof params?.contractAddr !== 'undefined') {
			options.params.contractAddr = params.contractAddr;
		}
		const endpoint = `sei-protocol/seichain/dex/registered_pairs`;
		return await this.req.get<QueryRegisteredPairsResponseSDKType>(endpoint, options);
	}
	/* Returns registered contract information */
	async getRegisteredContract(params: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/registered_contract/${params.contractAddr}`;
		return await this.req.get<QueryRegisteredContractResponseSDKType>(endpoint);
	}
	/* GetOrders */
	async getOrders(params: QueryGetOrdersRequest): Promise<QueryGetOrdersResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_orders/${params.contractAddr}/${params.account}`;
		return await this.req.get<QueryGetOrdersResponseSDKType>(endpoint);
	}
	/* GetOrder */
	async getOrder(params: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_order_by_id/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.id}`;
		return await this.req.get<QueryGetOrderByIDResponseSDKType>(endpoint);
	}
	/* GetHistoricalPrices */
	async getHistoricalPrices(params: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_historical_prices/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.periodLengthInSeconds}/${params.numOfPeriods}`;
		return await this.req.get<QueryGetHistoricalPricesResponseSDKType>(endpoint);
	}
	/* GetMarketSummary */
	async getMarketSummary(params: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponseSDKType> {
		const endpoint = `sei-protocol/seichain/dex/get_market_summary/${params.contractAddr}/${params.priceDenom}/${params.assetDenom}/${params.lookbackInSeconds}`;
		return await this.req.get<QueryGetMarketSummaryResponseSDKType>(endpoint);
	}
}
