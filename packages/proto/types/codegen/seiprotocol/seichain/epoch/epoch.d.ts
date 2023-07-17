import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare const Epoch: {
    encode(message: Epoch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Epoch;
    fromPartial(object: DeepPartial<Epoch>): Epoch;
};
