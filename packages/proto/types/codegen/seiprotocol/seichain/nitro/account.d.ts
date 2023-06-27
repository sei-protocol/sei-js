import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Account {
    pubkey: string;
    owner: string;
    lamports: Long;
    slot: Long;
    executable: boolean;
    rentEpoch: Long;
    data: string;
}
export interface AccountSDKType {
    pubkey: string;
    owner: string;
    lamports: Long;
    slot: Long;
    executable: boolean;
    rent_epoch: Long;
    data: string;
}
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromPartial(object: DeepPartial<Account>): Account;
};
