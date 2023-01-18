import { AminoMsg } from "@cosmjs/amino";
import { MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export interface AminoMsgAggregateExchangeRateVote extends AminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote";
    value: {
        exchange_rates: string;
        feeder: string;
        validator: string;
    };
}
export interface AminoMsgDelegateFeedConsent extends AminoMsg {
    type: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent";
    value: {
        operator: string;
        delegate: string;
    };
}
export declare const AminoConverter: {
    "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: ({ exchangeRates, feeder, validator }: MsgAggregateExchangeRateVote) => AminoMsgAggregateExchangeRateVote["value"];
        fromAmino: ({ exchange_rates, feeder, validator }: AminoMsgAggregateExchangeRateVote["value"]) => MsgAggregateExchangeRateVote;
    };
    "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: ({ operator, delegate }: MsgDelegateFeedConsent) => AminoMsgDelegateFeedConsent["value"];
        fromAmino: ({ operator, delegate }: AminoMsgDelegateFeedConsent["value"]) => MsgDelegateFeedConsent;
    };
};
