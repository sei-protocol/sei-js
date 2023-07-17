import { Params, ParamsSDKType } from "./mint";
import { Long, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequest {}
/**
 * QueryMinterRequest is the request type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterRequestSDKType {}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponse {
  startDate: string;
  endDate: string;
  denom: string;
  totalMintAmount: Long;
  remainingMintAmount: Long;
  lastMintAmount: Long;
  lastMintDate: string;
  lastMintHeight: Long;
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */
export interface QueryMinterResponseSDKType {
  start_date: string;
  end_date: string;
  denom: string;
  total_mint_amount: Long;
  remaining_mint_amount: Long;
  last_mint_amount: Long;
  last_mint_date: string;
  last_mint_height: Long;
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
    params: Params.fromPartial({})
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
function createBaseQueryMinterRequest(): QueryMinterRequest {
  return {};
}
export const QueryMinterRequest = {
  encode(_: QueryMinterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinterRequest();
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
  fromPartial(_: DeepPartial<QueryMinterRequest>): QueryMinterRequest {
    const message = createBaseQueryMinterRequest();
    return message;
  }
};
function createBaseQueryMinterResponse(): QueryMinterResponse {
  return {
    startDate: "",
    endDate: "",
    denom: "",
    totalMintAmount: Long.UZERO,
    remainingMintAmount: Long.UZERO,
    lastMintAmount: Long.UZERO,
    lastMintDate: "",
    lastMintHeight: Long.UZERO
  };
}
export const QueryMinterResponse = {
  encode(message: QueryMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.startDate !== "") {
      writer.uint32(10).string(message.startDate);
    }
    if (message.endDate !== "") {
      writer.uint32(18).string(message.endDate);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (!message.totalMintAmount.isZero()) {
      writer.uint32(32).uint64(message.totalMintAmount);
    }
    if (!message.remainingMintAmount.isZero()) {
      writer.uint32(40).uint64(message.remainingMintAmount);
    }
    if (!message.lastMintAmount.isZero()) {
      writer.uint32(48).uint64(message.lastMintAmount);
    }
    if (message.lastMintDate !== "") {
      writer.uint32(58).string(message.lastMintDate);
    }
    if (!message.lastMintHeight.isZero()) {
      writer.uint32(64).uint64(message.lastMintHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startDate = reader.string();
          break;
        case 2:
          message.endDate = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.totalMintAmount = (reader.uint64() as Long);
          break;
        case 5:
          message.remainingMintAmount = (reader.uint64() as Long);
          break;
        case 6:
          message.lastMintAmount = (reader.uint64() as Long);
          break;
        case 7:
          message.lastMintDate = reader.string();
          break;
        case 8:
          message.lastMintHeight = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryMinterResponse>): QueryMinterResponse {
    const message = createBaseQueryMinterResponse();
    message.startDate = object.startDate ?? "";
    message.endDate = object.endDate ?? "";
    message.denom = object.denom ?? "";
    message.totalMintAmount = object.totalMintAmount !== undefined && object.totalMintAmount !== null ? Long.fromValue(object.totalMintAmount) : Long.UZERO;
    message.remainingMintAmount = object.remainingMintAmount !== undefined && object.remainingMintAmount !== null ? Long.fromValue(object.remainingMintAmount) : Long.UZERO;
    message.lastMintAmount = object.lastMintAmount !== undefined && object.lastMintAmount !== null ? Long.fromValue(object.lastMintAmount) : Long.UZERO;
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.UZERO;
    return message;
  }
};