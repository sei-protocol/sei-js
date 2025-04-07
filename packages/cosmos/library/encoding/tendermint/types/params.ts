import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Duration } from "../../google/protobuf/duration";

import type {
	ABCIParams as ABCIParams_type,
	BlockParams as BlockParams_type,
	ConsensusParams as ConsensusParams_type,
	EvidenceParams as EvidenceParams_type,
	HashedParams as HashedParams_type,
	SynchronyParams as SynchronyParams_type,
	TimeoutParams as TimeoutParams_type,
	ValidatorParams as ValidatorParams_type,
	VersionParams as VersionParams_type
} from "../../../types/tendermint/types";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface ConsensusParams extends ConsensusParams_type {}
export interface BlockParams extends BlockParams_type {}
export interface EvidenceParams extends EvidenceParams_type {}
export interface ValidatorParams extends ValidatorParams_type {}
export interface VersionParams extends VersionParams_type {}
export interface HashedParams extends HashedParams_type {}
export interface SynchronyParams extends SynchronyParams_type {}
export interface TimeoutParams extends TimeoutParams_type {}
export interface ABCIParams extends ABCIParams_type {}

export const ConsensusParams: MessageFns<ConsensusParams, "tendermint.types.ConsensusParams"> = {
	$type: "tendermint.types.ConsensusParams" as const,

	encode(message: ConsensusParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.block !== undefined) {
			BlockParams.encode(message.block, writer.uint32(10).fork()).join();
		}
		if (message.evidence !== undefined) {
			EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).join();
		}
		if (message.validator !== undefined) {
			ValidatorParams.encode(message.validator, writer.uint32(26).fork()).join();
		}
		if (message.version !== undefined) {
			VersionParams.encode(message.version, writer.uint32(34).fork()).join();
		}
		if (message.synchrony !== undefined) {
			SynchronyParams.encode(message.synchrony, writer.uint32(42).fork()).join();
		}
		if (message.timeout !== undefined) {
			TimeoutParams.encode(message.timeout, writer.uint32(50).fork()).join();
		}
		if (message.abci !== undefined) {
			ABCIParams.encode(message.abci, writer.uint32(58).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ConsensusParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseConsensusParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.block = BlockParams.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.evidence = EvidenceParams.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.validator = ValidatorParams.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.version = VersionParams.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.synchrony = SynchronyParams.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.timeout = TimeoutParams.decode(reader, reader.uint32());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.abci = ABCIParams.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ConsensusParams {
		return {
			block: isSet(object.block) ? BlockParams.fromJSON(object.block) : undefined,
			evidence: isSet(object.evidence) ? EvidenceParams.fromJSON(object.evidence) : undefined,
			validator: isSet(object.validator) ? ValidatorParams.fromJSON(object.validator) : undefined,
			version: isSet(object.version) ? VersionParams.fromJSON(object.version) : undefined,
			synchrony: isSet(object.synchrony) ? SynchronyParams.fromJSON(object.synchrony) : undefined,
			timeout: isSet(object.timeout) ? TimeoutParams.fromJSON(object.timeout) : undefined,
			abci: isSet(object.abci) ? ABCIParams.fromJSON(object.abci) : undefined
		};
	},

	toJSON(message: ConsensusParams): unknown {
		const obj: any = {};
		if (message.block !== undefined) {
			obj.block = BlockParams.toJSON(message.block);
		}
		if (message.evidence !== undefined) {
			obj.evidence = EvidenceParams.toJSON(message.evidence);
		}
		if (message.validator !== undefined) {
			obj.validator = ValidatorParams.toJSON(message.validator);
		}
		if (message.version !== undefined) {
			obj.version = VersionParams.toJSON(message.version);
		}
		if (message.synchrony !== undefined) {
			obj.synchrony = SynchronyParams.toJSON(message.synchrony);
		}
		if (message.timeout !== undefined) {
			obj.timeout = TimeoutParams.toJSON(message.timeout);
		}
		if (message.abci !== undefined) {
			obj.abci = ABCIParams.toJSON(message.abci);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ConsensusParams>, I>>(base?: I): ConsensusParams {
		return ConsensusParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ConsensusParams>, I>>(object: I): ConsensusParams {
		const message = createBaseConsensusParams();
		message.block = object.block !== undefined && object.block !== null ? BlockParams.fromPartial(object.block) : undefined;
		message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceParams.fromPartial(object.evidence) : undefined;
		message.validator = object.validator !== undefined && object.validator !== null ? ValidatorParams.fromPartial(object.validator) : undefined;
		message.version = object.version !== undefined && object.version !== null ? VersionParams.fromPartial(object.version) : undefined;
		message.synchrony = object.synchrony !== undefined && object.synchrony !== null ? SynchronyParams.fromPartial(object.synchrony) : undefined;
		message.timeout = object.timeout !== undefined && object.timeout !== null ? TimeoutParams.fromPartial(object.timeout) : undefined;
		message.abci = object.abci !== undefined && object.abci !== null ? ABCIParams.fromPartial(object.abci) : undefined;
		return message;
	}
};

export const BlockParams: MessageFns<BlockParams, "tendermint.types.BlockParams"> = {
	$type: "tendermint.types.BlockParams" as const,

	encode(message: BlockParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.max_bytes !== 0) {
			writer.uint32(8).int64(message.max_bytes);
		}
		if (message.max_gas !== 0) {
			writer.uint32(16).int64(message.max_gas);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BlockParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBlockParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.max_bytes = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.max_gas = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BlockParams {
		return {
			max_bytes: isSet(object.max_bytes) ? globalThis.Number(object.max_bytes) : 0,
			max_gas: isSet(object.max_gas) ? globalThis.Number(object.max_gas) : 0
		};
	},

	toJSON(message: BlockParams): unknown {
		const obj: any = {};
		if (message.max_bytes !== 0) {
			obj.max_bytes = Math.round(message.max_bytes);
		}
		if (message.max_gas !== 0) {
			obj.max_gas = Math.round(message.max_gas);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BlockParams>, I>>(base?: I): BlockParams {
		return BlockParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BlockParams>, I>>(object: I): BlockParams {
		const message = createBaseBlockParams();
		message.max_bytes = object.max_bytes ?? 0;
		message.max_gas = object.max_gas ?? 0;
		return message;
	}
};

export const EvidenceParams: MessageFns<EvidenceParams, "tendermint.types.EvidenceParams"> = {
	$type: "tendermint.types.EvidenceParams" as const,

	encode(message: EvidenceParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.max_age_num_blocks !== 0) {
			writer.uint32(8).int64(message.max_age_num_blocks);
		}
		if (message.max_age_duration !== undefined) {
			Duration.encode(message.max_age_duration, writer.uint32(18).fork()).join();
		}
		if (message.max_bytes !== 0) {
			writer.uint32(24).int64(message.max_bytes);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EvidenceParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEvidenceParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.max_age_num_blocks = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.max_age_duration = Duration.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.max_bytes = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EvidenceParams {
		return {
			max_age_num_blocks: isSet(object.max_age_num_blocks) ? globalThis.Number(object.max_age_num_blocks) : 0,
			max_age_duration: isSet(object.max_age_duration) ? Duration.fromJSON(object.max_age_duration) : undefined,
			max_bytes: isSet(object.max_bytes) ? globalThis.Number(object.max_bytes) : 0
		};
	},

	toJSON(message: EvidenceParams): unknown {
		const obj: any = {};
		if (message.max_age_num_blocks !== 0) {
			obj.max_age_num_blocks = Math.round(message.max_age_num_blocks);
		}
		if (message.max_age_duration !== undefined) {
			obj.max_age_duration = Duration.toJSON(message.max_age_duration);
		}
		if (message.max_bytes !== 0) {
			obj.max_bytes = Math.round(message.max_bytes);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EvidenceParams>, I>>(base?: I): EvidenceParams {
		return EvidenceParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EvidenceParams>, I>>(object: I): EvidenceParams {
		const message = createBaseEvidenceParams();
		message.max_age_num_blocks = object.max_age_num_blocks ?? 0;
		message.max_age_duration =
			object.max_age_duration !== undefined && object.max_age_duration !== null ? Duration.fromPartial(object.max_age_duration) : undefined;
		message.max_bytes = object.max_bytes ?? 0;
		return message;
	}
};

export const ValidatorParams: MessageFns<ValidatorParams, "tendermint.types.ValidatorParams"> = {
	$type: "tendermint.types.ValidatorParams" as const,

	encode(message: ValidatorParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.pub_key_types) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pub_key_types.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorParams {
		return {
			pub_key_types: globalThis.Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: ValidatorParams): unknown {
		const obj: any = {};
		if (message.pub_key_types?.length) {
			obj.pub_key_types = message.pub_key_types;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorParams>, I>>(base?: I): ValidatorParams {
		return ValidatorParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorParams>, I>>(object: I): ValidatorParams {
		const message = createBaseValidatorParams();
		message.pub_key_types = object.pub_key_types?.map((e) => e) || [];
		return message;
	}
};

export const VersionParams: MessageFns<VersionParams, "tendermint.types.VersionParams"> = {
	$type: "tendermint.types.VersionParams" as const,

	encode(message: VersionParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.app_version !== 0) {
			writer.uint32(8).uint64(message.app_version);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): VersionParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVersionParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.app_version = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): VersionParams {
		return { app_version: isSet(object.app_version) ? globalThis.Number(object.app_version) : 0 };
	},

	toJSON(message: VersionParams): unknown {
		const obj: any = {};
		if (message.app_version !== 0) {
			obj.app_version = Math.round(message.app_version);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<VersionParams>, I>>(base?: I): VersionParams {
		return VersionParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<VersionParams>, I>>(object: I): VersionParams {
		const message = createBaseVersionParams();
		message.app_version = object.app_version ?? 0;
		return message;
	}
};

export const HashedParams: MessageFns<HashedParams, "tendermint.types.HashedParams"> = {
	$type: "tendermint.types.HashedParams" as const,

	encode(message: HashedParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.block_max_bytes !== 0) {
			writer.uint32(8).int64(message.block_max_bytes);
		}
		if (message.block_max_gas !== 0) {
			writer.uint32(16).int64(message.block_max_gas);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): HashedParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseHashedParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.block_max_bytes = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.block_max_gas = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): HashedParams {
		return {
			block_max_bytes: isSet(object.block_max_bytes) ? globalThis.Number(object.block_max_bytes) : 0,
			block_max_gas: isSet(object.block_max_gas) ? globalThis.Number(object.block_max_gas) : 0
		};
	},

	toJSON(message: HashedParams): unknown {
		const obj: any = {};
		if (message.block_max_bytes !== 0) {
			obj.block_max_bytes = Math.round(message.block_max_bytes);
		}
		if (message.block_max_gas !== 0) {
			obj.block_max_gas = Math.round(message.block_max_gas);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<HashedParams>, I>>(base?: I): HashedParams {
		return HashedParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<HashedParams>, I>>(object: I): HashedParams {
		const message = createBaseHashedParams();
		message.block_max_bytes = object.block_max_bytes ?? 0;
		message.block_max_gas = object.block_max_gas ?? 0;
		return message;
	}
};

export const SynchronyParams: MessageFns<SynchronyParams, "tendermint.types.SynchronyParams"> = {
	$type: "tendermint.types.SynchronyParams" as const,

	encode(message: SynchronyParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.message_delay !== undefined) {
			Duration.encode(message.message_delay, writer.uint32(10).fork()).join();
		}
		if (message.precision !== undefined) {
			Duration.encode(message.precision, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SynchronyParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSynchronyParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.message_delay = Duration.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.precision = Duration.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SynchronyParams {
		return {
			message_delay: isSet(object.message_delay) ? Duration.fromJSON(object.message_delay) : undefined,
			precision: isSet(object.precision) ? Duration.fromJSON(object.precision) : undefined
		};
	},

	toJSON(message: SynchronyParams): unknown {
		const obj: any = {};
		if (message.message_delay !== undefined) {
			obj.message_delay = Duration.toJSON(message.message_delay);
		}
		if (message.precision !== undefined) {
			obj.precision = Duration.toJSON(message.precision);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SynchronyParams>, I>>(base?: I): SynchronyParams {
		return SynchronyParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SynchronyParams>, I>>(object: I): SynchronyParams {
		const message = createBaseSynchronyParams();
		message.message_delay = object.message_delay !== undefined && object.message_delay !== null ? Duration.fromPartial(object.message_delay) : undefined;
		message.precision = object.precision !== undefined && object.precision !== null ? Duration.fromPartial(object.precision) : undefined;
		return message;
	}
};

export const TimeoutParams: MessageFns<TimeoutParams, "tendermint.types.TimeoutParams"> = {
	$type: "tendermint.types.TimeoutParams" as const,

	encode(message: TimeoutParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.propose !== undefined) {
			Duration.encode(message.propose, writer.uint32(10).fork()).join();
		}
		if (message.propose_delta !== undefined) {
			Duration.encode(message.propose_delta, writer.uint32(18).fork()).join();
		}
		if (message.vote !== undefined) {
			Duration.encode(message.vote, writer.uint32(26).fork()).join();
		}
		if (message.vote_delta !== undefined) {
			Duration.encode(message.vote_delta, writer.uint32(34).fork()).join();
		}
		if (message.commit !== undefined) {
			Duration.encode(message.commit, writer.uint32(42).fork()).join();
		}
		if (message.bypass_commit_timeout !== false) {
			writer.uint32(48).bool(message.bypass_commit_timeout);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TimeoutParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTimeoutParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.propose = Duration.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.propose_delta = Duration.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.vote = Duration.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.vote_delta = Duration.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.commit = Duration.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.bypass_commit_timeout = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TimeoutParams {
		return {
			propose: isSet(object.propose) ? Duration.fromJSON(object.propose) : undefined,
			propose_delta: isSet(object.propose_delta) ? Duration.fromJSON(object.propose_delta) : undefined,
			vote: isSet(object.vote) ? Duration.fromJSON(object.vote) : undefined,
			vote_delta: isSet(object.vote_delta) ? Duration.fromJSON(object.vote_delta) : undefined,
			commit: isSet(object.commit) ? Duration.fromJSON(object.commit) : undefined,
			bypass_commit_timeout: isSet(object.bypass_commit_timeout) ? globalThis.Boolean(object.bypass_commit_timeout) : false
		};
	},

	toJSON(message: TimeoutParams): unknown {
		const obj: any = {};
		if (message.propose !== undefined) {
			obj.propose = Duration.toJSON(message.propose);
		}
		if (message.propose_delta !== undefined) {
			obj.propose_delta = Duration.toJSON(message.propose_delta);
		}
		if (message.vote !== undefined) {
			obj.vote = Duration.toJSON(message.vote);
		}
		if (message.vote_delta !== undefined) {
			obj.vote_delta = Duration.toJSON(message.vote_delta);
		}
		if (message.commit !== undefined) {
			obj.commit = Duration.toJSON(message.commit);
		}
		if (message.bypass_commit_timeout !== false) {
			obj.bypass_commit_timeout = message.bypass_commit_timeout;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TimeoutParams>, I>>(base?: I): TimeoutParams {
		return TimeoutParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TimeoutParams>, I>>(object: I): TimeoutParams {
		const message = createBaseTimeoutParams();
		message.propose = object.propose !== undefined && object.propose !== null ? Duration.fromPartial(object.propose) : undefined;
		message.propose_delta = object.propose_delta !== undefined && object.propose_delta !== null ? Duration.fromPartial(object.propose_delta) : undefined;
		message.vote = object.vote !== undefined && object.vote !== null ? Duration.fromPartial(object.vote) : undefined;
		message.vote_delta = object.vote_delta !== undefined && object.vote_delta !== null ? Duration.fromPartial(object.vote_delta) : undefined;
		message.commit = object.commit !== undefined && object.commit !== null ? Duration.fromPartial(object.commit) : undefined;
		message.bypass_commit_timeout = object.bypass_commit_timeout ?? false;
		return message;
	}
};

export const ABCIParams: MessageFns<ABCIParams, "tendermint.types.ABCIParams"> = {
	$type: "tendermint.types.ABCIParams" as const,

	encode(message: ABCIParams, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.vote_extensions_enable_height !== 0) {
			writer.uint32(8).int64(message.vote_extensions_enable_height);
		}
		if (message.recheck_tx !== false) {
			writer.uint32(16).bool(message.recheck_tx);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ABCIParams {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseABCIParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.vote_extensions_enable_height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.recheck_tx = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ABCIParams {
		return {
			vote_extensions_enable_height: isSet(object.vote_extensions_enable_height) ? globalThis.Number(object.vote_extensions_enable_height) : 0,
			recheck_tx: isSet(object.recheck_tx) ? globalThis.Boolean(object.recheck_tx) : false
		};
	},

	toJSON(message: ABCIParams): unknown {
		const obj: any = {};
		if (message.vote_extensions_enable_height !== 0) {
			obj.vote_extensions_enable_height = Math.round(message.vote_extensions_enable_height);
		}
		if (message.recheck_tx !== false) {
			obj.recheck_tx = message.recheck_tx;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ABCIParams>, I>>(base?: I): ABCIParams {
		return ABCIParams.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ABCIParams>, I>>(object: I): ABCIParams {
		const message = createBaseABCIParams();
		message.vote_extensions_enable_height = object.vote_extensions_enable_height ?? 0;
		message.recheck_tx = object.recheck_tx ?? false;
		return message;
	}
};

function createBaseConsensusParams(): ConsensusParams {
	return {
		block: undefined,
		evidence: undefined,
		validator: undefined,
		version: undefined,
		synchrony: undefined,
		timeout: undefined,
		abci: undefined
	};
}

function createBaseBlockParams(): BlockParams {
	return { max_bytes: 0, max_gas: 0 };
}

function createBaseEvidenceParams(): EvidenceParams {
	return { max_age_num_blocks: 0, max_age_duration: undefined, max_bytes: 0 };
}

function createBaseValidatorParams(): ValidatorParams {
	return { pub_key_types: [] };
}

function createBaseVersionParams(): VersionParams {
	return { app_version: 0 };
}

function createBaseHashedParams(): HashedParams {
	return { block_max_bytes: 0, block_max_gas: 0 };
}

function createBaseSynchronyParams(): SynchronyParams {
	return { message_delay: undefined, precision: undefined };
}

function createBaseTimeoutParams(): TimeoutParams {
	return {
		propose: undefined,
		propose_delta: undefined,
		vote: undefined,
		vote_delta: undefined,
		commit: undefined,
		bypass_commit_timeout: false
	};
}

function createBaseABCIParams(): ABCIParams {
	return { vote_extensions_enable_height: 0, recheck_tx: false };
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
	["/tendermint.types.ConsensusParams", ConsensusParams as never],
	["/tendermint.types.BlockParams", BlockParams as never],
	["/tendermint.types.EvidenceParams", EvidenceParams as never],
	["/tendermint.types.ValidatorParams", ValidatorParams as never],
	["/tendermint.types.VersionParams", VersionParams as never],
	["/tendermint.types.HashedParams", HashedParams as never],
	["/tendermint.types.SynchronyParams", SynchronyParams as never],
	["/tendermint.types.TimeoutParams", TimeoutParams as never],
	["/tendermint.types.ABCIParams", ABCIParams as never]
];
export const aminoConverters = {
	"/tendermint.types.ConsensusParams": {
		aminoType: "tendermint.types.ConsensusParams",
		toAmino: (message: ConsensusParams) => ({ ...message }),
		fromAmino: (object: ConsensusParams) => ({ ...object })
	},

	"/tendermint.types.BlockParams": {
		aminoType: "tendermint.types.BlockParams",
		toAmino: (message: BlockParams) => ({ ...message }),
		fromAmino: (object: BlockParams) => ({ ...object })
	},

	"/tendermint.types.EvidenceParams": {
		aminoType: "tendermint.types.EvidenceParams",
		toAmino: (message: EvidenceParams) => ({ ...message }),
		fromAmino: (object: EvidenceParams) => ({ ...object })
	},

	"/tendermint.types.ValidatorParams": {
		aminoType: "tendermint.types.ValidatorParams",
		toAmino: (message: ValidatorParams) => ({ ...message }),
		fromAmino: (object: ValidatorParams) => ({ ...object })
	},

	"/tendermint.types.VersionParams": {
		aminoType: "tendermint.types.VersionParams",
		toAmino: (message: VersionParams) => ({ ...message }),
		fromAmino: (object: VersionParams) => ({ ...object })
	},

	"/tendermint.types.HashedParams": {
		aminoType: "tendermint.types.HashedParams",
		toAmino: (message: HashedParams) => ({ ...message }),
		fromAmino: (object: HashedParams) => ({ ...object })
	},

	"/tendermint.types.SynchronyParams": {
		aminoType: "tendermint.types.SynchronyParams",
		toAmino: (message: SynchronyParams) => ({ ...message }),
		fromAmino: (object: SynchronyParams) => ({ ...object })
	},

	"/tendermint.types.TimeoutParams": {
		aminoType: "tendermint.types.TimeoutParams",
		toAmino: (message: TimeoutParams) => ({ ...message }),
		fromAmino: (object: TimeoutParams) => ({ ...object })
	},

	"/tendermint.types.ABCIParams": {
		aminoType: "tendermint.types.ABCIParams",
		toAmino: (message: ABCIParams) => ({ ...message }),
		fromAmino: (object: ABCIParams) => ({ ...object })
	}
};
