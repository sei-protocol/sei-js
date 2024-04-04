import { BinaryReader, BinaryWriter } from '../binary';
import { Decimal } from '@cosmjs/math';
/** Params defines the parameters for the module. */
export interface Params {
	priceSnapshotRetention: bigint;
	sudoCallGasPrice: string;
	beginBlockGasLimit: bigint;
	endBlockGasLimit: bigint;
	defaultGasPerOrder: bigint;
	defaultGasPerCancel: bigint;
	minRentDeposit: bigint;
	gasAllowancePerSettlement: bigint;
	minProcessableRent: bigint;
	orderBookEntriesPerLoad: bigint;
	contractUnsuspendCost: bigint;
	maxOrderPerPrice: bigint;
	maxPairsPerContract: bigint;
	defaultGasPerOrderDataByte: bigint;
}
export interface ParamsProtoMsg {
	typeUrl: '/seiprotocol.seichain.dex.Params';
	value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
	price_snapshot_retention: string;
	sudo_call_gas_price: string;
	begin_block_gas_limit: string;
	end_block_gas_limit: string;
	default_gas_per_order: string;
	default_gas_per_cancel: string;
	min_rent_deposit: string;
	gas_allowance_per_settlement: string;
	min_processable_rent: string;
	order_book_entries_per_load: string;
	contract_unsuspend_cost: string;
	max_order_per_price: string;
	max_pairs_per_contract: string;
	default_gas_per_order_data_byte: string;
}
export interface ParamsAminoMsg {
	type: '/seiprotocol.seichain.dex.Params';
	value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
	price_snapshot_retention: bigint;
	sudo_call_gas_price: string;
	begin_block_gas_limit: bigint;
	end_block_gas_limit: bigint;
	default_gas_per_order: bigint;
	default_gas_per_cancel: bigint;
	min_rent_deposit: bigint;
	gas_allowance_per_settlement: bigint;
	min_processable_rent: bigint;
	order_book_entries_per_load: bigint;
	contract_unsuspend_cost: bigint;
	max_order_per_price: bigint;
	max_pairs_per_contract: bigint;
	default_gas_per_order_data_byte: bigint;
}
function createBaseParams(): Params {
	return {
		priceSnapshotRetention: BigInt(0),
		sudoCallGasPrice: '',
		beginBlockGasLimit: BigInt(0),
		endBlockGasLimit: BigInt(0),
		defaultGasPerOrder: BigInt(0),
		defaultGasPerCancel: BigInt(0),
		minRentDeposit: BigInt(0),
		gasAllowancePerSettlement: BigInt(0),
		minProcessableRent: BigInt(0),
		orderBookEntriesPerLoad: BigInt(0),
		contractUnsuspendCost: BigInt(0),
		maxOrderPerPrice: BigInt(0),
		maxPairsPerContract: BigInt(0),
		defaultGasPerOrderDataByte: BigInt(0)
	};
}
export const Params = {
	typeUrl: '/seiprotocol.seichain.dex.Params',
	encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.priceSnapshotRetention !== BigInt(0)) {
			writer.uint32(8).uint64(message.priceSnapshotRetention);
		}
		if (message.sudoCallGasPrice !== '') {
			writer.uint32(18).string(Decimal.fromUserInput(message.sudoCallGasPrice, 18).atomics);
		}
		if (message.beginBlockGasLimit !== BigInt(0)) {
			writer.uint32(24).uint64(message.beginBlockGasLimit);
		}
		if (message.endBlockGasLimit !== BigInt(0)) {
			writer.uint32(32).uint64(message.endBlockGasLimit);
		}
		if (message.defaultGasPerOrder !== BigInt(0)) {
			writer.uint32(40).uint64(message.defaultGasPerOrder);
		}
		if (message.defaultGasPerCancel !== BigInt(0)) {
			writer.uint32(48).uint64(message.defaultGasPerCancel);
		}
		if (message.minRentDeposit !== BigInt(0)) {
			writer.uint32(56).uint64(message.minRentDeposit);
		}
		if (message.gasAllowancePerSettlement !== BigInt(0)) {
			writer.uint32(64).uint64(message.gasAllowancePerSettlement);
		}
		if (message.minProcessableRent !== BigInt(0)) {
			writer.uint32(72).uint64(message.minProcessableRent);
		}
		if (message.orderBookEntriesPerLoad !== BigInt(0)) {
			writer.uint32(80).uint64(message.orderBookEntriesPerLoad);
		}
		if (message.contractUnsuspendCost !== BigInt(0)) {
			writer.uint32(88).uint64(message.contractUnsuspendCost);
		}
		if (message.maxOrderPerPrice !== BigInt(0)) {
			writer.uint32(96).uint64(message.maxOrderPerPrice);
		}
		if (message.maxPairsPerContract !== BigInt(0)) {
			writer.uint32(104).uint64(message.maxPairsPerContract);
		}
		if (message.defaultGasPerOrderDataByte !== BigInt(0)) {
			writer.uint32(112).uint64(message.defaultGasPerOrderDataByte);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Params {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseParams();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.priceSnapshotRetention = reader.uint64();
					break;
				case 2:
					message.sudoCallGasPrice = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 3:
					message.beginBlockGasLimit = reader.uint64();
					break;
				case 4:
					message.endBlockGasLimit = reader.uint64();
					break;
				case 5:
					message.defaultGasPerOrder = reader.uint64();
					break;
				case 6:
					message.defaultGasPerCancel = reader.uint64();
					break;
				case 7:
					message.minRentDeposit = reader.uint64();
					break;
				case 8:
					message.gasAllowancePerSettlement = reader.uint64();
					break;
				case 9:
					message.minProcessableRent = reader.uint64();
					break;
				case 10:
					message.orderBookEntriesPerLoad = reader.uint64();
					break;
				case 11:
					message.contractUnsuspendCost = reader.uint64();
					break;
				case 12:
					message.maxOrderPerPrice = reader.uint64();
					break;
				case 13:
					message.maxPairsPerContract = reader.uint64();
					break;
				case 14:
					message.defaultGasPerOrderDataByte = reader.uint64();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Params>): Params {
		const message = createBaseParams();
		message.priceSnapshotRetention =
			object.priceSnapshotRetention !== undefined && object.priceSnapshotRetention !== null ? BigInt(object.priceSnapshotRetention.toString()) : BigInt(0);
		message.sudoCallGasPrice = object.sudoCallGasPrice ?? '';
		message.beginBlockGasLimit =
			object.beginBlockGasLimit !== undefined && object.beginBlockGasLimit !== null ? BigInt(object.beginBlockGasLimit.toString()) : BigInt(0);
		message.endBlockGasLimit = object.endBlockGasLimit !== undefined && object.endBlockGasLimit !== null ? BigInt(object.endBlockGasLimit.toString()) : BigInt(0);
		message.defaultGasPerOrder =
			object.defaultGasPerOrder !== undefined && object.defaultGasPerOrder !== null ? BigInt(object.defaultGasPerOrder.toString()) : BigInt(0);
		message.defaultGasPerCancel =
			object.defaultGasPerCancel !== undefined && object.defaultGasPerCancel !== null ? BigInt(object.defaultGasPerCancel.toString()) : BigInt(0);
		message.minRentDeposit = object.minRentDeposit !== undefined && object.minRentDeposit !== null ? BigInt(object.minRentDeposit.toString()) : BigInt(0);
		message.gasAllowancePerSettlement =
			object.gasAllowancePerSettlement !== undefined && object.gasAllowancePerSettlement !== null ? BigInt(object.gasAllowancePerSettlement.toString()) : BigInt(0);
		message.minProcessableRent =
			object.minProcessableRent !== undefined && object.minProcessableRent !== null ? BigInt(object.minProcessableRent.toString()) : BigInt(0);
		message.orderBookEntriesPerLoad =
			object.orderBookEntriesPerLoad !== undefined && object.orderBookEntriesPerLoad !== null ? BigInt(object.orderBookEntriesPerLoad.toString()) : BigInt(0);
		message.contractUnsuspendCost =
			object.contractUnsuspendCost !== undefined && object.contractUnsuspendCost !== null ? BigInt(object.contractUnsuspendCost.toString()) : BigInt(0);
		message.maxOrderPerPrice = object.maxOrderPerPrice !== undefined && object.maxOrderPerPrice !== null ? BigInt(object.maxOrderPerPrice.toString()) : BigInt(0);
		message.maxPairsPerContract =
			object.maxPairsPerContract !== undefined && object.maxPairsPerContract !== null ? BigInt(object.maxPairsPerContract.toString()) : BigInt(0);
		message.defaultGasPerOrderDataByte =
			object.defaultGasPerOrderDataByte !== undefined && object.defaultGasPerOrderDataByte !== null
				? BigInt(object.defaultGasPerOrderDataByte.toString())
				: BigInt(0);
		return message;
	},
	fromAmino(object: ParamsAmino): Params {
		const message = createBaseParams();
		if (object.price_snapshot_retention !== undefined && object.price_snapshot_retention !== null) {
			message.priceSnapshotRetention = BigInt(object.price_snapshot_retention);
		}
		if (object.sudo_call_gas_price !== undefined && object.sudo_call_gas_price !== null) {
			message.sudoCallGasPrice = object.sudo_call_gas_price;
		}
		if (object.begin_block_gas_limit !== undefined && object.begin_block_gas_limit !== null) {
			message.beginBlockGasLimit = BigInt(object.begin_block_gas_limit);
		}
		if (object.end_block_gas_limit !== undefined && object.end_block_gas_limit !== null) {
			message.endBlockGasLimit = BigInt(object.end_block_gas_limit);
		}
		if (object.default_gas_per_order !== undefined && object.default_gas_per_order !== null) {
			message.defaultGasPerOrder = BigInt(object.default_gas_per_order);
		}
		if (object.default_gas_per_cancel !== undefined && object.default_gas_per_cancel !== null) {
			message.defaultGasPerCancel = BigInt(object.default_gas_per_cancel);
		}
		if (object.min_rent_deposit !== undefined && object.min_rent_deposit !== null) {
			message.minRentDeposit = BigInt(object.min_rent_deposit);
		}
		if (object.gas_allowance_per_settlement !== undefined && object.gas_allowance_per_settlement !== null) {
			message.gasAllowancePerSettlement = BigInt(object.gas_allowance_per_settlement);
		}
		if (object.min_processable_rent !== undefined && object.min_processable_rent !== null) {
			message.minProcessableRent = BigInt(object.min_processable_rent);
		}
		if (object.order_book_entries_per_load !== undefined && object.order_book_entries_per_load !== null) {
			message.orderBookEntriesPerLoad = BigInt(object.order_book_entries_per_load);
		}
		if (object.contract_unsuspend_cost !== undefined && object.contract_unsuspend_cost !== null) {
			message.contractUnsuspendCost = BigInt(object.contract_unsuspend_cost);
		}
		if (object.max_order_per_price !== undefined && object.max_order_per_price !== null) {
			message.maxOrderPerPrice = BigInt(object.max_order_per_price);
		}
		if (object.max_pairs_per_contract !== undefined && object.max_pairs_per_contract !== null) {
			message.maxPairsPerContract = BigInt(object.max_pairs_per_contract);
		}
		if (object.default_gas_per_order_data_byte !== undefined && object.default_gas_per_order_data_byte !== null) {
			message.defaultGasPerOrderDataByte = BigInt(object.default_gas_per_order_data_byte);
		}
		return message;
	},
	toAmino(message: Params): ParamsAmino {
		const obj: any = {};
		obj.price_snapshot_retention = message.priceSnapshotRetention ? message.priceSnapshotRetention.toString() : '0';
		obj.sudo_call_gas_price = message.sudoCallGasPrice ?? '';
		obj.begin_block_gas_limit = message.beginBlockGasLimit ? message.beginBlockGasLimit.toString() : '0';
		obj.end_block_gas_limit = message.endBlockGasLimit ? message.endBlockGasLimit.toString() : '0';
		obj.default_gas_per_order = message.defaultGasPerOrder ? message.defaultGasPerOrder.toString() : '0';
		obj.default_gas_per_cancel = message.defaultGasPerCancel ? message.defaultGasPerCancel.toString() : '0';
		obj.min_rent_deposit = message.minRentDeposit ? message.minRentDeposit.toString() : '0';
		obj.gas_allowance_per_settlement = message.gasAllowancePerSettlement ? message.gasAllowancePerSettlement.toString() : '0';
		obj.min_processable_rent = message.minProcessableRent ? message.minProcessableRent.toString() : '0';
		obj.order_book_entries_per_load = message.orderBookEntriesPerLoad ? message.orderBookEntriesPerLoad.toString() : '0';
		obj.contract_unsuspend_cost = message.contractUnsuspendCost ? message.contractUnsuspendCost.toString() : '0';
		obj.max_order_per_price = message.maxOrderPerPrice ? message.maxOrderPerPrice.toString() : '0';
		obj.max_pairs_per_contract = message.maxPairsPerContract ? message.maxPairsPerContract.toString() : '0';
		obj.default_gas_per_order_data_byte = message.defaultGasPerOrderDataByte ? message.defaultGasPerOrderDataByte.toString() : '0';
		return obj;
	},
	fromAminoMsg(object: ParamsAminoMsg): Params {
		return Params.fromAmino(object.value);
	},
	fromProtoMsg(message: ParamsProtoMsg): Params {
		return Params.decode(message.value);
	},
	toProto(message: Params): Uint8Array {
		return Params.encode(message).finish();
	},
	toProtoMsg(message: Params): ParamsProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.dex.Params',
			value: Params.encode(message).finish()
		};
	}
};
