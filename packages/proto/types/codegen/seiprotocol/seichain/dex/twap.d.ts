import { Pair, PairSDKType } from "./pair";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Twap {
    pair: Pair;
    twap: string;
    lookbackSeconds: Long;
}
export interface TwapSDKType {
    pair: PairSDKType;
    twap: string;
    lookbackSeconds: Long;
}
export declare const Twap: {
    encode(message: Twap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Twap;
    fromPartial(object: DeepPartial<Twap>): Twap;
};
