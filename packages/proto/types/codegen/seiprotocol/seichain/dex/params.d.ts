import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Params defines the parameters for the module. */
export interface Params {
    priceSnapshotRetention: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    price_snapshot_retention: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
