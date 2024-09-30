import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { Any } from "../../../google/protobuf/any";

import { Coin } from "../../base/v1beta1/coin";

import { CompactBitArray } from "../../crypto/multisig/v1beta1/multisig";

import { signModeFromJSON, signModeToJSON } from "../signing/v1beta1/signing";

import type {
	AuthInfo as AuthInfoType,
	Fee as FeeType,
	ModeInfoMulti as ModeInfoMultiType,
	ModeInfoSingle as ModeInfoSingleType,
	ModeInfo as ModeInfoType,
	SignDoc as SignDocType,
	SignerInfo as SignerInfoType,
	TxBody as TxBodyType,
	TxRaw as TxRawType,
	Tx as TxType,
} from "../../../../types/cosmos/tx/v1beta1";

import type { DeepPartial, Exact, MessageFns } from "../../../common.ts";

interface Tx extends TxType {}
interface TxRaw extends TxRawType {}
interface SignDoc extends SignDocType {}
interface TxBody extends TxBodyType {}
interface AuthInfo extends AuthInfoType {}
interface SignerInfo extends SignerInfoType {}
interface ModeInfo extends ModeInfoType {}
interface ModeInfoSingle extends ModeInfoSingleType {}
interface ModeInfoMulti extends ModeInfoMultiType {}
interface Fee extends FeeType {}

