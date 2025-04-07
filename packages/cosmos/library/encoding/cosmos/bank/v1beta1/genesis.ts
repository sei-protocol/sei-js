import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Coin } from "../../base/v1beta1/coin";

import { Metadata, Params } from "./bank";

import type { Balance as Balance_type, GenesisState as GenesisState_type, WeiBalance as WeiBalance_type } from "../../../../types/cosmos/bank/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common";

export interface GenesisState extends GenesisState_type {}
export interface Balance extends Balance_type {}
export interface WeiBalance extends WeiBalance_type {}

export const GenesisState: MessageFns<GenesisState, "cosmos.bank.v1beta1.GenesisState"> = {
	$type: "cosmos.bank.v1beta1.GenesisState" as const,

	encode(message: GenesisState, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		for (const v of message.balances) {
			Balance.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.supply) {
			Coin.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.denom_metadata) {
			Metadata.encode(v!, writer.uint32(34).fork()).join();
		}
		for (const v of message.wei_balances) {
			WeiBalance.encode(v!, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.balances.push(Balance.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.supply.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.denom_metadata.push(Metadata.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.wei_balances.push(WeiBalance.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GenesisState {
		return {
			params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
			balances: globalThis.Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
			supply: globalThis.Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : [],
			denom_metadata: globalThis.Array.isArray(object?.denom_metadata) ? object.denom_metadata.map((e: any) => Metadata.fromJSON(e)) : [],
			wei_balances: globalThis.Array.isArray(object?.wei_balances) ? object.wei_balances.map((e: any) => WeiBalance.fromJSON(e)) : []
		};
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		if (message.balances?.length) {
			obj.balances = message.balances.map((e) => Balance.toJSON(e));
		}
		if (message.supply?.length) {
			obj.supply = message.supply.map((e) => Coin.toJSON(e));
		}
		if (message.denom_metadata?.length) {
			obj.denom_metadata = message.denom_metadata.map((e) => Metadata.toJSON(e));
		}
		if (message.wei_balances?.length) {
			obj.wei_balances = message.wei_balances.map((e) => WeiBalance.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
		return GenesisState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.balances = object.balances?.map((e) => Balance.fromPartial(e)) || [];
		message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
		message.denom_metadata = object.denom_metadata?.map((e) => Metadata.fromPartial(e)) || [];
		message.wei_balances = object.wei_balances?.map((e) => WeiBalance.fromPartial(e)) || [];
		return message;
	}
};

export const Balance: MessageFns<Balance, "cosmos.bank.v1beta1.Balance"> = {
	$type: "cosmos.bank.v1beta1.Balance" as const,

	encode(message: Balance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		for (const v of message.coins) {
			Coin.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Balance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBalance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.coins.push(Coin.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Balance {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			coins: globalThis.Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
		};
	},

	toJSON(message: Balance): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.coins?.length) {
			obj.coins = message.coins.map((e) => Coin.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Balance>, I>>(base?: I): Balance {
		return Balance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Balance>, I>>(object: I): Balance {
		const message = createBaseBalance();
		message.address = object.address ?? "";
		message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	}
};

export const WeiBalance: MessageFns<WeiBalance, "cosmos.bank.v1beta1.WeiBalance"> = {
	$type: "cosmos.bank.v1beta1.WeiBalance" as const,

	encode(message: WeiBalance, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.amount !== "") {
			writer.uint32(18).string(message.amount);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): WeiBalance {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWeiBalance();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.amount = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): WeiBalance {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			amount: isSet(object.amount) ? globalThis.String(object.amount) : ""
		};
	},

	toJSON(message: WeiBalance): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.amount !== "") {
			obj.amount = message.amount;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<WeiBalance>, I>>(base?: I): WeiBalance {
		return WeiBalance.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<WeiBalance>, I>>(object: I): WeiBalance {
		const message = createBaseWeiBalance();
		message.address = object.address ?? "";
		message.amount = object.amount ?? "";
		return message;
	}
};

function createBaseGenesisState(): GenesisState {
	return { params: undefined, balances: [], supply: [], denom_metadata: [], wei_balances: [] };
}

function createBaseBalance(): Balance {
	return { address: "", coins: [] };
}

function createBaseWeiBalance(): WeiBalance {
	return { address: "", amount: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.bank.v1beta1.GenesisState", GenesisState as never],
	["/cosmos.bank.v1beta1.Balance", Balance as never],
	["/cosmos.bank.v1beta1.WeiBalance", WeiBalance as never]
];
export const aminoConverters = {
	"/cosmos.bank.v1beta1.GenesisState": {
		aminoType: "cosmos-sdk/GenesisState",
		toAmino: (message: GenesisState) => ({ ...message }),
		fromAmino: (object: GenesisState) => ({ ...object })
	},

	"/cosmos.bank.v1beta1.Balance": {
		aminoType: "cosmos-sdk/Balance",
		toAmino: (message: Balance) => ({ ...message }),
		fromAmino: (object: Balance) => ({ ...object })
	},

	"/cosmos.bank.v1beta1.WeiBalance": {
		aminoType: "cosmos-sdk/WeiBalance",
		toAmino: (message: WeiBalance) => ({ ...message }),
		fromAmino: (object: WeiBalance) => ({ ...object })
	}
};
