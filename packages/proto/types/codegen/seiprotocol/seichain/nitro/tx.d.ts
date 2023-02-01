import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgRecordTransactionData {
    sender: string;
    slot: Long;
    stateRoot: string;
    txs: string[];
}
export interface MsgRecordTransactionDataSDKType {
    sender: string;
    slot: Long;
    stateRoot: string;
    txs: string[];
}
export interface MsgRecordTransactionDataResponse {
}
export interface MsgRecordTransactionDataResponseSDKType {
}
export declare const MsgRecordTransactionData: {
    encode(message: MsgRecordTransactionData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordTransactionData;
    fromPartial(object: DeepPartial<MsgRecordTransactionData>): MsgRecordTransactionData;
};
export declare const MsgRecordTransactionDataResponse: {
    encode(_: MsgRecordTransactionDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordTransactionDataResponse;
    fromPartial(_: DeepPartial<MsgRecordTransactionDataResponse>): MsgRecordTransactionDataResponse;
};
