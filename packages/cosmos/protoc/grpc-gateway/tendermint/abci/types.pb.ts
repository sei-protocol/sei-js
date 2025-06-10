/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
import * as TendermintCryptoKeys from "../crypto/keys.pb"
import * as TendermintCryptoProof from "../crypto/proof.pb"
import * as TendermintTypesParams from "../types/params.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum CheckTxType {
  NEW = "NEW",
  RECHECK = "RECHECK",
}

export enum MisbehaviorType {
  UNKNOWN = "UNKNOWN",
  DUPLICATE_VOTE = "DUPLICATE_VOTE",
  LIGHT_CLIENT_ATTACK = "LIGHT_CLIENT_ATTACK",
}

export enum ResponseOfferSnapshotResult {
  UNKNOWN = "UNKNOWN",
  ACCEPT = "ACCEPT",
  ABORT = "ABORT",
  REJECT = "REJECT",
  REJECT_FORMAT = "REJECT_FORMAT",
  REJECT_SENDER = "REJECT_SENDER",
}

export enum ResponseApplySnapshotChunkResult {
  UNKNOWN = "UNKNOWN",
  ACCEPT = "ACCEPT",
  ABORT = "ABORT",
  RETRY = "RETRY",
  RETRY_SNAPSHOT = "RETRY_SNAPSHOT",
  REJECT_SNAPSHOT = "REJECT_SNAPSHOT",
}

export enum ResponseProcessProposalProposalStatus {
  UNKNOWN = "UNKNOWN",
  ACCEPT = "ACCEPT",
  REJECT = "REJECT",
}

export enum ResponseVerifyVoteExtensionVerifyStatus {
  UNKNOWN = "UNKNOWN",
  ACCEPT = "ACCEPT",
  REJECT = "REJECT",
}

export enum TxRecordTxAction {
  UNKNOWN = "UNKNOWN",
  UNMODIFIED = "UNMODIFIED",
  ADDED = "ADDED",
  REMOVED = "REMOVED",
}


type BaseRequest = {
}

export type Request = BaseRequest
  & OneOf<{ echo: RequestEcho; flush: RequestFlush; info: RequestInfo; init_chain: RequestInitChain; query: RequestQuery; check_tx: RequestCheckTx; commit: RequestCommit; list_snapshots: RequestListSnapshots; offer_snapshot: RequestOfferSnapshot; load_snapshot_chunk: RequestLoadSnapshotChunk; apply_snapshot_chunk: RequestApplySnapshotChunk; prepare_proposal: RequestPrepareProposal; process_proposal: RequestProcessProposal; extend_vote: RequestExtendVote; verify_vote_extension: RequestVerifyVoteExtension; finalize_block: RequestFinalizeBlock }>

export type RequestEcho = {
  message?: string
}

export type RequestFlush = {
}

export type RequestInfo = {
  version?: string
  block_version?: string
  p2p_version?: string
  abci_version?: string
}

export type RequestInitChain = {
  time?: GoogleProtobufTimestamp.Timestamp
  chain_id?: string
  consensus_params?: TendermintTypesParams.ConsensusParams
  validators?: ValidatorUpdate[]
  app_state_bytes?: Uint8Array
  initial_height?: string
}

export type RequestQuery = {
  data?: Uint8Array
  path?: string
  height?: string
  prove?: boolean
}

export type RequestCheckTx = {
  tx?: Uint8Array
  type?: CheckTxType
}

export type RequestCommit = {
}

export type RequestListSnapshots = {
}

export type RequestOfferSnapshot = {
  snapshot?: Snapshot
  app_hash?: Uint8Array
}

export type RequestLoadSnapshotChunk = {
  height?: string
  format?: number
  chunk?: number
}

export type RequestApplySnapshotChunk = {
  index?: number
  chunk?: Uint8Array
  sender?: string
}

export type RequestPrepareProposal = {
  max_tx_bytes?: string
  txs?: Uint8Array[]
  local_last_commit?: ExtendedCommitInfo
  byzantine_validators?: Misbehavior[]
  height?: string
  time?: GoogleProtobufTimestamp.Timestamp
  next_validators_hash?: Uint8Array
  proposer_address?: Uint8Array
}

export type RequestProcessProposal = {
  txs?: Uint8Array[]
  proposed_last_commit?: CommitInfo
  byzantine_validators?: Misbehavior[]
  hash?: Uint8Array
  height?: string
  time?: GoogleProtobufTimestamp.Timestamp
  next_validators_hash?: Uint8Array
  proposer_address?: Uint8Array
}

export type RequestExtendVote = {
  hash?: Uint8Array
  height?: string
}

export type RequestVerifyVoteExtension = {
  hash?: Uint8Array
  validator_address?: Uint8Array
  height?: string
  vote_extension?: Uint8Array
}

