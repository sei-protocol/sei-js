import { AminoMsg } from "@cosmjs/amino";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export interface MsgSubmitProposalAminoType extends AminoMsg {
    type: "cosmos-sdk/v1/MsgSubmitProposal";
    value: {
        messages: {
            type_url: string;
            value: Uint8Array;
        }[];
        initial_deposit: {
            denom: string;
            amount: string;
        }[];
        proposer: string;
        metadata: string;
    };
}
export interface MsgExecLegacyContentAminoType extends AminoMsg {
    type: "cosmos-sdk/v1/MsgExecLegacyContent";
    value: {
        content: {
            type_url: string;
            value: Uint8Array;
        };
        authority: string;
    };
}
export interface MsgVoteAminoType extends AminoMsg {
    type: "cosmos-sdk/v1/MsgVote";
    value: {
        proposal_id: string;
        voter: string;
        option: number;
        metadata: string;
    };
}
export interface MsgVoteWeightedAminoType extends AminoMsg {
    type: "cosmos-sdk/v1/MsgVoteWeighted";
    value: {
        proposal_id: string;
        voter: string;
        options: {
            option: number;
            weight: string;
        }[];
        metadata: string;
    };
}
export interface MsgDepositAminoType extends AminoMsg {
    type: "cosmos-sdk/v1/MsgDeposit";
    value: {
        proposal_id: string;
        depositor: string;
        amount: {
            denom: string;
            amount: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/cosmos.gov.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ messages, initialDeposit, proposer, metadata }: MsgSubmitProposal) => MsgSubmitProposalAminoType["value"];
        fromAmino: ({ messages, initial_deposit, proposer, metadata }: MsgSubmitProposalAminoType["value"]) => MsgSubmitProposal;
    };
    "/cosmos.gov.v1.MsgExecLegacyContent": {
        aminoType: string;
        toAmino: ({ content, authority }: MsgExecLegacyContent) => MsgExecLegacyContentAminoType["value"];
        fromAmino: ({ content, authority }: MsgExecLegacyContentAminoType["value"]) => MsgExecLegacyContent;
    };
    "/cosmos.gov.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata }: MsgVote) => MsgVoteAminoType["value"];
        fromAmino: ({ proposal_id, voter, option, metadata }: MsgVoteAminoType["value"]) => MsgVote;
    };
    "/cosmos.gov.v1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options, metadata }: MsgVoteWeighted) => MsgVoteWeightedAminoType["value"];
        fromAmino: ({ proposal_id, voter, options, metadata }: MsgVoteWeightedAminoType["value"]) => MsgVoteWeighted;
    };
    "/cosmos.gov.v1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ proposal_id, depositor, amount }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
};
