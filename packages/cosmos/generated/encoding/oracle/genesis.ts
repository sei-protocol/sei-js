import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { AggregateExchangeRateVote, ExchangeRateTuple, Params, PriceSnapshot, VotePenaltyCounter } from "./oracle";

import type { FeederDelegation as FeederDelegationType, GenesisState as GenesisStateType, PenaltyCounter as PenaltyCounterType } from "../../types/oracle";

import type { DeepPartial, Exact, MessageFns } from "../common.ts";

interface GenesisState extends GenesisStateType {}
interface FeederDelegation extends FeederDelegationType {}
interface PenaltyCounter extends PenaltyCounterType {}

export const GenesisState: MessageFns<GenesisState, "seiprotocol.seichain.oracle.GenesisState"> = {
	$type: "seiprotocol.seichain.oracle.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.feeder_delegations) {
			FeederDelegation.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.exchange_rates) {
			ExchangeRateTuple.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.penalty_counters) {
			PenaltyCounter.encode(v!, writer.uint32(34).fork()).join();
		}
		for (const v of message.aggregate_exchange_rate_votes) {
			AggregateExchangeRateVote.encode(v!, writer.uint32(50).fork()).join();
		}
		for (const v of message.price_snapshots) {
			PriceSnapshot.encode(v!, writer.uint32(58).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.feeder_delegations.push(FeederDelegation.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.exchange_rates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.penalty_counters.push(PenaltyCounter.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.aggregate_exchange_rate_votes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
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

	fromJSON(object: any): GenesisState {
		return {
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
			feeder_delegations: globalThis.Array.isArray(object?.feeder_delegations) ? object.feeder_delegations.map((e: any) => FeederDelegation.fromJSON(e)) : [],
			exchange_rates: globalThis.Array.isArray(object?.exchange_rates) ? object.exchange_rates.map((e: any) => ExchangeRateTuple.fromJSON(e)) : [],
			penalty_counters: globalThis.Array.isArray(object?.penalty_counters) ? object.penalty_counters.map((e: any) => PenaltyCounter.fromJSON(e)) : [],
			aggregate_exchange_rate_votes: globalThis.Array.isArray(object?.aggregate_exchange_rate_votes)
				? object.aggregate_exchange_rate_votes.map((e: any) => AggregateExchangeRateVote.fromJSON(e))
				: [],
			price_snapshots: globalThis.Array.isArray(object?.price_snapshots) ? object.price_snapshots.map((e: any) => PriceSnapshot.fromJSON(e)) : [],
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.feeder_delegations?.length) {
			obj.feeder_delegations = message.feeder_delegations.map((e) => FeederDelegation.toJSON(e));
		}
		if (message.exchange_rates?.length) {
			obj.exchange_rates = message.exchange_rates.map((e) => ExchangeRateTuple.toJSON(e));
		}
		if (message.penalty_counters?.length) {
			obj.penalty_counters = message.penalty_counters.map((e) => PenaltyCounter.toJSON(e));
		}
		if (message.aggregate_exchange_rate_votes?.length) {
			obj.aggregate_exchange_rate_votes = message.aggregate_exchange_rate_votes.map((e) => AggregateExchangeRateVote.toJSON(e));
		}
		if (message.price_snapshots?.length) {
			obj.price_snapshots = message.price_snapshots.map((e) => PriceSnapshot.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.feeder_delegations = object.feeder_delegations?.map((e) => FeederDelegation.fromPartial(e)) || [];
		message.exchange_rates = object.exchange_rates?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
		message.penalty_counters = object.penalty_counters?.map((e) => PenaltyCounter.fromPartial(e)) || [];
		message.aggregate_exchange_rate_votes = object.aggregate_exchange_rate_votes?.map((e) => AggregateExchangeRateVote.fromPartial(e)) || [];
		message.price_snapshots = object.price_snapshots?.map((e) => PriceSnapshot.fromPartial(e)) || [];
		return message;
	},
};

export const FeederDelegation: MessageFns<FeederDelegation, "seiprotocol.seichain.oracle.FeederDelegation"> = {
	$type: "seiprotocol.seichain.oracle.FeederDelegation" as const,

	encode(message: FeederDelegation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.feeder_address !== "") {
			writer.uint32(10).string(message.feeder_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FeederDelegation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFeederDelegation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.feeder_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FeederDelegation {
		return {
			feeder_address: isSet(object.feeder_address) ? globalThis.String(object.feeder_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
		};
	},

	toJSON(message: FeederDelegation): unknown {
		const obj: any = {};
		if (message.feeder_address !== "") {
			obj.feeder_address = message.feeder_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FeederDelegation>, I>>(base?: I): FeederDelegation {
		return FeederDelegation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FeederDelegation>, I>>(object: I): FeederDelegation {
		const message = createBaseFeederDelegation();
		message.feeder_address = object.feeder_address ?? "";
		message.validator_address = object.validator_address ?? "";
		return message;
	},
};

export const PenaltyCounter: MessageFns<PenaltyCounter, "seiprotocol.seichain.oracle.PenaltyCounter"> = {
	$type: "seiprotocol.seichain.oracle.PenaltyCounter" as const,

	encode(message: PenaltyCounter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		if (message.vote_penalty_counter !== undefined) {
			VotePenaltyCounter.encode(message.vote_penalty_counter, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PenaltyCounter {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePenaltyCounter();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
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

	fromJSON(object: any): PenaltyCounter {
		return {
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			vote_penalty_counter: isSet(object.vote_penalty_counter) ? VotePenaltyCounter.fromJSON(object.vote_penalty_counter) : undefined,
		};
	},

	toJSON(message: PenaltyCounter): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.vote_penalty_counter !== undefined) {
			obj.vote_penalty_counter = VotePenaltyCounter.toJSON(message.vote_penalty_counter);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PenaltyCounter>, I>>(base?: I): PenaltyCounter {
		return PenaltyCounter.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PenaltyCounter>, I>>(object: I): PenaltyCounter {
		const message = createBasePenaltyCounter();
		message.validator_address = object.validator_address ?? "";
		message.vote_penalty_counter =
			object.vote_penalty_counter !== undefined && object.vote_penalty_counter !== null
				? VotePenaltyCounter.fromPartial(object.vote_penalty_counter)
				: undefined;
		return message;
	},
};

function createBaseGenesisState(): GenesisState {
	return {
		params: undefined,
		feeder_delegations: [],
		exchange_rates: [],
		penalty_counters: [],
		aggregate_exchange_rate_votes: [],
		price_snapshots: [],
	};
}

function createBaseFeederDelegation(): FeederDelegation {
	return { feeder_address: "", validator_address: "" };
}

function createBasePenaltyCounter(): PenaltyCounter {
	return { validator_address: "", vote_penalty_counter: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.oracle.GenesisState", GenesisState as never],
	["/seiprotocol.seichain.oracle.FeederDelegation", FeederDelegation as never],
	["/seiprotocol.seichain.oracle.PenaltyCounter", PenaltyCounter as never],
];
export const aminoConverters = {
	"/seiprotocol.seichain.oracle.GenesisState": {
		aminoType: "seiprotocol.seichain.oracle.GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object }),
	},

	"/seiprotocol.seichain.oracle.FeederDelegation": {
		aminoType: "seiprotocol.seichain.oracle.FeederDelegation",
		toAmino: (message: FeederDelegation) => ({ ...message }),
		fromAmino: (object: FeederDelegation) => ({ ...object }),
	},

	"/seiprotocol.seichain.oracle.PenaltyCounter": {
		aminoType: "seiprotocol.seichain.oracle.PenaltyCounter",
		toAmino: (message: PenaltyCounter) => ({ ...message }),
		fromAmino: (object: PenaltyCounter) => ({ ...object }),
	},
};
