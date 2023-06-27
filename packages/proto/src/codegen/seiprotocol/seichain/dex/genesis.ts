import { Params, ParamsSDKType } from "./params";
import { ContractInfoV2, ContractInfoV2SDKType } from "./contract";
import { LongBook, LongBookSDKType } from "./long_book";
import { ShortBook, ShortBookSDKType } from "./short_book";
import { Order, OrderSDKType } from "./order";
import { Pair, PairSDKType } from "./pair";
import { Price, PriceSDKType } from "./price";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
  params: Params;
  contractState: ContractState[];
  lastEpoch: Long;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  contractState: ContractStateSDKType[];
  lastEpoch: Long;
}
export interface ContractState {
  contractInfo: ContractInfoV2;
  longBookList: LongBook[];
  shortBookList: ShortBook[];
  triggeredOrdersList: Order[];
  pairList: Pair[];
  priceList: ContractPairPrices[];
}
export interface ContractStateSDKType {
  contractInfo: ContractInfoV2SDKType;
  longBookList: LongBookSDKType[];
  shortBookList: ShortBookSDKType[];
  triggeredOrdersList: OrderSDKType[];
  pairList: PairSDKType[];
  priceList: ContractPairPricesSDKType[];
}
export interface ContractPairPrices {
  pricePair: Pair;
  prices: Price[];
}
export interface ContractPairPricesSDKType {
  pricePair: PairSDKType;
  prices: PriceSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    contractState: [],
    lastEpoch: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractState) {
      ContractState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (!message.lastEpoch.isZero()) {
      writer.uint32(24).uint64(message.lastEpoch);
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
          message.contractState.push(ContractState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lastEpoch = (reader.uint64() as Long);
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
    message.contractState = object.contractState?.map(e => ContractState.fromPartial(e)) || [];
    message.lastEpoch = object.lastEpoch !== undefined && object.lastEpoch !== null ? Long.fromValue(object.lastEpoch) : Long.UZERO;
    return message;
  }
};
function createBaseContractState(): ContractState {
  return {
    contractInfo: ContractInfoV2.fromPartial({}),
    longBookList: [],
    shortBookList: [],
    triggeredOrdersList: [],
    pairList: [],
    priceList: []
  };
}
export const ContractState = {
  encode(message: ContractState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractInfo !== undefined) {
      ContractInfoV2.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.longBookList) {
      LongBook.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.shortBookList) {
      ShortBook.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.triggeredOrdersList) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.pairList) {
      Pair.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.priceList) {
      ContractPairPrices.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractInfo = ContractInfoV2.decode(reader, reader.uint32());
          break;
        case 2:
          message.longBookList.push(LongBook.decode(reader, reader.uint32()));
          break;
        case 3:
          message.shortBookList.push(ShortBook.decode(reader, reader.uint32()));
          break;
        case 4:
          message.triggeredOrdersList.push(Order.decode(reader, reader.uint32()));
          break;
        case 5:
          message.pairList.push(Pair.decode(reader, reader.uint32()));
          break;
        case 6:
          message.priceList.push(ContractPairPrices.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContractState>): ContractState {
    const message = createBaseContractState();
    message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfoV2.fromPartial(object.contractInfo) : undefined;
    message.longBookList = object.longBookList?.map(e => LongBook.fromPartial(e)) || [];
    message.shortBookList = object.shortBookList?.map(e => ShortBook.fromPartial(e)) || [];
    message.triggeredOrdersList = object.triggeredOrdersList?.map(e => Order.fromPartial(e)) || [];
    message.pairList = object.pairList?.map(e => Pair.fromPartial(e)) || [];
    message.priceList = object.priceList?.map(e => ContractPairPrices.fromPartial(e)) || [];
    return message;
  }
};
function createBaseContractPairPrices(): ContractPairPrices {
  return {
    pricePair: Pair.fromPartial({}),
    prices: []
  };
}
export const ContractPairPrices = {
  encode(message: ContractPairPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pricePair !== undefined) {
      Pair.encode(message.pricePair, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ContractPairPrices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractPairPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pricePair = Pair.decode(reader, reader.uint32());
          break;
        case 2:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ContractPairPrices>): ContractPairPrices {
    const message = createBaseContractPairPrices();
    message.pricePair = object.pricePair !== undefined && object.pricePair !== null ? Pair.fromPartial(object.pricePair) : undefined;
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    return message;
  }
};