import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";

import { CtAccount, CtAccountWithDenom } from "./confidential";

import { InitializeAccountMsgProofs, TransferMsgProofs, WithdrawMsgProofs } from "./zk";

import type {
	ApplyPendingBalanceDecrypted as ApplyPendingBalanceDecrypted_type,
	DecryptedCtAccount as DecryptedCtAccount_type,
	GetAllCtAccountsRequest as GetAllCtAccountsRequest_type,
	GetAllCtAccountsResponse as GetAllCtAccountsResponse_type,
	GetCtAccountRequest as GetCtAccountRequest_type,
	GetCtAccountResponse as GetCtAccountResponse_type,
	InitializeAccountDecrypted as InitializeAccountDecrypted_type,
	TransferDecrypted as TransferDecrypted_type,
	WithdrawDecrypted as WithdrawDecrypted_type
} from "../../types/confidentialtransfers";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface GetCtAccountRequest extends GetCtAccountRequest_type {}
export interface GetCtAccountResponse extends GetCtAccountResponse_type {}
export interface GetAllCtAccountsRequest extends GetAllCtAccountsRequest_type {}
export interface GetAllCtAccountsResponse extends GetAllCtAccountsResponse_type {}
export interface DecryptedCtAccount extends DecryptedCtAccount_type {}
export interface ApplyPendingBalanceDecrypted extends ApplyPendingBalanceDecrypted_type {}
export interface InitializeAccountDecrypted extends InitializeAccountDecrypted_type {}
export interface WithdrawDecrypted extends WithdrawDecrypted_type {}
export interface TransferDecrypted extends TransferDecrypted_type {}

export const GetCtAccountRequest: MessageFns<GetCtAccountRequest, "seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest" as const,

	encode(message: GetCtAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetCtAccountRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetCtAccountRequest();
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

	fromJSON(object: any): GetCtAccountRequest {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : ""
		};
	},

	toJSON(message: GetCtAccountRequest): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetCtAccountRequest>, I>>(base?: I): GetCtAccountRequest {
		return GetCtAccountRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetCtAccountRequest>, I>>(object: I): GetCtAccountRequest {
		const message = createBaseGetCtAccountRequest();
		message.address = object.address ?? "";
		message.denom = object.denom ?? "";
		return message;
	}
};