export type RequestFinalizeBlock = {
  txs?: Uint8Array[]
  decided_last_commit?: CommitInfo
  byzantine_validators?: Misbehavior[]
  hash?: Uint8Array
  height?: string
  time?: GoogleProtobufTimestamp.Timestamp
  next_validators_hash?: Uint8Array
  proposer_address?: Uint8Array
}


type BaseResponse = {
}

export type Response = BaseResponse
  & OneOf<{ exception: ResponseException; echo: ResponseEcho; flush: ResponseFlush; info: ResponseInfo; init_chain: ResponseInitChain; query: ResponseQuery; check_tx: ResponseCheckTx; commit: ResponseCommit; list_snapshots: ResponseListSnapshots; offer_snapshot: ResponseOfferSnapshot; load_snapshot_chunk: ResponseLoadSnapshotChunk; apply_snapshot_chunk: ResponseApplySnapshotChunk; prepare_proposal: ResponsePrepareProposal; process_proposal: ResponseProcessProposal; extend_vote: ResponseExtendVote; verify_vote_extension: ResponseVerifyVoteExtension; finalize_block: ResponseFinalizeBlock }>

export type ResponseException = {
  error?: string
}

export type ResponseEcho = {
  message?: string
}

export type ResponseFlush = {
}

export type ResponseInfo = {
  data?: string
  version?: string
  app_version?: string
  last_block_height?: string
  last_block_app_hash?: Uint8Array
}

export type ResponseInitChain = {
  consensus_params?: TendermintTypesParams.ConsensusParams
  validators?: ValidatorUpdate[]
  app_hash?: Uint8Array
}

export type ResponseQuery = {
  code?: number
  log?: string
  info?: string
  index?: string
  key?: Uint8Array
  value?: Uint8Array
  proof_ops?: TendermintCryptoProof.ProofOps
  height?: string
  codespace?: string
}

export type ResponseCheckTx = {
  code?: number
  data?: Uint8Array
  gas_wanted?: string
  codespace?: string
  sender?: string
  priority?: string
}

export type ResponseDeliverTx = {
  code?: number
  data?: Uint8Array
  log?: string
  info?: string
  gas_wanted?: string
  gas_used?: string
  events?: Event[]
  codespace?: string
}

export type ResponseCommit = {
  retain_height?: string
}

export type ResponseListSnapshots = {
  snapshots?: Snapshot[]
}

export type ResponseOfferSnapshot = {
  result?: ResponseOfferSnapshotResult
}

export type ResponseLoadSnapshotChunk = {
  chunk?: Uint8Array
}

export type ResponseApplySnapshotChunk = {
  result?: ResponseApplySnapshotChunkResult
  refetch_chunks?: number[]
  reject_senders?: string[]
}

export type ResponsePrepareProposal = {
  tx_records?: TxRecord[]
  app_hash?: Uint8Array
  tx_results?: ExecTxResult[]
  validator_updates?: ValidatorUpdate[]
  consensus_param_updates?: TendermintTypesParams.ConsensusParams
}

export type ResponseProcessProposal = {
  status?: ResponseProcessProposalProposalStatus
  app_hash?: Uint8Array
  tx_results?: ExecTxResult[]
  validator_updates?: ValidatorUpdate[]
  consensus_param_updates?: TendermintTypesParams.ConsensusParams
}

export type ResponseExtendVote = {
  vote_extension?: Uint8Array
}

export type ResponseVerifyVoteExtension = {
  status?: ResponseVerifyVoteExtensionVerifyStatus
}

export type ResponseFinalizeBlock = {
  events?: Event[]
  tx_results?: ExecTxResult[]
  validator_updates?: ValidatorUpdate[]
  consensus_param_updates?: TendermintTypesParams.ConsensusParams
  app_hash?: Uint8Array
}

export type CommitInfo = {
  round?: number
  votes?: VoteInfo[]
}

export type ExtendedCommitInfo = {
  round?: number
  votes?: ExtendedVoteInfo[]
}

export type Event = {
  type?: string
  attributes?: EventAttribute[]
}

export type EventAttribute = {
  key?: string
  value?: string
  index?: boolean
}

export type ExecTxResult = {
  code?: number
  data?: Uint8Array
  log?: string
  info?: string
  gas_wanted?: string
  gas_used?: string
  events?: Event[]
  codespace?: string
}

export type TxResult = {
  height?: string
  index?: number
  tx?: Uint8Array
  result?: ExecTxResult
}

export type TxRecord = {
  action?: TxRecordTxAction
  tx?: Uint8Array
}

export type Validator = {
  address?: Uint8Array
  power?: string
}

export type ValidatorUpdate = {
  pub_key?: TendermintCryptoKeys.PublicKey
  power?: string
}

export type VoteInfo = {
  validator?: Validator
  signed_last_block?: boolean
}

