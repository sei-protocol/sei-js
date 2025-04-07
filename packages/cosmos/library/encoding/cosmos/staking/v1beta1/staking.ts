import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Duration } from "../../../google/protobuf/duration";

import { Timestamp } from "../../../google/protobuf/timestamp";

import { Header } from "../../../tendermint/types/types";

import { Coin } from "../../base/v1beta1/coin";

import type {
	CommissionRates as CommissionRates_type,
	Commission as Commission_type,
	DVPair as DVPair_type,
	DVPairs as DVPairs_type,
	DVVTriplet as DVVTriplet_type,
	DVVTriplets as DVVTriplets_type,
	DelegationResponse as DelegationResponse_type,
	Delegation as Delegation_type,
	Description as Description_type,
	HistoricalInfo as HistoricalInfo_type,
	Params as Params_type,
	Pool as Pool_type,
	RedelegationEntryResponse as RedelegationEntryResponse_type,
	RedelegationEntry as RedelegationEntry_type,
	RedelegationResponse as RedelegationResponse_type,
	Redelegation as Redelegation_type,
	UnbondingDelegationEntry as UnbondingDelegationEntry_type,
	UnbondingDelegation as UnbondingDelegation_type,
	ValAddresses as ValAddresses_type,
	Validator as Validator_type
} from "../../../../types/cosmos/staking/v1beta1";

import { BondStatus } from "../../../../types/cosmos/staking/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface HistoricalInfo extends HistoricalInfo_type {}
export interface CommissionRates extends CommissionRates_type {}
export interface Commission extends Commission_type {}
export interface Description extends Description_type {}
export interface Validator extends Validator_type {}
export interface ValAddresses extends ValAddresses_type {}
export interface DVPair extends DVPair_type {}
export interface DVPairs extends DVPairs_type {}
export interface DVVTriplet extends DVVTriplet_type {}
export interface DVVTriplets extends DVVTriplets_type {}
export interface Delegation extends Delegation_type {}
export interface UnbondingDelegation extends UnbondingDelegation_type {}
export interface UnbondingDelegationEntry extends UnbondingDelegationEntry_type {}
export interface RedelegationEntry extends RedelegationEntry_type {}
export interface Redelegation extends Redelegation_type {}
export interface Params extends Params_type {}
export interface DelegationResponse extends DelegationResponse_type {}
export interface RedelegationEntryResponse extends RedelegationEntryResponse_type {}
export interface RedelegationResponse extends RedelegationResponse_type {}
export interface Pool extends Pool_type {}

