import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin } from "../../base/v1beta1/coin";

import type {
	MsgFundCommunityPoolResponse as MsgFundCommunityPoolResponse_type,
	MsgFundCommunityPool as MsgFundCommunityPool_type,
	MsgSetWithdrawAddressResponse as MsgSetWithdrawAddressResponse_type,
	MsgSetWithdrawAddress as MsgSetWithdrawAddress_type,
	MsgWithdrawDelegatorRewardResponse as MsgWithdrawDelegatorRewardResponse_type,
	MsgWithdrawDelegatorReward as MsgWithdrawDelegatorReward_type,
	MsgWithdrawValidatorCommissionResponse as MsgWithdrawValidatorCommissionResponse_type,
	MsgWithdrawValidatorCommission as MsgWithdrawValidatorCommission_type,
} from "../../../../types/cosmos/distribution/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface MsgSetWithdrawAddress extends MsgSetWithdrawAddress_type {}
export interface MsgSetWithdrawAddressResponse extends MsgSetWithdrawAddressResponse_type {}
export interface MsgWithdrawDelegatorReward extends MsgWithdrawDelegatorReward_type {}
export interface MsgWithdrawDelegatorRewardResponse extends MsgWithdrawDelegatorRewardResponse_type {}
export interface MsgWithdrawValidatorCommission extends MsgWithdrawValidatorCommission_type {}
export interface MsgWithdrawValidatorCommissionResponse extends MsgWithdrawValidatorCommissionResponse_type {}
export interface MsgFundCommunityPool extends MsgFundCommunityPool_type {}
export interface MsgFundCommunityPoolResponse extends MsgFundCommunityPoolResponse_type {}

