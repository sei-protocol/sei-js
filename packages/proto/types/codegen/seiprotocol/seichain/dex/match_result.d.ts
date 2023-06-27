import { Order, OrderSDKType, Cancellation, CancellationSDKType } from "./order";
import { SettlementEntry, SettlementEntrySDKType } from "./settlement";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MatchResult {
    height: Long;
    contractAddr: string;
    orders: Order[];
    settlements: SettlementEntry[];
    cancellations: Cancellation[];
}
export interface MatchResultSDKType {
    height: Long;
    contractAddr: string;
    orders: OrderSDKType[];
    settlements: SettlementEntrySDKType[];
    cancellations: CancellationSDKType[];
}
export declare const MatchResult: {
    encode(message: MatchResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MatchResult;
    fromPartial(object: DeepPartial<MatchResult>): MatchResult;
};
