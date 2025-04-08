import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Timestamp } from "../../google/protobuf/timestamp";

import { PublicKey } from "../crypto/keys";

import { ProofOps } from "../crypto/proof";

import { ConsensusParams } from "../types/params";

import type {
	CommitInfo as CommitInfo_type,
	EventAttribute as EventAttribute_type,
	Event as Event_type,
	ExecTxResult as ExecTxResult_type,
	ExtendedCommitInfo as ExtendedCommitInfo_type,
	ExtendedVoteInfo as ExtendedVoteInfo_type,
	Misbehavior as Misbehavior_type,
	RequestApplySnapshotChunk as RequestApplySnapshotChunk_type,
	RequestCheckTx as RequestCheckTx_type,
	RequestCommit as RequestCommit_type,
	RequestEcho as RequestEcho_type,
	RequestExtendVote as RequestExtendVote_type,
	RequestFinalizeBlock as RequestFinalizeBlock_type,
	RequestFlush as RequestFlush_type,
	RequestInfo as RequestInfo_type,
	RequestInitChain as RequestInitChain_type,
	RequestListSnapshots as RequestListSnapshots_type,
	RequestLoadSnapshotChunk as RequestLoadSnapshotChunk_type,
	RequestOfferSnapshot as RequestOfferSnapshot_type,
	RequestPrepareProposal as RequestPrepareProposal_type,
	RequestProcessProposal as RequestProcessProposal_type,
	RequestQuery as RequestQuery_type,
	RequestVerifyVoteExtension as RequestVerifyVoteExtension_type,
	Request as Request_type,
	ResponseApplySnapshotChunk as ResponseApplySnapshotChunk_type,
	ResponseCheckTx as ResponseCheckTx_type,
	ResponseCommit as ResponseCommit_type,
	ResponseDeliverTx as ResponseDeliverTx_type,
	ResponseEcho as ResponseEcho_type,
	ResponseException as ResponseException_type,
	ResponseExtendVote as ResponseExtendVote_type,
	ResponseFinalizeBlock as ResponseFinalizeBlock_type,
	ResponseFlush as ResponseFlush_type,
	ResponseInfo as ResponseInfo_type,
	ResponseInitChain as ResponseInitChain_type,
	ResponseListSnapshots as ResponseListSnapshots_type,
	ResponseLoadSnapshotChunk as ResponseLoadSnapshotChunk_type,
	ResponseOfferSnapshot as ResponseOfferSnapshot_type,
	ResponsePrepareProposal as ResponsePrepareProposal_type,
	ResponseProcessProposal as ResponseProcessProposal_type,
	ResponseQuery as ResponseQuery_type,
	ResponseVerifyVoteExtension as ResponseVerifyVoteExtension_type,
	Response as Response_type,
	Snapshot as Snapshot_type,
	TxRecord as TxRecord_type,
	TxResult as TxResult_type,
	ValidatorUpdate as ValidatorUpdate_type,
	Validator as Validator_type,
	VoteInfo as VoteInfo_type
} from "../../../types/tendermint/abci";

import {
	CheckTxType,
	MisbehaviorType,
	ResponseApplySnapshotChunkResult,
	ResponseOfferSnapshotResult,
	ResponseProcessProposalProposalStatus,
	ResponseVerifyVoteExtensionVerifyStatus,
	TxRecordTxAction
} from "../../../types/tendermint/abci";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface Request extends Request_type {}
export interface RequestEcho extends RequestEcho_type {}
export interface RequestFlush extends RequestFlush_type {}
export interface RequestInfo extends RequestInfo_type {}
export interface RequestInitChain extends RequestInitChain_type {}
export interface RequestQuery extends RequestQuery_type {}
export interface RequestCheckTx extends RequestCheckTx_type {}
export interface RequestCommit extends RequestCommit_type {}
export interface RequestListSnapshots extends RequestListSnapshots_type {}
export interface RequestOfferSnapshot extends RequestOfferSnapshot_type {}
export interface RequestLoadSnapshotChunk extends RequestLoadSnapshotChunk_type {}
export interface RequestApplySnapshotChunk extends RequestApplySnapshotChunk_type {}
export interface RequestPrepareProposal extends RequestPrepareProposal_type {}
export interface RequestProcessProposal extends RequestProcessProposal_type {}
export interface RequestExtendVote extends RequestExtendVote_type {}
export interface RequestVerifyVoteExtension extends RequestVerifyVoteExtension_type {}
export interface RequestFinalizeBlock extends RequestFinalizeBlock_type {}
export interface Response extends Response_type {}
export interface ResponseException extends ResponseException_type {}
export interface ResponseEcho extends ResponseEcho_type {}
export interface ResponseFlush extends ResponseFlush_type {}
export interface ResponseInfo extends ResponseInfo_type {}
export interface ResponseInitChain extends ResponseInitChain_type {}
export interface ResponseQuery extends ResponseQuery_type {}
export interface ResponseCheckTx extends ResponseCheckTx_type {}
export interface ResponseDeliverTx extends ResponseDeliverTx_type {}
export interface ResponseCommit extends ResponseCommit_type {}
export interface ResponseListSnapshots extends ResponseListSnapshots_type {}
export interface ResponseOfferSnapshot extends ResponseOfferSnapshot_type {}
export interface ResponseLoadSnapshotChunk extends ResponseLoadSnapshotChunk_type {}
export interface ResponseApplySnapshotChunk extends ResponseApplySnapshotChunk_type {}
export interface ResponsePrepareProposal extends ResponsePrepareProposal_type {}
export interface ResponseProcessProposal extends ResponseProcessProposal_type {}
export interface ResponseExtendVote extends ResponseExtendVote_type {}
export interface ResponseVerifyVoteExtension extends ResponseVerifyVoteExtension_type {}
export interface ResponseFinalizeBlock extends ResponseFinalizeBlock_type {}
export interface CommitInfo extends CommitInfo_type {}
export interface ExtendedCommitInfo extends ExtendedCommitInfo_type {}
export interface Event extends Event_type {}
export interface EventAttribute extends EventAttribute_type {}
export interface ExecTxResult extends ExecTxResult_type {}
export interface TxResult extends TxResult_type {}
export interface TxRecord extends TxRecord_type {}
export interface Validator extends Validator_type {}
export interface ValidatorUpdate extends ValidatorUpdate_type {}
export interface VoteInfo extends VoteInfo_type {}
export interface ExtendedVoteInfo extends ExtendedVoteInfo_type {}
export interface Misbehavior extends Misbehavior_type {}
export interface Snapshot extends Snapshot_type {}