export const MsgSetWithdrawAddress: MessageFns<MsgSetWithdrawAddress, "cosmos.distribution.v1beta1.MsgSetWithdrawAddress"> = {
	$type: "cosmos.distribution.v1beta1.MsgSetWithdrawAddress" as const,

	encode(message: MsgSetWithdrawAddress, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.withdraw_address !== "") {
			writer.uint32(18).string(message.withdraw_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddress {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSetWithdrawAddress();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.withdraw_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSetWithdrawAddress {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			withdraw_address: isSet(object.withdraw_address) ? globalThis.String(object.withdraw_address) : "",
		};
	},

	toJSON(message: MsgSetWithdrawAddress): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.withdraw_address !== "") {
			obj.withdraw_address = message.withdraw_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(base?: I): MsgSetWithdrawAddress {
		return MsgSetWithdrawAddress.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(object: I): MsgSetWithdrawAddress {
		const message = createBaseMsgSetWithdrawAddress();
		message.delegator_address = object.delegator_address ?? "";
		message.withdraw_address = object.withdraw_address ?? "";
		return message;
	},
};

export const MsgSetWithdrawAddressResponse: MessageFns<MsgSetWithdrawAddressResponse, "cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse"> = {
	$type: "cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse" as const,

	encode(_: MsgSetWithdrawAddressResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSetWithdrawAddressResponse();
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

	fromJSON(_: any): MsgSetWithdrawAddressResponse {
		return {};
	},

	toJSON(_: MsgSetWithdrawAddressResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(base?: I): MsgSetWithdrawAddressResponse {
		return MsgSetWithdrawAddressResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(_: I): MsgSetWithdrawAddressResponse {
		const message = createBaseMsgSetWithdrawAddressResponse();
		return message;
	},
};

export const MsgWithdrawDelegatorReward: MessageFns<MsgWithdrawDelegatorReward, "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward"> = {
	$type: "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward" as const,

	encode(message: MsgWithdrawDelegatorReward, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdrawDelegatorReward();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.validator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgWithdrawDelegatorReward {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
		};
	},

	toJSON(message: MsgWithdrawDelegatorReward): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(base?: I): MsgWithdrawDelegatorReward {
		return MsgWithdrawDelegatorReward.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(object: I): MsgWithdrawDelegatorReward {
		const message = createBaseMsgWithdrawDelegatorReward();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		return message;
	},
};

export const MsgWithdrawDelegatorRewardResponse: MessageFns<
	MsgWithdrawDelegatorRewardResponse,
	"cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse"
> = {
	$type: "cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse" as const,

	encode(_: MsgWithdrawDelegatorRewardResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdrawDelegatorRewardResponse();
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

	fromJSON(_: any): MsgWithdrawDelegatorRewardResponse {
		return {};
	},

	toJSON(_: MsgWithdrawDelegatorRewardResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>>(base?: I): MsgWithdrawDelegatorRewardResponse {
		return MsgWithdrawDelegatorRewardResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>>(_: I): MsgWithdrawDelegatorRewardResponse {
		const message = createBaseMsgWithdrawDelegatorRewardResponse();
		return message;
	},
};

export const MsgWithdrawValidatorCommission: MessageFns<MsgWithdrawValidatorCommission, "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission"> = {
	$type: "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission" as const,

	encode(message: MsgWithdrawValidatorCommission, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.validator_address !== "") {
			writer.uint32(10).string(message.validator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdrawValidatorCommission();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.validator_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgWithdrawValidatorCommission {
		return { validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "" };
	},

	toJSON(message: MsgWithdrawValidatorCommission): unknown {
		const obj: any = {};
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(base?: I): MsgWithdrawValidatorCommission {
		return MsgWithdrawValidatorCommission.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(object: I): MsgWithdrawValidatorCommission {
		const message = createBaseMsgWithdrawValidatorCommission();
		message.validator_address = object.validator_address ?? "";
		return message;
	},
};

export const MsgWithdrawValidatorCommissionResponse: MessageFns<
	MsgWithdrawValidatorCommissionResponse,
	"cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse"
> = {
	$type: "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse" as const,

	encode(_: MsgWithdrawValidatorCommissionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgWithdrawValidatorCommissionResponse();
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

	fromJSON(_: any): MsgWithdrawValidatorCommissionResponse {
		return {};
	},

	toJSON(_: MsgWithdrawValidatorCommissionResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>>(base?: I): MsgWithdrawValidatorCommissionResponse {
		return MsgWithdrawValidatorCommissionResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>>(_: I): MsgWithdrawValidatorCommissionResponse {
		const message = createBaseMsgWithdrawValidatorCommissionResponse();
		return message;
	},
};

export const MsgFundCommunityPool: MessageFns<MsgFundCommunityPool, "cosmos.distribution.v1beta1.MsgFundCommunityPool"> = {
	$type: "cosmos.distribution.v1beta1.MsgFundCommunityPool" as const,

	encode(message: MsgFundCommunityPool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.depositor !== "") {
			writer.uint32(18).string(message.depositor);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPool {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgFundCommunityPool();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.amount.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.depositor = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgFundCommunityPool {
		return {
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
			depositor: isSet(object.depositor) ? globalThis.String(object.depositor) : "",
		};
	},

	toJSON(message: MsgFundCommunityPool): unknown {
		const obj: any = {};
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		if (message.depositor !== "") {
			obj.depositor = message.depositor;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(base?: I): MsgFundCommunityPool {
		return MsgFundCommunityPool.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(object: I): MsgFundCommunityPool {
		const message = createBaseMsgFundCommunityPool();
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		message.depositor = object.depositor ?? "";
		return message;
	},
};

export const MsgFundCommunityPoolResponse: MessageFns<MsgFundCommunityPoolResponse, "cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse"> = {
	$type: "cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse" as const,

	encode(_: MsgFundCommunityPoolResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgFundCommunityPoolResponse();
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

	fromJSON(_: any): MsgFundCommunityPoolResponse {
		return {};
	},

	toJSON(_: MsgFundCommunityPoolResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(base?: I): MsgFundCommunityPoolResponse {
		return MsgFundCommunityPoolResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(_: I): MsgFundCommunityPoolResponse {
		const message = createBaseMsgFundCommunityPoolResponse();
		return message;
	},
};

function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
	return { delegator_address: "", withdraw_address: "" };
}

function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
	return {};
}

function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
	return { delegator_address: "", validator_address: "" };
}

function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
	return {};
}

function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
	return { validator_address: "" };
}

function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
	return {};
}

function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
	return { amount: [], depositor: "" };
}

function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
