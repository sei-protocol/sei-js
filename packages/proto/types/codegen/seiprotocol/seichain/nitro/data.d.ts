import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface TransactionData {
    slot: Long;
    signature: string;
    isVote: boolean;
    messageType: Long;
    legacyMessage: string;
    v0LoadedMessage: string;
    signatures: string[];
    messageHash: string;
    meta: string;
    writeVersion: Long;
}
export interface TransactionDataSDKType {
    slot: Long;
    signature: string;
    is_vote: boolean;
    message_type: Long;
    legacy_message: string;
    v0_loaded_message: string;
    signatures: string[];
    message_hash: string;
    meta: string;
    write_version: Long;
}
export declare const TransactionData: {
    encode(message: TransactionData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionData;
    fromPartial(object: DeepPartial<TransactionData>): TransactionData;
};
