import { AminoMsg } from "@cosmjs/amino";
import { MsgVerifyInvariant } from "./tx";
export interface MsgVerifyInvariantAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgVerifyInvariant";
    value: {
        sender: string;
        invariant_module_name: string;
        invariant_route: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
        aminoType: string;
        toAmino: ({ sender, invariantModuleName, invariantRoute }: MsgVerifyInvariant) => MsgVerifyInvariantAminoType["value"];
        fromAmino: ({ sender, invariant_module_name, invariant_route }: MsgVerifyInvariantAminoType["value"]) => MsgVerifyInvariant;
    };
};
