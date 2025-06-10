/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as CosmosBankV1beta1Bank from "../cosmos/bank/v1beta1/bank.pb"
import * as CosmosBaseV1beta1Coin from "../cosmos/base/v1beta1/coin.pb"
import * as fm from "../fetch.pb"
export type MsgCreateDenom = {
  sender?: string
  subdenom?: string
  allow_list?: CosmosBankV1beta1Bank.AllowList
}

export type MsgCreateDenomResponse = {
  new_token_denom?: string
}

export type MsgMint = {
  sender?: string
  amount?: CosmosBaseV1beta1Coin.Coin
}

export type MsgMintResponse = {
}

export type MsgBurn = {
  sender?: string
  amount?: CosmosBaseV1beta1Coin.Coin
}

export type MsgBurnResponse = {
}

export type MsgChangeAdmin = {
  sender?: string
  denom?: string
  new_admin?: string
}

export type MsgChangeAdminResponse = {
}

export type MsgSetDenomMetadata = {
  sender?: string
  metadata?: CosmosBankV1beta1Bank.Metadata
}

export type MsgSetDenomMetadataResponse = {
}

export type MsgUpdateDenom = {
  sender?: string
  denom?: string
  allow_list?: CosmosBankV1beta1Bank.AllowList
}

export type MsgUpdateDenomResponse = {
}

export class Msg {
  static CreateDenom(req: MsgCreateDenom, initReq?: fm.InitReq): Promise<MsgCreateDenomResponse> {
    return fm.fetchReq<MsgCreateDenom, MsgCreateDenomResponse>(`/seiprotocol.seichain.tokenfactory.Msg/CreateDenom`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateDenom(req: MsgUpdateDenom, initReq?: fm.InitReq): Promise<MsgUpdateDenomResponse> {
    return fm.fetchReq<MsgUpdateDenom, MsgUpdateDenomResponse>(`/seiprotocol.seichain.tokenfactory.Msg/UpdateDenom`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Mint(req: MsgMint, initReq?: fm.InitReq): Promise<MsgMintResponse> {
    return fm.fetchReq<MsgMint, MsgMintResponse>(`/seiprotocol.seichain.tokenfactory.Msg/Mint`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Burn(req: MsgBurn, initReq?: fm.InitReq): Promise<MsgBurnResponse> {
    return fm.fetchReq<MsgBurn, MsgBurnResponse>(`/seiprotocol.seichain.tokenfactory.Msg/Burn`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ChangeAdmin(req: MsgChangeAdmin, initReq?: fm.InitReq): Promise<MsgChangeAdminResponse> {
    return fm.fetchReq<MsgChangeAdmin, MsgChangeAdminResponse>(`/seiprotocol.seichain.tokenfactory.Msg/ChangeAdmin`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SetDenomMetadata(req: MsgSetDenomMetadata, initReq?: fm.InitReq): Promise<MsgSetDenomMetadataResponse> {
    return fm.fetchReq<MsgSetDenomMetadata, MsgSetDenomMetadataResponse>(`/seiprotocol.seichain.tokenfactory.Msg/SetDenomMetadata`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}