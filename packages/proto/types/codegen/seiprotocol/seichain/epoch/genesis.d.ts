import { Params, ParamsSDKType } from "./params";
import { Epoch, EpochSDKType } from "./epoch";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
