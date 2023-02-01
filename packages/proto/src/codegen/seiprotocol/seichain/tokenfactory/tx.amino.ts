//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
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
export const AminoConverter = {
  "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
    aminoType: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): AminoMsgCreateDenom["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: AminoMsgCreateDenom["value"]): MsgCreateDenom => {
      return {
        sender,
        subdenom
      };
    }
  },
  "/seiprotocol.seichain.tokenfactory.MsgMint": {
    aminoType: "/seiprotocol.seichain.tokenfactory.MsgMint",
    toAmino: ({
      sender,
      amount
    }: MsgMint): AminoMsgMint["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: AminoMsgMint["value"]): MsgMint => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/seiprotocol.seichain.tokenfactory.MsgBurn": {
    aminoType: "/seiprotocol.seichain.tokenfactory.MsgBurn",
    toAmino: ({
      sender,
      amount
    }: MsgBurn): AminoMsgBurn["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromNumber(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: AminoMsgBurn["value"]): MsgBurn => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
    aminoType: "/seiprotocol.seichain.tokenfactory.MsgChangeAdmin",
    toAmino: ({
      sender,
      denom,
      newAdmin
    }: MsgChangeAdmin): AminoMsgChangeAdmin["value"] => {
      return {
        sender,
        denom,
        new_admin: newAdmin
      };
    },
    fromAmino: ({
      sender,
      denom,
      new_admin
    }: AminoMsgChangeAdmin["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin: new_admin
      };
    }
  }
};