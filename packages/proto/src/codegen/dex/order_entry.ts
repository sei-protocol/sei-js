import { BinaryReader, BinaryWriter } from '../binary';
import { Decimal } from '@cosmjs/math';
export interface OrderEntry {
	price: string;
	quantity: string;
	allocations: Allocation[];
	priceDenom: string;
	assetDenom: string;
}
export interface OrderEntryProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.OrderEntry';
	value: Uint8Array;
}
export interface OrderEntryAmino {
	price: string;
	quantity: string;
	allocations: AllocationAmino[];
	priceDenom: string;
	assetDenom: string;
}
export interface OrderEntryAminoMsg {
	type: '/seiprotocol.seichain.dex.OrderEntry';
	value: OrderEntryAmino;
}
export interface OrderEntrySDKType {
	price: string;
	quantity: string;
	allocations: AllocationSDKType[];
	priceDenom: string;
	assetDenom: string;
}
export interface Allocation {
	orderId: bigint;
	quantity: string;
	account: string;
}
export interface AllocationProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.Allocation';
	value: Uint8Array;
}
export interface AllocationAmino {
	orderId: string;
	quantity: string;
	account: string;
}
export interface AllocationAminoMsg {
	type: '/seiprotocol.seichain.dex.Allocation';
	value: AllocationAmino;
}
export interface AllocationSDKType {
	orderId: bigint;
	quantity: string;
	account: string;
}
function createBaseOrderEntry(): OrderEntry {
	return {
		price: '',
		quantity: '',
		allocations: [],
		priceDenom: '',
		assetDenom: ''
	};
}
export const OrderEntry = {
	typeUrl: '/seiprotocol.seichain.dex.OrderEntry',
	encode(message: OrderEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.price !== '') {
			writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
		}
		if (message.quantity !== '') {
			writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
		}
		for (const v of message.allocations) {
			Allocation.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		if (message.priceDenom !== '') {
			writer.uint32(34).string(message.priceDenom);
		}
		if (message.assetDenom !== '') {
			writer.uint32(42).string(message.assetDenom);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): OrderEntry {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseOrderEntry();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.price = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 2:
					message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 3:
					message.allocations.push(Allocation.decode(reader, reader.uint32()));
					break;
				case 4:
					message.priceDenom = reader.string();
					break;
				case 5:
					message.assetDenom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<OrderEntry>): OrderEntry {
		const message = createBaseOrderEntry();
		message.price = object.price ?? '';
		message.quantity = object.quantity ?? '';
		message.allocations = object.allocations?.map((e) => Allocation.fromPartial(e)) || [];
		message.priceDenom = object.priceDenom ?? '';
		message.assetDenom = object.assetDenom ?? '';
		return message;
	},
	fromAmino(object: OrderEntryAmino): OrderEntry {
		const message = createBaseOrderEntry();
		if (object.price !== undefined && object.price !== null) {
			message.price = object.price;
		}
		if (object.quantity !== undefined && object.quantity !== null) {
			message.quantity = object.quantity;
		}
		message.allocations = object.allocations?.map((e) => Allocation.fromAmino(e)) || [];
		if (object.priceDenom !== undefined && object.priceDenom !== null) {
			message.priceDenom = object.priceDenom;
		}
		if (object.assetDenom !== undefined && object.assetDenom !== null) {
			message.assetDenom = object.assetDenom;
		}
		return message;
	},
	toAmino(message: OrderEntry): OrderEntryAmino {
		const obj: any = {};
		obj.price = message.price ?? '';
		obj.quantity = message.quantity ?? '';
		if (message.allocations) {
			obj.allocations = message.allocations.map((e) => (e ? Allocation.toAmino(e) : undefined));
		} else {
			obj.allocations = message.allocations;
		}
		obj.priceDenom = message.priceDenom ?? '';
		obj.assetDenom = message.assetDenom ?? '';
		return obj;
	},
	fromAminoMsg(object: OrderEntryAminoMsg): OrderEntry {
		return OrderEntry.fromAmino(object.value);
	},
	fromProtoMsg(message: OrderEntryProtoMsg): OrderEntry {
		return OrderEntry.decode(message.value);
	},
	toProto(message: OrderEntry): Uint8Array {
		return OrderEntry.encode(message).finish();
	},
	toProtoMsg(message: OrderEntry): OrderEntryProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.OrderEntry',
			value: OrderEntry.encode(message).finish()
		};
	}
};
function createBaseAllocation(): Allocation {
	return {
		orderId: BigInt(0),
		quantity: '',
		account: ''
	};
}
export const Allocation = {
	typeUrl: '/seiprotocol.seichain.dex.Allocation',
	encode(message: Allocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.orderId !== BigInt(0)) {
			writer.uint32(8).uint64(message.orderId);
		}
		if (message.quantity !== '') {
			writer.uint32(18).string(Decimal.fromUserInput(message.quantity, 18).atomics);
		}
		if (message.account !== '') {
			writer.uint32(26).string(message.account);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Allocation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAllocation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.orderId = reader.uint64();
					break;
				case 2:
					message.quantity = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 3:
					message.account = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Allocation>): Allocation {
		const message = createBaseAllocation();
		message.orderId = object.orderId !== undefined && object.orderId !== null ? BigInt(object.orderId.toString()) : BigInt(0);
		message.quantity = object.quantity ?? '';
		message.account = object.account ?? '';
		return message;
	},
	fromAmino(object: AllocationAmino): Allocation {
		const message = createBaseAllocation();
		if (object.orderId !== undefined && object.orderId !== null) {
			message.orderId = BigInt(object.orderId);
		}
		if (object.quantity !== undefined && object.quantity !== null) {
			message.quantity = object.quantity;
		}
		if (object.account !== undefined && object.account !== null) {
			message.account = object.account;
		}
		return message;
	},
	toAmino(message: Allocation): AllocationAmino {
		const obj: any = {};
		obj.orderId = message.orderId ? message.orderId.toString() : '0';
		obj.quantity = message.quantity ?? '';
		obj.account = message.account ?? '';
		return obj;
	},
	fromAminoMsg(object: AllocationAminoMsg): Allocation {
		return Allocation.fromAmino(object.value);
	},
	fromProtoMsg(message: AllocationProtoMsg): Allocation {
		return Allocation.decode(message.value);
	},
	toProto(message: Allocation): Uint8Array {
		return Allocation.encode(message).finish();
	},
	toProtoMsg(message: Allocation): AllocationProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.Allocation',
			value: Allocation.encode(message).finish()
		};
	}
};