export const GetCtAccountResponse: MessageFns<GetCtAccountResponse, "seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse" as const,

	encode(message: GetCtAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.account !== undefined) {
			CtAccount.encode(message.account, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetCtAccountResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetCtAccountResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.account = CtAccount.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetCtAccountResponse {
		return { account: isSet(object.account) ? CtAccount.fromJSON(object.account) : undefined };
	},

	toJSON(message: GetCtAccountResponse): unknown {
		const obj: any = {};
		if (message.account !== undefined) {
			obj.account = CtAccount.toJSON(message.account);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetCtAccountResponse>, I>>(base?: I): GetCtAccountResponse {
		return GetCtAccountResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetCtAccountResponse>, I>>(object: I): GetCtAccountResponse {
		const message = createBaseGetCtAccountResponse();
		message.account = object.account !== undefined && object.account !== null ? CtAccount.fromPartial(object.account) : undefined;
		return message;
	}
};

export const GetAllCtAccountsRequest: MessageFns<GetAllCtAccountsRequest, "seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest" as const,

	encode(message: GetAllCtAccountsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.address !== "") {
			writer.uint32(10).string(message.address);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetAllCtAccountsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetAllCtAccountsRequest();
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

	fromJSON(object: any): GetAllCtAccountsRequest {
		return {
			address: isSet(object.address) ? globalThis.String(object.address) : "",
			pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: GetAllCtAccountsRequest): unknown {
		const obj: any = {};
		if (message.address !== "") {
			obj.address = message.address;
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageRequest.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetAllCtAccountsRequest>, I>>(base?: I): GetAllCtAccountsRequest {
		return GetAllCtAccountsRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetAllCtAccountsRequest>, I>>(object: I): GetAllCtAccountsRequest {
		const message = createBaseGetAllCtAccountsRequest();
		message.address = object.address ?? "";
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const GetAllCtAccountsResponse: MessageFns<GetAllCtAccountsResponse, "seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse" as const,

	encode(message: GetAllCtAccountsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.accounts) {
			CtAccountWithDenom.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetAllCtAccountsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetAllCtAccountsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.accounts.push(CtAccountWithDenom.decode(reader, reader.uint32()));
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

	fromJSON(object: any): GetAllCtAccountsResponse {
		return {
			accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => CtAccountWithDenom.fromJSON(e)) : [],
			pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
		};
	},

	toJSON(message: GetAllCtAccountsResponse): unknown {
		const obj: any = {};
		if (message.accounts?.length) {
			obj.accounts = message.accounts.map((e) => CtAccountWithDenom.toJSON(e));
		}
		if (message.pagination !== undefined) {
			obj.pagination = PageResponse.toJSON(message.pagination);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetAllCtAccountsResponse>, I>>(base?: I): GetAllCtAccountsResponse {
		return GetAllCtAccountsResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetAllCtAccountsResponse>, I>>(object: I): GetAllCtAccountsResponse {
		const message = createBaseGetAllCtAccountsResponse();
		message.accounts = object.accounts?.map((e) => CtAccountWithDenom.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	}
};

export const DecryptedCtAccount: MessageFns<DecryptedCtAccount, "seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount" as const,

	encode(message: DecryptedCtAccount, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.public_key.length !== 0) {
			writer.uint32(10).bytes(message.public_key);
		}
		if (message.pending_balance_lo !== 0) {
			writer.uint32(16).uint64(message.pending_balance_lo);
		}
		if (message.pending_balance_hi !== 0) {
			writer.uint32(24).uint64(message.pending_balance_hi);
		}
		if (message.combined_pending_balance !== "") {
			writer.uint32(34).string(message.combined_pending_balance);
		}
		if (message.pending_balance_credit_counter !== 0) {
			writer.uint32(40).uint32(message.pending_balance_credit_counter);
		}
		if (message.available_balance !== "") {
			writer.uint32(50).string(message.available_balance);
		}
		if (message.decryptable_available_balance !== "") {
			writer.uint32(58).string(message.decryptable_available_balance);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DecryptedCtAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDecryptedCtAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.public_key = reader.bytes();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.pending_balance_lo = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.pending_balance_hi = longToNumber(reader.uint64());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.combined_pending_balance = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.pending_balance_credit_counter = reader.uint32();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.available_balance = reader.string();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.decryptable_available_balance = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DecryptedCtAccount {
		return {
			public_key: isSet(object.public_key) ? bytesFromBase64(object.public_key) : new Uint8Array(0),
			pending_balance_lo: isSet(object.pending_balance_lo) ? globalThis.Number(object.pending_balance_lo) : 0,
			pending_balance_hi: isSet(object.pending_balance_hi) ? globalThis.Number(object.pending_balance_hi) : 0,
			combined_pending_balance: isSet(object.combined_pending_balance) ? globalThis.String(object.combined_pending_balance) : "",
			pending_balance_credit_counter: isSet(object.pending_balance_credit_counter) ? globalThis.Number(object.pending_balance_credit_counter) : 0,
			available_balance: isSet(object.available_balance) ? globalThis.String(object.available_balance) : "",
			decryptable_available_balance: isSet(object.decryptable_available_balance) ? globalThis.String(object.decryptable_available_balance) : ""
		};
	},

	toJSON(message: DecryptedCtAccount): unknown {
		const obj: any = {};
		if (message.public_key.length !== 0) {
			obj.public_key = base64FromBytes(message.public_key);
		}
		if (message.pending_balance_lo !== 0) {
			obj.pending_balance_lo = Math.round(message.pending_balance_lo);
		}
		if (message.pending_balance_hi !== 0) {
			obj.pending_balance_hi = Math.round(message.pending_balance_hi);
		}
		if (message.combined_pending_balance !== "") {
			obj.combined_pending_balance = message.combined_pending_balance;
		}
		if (message.pending_balance_credit_counter !== 0) {
			obj.pending_balance_credit_counter = Math.round(message.pending_balance_credit_counter);
		}
		if (message.available_balance !== "") {
			obj.available_balance = message.available_balance;
		}
		if (message.decryptable_available_balance !== "") {
			obj.decryptable_available_balance = message.decryptable_available_balance;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DecryptedCtAccount>, I>>(base?: I): DecryptedCtAccount {
		return DecryptedCtAccount.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DecryptedCtAccount>, I>>(object: I): DecryptedCtAccount {
		const message = createBaseDecryptedCtAccount();
		message.public_key = object.public_key ?? new Uint8Array(0);
		message.pending_balance_lo = object.pending_balance_lo ?? 0;
		message.pending_balance_hi = object.pending_balance_hi ?? 0;
		message.combined_pending_balance = object.combined_pending_balance ?? "";
		message.pending_balance_credit_counter = object.pending_balance_credit_counter ?? 0;
		message.available_balance = object.available_balance ?? "";
		message.decryptable_available_balance = object.decryptable_available_balance ?? "";
		return message;
	}
};

export const ApplyPendingBalanceDecrypted: MessageFns<ApplyPendingBalanceDecrypted, "seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted"> =
	{
		$type: "seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted" as const,

		encode(message: ApplyPendingBalanceDecrypted, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
			if (message.address !== "") {
				writer.uint32(10).string(message.address);
			}
			if (message.denom !== "") {
				writer.uint32(18).string(message.denom);
			}
			if (message.new_decryptable_available_balance !== "") {
				writer.uint32(26).string(message.new_decryptable_available_balance);
			}
			if (message.current_pending_balance_counter !== 0) {
				writer.uint32(32).uint32(message.current_pending_balance_counter);
			}
			if (message.current_available_balance !== "") {
				writer.uint32(42).string(message.current_available_balance);
			}
			return writer;
		},

		decode(input: BinaryReader | Uint8Array, length?: number): ApplyPendingBalanceDecrypted {
			const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
			const end = length === undefined ? reader.len : reader.pos + length;
			const message = createBaseApplyPendingBalanceDecrypted();
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
					case 3:
						if (tag !== 26) {
							break;
						}

						message.new_decryptable_available_balance = reader.string();
						continue;
					case 4:
						if (tag !== 32) {
							break;
						}

						message.current_pending_balance_counter = reader.uint32();
						continue;
					case 5:
						if (tag !== 42) {
							break;
						}

						message.current_available_balance = reader.string();
						continue;
				}
				if ((tag & 7) === 4 || tag === 0) {
					break;
				}
				reader.skip(tag & 7);
			}
			return message;
		},

		fromJSON(object: any): ApplyPendingBalanceDecrypted {
			return {
				address: isSet(object.address) ? globalThis.String(object.address) : "",
				denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
				new_decryptable_available_balance: isSet(object.new_decryptable_available_balance) ? globalThis.String(object.new_decryptable_available_balance) : "",
				current_pending_balance_counter: isSet(object.current_pending_balance_counter) ? globalThis.Number(object.current_pending_balance_counter) : 0,
				current_available_balance: isSet(object.current_available_balance) ? globalThis.String(object.current_available_balance) : ""
			};
		},

		toJSON(message: ApplyPendingBalanceDecrypted): unknown {
			const obj: any = {};
			if (message.address !== "") {
				obj.address = message.address;
			}
			if (message.denom !== "") {
				obj.denom = message.denom;
			}
			if (message.new_decryptable_available_balance !== "") {
				obj.new_decryptable_available_balance = message.new_decryptable_available_balance;
			}
			if (message.current_pending_balance_counter !== 0) {
				obj.current_pending_balance_counter = Math.round(message.current_pending_balance_counter);
			}
			if (message.current_available_balance !== "") {
				obj.current_available_balance = message.current_available_balance;
			}
			return obj;
		},

		create<I extends Exact<DeepPartial<ApplyPendingBalanceDecrypted>, I>>(base?: I): ApplyPendingBalanceDecrypted {
			return ApplyPendingBalanceDecrypted.fromPartial(base ?? ({} as any));
		},
		fromPartial<I extends Exact<DeepPartial<ApplyPendingBalanceDecrypted>, I>>(object: I): ApplyPendingBalanceDecrypted {
			const message = createBaseApplyPendingBalanceDecrypted();
			message.address = object.address ?? "";
			message.denom = object.denom ?? "";
			message.new_decryptable_available_balance = object.new_decryptable_available_balance ?? "";
			message.current_pending_balance_counter = object.current_pending_balance_counter ?? 0;
			message.current_available_balance = object.current_available_balance ?? "";
			return message;
		}
	};

export const InitializeAccountDecrypted: MessageFns<InitializeAccountDecrypted, "seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted" as const,

	encode(message: InitializeAccountDecrypted, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.pubkey.length !== 0) {
			writer.uint32(26).bytes(message.pubkey);
		}
		if (message.pending_balance_lo !== 0) {
			writer.uint32(32).uint32(message.pending_balance_lo);
		}
		if (message.pending_balance_hi !== 0) {
			writer.uint32(40).uint64(message.pending_balance_hi);
		}
		if (message.available_balance !== "") {
			writer.uint32(50).string(message.available_balance);
		}
		if (message.decryptable_balance !== "") {
			writer.uint32(58).string(message.decryptable_balance);
		}
		if (message.proofs !== undefined) {
			InitializeAccountMsgProofs.encode(message.proofs, writer.uint32(66).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): InitializeAccountDecrypted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInitializeAccountDecrypted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.pubkey = reader.bytes();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.pending_balance_lo = reader.uint32();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.pending_balance_hi = longToNumber(reader.uint64());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.available_balance = reader.string();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.decryptable_balance = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.proofs = InitializeAccountMsgProofs.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InitializeAccountDecrypted {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array(0),
			pending_balance_lo: isSet(object.pending_balance_lo) ? globalThis.Number(object.pending_balance_lo) : 0,
			pending_balance_hi: isSet(object.pending_balance_hi) ? globalThis.Number(object.pending_balance_hi) : 0,
			available_balance: isSet(object.available_balance) ? globalThis.String(object.available_balance) : "",
			decryptable_balance: isSet(object.decryptable_balance) ? globalThis.String(object.decryptable_balance) : "",
			proofs: isSet(object.proofs) ? InitializeAccountMsgProofs.fromJSON(object.proofs) : undefined
		};
	},

	toJSON(message: InitializeAccountDecrypted): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.pubkey.length !== 0) {
			obj.pubkey = base64FromBytes(message.pubkey);
		}
		if (message.pending_balance_lo !== 0) {
			obj.pending_balance_lo = Math.round(message.pending_balance_lo);
		}
		if (message.pending_balance_hi !== 0) {
			obj.pending_balance_hi = Math.round(message.pending_balance_hi);
		}
		if (message.available_balance !== "") {
			obj.available_balance = message.available_balance;
		}
		if (message.decryptable_balance !== "") {
			obj.decryptable_balance = message.decryptable_balance;
		}
		if (message.proofs !== undefined) {
			obj.proofs = InitializeAccountMsgProofs.toJSON(message.proofs);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InitializeAccountDecrypted>, I>>(base?: I): InitializeAccountDecrypted {
		return InitializeAccountDecrypted.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InitializeAccountDecrypted>, I>>(object: I): InitializeAccountDecrypted {
		const message = createBaseInitializeAccountDecrypted();
		message.from_address = object.from_address ?? "";
		message.denom = object.denom ?? "";
		message.pubkey = object.pubkey ?? new Uint8Array(0);
		message.pending_balance_lo = object.pending_balance_lo ?? 0;
		message.pending_balance_hi = object.pending_balance_hi ?? 0;
		message.available_balance = object.available_balance ?? "";
		message.decryptable_balance = object.decryptable_balance ?? "";
		message.proofs = object.proofs !== undefined && object.proofs !== null ? InitializeAccountMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	}
};

export const WithdrawDecrypted: MessageFns<WithdrawDecrypted, "seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted" as const,

	encode(message: WithdrawDecrypted, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.amount !== "") {
			writer.uint32(26).string(message.amount);
		}
		if (message.decryptable_balance !== "") {
			writer.uint32(34).string(message.decryptable_balance);
		}
		if (message.remaining_balance_commitment !== "") {
			writer.uint32(42).string(message.remaining_balance_commitment);
		}
		if (message.proofs !== undefined) {
			WithdrawMsgProofs.encode(message.proofs, writer.uint32(50).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): WithdrawDecrypted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWithdrawDecrypted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.amount = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.decryptable_balance = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.remaining_balance_commitment = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.proofs = WithdrawMsgProofs.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): WithdrawDecrypted {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
			decryptable_balance: isSet(object.decryptable_balance) ? globalThis.String(object.decryptable_balance) : "",
			remaining_balance_commitment: isSet(object.remaining_balance_commitment) ? globalThis.String(object.remaining_balance_commitment) : "",
			proofs: isSet(object.proofs) ? WithdrawMsgProofs.fromJSON(object.proofs) : undefined
		};
	},

	toJSON(message: WithdrawDecrypted): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.amount !== "") {
			obj.amount = message.amount;
		}
		if (message.decryptable_balance !== "") {
			obj.decryptable_balance = message.decryptable_balance;
		}
		if (message.remaining_balance_commitment !== "") {
			obj.remaining_balance_commitment = message.remaining_balance_commitment;
		}
		if (message.proofs !== undefined) {
			obj.proofs = WithdrawMsgProofs.toJSON(message.proofs);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<WithdrawDecrypted>, I>>(base?: I): WithdrawDecrypted {
		return WithdrawDecrypted.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<WithdrawDecrypted>, I>>(object: I): WithdrawDecrypted {
		const message = createBaseWithdrawDecrypted();
		message.from_address = object.from_address ?? "";
		message.denom = object.denom ?? "";
		message.amount = object.amount ?? "";
		message.decryptable_balance = object.decryptable_balance ?? "";
		message.remaining_balance_commitment = object.remaining_balance_commitment ?? "";
		message.proofs = object.proofs !== undefined && object.proofs !== null ? WithdrawMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	}
};

export const TransferDecrypted: MessageFns<TransferDecrypted, "seiprotocol.seichain.confidentialtransfers.TransferDecrypted"> = {
	$type: "seiprotocol.seichain.confidentialtransfers.TransferDecrypted" as const,

	encode(message: TransferDecrypted, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.from_address !== "") {
			writer.uint32(10).string(message.from_address);
		}
		if (message.to_address !== "") {
			writer.uint32(18).string(message.to_address);
		}
		if (message.denom !== "") {
			writer.uint32(26).string(message.denom);
		}
		if (message.transfer_amount_lo !== 0) {
			writer.uint32(32).uint32(message.transfer_amount_lo);
		}
		if (message.transfer_amount_hi !== 0) {
			writer.uint32(40).uint32(message.transfer_amount_hi);
		}
		if (message.total_transfer_amount !== 0) {
			writer.uint32(48).uint64(message.total_transfer_amount);
		}
		if (message.remaining_balance_commitment !== "") {
			writer.uint32(58).string(message.remaining_balance_commitment);
		}
		if (message.decryptable_balance !== "") {
			writer.uint32(66).string(message.decryptable_balance);
		}
		if (message.proofs !== undefined) {
			TransferMsgProofs.encode(message.proofs, writer.uint32(74).fork()).join();
		}
		for (const v of message.auditors) {
			writer.uint32(82).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TransferDecrypted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTransferDecrypted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.from_address = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.to_address = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.transfer_amount_lo = reader.uint32();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.transfer_amount_hi = reader.uint32();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.total_transfer_amount = longToNumber(reader.uint64());
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.remaining_balance_commitment = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.decryptable_balance = reader.string();
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.proofs = TransferMsgProofs.decode(reader, reader.uint32());
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.auditors.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TransferDecrypted {
		return {
			from_address: isSet(object.from_address) ? globalThis.String(object.from_address) : "",
			to_address: isSet(object.to_address) ? globalThis.String(object.to_address) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			transfer_amount_lo: isSet(object.transfer_amount_lo) ? globalThis.Number(object.transfer_amount_lo) : 0,
			transfer_amount_hi: isSet(object.transfer_amount_hi) ? globalThis.Number(object.transfer_amount_hi) : 0,
			total_transfer_amount: isSet(object.total_transfer_amount) ? globalThis.Number(object.total_transfer_amount) : 0,
			remaining_balance_commitment: isSet(object.remaining_balance_commitment) ? globalThis.String(object.remaining_balance_commitment) : "",
			decryptable_balance: isSet(object.decryptable_balance) ? globalThis.String(object.decryptable_balance) : "",
			proofs: isSet(object.proofs) ? TransferMsgProofs.fromJSON(object.proofs) : undefined,
			auditors: globalThis.Array.isArray(object?.auditors) ? object.auditors.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: TransferDecrypted): unknown {
		const obj: any = {};
		if (message.from_address !== "") {
			obj.from_address = message.from_address;
		}
		if (message.to_address !== "") {
			obj.to_address = message.to_address;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.transfer_amount_lo !== 0) {
			obj.transfer_amount_lo = Math.round(message.transfer_amount_lo);
		}
		if (message.transfer_amount_hi !== 0) {
			obj.transfer_amount_hi = Math.round(message.transfer_amount_hi);
		}
		if (message.total_transfer_amount !== 0) {
			obj.total_transfer_amount = Math.round(message.total_transfer_amount);
		}
		if (message.remaining_balance_commitment !== "") {
			obj.remaining_balance_commitment = message.remaining_balance_commitment;
		}
		if (message.decryptable_balance !== "") {
			obj.decryptable_balance = message.decryptable_balance;
		}
		if (message.proofs !== undefined) {
			obj.proofs = TransferMsgProofs.toJSON(message.proofs);
		}
		if (message.auditors?.length) {
			obj.auditors = message.auditors;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TransferDecrypted>, I>>(base?: I): TransferDecrypted {
		return TransferDecrypted.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TransferDecrypted>, I>>(object: I): TransferDecrypted {
		const message = createBaseTransferDecrypted();
		message.from_address = object.from_address ?? "";
		message.to_address = object.to_address ?? "";
		message.denom = object.denom ?? "";
		message.transfer_amount_lo = object.transfer_amount_lo ?? 0;
		message.transfer_amount_hi = object.transfer_amount_hi ?? 0;
		message.total_transfer_amount = object.total_transfer_amount ?? 0;
		message.remaining_balance_commitment = object.remaining_balance_commitment ?? "";
		message.decryptable_balance = object.decryptable_balance ?? "";
		message.proofs = object.proofs !== undefined && object.proofs !== null ? TransferMsgProofs.fromPartial(object.proofs) : undefined;
		message.auditors = object.auditors?.map((e) => e) || [];
		return message;
	}
};

function createBaseGetCtAccountRequest(): GetCtAccountRequest {
	return { address: "", denom: "" };
}

function createBaseGetCtAccountResponse(): GetCtAccountResponse {
	return { account: undefined };
}

function createBaseGetAllCtAccountsRequest(): GetAllCtAccountsRequest {
	return { address: "", pagination: undefined };
}

function createBaseGetAllCtAccountsResponse(): GetAllCtAccountsResponse {
	return { accounts: [], pagination: undefined };
}

function createBaseDecryptedCtAccount(): DecryptedCtAccount {
	return {
		public_key: new Uint8Array(0),
		pending_balance_lo: 0,
		pending_balance_hi: 0,
		combined_pending_balance: "",
		pending_balance_credit_counter: 0,
		available_balance: "",
		decryptable_available_balance: ""
	};
}

function createBaseApplyPendingBalanceDecrypted(): ApplyPendingBalanceDecrypted {
	return {
		address: "",
		denom: "",
		new_decryptable_available_balance: "",
		current_pending_balance_counter: 0,
		current_available_balance: ""
	};
}

function createBaseInitializeAccountDecrypted(): InitializeAccountDecrypted {
	return {
		from_address: "",
		denom: "",
		pubkey: new Uint8Array(0),
		pending_balance_lo: 0,
		pending_balance_hi: 0,
		available_balance: "",
		decryptable_balance: "",
		proofs: undefined
	};
}

function createBaseWithdrawDecrypted(): WithdrawDecrypted {
	return {
		from_address: "",
		denom: "",
		amount: "",
		decryptable_balance: "",
		remaining_balance_commitment: "",
		proofs: undefined
	};
}

function createBaseTransferDecrypted(): TransferDecrypted {
	return {
		from_address: "",
		to_address: "",
		denom: "",
		transfer_amount_lo: 0,
		transfer_amount_hi: 0,
		total_transfer_amount: 0,
		remaining_balance_commitment: "",
		decryptable_balance: "",
		proofs: undefined,
		auditors: []
	};
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
	["/seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest", GetCtAccountRequest as never],
	["/seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse", GetCtAccountResponse as never],
	["/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest", GetAllCtAccountsRequest as never],
	["/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse", GetAllCtAccountsResponse as never],
	["/seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount", DecryptedCtAccount as never],
	["/seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted", ApplyPendingBalanceDecrypted as never],
	["/seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted", InitializeAccountDecrypted as never],
	["/seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted", WithdrawDecrypted as never],
	["/seiprotocol.seichain.confidentialtransfers.TransferDecrypted", TransferDecrypted as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest": {
		aminoType: "confidentialtransfers/GetCtAccountRequest",
		toAmino: (message: GetCtAccountRequest) => ({ ...message }),
		fromAmino: (object: GetCtAccountRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse": {
		aminoType: "confidentialtransfers/GetCtAccountResponse",
		toAmino: (message: GetCtAccountResponse) => ({ ...message }),
		fromAmino: (object: GetCtAccountResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest": {
		aminoType: "confidentialtransfers/GetAllCtAccountsRequest",
		toAmino: (message: GetAllCtAccountsRequest) => ({ ...message }),
		fromAmino: (object: GetAllCtAccountsRequest) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse": {
		aminoType: "confidentialtransfers/GetAllCtAccountsResponse",
		toAmino: (message: GetAllCtAccountsResponse) => ({ ...message }),
		fromAmino: (object: GetAllCtAccountsResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount": {
		aminoType: "confidentialtransfers/DecryptedCtAccount",
		toAmino: (message: DecryptedCtAccount) => ({ ...message }),
		fromAmino: (object: DecryptedCtAccount) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted": {
		aminoType: "confidentialtransfers/ApplyPendingBalanceDecrypted",
		toAmino: (message: ApplyPendingBalanceDecrypted) => ({ ...message }),
		fromAmino: (object: ApplyPendingBalanceDecrypted) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted": {
		aminoType: "confidentialtransfers/InitializeAccountDecrypted",
		toAmino: (message: InitializeAccountDecrypted) => ({ ...message }),
		fromAmino: (object: InitializeAccountDecrypted) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted": {
		aminoType: "confidentialtransfers/WithdrawDecrypted",
		toAmino: (message: WithdrawDecrypted) => ({ ...message }),
		fromAmino: (object: WithdrawDecrypted) => ({ ...object })
	},

	"/seiprotocol.seichain.confidentialtransfers.TransferDecrypted": {
		aminoType: "confidentialtransfers/TransferDecrypted",
		toAmino: (message: TransferDecrypted) => ({ ...message }),
		fromAmino: (object: TransferDecrypted) => ({ ...object })
	}
};
