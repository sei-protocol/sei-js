import { Params, ParamsSDKType } from './params';
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from './authorityMetadata';
import * as _m0 from 'protobufjs/minimal';
import { DeepPartial } from '@osmonauts/helpers';
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
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */

export interface QueryDenomAuthorityMetadataRequest {
  denom: string;
}
/**
 * QueryDenomAuthorityMetadataRequest defines the request structure for the
 * DenomAuthorityMetadata gRPC query.
 */

export interface QueryDenomAuthorityMetadataRequestSDKType {
  denom: string;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */

export interface QueryDenomAuthorityMetadataResponse {
  authorityMetadata: DenomAuthorityMetadata;
}
/**
 * QueryDenomAuthorityMetadataResponse defines the response structure for the
 * DenomAuthorityMetadata gRPC query.
 */

export interface QueryDenomAuthorityMetadataResponseSDKType {
  authority_metadata: DenomAuthorityMetadataSDKType;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorRequest {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the request structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorRequestSDKType {
  creator: string;
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorResponse {
  denoms: string[];
}
/**
 * QueryDenomsFromCreatorRequest defines the response structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomsFromCreatorResponseSDKType {
  denoms: string[];
}
/**
 * QueryDenomCreationFeeWhitelistRequest defines the request structure for the
 * DenomCreationFeeWhitelist gRPC query.
 */

export interface QueryDenomCreationFeeWhitelistRequest {}
/**
 * QueryDenomCreationFeeWhitelistRequest defines the request structure for the
 * DenomCreationFeeWhitelist gRPC query.
 */

export interface QueryDenomCreationFeeWhitelistRequestSDKType {}
/**
 * QueryDenomCreationFeeWhitelistResponse defines the response structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomCreationFeeWhitelistResponse {
  creators: string[];
}
/**
 * QueryDenomCreationFeeWhitelistResponse defines the response structure for the
 * DenomsFromCreator gRPC query.
 */

export interface QueryDenomCreationFeeWhitelistResponseSDKType {
  creators: string[];
}
/**
 * QueryCreatorInDenomFeeWhitelistRequest defines the request structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */

export interface QueryCreatorInDenomFeeWhitelistRequest {
  creator: string;
}
/**
 * QueryCreatorInDenomFeeWhitelistRequest defines the request structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */

export interface QueryCreatorInDenomFeeWhitelistRequestSDKType {
  creator: string;
}
/**
 * QueryCreatorInDenomFeeWhitelistResponse defines the response structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */

export interface QueryCreatorInDenomFeeWhitelistResponse {
  whitelisted: boolean;
}
/**
 * QueryCreatorInDenomFeeWhitelistResponse defines the response structure for the
 * CreatorInDenomFeeWhitelist gRPC query.
 */

export interface QueryCreatorInDenomFeeWhitelistResponseSDKType {
  whitelisted: boolean;
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
    const end = length === undefined ? reader.len : reader.pos + length;
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
    const end = length === undefined ? reader.len : reader.pos + length;
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

function createBaseQueryDenomAuthorityMetadataRequest(): QueryDenomAuthorityMetadataRequest {
  return {
    denom: ''
  };
}

export const QueryDenomAuthorityMetadataRequest = {
  encode(message: QueryDenomAuthorityMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== '') {
      writer.uint32(10).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataRequest();

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

  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataRequest>): QueryDenomAuthorityMetadataRequest {
    const message = createBaseQueryDenomAuthorityMetadataRequest();
    message.denom = object.denom ?? '';
    return message;
  }

};

function createBaseQueryDenomAuthorityMetadataResponse(): QueryDenomAuthorityMetadataResponse {
  return {
    authorityMetadata: undefined
  };
}

export const QueryDenomAuthorityMetadataResponse = {
  encode(message: QueryDenomAuthorityMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomAuthorityMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAuthorityMetadataResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authorityMetadata = DenomAuthorityMetadata.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomAuthorityMetadataResponse>): QueryDenomAuthorityMetadataResponse {
    const message = createBaseQueryDenomAuthorityMetadataResponse();
    message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
    return message;
  }

};

function createBaseQueryDenomsFromCreatorRequest(): QueryDenomsFromCreatorRequest {
  return {
    creator: ''
  };
}

export const QueryDenomsFromCreatorRequest = {
  encode(message: QueryDenomsFromCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorRequest>): QueryDenomsFromCreatorRequest {
    const message = createBaseQueryDenomsFromCreatorRequest();
    message.creator = object.creator ?? '';
    return message;
  }

};

function createBaseQueryDenomsFromCreatorResponse(): QueryDenomsFromCreatorResponse {
  return {
    denoms: []
  };
}

export const QueryDenomsFromCreatorResponse = {
  encode(message: QueryDenomsFromCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsFromCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsFromCreatorResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomsFromCreatorResponse>): QueryDenomsFromCreatorResponse {
    const message = createBaseQueryDenomsFromCreatorResponse();
    message.denoms = object.denoms?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryDenomCreationFeeWhitelistRequest(): QueryDenomCreationFeeWhitelistRequest {
  return {};
}

export const QueryDenomCreationFeeWhitelistRequest = {
  encode(_: QueryDenomCreationFeeWhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomCreationFeeWhitelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomCreationFeeWhitelistRequest();

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

  fromPartial(_: DeepPartial<QueryDenomCreationFeeWhitelistRequest>): QueryDenomCreationFeeWhitelistRequest {
    const message = createBaseQueryDenomCreationFeeWhitelistRequest();
    return message;
  }

};

function createBaseQueryDenomCreationFeeWhitelistResponse(): QueryDenomCreationFeeWhitelistResponse {
  return {
    creators: []
  };
}

export const QueryDenomCreationFeeWhitelistResponse = {
  encode(message: QueryDenomCreationFeeWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.creators) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomCreationFeeWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomCreationFeeWhitelistResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creators.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryDenomCreationFeeWhitelistResponse>): QueryDenomCreationFeeWhitelistResponse {
    const message = createBaseQueryDenomCreationFeeWhitelistResponse();
    message.creators = object.creators?.map(e => e) || [];
    return message;
  }

};

function createBaseQueryCreatorInDenomFeeWhitelistRequest(): QueryCreatorInDenomFeeWhitelistRequest {
  return {
    creator: ''
  };
}

export const QueryCreatorInDenomFeeWhitelistRequest = {
  encode(message: QueryCreatorInDenomFeeWhitelistRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreatorInDenomFeeWhitelistRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreatorInDenomFeeWhitelistRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCreatorInDenomFeeWhitelistRequest>): QueryCreatorInDenomFeeWhitelistRequest {
    const message = createBaseQueryCreatorInDenomFeeWhitelistRequest();
    message.creator = object.creator ?? '';
    return message;
  }

};

function createBaseQueryCreatorInDenomFeeWhitelistResponse(): QueryCreatorInDenomFeeWhitelistResponse {
  return {
    whitelisted: false
  };
}

export const QueryCreatorInDenomFeeWhitelistResponse = {
  encode(message: QueryCreatorInDenomFeeWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.whitelisted === true) {
      writer.uint32(8).bool(message.whitelisted);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCreatorInDenomFeeWhitelistResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCreatorInDenomFeeWhitelistResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.whitelisted = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryCreatorInDenomFeeWhitelistResponse>): QueryCreatorInDenomFeeWhitelistResponse {
    const message = createBaseQueryCreatorInDenomFeeWhitelistResponse();
    message.whitelisted = object.whitelisted ?? false;
    return message;
  }

};