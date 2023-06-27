import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
export interface MsgCreateClientAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateClient";
    value: {
        client_state: {
            type_url: string;
            value: Uint8Array;
        };
        consensus_state: {
            type_url: string;
            value: Uint8Array;
        };
        signer: string;
    };
}
export interface MsgUpdateClientAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateClient";
    value: {
        client_id: string;
        header: {
            type_url: string;
            value: Uint8Array;
        };
        signer: string;
    };
}
export interface MsgUpgradeClientAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpgradeClient";
    value: {
        client_id: string;
        client_state: {
            type_url: string;
            value: Uint8Array;
        };
        consensus_state: {
            type_url: string;
            value: Uint8Array;
        };
        proof_upgrade_client: Uint8Array;
        proof_upgrade_consensus_state: Uint8Array;
        signer: string;
    };
}
export interface MsgSubmitMisbehaviourAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSubmitMisbehaviour";
    value: {
        client_id: string;
        misbehaviour: {
            type_url: string;
            value: Uint8Array;
        };
        signer: string;
    };
}
export declare const AminoConverter: {
    "/ibc.core.client.v1.MsgCreateClient": {
        aminoType: string;
        toAmino: ({ clientState, consensusState, signer }: MsgCreateClient) => MsgCreateClientAminoType["value"];
        fromAmino: ({ client_state, consensus_state, signer }: MsgCreateClientAminoType["value"]) => MsgCreateClient;
    };
    "/ibc.core.client.v1.MsgUpdateClient": {
        aminoType: string;
        toAmino: ({ clientId, header, signer }: MsgUpdateClient) => MsgUpdateClientAminoType["value"];
        fromAmino: ({ client_id, header, signer }: MsgUpdateClientAminoType["value"]) => MsgUpdateClient;
    };
    "/ibc.core.client.v1.MsgUpgradeClient": {
        aminoType: string;
        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: MsgUpgradeClient) => MsgUpgradeClientAminoType["value"];
        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: MsgUpgradeClientAminoType["value"]) => MsgUpgradeClient;
    };
    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
        aminoType: string;
        toAmino: ({ clientId, misbehaviour, signer }: MsgSubmitMisbehaviour) => MsgSubmitMisbehaviourAminoType["value"];
        fromAmino: ({ client_id, misbehaviour, signer }: MsgSubmitMisbehaviourAminoType["value"]) => MsgSubmitMisbehaviour;
    };
};
