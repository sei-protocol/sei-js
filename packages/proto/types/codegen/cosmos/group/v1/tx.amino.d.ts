import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export interface MsgCreateGroupAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateGroup";
    value: {
        admin: string;
        members: {
            address: string;
            weight: string;
            metadata: string;
            added_at: {
                seconds: string;
                nanos: number;
            };
        }[];
        metadata: string;
    };
}
export interface MsgUpdateGroupMembersAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupMembers";
    value: {
        admin: string;
        group_id: string;
        member_updates: {
            address: string;
            weight: string;
            metadata: string;
            added_at: {
                seconds: string;
                nanos: number;
            };
        }[];
    };
}
export interface MsgUpdateGroupAdminAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupAdmin";
    value: {
        admin: string;
        group_id: string;
        new_admin: string;
    };
}
export interface MsgUpdateGroupMetadataAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupMetadata";
    value: {
        admin: string;
        group_id: string;
        metadata: string;
    };
}
export interface MsgCreateGroupPolicyAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateGroupPolicy";
    value: {
        admin: string;
        group_id: string;
        metadata: string;
        decision_policy: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface MsgCreateGroupWithPolicyAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreateGroupWithPolicy";
    value: {
        admin: string;
        members: {
            address: string;
            weight: string;
            metadata: string;
            added_at: {
                seconds: string;
                nanos: number;
            };
        }[];
        group_metadata: string;
        group_policy_metadata: string;
        group_policy_as_admin: boolean;
        decision_policy: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface MsgUpdateGroupPolicyAdminAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyAdmin";
    value: {
        admin: string;
        address: string;
        new_admin: string;
    };
}
export interface MsgUpdateGroupPolicyDecisionPolicyAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyDecisionPolicy";
    value: {
        admin: string;
        address: string;
        decision_policy: {
            type_url: string;
            value: Uint8Array;
        };
    };
}
export interface MsgUpdateGroupPolicyMetadataAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgUpdateGroupPolicyMetadata";
    value: {
        admin: string;
        address: string;
        metadata: string;
    };
}
export interface MsgSubmitProposalAminoType extends AminoMsg {
    type: "cosmos-sdk/group/MsgSubmitProposal";
    value: {
        address: string;
        proposers: string[];
        metadata: string;
        messages: {
            type_url: string;
            value: Uint8Array;
        }[];
        exec: number;
    };
}
export interface MsgWithdrawProposalAminoType extends AminoMsg {
    type: "cosmos-sdk/group/MsgWithdrawProposal";
    value: {
        proposal_id: string;
        address: string;
    };
}
export interface MsgVoteAminoType extends AminoMsg {
    type: "cosmos-sdk/group/MsgVote";
    value: {
        proposal_id: string;
        voter: string;
        option: number;
        metadata: string;
        exec: number;
    };
}
export interface MsgExecAminoType extends AminoMsg {
    type: "cosmos-sdk/group/MsgExec";
    value: {
        proposal_id: string;
        signer: string;
    };
}
export interface MsgLeaveGroupAminoType extends AminoMsg {
    type: "cosmos-sdk/group/MsgLeaveGroup";
    value: {
        address: string;
        group_id: string;
    };
}
export declare const AminoConverter: {
    "/cosmos.group.v1.MsgCreateGroup": {
        aminoType: string;
        toAmino: ({ admin, members, metadata }: MsgCreateGroup) => MsgCreateGroupAminoType["value"];
        fromAmino: ({ admin, members, metadata }: MsgCreateGroupAminoType["value"]) => MsgCreateGroup;
    };
    "/cosmos.group.v1.MsgUpdateGroupMembers": {
        aminoType: string;
        toAmino: ({ admin, groupId, memberUpdates }: MsgUpdateGroupMembers) => MsgUpdateGroupMembersAminoType["value"];
        fromAmino: ({ admin, group_id, member_updates }: MsgUpdateGroupMembersAminoType["value"]) => MsgUpdateGroupMembers;
    };
    "/cosmos.group.v1.MsgUpdateGroupAdmin": {
        aminoType: string;
        toAmino: ({ admin, groupId, newAdmin }: MsgUpdateGroupAdmin) => MsgUpdateGroupAdminAminoType["value"];
        fromAmino: ({ admin, group_id, new_admin }: MsgUpdateGroupAdminAminoType["value"]) => MsgUpdateGroupAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupMetadata": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata }: MsgUpdateGroupMetadata) => MsgUpdateGroupMetadataAminoType["value"];
        fromAmino: ({ admin, group_id, metadata }: MsgUpdateGroupMetadataAminoType["value"]) => MsgUpdateGroupMetadata;
    };
    "/cosmos.group.v1.MsgCreateGroupPolicy": {
        aminoType: string;
        toAmino: ({ admin, groupId, metadata, decisionPolicy }: MsgCreateGroupPolicy) => MsgCreateGroupPolicyAminoType["value"];
        fromAmino: ({ admin, group_id, metadata, decision_policy }: MsgCreateGroupPolicyAminoType["value"]) => MsgCreateGroupPolicy;
    };
    "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
        aminoType: string;
        toAmino: ({ admin, members, groupMetadata, groupPolicyMetadata, groupPolicyAsAdmin, decisionPolicy }: MsgCreateGroupWithPolicy) => MsgCreateGroupWithPolicyAminoType["value"];
        fromAmino: ({ admin, members, group_metadata, group_policy_metadata, group_policy_as_admin, decision_policy }: MsgCreateGroupWithPolicyAminoType["value"]) => MsgCreateGroupWithPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
        aminoType: string;
        toAmino: ({ admin, address, newAdmin }: MsgUpdateGroupPolicyAdmin) => MsgUpdateGroupPolicyAdminAminoType["value"];
        fromAmino: ({ admin, address, new_admin }: MsgUpdateGroupPolicyAdminAminoType["value"]) => MsgUpdateGroupPolicyAdmin;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
        aminoType: string;
        toAmino: ({ admin, address, decisionPolicy }: MsgUpdateGroupPolicyDecisionPolicy) => MsgUpdateGroupPolicyDecisionPolicyAminoType["value"];
        fromAmino: ({ admin, address, decision_policy }: MsgUpdateGroupPolicyDecisionPolicyAminoType["value"]) => MsgUpdateGroupPolicyDecisionPolicy;
    };
    "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
        aminoType: string;
        toAmino: ({ admin, address, metadata }: MsgUpdateGroupPolicyMetadata) => MsgUpdateGroupPolicyMetadataAminoType["value"];
        fromAmino: ({ admin, address, metadata }: MsgUpdateGroupPolicyMetadataAminoType["value"]) => MsgUpdateGroupPolicyMetadata;
    };
    "/cosmos.group.v1.MsgSubmitProposal": {
        aminoType: string;
        toAmino: ({ address, proposers, metadata, messages, exec }: MsgSubmitProposal) => MsgSubmitProposalAminoType["value"];
        fromAmino: ({ address, proposers, metadata, messages, exec }: MsgSubmitProposalAminoType["value"]) => MsgSubmitProposal;
    };
    "/cosmos.group.v1.MsgWithdrawProposal": {
        aminoType: string;
        toAmino: ({ proposalId, address }: MsgWithdrawProposal) => MsgWithdrawProposalAminoType["value"];
        fromAmino: ({ proposal_id, address }: MsgWithdrawProposalAminoType["value"]) => MsgWithdrawProposal;
    };
    "/cosmos.group.v1.MsgVote": {
        aminoType: string;
        toAmino: ({ proposalId, voter, option, metadata, exec }: MsgVote) => MsgVoteAminoType["value"];
        fromAmino: ({ proposal_id, voter, option, metadata, exec }: MsgVoteAminoType["value"]) => MsgVote;
    };
    "/cosmos.group.v1.MsgExec": {
        aminoType: string;
        toAmino: ({ proposalId, signer }: MsgExec) => MsgExecAminoType["value"];
        fromAmino: ({ proposal_id, signer }: MsgExecAminoType["value"]) => MsgExec;
    };
    "/cosmos.group.v1.MsgLeaveGroup": {
        aminoType: string;
        toAmino: ({ address, groupId }: MsgLeaveGroup) => MsgLeaveGroupAminoType["value"];
        fromAmino: ({ address, group_id }: MsgLeaveGroupAminoType["value"]) => MsgLeaveGroup;
    };
};
