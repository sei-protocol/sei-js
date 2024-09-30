import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

import { Coin } from "../../base/v1beta1/coin";

import { Metadata, Params } from "./bank";

import type {
	QueryAllBalancesRequest as QueryAllBalancesRequestType,
	QueryAllBalancesResponse as QueryAllBalancesResponseType,
	QueryBalanceRequest as QueryBalanceRequestType,
	QueryBalanceResponse as QueryBalanceResponseType,
	QueryDenomMetadataRequest as QueryDenomMetadataRequestType,
	QueryDenomMetadataResponse as QueryDenomMetadataResponseType,
	QueryDenomsMetadataRequest as QueryDenomsMetadataRequestType,
	QueryDenomsMetadataResponse as QueryDenomsMetadataResponseType,
	QueryParamsRequest as QueryParamsRequestType,
	QueryParamsResponse as QueryParamsResponseType,
	QuerySpendableBalancesRequest as QuerySpendableBalancesRequestType,
	QuerySpendableBalancesResponse as QuerySpendableBalancesResponseType,
	QuerySupplyOfRequest as QuerySupplyOfRequestType,
	QuerySupplyOfResponse as QuerySupplyOfResponseType,
	QueryTotalSupplyRequest as QueryTotalSupplyRequestType,
	QueryTotalSupplyResponse as QueryTotalSupplyResponseType,
} from "../../../../types/cosmos/bank/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface QueryBalanceRequest extends QueryBalanceRequestType {}
interface QueryBalanceResponse extends QueryBalanceResponseType {}
interface QueryAllBalancesRequest extends QueryAllBalancesRequestType {}
interface QueryAllBalancesResponse extends QueryAllBalancesResponseType {}
interface QuerySpendableBalancesRequest extends QuerySpendableBalancesRequestType {}
interface QuerySpendableBalancesResponse extends QuerySpendableBalancesResponseType {}
interface QueryTotalSupplyRequest extends QueryTotalSupplyRequestType {}
interface QueryTotalSupplyResponse extends QueryTotalSupplyResponseType {}
interface QuerySupplyOfRequest extends QuerySupplyOfRequestType {}
interface QuerySupplyOfResponse extends QuerySupplyOfResponseType {}
interface QueryParamsRequest extends QueryParamsRequestType {}
interface QueryParamsResponse extends QueryParamsResponseType {}
interface QueryDenomsMetadataRequest extends QueryDenomsMetadataRequestType {}
interface QueryDenomsMetadataResponse extends QueryDenomsMetadataResponseType {}
interface QueryDenomMetadataRequest extends QueryDenomMetadataRequestType {}
interface QueryDenomMetadataResponse extends QueryDenomMetadataResponseType {}

