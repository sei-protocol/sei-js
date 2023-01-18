import { Rpc } from "@osmonauts/helpers";
import { MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
    delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
    delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
}
