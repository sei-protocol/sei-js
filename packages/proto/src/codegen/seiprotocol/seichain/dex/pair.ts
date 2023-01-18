import * as _m0 from 'protobufjs/minimal';
import { DeepPartial } from '@osmonauts/helpers';
export interface Pair {
  priceDenom: string;
  assetDenom: string;
  ticksize?: string;
}
export interface PairSDKType {
  priceDenom: string;
  assetDenom: string;
  ticksize?: string;
}
export interface BatchContractPair {
  contractAddr: string;
  pairs: Pair[];
}
export interface BatchContractPairSDKType {
  contractAddr: string;
  pairs: PairSDKType[];
}

function createBasePair(): Pair {
  return {
    priceDenom: '',
    assetDenom: '',
    ticksize: undefined
  };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.priceDenom !== '') {
      writer.uint32(10).string(message.priceDenom);
    }

    if (message.assetDenom !== '') {
      writer.uint32(18).string(message.assetDenom);
    }

    if (message.ticksize !== undefined) {
      writer.uint32(26).string(message.ticksize);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;

        case 2:
          message.assetDenom = reader.string();
          break;

        case 3:
          message.ticksize = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Pair>): Pair {
    const message = createBasePair();
    message.priceDenom = object.priceDenom ?? '';
    message.assetDenom = object.assetDenom ?? '';
    message.ticksize = object.ticksize ?? undefined;
    return message;
  }

};

function createBaseBatchContractPair(): BatchContractPair {
  return {
    contractAddr: '',
    pairs: []
  };
}

export const BatchContractPair = {
  encode(message: BatchContractPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddr !== '') {
      writer.uint32(10).string(message.contractAddr);
    }

    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchContractPair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchContractPair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;

        case 2:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<BatchContractPair>): BatchContractPair {
    const message = createBaseBatchContractPair();
    message.contractAddr = object.contractAddr ?? '';
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  }

};