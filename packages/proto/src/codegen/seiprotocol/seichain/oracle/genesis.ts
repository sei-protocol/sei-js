import { Params, ParamsSDKType, ExchangeRateTuple, ExchangeRateTupleSDKType, AggregateExchangeRateVote, AggregateExchangeRateVoteSDKType, PriceSnapshot, PriceSnapshotSDKType, VotePenaltyCounter, VotePenaltyCounterSDKType } from "./oracle";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface GenesisState {
  params: Params;
  feederDelegations: FeederDelegation[];
  exchangeRates: ExchangeRateTuple[];
  penaltyCounters: PenaltyCounter[];
  aggregateExchangeRateVotes: AggregateExchangeRateVote[];
  priceSnapshots: PriceSnapshot[];
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
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
export interface FeederDelegationSDKType {
  feeder_address: string;
  validator_address: string;
}
export interface PenaltyCounter {
  validatorAddress: string;
  votePenaltyCounter: VotePenaltyCounter;
}
export interface PenaltyCounterSDKType {
  validator_address: string;
  vote_penalty_counter: VotePenaltyCounterSDKType;
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
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feederDelegations = object.feederDelegations?.map(e => FeederDelegation.fromPartial(e)) || [];
    message.exchangeRates = object.exchangeRates?.map(e => ExchangeRateTuple.fromPartial(e)) || [];
    message.penaltyCounters = object.penaltyCounters?.map(e => PenaltyCounter.fromPartial(e)) || [];
    message.aggregateExchangeRateVotes = object.aggregateExchangeRateVotes?.map(e => AggregateExchangeRateVote.fromPartial(e)) || [];
    message.priceSnapshots = object.priceSnapshots?.map(e => PriceSnapshot.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFeederDelegation(): FeederDelegation {
  return {
    feederAddress: "",
    validatorAddress: ""
  };
}
export const FeederDelegation = {
  encode(message: FeederDelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.feederAddress !== "") {
      writer.uint32(10).string(message.feederAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FeederDelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<FeederDelegation>): FeederDelegation {
    const message = createBaseFeederDelegation();
    message.feederAddress = object.feederAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  }
};
function createBasePenaltyCounter(): PenaltyCounter {
  return {
    validatorAddress: "",
    votePenaltyCounter: VotePenaltyCounter.fromPartial({})
  };
}
export const PenaltyCounter = {
  encode(message: PenaltyCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.votePenaltyCounter !== undefined) {
      VotePenaltyCounter.encode(message.votePenaltyCounter, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PenaltyCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromPartial(object: DeepPartial<PenaltyCounter>): PenaltyCounter {
    const message = createBasePenaltyCounter();
    message.validatorAddress = object.validatorAddress ?? "";
    message.votePenaltyCounter = object.votePenaltyCounter !== undefined && object.votePenaltyCounter !== null ? VotePenaltyCounter.fromPartial(object.votePenaltyCounter) : undefined;
    return message;
  }
};