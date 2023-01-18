import { Rpc } from '@osmonauts/helpers';
import * as _m0 from 'protobufjs/minimal';
import { QueryClient, createProtobufRpcClient } from '@cosmjs/stargate';
import { QueryParamsRequest, QueryParamsResponse, QueryGetLongBookRequest, QueryGetLongBookResponse, QueryAllLongBookRequest, QueryAllLongBookResponse, QueryGetShortBookRequest, QueryGetShortBookResponse, QueryAllShortBookRequest, QueryAllShortBookResponse, QueryGetPriceRequest, QueryGetPriceResponse, QueryGetPricesRequest, QueryGetPricesResponse, QueryGetTwapsRequest, QueryGetTwapsResponse, QueryAssetMetadataRequest, QueryAssetMetadataResponse, QueryAssetListRequest, QueryAssetListResponse, QueryRegisteredPairsRequest, QueryRegisteredPairsResponse, QueryGetOrdersRequest, QueryGetOrdersResponse, QueryGetOrderByIDRequest, QueryGetOrderByIDResponse, QueryGetHistoricalPricesRequest, QueryGetHistoricalPricesResponse, QueryGetMarketSummaryRequest, QueryGetMarketSummaryResponse, QueryOrderSimulationRequest, QueryOrderSimulationResponse, QueryGetMatchResultRequest, QueryGetMatchResultResponse } from './query';
/** Query defines the RPC service */

export interface Query {
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /*Parameters queries the parameters of the module.*/

  longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse>;
  /*Queries a LongBook by id.*/

  longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse>;
  /*Queries a list of LongBook items.*/

  shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse>;
  /*Queries a ShortBook by id.*/

  shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse>;
  /*Queries a list of ShortBook items.*/

  getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse>;
  /*null*/

  getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse>;
  /*null*/

  getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse>;
  /*null*/

  assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse>;
  /*Returns the metadata for a specified denom / display type*/

  assetList(request?: QueryAssetListRequest): Promise<QueryAssetListResponse>;
  /*Returns metadata for all the assets*/

  getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse>;
  /*Returns all registered pairs for specified contract address*/

  getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse>;
  /*null*/

  getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse>;
  /*null*/

  getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse>;
  /*null*/

  getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse>;
  /*null*/

  getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse>;
  /*null*/

  getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.longBook = this.longBook.bind(this);
    this.longBookAll = this.longBookAll.bind(this);
    this.shortBook = this.shortBook.bind(this);
    this.shortBookAll = this.shortBookAll.bind(this);
    this.getPrice = this.getPrice.bind(this);
    this.getPrices = this.getPrices.bind(this);
    this.getTwaps = this.getTwaps.bind(this);
    this.assetMetadata = this.assetMetadata.bind(this);
    this.assetList = this.assetList.bind(this);
    this.getRegisteredPairs = this.getRegisteredPairs.bind(this);
    this.getOrders = this.getOrders.bind(this);
    this.getOrder = this.getOrder.bind(this);
    this.getHistoricalPrices = this.getHistoricalPrices.bind(this);
    this.getMarketSummary = this.getMarketSummary.bind(this);
    this.getOrderSimulation = this.getOrderSimulation.bind(this);
    this.getMatchResult = this.getMatchResult.bind(this);
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'Params', data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  longBook(request: QueryGetLongBookRequest): Promise<QueryGetLongBookResponse> {
    const data = QueryGetLongBookRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'LongBook', data);
    return promise.then(data => QueryGetLongBookResponse.decode(new _m0.Reader(data)));
  }

  longBookAll(request: QueryAllLongBookRequest): Promise<QueryAllLongBookResponse> {
    const data = QueryAllLongBookRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'LongBookAll', data);
    return promise.then(data => QueryAllLongBookResponse.decode(new _m0.Reader(data)));
  }

  shortBook(request: QueryGetShortBookRequest): Promise<QueryGetShortBookResponse> {
    const data = QueryGetShortBookRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'ShortBook', data);
    return promise.then(data => QueryGetShortBookResponse.decode(new _m0.Reader(data)));
  }

  shortBookAll(request: QueryAllShortBookRequest): Promise<QueryAllShortBookResponse> {
    const data = QueryAllShortBookRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'ShortBookAll', data);
    return promise.then(data => QueryAllShortBookResponse.decode(new _m0.Reader(data)));
  }

  getPrice(request: QueryGetPriceRequest): Promise<QueryGetPriceResponse> {
    const data = QueryGetPriceRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetPrice', data);
    return promise.then(data => QueryGetPriceResponse.decode(new _m0.Reader(data)));
  }

  getPrices(request: QueryGetPricesRequest): Promise<QueryGetPricesResponse> {
    const data = QueryGetPricesRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetPrices', data);
    return promise.then(data => QueryGetPricesResponse.decode(new _m0.Reader(data)));
  }

  getTwaps(request: QueryGetTwapsRequest): Promise<QueryGetTwapsResponse> {
    const data = QueryGetTwapsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetTwaps', data);
    return promise.then(data => QueryGetTwapsResponse.decode(new _m0.Reader(data)));
  }

  assetMetadata(request: QueryAssetMetadataRequest): Promise<QueryAssetMetadataResponse> {
    const data = QueryAssetMetadataRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'AssetMetadata', data);
    return promise.then(data => QueryAssetMetadataResponse.decode(new _m0.Reader(data)));
  }

  assetList(request: QueryAssetListRequest = {}): Promise<QueryAssetListResponse> {
    const data = QueryAssetListRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'AssetList', data);
    return promise.then(data => QueryAssetListResponse.decode(new _m0.Reader(data)));
  }

  getRegisteredPairs(request: QueryRegisteredPairsRequest): Promise<QueryRegisteredPairsResponse> {
    const data = QueryRegisteredPairsRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetRegisteredPairs', data);
    return promise.then(data => QueryRegisteredPairsResponse.decode(new _m0.Reader(data)));
  }

  getOrders(request: QueryGetOrdersRequest): Promise<QueryGetOrdersResponse> {
    const data = QueryGetOrdersRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetOrders', data);
    return promise.then(data => QueryGetOrdersResponse.decode(new _m0.Reader(data)));
  }

  getOrder(request: QueryGetOrderByIDRequest): Promise<QueryGetOrderByIDResponse> {
    const data = QueryGetOrderByIDRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetOrder', data);
    return promise.then(data => QueryGetOrderByIDResponse.decode(new _m0.Reader(data)));
  }

  getHistoricalPrices(request: QueryGetHistoricalPricesRequest): Promise<QueryGetHistoricalPricesResponse> {
    const data = QueryGetHistoricalPricesRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetHistoricalPrices', data);
    return promise.then(data => QueryGetHistoricalPricesResponse.decode(new _m0.Reader(data)));
  }

  getMarketSummary(request: QueryGetMarketSummaryRequest): Promise<QueryGetMarketSummaryResponse> {
    const data = QueryGetMarketSummaryRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetMarketSummary', data);
    return promise.then(data => QueryGetMarketSummaryResponse.decode(new _m0.Reader(data)));
  }

  getOrderSimulation(request: QueryOrderSimulationRequest): Promise<QueryOrderSimulationResponse> {
    const data = QueryOrderSimulationRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetOrderSimulation', data);
    return promise.then(data => QueryOrderSimulationResponse.decode(new _m0.Reader(data)));
  }

  getMatchResult(request: QueryGetMatchResultRequest): Promise<QueryGetMatchResultResponse> {
    const data = QueryGetMatchResultRequest.encode(request).finish();
    const promise = this.rpc.request('seiprotocol.seichain.dex.Query', 'GetMatchResult', data);
    return promise.then(data => QueryGetMatchResultResponse.decode(new _m0.Reader(data)));
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
    }

  };
};