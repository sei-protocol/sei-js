import { AminoMsg } from "@cosmjs/amino";
import { MsgSend } from "./tx";
export interface MsgSendAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgNFTSend";
    value: {
        class_id: string;
        id: string;
        sender: string;
        receiver: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: string;
        toAmino: ({ classId, id, sender, receiver }: MsgSend) => MsgSendAminoType["value"];
        fromAmino: ({ class_id, id, sender, receiver }: MsgSendAminoType["value"]) => MsgSend;
    };
};
