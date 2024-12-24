/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb"
export type MsgSetWithdrawAddress = {
  delegator_address?: string
  withdraw_address?: string
}

export type MsgSetWithdrawAddressResponse = {
}

export type MsgWithdrawDelegatorReward = {
  delegator_address?: string
  validator_address?: string
}

export type MsgWithdrawDelegatorRewardResponse = {
}

export type MsgWithdrawValidatorCommission = {
  validator_address?: string
}

export type MsgWithdrawValidatorCommissionResponse = {
}

export type MsgFundCommunityPool = {
  amount?: CosmosBaseV1beta1Coin.Coin[]
  depositor?: string
}

export type MsgFundCommunityPoolResponse = {
}

export class Msg {
  static SetWithdrawAddress(req: MsgSetWithdrawAddress, initReq?: fm.InitReq): Promise<MsgSetWithdrawAddressResponse> {
    return fm.fetchReq<MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse>(`/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static WithdrawDelegatorReward(req: MsgWithdrawDelegatorReward, initReq?: fm.InitReq): Promise<MsgWithdrawDelegatorRewardResponse> {
    return fm.fetchReq<MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse>(`/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static WithdrawValidatorCommission(req: MsgWithdrawValidatorCommission, initReq?: fm.InitReq): Promise<MsgWithdrawValidatorCommissionResponse> {
    return fm.fetchReq<MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse>(`/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static FundCommunityPool(req: MsgFundCommunityPool, initReq?: fm.InitReq): Promise<MsgFundCommunityPoolResponse> {
    return fm.fetchReq<MsgFundCommunityPool, MsgFundCommunityPoolResponse>(`/cosmos.distribution.v1beta1.Msg/FundCommunityPool`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}