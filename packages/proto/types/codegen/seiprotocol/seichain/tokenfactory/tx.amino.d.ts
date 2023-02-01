import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
export interface AminoMsgCreateDenom extends AminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom";
    value: {
        sender: string;
        subdenom: string;
    };
}
export interface AminoMsgMint extends AminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgMint";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgBurn extends AminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgBurn";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgChangeAdmin extends AminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin";
    value: {
        sender: string;
        denom: string;
        new_admin: string;
    };
}
export declare const AminoConverter: {
    "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
        aminoType: string;
        toAmino: ({ sender, subdenom }: MsgCreateDenom) => AminoMsgCreateDenom["value"];
        fromAmino: ({ sender, subdenom }: AminoMsgCreateDenom["value"]) => MsgCreateDenom;
    };
    "/seiprotocol.seichain.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgMint) => AminoMsgMint["value"];
        fromAmino: ({ sender, amount }: AminoMsgMint["value"]) => MsgMint;
    };
    "/seiprotocol.seichain.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgBurn) => AminoMsgBurn["value"];
        fromAmino: ({ sender, amount }: AminoMsgBurn["value"]) => MsgBurn;
    };
    "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => AminoMsgChangeAdmin["value"];
        fromAmino: ({ sender, denom, new_admin }: AminoMsgChangeAdmin["value"]) => MsgChangeAdmin;
    };
};
