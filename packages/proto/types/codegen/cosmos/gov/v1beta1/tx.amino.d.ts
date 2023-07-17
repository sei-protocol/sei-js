import { AminoMsg } from "@cosmjs/amino";
import { MsgSubmitProposal, MsgVote, MsgVoteWeighted, MsgDeposit } from "./tx";
export interface MsgSubmitProposalAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgSubmitProposal";
    value: {
        content: {
            type_url: string;
            value: Uint8Array;
        };
        initial_deposit: {
            denom: string;
            amount: string;
        }[];
        proposer: string;
    };
}
export interface MsgVoteAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgVote";
    value: {
        proposal_id: string;
        voter: string;
        option: number;
    };
}
export interface MsgVoteWeightedAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgVoteWeighted";
    value: {
        proposal_id: string;
        voter: string;
        options: {
            option: number;
            weight: string;
        }[];
    };
}
export interface MsgDepositAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgDeposit";
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
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ content, initialDeposit, proposer }: MsgSubmitProposal) => MsgSubmitProposalAminoType["value"];
        fromAmino: ({ content, initial_deposit, proposer }: MsgSubmitProposalAminoType["value"]) => MsgSubmitProposal;
    };
    "/cosmos.gov.v1beta1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option }: MsgVote) => MsgVoteAminoType["value"];
        fromAmino: ({ proposal_id, voter, option }: MsgVoteAminoType["value"]) => MsgVote;
    };
    "/cosmos.gov.v1beta1.MsgVoteWeighted": {
        aminoType: string;
        toAmino: ({ proposalId, voter, options }: MsgVoteWeighted) => MsgVoteWeightedAminoType["value"];
        fromAmino: ({ proposal_id, voter, options }: MsgVoteWeightedAminoType["value"]) => MsgVoteWeighted;
    };
    "/cosmos.gov.v1beta1.MsgDeposit": {
        aminoType: string;
        toAmino: ({ proposalId, depositor, amount }: MsgDeposit) => MsgDepositAminoType["value"];
        fromAmino: ({ proposal_id, depositor, amount }: MsgDepositAminoType["value"]) => MsgDeposit;
    };
};
