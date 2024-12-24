/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
export type Params = {
  vote_period?: string
  vote_threshold?: string
  reward_band?: string
  whitelist?: Denom[]
  slash_fraction?: string
  slash_window?: string
  min_valid_per_window?: string
  lookback_duration?: string
}

export type Denom = {
  name?: string
}

export type AggregateExchangeRateVote = {
  exchange_rate_tuples?: ExchangeRateTuple[]
  voter?: string
}

export type ExchangeRateTuple = {
  denom?: string
  exchange_rate?: string
}

export type OracleExchangeRate = {
  exchange_rate?: string
  last_update?: string
  last_update_timestamp?: string
}

export type PriceSnapshotItem = {
  denom?: string
  oracle_exchange_rate?: OracleExchangeRate
}

export type PriceSnapshot = {
  snapshot_timestamp?: string
  price_snapshot_items?: PriceSnapshotItem[]
}

export type OracleTwap = {
  denom?: string
  twap?: string
  lookback_seconds?: string
}

export type VotePenaltyCounter = {
  miss_count?: string
  abstain_count?: string
  success_count?: string
}