/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb"
export type FeesParams = {
  global_minimum_gas_prices?: CosmosBaseV1beta1Coin.DecCoin[]
  allowed_fee_denoms?: string[]
}

export type CosmosGasParams = {
  cosmos_gas_multiplier_numerator?: string
  cosmos_gas_multiplier_denominator?: string
}

export type GenesisState = {
  fees_params?: FeesParams
  cosmos_gas_params?: CosmosGasParams
}