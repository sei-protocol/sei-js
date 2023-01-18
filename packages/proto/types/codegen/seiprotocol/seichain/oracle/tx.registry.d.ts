import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegateFeedConsent(value: MsgDelegateFeedConsent): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote): {
            typeUrl: string;
            value: MsgAggregateExchangeRateVote;
        };
        delegateFeedConsent(value: MsgDelegateFeedConsent): {
            typeUrl: string;
            value: MsgDelegateFeedConsent;
        };
    };
    fromPartial: {
        aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote): {
            typeUrl: string;
            value: MsgAggregateExchangeRateVote;
        };
        delegateFeedConsent(value: MsgDelegateFeedConsent): {
            typeUrl: string;
            value: MsgDelegateFeedConsent;
        };
    };
};
