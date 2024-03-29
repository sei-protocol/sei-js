import { OracleExchangeRate, OracleExchangeRateSDKType, PriceSnapshot, PriceSnapshotSDKType, OracleTwap, OracleTwapSDKType, VotePenaltyCounter, VotePenaltyCounterSDKType, Params, ParamsSDKType } from "./oracle";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestSDKType {
  denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  /** exchange_rate defines the exchange rate of Sei denominated in various Sei */
  oracleExchangeRate: OracleExchangeRate;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseSDKType {
  oracle_exchange_rate: OracleExchangeRateSDKType;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {}
export interface DenomOracleExchangeRatePair {
  denom: string;
  oracleExchangeRate: OracleExchangeRate;
}
export interface DenomOracleExchangeRatePairSDKType {
  denom: string;
  oracle_exchange_rate: OracleExchangeRateSDKType;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  denomOracleExchangeRatePairs: DenomOracleExchangeRatePair[];
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
  denom_oracle_exchange_rate_pairs: DenomOracleExchangeRatePairSDKType[];
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives: string[];
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseSDKType {
  actives: string[];
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[];
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseSDKType {
  vote_targets: string[];
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequest {}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequestSDKType {}
export interface QueryPriceSnapshotHistoryResponse {
  priceSnapshots: PriceSnapshot[];
}
export interface QueryPriceSnapshotHistoryResponseSDKType {
  price_snapshots: PriceSnapshotSDKType[];
}
/** request type for twap RPC method */
export interface QueryTwapsRequest {
  lookbackSeconds: Long;
}
/** request type for twap RPC method */
export interface QueryTwapsRequestSDKType {
  lookback_seconds: Long;
}
export interface QueryTwapsResponse {
  oracleTwaps: OracleTwap[];
}
export interface QueryTwapsResponseSDKType {
  oracle_twaps: OracleTwapSDKType[];
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestSDKType {
  validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator */
  feederAddr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
  feeder_addr: string;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequestSDKType {
  validator_addr: string;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponse {
  votePenaltyCounter: VotePenaltyCounter;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponseSDKType {
  vote_penalty_counter: VotePenaltyCounterSDKType;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequest {}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequestSDKType {}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponse {
  /**
   * window_progress defines the number of voting periods
   * since the last slashing event would have taken place.
   */
  windowProgress: Long;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
  window_progress: Long;
}
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
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    denom: ""
  };
}
export const QueryExchangeRateRequest = {
  encode(message: QueryExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
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
  fromPartial(object: DeepPartial<QueryExchangeRateRequest>): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {
    oracleExchangeRate: OracleExchangeRate.fromPartial({})
  };
}
export const QueryExchangeRateResponse = {
  encode(message: QueryExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleExchangeRate !== undefined) {
      OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExchangeRateResponse>): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
    return message;
  }
};
function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return {};
}
export const QueryExchangeRatesRequest = {
  encode(_: QueryExchangeRatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesRequest();
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
  fromPartial(_: DeepPartial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  }
};
function createBaseDenomOracleExchangeRatePair(): DenomOracleExchangeRatePair {
  return {
    denom: "",
    oracleExchangeRate: OracleExchangeRate.fromPartial({})
  };
}
export const DenomOracleExchangeRatePair = {
  encode(message: DenomOracleExchangeRatePair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oracleExchangeRate !== undefined) {
      OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DenomOracleExchangeRatePair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOracleExchangeRatePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DenomOracleExchangeRatePair>): DenomOracleExchangeRatePair {
    const message = createBaseDenomOracleExchangeRatePair();
    message.denom = object.denom ?? "";
    message.oracleExchangeRate = object.oracleExchangeRate !== undefined && object.oracleExchangeRate !== null ? OracleExchangeRate.fromPartial(object.oracleExchangeRate) : undefined;
    return message;
  }
};
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    denomOracleExchangeRatePairs: []
  };
}
export const QueryExchangeRatesResponse = {
  encode(message: QueryExchangeRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denomOracleExchangeRatePairs) {
      DenomOracleExchangeRatePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOracleExchangeRatePairs.push(DenomOracleExchangeRatePair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.denomOracleExchangeRatePairs = object.denomOracleExchangeRatePairs?.map(e => DenomOracleExchangeRatePair.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryActivesRequest(): QueryActivesRequest {
  return {};
}
export const QueryActivesRequest = {
  encode(_: QueryActivesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesRequest();
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
  fromPartial(_: DeepPartial<QueryActivesRequest>): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  }
};
function createBaseQueryActivesResponse(): QueryActivesResponse {
  return {
    actives: []
  };
}
export const QueryActivesResponse = {
  encode(message: QueryActivesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actives.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActivesResponse>): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return {};
}
export const QueryVoteTargetsRequest = {
  encode(_: QueryVoteTargetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsRequest();
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
  fromPartial(_: DeepPartial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  }
};
function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return {
    voteTargets: []
  };
}
export const QueryVoteTargetsResponse = {
  encode(message: QueryVoteTargetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteTargetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteTargets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.voteTargets?.map(e => e) || [];
    return message;
  }
};
function createBaseQueryPriceSnapshotHistoryRequest(): QueryPriceSnapshotHistoryRequest {
  return {};
}
export const QueryPriceSnapshotHistoryRequest = {
  encode(_: QueryPriceSnapshotHistoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSnapshotHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSnapshotHistoryRequest();
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
  fromPartial(_: DeepPartial<QueryPriceSnapshotHistoryRequest>): QueryPriceSnapshotHistoryRequest {
    const message = createBaseQueryPriceSnapshotHistoryRequest();
    return message;
  }
};
function createBaseQueryPriceSnapshotHistoryResponse(): QueryPriceSnapshotHistoryResponse {
  return {
    priceSnapshots: []
  };
}
export const QueryPriceSnapshotHistoryResponse = {
  encode(message: QueryPriceSnapshotHistoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.priceSnapshots) {
      PriceSnapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceSnapshotHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSnapshotHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceSnapshots.push(PriceSnapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPriceSnapshotHistoryResponse>): QueryPriceSnapshotHistoryResponse {
    const message = createBaseQueryPriceSnapshotHistoryResponse();
    message.priceSnapshots = object.priceSnapshots?.map(e => PriceSnapshot.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryTwapsRequest(): QueryTwapsRequest {
  return {
    lookbackSeconds: Long.UZERO
  };
}
export const QueryTwapsRequest = {
  encode(message: QueryTwapsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lookbackSeconds.isZero()) {
      writer.uint32(8).uint64(message.lookbackSeconds);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTwapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTwapsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lookbackSeconds = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTwapsRequest>): QueryTwapsRequest {
    const message = createBaseQueryTwapsRequest();
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? Long.fromValue(object.lookbackSeconds) : Long.UZERO;
    return message;
  }
};
function createBaseQueryTwapsResponse(): QueryTwapsResponse {
  return {
    oracleTwaps: []
  };
}
export const QueryTwapsResponse = {
  encode(message: QueryTwapsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracleTwaps) {
      OracleTwap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTwapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleTwaps.push(OracleTwap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTwapsResponse>): QueryTwapsResponse {
    const message = createBaseQueryTwapsResponse();
    message.oracleTwaps = object.oracleTwaps?.map(e => OracleTwap.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegationRequest = {
  encode(message: QueryFeederDelegationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }
};
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  encode(message: QueryFeederDelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeederDelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? "";
    return message;
  }
};
function createBaseQueryVotePenaltyCounterRequest(): QueryVotePenaltyCounterRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryVotePenaltyCounterRequest = {
  encode(message: QueryVotePenaltyCounterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotePenaltyCounterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePenaltyCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVotePenaltyCounterRequest>): QueryVotePenaltyCounterRequest {
    const message = createBaseQueryVotePenaltyCounterRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  }
};
function createBaseQueryVotePenaltyCounterResponse(): QueryVotePenaltyCounterResponse {
  return {
    votePenaltyCounter: VotePenaltyCounter.fromPartial({})
  };
}
export const QueryVotePenaltyCounterResponse = {
  encode(message: QueryVotePenaltyCounterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votePenaltyCounter !== undefined) {
      VotePenaltyCounter.encode(message.votePenaltyCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotePenaltyCounterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePenaltyCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votePenaltyCounter = VotePenaltyCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVotePenaltyCounterResponse>): QueryVotePenaltyCounterResponse {
    const message = createBaseQueryVotePenaltyCounterResponse();
    message.votePenaltyCounter = object.votePenaltyCounter !== undefined && object.votePenaltyCounter !== null ? VotePenaltyCounter.fromPartial(object.votePenaltyCounter) : undefined;
    return message;
  }
};
function createBaseQuerySlashWindowRequest(): QuerySlashWindowRequest {
  return {};
}
export const QuerySlashWindowRequest = {
  encode(_: QuerySlashWindowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashWindowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowRequest();
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
  fromPartial(_: DeepPartial<QuerySlashWindowRequest>): QuerySlashWindowRequest {
    const message = createBaseQuerySlashWindowRequest();
    return message;
  }
};
function createBaseQuerySlashWindowResponse(): QuerySlashWindowResponse {
  return {
    windowProgress: Long.UZERO
  };
}
export const QuerySlashWindowResponse = {
  encode(message: QuerySlashWindowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.windowProgress.isZero()) {
      writer.uint32(8).uint64(message.windowProgress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySlashWindowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windowProgress = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySlashWindowResponse>): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? Long.fromValue(object.windowProgress) : Long.UZERO;
    return message;
  }
};
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