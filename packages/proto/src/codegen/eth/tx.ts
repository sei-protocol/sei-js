import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
export interface AccessTuple {
	address: string;
	storageKeys: string[];
}
export interface AccessTupleProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.AccessTuple';
	value: Uint8Array;
}
export interface AccessTupleAmino {
	address?: string;
	storage_keys: string[];
}
export interface AccessTupleAminoMsg {
	type: '/seiprotocol.seichain.eth.AccessTuple';
	value: AccessTupleAmino;
}
export interface AccessTupleSDKType {
	address: string;
	storage_keys: string[];
}
export interface AssociateTx {
	/** signature values */
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
	customMessage: string;
}
export interface AssociateTxProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.AssociateTx';
	value: Uint8Array;
}
export interface AssociateTxAmino {
	/** signature values */
	v?: string;
	r?: string;
	s?: string;
	custom_message?: string;
}
export interface AssociateTxAminoMsg {
	type: '/seiprotocol.seichain.eth.AssociateTx';
	value: AssociateTxAmino;
}
export interface AssociateTxSDKType {
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
	custom_message: string;
}
export interface LegacyTx {
	nonce: bigint;
	gasPrice: string;
	gasLimit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	/** signature values */
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface LegacyTxProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.LegacyTx';
	value: Uint8Array;
}
export interface LegacyTxAmino {
	nonce?: string;
	gas_price?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: string;
	/** signature values */
	v?: string;
	r?: string;
	s?: string;
}
export interface LegacyTxAminoMsg {
	type: '/seiprotocol.seichain.eth.LegacyTx';
	value: LegacyTxAmino;
}
export interface LegacyTxSDKType {
	nonce: bigint;
	gas_price: string;
	gas_limit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface AccessListTx {
	chainId: string;
	nonce: bigint;
	gasPrice: string;
	gasLimit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	accesses: AccessTuple[];
	/** signature values */
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface AccessListTxProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.AccessListTx';
	value: Uint8Array;
}
export interface AccessListTxAmino {
	chain_id: string;
	nonce?: string;
	gas_price?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: string;
	accesses: AccessTupleAmino[];
	/** signature values */
	v?: string;
	r?: string;
	s?: string;
}
export interface AccessListTxAminoMsg {
	type: '/seiprotocol.seichain.eth.AccessListTx';
	value: AccessListTxAmino;
}
export interface AccessListTxSDKType {
	chain_id: string;
	nonce: bigint;
	gas_price: string;
	gas_limit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	accesses: AccessTupleSDKType[];
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface DynamicFeeTx {
	chainId: string;
	nonce: bigint;
	gasTipCap: string;
	gasFeeCap: string;
	gasLimit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	accesses: AccessTuple[];
	/** signature values */
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface DynamicFeeTxProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.DynamicFeeTx';
	value: Uint8Array;
}
export interface DynamicFeeTxAmino {
	chain_id: string;
	nonce?: string;
	gas_tip_cap?: string;
	gas_fee_cap?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: string;
	accesses: AccessTupleAmino[];
	/** signature values */
	v?: string;
	r?: string;
	s?: string;
}
export interface DynamicFeeTxAminoMsg {
	type: '/seiprotocol.seichain.eth.DynamicFeeTx';
	value: DynamicFeeTxAmino;
}
export interface DynamicFeeTxSDKType {
	chain_id: string;
	nonce: bigint;
	gas_tip_cap: string;
	gas_fee_cap: string;
	gas_limit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	accesses: AccessTupleSDKType[];
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface BlobTx {
	chainId: string;
	nonce: bigint;
	gasTipCap: string;
	gasFeeCap: string;
	gasLimit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	accesses: AccessTuple[];
	blobFeeCap: string;
	blobHashes: Uint8Array[];
	sidecar?: BlobTxSidecar | undefined;
	/** signature values */
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface BlobTxProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.BlobTx';
	value: Uint8Array;
}
export interface BlobTxAmino {
	chain_id: string;
	nonce?: string;
	gas_tip_cap?: string;
	gas_fee_cap?: string;
	gas_limit?: string;
	to?: string;
	value?: string;
	data?: string;
	accesses: AccessTupleAmino[];
	blob_fee_cap?: string;
	blob_hashes?: string[];
	sidecar?: BlobTxSidecarAmino | undefined;
	/** signature values */
	v?: string;
	r?: string;
	s?: string;
}
export interface BlobTxAminoMsg {
	type: '/seiprotocol.seichain.eth.BlobTx';
	value: BlobTxAmino;
}
export interface BlobTxSDKType {
	chain_id: string;
	nonce: bigint;
	gas_tip_cap: string;
	gas_fee_cap: string;
	gas_limit: bigint;
	to: string;
	value: string;
	data: Uint8Array;
	accesses: AccessTupleSDKType[];
	blob_fee_cap: string;
	blob_hashes: Uint8Array[];
	sidecar?: BlobTxSidecarSDKType | undefined;
	v: Uint8Array;
	r: Uint8Array;
	s: Uint8Array;
}
export interface BlobTxSidecar {
	blobs: Uint8Array[];
	commitments: Uint8Array[];
	proofs: Uint8Array[];
}
export interface BlobTxSidecarProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.BlobTxSidecar';
	value: Uint8Array;
}
export interface BlobTxSidecarAmino {
	blobs?: string[];
	commitments?: string[];
	proofs?: string[];
}
export interface BlobTxSidecarAminoMsg {
	type: '/seiprotocol.seichain.eth.BlobTxSidecar';
	value: BlobTxSidecarAmino;
}
export interface BlobTxSidecarSDKType {
	blobs: Uint8Array[];
	commitments: Uint8Array[];
	proofs: Uint8Array[];
}
export interface ExtensionOptionsEthereumTx {}
export interface ExtensionOptionsEthereumTxProtoMsg {
	typeUrl: '/seiprotocol.seichain.eth.ExtensionOptionsEthereumTx';
	value: Uint8Array;
}
export interface ExtensionOptionsEthereumTxAmino {}
export interface ExtensionOptionsEthereumTxAminoMsg {
	type: '/seiprotocol.seichain.eth.ExtensionOptionsEthereumTx';
	value: ExtensionOptionsEthereumTxAmino;
}
export interface ExtensionOptionsEthereumTxSDKType {}
function createBaseAccessTuple(): AccessTuple {
	return {
		address: '',
		storageKeys: []
	};
}
export const AccessTuple = {
	typeUrl: '/seiprotocol.seichain.eth.AccessTuple',
	encode(message: AccessTuple, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		for (const v of message.storageKeys) {
			writer.uint32(18).string(v!);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): AccessTuple {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAccessTuple();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.storageKeys.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<AccessTuple>): AccessTuple {
		const message = createBaseAccessTuple();
		message.address = object.address ?? '';
		message.storageKeys = object.storageKeys?.map((e) => e) || [];
		return message;
	},
	fromAmino(object: AccessTupleAmino): AccessTuple {
		const message = createBaseAccessTuple();
		if (object.address !== undefined && object.address !== null) {
			message.address = object.address;
		}
		message.storageKeys = object.storage_keys?.map((e) => e) || [];
		return message;
	},
	toAmino(message: AccessTuple): AccessTupleAmino {
		const obj: any = {};
		obj.address = message.address === '' ? undefined : message.address;
		if (message.storageKeys) {
			obj.storage_keys = message.storageKeys.map((e) => e);
		} else {
			obj.storage_keys = message.storageKeys;
		}
		return obj;
	},
	fromAminoMsg(object: AccessTupleAminoMsg): AccessTuple {
		return AccessTuple.fromAmino(object.value);
	},
	fromProtoMsg(message: AccessTupleProtoMsg): AccessTuple {
		return AccessTuple.decode(message.value);
	},
	toProto(message: AccessTuple): Uint8Array {
		return AccessTuple.encode(message).finish();
	},
	toProtoMsg(message: AccessTuple): AccessTupleProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.AccessTuple',
			value: AccessTuple.encode(message).finish()
		};
	}
};
function createBaseAssociateTx(): AssociateTx {
	return {
		v: new Uint8Array(),
		r: new Uint8Array(),
		s: new Uint8Array(),
		customMessage: ''
	};
}
export const AssociateTx = {
	typeUrl: '/seiprotocol.seichain.eth.AssociateTx',
	encode(message: AssociateTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.v.length !== 0) {
			writer.uint32(10).bytes(message.v);
		}
		if (message.r.length !== 0) {
			writer.uint32(18).bytes(message.r);
		}
		if (message.s.length !== 0) {
			writer.uint32(26).bytes(message.s);
		}
		if (message.customMessage !== '') {
			writer.uint32(34).string(message.customMessage);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): AssociateTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAssociateTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.v = reader.bytes();
					break;
				case 2:
					message.r = reader.bytes();
					break;
				case 3:
					message.s = reader.bytes();
					break;
				case 4:
					message.customMessage = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<AssociateTx>): AssociateTx {
		const message = createBaseAssociateTx();
		message.v = object.v ?? new Uint8Array();
		message.r = object.r ?? new Uint8Array();
		message.s = object.s ?? new Uint8Array();
		message.customMessage = object.customMessage ?? '';
		return message;
	},
	fromAmino(object: AssociateTxAmino): AssociateTx {
		const message = createBaseAssociateTx();
		if (object.v !== undefined && object.v !== null) {
			message.v = bytesFromBase64(object.v);
		}
		if (object.r !== undefined && object.r !== null) {
			message.r = bytesFromBase64(object.r);
		}
		if (object.s !== undefined && object.s !== null) {
			message.s = bytesFromBase64(object.s);
		}
		if (object.custom_message !== undefined && object.custom_message !== null) {
			message.customMessage = object.custom_message;
		}
		return message;
	},
	toAmino(message: AssociateTx): AssociateTxAmino {
		const obj: any = {};
		obj.v = message.v ? base64FromBytes(message.v) : undefined;
		obj.r = message.r ? base64FromBytes(message.r) : undefined;
		obj.s = message.s ? base64FromBytes(message.s) : undefined;
		obj.custom_message = message.customMessage === '' ? undefined : message.customMessage;
		return obj;
	},
	fromAminoMsg(object: AssociateTxAminoMsg): AssociateTx {
		return AssociateTx.fromAmino(object.value);
	},
	fromProtoMsg(message: AssociateTxProtoMsg): AssociateTx {
		return AssociateTx.decode(message.value);
	},
	toProto(message: AssociateTx): Uint8Array {
		return AssociateTx.encode(message).finish();
	},
	toProtoMsg(message: AssociateTx): AssociateTxProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.AssociateTx',
			value: AssociateTx.encode(message).finish()
		};
	}
};
function createBaseLegacyTx(): LegacyTx {
	return {
		nonce: BigInt(0),
		gasPrice: '',
		gasLimit: BigInt(0),
		to: '',
		value: '',
		data: new Uint8Array(),
		v: new Uint8Array(),
		r: new Uint8Array(),
		s: new Uint8Array()
	};
}
export const LegacyTx = {
	typeUrl: '/seiprotocol.seichain.eth.LegacyTx',
	encode(message: LegacyTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.nonce !== BigInt(0)) {
			writer.uint32(8).uint64(message.nonce);
		}
		if (message.gasPrice !== '') {
			writer.uint32(18).string(message.gasPrice);
		}
		if (message.gasLimit !== BigInt(0)) {
			writer.uint32(24).uint64(message.gasLimit);
		}
		if (message.to !== '') {
			writer.uint32(34).string(message.to);
		}
		if (message.value !== '') {
			writer.uint32(42).string(message.value);
		}
		if (message.data.length !== 0) {
			writer.uint32(50).bytes(message.data);
		}
		if (message.v.length !== 0) {
			writer.uint32(58).bytes(message.v);
		}
		if (message.r.length !== 0) {
			writer.uint32(66).bytes(message.r);
		}
		if (message.s.length !== 0) {
			writer.uint32(74).bytes(message.s);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): LegacyTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseLegacyTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.nonce = reader.uint64();
					break;
				case 2:
					message.gasPrice = reader.string();
					break;
				case 3:
					message.gasLimit = reader.uint64();
					break;
				case 4:
					message.to = reader.string();
					break;
				case 5:
					message.value = reader.string();
					break;
				case 6:
					message.data = reader.bytes();
					break;
				case 7:
					message.v = reader.bytes();
					break;
				case 8:
					message.r = reader.bytes();
					break;
				case 9:
					message.s = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<LegacyTx>): LegacyTx {
		const message = createBaseLegacyTx();
		message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
		message.gasPrice = object.gasPrice ?? '';
		message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
		message.to = object.to ?? '';
		message.value = object.value ?? '';
		message.data = object.data ?? new Uint8Array();
		message.v = object.v ?? new Uint8Array();
		message.r = object.r ?? new Uint8Array();
		message.s = object.s ?? new Uint8Array();
		return message;
	},
	fromAmino(object: LegacyTxAmino): LegacyTx {
		const message = createBaseLegacyTx();
		if (object.nonce !== undefined && object.nonce !== null) {
			message.nonce = BigInt(object.nonce);
		}
		if (object.gas_price !== undefined && object.gas_price !== null) {
			message.gasPrice = object.gas_price;
		}
		if (object.gas_limit !== undefined && object.gas_limit !== null) {
			message.gasLimit = BigInt(object.gas_limit);
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		if (object.value !== undefined && object.value !== null) {
			message.value = object.value;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		if (object.v !== undefined && object.v !== null) {
			message.v = bytesFromBase64(object.v);
		}
		if (object.r !== undefined && object.r !== null) {
			message.r = bytesFromBase64(object.r);
		}
		if (object.s !== undefined && object.s !== null) {
			message.s = bytesFromBase64(object.s);
		}
		return message;
	},
	toAmino(message: LegacyTx): LegacyTxAmino {
		const obj: any = {};
		obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
		obj.gas_price = message.gasPrice === '' ? undefined : message.gasPrice;
		obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit.toString() : undefined;
		obj.to = message.to === '' ? undefined : message.to;
		obj.value = message.value === '' ? undefined : message.value;
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		obj.v = message.v ? base64FromBytes(message.v) : undefined;
		obj.r = message.r ? base64FromBytes(message.r) : undefined;
		obj.s = message.s ? base64FromBytes(message.s) : undefined;
		return obj;
	},
	fromAminoMsg(object: LegacyTxAminoMsg): LegacyTx {
		return LegacyTx.fromAmino(object.value);
	},
	fromProtoMsg(message: LegacyTxProtoMsg): LegacyTx {
		return LegacyTx.decode(message.value);
	},
	toProto(message: LegacyTx): Uint8Array {
		return LegacyTx.encode(message).finish();
	},
	toProtoMsg(message: LegacyTx): LegacyTxProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.LegacyTx',
			value: LegacyTx.encode(message).finish()
		};
	}
};
function createBaseAccessListTx(): AccessListTx {
	return {
		chainId: '',
		nonce: BigInt(0),
		gasPrice: '',
		gasLimit: BigInt(0),
		to: '',
		value: '',
		data: new Uint8Array(),
		accesses: [],
		v: new Uint8Array(),
		r: new Uint8Array(),
		s: new Uint8Array()
	};
}
export const AccessListTx = {
	typeUrl: '/seiprotocol.seichain.eth.AccessListTx',
	encode(message: AccessListTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.chainId !== '') {
			writer.uint32(10).string(message.chainId);
		}
		if (message.nonce !== BigInt(0)) {
			writer.uint32(16).uint64(message.nonce);
		}
		if (message.gasPrice !== '') {
			writer.uint32(26).string(message.gasPrice);
		}
		if (message.gasLimit !== BigInt(0)) {
			writer.uint32(32).uint64(message.gasLimit);
		}
		if (message.to !== '') {
			writer.uint32(42).string(message.to);
		}
		if (message.value !== '') {
			writer.uint32(50).string(message.value);
		}
		if (message.data.length !== 0) {
			writer.uint32(58).bytes(message.data);
		}
		for (const v of message.accesses) {
			AccessTuple.encode(v!, writer.uint32(66).fork()).ldelim();
		}
		if (message.v.length !== 0) {
			writer.uint32(74).bytes(message.v);
		}
		if (message.r.length !== 0) {
			writer.uint32(82).bytes(message.r);
		}
		if (message.s.length !== 0) {
			writer.uint32(90).bytes(message.s);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): AccessListTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAccessListTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.chainId = reader.string();
					break;
				case 2:
					message.nonce = reader.uint64();
					break;
				case 3:
					message.gasPrice = reader.string();
					break;
				case 4:
					message.gasLimit = reader.uint64();
					break;
				case 5:
					message.to = reader.string();
					break;
				case 6:
					message.value = reader.string();
					break;
				case 7:
					message.data = reader.bytes();
					break;
				case 8:
					message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
					break;
				case 9:
					message.v = reader.bytes();
					break;
				case 10:
					message.r = reader.bytes();
					break;
				case 11:
					message.s = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<AccessListTx>): AccessListTx {
		const message = createBaseAccessListTx();
		message.chainId = object.chainId ?? '';
		message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
		message.gasPrice = object.gasPrice ?? '';
		message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
		message.to = object.to ?? '';
		message.value = object.value ?? '';
		message.data = object.data ?? new Uint8Array();
		message.accesses = object.accesses?.map((e) => AccessTuple.fromPartial(e)) || [];
		message.v = object.v ?? new Uint8Array();
		message.r = object.r ?? new Uint8Array();
		message.s = object.s ?? new Uint8Array();
		return message;
	},
	fromAmino(object: AccessListTxAmino): AccessListTx {
		const message = createBaseAccessListTx();
		if (object.chain_id !== undefined && object.chain_id !== null) {
			message.chainId = object.chain_id;
		}
		if (object.nonce !== undefined && object.nonce !== null) {
			message.nonce = BigInt(object.nonce);
		}
		if (object.gas_price !== undefined && object.gas_price !== null) {
			message.gasPrice = object.gas_price;
		}
		if (object.gas_limit !== undefined && object.gas_limit !== null) {
			message.gasLimit = BigInt(object.gas_limit);
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		if (object.value !== undefined && object.value !== null) {
			message.value = object.value;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		message.accesses = object.accesses?.map((e) => AccessTuple.fromAmino(e)) || [];
		if (object.v !== undefined && object.v !== null) {
			message.v = bytesFromBase64(object.v);
		}
		if (object.r !== undefined && object.r !== null) {
			message.r = bytesFromBase64(object.r);
		}
		if (object.s !== undefined && object.s !== null) {
			message.s = bytesFromBase64(object.s);
		}
		return message;
	},
	toAmino(message: AccessListTx): AccessListTxAmino {
		const obj: any = {};
		obj.chain_id = message.chainId ?? '';
		obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
		obj.gas_price = message.gasPrice === '' ? undefined : message.gasPrice;
		obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit.toString() : undefined;
		obj.to = message.to === '' ? undefined : message.to;
		obj.value = message.value === '' ? undefined : message.value;
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		if (message.accesses) {
			obj.accesses = message.accesses.map((e) => (e ? AccessTuple.toAmino(e) : undefined));
		} else {
			obj.accesses = message.accesses;
		}
		obj.v = message.v ? base64FromBytes(message.v) : undefined;
		obj.r = message.r ? base64FromBytes(message.r) : undefined;
		obj.s = message.s ? base64FromBytes(message.s) : undefined;
		return obj;
	},
	fromAminoMsg(object: AccessListTxAminoMsg): AccessListTx {
		return AccessListTx.fromAmino(object.value);
	},
	fromProtoMsg(message: AccessListTxProtoMsg): AccessListTx {
		return AccessListTx.decode(message.value);
	},
	toProto(message: AccessListTx): Uint8Array {
		return AccessListTx.encode(message).finish();
	},
	toProtoMsg(message: AccessListTx): AccessListTxProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.AccessListTx',
			value: AccessListTx.encode(message).finish()
		};
	}
};
function createBaseDynamicFeeTx(): DynamicFeeTx {
	return {
		chainId: '',
		nonce: BigInt(0),
		gasTipCap: '',
		gasFeeCap: '',
		gasLimit: BigInt(0),
		to: '',
		value: '',
		data: new Uint8Array(),
		accesses: [],
		v: new Uint8Array(),
		r: new Uint8Array(),
		s: new Uint8Array()
	};
}
export const DynamicFeeTx = {
	typeUrl: '/seiprotocol.seichain.eth.DynamicFeeTx',
	encode(message: DynamicFeeTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.chainId !== '') {
			writer.uint32(10).string(message.chainId);
		}
		if (message.nonce !== BigInt(0)) {
			writer.uint32(16).uint64(message.nonce);
		}
		if (message.gasTipCap !== '') {
			writer.uint32(26).string(message.gasTipCap);
		}
		if (message.gasFeeCap !== '') {
			writer.uint32(34).string(message.gasFeeCap);
		}
		if (message.gasLimit !== BigInt(0)) {
			writer.uint32(40).uint64(message.gasLimit);
		}
		if (message.to !== '') {
			writer.uint32(50).string(message.to);
		}
		if (message.value !== '') {
			writer.uint32(58).string(message.value);
		}
		if (message.data.length !== 0) {
			writer.uint32(66).bytes(message.data);
		}
		for (const v of message.accesses) {
			AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
		}
		if (message.v.length !== 0) {
			writer.uint32(82).bytes(message.v);
		}
		if (message.r.length !== 0) {
			writer.uint32(90).bytes(message.r);
		}
		if (message.s.length !== 0) {
			writer.uint32(98).bytes(message.s);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): DynamicFeeTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDynamicFeeTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.chainId = reader.string();
					break;
				case 2:
					message.nonce = reader.uint64();
					break;
				case 3:
					message.gasTipCap = reader.string();
					break;
				case 4:
					message.gasFeeCap = reader.string();
					break;
				case 5:
					message.gasLimit = reader.uint64();
					break;
				case 6:
					message.to = reader.string();
					break;
				case 7:
					message.value = reader.string();
					break;
				case 8:
					message.data = reader.bytes();
					break;
				case 9:
					message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
					break;
				case 10:
					message.v = reader.bytes();
					break;
				case 11:
					message.r = reader.bytes();
					break;
				case 12:
					message.s = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<DynamicFeeTx>): DynamicFeeTx {
		const message = createBaseDynamicFeeTx();
		message.chainId = object.chainId ?? '';
		message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
		message.gasTipCap = object.gasTipCap ?? '';
		message.gasFeeCap = object.gasFeeCap ?? '';
		message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
		message.to = object.to ?? '';
		message.value = object.value ?? '';
		message.data = object.data ?? new Uint8Array();
		message.accesses = object.accesses?.map((e) => AccessTuple.fromPartial(e)) || [];
		message.v = object.v ?? new Uint8Array();
		message.r = object.r ?? new Uint8Array();
		message.s = object.s ?? new Uint8Array();
		return message;
	},
	fromAmino(object: DynamicFeeTxAmino): DynamicFeeTx {
		const message = createBaseDynamicFeeTx();
		if (object.chain_id !== undefined && object.chain_id !== null) {
			message.chainId = object.chain_id;
		}
		if (object.nonce !== undefined && object.nonce !== null) {
			message.nonce = BigInt(object.nonce);
		}
		if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
			message.gasTipCap = object.gas_tip_cap;
		}
		if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
			message.gasFeeCap = object.gas_fee_cap;
		}
		if (object.gas_limit !== undefined && object.gas_limit !== null) {
			message.gasLimit = BigInt(object.gas_limit);
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		if (object.value !== undefined && object.value !== null) {
			message.value = object.value;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		message.accesses = object.accesses?.map((e) => AccessTuple.fromAmino(e)) || [];
		if (object.v !== undefined && object.v !== null) {
			message.v = bytesFromBase64(object.v);
		}
		if (object.r !== undefined && object.r !== null) {
			message.r = bytesFromBase64(object.r);
		}
		if (object.s !== undefined && object.s !== null) {
			message.s = bytesFromBase64(object.s);
		}
		return message;
	},
	toAmino(message: DynamicFeeTx): DynamicFeeTxAmino {
		const obj: any = {};
		obj.chain_id = message.chainId ?? '';
		obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
		obj.gas_tip_cap = message.gasTipCap === '' ? undefined : message.gasTipCap;
		obj.gas_fee_cap = message.gasFeeCap === '' ? undefined : message.gasFeeCap;
		obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit.toString() : undefined;
		obj.to = message.to === '' ? undefined : message.to;
		obj.value = message.value === '' ? undefined : message.value;
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		if (message.accesses) {
			obj.accesses = message.accesses.map((e) => (e ? AccessTuple.toAmino(e) : undefined));
		} else {
			obj.accesses = message.accesses;
		}
		obj.v = message.v ? base64FromBytes(message.v) : undefined;
		obj.r = message.r ? base64FromBytes(message.r) : undefined;
		obj.s = message.s ? base64FromBytes(message.s) : undefined;
		return obj;
	},
	fromAminoMsg(object: DynamicFeeTxAminoMsg): DynamicFeeTx {
		return DynamicFeeTx.fromAmino(object.value);
	},
	fromProtoMsg(message: DynamicFeeTxProtoMsg): DynamicFeeTx {
		return DynamicFeeTx.decode(message.value);
	},
	toProto(message: DynamicFeeTx): Uint8Array {
		return DynamicFeeTx.encode(message).finish();
	},
	toProtoMsg(message: DynamicFeeTx): DynamicFeeTxProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.DynamicFeeTx',
			value: DynamicFeeTx.encode(message).finish()
		};
	}
};
function createBaseBlobTx(): BlobTx {
	return {
		chainId: '',
		nonce: BigInt(0),
		gasTipCap: '',
		gasFeeCap: '',
		gasLimit: BigInt(0),
		to: '',
		value: '',
		data: new Uint8Array(),
		accesses: [],
		blobFeeCap: '',
		blobHashes: [],
		sidecar: undefined,
		v: new Uint8Array(),
		r: new Uint8Array(),
		s: new Uint8Array()
	};
}
export const BlobTx = {
	typeUrl: '/seiprotocol.seichain.eth.BlobTx',
	encode(message: BlobTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.chainId !== '') {
			writer.uint32(10).string(message.chainId);
		}
		if (message.nonce !== BigInt(0)) {
			writer.uint32(16).uint64(message.nonce);
		}
		if (message.gasTipCap !== '') {
			writer.uint32(26).string(message.gasTipCap);
		}
		if (message.gasFeeCap !== '') {
			writer.uint32(34).string(message.gasFeeCap);
		}
		if (message.gasLimit !== BigInt(0)) {
			writer.uint32(40).uint64(message.gasLimit);
		}
		if (message.to !== '') {
			writer.uint32(50).string(message.to);
		}
		if (message.value !== '') {
			writer.uint32(58).string(message.value);
		}
		if (message.data.length !== 0) {
			writer.uint32(66).bytes(message.data);
		}
		for (const v of message.accesses) {
			AccessTuple.encode(v!, writer.uint32(74).fork()).ldelim();
		}
		if (message.blobFeeCap !== '') {
			writer.uint32(82).string(message.blobFeeCap);
		}
		for (const v of message.blobHashes) {
			writer.uint32(90).bytes(v!);
		}
		if (message.sidecar !== undefined) {
			BlobTxSidecar.encode(message.sidecar, writer.uint32(98).fork()).ldelim();
		}
		if (message.v.length !== 0) {
			writer.uint32(106).bytes(message.v);
		}
		if (message.r.length !== 0) {
			writer.uint32(114).bytes(message.r);
		}
		if (message.s.length !== 0) {
			writer.uint32(122).bytes(message.s);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): BlobTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBlobTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.chainId = reader.string();
					break;
				case 2:
					message.nonce = reader.uint64();
					break;
				case 3:
					message.gasTipCap = reader.string();
					break;
				case 4:
					message.gasFeeCap = reader.string();
					break;
				case 5:
					message.gasLimit = reader.uint64();
					break;
				case 6:
					message.to = reader.string();
					break;
				case 7:
					message.value = reader.string();
					break;
				case 8:
					message.data = reader.bytes();
					break;
				case 9:
					message.accesses.push(AccessTuple.decode(reader, reader.uint32()));
					break;
				case 10:
					message.blobFeeCap = reader.string();
					break;
				case 11:
					message.blobHashes.push(reader.bytes());
					break;
				case 12:
					message.sidecar = BlobTxSidecar.decode(reader, reader.uint32());
					break;
				case 13:
					message.v = reader.bytes();
					break;
				case 14:
					message.r = reader.bytes();
					break;
				case 15:
					message.s = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<BlobTx>): BlobTx {
		const message = createBaseBlobTx();
		message.chainId = object.chainId ?? '';
		message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
		message.gasTipCap = object.gasTipCap ?? '';
		message.gasFeeCap = object.gasFeeCap ?? '';
		message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
		message.to = object.to ?? '';
		message.value = object.value ?? '';
		message.data = object.data ?? new Uint8Array();
		message.accesses = object.accesses?.map((e) => AccessTuple.fromPartial(e)) || [];
		message.blobFeeCap = object.blobFeeCap ?? '';
		message.blobHashes = object.blobHashes?.map((e) => e) || [];
		message.sidecar = object.sidecar !== undefined && object.sidecar !== null ? BlobTxSidecar.fromPartial(object.sidecar) : undefined;
		message.v = object.v ?? new Uint8Array();
		message.r = object.r ?? new Uint8Array();
		message.s = object.s ?? new Uint8Array();
		return message;
	},
	fromAmino(object: BlobTxAmino): BlobTx {
		const message = createBaseBlobTx();
		if (object.chain_id !== undefined && object.chain_id !== null) {
			message.chainId = object.chain_id;
		}
		if (object.nonce !== undefined && object.nonce !== null) {
			message.nonce = BigInt(object.nonce);
		}
		if (object.gas_tip_cap !== undefined && object.gas_tip_cap !== null) {
			message.gasTipCap = object.gas_tip_cap;
		}
		if (object.gas_fee_cap !== undefined && object.gas_fee_cap !== null) {
			message.gasFeeCap = object.gas_fee_cap;
		}
		if (object.gas_limit !== undefined && object.gas_limit !== null) {
			message.gasLimit = BigInt(object.gas_limit);
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		if (object.value !== undefined && object.value !== null) {
			message.value = object.value;
		}
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		message.accesses = object.accesses?.map((e) => AccessTuple.fromAmino(e)) || [];
		if (object.blob_fee_cap !== undefined && object.blob_fee_cap !== null) {
			message.blobFeeCap = object.blob_fee_cap;
		}
		message.blobHashes = object.blob_hashes?.map((e) => bytesFromBase64(e)) || [];
		if (object.sidecar !== undefined && object.sidecar !== null) {
			message.sidecar = BlobTxSidecar.fromAmino(object.sidecar);
		}
		if (object.v !== undefined && object.v !== null) {
			message.v = bytesFromBase64(object.v);
		}
		if (object.r !== undefined && object.r !== null) {
			message.r = bytesFromBase64(object.r);
		}
		if (object.s !== undefined && object.s !== null) {
			message.s = bytesFromBase64(object.s);
		}
		return message;
	},
	toAmino(message: BlobTx): BlobTxAmino {
		const obj: any = {};
		obj.chain_id = message.chainId ?? '';
		obj.nonce = message.nonce !== BigInt(0) ? message.nonce.toString() : undefined;
		obj.gas_tip_cap = message.gasTipCap === '' ? undefined : message.gasTipCap;
		obj.gas_fee_cap = message.gasFeeCap === '' ? undefined : message.gasFeeCap;
		obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit.toString() : undefined;
		obj.to = message.to === '' ? undefined : message.to;
		obj.value = message.value === '' ? undefined : message.value;
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		if (message.accesses) {
			obj.accesses = message.accesses.map((e) => (e ? AccessTuple.toAmino(e) : undefined));
		} else {
			obj.accesses = message.accesses;
		}
		obj.blob_fee_cap = message.blobFeeCap === '' ? undefined : message.blobFeeCap;
		if (message.blobHashes) {
			obj.blob_hashes = message.blobHashes.map((e) => base64FromBytes(e));
		} else {
			obj.blob_hashes = message.blobHashes;
		}
		obj.sidecar = message.sidecar ? BlobTxSidecar.toAmino(message.sidecar) : undefined;
		obj.v = message.v ? base64FromBytes(message.v) : undefined;
		obj.r = message.r ? base64FromBytes(message.r) : undefined;
		obj.s = message.s ? base64FromBytes(message.s) : undefined;
		return obj;
	},
	fromAminoMsg(object: BlobTxAminoMsg): BlobTx {
		return BlobTx.fromAmino(object.value);
	},
	fromProtoMsg(message: BlobTxProtoMsg): BlobTx {
		return BlobTx.decode(message.value);
	},
	toProto(message: BlobTx): Uint8Array {
		return BlobTx.encode(message).finish();
	},
	toProtoMsg(message: BlobTx): BlobTxProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.BlobTx',
			value: BlobTx.encode(message).finish()
		};
	}
};
function createBaseBlobTxSidecar(): BlobTxSidecar {
	return {
		blobs: [],
		commitments: [],
		proofs: []
	};
}
export const BlobTxSidecar = {
	typeUrl: '/seiprotocol.seichain.eth.BlobTxSidecar',
	encode(message: BlobTxSidecar, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		for (const v of message.blobs) {
			writer.uint32(10).bytes(v!);
		}
		for (const v of message.commitments) {
			writer.uint32(18).bytes(v!);
		}
		for (const v of message.proofs) {
			writer.uint32(26).bytes(v!);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): BlobTxSidecar {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBlobTxSidecar();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.blobs.push(reader.bytes());
					break;
				case 2:
					message.commitments.push(reader.bytes());
					break;
				case 3:
					message.proofs.push(reader.bytes());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<BlobTxSidecar>): BlobTxSidecar {
		const message = createBaseBlobTxSidecar();
		message.blobs = object.blobs?.map((e) => e) || [];
		message.commitments = object.commitments?.map((e) => e) || [];
		message.proofs = object.proofs?.map((e) => e) || [];
		return message;
	},
	fromAmino(object: BlobTxSidecarAmino): BlobTxSidecar {
		const message = createBaseBlobTxSidecar();
		message.blobs = object.blobs?.map((e) => bytesFromBase64(e)) || [];
		message.commitments = object.commitments?.map((e) => bytesFromBase64(e)) || [];
		message.proofs = object.proofs?.map((e) => bytesFromBase64(e)) || [];
		return message;
	},
	toAmino(message: BlobTxSidecar): BlobTxSidecarAmino {
		const obj: any = {};
		if (message.blobs) {
			obj.blobs = message.blobs.map((e) => base64FromBytes(e));
		} else {
			obj.blobs = message.blobs;
		}
		if (message.commitments) {
			obj.commitments = message.commitments.map((e) => base64FromBytes(e));
		} else {
			obj.commitments = message.commitments;
		}
		if (message.proofs) {
			obj.proofs = message.proofs.map((e) => base64FromBytes(e));
		} else {
			obj.proofs = message.proofs;
		}
		return obj;
	},
	fromAminoMsg(object: BlobTxSidecarAminoMsg): BlobTxSidecar {
		return BlobTxSidecar.fromAmino(object.value);
	},
	fromProtoMsg(message: BlobTxSidecarProtoMsg): BlobTxSidecar {
		return BlobTxSidecar.decode(message.value);
	},
	toProto(message: BlobTxSidecar): Uint8Array {
		return BlobTxSidecar.encode(message).finish();
	},
	toProtoMsg(message: BlobTxSidecar): BlobTxSidecarProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.BlobTxSidecar',
			value: BlobTxSidecar.encode(message).finish()
		};
	}
};
function createBaseExtensionOptionsEthereumTx(): ExtensionOptionsEthereumTx {
	return {};
}
export const ExtensionOptionsEthereumTx = {
	typeUrl: '/seiprotocol.seichain.eth.ExtensionOptionsEthereumTx',
	encode(_: ExtensionOptionsEthereumTx, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ExtensionOptionsEthereumTx {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExtensionOptionsEthereumTx();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(_: Partial<ExtensionOptionsEthereumTx>): ExtensionOptionsEthereumTx {
		const message = createBaseExtensionOptionsEthereumTx();
		return message;
	},
	fromAmino(_: ExtensionOptionsEthereumTxAmino): ExtensionOptionsEthereumTx {
		const message = createBaseExtensionOptionsEthereumTx();
		return message;
	},
	toAmino(_: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: ExtensionOptionsEthereumTxAminoMsg): ExtensionOptionsEthereumTx {
		return ExtensionOptionsEthereumTx.fromAmino(object.value);
	},
	fromProtoMsg(message: ExtensionOptionsEthereumTxProtoMsg): ExtensionOptionsEthereumTx {
		return ExtensionOptionsEthereumTx.decode(message.value);
	},
	toProto(message: ExtensionOptionsEthereumTx): Uint8Array {
		return ExtensionOptionsEthereumTx.encode(message).finish();
	},
	toProtoMsg(message: ExtensionOptionsEthereumTx): ExtensionOptionsEthereumTxProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.eth.ExtensionOptionsEthereumTx',
			value: ExtensionOptionsEthereumTx.encode(message).finish()
		};
	}
};
