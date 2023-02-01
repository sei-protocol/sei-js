//@ts-nocheck
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
export const AminoConverter = {
  "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote": {
    aminoType: "/seiprotocol.seichain.oracle.MsgAggregateExchangeRateVote",
    toAmino: ({
      exchangeRates,
      feeder,
      validator
    }: MsgAggregateExchangeRateVote): AminoMsgAggregateExchangeRateVote["value"] => {
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
    }: AminoMsgAggregateExchangeRateVote["value"]): MsgAggregateExchangeRateVote => {
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
    }: MsgDelegateFeedConsent): AminoMsgDelegateFeedConsent["value"] => {
      return {
        operator,
        delegate
      };
    },
    fromAmino: ({
      operator,
      delegate
    }: AminoMsgDelegateFeedConsent["value"]): MsgDelegateFeedConsent => {
      return {
        operator,
        delegate
      };
    }
  }
};