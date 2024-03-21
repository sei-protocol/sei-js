import { BinaryReader, BinaryWriter } from '../binary';
import { Decimal } from '@cosmjs/math';
export interface Pair {
	priceDenom: string;
	assetDenom: string;
	priceTicksize?: string;
	quantityTicksize?: string;
}
export interface PairProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.Pair';
	value: Uint8Array;
}
export interface PairAmino {
	priceDenom?: string;
	assetDenom?: string;
	priceTicksize?: string;
	quantityTicksize?: string;
}
export interface PairAminoMsg {
	type: '/seiprotocol.seichain.dex.Pair';
	value: PairAmino;
}
export interface PairSDKType {
	priceDenom: string;
	assetDenom: string;
	priceTicksize?: string;
	quantityTicksize?: string;
}
export interface BatchContractPair {
	contractAddr: string;
	pairs: Pair[];
}
export interface BatchContractPairProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.BatchContractPair';
	value: Uint8Array;
}
export interface BatchContractPairAmino {
	contractAddr?: string;
	pairs?: PairAmino[];
}
export interface BatchContractPairAminoMsg {
	type: '/seiprotocol.seichain.dex.BatchContractPair';
	value: BatchContractPairAmino;
}
export interface BatchContractPairSDKType {
	contractAddr: string;
	pairs: PairSDKType[];
}
function createBasePair(): Pair {
	return {
		priceDenom: '',
		assetDenom: '',
		priceTicksize: undefined,
		quantityTicksize: undefined
	};
}
export const Pair = {
	typeUrl: '/seiprotocol.seichain.dex.Pair',
	encode(message: Pair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.priceDenom !== '') {
			writer.uint32(10).string(message.priceDenom);
		}
		if (message.assetDenom !== '') {
			writer.uint32(18).string(message.assetDenom);
		}
		if (message.priceTicksize !== undefined) {
			writer.uint32(26).string(Decimal.fromUserInput(message.priceTicksize, 18).atomics);
		}
		if (message.quantityTicksize !== undefined) {
			writer.uint32(34).string(Decimal.fromUserInput(message.quantityTicksize, 18).atomics);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Pair {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBasePair();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.priceDenom = reader.string();
					break;
				case 2:
					message.assetDenom = reader.string();
					break;
				case 3:
					message.priceTicksize = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 4:
					message.quantityTicksize = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Pair>): Pair {
		const message = createBasePair();
		message.priceDenom = object.priceDenom ?? '';
		message.assetDenom = object.assetDenom ?? '';
		message.priceTicksize = object.priceTicksize ?? undefined;
		message.quantityTicksize = object.quantityTicksize ?? undefined;
		return message;
	},
	fromAmino(object: PairAmino): Pair {
		const message = createBasePair();
		if (object.priceDenom !== undefined && object.priceDenom !== null) {
			message.priceDenom = object.priceDenom;
		}
		if (object.assetDenom !== undefined && object.assetDenom !== null) {
			message.assetDenom = object.assetDenom;
		}
		if (object.priceTicksize !== undefined && object.priceTicksize !== null) {
			message.priceTicksize = object.priceTicksize;
		}
		if (object.quantityTicksize !== undefined && object.quantityTicksize !== null) {
			message.quantityTicksize = object.quantityTicksize;
		}
		return message;
	},
	toAmino(message: Pair): PairAmino {
		const obj: any = {};
		obj.priceDenom = message.priceDenom;
		obj.assetDenom = message.assetDenom;
		obj.priceTicksize = message.priceTicksize;
		obj.quantityTicksize = message.quantityTicksize;
		return obj;
	},
	fromAminoMsg(object: PairAminoMsg): Pair {
		return Pair.fromAmino(object.value);
	},
	fromProtoMsg(message: PairProtoMsg): Pair {
		return Pair.decode(message.value);
	},
	toProto(message: Pair): Uint8Array {
		return Pair.encode(message).finish();
	},
	toProtoMsg(message: Pair): PairProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.Pair',
			value: Pair.encode(message).finish()
		};
	}
};
function createBaseBatchContractPair(): BatchContractPair {
	return {
		contractAddr: '',
		pairs: []
	};
}
export const BatchContractPair = {
	typeUrl: '/seiprotocol.seichain.dex.BatchContractPair',
	encode(message: BatchContractPair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.contractAddr !== '') {
			writer.uint32(10).string(message.contractAddr);
		}
		for (const v of message.pairs) {
			Pair.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): BatchContractPair {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseBatchContractPair();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.contractAddr = reader.string();
					break;
				case 2:
					message.pairs.push(Pair.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<BatchContractPair>): BatchContractPair {
		const message = createBaseBatchContractPair();
		message.contractAddr = object.contractAddr ?? '';
		message.pairs = object.pairs?.map((e) => Pair.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: BatchContractPairAmino): BatchContractPair {
		const message = createBaseBatchContractPair();
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		message.pairs = object.pairs?.map((e) => Pair.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: BatchContractPair): BatchContractPairAmino {
		const obj: any = {};
		obj.contractAddr = message.contractAddr;
		if (message.pairs) {
			obj.pairs = message.pairs.map((e) => (e ? Pair.toAmino(e) : undefined));
		} else {
			obj.pairs = [];
		}
		return obj;
	},
	fromAminoMsg(object: BatchContractPairAminoMsg): BatchContractPair {
		return BatchContractPair.fromAmino(object.value);
	},
	fromProtoMsg(message: BatchContractPairProtoMsg): BatchContractPair {
		return BatchContractPair.decode(message.value);
	},
	toProto(message: BatchContractPair): Uint8Array {
		return BatchContractPair.encode(message).finish();
	},
	toProtoMsg(message: BatchContractPair): BatchContractPairProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.BatchContractPair',
			value: BatchContractPair.encode(message).finish()
		};
	}
};