export const Request: MessageFns<Request, "tendermint.abci.Request"> = {
	$type: "tendermint.abci.Request" as const,

	encode(message: Request, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.echo !== undefined) {
			RequestEcho.encode(message.echo, writer.uint32(10).fork()).join();
		}
		if (message.flush !== undefined) {
			RequestFlush.encode(message.flush, writer.uint32(18).fork()).join();
		}
		if (message.info !== undefined) {
			RequestInfo.encode(message.info, writer.uint32(26).fork()).join();
		}
		if (message.init_chain !== undefined) {
			RequestInitChain.encode(message.init_chain, writer.uint32(34).fork()).join();
		}
		if (message.query !== undefined) {
			RequestQuery.encode(message.query, writer.uint32(42).fork()).join();
		}
		if (message.check_tx !== undefined) {
			RequestCheckTx.encode(message.check_tx, writer.uint32(58).fork()).join();
		}
		if (message.commit !== undefined) {
			RequestCommit.encode(message.commit, writer.uint32(82).fork()).join();
		}
		if (message.list_snapshots !== undefined) {
			RequestListSnapshots.encode(message.list_snapshots, writer.uint32(90).fork()).join();
		}
		if (message.offer_snapshot !== undefined) {
			RequestOfferSnapshot.encode(message.offer_snapshot, writer.uint32(98).fork()).join();
		}
		if (message.load_snapshot_chunk !== undefined) {
			RequestLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(106).fork()).join();
		}
		if (message.apply_snapshot_chunk !== undefined) {
			RequestApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(114).fork()).join();
		}
		if (message.prepare_proposal !== undefined) {
			RequestPrepareProposal.encode(message.prepare_proposal, writer.uint32(122).fork()).join();
		}
		if (message.process_proposal !== undefined) {
			RequestProcessProposal.encode(message.process_proposal, writer.uint32(130).fork()).join();
		}
		if (message.extend_vote !== undefined) {
			RequestExtendVote.encode(message.extend_vote, writer.uint32(138).fork()).join();
		}
		if (message.verify_vote_extension !== undefined) {
			RequestVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(146).fork()).join();
		}
		if (message.finalize_block !== undefined) {
			RequestFinalizeBlock.encode(message.finalize_block, writer.uint32(154).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Request {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.echo = RequestEcho.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.flush = RequestFlush.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.info = RequestInfo.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.init_chain = RequestInitChain.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.query = RequestQuery.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.check_tx = RequestCheckTx.decode(reader, reader.uint32());
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.commit = RequestCommit.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.list_snapshots = RequestListSnapshots.decode(reader, reader.uint32());
					continue;
				case 12:
					if (tag !== 98) {
						break;
					}

					message.offer_snapshot = RequestOfferSnapshot.decode(reader, reader.uint32());
					continue;
				case 13:
					if (tag !== 106) {
						break;
					}

					message.load_snapshot_chunk = RequestLoadSnapshotChunk.decode(reader, reader.uint32());
					continue;
				case 14:
					if (tag !== 114) {
						break;
					}

					message.apply_snapshot_chunk = RequestApplySnapshotChunk.decode(reader, reader.uint32());
					continue;
				case 15:
					if (tag !== 122) {
						break;
					}

					message.prepare_proposal = RequestPrepareProposal.decode(reader, reader.uint32());
					continue;
				case 16:
					if (tag !== 130) {
						break;
					}

					message.process_proposal = RequestProcessProposal.decode(reader, reader.uint32());
					continue;
				case 17:
					if (tag !== 138) {
						break;
					}

					message.extend_vote = RequestExtendVote.decode(reader, reader.uint32());
					continue;
				case 18:
					if (tag !== 146) {
						break;
					}

					message.verify_vote_extension = RequestVerifyVoteExtension.decode(reader, reader.uint32());
					continue;
				case 19:
					if (tag !== 154) {
						break;
					}

					message.finalize_block = RequestFinalizeBlock.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Request {
		return {
			echo: isSet(object.echo) ? RequestEcho.fromJSON(object.echo) : undefined,
			flush: isSet(object.flush) ? RequestFlush.fromJSON(object.flush) : undefined,
			info: isSet(object.info) ? RequestInfo.fromJSON(object.info) : undefined,
			init_chain: isSet(object.init_chain) ? RequestInitChain.fromJSON(object.init_chain) : undefined,
			query: isSet(object.query) ? RequestQuery.fromJSON(object.query) : undefined,
			check_tx: isSet(object.check_tx) ? RequestCheckTx.fromJSON(object.check_tx) : undefined,
			commit: isSet(object.commit) ? RequestCommit.fromJSON(object.commit) : undefined,
			list_snapshots: isSet(object.list_snapshots) ? RequestListSnapshots.fromJSON(object.list_snapshots) : undefined,
			offer_snapshot: isSet(object.offer_snapshot) ? RequestOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
			load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? RequestLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
			apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? RequestApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
			prepare_proposal: isSet(object.prepare_proposal) ? RequestPrepareProposal.fromJSON(object.prepare_proposal) : undefined,
			process_proposal: isSet(object.process_proposal) ? RequestProcessProposal.fromJSON(object.process_proposal) : undefined,
			extend_vote: isSet(object.extend_vote) ? RequestExtendVote.fromJSON(object.extend_vote) : undefined,
			verify_vote_extension: isSet(object.verify_vote_extension) ? RequestVerifyVoteExtension.fromJSON(object.verify_vote_extension) : undefined,
			finalize_block: isSet(object.finalize_block) ? RequestFinalizeBlock.fromJSON(object.finalize_block) : undefined
		};
	},

	toJSON(message: Request): unknown {
		const obj: any = {};
		if (message.echo !== undefined) {
			obj.echo = RequestEcho.toJSON(message.echo);
		}
		if (message.flush !== undefined) {
			obj.flush = RequestFlush.toJSON(message.flush);
		}
		if (message.info !== undefined) {
			obj.info = RequestInfo.toJSON(message.info);
		}
		if (message.init_chain !== undefined) {
			obj.init_chain = RequestInitChain.toJSON(message.init_chain);
		}
		if (message.query !== undefined) {
			obj.query = RequestQuery.toJSON(message.query);
		}
		if (message.check_tx !== undefined) {
			obj.check_tx = RequestCheckTx.toJSON(message.check_tx);
		}
		if (message.commit !== undefined) {
			obj.commit = RequestCommit.toJSON(message.commit);
		}
		if (message.list_snapshots !== undefined) {
			obj.list_snapshots = RequestListSnapshots.toJSON(message.list_snapshots);
		}
		if (message.offer_snapshot !== undefined) {
			obj.offer_snapshot = RequestOfferSnapshot.toJSON(message.offer_snapshot);
		}
		if (message.load_snapshot_chunk !== undefined) {
			obj.load_snapshot_chunk = RequestLoadSnapshotChunk.toJSON(message.load_snapshot_chunk);
		}
		if (message.apply_snapshot_chunk !== undefined) {
			obj.apply_snapshot_chunk = RequestApplySnapshotChunk.toJSON(message.apply_snapshot_chunk);
		}
		if (message.prepare_proposal !== undefined) {
			obj.prepare_proposal = RequestPrepareProposal.toJSON(message.prepare_proposal);
		}
		if (message.process_proposal !== undefined) {
			obj.process_proposal = RequestProcessProposal.toJSON(message.process_proposal);
		}
		if (message.extend_vote !== undefined) {
			obj.extend_vote = RequestExtendVote.toJSON(message.extend_vote);
		}
		if (message.verify_vote_extension !== undefined) {
			obj.verify_vote_extension = RequestVerifyVoteExtension.toJSON(message.verify_vote_extension);
		}
		if (message.finalize_block !== undefined) {
			obj.finalize_block = RequestFinalizeBlock.toJSON(message.finalize_block);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
		return Request.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
		const message = createBaseRequest();
		message.echo = object.echo !== undefined && object.echo !== null ? RequestEcho.fromPartial(object.echo) : undefined;
		message.flush = object.flush !== undefined && object.flush !== null ? RequestFlush.fromPartial(object.flush) : undefined;
		message.info = object.info !== undefined && object.info !== null ? RequestInfo.fromPartial(object.info) : undefined;
		message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? RequestInitChain.fromPartial(object.init_chain) : undefined;
		message.query = object.query !== undefined && object.query !== null ? RequestQuery.fromPartial(object.query) : undefined;
		message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? RequestCheckTx.fromPartial(object.check_tx) : undefined;
		message.commit = object.commit !== undefined && object.commit !== null ? RequestCommit.fromPartial(object.commit) : undefined;
		message.list_snapshots =
			object.list_snapshots !== undefined && object.list_snapshots !== null ? RequestListSnapshots.fromPartial(object.list_snapshots) : undefined;
		message.offer_snapshot =
			object.offer_snapshot !== undefined && object.offer_snapshot !== null ? RequestOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
		message.load_snapshot_chunk =
			object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null
				? RequestLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk)
				: undefined;
		message.apply_snapshot_chunk =
			object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null
				? RequestApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk)
				: undefined;
		message.prepare_proposal =
			object.prepare_proposal !== undefined && object.prepare_proposal !== null ? RequestPrepareProposal.fromPartial(object.prepare_proposal) : undefined;
		message.process_proposal =
			object.process_proposal !== undefined && object.process_proposal !== null ? RequestProcessProposal.fromPartial(object.process_proposal) : undefined;
		message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? RequestExtendVote.fromPartial(object.extend_vote) : undefined;
		message.verify_vote_extension =
			object.verify_vote_extension !== undefined && object.verify_vote_extension !== null
				? RequestVerifyVoteExtension.fromPartial(object.verify_vote_extension)
				: undefined;
		message.finalize_block =
			object.finalize_block !== undefined && object.finalize_block !== null ? RequestFinalizeBlock.fromPartial(object.finalize_block) : undefined;
		return message;
	}
};

export const RequestEcho: MessageFns<RequestEcho, "tendermint.abci.RequestEcho"> = {
	$type: "tendermint.abci.RequestEcho" as const,

	encode(message: RequestEcho, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.message !== "") {
			writer.uint32(10).string(message.message);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestEcho {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestEcho();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.message = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestEcho {
		return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
	},

	toJSON(message: RequestEcho): unknown {
		const obj: any = {};
		if (message.message !== "") {
			obj.message = message.message;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestEcho>, I>>(base?: I): RequestEcho {
		return RequestEcho.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestEcho>, I>>(object: I): RequestEcho {
		const message = createBaseRequestEcho();
		message.message = object.message ?? "";
		return message;
	}
};

export const RequestFlush: MessageFns<RequestFlush, "tendermint.abci.RequestFlush"> = {
	$type: "tendermint.abci.RequestFlush" as const,

	encode(_: RequestFlush, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestFlush {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestFlush();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): RequestFlush {
		return {};
	},

	toJSON(_: RequestFlush): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestFlush>, I>>(base?: I): RequestFlush {
		return RequestFlush.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestFlush>, I>>(_: I): RequestFlush {
		const message = createBaseRequestFlush();
		return message;
	}
};

export const RequestInfo: MessageFns<RequestInfo, "tendermint.abci.RequestInfo"> = {
	$type: "tendermint.abci.RequestInfo" as const,

	encode(message: RequestInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.version !== "") {
			writer.uint32(10).string(message.version);
		}
		if (message.block_version !== 0) {
			writer.uint32(16).uint64(message.block_version);
		}
		if (message.p2p_version !== 0) {
			writer.uint32(24).uint64(message.p2p_version);
		}
		if (message.abci_version !== "") {
			writer.uint32(34).string(message.abci_version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.version = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.block_version = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.p2p_version = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.abci_version = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestInfo {
		return {
			version: isSet(object.version) ? globalThis.String(object.version) : "",
			block_version: isSet(object.block_version) ? globalThis.Number(object.block_version) : 0,
			p2p_version: isSet(object.p2p_version) ? globalThis.Number(object.p2p_version) : 0,
			abci_version: isSet(object.abci_version) ? globalThis.String(object.abci_version) : ""
		};
	},

	toJSON(message: RequestInfo): unknown {
		const obj: any = {};
		if (message.version !== "") {
			obj.version = message.version;
		}
		if (message.block_version !== 0) {
			obj.block_version = Math.round(message.block_version);
		}
		if (message.p2p_version !== 0) {
			obj.p2p_version = Math.round(message.p2p_version);
		}
		if (message.abci_version !== "") {
			obj.abci_version = message.abci_version;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestInfo>, I>>(base?: I): RequestInfo {
		return RequestInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestInfo>, I>>(object: I): RequestInfo {
		const message = createBaseRequestInfo();
		message.version = object.version ?? "";
		message.block_version = object.block_version ?? 0;
		message.p2p_version = object.p2p_version ?? 0;
		message.abci_version = object.abci_version ?? "";
		return message;
	}
};

export const RequestInitChain: MessageFns<RequestInitChain, "tendermint.abci.RequestInitChain"> = {
	$type: "tendermint.abci.RequestInitChain" as const,

	encode(message: RequestInitChain, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.time !== undefined) {
			Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).join();
		}
		if (message.chain_id !== "") {
			writer.uint32(18).string(message.chain_id);
		}
		if (message.consensus_params !== undefined) {
			ConsensusParams.encode(message.consensus_params, writer.uint32(26).fork()).join();
		}
		for (const v of message.validators) {
			ValidatorUpdate.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.app_state_bytes.length !== 0) {
			writer.uint32(42).bytes(message.app_state_bytes);
		}
		if (message.initial_height !== 0) {
			writer.uint32(48).int64(message.initial_height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestInitChain {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestInitChain();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.chain_id = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.app_state_bytes = reader.bytes();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.initial_height = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestInitChain {
		return {
			time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
			chain_id: isSet(object.chain_id) ? globalThis.String(object.chain_id) : "",
			consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
			app_state_bytes: isSet(object.app_state_bytes) ? bytesFromBase64(object.app_state_bytes) : new Uint8Array(0),
			initial_height: isSet(object.initial_height) ? globalThis.Number(object.initial_height) : 0
		};
	},

	toJSON(message: RequestInitChain): unknown {
		const obj: any = {};
		if (message.time !== undefined) {
			obj.time = message.time.toISOString();
		}
		if (message.chain_id !== "") {
			obj.chain_id = message.chain_id;
		}
		if (message.consensus_params !== undefined) {
			obj.consensus_params = ConsensusParams.toJSON(message.consensus_params);
		}
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => ValidatorUpdate.toJSON(e));
		}
		if (message.app_state_bytes.length !== 0) {
			obj.app_state_bytes = base64FromBytes(message.app_state_bytes);
		}
		if (message.initial_height !== 0) {
			obj.initial_height = Math.round(message.initial_height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestInitChain>, I>>(base?: I): RequestInitChain {
		return RequestInitChain.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestInitChain>, I>>(object: I): RequestInitChain {
		const message = createBaseRequestInitChain();
		message.time = object.time ?? undefined;
		message.chain_id = object.chain_id ?? "";
		message.consensus_params =
			object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
		message.validators = object.validators?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
		message.app_state_bytes = object.app_state_bytes ?? new Uint8Array(0);
		message.initial_height = object.initial_height ?? 0;
		return message;
	}
};

export const RequestQuery: MessageFns<RequestQuery, "tendermint.abci.RequestQuery"> = {
	$type: "tendermint.abci.RequestQuery" as const,

	encode(message: RequestQuery, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.data.length !== 0) {
			writer.uint32(10).bytes(message.data);
		}
		if (message.path !== "") {
			writer.uint32(18).string(message.path);
		}
		if (message.height !== 0) {
			writer.uint32(24).int64(message.height);
		}
		if (message.prove !== false) {
			writer.uint32(32).bool(message.prove);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestQuery {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestQuery();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.data = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.path = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.prove = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestQuery {
		return {
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
			path: isSet(object.path) ? globalThis.String(object.path) : "",
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			prove: isSet(object.prove) ? globalThis.Boolean(object.prove) : false
		};
	},

	toJSON(message: RequestQuery): unknown {
		const obj: any = {};
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		if (message.path !== "") {
			obj.path = message.path;
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.prove !== false) {
			obj.prove = message.prove;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestQuery>, I>>(base?: I): RequestQuery {
		return RequestQuery.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestQuery>, I>>(object: I): RequestQuery {
		const message = createBaseRequestQuery();
		message.data = object.data ?? new Uint8Array(0);
		message.path = object.path ?? "";
		message.height = object.height ?? 0;
		message.prove = object.prove ?? false;
		return message;
	}
};

export const RequestCheckTx: MessageFns<RequestCheckTx, "tendermint.abci.RequestCheckTx"> = {
	$type: "tendermint.abci.RequestCheckTx" as const,

	encode(message: RequestCheckTx, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx.length !== 0) {
			writer.uint32(10).bytes(message.tx);
		}
		if (message.type !== 0) {
			writer.uint32(16).int32(message.type);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestCheckTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestCheckTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.type = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestCheckTx {
		return {
			tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(0),
			type: isSet(object.type) ? checkTxTypeFromJSON(object.type) : 0
		};
	},

	toJSON(message: RequestCheckTx): unknown {
		const obj: any = {};
		if (message.tx.length !== 0) {
			obj.tx = base64FromBytes(message.tx);
		}
		if (message.type !== 0) {
			obj.type = checkTxTypeToJSON(message.type);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestCheckTx>, I>>(base?: I): RequestCheckTx {
		return RequestCheckTx.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestCheckTx>, I>>(object: I): RequestCheckTx {
		const message = createBaseRequestCheckTx();
		message.tx = object.tx ?? new Uint8Array(0);
		message.type = object.type ?? 0;
		return message;
	}
};

export const RequestCommit: MessageFns<RequestCommit, "tendermint.abci.RequestCommit"> = {
	$type: "tendermint.abci.RequestCommit" as const,

	encode(_: RequestCommit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestCommit {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestCommit();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): RequestCommit {
		return {};
	},

	toJSON(_: RequestCommit): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestCommit>, I>>(base?: I): RequestCommit {
		return RequestCommit.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestCommit>, I>>(_: I): RequestCommit {
		const message = createBaseRequestCommit();
		return message;
	}
};

export const RequestListSnapshots: MessageFns<RequestListSnapshots, "tendermint.abci.RequestListSnapshots"> = {
	$type: "tendermint.abci.RequestListSnapshots" as const,

	encode(_: RequestListSnapshots, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestListSnapshots {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestListSnapshots();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): RequestListSnapshots {
		return {};
	},

	toJSON(_: RequestListSnapshots): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestListSnapshots>, I>>(base?: I): RequestListSnapshots {
		return RequestListSnapshots.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestListSnapshots>, I>>(_: I): RequestListSnapshots {
		const message = createBaseRequestListSnapshots();
		return message;
	}
};

export const RequestOfferSnapshot: MessageFns<RequestOfferSnapshot, "tendermint.abci.RequestOfferSnapshot"> = {
	$type: "tendermint.abci.RequestOfferSnapshot" as const,

	encode(message: RequestOfferSnapshot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.snapshot !== undefined) {
			Snapshot.encode(message.snapshot, writer.uint32(10).fork()).join();
		}
		if (message.app_hash.length !== 0) {
			writer.uint32(18).bytes(message.app_hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestOfferSnapshot {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestOfferSnapshot();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.snapshot = Snapshot.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.app_hash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestOfferSnapshot {
		return {
			snapshot: isSet(object.snapshot) ? Snapshot.fromJSON(object.snapshot) : undefined,
			app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(0)
		};
	},

	toJSON(message: RequestOfferSnapshot): unknown {
		const obj: any = {};
		if (message.snapshot !== undefined) {
			obj.snapshot = Snapshot.toJSON(message.snapshot);
		}
		if (message.app_hash.length !== 0) {
			obj.app_hash = base64FromBytes(message.app_hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestOfferSnapshot>, I>>(base?: I): RequestOfferSnapshot {
		return RequestOfferSnapshot.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestOfferSnapshot>, I>>(object: I): RequestOfferSnapshot {
		const message = createBaseRequestOfferSnapshot();
		message.snapshot = object.snapshot !== undefined && object.snapshot !== null ? Snapshot.fromPartial(object.snapshot) : undefined;
		message.app_hash = object.app_hash ?? new Uint8Array(0);
		return message;
	}
};

export const RequestLoadSnapshotChunk: MessageFns<RequestLoadSnapshotChunk, "tendermint.abci.RequestLoadSnapshotChunk"> = {
	$type: "tendermint.abci.RequestLoadSnapshotChunk" as const,

	encode(message: RequestLoadSnapshotChunk, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).uint64(message.height);
		}
		if (message.format !== 0) {
			writer.uint32(16).uint32(message.format);
		}
		if (message.chunk !== 0) {
			writer.uint32(24).uint32(message.chunk);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestLoadSnapshotChunk {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestLoadSnapshotChunk();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.format = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.chunk = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestLoadSnapshotChunk {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			format: isSet(object.format) ? globalThis.Number(object.format) : 0,
			chunk: isSet(object.chunk) ? globalThis.Number(object.chunk) : 0
		};
	},

	toJSON(message: RequestLoadSnapshotChunk): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.format !== 0) {
			obj.format = Math.round(message.format);
		}
		if (message.chunk !== 0) {
			obj.chunk = Math.round(message.chunk);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestLoadSnapshotChunk>, I>>(base?: I): RequestLoadSnapshotChunk {
		return RequestLoadSnapshotChunk.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestLoadSnapshotChunk>, I>>(object: I): RequestLoadSnapshotChunk {
		const message = createBaseRequestLoadSnapshotChunk();
		message.height = object.height ?? 0;
		message.format = object.format ?? 0;
		message.chunk = object.chunk ?? 0;
		return message;
	}
};

export const RequestApplySnapshotChunk: MessageFns<RequestApplySnapshotChunk, "tendermint.abci.RequestApplySnapshotChunk"> = {
	$type: "tendermint.abci.RequestApplySnapshotChunk" as const,

	encode(message: RequestApplySnapshotChunk, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.index !== 0) {
			writer.uint32(8).uint32(message.index);
		}
		if (message.chunk.length !== 0) {
			writer.uint32(18).bytes(message.chunk);
		}
		if (message.sender !== "") {
			writer.uint32(26).string(message.sender);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestApplySnapshotChunk {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestApplySnapshotChunk();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.index = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.chunk = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.sender = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestApplySnapshotChunk {
		return {
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0),
			sender: isSet(object.sender) ? globalThis.String(object.sender) : ""
		};
	},

	toJSON(message: RequestApplySnapshotChunk): unknown {
		const obj: any = {};
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		if (message.chunk.length !== 0) {
			obj.chunk = base64FromBytes(message.chunk);
		}
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestApplySnapshotChunk>, I>>(base?: I): RequestApplySnapshotChunk {
		return RequestApplySnapshotChunk.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestApplySnapshotChunk>, I>>(object: I): RequestApplySnapshotChunk {
		const message = createBaseRequestApplySnapshotChunk();
		message.index = object.index ?? 0;
		message.chunk = object.chunk ?? new Uint8Array(0);
		message.sender = object.sender ?? "";
		return message;
	}
};

export const RequestPrepareProposal: MessageFns<RequestPrepareProposal, "tendermint.abci.RequestPrepareProposal"> = {
	$type: "tendermint.abci.RequestPrepareProposal" as const,

	encode(message: RequestPrepareProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.max_tx_bytes !== 0) {
			writer.uint32(8).int64(message.max_tx_bytes);
		}
		for (const v of message.txs) {
			writer.uint32(18).bytes(v!);
		}
		if (message.local_last_commit !== undefined) {
			ExtendedCommitInfo.encode(message.local_last_commit, writer.uint32(26).fork()).join();
		}
		for (const v of message.byzantine_validators) {
			Misbehavior.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.height !== 0) {
			writer.uint32(40).int64(message.height);
		}
		if (message.time !== undefined) {
			Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).join();
		}
		if (message.next_validators_hash.length !== 0) {
			writer.uint32(58).bytes(message.next_validators_hash);
		}
		if (message.proposer_address.length !== 0) {
			writer.uint32(66).bytes(message.proposer_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestPrepareProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestPrepareProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.max_tx_bytes = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.txs.push(reader.bytes());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.local_last_commit = ExtendedCommitInfo.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.byzantine_validators.push(Misbehavior.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.next_validators_hash = reader.bytes();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.proposer_address = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestPrepareProposal {
		return {
			max_tx_bytes: isSet(object.max_tx_bytes) ? globalThis.Number(object.max_tx_bytes) : 0,
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
			local_last_commit: isSet(object.local_last_commit) ? ExtendedCommitInfo.fromJSON(object.local_last_commit) : undefined,
			byzantine_validators: globalThis.Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Misbehavior.fromJSON(e)) : [],
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
			next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(0),
			proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array(0)
		};
	},

	toJSON(message: RequestPrepareProposal): unknown {
		const obj: any = {};
		if (message.max_tx_bytes !== 0) {
			obj.max_tx_bytes = Math.round(message.max_tx_bytes);
		}
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => base64FromBytes(e));
		}
		if (message.local_last_commit !== undefined) {
			obj.local_last_commit = ExtendedCommitInfo.toJSON(message.local_last_commit);
		}
		if (message.byzantine_validators?.length) {
			obj.byzantine_validators = message.byzantine_validators.map((e) => Misbehavior.toJSON(e));
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.time !== undefined) {
			obj.time = message.time.toISOString();
		}
		if (message.next_validators_hash.length !== 0) {
			obj.next_validators_hash = base64FromBytes(message.next_validators_hash);
		}
		if (message.proposer_address.length !== 0) {
			obj.proposer_address = base64FromBytes(message.proposer_address);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestPrepareProposal>, I>>(base?: I): RequestPrepareProposal {
		return RequestPrepareProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestPrepareProposal>, I>>(object: I): RequestPrepareProposal {
		const message = createBaseRequestPrepareProposal();
		message.max_tx_bytes = object.max_tx_bytes ?? 0;
		message.txs = object.txs?.map((e) => e) || [];
		message.local_last_commit =
			object.local_last_commit !== undefined && object.local_last_commit !== null ? ExtendedCommitInfo.fromPartial(object.local_last_commit) : undefined;
		message.byzantine_validators = object.byzantine_validators?.map((e) => Misbehavior.fromPartial(e)) || [];
		message.height = object.height ?? 0;
		message.time = object.time ?? undefined;
		message.next_validators_hash = object.next_validators_hash ?? new Uint8Array(0);
		message.proposer_address = object.proposer_address ?? new Uint8Array(0);
		return message;
	}
};

export const RequestProcessProposal: MessageFns<RequestProcessProposal, "tendermint.abci.RequestProcessProposal"> = {
	$type: "tendermint.abci.RequestProcessProposal" as const,

	encode(message: RequestProcessProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.txs) {
			writer.uint32(10).bytes(v!);
		}
		if (message.proposed_last_commit !== undefined) {
			CommitInfo.encode(message.proposed_last_commit, writer.uint32(18).fork()).join();
		}
		for (const v of message.byzantine_validators) {
			Misbehavior.encode(v!, writer.uint32(26).fork()).join();
		}
		if (message.hash.length !== 0) {
			writer.uint32(34).bytes(message.hash);
		}
		if (message.height !== 0) {
			writer.uint32(40).int64(message.height);
		}
		if (message.time !== undefined) {
			Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).join();
		}
		if (message.next_validators_hash.length !== 0) {
			writer.uint32(58).bytes(message.next_validators_hash);
		}
		if (message.proposer_address.length !== 0) {
			writer.uint32(66).bytes(message.proposer_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestProcessProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestProcessProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.txs.push(reader.bytes());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.proposed_last_commit = CommitInfo.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.byzantine_validators.push(Misbehavior.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.hash = reader.bytes();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.next_validators_hash = reader.bytes();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.proposer_address = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestProcessProposal {
		return {
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
			proposed_last_commit: isSet(object.proposed_last_commit) ? CommitInfo.fromJSON(object.proposed_last_commit) : undefined,
			byzantine_validators: globalThis.Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Misbehavior.fromJSON(e)) : [],
			hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
			next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(0),
			proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array(0)
		};
	},

	toJSON(message: RequestProcessProposal): unknown {
		const obj: any = {};
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => base64FromBytes(e));
		}
		if (message.proposed_last_commit !== undefined) {
			obj.proposed_last_commit = CommitInfo.toJSON(message.proposed_last_commit);
		}
		if (message.byzantine_validators?.length) {
			obj.byzantine_validators = message.byzantine_validators.map((e) => Misbehavior.toJSON(e));
		}
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.time !== undefined) {
			obj.time = message.time.toISOString();
		}
		if (message.next_validators_hash.length !== 0) {
			obj.next_validators_hash = base64FromBytes(message.next_validators_hash);
		}
		if (message.proposer_address.length !== 0) {
			obj.proposer_address = base64FromBytes(message.proposer_address);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestProcessProposal>, I>>(base?: I): RequestProcessProposal {
		return RequestProcessProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestProcessProposal>, I>>(object: I): RequestProcessProposal {
		const message = createBaseRequestProcessProposal();
		message.txs = object.txs?.map((e) => e) || [];
		message.proposed_last_commit =
			object.proposed_last_commit !== undefined && object.proposed_last_commit !== null ? CommitInfo.fromPartial(object.proposed_last_commit) : undefined;
		message.byzantine_validators = object.byzantine_validators?.map((e) => Misbehavior.fromPartial(e)) || [];
		message.hash = object.hash ?? new Uint8Array(0);
		message.height = object.height ?? 0;
		message.time = object.time ?? undefined;
		message.next_validators_hash = object.next_validators_hash ?? new Uint8Array(0);
		message.proposer_address = object.proposer_address ?? new Uint8Array(0);
		return message;
	}
};

export const RequestExtendVote: MessageFns<RequestExtendVote, "tendermint.abci.RequestExtendVote"> = {
	$type: "tendermint.abci.RequestExtendVote" as const,

	encode(message: RequestExtendVote, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hash.length !== 0) {
			writer.uint32(10).bytes(message.hash);
		}
		if (message.height !== 0) {
			writer.uint32(16).int64(message.height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestExtendVote {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestExtendVote();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.hash = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestExtendVote {
		return {
			hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
			height: isSet(object.height) ? globalThis.Number(object.height) : 0
		};
	},

	toJSON(message: RequestExtendVote): unknown {
		const obj: any = {};
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestExtendVote>, I>>(base?: I): RequestExtendVote {
		return RequestExtendVote.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestExtendVote>, I>>(object: I): RequestExtendVote {
		const message = createBaseRequestExtendVote();
		message.hash = object.hash ?? new Uint8Array(0);
		message.height = object.height ?? 0;
		return message;
	}
};

export const RequestVerifyVoteExtension: MessageFns<RequestVerifyVoteExtension, "tendermint.abci.RequestVerifyVoteExtension"> = {
	$type: "tendermint.abci.RequestVerifyVoteExtension" as const,

	encode(message: RequestVerifyVoteExtension, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.hash.length !== 0) {
			writer.uint32(10).bytes(message.hash);
		}
		if (message.validator_address.length !== 0) {
			writer.uint32(18).bytes(message.validator_address);
		}
		if (message.height !== 0) {
			writer.uint32(24).int64(message.height);
		}
		if (message.vote_extension.length !== 0) {
			writer.uint32(34).bytes(message.vote_extension);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestVerifyVoteExtension {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestVerifyVoteExtension();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.hash = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_address = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.vote_extension = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestVerifyVoteExtension {
		return {
			hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
			validator_address: isSet(object.validator_address) ? bytesFromBase64(object.validator_address) : new Uint8Array(0),
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			vote_extension: isSet(object.vote_extension) ? bytesFromBase64(object.vote_extension) : new Uint8Array(0)
		};
	},

	toJSON(message: RequestVerifyVoteExtension): unknown {
		const obj: any = {};
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		if (message.validator_address.length !== 0) {
			obj.validator_address = base64FromBytes(message.validator_address);
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.vote_extension.length !== 0) {
			obj.vote_extension = base64FromBytes(message.vote_extension);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestVerifyVoteExtension>, I>>(base?: I): RequestVerifyVoteExtension {
		return RequestVerifyVoteExtension.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestVerifyVoteExtension>, I>>(object: I): RequestVerifyVoteExtension {
		const message = createBaseRequestVerifyVoteExtension();
		message.hash = object.hash ?? new Uint8Array(0);
		message.validator_address = object.validator_address ?? new Uint8Array(0);
		message.height = object.height ?? 0;
		message.vote_extension = object.vote_extension ?? new Uint8Array(0);
		return message;
	}
};

export const RequestFinalizeBlock: MessageFns<RequestFinalizeBlock, "tendermint.abci.RequestFinalizeBlock"> = {
	$type: "tendermint.abci.RequestFinalizeBlock" as const,

	encode(message: RequestFinalizeBlock, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.txs) {
			writer.uint32(10).bytes(v!);
		}
		if (message.decided_last_commit !== undefined) {
			CommitInfo.encode(message.decided_last_commit, writer.uint32(18).fork()).join();
		}
		for (const v of message.byzantine_validators) {
			Misbehavior.encode(v!, writer.uint32(26).fork()).join();
		}
		if (message.hash.length !== 0) {
			writer.uint32(34).bytes(message.hash);
		}
		if (message.height !== 0) {
			writer.uint32(40).int64(message.height);
		}
		if (message.time !== undefined) {
			Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).join();
		}
		if (message.next_validators_hash.length !== 0) {
			writer.uint32(58).bytes(message.next_validators_hash);
		}
		if (message.proposer_address.length !== 0) {
			writer.uint32(66).bytes(message.proposer_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RequestFinalizeBlock {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRequestFinalizeBlock();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.txs.push(reader.bytes());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.decided_last_commit = CommitInfo.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.byzantine_validators.push(Misbehavior.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.hash = reader.bytes();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.next_validators_hash = reader.bytes();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.proposer_address = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RequestFinalizeBlock {
		return {
			txs: globalThis.Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : [],
			decided_last_commit: isSet(object.decided_last_commit) ? CommitInfo.fromJSON(object.decided_last_commit) : undefined,
			byzantine_validators: globalThis.Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Misbehavior.fromJSON(e)) : [],
			hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
			next_validators_hash: isSet(object.next_validators_hash) ? bytesFromBase64(object.next_validators_hash) : new Uint8Array(0),
			proposer_address: isSet(object.proposer_address) ? bytesFromBase64(object.proposer_address) : new Uint8Array(0)
		};
	},

	toJSON(message: RequestFinalizeBlock): unknown {
		const obj: any = {};
		if (message.txs?.length) {
			obj.txs = message.txs.map((e) => base64FromBytes(e));
		}
		if (message.decided_last_commit !== undefined) {
			obj.decided_last_commit = CommitInfo.toJSON(message.decided_last_commit);
		}
		if (message.byzantine_validators?.length) {
			obj.byzantine_validators = message.byzantine_validators.map((e) => Misbehavior.toJSON(e));
		}
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.time !== undefined) {
			obj.time = message.time.toISOString();
		}
		if (message.next_validators_hash.length !== 0) {
			obj.next_validators_hash = base64FromBytes(message.next_validators_hash);
		}
		if (message.proposer_address.length !== 0) {
			obj.proposer_address = base64FromBytes(message.proposer_address);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RequestFinalizeBlock>, I>>(base?: I): RequestFinalizeBlock {
		return RequestFinalizeBlock.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RequestFinalizeBlock>, I>>(object: I): RequestFinalizeBlock {
		const message = createBaseRequestFinalizeBlock();
		message.txs = object.txs?.map((e) => e) || [];
		message.decided_last_commit =
			object.decided_last_commit !== undefined && object.decided_last_commit !== null ? CommitInfo.fromPartial(object.decided_last_commit) : undefined;
		message.byzantine_validators = object.byzantine_validators?.map((e) => Misbehavior.fromPartial(e)) || [];
		message.hash = object.hash ?? new Uint8Array(0);
		message.height = object.height ?? 0;
		message.time = object.time ?? undefined;
		message.next_validators_hash = object.next_validators_hash ?? new Uint8Array(0);
		message.proposer_address = object.proposer_address ?? new Uint8Array(0);
		return message;
	}
};

export const Response: MessageFns<Response, "tendermint.abci.Response"> = {
	$type: "tendermint.abci.Response" as const,

	encode(message: Response, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.exception !== undefined) {
			ResponseException.encode(message.exception, writer.uint32(10).fork()).join();
		}
		if (message.echo !== undefined) {
			ResponseEcho.encode(message.echo, writer.uint32(18).fork()).join();
		}
		if (message.flush !== undefined) {
			ResponseFlush.encode(message.flush, writer.uint32(26).fork()).join();
		}
		if (message.info !== undefined) {
			ResponseInfo.encode(message.info, writer.uint32(34).fork()).join();
		}
		if (message.init_chain !== undefined) {
			ResponseInitChain.encode(message.init_chain, writer.uint32(42).fork()).join();
		}
		if (message.query !== undefined) {
			ResponseQuery.encode(message.query, writer.uint32(50).fork()).join();
		}
		if (message.check_tx !== undefined) {
			ResponseCheckTx.encode(message.check_tx, writer.uint32(66).fork()).join();
		}
		if (message.commit !== undefined) {
			ResponseCommit.encode(message.commit, writer.uint32(90).fork()).join();
		}
		if (message.list_snapshots !== undefined) {
			ResponseListSnapshots.encode(message.list_snapshots, writer.uint32(98).fork()).join();
		}
		if (message.offer_snapshot !== undefined) {
			ResponseOfferSnapshot.encode(message.offer_snapshot, writer.uint32(106).fork()).join();
		}
		if (message.load_snapshot_chunk !== undefined) {
			ResponseLoadSnapshotChunk.encode(message.load_snapshot_chunk, writer.uint32(114).fork()).join();
		}
		if (message.apply_snapshot_chunk !== undefined) {
			ResponseApplySnapshotChunk.encode(message.apply_snapshot_chunk, writer.uint32(122).fork()).join();
		}
		if (message.prepare_proposal !== undefined) {
			ResponsePrepareProposal.encode(message.prepare_proposal, writer.uint32(130).fork()).join();
		}
		if (message.process_proposal !== undefined) {
			ResponseProcessProposal.encode(message.process_proposal, writer.uint32(138).fork()).join();
		}
		if (message.extend_vote !== undefined) {
			ResponseExtendVote.encode(message.extend_vote, writer.uint32(146).fork()).join();
		}
		if (message.verify_vote_extension !== undefined) {
			ResponseVerifyVoteExtension.encode(message.verify_vote_extension, writer.uint32(154).fork()).join();
		}
		if (message.finalize_block !== undefined) {
			ResponseFinalizeBlock.encode(message.finalize_block, writer.uint32(162).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Response {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.exception = ResponseException.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.echo = ResponseEcho.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.flush = ResponseFlush.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.info = ResponseInfo.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.init_chain = ResponseInitChain.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.query = ResponseQuery.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.check_tx = ResponseCheckTx.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.commit = ResponseCommit.decode(reader, reader.uint32());
					continue;
				case 12:
					if (tag !== 98) {
						break;
					}

					message.list_snapshots = ResponseListSnapshots.decode(reader, reader.uint32());
					continue;
				case 13:
					if (tag !== 106) {
						break;
					}

					message.offer_snapshot = ResponseOfferSnapshot.decode(reader, reader.uint32());
					continue;
				case 14:
					if (tag !== 114) {
						break;
					}

					message.load_snapshot_chunk = ResponseLoadSnapshotChunk.decode(reader, reader.uint32());
					continue;
				case 15:
					if (tag !== 122) {
						break;
					}

					message.apply_snapshot_chunk = ResponseApplySnapshotChunk.decode(reader, reader.uint32());
					continue;
				case 16:
					if (tag !== 130) {
						break;
					}

					message.prepare_proposal = ResponsePrepareProposal.decode(reader, reader.uint32());
					continue;
				case 17:
					if (tag !== 138) {
						break;
					}

					message.process_proposal = ResponseProcessProposal.decode(reader, reader.uint32());
					continue;
				case 18:
					if (tag !== 146) {
						break;
					}

					message.extend_vote = ResponseExtendVote.decode(reader, reader.uint32());
					continue;
				case 19:
					if (tag !== 154) {
						break;
					}

					message.verify_vote_extension = ResponseVerifyVoteExtension.decode(reader, reader.uint32());
					continue;
				case 20:
					if (tag !== 162) {
						break;
					}

					message.finalize_block = ResponseFinalizeBlock.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Response {
		return {
			exception: isSet(object.exception) ? ResponseException.fromJSON(object.exception) : undefined,
			echo: isSet(object.echo) ? ResponseEcho.fromJSON(object.echo) : undefined,
			flush: isSet(object.flush) ? ResponseFlush.fromJSON(object.flush) : undefined,
			info: isSet(object.info) ? ResponseInfo.fromJSON(object.info) : undefined,
			init_chain: isSet(object.init_chain) ? ResponseInitChain.fromJSON(object.init_chain) : undefined,
			query: isSet(object.query) ? ResponseQuery.fromJSON(object.query) : undefined,
			check_tx: isSet(object.check_tx) ? ResponseCheckTx.fromJSON(object.check_tx) : undefined,
			commit: isSet(object.commit) ? ResponseCommit.fromJSON(object.commit) : undefined,
			list_snapshots: isSet(object.list_snapshots) ? ResponseListSnapshots.fromJSON(object.list_snapshots) : undefined,
			offer_snapshot: isSet(object.offer_snapshot) ? ResponseOfferSnapshot.fromJSON(object.offer_snapshot) : undefined,
			load_snapshot_chunk: isSet(object.load_snapshot_chunk) ? ResponseLoadSnapshotChunk.fromJSON(object.load_snapshot_chunk) : undefined,
			apply_snapshot_chunk: isSet(object.apply_snapshot_chunk) ? ResponseApplySnapshotChunk.fromJSON(object.apply_snapshot_chunk) : undefined,
			prepare_proposal: isSet(object.prepare_proposal) ? ResponsePrepareProposal.fromJSON(object.prepare_proposal) : undefined,
			process_proposal: isSet(object.process_proposal) ? ResponseProcessProposal.fromJSON(object.process_proposal) : undefined,
			extend_vote: isSet(object.extend_vote) ? ResponseExtendVote.fromJSON(object.extend_vote) : undefined,
			verify_vote_extension: isSet(object.verify_vote_extension) ? ResponseVerifyVoteExtension.fromJSON(object.verify_vote_extension) : undefined,
			finalize_block: isSet(object.finalize_block) ? ResponseFinalizeBlock.fromJSON(object.finalize_block) : undefined
		};
	},

	toJSON(message: Response): unknown {
		const obj: any = {};
		if (message.exception !== undefined) {
			obj.exception = ResponseException.toJSON(message.exception);
		}
		if (message.echo !== undefined) {
			obj.echo = ResponseEcho.toJSON(message.echo);
		}
		if (message.flush !== undefined) {
			obj.flush = ResponseFlush.toJSON(message.flush);
		}
		if (message.info !== undefined) {
			obj.info = ResponseInfo.toJSON(message.info);
		}
		if (message.init_chain !== undefined) {
			obj.init_chain = ResponseInitChain.toJSON(message.init_chain);
		}
		if (message.query !== undefined) {
			obj.query = ResponseQuery.toJSON(message.query);
		}
		if (message.check_tx !== undefined) {
			obj.check_tx = ResponseCheckTx.toJSON(message.check_tx);
		}
		if (message.commit !== undefined) {
			obj.commit = ResponseCommit.toJSON(message.commit);
		}
		if (message.list_snapshots !== undefined) {
			obj.list_snapshots = ResponseListSnapshots.toJSON(message.list_snapshots);
		}
		if (message.offer_snapshot !== undefined) {
			obj.offer_snapshot = ResponseOfferSnapshot.toJSON(message.offer_snapshot);
		}
		if (message.load_snapshot_chunk !== undefined) {
			obj.load_snapshot_chunk = ResponseLoadSnapshotChunk.toJSON(message.load_snapshot_chunk);
		}
		if (message.apply_snapshot_chunk !== undefined) {
			obj.apply_snapshot_chunk = ResponseApplySnapshotChunk.toJSON(message.apply_snapshot_chunk);
		}
		if (message.prepare_proposal !== undefined) {
			obj.prepare_proposal = ResponsePrepareProposal.toJSON(message.prepare_proposal);
		}
		if (message.process_proposal !== undefined) {
			obj.process_proposal = ResponseProcessProposal.toJSON(message.process_proposal);
		}
		if (message.extend_vote !== undefined) {
			obj.extend_vote = ResponseExtendVote.toJSON(message.extend_vote);
		}
		if (message.verify_vote_extension !== undefined) {
			obj.verify_vote_extension = ResponseVerifyVoteExtension.toJSON(message.verify_vote_extension);
		}
		if (message.finalize_block !== undefined) {
			obj.finalize_block = ResponseFinalizeBlock.toJSON(message.finalize_block);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Response>, I>>(base?: I): Response {
		return Response.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
		const message = createBaseResponse();
		message.exception = object.exception !== undefined && object.exception !== null ? ResponseException.fromPartial(object.exception) : undefined;
		message.echo = object.echo !== undefined && object.echo !== null ? ResponseEcho.fromPartial(object.echo) : undefined;
		message.flush = object.flush !== undefined && object.flush !== null ? ResponseFlush.fromPartial(object.flush) : undefined;
		message.info = object.info !== undefined && object.info !== null ? ResponseInfo.fromPartial(object.info) : undefined;
		message.init_chain = object.init_chain !== undefined && object.init_chain !== null ? ResponseInitChain.fromPartial(object.init_chain) : undefined;
		message.query = object.query !== undefined && object.query !== null ? ResponseQuery.fromPartial(object.query) : undefined;
		message.check_tx = object.check_tx !== undefined && object.check_tx !== null ? ResponseCheckTx.fromPartial(object.check_tx) : undefined;
		message.commit = object.commit !== undefined && object.commit !== null ? ResponseCommit.fromPartial(object.commit) : undefined;
		message.list_snapshots =
			object.list_snapshots !== undefined && object.list_snapshots !== null ? ResponseListSnapshots.fromPartial(object.list_snapshots) : undefined;
		message.offer_snapshot =
			object.offer_snapshot !== undefined && object.offer_snapshot !== null ? ResponseOfferSnapshot.fromPartial(object.offer_snapshot) : undefined;
		message.load_snapshot_chunk =
			object.load_snapshot_chunk !== undefined && object.load_snapshot_chunk !== null
				? ResponseLoadSnapshotChunk.fromPartial(object.load_snapshot_chunk)
				: undefined;
		message.apply_snapshot_chunk =
			object.apply_snapshot_chunk !== undefined && object.apply_snapshot_chunk !== null
				? ResponseApplySnapshotChunk.fromPartial(object.apply_snapshot_chunk)
				: undefined;
		message.prepare_proposal =
			object.prepare_proposal !== undefined && object.prepare_proposal !== null ? ResponsePrepareProposal.fromPartial(object.prepare_proposal) : undefined;
		message.process_proposal =
			object.process_proposal !== undefined && object.process_proposal !== null ? ResponseProcessProposal.fromPartial(object.process_proposal) : undefined;
		message.extend_vote = object.extend_vote !== undefined && object.extend_vote !== null ? ResponseExtendVote.fromPartial(object.extend_vote) : undefined;
		message.verify_vote_extension =
			object.verify_vote_extension !== undefined && object.verify_vote_extension !== null
				? ResponseVerifyVoteExtension.fromPartial(object.verify_vote_extension)
				: undefined;
		message.finalize_block =
			object.finalize_block !== undefined && object.finalize_block !== null ? ResponseFinalizeBlock.fromPartial(object.finalize_block) : undefined;
		return message;
	}
};

export const ResponseException: MessageFns<ResponseException, "tendermint.abci.ResponseException"> = {
	$type: "tendermint.abci.ResponseException" as const,

	encode(message: ResponseException, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.error !== "") {
			writer.uint32(10).string(message.error);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseException {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseException();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.error = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseException {
		return { error: isSet(object.error) ? globalThis.String(object.error) : "" };
	},

	toJSON(message: ResponseException): unknown {
		const obj: any = {};
		if (message.error !== "") {
			obj.error = message.error;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseException>, I>>(base?: I): ResponseException {
		return ResponseException.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseException>, I>>(object: I): ResponseException {
		const message = createBaseResponseException();
		message.error = object.error ?? "";
		return message;
	}
};

export const ResponseEcho: MessageFns<ResponseEcho, "tendermint.abci.ResponseEcho"> = {
	$type: "tendermint.abci.ResponseEcho" as const,

	encode(message: ResponseEcho, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.message !== "") {
			writer.uint32(10).string(message.message);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseEcho {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseEcho();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.message = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseEcho {
		return { message: isSet(object.message) ? globalThis.String(object.message) : "" };
	},

	toJSON(message: ResponseEcho): unknown {
		const obj: any = {};
		if (message.message !== "") {
			obj.message = message.message;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseEcho>, I>>(base?: I): ResponseEcho {
		return ResponseEcho.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseEcho>, I>>(object: I): ResponseEcho {
		const message = createBaseResponseEcho();
		message.message = object.message ?? "";
		return message;
	}
};

export const ResponseFlush: MessageFns<ResponseFlush, "tendermint.abci.ResponseFlush"> = {
	$type: "tendermint.abci.ResponseFlush" as const,

	encode(_: ResponseFlush, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseFlush {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseFlush();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): ResponseFlush {
		return {};
	},

	toJSON(_: ResponseFlush): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseFlush>, I>>(base?: I): ResponseFlush {
		return ResponseFlush.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseFlush>, I>>(_: I): ResponseFlush {
		const message = createBaseResponseFlush();
		return message;
	}
};

export const ResponseInfo: MessageFns<ResponseInfo, "tendermint.abci.ResponseInfo"> = {
	$type: "tendermint.abci.ResponseInfo" as const,

	encode(message: ResponseInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.data !== "") {
			writer.uint32(10).string(message.data);
		}
		if (message.version !== "") {
			writer.uint32(18).string(message.version);
		}
		if (message.app_version !== 0) {
			writer.uint32(24).uint64(message.app_version);
		}
		if (message.last_block_height !== 0) {
			writer.uint32(32).int64(message.last_block_height);
		}
		if (message.last_block_app_hash.length !== 0) {
			writer.uint32(42).bytes(message.last_block_app_hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.data = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.version = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.app_version = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.last_block_height = longToNumber(reader.int64());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.last_block_app_hash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseInfo {
		return {
			data: isSet(object.data) ? globalThis.String(object.data) : "",
			version: isSet(object.version) ? globalThis.String(object.version) : "",
			app_version: isSet(object.app_version) ? globalThis.Number(object.app_version) : 0,
			last_block_height: isSet(object.last_block_height) ? globalThis.Number(object.last_block_height) : 0,
			last_block_app_hash: isSet(object.last_block_app_hash) ? bytesFromBase64(object.last_block_app_hash) : new Uint8Array(0)
		};
	},

	toJSON(message: ResponseInfo): unknown {
		const obj: any = {};
		if (message.data !== "") {
			obj.data = message.data;
		}
		if (message.version !== "") {
			obj.version = message.version;
		}
		if (message.app_version !== 0) {
			obj.app_version = Math.round(message.app_version);
		}
		if (message.last_block_height !== 0) {
			obj.last_block_height = Math.round(message.last_block_height);
		}
		if (message.last_block_app_hash.length !== 0) {
			obj.last_block_app_hash = base64FromBytes(message.last_block_app_hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseInfo>, I>>(base?: I): ResponseInfo {
		return ResponseInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseInfo>, I>>(object: I): ResponseInfo {
		const message = createBaseResponseInfo();
		message.data = object.data ?? "";
		message.version = object.version ?? "";
		message.app_version = object.app_version ?? 0;
		message.last_block_height = object.last_block_height ?? 0;
		message.last_block_app_hash = object.last_block_app_hash ?? new Uint8Array(0);
		return message;
	}
};

export const ResponseInitChain: MessageFns<ResponseInitChain, "tendermint.abci.ResponseInitChain"> = {
	$type: "tendermint.abci.ResponseInitChain" as const,

	encode(message: ResponseInitChain, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.consensus_params !== undefined) {
			ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).join();
		}
		for (const v of message.validators) {
			ValidatorUpdate.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.app_hash.length !== 0) {
			writer.uint32(26).bytes(message.app_hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseInitChain {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseInitChain();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.consensus_params = ConsensusParams.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validators.push(ValidatorUpdate.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.app_hash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseInitChain {
		return {
			consensus_params: isSet(object.consensus_params) ? ConsensusParams.fromJSON(object.consensus_params) : undefined,
			validators: globalThis.Array.isArray(object?.validators) ? object.validators.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
			app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(0)
		};
	},

	toJSON(message: ResponseInitChain): unknown {
		const obj: any = {};
		if (message.consensus_params !== undefined) {
			obj.consensus_params = ConsensusParams.toJSON(message.consensus_params);
		}
		if (message.validators?.length) {
			obj.validators = message.validators.map((e) => ValidatorUpdate.toJSON(e));
		}
		if (message.app_hash.length !== 0) {
			obj.app_hash = base64FromBytes(message.app_hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseInitChain>, I>>(base?: I): ResponseInitChain {
		return ResponseInitChain.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseInitChain>, I>>(object: I): ResponseInitChain {
		const message = createBaseResponseInitChain();
		message.consensus_params =
			object.consensus_params !== undefined && object.consensus_params !== null ? ConsensusParams.fromPartial(object.consensus_params) : undefined;
		message.validators = object.validators?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
		message.app_hash = object.app_hash ?? new Uint8Array(0);
		return message;
	}
};

export const ResponseQuery: MessageFns<ResponseQuery, "tendermint.abci.ResponseQuery"> = {
	$type: "tendermint.abci.ResponseQuery" as const,

	encode(message: ResponseQuery, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.code !== 0) {
			writer.uint32(8).uint32(message.code);
		}
		if (message.log !== "") {
			writer.uint32(26).string(message.log);
		}
		if (message.info !== "") {
			writer.uint32(34).string(message.info);
		}
		if (message.index !== 0) {
			writer.uint32(40).int64(message.index);
		}
		if (message.key.length !== 0) {
			writer.uint32(50).bytes(message.key);
		}
		if (message.value.length !== 0) {
			writer.uint32(58).bytes(message.value);
		}
		if (message.proof_ops !== undefined) {
			ProofOps.encode(message.proof_ops, writer.uint32(66).fork()).join();
		}
		if (message.height !== 0) {
			writer.uint32(72).int64(message.height);
		}
		if (message.codespace !== "") {
			writer.uint32(82).string(message.codespace);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseQuery {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseQuery();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.code = reader.uint32();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.log = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.info = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.index = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.key = reader.bytes();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.value = reader.bytes();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.proof_ops = ProofOps.decode(reader, reader.uint32());
					continue;
				case 9:
					if (tag !== 72) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.codespace = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseQuery {
		return {
			code: isSet(object.code) ? globalThis.Number(object.code) : 0,
			log: isSet(object.log) ? globalThis.String(object.log) : "",
			info: isSet(object.info) ? globalThis.String(object.info) : "",
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
			value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(0),
			proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			codespace: isSet(object.codespace) ? globalThis.String(object.codespace) : ""
		};
	},

	toJSON(message: ResponseQuery): unknown {
		const obj: any = {};
		if (message.code !== 0) {
			obj.code = Math.round(message.code);
		}
		if (message.log !== "") {
			obj.log = message.log;
		}
		if (message.info !== "") {
			obj.info = message.info;
		}
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		if (message.key.length !== 0) {
			obj.key = base64FromBytes(message.key);
		}
		if (message.value.length !== 0) {
			obj.value = base64FromBytes(message.value);
		}
		if (message.proof_ops !== undefined) {
			obj.proof_ops = ProofOps.toJSON(message.proof_ops);
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.codespace !== "") {
			obj.codespace = message.codespace;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseQuery>, I>>(base?: I): ResponseQuery {
		return ResponseQuery.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseQuery>, I>>(object: I): ResponseQuery {
		const message = createBaseResponseQuery();
		message.code = object.code ?? 0;
		message.log = object.log ?? "";
		message.info = object.info ?? "";
		message.index = object.index ?? 0;
		message.key = object.key ?? new Uint8Array(0);
		message.value = object.value ?? new Uint8Array(0);
		message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
		message.height = object.height ?? 0;
		message.codespace = object.codespace ?? "";
		return message;
	}
};

export const ResponseCheckTx: MessageFns<ResponseCheckTx, "tendermint.abci.ResponseCheckTx"> = {
	$type: "tendermint.abci.ResponseCheckTx" as const,

	encode(message: ResponseCheckTx, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.code !== 0) {
			writer.uint32(8).uint32(message.code);
		}
		if (message.data.length !== 0) {
			writer.uint32(18).bytes(message.data);
		}
		if (message.gas_wanted !== 0) {
			writer.uint32(40).int64(message.gas_wanted);
		}
		if (message.codespace !== "") {
			writer.uint32(66).string(message.codespace);
		}
		if (message.sender !== "") {
			writer.uint32(74).string(message.sender);
		}
		if (message.priority !== 0) {
			writer.uint32(80).int64(message.priority);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseCheckTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseCheckTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.code = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.data = reader.bytes();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.gas_wanted = longToNumber(reader.int64());
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.codespace = reader.string();
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 10:
					if (tag !== 80) {
						break;
					}

					message.priority = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseCheckTx {
		return {
			code: isSet(object.code) ? globalThis.Number(object.code) : 0,
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
			gas_wanted: isSet(object.gas_wanted) ? globalThis.Number(object.gas_wanted) : 0,
			codespace: isSet(object.codespace) ? globalThis.String(object.codespace) : "",
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			priority: isSet(object.priority) ? globalThis.Number(object.priority) : 0
		};
	},

	toJSON(message: ResponseCheckTx): unknown {
		const obj: any = {};
		if (message.code !== 0) {
			obj.code = Math.round(message.code);
		}
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		if (message.gas_wanted !== 0) {
			obj.gas_wanted = Math.round(message.gas_wanted);
		}
		if (message.codespace !== "") {
			obj.codespace = message.codespace;
		}
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.priority !== 0) {
			obj.priority = Math.round(message.priority);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(base?: I): ResponseCheckTx {
		return ResponseCheckTx.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseCheckTx>, I>>(object: I): ResponseCheckTx {
		const message = createBaseResponseCheckTx();
		message.code = object.code ?? 0;
		message.data = object.data ?? new Uint8Array(0);
		message.gas_wanted = object.gas_wanted ?? 0;
		message.codespace = object.codespace ?? "";
		message.sender = object.sender ?? "";
		message.priority = object.priority ?? 0;
		return message;
	}
};

export const ResponseDeliverTx: MessageFns<ResponseDeliverTx, "tendermint.abci.ResponseDeliverTx"> = {
	$type: "tendermint.abci.ResponseDeliverTx" as const,

	encode(message: ResponseDeliverTx, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.code !== 0) {
			writer.uint32(8).uint32(message.code);
		}
		if (message.data.length !== 0) {
			writer.uint32(18).bytes(message.data);
		}
		if (message.log !== "") {
			writer.uint32(26).string(message.log);
		}
		if (message.info !== "") {
			writer.uint32(34).string(message.info);
		}
		if (message.gas_wanted !== 0) {
			writer.uint32(40).int64(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			writer.uint32(48).int64(message.gas_used);
		}
		for (const v of message.events) {
			Event.encode(v!, writer.uint32(58).fork()).join();
		}
		if (message.codespace !== "") {
			writer.uint32(66).string(message.codespace);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseDeliverTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseDeliverTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.code = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.data = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.log = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.info = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.gas_wanted = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.gas_used = longToNumber(reader.int64());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.events.push(Event.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.codespace = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseDeliverTx {
		return {
			code: isSet(object.code) ? globalThis.Number(object.code) : 0,
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
			log: isSet(object.log) ? globalThis.String(object.log) : "",
			info: isSet(object.info) ? globalThis.String(object.info) : "",
			gas_wanted: isSet(object.gas_wanted) ? globalThis.Number(object.gas_wanted) : 0,
			gas_used: isSet(object.gas_used) ? globalThis.Number(object.gas_used) : 0,
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
			codespace: isSet(object.codespace) ? globalThis.String(object.codespace) : ""
		};
	},

	toJSON(message: ResponseDeliverTx): unknown {
		const obj: any = {};
		if (message.code !== 0) {
			obj.code = Math.round(message.code);
		}
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		if (message.log !== "") {
			obj.log = message.log;
		}
		if (message.info !== "") {
			obj.info = message.info;
		}
		if (message.gas_wanted !== 0) {
			obj.gas_wanted = Math.round(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			obj.gas_used = Math.round(message.gas_used);
		}
		if (message.events?.length) {
			obj.events = message.events.map((e) => Event.toJSON(e));
		}
		if (message.codespace !== "") {
			obj.codespace = message.codespace;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseDeliverTx>, I>>(base?: I): ResponseDeliverTx {
		return ResponseDeliverTx.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseDeliverTx>, I>>(object: I): ResponseDeliverTx {
		const message = createBaseResponseDeliverTx();
		message.code = object.code ?? 0;
		message.data = object.data ?? new Uint8Array(0);
		message.log = object.log ?? "";
		message.info = object.info ?? "";
		message.gas_wanted = object.gas_wanted ?? 0;
		message.gas_used = object.gas_used ?? 0;
		message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
		message.codespace = object.codespace ?? "";
		return message;
	}
};

export const ResponseCommit: MessageFns<ResponseCommit, "tendermint.abci.ResponseCommit"> = {
	$type: "tendermint.abci.ResponseCommit" as const,

	encode(message: ResponseCommit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.retain_height !== 0) {
			writer.uint32(24).int64(message.retain_height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseCommit {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseCommit();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 3:
					if (tag !== 24) {
						break;
					}

					message.retain_height = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseCommit {
		return { retain_height: isSet(object.retain_height) ? globalThis.Number(object.retain_height) : 0 };
	},

	toJSON(message: ResponseCommit): unknown {
		const obj: any = {};
		if (message.retain_height !== 0) {
			obj.retain_height = Math.round(message.retain_height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseCommit>, I>>(base?: I): ResponseCommit {
		return ResponseCommit.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseCommit>, I>>(object: I): ResponseCommit {
		const message = createBaseResponseCommit();
		message.retain_height = object.retain_height ?? 0;
		return message;
	}
};

export const ResponseListSnapshots: MessageFns<ResponseListSnapshots, "tendermint.abci.ResponseListSnapshots"> = {
	$type: "tendermint.abci.ResponseListSnapshots" as const,

	encode(message: ResponseListSnapshots, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.snapshots) {
			Snapshot.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseListSnapshots {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseListSnapshots();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.snapshots.push(Snapshot.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseListSnapshots {
		return {
			snapshots: globalThis.Array.isArray(object?.snapshots) ? object.snapshots.map((e: any) => Snapshot.fromJSON(e)) : []
		};
	},

	toJSON(message: ResponseListSnapshots): unknown {
		const obj: any = {};
		if (message.snapshots?.length) {
			obj.snapshots = message.snapshots.map((e) => Snapshot.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseListSnapshots>, I>>(base?: I): ResponseListSnapshots {
		return ResponseListSnapshots.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseListSnapshots>, I>>(object: I): ResponseListSnapshots {
		const message = createBaseResponseListSnapshots();
		message.snapshots = object.snapshots?.map((e) => Snapshot.fromPartial(e)) || [];
		return message;
	}
};

export const ResponseOfferSnapshot: MessageFns<ResponseOfferSnapshot, "tendermint.abci.ResponseOfferSnapshot"> = {
	$type: "tendermint.abci.ResponseOfferSnapshot" as const,

	encode(message: ResponseOfferSnapshot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.result !== 0) {
			writer.uint32(8).int32(message.result);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseOfferSnapshot {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseOfferSnapshot();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.result = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseOfferSnapshot {
		return { result: isSet(object.result) ? responseOfferSnapshotResultFromJSON(object.result) : 0 };
	},

	toJSON(message: ResponseOfferSnapshot): unknown {
		const obj: any = {};
		if (message.result !== 0) {
			obj.result = responseOfferSnapshotResultToJSON(message.result);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseOfferSnapshot>, I>>(base?: I): ResponseOfferSnapshot {
		return ResponseOfferSnapshot.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseOfferSnapshot>, I>>(object: I): ResponseOfferSnapshot {
		const message = createBaseResponseOfferSnapshot();
		message.result = object.result ?? 0;
		return message;
	}
};

export const ResponseLoadSnapshotChunk: MessageFns<ResponseLoadSnapshotChunk, "tendermint.abci.ResponseLoadSnapshotChunk"> = {
	$type: "tendermint.abci.ResponseLoadSnapshotChunk" as const,

	encode(message: ResponseLoadSnapshotChunk, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.chunk.length !== 0) {
			writer.uint32(10).bytes(message.chunk);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseLoadSnapshotChunk {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseLoadSnapshotChunk();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.chunk = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseLoadSnapshotChunk {
		return { chunk: isSet(object.chunk) ? bytesFromBase64(object.chunk) : new Uint8Array(0) };
	},

	toJSON(message: ResponseLoadSnapshotChunk): unknown {
		const obj: any = {};
		if (message.chunk.length !== 0) {
			obj.chunk = base64FromBytes(message.chunk);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseLoadSnapshotChunk>, I>>(base?: I): ResponseLoadSnapshotChunk {
		return ResponseLoadSnapshotChunk.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseLoadSnapshotChunk>, I>>(object: I): ResponseLoadSnapshotChunk {
		const message = createBaseResponseLoadSnapshotChunk();
		message.chunk = object.chunk ?? new Uint8Array(0);
		return message;
	}
};

export const ResponseApplySnapshotChunk: MessageFns<ResponseApplySnapshotChunk, "tendermint.abci.ResponseApplySnapshotChunk"> = {
	$type: "tendermint.abci.ResponseApplySnapshotChunk" as const,

	encode(message: ResponseApplySnapshotChunk, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.result !== 0) {
			writer.uint32(8).int32(message.result);
		}
		writer.uint32(18).fork();
		for (const v of message.refetch_chunks) {
			writer.uint32(v);
		}
		writer.join();
		for (const v of message.reject_senders) {
			writer.uint32(26).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseApplySnapshotChunk {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseApplySnapshotChunk();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.result = reader.int32() as any;
					continue;
				case 2:
					if (tag === 16) {
						message.refetch_chunks.push(reader.uint32());

						continue;
					}

					if (tag === 18) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.refetch_chunks.push(reader.uint32());
						}

						continue;
					}

					break;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.reject_senders.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseApplySnapshotChunk {
		return {
			result: isSet(object.result) ? responseApplySnapshotChunkResultFromJSON(object.result) : 0,
			refetch_chunks: globalThis.Array.isArray(object?.refetch_chunks) ? object.refetch_chunks.map((e: any) => globalThis.Number(e)) : [],
			reject_senders: globalThis.Array.isArray(object?.reject_senders) ? object.reject_senders.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: ResponseApplySnapshotChunk): unknown {
		const obj: any = {};
		if (message.result !== 0) {
			obj.result = responseApplySnapshotChunkResultToJSON(message.result);
		}
		if (message.refetch_chunks?.length) {
			obj.refetch_chunks = message.refetch_chunks.map((e) => Math.round(e));
		}
		if (message.reject_senders?.length) {
			obj.reject_senders = message.reject_senders;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseApplySnapshotChunk>, I>>(base?: I): ResponseApplySnapshotChunk {
		return ResponseApplySnapshotChunk.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseApplySnapshotChunk>, I>>(object: I): ResponseApplySnapshotChunk {
		const message = createBaseResponseApplySnapshotChunk();
		message.result = object.result ?? 0;
		message.refetch_chunks = object.refetch_chunks?.map((e) => e) || [];
		message.reject_senders = object.reject_senders?.map((e) => e) || [];
		return message;
	}
};

export const ResponsePrepareProposal: MessageFns<ResponsePrepareProposal, "tendermint.abci.ResponsePrepareProposal"> = {
	$type: "tendermint.abci.ResponsePrepareProposal" as const,

	encode(message: ResponsePrepareProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.tx_records) {
			TxRecord.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.app_hash.length !== 0) {
			writer.uint32(18).bytes(message.app_hash);
		}
		for (const v of message.tx_results) {
			ExecTxResult.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.validator_updates) {
			ValidatorUpdate.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.consensus_param_updates !== undefined) {
			ConsensusParams.encode(message.consensus_param_updates, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponsePrepareProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponsePrepareProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx_records.push(TxRecord.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.app_hash = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.tx_results.push(ExecTxResult.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponsePrepareProposal {
		return {
			tx_records: globalThis.Array.isArray(object?.tx_records) ? object.tx_records.map((e: any) => TxRecord.fromJSON(e)) : [],
			app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(0),
			tx_results: globalThis.Array.isArray(object?.tx_results) ? object.tx_results.map((e: any) => ExecTxResult.fromJSON(e)) : [],
			validator_updates: globalThis.Array.isArray(object?.validator_updates) ? object.validator_updates.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
			consensus_param_updates: isSet(object.consensus_param_updates) ? ConsensusParams.fromJSON(object.consensus_param_updates) : undefined
		};
	},

	toJSON(message: ResponsePrepareProposal): unknown {
		const obj: any = {};
		if (message.tx_records?.length) {
			obj.tx_records = message.tx_records.map((e) => TxRecord.toJSON(e));
		}
		if (message.app_hash.length !== 0) {
			obj.app_hash = base64FromBytes(message.app_hash);
		}
		if (message.tx_results?.length) {
			obj.tx_results = message.tx_results.map((e) => ExecTxResult.toJSON(e));
		}
		if (message.validator_updates?.length) {
			obj.validator_updates = message.validator_updates.map((e) => ValidatorUpdate.toJSON(e));
		}
		if (message.consensus_param_updates !== undefined) {
			obj.consensus_param_updates = ConsensusParams.toJSON(message.consensus_param_updates);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponsePrepareProposal>, I>>(base?: I): ResponsePrepareProposal {
		return ResponsePrepareProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponsePrepareProposal>, I>>(object: I): ResponsePrepareProposal {
		const message = createBaseResponsePrepareProposal();
		message.tx_records = object.tx_records?.map((e) => TxRecord.fromPartial(e)) || [];
		message.app_hash = object.app_hash ?? new Uint8Array(0);
		message.tx_results = object.tx_results?.map((e) => ExecTxResult.fromPartial(e)) || [];
		message.validator_updates = object.validator_updates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
		message.consensus_param_updates =
			object.consensus_param_updates !== undefined && object.consensus_param_updates !== null
				? ConsensusParams.fromPartial(object.consensus_param_updates)
				: undefined;
		return message;
	}
};

export const ResponseProcessProposal: MessageFns<ResponseProcessProposal, "tendermint.abci.ResponseProcessProposal"> = {
	$type: "tendermint.abci.ResponseProcessProposal" as const,

	encode(message: ResponseProcessProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.status !== 0) {
			writer.uint32(8).int32(message.status);
		}
		if (message.app_hash.length !== 0) {
			writer.uint32(18).bytes(message.app_hash);
		}
		for (const v of message.tx_results) {
			ExecTxResult.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.validator_updates) {
			ValidatorUpdate.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.consensus_param_updates !== undefined) {
			ConsensusParams.encode(message.consensus_param_updates, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseProcessProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseProcessProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.status = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.app_hash = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.tx_results.push(ExecTxResult.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseProcessProposal {
		return {
			status: isSet(object.status) ? responseProcessProposalProposalStatusFromJSON(object.status) : 0,
			app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(0),
			tx_results: globalThis.Array.isArray(object?.tx_results) ? object.tx_results.map((e: any) => ExecTxResult.fromJSON(e)) : [],
			validator_updates: globalThis.Array.isArray(object?.validator_updates) ? object.validator_updates.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
			consensus_param_updates: isSet(object.consensus_param_updates) ? ConsensusParams.fromJSON(object.consensus_param_updates) : undefined
		};
	},

	toJSON(message: ResponseProcessProposal): unknown {
		const obj: any = {};
		if (message.status !== 0) {
			obj.status = responseProcessProposalProposalStatusToJSON(message.status);
		}
		if (message.app_hash.length !== 0) {
			obj.app_hash = base64FromBytes(message.app_hash);
		}
		if (message.tx_results?.length) {
			obj.tx_results = message.tx_results.map((e) => ExecTxResult.toJSON(e));
		}
		if (message.validator_updates?.length) {
			obj.validator_updates = message.validator_updates.map((e) => ValidatorUpdate.toJSON(e));
		}
		if (message.consensus_param_updates !== undefined) {
			obj.consensus_param_updates = ConsensusParams.toJSON(message.consensus_param_updates);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseProcessProposal>, I>>(base?: I): ResponseProcessProposal {
		return ResponseProcessProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseProcessProposal>, I>>(object: I): ResponseProcessProposal {
		const message = createBaseResponseProcessProposal();
		message.status = object.status ?? 0;
		message.app_hash = object.app_hash ?? new Uint8Array(0);
		message.tx_results = object.tx_results?.map((e) => ExecTxResult.fromPartial(e)) || [];
		message.validator_updates = object.validator_updates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
		message.consensus_param_updates =
			object.consensus_param_updates !== undefined && object.consensus_param_updates !== null
				? ConsensusParams.fromPartial(object.consensus_param_updates)
				: undefined;
		return message;
	}
};

export const ResponseExtendVote: MessageFns<ResponseExtendVote, "tendermint.abci.ResponseExtendVote"> = {
	$type: "tendermint.abci.ResponseExtendVote" as const,

	encode(message: ResponseExtendVote, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.vote_extension.length !== 0) {
			writer.uint32(10).bytes(message.vote_extension);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseExtendVote {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseExtendVote();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.vote_extension = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseExtendVote {
		return {
			vote_extension: isSet(object.vote_extension) ? bytesFromBase64(object.vote_extension) : new Uint8Array(0)
		};
	},

	toJSON(message: ResponseExtendVote): unknown {
		const obj: any = {};
		if (message.vote_extension.length !== 0) {
			obj.vote_extension = base64FromBytes(message.vote_extension);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseExtendVote>, I>>(base?: I): ResponseExtendVote {
		return ResponseExtendVote.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseExtendVote>, I>>(object: I): ResponseExtendVote {
		const message = createBaseResponseExtendVote();
		message.vote_extension = object.vote_extension ?? new Uint8Array(0);
		return message;
	}
};

export const ResponseVerifyVoteExtension: MessageFns<ResponseVerifyVoteExtension, "tendermint.abci.ResponseVerifyVoteExtension"> = {
	$type: "tendermint.abci.ResponseVerifyVoteExtension" as const,

	encode(message: ResponseVerifyVoteExtension, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.status !== 0) {
			writer.uint32(8).int32(message.status);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseVerifyVoteExtension {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseVerifyVoteExtension();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.status = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseVerifyVoteExtension {
		return { status: isSet(object.status) ? responseVerifyVoteExtensionVerifyStatusFromJSON(object.status) : 0 };
	},

	toJSON(message: ResponseVerifyVoteExtension): unknown {
		const obj: any = {};
		if (message.status !== 0) {
			obj.status = responseVerifyVoteExtensionVerifyStatusToJSON(message.status);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseVerifyVoteExtension>, I>>(base?: I): ResponseVerifyVoteExtension {
		return ResponseVerifyVoteExtension.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseVerifyVoteExtension>, I>>(object: I): ResponseVerifyVoteExtension {
		const message = createBaseResponseVerifyVoteExtension();
		message.status = object.status ?? 0;
		return message;
	}
};

export const ResponseFinalizeBlock: MessageFns<ResponseFinalizeBlock, "tendermint.abci.ResponseFinalizeBlock"> = {
	$type: "tendermint.abci.ResponseFinalizeBlock" as const,

	encode(message: ResponseFinalizeBlock, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.events) {
			Event.encode(v!, writer.uint32(10).fork()).join();
		}
		for (const v of message.tx_results) {
			ExecTxResult.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.validator_updates) {
			ValidatorUpdate.encode(v!, writer.uint32(26).fork()).join();
		}
		if (message.consensus_param_updates !== undefined) {
			ConsensusParams.encode(message.consensus_param_updates, writer.uint32(34).fork()).join();
		}
		if (message.app_hash.length !== 0) {
			writer.uint32(42).bytes(message.app_hash);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ResponseFinalizeBlock {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseResponseFinalizeBlock();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.events.push(Event.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx_results.push(ExecTxResult.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.validator_updates.push(ValidatorUpdate.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.consensus_param_updates = ConsensusParams.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.app_hash = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ResponseFinalizeBlock {
		return {
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
			tx_results: globalThis.Array.isArray(object?.tx_results) ? object.tx_results.map((e: any) => ExecTxResult.fromJSON(e)) : [],
			validator_updates: globalThis.Array.isArray(object?.validator_updates) ? object.validator_updates.map((e: any) => ValidatorUpdate.fromJSON(e)) : [],
			consensus_param_updates: isSet(object.consensus_param_updates) ? ConsensusParams.fromJSON(object.consensus_param_updates) : undefined,
			app_hash: isSet(object.app_hash) ? bytesFromBase64(object.app_hash) : new Uint8Array(0)
		};
	},

	toJSON(message: ResponseFinalizeBlock): unknown {
		const obj: any = {};
		if (message.events?.length) {
			obj.events = message.events.map((e) => Event.toJSON(e));
		}
		if (message.tx_results?.length) {
			obj.tx_results = message.tx_results.map((e) => ExecTxResult.toJSON(e));
		}
		if (message.validator_updates?.length) {
			obj.validator_updates = message.validator_updates.map((e) => ValidatorUpdate.toJSON(e));
		}
		if (message.consensus_param_updates !== undefined) {
			obj.consensus_param_updates = ConsensusParams.toJSON(message.consensus_param_updates);
		}
		if (message.app_hash.length !== 0) {
			obj.app_hash = base64FromBytes(message.app_hash);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ResponseFinalizeBlock>, I>>(base?: I): ResponseFinalizeBlock {
		return ResponseFinalizeBlock.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ResponseFinalizeBlock>, I>>(object: I): ResponseFinalizeBlock {
		const message = createBaseResponseFinalizeBlock();
		message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
		message.tx_results = object.tx_results?.map((e) => ExecTxResult.fromPartial(e)) || [];
		message.validator_updates = object.validator_updates?.map((e) => ValidatorUpdate.fromPartial(e)) || [];
		message.consensus_param_updates =
			object.consensus_param_updates !== undefined && object.consensus_param_updates !== null
				? ConsensusParams.fromPartial(object.consensus_param_updates)
				: undefined;
		message.app_hash = object.app_hash ?? new Uint8Array(0);
		return message;
	}
};

export const CommitInfo: MessageFns<CommitInfo, "tendermint.abci.CommitInfo"> = {
	$type: "tendermint.abci.CommitInfo" as const,

	encode(message: CommitInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.round !== 0) {
			writer.uint32(8).int32(message.round);
		}
		for (const v of message.votes) {
			VoteInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommitInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.round = reader.int32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.votes.push(VoteInfo.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CommitInfo {
		return {
			round: isSet(object.round) ? globalThis.Number(object.round) : 0,
			votes: globalThis.Array.isArray(object?.votes) ? object.votes.map((e: any) => VoteInfo.fromJSON(e)) : []
		};
	},

	toJSON(message: CommitInfo): unknown {
		const obj: any = {};
		if (message.round !== 0) {
			obj.round = Math.round(message.round);
		}
		if (message.votes?.length) {
			obj.votes = message.votes.map((e) => VoteInfo.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CommitInfo>, I>>(base?: I): CommitInfo {
		return CommitInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CommitInfo>, I>>(object: I): CommitInfo {
		const message = createBaseCommitInfo();
		message.round = object.round ?? 0;
		message.votes = object.votes?.map((e) => VoteInfo.fromPartial(e)) || [];
		return message;
	}
};

export const ExtendedCommitInfo: MessageFns<ExtendedCommitInfo, "tendermint.abci.ExtendedCommitInfo"> = {
	$type: "tendermint.abci.ExtendedCommitInfo" as const,

	encode(message: ExtendedCommitInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.round !== 0) {
			writer.uint32(8).int32(message.round);
		}
		for (const v of message.votes) {
			ExtendedVoteInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ExtendedCommitInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExtendedCommitInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.round = reader.int32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.votes.push(ExtendedVoteInfo.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ExtendedCommitInfo {
		return {
			round: isSet(object.round) ? globalThis.Number(object.round) : 0,
			votes: globalThis.Array.isArray(object?.votes) ? object.votes.map((e: any) => ExtendedVoteInfo.fromJSON(e)) : []
		};
	},

	toJSON(message: ExtendedCommitInfo): unknown {
		const obj: any = {};
		if (message.round !== 0) {
			obj.round = Math.round(message.round);
		}
		if (message.votes?.length) {
			obj.votes = message.votes.map((e) => ExtendedVoteInfo.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ExtendedCommitInfo>, I>>(base?: I): ExtendedCommitInfo {
		return ExtendedCommitInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ExtendedCommitInfo>, I>>(object: I): ExtendedCommitInfo {
		const message = createBaseExtendedCommitInfo();
		message.round = object.round ?? 0;
		message.votes = object.votes?.map((e) => ExtendedVoteInfo.fromPartial(e)) || [];
		return message;
	}
};

export const Event: MessageFns<Event, "tendermint.abci.Event"> = {
	$type: "tendermint.abci.Event" as const,

	encode(message: Event, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.type !== "") {
			writer.uint32(10).string(message.type);
		}
		for (const v of message.attributes) {
			EventAttribute.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Event {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.type = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.attributes.push(EventAttribute.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Event {
		return {
			type: isSet(object.type) ? globalThis.String(object.type) : "",
			attributes: globalThis.Array.isArray(object?.attributes) ? object.attributes.map((e: any) => EventAttribute.fromJSON(e)) : []
		};
	},

	toJSON(message: Event): unknown {
		const obj: any = {};
		if (message.type !== "") {
			obj.type = message.type;
		}
		if (message.attributes?.length) {
			obj.attributes = message.attributes.map((e) => EventAttribute.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Event>, I>>(base?: I): Event {
		return Event.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
		const message = createBaseEvent();
		message.type = object.type ?? "";
		message.attributes = object.attributes?.map((e) => EventAttribute.fromPartial(e)) || [];
		return message;
	}
};

export const EventAttribute: MessageFns<EventAttribute, "tendermint.abci.EventAttribute"> = {
	$type: "tendermint.abci.EventAttribute" as const,

	encode(message: EventAttribute, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.key !== "") {
			writer.uint32(10).string(message.key);
		}
		if (message.value !== "") {
			writer.uint32(18).string(message.value);
		}
		if (message.index !== false) {
			writer.uint32(24).bool(message.index);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EventAttribute {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEventAttribute();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.value = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.index = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EventAttribute {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : "",
			value: isSet(object.value) ? globalThis.String(object.value) : "",
			index: isSet(object.index) ? globalThis.Boolean(object.index) : false
		};
	},

	toJSON(message: EventAttribute): unknown {
		const obj: any = {};
		if (message.key !== "") {
			obj.key = message.key;
		}
		if (message.value !== "") {
			obj.value = message.value;
		}
		if (message.index !== false) {
			obj.index = message.index;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EventAttribute>, I>>(base?: I): EventAttribute {
		return EventAttribute.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EventAttribute>, I>>(object: I): EventAttribute {
		const message = createBaseEventAttribute();
		message.key = object.key ?? "";
		message.value = object.value ?? "";
		message.index = object.index ?? false;
		return message;
	}
};

export const ExecTxResult: MessageFns<ExecTxResult, "tendermint.abci.ExecTxResult"> = {
	$type: "tendermint.abci.ExecTxResult" as const,

	encode(message: ExecTxResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.code !== 0) {
			writer.uint32(8).uint32(message.code);
		}
		if (message.data.length !== 0) {
			writer.uint32(18).bytes(message.data);
		}
		if (message.log !== "") {
			writer.uint32(26).string(message.log);
		}
		if (message.info !== "") {
			writer.uint32(34).string(message.info);
		}
		if (message.gas_wanted !== 0) {
			writer.uint32(40).int64(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			writer.uint32(48).int64(message.gas_used);
		}
		for (const v of message.events) {
			Event.encode(v!, writer.uint32(58).fork()).join();
		}
		if (message.codespace !== "") {
			writer.uint32(66).string(message.codespace);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ExecTxResult {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExecTxResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.code = reader.uint32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.data = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.log = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.info = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.gas_wanted = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.gas_used = longToNumber(reader.int64());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.events.push(Event.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.codespace = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ExecTxResult {
		return {
			code: isSet(object.code) ? globalThis.Number(object.code) : 0,
			data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
			log: isSet(object.log) ? globalThis.String(object.log) : "",
			info: isSet(object.info) ? globalThis.String(object.info) : "",
			gas_wanted: isSet(object.gas_wanted) ? globalThis.Number(object.gas_wanted) : 0,
			gas_used: isSet(object.gas_used) ? globalThis.Number(object.gas_used) : 0,
			events: globalThis.Array.isArray(object?.events) ? object.events.map((e: any) => Event.fromJSON(e)) : [],
			codespace: isSet(object.codespace) ? globalThis.String(object.codespace) : ""
		};
	},

	toJSON(message: ExecTxResult): unknown {
		const obj: any = {};
		if (message.code !== 0) {
			obj.code = Math.round(message.code);
		}
		if (message.data.length !== 0) {
			obj.data = base64FromBytes(message.data);
		}
		if (message.log !== "") {
			obj.log = message.log;
		}
		if (message.info !== "") {
			obj.info = message.info;
		}
		if (message.gas_wanted !== 0) {
			obj.gas_wanted = Math.round(message.gas_wanted);
		}
		if (message.gas_used !== 0) {
			obj.gas_used = Math.round(message.gas_used);
		}
		if (message.events?.length) {
			obj.events = message.events.map((e) => Event.toJSON(e));
		}
		if (message.codespace !== "") {
			obj.codespace = message.codespace;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ExecTxResult>, I>>(base?: I): ExecTxResult {
		return ExecTxResult.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ExecTxResult>, I>>(object: I): ExecTxResult {
		const message = createBaseExecTxResult();
		message.code = object.code ?? 0;
		message.data = object.data ?? new Uint8Array(0);
		message.log = object.log ?? "";
		message.info = object.info ?? "";
		message.gas_wanted = object.gas_wanted ?? 0;
		message.gas_used = object.gas_used ?? 0;
		message.events = object.events?.map((e) => Event.fromPartial(e)) || [];
		message.codespace = object.codespace ?? "";
		return message;
	}
};

export const TxResult: MessageFns<TxResult, "tendermint.abci.TxResult"> = {
	$type: "tendermint.abci.TxResult" as const,

	encode(message: TxResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).int64(message.height);
		}
		if (message.index !== 0) {
			writer.uint32(16).uint32(message.index);
		}
		if (message.tx.length !== 0) {
			writer.uint32(26).bytes(message.tx);
		}
		if (message.result !== undefined) {
			ExecTxResult.encode(message.result, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTxResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.index = reader.uint32();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.tx = reader.bytes();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.result = ExecTxResult.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TxResult {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			index: isSet(object.index) ? globalThis.Number(object.index) : 0,
			tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(0),
			result: isSet(object.result) ? ExecTxResult.fromJSON(object.result) : undefined
		};
	},

	toJSON(message: TxResult): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.index !== 0) {
			obj.index = Math.round(message.index);
		}
		if (message.tx.length !== 0) {
			obj.tx = base64FromBytes(message.tx);
		}
		if (message.result !== undefined) {
			obj.result = ExecTxResult.toJSON(message.result);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TxResult>, I>>(base?: I): TxResult {
		return TxResult.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TxResult>, I>>(object: I): TxResult {
		const message = createBaseTxResult();
		message.height = object.height ?? 0;
		message.index = object.index ?? 0;
		message.tx = object.tx ?? new Uint8Array(0);
		message.result = object.result !== undefined && object.result !== null ? ExecTxResult.fromPartial(object.result) : undefined;
		return message;
	}
};

export const TxRecord: MessageFns<TxRecord, "tendermint.abci.TxRecord"> = {
	$type: "tendermint.abci.TxRecord" as const,

	encode(message: TxRecord, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.action !== 0) {
			writer.uint32(8).int32(message.action);
		}
		if (message.tx.length !== 0) {
			writer.uint32(18).bytes(message.tx);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TxRecord {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTxRecord();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.action = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.tx = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TxRecord {
		return {
			action: isSet(object.action) ? txRecordTxActionFromJSON(object.action) : 0,
			tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(0)
		};
	},

	toJSON(message: TxRecord): unknown {
		const obj: any = {};
		if (message.action !== 0) {
			obj.action = txRecordTxActionToJSON(message.action);
		}
		if (message.tx.length !== 0) {
			obj.tx = base64FromBytes(message.tx);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TxRecord>, I>>(base?: I): TxRecord {
		return TxRecord.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TxRecord>, I>>(object: I): TxRecord {
		const message = createBaseTxRecord();
		message.action = object.action ?? 0;
		message.tx = object.tx ?? new Uint8Array(0);
		return message;
	}
};

export const Validator: MessageFns<Validator, "tendermint.abci.Validator"> = {
	$type: "tendermint.abci.Validator" as const,

	encode(message: Validator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address.length !== 0) {
			writer.uint32(10).bytes(message.address);
		}
		if (message.power !== 0) {
			writer.uint32(24).int64(message.power);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Validator {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidator();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.bytes();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.power = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Validator {
		return {
			address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(0),
			power: isSet(object.power) ? globalThis.Number(object.power) : 0
		};
	},

	toJSON(message: Validator): unknown {
		const obj: any = {};
		if (message.address.length !== 0) {
			obj.address = base64FromBytes(message.address);
		}
		if (message.power !== 0) {
			obj.power = Math.round(message.power);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator {
		return Validator.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
		const message = createBaseValidator();
		message.address = object.address ?? new Uint8Array(0);
		message.power = object.power ?? 0;
		return message;
	}
};

export const ValidatorUpdate: MessageFns<ValidatorUpdate, "tendermint.abci.ValidatorUpdate"> = {
	$type: "tendermint.abci.ValidatorUpdate" as const,

	encode(message: ValidatorUpdate, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pub_key !== undefined) {
			PublicKey.encode(message.pub_key, writer.uint32(10).fork()).join();
		}
		if (message.power !== 0) {
			writer.uint32(16).int64(message.power);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorUpdate {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorUpdate();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pub_key = PublicKey.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.power = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorUpdate {
		return {
			pub_key: isSet(object.pub_key) ? PublicKey.fromJSON(object.pub_key) : undefined,
			power: isSet(object.power) ? globalThis.Number(object.power) : 0
		};
	},

	toJSON(message: ValidatorUpdate): unknown {
		const obj: any = {};
		if (message.pub_key !== undefined) {
			obj.pub_key = PublicKey.toJSON(message.pub_key);
		}
		if (message.power !== 0) {
			obj.power = Math.round(message.power);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(base?: I): ValidatorUpdate {
		return ValidatorUpdate.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorUpdate>, I>>(object: I): ValidatorUpdate {
		const message = createBaseValidatorUpdate();
		message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? PublicKey.fromPartial(object.pub_key) : undefined;
		message.power = object.power ?? 0;
		return message;
	}
};

export const VoteInfo: MessageFns<VoteInfo, "tendermint.abci.VoteInfo"> = {
	$type: "tendermint.abci.VoteInfo" as const,

	encode(message: VoteInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator !== undefined) {
			Validator.encode(message.validator, writer.uint32(10).fork()).join();
		}
		if (message.signed_last_block !== false) {
			writer.uint32(16).bool(message.signed_last_block);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): VoteInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVoteInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator = Validator.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.signed_last_block = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): VoteInfo {
		return {
			validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
			signed_last_block: isSet(object.signed_last_block) ? globalThis.Boolean(object.signed_last_block) : false
		};
	},

	toJSON(message: VoteInfo): unknown {
		const obj: any = {};
		if (message.validator !== undefined) {
			obj.validator = Validator.toJSON(message.validator);
		}
		if (message.signed_last_block !== false) {
			obj.signed_last_block = message.signed_last_block;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<VoteInfo>, I>>(base?: I): VoteInfo {
		return VoteInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<VoteInfo>, I>>(object: I): VoteInfo {
		const message = createBaseVoteInfo();
		message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
		message.signed_last_block = object.signed_last_block ?? false;
		return message;
	}
};

export const ExtendedVoteInfo: MessageFns<ExtendedVoteInfo, "tendermint.abci.ExtendedVoteInfo"> = {
	$type: "tendermint.abci.ExtendedVoteInfo" as const,

	encode(message: ExtendedVoteInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator !== undefined) {
			Validator.encode(message.validator, writer.uint32(10).fork()).join();
		}
		if (message.signed_last_block !== false) {
			writer.uint32(16).bool(message.signed_last_block);
		}
		if (message.vote_extension.length !== 0) {
			writer.uint32(26).bytes(message.vote_extension);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ExtendedVoteInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExtendedVoteInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator = Validator.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.signed_last_block = reader.bool();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.vote_extension = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ExtendedVoteInfo {
		return {
			validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
			signed_last_block: isSet(object.signed_last_block) ? globalThis.Boolean(object.signed_last_block) : false,
			vote_extension: isSet(object.vote_extension) ? bytesFromBase64(object.vote_extension) : new Uint8Array(0)
		};
	},

	toJSON(message: ExtendedVoteInfo): unknown {
		const obj: any = {};
		if (message.validator !== undefined) {
			obj.validator = Validator.toJSON(message.validator);
		}
		if (message.signed_last_block !== false) {
			obj.signed_last_block = message.signed_last_block;
		}
		if (message.vote_extension.length !== 0) {
			obj.vote_extension = base64FromBytes(message.vote_extension);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ExtendedVoteInfo>, I>>(base?: I): ExtendedVoteInfo {
		return ExtendedVoteInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ExtendedVoteInfo>, I>>(object: I): ExtendedVoteInfo {
		const message = createBaseExtendedVoteInfo();
		message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
		message.signed_last_block = object.signed_last_block ?? false;
		message.vote_extension = object.vote_extension ?? new Uint8Array(0);
		return message;
	}
};

export const Misbehavior: MessageFns<Misbehavior, "tendermint.abci.Misbehavior"> = {
	$type: "tendermint.abci.Misbehavior" as const,

	encode(message: Misbehavior, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.type !== 0) {
			writer.uint32(8).int32(message.type);
		}
		if (message.validator !== undefined) {
			Validator.encode(message.validator, writer.uint32(18).fork()).join();
		}
		if (message.height !== 0) {
			writer.uint32(24).int64(message.height);
		}
		if (message.time !== undefined) {
			Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).join();
		}
		if (message.total_voting_power !== 0) {
			writer.uint32(40).int64(message.total_voting_power);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Misbehavior {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMisbehavior();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.type = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator = Validator.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.height = longToNumber(reader.int64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.total_voting_power = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Misbehavior {
		return {
			type: isSet(object.type) ? misbehaviorTypeFromJSON(object.type) : 0,
			validator: isSet(object.validator) ? Validator.fromJSON(object.validator) : undefined,
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
			total_voting_power: isSet(object.total_voting_power) ? globalThis.Number(object.total_voting_power) : 0
		};
	},

	toJSON(message: Misbehavior): unknown {
		const obj: any = {};
		if (message.type !== 0) {
			obj.type = misbehaviorTypeToJSON(message.type);
		}
		if (message.validator !== undefined) {
			obj.validator = Validator.toJSON(message.validator);
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.time !== undefined) {
			obj.time = message.time.toISOString();
		}
		if (message.total_voting_power !== 0) {
			obj.total_voting_power = Math.round(message.total_voting_power);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Misbehavior>, I>>(base?: I): Misbehavior {
		return Misbehavior.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Misbehavior>, I>>(object: I): Misbehavior {
		const message = createBaseMisbehavior();
		message.type = object.type ?? 0;
		message.validator = object.validator !== undefined && object.validator !== null ? Validator.fromPartial(object.validator) : undefined;
		message.height = object.height ?? 0;
		message.time = object.time ?? undefined;
		message.total_voting_power = object.total_voting_power ?? 0;
		return message;
	}
};

export const Snapshot: MessageFns<Snapshot, "tendermint.abci.Snapshot"> = {
	$type: "tendermint.abci.Snapshot" as const,

	encode(message: Snapshot, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.height !== 0) {
			writer.uint32(8).uint64(message.height);
		}
		if (message.format !== 0) {
			writer.uint32(16).uint32(message.format);
		}
		if (message.chunks !== 0) {
			writer.uint32(24).uint32(message.chunks);
		}
		if (message.hash.length !== 0) {
			writer.uint32(34).bytes(message.hash);
		}
		if (message.metadata.length !== 0) {
			writer.uint32(42).bytes(message.metadata);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSnapshot();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.height = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.format = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.chunks = reader.uint32();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.hash = reader.bytes();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.metadata = reader.bytes();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Snapshot {
		return {
			height: isSet(object.height) ? globalThis.Number(object.height) : 0,
			format: isSet(object.format) ? globalThis.Number(object.format) : 0,
			chunks: isSet(object.chunks) ? globalThis.Number(object.chunks) : 0,
			hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(0),
			metadata: isSet(object.metadata) ? bytesFromBase64(object.metadata) : new Uint8Array(0)
		};
	},

	toJSON(message: Snapshot): unknown {
		const obj: any = {};
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		if (message.format !== 0) {
			obj.format = Math.round(message.format);
		}
		if (message.chunks !== 0) {
			obj.chunks = Math.round(message.chunks);
		}
		if (message.hash.length !== 0) {
			obj.hash = base64FromBytes(message.hash);
		}
		if (message.metadata.length !== 0) {
			obj.metadata = base64FromBytes(message.metadata);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Snapshot>, I>>(base?: I): Snapshot {
		return Snapshot.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Snapshot>, I>>(object: I): Snapshot {
		const message = createBaseSnapshot();
		message.height = object.height ?? 0;
		message.format = object.format ?? 0;
		message.chunks = object.chunks ?? 0;
		message.hash = object.hash ?? new Uint8Array(0);
		message.metadata = object.metadata ?? new Uint8Array(0);
		return message;
	}
};

export function checkTxTypeFromJSON(object: any): CheckTxType {
	switch (object) {
		case 0:
		case "NEW":
			return CheckTxType.NEW;
		case 1:
		case "RECHECK":
			return CheckTxType.RECHECK;
		case -1:
		case "UNRECOGNIZED":
		default:
			return CheckTxType.UNRECOGNIZED;
	}
}

export function checkTxTypeToJSON(object: CheckTxType): string {
	switch (object) {
		case CheckTxType.NEW:
			return "NEW";
		case CheckTxType.RECHECK:
			return "RECHECK";
		case CheckTxType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function misbehaviorTypeFromJSON(object: any): MisbehaviorType {
	switch (object) {
		case 0:
		case "UNKNOWN":
			return MisbehaviorType.UNKNOWN;
		case 1:
		case "DUPLICATE_VOTE":
			return MisbehaviorType.DUPLICATE_VOTE;
		case 2:
		case "LIGHT_CLIENT_ATTACK":
			return MisbehaviorType.LIGHT_CLIENT_ATTACK;
		case -1:
		case "UNRECOGNIZED":
		default:
			return MisbehaviorType.UNRECOGNIZED;
	}
}

export function misbehaviorTypeToJSON(object: MisbehaviorType): string {
	switch (object) {
		case MisbehaviorType.UNKNOWN:
			return "UNKNOWN";
		case MisbehaviorType.DUPLICATE_VOTE:
			return "DUPLICATE_VOTE";
		case MisbehaviorType.LIGHT_CLIENT_ATTACK:
			return "LIGHT_CLIENT_ATTACK";
		case MisbehaviorType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function responseOfferSnapshotResultFromJSON(object: any): ResponseOfferSnapshotResult {
	switch (object) {
		case 0:
		case "UNKNOWN":
			return ResponseOfferSnapshotResult.UNKNOWN;
		case 1:
		case "ACCEPT":
			return ResponseOfferSnapshotResult.ACCEPT;
		case 2:
		case "ABORT":
			return ResponseOfferSnapshotResult.ABORT;
		case 3:
		case "REJECT":
			return ResponseOfferSnapshotResult.REJECT;
		case 4:
		case "REJECT_FORMAT":
			return ResponseOfferSnapshotResult.REJECT_FORMAT;
		case 5:
		case "REJECT_SENDER":
			return ResponseOfferSnapshotResult.REJECT_SENDER;
		case -1:
		case "UNRECOGNIZED":
		default:
			return ResponseOfferSnapshotResult.UNRECOGNIZED;
	}
}

export function responseOfferSnapshotResultToJSON(object: ResponseOfferSnapshotResult): string {
	switch (object) {
		case ResponseOfferSnapshotResult.UNKNOWN:
			return "UNKNOWN";
		case ResponseOfferSnapshotResult.ACCEPT:
			return "ACCEPT";
		case ResponseOfferSnapshotResult.ABORT:
			return "ABORT";
		case ResponseOfferSnapshotResult.REJECT:
			return "REJECT";
		case ResponseOfferSnapshotResult.REJECT_FORMAT:
			return "REJECT_FORMAT";
		case ResponseOfferSnapshotResult.REJECT_SENDER:
			return "REJECT_SENDER";
		case ResponseOfferSnapshotResult.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function responseApplySnapshotChunkResultFromJSON(object: any): ResponseApplySnapshotChunkResult {
	switch (object) {
		case 0:
		case "UNKNOWN":
			return ResponseApplySnapshotChunkResult.UNKNOWN;
		case 1:
		case "ACCEPT":
			return ResponseApplySnapshotChunkResult.ACCEPT;
		case 2:
		case "ABORT":
			return ResponseApplySnapshotChunkResult.ABORT;
		case 3:
		case "RETRY":
			return ResponseApplySnapshotChunkResult.RETRY;
		case 4:
		case "RETRY_SNAPSHOT":
			return ResponseApplySnapshotChunkResult.RETRY_SNAPSHOT;
		case 5:
		case "REJECT_SNAPSHOT":
			return ResponseApplySnapshotChunkResult.REJECT_SNAPSHOT;
		case -1:
		case "UNRECOGNIZED":
		default:
			return ResponseApplySnapshotChunkResult.UNRECOGNIZED;
	}
}

export function responseApplySnapshotChunkResultToJSON(object: ResponseApplySnapshotChunkResult): string {
	switch (object) {
		case ResponseApplySnapshotChunkResult.UNKNOWN:
			return "UNKNOWN";
		case ResponseApplySnapshotChunkResult.ACCEPT:
			return "ACCEPT";
		case ResponseApplySnapshotChunkResult.ABORT:
			return "ABORT";
		case ResponseApplySnapshotChunkResult.RETRY:
			return "RETRY";
		case ResponseApplySnapshotChunkResult.RETRY_SNAPSHOT:
			return "RETRY_SNAPSHOT";
		case ResponseApplySnapshotChunkResult.REJECT_SNAPSHOT:
			return "REJECT_SNAPSHOT";
		case ResponseApplySnapshotChunkResult.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function responseProcessProposalProposalStatusFromJSON(object: any): ResponseProcessProposalProposalStatus {
	switch (object) {
		case 0:
		case "UNKNOWN":
			return ResponseProcessProposalProposalStatus.UNKNOWN;
		case 1:
		case "ACCEPT":
			return ResponseProcessProposalProposalStatus.ACCEPT;
		case 2:
		case "REJECT":
			return ResponseProcessProposalProposalStatus.REJECT;
		case -1:
		case "UNRECOGNIZED":
		default:
			return ResponseProcessProposalProposalStatus.UNRECOGNIZED;
	}
}

export function responseProcessProposalProposalStatusToJSON(object: ResponseProcessProposalProposalStatus): string {
	switch (object) {
		case ResponseProcessProposalProposalStatus.UNKNOWN:
			return "UNKNOWN";
		case ResponseProcessProposalProposalStatus.ACCEPT:
			return "ACCEPT";
		case ResponseProcessProposalProposalStatus.REJECT:
			return "REJECT";
		case ResponseProcessProposalProposalStatus.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function responseVerifyVoteExtensionVerifyStatusFromJSON(object: any): ResponseVerifyVoteExtensionVerifyStatus {
	switch (object) {
		case 0:
		case "UNKNOWN":
			return ResponseVerifyVoteExtensionVerifyStatus.UNKNOWN;
		case 1:
		case "ACCEPT":
			return ResponseVerifyVoteExtensionVerifyStatus.ACCEPT;
		case 2:
		case "REJECT":
			return ResponseVerifyVoteExtensionVerifyStatus.REJECT;
		case -1:
		case "UNRECOGNIZED":
		default:
			return ResponseVerifyVoteExtensionVerifyStatus.UNRECOGNIZED;
	}
}

export function responseVerifyVoteExtensionVerifyStatusToJSON(object: ResponseVerifyVoteExtensionVerifyStatus): string {
	switch (object) {
		case ResponseVerifyVoteExtensionVerifyStatus.UNKNOWN:
			return "UNKNOWN";
		case ResponseVerifyVoteExtensionVerifyStatus.ACCEPT:
			return "ACCEPT";
		case ResponseVerifyVoteExtensionVerifyStatus.REJECT:
			return "REJECT";
		case ResponseVerifyVoteExtensionVerifyStatus.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function txRecordTxActionFromJSON(object: any): TxRecordTxAction {
	switch (object) {
		case 0:
		case "UNKNOWN":
			return TxRecordTxAction.UNKNOWN;
		case 1:
		case "UNMODIFIED":
			return TxRecordTxAction.UNMODIFIED;
		case 2:
		case "ADDED":
			return TxRecordTxAction.ADDED;
		case 3:
		case "REMOVED":
			return TxRecordTxAction.REMOVED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return TxRecordTxAction.UNRECOGNIZED;
	}
}

export function txRecordTxActionToJSON(object: TxRecordTxAction): string {
	switch (object) {
		case TxRecordTxAction.UNKNOWN:
			return "UNKNOWN";
		case TxRecordTxAction.UNMODIFIED:
			return "UNMODIFIED";
		case TxRecordTxAction.ADDED:
			return "ADDED";
		case TxRecordTxAction.REMOVED:
			return "REMOVED";
		case TxRecordTxAction.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

function createBaseRequest(): Request {
	return {
		echo: undefined,
		flush: undefined,
		info: undefined,
		init_chain: undefined,
		query: undefined,
		check_tx: undefined,
		commit: undefined,
		list_snapshots: undefined,
		offer_snapshot: undefined,
		load_snapshot_chunk: undefined,
		apply_snapshot_chunk: undefined,
		prepare_proposal: undefined,
		process_proposal: undefined,
		extend_vote: undefined,
		verify_vote_extension: undefined,
		finalize_block: undefined
	};
}

function createBaseRequestEcho(): RequestEcho {
	return { message: "" };
}

function createBaseRequestFlush(): RequestFlush {
	return {};
}

function createBaseRequestInfo(): RequestInfo {
	return { version: "", block_version: 0, p2p_version: 0, abci_version: "" };
}

function createBaseRequestInitChain(): RequestInitChain {
	return {
		time: undefined,
		chain_id: "",
		consensus_params: undefined,
		validators: [],
		app_state_bytes: new Uint8Array(0),
		initial_height: 0
	};
}

function createBaseRequestQuery(): RequestQuery {
	return { data: new Uint8Array(0), path: "", height: 0, prove: false };
}

function createBaseRequestCheckTx(): RequestCheckTx {
	return { tx: new Uint8Array(0), type: 0 };
}

function createBaseRequestCommit(): RequestCommit {
	return {};
}

function createBaseRequestListSnapshots(): RequestListSnapshots {
	return {};
}

function createBaseRequestOfferSnapshot(): RequestOfferSnapshot {
	return { snapshot: undefined, app_hash: new Uint8Array(0) };
}

function createBaseRequestLoadSnapshotChunk(): RequestLoadSnapshotChunk {
	return { height: 0, format: 0, chunk: 0 };
}

function createBaseRequestApplySnapshotChunk(): RequestApplySnapshotChunk {
	return { index: 0, chunk: new Uint8Array(0), sender: "" };
}

function createBaseRequestPrepareProposal(): RequestPrepareProposal {
	return {
		max_tx_bytes: 0,
		txs: [],
		local_last_commit: undefined,
		byzantine_validators: [],
		height: 0,
		time: undefined,
		next_validators_hash: new Uint8Array(0),
		proposer_address: new Uint8Array(0)
	};
}

function createBaseRequestProcessProposal(): RequestProcessProposal {
	return {
		txs: [],
		proposed_last_commit: undefined,
		byzantine_validators: [],
		hash: new Uint8Array(0),
		height: 0,
		time: undefined,
		next_validators_hash: new Uint8Array(0),
		proposer_address: new Uint8Array(0)
	};
}

function createBaseRequestExtendVote(): RequestExtendVote {
	return { hash: new Uint8Array(0), height: 0 };
}

function createBaseRequestVerifyVoteExtension(): RequestVerifyVoteExtension {
	return {
		hash: new Uint8Array(0),
		validator_address: new Uint8Array(0),
		height: 0,
		vote_extension: new Uint8Array(0)
	};
}

function createBaseRequestFinalizeBlock(): RequestFinalizeBlock {
	return {
		txs: [],
		decided_last_commit: undefined,
		byzantine_validators: [],
		hash: new Uint8Array(0),
		height: 0,
		time: undefined,
		next_validators_hash: new Uint8Array(0),
		proposer_address: new Uint8Array(0)
	};
}

function createBaseResponse(): Response {
	return {
		exception: undefined,
		echo: undefined,
		flush: undefined,
		info: undefined,
		init_chain: undefined,
		query: undefined,
		check_tx: undefined,
		commit: undefined,
		list_snapshots: undefined,
		offer_snapshot: undefined,
		load_snapshot_chunk: undefined,
		apply_snapshot_chunk: undefined,
		prepare_proposal: undefined,
		process_proposal: undefined,
		extend_vote: undefined,
		verify_vote_extension: undefined,
		finalize_block: undefined
	};
}

function createBaseResponseException(): ResponseException {
	return { error: "" };
}

function createBaseResponseEcho(): ResponseEcho {
	return { message: "" };
}

function createBaseResponseFlush(): ResponseFlush {
	return {};
}

function createBaseResponseInfo(): ResponseInfo {
	return { data: "", version: "", app_version: 0, last_block_height: 0, last_block_app_hash: new Uint8Array(0) };
}

function createBaseResponseInitChain(): ResponseInitChain {
	return { consensus_params: undefined, validators: [], app_hash: new Uint8Array(0) };
}

function createBaseResponseQuery(): ResponseQuery {
	return {
		code: 0,
		log: "",
		info: "",
		index: 0,
		key: new Uint8Array(0),
		value: new Uint8Array(0),
		proof_ops: undefined,
		height: 0,
		codespace: ""
	};
}

function createBaseResponseCheckTx(): ResponseCheckTx {
	return { code: 0, data: new Uint8Array(0), gas_wanted: 0, codespace: "", sender: "", priority: 0 };
}

function createBaseResponseDeliverTx(): ResponseDeliverTx {
	return { code: 0, data: new Uint8Array(0), log: "", info: "", gas_wanted: 0, gas_used: 0, events: [], codespace: "" };
}

function createBaseResponseCommit(): ResponseCommit {
	return { retain_height: 0 };
}

function createBaseResponseListSnapshots(): ResponseListSnapshots {
	return { snapshots: [] };
}

function createBaseResponseOfferSnapshot(): ResponseOfferSnapshot {
	return { result: 0 };
}

function createBaseResponseLoadSnapshotChunk(): ResponseLoadSnapshotChunk {
	return { chunk: new Uint8Array(0) };
}

function createBaseResponseApplySnapshotChunk(): ResponseApplySnapshotChunk {
	return { result: 0, refetch_chunks: [], reject_senders: [] };
}

function createBaseResponsePrepareProposal(): ResponsePrepareProposal {
	return {
		tx_records: [],
		app_hash: new Uint8Array(0),
		tx_results: [],
		validator_updates: [],
		consensus_param_updates: undefined
	};
}

function createBaseResponseProcessProposal(): ResponseProcessProposal {
	return {
		status: 0,
		app_hash: new Uint8Array(0),
		tx_results: [],
		validator_updates: [],
		consensus_param_updates: undefined
	};
}

function createBaseResponseExtendVote(): ResponseExtendVote {
	return { vote_extension: new Uint8Array(0) };
}

function createBaseResponseVerifyVoteExtension(): ResponseVerifyVoteExtension {
	return { status: 0 };
}

function createBaseResponseFinalizeBlock(): ResponseFinalizeBlock {
	return {
		events: [],
		tx_results: [],
		validator_updates: [],
		consensus_param_updates: undefined,
		app_hash: new Uint8Array(0)
	};
}

function createBaseCommitInfo(): CommitInfo {
	return { round: 0, votes: [] };
}

function createBaseExtendedCommitInfo(): ExtendedCommitInfo {
	return { round: 0, votes: [] };
}

function createBaseEvent(): Event {
	return { type: "", attributes: [] };
}

function createBaseEventAttribute(): EventAttribute {
	return { key: "", value: "", index: false };
}

function createBaseExecTxResult(): ExecTxResult {
	return { code: 0, data: new Uint8Array(0), log: "", info: "", gas_wanted: 0, gas_used: 0, events: [], codespace: "" };
}

function createBaseTxResult(): TxResult {
	return { height: 0, index: 0, tx: new Uint8Array(0), result: undefined };
}

function createBaseTxRecord(): TxRecord {
	return { action: 0, tx: new Uint8Array(0) };
}

function createBaseValidator(): Validator {
	return { address: new Uint8Array(0), power: 0 };
}

function createBaseValidatorUpdate(): ValidatorUpdate {
	return { pub_key: undefined, power: 0 };
}

function createBaseVoteInfo(): VoteInfo {
	return { validator: undefined, signed_last_block: false };
}

function createBaseExtendedVoteInfo(): ExtendedVoteInfo {
	return { validator: undefined, signed_last_block: false, vote_extension: new Uint8Array(0) };
}

function createBaseMisbehavior(): Misbehavior {
	return { type: 0, validator: undefined, height: 0, time: undefined, total_voting_power: 0 };
}

function createBaseSnapshot(): Snapshot {
	return { height: 0, format: 0, chunks: 0, hash: new Uint8Array(0), metadata: new Uint8Array(0) };
}

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}

function toTimestamp(date: Date): Timestamp {
	const seconds = Math.trunc(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = (t.seconds || 0) * 1_000;
	millis += (t.nanos || 0) / 1_000_000;
	return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof globalThis.Date) {
		return o;
	} else if (typeof o === "string") {
		return new globalThis.Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/tendermint.abci.Request", Request as never],
	["/tendermint.abci.RequestEcho", RequestEcho as never],
	["/tendermint.abci.RequestFlush", RequestFlush as never],
	["/tendermint.abci.RequestInfo", RequestInfo as never],
	["/tendermint.abci.RequestInitChain", RequestInitChain as never],
	["/tendermint.abci.RequestQuery", RequestQuery as never],
	["/tendermint.abci.RequestCheckTx", RequestCheckTx as never],
	["/tendermint.abci.RequestCommit", RequestCommit as never],
	["/tendermint.abci.RequestListSnapshots", RequestListSnapshots as never],
	["/tendermint.abci.RequestOfferSnapshot", RequestOfferSnapshot as never],
	["/tendermint.abci.RequestLoadSnapshotChunk", RequestLoadSnapshotChunk as never],
	["/tendermint.abci.RequestApplySnapshotChunk", RequestApplySnapshotChunk as never],
	["/tendermint.abci.RequestPrepareProposal", RequestPrepareProposal as never],
	["/tendermint.abci.RequestProcessProposal", RequestProcessProposal as never],
	["/tendermint.abci.RequestExtendVote", RequestExtendVote as never],
	["/tendermint.abci.RequestVerifyVoteExtension", RequestVerifyVoteExtension as never],
	["/tendermint.abci.RequestFinalizeBlock", RequestFinalizeBlock as never],
	["/tendermint.abci.Response", Response as never],
	["/tendermint.abci.ResponseException", ResponseException as never],
	["/tendermint.abci.ResponseEcho", ResponseEcho as never],
	["/tendermint.abci.ResponseFlush", ResponseFlush as never],
	["/tendermint.abci.ResponseInfo", ResponseInfo as never],
	["/tendermint.abci.ResponseInitChain", ResponseInitChain as never],
	["/tendermint.abci.ResponseQuery", ResponseQuery as never],
	["/tendermint.abci.ResponseCheckTx", ResponseCheckTx as never],
	["/tendermint.abci.ResponseDeliverTx", ResponseDeliverTx as never],
	["/tendermint.abci.ResponseCommit", ResponseCommit as never],
	["/tendermint.abci.ResponseListSnapshots", ResponseListSnapshots as never],
	["/tendermint.abci.ResponseOfferSnapshot", ResponseOfferSnapshot as never],
	["/tendermint.abci.ResponseLoadSnapshotChunk", ResponseLoadSnapshotChunk as never],
	["/tendermint.abci.ResponseApplySnapshotChunk", ResponseApplySnapshotChunk as never],
	["/tendermint.abci.ResponsePrepareProposal", ResponsePrepareProposal as never],
	["/tendermint.abci.ResponseProcessProposal", ResponseProcessProposal as never],
	["/tendermint.abci.ResponseExtendVote", ResponseExtendVote as never],
	["/tendermint.abci.ResponseVerifyVoteExtension", ResponseVerifyVoteExtension as never],
	["/tendermint.abci.ResponseFinalizeBlock", ResponseFinalizeBlock as never],
	["/tendermint.abci.CommitInfo", CommitInfo as never],
	["/tendermint.abci.ExtendedCommitInfo", ExtendedCommitInfo as never],
	["/tendermint.abci.Event", Event as never],
	["/tendermint.abci.EventAttribute", EventAttribute as never],
	["/tendermint.abci.ExecTxResult", ExecTxResult as never],
	["/tendermint.abci.TxResult", TxResult as never],
	["/tendermint.abci.TxRecord", TxRecord as never],
	["/tendermint.abci.Validator", Validator as never],
	["/tendermint.abci.ValidatorUpdate", ValidatorUpdate as never],
	["/tendermint.abci.VoteInfo", VoteInfo as never],
	["/tendermint.abci.ExtendedVoteInfo", ExtendedVoteInfo as never],
	["/tendermint.abci.Misbehavior", Misbehavior as never],
	["/tendermint.abci.Snapshot", Snapshot as never]
];
export const aminoConverters = {
	"/tendermint.abci.Request": {
		aminoType: "tendermint.abci.Request",
		toAmino: (message: Request) => ({ ...message }),
		fromAmino: (object: Request) => ({ ...object })
	},

	"/tendermint.abci.RequestEcho": {
		aminoType: "tendermint.abci.RequestEcho",
		toAmino: (message: RequestEcho) => ({ ...message }),
		fromAmino: (object: RequestEcho) => ({ ...object })
	},

	"/tendermint.abci.RequestFlush": {
		aminoType: "tendermint.abci.RequestFlush",
		toAmino: (message: RequestFlush) => ({ ...message }),
		fromAmino: (object: RequestFlush) => ({ ...object })
	},

	"/tendermint.abci.RequestInfo": {
		aminoType: "tendermint.abci.RequestInfo",
		toAmino: (message: RequestInfo) => ({ ...message }),
		fromAmino: (object: RequestInfo) => ({ ...object })
	},

	"/tendermint.abci.RequestInitChain": {
		aminoType: "tendermint.abci.RequestInitChain",
		toAmino: (message: RequestInitChain) => ({ ...message }),
		fromAmino: (object: RequestInitChain) => ({ ...object })
	},

	"/tendermint.abci.RequestQuery": {
		aminoType: "tendermint.abci.RequestQuery",
		toAmino: (message: RequestQuery) => ({ ...message }),
		fromAmino: (object: RequestQuery) => ({ ...object })
	},

	"/tendermint.abci.RequestCheckTx": {
		aminoType: "tendermint.abci.RequestCheckTx",
		toAmino: (message: RequestCheckTx) => ({ ...message }),
		fromAmino: (object: RequestCheckTx) => ({ ...object })
	},

	"/tendermint.abci.RequestCommit": {
		aminoType: "tendermint.abci.RequestCommit",
		toAmino: (message: RequestCommit) => ({ ...message }),
		fromAmino: (object: RequestCommit) => ({ ...object })
	},

	"/tendermint.abci.RequestListSnapshots": {
		aminoType: "tendermint.abci.RequestListSnapshots",
		toAmino: (message: RequestListSnapshots) => ({ ...message }),
		fromAmino: (object: RequestListSnapshots) => ({ ...object })
	},

	"/tendermint.abci.RequestOfferSnapshot": {
		aminoType: "tendermint.abci.RequestOfferSnapshot",
		toAmino: (message: RequestOfferSnapshot) => ({ ...message }),
		fromAmino: (object: RequestOfferSnapshot) => ({ ...object })
	},

	"/tendermint.abci.RequestLoadSnapshotChunk": {
		aminoType: "tendermint.abci.RequestLoadSnapshotChunk",
		toAmino: (message: RequestLoadSnapshotChunk) => ({ ...message }),
		fromAmino: (object: RequestLoadSnapshotChunk) => ({ ...object })
	},

	"/tendermint.abci.RequestApplySnapshotChunk": {
		aminoType: "tendermint.abci.RequestApplySnapshotChunk",
		toAmino: (message: RequestApplySnapshotChunk) => ({ ...message }),
		fromAmino: (object: RequestApplySnapshotChunk) => ({ ...object })
	},

	"/tendermint.abci.RequestPrepareProposal": {
		aminoType: "tendermint.abci.RequestPrepareProposal",
		toAmino: (message: RequestPrepareProposal) => ({ ...message }),
		fromAmino: (object: RequestPrepareProposal) => ({ ...object })
	},

	"/tendermint.abci.RequestProcessProposal": {
		aminoType: "tendermint.abci.RequestProcessProposal",
		toAmino: (message: RequestProcessProposal) => ({ ...message }),
		fromAmino: (object: RequestProcessProposal) => ({ ...object })
	},

	"/tendermint.abci.RequestExtendVote": {
		aminoType: "tendermint.abci.RequestExtendVote",
		toAmino: (message: RequestExtendVote) => ({ ...message }),
		fromAmino: (object: RequestExtendVote) => ({ ...object })
	},

	"/tendermint.abci.RequestVerifyVoteExtension": {
		aminoType: "tendermint.abci.RequestVerifyVoteExtension",
		toAmino: (message: RequestVerifyVoteExtension) => ({ ...message }),
		fromAmino: (object: RequestVerifyVoteExtension) => ({ ...object })
	},

	"/tendermint.abci.RequestFinalizeBlock": {
		aminoType: "tendermint.abci.RequestFinalizeBlock",
		toAmino: (message: RequestFinalizeBlock) => ({ ...message }),
		fromAmino: (object: RequestFinalizeBlock) => ({ ...object })
	},

	"/tendermint.abci.Response": {
		aminoType: "tendermint.abci.Response",
		toAmino: (message: Response) => ({ ...message }),
		fromAmino: (object: Response) => ({ ...object })
	},

	"/tendermint.abci.ResponseException": {
		aminoType: "tendermint.abci.ResponseException",
		toAmino: (message: ResponseException) => ({ ...message }),
		fromAmino: (object: ResponseException) => ({ ...object })
	},

	"/tendermint.abci.ResponseEcho": {
		aminoType: "tendermint.abci.ResponseEcho",
		toAmino: (message: ResponseEcho) => ({ ...message }),
		fromAmino: (object: ResponseEcho) => ({ ...object })
	},

	"/tendermint.abci.ResponseFlush": {
		aminoType: "tendermint.abci.ResponseFlush",
		toAmino: (message: ResponseFlush) => ({ ...message }),
		fromAmino: (object: ResponseFlush) => ({ ...object })
	},

	"/tendermint.abci.ResponseInfo": {
		aminoType: "tendermint.abci.ResponseInfo",
		toAmino: (message: ResponseInfo) => ({ ...message }),
		fromAmino: (object: ResponseInfo) => ({ ...object })
	},

	"/tendermint.abci.ResponseInitChain": {
		aminoType: "tendermint.abci.ResponseInitChain",
		toAmino: (message: ResponseInitChain) => ({ ...message }),
		fromAmino: (object: ResponseInitChain) => ({ ...object })
	},

	"/tendermint.abci.ResponseQuery": {
		aminoType: "tendermint.abci.ResponseQuery",
		toAmino: (message: ResponseQuery) => ({ ...message }),
		fromAmino: (object: ResponseQuery) => ({ ...object })
	},

	"/tendermint.abci.ResponseCheckTx": {
		aminoType: "tendermint.abci.ResponseCheckTx",
		toAmino: (message: ResponseCheckTx) => ({ ...message }),
		fromAmino: (object: ResponseCheckTx) => ({ ...object })
	},

	"/tendermint.abci.ResponseDeliverTx": {
		aminoType: "tendermint.abci.ResponseDeliverTx",
		toAmino: (message: ResponseDeliverTx) => ({ ...message }),
		fromAmino: (object: ResponseDeliverTx) => ({ ...object })
	},

	"/tendermint.abci.ResponseCommit": {
		aminoType: "tendermint.abci.ResponseCommit",
		toAmino: (message: ResponseCommit) => ({ ...message }),
		fromAmino: (object: ResponseCommit) => ({ ...object })
	},

	"/tendermint.abci.ResponseListSnapshots": {
		aminoType: "tendermint.abci.ResponseListSnapshots",
		toAmino: (message: ResponseListSnapshots) => ({ ...message }),
		fromAmino: (object: ResponseListSnapshots) => ({ ...object })
	},

	"/tendermint.abci.ResponseOfferSnapshot": {
		aminoType: "tendermint.abci.ResponseOfferSnapshot",
		toAmino: (message: ResponseOfferSnapshot) => ({ ...message }),
		fromAmino: (object: ResponseOfferSnapshot) => ({ ...object })
	},

	"/tendermint.abci.ResponseLoadSnapshotChunk": {
		aminoType: "tendermint.abci.ResponseLoadSnapshotChunk",
		toAmino: (message: ResponseLoadSnapshotChunk) => ({ ...message }),
		fromAmino: (object: ResponseLoadSnapshotChunk) => ({ ...object })
	},

	"/tendermint.abci.ResponseApplySnapshotChunk": {
		aminoType: "tendermint.abci.ResponseApplySnapshotChunk",
		toAmino: (message: ResponseApplySnapshotChunk) => ({ ...message }),
		fromAmino: (object: ResponseApplySnapshotChunk) => ({ ...object })
	},

	"/tendermint.abci.ResponsePrepareProposal": {
		aminoType: "tendermint.abci.ResponsePrepareProposal",
		toAmino: (message: ResponsePrepareProposal) => ({ ...message }),
		fromAmino: (object: ResponsePrepareProposal) => ({ ...object })
	},

	"/tendermint.abci.ResponseProcessProposal": {
		aminoType: "tendermint.abci.ResponseProcessProposal",
		toAmino: (message: ResponseProcessProposal) => ({ ...message }),
		fromAmino: (object: ResponseProcessProposal) => ({ ...object })
	},

	"/tendermint.abci.ResponseExtendVote": {
		aminoType: "tendermint.abci.ResponseExtendVote",
		toAmino: (message: ResponseExtendVote) => ({ ...message }),
		fromAmino: (object: ResponseExtendVote) => ({ ...object })
	},

	"/tendermint.abci.ResponseVerifyVoteExtension": {
		aminoType: "tendermint.abci.ResponseVerifyVoteExtension",
		toAmino: (message: ResponseVerifyVoteExtension) => ({ ...message }),
		fromAmino: (object: ResponseVerifyVoteExtension) => ({ ...object })
	},

	"/tendermint.abci.ResponseFinalizeBlock": {
		aminoType: "tendermint.abci.ResponseFinalizeBlock",
		toAmino: (message: ResponseFinalizeBlock) => ({ ...message }),
		fromAmino: (object: ResponseFinalizeBlock) => ({ ...object })
	},

	"/tendermint.abci.CommitInfo": {
		aminoType: "tendermint.abci.CommitInfo",
		toAmino: (message: CommitInfo) => ({ ...message }),
		fromAmino: (object: CommitInfo) => ({ ...object })
	},

	"/tendermint.abci.ExtendedCommitInfo": {
		aminoType: "tendermint.abci.ExtendedCommitInfo",
		toAmino: (message: ExtendedCommitInfo) => ({ ...message }),
		fromAmino: (object: ExtendedCommitInfo) => ({ ...object })
	},

	"/tendermint.abci.Event": {
		aminoType: "tendermint.abci.Event",
		toAmino: (message: Event) => ({ ...message }),
		fromAmino: (object: Event) => ({ ...object })
	},

	"/tendermint.abci.EventAttribute": {
		aminoType: "tendermint.abci.EventAttribute",
		toAmino: (message: EventAttribute) => ({ ...message }),
		fromAmino: (object: EventAttribute) => ({ ...object })
	},

	"/tendermint.abci.ExecTxResult": {
		aminoType: "tendermint.abci.ExecTxResult",
		toAmino: (message: ExecTxResult) => ({ ...message }),
		fromAmino: (object: ExecTxResult) => ({ ...object })
	},

	"/tendermint.abci.TxResult": {
		aminoType: "tendermint.abci.TxResult",
		toAmino: (message: TxResult) => ({ ...message }),
		fromAmino: (object: TxResult) => ({ ...object })
	},

	"/tendermint.abci.TxRecord": {
		aminoType: "tendermint.abci.TxRecord",
		toAmino: (message: TxRecord) => ({ ...message }),
		fromAmino: (object: TxRecord) => ({ ...object })
	},

	"/tendermint.abci.Validator": {
		aminoType: "tendermint.abci.Validator",
		toAmino: (message: Validator) => ({ ...message }),
		fromAmino: (object: Validator) => ({ ...object })
	},

	"/tendermint.abci.ValidatorUpdate": {
		aminoType: "tendermint.abci.ValidatorUpdate",
		toAmino: (message: ValidatorUpdate) => ({ ...message }),
		fromAmino: (object: ValidatorUpdate) => ({ ...object })
	},

	"/tendermint.abci.VoteInfo": {
		aminoType: "tendermint.abci.VoteInfo",
		toAmino: (message: VoteInfo) => ({ ...message }),
		fromAmino: (object: VoteInfo) => ({ ...object })
	},

	"/tendermint.abci.ExtendedVoteInfo": {
		aminoType: "tendermint.abci.ExtendedVoteInfo",
		toAmino: (message: ExtendedVoteInfo) => ({ ...message }),
		fromAmino: (object: ExtendedVoteInfo) => ({ ...object })
	},

	"/tendermint.abci.Misbehavior": {
		aminoType: "tendermint.abci.Misbehavior",
		toAmino: (message: Misbehavior) => ({ ...message }),
		fromAmino: (object: Misbehavior) => ({ ...object })
	},

	"/tendermint.abci.Snapshot": {
		aminoType: "tendermint.abci.Snapshot",
		toAmino: (message: Snapshot) => ({ ...message }),
		fromAmino: (object: Snapshot) => ({ ...object })
	}
};
