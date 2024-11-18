import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { OracleExchangeRate, OracleTwap, Params, PriceSnapshot, VotePenaltyCounter } from "./oracle";

import type {
	DenomOracleExchangeRatePair as DenomOracleExchangeRatePair_type,
	QueryActivesRequest as QueryActivesRequest_type,
	QueryActivesResponse as QueryActivesResponse_type,
	QueryExchangeRateRequest as QueryExchangeRateRequest_type,
	QueryExchangeRateResponse as QueryExchangeRateResponse_type,
	QueryExchangeRatesRequest as QueryExchangeRatesRequest_type,
	QueryExchangeRatesResponse as QueryExchangeRatesResponse_type,
	QueryFeederDelegationRequest as QueryFeederDelegationRequest_type,
	QueryFeederDelegationResponse as QueryFeederDelegationResponse_type,
	QueryParamsRequest as QueryParamsRequest_type,
	QueryParamsResponse as QueryParamsResponse_type,
	QueryPriceSnapshotHistoryRequest as QueryPriceSnapshotHistoryRequest_type,
	QueryPriceSnapshotHistoryResponse as QueryPriceSnapshotHistoryResponse_type,
	QuerySlashWindowRequest as QuerySlashWindowRequest_type,
	QuerySlashWindowResponse as QuerySlashWindowResponse_type,
	QueryTwapsRequest as QueryTwapsRequest_type,
	QueryTwapsResponse as QueryTwapsResponse_type,
	QueryVotePenaltyCounterRequest as QueryVotePenaltyCounterRequest_type,
	QueryVotePenaltyCounterResponse as QueryVotePenaltyCounterResponse_type,
	QueryVoteTargetsRequest as QueryVoteTargetsRequest_type,
	QueryVoteTargetsResponse as QueryVoteTargetsResponse_type,
} from "../../types/oracle";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface QueryExchangeRateRequest extends QueryExchangeRateRequest_type {}
export interface QueryExchangeRateResponse extends QueryExchangeRateResponse_type {}
export interface QueryExchangeRatesRequest extends QueryExchangeRatesRequest_type {}
export interface DenomOracleExchangeRatePair extends DenomOracleExchangeRatePair_type {}
export interface QueryExchangeRatesResponse extends QueryExchangeRatesResponse_type {}
export interface QueryActivesRequest extends QueryActivesRequest_type {}
export interface QueryActivesResponse extends QueryActivesResponse_type {}
export interface QueryVoteTargetsRequest extends QueryVoteTargetsRequest_type {}
export interface QueryVoteTargetsResponse extends QueryVoteTargetsResponse_type {}
export interface QueryPriceSnapshotHistoryRequest extends QueryPriceSnapshotHistoryRequest_type {}
export interface QueryPriceSnapshotHistoryResponse extends QueryPriceSnapshotHistoryResponse_type {}
export interface QueryTwapsRequest extends QueryTwapsRequest_type {}
export interface QueryTwapsResponse extends QueryTwapsResponse_type {}
export interface QueryFeederDelegationRequest extends QueryFeederDelegationRequest_type {}
export interface QueryFeederDelegationResponse extends QueryFeederDelegationResponse_type {}
export interface QueryVotePenaltyCounterRequest extends QueryVotePenaltyCounterRequest_type {}
export interface QueryVotePenaltyCounterResponse extends QueryVotePenaltyCounterResponse_type {}
export interface QuerySlashWindowRequest extends QuerySlashWindowRequest_type {}
export interface QuerySlashWindowResponse extends QuerySlashWindowResponse_type {}
export interface QueryParamsRequest extends QueryParamsRequest_type {}
export interface QueryParamsResponse extends QueryParamsResponse_type {}

