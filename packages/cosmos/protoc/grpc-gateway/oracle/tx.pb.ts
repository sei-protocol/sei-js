/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../fetch.pb"
export type MsgAggregateExchangeRateVote = {
  exchange_rates?: string
  feeder?: string
  validator?: string
}

export type MsgAggregateExchangeRateVoteResponse = {
}

export type MsgDelegateFeedConsent = {
  operator?: string
  delegate?: string
}

export type MsgDelegateFeedConsentResponse = {
}

export class Msg {
  static AggregateExchangeRateVote(req: MsgAggregateExchangeRateVote, initReq?: fm.InitReq): Promise<MsgAggregateExchangeRateVoteResponse> {
    return fm.fetchReq<MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse>(`/seiprotocol.seichain.oracle.Msg/AggregateExchangeRateVote`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DelegateFeedConsent(req: MsgDelegateFeedConsent, initReq?: fm.InitReq): Promise<MsgDelegateFeedConsentResponse> {
    return fm.fetchReq<MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse>(`/seiprotocol.seichain.oracle.Msg/DelegateFeedConsent`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}