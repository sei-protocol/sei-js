import { Order, OrderAmino, OrderSDKType, Cancellation, CancellationAmino, CancellationSDKType } from './order';
import { Coin, CoinAmino, CoinSDKType } from '../cosmos/base/v1beta1/coin';
import { ContractInfoV2, ContractInfoV2Amino, ContractInfoV2SDKType } from './contract';
import { BatchContractPair, BatchContractPairAmino, BatchContractPairSDKType } from './pair';
import { TickSize, TickSizeAmino, TickSizeSDKType } from './tick_size';
import { BinaryReader, BinaryWriter } from '../binary';
export interface MsgPlaceOrders {
	creator: string;
	orders: Order[];
	contractAddr: string;
	funds: Coin[];
}
export interface MsgPlaceOrdersProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgPlaceOrders';
	value: Uint8Array;
}
export interface MsgPlaceOrdersAmino {
	creator?: string;
	orders?: OrderAmino[];
	contractAddr?: string;
	funds?: CoinAmino[];
}
export interface MsgPlaceOrdersAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgPlaceOrders';
	value: MsgPlaceOrdersAmino;
}
export interface MsgPlaceOrdersSDKType {
	creator: string;
	orders: OrderSDKType[];
	contractAddr: string;
	funds: CoinSDKType[];
}
export interface MsgPlaceOrdersResponse {
	orderIds: bigint[];
}
export interface MsgPlaceOrdersResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgPlaceOrdersResponse';
	value: Uint8Array;
}
export interface MsgPlaceOrdersResponseAmino {
	orderIds?: string[];
}
export interface MsgPlaceOrdersResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgPlaceOrdersResponse';
	value: MsgPlaceOrdersResponseAmino;
}
export interface MsgPlaceOrdersResponseSDKType {
	orderIds: bigint[];
}
export interface MsgCancelOrders {
	creator: string;
	cancellations: Cancellation[];
	contractAddr: string;
}
export interface MsgCancelOrdersProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgCancelOrders';
	value: Uint8Array;
}
export interface MsgCancelOrdersAmino {
	creator?: string;
	cancellations?: CancellationAmino[];
	contractAddr?: string;
}
export interface MsgCancelOrdersAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgCancelOrders';
	value: MsgCancelOrdersAmino;
}
export interface MsgCancelOrdersSDKType {
	creator: string;
	cancellations: CancellationSDKType[];
	contractAddr: string;
}
export interface MsgCancelOrdersResponse {}
export interface MsgCancelOrdersResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgCancelOrdersResponse';
	value: Uint8Array;
}
export interface MsgCancelOrdersResponseAmino {}
export interface MsgCancelOrdersResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgCancelOrdersResponse';
	value: MsgCancelOrdersResponseAmino;
}
export interface MsgCancelOrdersResponseSDKType {}
export interface MsgRegisterContract {
	creator: string;
	contract?: ContractInfoV2 | undefined;
}
export interface MsgRegisterContractProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterContract';
	value: Uint8Array;
}
export interface MsgRegisterContractAmino {
	creator?: string;
	contract?: ContractInfoV2Amino | undefined;
}
export interface MsgRegisterContractAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgRegisterContract';
	value: MsgRegisterContractAmino;
}
export interface MsgRegisterContractSDKType {
	creator: string;
	contract?: ContractInfoV2SDKType | undefined;
}
export interface MsgRegisterContractResponse {}
export interface MsgRegisterContractResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterContractResponse';
	value: Uint8Array;
}
export interface MsgRegisterContractResponseAmino {}
export interface MsgRegisterContractResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgRegisterContractResponse';
	value: MsgRegisterContractResponseAmino;
}
export interface MsgRegisterContractResponseSDKType {}
export interface MsgContractDepositRent {
	contractAddr: string;
	amount: bigint;
	sender: string;
}
export interface MsgContractDepositRentProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgContractDepositRent';
	value: Uint8Array;
}
export interface MsgContractDepositRentAmino {
	contractAddr?: string;
	amount?: string;
	sender?: string;
}
export interface MsgContractDepositRentAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgContractDepositRent';
	value: MsgContractDepositRentAmino;
}
export interface MsgContractDepositRentSDKType {
	contractAddr: string;
	amount: bigint;
	sender: string;
}
export interface MsgContractDepositRentResponse {}
export interface MsgContractDepositRentResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgContractDepositRentResponse';
	value: Uint8Array;
}
export interface MsgContractDepositRentResponseAmino {}
export interface MsgContractDepositRentResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgContractDepositRentResponse';
	value: MsgContractDepositRentResponseAmino;
}
export interface MsgContractDepositRentResponseSDKType {}
export interface MsgUnregisterContract {
	creator: string;
	contractAddr: string;
}
export interface MsgUnregisterContractProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnregisterContract';
	value: Uint8Array;
}
export interface MsgUnregisterContractAmino {
	creator?: string;
	contractAddr?: string;
}
export interface MsgUnregisterContractAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgUnregisterContract';
	value: MsgUnregisterContractAmino;
}
export interface MsgUnregisterContractSDKType {
	creator: string;
	contractAddr: string;
}
export interface MsgUnregisterContractResponse {}
export interface MsgUnregisterContractResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnregisterContractResponse';
	value: Uint8Array;
}
export interface MsgUnregisterContractResponseAmino {}
export interface MsgUnregisterContractResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgUnregisterContractResponse';
	value: MsgUnregisterContractResponseAmino;
}
export interface MsgUnregisterContractResponseSDKType {}
export interface MsgRegisterPairs {
	creator: string;
	batchcontractpair: BatchContractPair[];
}
export interface MsgRegisterPairsProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterPairs';
	value: Uint8Array;
}
export interface MsgRegisterPairsAmino {
	creator?: string;
	batchcontractpair?: BatchContractPairAmino[];
}
export interface MsgRegisterPairsAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgRegisterPairs';
	value: MsgRegisterPairsAmino;
}
export interface MsgRegisterPairsSDKType {
	creator: string;
	batchcontractpair: BatchContractPairSDKType[];
}
export interface MsgRegisterPairsResponse {}
export interface MsgRegisterPairsResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterPairsResponse';
	value: Uint8Array;
}
export interface MsgRegisterPairsResponseAmino {}
export interface MsgRegisterPairsResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgRegisterPairsResponse';
	value: MsgRegisterPairsResponseAmino;
}
export interface MsgRegisterPairsResponseSDKType {}
export interface MsgUpdatePriceTickSize {
	creator: string;
	tickSizeList: TickSize[];
}
export interface MsgUpdatePriceTickSizeProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgUpdatePriceTickSize';
	value: Uint8Array;
}
export interface MsgUpdatePriceTickSizeAmino {
	creator?: string;
	tickSizeList?: TickSizeAmino[];
}
export interface MsgUpdatePriceTickSizeAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgUpdatePriceTickSize';
	value: MsgUpdatePriceTickSizeAmino;
}
export interface MsgUpdatePriceTickSizeSDKType {
	creator: string;
	tickSizeList: TickSizeSDKType[];
}
export interface MsgUpdateQuantityTickSize {
	creator: string;
	tickSizeList: TickSize[];
}
export interface MsgUpdateQuantityTickSizeProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize';
	value: Uint8Array;
}
export interface MsgUpdateQuantityTickSizeAmino {
	creator?: string;
	tickSizeList?: TickSizeAmino[];
}
export interface MsgUpdateQuantityTickSizeAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize';
	value: MsgUpdateQuantityTickSizeAmino;
}
export interface MsgUpdateQuantityTickSizeSDKType {
	creator: string;
	tickSizeList: TickSizeSDKType[];
}
export interface MsgUpdateTickSizeResponse {}
export interface MsgUpdateTickSizeResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse';
	value: Uint8Array;
}
export interface MsgUpdateTickSizeResponseAmino {}
export interface MsgUpdateTickSizeResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse';
	value: MsgUpdateTickSizeResponseAmino;
}
export interface MsgUpdateTickSizeResponseSDKType {}
export interface MsgUnsuspendContract {
	creator: string;
	contractAddr: string;
}
export interface MsgUnsuspendContractProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnsuspendContract';
	value: Uint8Array;
}
export interface MsgUnsuspendContractAmino {
	creator?: string;
	contractAddr?: string;
}
export interface MsgUnsuspendContractAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgUnsuspendContract';
	value: MsgUnsuspendContractAmino;
}
export interface MsgUnsuspendContractSDKType {
	creator: string;
	contractAddr: string;
}
export interface MsgUnsuspendContractResponse {}
export interface MsgUnsuspendContractResponseProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnsuspendContractResponse';
	value: Uint8Array;
}
export interface MsgUnsuspendContractResponseAmino {}
export interface MsgUnsuspendContractResponseAminoMsg {
	type: '/seiprotocol.seichain.dex.MsgUnsuspendContractResponse';
	value: MsgUnsuspendContractResponseAmino;
}
export interface MsgUnsuspendContractResponseSDKType {}
function createBaseMsgPlaceOrders(): MsgPlaceOrders {
	return {
		creator: '',
		orders: [],
		contractAddr: '',
		funds: []
	};
}
export const MsgPlaceOrders = {
	typeUrl: '/seiprotocol.seichain.dex.MsgPlaceOrders',
	encode(message: MsgPlaceOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		for (const v of message.orders) {
			Order.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		if (message.contractAddr !== '') {
			writer.uint32(26).string(message.contractAddr);
		}
		for (const v of message.funds) {
			Coin.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceOrders {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgPlaceOrders();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 2:
					message.orders.push(Order.decode(reader, reader.uint32()));
					break;
				case 3:
					message.contractAddr = reader.string();
					break;
				case 4:
					message.funds.push(Coin.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgPlaceOrders>): MsgPlaceOrders {
		const message = createBaseMsgPlaceOrders();
		message.creator = object.creator ?? '';
		message.orders = object.orders?.map((e) => Order.fromPartial(e)) || [];
		message.contractAddr = object.contractAddr ?? '';
		message.funds = object.funds?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: MsgPlaceOrdersAmino): MsgPlaceOrders {
		const message = createBaseMsgPlaceOrders();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		message.orders = object.orders?.map((e) => Order.fromAmino(e)) || [];
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		message.funds = object.funds?.map((e) => Coin.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: MsgPlaceOrders): MsgPlaceOrdersAmino {
		const obj: any = {};
		obj.creator = message.creator;
		if (message.orders) {
			obj.orders = message.orders.map((e) => (e ? Order.toAmino(e) : undefined));
		} else {
			obj.orders = [];
		}
		obj.contractAddr = message.contractAddr;
		if (message.funds) {
			obj.funds = message.funds.map((e) => (e ? Coin.toAmino(e) : undefined));
		} else {
			obj.funds = [];
		}
		return obj;
	},
	fromAminoMsg(object: MsgPlaceOrdersAminoMsg): MsgPlaceOrders {
		return MsgPlaceOrders.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgPlaceOrdersProtoMsg): MsgPlaceOrders {
		return MsgPlaceOrders.decode(message.value);
	},
	toProto(message: MsgPlaceOrders): Uint8Array {
		return MsgPlaceOrders.encode(message).finish();
	},
	toProtoMsg(message: MsgPlaceOrders): MsgPlaceOrdersProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgPlaceOrders',
			value: MsgPlaceOrders.encode(message).finish()
		};
	}
};
function createBaseMsgPlaceOrdersResponse(): MsgPlaceOrdersResponse {
	return {
		orderIds: []
	};
}
export const MsgPlaceOrdersResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgPlaceOrdersResponse',
	encode(message: MsgPlaceOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		writer.uint32(10).fork();
		for (const v of message.orderIds) {
			writer.uint64(v);
		}
		writer.ldelim();
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgPlaceOrdersResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgPlaceOrdersResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if ((tag & 7) === 2) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.orderIds.push(reader.uint64());
						}
					} else {
						message.orderIds.push(reader.uint64());
					}
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgPlaceOrdersResponse>): MsgPlaceOrdersResponse {
		const message = createBaseMsgPlaceOrdersResponse();
		message.orderIds = object.orderIds?.map((e) => BigInt(e.toString())) || [];
		return message;
	},
	fromAmino(object: MsgPlaceOrdersResponseAmino): MsgPlaceOrdersResponse {
		const message = createBaseMsgPlaceOrdersResponse();
		message.orderIds = object.orderIds?.map((e) => BigInt(e)) || [];
		return message;
	},
	toAmino(message: MsgPlaceOrdersResponse): MsgPlaceOrdersResponseAmino {
		const obj: any = {};
		if (message.orderIds) {
			obj.orderIds = message.orderIds.map((e) => e.toString());
		} else {
			obj.orderIds = [];
		}
		return obj;
	},
	fromAminoMsg(object: MsgPlaceOrdersResponseAminoMsg): MsgPlaceOrdersResponse {
		return MsgPlaceOrdersResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgPlaceOrdersResponseProtoMsg): MsgPlaceOrdersResponse {
		return MsgPlaceOrdersResponse.decode(message.value);
	},
	toProto(message: MsgPlaceOrdersResponse): Uint8Array {
		return MsgPlaceOrdersResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgPlaceOrdersResponse): MsgPlaceOrdersResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgPlaceOrdersResponse',
			value: MsgPlaceOrdersResponse.encode(message).finish()
		};
	}
};
function createBaseMsgCancelOrders(): MsgCancelOrders {
	return {
		creator: '',
		cancellations: [],
		contractAddr: ''
	};
}
export const MsgCancelOrders = {
	typeUrl: '/seiprotocol.seichain.dex.MsgCancelOrders',
	encode(message: MsgCancelOrders, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		for (const v of message.cancellations) {
			Cancellation.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		if (message.contractAddr !== '') {
			writer.uint32(26).string(message.contractAddr);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOrders {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCancelOrders();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 2:
					message.cancellations.push(Cancellation.decode(reader, reader.uint32()));
					break;
				case 3:
					message.contractAddr = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgCancelOrders>): MsgCancelOrders {
		const message = createBaseMsgCancelOrders();
		message.creator = object.creator ?? '';
		message.cancellations = object.cancellations?.map((e) => Cancellation.fromPartial(e)) || [];
		message.contractAddr = object.contractAddr ?? '';
		return message;
	},
	fromAmino(object: MsgCancelOrdersAmino): MsgCancelOrders {
		const message = createBaseMsgCancelOrders();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		message.cancellations = object.cancellations?.map((e) => Cancellation.fromAmino(e)) || [];
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		return message;
	},
	toAmino(message: MsgCancelOrders): MsgCancelOrdersAmino {
		const obj: any = {};
		obj.creator = message.creator;
		if (message.cancellations) {
			obj.cancellations = message.cancellations.map((e) => (e ? Cancellation.toAmino(e) : undefined));
		} else {
			obj.cancellations = [];
		}
		obj.contractAddr = message.contractAddr;
		return obj;
	},
	fromAminoMsg(object: MsgCancelOrdersAminoMsg): MsgCancelOrders {
		return MsgCancelOrders.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgCancelOrdersProtoMsg): MsgCancelOrders {
		return MsgCancelOrders.decode(message.value);
	},
	toProto(message: MsgCancelOrders): Uint8Array {
		return MsgCancelOrders.encode(message).finish();
	},
	toProtoMsg(message: MsgCancelOrders): MsgCancelOrdersProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgCancelOrders',
			value: MsgCancelOrders.encode(message).finish()
		};
	}
};
function createBaseMsgCancelOrdersResponse(): MsgCancelOrdersResponse {
	return {};
}
export const MsgCancelOrdersResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgCancelOrdersResponse',
	encode(_: MsgCancelOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelOrdersResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCancelOrdersResponse();
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
	fromPartial(_: Partial<MsgCancelOrdersResponse>): MsgCancelOrdersResponse {
		const message = createBaseMsgCancelOrdersResponse();
		return message;
	},
	fromAmino(_: MsgCancelOrdersResponseAmino): MsgCancelOrdersResponse {
		const message = createBaseMsgCancelOrdersResponse();
		return message;
	},
	toAmino(_: MsgCancelOrdersResponse): MsgCancelOrdersResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgCancelOrdersResponseAminoMsg): MsgCancelOrdersResponse {
		return MsgCancelOrdersResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgCancelOrdersResponseProtoMsg): MsgCancelOrdersResponse {
		return MsgCancelOrdersResponse.decode(message.value);
	},
	toProto(message: MsgCancelOrdersResponse): Uint8Array {
		return MsgCancelOrdersResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgCancelOrdersResponse): MsgCancelOrdersResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgCancelOrdersResponse',
			value: MsgCancelOrdersResponse.encode(message).finish()
		};
	}
};
function createBaseMsgRegisterContract(): MsgRegisterContract {
	return {
		creator: '',
		contract: undefined
	};
}
export const MsgRegisterContract = {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterContract',
	encode(message: MsgRegisterContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		if (message.contract !== undefined) {
			ContractInfoV2.encode(message.contract, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterContract {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterContract();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 2:
					message.contract = ContractInfoV2.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgRegisterContract>): MsgRegisterContract {
		const message = createBaseMsgRegisterContract();
		message.creator = object.creator ?? '';
		message.contract = object.contract !== undefined && object.contract !== null ? ContractInfoV2.fromPartial(object.contract) : undefined;
		return message;
	},
	fromAmino(object: MsgRegisterContractAmino): MsgRegisterContract {
		const message = createBaseMsgRegisterContract();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		if (object.contract !== undefined && object.contract !== null) {
			message.contract = ContractInfoV2.fromAmino(object.contract);
		}
		return message;
	},
	toAmino(message: MsgRegisterContract): MsgRegisterContractAmino {
		const obj: any = {};
		obj.creator = message.creator;
		obj.contract = message.contract ? ContractInfoV2.toAmino(message.contract) : undefined;
		return obj;
	},
	fromAminoMsg(object: MsgRegisterContractAminoMsg): MsgRegisterContract {
		return MsgRegisterContract.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgRegisterContractProtoMsg): MsgRegisterContract {
		return MsgRegisterContract.decode(message.value);
	},
	toProto(message: MsgRegisterContract): Uint8Array {
		return MsgRegisterContract.encode(message).finish();
	},
	toProtoMsg(message: MsgRegisterContract): MsgRegisterContractProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgRegisterContract',
			value: MsgRegisterContract.encode(message).finish()
		};
	}
};
function createBaseMsgRegisterContractResponse(): MsgRegisterContractResponse {
	return {};
}
export const MsgRegisterContractResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterContractResponse',
	encode(_: MsgRegisterContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterContractResponse();
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
	fromPartial(_: Partial<MsgRegisterContractResponse>): MsgRegisterContractResponse {
		const message = createBaseMsgRegisterContractResponse();
		return message;
	},
	fromAmino(_: MsgRegisterContractResponseAmino): MsgRegisterContractResponse {
		const message = createBaseMsgRegisterContractResponse();
		return message;
	},
	toAmino(_: MsgRegisterContractResponse): MsgRegisterContractResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgRegisterContractResponseAminoMsg): MsgRegisterContractResponse {
		return MsgRegisterContractResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgRegisterContractResponseProtoMsg): MsgRegisterContractResponse {
		return MsgRegisterContractResponse.decode(message.value);
	},
	toProto(message: MsgRegisterContractResponse): Uint8Array {
		return MsgRegisterContractResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgRegisterContractResponse): MsgRegisterContractResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgRegisterContractResponse',
			value: MsgRegisterContractResponse.encode(message).finish()
		};
	}
};
function createBaseMsgContractDepositRent(): MsgContractDepositRent {
	return {
		contractAddr: '',
		amount: BigInt(0),
		sender: ''
	};
}
export const MsgContractDepositRent = {
	typeUrl: '/seiprotocol.seichain.dex.MsgContractDepositRent',
	encode(message: MsgContractDepositRent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.contractAddr !== '') {
			writer.uint32(10).string(message.contractAddr);
		}
		if (message.amount !== BigInt(0)) {
			writer.uint32(16).uint64(message.amount);
		}
		if (message.sender !== '') {
			writer.uint32(26).string(message.sender);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgContractDepositRent {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgContractDepositRent();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.contractAddr = reader.string();
					break;
				case 2:
					message.amount = reader.uint64();
					break;
				case 3:
					message.sender = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgContractDepositRent>): MsgContractDepositRent {
		const message = createBaseMsgContractDepositRent();
		message.contractAddr = object.contractAddr ?? '';
		message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
		message.sender = object.sender ?? '';
		return message;
	},
	fromAmino(object: MsgContractDepositRentAmino): MsgContractDepositRent {
		const message = createBaseMsgContractDepositRent();
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		if (object.amount !== undefined && object.amount !== null) {
			message.amount = BigInt(object.amount);
		}
		if (object.sender !== undefined && object.sender !== null) {
			message.sender = object.sender;
		}
		return message;
	},
	toAmino(message: MsgContractDepositRent): MsgContractDepositRentAmino {
		const obj: any = {};
		obj.contractAddr = message.contractAddr;
		obj.amount = message.amount ? message.amount.toString() : undefined;
		obj.sender = message.sender;
		return obj;
	},
	fromAminoMsg(object: MsgContractDepositRentAminoMsg): MsgContractDepositRent {
		return MsgContractDepositRent.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgContractDepositRentProtoMsg): MsgContractDepositRent {
		return MsgContractDepositRent.decode(message.value);
	},
	toProto(message: MsgContractDepositRent): Uint8Array {
		return MsgContractDepositRent.encode(message).finish();
	},
	toProtoMsg(message: MsgContractDepositRent): MsgContractDepositRentProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgContractDepositRent',
			value: MsgContractDepositRent.encode(message).finish()
		};
	}
};
function createBaseMsgContractDepositRentResponse(): MsgContractDepositRentResponse {
	return {};
}
export const MsgContractDepositRentResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgContractDepositRentResponse',
	encode(_: MsgContractDepositRentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgContractDepositRentResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgContractDepositRentResponse();
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
	fromPartial(_: Partial<MsgContractDepositRentResponse>): MsgContractDepositRentResponse {
		const message = createBaseMsgContractDepositRentResponse();
		return message;
	},
	fromAmino(_: MsgContractDepositRentResponseAmino): MsgContractDepositRentResponse {
		const message = createBaseMsgContractDepositRentResponse();
		return message;
	},
	toAmino(_: MsgContractDepositRentResponse): MsgContractDepositRentResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgContractDepositRentResponseAminoMsg): MsgContractDepositRentResponse {
		return MsgContractDepositRentResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgContractDepositRentResponseProtoMsg): MsgContractDepositRentResponse {
		return MsgContractDepositRentResponse.decode(message.value);
	},
	toProto(message: MsgContractDepositRentResponse): Uint8Array {
		return MsgContractDepositRentResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgContractDepositRentResponse): MsgContractDepositRentResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgContractDepositRentResponse',
			value: MsgContractDepositRentResponse.encode(message).finish()
		};
	}
};
function createBaseMsgUnregisterContract(): MsgUnregisterContract {
	return {
		creator: '',
		contractAddr: ''
	};
}
export const MsgUnregisterContract = {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnregisterContract',
	encode(message: MsgUnregisterContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		if (message.contractAddr !== '') {
			writer.uint32(18).string(message.contractAddr);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterContract {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUnregisterContract();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 2:
					message.contractAddr = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgUnregisterContract>): MsgUnregisterContract {
		const message = createBaseMsgUnregisterContract();
		message.creator = object.creator ?? '';
		message.contractAddr = object.contractAddr ?? '';
		return message;
	},
	fromAmino(object: MsgUnregisterContractAmino): MsgUnregisterContract {
		const message = createBaseMsgUnregisterContract();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		return message;
	},
	toAmino(message: MsgUnregisterContract): MsgUnregisterContractAmino {
		const obj: any = {};
		obj.creator = message.creator;
		obj.contractAddr = message.contractAddr;
		return obj;
	},
	fromAminoMsg(object: MsgUnregisterContractAminoMsg): MsgUnregisterContract {
		return MsgUnregisterContract.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgUnregisterContractProtoMsg): MsgUnregisterContract {
		return MsgUnregisterContract.decode(message.value);
	},
	toProto(message: MsgUnregisterContract): Uint8Array {
		return MsgUnregisterContract.encode(message).finish();
	},
	toProtoMsg(message: MsgUnregisterContract): MsgUnregisterContractProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgUnregisterContract',
			value: MsgUnregisterContract.encode(message).finish()
		};
	}
};
function createBaseMsgUnregisterContractResponse(): MsgUnregisterContractResponse {
	return {};
}
export const MsgUnregisterContractResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnregisterContractResponse',
	encode(_: MsgUnregisterContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnregisterContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUnregisterContractResponse();
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
	fromPartial(_: Partial<MsgUnregisterContractResponse>): MsgUnregisterContractResponse {
		const message = createBaseMsgUnregisterContractResponse();
		return message;
	},
	fromAmino(_: MsgUnregisterContractResponseAmino): MsgUnregisterContractResponse {
		const message = createBaseMsgUnregisterContractResponse();
		return message;
	},
	toAmino(_: MsgUnregisterContractResponse): MsgUnregisterContractResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgUnregisterContractResponseAminoMsg): MsgUnregisterContractResponse {
		return MsgUnregisterContractResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgUnregisterContractResponseProtoMsg): MsgUnregisterContractResponse {
		return MsgUnregisterContractResponse.decode(message.value);
	},
	toProto(message: MsgUnregisterContractResponse): Uint8Array {
		return MsgUnregisterContractResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgUnregisterContractResponse): MsgUnregisterContractResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgUnregisterContractResponse',
			value: MsgUnregisterContractResponse.encode(message).finish()
		};
	}
};
function createBaseMsgRegisterPairs(): MsgRegisterPairs {
	return {
		creator: '',
		batchcontractpair: []
	};
}
export const MsgRegisterPairs = {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterPairs',
	encode(message: MsgRegisterPairs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		for (const v of message.batchcontractpair) {
			BatchContractPair.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPairs {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterPairs();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 3:
					message.batchcontractpair.push(BatchContractPair.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgRegisterPairs>): MsgRegisterPairs {
		const message = createBaseMsgRegisterPairs();
		message.creator = object.creator ?? '';
		message.batchcontractpair = object.batchcontractpair?.map((e) => BatchContractPair.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: MsgRegisterPairsAmino): MsgRegisterPairs {
		const message = createBaseMsgRegisterPairs();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		message.batchcontractpair = object.batchcontractpair?.map((e) => BatchContractPair.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: MsgRegisterPairs): MsgRegisterPairsAmino {
		const obj: any = {};
		obj.creator = message.creator;
		if (message.batchcontractpair) {
			obj.batchcontractpair = message.batchcontractpair.map((e) => (e ? BatchContractPair.toAmino(e) : undefined));
		} else {
			obj.batchcontractpair = [];
		}
		return obj;
	},
	fromAminoMsg(object: MsgRegisterPairsAminoMsg): MsgRegisterPairs {
		return MsgRegisterPairs.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgRegisterPairsProtoMsg): MsgRegisterPairs {
		return MsgRegisterPairs.decode(message.value);
	},
	toProto(message: MsgRegisterPairs): Uint8Array {
		return MsgRegisterPairs.encode(message).finish();
	},
	toProtoMsg(message: MsgRegisterPairs): MsgRegisterPairsProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgRegisterPairs',
			value: MsgRegisterPairs.encode(message).finish()
		};
	}
};
function createBaseMsgRegisterPairsResponse(): MsgRegisterPairsResponse {
	return {};
}
export const MsgRegisterPairsResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgRegisterPairsResponse',
	encode(_: MsgRegisterPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterPairsResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgRegisterPairsResponse();
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
	fromPartial(_: Partial<MsgRegisterPairsResponse>): MsgRegisterPairsResponse {
		const message = createBaseMsgRegisterPairsResponse();
		return message;
	},
	fromAmino(_: MsgRegisterPairsResponseAmino): MsgRegisterPairsResponse {
		const message = createBaseMsgRegisterPairsResponse();
		return message;
	},
	toAmino(_: MsgRegisterPairsResponse): MsgRegisterPairsResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgRegisterPairsResponseAminoMsg): MsgRegisterPairsResponse {
		return MsgRegisterPairsResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgRegisterPairsResponseProtoMsg): MsgRegisterPairsResponse {
		return MsgRegisterPairsResponse.decode(message.value);
	},
	toProto(message: MsgRegisterPairsResponse): Uint8Array {
		return MsgRegisterPairsResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgRegisterPairsResponse): MsgRegisterPairsResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgRegisterPairsResponse',
			value: MsgRegisterPairsResponse.encode(message).finish()
		};
	}
};
function createBaseMsgUpdatePriceTickSize(): MsgUpdatePriceTickSize {
	return {
		creator: '',
		tickSizeList: []
	};
}
export const MsgUpdatePriceTickSize = {
	typeUrl: '/seiprotocol.seichain.dex.MsgUpdatePriceTickSize',
	encode(message: MsgUpdatePriceTickSize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		for (const v of message.tickSizeList) {
			TickSize.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdatePriceTickSize {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdatePriceTickSize();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 2:
					message.tickSizeList.push(TickSize.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgUpdatePriceTickSize>): MsgUpdatePriceTickSize {
		const message = createBaseMsgUpdatePriceTickSize();
		message.creator = object.creator ?? '';
		message.tickSizeList = object.tickSizeList?.map((e) => TickSize.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: MsgUpdatePriceTickSizeAmino): MsgUpdatePriceTickSize {
		const message = createBaseMsgUpdatePriceTickSize();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		message.tickSizeList = object.tickSizeList?.map((e) => TickSize.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: MsgUpdatePriceTickSize): MsgUpdatePriceTickSizeAmino {
		const obj: any = {};
		obj.creator = message.creator;
		if (message.tickSizeList) {
			obj.tickSizeList = message.tickSizeList.map((e) => (e ? TickSize.toAmino(e) : undefined));
		} else {
			obj.tickSizeList = [];
		}
		return obj;
	},
	fromAminoMsg(object: MsgUpdatePriceTickSizeAminoMsg): MsgUpdatePriceTickSize {
		return MsgUpdatePriceTickSize.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgUpdatePriceTickSizeProtoMsg): MsgUpdatePriceTickSize {
		return MsgUpdatePriceTickSize.decode(message.value);
	},
	toProto(message: MsgUpdatePriceTickSize): Uint8Array {
		return MsgUpdatePriceTickSize.encode(message).finish();
	},
	toProtoMsg(message: MsgUpdatePriceTickSize): MsgUpdatePriceTickSizeProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgUpdatePriceTickSize',
			value: MsgUpdatePriceTickSize.encode(message).finish()
		};
	}
};
function createBaseMsgUpdateQuantityTickSize(): MsgUpdateQuantityTickSize {
	return {
		creator: '',
		tickSizeList: []
	};
}
export const MsgUpdateQuantityTickSize = {
	typeUrl: '/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize',
	encode(message: MsgUpdateQuantityTickSize, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		for (const v of message.tickSizeList) {
			TickSize.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateQuantityTickSize {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateQuantityTickSize();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 2:
					message.tickSizeList.push(TickSize.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgUpdateQuantityTickSize>): MsgUpdateQuantityTickSize {
		const message = createBaseMsgUpdateQuantityTickSize();
		message.creator = object.creator ?? '';
		message.tickSizeList = object.tickSizeList?.map((e) => TickSize.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: MsgUpdateQuantityTickSizeAmino): MsgUpdateQuantityTickSize {
		const message = createBaseMsgUpdateQuantityTickSize();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		message.tickSizeList = object.tickSizeList?.map((e) => TickSize.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: MsgUpdateQuantityTickSize): MsgUpdateQuantityTickSizeAmino {
		const obj: any = {};
		obj.creator = message.creator;
		if (message.tickSizeList) {
			obj.tickSizeList = message.tickSizeList.map((e) => (e ? TickSize.toAmino(e) : undefined));
		} else {
			obj.tickSizeList = [];
		}
		return obj;
	},
	fromAminoMsg(object: MsgUpdateQuantityTickSizeAminoMsg): MsgUpdateQuantityTickSize {
		return MsgUpdateQuantityTickSize.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgUpdateQuantityTickSizeProtoMsg): MsgUpdateQuantityTickSize {
		return MsgUpdateQuantityTickSize.decode(message.value);
	},
	toProto(message: MsgUpdateQuantityTickSize): Uint8Array {
		return MsgUpdateQuantityTickSize.encode(message).finish();
	},
	toProtoMsg(message: MsgUpdateQuantityTickSize): MsgUpdateQuantityTickSizeProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize',
			value: MsgUpdateQuantityTickSize.encode(message).finish()
		};
	}
};
function createBaseMsgUpdateTickSizeResponse(): MsgUpdateTickSizeResponse {
	return {};
}
export const MsgUpdateTickSizeResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse',
	encode(_: MsgUpdateTickSizeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateTickSizeResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateTickSizeResponse();
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
	fromPartial(_: Partial<MsgUpdateTickSizeResponse>): MsgUpdateTickSizeResponse {
		const message = createBaseMsgUpdateTickSizeResponse();
		return message;
	},
	fromAmino(_: MsgUpdateTickSizeResponseAmino): MsgUpdateTickSizeResponse {
		const message = createBaseMsgUpdateTickSizeResponse();
		return message;
	},
	toAmino(_: MsgUpdateTickSizeResponse): MsgUpdateTickSizeResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgUpdateTickSizeResponseAminoMsg): MsgUpdateTickSizeResponse {
		return MsgUpdateTickSizeResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgUpdateTickSizeResponseProtoMsg): MsgUpdateTickSizeResponse {
		return MsgUpdateTickSizeResponse.decode(message.value);
	},
	toProto(message: MsgUpdateTickSizeResponse): Uint8Array {
		return MsgUpdateTickSizeResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgUpdateTickSizeResponse): MsgUpdateTickSizeResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgUpdateTickSizeResponse',
			value: MsgUpdateTickSizeResponse.encode(message).finish()
		};
	}
};
function createBaseMsgUnsuspendContract(): MsgUnsuspendContract {
	return {
		creator: '',
		contractAddr: ''
	};
}
export const MsgUnsuspendContract = {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnsuspendContract',
	encode(message: MsgUnsuspendContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.creator !== '') {
			writer.uint32(10).string(message.creator);
		}
		if (message.contractAddr !== '') {
			writer.uint32(18).string(message.contractAddr);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnsuspendContract {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUnsuspendContract();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creator = reader.string();
					break;
				case 2:
					message.contractAddr = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<MsgUnsuspendContract>): MsgUnsuspendContract {
		const message = createBaseMsgUnsuspendContract();
		message.creator = object.creator ?? '';
		message.contractAddr = object.contractAddr ?? '';
		return message;
	},
	fromAmino(object: MsgUnsuspendContractAmino): MsgUnsuspendContract {
		const message = createBaseMsgUnsuspendContract();
		if (object.creator !== undefined && object.creator !== null) {
			message.creator = object.creator;
		}
		if (object.contractAddr !== undefined && object.contractAddr !== null) {
			message.contractAddr = object.contractAddr;
		}
		return message;
	},
	toAmino(message: MsgUnsuspendContract): MsgUnsuspendContractAmino {
		const obj: any = {};
		obj.creator = message.creator;
		obj.contractAddr = message.contractAddr;
		return obj;
	},
	fromAminoMsg(object: MsgUnsuspendContractAminoMsg): MsgUnsuspendContract {
		return MsgUnsuspendContract.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgUnsuspendContractProtoMsg): MsgUnsuspendContract {
		return MsgUnsuspendContract.decode(message.value);
	},
	toProto(message: MsgUnsuspendContract): Uint8Array {
		return MsgUnsuspendContract.encode(message).finish();
	},
	toProtoMsg(message: MsgUnsuspendContract): MsgUnsuspendContractProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgUnsuspendContract',
			value: MsgUnsuspendContract.encode(message).finish()
		};
	}
};
function createBaseMsgUnsuspendContractResponse(): MsgUnsuspendContractResponse {
	return {};
}
export const MsgUnsuspendContractResponse = {
	typeUrl: '/seiprotocol.seichain.dex.MsgUnsuspendContractResponse',
	encode(_: MsgUnsuspendContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): MsgUnsuspendContractResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUnsuspendContractResponse();
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
	fromPartial(_: Partial<MsgUnsuspendContractResponse>): MsgUnsuspendContractResponse {
		const message = createBaseMsgUnsuspendContractResponse();
		return message;
	},
	fromAmino(_: MsgUnsuspendContractResponseAmino): MsgUnsuspendContractResponse {
		const message = createBaseMsgUnsuspendContractResponse();
		return message;
	},
	toAmino(_: MsgUnsuspendContractResponse): MsgUnsuspendContractResponseAmino {
		const obj: any = {};
		return obj;
	},
	fromAminoMsg(object: MsgUnsuspendContractResponseAminoMsg): MsgUnsuspendContractResponse {
		return MsgUnsuspendContractResponse.fromAmino(object.value);
	},
	fromProtoMsg(message: MsgUnsuspendContractResponseProtoMsg): MsgUnsuspendContractResponse {
		return MsgUnsuspendContractResponse.decode(message.value);
	},
	toProto(message: MsgUnsuspendContractResponse): Uint8Array {
		return MsgUnsuspendContractResponse.encode(message).finish();
	},
	toProtoMsg(message: MsgUnsuspendContractResponse): MsgUnsuspendContractResponseProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.MsgUnsuspendContractResponse',
			value: MsgUnsuspendContractResponse.encode(message).finish()
		};
	}
};
