import { Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
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
  /** params defines the parameters of the module. */
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
  lastMintAmount: string;
  lastMintDate: string;
  lastMintHeight: Long;
  denom: string;
}
/**
 * QueryMinterResponse is the response type for the
 * Query/Minter RPC method.
 */

export interface QueryMinterResponseSDKType {
  last_mint_amount: string;
  last_mint_date: string;
  last_mint_height: Long;
  denom: string;
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
    lastMintAmount: "",
    lastMintDate: "",
    lastMintHeight: Long.ZERO,
    denom: ""
  };
}

export const QueryMinterResponse = {
  encode(message: QueryMinterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastMintAmount !== "") {
      writer.uint32(10).string(message.lastMintAmount);
    }

    if (message.lastMintDate !== "") {
      writer.uint32(18).string(message.lastMintDate);
    }

    if (!message.lastMintHeight.isZero()) {
      writer.uint32(24).int64(message.lastMintHeight);
    }

    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
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
          message.lastMintAmount = reader.string();
          break;

        case 2:
          message.lastMintDate = reader.string();
          break;

        case 3:
          message.lastMintHeight = (reader.int64() as Long);
          break;

        case 4:
          message.denom = reader.string();
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
    message.lastMintAmount = object.lastMintAmount ?? "";
    message.lastMintDate = object.lastMintDate ?? "";
    message.lastMintHeight = object.lastMintHeight !== undefined && object.lastMintHeight !== null ? Long.fromValue(object.lastMintHeight) : Long.ZERO;
    message.denom = object.denom ?? "";
    return message;
  }

};