export const QueryExchangeRateRequest: MessageFns<QueryExchangeRateRequest, "seiprotocol.seichain.oracle.QueryExchangeRateRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryExchangeRateRequest" as const,

	encode(message: QueryExchangeRateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryExchangeRateRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryExchangeRateRequest {
		return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
	},

	toJSON(message: QueryExchangeRateRequest): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(base?: I): QueryExchangeRateRequest {
		return QueryExchangeRateRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(object: I): QueryExchangeRateRequest {
		const message = createBaseQueryExchangeRateRequest();
		message.denom = object.denom ?? "";
		return message;
	},
};

export const QueryExchangeRateResponse: MessageFns<QueryExchangeRateResponse, "seiprotocol.seichain.oracle.QueryExchangeRateResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryExchangeRateResponse" as const,

	encode(message: QueryExchangeRateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.oracle_exchange_rate !== undefined) {
			OracleExchangeRate.encode(message.oracle_exchange_rate, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryExchangeRateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.oracle_exchange_rate = OracleExchangeRate.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryExchangeRateResponse {
		return {
			oracle_exchange_rate: isSet(object.oracle_exchange_rate) ? OracleExchangeRate.fromJSON(object.oracle_exchange_rate) : undefined,
		};
	},

	toJSON(message: QueryExchangeRateResponse): unknown {
		const obj: any = {};
		if (message.oracle_exchange_rate !== undefined) {
			obj.oracle_exchange_rate = OracleExchangeRate.toJSON(message.oracle_exchange_rate);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(base?: I): QueryExchangeRateResponse {
		return QueryExchangeRateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(object: I): QueryExchangeRateResponse {
		const message = createBaseQueryExchangeRateResponse();
		message.oracle_exchange_rate =
			object.oracle_exchange_rate !== undefined && object.oracle_exchange_rate !== null
				? OracleExchangeRate.fromPartial(object.oracle_exchange_rate)
				: undefined;
		return message;
	},
};

export const QueryExchangeRatesRequest: MessageFns<QueryExchangeRatesRequest, "seiprotocol.seichain.oracle.QueryExchangeRatesRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryExchangeRatesRequest" as const,

	encode(_: QueryExchangeRatesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryExchangeRatesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryExchangeRatesRequest {
		return {};
	},

	toJSON(_: QueryExchangeRatesRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryExchangeRatesRequest>, I>>(base?: I): QueryExchangeRatesRequest {
		return QueryExchangeRatesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryExchangeRatesRequest>, I>>(_: I): QueryExchangeRatesRequest {
		const message = createBaseQueryExchangeRatesRequest();
		return message;
	},
};

export const DenomOracleExchangeRatePair: MessageFns<DenomOracleExchangeRatePair, "seiprotocol.seichain.oracle.DenomOracleExchangeRatePair"> = {
	$type: "seiprotocol.seichain.oracle.DenomOracleExchangeRatePair" as const,

	encode(message: DenomOracleExchangeRatePair, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.oracle_exchange_rate !== undefined) {
			OracleExchangeRate.encode(message.oracle_exchange_rate, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DenomOracleExchangeRatePair {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDenomOracleExchangeRatePair();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.oracle_exchange_rate = OracleExchangeRate.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DenomOracleExchangeRatePair {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			oracle_exchange_rate: isSet(object.oracle_exchange_rate) ? OracleExchangeRate.fromJSON(object.oracle_exchange_rate) : undefined,
		};
	},

	toJSON(message: DenomOracleExchangeRatePair): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.oracle_exchange_rate !== undefined) {
			obj.oracle_exchange_rate = OracleExchangeRate.toJSON(message.oracle_exchange_rate);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DenomOracleExchangeRatePair>, I>>(base?: I): DenomOracleExchangeRatePair {
		return DenomOracleExchangeRatePair.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DenomOracleExchangeRatePair>, I>>(object: I): DenomOracleExchangeRatePair {
		const message = createBaseDenomOracleExchangeRatePair();
		message.denom = object.denom ?? "";
		message.oracle_exchange_rate =
			object.oracle_exchange_rate !== undefined && object.oracle_exchange_rate !== null
				? OracleExchangeRate.fromPartial(object.oracle_exchange_rate)
				: undefined;
		return message;
	},
};

export const QueryExchangeRatesResponse: MessageFns<QueryExchangeRatesResponse, "seiprotocol.seichain.oracle.QueryExchangeRatesResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryExchangeRatesResponse" as const,

	encode(message: QueryExchangeRatesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.denom_oracle_exchange_rate_pairs) {
			DenomOracleExchangeRatePair.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryExchangeRatesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom_oracle_exchange_rate_pairs.push(DenomOracleExchangeRatePair.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryExchangeRatesResponse {
		return {
			denom_oracle_exchange_rate_pairs: globalThis.Array.isArray(object?.denom_oracle_exchange_rate_pairs)
				? object.denom_oracle_exchange_rate_pairs.map((e: any) => DenomOracleExchangeRatePair.fromJSON(e))
				: [],
		};
	},

	toJSON(message: QueryExchangeRatesResponse): unknown {
		const obj: any = {};
		if (message.denom_oracle_exchange_rate_pairs?.length) {
			obj.denom_oracle_exchange_rate_pairs = message.denom_oracle_exchange_rate_pairs.map((e) => DenomOracleExchangeRatePair.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryExchangeRatesResponse>, I>>(base?: I): QueryExchangeRatesResponse {
		return QueryExchangeRatesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryExchangeRatesResponse>, I>>(object: I): QueryExchangeRatesResponse {
		const message = createBaseQueryExchangeRatesResponse();
		message.denom_oracle_exchange_rate_pairs = object.denom_oracle_exchange_rate_pairs?.map((e) => DenomOracleExchangeRatePair.fromPartial(e)) || [];
		return message;
	},
};

export const QueryActivesRequest: MessageFns<QueryActivesRequest, "seiprotocol.seichain.oracle.QueryActivesRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryActivesRequest" as const,

	encode(_: QueryActivesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryActivesRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryActivesRequest {
		return {};
	},

	toJSON(_: QueryActivesRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryActivesRequest>, I>>(base?: I): QueryActivesRequest {
		return QueryActivesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryActivesRequest>, I>>(_: I): QueryActivesRequest {
		const message = createBaseQueryActivesRequest();
		return message;
	},
};

export const QueryActivesResponse: MessageFns<QueryActivesResponse, "seiprotocol.seichain.oracle.QueryActivesResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryActivesResponse" as const,

	encode(message: QueryActivesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.actives) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryActivesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.actives.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryActivesResponse {
		return {
			actives: globalThis.Array.isArray(object?.actives) ? object.actives.map((e: any) => globalThis.String(e)) : [],
		};
	},

	toJSON(message: QueryActivesResponse): unknown {
		const obj: any = {};
		if (message.actives?.length) {
			obj.actives = message.actives;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryActivesResponse>, I>>(base?: I): QueryActivesResponse {
		return QueryActivesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryActivesResponse>, I>>(object: I): QueryActivesResponse {
		const message = createBaseQueryActivesResponse();
		message.actives = object.actives?.map((e) => e) || [];
		return message;
	},
};

export const QueryVoteTargetsRequest: MessageFns<QueryVoteTargetsRequest, "seiprotocol.seichain.oracle.QueryVoteTargetsRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryVoteTargetsRequest" as const,

	encode(_: QueryVoteTargetsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVoteTargetsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryVoteTargetsRequest {
		return {};
	},

	toJSON(_: QueryVoteTargetsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVoteTargetsRequest>, I>>(base?: I): QueryVoteTargetsRequest {
		return QueryVoteTargetsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVoteTargetsRequest>, I>>(_: I): QueryVoteTargetsRequest {
		const message = createBaseQueryVoteTargetsRequest();
		return message;
	},
};

export const QueryVoteTargetsResponse: MessageFns<QueryVoteTargetsResponse, "seiprotocol.seichain.oracle.QueryVoteTargetsResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryVoteTargetsResponse" as const,

	encode(message: QueryVoteTargetsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.vote_targets) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVoteTargetsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.vote_targets.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryVoteTargetsResponse {
		return {
			vote_targets: globalThis.Array.isArray(object?.vote_targets) ? object.vote_targets.map((e: any) => globalThis.String(e)) : [],
		};
	},

	toJSON(message: QueryVoteTargetsResponse): unknown {
		const obj: any = {};
		if (message.vote_targets?.length) {
			obj.vote_targets = message.vote_targets;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVoteTargetsResponse>, I>>(base?: I): QueryVoteTargetsResponse {
		return QueryVoteTargetsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVoteTargetsResponse>, I>>(object: I): QueryVoteTargetsResponse {
		const message = createBaseQueryVoteTargetsResponse();
		message.vote_targets = object.vote_targets?.map((e) => e) || [];
		return message;
	},
};

export const QueryPriceSnapshotHistoryRequest: MessageFns<QueryPriceSnapshotHistoryRequest, "seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest" as const,

	encode(_: QueryPriceSnapshotHistoryRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceSnapshotHistoryRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryPriceSnapshotHistoryRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryPriceSnapshotHistoryRequest {
		return {};
	},

	toJSON(_: QueryPriceSnapshotHistoryRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryPriceSnapshotHistoryRequest>, I>>(base?: I): QueryPriceSnapshotHistoryRequest {
		return QueryPriceSnapshotHistoryRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryPriceSnapshotHistoryRequest>, I>>(_: I): QueryPriceSnapshotHistoryRequest {
		const message = createBaseQueryPriceSnapshotHistoryRequest();
		return message;
	},
};

export const QueryPriceSnapshotHistoryResponse: MessageFns<QueryPriceSnapshotHistoryResponse, "seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse"> =
	{
		$type: "seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse" as const,

		encode(message: QueryPriceSnapshotHistoryResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			for (const v of message.price_snapshots) {
				PriceSnapshot.encode(v!, writer.uint32(10).fork()).join();
			}
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceSnapshotHistoryResponse {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseQueryPriceSnapshotHistoryResponse();
			while (reader.pos < end) {
				const tag = reader.uint32();
				switch (tag >>> 3) {
					case 1:
						if (tag !== 10) {
							break;
						}

						message.price_snapshots.push(PriceSnapshot.decode(reader, reader.uint32()));
						continue;
				}
				if ((tag & 7) === 4 || tag === 0) {
					break;
				}
				reader.skip(tag & 7);
			}
			return message;
		},

		fromJSON(object: any): QueryPriceSnapshotHistoryResponse {
			return {
				price_snapshots: globalThis.Array.isArray(object?.price_snapshots) ? object.price_snapshots.map((e: any) => PriceSnapshot.fromJSON(e)) : [],
			};
		},

		toJSON(message: QueryPriceSnapshotHistoryResponse): unknown {
			const obj: any = {};
			if (message.price_snapshots?.length) {
				obj.price_snapshots = message.price_snapshots.map((e) => PriceSnapshot.toJSON(e));
			}
			return obj;
		},

		create<I extends Exact<DeepPartial<QueryPriceSnapshotHistoryResponse>, I>>(base?: I): QueryPriceSnapshotHistoryResponse {
			return QueryPriceSnapshotHistoryResponse.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<QueryPriceSnapshotHistoryResponse>, I>>(object: I): QueryPriceSnapshotHistoryResponse {
			const message = createBaseQueryPriceSnapshotHistoryResponse();
			message.price_snapshots = object.price_snapshots?.map((e) => PriceSnapshot.fromPartial(e)) || [];
			return message;
		},
	};

export const QueryTwapsRequest: MessageFns<QueryTwapsRequest, "seiprotocol.seichain.oracle.QueryTwapsRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryTwapsRequest" as const,

	encode(message: QueryTwapsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.lookback_seconds !== 0) {
			writer.uint32(8).uint64(message.lookback_seconds);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryTwapsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryTwapsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.lookback_seconds = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryTwapsRequest {
		return { lookback_seconds: isSet(object.lookback_seconds) ? globalThis.Number(object.lookback_seconds) : 0 };
	},

	toJSON(message: QueryTwapsRequest): unknown {
		const obj: any = {};
		if (message.lookback_seconds !== 0) {
			obj.lookback_seconds = Math.round(message.lookback_seconds);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryTwapsRequest>, I>>(base?: I): QueryTwapsRequest {
		return QueryTwapsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryTwapsRequest>, I>>(object: I): QueryTwapsRequest {
		const message = createBaseQueryTwapsRequest();
		message.lookback_seconds = object.lookback_seconds ?? 0;
		return message;
	},
};

export const QueryTwapsResponse: MessageFns<QueryTwapsResponse, "seiprotocol.seichain.oracle.QueryTwapsResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryTwapsResponse" as const,

	encode(message: QueryTwapsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.oracle_twaps) {
			OracleTwap.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryTwapsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryTwapsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.oracle_twaps.push(OracleTwap.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryTwapsResponse {
		return {
			oracle_twaps: globalThis.Array.isArray(object?.oracle_twaps) ? object.oracle_twaps.map((e: any) => OracleTwap.fromJSON(e)) : [],
		};
	},

	toJSON(message: QueryTwapsResponse): unknown {
		const obj: any = {};
		if (message.oracle_twaps?.length) {
			obj.oracle_twaps = message.oracle_twaps.map((e) => OracleTwap.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryTwapsResponse>, I>>(base?: I): QueryTwapsResponse {
		return QueryTwapsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryTwapsResponse>, I>>(object: I): QueryTwapsResponse {
		const message = createBaseQueryTwapsResponse();
		message.oracle_twaps = object.oracle_twaps?.map((e) => OracleTwap.fromPartial(e)) || [];
		return message;
	},
};

export const QueryFeederDelegationRequest: MessageFns<QueryFeederDelegationRequest, "seiprotocol.seichain.oracle.QueryFeederDelegationRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryFeederDelegationRequest" as const,

	encode(message: QueryFeederDelegationRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_addr !== "") {
			writer.uint32(10).string(message.validator_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryFeederDelegationRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryFeederDelegationRequest {
		return { validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : "" };
	},

	toJSON(message: QueryFeederDelegationRequest): unknown {
		const obj: any = {};
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryFeederDelegationRequest>, I>>(base?: I): QueryFeederDelegationRequest {
		return QueryFeederDelegationRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryFeederDelegationRequest>, I>>(object: I): QueryFeederDelegationRequest {
		const message = createBaseQueryFeederDelegationRequest();
		message.validator_addr = object.validator_addr ?? "";
		return message;
	},
};

export const QueryFeederDelegationResponse: MessageFns<QueryFeederDelegationResponse, "seiprotocol.seichain.oracle.QueryFeederDelegationResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryFeederDelegationResponse" as const,

	encode(message: QueryFeederDelegationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.feeder_addr !== "") {
			writer.uint32(10).string(message.feeder_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryFeederDelegationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.feeder_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryFeederDelegationResponse {
		return { feeder_addr: isSet(object.feeder_addr) ? globalThis.String(object.feeder_addr) : "" };
	},

	toJSON(message: QueryFeederDelegationResponse): unknown {
		const obj: any = {};
		if (message.feeder_addr !== "") {
			obj.feeder_addr = message.feeder_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryFeederDelegationResponse>, I>>(base?: I): QueryFeederDelegationResponse {
		return QueryFeederDelegationResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryFeederDelegationResponse>, I>>(object: I): QueryFeederDelegationResponse {
		const message = createBaseQueryFeederDelegationResponse();
		message.feeder_addr = object.feeder_addr ?? "";
		return message;
	},
};

export const QueryVotePenaltyCounterRequest: MessageFns<QueryVotePenaltyCounterRequest, "seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest" as const,

	encode(message: QueryVotePenaltyCounterRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_addr !== "") {
			writer.uint32(10).string(message.validator_addr);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePenaltyCounterRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVotePenaltyCounterRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_addr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryVotePenaltyCounterRequest {
		return { validator_addr: isSet(object.validator_addr) ? globalThis.String(object.validator_addr) : "" };
	},

	toJSON(message: QueryVotePenaltyCounterRequest): unknown {
		const obj: any = {};
		if (message.validator_addr !== "") {
			obj.validator_addr = message.validator_addr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVotePenaltyCounterRequest>, I>>(base?: I): QueryVotePenaltyCounterRequest {
		return QueryVotePenaltyCounterRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVotePenaltyCounterRequest>, I>>(object: I): QueryVotePenaltyCounterRequest {
		const message = createBaseQueryVotePenaltyCounterRequest();
		message.validator_addr = object.validator_addr ?? "";
		return message;
	},
};

export const QueryVotePenaltyCounterResponse: MessageFns<QueryVotePenaltyCounterResponse, "seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse" as const,

	encode(message: QueryVotePenaltyCounterResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.vote_penalty_counter !== undefined) {
			VotePenaltyCounter.encode(message.vote_penalty_counter, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePenaltyCounterResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryVotePenaltyCounterResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.vote_penalty_counter = VotePenaltyCounter.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryVotePenaltyCounterResponse {
		return {
			vote_penalty_counter: isSet(object.vote_penalty_counter) ? VotePenaltyCounter.fromJSON(object.vote_penalty_counter) : undefined,
		};
	},

	toJSON(message: QueryVotePenaltyCounterResponse): unknown {
		const obj: any = {};
		if (message.vote_penalty_counter !== undefined) {
			obj.vote_penalty_counter = VotePenaltyCounter.toJSON(message.vote_penalty_counter);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryVotePenaltyCounterResponse>, I>>(base?: I): QueryVotePenaltyCounterResponse {
		return QueryVotePenaltyCounterResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryVotePenaltyCounterResponse>, I>>(object: I): QueryVotePenaltyCounterResponse {
		const message = createBaseQueryVotePenaltyCounterResponse();
		message.vote_penalty_counter =
			object.vote_penalty_counter !== undefined && object.vote_penalty_counter !== null
				? VotePenaltyCounter.fromPartial(object.vote_penalty_counter)
				: undefined;
		return message;
	},
};

export const QuerySlashWindowRequest: MessageFns<QuerySlashWindowRequest, "seiprotocol.seichain.oracle.QuerySlashWindowRequest"> = {
	$type: "seiprotocol.seichain.oracle.QuerySlashWindowRequest" as const,

	encode(_: QuerySlashWindowRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySlashWindowRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QuerySlashWindowRequest {
		return {};
	},

	toJSON(_: QuerySlashWindowRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySlashWindowRequest>, I>>(base?: I): QuerySlashWindowRequest {
		return QuerySlashWindowRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySlashWindowRequest>, I>>(_: I): QuerySlashWindowRequest {
		const message = createBaseQuerySlashWindowRequest();
		return message;
	},
};

export const QuerySlashWindowResponse: MessageFns<QuerySlashWindowResponse, "seiprotocol.seichain.oracle.QuerySlashWindowResponse"> = {
	$type: "seiprotocol.seichain.oracle.QuerySlashWindowResponse" as const,

	encode(message: QuerySlashWindowResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.window_progress !== 0) {
			writer.uint32(8).uint64(message.window_progress);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySlashWindowResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.window_progress = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySlashWindowResponse {
		return { window_progress: isSet(object.window_progress) ? globalThis.Number(object.window_progress) : 0 };
	},

	toJSON(message: QuerySlashWindowResponse): unknown {
		const obj: any = {};
		if (message.window_progress !== 0) {
			obj.window_progress = Math.round(message.window_progress);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySlashWindowResponse>, I>>(base?: I): QuerySlashWindowResponse {
		return QuerySlashWindowResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySlashWindowResponse>, I>>(object: I): QuerySlashWindowResponse {
		const message = createBaseQuerySlashWindowResponse();
		message.window_progress = object.window_progress ?? 0;
		return message;
	},
};

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "seiprotocol.seichain.oracle.QueryParamsRequest"> = {
	$type: "seiprotocol.seichain.oracle.QueryParamsRequest" as const,

	encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): QueryParamsRequest {
		return {};
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
		return QueryParamsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		return message;
	},
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "seiprotocol.seichain.oracle.QueryParamsResponse"> = {
	$type: "seiprotocol.seichain.oracle.QueryParamsResponse" as const,

	encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
		return QueryParamsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		return message;
	},
};

function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
	return { denom: "" };
}

function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
	return { oracle_exchange_rate: undefined };
}

function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
	return {};
}

function createBaseDenomOracleExchangeRatePair(): DenomOracleExchangeRatePair {
	return { denom: "", oracle_exchange_rate: undefined };
}

function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
	return { denom_oracle_exchange_rate_pairs: [] };
}

function createBaseQueryActivesRequest(): QueryActivesRequest {
	return {};
}

function createBaseQueryActivesResponse(): QueryActivesResponse {
	return { actives: [] };
}

function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
	return {};
}

function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
	return { vote_targets: [] };
}

function createBaseQueryPriceSnapshotHistoryRequest(): QueryPriceSnapshotHistoryRequest {
	return {};
}

function createBaseQueryPriceSnapshotHistoryResponse(): QueryPriceSnapshotHistoryResponse {
	return { price_snapshots: [] };
}

function createBaseQueryTwapsRequest(): QueryTwapsRequest {
	return { lookback_seconds: 0 };
}

function createBaseQueryTwapsResponse(): QueryTwapsResponse {
	return { oracle_twaps: [] };
}

function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
	return { validator_addr: "" };
}

function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
	return { feeder_addr: "" };
}

function createBaseQueryVotePenaltyCounterRequest(): QueryVotePenaltyCounterRequest {
	return { validator_addr: "" };
}

function createBaseQueryVotePenaltyCounterResponse(): QueryVotePenaltyCounterResponse {
	return { vote_penalty_counter: undefined };
}

function createBaseQuerySlashWindowRequest(): QuerySlashWindowRequest {
	return {};
}

function createBaseQuerySlashWindowResponse(): QuerySlashWindowResponse {
	return { window_progress: 0 };
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.oracle.QueryActivesRequest", QueryActivesRequest as never],
	["/seiprotocol.seichain.oracle.QueryTwapsRequest", QueryTwapsRequest as never],
	["/seiprotocol.seichain.oracle.QueryTwapsResponse", QueryTwapsResponse as never],
	["/seiprotocol.seichain.oracle.QueryParamsRequest", QueryParamsRequest as never],
	["/seiprotocol.seichain.oracle.QueryParamsResponse", QueryParamsResponse as never],
];
export const aminoConverters = {
	"/seiprotocol.seichain.oracle.QueryActivesRequest": {
		aminoType: "oracle/QueryActivesRequest",
		toAmino: (message: QueryActivesRequest) => ({ ...message }),
		fromAmino: (object: QueryActivesRequest) => ({ ...object }),
	},

	"/seiprotocol.seichain.oracle.QueryTwapsRequest": {
		aminoType: "oracle/QueryTwapsRequest",
		toAmino: (message: QueryTwapsRequest) => ({ ...message }),
		fromAmino: (object: QueryTwapsRequest) => ({ ...object }),
	},

	"/seiprotocol.seichain.oracle.QueryTwapsResponse": {
		aminoType: "oracle/QueryTwapsResponse",
		toAmino: (message: QueryTwapsResponse) => ({ ...message }),
		fromAmino: (object: QueryTwapsResponse) => ({ ...object }),
	},

	"/seiprotocol.seichain.oracle.QueryParamsRequest": {
		aminoType: "oracle/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object }),
	},

	"/seiprotocol.seichain.oracle.QueryParamsResponse": {
		aminoType: "oracle/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object }),
	},
};
