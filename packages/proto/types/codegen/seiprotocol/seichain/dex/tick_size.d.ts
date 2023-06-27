import { Pair, PairSDKType } from "./pair";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface TickSize {
    pair: Pair;
    ticksize: string;
    contractAddr: string;
}
export interface TickSizeSDKType {
    pair: PairSDKType;
    ticksize: string;
    contractAddr: string;
}
export declare const TickSize: {
    encode(message: TickSize, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TickSize;
    fromPartial(object: DeepPartial<TickSize>): TickSize;
};
