import { Pair, PairSDKType } from './pair';
import * as _m0 from 'protobufjs/minimal';
import { DeepPartial } from '@osmonauts/helpers';
export interface TickSize {
  pair: Pair;
  ticksize: string;
  contractAddr: string;
}
export interface TickSizeSDKType {
  pair: PairSDKType;
  ticksize: string;
  contractAddr: string;
}

function createBaseTickSize(): TickSize {
  return {
    pair: undefined,
    ticksize: '',
    contractAddr: ''
  };
}

export const TickSize = {
  encode(message: TickSize, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pair !== undefined) {
      Pair.encode(message.pair, writer.uint32(10).fork()).ldelim();
    }

    if (message.ticksize !== '') {
      writer.uint32(18).string(message.ticksize);
    }

    if (message.contractAddr !== '') {
      writer.uint32(26).string(message.contractAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TickSize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTickSize();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pair = Pair.decode(reader, reader.uint32());
          break;

        case 2:
          message.ticksize = reader.string();
          break;

        case 3:
          message.contractAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TickSize>): TickSize {
    const message = createBaseTickSize();
    message.pair = object.pair !== undefined && object.pair !== null ? Pair.fromPartial(object.pair) : undefined;
    message.ticksize = object.ticksize ?? '';
    message.contractAddr = object.contractAddr ?? '';
    return message;
  }

};