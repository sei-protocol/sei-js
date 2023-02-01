import { Params, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryRecordedTransactionDataRequest {
  slot: Long;
}
export interface QueryRecordedTransactionDataRequestSDKType {
  slot: Long;
}
export interface QueryRecordedTransactionDataResponse {
  txs: string[];
}
export interface QueryRecordedTransactionDataResponseSDKType {
  txs: string[];
}
export interface QueryStateRootRequest {
  slot: Long;
}
export interface QueryStateRootRequestSDKType {
  slot: Long;
}
export interface QueryStateRootResponse {
  root: string;
}
export interface QueryStateRootResponseSDKType {
  root: string;
}
export interface QuerySenderRequest {
  slot: Long;
}
export interface QuerySenderRequestSDKType {
  slot: Long;
}
export interface QuerySenderResponse {
  sender: string;
}
export interface QuerySenderResponseSDKType {
  sender: string;
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

function createBaseQueryRecordedTransactionDataRequest(): QueryRecordedTransactionDataRequest {
  return {
    slot: Long.UZERO
  };
}

export const QueryRecordedTransactionDataRequest = {
  encode(message: QueryRecordedTransactionDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.slot.isZero()) {
      writer.uint32(8).uint64(message.slot);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordedTransactionDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordedTransactionDataRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.slot = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRecordedTransactionDataRequest>): QueryRecordedTransactionDataRequest {
    const message = createBaseQueryRecordedTransactionDataRequest();
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    return message;
  }

};

function createBaseQueryRecordedTransactionDataResponse(): QueryRecordedTransactionDataResponse {
  return {
    txs: []
  };
}

export const QueryRecordedTransactionDataResponse = {
  encode(message: QueryRecordedTransactionDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordedTransactionDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordedTransactionDataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryRecordedTransactionDataResponse>): QueryRecordedTransactionDataResponse {
    const message = createBaseQueryRecordedTransactionDataResponse();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryStateRootRequest(): QueryStateRootRequest {
  return {
    slot: Long.UZERO
  };
}

export const QueryStateRootRequest = {
  encode(message: QueryStateRootRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.slot.isZero()) {
      writer.uint32(8).uint64(message.slot);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRootRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateRootRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.slot = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryStateRootRequest>): QueryStateRootRequest {
    const message = createBaseQueryStateRootRequest();
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    return message;
  }

};

function createBaseQueryStateRootResponse(): QueryStateRootResponse {
  return {
    root: ""
  };
}

export const QueryStateRootResponse = {
  encode(message: QueryStateRootResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.root !== "") {
      writer.uint32(10).string(message.root);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStateRootResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStateRootResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.root = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryStateRootResponse>): QueryStateRootResponse {
    const message = createBaseQueryStateRootResponse();
    message.root = object.root ?? "";
    return message;
  }

};

function createBaseQuerySenderRequest(): QuerySenderRequest {
  return {
    slot: Long.UZERO
  };
}

export const QuerySenderRequest = {
  encode(message: QuerySenderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.slot.isZero()) {
      writer.uint32(8).uint64(message.slot);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySenderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySenderRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.slot = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySenderRequest>): QuerySenderRequest {
    const message = createBaseQuerySenderRequest();
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    return message;
  }

};

function createBaseQuerySenderResponse(): QuerySenderResponse {
  return {
    sender: ""
  };
}

export const QuerySenderResponse = {
  encode(message: QuerySenderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySenderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySenderResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySenderResponse>): QuerySenderResponse {
    const message = createBaseQuerySenderResponse();
    message.sender = object.sender ?? "";
    return message;
  }

};