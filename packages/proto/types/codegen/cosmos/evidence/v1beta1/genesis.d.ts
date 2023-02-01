import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
    /** evidence defines all the evidence at genesis. */
    evidence: Any[];
}
/** GenesisState defines the evidence module's genesis state. */
export interface GenesisStateSDKType {
    /** evidence defines all the evidence at genesis. */
    evidence: AnySDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
