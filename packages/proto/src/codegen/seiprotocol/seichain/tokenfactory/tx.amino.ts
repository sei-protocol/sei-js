import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
    aminoType: "/seiprotocol.seichain.tokenfactory.MsgCreateDenom",
    toAmino: ({
      sender,
      subdenom
    }: MsgCreateDenom): MsgCreateDenomAminoType["value"] => {
      return {
        sender,
        subdenom
      };
    },
    fromAmino: ({
      sender,
      subdenom
    }: MsgCreateDenomAminoType["value"]): MsgCreateDenom => {
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
    }: MsgMint): MsgMintAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: MsgMintAminoType["value"]): MsgMint => {
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
    }: MsgBurn): MsgBurnAminoType["value"] => {
      return {
        sender,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      amount
    }: MsgBurnAminoType["value"]): MsgBurn => {
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
    }: MsgChangeAdmin): MsgChangeAdminAminoType["value"] => {
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
    }: MsgChangeAdminAminoType["value"]): MsgChangeAdmin => {
      return {
        sender,
        denom,
        newAdmin: new_admin
      };
    }
  }
};