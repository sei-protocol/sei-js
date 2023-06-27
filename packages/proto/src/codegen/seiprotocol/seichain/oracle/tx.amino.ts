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
export const AminoConverter = {
  "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
    aminoType: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
    toAmino: ({
      exchangeRates,
      feeder,
      validator
    }: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteAminoType["value"] => {
      return {
        exchange_rates: exchangeRates,
        feeder,
        validator
      };
    },
    fromAmino: ({
      exchange_rates,
      feeder,
      validator
    }: MsgAggregateExchangeRateVoteAminoType["value"]): MsgAggregateExchangeRateVote => {
      return {
        exchangeRates: exchange_rates,
        feeder,
        validator
      };
    }
  },
  "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent": {
    aminoType: "/seiprotocol.seichain.oracle.MsgDelegateFeedConsent",
    toAmino: ({
      operator,
      delegate
    }: MsgDelegateFeedConsent): MsgDelegateFeedConsentAminoType["value"] => {
      return {
        operator,
        delegate
      };
    },
    fromAmino: ({
      operator,
      delegate
    }: MsgDelegateFeedConsentAminoType["value"]): MsgDelegateFeedConsent => {
      return {
        operator,
        delegate
      };
    }
  }
};