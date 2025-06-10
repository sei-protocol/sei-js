/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../fetch.pb"
import * as SeiprotocolSeichainEpochEpoch from "./epoch.pb"
import * as SeiprotocolSeichainEpochParams from "./params.pb"
export type QueryParamsRequest = {
}

export type QueryParamsResponse = {
  params?: SeiprotocolSeichainEpochParams.Params
}

export type QueryEpochRequest = {
}

export type QueryEpochResponse = {
  epoch?: SeiprotocolSeichainEpochEpoch.Epoch
}

export class Query {
  static Epoch(req: QueryEpochRequest, initReq?: fm.InitReq): Promise<QueryEpochResponse> {
    return fm.fetchReq<QueryEpochRequest, QueryEpochResponse>(`/sei-protocol/seichain/epoch/epoch?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/sei-protocol/seichain/epoch/params?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}