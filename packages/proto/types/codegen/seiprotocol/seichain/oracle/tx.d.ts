import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
    /** 1 reserved from old field `salt` */
    exchangeRates: string;
    feeder: string;
    validator: string;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVoteSDKType {
    exchange_rates: string;
    feeder: string;
    validator: string;
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponse {
}
/** MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type. */
export interface MsgAggregateExchangeRateVoteResponseSDKType {
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
    operator: string;
    delegate: string;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsentSDKType {
    operator: string;
    delegate: string;
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponse {
}
/** MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type. */
export interface MsgDelegateFeedConsentResponseSDKType {
}
export declare const MsgAggregateExchangeRateVote: {
    encode(message: MsgAggregateExchangeRateVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVote;
    fromPartial(object: DeepPartial<MsgAggregateExchangeRateVote>): MsgAggregateExchangeRateVote;
};
export declare const MsgAggregateExchangeRateVoteResponse: {
    encode(_: MsgAggregateExchangeRateVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAggregateExchangeRateVoteResponse;
    fromPartial(_: DeepPartial<MsgAggregateExchangeRateVoteResponse>): MsgAggregateExchangeRateVoteResponse;
};
export declare const MsgDelegateFeedConsent: {
    encode(message: MsgDelegateFeedConsent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsent;
    fromPartial(object: DeepPartial<MsgDelegateFeedConsent>): MsgDelegateFeedConsent;
};
export declare const MsgDelegateFeedConsentResponse: {
    encode(_: MsgDelegateFeedConsentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateFeedConsentResponse;
    fromPartial(_: DeepPartial<MsgDelegateFeedConsentResponse>): MsgDelegateFeedConsentResponse;
};