export const QueryBalanceRequest: MessageFns<QueryBalanceRequest, "cosmos.bank.v1beta1.QueryBalanceRequest"> = {
	$type: "cosmos.bank.v1beta1.QueryBalanceRequest" as const,

	encode(message: QueryBalanceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryBalanceRequest();
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

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryBalanceRequest {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
		};
	},

	toJSON(message: QueryBalanceRequest): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(base?: I): QueryBalanceRequest {
		return QueryBalanceRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest {
		const message = createBaseQueryBalanceRequest();
		message.address = object.address ?? "";
		message.denom = object.denom ?? "";
		return message;
	},
};

export const QueryBalanceResponse: MessageFns<QueryBalanceResponse, "cosmos.bank.v1beta1.QueryBalanceResponse"> = {
	$type: "cosmos.bank.v1beta1.QueryBalanceResponse" as const,

	encode(message: QueryBalanceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.balance !== undefined) {
			Coin.encode(message.balance, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryBalanceResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
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

	fromJSON(object: any): QueryBalanceResponse {
		return { balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined };
	},

	toJSON(message: QueryBalanceResponse): unknown {
		const obj: any = {};
		if (message.balance !== undefined) {
			obj.balance = Coin.toJSON(message.balance);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(base?: I): QueryBalanceResponse {
		return QueryBalanceResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
		const message = createBaseQueryBalanceResponse();
		message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
		return message;
	},
};

export const QueryAllBalancesRequest: MessageFns<QueryAllBalancesRequest, "cosmos.bank.v1beta1.QueryAllBalancesRequest"> = {
	$type: "cosmos.bank.v1beta1.QueryAllBalancesRequest" as const,

	encode(message: QueryAllBalancesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllBalancesRequest();
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

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryAllBalancesRequest {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryAllBalancesRequest): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(base?: I): QueryAllBalancesRequest {
		return QueryAllBalancesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(object: I): QueryAllBalancesRequest {
		const message = createBaseQueryAllBalancesRequest();
		message.address = object.address ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryAllBalancesResponse: MessageFns<QueryAllBalancesResponse, "cosmos.bank.v1beta1.QueryAllBalancesResponse"> = {
	$type: "cosmos.bank.v1beta1.QueryAllBalancesResponse" as const,

	encode(message: QueryAllBalancesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.balances) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryAllBalancesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryAllBalancesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.balances.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryAllBalancesResponse {
		return {
			balances: globalThis.Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryAllBalancesResponse): unknown {
		const obj: any = {};
		if (message.balances?.length) {
			obj.balances = message.balances.map((e) => Coin.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(base?: I): QueryAllBalancesResponse {
		return QueryAllBalancesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(object: I): QueryAllBalancesResponse {
		const message = createBaseQueryAllBalancesResponse();
		message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QuerySpendableBalancesRequest: MessageFns<QuerySpendableBalancesRequest, "cosmos.bank.v1beta1.QuerySpendableBalancesRequest"> = {
	$type: "cosmos.bank.v1beta1.QuerySpendableBalancesRequest" as const,

	encode(message: QuerySpendableBalancesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySpendableBalancesRequest();
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

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySpendableBalancesRequest {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QuerySpendableBalancesRequest): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySpendableBalancesRequest>, I>>(base?: I): QuerySpendableBalancesRequest {
		return QuerySpendableBalancesRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySpendableBalancesRequest>, I>>(object: I): QuerySpendableBalancesRequest {
		const message = createBaseQuerySpendableBalancesRequest();
		message.address = object.address ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QuerySpendableBalancesResponse: MessageFns<QuerySpendableBalancesResponse, "cosmos.bank.v1beta1.QuerySpendableBalancesResponse"> = {
	$type: "cosmos.bank.v1beta1.QuerySpendableBalancesResponse" as const,

	encode(message: QuerySpendableBalancesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.balances) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySpendableBalancesResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySpendableBalancesResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.balances.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySpendableBalancesResponse {
		return {
			balances: globalThis.Array.isArray(object?.balances) ? object.balances.map((e: any) => Coin.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QuerySpendableBalancesResponse): unknown {
		const obj: any = {};
		if (message.balances?.length) {
			obj.balances = message.balances.map((e) => Coin.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySpendableBalancesResponse>, I>>(base?: I): QuerySpendableBalancesResponse {
		return QuerySpendableBalancesResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySpendableBalancesResponse>, I>>(object: I): QuerySpendableBalancesResponse {
		const message = createBaseQuerySpendableBalancesResponse();
		message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryTotalSupplyRequest: MessageFns<QueryTotalSupplyRequest, "cosmos.bank.v1beta1.QueryTotalSupplyRequest"> = {
	$type: "cosmos.bank.v1beta1.QueryTotalSupplyRequest" as const,

	encode(message: QueryTotalSupplyRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryTotalSupplyRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryTotalSupplyRequest {
		return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
	},

	toJSON(message: QueryTotalSupplyRequest): unknown {
		const obj: any = {};
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(base?: I): QueryTotalSupplyRequest {
		return QueryTotalSupplyRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(object: I): QueryTotalSupplyRequest {
		const message = createBaseQueryTotalSupplyRequest();
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryTotalSupplyResponse: MessageFns<QueryTotalSupplyResponse, "cosmos.bank.v1beta1.QueryTotalSupplyResponse"> = {
	$type: "cosmos.bank.v1beta1.QueryTotalSupplyResponse" as const,

	encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.supply) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSupplyResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryTotalSupplyResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.supply.push(Coin.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryTotalSupplyResponse {
		return {
			supply: globalThis.Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryTotalSupplyResponse): unknown {
		const obj: any = {};
		if (message.supply?.length) {
			obj.supply = message.supply.map((e) => Coin.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(base?: I): QueryTotalSupplyResponse {
		return QueryTotalSupplyResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(object: I): QueryTotalSupplyResponse {
		const message = createBaseQueryTotalSupplyResponse();
		message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QuerySupplyOfRequest: MessageFns<QuerySupplyOfRequest, "cosmos.bank.v1beta1.QuerySupplyOfRequest"> = {
	$type: "cosmos.bank.v1beta1.QuerySupplyOfRequest" as const,

	encode(message: QuerySupplyOfRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySupplyOfRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySupplyOfRequest {
		return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
	},

	toJSON(message: QuerySupplyOfRequest): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(base?: I): QuerySupplyOfRequest {
		return QuerySupplyOfRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(object: I): QuerySupplyOfRequest {
		const message = createBaseQuerySupplyOfRequest();
		message.denom = object.denom ?? "";
		return message;
	},
};

export const QuerySupplyOfResponse: MessageFns<QuerySupplyOfResponse, "cosmos.bank.v1beta1.QuerySupplyOfResponse"> = {
	$type: "cosmos.bank.v1beta1.QuerySupplyOfResponse" as const,

	encode(message: QuerySupplyOfResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyOfResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySupplyOfResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.amount = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySupplyOfResponse {
		return { amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined };
	},

	toJSON(message: QuerySupplyOfResponse): unknown {
		const obj: any = {};
		if (message.amount !== undefined) {
			obj.amount = Coin.toJSON(message.amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(base?: I): QuerySupplyOfResponse {
		return QuerySupplyOfResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(object: I): QuerySupplyOfResponse {
		const message = createBaseQuerySupplyOfResponse();
		message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
		return message;
	},
};

export const QueryParamsRequest: MessageFns<QueryParamsRequest, "cosmos.bank.v1beta1.QueryParamsRequest"> = {
	$type: "cosmos.bank.v1beta1.QueryParamsRequest" as const,

	encode(_: QueryParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsRequest();
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

	fromJSON(_: any): QueryParamsRequest {
		return {};
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
		return QueryParamsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
		const message = createBaseQueryParamsRequest();
		return message;
	},
};

export const QueryParamsResponse: MessageFns<QueryParamsResponse, "cosmos.bank.v1beta1.QueryParamsResponse"> = {
	$type: "cosmos.bank.v1beta1.QueryParamsResponse" as const,

	encode(message: QueryParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryParamsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.params = Params.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		if (message.params !== undefined) {
			obj.params = Params.toJSON(message.params);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
		return QueryParamsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
		const message = createBaseQueryParamsResponse();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		return message;
	},
};

export const QueryDenomsMetadataRequest: MessageFns<QueryDenomsMetadataRequest, "cosmos.bank.v1beta1.QueryDenomsMetadataRequest"> = {
	$type: "cosmos.bank.v1beta1.QueryDenomsMetadataRequest" as const,

	encode(message: QueryDenomsMetadataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomsMetadataRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.pagination = PageRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomsMetadataRequest {
		return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
	},

	toJSON(message: QueryDenomsMetadataRequest): unknown {
		const obj: any = {};
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomsMetadataRequest>, I>>(base?: I): QueryDenomsMetadataRequest {
		return QueryDenomsMetadataRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataRequest>, I>>(object: I): QueryDenomsMetadataRequest {
		const message = createBaseQueryDenomsMetadataRequest();
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryDenomsMetadataResponse: MessageFns<QueryDenomsMetadataResponse, "cosmos.bank.v1beta1.QueryDenomsMetadataResponse"> = {
	$type: "cosmos.bank.v1beta1.QueryDenomsMetadataResponse" as const,

	encode(message: QueryDenomsMetadataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.metadatas) {
			Metadata.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomsMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomsMetadataResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.metadatas.push(Metadata.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.pagination = PageResponse.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomsMetadataResponse {
		return {
			metadatas: globalThis.Array.isArray(object?.metadatas) ? object.metadatas.map((e: any) => Metadata.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
		};
	},

	toJSON(message: QueryDenomsMetadataResponse): unknown {
		const obj: any = {};
		if (message.metadatas?.length) {
			obj.metadatas = message.metadatas.map((e) => Metadata.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomsMetadataResponse>, I>>(base?: I): QueryDenomsMetadataResponse {
		return QueryDenomsMetadataResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomsMetadataResponse>, I>>(object: I): QueryDenomsMetadataResponse {
		const message = createBaseQueryDenomsMetadataResponse();
		message.metadatas = object.metadatas?.map((e) => Metadata.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
};

export const QueryDenomMetadataRequest: MessageFns<QueryDenomMetadataRequest, "cosmos.bank.v1beta1.QueryDenomMetadataRequest"> = {
	$type: "cosmos.bank.v1beta1.QueryDenomMetadataRequest" as const,

	encode(message: QueryDenomMetadataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.denom !== "") {
			writer.uint32(10).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomMetadataRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomMetadataRequest {
		return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
	},

	toJSON(message: QueryDenomMetadataRequest): unknown {
		const obj: any = {};
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(base?: I): QueryDenomMetadataRequest {
		return QueryDenomMetadataRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataRequest>, I>>(object: I): QueryDenomMetadataRequest {
		const message = createBaseQueryDenomMetadataRequest();
		message.denom = object.denom ?? "";
		return message;
	},
};

export const QueryDenomMetadataResponse: MessageFns<QueryDenomMetadataResponse, "cosmos.bank.v1beta1.QueryDenomMetadataResponse"> = {
	$type: "cosmos.bank.v1beta1.QueryDenomMetadataResponse" as const,

	encode(message: QueryDenomMetadataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.metadata !== undefined) {
			Metadata.encode(message.metadata, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryDenomMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryDenomMetadataResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.metadata = Metadata.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryDenomMetadataResponse {
		return { metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined };
	},

	toJSON(message: QueryDenomMetadataResponse): unknown {
		const obj: any = {};
		if (message.metadata !== undefined) {
			obj.metadata = Metadata.toJSON(message.metadata);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(base?: I): QueryDenomMetadataResponse {
		return QueryDenomMetadataResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryDenomMetadataResponse>, I>>(object: I): QueryDenomMetadataResponse {
		const message = createBaseQueryDenomMetadataResponse();
		message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
		return message;
	},
};

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
	return { address: "", denom: "" };
}

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
	return { balance: undefined };
}

function createBaseQueryAllBalancesRequest(): QueryAllBalancesRequest {
	return { address: "", pagination: undefined };
}

function createBaseQueryAllBalancesResponse(): QueryAllBalancesResponse {
	return { balances: [], pagination: undefined };
}

function createBaseQuerySpendableBalancesRequest(): QuerySpendableBalancesRequest {
	return { address: "", pagination: undefined };
}

function createBaseQuerySpendableBalancesResponse(): QuerySpendableBalancesResponse {
	return { balances: [], pagination: undefined };
}

function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
	return { pagination: undefined };
}

function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
	return { supply: [], pagination: undefined };
}

function createBaseQuerySupplyOfRequest(): QuerySupplyOfRequest {
	return { denom: "" };
}

function createBaseQuerySupplyOfResponse(): QuerySupplyOfResponse {
	return { amount: undefined };
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
	return {};
}

function createBaseQueryParamsResponse(): QueryParamsResponse {
	return { params: undefined };
}

function createBaseQueryDenomsMetadataRequest(): QueryDenomsMetadataRequest {
	return { pagination: undefined };
}

function createBaseQueryDenomsMetadataResponse(): QueryDenomsMetadataResponse {
	return { metadatas: [], pagination: undefined };
}

function createBaseQueryDenomMetadataRequest(): QueryDenomMetadataRequest {
	return { denom: "" };
}

function createBaseQueryDenomMetadataResponse(): QueryDenomMetadataResponse {
	return { metadata: undefined };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.bank.v1beta1.QueryBalanceRequest", QueryBalanceRequest as never],
	["/cosmos.bank.v1beta1.QueryBalanceResponse", QueryBalanceResponse as never],
	["/cosmos.bank.v1beta1.QuerySupplyOfRequest", QuerySupplyOfRequest as never],
	["/cosmos.bank.v1beta1.QuerySupplyOfResponse", QuerySupplyOfResponse as never],
	["/cosmos.bank.v1beta1.QueryParamsRequest", QueryParamsRequest as never],
	["/cosmos.bank.v1beta1.QueryParamsResponse", QueryParamsResponse as never],
];
export const aminoConverters = {
	"/cosmos.bank.v1beta1.QueryBalanceRequest": {
		aminoType: "cosmos-sdk/QueryBalanceRequest",
		toAmino: (message: QueryBalanceRequest) => ({ ...message }),
		fromAmino: (object: QueryBalanceRequest) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.QueryBalanceResponse": {
		aminoType: "cosmos-sdk/QueryBalanceResponse",
		toAmino: (message: QueryBalanceResponse) => ({ ...message }),
		fromAmino: (object: QueryBalanceResponse) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.QuerySupplyOfRequest": {
		aminoType: "cosmos-sdk/QuerySupplyOfRequest",
		toAmino: (message: QuerySupplyOfRequest) => ({ ...message }),
		fromAmino: (object: QuerySupplyOfRequest) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.QuerySupplyOfResponse": {
		aminoType: "cosmos-sdk/QuerySupplyOfResponse",
		toAmino: (message: QuerySupplyOfResponse) => ({ ...message }),
		fromAmino: (object: QuerySupplyOfResponse) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.QueryParamsRequest": {
		aminoType: "cosmos-sdk/QueryParamsRequest",
		toAmino: (message: QueryParamsRequest) => ({ ...message }),
		fromAmino: (object: QueryParamsRequest) => ({ ...object }),
	},

	"/cosmos.bank.v1beta1.QueryParamsResponse": {
		aminoType: "cosmos-sdk/QueryParamsResponse",
		toAmino: (message: QueryParamsResponse) => ({ ...message }),
		fromAmino: (object: QueryParamsResponse) => ({ ...object }),
	},
};