export type ExtendedVoteInfo = {
  validator?: Validator
  signed_last_block?: boolean
  vote_extension?: Uint8Array
}

export type Misbehavior = {
  type?: MisbehaviorType
  validator?: Validator
  height?: string
  time?: GoogleProtobufTimestamp.Timestamp
  total_voting_power?: string
}

export type Snapshot = {
  height?: string
  format?: number
  chunks?: number
  hash?: Uint8Array
  metadata?: Uint8Array
}

export class ABCIApplication {
  static Echo(req: RequestEcho, initReq?: fm.InitReq): Promise<ResponseEcho> {
    return fm.fetchReq<RequestEcho, ResponseEcho>(`/tendermint.abci.ABCIApplication/Echo`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Flush(req: RequestFlush, initReq?: fm.InitReq): Promise<ResponseFlush> {
    return fm.fetchReq<RequestFlush, ResponseFlush>(`/tendermint.abci.ABCIApplication/Flush`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Info(req: RequestInfo, initReq?: fm.InitReq): Promise<ResponseInfo> {
    return fm.fetchReq<RequestInfo, ResponseInfo>(`/tendermint.abci.ABCIApplication/Info`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CheckTx(req: RequestCheckTx, initReq?: fm.InitReq): Promise<ResponseCheckTx> {
    return fm.fetchReq<RequestCheckTx, ResponseCheckTx>(`/tendermint.abci.ABCIApplication/CheckTx`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Query(req: RequestQuery, initReq?: fm.InitReq): Promise<ResponseQuery> {
    return fm.fetchReq<RequestQuery, ResponseQuery>(`/tendermint.abci.ABCIApplication/Query`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Commit(req: RequestCommit, initReq?: fm.InitReq): Promise<ResponseCommit> {
    return fm.fetchReq<RequestCommit, ResponseCommit>(`/tendermint.abci.ABCIApplication/Commit`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static InitChain(req: RequestInitChain, initReq?: fm.InitReq): Promise<ResponseInitChain> {
    return fm.fetchReq<RequestInitChain, ResponseInitChain>(`/tendermint.abci.ABCIApplication/InitChain`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ListSnapshots(req: RequestListSnapshots, initReq?: fm.InitReq): Promise<ResponseListSnapshots> {
    return fm.fetchReq<RequestListSnapshots, ResponseListSnapshots>(`/tendermint.abci.ABCIApplication/ListSnapshots`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static OfferSnapshot(req: RequestOfferSnapshot, initReq?: fm.InitReq): Promise<ResponseOfferSnapshot> {
    return fm.fetchReq<RequestOfferSnapshot, ResponseOfferSnapshot>(`/tendermint.abci.ABCIApplication/OfferSnapshot`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static LoadSnapshotChunk(req: RequestLoadSnapshotChunk, initReq?: fm.InitReq): Promise<ResponseLoadSnapshotChunk> {
    return fm.fetchReq<RequestLoadSnapshotChunk, ResponseLoadSnapshotChunk>(`/tendermint.abci.ABCIApplication/LoadSnapshotChunk`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ApplySnapshotChunk(req: RequestApplySnapshotChunk, initReq?: fm.InitReq): Promise<ResponseApplySnapshotChunk> {
    return fm.fetchReq<RequestApplySnapshotChunk, ResponseApplySnapshotChunk>(`/tendermint.abci.ABCIApplication/ApplySnapshotChunk`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static PrepareProposal(req: RequestPrepareProposal, initReq?: fm.InitReq): Promise<ResponsePrepareProposal> {
    return fm.fetchReq<RequestPrepareProposal, ResponsePrepareProposal>(`/tendermint.abci.ABCIApplication/PrepareProposal`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ProcessProposal(req: RequestProcessProposal, initReq?: fm.InitReq): Promise<ResponseProcessProposal> {
    return fm.fetchReq<RequestProcessProposal, ResponseProcessProposal>(`/tendermint.abci.ABCIApplication/ProcessProposal`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ExtendVote(req: RequestExtendVote, initReq?: fm.InitReq): Promise<ResponseExtendVote> {
    return fm.fetchReq<RequestExtendVote, ResponseExtendVote>(`/tendermint.abci.ABCIApplication/ExtendVote`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static VerifyVoteExtension(req: RequestVerifyVoteExtension, initReq?: fm.InitReq): Promise<ResponseVerifyVoteExtension> {
    return fm.fetchReq<RequestVerifyVoteExtension, ResponseVerifyVoteExtension>(`/tendermint.abci.ABCIApplication/VerifyVoteExtension`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static FinalizeBlock(req: RequestFinalizeBlock, initReq?: fm.InitReq): Promise<ResponseFinalizeBlock> {
    return fm.fetchReq<RequestFinalizeBlock, ResponseFinalizeBlock>(`/tendermint.abci.ABCIApplication/FinalizeBlock`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}