import { Rpc } from "@osmonauts/helpers";
import { MsgCreateGroup, MsgCreateGroupResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupAdmin, MsgUpdateGroupAdminResponse, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataResponse, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgWithdrawProposal, MsgWithdrawProposalResponse, MsgVote, MsgVoteResponse, MsgExec, MsgExecResponse, MsgLeaveGroup, MsgLeaveGroupResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    createGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
    createGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;
    updateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
    updateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
    updateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    withdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    exec(request: MsgExec): Promise<MsgExecResponse>;
    leaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
    updateGroupMembers(request: MsgUpdateGroupMembers): Promise<MsgUpdateGroupMembersResponse>;
    updateGroupAdmin(request: MsgUpdateGroupAdmin): Promise<MsgUpdateGroupAdminResponse>;
    updateGroupMetadata(request: MsgUpdateGroupMetadata): Promise<MsgUpdateGroupMetadataResponse>;
    createGroupPolicy(request: MsgCreateGroupPolicy): Promise<MsgCreateGroupPolicyResponse>;
    createGroupWithPolicy(request: MsgCreateGroupWithPolicy): Promise<MsgCreateGroupWithPolicyResponse>;
    updateGroupPolicyAdmin(request: MsgUpdateGroupPolicyAdmin): Promise<MsgUpdateGroupPolicyAdminResponse>;
    updateGroupPolicyDecisionPolicy(request: MsgUpdateGroupPolicyDecisionPolicy): Promise<MsgUpdateGroupPolicyDecisionPolicyResponse>;
    updateGroupPolicyMetadata(request: MsgUpdateGroupPolicyMetadata): Promise<MsgUpdateGroupPolicyMetadataResponse>;
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    withdrawProposal(request: MsgWithdrawProposal): Promise<MsgWithdrawProposalResponse>;
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    exec(request: MsgExec): Promise<MsgExecResponse>;
    leaveGroup(request: MsgLeaveGroup): Promise<MsgLeaveGroupResponse>;
}
