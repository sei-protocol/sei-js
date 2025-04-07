import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin, DecCoin } from "../../base/v1beta1/coin";

import type {
	CommunityPoolSpendProposalWithDeposit as CommunityPoolSpendProposalWithDeposit_type,
	CommunityPoolSpendProposal as CommunityPoolSpendProposal_type,
	DelegationDelegatorReward as DelegationDelegatorReward_type,
	DelegatorStartingInfo as DelegatorStartingInfo_type,
	FeePool as FeePool_type,
	Params as Params_type,
	ValidatorAccumulatedCommission as ValidatorAccumulatedCommission_type,
	ValidatorCurrentRewards as ValidatorCurrentRewards_type,
	ValidatorHistoricalRewards as ValidatorHistoricalRewards_type,
	ValidatorOutstandingRewards as ValidatorOutstandingRewards_type,
	ValidatorSlashEvent as ValidatorSlashEvent_type,
	ValidatorSlashEvents as ValidatorSlashEvents_type
} from "../../../../types/cosmos/distribution/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface Params extends Params_type {}
export interface ValidatorHistoricalRewards extends ValidatorHistoricalRewards_type {}
export interface ValidatorCurrentRewards extends ValidatorCurrentRewards_type {}
export interface ValidatorAccumulatedCommission extends ValidatorAccumulatedCommission_type {}
export interface ValidatorOutstandingRewards extends ValidatorOutstandingRewards_type {}
export interface ValidatorSlashEvent extends ValidatorSlashEvent_type {}
export interface ValidatorSlashEvents extends ValidatorSlashEvents_type {}
export interface FeePool extends FeePool_type {}
export interface CommunityPoolSpendProposal extends CommunityPoolSpendProposal_type {}
export interface DelegatorStartingInfo extends DelegatorStartingInfo_type {}
export interface DelegationDelegatorReward extends DelegationDelegatorReward_type {}
export interface CommunityPoolSpendProposalWithDeposit extends CommunityPoolSpendProposalWithDeposit_type {}