export const Tx: MessageFns<Tx, "cosmos.tx.v1beta1.Tx"> = {
	$type: "cosmos.tx.v1beta1.Tx" as const,

	encode(message: Tx, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.body !== undefined) {
			TxBody.encode(message.body, writer.uint32(10).fork()).join();
		}
		if (message.auth_info !== undefined) {
			AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).join();
		}
		for (const v of message.signatures) {
			writer.uint32(26).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Tx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.body = TxBody.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.auth_info = AuthInfo.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.signatures.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Tx {
		return {
			body: isSet(object.body) ? TxBody.fromJSON(object.body) : undefined,
			auth_info: isSet(object.auth_info) ? AuthInfo.fromJSON(object.auth_info) : undefined,
			signatures: globalThis.Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : [],
		};
	},

	toJSON(message: Tx): unknown {
		const obj: any = {};
		if (message.body !== undefined) {
			obj.body = TxBody.toJSON(message.body);
		}
		if (message.auth_info !== undefined) {
			obj.auth_info = AuthInfo.toJSON(message.auth_info);
		}
		if (message.signatures?.length) {
			obj.signatures = message.signatures.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Tx>, I>>(base?: I): Tx {
		return Tx.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Tx>, I>>(object: I): Tx {
		const message = createBaseTx();
		message.body = object.body !== undefined && object.body !== null ? TxBody.fromPartial(object.body) : undefined;
		message.auth_info = object.auth_info !== undefined && object.auth_info !== null ? AuthInfo.fromPartial(object.auth_info) : undefined;
		message.signatures = object.signatures?.map((e) => e) || [];
		return message;
	},
};

export const TxRaw: MessageFns<TxRaw, "cosmos.tx.v1beta1.TxRaw"> = {
	$type: "cosmos.tx.v1beta1.TxRaw" as const,

	encode(message: TxRaw, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.body_bytes.length !== 0) {
			writer.uint32(10).bytes(message.body_bytes);
		}
		if (message.auth_info_bytes.length !== 0) {
			writer.uint32(18).bytes(message.auth_info_bytes);
		}
		for (const v of message.signatures) {
			writer.uint32(26).bytes(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TxRaw {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTxRaw();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.body_bytes = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.auth_info_bytes = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.signatures.push(reader.bytes());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TxRaw {
		return {
			body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(0),
			auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(0),
			signatures: globalThis.Array.isArray(object?.signatures) ? object.signatures.map((e: any) => bytesFromBase64(e)) : [],
		};
	},

	toJSON(message: TxRaw): unknown {
		const obj: any = {};
		if (message.body_bytes.length !== 0) {
			obj.body_bytes = base64FromBytes(message.body_bytes);
		}
		if (message.auth_info_bytes.length !== 0) {
			obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes);
		}
		if (message.signatures?.length) {
			obj.signatures = message.signatures.map((e) => base64FromBytes(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TxRaw>, I>>(base?: I): TxRaw {
		return TxRaw.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TxRaw>, I>>(object: I): TxRaw {
		const message = createBaseTxRaw();
		message.body_bytes = object.body_bytes ?? new Uint8Array(0);
		message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array(0);
		message.signatures = object.signatures?.map((e) => e) || [];
		return message;
	},
};

export const SignDoc: MessageFns<SignDoc, "cosmos.tx.v1beta1.SignDoc"> = {
	$type: "cosmos.tx.v1beta1.SignDoc" as const,

	encode(message: SignDoc, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.body_bytes.length !== 0) {
			writer.uint32(10).bytes(message.body_bytes);
		}
		if (message.auth_info_bytes.length !== 0) {
			writer.uint32(18).bytes(message.auth_info_bytes);
		}
		if (message.chain_id !== "") {
			writer.uint32(26).string(message.chain_id);
		}
		if (message.account_number !== 0) {
			writer.uint32(32).uint64(message.account_number);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SignDoc {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSignDoc();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.body_bytes = reader.bytes();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.auth_info_bytes = reader.bytes();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.chain_id = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.account_number = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SignDoc {
		return {
			body_bytes: isSet(object.body_bytes) ? bytesFromBase64(object.body_bytes) : new Uint8Array(0),
			auth_info_bytes: isSet(object.auth_info_bytes) ? bytesFromBase64(object.auth_info_bytes) : new Uint8Array(0),
			chain_id: isSet(object.chain_id) ? globalThis.String(object.chain_id) : "",
			account_number: isSet(object.account_number) ? globalThis.Number(object.account_number) : 0,
		};
	},

	toJSON(message: SignDoc): unknown {
		const obj: any = {};
		if (message.body_bytes.length !== 0) {
			obj.body_bytes = base64FromBytes(message.body_bytes);
		}
		if (message.auth_info_bytes.length !== 0) {
			obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes);
		}
		if (message.chain_id !== "") {
			obj.chain_id = message.chain_id;
		}
		if (message.account_number !== 0) {
			obj.account_number = Math.round(message.account_number);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SignDoc>, I>>(base?: I): SignDoc {
		return SignDoc.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SignDoc>, I>>(object: I): SignDoc {
		const message = createBaseSignDoc();
		message.body_bytes = object.body_bytes ?? new Uint8Array(0);
		message.auth_info_bytes = object.auth_info_bytes ?? new Uint8Array(0);
		message.chain_id = object.chain_id ?? "";
		message.account_number = object.account_number ?? 0;
		return message;
	},
};

export const TxBody: MessageFns<TxBody, "cosmos.tx.v1beta1.TxBody"> = {
	$type: "cosmos.tx.v1beta1.TxBody" as const,

	encode(message: TxBody, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.messages) {
			Any.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.memo !== "") {
			writer.uint32(18).string(message.memo);
		}
		if (message.timeout_height !== 0) {
			writer.uint32(24).uint64(message.timeout_height);
		}
		for (const v of message.extension_options) {
			Any.encode(v!, writer.uint32(8186).fork()).join();
		}
		for (const v of message.non_critical_extension_options) {
			Any.encode(v!, writer.uint32(16378).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TxBody {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTxBody();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.messages.push(Any.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.memo = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.timeout_height = longToNumber(reader.uint64());
					continue;
				case 1023:
					if (tag !== 8186) {
						break;
					}

					message.extension_options.push(Any.decode(reader, reader.uint32()));
					continue;
				case 2047:
					if (tag !== 16378) {
						break;
					}

					message.non_critical_extension_options.push(Any.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TxBody {
		return {
			messages: globalThis.Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
			memo: isSet(object.memo) ? globalThis.String(object.memo) : "",
			timeout_height: isSet(object.timeout_height) ? globalThis.Number(object.timeout_height) : 0,
			extension_options: globalThis.Array.isArray(object?.extension_options) ? object.extension_options.map((e: any) => Any.fromJSON(e)) : [],
			non_critical_extension_options: globalThis.Array.isArray(object?.non_critical_extension_options)
				? object.non_critical_extension_options.map((e: any) => Any.fromJSON(e))
				: [],
		};
	},

	toJSON(message: TxBody): unknown {
		const obj: any = {};
		if (message.messages?.length) {
			obj.messages = message.messages.map((e) => Any.toJSON(e));
		}
		if (message.memo !== "") {
			obj.memo = message.memo;
		}
		if (message.timeout_height !== 0) {
			obj.timeout_height = Math.round(message.timeout_height);
		}
		if (message.extension_options?.length) {
			obj.extension_options = message.extension_options.map((e) => Any.toJSON(e));
		}
		if (message.non_critical_extension_options?.length) {
			obj.non_critical_extension_options = message.non_critical_extension_options.map((e) => Any.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TxBody>, I>>(base?: I): TxBody {
		return TxBody.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TxBody>, I>>(object: I): TxBody {
		const message = createBaseTxBody();
		message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
		message.memo = object.memo ?? "";
		message.timeout_height = object.timeout_height ?? 0;
		message.extension_options = object.extension_options?.map((e) => Any.fromPartial(e)) || [];
		message.non_critical_extension_options = object.non_critical_extension_options?.map((e) => Any.fromPartial(e)) || [];
		return message;
	},
};

export const AuthInfo: MessageFns<AuthInfo, "cosmos.tx.v1beta1.AuthInfo"> = {
	$type: "cosmos.tx.v1beta1.AuthInfo" as const,

	encode(message: AuthInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.signer_infos) {
			SignerInfo.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.fee !== undefined) {
			Fee.encode(message.fee, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AuthInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAuthInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.signer_infos.push(SignerInfo.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.fee = Fee.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AuthInfo {
		return {
			signer_infos: globalThis.Array.isArray(object?.signer_infos) ? object.signer_infos.map((e: any) => SignerInfo.fromJSON(e)) : [],
			fee: isSet(object.fee) ? Fee.fromJSON(object.fee) : undefined,
		};
	},

	toJSON(message: AuthInfo): unknown {
		const obj: any = {};
		if (message.signer_infos?.length) {
			obj.signer_infos = message.signer_infos.map((e) => SignerInfo.toJSON(e));
		}
		if (message.fee !== undefined) {
			obj.fee = Fee.toJSON(message.fee);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AuthInfo>, I>>(base?: I): AuthInfo {
		return AuthInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AuthInfo>, I>>(object: I): AuthInfo {
		const message = createBaseAuthInfo();
		message.signer_infos = object.signer_infos?.map((e) => SignerInfo.fromPartial(e)) || [];
		message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
		return message;
	},
};

export const SignerInfo: MessageFns<SignerInfo, "cosmos.tx.v1beta1.SignerInfo"> = {
	$type: "cosmos.tx.v1beta1.SignerInfo" as const,

	encode(message: SignerInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.public_key !== undefined) {
			Any.encode(message.public_key, writer.uint32(10).fork()).join();
		}
		if (message.mode_info !== undefined) {
			ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).join();
		}
		if (message.sequence !== 0) {
			writer.uint32(24).uint64(message.sequence);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SignerInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSignerInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.public_key = Any.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.mode_info = ModeInfo.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.sequence = longToNumber(reader.uint64());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SignerInfo {
		return {
			public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
			mode_info: isSet(object.mode_info) ? ModeInfo.fromJSON(object.mode_info) : undefined,
			sequence: isSet(object.sequence) ? globalThis.Number(object.sequence) : 0,
		};
	},

	toJSON(message: SignerInfo): unknown {
		const obj: any = {};
		if (message.public_key !== undefined) {
			obj.public_key = Any.toJSON(message.public_key);
		}
		if (message.mode_info !== undefined) {
			obj.mode_info = ModeInfo.toJSON(message.mode_info);
		}
		if (message.sequence !== 0) {
			obj.sequence = Math.round(message.sequence);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SignerInfo>, I>>(base?: I): SignerInfo {
		return SignerInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SignerInfo>, I>>(object: I): SignerInfo {
		const message = createBaseSignerInfo();
		message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
		message.mode_info = object.mode_info !== undefined && object.mode_info !== null ? ModeInfo.fromPartial(object.mode_info) : undefined;
		message.sequence = object.sequence ?? 0;
		return message;
	},
};

export const ModeInfo: MessageFns<ModeInfo, "cosmos.tx.v1beta1.ModeInfo"> = {
	$type: "cosmos.tx.v1beta1.ModeInfo" as const,

	encode(message: ModeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.single !== undefined) {
			ModeInfoSingle.encode(message.single, writer.uint32(10).fork()).join();
		}
		if (message.multi !== undefined) {
			ModeInfoMulti.encode(message.multi, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ModeInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseModeInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.single = ModeInfoSingle.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.multi = ModeInfoMulti.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ModeInfo {
		return {
			single: isSet(object.single) ? ModeInfoSingle.fromJSON(object.single) : undefined,
			multi: isSet(object.multi) ? ModeInfoMulti.fromJSON(object.multi) : undefined,
		};
	},

	toJSON(message: ModeInfo): unknown {
		const obj: any = {};
		if (message.single !== undefined) {
			obj.single = ModeInfoSingle.toJSON(message.single);
		}
		if (message.multi !== undefined) {
			obj.multi = ModeInfoMulti.toJSON(message.multi);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ModeInfo>, I>>(base?: I): ModeInfo {
		return ModeInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ModeInfo>, I>>(object: I): ModeInfo {
		const message = createBaseModeInfo();
		message.single = object.single !== undefined && object.single !== null ? ModeInfoSingle.fromPartial(object.single) : undefined;
		message.multi = object.multi !== undefined && object.multi !== null ? ModeInfoMulti.fromPartial(object.multi) : undefined;
		return message;
	},
};

export const ModeInfoSingle: MessageFns<ModeInfoSingle, "cosmos.tx.v1beta1.ModeInfo.Single"> = {
	$type: "cosmos.tx.v1beta1.ModeInfo.Single" as const,

	encode(message: ModeInfoSingle, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.mode !== 0) {
			writer.uint32(8).int32(message.mode);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ModeInfoSingle {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseModeInfoSingle();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.mode = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ModeInfoSingle {
		return { mode: isSet(object.mode) ? signModeFromJSON(object.mode) : 0 };
	},

	toJSON(message: ModeInfoSingle): unknown {
		const obj: any = {};
		if (message.mode !== 0) {
			obj.mode = signModeToJSON(message.mode);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ModeInfoSingle>, I>>(base?: I): ModeInfoSingle {
		return ModeInfoSingle.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ModeInfoSingle>, I>>(object: I): ModeInfoSingle {
		const message = createBaseModeInfoSingle();
		message.mode = object.mode ?? 0;
		return message;
	},
};

export const ModeInfoMulti: MessageFns<ModeInfoMulti, "cosmos.tx.v1beta1.ModeInfo.Multi"> = {
	$type: "cosmos.tx.v1beta1.ModeInfo.Multi" as const,

	encode(message: ModeInfoMulti, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.bitarray !== undefined) {
			CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).join();
		}
		for (const v of message.mode_infos) {
			ModeInfo.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ModeInfoMulti {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseModeInfoMulti();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.bitarray = CompactBitArray.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.mode_infos.push(ModeInfo.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ModeInfoMulti {
		return {
			bitarray: isSet(object.bitarray) ? CompactBitArray.fromJSON(object.bitarray) : undefined,
			mode_infos: globalThis.Array.isArray(object?.mode_infos) ? object.mode_infos.map((e: any) => ModeInfo.fromJSON(e)) : [],
		};
	},

	toJSON(message: ModeInfoMulti): unknown {
		const obj: any = {};
		if (message.bitarray !== undefined) {
			obj.bitarray = CompactBitArray.toJSON(message.bitarray);
		}
		if (message.mode_infos?.length) {
			obj.mode_infos = message.mode_infos.map((e) => ModeInfo.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ModeInfoMulti>, I>>(base?: I): ModeInfoMulti {
		return ModeInfoMulti.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ModeInfoMulti>, I>>(object: I): ModeInfoMulti {
		const message = createBaseModeInfoMulti();
		message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? CompactBitArray.fromPartial(object.bitarray) : undefined;
		message.mode_infos = object.mode_infos?.map((e) => ModeInfo.fromPartial(e)) || [];
		return message;
	},
};

export const Fee: MessageFns<Fee, "cosmos.tx.v1beta1.Fee"> = {
	$type: "cosmos.tx.v1beta1.Fee" as const,

	encode(message: Fee, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.amount) {
			Coin.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.gas_limit !== 0) {
			writer.uint32(16).uint64(message.gas_limit);
		}
		if (message.payer !== "") {
			writer.uint32(26).string(message.payer);
		}
		if (message.granter !== "") {
			writer.uint32(34).string(message.granter);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): Fee {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFee();
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
					if (tag !== 16) {
						break;
					}

					message.gas_limit = longToNumber(reader.uint64());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.payer = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.granter = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Fee {
		return {
			amount: globalThis.Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
			gas_limit: isSet(object.gas_limit) ? globalThis.Number(object.gas_limit) : 0,
			payer: isSet(object.payer) ? globalThis.String(object.payer) : "",
			granter: isSet(object.granter) ? globalThis.String(object.granter) : "",
		};
	},

	toJSON(message: Fee): unknown {
		const obj: any = {};
		if (message.amount?.length) {
			obj.amount = message.amount.map((e) => Coin.toJSON(e));
		}
		if (message.gas_limit !== 0) {
			obj.gas_limit = Math.round(message.gas_limit);
		}
		if (message.payer !== "") {
			obj.payer = message.payer;
		}
		if (message.granter !== "") {
			obj.granter = message.granter;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Fee>, I>>(base?: I): Fee {
		return Fee.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
		const message = createBaseFee();
		message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
		message.gas_limit = object.gas_limit ?? 0;
		message.payer = object.payer ?? "";
		message.granter = object.granter ?? "";
		return message;
	},
};

function createBaseTx(): Tx {
	return { body: undefined, auth_info: undefined, signatures: [] };
}

function createBaseTxRaw(): TxRaw {
	return { body_bytes: new Uint8Array(0), auth_info_bytes: new Uint8Array(0), signatures: [] };
}

function createBaseSignDoc(): SignDoc {
	return { body_bytes: new Uint8Array(0), auth_info_bytes: new Uint8Array(0), chain_id: "", account_number: 0 };
}

function createBaseTxBody(): TxBody {
	return { messages: [], memo: "", timeout_height: 0, extension_options: [], non_critical_extension_options: [] };
}

function createBaseAuthInfo(): AuthInfo {
	return { signer_infos: [], fee: undefined };
}

function createBaseSignerInfo(): SignerInfo {
	return { public_key: undefined, mode_info: undefined, sequence: 0 };
}

function createBaseModeInfo(): ModeInfo {
	return { single: undefined, multi: undefined };
}

function createBaseModeInfoSingle(): ModeInfoSingle {
	return { mode: 0 };
}

function createBaseModeInfoMulti(): ModeInfoMulti {
	return { bitarray: undefined, mode_infos: [] };
}

function createBaseFee(): Fee {
	return { amount: [], gas_limit: 0, payer: "", granter: "" };
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
	["/cosmos.tx.v1beta1.Tx", Tx as never],
	["/cosmos.tx.v1beta1.TxRaw", TxRaw as never],
	["/cosmos.tx.v1beta1.SignDoc", SignDoc as never],
	["/cosmos.tx.v1beta1.TxBody", TxBody as never],
	["/cosmos.tx.v1beta1.AuthInfo", AuthInfo as never],
	["/cosmos.tx.v1beta1.SignerInfo", SignerInfo as never],
	["/cosmos.tx.v1beta1.ModeInfo", ModeInfo as never],
	["/cosmos.tx.v1beta1.ModeInfo.Single", ModeInfoSingle as never],
	["/cosmos.tx.v1beta1.ModeInfo.Multi", ModeInfoMulti as never],
	["/cosmos.tx.v1beta1.Fee", Fee as never],
];
export const aminoConverters = {
	"/cosmos.tx.v1beta1.Tx": {
		aminoType: "cosmos-sdk/Tx",
		toAmino: (message: Tx) => ({ ...message }),
		fromAmino: (object: Tx) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.TxRaw": {
		aminoType: "cosmos-sdk/TxRaw",
		toAmino: (message: TxRaw) => ({ ...message }),
		fromAmino: (object: TxRaw) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.SignDoc": {
		aminoType: "cosmos-sdk/SignDoc",
		toAmino: (message: SignDoc) => ({ ...message }),
		fromAmino: (object: SignDoc) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.TxBody": {
		aminoType: "cosmos-sdk/TxBody",
		toAmino: (message: TxBody) => ({ ...message }),
		fromAmino: (object: TxBody) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.AuthInfo": {
		aminoType: "cosmos-sdk/AuthInfo",
		toAmino: (message: AuthInfo) => ({ ...message }),
		fromAmino: (object: AuthInfo) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.SignerInfo": {
		aminoType: "cosmos-sdk/SignerInfo",
		toAmino: (message: SignerInfo) => ({ ...message }),
		fromAmino: (object: SignerInfo) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.ModeInfo": {
		aminoType: "cosmos-sdk/ModeInfo",
		toAmino: (message: ModeInfo) => ({ ...message }),
		fromAmino: (object: ModeInfo) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.ModeInfo.Single": {
		aminoType: "cosmos-sdk/Single",
		toAmino: (message: ModeInfoSingle) => ({ ...message }),
		fromAmino: (object: ModeInfoSingle) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.ModeInfo.Multi": {
		aminoType: "cosmos-sdk/Multi",
		toAmino: (message: ModeInfoMulti) => ({ ...message }),
		fromAmino: (object: ModeInfoMulti) => ({ ...object }),
	},

	"/cosmos.tx.v1beta1.Fee": {
		aminoType: "cosmos-sdk/Fee",
		toAmino: (message: Fee) => ({ ...message }),
		fromAmino: (object: Fee) => ({ ...object }),
	},
};
