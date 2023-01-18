import { Params, ParamsSDKType } from './params';
import { Epoch, EpochSDKType } from './epoch';
import * as _m0 from 'protobufjs/minimal';
import { DeepPartial } from '@osmonauts/helpers';
/** GenesisState defines the epoch module's genesis state. */

export interface GenesisState {
  params: Params;
  epoch: Epoch;
}
/** GenesisState defines the epoch module's genesis state. */

export interface GenesisStateSDKType {
  params: ParamsSDKType;
  epoch: EpochSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    epoch: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.epoch !== undefined) {
      Epoch.encode(message.epoch, writer.uint32(18).fork()).ldelim();
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
          message.epoch = Epoch.decode(reader, reader.uint32());
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
    message.epoch = object.epoch !== undefined && object.epoch !== null ? Epoch.fromPartial(object.epoch) : undefined;
    return message;
  }

};