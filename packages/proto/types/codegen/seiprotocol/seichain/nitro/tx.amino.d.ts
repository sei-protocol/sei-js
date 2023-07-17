import { AminoMsg } from "@cosmjs/amino";
import { MsgRecordTransactionData, MsgSubmitFraudChallenge } from "./tx";
export interface MsgRecordTransactionDataAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.nitro.MsgRecordTransactionData";
    value: {
        sender: string;
        slot: string;
        stateRoot: string;
        txs: string[];
    };
}
export interface MsgSubmitFraudChallengeAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge";
    value: {
        sender: string;
        startSlot: string;
        endSlot: string;
        fraudStatePubKey: string;
        merkleProof: {
            commitment: string;
            hash: string[];
            direction: string[];
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
        toAmino: ({ sender, slot, stateRoot, txs }: MsgRecordTransactionData) => MsgRecordTransactionDataAminoType["value"];
        fromAmino: ({ sender, slot, stateRoot, txs }: MsgRecordTransactionDataAminoType["value"]) => MsgRecordTransactionData;
    };
    "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge": {
        aminoType: string;
        toAmino: ({ sender, startSlot, endSlot, fraudStatePubKey, merkleProof, accountStates, programs, sysvarAccounts }: MsgSubmitFraudChallenge) => MsgSubmitFraudChallengeAminoType["value"];
        fromAmino: ({ sender, startSlot, endSlot, fraudStatePubKey, merkleProof, accountStates, programs, sysvarAccounts }: MsgSubmitFraudChallengeAminoType["value"]) => MsgSubmitFraudChallenge;
    };
};
