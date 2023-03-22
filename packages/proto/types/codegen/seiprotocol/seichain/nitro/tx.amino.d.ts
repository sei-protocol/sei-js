import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgRecordTransactionData, MsgSubmitFraudChallenge } from "./tx";
export interface AminoMsgRecordTransactionData extends AminoMsg {
    type: "/seiprotocol.seichain.nitro.MsgRecordTransactionData";
    value: {
        sender: string;
        slot: string;
        stateRoot: string;
        txs: string[];
    };
}
export interface AminoMsgSubmitFraudChallenge extends AminoMsg {
    type: "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge";
    value: {
        sender: string;
        startSlot: string;
        endSlot: string;
        fraudStatePubKey: string;
        merkleProof: {
            commitment: string;
            hash: string[];
            direction: Long[];
        };
        accountStates: {
            pubkey: string;
            owner: string;
            lamports: string;
            slot: string;
            executable: boolean;
            rent_epoch: string;
            data: string;
        }[];
        programs: {
            pubkey: string;
            owner: string;
            lamports: string;
            slot: string;
            executable: boolean;
            rent_epoch: string;
            data: string;
        }[];
        sysvarAccounts: {
            pubkey: string;
            owner: string;
            lamports: string;
            slot: string;
            executable: boolean;
            rent_epoch: string;
            data: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
        aminoType: string;
        toAmino: ({ sender, slot, stateRoot, txs }: MsgRecordTransactionData) => AminoMsgRecordTransactionData["value"];
        fromAmino: ({ sender, slot, stateRoot, txs }: AminoMsgRecordTransactionData["value"]) => MsgRecordTransactionData;
    };
    "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge": {
        aminoType: string;
        toAmino: ({ sender, startSlot, endSlot, fraudStatePubKey, merkleProof, accountStates, programs, sysvarAccounts }: MsgSubmitFraudChallenge) => AminoMsgSubmitFraudChallenge["value"];
        fromAmino: ({ sender, startSlot, endSlot, fraudStatePubKey, merkleProof, accountStates, programs, sysvarAccounts }: AminoMsgSubmitFraudChallenge["value"]) => MsgSubmitFraudChallenge;
    };
};
