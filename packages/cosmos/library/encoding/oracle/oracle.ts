import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	AggregateExchangeRateVote as AggregateExchangeRateVote_type,
	Denom as Denom_type,
	ExchangeRateTuple as ExchangeRateTuple_type,
	OracleExchangeRate as OracleExchangeRate_type,
	OracleTwap as OracleTwap_type,
	Params as Params_type,
	PriceSnapshotItem as PriceSnapshotItem_type,
	PriceSnapshot as PriceSnapshot_type,
	VotePenaltyCounter as VotePenaltyCounter_type
} from "../../types/oracle";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface Params extends Params_type {}
export interface Denom extends Denom_type {}
export interface AggregateExchangeRateVote extends AggregateExchangeRateVote_type {}
export interface ExchangeRateTuple extends ExchangeRateTuple_type {}
export interface OracleExchangeRate extends OracleExchangeRate_type {}
export interface PriceSnapshotItem extends PriceSnapshotItem_type {}
export interface PriceSnapshot extends PriceSnapshot_type {}
export interface OracleTwap extends OracleTwap_type {}
export interface VotePenaltyCounter extends VotePenaltyCounter_type {}

export const Params: MessageFns<Params, "seiprotocol.seichain.oracle.Params"> = {
	$type: "seiprotocol.seichain.oracle.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.vote_period !== 0) {
			writer.uint32(8).uint64(message.vote_period);
		}
		if (message.vote_threshold !== "") {
			writer.uint32(18).string(message.vote_threshold);
		}
		if (message.reward_band !== "") {
			writer.uint32(26).string(message.reward_band);
		}
		for (const v of message.whitelist) {
			Denom.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.slash_fraction !== "") {
			writer.uint32(42).string(message.slash_fraction);
		}
		if (message.slash_window !== 0) {
			writer.uint32(48).uint64(message.slash_window);
		}
		if (message.min_valid_per_window !== "") {
			writer.uint32(58).string(message.min_valid_per_window);
		}
		if (message.lookback_duration !== 0) {
			writer.uint32(72).uint64(message.lookback_duration);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.vote_period = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.vote_threshold = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.reward_band = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.whitelist.push(Denom.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.slash_fraction = reader.string();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.slash_window = longToNumber(reader.uint64());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.min_valid_per_window = reader.string();
					continue;
				case 9:
					if (tag !== 72) {
						break;
					}

					message.lookback_duration = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Params {
		return {
			vote_period: isSet(object.vote_period) ? globalThis.Number(object.vote_period) : 0,
			vote_threshold: isSet(object.vote_threshold) ? globalThis.String(object.vote_threshold) : "",
			reward_band: isSet(object.reward_band) ? globalThis.String(object.reward_band) : "",
			whitelist: globalThis.Array.isArray(object?.whitelist) ? object.whitelist.map((e: any) => Denom.fromJSON(e)) : [],
			slash_fraction: isSet(object.slash_fraction) ? globalThis.String(object.slash_fraction) : "",
			slash_window: isSet(object.slash_window) ? globalThis.Number(object.slash_window) : 0,
			min_valid_per_window: isSet(object.min_valid_per_window) ? globalThis.String(object.min_valid_per_window) : "",
			lookback_duration: isSet(object.lookback_duration) ? globalThis.Number(object.lookback_duration) : 0
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.vote_period !== 0) {
			obj.vote_period = Math.round(message.vote_period);
		}
		if (message.vote_threshold !== "") {
			obj.vote_threshold = message.vote_threshold;
		}
		if (message.reward_band !== "") {
			obj.reward_band = message.reward_band;
		}
		if (message.whitelist?.length) {
			obj.whitelist = message.whitelist.map((e) => Denom.toJSON(e));
		}
		if (message.slash_fraction !== "") {
			obj.slash_fraction = message.slash_fraction;
		}
		if (message.slash_window !== 0) {
			obj.slash_window = Math.round(message.slash_window);
		}
		if (message.min_valid_per_window !== "") {
			obj.min_valid_per_window = message.min_valid_per_window;
		}
		if (message.lookback_duration !== 0) {
			obj.lookback_duration = Math.round(message.lookback_duration);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.vote_period = object.vote_period ?? 0;
		message.vote_threshold = object.vote_threshold ?? "";
		message.reward_band = object.reward_band ?? "";
		message.whitelist = object.whitelist?.map((e) => Denom.fromPartial(e)) || [];
		message.slash_fraction = object.slash_fraction ?? "";
		message.slash_window = object.slash_window ?? 0;
		message.min_valid_per_window = object.min_valid_per_window ?? "";
		message.lookback_duration = object.lookback_duration ?? 0;
		return message;
	}
};

export const Denom: MessageFns<Denom, "seiprotocol.seichain.oracle.Denom"> = {
	$type: "seiprotocol.seichain.oracle.Denom" as const,

	encode(message: Denom, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Denom {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDenom();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Denom {
		return { name: isSet(object.name) ? globalThis.String(object.name) : "" };
	},

	toJSON(message: Denom): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Denom>, I>>(base?: I): Denom {
		return Denom.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
		const message = createBaseDenom();
		message.name = object.name ?? "";
		return message;
	}
};

export const AggregateExchangeRateVote: MessageFns<AggregateExchangeRateVote, "seiprotocol.seichain.oracle.AggregateExchangeRateVote"> = {
	$type: "seiprotocol.seichain.oracle.AggregateExchangeRateVote" as const,

	encode(message: AggregateExchangeRateVote, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.exchange_rate_tuples) {
			ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.voter !== "") {
			writer.uint32(18).string(message.voter);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AggregateExchangeRateVote {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAggregateExchangeRateVote();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.exchange_rate_tuples.push(ExchangeRateTuple.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.voter = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AggregateExchangeRateVote {
		return {
			exchange_rate_tuples: globalThis.Array.isArray(object?.exchange_rate_tuples)
				? object.exchange_rate_tuples.map((e: any) => ExchangeRateTuple.fromJSON(e))
				: [],
			voter: isSet(object.voter) ? globalThis.String(object.voter) : ""
		};
	},

	toJSON(message: AggregateExchangeRateVote): unknown {
		const obj: any = {};
		if (message.exchange_rate_tuples?.length) {
			obj.exchange_rate_tuples = message.exchange_rate_tuples.map((e) => ExchangeRateTuple.toJSON(e));
		}
		if (message.voter !== "") {
			obj.voter = message.voter;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(base?: I): AggregateExchangeRateVote {
		return AggregateExchangeRateVote.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AggregateExchangeRateVote>, I>>(object: I): AggregateExchangeRateVote {
		const message = createBaseAggregateExchangeRateVote();
		message.exchange_rate_tuples = object.exchange_rate_tuples?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
		message.voter = object.voter ?? "";
		return message;
	}
};

export const ExchangeRateTuple: MessageFns<ExchangeRateTuple, "seiprotocol.seichain.oracle.ExchangeRateTuple"> = {
	$type: "seiprotocol.seichain.oracle.ExchangeRateTuple" as const,

	encode(message: ExchangeRateTuple, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.exchange_rate !== "") {
			writer.uint32(18).string(message.exchange_rate);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ExchangeRateTuple {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExchangeRateTuple();
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

					message.exchange_rate = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ExchangeRateTuple {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			exchange_rate: isSet(object.exchange_rate) ? globalThis.String(object.exchange_rate) : ""
		};
	},

	toJSON(message: ExchangeRateTuple): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.exchange_rate !== "") {
			obj.exchange_rate = message.exchange_rate;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(base?: I): ExchangeRateTuple {
		return ExchangeRateTuple.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ExchangeRateTuple>, I>>(object: I): ExchangeRateTuple {
		const message = createBaseExchangeRateTuple();
		message.denom = object.denom ?? "";
		message.exchange_rate = object.exchange_rate ?? "";
		return message;
	}
};

export const OracleExchangeRate: MessageFns<OracleExchangeRate, "seiprotocol.seichain.oracle.OracleExchangeRate"> = {
	$type: "seiprotocol.seichain.oracle.OracleExchangeRate" as const,

	encode(message: OracleExchangeRate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.exchange_rate !== "") {
			writer.uint32(10).string(message.exchange_rate);
		}
		if (message.last_update !== "") {
			writer.uint32(18).string(message.last_update);
		}
		if (message.last_update_timestamp !== 0) {
			writer.uint32(24).int64(message.last_update_timestamp);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): OracleExchangeRate {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseOracleExchangeRate();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.exchange_rate = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.last_update = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.last_update_timestamp = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): OracleExchangeRate {
		return {
			exchange_rate: isSet(object.exchange_rate) ? globalThis.String(object.exchange_rate) : "",
			last_update: isSet(object.last_update) ? globalThis.String(object.last_update) : "",
			last_update_timestamp: isSet(object.last_update_timestamp) ? globalThis.Number(object.last_update_timestamp) : 0
		};
	},

	toJSON(message: OracleExchangeRate): unknown {
		const obj: any = {};
		if (message.exchange_rate !== "") {
			obj.exchange_rate = message.exchange_rate;
		}
		if (message.last_update !== "") {
			obj.last_update = message.last_update;
		}
		if (message.last_update_timestamp !== 0) {
			obj.last_update_timestamp = Math.round(message.last_update_timestamp);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<OracleExchangeRate>, I>>(base?: I): OracleExchangeRate {
		return OracleExchangeRate.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<OracleExchangeRate>, I>>(object: I): OracleExchangeRate {
		const message = createBaseOracleExchangeRate();
		message.exchange_rate = object.exchange_rate ?? "";
		message.last_update = object.last_update ?? "";
		message.last_update_timestamp = object.last_update_timestamp ?? 0;
		return message;
	}
};

export const PriceSnapshotItem: MessageFns<PriceSnapshotItem, "seiprotocol.seichain.oracle.PriceSnapshotItem"> = {
	$type: "seiprotocol.seichain.oracle.PriceSnapshotItem" as const,

	encode(message: PriceSnapshotItem, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.oracle_exchange_rate !== undefined) {
			OracleExchangeRate.encode(message.oracle_exchange_rate, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PriceSnapshotItem {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePriceSnapshotItem();
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

	fromJSON(object: any): PriceSnapshotItem {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			oracle_exchange_rate: isSet(object.oracle_exchange_rate) ? OracleExchangeRate.fromJSON(object.oracle_exchange_rate) : undefined
		};
	},

	toJSON(message: PriceSnapshotItem): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.oracle_exchange_rate !== undefined) {
			obj.oracle_exchange_rate = OracleExchangeRate.toJSON(message.oracle_exchange_rate);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PriceSnapshotItem>, I>>(base?: I): PriceSnapshotItem {
		return PriceSnapshotItem.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PriceSnapshotItem>, I>>(object: I): PriceSnapshotItem {
		const message = createBasePriceSnapshotItem();
		message.denom = object.denom ?? "";
		message.oracle_exchange_rate =
			object.oracle_exchange_rate !== undefined && object.oracle_exchange_rate !== null
				? OracleExchangeRate.fromPartial(object.oracle_exchange_rate)
				: undefined;
		return message;
	}
};

export const PriceSnapshot: MessageFns<PriceSnapshot, "seiprotocol.seichain.oracle.PriceSnapshot"> = {
	$type: "seiprotocol.seichain.oracle.PriceSnapshot" as const,

	encode(message: PriceSnapshot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.snapshot_timestamp !== 0) {
			writer.uint32(8).int64(message.snapshot_timestamp);
		}
		for (const v of message.price_snapshot_items) {
			PriceSnapshotItem.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PriceSnapshot {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePriceSnapshot();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.snapshot_timestamp = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.price_snapshot_items.push(PriceSnapshotItem.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PriceSnapshot {
		return {
			snapshot_timestamp: isSet(object.snapshot_timestamp) ? globalThis.Number(object.snapshot_timestamp) : 0,
			price_snapshot_items: globalThis.Array.isArray(object?.price_snapshot_items)
				? object.price_snapshot_items.map((e: any) => PriceSnapshotItem.fromJSON(e))
				: []
		};
	},

	toJSON(message: PriceSnapshot): unknown {
		const obj: any = {};
		if (message.snapshot_timestamp !== 0) {
			obj.snapshot_timestamp = Math.round(message.snapshot_timestamp);
		}
		if (message.price_snapshot_items?.length) {
			obj.price_snapshot_items = message.price_snapshot_items.map((e) => PriceSnapshotItem.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PriceSnapshot>, I>>(base?: I): PriceSnapshot {
		return PriceSnapshot.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PriceSnapshot>, I>>(object: I): PriceSnapshot {
		const message = createBasePriceSnapshot();
		message.snapshot_timestamp = object.snapshot_timestamp ?? 0;
		message.price_snapshot_items = object.price_snapshot_items?.map((e) => PriceSnapshotItem.fromPartial(e)) || [];
		return message;
	}
};

export const OracleTwap: MessageFns<OracleTwap, "seiprotocol.seichain.oracle.OracleTwap"> = {
	$type: "seiprotocol.seichain.oracle.OracleTwap" as const,

	encode(message: OracleTwap, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		if (message.twap !== "") {
			writer.uint32(18).string(message.twap);
		}
		if (message.lookback_seconds !== 0) {
			writer.uint32(24).int64(message.lookback_seconds);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): OracleTwap {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseOracleTwap();
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

					message.twap = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.lookback_seconds = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): OracleTwap {
		return {
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			twap: isSet(object.twap) ? globalThis.String(object.twap) : "",
			lookback_seconds: isSet(object.lookback_seconds) ? globalThis.Number(object.lookback_seconds) : 0
		};
	},

	toJSON(message: OracleTwap): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.twap !== "") {
			obj.twap = message.twap;
		}
		if (message.lookback_seconds !== 0) {
			obj.lookback_seconds = Math.round(message.lookback_seconds);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<OracleTwap>, I>>(base?: I): OracleTwap {
		return OracleTwap.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<OracleTwap>, I>>(object: I): OracleTwap {
		const message = createBaseOracleTwap();
		message.denom = object.denom ?? "";
		message.twap = object.twap ?? "";
		message.lookback_seconds = object.lookback_seconds ?? 0;
		return message;
	}
};

export const VotePenaltyCounter: MessageFns<VotePenaltyCounter, "seiprotocol.seichain.oracle.VotePenaltyCounter"> = {
	$type: "seiprotocol.seichain.oracle.VotePenaltyCounter" as const,

	encode(message: VotePenaltyCounter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.miss_count !== 0) {
			writer.uint32(8).uint64(message.miss_count);
		}
		if (message.abstain_count !== 0) {
			writer.uint32(16).uint64(message.abstain_count);
		}
		if (message.success_count !== 0) {
			writer.uint32(24).uint64(message.success_count);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): VotePenaltyCounter {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVotePenaltyCounter();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.miss_count = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.abstain_count = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.success_count = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): VotePenaltyCounter {
		return {
			miss_count: isSet(object.miss_count) ? globalThis.Number(object.miss_count) : 0,
			abstain_count: isSet(object.abstain_count) ? globalThis.Number(object.abstain_count) : 0,
			success_count: isSet(object.success_count) ? globalThis.Number(object.success_count) : 0
		};
	},

	toJSON(message: VotePenaltyCounter): unknown {
		const obj: any = {};
		if (message.miss_count !== 0) {
			obj.miss_count = Math.round(message.miss_count);
		}
		if (message.abstain_count !== 0) {
			obj.abstain_count = Math.round(message.abstain_count);
		}
		if (message.success_count !== 0) {
			obj.success_count = Math.round(message.success_count);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<VotePenaltyCounter>, I>>(base?: I): VotePenaltyCounter {
		return VotePenaltyCounter.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<VotePenaltyCounter>, I>>(object: I): VotePenaltyCounter {
		const message = createBaseVotePenaltyCounter();
		message.miss_count = object.miss_count ?? 0;
		message.abstain_count = object.abstain_count ?? 0;
		message.success_count = object.success_count ?? 0;
		return message;
	}
};

function createBaseParams(): Params {
	return {
		vote_period: 0,
		vote_threshold: "",
		reward_band: "",
		whitelist: [],
		slash_fraction: "",
		slash_window: 0,
		min_valid_per_window: "",
		lookback_duration: 0
	};
}

function createBaseDenom(): Denom {
	return { name: "" };
}

function createBaseAggregateExchangeRateVote(): AggregateExchangeRateVote {
	return { exchange_rate_tuples: [], voter: "" };
}

function createBaseExchangeRateTuple(): ExchangeRateTuple {
	return { denom: "", exchange_rate: "" };
}

function createBaseOracleExchangeRate(): OracleExchangeRate {
	return { exchange_rate: "", last_update: "", last_update_timestamp: 0 };
}

function createBasePriceSnapshotItem(): PriceSnapshotItem {
	return { denom: "", oracle_exchange_rate: undefined };
}

function createBasePriceSnapshot(): PriceSnapshot {
	return { snapshot_timestamp: 0, price_snapshot_items: [] };
}

function createBaseOracleTwap(): OracleTwap {
	return { denom: "", twap: "", lookback_seconds: 0 };
}

function createBaseVotePenaltyCounter(): VotePenaltyCounter {
	return { miss_count: 0, abstain_count: 0, success_count: 0 };
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
	["/seiprotocol.seichain.oracle.Params", Params as never],
	["/seiprotocol.seichain.oracle.Denom", Denom as never],
	["/seiprotocol.seichain.oracle.AggregateExchangeRateVote", AggregateExchangeRateVote as never],
	["/seiprotocol.seichain.oracle.ExchangeRateTuple", ExchangeRateTuple as never],
	["/seiprotocol.seichain.oracle.OracleExchangeRate", OracleExchangeRate as never],
	["/seiprotocol.seichain.oracle.PriceSnapshotItem", PriceSnapshotItem as never],
	["/seiprotocol.seichain.oracle.PriceSnapshot", PriceSnapshot as never],
	["/seiprotocol.seichain.oracle.OracleTwap", OracleTwap as never],
	["/seiprotocol.seichain.oracle.VotePenaltyCounter", VotePenaltyCounter as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.oracle.Params": {
		aminoType: "oracle/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.Denom": {
		aminoType: "oracle/Denom",
		toAmino: (message: Denom) => ({ ...message }),
		fromAmino: (object: Denom) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.AggregateExchangeRateVote": {
		aminoType: "oracle/AggregateExchangeRateVote",
		toAmino: (message: AggregateExchangeRateVote) => ({ ...message }),
		fromAmino: (object: AggregateExchangeRateVote) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.ExchangeRateTuple": {
		aminoType: "oracle/ExchangeRateTuple",
		toAmino: (message: ExchangeRateTuple) => ({ ...message }),
		fromAmino: (object: ExchangeRateTuple) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.OracleExchangeRate": {
		aminoType: "oracle/OracleExchangeRate",
		toAmino: (message: OracleExchangeRate) => ({ ...message }),
		fromAmino: (object: OracleExchangeRate) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.PriceSnapshotItem": {
		aminoType: "oracle/PriceSnapshotItem",
		toAmino: (message: PriceSnapshotItem) => ({ ...message }),
		fromAmino: (object: PriceSnapshotItem) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.PriceSnapshot": {
		aminoType: "oracle/PriceSnapshot",
		toAmino: (message: PriceSnapshot) => ({ ...message }),
		fromAmino: (object: PriceSnapshot) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.OracleTwap": {
		aminoType: "oracle/OracleTwap",
		toAmino: (message: OracleTwap) => ({ ...message }),
		fromAmino: (object: OracleTwap) => ({ ...object })
	},

	"/seiprotocol.seichain.oracle.VotePenaltyCounter": {
		aminoType: "oracle/VotePenaltyCounter",
		toAmino: (message: VotePenaltyCounter) => ({ ...message }),
		fromAmino: (object: VotePenaltyCounter) => ({ ...object })
	}
};
