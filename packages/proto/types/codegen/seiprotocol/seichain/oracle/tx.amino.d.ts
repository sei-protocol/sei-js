import { AminoMsg } from "@cosmjs/amino";
import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export interface MsgAggregateExchangeRateVoteAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote";
    value: {
        exchange_rates: string;
        feeder: string;
        validator: string;
    };
}
export interface MsgDelegateFeedConsentAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent";
    value: {
        operator: string;
        delegate: string;
    };
}
export declare const AminoConverter: {
    "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: ({ exchangeRates, feeder, validator }: MsgAggregateExchangeRateVote) => MsgAggregateExchangeRateVoteAminoType["value"];
        fromAmino: ({ exchange_rates, feeder, validator }: MsgAggregateExchangeRateVoteAminoType["value"]) => MsgAggregateExchangeRateVote;
    };
    "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: ({ operator, delegate }: MsgDelegateFeedConsent) => MsgDelegateFeedConsentAminoType["value"];
        fromAmino: ({ operator, delegate }: MsgDelegateFeedConsentAminoType["value"]) => MsgDelegateFeedConsent;
    };
};