export const HistoricalInfo: MessageFns<HistoricalInfo, "cosmos.staking.v1beta1.HistoricalInfo"> = {
	$type: "cosmos.staking.v1beta1.HistoricalInfo" as const,

	encode(message: HistoricalInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.header !== undefined) {
			Header.encode(message.header, writer.uint32(10).fork()).join();
		}
		for (const v of message.valset) {
			Validator.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): HistoricalInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseHistoricalInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.header = Header.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.valset.push(Validator.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): HistoricalInfo {
		return {
			header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
			valset: globalThis.Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromJSON(e)) : []
		};
	},

	toJSON(message: HistoricalInfo): unknown {
		const obj: any = {};
		if (message.header !== undefined) {
			obj.header = Header.toJSON(message.header);
		}
		if (message.valset?.length) {
			obj.valset = message.valset.map((e) => Validator.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<HistoricalInfo>, I>>(base?: I): HistoricalInfo {
		return HistoricalInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<HistoricalInfo>, I>>(object: I): HistoricalInfo {
		const message = createBaseHistoricalInfo();
		message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
		message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
		return message;
	}
};

export const CommissionRates: MessageFns<CommissionRates, "cosmos.staking.v1beta1.CommissionRates"> = {
	$type: "cosmos.staking.v1beta1.CommissionRates" as const,

	encode(message: CommissionRates, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.rate !== "") {
			writer.uint32(10).string(message.rate);
		}
		if (message.max_rate !== "") {
			writer.uint32(18).string(message.max_rate);
		}
		if (message.max_change_rate !== "") {
			writer.uint32(26).string(message.max_change_rate);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CommissionRates {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommissionRates();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.rate = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.max_rate = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.max_change_rate = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CommissionRates {
		return {
			rate: isSet(object.rate) ? globalThis.String(object.rate) : "",
			max_rate: isSet(object.max_rate) ? globalThis.String(object.max_rate) : "",
			max_change_rate: isSet(object.max_change_rate) ? globalThis.String(object.max_change_rate) : ""
		};
	},

	toJSON(message: CommissionRates): unknown {
		const obj: any = {};
		if (message.rate !== "") {
			obj.rate = message.rate;
		}
		if (message.max_rate !== "") {
			obj.max_rate = message.max_rate;
		}
		if (message.max_change_rate !== "") {
			obj.max_change_rate = message.max_change_rate;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CommissionRates>, I>>(base?: I): CommissionRates {
		return CommissionRates.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CommissionRates>, I>>(object: I): CommissionRates {
		const message = createBaseCommissionRates();
		message.rate = object.rate ?? "";
		message.max_rate = object.max_rate ?? "";
		message.max_change_rate = object.max_change_rate ?? "";
		return message;
	}
};

export const Commission: MessageFns<Commission, "cosmos.staking.v1beta1.Commission"> = {
	$type: "cosmos.staking.v1beta1.Commission" as const,

	encode(message: Commission, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.commission_rates !== undefined) {
			CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).join();
		}
		if (message.update_time !== undefined) {
			Timestamp.encode(toTimestamp(message.update_time), writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Commission {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCommission();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.commission_rates = CommissionRates.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.update_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Commission {
		return {
			commission_rates: isSet(object.commission_rates) ? CommissionRates.fromJSON(object.commission_rates) : undefined,
			update_time: isSet(object.update_time) ? fromJsonTimestamp(object.update_time) : undefined
		};
	},

	toJSON(message: Commission): unknown {
		const obj: any = {};
		if (message.commission_rates !== undefined) {
			obj.commission_rates = CommissionRates.toJSON(message.commission_rates);
		}
		if (message.update_time !== undefined) {
			obj.update_time = message.update_time.toISOString();
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Commission>, I>>(base?: I): Commission {
		return Commission.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Commission>, I>>(object: I): Commission {
		const message = createBaseCommission();
		message.commission_rates =
			object.commission_rates !== undefined && object.commission_rates !== null ? CommissionRates.fromPartial(object.commission_rates) : undefined;
		message.update_time = object.update_time ?? undefined;
		return message;
	}
};

export const Description: MessageFns<Description, "cosmos.staking.v1beta1.Description"> = {
	$type: "cosmos.staking.v1beta1.Description" as const,

	encode(message: Description, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.moniker !== "") {
			writer.uint32(10).string(message.moniker);
		}
		if (message.identity !== "") {
			writer.uint32(18).string(message.identity);
		}
		if (message.website !== "") {
			writer.uint32(26).string(message.website);
		}
		if (message.security_contact !== "") {
			writer.uint32(34).string(message.security_contact);
		}
		if (message.details !== "") {
			writer.uint32(42).string(message.details);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Description {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDescription();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.moniker = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.identity = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.website = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.security_contact = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.details = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Description {
		return {
			moniker: isSet(object.moniker) ? globalThis.String(object.moniker) : "",
			identity: isSet(object.identity) ? globalThis.String(object.identity) : "",
			website: isSet(object.website) ? globalThis.String(object.website) : "",
			security_contact: isSet(object.security_contact) ? globalThis.String(object.security_contact) : "",
			details: isSet(object.details) ? globalThis.String(object.details) : ""
		};
	},

	toJSON(message: Description): unknown {
		const obj: any = {};
		if (message.moniker !== "") {
			obj.moniker = message.moniker;
		}
		if (message.identity !== "") {
			obj.identity = message.identity;
		}
		if (message.website !== "") {
			obj.website = message.website;
		}
		if (message.security_contact !== "") {
			obj.security_contact = message.security_contact;
		}
		if (message.details !== "") {
			obj.details = message.details;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Description>, I>>(base?: I): Description {
		return Description.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Description>, I>>(object: I): Description {
		const message = createBaseDescription();
		message.moniker = object.moniker ?? "";
		message.identity = object.identity ?? "";
		message.website = object.website ?? "";
		message.security_contact = object.security_contact ?? "";
		message.details = object.details ?? "";
		return message;
	}
};

export const Validator: MessageFns<Validator, "cosmos.staking.v1beta1.Validator"> = {
	$type: "cosmos.staking.v1beta1.Validator" as const,

	encode(message: Validator, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.operator_address !== "") {
			writer.uint32(10).string(message.operator_address);
		}
		if (message.consensus_pubkey !== undefined) {
			Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).join();
		}
		if (message.jailed !== false) {
			writer.uint32(24).bool(message.jailed);
		}
		if (message.status !== 0) {
			writer.uint32(32).int32(message.status);
		}
		if (message.tokens !== "") {
			writer.uint32(42).string(message.tokens);
		}
		if (message.delegator_shares !== "") {
			writer.uint32(50).string(message.delegator_shares);
		}
		if (message.description !== undefined) {
			Description.encode(message.description, writer.uint32(58).fork()).join();
		}
		if (message.unbonding_height !== 0) {
			writer.uint32(64).int64(message.unbonding_height);
		}
		if (message.unbonding_time !== undefined) {
			Timestamp.encode(toTimestamp(message.unbonding_time), writer.uint32(74).fork()).join();
		}
		if (message.commission !== undefined) {
			Commission.encode(message.commission, writer.uint32(82).fork()).join();
		}
		if (message.min_self_delegation !== "") {
			writer.uint32(90).string(message.min_self_delegation);
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

					message.operator_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.consensus_pubkey = Any.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.jailed = reader.bool();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.status = reader.int32() as any;
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.tokens = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.delegator_shares = reader.string();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.description = Description.decode(reader, reader.uint32());
					continue;
				case 8:
					if (tag !== 64) {
						break;
					}

					message.unbonding_height = longToNumber(reader.int64());
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.unbonding_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.commission = Commission.decode(reader, reader.uint32());
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.min_self_delegation = reader.string();
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
			operator_address: isSet(object.operator_address) ? globalThis.String(object.operator_address) : "",
			consensus_pubkey: isSet(object.consensus_pubkey) ? Any.fromJSON(object.consensus_pubkey) : undefined,
			jailed: isSet(object.jailed) ? globalThis.Boolean(object.jailed) : false,
			status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
			tokens: isSet(object.tokens) ? globalThis.String(object.tokens) : "",
			delegator_shares: isSet(object.delegator_shares) ? globalThis.String(object.delegator_shares) : "",
			description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
			unbonding_height: isSet(object.unbonding_height) ? globalThis.Number(object.unbonding_height) : 0,
			unbonding_time: isSet(object.unbonding_time) ? fromJsonTimestamp(object.unbonding_time) : undefined,
			commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
			min_self_delegation: isSet(object.min_self_delegation) ? globalThis.String(object.min_self_delegation) : ""
		};
	},

	toJSON(message: Validator): unknown {
		const obj: any = {};
		if (message.operator_address !== "") {
			obj.operator_address = message.operator_address;
		}
		if (message.consensus_pubkey !== undefined) {
			obj.consensus_pubkey = Any.toJSON(message.consensus_pubkey);
		}
		if (message.jailed !== false) {
			obj.jailed = message.jailed;
		}
		if (message.status !== 0) {
			obj.status = bondStatusToJSON(message.status);
		}
		if (message.tokens !== "") {
			obj.tokens = message.tokens;
		}
		if (message.delegator_shares !== "") {
			obj.delegator_shares = message.delegator_shares;
		}
		if (message.description !== undefined) {
			obj.description = Description.toJSON(message.description);
		}
		if (message.unbonding_height !== 0) {
			obj.unbonding_height = Math.round(message.unbonding_height);
		}
		if (message.unbonding_time !== undefined) {
			obj.unbonding_time = message.unbonding_time.toISOString();
		}
		if (message.commission !== undefined) {
			obj.commission = Commission.toJSON(message.commission);
		}
		if (message.min_self_delegation !== "") {
			obj.min_self_delegation = message.min_self_delegation;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Validator>, I>>(base?: I): Validator {
		return Validator.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
		const message = createBaseValidator();
		message.operator_address = object.operator_address ?? "";
		message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? Any.fromPartial(object.consensus_pubkey) : undefined;
		message.jailed = object.jailed ?? false;
		message.status = object.status ?? 0;
		message.tokens = object.tokens ?? "";
		message.delegator_shares = object.delegator_shares ?? "";
		message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
		message.unbonding_height = object.unbonding_height ?? 0;
		message.unbonding_time = object.unbonding_time ?? undefined;
		message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
		message.min_self_delegation = object.min_self_delegation ?? "";
		return message;
	}
};

export const ValAddresses: MessageFns<ValAddresses, "cosmos.staking.v1beta1.ValAddresses"> = {
	$type: "cosmos.staking.v1beta1.ValAddresses" as const,

	encode(message: ValAddresses, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.addresses) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ValAddresses {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseValAddresses();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.addresses.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ValAddresses {
		return {
			addresses: globalThis.Array.isArray(object?.addresses) ? object.addresses.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: ValAddresses): unknown {
		const obj: any = {};
		if (message.addresses?.length) {
			obj.addresses = message.addresses;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ValAddresses>, I>>(base?: I): ValAddresses {
		return ValAddresses.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ValAddresses>, I>>(object: I): ValAddresses {
		const message = createBaseValAddresses();
		message.addresses = object.addresses?.map((e) => e) || [];
		return message;
	}
};

export const DVPair: MessageFns<DVPair, "cosmos.staking.v1beta1.DVPair"> = {
	$type: "cosmos.staking.v1beta1.DVPair" as const,

	encode(message: DVPair, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DVPair {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDVPair();
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

	fromJSON(object: any): DVPair {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : ""
		};
	},

	toJSON(message: DVPair): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DVPair>, I>>(base?: I): DVPair {
		return DVPair.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DVPair>, I>>(object: I): DVPair {
		const message = createBaseDVPair();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		return message;
	}
};

export const DVPairs: MessageFns<DVPairs, "cosmos.staking.v1beta1.DVPairs"> = {
	$type: "cosmos.staking.v1beta1.DVPairs" as const,

	encode(message: DVPairs, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.pairs) {
			DVPair.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DVPairs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDVPairs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pairs.push(DVPair.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DVPairs {
		return { pairs: globalThis.Array.isArray(object?.pairs) ? object.pairs.map((e: any) => DVPair.fromJSON(e)) : [] };
	},

	toJSON(message: DVPairs): unknown {
		const obj: any = {};
		if (message.pairs?.length) {
			obj.pairs = message.pairs.map((e) => DVPair.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DVPairs>, I>>(base?: I): DVPairs {
		return DVPairs.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DVPairs>, I>>(object: I): DVPairs {
		const message = createBaseDVPairs();
		message.pairs = object.pairs?.map((e) => DVPair.fromPartial(e)) || [];
		return message;
	}
};

export const DVVTriplet: MessageFns<DVVTriplet, "cosmos.staking.v1beta1.DVVTriplet"> = {
	$type: "cosmos.staking.v1beta1.DVVTriplet" as const,

	encode(message: DVVTriplet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_src_address !== "") {
			writer.uint32(18).string(message.validator_src_address);
		}
		if (message.validator_dst_address !== "") {
			writer.uint32(26).string(message.validator_dst_address);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplet {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDVVTriplet();
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

					message.validator_src_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.validator_dst_address = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DVVTriplet {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_src_address: isSet(object.validator_src_address) ? globalThis.String(object.validator_src_address) : "",
			validator_dst_address: isSet(object.validator_dst_address) ? globalThis.String(object.validator_dst_address) : ""
		};
	},

	toJSON(message: DVVTriplet): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_src_address !== "") {
			obj.validator_src_address = message.validator_src_address;
		}
		if (message.validator_dst_address !== "") {
			obj.validator_dst_address = message.validator_dst_address;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DVVTriplet>, I>>(base?: I): DVVTriplet {
		return DVVTriplet.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DVVTriplet>, I>>(object: I): DVVTriplet {
		const message = createBaseDVVTriplet();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_src_address = object.validator_src_address ?? "";
		message.validator_dst_address = object.validator_dst_address ?? "";
		return message;
	}
};

export const DVVTriplets: MessageFns<DVVTriplets, "cosmos.staking.v1beta1.DVVTriplets"> = {
	$type: "cosmos.staking.v1beta1.DVVTriplets" as const,

	encode(message: DVVTriplets, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.triplets) {
			DVVTriplet.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DVVTriplets {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDVVTriplets();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.triplets.push(DVVTriplet.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DVVTriplets {
		return {
			triplets: globalThis.Array.isArray(object?.triplets) ? object.triplets.map((e: any) => DVVTriplet.fromJSON(e)) : []
		};
	},

	toJSON(message: DVVTriplets): unknown {
		const obj: any = {};
		if (message.triplets?.length) {
			obj.triplets = message.triplets.map((e) => DVVTriplet.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DVVTriplets>, I>>(base?: I): DVVTriplets {
		return DVVTriplets.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DVVTriplets>, I>>(object: I): DVVTriplets {
		const message = createBaseDVVTriplets();
		message.triplets = object.triplets?.map((e) => DVVTriplet.fromPartial(e)) || [];
		return message;
	}
};

export const Delegation: MessageFns<Delegation, "cosmos.staking.v1beta1.Delegation"> = {
	$type: "cosmos.staking.v1beta1.Delegation" as const,

	encode(message: Delegation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		if (message.shares !== "") {
			writer.uint32(26).string(message.shares);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Delegation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDelegation();
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
				case 3:
					if (tag !== 26) {
						break;
					}

					message.shares = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Delegation {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			shares: isSet(object.shares) ? globalThis.String(object.shares) : ""
		};
	},

	toJSON(message: Delegation): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.shares !== "") {
			obj.shares = message.shares;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Delegation>, I>>(base?: I): Delegation {
		return Delegation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Delegation>, I>>(object: I): Delegation {
		const message = createBaseDelegation();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		message.shares = object.shares ?? "";
		return message;
	}
};

export const UnbondingDelegation: MessageFns<UnbondingDelegation, "cosmos.staking.v1beta1.UnbondingDelegation"> = {
	$type: "cosmos.staking.v1beta1.UnbondingDelegation" as const,

	encode(message: UnbondingDelegation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_address !== "") {
			writer.uint32(18).string(message.validator_address);
		}
		for (const v of message.entries) {
			UnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseUnbondingDelegation();
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
				case 3:
					if (tag !== 26) {
						break;
					}

					message.entries.push(UnbondingDelegationEntry.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): UnbondingDelegation {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_address: isSet(object.validator_address) ? globalThis.String(object.validator_address) : "",
			entries: globalThis.Array.isArray(object?.entries) ? object.entries.map((e: any) => UnbondingDelegationEntry.fromJSON(e)) : []
		};
	},

	toJSON(message: UnbondingDelegation): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_address !== "") {
			obj.validator_address = message.validator_address;
		}
		if (message.entries?.length) {
			obj.entries = message.entries.map((e) => UnbondingDelegationEntry.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<UnbondingDelegation>, I>>(base?: I): UnbondingDelegation {
		return UnbondingDelegation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<UnbondingDelegation>, I>>(object: I): UnbondingDelegation {
		const message = createBaseUnbondingDelegation();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_address = object.validator_address ?? "";
		message.entries = object.entries?.map((e) => UnbondingDelegationEntry.fromPartial(e)) || [];
		return message;
	}
};

export const UnbondingDelegationEntry: MessageFns<UnbondingDelegationEntry, "cosmos.staking.v1beta1.UnbondingDelegationEntry"> = {
	$type: "cosmos.staking.v1beta1.UnbondingDelegationEntry" as const,

	encode(message: UnbondingDelegationEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.creation_height !== 0) {
			writer.uint32(8).int64(message.creation_height);
		}
		if (message.completion_time !== undefined) {
			Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).join();
		}
		if (message.initial_balance !== "") {
			writer.uint32(26).string(message.initial_balance);
		}
		if (message.balance !== "") {
			writer.uint32(34).string(message.balance);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): UnbondingDelegationEntry {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseUnbondingDelegationEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.creation_height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.initial_balance = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.balance = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): UnbondingDelegationEntry {
		return {
			creation_height: isSet(object.creation_height) ? globalThis.Number(object.creation_height) : 0,
			completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
			initial_balance: isSet(object.initial_balance) ? globalThis.String(object.initial_balance) : "",
			balance: isSet(object.balance) ? globalThis.String(object.balance) : ""
		};
	},

	toJSON(message: UnbondingDelegationEntry): unknown {
		const obj: any = {};
		if (message.creation_height !== 0) {
			obj.creation_height = Math.round(message.creation_height);
		}
		if (message.completion_time !== undefined) {
			obj.completion_time = message.completion_time.toISOString();
		}
		if (message.initial_balance !== "") {
			obj.initial_balance = message.initial_balance;
		}
		if (message.balance !== "") {
			obj.balance = message.balance;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<UnbondingDelegationEntry>, I>>(base?: I): UnbondingDelegationEntry {
		return UnbondingDelegationEntry.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<UnbondingDelegationEntry>, I>>(object: I): UnbondingDelegationEntry {
		const message = createBaseUnbondingDelegationEntry();
		message.creation_height = object.creation_height ?? 0;
		message.completion_time = object.completion_time ?? undefined;
		message.initial_balance = object.initial_balance ?? "";
		message.balance = object.balance ?? "";
		return message;
	}
};

export const RedelegationEntry: MessageFns<RedelegationEntry, "cosmos.staking.v1beta1.RedelegationEntry"> = {
	$type: "cosmos.staking.v1beta1.RedelegationEntry" as const,

	encode(message: RedelegationEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.creation_height !== 0) {
			writer.uint32(8).int64(message.creation_height);
		}
		if (message.completion_time !== undefined) {
			Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(18).fork()).join();
		}
		if (message.initial_balance !== "") {
			writer.uint32(26).string(message.initial_balance);
		}
		if (message.shares_dst !== "") {
			writer.uint32(34).string(message.shares_dst);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntry {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRedelegationEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.creation_height = longToNumber(reader.int64());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.initial_balance = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.shares_dst = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RedelegationEntry {
		return {
			creation_height: isSet(object.creation_height) ? globalThis.Number(object.creation_height) : 0,
			completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined,
			initial_balance: isSet(object.initial_balance) ? globalThis.String(object.initial_balance) : "",
			shares_dst: isSet(object.shares_dst) ? globalThis.String(object.shares_dst) : ""
		};
	},

	toJSON(message: RedelegationEntry): unknown {
		const obj: any = {};
		if (message.creation_height !== 0) {
			obj.creation_height = Math.round(message.creation_height);
		}
		if (message.completion_time !== undefined) {
			obj.completion_time = message.completion_time.toISOString();
		}
		if (message.initial_balance !== "") {
			obj.initial_balance = message.initial_balance;
		}
		if (message.shares_dst !== "") {
			obj.shares_dst = message.shares_dst;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RedelegationEntry>, I>>(base?: I): RedelegationEntry {
		return RedelegationEntry.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RedelegationEntry>, I>>(object: I): RedelegationEntry {
		const message = createBaseRedelegationEntry();
		message.creation_height = object.creation_height ?? 0;
		message.completion_time = object.completion_time ?? undefined;
		message.initial_balance = object.initial_balance ?? "";
		message.shares_dst = object.shares_dst ?? "";
		return message;
	}
};

export const Redelegation: MessageFns<Redelegation, "cosmos.staking.v1beta1.Redelegation"> = {
	$type: "cosmos.staking.v1beta1.Redelegation" as const,

	encode(message: Redelegation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegator_address !== "") {
			writer.uint32(10).string(message.delegator_address);
		}
		if (message.validator_src_address !== "") {
			writer.uint32(18).string(message.validator_src_address);
		}
		if (message.validator_dst_address !== "") {
			writer.uint32(26).string(message.validator_dst_address);
		}
		for (const v of message.entries) {
			RedelegationEntry.encode(v!, writer.uint32(34).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Redelegation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRedelegation();
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

					message.validator_src_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.validator_dst_address = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Redelegation {
		return {
			delegator_address: isSet(object.delegator_address) ? globalThis.String(object.delegator_address) : "",
			validator_src_address: isSet(object.validator_src_address) ? globalThis.String(object.validator_src_address) : "",
			validator_dst_address: isSet(object.validator_dst_address) ? globalThis.String(object.validator_dst_address) : "",
			entries: globalThis.Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromJSON(e)) : []
		};
	},

	toJSON(message: Redelegation): unknown {
		const obj: any = {};
		if (message.delegator_address !== "") {
			obj.delegator_address = message.delegator_address;
		}
		if (message.validator_src_address !== "") {
			obj.validator_src_address = message.validator_src_address;
		}
		if (message.validator_dst_address !== "") {
			obj.validator_dst_address = message.validator_dst_address;
		}
		if (message.entries?.length) {
			obj.entries = message.entries.map((e) => RedelegationEntry.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Redelegation>, I>>(base?: I): Redelegation {
		return Redelegation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Redelegation>, I>>(object: I): Redelegation {
		const message = createBaseRedelegation();
		message.delegator_address = object.delegator_address ?? "";
		message.validator_src_address = object.validator_src_address ?? "";
		message.validator_dst_address = object.validator_dst_address ?? "";
		message.entries = object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
		return message;
	}
};

export const Params: MessageFns<Params, "cosmos.staking.v1beta1.Params"> = {
	$type: "cosmos.staking.v1beta1.Params" as const,

	encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.unbonding_time !== undefined) {
			Duration.encode(message.unbonding_time, writer.uint32(10).fork()).join();
		}
		if (message.max_validators !== 0) {
			writer.uint32(16).uint32(message.max_validators);
		}
		if (message.max_entries !== 0) {
			writer.uint32(24).uint32(message.max_entries);
		}
		if (message.historical_entries !== 0) {
			writer.uint32(32).uint32(message.historical_entries);
		}
		if (message.bond_denom !== "") {
			writer.uint32(42).string(message.bond_denom);
		}
		if (message.min_commission_rate !== "") {
			writer.uint32(50).string(message.min_commission_rate);
		}
		if (message.max_voting_power_ratio !== "") {
			writer.uint32(58).string(message.max_voting_power_ratio);
		}
		if (message.max_voting_power_enforcement_threshold !== "") {
			writer.uint32(66).string(message.max_voting_power_enforcement_threshold);
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

					message.unbonding_time = Duration.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.max_validators = reader.uint32();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.max_entries = reader.uint32();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.historical_entries = reader.uint32();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.bond_denom = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.min_commission_rate = reader.string();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.max_voting_power_ratio = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.max_voting_power_enforcement_threshold = reader.string();
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
			unbonding_time: isSet(object.unbonding_time) ? Duration.fromJSON(object.unbonding_time) : undefined,
			max_validators: isSet(object.max_validators) ? globalThis.Number(object.max_validators) : 0,
			max_entries: isSet(object.max_entries) ? globalThis.Number(object.max_entries) : 0,
			historical_entries: isSet(object.historical_entries) ? globalThis.Number(object.historical_entries) : 0,
			bond_denom: isSet(object.bond_denom) ? globalThis.String(object.bond_denom) : "",
			min_commission_rate: isSet(object.min_commission_rate) ? globalThis.String(object.min_commission_rate) : "",
			max_voting_power_ratio: isSet(object.max_voting_power_ratio) ? globalThis.String(object.max_voting_power_ratio) : "",
			max_voting_power_enforcement_threshold: isSet(object.max_voting_power_enforcement_threshold)
				? globalThis.String(object.max_voting_power_enforcement_threshold)
				: ""
		};
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.unbonding_time !== undefined) {
			obj.unbonding_time = Duration.toJSON(message.unbonding_time);
		}
		if (message.max_validators !== 0) {
			obj.max_validators = Math.round(message.max_validators);
		}
		if (message.max_entries !== 0) {
			obj.max_entries = Math.round(message.max_entries);
		}
		if (message.historical_entries !== 0) {
			obj.historical_entries = Math.round(message.historical_entries);
		}
		if (message.bond_denom !== "") {
			obj.bond_denom = message.bond_denom;
		}
		if (message.min_commission_rate !== "") {
			obj.min_commission_rate = message.min_commission_rate;
		}
		if (message.max_voting_power_ratio !== "") {
			obj.max_voting_power_ratio = message.max_voting_power_ratio;
		}
		if (message.max_voting_power_enforcement_threshold !== "") {
			obj.max_voting_power_enforcement_threshold = message.max_voting_power_enforcement_threshold;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
		return Params.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = createBaseParams();
		message.unbonding_time = object.unbonding_time !== undefined && object.unbonding_time !== null ? Duration.fromPartial(object.unbonding_time) : undefined;
		message.max_validators = object.max_validators ?? 0;
		message.max_entries = object.max_entries ?? 0;
		message.historical_entries = object.historical_entries ?? 0;
		message.bond_denom = object.bond_denom ?? "";
		message.min_commission_rate = object.min_commission_rate ?? "";
		message.max_voting_power_ratio = object.max_voting_power_ratio ?? "";
		message.max_voting_power_enforcement_threshold = object.max_voting_power_enforcement_threshold ?? "";
		return message;
	}
};

export const DelegationResponse: MessageFns<DelegationResponse, "cosmos.staking.v1beta1.DelegationResponse"> = {
	$type: "cosmos.staking.v1beta1.DelegationResponse" as const,

	encode(message: DelegationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.delegation !== undefined) {
			Delegation.encode(message.delegation, writer.uint32(10).fork()).join();
		}
		if (message.balance !== undefined) {
			Coin.encode(message.balance, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DelegationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDelegationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.delegation = Delegation.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.balance = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DelegationResponse {
		return {
			delegation: isSet(object.delegation) ? Delegation.fromJSON(object.delegation) : undefined,
			balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined
		};
	},

	toJSON(message: DelegationResponse): unknown {
		const obj: any = {};
		if (message.delegation !== undefined) {
			obj.delegation = Delegation.toJSON(message.delegation);
		}
		if (message.balance !== undefined) {
			obj.balance = Coin.toJSON(message.balance);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DelegationResponse>, I>>(base?: I): DelegationResponse {
		return DelegationResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DelegationResponse>, I>>(object: I): DelegationResponse {
		const message = createBaseDelegationResponse();
		message.delegation = object.delegation !== undefined && object.delegation !== null ? Delegation.fromPartial(object.delegation) : undefined;
		message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
		return message;
	}
};

export const RedelegationEntryResponse: MessageFns<RedelegationEntryResponse, "cosmos.staking.v1beta1.RedelegationEntryResponse"> = {
	$type: "cosmos.staking.v1beta1.RedelegationEntryResponse" as const,

	encode(message: RedelegationEntryResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.redelegation_entry !== undefined) {
			RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).join();
		}
		if (message.balance !== "") {
			writer.uint32(34).string(message.balance);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RedelegationEntryResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRedelegationEntryResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.redelegation_entry = RedelegationEntry.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.balance = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RedelegationEntryResponse {
		return {
			redelegation_entry: isSet(object.redelegation_entry) ? RedelegationEntry.fromJSON(object.redelegation_entry) : undefined,
			balance: isSet(object.balance) ? globalThis.String(object.balance) : ""
		};
	},

	toJSON(message: RedelegationEntryResponse): unknown {
		const obj: any = {};
		if (message.redelegation_entry !== undefined) {
			obj.redelegation_entry = RedelegationEntry.toJSON(message.redelegation_entry);
		}
		if (message.balance !== "") {
			obj.balance = message.balance;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RedelegationEntryResponse>, I>>(base?: I): RedelegationEntryResponse {
		return RedelegationEntryResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RedelegationEntryResponse>, I>>(object: I): RedelegationEntryResponse {
		const message = createBaseRedelegationEntryResponse();
		message.redelegation_entry =
			object.redelegation_entry !== undefined && object.redelegation_entry !== null ? RedelegationEntry.fromPartial(object.redelegation_entry) : undefined;
		message.balance = object.balance ?? "";
		return message;
	}
};

export const RedelegationResponse: MessageFns<RedelegationResponse, "cosmos.staking.v1beta1.RedelegationResponse"> = {
	$type: "cosmos.staking.v1beta1.RedelegationResponse" as const,

	encode(message: RedelegationResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.redelegation !== undefined) {
			Redelegation.encode(message.redelegation, writer.uint32(10).fork()).join();
		}
		for (const v of message.entries) {
			RedelegationEntryResponse.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): RedelegationResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseRedelegationResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.redelegation = Redelegation.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.entries.push(RedelegationEntryResponse.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): RedelegationResponse {
		return {
			redelegation: isSet(object.redelegation) ? Redelegation.fromJSON(object.redelegation) : undefined,
			entries: globalThis.Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntryResponse.fromJSON(e)) : []
		};
	},

	toJSON(message: RedelegationResponse): unknown {
		const obj: any = {};
		if (message.redelegation !== undefined) {
			obj.redelegation = Redelegation.toJSON(message.redelegation);
		}
		if (message.entries?.length) {
			obj.entries = message.entries.map((e) => RedelegationEntryResponse.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<RedelegationResponse>, I>>(base?: I): RedelegationResponse {
		return RedelegationResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<RedelegationResponse>, I>>(object: I): RedelegationResponse {
		const message = createBaseRedelegationResponse();
		message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? Redelegation.fromPartial(object.redelegation) : undefined;
		message.entries = object.entries?.map((e) => RedelegationEntryResponse.fromPartial(e)) || [];
		return message;
	}
};

export const Pool: MessageFns<Pool, "cosmos.staking.v1beta1.Pool"> = {
	$type: "cosmos.staking.v1beta1.Pool" as const,

	encode(message: Pool, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.not_bonded_tokens !== "") {
			writer.uint32(10).string(message.not_bonded_tokens);
		}
		if (message.bonded_tokens !== "") {
			writer.uint32(18).string(message.bonded_tokens);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Pool {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePool();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.not_bonded_tokens = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.bonded_tokens = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Pool {
		return {
			not_bonded_tokens: isSet(object.not_bonded_tokens) ? globalThis.String(object.not_bonded_tokens) : "",
			bonded_tokens: isSet(object.bonded_tokens) ? globalThis.String(object.bonded_tokens) : ""
		};
	},

	toJSON(message: Pool): unknown {
		const obj: any = {};
		if (message.not_bonded_tokens !== "") {
			obj.not_bonded_tokens = message.not_bonded_tokens;
		}
		if (message.bonded_tokens !== "") {
			obj.bonded_tokens = message.bonded_tokens;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Pool>, I>>(base?: I): Pool {
		return Pool.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
		const message = createBasePool();
		message.not_bonded_tokens = object.not_bonded_tokens ?? "";
		message.bonded_tokens = object.bonded_tokens ?? "";
		return message;
	}
};

export function bondStatusFromJSON(object: any): BondStatus {
	switch (object) {
		case 0:
		case "BOND_STATUS_UNSPECIFIED":
			return BondStatus.BOND_STATUS_UNSPECIFIED;
		case 1:
		case "BOND_STATUS_UNBONDED":
			return BondStatus.BOND_STATUS_UNBONDED;
		case 2:
		case "BOND_STATUS_UNBONDING":
			return BondStatus.BOND_STATUS_UNBONDING;
		case 3:
		case "BOND_STATUS_BONDED":
			return BondStatus.BOND_STATUS_BONDED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return BondStatus.UNRECOGNIZED;
	}
}

export function bondStatusToJSON(object: BondStatus): string {
	switch (object) {
		case BondStatus.BOND_STATUS_UNSPECIFIED:
			return "BOND_STATUS_UNSPECIFIED";
		case BondStatus.BOND_STATUS_UNBONDED:
			return "BOND_STATUS_UNBONDED";
		case BondStatus.BOND_STATUS_UNBONDING:
			return "BOND_STATUS_UNBONDING";
		case BondStatus.BOND_STATUS_BONDED:
			return "BOND_STATUS_BONDED";
		case BondStatus.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

function createBaseHistoricalInfo(): HistoricalInfo {
	return { header: undefined, valset: [] };
}

function createBaseCommissionRates(): CommissionRates {
	return { rate: "", max_rate: "", max_change_rate: "" };
}

function createBaseCommission(): Commission {
	return { commission_rates: undefined, update_time: undefined };
}

function createBaseDescription(): Description {
	return { moniker: "", identity: "", website: "", security_contact: "", details: "" };
}

function createBaseValidator(): Validator {
	return {
		operator_address: "",
		consensus_pubkey: undefined,
		jailed: false,
		status: 0,
		tokens: "",
		delegator_shares: "",
		description: undefined,
		unbonding_height: 0,
		unbonding_time: undefined,
		commission: undefined,
		min_self_delegation: ""
	};
}

function createBaseValAddresses(): ValAddresses {
	return { addresses: [] };
}

function createBaseDVPair(): DVPair {
	return { delegator_address: "", validator_address: "" };
}

function createBaseDVPairs(): DVPairs {
	return { pairs: [] };
}

function createBaseDVVTriplet(): DVVTriplet {
	return { delegator_address: "", validator_src_address: "", validator_dst_address: "" };
}

function createBaseDVVTriplets(): DVVTriplets {
	return { triplets: [] };
}

function createBaseDelegation(): Delegation {
	return { delegator_address: "", validator_address: "", shares: "" };
}

function createBaseUnbondingDelegation(): UnbondingDelegation {
	return { delegator_address: "", validator_address: "", entries: [] };
}

function createBaseUnbondingDelegationEntry(): UnbondingDelegationEntry {
	return { creation_height: 0, completion_time: undefined, initial_balance: "", balance: "" };
}

function createBaseRedelegationEntry(): RedelegationEntry {
	return { creation_height: 0, completion_time: undefined, initial_balance: "", shares_dst: "" };
}

function createBaseRedelegation(): Redelegation {
	return { delegator_address: "", validator_src_address: "", validator_dst_address: "", entries: [] };
}

function createBaseParams(): Params {
	return {
		unbonding_time: undefined,
		max_validators: 0,
		max_entries: 0,
		historical_entries: 0,
		bond_denom: "",
		min_commission_rate: "",
		max_voting_power_ratio: "",
		max_voting_power_enforcement_threshold: ""
	};
}

function createBaseDelegationResponse(): DelegationResponse {
	return { delegation: undefined, balance: undefined };
}

function createBaseRedelegationEntryResponse(): RedelegationEntryResponse {
	return { redelegation_entry: undefined, balance: "" };
}

function createBaseRedelegationResponse(): RedelegationResponse {
	return { redelegation: undefined, entries: [] };
}

function createBasePool(): Pool {
	return { not_bonded_tokens: "", bonded_tokens: "" };
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
	["/cosmos.staking.v1beta1.HistoricalInfo", HistoricalInfo as never],
	["/cosmos.staking.v1beta1.CommissionRates", CommissionRates as never],
	["/cosmos.staking.v1beta1.Commission", Commission as never],
	["/cosmos.staking.v1beta1.Description", Description as never],
	["/cosmos.staking.v1beta1.Validator", Validator as never],
	["/cosmos.staking.v1beta1.ValAddresses", ValAddresses as never],
	["/cosmos.staking.v1beta1.DVPair", DVPair as never],
	["/cosmos.staking.v1beta1.DVPairs", DVPairs as never],
	["/cosmos.staking.v1beta1.DVVTriplet", DVVTriplet as never],
	["/cosmos.staking.v1beta1.DVVTriplets", DVVTriplets as never],
	["/cosmos.staking.v1beta1.Delegation", Delegation as never],
	["/cosmos.staking.v1beta1.UnbondingDelegation", UnbondingDelegation as never],
	["/cosmos.staking.v1beta1.RedelegationEntry", RedelegationEntry as never],
	["/cosmos.staking.v1beta1.Redelegation", Redelegation as never],
	["/cosmos.staking.v1beta1.Params", Params as never],
	["/cosmos.staking.v1beta1.DelegationResponse", DelegationResponse as never],
	["/cosmos.staking.v1beta1.RedelegationResponse", RedelegationResponse as never],
	["/cosmos.staking.v1beta1.Pool", Pool as never]
];
export const aminoConverters = {
	"/cosmos.staking.v1beta1.HistoricalInfo": {
		aminoType: "cosmos-sdk/HistoricalInfo",
		toAmino: (message: HistoricalInfo) => ({ ...message }),
		fromAmino: (object: HistoricalInfo) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.CommissionRates": {
		aminoType: "cosmos-sdk/CommissionRates",
		toAmino: (message: CommissionRates) => ({ ...message }),
		fromAmino: (object: CommissionRates) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.Commission": {
		aminoType: "cosmos-sdk/Commission",
		toAmino: (message: Commission) => ({ ...message }),
		fromAmino: (object: Commission) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.Description": {
		aminoType: "cosmos-sdk/Description",
		toAmino: (message: Description) => ({ ...message }),
		fromAmino: (object: Description) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.Validator": {
		aminoType: "cosmos-sdk/Validator",
		toAmino: (message: Validator) => ({ ...message }),
		fromAmino: (object: Validator) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.ValAddresses": {
		aminoType: "cosmos-sdk/ValAddresses",
		toAmino: (message: ValAddresses) => ({ ...message }),
		fromAmino: (object: ValAddresses) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.DVPair": {
		aminoType: "cosmos-sdk/DVPair",
		toAmino: (message: DVPair) => ({ ...message }),
		fromAmino: (object: DVPair) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.DVPairs": {
		aminoType: "cosmos-sdk/DVPairs",
		toAmino: (message: DVPairs) => ({ ...message }),
		fromAmino: (object: DVPairs) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.DVVTriplet": {
		aminoType: "cosmos-sdk/DVVTriplet",
		toAmino: (message: DVVTriplet) => ({ ...message }),
		fromAmino: (object: DVVTriplet) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.DVVTriplets": {
		aminoType: "cosmos-sdk/DVVTriplets",
		toAmino: (message: DVVTriplets) => ({ ...message }),
		fromAmino: (object: DVVTriplets) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.Delegation": {
		aminoType: "cosmos-sdk/Delegation",
		toAmino: (message: Delegation) => ({ ...message }),
		fromAmino: (object: Delegation) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.UnbondingDelegation": {
		aminoType: "cosmos-sdk/UnbondingDelegation",
		toAmino: (message: UnbondingDelegation) => ({ ...message }),
		fromAmino: (object: UnbondingDelegation) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.RedelegationEntry": {
		aminoType: "cosmos-sdk/RedelegationEntry",
		toAmino: (message: RedelegationEntry) => ({ ...message }),
		fromAmino: (object: RedelegationEntry) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.Redelegation": {
		aminoType: "cosmos-sdk/Redelegation",
		toAmino: (message: Redelegation) => ({ ...message }),
		fromAmino: (object: Redelegation) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.Params": {
		aminoType: "cosmos-sdk/Params",
		toAmino: (message: Params) => ({ ...message }),
		fromAmino: (object: Params) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.DelegationResponse": {
		aminoType: "cosmos-sdk/DelegationResponse",
		toAmino: (message: DelegationResponse) => ({ ...message }),
		fromAmino: (object: DelegationResponse) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.RedelegationResponse": {
		aminoType: "cosmos-sdk/RedelegationResponse",
		toAmino: (message: RedelegationResponse) => ({ ...message }),
		fromAmino: (object: RedelegationResponse) => ({ ...object })
	},

	"/cosmos.staking.v1beta1.Pool": {
		aminoType: "cosmos-sdk/Pool",
		toAmino: (message: Pool) => ({ ...message }),
		fromAmino: (object: Pool) => ({ ...object })
	}
};
