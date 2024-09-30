import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { BaseAccount } from "../../auth/v1beta1/auth";

import { Coin } from "../../base/v1beta1/coin";

import type {
	BaseVestingAccount as BaseVestingAccountType,
	ContinuousVestingAccount as ContinuousVestingAccountType,
	DelayedVestingAccount as DelayedVestingAccountType,
	Period as PeriodType,
	PeriodicVestingAccount as PeriodicVestingAccountType,
	PermanentLockedAccount as PermanentLockedAccountType,
} from "../../../../types/cosmos/vesting/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface BaseVestingAccount extends BaseVestingAccountType {}
interface ContinuousVestingAccount extends ContinuousVestingAccountType {}
interface DelayedVestingAccount extends DelayedVestingAccountType {}
interface Period extends PeriodType {}
interface PeriodicVestingAccount extends PeriodicVestingAccountType {}
interface PermanentLockedAccount extends PermanentLockedAccountType {}

export const BaseVestingAccount: MessageFns<BaseVestingAccount, "cosmos.vesting.v1beta1.BaseVestingAccount"> = {
	$type: "cosmos.vesting.v1beta1.BaseVestingAccount" as const,

	encode(message: BaseVestingAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.base_account !== undefined) {
			BaseAccount.encode(message.base_account, writer.uint32(10).fork()).join();
		}
		for (const v of message.original_vesting) {
			Coin.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.delegated_free) {
			Coin.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.delegated_vesting) {
			Coin.encode(v!, writer.uint32(34).fork()).join();
		}
		if (message.end_time !== 0) {
			writer.uint32(40).int64(message.end_time);
		}
		if (message.admin !== "") {
			writer.uint32(50).string(message.admin);
		}
		if (message.cancelled_time !== 0) {
			writer.uint32(56).int64(message.cancelled_time);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): BaseVestingAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBaseVestingAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.base_account = BaseAccount.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.original_vesting.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.delegated_free.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.delegated_vesting.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.end_time = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.admin = reader.string();
					continue;
				case 7:
					if (tag !== 56) {
						break;
					}

					message.cancelled_time = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): BaseVestingAccount {
		return {
			base_account: isSet(object.base_account) ? BaseAccount.fromJSON(object.base_account) : undefined,
			original_vesting: globalThis.Array.isArray(object?.original_vesting) ? object.original_vesting.map((e: any) => Coin.fromJSON(e)) : [],
			delegated_free: globalThis.Array.isArray(object?.delegated_free) ? object.delegated_free.map((e: any) => Coin.fromJSON(e)) : [],
			delegated_vesting: globalThis.Array.isArray(object?.delegated_vesting) ? object.delegated_vesting.map((e: any) => Coin.fromJSON(e)) : [],
			end_time: isSet(object.end_time) ? globalThis.Number(object.end_time) : 0,
			admin: isSet(object.admin) ? globalThis.String(object.admin) : "",
			cancelled_time: isSet(object.cancelled_time) ? globalThis.Number(object.cancelled_time) : 0,
		};
	},

	toJSON(message: BaseVestingAccount): unknown {
		const obj: any = {};
		if (message.base_account !== undefined) {
			obj.base_account = BaseAccount.toJSON(message.base_account);
		}
		if (message.original_vesting?.length) {
			obj.original_vesting = message.original_vesting.map((e) => Coin.toJSON(e));
		}
		if (message.delegated_free?.length) {
			obj.delegated_free = message.delegated_free.map((e) => Coin.toJSON(e));
		}
		if (message.delegated_vesting?.length) {
			obj.delegated_vesting = message.delegated_vesting.map((e) => Coin.toJSON(e));
		}
		if (message.end_time !== 0) {
			obj.end_time = Math.round(message.end_time);
		}
		if (message.admin !== "") {
			obj.admin = message.admin;
		}
		if (message.cancelled_time !== 0) {
			obj.cancelled_time = Math.round(message.cancelled_time);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<BaseVestingAccount>, I>>(base?: I): BaseVestingAccount {
		return BaseVestingAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<BaseVestingAccount>, I>>(object: I): BaseVestingAccount {
		const message = createBaseBaseVestingAccount();
		message.base_account = object.base_account !== undefined && object.base_account !== null ? BaseAccount.fromPartial(object.base_account) : undefined;
		message.original_vesting = object.original_vesting?.map((e) => Coin.fromPartial(e)) || [];
		message.delegated_free = object.delegated_free?.map((e) => Coin.fromPartial(e)) || [];
		message.delegated_vesting = object.delegated_vesting?.map((e) => Coin.fromPartial(e)) || [];
		message.end_time = object.end_time ?? 0;
		message.admin = object.admin ?? "";
		message.cancelled_time = object.cancelled_time ?? 0;
		return message;
	},
};

export const ContinuousVestingAccount: MessageFns<ContinuousVestingAccount, "cosmos.vesting.v1beta1.ContinuousVestingAccount"> = {
	$type: "cosmos.vesting.v1beta1.ContinuousVestingAccount" as const,

	encode(message: ContinuousVestingAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.base_vesting_account !== undefined) {
			BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).join();
		}
		if (message.start_time !== 0) {
			writer.uint32(16).int64(message.start_time);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ContinuousVestingAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseContinuousVestingAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.start_time = longToNumber(reader.int64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ContinuousVestingAccount {
		return {
			base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
			start_time: isSet(object.start_time) ? globalThis.Number(object.start_time) : 0,
		};
	},

	toJSON(message: ContinuousVestingAccount): unknown {
		const obj: any = {};
		if (message.base_vesting_account !== undefined) {
			obj.base_vesting_account = BaseVestingAccount.toJSON(message.base_vesting_account);
		}
		if (message.start_time !== 0) {
			obj.start_time = Math.round(message.start_time);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ContinuousVestingAccount>, I>>(base?: I): ContinuousVestingAccount {
		return ContinuousVestingAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ContinuousVestingAccount>, I>>(object: I): ContinuousVestingAccount {
		const message = createBaseContinuousVestingAccount();
		message.base_vesting_account =
			object.base_vesting_account !== undefined && object.base_vesting_account !== null
				? BaseVestingAccount.fromPartial(object.base_vesting_account)
				: undefined;
		message.start_time = object.start_time ?? 0;
		return message;
	},
};

export const DelayedVestingAccount: MessageFns<DelayedVestingAccount, "cosmos.vesting.v1beta1.DelayedVestingAccount"> = {
	$type: "cosmos.vesting.v1beta1.DelayedVestingAccount" as const,

	encode(message: DelayedVestingAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.base_vesting_account !== undefined) {
			BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DelayedVestingAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDelayedVestingAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DelayedVestingAccount {
		return {
			base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
		};
	},

	toJSON(message: DelayedVestingAccount): unknown {
		const obj: any = {};
		if (message.base_vesting_account !== undefined) {
			obj.base_vesting_account = BaseVestingAccount.toJSON(message.base_vesting_account);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DelayedVestingAccount>, I>>(base?: I): DelayedVestingAccount {
		return DelayedVestingAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DelayedVestingAccount>, I>>(object: I): DelayedVestingAccount {
		const message = createBaseDelayedVestingAccount();
		message.base_vesting_account =
			object.base_vesting_account !== undefined && object.base_vesting_account !== null
				? BaseVestingAccount.fromPartial(object.base_vesting_account)
				: undefined;
		return message;
	},
};

export const Period: MessageFns<Period, "cosmos.vesting.v1beta1.Period"> = {
	$type: "cosmos.vesting.v1beta1.Period" as const,

	encode(message: Period, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.length !== 0) {
			writer.uint32(8).int64(message.length);
		}
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Period {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePeriod();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.length = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
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

	fromJSON(object: any): Period {
		return {
			length: isSet(object.length) ? globalThis.Number(object.length) : 0,
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
		};
	},

	toJSON(message: Period): unknown {
		const obj: any = {};
		if (message.length !== 0) {
			obj.length = Math.round(message.length);
		}
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Period>, I>>(base?: I): Period {
		return Period.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Period>, I>>(object: I): Period {
		const message = createBasePeriod();
		message.length = object.length ?? 0;
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	},
};

export const PeriodicVestingAccount: MessageFns<PeriodicVestingAccount, "cosmos.vesting.v1beta1.PeriodicVestingAccount"> = {
	$type: "cosmos.vesting.v1beta1.PeriodicVestingAccount" as const,

	encode(message: PeriodicVestingAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.base_vesting_account !== undefined) {
			BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).join();
		}
		if (message.start_time !== 0) {
			writer.uint32(16).int64(message.start_time);
		}
		for (const v of message.vesting_periods) {
			Period.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PeriodicVestingAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePeriodicVestingAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.start_time = longToNumber(reader.int64());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.vesting_periods.push(Period.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PeriodicVestingAccount {
		return {
			base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
			start_time: isSet(object.start_time) ? globalThis.Number(object.start_time) : 0,
			vesting_periods: globalThis.Array.isArray(object?.vesting_periods) ? object.vesting_periods.map((e: any) => Period.fromJSON(e)) : [],
		};
	},

	toJSON(message: PeriodicVestingAccount): unknown {
		const obj: any = {};
		if (message.base_vesting_account !== undefined) {
			obj.base_vesting_account = BaseVestingAccount.toJSON(message.base_vesting_account);
		}
		if (message.start_time !== 0) {
			obj.start_time = Math.round(message.start_time);
		}
		if (message.vesting_periods?.length) {
			obj.vesting_periods = message.vesting_periods.map((e) => Period.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PeriodicVestingAccount>, I>>(base?: I): PeriodicVestingAccount {
		return PeriodicVestingAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PeriodicVestingAccount>, I>>(object: I): PeriodicVestingAccount {
		const message = createBasePeriodicVestingAccount();
		message.base_vesting_account =
			object.base_vesting_account !== undefined && object.base_vesting_account !== null
				? BaseVestingAccount.fromPartial(object.base_vesting_account)
				: undefined;
		message.start_time = object.start_time ?? 0;
		message.vesting_periods = object.vesting_periods?.map((e) => Period.fromPartial(e)) || [];
		return message;
	},
};

export const PermanentLockedAccount: MessageFns<PermanentLockedAccount, "cosmos.vesting.v1beta1.PermanentLockedAccount"> = {
	$type: "cosmos.vesting.v1beta1.PermanentLockedAccount" as const,

	encode(message: PermanentLockedAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.base_vesting_account !== undefined) {
			BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): PermanentLockedAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePermanentLockedAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.base_vesting_account = BaseVestingAccount.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): PermanentLockedAccount {
		return {
			base_vesting_account: isSet(object.base_vesting_account) ? BaseVestingAccount.fromJSON(object.base_vesting_account) : undefined,
		};
	},

	toJSON(message: PermanentLockedAccount): unknown {
		const obj: any = {};
		if (message.base_vesting_account !== undefined) {
			obj.base_vesting_account = BaseVestingAccount.toJSON(message.base_vesting_account);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<PermanentLockedAccount>, I>>(base?: I): PermanentLockedAccount {
		return PermanentLockedAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<PermanentLockedAccount>, I>>(object: I): PermanentLockedAccount {
		const message = createBasePermanentLockedAccount();
		message.base_vesting_account =
			object.base_vesting_account !== undefined && object.base_vesting_account !== null
				? BaseVestingAccount.fromPartial(object.base_vesting_account)
				: undefined;
		return message;
	},
};

function createBaseBaseVestingAccount(): BaseVestingAccount {
	return {
		base_account: undefined,
		original_vesting: [],
		delegated_free: [],
		delegated_vesting: [],
		end_time: 0,
		admin: "",
		cancelled_time: 0,
	};
}

function createBaseContinuousVestingAccount(): ContinuousVestingAccount {
	return { base_vesting_account: undefined, start_time: 0 };
}

function createBaseDelayedVestingAccount(): DelayedVestingAccount {
	return { base_vesting_account: undefined };
}

function createBasePeriod(): Period {
	return { length: 0, amount: [] };
}

function createBasePeriodicVestingAccount(): PeriodicVestingAccount {
	return { base_vesting_account: undefined, start_time: 0, vesting_periods: [] };
}

function createBasePermanentLockedAccount(): PermanentLockedAccount {
	return { base_vesting_account: undefined };
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
	["/cosmos.vesting.v1beta1.BaseVestingAccount", BaseVestingAccount as never],
	["/cosmos.vesting.v1beta1.DelayedVestingAccount", DelayedVestingAccount as never],
	["/cosmos.vesting.v1beta1.Period", Period as never],
];
export const aminoConverters = {
	"/cosmos.vesting.v1beta1.BaseVestingAccount": {
		aminoType: "cosmos-sdk/BaseVestingAccount",
		toAmino: (message: BaseVestingAccount) => ({ ...message }),
		fromAmino: (object: BaseVestingAccount) => ({ ...object }),
	},

	"/cosmos.vesting.v1beta1.DelayedVestingAccount": {
		aminoType: "cosmos-sdk/DelayedVestingAccount",
		toAmino: (message: DelayedVestingAccount) => ({ ...message }),
		fromAmino: (object: DelayedVestingAccount) => ({ ...object }),
	},

	"/cosmos.vesting.v1beta1.Period": {
		aminoType: "cosmos-sdk/Period",
		toAmino: (message: Period) => ({ ...message }),
		fromAmino: (object: Period) => ({ ...object }),
	},
};
