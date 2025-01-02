import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from '../cosmos/base/query/v1beta1/pagination';
import { CtAccount, CtAccountAmino, CtAccountSDKType, CtAccountWithDenom, CtAccountWithDenomAmino, CtAccountWithDenomSDKType } from './confidential';
import {
	InitializeAccountMsgProofs,
	InitializeAccountMsgProofsAmino,
	InitializeAccountMsgProofsSDKType,
	WithdrawMsgProofs,
	WithdrawMsgProofsAmino,
	WithdrawMsgProofsSDKType,
	TransferMsgProofs,
	TransferMsgProofsAmino,
	TransferMsgProofsSDKType
} from './zk';
import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
export interface GetCtAccountRequest {
	address: string;
	denom: string;
}
export interface GetCtAccountRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest';
	value: Uint8Array;
}
export interface GetCtAccountRequestAmino {
	address?: string;
	denom?: string;
}
export interface GetCtAccountRequestAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest';
	value: GetCtAccountRequestAmino;
}
export interface GetCtAccountRequestSDKType {
	address: string;
	denom: string;
}
export interface GetCtAccountResponse {
	account?: CtAccount | undefined;
}
export interface GetCtAccountResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse';
	value: Uint8Array;
}
export interface GetCtAccountResponseAmino {
	account?: CtAccountAmino | undefined;
}
export interface GetCtAccountResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse';
	value: GetCtAccountResponseAmino;
}
export interface GetCtAccountResponseSDKType {
	account?: CtAccountSDKType | undefined;
}
export interface GetAllCtAccountsRequest {
	address: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest | undefined;
}
export interface GetAllCtAccountsRequestProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest';
	value: Uint8Array;
}
export interface GetAllCtAccountsRequestAmino {
	address?: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequestAmino | undefined;
}
export interface GetAllCtAccountsRequestAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest';
	value: GetAllCtAccountsRequestAmino;
}
export interface GetAllCtAccountsRequestSDKType {
	address: string;
	pagination?: PageRequestSDKType | undefined;
}
export interface GetAllCtAccountsResponse {
	accounts: CtAccountWithDenom[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse | undefined;
}
export interface GetAllCtAccountsResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse';
	value: Uint8Array;
}
export interface GetAllCtAccountsResponseAmino {
	accounts?: CtAccountWithDenomAmino[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponseAmino | undefined;
}
export interface GetAllCtAccountsResponseAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse';
	value: GetAllCtAccountsResponseAmino;
}
export interface GetAllCtAccountsResponseSDKType {
	accounts: CtAccountWithDenomSDKType[];
	pagination?: PageResponseSDKType | undefined;
}
export interface DecryptedCtAccount {
	/**
	 * serialized public key
	 * We use uint64 so JSON print output is consistent with pending_balance_hi
	 */
	publicKey: Uint8Array;
	/** lo bits of the pending balance */
	pendingBalanceLo: bigint;
	/** hi bits of the pending balance */
	pendingBalanceHi: bigint;
	/** combined pending balance */
	combinedPendingBalance: string;
	pendingBalanceCreditCounter: number;
	/** decrypted available balance */
	availableBalance: string;
	/** decrypted aes encrypted available balance */
	decryptableAvailableBalance: string;
}
export interface DecryptedCtAccountProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount';
	value: Uint8Array;
}
export interface DecryptedCtAccountAmino {
	/**
	 * serialized public key
	 * We use uint64 so JSON print output is consistent with pending_balance_hi
	 */
	public_key?: string;
	/** lo bits of the pending balance */
	pending_balance_lo?: string;
	/** hi bits of the pending balance */
	pending_balance_hi?: string;
	/** combined pending balance */
	combined_pending_balance?: string;
	pending_balance_credit_counter?: number;
	/** decrypted available balance */
	available_balance?: string;
	/** decrypted aes encrypted available balance */
	decryptable_available_balance?: string;
}
export interface DecryptedCtAccountAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount';
	value: DecryptedCtAccountAmino;
}
export interface DecryptedCtAccountSDKType {
	public_key: Uint8Array;
	pending_balance_lo: bigint;
	pending_balance_hi: bigint;
	combined_pending_balance: string;
	pending_balance_credit_counter: number;
	available_balance: string;
	decryptable_available_balance: string;
}
/** Decrypted version of ApplyPendingBalance */
export interface ApplyPendingBalanceDecrypted {
	address: string;
	denom: string;
	newDecryptableAvailableBalance: string;
	currentPendingBalanceCounter: number;
	currentAvailableBalance: string;
}
export interface ApplyPendingBalanceDecryptedProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted';
	value: Uint8Array;
}
/** Decrypted version of ApplyPendingBalance */
export interface ApplyPendingBalanceDecryptedAmino {
	address?: string;
	denom?: string;
	new_decryptable_available_balance?: string;
	current_pending_balance_counter?: number;
	current_available_balance?: string;
}
export interface ApplyPendingBalanceDecryptedAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted';
	value: ApplyPendingBalanceDecryptedAmino;
}
/** Decrypted version of ApplyPendingBalance */
export interface ApplyPendingBalanceDecryptedSDKType {
	address: string;
	denom: string;
	new_decryptable_available_balance: string;
	current_pending_balance_counter: number;
	current_available_balance: string;
}
/** Decrypted version of InitializeAccount */
export interface InitializeAccountDecrypted {
	fromAddress: string;
	denom: string;
	pubkey: Uint8Array;
	pendingBalanceLo: number;
	pendingBalanceHi: bigint;
	availableBalance: string;
	decryptableBalance: string;
	proofs?: InitializeAccountMsgProofs | undefined;
}
export interface InitializeAccountDecryptedProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted';
	value: Uint8Array;
}
/** Decrypted version of InitializeAccount */
export interface InitializeAccountDecryptedAmino {
	from_address?: string;
	denom?: string;
	pubkey?: string;
	pending_balance_lo?: number;
	pending_balance_hi?: string;
	available_balance?: string;
	decryptable_balance?: string;
	proofs?: InitializeAccountMsgProofsAmino | undefined;
}
export interface InitializeAccountDecryptedAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted';
	value: InitializeAccountDecryptedAmino;
}
/** Decrypted version of InitializeAccount */
export interface InitializeAccountDecryptedSDKType {
	from_address: string;
	denom: string;
	pubkey: Uint8Array;
	pending_balance_lo: number;
	pending_balance_hi: bigint;
	available_balance: string;
	decryptable_balance: string;
	proofs?: InitializeAccountMsgProofsSDKType | undefined;
}
/** Decrypted version of Withdraw */
export interface WithdrawDecrypted {
	fromAddress: string;
	denom: string;
	amount: string;
	decryptableBalance: string;
	remainingBalanceCommitment: string;
	proofs?: WithdrawMsgProofs | undefined;
}
export interface WithdrawDecryptedProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted';
	value: Uint8Array;
}
/** Decrypted version of Withdraw */
export interface WithdrawDecryptedAmino {
	from_address?: string;
	denom?: string;
	amount?: string;
	decryptable_balance?: string;
	remaining_balance_commitment?: string;
	proofs?: WithdrawMsgProofsAmino | undefined;
}
export interface WithdrawDecryptedAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted';
	value: WithdrawDecryptedAmino;
}
/** Decrypted version of Withdraw */
export interface WithdrawDecryptedSDKType {
	from_address: string;
	denom: string;
	amount: string;
	decryptable_balance: string;
	remaining_balance_commitment: string;
	proofs?: WithdrawMsgProofsSDKType | undefined;
}
/** Decrypted version of Transfer */
export interface TransferDecrypted {
	fromAddress: string;
	toAddress: string;
	denom: string;
	transferAmountLo: number;
	transferAmountHi: number;
	totalTransferAmount: bigint;
	remainingBalanceCommitment: string;
	decryptableBalance: string;
	proofs?: TransferMsgProofs | undefined;
	auditors: string[];
}
export interface TransferDecryptedProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.TransferDecrypted';
	value: Uint8Array;
}
/** Decrypted version of Transfer */
export interface TransferDecryptedAmino {
	from_address?: string;
	to_address?: string;
	denom?: string;
	transfer_amount_lo?: number;
	transfer_amount_hi?: number;
	total_transfer_amount?: string;
	remaining_balance_commitment?: string;
	decryptable_balance?: string;
	proofs?: TransferMsgProofsAmino | undefined;
	auditors?: string[];
}
export interface TransferDecryptedAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.TransferDecrypted';
	value: TransferDecryptedAmino;
}
/** Decrypted version of Transfer */
export interface TransferDecryptedSDKType {
	from_address: string;
	to_address: string;
	denom: string;
	transfer_amount_lo: number;
	transfer_amount_hi: number;
	total_transfer_amount: bigint;
	remaining_balance_commitment: string;
	decryptable_balance: string;
	proofs?: TransferMsgProofsSDKType | undefined;
	auditors: string[];
}
function createBaseGetCtAccountRequest(): GetCtAccountRequest {
	return {
		address: '',
		denom: ''
	};
}
export const GetCtAccountRequest = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest',
	encode(message: GetCtAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GetCtAccountRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetCtAccountRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GetCtAccountRequest>): GetCtAccountRequest {
		const message = createBaseGetCtAccountRequest();
		message.address = object.address ?? '';
		message.denom = object.denom ?? '';
		return message;
	},
	fromAmino(object: GetCtAccountRequestAmino): GetCtAccountRequest {
		const message = createBaseGetCtAccountRequest();
		if (object.address !== undefined && object.address !== null) {
			message.address = object.address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		return message;
	},
	toAmino(message: GetCtAccountRequest): GetCtAccountRequestAmino {
		const obj: any = {};
		obj.address = message.address === '' ? undefined : message.address;
		obj.denom = message.denom === '' ? undefined : message.denom;
		return obj;
	},
	fromAminoMsg(object: GetCtAccountRequestAminoMsg): GetCtAccountRequest {
		return GetCtAccountRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: GetCtAccountRequestProtoMsg): GetCtAccountRequest {
		return GetCtAccountRequest.decode(message.value);
	},
	toProto(message: GetCtAccountRequest): Uint8Array {
		return GetCtAccountRequest.encode(message).finish();
	},
	toProtoMsg(message: GetCtAccountRequest): GetCtAccountRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountRequest',
			value: GetCtAccountRequest.encode(message).finish()
		};
	}
};
function createBaseGetCtAccountResponse(): GetCtAccountResponse {
	return {
		account: undefined
	};
}
export const GetCtAccountResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse',
	encode(message: GetCtAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.account !== undefined) {
			CtAccount.encode(message.account, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GetCtAccountResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetCtAccountResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.account = CtAccount.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GetCtAccountResponse>): GetCtAccountResponse {
		const message = createBaseGetCtAccountResponse();
		message.account = object.account !== undefined && object.account !== null ? CtAccount.fromPartial(object.account) : undefined;
		return message;
	},
	fromAmino(object: GetCtAccountResponseAmino): GetCtAccountResponse {
		const message = createBaseGetCtAccountResponse();
		if (object.account !== undefined && object.account !== null) {
			message.account = CtAccount.fromAmino(object.account);
		}
		return message;
	},
	toAmino(message: GetCtAccountResponse): GetCtAccountResponseAmino {
		const obj: any = {};
		obj.account = message.account ? CtAccount.toAmino(message.account) : undefined;
		return obj;
	},
	fromAminoMsg(object: GetCtAccountResponseAminoMsg): GetCtAccountResponse {
		return GetCtAccountResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: GetCtAccountResponseProtoMsg): GetCtAccountResponse {
		return GetCtAccountResponse.decode(message.value);
	},
	toProto(message: GetCtAccountResponse): Uint8Array {
		return GetCtAccountResponse.encode(message).finish();
	},
	toProtoMsg(message: GetCtAccountResponse): GetCtAccountResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetCtAccountResponse',
			value: GetCtAccountResponse.encode(message).finish()
		};
	}
};
function createBaseGetAllCtAccountsRequest(): GetAllCtAccountsRequest {
	return {
		address: '',
		pagination: undefined
	};
}
export const GetAllCtAccountsRequest = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest',
	encode(message: GetAllCtAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GetAllCtAccountsRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetAllCtAccountsRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GetAllCtAccountsRequest>): GetAllCtAccountsRequest {
		const message = createBaseGetAllCtAccountsRequest();
		message.address = object.address ?? '';
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
		return message;
	},
	fromAmino(object: GetAllCtAccountsRequestAmino): GetAllCtAccountsRequest {
		const message = createBaseGetAllCtAccountsRequest();
		if (object.address !== undefined && object.address !== null) {
			message.address = object.address;
		}
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageRequest.fromAmino(object.pagination);
		}
		return message;
	},
	toAmino(message: GetAllCtAccountsRequest): GetAllCtAccountsRequestAmino {
		const obj: any = {};
		obj.address = message.address === '' ? undefined : message.address;
		obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
		return obj;
	},
	fromAminoMsg(object: GetAllCtAccountsRequestAminoMsg): GetAllCtAccountsRequest {
		return GetAllCtAccountsRequest.fromAmino(object.value);
	},
	fromProtoMsg(message: GetAllCtAccountsRequestProtoMsg): GetAllCtAccountsRequest {
		return GetAllCtAccountsRequest.decode(message.value);
	},
	toProto(message: GetAllCtAccountsRequest): Uint8Array {
		return GetAllCtAccountsRequest.encode(message).finish();
	},
	toProtoMsg(message: GetAllCtAccountsRequest): GetAllCtAccountsRequestProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsRequest',
			value: GetAllCtAccountsRequest.encode(message).finish()
		};
	}
};
function createBaseGetAllCtAccountsResponse(): GetAllCtAccountsResponse {
	return {
		accounts: [],
		pagination: undefined
	};
}
export const GetAllCtAccountsResponse = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse',
	encode(message: GetAllCtAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		for (const v of message.accounts) {
			CtAccountWithDenom.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GetAllCtAccountsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetAllCtAccountsResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.accounts.push(CtAccountWithDenom.decode(reader, reader.uint32()));
					break;
				case 2:
					message.pagination = PageResponse.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GetAllCtAccountsResponse>): GetAllCtAccountsResponse {
		const message = createBaseGetAllCtAccountsResponse();
		message.accounts = object.accounts?.map((e) => CtAccountWithDenom.fromPartial(e)) || [];
		message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
		return message;
	},
	fromAmino(object: GetAllCtAccountsResponseAmino): GetAllCtAccountsResponse {
		const message = createBaseGetAllCtAccountsResponse();
		message.accounts = object.accounts?.map((e) => CtAccountWithDenom.fromAmino(e)) || [];
		if (object.pagination !== undefined && object.pagination !== null) {
			message.pagination = PageResponse.fromAmino(object.pagination);
		}
		return message;
	},
	toAmino(message: GetAllCtAccountsResponse): GetAllCtAccountsResponseAmino {
		const obj: any = {};
		if (message.accounts) {
			obj.accounts = message.accounts.map((e) => (e ? CtAccountWithDenom.toAmino(e) : undefined));
		} else {
			obj.accounts = message.accounts;
		}
		obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
		return obj;
	},
	fromAminoMsg(object: GetAllCtAccountsResponseAminoMsg): GetAllCtAccountsResponse {
		return GetAllCtAccountsResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: GetAllCtAccountsResponseProtoMsg): GetAllCtAccountsResponse {
		return GetAllCtAccountsResponse.decode(message.value);
	},
	toProto(message: GetAllCtAccountsResponse): Uint8Array {
		return GetAllCtAccountsResponse.encode(message).finish();
	},
	toProtoMsg(message: GetAllCtAccountsResponse): GetAllCtAccountsResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.GetAllCtAccountsResponse',
			value: GetAllCtAccountsResponse.encode(message).finish()
		};
	}
};
function createBaseDecryptedCtAccount(): DecryptedCtAccount {
	return {
		publicKey: new Uint8Array(),
		pendingBalanceLo: BigInt(0),
		pendingBalanceHi: BigInt(0),
		combinedPendingBalance: '',
		pendingBalanceCreditCounter: 0,
		availableBalance: '',
		decryptableAvailableBalance: ''
	};
}
export const DecryptedCtAccount = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount',
	encode(message: DecryptedCtAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.publicKey.length !== 0) {
			writer.uint32(10).bytes(message.publicKey);
		}
		if (message.pendingBalanceLo !== BigInt(0)) {
			writer.uint32(16).uint64(message.pendingBalanceLo);
		}
		if (message.pendingBalanceHi !== BigInt(0)) {
			writer.uint32(24).uint64(message.pendingBalanceHi);
		}
		if (message.combinedPendingBalance !== '') {
			writer.uint32(34).string(message.combinedPendingBalance);
		}
		if (message.pendingBalanceCreditCounter !== 0) {
			writer.uint32(40).uint32(message.pendingBalanceCreditCounter);
		}
		if (message.availableBalance !== '') {
			writer.uint32(50).string(message.availableBalance);
		}
		if (message.decryptableAvailableBalance !== '') {
			writer.uint32(58).string(message.decryptableAvailableBalance);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): DecryptedCtAccount {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDecryptedCtAccount();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.publicKey = reader.bytes();
					break;
				case 2:
					message.pendingBalanceLo = reader.uint64();
					break;
				case 3:
					message.pendingBalanceHi = reader.uint64();
					break;
				case 4:
					message.combinedPendingBalance = reader.string();
					break;
				case 5:
					message.pendingBalanceCreditCounter = reader.uint32();
					break;
				case 6:
					message.availableBalance = reader.string();
					break;
				case 7:
					message.decryptableAvailableBalance = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<DecryptedCtAccount>): DecryptedCtAccount {
		const message = createBaseDecryptedCtAccount();
		message.publicKey = object.publicKey ?? new Uint8Array();
		message.pendingBalanceLo = object.pendingBalanceLo !== undefined && object.pendingBalanceLo !== null ? BigInt(object.pendingBalanceLo.toString()) : BigInt(0);
		message.pendingBalanceHi = object.pendingBalanceHi !== undefined && object.pendingBalanceHi !== null ? BigInt(object.pendingBalanceHi.toString()) : BigInt(0);
		message.combinedPendingBalance = object.combinedPendingBalance ?? '';
		message.pendingBalanceCreditCounter = object.pendingBalanceCreditCounter ?? 0;
		message.availableBalance = object.availableBalance ?? '';
		message.decryptableAvailableBalance = object.decryptableAvailableBalance ?? '';
		return message;
	},
	fromAmino(object: DecryptedCtAccountAmino): DecryptedCtAccount {
		const message = createBaseDecryptedCtAccount();
		if (object.public_key !== undefined && object.public_key !== null) {
			message.publicKey = bytesFromBase64(object.public_key);
		}
		if (object.pending_balance_lo !== undefined && object.pending_balance_lo !== null) {
			message.pendingBalanceLo = BigInt(object.pending_balance_lo);
		}
		if (object.pending_balance_hi !== undefined && object.pending_balance_hi !== null) {
			message.pendingBalanceHi = BigInt(object.pending_balance_hi);
		}
		if (object.combined_pending_balance !== undefined && object.combined_pending_balance !== null) {
			message.combinedPendingBalance = object.combined_pending_balance;
		}
		if (object.pending_balance_credit_counter !== undefined && object.pending_balance_credit_counter !== null) {
			message.pendingBalanceCreditCounter = object.pending_balance_credit_counter;
		}
		if (object.available_balance !== undefined && object.available_balance !== null) {
			message.availableBalance = object.available_balance;
		}
		if (object.decryptable_available_balance !== undefined && object.decryptable_available_balance !== null) {
			message.decryptableAvailableBalance = object.decryptable_available_balance;
		}
		return message;
	},
	toAmino(message: DecryptedCtAccount): DecryptedCtAccountAmino {
		const obj: any = {};
		obj.public_key = message.publicKey ? base64FromBytes(message.publicKey) : undefined;
		obj.pending_balance_lo = message.pendingBalanceLo !== BigInt(0) ? message.pendingBalanceLo.toString() : undefined;
		obj.pending_balance_hi = message.pendingBalanceHi !== BigInt(0) ? message.pendingBalanceHi.toString() : undefined;
		obj.combined_pending_balance = message.combinedPendingBalance === '' ? undefined : message.combinedPendingBalance;
		obj.pending_balance_credit_counter = message.pendingBalanceCreditCounter === 0 ? undefined : message.pendingBalanceCreditCounter;
		obj.available_balance = message.availableBalance === '' ? undefined : message.availableBalance;
		obj.decryptable_available_balance = message.decryptableAvailableBalance === '' ? undefined : message.decryptableAvailableBalance;
		return obj;
	},
	fromAminoMsg(object: DecryptedCtAccountAminoMsg): DecryptedCtAccount {
		return DecryptedCtAccount.fromAmino(object.value);
	},
	fromProtoMsg(message: DecryptedCtAccountProtoMsg): DecryptedCtAccount {
		return DecryptedCtAccount.decode(message.value);
	},
	toProto(message: DecryptedCtAccount): Uint8Array {
		return DecryptedCtAccount.encode(message).finish();
	},
	toProtoMsg(message: DecryptedCtAccount): DecryptedCtAccountProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.DecryptedCtAccount',
			value: DecryptedCtAccount.encode(message).finish()
		};
	}
};
function createBaseApplyPendingBalanceDecrypted(): ApplyPendingBalanceDecrypted {
	return {
		address: '',
		denom: '',
		newDecryptableAvailableBalance: '',
		currentPendingBalanceCounter: 0,
		currentAvailableBalance: ''
	};
}
export const ApplyPendingBalanceDecrypted = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted',
	encode(message: ApplyPendingBalanceDecrypted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.newDecryptableAvailableBalance !== '') {
			writer.uint32(26).string(message.newDecryptableAvailableBalance);
		}
		if (message.currentPendingBalanceCounter !== 0) {
			writer.uint32(32).uint32(message.currentPendingBalanceCounter);
		}
		if (message.currentAvailableBalance !== '') {
			writer.uint32(42).string(message.currentAvailableBalance);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ApplyPendingBalanceDecrypted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseApplyPendingBalanceDecrypted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.newDecryptableAvailableBalance = reader.string();
					break;
				case 4:
					message.currentPendingBalanceCounter = reader.uint32();
					break;
				case 5:
					message.currentAvailableBalance = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<ApplyPendingBalanceDecrypted>): ApplyPendingBalanceDecrypted {
		const message = createBaseApplyPendingBalanceDecrypted();
		message.address = object.address ?? '';
		message.denom = object.denom ?? '';
		message.newDecryptableAvailableBalance = object.newDecryptableAvailableBalance ?? '';
		message.currentPendingBalanceCounter = object.currentPendingBalanceCounter ?? 0;
		message.currentAvailableBalance = object.currentAvailableBalance ?? '';
		return message;
	},
	fromAmino(object: ApplyPendingBalanceDecryptedAmino): ApplyPendingBalanceDecrypted {
		const message = createBaseApplyPendingBalanceDecrypted();
		if (object.address !== undefined && object.address !== null) {
			message.address = object.address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.new_decryptable_available_balance !== undefined && object.new_decryptable_available_balance !== null) {
			message.newDecryptableAvailableBalance = object.new_decryptable_available_balance;
		}
		if (object.current_pending_balance_counter !== undefined && object.current_pending_balance_counter !== null) {
			message.currentPendingBalanceCounter = object.current_pending_balance_counter;
		}
		if (object.current_available_balance !== undefined && object.current_available_balance !== null) {
			message.currentAvailableBalance = object.current_available_balance;
		}
		return message;
	},
	toAmino(message: ApplyPendingBalanceDecrypted): ApplyPendingBalanceDecryptedAmino {
		const obj: any = {};
		obj.address = message.address === '' ? undefined : message.address;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.new_decryptable_available_balance = message.newDecryptableAvailableBalance === '' ? undefined : message.newDecryptableAvailableBalance;
		obj.current_pending_balance_counter = message.currentPendingBalanceCounter === 0 ? undefined : message.currentPendingBalanceCounter;
		obj.current_available_balance = message.currentAvailableBalance === '' ? undefined : message.currentAvailableBalance;
		return obj;
	},
	fromAminoMsg(object: ApplyPendingBalanceDecryptedAminoMsg): ApplyPendingBalanceDecrypted {
		return ApplyPendingBalanceDecrypted.fromAmino(object.value);
	},
	fromProtoMsg(message: ApplyPendingBalanceDecryptedProtoMsg): ApplyPendingBalanceDecrypted {
		return ApplyPendingBalanceDecrypted.decode(message.value);
	},
	toProto(message: ApplyPendingBalanceDecrypted): Uint8Array {
		return ApplyPendingBalanceDecrypted.encode(message).finish();
	},
	toProtoMsg(message: ApplyPendingBalanceDecrypted): ApplyPendingBalanceDecryptedProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.ApplyPendingBalanceDecrypted',
			value: ApplyPendingBalanceDecrypted.encode(message).finish()
		};
	}
};
function createBaseInitializeAccountDecrypted(): InitializeAccountDecrypted {
	return {
		fromAddress: '',
		denom: '',
		pubkey: new Uint8Array(),
		pendingBalanceLo: 0,
		pendingBalanceHi: BigInt(0),
		availableBalance: '',
		decryptableBalance: '',
		proofs: undefined
	};
}
export const InitializeAccountDecrypted = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted',
	encode(message: InitializeAccountDecrypted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.pubkey.length !== 0) {
			writer.uint32(26).bytes(message.pubkey);
		}
		if (message.pendingBalanceLo !== 0) {
			writer.uint32(32).uint32(message.pendingBalanceLo);
		}
		if (message.pendingBalanceHi !== BigInt(0)) {
			writer.uint32(40).uint64(message.pendingBalanceHi);
		}
		if (message.availableBalance !== '') {
			writer.uint32(50).string(message.availableBalance);
		}
		if (message.decryptableBalance !== '') {
			writer.uint32(58).string(message.decryptableBalance);
		}
		if (message.proofs !== undefined) {
			InitializeAccountMsgProofs.encode(message.proofs, writer.uint32(66).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): InitializeAccountDecrypted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInitializeAccountDecrypted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.pubkey = reader.bytes();
					break;
				case 4:
					message.pendingBalanceLo = reader.uint32();
					break;
				case 5:
					message.pendingBalanceHi = reader.uint64();
					break;
				case 6:
					message.availableBalance = reader.string();
					break;
				case 7:
					message.decryptableBalance = reader.string();
					break;
				case 8:
					message.proofs = InitializeAccountMsgProofs.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<InitializeAccountDecrypted>): InitializeAccountDecrypted {
		const message = createBaseInitializeAccountDecrypted();
		message.fromAddress = object.fromAddress ?? '';
		message.denom = object.denom ?? '';
		message.pubkey = object.pubkey ?? new Uint8Array();
		message.pendingBalanceLo = object.pendingBalanceLo ?? 0;
		message.pendingBalanceHi = object.pendingBalanceHi !== undefined && object.pendingBalanceHi !== null ? BigInt(object.pendingBalanceHi.toString()) : BigInt(0);
		message.availableBalance = object.availableBalance ?? '';
		message.decryptableBalance = object.decryptableBalance ?? '';
		message.proofs = object.proofs !== undefined && object.proofs !== null ? InitializeAccountMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	},
	fromAmino(object: InitializeAccountDecryptedAmino): InitializeAccountDecrypted {
		const message = createBaseInitializeAccountDecrypted();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.pubkey !== undefined && object.pubkey !== null) {
			message.pubkey = bytesFromBase64(object.pubkey);
		}
		if (object.pending_balance_lo !== undefined && object.pending_balance_lo !== null) {
			message.pendingBalanceLo = object.pending_balance_lo;
		}
		if (object.pending_balance_hi !== undefined && object.pending_balance_hi !== null) {
			message.pendingBalanceHi = BigInt(object.pending_balance_hi);
		}
		if (object.available_balance !== undefined && object.available_balance !== null) {
			message.availableBalance = object.available_balance;
		}
		if (object.decryptable_balance !== undefined && object.decryptable_balance !== null) {
			message.decryptableBalance = object.decryptable_balance;
		}
		if (object.proofs !== undefined && object.proofs !== null) {
			message.proofs = InitializeAccountMsgProofs.fromAmino(object.proofs);
		}
		return message;
	},
	toAmino(message: InitializeAccountDecrypted): InitializeAccountDecryptedAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.pubkey = message.pubkey ? base64FromBytes(message.pubkey) : undefined;
		obj.pending_balance_lo = message.pendingBalanceLo === 0 ? undefined : message.pendingBalanceLo;
		obj.pending_balance_hi = message.pendingBalanceHi !== BigInt(0) ? message.pendingBalanceHi.toString() : undefined;
		obj.available_balance = message.availableBalance === '' ? undefined : message.availableBalance;
		obj.decryptable_balance = message.decryptableBalance === '' ? undefined : message.decryptableBalance;
		obj.proofs = message.proofs ? InitializeAccountMsgProofs.toAmino(message.proofs) : undefined;
		return obj;
	},
	fromAminoMsg(object: InitializeAccountDecryptedAminoMsg): InitializeAccountDecrypted {
		return InitializeAccountDecrypted.fromAmino(object.value);
	},
	fromProtoMsg(message: InitializeAccountDecryptedProtoMsg): InitializeAccountDecrypted {
		return InitializeAccountDecrypted.decode(message.value);
	},
	toProto(message: InitializeAccountDecrypted): Uint8Array {
		return InitializeAccountDecrypted.encode(message).finish();
	},
	toProtoMsg(message: InitializeAccountDecrypted): InitializeAccountDecryptedProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.InitializeAccountDecrypted',
			value: InitializeAccountDecrypted.encode(message).finish()
		};
	}
};
function createBaseWithdrawDecrypted(): WithdrawDecrypted {
	return {
		fromAddress: '',
		denom: '',
		amount: '',
		decryptableBalance: '',
		remainingBalanceCommitment: '',
		proofs: undefined
	};
}
export const WithdrawDecrypted = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted',
	encode(message: WithdrawDecrypted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.amount !== '') {
			writer.uint32(26).string(message.amount);
		}
		if (message.decryptableBalance !== '') {
			writer.uint32(34).string(message.decryptableBalance);
		}
		if (message.remainingBalanceCommitment !== '') {
			writer.uint32(42).string(message.remainingBalanceCommitment);
		}
		if (message.proofs !== undefined) {
			WithdrawMsgProofs.encode(message.proofs, writer.uint32(50).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): WithdrawDecrypted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseWithdrawDecrypted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.amount = reader.string();
					break;
				case 4:
					message.decryptableBalance = reader.string();
					break;
				case 5:
					message.remainingBalanceCommitment = reader.string();
					break;
				case 6:
					message.proofs = WithdrawMsgProofs.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<WithdrawDecrypted>): WithdrawDecrypted {
		const message = createBaseWithdrawDecrypted();
		message.fromAddress = object.fromAddress ?? '';
		message.denom = object.denom ?? '';
		message.amount = object.amount ?? '';
		message.decryptableBalance = object.decryptableBalance ?? '';
		message.remainingBalanceCommitment = object.remainingBalanceCommitment ?? '';
		message.proofs = object.proofs !== undefined && object.proofs !== null ? WithdrawMsgProofs.fromPartial(object.proofs) : undefined;
		return message;
	},
	fromAmino(object: WithdrawDecryptedAmino): WithdrawDecrypted {
		const message = createBaseWithdrawDecrypted();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = object.amount;
		}
		if (object.decryptable_balance !== undefined && object.decryptable_balance !== null) {
			message.decryptableBalance = object.decryptable_balance;
		}
		if (object.remaining_balance_commitment !== undefined && object.remaining_balance_commitment !== null) {
			message.remainingBalanceCommitment = object.remaining_balance_commitment;
		}
		if (object.proofs !== undefined && object.proofs !== null) {
			message.proofs = WithdrawMsgProofs.fromAmino(object.proofs);
		}
		return message;
	},
	toAmino(message: WithdrawDecrypted): WithdrawDecryptedAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.amount = message.amount === '' ? undefined : message.amount;
		obj.decryptable_balance = message.decryptableBalance === '' ? undefined : message.decryptableBalance;
		obj.remaining_balance_commitment = message.remainingBalanceCommitment === '' ? undefined : message.remainingBalanceCommitment;
		obj.proofs = message.proofs ? WithdrawMsgProofs.toAmino(message.proofs) : undefined;
		return obj;
	},
	fromAminoMsg(object: WithdrawDecryptedAminoMsg): WithdrawDecrypted {
		return WithdrawDecrypted.fromAmino(object.value);
	},
	fromProtoMsg(message: WithdrawDecryptedProtoMsg): WithdrawDecrypted {
		return WithdrawDecrypted.decode(message.value);
	},
	toProto(message: WithdrawDecrypted): Uint8Array {
		return WithdrawDecrypted.encode(message).finish();
	},
	toProtoMsg(message: WithdrawDecrypted): WithdrawDecryptedProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.WithdrawDecrypted',
			value: WithdrawDecrypted.encode(message).finish()
		};
	}
};
function createBaseTransferDecrypted(): TransferDecrypted {
	return {
		fromAddress: '',
		toAddress: '',
		denom: '',
		transferAmountLo: 0,
		transferAmountHi: 0,
		totalTransferAmount: BigInt(0),
		remainingBalanceCommitment: '',
		decryptableBalance: '',
		proofs: undefined,
		auditors: []
	};
}
export const TransferDecrypted = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.TransferDecrypted',
	encode(message: TransferDecrypted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.fromAddress !== '') {
			writer.uint32(10).string(message.fromAddress);
		}
		if (message.toAddress !== '') {
			writer.uint32(18).string(message.toAddress);
		}
		if (message.denom !== '') {
			writer.uint32(26).string(message.denom);
		}
		if (message.transferAmountLo !== 0) {
			writer.uint32(32).uint32(message.transferAmountLo);
		}
		if (message.transferAmountHi !== 0) {
			writer.uint32(40).uint32(message.transferAmountHi);
		}
		if (message.totalTransferAmount !== BigInt(0)) {
			writer.uint32(48).uint64(message.totalTransferAmount);
		}
		if (message.remainingBalanceCommitment !== '') {
			writer.uint32(58).string(message.remainingBalanceCommitment);
		}
		if (message.decryptableBalance !== '') {
			writer.uint32(66).string(message.decryptableBalance);
		}
		if (message.proofs !== undefined) {
			TransferMsgProofs.encode(message.proofs, writer.uint32(74).fork()).ldelim();
		}
		for (const v of message.auditors) {
			writer.uint32(82).string(v!);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): TransferDecrypted {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTransferDecrypted();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fromAddress = reader.string();
					break;
				case 2:
					message.toAddress = reader.string();
					break;
				case 3:
					message.denom = reader.string();
					break;
				case 4:
					message.transferAmountLo = reader.uint32();
					break;
				case 5:
					message.transferAmountHi = reader.uint32();
					break;
				case 6:
					message.totalTransferAmount = reader.uint64();
					break;
				case 7:
					message.remainingBalanceCommitment = reader.string();
					break;
				case 8:
					message.decryptableBalance = reader.string();
					break;
				case 9:
					message.proofs = TransferMsgProofs.decode(reader, reader.uint32());
					break;
				case 10:
					message.auditors.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<TransferDecrypted>): TransferDecrypted {
		const message = createBaseTransferDecrypted();
		message.fromAddress = object.fromAddress ?? '';
		message.toAddress = object.toAddress ?? '';
		message.denom = object.denom ?? '';
		message.transferAmountLo = object.transferAmountLo ?? 0;
		message.transferAmountHi = object.transferAmountHi ?? 0;
		message.totalTransferAmount =
			object.totalTransferAmount !== undefined && object.totalTransferAmount !== null ? BigInt(object.totalTransferAmount.toString()) : BigInt(0);
		message.remainingBalanceCommitment = object.remainingBalanceCommitment ?? '';
		message.decryptableBalance = object.decryptableBalance ?? '';
		message.proofs = object.proofs !== undefined && object.proofs !== null ? TransferMsgProofs.fromPartial(object.proofs) : undefined;
		message.auditors = object.auditors?.map((e) => e) || [];
		return message;
	},
	fromAmino(object: TransferDecryptedAmino): TransferDecrypted {
		const message = createBaseTransferDecrypted();
		if (object.from_address !== undefined && object.from_address !== null) {
			message.fromAddress = object.from_address;
		}
		if (object.to_address !== undefined && object.to_address !== null) {
			message.toAddress = object.to_address;
		}
		if (object.denom !== undefined && object.denom !== null) {
			message.denom = object.denom;
		}
		if (object.transfer_amount_lo !== undefined && object.transfer_amount_lo !== null) {
			message.transferAmountLo = object.transfer_amount_lo;
		}
		if (object.transfer_amount_hi !== undefined && object.transfer_amount_hi !== null) {
			message.transferAmountHi = object.transfer_amount_hi;
		}
		if (object.total_transfer_amount !== undefined && object.total_transfer_amount !== null) {
			message.totalTransferAmount = BigInt(object.total_transfer_amount);
		}
		if (object.remaining_balance_commitment !== undefined && object.remaining_balance_commitment !== null) {
			message.remainingBalanceCommitment = object.remaining_balance_commitment;
		}
		if (object.decryptable_balance !== undefined && object.decryptable_balance !== null) {
			message.decryptableBalance = object.decryptable_balance;
		}
		if (object.proofs !== undefined && object.proofs !== null) {
			message.proofs = TransferMsgProofs.fromAmino(object.proofs);
		}
		message.auditors = object.auditors?.map((e) => e) || [];
		return message;
	},
	toAmino(message: TransferDecrypted): TransferDecryptedAmino {
		const obj: any = {};
		obj.from_address = message.fromAddress === '' ? undefined : message.fromAddress;
		obj.to_address = message.toAddress === '' ? undefined : message.toAddress;
		obj.denom = message.denom === '' ? undefined : message.denom;
		obj.transfer_amount_lo = message.transferAmountLo === 0 ? undefined : message.transferAmountLo;
		obj.transfer_amount_hi = message.transferAmountHi === 0 ? undefined : message.transferAmountHi;
		obj.total_transfer_amount = message.totalTransferAmount !== BigInt(0) ? message.totalTransferAmount.toString() : undefined;
		obj.remaining_balance_commitment = message.remainingBalanceCommitment === '' ? undefined : message.remainingBalanceCommitment;
		obj.decryptable_balance = message.decryptableBalance === '' ? undefined : message.decryptableBalance;
		obj.proofs = message.proofs ? TransferMsgProofs.toAmino(message.proofs) : undefined;
		if (message.auditors) {
			obj.auditors = message.auditors.map((e) => e);
		} else {
			obj.auditors = message.auditors;
		}
		return obj;
	},
	fromAminoMsg(object: TransferDecryptedAminoMsg): TransferDecrypted {
		return TransferDecrypted.fromAmino(object.value);
	},
	fromProtoMsg(message: TransferDecryptedProtoMsg): TransferDecrypted {
		return TransferDecrypted.decode(message.value);
	},
	toProto(message: TransferDecrypted): Uint8Array {
		return TransferDecrypted.encode(message).finish();
	},
	toProtoMsg(message: TransferDecrypted): TransferDecryptedProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.TransferDecrypted',
			value: TransferDecrypted.encode(message).finish()
		};
	}
};
