import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin } from "./tx";
export interface MsgCreateDenomAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom";
    value: {
        sender: string;
        subdenom: string;
    };
}
export interface MsgMintAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgMint";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgBurnAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.tokenfactory.MsgBurn";
    value: {
        sender: string;
        amount: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgChangeAdminAminoType extends AminoMsg {
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
        toAmino: ({ sender, subdenom }: MsgCreateDenom) => MsgCreateDenomAminoType["value"];
        fromAmino: ({ sender, subdenom }: MsgCreateDenomAminoType["value"]) => MsgCreateDenom;
    };
    "/seiprotocol.seichain.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgMint) => MsgMintAminoType["value"];
        fromAmino: ({ sender, amount }: MsgMintAminoType["value"]) => MsgMint;
    };
    "/seiprotocol.seichain.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: ({ sender, amount }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ sender, amount }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
        aminoType: string;
        toAmino: ({ sender, denom, newAdmin }: MsgChangeAdmin) => MsgChangeAdminAminoType["value"];
        fromAmino: ({ sender, denom, new_admin }: MsgChangeAdminAminoType["value"]) => MsgChangeAdmin;
    };
};
