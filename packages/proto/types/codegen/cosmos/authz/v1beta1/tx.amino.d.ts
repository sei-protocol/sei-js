import { AminoMsg } from "@cosmjs/amino";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
export interface MsgGrantAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgGrant";
    value: {
        granter: string;
        grantee: string;
        grant: {
            authorization: {
                type_url: string;
                value: Uint8Array;
            };
            expiration: {
                seconds: string;
                nanos: number;
            };
        };
    };
}
export interface MsgExecAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgExec";
    value: {
        grantee: string;
        msgs: {
            type_url: string;
            value: Uint8Array;
        }[];
    };
}
export interface MsgRevokeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRevoke";
    value: {
        granter: string;
        grantee: string;
        msg_type_url: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.authz.v1beta1.MsgGrant": {
        aminoType: string;
        toAmino: ({ granter, grantee, grant }: MsgGrant) => MsgGrantAminoType["value"];
        fromAmino: ({ granter, grantee, grant }: MsgGrantAminoType["value"]) => MsgGrant;
    };
    "/cosmos.authz.v1beta1.MsgExec": {
        aminoType: string;
        toAmino: ({ grantee, msgs }: MsgExec) => MsgExecAminoType["value"];
        fromAmino: ({ grantee, msgs }: MsgExecAminoType["value"]) => MsgExec;
    };
    "/cosmos.authz.v1beta1.MsgRevoke": {
        aminoType: string;
        toAmino: ({ granter, grantee, msgTypeUrl }: MsgRevoke) => MsgRevokeAminoType["value"];
        fromAmino: ({ granter, grantee, msg_type_url }: MsgRevokeAminoType["value"]) => MsgRevoke;
    };
};
