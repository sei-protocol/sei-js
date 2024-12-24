/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as SeiprotocolSeichainOracleOracle from "./oracle.pb"
export type GenesisState = {
  params?: SeiprotocolSeichainOracleOracle.Params
  feeder_delegations?: FeederDelegation[]
  exchange_rates?: SeiprotocolSeichainOracleOracle.ExchangeRateTuple[]
  penalty_counters?: PenaltyCounter[]
  aggregate_exchange_rate_votes?: SeiprotocolSeichainOracleOracle.AggregateExchangeRateVote[]
  price_snapshots?: SeiprotocolSeichainOracleOracle.PriceSnapshot[]
}

export type FeederDelegation = {
  feeder_address?: string
  validator_address?: string
}

export type PenaltyCounter = {
  validator_address?: string
  vote_penalty_counter?: SeiprotocolSeichainOracleOracle.VotePenaltyCounter
}