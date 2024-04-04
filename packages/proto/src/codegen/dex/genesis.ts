import { Params, ParamsAmino, ParamsSDKType } from './params';
import { ContractInfoV2, ContractInfoV2Amino, ContractInfoV2SDKType } from './contract';
import { LongBook, LongBookAmino, LongBookSDKType } from './long_book';
import { ShortBook, ShortBookAmino, ShortBookSDKType } from './short_book';
import { Order, OrderAmino, OrderSDKType } from './order';
import { Pair, PairAmino, PairSDKType } from './pair';
import { Price, PriceAmino, PriceSDKType } from './price';
import { BinaryReader, BinaryWriter } from '../binary';
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
	params: Params | undefined;
	contractState: ContractState[];
	lastEpoch: bigint;
}
export interface GenesisStateProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.GenesisState';
	value: Uint8Array;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateAmino {
	params?: ParamsAmino | undefined;
	contractState?: ContractStateAmino[];
	lastEpoch?: string;
}
export interface GenesisStateAminoMsg {
	type: '/seiprotocol.seichain.dex.GenesisState';
	value: GenesisStateAmino;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
	params: ParamsSDKType | undefined;
	contractState: ContractStateSDKType[];
	lastEpoch: bigint;
}
export interface ContractState {
	contractInfo: ContractInfoV2 | undefined;
	longBookList: LongBook[];
	shortBookList: ShortBook[];
	triggeredOrdersList: Order[];
	pairList: Pair[];
	priceList: ContractPairPrices[];
	nextOrderId: bigint;
}
export interface ContractStateProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.ContractState';
	value: Uint8Array;
}
export interface ContractStateAmino {
	contractInfo?: ContractInfoV2Amino | undefined;
	longBookList?: LongBookAmino[];
	shortBookList?: ShortBookAmino[];
	triggeredOrdersList?: OrderAmino[];
	pairList?: PairAmino[];
	priceList?: ContractPairPricesAmino[];
	nextOrderId?: string;
}
export interface ContractStateAminoMsg {
	type: '/seiprotocol.seichain.dex.ContractState';
	value: ContractStateAmino;
}
export interface ContractStateSDKType {
	contractInfo: ContractInfoV2SDKType | undefined;
	longBookList: LongBookSDKType[];
	shortBookList: ShortBookSDKType[];
	triggeredOrdersList: OrderSDKType[];
	pairList: PairSDKType[];
	priceList: ContractPairPricesSDKType[];
	nextOrderId: bigint;
}
export interface ContractPairPrices {
	pricePair: Pair | undefined;
	prices: Price[];
}
export interface ContractPairPricesProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.ContractPairPrices';
	value: Uint8Array;
}
export interface ContractPairPricesAmino {
	pricePair?: PairAmino | undefined;
	prices?: PriceAmino[];
}
export interface ContractPairPricesAminoMsg {
	type: '/seiprotocol.seichain.dex.ContractPairPrices';
	value: ContractPairPricesAmino;
}
export interface ContractPairPricesSDKType {
	pricePair: PairSDKType | undefined;
	prices: PriceSDKType[];
}
function createBaseGenesisState(): GenesisState {
	return {
		params: Params.fromPartial({}),
		contractState: [],
		lastEpoch: BigInt(0)
	};
}
export const GenesisState = {
	typeUrl: '/seiprotocol.seichain.dex.GenesisState',
	encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.contractState) {
			ContractState.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		if (message.lastEpoch !== BigInt(0)) {
			writer.uint32(24).uint64(message.lastEpoch);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGenesisState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				case 2:
					message.contractState.push(ContractState.decode(reader, reader.uint32()));
					break;
				case 3:
					message.lastEpoch = reader.uint64();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<GenesisState>): GenesisState {
		const message = createBaseGenesisState();
		message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
		message.contractState = object.contractState?.map((e) => ContractState.fromPartial(e)) || [];
		message.lastEpoch = object.lastEpoch !== undefined && object.lastEpoch !== null ? BigInt(object.lastEpoch.toString()) : BigInt(0);
		return message;
	},
	fromAmino(object: GenesisStateAmino): GenesisState {
		const message = createBaseGenesisState();
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params);
		}
		message.contractState = object.contractState?.map((e) => ContractState.fromAmino(e)) || [];
		if (object.lastEpoch !== undefined && object.lastEpoch !== null) {
			message.lastEpoch = BigInt(object.lastEpoch);
		}
		return message;
	},
	toAmino(message: GenesisState): GenesisStateAmino {
		const obj: any = {};
		obj.params = message.params ? Params.toAmino(message.params) : undefined;
		if (message.contractState) {
			obj.contractState = message.contractState.map((e) => (e ? ContractState.toAmino(e) : undefined));
		} else {
			obj.contractState = message.contractState;
		}
		obj.lastEpoch = message.lastEpoch !== BigInt(0) ? message.lastEpoch.toString() : undefined;
		return obj;
	},
	fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
		return GenesisState.fromAmino(object.value);
	},
	fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
		return GenesisState.decode(message.value);
	},
	toProto(message: GenesisState): Uint8Array {
		return GenesisState.encode(message).finish();
	},
	toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.GenesisState',
			value: GenesisState.encode(message).finish()
		};
	}
};
function createBaseContractState(): ContractState {
	return {
		contractInfo: ContractInfoV2.fromPartial({}),
		longBookList: [],
		shortBookList: [],
		triggeredOrdersList: [],
		pairList: [],
		priceList: [],
		nextOrderId: BigInt(0)
	};
}
export const ContractState = {
	typeUrl: '/seiprotocol.seichain.dex.ContractState',
	encode(message: ContractState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.contractInfo !== undefined) {
			ContractInfoV2.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.longBookList) {
			LongBook.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		for (const v of message.shortBookList) {
			ShortBook.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		for (const v of message.triggeredOrdersList) {
			Order.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		for (const v of message.pairList) {
			Pair.encode(v!, writer.uint32(42).fork()).ldelim();
		}
		for (const v of message.priceList) {
			ContractPairPrices.encode(v!, writer.uint32(50).fork()).ldelim();
		}
		if (message.nextOrderId !== BigInt(0)) {
			writer.uint32(56).uint64(message.nextOrderId);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ContractState {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseContractState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.contractInfo = ContractInfoV2.decode(reader, reader.uint32());
					break;
				case 2:
					message.longBookList.push(LongBook.decode(reader, reader.uint32()));
					break;
				case 3:
					message.shortBookList.push(ShortBook.decode(reader, reader.uint32()));
					break;
				case 4:
					message.triggeredOrdersList.push(Order.decode(reader, reader.uint32()));
					break;
				case 5:
					message.pairList.push(Pair.decode(reader, reader.uint32()));
					break;
				case 6:
					message.priceList.push(ContractPairPrices.decode(reader, reader.uint32()));
					break;
				case 7:
					message.nextOrderId = reader.uint64();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<ContractState>): ContractState {
		const message = createBaseContractState();
		message.contractInfo = object.contractInfo !== undefined && object.contractInfo !== null ? ContractInfoV2.fromPartial(object.contractInfo) : undefined;
		message.longBookList = object.longBookList?.map((e) => LongBook.fromPartial(e)) || [];
		message.shortBookList = object.shortBookList?.map((e) => ShortBook.fromPartial(e)) || [];
		message.triggeredOrdersList = object.triggeredOrdersList?.map((e) => Order.fromPartial(e)) || [];
		message.pairList = object.pairList?.map((e) => Pair.fromPartial(e)) || [];
		message.priceList = object.priceList?.map((e) => ContractPairPrices.fromPartial(e)) || [];
		message.nextOrderId = object.nextOrderId !== undefined && object.nextOrderId !== null ? BigInt(object.nextOrderId.toString()) : BigInt(0);
		return message;
	},
	fromAmino(object: ContractStateAmino): ContractState {
		const message = createBaseContractState();
		if (object.contractInfo !== undefined && object.contractInfo !== null) {
			message.contractInfo = ContractInfoV2.fromAmino(object.contractInfo);
		}
		message.longBookList = object.longBookList?.map((e) => LongBook.fromAmino(e)) || [];
		message.shortBookList = object.shortBookList?.map((e) => ShortBook.fromAmino(e)) || [];
		message.triggeredOrdersList = object.triggeredOrdersList?.map((e) => Order.fromAmino(e)) || [];
		message.pairList = object.pairList?.map((e) => Pair.fromAmino(e)) || [];
		message.priceList = object.priceList?.map((e) => ContractPairPrices.fromAmino(e)) || [];
		if (object.nextOrderId !== undefined && object.nextOrderId !== null) {
			message.nextOrderId = BigInt(object.nextOrderId);
		}
		return message;
	},
	toAmino(message: ContractState): ContractStateAmino {
		const obj: any = {};
		obj.contractInfo = message.contractInfo ? ContractInfoV2.toAmino(message.contractInfo) : undefined;
		if (message.longBookList) {
			obj.longBookList = message.longBookList.map((e) => (e ? LongBook.toAmino(e) : undefined));
		} else {
			obj.longBookList = message.longBookList;
		}
		if (message.shortBookList) {
			obj.shortBookList = message.shortBookList.map((e) => (e ? ShortBook.toAmino(e) : undefined));
		} else {
			obj.shortBookList = message.shortBookList;
		}
		if (message.triggeredOrdersList) {
			obj.triggeredOrdersList = message.triggeredOrdersList.map((e) => (e ? Order.toAmino(e) : undefined));
		} else {
			obj.triggeredOrdersList = message.triggeredOrdersList;
		}
		if (message.pairList) {
			obj.pairList = message.pairList.map((e) => (e ? Pair.toAmino(e) : undefined));
		} else {
			obj.pairList = message.pairList;
		}
		if (message.priceList) {
			obj.priceList = message.priceList.map((e) => (e ? ContractPairPrices.toAmino(e) : undefined));
		} else {
			obj.priceList = message.priceList;
		}
		obj.nextOrderId = message.nextOrderId !== BigInt(0) ? message.nextOrderId.toString() : undefined;
		return obj;
	},
	fromAminoMsg(object: ContractStateAminoMsg): ContractState {
		return ContractState.fromAmino(object.value);
	},
	fromProtoMsg(message: ContractStateProtoMsg): ContractState {
		return ContractState.decode(message.value);
	},
	toProto(message: ContractState): Uint8Array {
		return ContractState.encode(message).finish();
	},
	toProtoMsg(message: ContractState): ContractStateProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.ContractState',
			value: ContractState.encode(message).finish()
		};
	}
};
function createBaseContractPairPrices(): ContractPairPrices {
	return {
		pricePair: Pair.fromPartial({}),
		prices: []
	};
}
export const ContractPairPrices = {
	typeUrl: '/seiprotocol.seichain.dex.ContractPairPrices',
	encode(message: ContractPairPrices, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.pricePair !== undefined) {
			Pair.encode(message.pricePair, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.prices) {
			Price.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ContractPairPrices {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseContractPairPrices();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pricePair = Pair.decode(reader, reader.uint32());
					break;
				case 2:
					message.prices.push(Price.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<ContractPairPrices>): ContractPairPrices {
		const message = createBaseContractPairPrices();
		message.pricePair = object.pricePair !== undefined && object.pricePair !== null ? Pair.fromPartial(object.pricePair) : undefined;
		message.prices = object.prices?.map((e) => Price.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: ContractPairPricesAmino): ContractPairPrices {
		const message = createBaseContractPairPrices();
		if (object.pricePair !== undefined && object.pricePair !== null) {
			message.pricePair = Pair.fromAmino(object.pricePair);
		}
		message.prices = object.prices?.map((e) => Price.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: ContractPairPrices): ContractPairPricesAmino {
		const obj: any = {};
		obj.pricePair = message.pricePair ? Pair.toAmino(message.pricePair) : undefined;
		if (message.prices) {
			obj.prices = message.prices.map((e) => (e ? Price.toAmino(e) : undefined));
		} else {
			obj.prices = message.prices;
		}
		return obj;
	},
	fromAminoMsg(object: ContractPairPricesAminoMsg): ContractPairPrices {
		return ContractPairPrices.fromAmino(object.value);
	},
	fromProtoMsg(message: ContractPairPricesProtoMsg): ContractPairPrices {
		return ContractPairPrices.decode(message.value);
	},
	toProto(message: ContractPairPrices): Uint8Array {
		return ContractPairPrices.encode(message).finish();
	},
	toProtoMsg(message: ContractPairPrices): ContractPairPricesProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.ContractPairPrices',
			value: ContractPairPrices.encode(message).finish()
		};
	}
};
