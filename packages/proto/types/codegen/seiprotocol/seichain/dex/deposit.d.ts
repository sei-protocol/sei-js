import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface DepositInfoEntry {
    creator: string;
    denom: string;
    amount: string;
}
export interface DepositInfoEntrySDKType {
    creator: string;
    denom: string;
    amount: string;
}
export declare const DepositInfoEntry: {
    encode(message: DepositInfoEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositInfoEntry;
    fromPartial(object: DeepPartial<DepositInfoEntry>): DepositInfoEntry;
};
