import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Order, OrderSDKType } from "./order";
import { Params, ParamsSDKType } from "./params";
import { LongBook, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookSDKType } from "./short_book";
import { Price, PriceSDKType, PriceCandlestick, PriceCandlestickSDKType } from "./price";
import { Twap, TwapSDKType } from "./twap";
import { AssetMetadata, AssetMetadataSDKType } from "./asset_list";
import { Pair, PairSDKType } from "./pair";
import { MatchResult, MatchResultSDKType } from "./match_result";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponseSDKType {
  /** params holds all the parameters of this module. */
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
  pagination?: PageRequest;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllLongBookRequestSDKType {
  pagination?: PageRequestSDKType;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllLongBookResponse {
  LongBook: LongBook[];
  pagination?: PageResponse;
}
export interface QueryAllLongBookResponseSDKType {
  LongBook: LongBookSDKType[];
  pagination?: PageResponseSDKType;
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
  pagination?: PageRequest;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllShortBookRequestSDKType {
  pagination?: PageRequestSDKType;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllShortBookResponse {
  ShortBook: ShortBook[];
  pagination?: PageResponse;
}
export interface QueryAllShortBookResponseSDKType {
  ShortBook: ShortBookSDKType[];
  pagination?: PageResponseSDKType;
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
export interface QueryAssetListRequest {}
export interface QueryAssetListRequestSDKType {}
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
  contractAddr?: string;
}
export interface QueryRegisteredPairsRequestSDKType {
  contractAddr?: string;
}
export interface QueryRegisteredPairsResponse {
  pairs: Pair[];
}
export interface QueryRegisteredPairsResponseSDKType {
  pairs: PairSDKType[];
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

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBaseQueryGetLongBookRequest(): QueryGetLongBookRequest {
  return {
    price: "",
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}

export const QueryGetLongBookRequest = {
  encode(message: QueryGetLongBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLongBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLongBookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        case 3:
          message.priceDenom = reader.string();
          break;

        case 4:
          message.assetDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetLongBookRequest>): QueryGetLongBookRequest {
    const message = createBaseQueryGetLongBookRequest();
    message.price = object.price ?? "";
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  }

};

function createBaseQueryGetLongBookResponse(): QueryGetLongBookResponse {
  return {
    LongBook: undefined
  };
}

export const QueryGetLongBookResponse = {
  encode(message: QueryGetLongBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.LongBook !== undefined) {
      LongBook.encode(message.LongBook, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLongBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLongBookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.LongBook = LongBook.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetLongBookResponse>): QueryGetLongBookResponse {
    const message = createBaseQueryGetLongBookResponse();
    message.LongBook = object.LongBook !== undefined && object.LongBook !== null ? LongBook.fromPartial(object.LongBook) : undefined;
    return message;
  }

};

function createBaseQueryAllLongBookRequest(): QueryAllLongBookRequest {
  return {
    pagination: undefined,
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}

export const QueryAllLongBookRequest = {
  encode(message: QueryAllLongBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLongBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLongBookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        case 3:
          message.priceDenom = reader.string();
          break;

        case 4:
          message.assetDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllLongBookRequest>): QueryAllLongBookRequest {
    const message = createBaseQueryAllLongBookRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  }

};

function createBaseQueryAllLongBookResponse(): QueryAllLongBookResponse {
  return {
    LongBook: [],
    pagination: undefined
  };
}

export const QueryAllLongBookResponse = {
  encode(message: QueryAllLongBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.LongBook) {
      LongBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllLongBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLongBookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.LongBook.push(LongBook.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllLongBookResponse>): QueryAllLongBookResponse {
    const message = createBaseQueryAllLongBookResponse();
    message.LongBook = object.LongBook?.map(e => LongBook.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetShortBookRequest(): QueryGetShortBookRequest {
  return {
    price: "",
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}

export const QueryGetShortBookRequest = {
  encode(message: QueryGetShortBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetShortBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetShortBookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        case 3:
          message.priceDenom = reader.string();
          break;

        case 4:
          message.assetDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetShortBookRequest>): QueryGetShortBookRequest {
    const message = createBaseQueryGetShortBookRequest();
    message.price = object.price ?? "";
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  }

};

function createBaseQueryGetShortBookResponse(): QueryGetShortBookResponse {
  return {
    ShortBook: undefined
  };
}

export const QueryGetShortBookResponse = {
  encode(message: QueryGetShortBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ShortBook !== undefined) {
      ShortBook.encode(message.ShortBook, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetShortBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetShortBookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ShortBook = ShortBook.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetShortBookResponse>): QueryGetShortBookResponse {
    const message = createBaseQueryGetShortBookResponse();
    message.ShortBook = object.ShortBook !== undefined && object.ShortBook !== null ? ShortBook.fromPartial(object.ShortBook) : undefined;
    return message;
  }

};

function createBaseQueryAllShortBookRequest(): QueryAllShortBookRequest {
  return {
    pagination: undefined,
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}

export const QueryAllShortBookRequest = {
  encode(message: QueryAllShortBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllShortBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllShortBookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        case 3:
          message.priceDenom = reader.string();
          break;

        case 4:
          message.assetDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllShortBookRequest>): QueryAllShortBookRequest {
    const message = createBaseQueryAllShortBookRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  }

};

function createBaseQueryAllShortBookResponse(): QueryAllShortBookResponse {
  return {
    ShortBook: [],
    pagination: undefined
  };
}

export const QueryAllShortBookResponse = {
  encode(message: QueryAllShortBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ShortBook) {
      ShortBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllShortBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllShortBookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ShortBook.push(ShortBook.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAllShortBookResponse>): QueryAllShortBookResponse {
    const message = createBaseQueryAllShortBookResponse();
    message.ShortBook = object.ShortBook?.map(e => ShortBook.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetPricesRequest(): QueryGetPricesRequest {
  return {
    priceDenom: "",
    assetDenom: "",
    contractAddr: ""
  };
}

export const QueryGetPricesRequest = {
  encode(message: QueryGetPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }

    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPricesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;

        case 2:
          message.assetDenom = reader.string();
          break;

        case 3:
          message.contractAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetPricesRequest>): QueryGetPricesRequest {
    const message = createBaseQueryGetPricesRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.contractAddr = object.contractAddr ?? "";
    return message;
  }

};

function createBaseQueryGetPricesResponse(): QueryGetPricesResponse {
  return {
    prices: []
  };
}

export const QueryGetPricesResponse = {
  encode(message: QueryGetPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetPricesResponse>): QueryGetPricesResponse {
    const message = createBaseQueryGetPricesResponse();
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetPriceRequest(): QueryGetPriceRequest {
  return {
    priceDenom: "",
    assetDenom: "",
    contractAddr: "",
    timestamp: Long.UZERO
  };
}

export const QueryGetPriceRequest = {
  encode(message: QueryGetPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }

    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }

    if (!message.timestamp.isZero()) {
      writer.uint32(32).uint64(message.timestamp);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;

        case 2:
          message.assetDenom = reader.string();
          break;

        case 3:
          message.contractAddr = reader.string();
          break;

        case 4:
          message.timestamp = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetPriceRequest>): QueryGetPriceRequest {
    const message = createBaseQueryGetPriceRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.contractAddr = object.contractAddr ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetPriceResponse(): QueryGetPriceResponse {
  return {
    price: undefined,
    found: false
  };
}

export const QueryGetPriceResponse = {
  encode(message: QueryGetPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(10).fork()).ldelim();
    }

    if (message.found === true) {
      writer.uint32(16).bool(message.found);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = Price.decode(reader, reader.uint32());
          break;

        case 2:
          message.found = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetPriceResponse>): QueryGetPriceResponse {
    const message = createBaseQueryGetPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? Price.fromPartial(object.price) : undefined;
    message.found = object.found ?? false;
    return message;
  }

};

function createBaseQueryGetLatestPriceRequest(): QueryGetLatestPriceRequest {
  return {
    priceDenom: "",
    assetDenom: "",
    contractAddr: ""
  };
}

export const QueryGetLatestPriceRequest = {
  encode(message: QueryGetLatestPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }

    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLatestPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;

        case 2:
          message.assetDenom = reader.string();
          break;

        case 3:
          message.contractAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetLatestPriceRequest>): QueryGetLatestPriceRequest {
    const message = createBaseQueryGetLatestPriceRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.contractAddr = object.contractAddr ?? "";
    return message;
  }

};

function createBaseQueryGetLatestPriceResponse(): QueryGetLatestPriceResponse {
  return {
    price: undefined
  };
}

export const QueryGetLatestPriceResponse = {
  encode(message: QueryGetLatestPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLatestPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLatestPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = Price.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetLatestPriceResponse>): QueryGetLatestPriceResponse {
    const message = createBaseQueryGetLatestPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? Price.fromPartial(object.price) : undefined;
    return message;
  }

};

function createBaseQueryGetTwapsRequest(): QueryGetTwapsRequest {
  return {
    contractAddr: "",
    lookbackSeconds: Long.UZERO
  };
}

export const QueryGetTwapsRequest = {
  encode(message: QueryGetTwapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }

    if (!message.lookbackSeconds.isZero()) {
      writer.uint32(16).uint64(message.lookbackSeconds);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTwapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTwapsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        case 2:
          message.lookbackSeconds = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTwapsRequest>): QueryGetTwapsRequest {
    const message = createBaseQueryGetTwapsRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetTwapsResponse(): QueryGetTwapsResponse {
  return {
    twaps: []
  };
}

export const QueryGetTwapsResponse = {
  encode(message: QueryGetTwapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.twaps) {
      Twap.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetTwapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTwapsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.twaps.push(Twap.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetTwapsResponse>): QueryGetTwapsResponse {
    const message = createBaseQueryGetTwapsResponse();
    message.twaps = object.twaps?.map(e => Twap.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAssetListRequest(): QueryAssetListRequest {
  return {};
}

export const QueryAssetListRequest = {
  encode(_: QueryAssetListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetListRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<QueryAssetListRequest>): QueryAssetListRequest {
    const message = createBaseQueryAssetListRequest();
    return message;
  }

};

function createBaseQueryAssetListResponse(): QueryAssetListResponse {
  return {
    assetList: []
  };
}

export const QueryAssetListResponse = {
  encode(message: QueryAssetListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assetList) {
      AssetMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assetList.push(AssetMetadata.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAssetListResponse>): QueryAssetListResponse {
    const message = createBaseQueryAssetListResponse();
    message.assetList = object.assetList?.map(e => AssetMetadata.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryAssetMetadataRequest(): QueryAssetMetadataRequest {
  return {
    denom: ""
  };
}

export const QueryAssetMetadataRequest = {
  encode(message: QueryAssetMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetMetadataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAssetMetadataRequest>): QueryAssetMetadataRequest {
    const message = createBaseQueryAssetMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseQueryAssetMetadataResponse(): QueryAssetMetadataResponse {
  return {
    metadata: undefined
  };
}

export const QueryAssetMetadataResponse = {
  encode(message: QueryAssetMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metadata !== undefined) {
      AssetMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.metadata = AssetMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryAssetMetadataResponse>): QueryAssetMetadataResponse {
    const message = createBaseQueryAssetMetadataResponse();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? AssetMetadata.fromPartial(object.metadata) : undefined;
    return message;
  }

};

function createBaseQueryRegisteredPairsRequest(): QueryRegisteredPairsRequest {
  return {
    contractAddr: ""
  };
}

export const QueryRegisteredPairsRequest = {
  encode(message: QueryRegisteredPairsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredPairsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredPairsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRegisteredPairsRequest>): QueryRegisteredPairsRequest {
    const message = createBaseQueryRegisteredPairsRequest();
    message.contractAddr = object.contractAddr ?? "";
    return message;
  }

};

function createBaseQueryRegisteredPairsResponse(): QueryRegisteredPairsResponse {
  return {
    pairs: []
  };
}

export const QueryRegisteredPairsResponse = {
  encode(message: QueryRegisteredPairsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRegisteredPairsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredPairsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRegisteredPairsResponse>): QueryRegisteredPairsResponse {
    const message = createBaseQueryRegisteredPairsResponse();
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetOrdersRequest(): QueryGetOrdersRequest {
  return {
    contractAddr: "",
    account: ""
  };
}

export const QueryGetOrdersRequest = {
  encode(message: QueryGetOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }

    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrdersRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        case 2:
          message.account = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetOrdersRequest>): QueryGetOrdersRequest {
    const message = createBaseQueryGetOrdersRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.account = object.account ?? "";
    return message;
  }

};

function createBaseQueryGetOrdersResponse(): QueryGetOrdersResponse {
  return {
    orders: []
  };
}

export const QueryGetOrdersResponse = {
  encode(message: QueryGetOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrdersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetOrdersResponse>): QueryGetOrdersResponse {
    const message = createBaseQueryGetOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetOrderByIDRequest(): QueryGetOrderByIDRequest {
  return {
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    id: Long.UZERO
  };
}

export const QueryGetOrderByIDRequest = {
  encode(message: QueryGetOrderByIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }

    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }

    if (!message.id.isZero()) {
      writer.uint32(32).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderByIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderByIDRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        case 2:
          message.priceDenom = reader.string();
          break;

        case 3:
          message.assetDenom = reader.string();
          break;

        case 4:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetOrderByIDRequest>): QueryGetOrderByIDRequest {
    const message = createBaseQueryGetOrderByIDRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetOrderByIDResponse(): QueryGetOrderByIDResponse {
  return {
    order: undefined
  };
}

export const QueryGetOrderByIDResponse = {
  encode(message: QueryGetOrderByIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetOrderByIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderByIDResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetOrderByIDResponse>): QueryGetOrderByIDResponse {
    const message = createBaseQueryGetOrderByIDResponse();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    return message;
  }

};

function createBaseQueryGetHistoricalPricesRequest(): QueryGetHistoricalPricesRequest {
  return {
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    periodLengthInSeconds: Long.UZERO,
    numOfPeriods: Long.UZERO
  };
}

export const QueryGetHistoricalPricesRequest = {
  encode(message: QueryGetHistoricalPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }

    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }

    if (!message.periodLengthInSeconds.isZero()) {
      writer.uint32(32).uint64(message.periodLengthInSeconds);
    }

    if (!message.numOfPeriods.isZero()) {
      writer.uint32(40).uint64(message.numOfPeriods);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoricalPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoricalPricesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        case 2:
          message.priceDenom = reader.string();
          break;

        case 3:
          message.assetDenom = reader.string();
          break;

        case 4:
          message.periodLengthInSeconds = (reader.uint64() as Long);
          break;

        case 5:
          message.numOfPeriods = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetHistoricalPricesRequest>): QueryGetHistoricalPricesRequest {
    const message = createBaseQueryGetHistoricalPricesRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.periodLengthInSeconds = object.periodLengthInSeconds !== undefined && object.periodLengthInSeconds !== null ? Long.fromValue(object.periodLengthInSeconds) : Long.UZERO;
    message.numOfPeriods = object.numOfPeriods !== undefined && object.numOfPeriods !== null ? Long.fromValue(object.numOfPeriods) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetHistoricalPricesResponse(): QueryGetHistoricalPricesResponse {
  return {
    prices: []
  };
}

export const QueryGetHistoricalPricesResponse = {
  encode(message: QueryGetHistoricalPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      PriceCandlestick.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetHistoricalPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoricalPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.prices.push(PriceCandlestick.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetHistoricalPricesResponse>): QueryGetHistoricalPricesResponse {
    const message = createBaseQueryGetHistoricalPricesResponse();
    message.prices = object.prices?.map(e => PriceCandlestick.fromPartial(e)) || [];
    return message;
  }

};

function createBaseQueryGetMarketSummaryRequest(): QueryGetMarketSummaryRequest {
  return {
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    lookbackInSeconds: Long.UZERO
  };
}

export const QueryGetMarketSummaryRequest = {
  encode(message: QueryGetMarketSummaryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }

    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }

    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }

    if (!message.lookbackInSeconds.isZero()) {
      writer.uint32(32).uint64(message.lookbackInSeconds);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketSummaryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketSummaryRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        case 2:
          message.priceDenom = reader.string();
          break;

        case 3:
          message.assetDenom = reader.string();
          break;

        case 4:
          message.lookbackInSeconds = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetMarketSummaryRequest>): QueryGetMarketSummaryRequest {
    const message = createBaseQueryGetMarketSummaryRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.lookbackInSeconds = object.lookbackInSeconds !== undefined && object.lookbackInSeconds !== null ? Long.fromValue(object.lookbackInSeconds) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetMarketSummaryResponse(): QueryGetMarketSummaryResponse {
  return {
    totalVolume: "",
    totalVolumeNotional: "",
    highPrice: "",
    lowPrice: "",
    lastPrice: ""
  };
}

export const QueryGetMarketSummaryResponse = {
  encode(message: QueryGetMarketSummaryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalVolume !== "") {
      writer.uint32(10).string(message.totalVolume);
    }

    if (message.totalVolumeNotional !== "") {
      writer.uint32(18).string(message.totalVolumeNotional);
    }

    if (message.highPrice !== "") {
      writer.uint32(26).string(message.highPrice);
    }

    if (message.lowPrice !== "") {
      writer.uint32(34).string(message.lowPrice);
    }

    if (message.lastPrice !== "") {
      writer.uint32(42).string(message.lastPrice);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMarketSummaryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketSummaryResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalVolume = reader.string();
          break;

        case 2:
          message.totalVolumeNotional = reader.string();
          break;

        case 3:
          message.highPrice = reader.string();
          break;

        case 4:
          message.lowPrice = reader.string();
          break;

        case 5:
          message.lastPrice = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetMarketSummaryResponse>): QueryGetMarketSummaryResponse {
    const message = createBaseQueryGetMarketSummaryResponse();
    message.totalVolume = object.totalVolume ?? "";
    message.totalVolumeNotional = object.totalVolumeNotional ?? "";
    message.highPrice = object.highPrice ?? "";
    message.lowPrice = object.lowPrice ?? "";
    message.lastPrice = object.lastPrice ?? "";
    return message;
  }

};

function createBaseQueryOrderSimulationRequest(): QueryOrderSimulationRequest {
  return {
    order: undefined,
    contractAddr: ""
  };
}

export const QueryOrderSimulationRequest = {
  encode(message: QueryOrderSimulationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderSimulationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderSimulationRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrderSimulationRequest>): QueryOrderSimulationRequest {
    const message = createBaseQueryOrderSimulationRequest();
    message.order = object.order !== undefined && object.order !== null ? Order.fromPartial(object.order) : undefined;
    message.contractAddr = object.contractAddr ?? "";
    return message;
  }

};

function createBaseQueryOrderSimulationResponse(): QueryOrderSimulationResponse {
  return {
    ExecutedQuantity: ""
  };
}

export const QueryOrderSimulationResponse = {
  encode(message: QueryOrderSimulationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ExecutedQuantity !== "") {
      writer.uint32(10).string(message.ExecutedQuantity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderSimulationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderSimulationResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ExecutedQuantity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryOrderSimulationResponse>): QueryOrderSimulationResponse {
    const message = createBaseQueryOrderSimulationResponse();
    message.ExecutedQuantity = object.ExecutedQuantity ?? "";
    return message;
  }

};

function createBaseQueryGetMatchResultRequest(): QueryGetMatchResultRequest {
  return {
    contractAddr: ""
  };
}

export const QueryGetMatchResultRequest = {
  encode(message: QueryGetMatchResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMatchResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMatchResultRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetMatchResultRequest>): QueryGetMatchResultRequest {
    const message = createBaseQueryGetMatchResultRequest();
    message.contractAddr = object.contractAddr ?? "";
    return message;
  }

};

function createBaseQueryGetMatchResultResponse(): QueryGetMatchResultResponse {
  return {
    result: undefined
  };
}

export const QueryGetMatchResultResponse = {
  encode(message: QueryGetMatchResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      MatchResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMatchResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMatchResultResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.result = MatchResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryGetMatchResultResponse>): QueryGetMatchResultResponse {
    const message = createBaseQueryGetMatchResultResponse();
    message.result = object.result !== undefined && object.result !== null ? MatchResult.fromPartial(object.result) : undefined;
    return message;
  }

};