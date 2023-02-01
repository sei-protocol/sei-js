import { AminoMsg } from "@cosmjs/amino";
import { MsgRecordTransactionData } from "./tx";
export interface AminoMsgRecordTransactionData extends AminoMsg {
    type: "/seiprotocol.seichain.nitro.MsgRecordTransactionData";
    value: {
        sender: string;
        slot: string;
        stateRoot: string;
        txs: string[];
    };
}
export declare const AminoConverter: {
    "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
        aminoType: string;
        toAmino: ({ sender, slot, stateRoot, txs }: MsgRecordTransactionData) => AminoMsgRecordTransactionData["value"];
        fromAmino: ({ sender, slot, stateRoot, txs }: AminoMsgRecordTransactionData["value"]) => MsgRecordTransactionData;
    };
};
