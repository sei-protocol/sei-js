import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
}
export declare const Params: {
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(_: DeepPartial<Params>): Params;
};
