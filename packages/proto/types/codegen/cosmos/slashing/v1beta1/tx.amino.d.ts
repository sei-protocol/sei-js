import { AminoMsg } from "@cosmjs/amino";
import { MsgUnjail } from "./tx";
export interface MsgUnjailAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUnjail";
    value: {
        validator_addr: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
        aminoType: string;
        toAmino: ({ validatorAddr }: MsgUnjail) => MsgUnjailAminoType["value"];
        fromAmino: ({ validator_addr }: MsgUnjailAminoType["value"]) => MsgUnjail;
    };
};
