import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, Long, DeepPartial } from "@osmonauts/helpers";
export interface Epoch {
  genesisTime: Date;
  epochDuration: Duration;
  currentEpoch: Long;
  currentEpochStartTime: Date;
  currentEpochHeight: Long;
}
export interface EpochSDKType {
  genesis_time: Date;
  epoch_duration: DurationSDKType;
  current_epoch: Long;
  current_epoch_start_time: Date;
  current_epoch_height: Long;
}

function createBaseEpoch(): Epoch {
  return {
    genesisTime: undefined,
    epochDuration: undefined,
    currentEpoch: Long.UZERO,
    currentEpochStartTime: undefined,
    currentEpochHeight: Long.ZERO
  };
}

export const Epoch = {
  encode(message: Epoch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.genesisTime !== undefined) {
      Timestamp.encode(toTimestamp(message.genesisTime), writer.uint32(10).fork()).ldelim();
    }

    if (message.epochDuration !== undefined) {
      Duration.encode(message.epochDuration, writer.uint32(18).fork()).ldelim();
    }

    if (!message.currentEpoch.isZero()) {
      writer.uint32(24).uint64(message.currentEpoch);
    }

    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(34).fork()).ldelim();
    }

    if (!message.currentEpochHeight.isZero()) {
      writer.uint32(40).int64(message.currentEpochHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Epoch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpoch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.genesisTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.epochDuration = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.currentEpoch = (reader.uint64() as Long);
          break;

        case 4:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.currentEpochHeight = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Epoch>): Epoch {
    const message = createBaseEpoch();
    message.genesisTime = object.genesisTime ?? undefined;
    message.epochDuration = object.epochDuration ?? undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.UZERO;
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.currentEpochHeight = object.currentEpochHeight !== undefined && object.currentEpochHeight !== null ? Long.fromValue(object.currentEpochHeight) : Long.ZERO;
    return message;
  }

};