export const Params: MessageFns<Params, "cosmos.distribution.v1beta1.Params"> = {
	$type: "cosmos.distribution.v1beta1.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.community_tax !== "") {
			writer.uint32(10).string(message.community_tax);
		}
		if (message.base_proposer_reward !== "") {
			writer.uint32(18).string(message.base_proposer_reward);
		}
		if (message.bonus_proposer_reward !== "") {
			writer.uint32(26).string(message.bonus_proposer_reward);
		}
		if (message.withdraw_addr_enabled !== false) {
			writer.uint32(32).bool(message.withdraw_addr_enabled);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.community_tax = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.base_proposer_reward = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.bonus_proposer_reward = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.withdraw_addr_enabled = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Params {
		return {
			community_tax: isSet(object.community_tax) ? globalThis.String(object.community_tax) : "",
			base_proposer_reward: isSet(object.base_proposer_reward) ? globalThis.String(object.base_proposer_reward) : "",
			bonus_proposer_reward: isSet(object.bonus_proposer_reward) ? globalThis.String(object.bonus_proposer_reward) : "",
			withdraw_addr_enabled: isSet(object.withdraw_addr_enabled) ? globalThis.Boolean(object.withdraw_addr_enabled) : false
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.community_tax !== "") {
			obj.community_tax = message.community_tax;
		}
		if (message.base_proposer_reward !== "") {
			obj.base_proposer_reward = message.base_proposer_reward;
		}
		if (message.bonus_proposer_reward !== "") {
			obj.bonus_proposer_reward = message.bonus_proposer_reward;
		}
		if (message.withdraw_addr_enabled !== false) {
			obj.withdraw_addr_enabled = message.withdraw_addr_enabled;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.community_tax = object.community_tax ?? "";
		message.base_proposer_reward = object.base_proposer_reward ?? "";
		message.bonus_proposer_reward = object.bonus_proposer_reward ?? "";
		message.withdraw_addr_enabled = object.withdraw_addr_enabled ?? false;
		return message;
	}
};

export const ValidatorHistoricalRewards: MessageFns<ValidatorHistoricalRewards, "cosmos.distribution.v1beta1.ValidatorHistoricalRewards"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorHistoricalRewards" as const,

	encode(message: ValidatorHistoricalRewards, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.cumulative_reward_ratio) {
			DecCoin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.reference_count !== 0) {
			writer.uint32(16).uint32(message.reference_count);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorHistoricalRewards {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorHistoricalRewards();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.cumulative_reward_ratio.push(DecCoin.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.reference_count = reader.uint32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorHistoricalRewards {
		return {
			cumulative_reward_ratio: globalThis.Array.isArray(object?.cumulative_reward_ratio)
				? object.cumulative_reward_ratio.map((e: any) => DecCoin.fromJSON(e))
				: [],
			reference_count: isSet(object.reference_count) ? globalThis.Number(object.reference_count) : 0
		};
	},

	toJSON(message: ValidatorHistoricalRewards): unknown {
		const obj: any = {};
		if (message.cumulative_reward_ratio?.length) {
			obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map((e) => DecCoin.toJSON(e));
		}
		if (message.reference_count !== 0) {
			obj.reference_count = Math.round(message.reference_count);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorHistoricalRewards>, I>>(base?: I): ValidatorHistoricalRewards {
		return ValidatorHistoricalRewards.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorHistoricalRewards>, I>>(object: I): ValidatorHistoricalRewards {
		const message = createBaseValidatorHistoricalRewards();
		message.cumulative_reward_ratio = object.cumulative_reward_ratio?.map((e) => DecCoin.fromPartial(e)) || [];
		message.reference_count = object.reference_count ?? 0;
		return message;
	}
};

export const ValidatorCurrentRewards: MessageFns<ValidatorCurrentRewards, "cosmos.distribution.v1beta1.ValidatorCurrentRewards"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorCurrentRewards" as const,

	encode(message: ValidatorCurrentRewards, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.rewards) {
			DecCoin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.period !== 0) {
			writer.uint32(16).uint64(message.period);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorCurrentRewards {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorCurrentRewards();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.rewards.push(DecCoin.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.period = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorCurrentRewards {
		return {
			rewards: globalThis.Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
			period: isSet(object.period) ? globalThis.Number(object.period) : 0
		};
	},

	toJSON(message: ValidatorCurrentRewards): unknown {
		const obj: any = {};
		if (message.rewards?.length) {
			obj.rewards = message.rewards.map((e) => DecCoin.toJSON(e));
		}
		if (message.period !== 0) {
			obj.period = Math.round(message.period);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorCurrentRewards>, I>>(base?: I): ValidatorCurrentRewards {
		return ValidatorCurrentRewards.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorCurrentRewards>, I>>(object: I): ValidatorCurrentRewards {
		const message = createBaseValidatorCurrentRewards();
		message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
		message.period = object.period ?? 0;
		return message;
	}
};

export const ValidatorAccumulatedCommission: MessageFns<ValidatorAccumulatedCommission, "cosmos.distribution.v1beta1.ValidatorAccumulatedCommission"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorAccumulatedCommission" as const,

	encode(message: ValidatorAccumulatedCommission, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.commission) {
			DecCoin.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorAccumulatedCommission {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorAccumulatedCommission();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.commission.push(DecCoin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorAccumulatedCommission {
		return {
			commission: globalThis.Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromJSON(e)) : []
		};
	},

	toJSON(message: ValidatorAccumulatedCommission): unknown {
		const obj: any = {};
		if (message.commission?.length) {
			obj.commission = message.commission.map((e) => DecCoin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorAccumulatedCommission>, I>>(base?: I): ValidatorAccumulatedCommission {
		return ValidatorAccumulatedCommission.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorAccumulatedCommission>, I>>(object: I): ValidatorAccumulatedCommission {
		const message = createBaseValidatorAccumulatedCommission();
		message.commission = object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
		return message;
	}
};

export const ValidatorOutstandingRewards: MessageFns<ValidatorOutstandingRewards, "cosmos.distribution.v1beta1.ValidatorOutstandingRewards"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorOutstandingRewards" as const,

	encode(message: ValidatorOutstandingRewards, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.rewards) {
			DecCoin.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorOutstandingRewards {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorOutstandingRewards();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.rewards.push(DecCoin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorOutstandingRewards {
		return {
			rewards: globalThis.Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
		};
	},

	toJSON(message: ValidatorOutstandingRewards): unknown {
		const obj: any = {};
		if (message.rewards?.length) {
			obj.rewards = message.rewards.map((e) => DecCoin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorOutstandingRewards>, I>>(base?: I): ValidatorOutstandingRewards {
		return ValidatorOutstandingRewards.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorOutstandingRewards>, I>>(object: I): ValidatorOutstandingRewards {
		const message = createBaseValidatorOutstandingRewards();
		message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
		return message;
	}
};

export const ValidatorSlashEvent: MessageFns<ValidatorSlashEvent, "cosmos.distribution.v1beta1.ValidatorSlashEvent"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorSlashEvent" as const,

	encode(message: ValidatorSlashEvent, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_period !== 0) {
			writer.uint32(8).uint64(message.validator_period);
		}
		if (message.fraction !== "") {
			writer.uint32(18).string(message.fraction);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEvent {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorSlashEvent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.validator_period = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.fraction = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorSlashEvent {
		return {
			validator_period: isSet(object.validator_period) ? globalThis.Number(object.validator_period) : 0,
			fraction: isSet(object.fraction) ? globalThis.String(object.fraction) : ""
		};
	},

	toJSON(message: ValidatorSlashEvent): unknown {
		const obj: any = {};
		if (message.validator_period !== 0) {
			obj.validator_period = Math.round(message.validator_period);
		}
		if (message.fraction !== "") {
			obj.fraction = message.fraction;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorSlashEvent>, I>>(base?: I): ValidatorSlashEvent {
		return ValidatorSlashEvent.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvent>, I>>(object: I): ValidatorSlashEvent {
		const message = createBaseValidatorSlashEvent();
		message.validator_period = object.validator_period ?? 0;
		message.fraction = object.fraction ?? "";
		return message;
	}
};

export const ValidatorSlashEvents: MessageFns<ValidatorSlashEvents, "cosmos.distribution.v1beta1.ValidatorSlashEvents"> = {
	$type: "cosmos.distribution.v1beta1.ValidatorSlashEvents" as const,

	encode(message: ValidatorSlashEvents, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.validator_slash_events) {
			ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSlashEvents {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValidatorSlashEvents();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_slash_events.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValidatorSlashEvents {
		return {
			validator_slash_events: globalThis.Array.isArray(object?.validator_slash_events)
				? object.validator_slash_events.map((e: any) => ValidatorSlashEvent.fromJSON(e))
				: []
		};
	},

	toJSON(message: ValidatorSlashEvents): unknown {
		const obj: any = {};
		if (message.validator_slash_events?.length) {
			obj.validator_slash_events = message.validator_slash_events.map((e) => ValidatorSlashEvent.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValidatorSlashEvents>, I>>(base?: I): ValidatorSlashEvents {
		return ValidatorSlashEvents.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValidatorSlashEvents>, I>>(object: I): ValidatorSlashEvents {
		const message = createBaseValidatorSlashEvents();
		message.validator_slash_events = object.validator_slash_events?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
		return message;
	}
};

export const FeePool: MessageFns<FeePool, "cosmos.distribution.v1beta1.FeePool"> = {
	$type: "cosmos.distribution.v1beta1.FeePool" as const,

	encode(message: FeePool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.community_pool) {
			DecCoin.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FeePool {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFeePool();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.community_pool.push(DecCoin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FeePool {
		return {
			community_pool: globalThis.Array.isArray(object?.community_pool) ? object.community_pool.map((e: any) => DecCoin.fromJSON(e)) : []
		};
	},

	toJSON(message: FeePool): unknown {
		const obj: any = {};
		if (message.community_pool?.length) {
			obj.community_pool = message.community_pool.map((e) => DecCoin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FeePool>, I>>(base?: I): FeePool {
		return FeePool.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FeePool>, I>>(object: I): FeePool {
		const message = createBaseFeePool();
		message.community_pool = object.community_pool?.map((e) => DecCoin.fromPartial(e)) || [];
		return message;
	}
};

export const CommunityPoolSpendProposal: MessageFns<CommunityPoolSpendProposal, "cosmos.distribution.v1beta1.CommunityPoolSpendProposal"> = {
	$type: "cosmos.distribution.v1beta1.CommunityPoolSpendProposal" as const,

	encode(message: CommunityPoolSpendProposal, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.recipient !== "") {
			writer.uint32(26).string(message.recipient);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CommunityPoolSpendProposal {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommunityPoolSpendProposal();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.title = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.description = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.recipient = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.amount.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CommunityPoolSpendProposal {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			recipient: isSet(object.recipient) ? globalThis.String(object.recipient) : "",
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
		};
	},

	toJSON(message: CommunityPoolSpendProposal): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.recipient !== "") {
			obj.recipient = message.recipient;
		}
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CommunityPoolSpendProposal>, I>>(base?: I): CommunityPoolSpendProposal {
		return CommunityPoolSpendProposal.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CommunityPoolSpendProposal>, I>>(object: I): CommunityPoolSpendProposal {
		const message = createBaseCommunityPoolSpendProposal();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.recipient = object.recipient ?? "";
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	}
};

export const DelegatorStartingInfo: MessageFns<DelegatorStartingInfo, "cosmos.distribution.v1beta1.DelegatorStartingInfo"> = {
	$type: "cosmos.distribution.v1beta1.DelegatorStartingInfo" as const,

	encode(message: DelegatorStartingInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.previous_period !== 0) {
			writer.uint32(8).uint64(message.previous_period);
		}
		if (message.stake !== "") {
			writer.uint32(18).string(message.stake);
		}
		if (message.height !== 0) {
			writer.uint32(24).uint64(message.height);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DelegatorStartingInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDelegatorStartingInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.previous_period = longToNumber(reader.uint64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.stake = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.height = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DelegatorStartingInfo {
		return {
			previous_period: isSet(object.previous_period) ? globalThis.Number(object.previous_period) : 0,
			stake: isSet(object.stake) ? globalThis.String(object.stake) : "",
			height: isSet(object.height) ? globalThis.Number(object.height) : 0
		};
	},

	toJSON(message: DelegatorStartingInfo): unknown {
		const obj: any = {};
		if (message.previous_period !== 0) {
			obj.previous_period = Math.round(message.previous_period);
		}
		if (message.stake !== "") {
			obj.stake = message.stake;
		}
		if (message.height !== 0) {
			obj.height = Math.round(message.height);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DelegatorStartingInfo>, I>>(base?: I): DelegatorStartingInfo {
		return DelegatorStartingInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DelegatorStartingInfo>, I>>(object: I): DelegatorStartingInfo {
		const message = createBaseDelegatorStartingInfo();
		message.previous_period = object.previous_period ?? 0;
		message.stake = object.stake ?? "";
		message.height = object.height ?? 0;
		return message;
	}
};

export const DelegationDelegatorReward: MessageFns<DelegationDelegatorReward, "cosmos.distribution.v1beta1.DelegationDelegatorReward"> = {
	$type: "cosmos.distribution.v1beta1.DelegationDelegatorReward" as const,

	encode(message: DelegationDelegatorReward, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		for (const v of message.reward) {
			DecCoin.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DelegationDelegatorReward {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDelegationDelegatorReward();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.reward.push(DecCoin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DelegationDelegatorReward {
		return {
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			reward: globalThis.Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromJSON(e)) : []
		};
	},

	toJSON(message: DelegationDelegatorReward): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.reward?.length) {
			obj.reward = message.reward.map((e) => DecCoin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DelegationDelegatorReward>, I>>(base?: I): DelegationDelegatorReward {
		return DelegationDelegatorReward.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DelegationDelegatorReward>, I>>(object: I): DelegationDelegatorReward {
		const message = createBaseDelegationDelegatorReward();
		message.validator_address = object.validator_address ?? "";
		message.reward = object.reward?.map((e) => DecCoin.fromPartial(e)) || [];
		return message;
	}
};

export const CommunityPoolSpendProposalWithDeposit: MessageFns<
	CommunityPoolSpendProposalWithDeposit,
	"cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit"
> = {
	$type: "cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit" as const,

	encode(message: CommunityPoolSpendProposalWithDeposit, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.title !== "") {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== "") {
			writer.uint32(18).string(message.description);
		}
		if (message.recipient !== "") {
			writer.uint32(26).string(message.recipient);
		}
		if (message.amount !== "") {
			writer.uint32(34).string(message.amount);
		}
		if (message.deposit !== "") {
			writer.uint32(42).string(message.deposit);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommunityPoolSpendProposalWithDeposit();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.title = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.description = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.recipient = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.amount = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.deposit = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CommunityPoolSpendProposalWithDeposit {
		return {
			title: isSet(object.title) ? globalThis.String(object.title) : "",
			description: isSet(object.description) ? globalThis.String(object.description) : "",
			recipient: isSet(object.recipient) ? globalThis.String(object.recipient) : "",
			amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
			deposit: isSet(object.deposit) ? globalThis.String(object.deposit) : ""
		};
	},

	toJSON(message: CommunityPoolSpendProposalWithDeposit): unknown {
		const obj: any = {};
		if (message.title !== "") {
			obj.title = message.title;
		}
		if (message.description !== "") {
			obj.description = message.description;
		}
		if (message.recipient !== "") {
			obj.recipient = message.recipient;
		}
		if (message.amount !== "") {
			obj.amount = message.amount;
		}
		if (message.deposit !== "") {
			obj.deposit = message.deposit;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CommunityPoolSpendProposalWithDeposit>, I>>(base?: I): CommunityPoolSpendProposalWithDeposit {
		return CommunityPoolSpendProposalWithDeposit.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CommunityPoolSpendProposalWithDeposit>, I>>(object: I): CommunityPoolSpendProposalWithDeposit {
		const message = createBaseCommunityPoolSpendProposalWithDeposit();
		message.title = object.title ?? "";
		message.description = object.description ?? "";
		message.recipient = object.recipient ?? "";
		message.amount = object.amount ?? "";
		message.deposit = object.deposit ?? "";
		return message;
	}
};

function createBaseParams(): Params {
	return { community_tax: "", base_proposer_reward: "", bonus_proposer_reward: "", withdraw_addr_enabled: false };
}

function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
	return { cumulative_reward_ratio: [], reference_count: 0 };
}

function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
	return { rewards: [], period: 0 };
}

function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
	return { commission: [] };
}

function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
	return { rewards: [] };
}

function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
	return { validator_period: 0, fraction: "" };
}

function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
	return { validator_slash_events: [] };
}

function createBaseFeePool(): FeePool {
	return { community_pool: [] };
}

function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
	return { title: "", description: "", recipient: "", amount: [] };
}

function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
	return { previous_period: 0, stake: "", height: 0 };
}

function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
	return { validator_address: "", reward: [] };
}

function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
	return { title: "", description: "", recipient: "", amount: "", deposit: "" };
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
	["/cosmos.distribution.v1beta1.Params", Params as never],
	["/cosmos.distribution.v1beta1.ValidatorSlashEvent", ValidatorSlashEvent as never],
	["/cosmos.distribution.v1beta1.FeePool", FeePool as never]
];
export const aminoConverters = {
	"/cosmos.distribution.v1beta1.Params": {
		aminoType: "cosmos-sdk/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.ValidatorSlashEvent": {
		aminoType: "cosmos-sdk/ValidatorSlashEvent",
		toAmino: (message: ValidatorSlashEvent) => ({ ...message }),
		fromAmino: (object: ValidatorSlashEvent) => ({ ...object })
	},

	"/cosmos.distribution.v1beta1.FeePool": {
		aminoType: "cosmos-sdk/FeePool",
		toAmino: (message: FeePool) => ({ ...message }),
		fromAmino: (object: FeePool) => ({ ...object })
	}
};
