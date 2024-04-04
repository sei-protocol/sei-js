import {
	Params,
	ParamsAmino,
	ParamsSDKType,
	ExchangeRateTuple,
	ExchangeRateTupleAmino,
	ExchangeRateTupleSDKType,
	AggregateExchangeRateVote,
	AggregateExchangeRateVoteAmino,
	AggregateExchangeRateVoteSDKType,
	PriceSnapshot,
	PriceSnapshotAmino,
	PriceSnapshotSDKType,
	VotePenaltyCounter,
	VotePenaltyCounterAmino,
	VotePenaltyCounterSDKType
} from './oracle';
import { BinaryReader, BinaryWriter } from '../binary';
export interface GenesisState {
	params: Params | undefined;
	feederDelegations: FeederDelegation[];
	exchangeRates: ExchangeRateTuple[];
	penaltyCounters: PenaltyCounter[];
	aggregateExchangeRateVotes: AggregateExchangeRateVote[];
	priceSnapshots: PriceSnapshot[];
}
export interface GenesisStateProtoMsg {
	typeUrl: '/seiprotocol.seichain.oracle.GenesisState';
	value: Uint8Array;
}
export interface GenesisStateAmino {
	params?: ParamsAmino | undefined;
	feeder_delegations?: FeederDelegationAmino[];
	exchange_rates?: ExchangeRateTupleAmino[];
	penalty_counters?: PenaltyCounterAmino[];
	aggregate_exchange_rate_votes?: AggregateExchangeRateVoteAmino[];
	price_snapshots?: PriceSnapshotAmino[];
}
export interface GenesisStateAminoMsg {
	type: '/seiprotocol.seichain.oracle.GenesisState';
	value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
	params: ParamsSDKType | undefined;
	feeder_delegations: FeederDelegationSDKType[];
	exchange_rates: ExchangeRateTupleSDKType[];
	penalty_counters: PenaltyCounterSDKType[];
	aggregate_exchange_rate_votes: AggregateExchangeRateVoteSDKType[];
	price_snapshots: PriceSnapshotSDKType[];
}
export interface FeederDelegation {
	feederAddress: string;
	validatorAddress: string;
}
export interface FeederDelegationProtoMsg {
	typeUrl: '/seiprotocol.seichain.oracle.FeederDelegation';
	value: Uint8Array;
}
export interface FeederDelegationAmino {
	feeder_address?: string;
	validator_address?: string;
}
export interface FeederDelegationAminoMsg {
	type: '/seiprotocol.seichain.oracle.FeederDelegation';
	value: FeederDelegationAmino;
}
export interface FeederDelegationSDKType {
	feeder_address: string;
	validator_address: string;
}
export interface PenaltyCounter {
	validatorAddress: string;
	votePenaltyCounter?: VotePenaltyCounter | undefined;
}
export interface PenaltyCounterProtoMsg {
	typeUrl: '/seiprotocol.seichain.oracle.PenaltyCounter';
	value: Uint8Array;
}
export interface PenaltyCounterAmino {
	validator_address?: string;
	vote_penalty_counter?: VotePenaltyCounterAmino | undefined;
}
export interface PenaltyCounterAminoMsg {
	type: '/seiprotocol.seichain.oracle.PenaltyCounter';
	value: PenaltyCounterAmino;
}
export interface PenaltyCounterSDKType {
	validator_address: string;
	vote_penalty_counter?: VotePenaltyCounterSDKType | undefined;
}
function createBaseGenesisState(): GenesisState {
	return {
		params: Params.fromPartial({}),
		feederDelegations: [],
		exchangeRates: [],
		penaltyCounters: [],
		aggregateExchangeRateVotes: [],
		priceSnapshots: []
	};
}
export const GenesisState = {
	typeUrl: '/seiprotocol.seichain.oracle.GenesisState',
	encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.feederDelegations) {
			FeederDelegation.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		for (const v of message.exchangeRates) {
			ExchangeRateTuple.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		for (const v of message.penaltyCounters) {
			PenaltyCounter.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		for (const v of message.aggregateExchangeRateVotes) {
			AggregateExchangeRateVote.encode(v!, writer.uint32(50).fork()).ldelim();
		}
		for (const v of message.priceSnapshots) {
			PriceSnapshot.encode(v!, writer.uint32(58).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				case 2:
					message.feederDelegations.push(FeederDelegation.decode(reader, reader.uint32()));
					break;
				case 3:
					message.exchangeRates.push(ExchangeRateTuple.decode(reader, reader.uint32()));
					break;
				case 4:
					message.penaltyCounters.push(PenaltyCounter.decode(reader, reader.uint32()));
					break;
				case 6:
					message.aggregateExchangeRateVotes.push(AggregateExchangeRateVote.decode(reader, reader.uint32()));
					break;
				case 7:
					message.priceSnapshots.push(PriceSnapshot.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GenesisState>): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.feederDelegations = object.feederDelegations?.map((e) => FeederDelegation.fromPartial(e)) || [];
		message.exchangeRates = object.exchangeRates?.map((e) => ExchangeRateTuple.fromPartial(e)) || [];
		message.penaltyCounters = object.penaltyCounters?.map((e) => PenaltyCounter.fromPartial(e)) || [];
		message.aggregateExchangeRateVotes = object.aggregateExchangeRateVotes?.map((e) => AggregateExchangeRateVote.fromPartial(e)) || [];
		message.priceSnapshots = object.priceSnapshots?.map((e) => PriceSnapshot.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: GenesisStateAmino): GenesisState {
		const message = createBaseGenesisState();
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params);
		}
		message.feederDelegations = object.feeder_delegations?.map((e) => FeederDelegation.fromAmino(e)) || [];
		message.exchangeRates = object.exchange_rates?.map((e) => ExchangeRateTuple.fromAmino(e)) || [];
		message.penaltyCounters = object.penalty_counters?.map((e) => PenaltyCounter.fromAmino(e)) || [];
		message.aggregateExchangeRateVotes = object.aggregate_exchange_rate_votes?.map((e) => AggregateExchangeRateVote.fromAmino(e)) || [];
		message.priceSnapshots = object.price_snapshots?.map((e) => PriceSnapshot.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: GenesisState): GenesisStateAmino {
		const obj: any = {};
		obj.params = message.params ? Params.toAmino(message.params) : undefined;
		if (message.feederDelegations) {
			obj.feeder_delegations = message.feederDelegations.map((e) => (e ? FeederDelegation.toAmino(e) : undefined));
		} else {
			obj.feeder_delegations = message.feederDelegations;
		}
		if (message.exchangeRates) {
			obj.exchange_rates = message.exchangeRates.map((e) => (e ? ExchangeRateTuple.toAmino(e) : undefined));
		} else {
			obj.exchange_rates = message.exchangeRates;
		}
		if (message.penaltyCounters) {
			obj.penalty_counters = message.penaltyCounters.map((e) => (e ? PenaltyCounter.toAmino(e) : undefined));
		} else {
			obj.penalty_counters = message.penaltyCounters;
		}
		if (message.aggregateExchangeRateVotes) {
			obj.aggregate_exchange_rate_votes = message.aggregateExchangeRateVotes.map((e) => (e ? AggregateExchangeRateVote.toAmino(e) : undefined));
		} else {
			obj.aggregate_exchange_rate_votes = message.aggregateExchangeRateVotes;
		}
		if (message.priceSnapshots) {
			obj.price_snapshots = message.priceSnapshots.map((e) => (e ? PriceSnapshot.toAmino(e) : undefined));
		} else {
			obj.price_snapshots = message.priceSnapshots;
		}
		return obj;
	},
	fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
		return GenesisState.fromAmino(object.value);
	},
	fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
		return GenesisState.decode(message.value);
	},
	toProto(message: GenesisState): Uint8Array {
		return GenesisState.encode(message).finish();
	},
	toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.oracle.GenesisState',
			value: GenesisState.encode(message).finish()
		};
	}
};
function createBaseFeederDelegation(): FeederDelegation {
	return {
		feederAddress: '',
		validatorAddress: ''
	};
}
export const FeederDelegation = {
	typeUrl: '/seiprotocol.seichain.oracle.FeederDelegation',
	encode(message: FeederDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.feederAddress !== '') {
			writer.uint32(10).string(message.feederAddress);
		}
		if (message.validatorAddress !== '') {
			writer.uint32(18).string(message.validatorAddress);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): FeederDelegation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFeederDelegation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.feederAddress = reader.string();
					break;
				case 2:
					message.validatorAddress = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<FeederDelegation>): FeederDelegation {
		const message = createBaseFeederDelegation();
		message.feederAddress = object.feederAddress ?? '';
		message.validatorAddress = object.validatorAddress ?? '';
		return message;
	},
	fromAmino(object: FeederDelegationAmino): FeederDelegation {
		const message = createBaseFeederDelegation();
		if (object.feeder_address !== undefined && object.feeder_address !== null) {
			message.feederAddress = object.feeder_address;
		}
		if (object.validator_address !== undefined && object.validator_address !== null) {
			message.validatorAddress = object.validator_address;
		}
		return message;
	},
	toAmino(message: FeederDelegation): FeederDelegationAmino {
		const obj: any = {};
		obj.feeder_address = message.feederAddress === '' ? undefined : message.feederAddress;
		obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
		return obj;
	},
	fromAminoMsg(object: FeederDelegationAminoMsg): FeederDelegation {
		return FeederDelegation.fromAmino(object.value);
	},
	fromProtoMsg(message: FeederDelegationProtoMsg): FeederDelegation {
		return FeederDelegation.decode(message.value);
	},
	toProto(message: FeederDelegation): Uint8Array {
		return FeederDelegation.encode(message).finish();
	},
	toProtoMsg(message: FeederDelegation): FeederDelegationProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.oracle.FeederDelegation',
			value: FeederDelegation.encode(message).finish()
		};
	}
};
function createBasePenaltyCounter(): PenaltyCounter {
	return {
		validatorAddress: '',
		votePenaltyCounter: undefined
	};
}
export const PenaltyCounter = {
	typeUrl: '/seiprotocol.seichain.oracle.PenaltyCounter',
	encode(message: PenaltyCounter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.validatorAddress !== '') {
			writer.uint32(10).string(message.validatorAddress);
		}
		if (message.votePenaltyCounter !== undefined) {
			VotePenaltyCounter.encode(message.votePenaltyCounter, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): PenaltyCounter {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePenaltyCounter();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.validatorAddress = reader.string();
					break;
				case 2:
					message.votePenaltyCounter = VotePenaltyCounter.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<PenaltyCounter>): PenaltyCounter {
		const message = createBasePenaltyCounter();
		message.validatorAddress = object.validatorAddress ?? '';
		message.votePenaltyCounter =
			object.votePenaltyCounter !== undefined && object.votePenaltyCounter !== null ? VotePenaltyCounter.fromPartial(object.votePenaltyCounter) : undefined;
		return message;
	},
	fromAmino(object: PenaltyCounterAmino): PenaltyCounter {
		const message = createBasePenaltyCounter();
		if (object.validator_address !== undefined && object.validator_address !== null) {
			message.validatorAddress = object.validator_address;
		}
		if (object.vote_penalty_counter !== undefined && object.vote_penalty_counter !== null) {
			message.votePenaltyCounter = VotePenaltyCounter.fromAmino(object.vote_penalty_counter);
		}
		return message;
	},
	toAmino(message: PenaltyCounter): PenaltyCounterAmino {
		const obj: any = {};
		obj.validator_address = message.validatorAddress === '' ? undefined : message.validatorAddress;
		obj.vote_penalty_counter = message.votePenaltyCounter ? VotePenaltyCounter.toAmino(message.votePenaltyCounter) : undefined;
		return obj;
	},
	fromAminoMsg(object: PenaltyCounterAminoMsg): PenaltyCounter {
		return PenaltyCounter.fromAmino(object.value);
	},
	fromProtoMsg(message: PenaltyCounterProtoMsg): PenaltyCounter {
		return PenaltyCounter.decode(message.value);
	},
	toProto(message: PenaltyCounter): Uint8Array {
		return PenaltyCounter.encode(message).finish();
	},
	toProtoMsg(message: PenaltyCounter): PenaltyCounterProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.oracle.PenaltyCounter',
			value: PenaltyCounter.encode(message).finish()
		};
	}
};
