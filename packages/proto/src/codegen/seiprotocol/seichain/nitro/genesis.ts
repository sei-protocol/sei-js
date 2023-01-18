import { Params, ParamsSDKType } from './params';
import * as _m0 from 'protobufjs/minimal';
import { Long, DeepPartial } from '@osmonauts/helpers';
export interface GenesisState {
  params: Params;
  slot: Long;
  sender: string;
  stateRoot: string;
  txs: string[];
}
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  slot: Long;
  sender: string;
  stateRoot: string;
  txs: string[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    slot: Long.UZERO,
    sender: '',
    stateRoot: '',
    txs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (!message.slot.isZero()) {
      writer.uint32(16).uint64(message.slot);
    }

    if (message.sender !== '') {
      writer.uint32(26).string(message.sender);
    }

    if (message.stateRoot !== '') {
      writer.uint32(34).string(message.stateRoot);
    }

    for (const v of message.txs) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.slot = (reader.uint64() as Long);
          break;

        case 3:
          message.sender = reader.string();
          break;

        case 4:
          message.stateRoot = reader.string();
          break;

        case 5:
          message.txs.push(reader.string());
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
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    message.sender = object.sender ?? '';
    message.stateRoot = object.stateRoot ?? '';
    message.txs = object.txs?.map(e => e) || [];
    return message;
  }

};