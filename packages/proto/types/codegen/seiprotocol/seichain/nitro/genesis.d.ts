import { Params, ParamsSDKType } from "./params";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
