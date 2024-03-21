import { TxRpc } from '../types';
import { BinaryReader } from '../binary';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import {
	QueryParamsRequest,
	QueryParamsResponse,
	QueryGetLongBookRequest,
	QueryGetLongBookResponse,
	QueryAllLongBookRequest,
	QueryAllLongBookResponse,
	QueryGetShortBookRequest,
	QueryGetShortBookResponse,
	QueryAllShortBookRequest,
	QueryAllShortBookResponse,
	QueryGetPriceRequest,
	QueryGetPriceResponse,
	QueryGetLatestPriceRequest,
	QueryGetLatestPriceResponse,
	QueryGetPricesRequest,
	QueryGetPricesResponse,
	QueryGetTwapsRequest,
	QueryGetTwapsResponse,
	QueryAssetMetadataRequest,
	QueryAssetMetadataResponse,
	QueryAssetListRequest,
	QueryAssetListResponse,
	QueryRegisteredPairsRequest,
	QueryRegisteredPairsResponse,
	QueryRegisteredContractRequest,
	QueryRegisteredContractResponse,
	QueryGetOrdersRequest,
	QueryGetOrdersResponse,
	QueryGetOrderByIDRequest,
	QueryGetOrderByIDResponse,
	QueryGetHistoricalPricesRequest,
	QueryGetHistoricalPricesResponse,
	QueryGetMarketSummaryRequest,
	QueryGetMarketSummaryResponse,
	QueryOrderSimulationRequest,
	QueryOrderSimulationResponse,
	QueryGetMatchResultRequest,
	QueryGetMatchResultResponse,
	QueryGetOrderCountRequest,
	QueryGetOrderCountResponse
} from './query';
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
export class QueryClientImpl implements Query {
	private readonly rpc: TxRpc;
	constructor(rpc: TxRpc) {
		this.rpc = rpc;
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
		this.getOrderSimulation = this.getOrderSimulation.bind(this);
		this.getMatchResult = this.getMatchResult.bind(this);
		this.getOrderCount = this.getOrderCount.bind(this);
	}
	params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
		const data = QueryParamsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'Params', data);
		return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
	}
	longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse> {
		const data = QueryGetLongBookRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'LongBook', data);
		return promise.then((data) => QueryGetLongBookResponse.decode(new BinaryReader(data)));
	}
	longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse> {
		const data = QueryAllLongBookRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'LongBookAll', data);
		return promise.then((data) => QueryAllLongBookResponse.decode(new BinaryReader(data)));
	}
	shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse> {
		const data = QueryGetShortBookRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'ShortBook', data);
		return promise.then((data) => QueryGetShortBookResponse.decode(new BinaryReader(data)));
	}
	shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse> {
		const data = QueryAllShortBookRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'ShortBookAll', data);
		return promise.then((data) => QueryAllShortBookResponse.decode(new BinaryReader(data)));
	}
	getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse> {
		const data = QueryGetPriceRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetPrice', data);
		return promise.then((data) => QueryGetPriceResponse.decode(new BinaryReader(data)));
	}
	getLatestPrice(request: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponse> {
		const data = QueryGetLatestPriceRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetLatestPrice', data);
		return promise.then((data) => QueryGetLatestPriceResponse.decode(new BinaryReader(data)));
	}
	getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse> {
		const data = QueryGetPricesRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetPrices', data);
		return promise.then((data) => QueryGetPricesResponse.decode(new BinaryReader(data)));
	}
	getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse> {
		const data = QueryGetTwapsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetTwaps', data);
		return promise.then((data) => QueryGetTwapsResponse.decode(new BinaryReader(data)));
	}
	assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse> {
		const data = QueryAssetMetadataRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'AssetMetadata', data);
		return promise.then((data) => QueryAssetMetadataResponse.decode(new BinaryReader(data)));
	}
	assetList(request: QueryAssetListRequest = {}): Promise<QueryAssetListResponse> {
		const data = QueryAssetListRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'AssetList', data);
		return promise.then((data) => QueryAssetListResponse.decode(new BinaryReader(data)));
	}
	getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse> {
		const data = QueryRegisteredPairsRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetRegisteredPairs', data);
		return promise.then((data) => QueryRegisteredPairsResponse.decode(new BinaryReader(data)));
	}
	getRegisteredContract(request: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponse> {
		const data = QueryRegisteredContractRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetRegisteredContract', data);
		return promise.then((data) => QueryRegisteredContractResponse.decode(new BinaryReader(data)));
	}
	getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse> {
		const data = QueryGetOrdersRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetOrders', data);
		return promise.then((data) => QueryGetOrdersResponse.decode(new BinaryReader(data)));
	}
	getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse> {
		const data = QueryGetOrderByIDRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetOrder', data);
		return promise.then((data) => QueryGetOrderByIDResponse.decode(new BinaryReader(data)));
	}
	getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse> {
		const data = QueryGetHistoricalPricesRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetHistoricalPrices', data);
		return promise.then((data) => QueryGetHistoricalPricesResponse.decode(new BinaryReader(data)));
	}
	getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse> {
		const data = QueryGetMarketSummaryRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetMarketSummary', data);
		return promise.then((data) => QueryGetMarketSummaryResponse.decode(new BinaryReader(data)));
	}
	getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse> {
		const data = QueryOrderSimulationRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetOrderSimulation', data);
		return promise.then((data) => QueryOrderSimulationResponse.decode(new BinaryReader(data)));
	}
	getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse> {
		const data = QueryGetMatchResultRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetMatchResult', data);
		return promise.then((data) => QueryGetMatchResultResponse.decode(new BinaryReader(data)));
	}
	getOrderCount(request: QueryGetOrderCountRequest): Promise<QueryGetOrderCountResponse> {
		const data = QueryGetOrderCountRequest.encode(request).finish();
		const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetOrderCount', data);
		return promise.then((data) => QueryGetOrderCountResponse.decode(new BinaryReader(data)));
	}
}
export const createRpcQueryExtension = (base: QueryClient) => {
	const rpc = createProtobufRpcClient(base);
	const queryService = new QueryClientImpl(rpc);
	return {
		params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
			return queryService.params(request);
		},
		longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse> {
			return queryService.longBook(request);
		},
		longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse> {
			return queryService.longBookAll(request);
		},
		shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse> {
			return queryService.shortBook(request);
		},
		shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse> {
			return queryService.shortBookAll(request);
		},
		getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse> {
			return queryService.getPrice(request);
		},
		getLatestPrice(request: QueryGetLatestPriceRequest): Promise<QueryGetLatestPriceResponse> {
			return queryService.getLatestPrice(request);
		},
		getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse> {
			return queryService.getPrices(request);
		},
		getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse> {
			return queryService.getTwaps(request);
		},
		assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse> {
			return queryService.assetMetadata(request);
		},
		assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse> {
			return queryService.assetList(request);
		},
		getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse> {
			return queryService.getRegisteredPairs(request);
		},
		getRegisteredContract(request: QueryRegisteredContractRequest): Promise<QueryRegisteredContractResponse> {
			return queryService.getRegisteredContract(request);
		},
		getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse> {
			return queryService.getOrders(request);
		},
		getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse> {
			return queryService.getOrder(request);
		},
		getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse> {
			return queryService.getHistoricalPrices(request);
		},
		getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse> {
			return queryService.getMarketSummary(request);
		},
		getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse> {
			return queryService.getOrderSimulation(request);
		},
		getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse> {
			return queryService.getMatchResult(request);
		},
		getOrderCount(request: QueryGetOrderCountRequest): Promise<QueryGetOrderCountResponse> {
			return queryService.getOrderCount(request);
		}
	};
};
