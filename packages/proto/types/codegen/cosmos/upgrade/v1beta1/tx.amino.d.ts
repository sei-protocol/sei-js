import { AminoMsg } from "@cosmjs/amino";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
export interface MsgSoftwareUpgradeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSoftwareUpgrade";
    value: {
        authority: string;
        plan: {
            name: string;
            time: {
                seconds: string;
                nanos: number;
            };
            height: string;
            info: string;
            upgraded_client_state: {
                type_url: string;
                value: Uint8Array;
            };
        };
    };
}
export interface MsgCancelUpgradeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCancelUpgrade";
    value: {
        authority: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
        aminoType: string;
        toAmino: ({ authority, plan }: MsgSoftwareUpgrade) => MsgSoftwareUpgradeAminoType["value"];
        fromAmino: ({ authority, plan }: MsgSoftwareUpgradeAminoType["value"]) => MsgSoftwareUpgrade;
    };
    "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
        aminoType: string;
        toAmino: ({ authority }: MsgCancelUpgrade) => MsgCancelUpgradeAminoType["value"];
        fromAmino: ({ authority }: MsgCancelUpgradeAminoType["value"]) => MsgCancelUpgrade;
    };
};
