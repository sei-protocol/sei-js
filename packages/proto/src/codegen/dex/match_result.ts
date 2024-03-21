import { Order, OrderAmino, OrderSDKType, Cancellation, CancellationAmino, CancellationSDKType } from './order';
import { SettlementEntry, SettlementEntryAmino, SettlementEntrySDKType } from './settlement';
import { BinaryReader, BinaryWriter } from '../binary';
export interface MatchResult {
	height: bigint;
	contractAddr: string;
	orders: Order[];
	settlements: SettlementEntry[];
	cancellations: Cancellation[];
}
export interface MatchResultProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MatchResult';
	value: Uint8Array;
}
export interface MatchResultAmino {
	height?: string;
	contractAddr?: string;
	orders?: OrderAmino[];
	settlements?: SettlementEntryAmino[];
	cancellations?: CancellationAmino[];
}
export interface MatchResultAminoMsg {
	type: '/seiprotocol.seichain.dex.MatchResult';
	value: MatchResultAmino;
}
export interface MatchResultSDKType {
	height: bigint;
	contractAddr: string;
	orders: OrderSDKType[];
	settlements: SettlementEntrySDKType[];
	cancellations: CancellationSDKType[];
}
function createBaseMatchResult(): MatchResult {
	return {
		height: BigInt(0),
		contractAddr: '',
		orders: [],
		settlements: [],
		cancellations: []
	};
}
export const MatchResult = {
	typeUrl: '/seiprotocol.seichain.dex.MatchResult',
	encode(message: MatchResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.height !== BigInt(0)) {
			writer.uint32(8).int64(message.height);
		}
		if (message.contractAddr !== '') {
			writer.uint32(18).string(message.contractAddr);
		}
		for (const v of message.orders) {
			Order.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		for (const v of message.settlements) {
			SettlementEntry.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		for (const v of message.cancellations) {
			Cancellation.encode(v!, writer.uint32(42).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MatchResult {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMatchResult();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.height = reader.int64();
					break;
				case 2:
					message.contractAddr = reader.string();
					break;
				case 3:
					message.orders.push(Order.decode(reader, reader.uint32()));
					break;
				case 4:
					message.settlements.push(SettlementEntry.decode(reader, reader.uint32()));
					break;
				case 5:
					message.cancellations.push(Cancellation.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MatchResult>): MatchResult {
		const message = createBaseMatchResult();
		message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
		message.contractAddr = object.contractAddr ?? '';
		message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
		message.settlements = object.settlements?.map((e) => SettlementEntry.fromPartial(e)) || [];
		message.cancellations = object.cancellations?.map((e) => Cancellation.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: MatchResultAmino): MatchResult {
		const message = createBaseMatchResult();
		if (object.height !== undefined && object.height !== null) {
			message.height = BigInt(object.height);
		}
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		message.orders = object.orders?.map((e) => Order.fromAmino(e)) || [];
		message.settlements = object.settlements?.map((e) => SettlementEntry.fromAmino(e)) || [];
		message.cancellations = object.cancellations?.map((e) => Cancellation.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: MatchResult): MatchResultAmino {
		const obj: any = {};
		obj.height = message.height ? message.height.toString() : undefined;
		obj.contractAddr = message.contractAddr;
		if (message.orders) {
			obj.orders = message.orders.map((e) => (e ? Order.toAmino(e) : undefined));
		} else {
			obj.orders = [];
		}
		if (message.settlements) {
			obj.settlements = message.settlements.map((e) => (e ? SettlementEntry.toAmino(e) : undefined));
		} else {
			obj.settlements = [];
		}
		if (message.cancellations) {
			obj.cancellations = message.cancellations.map((e) => (e ? Cancellation.toAmino(e) : undefined));
		} else {
			obj.cancellations = [];
		}
		return obj;
	},
	fromAminoMsg(object: MatchResultAminoMsg): MatchResult {
		return MatchResult.fromAmino(object.value);
	},
	fromProtoMsg(message: MatchResultProtoMsg): MatchResult {
		return MatchResult.decode(message.value);
	},
	toProto(message: MatchResult): Uint8Array {
		return MatchResult.encode(message).finish();
	},
	toProtoMsg(message: MatchResult): MatchResultProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MatchResult',
			value: MatchResult.encode(message).finish()
		};
	}
};
