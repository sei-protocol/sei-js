import { MerkleProof, MerkleProofSDKType } from "./data";
import { Account, AccountSDKType } from "./account";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export interface MsgSubmitFraudChallenge {
    sender: string;
    startSlot: Long;
    endSlot: Long;
    fraudStatePubKey: string;
    merkleProof: MerkleProof;
    accountStates: Account[];
    programs: Account[];
    sysvarAccounts: Account[];
}
export interface MsgSubmitFraudChallengeSDKType {
    sender: string;
    startSlot: Long;
    endSlot: Long;
    fraudStatePubKey: string;
    merkleProof: MerkleProofSDKType;
    accountStates: AccountSDKType[];
    programs: AccountSDKType[];
    sysvarAccounts: AccountSDKType[];
}
export interface MsgRecordTransactionDataResponse {
}
export interface MsgRecordTransactionDataResponseSDKType {
}
export interface MsgSubmitFraudChallengeResponse {
}
export interface MsgSubmitFraudChallengeResponseSDKType {
}
export declare const MsgRecordTransactionData: {
    encode(message: MsgRecordTransactionData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordTransactionData;
    fromPartial(object: DeepPartial<MsgRecordTransactionData>): MsgRecordTransactionData;
};
export declare const MsgSubmitFraudChallenge: {
    encode(message: MsgSubmitFraudChallenge, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitFraudChallenge;
    fromPartial(object: DeepPartial<MsgSubmitFraudChallenge>): MsgSubmitFraudChallenge;
};
export declare const MsgRecordTransactionDataResponse: {
    encode(_: MsgRecordTransactionDataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecordTransactionDataResponse;
    fromPartial(_: DeepPartial<MsgRecordTransactionDataResponse>): MsgRecordTransactionDataResponse;
};
export declare const MsgSubmitFraudChallengeResponse: {
    encode(_: MsgSubmitFraudChallengeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitFraudChallengeResponse;
    fromPartial(_: DeepPartial<MsgSubmitFraudChallengeResponse>): MsgSubmitFraudChallengeResponse;
};
