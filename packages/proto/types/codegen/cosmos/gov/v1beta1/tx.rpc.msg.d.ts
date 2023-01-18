import { Rpc } from "@osmonauts/helpers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
    vote(request: MsgVote): Promise<MsgVoteResponse>;
    voteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
    deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
}
