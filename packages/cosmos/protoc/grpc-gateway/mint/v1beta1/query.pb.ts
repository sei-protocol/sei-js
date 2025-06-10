/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as SeiprotocolSeichainMintMint from "./mint.pb"
export type QueryParamsRequest = {
}

export type QueryParamsResponse = {
  params?: SeiprotocolSeichainMintMint.Params
}

export type QueryMinterRequest = {
}

export type QueryMinterResponse = {
  start_date?: string
  end_date?: string
  denom?: string
  total_mint_amount?: string
  remaining_mint_amount?: string
  last_mint_amount?: string
  last_mint_date?: string
  last_mint_height?: string
}

export class Query {
  static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq<QueryParamsRequest, QueryParamsResponse>(`/seichain/mint/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static Minter(req: QueryMinterRequest, initReq?: fm.InitReq): Promise<QueryMinterResponse> {
    return fm.fetchReq<QueryMinterRequest, QueryMinterResponse>(`/seichain/mint/v1beta1/minter?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}