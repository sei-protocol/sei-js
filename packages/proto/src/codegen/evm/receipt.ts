import { BinaryReader, BinaryWriter } from '../binary';
import { bytesFromBase64, base64FromBytes } from '../helpers';
export interface Log {
	address: string;
	topics: string[];
	data: Uint8Array;
	index: number;
}
export interface LogProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.Log';
	value: Uint8Array;
}
export interface LogAmino {
	address?: string;
	topics?: string[];
	data?: string;
	index?: number;
}
export interface LogAminoMsg {
	type: '/seiprotocol.seichain.evm.Log';
	value: LogAmino;
}
export interface LogSDKType {
	address: string;
	topics: string[];
	data: Uint8Array;
	index: number;
}
export interface Receipt {
	txType: number;
	cumulativeGasUsed: bigint;
	contractAddress: string;
	txHashHex: string;
	gasUsed: bigint;
	effectiveGasPrice: bigint;
	blockNumber: bigint;
	transactionIndex: number;
	status: number;
	from: string;
	to: string;
	vmError: string;
	logs: Log[];
	logsBloom: Uint8Array;
}
export interface ReceiptProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.Receipt';
	value: Uint8Array;
}
export interface ReceiptAmino {
	tx_type?: number;
	cumulative_gas_used?: string;
	contract_address?: string;
	tx_hash_hex?: string;
	gas_used?: string;
	effective_gas_price?: string;
	block_number?: string;
	transaction_index?: number;
	status?: number;
	from?: string;
	to?: string;
	vm_error?: string;
	logs?: LogAmino[];
	logsBloom?: string;
}
export interface ReceiptAminoMsg {
	type: '/seiprotocol.seichain.evm.Receipt';
	value: ReceiptAmino;
}
export interface ReceiptSDKType {
	tx_type: number;
	cumulative_gas_used: bigint;
	contract_address: string;
	tx_hash_hex: string;
	gas_used: bigint;
	effective_gas_price: bigint;
	block_number: bigint;
	transaction_index: number;
	status: number;
	from: string;
	to: string;
	vm_error: string;
	logs: LogSDKType[];
	logsBloom: Uint8Array;
}
function createBaseLog(): Log {
	return {
		address: '',
		topics: [],
		data: new Uint8Array(),
		index: 0
	};
}
export const Log = {
	typeUrl: '/seiprotocol.seichain.evm.Log',
	encode(message: Log, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		for (const v of message.topics) {
			writer.uint32(18).string(v!);
		}
		if (message.data.length !== 0) {
			writer.uint32(26).bytes(message.data);
		}
		if (message.index !== 0) {
			writer.uint32(32).uint32(message.index);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Log {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseLog();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.topics.push(reader.string());
					break;
				case 3:
					message.data = reader.bytes();
					break;
				case 4:
					message.index = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Log>): Log {
		const message = createBaseLog();
		message.address = object.address ?? '';
		message.topics = object.topics?.map((e) => e) || [];
		message.data = object.data ?? new Uint8Array();
		message.index = object.index ?? 0;
		return message;
	},
	fromAmino(object: LogAmino): Log {
		const message = createBaseLog();
		if (object.address !== undefined && object.address !== null) {
			message.address = object.address;
		}
		message.topics = object.topics?.map((e) => e) || [];
		if (object.data !== undefined && object.data !== null) {
			message.data = bytesFromBase64(object.data);
		}
		if (object.index !== undefined && object.index !== null) {
			message.index = object.index;
		}
		return message;
	},
	toAmino(message: Log): LogAmino {
		const obj: any = {};
		obj.address = message.address === '' ? undefined : message.address;
		if (message.topics) {
			obj.topics = message.topics.map((e) => e);
		} else {
			obj.topics = message.topics;
		}
		obj.data = message.data ? base64FromBytes(message.data) : undefined;
		obj.index = message.index === 0 ? undefined : message.index;
		return obj;
	},
	fromAminoMsg(object: LogAminoMsg): Log {
		return Log.fromAmino(object.value);
	},
	fromProtoMsg(message: LogProtoMsg): Log {
		return Log.decode(message.value);
	},
	toProto(message: Log): Uint8Array {
		return Log.encode(message).finish();
	},
	toProtoMsg(message: Log): LogProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.Log',
			value: Log.encode(message).finish()
		};
	}
};
function createBaseReceipt(): Receipt {
	return {
		txType: 0,
		cumulativeGasUsed: BigInt(0),
		contractAddress: '',
		txHashHex: '',
		gasUsed: BigInt(0),
		effectiveGasPrice: BigInt(0),
		blockNumber: BigInt(0),
		transactionIndex: 0,
		status: 0,
		from: '',
		to: '',
		vmError: '',
		logs: [],
		logsBloom: new Uint8Array()
	};
}
export const Receipt = {
	typeUrl: '/seiprotocol.seichain.evm.Receipt',
	encode(message: Receipt, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.txType !== 0) {
			writer.uint32(8).uint32(message.txType);
		}
		if (message.cumulativeGasUsed !== BigInt(0)) {
			writer.uint32(16).uint64(message.cumulativeGasUsed);
		}
		if (message.contractAddress !== '') {
			writer.uint32(26).string(message.contractAddress);
		}
		if (message.txHashHex !== '') {
			writer.uint32(34).string(message.txHashHex);
		}
		if (message.gasUsed !== BigInt(0)) {
			writer.uint32(40).uint64(message.gasUsed);
		}
		if (message.effectiveGasPrice !== BigInt(0)) {
			writer.uint32(48).uint64(message.effectiveGasPrice);
		}
		if (message.blockNumber !== BigInt(0)) {
			writer.uint32(56).uint64(message.blockNumber);
		}
		if (message.transactionIndex !== 0) {
			writer.uint32(64).uint32(message.transactionIndex);
		}
		if (message.status !== 0) {
			writer.uint32(72).uint32(message.status);
		}
		if (message.from !== '') {
			writer.uint32(82).string(message.from);
		}
		if (message.to !== '') {
			writer.uint32(90).string(message.to);
		}
		if (message.vmError !== '') {
			writer.uint32(98).string(message.vmError);
		}
		for (const v of message.logs) {
			Log.encode(v!, writer.uint32(106).fork()).ldelim();
		}
		if (message.logsBloom.length !== 0) {
			writer.uint32(114).bytes(message.logsBloom);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): Receipt {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseReceipt();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.txType = reader.uint32();
					break;
				case 2:
					message.cumulativeGasUsed = reader.uint64();
					break;
				case 3:
					message.contractAddress = reader.string();
					break;
				case 4:
					message.txHashHex = reader.string();
					break;
				case 5:
					message.gasUsed = reader.uint64();
					break;
				case 6:
					message.effectiveGasPrice = reader.uint64();
					break;
				case 7:
					message.blockNumber = reader.uint64();
					break;
				case 8:
					message.transactionIndex = reader.uint32();
					break;
				case 9:
					message.status = reader.uint32();
					break;
				case 10:
					message.from = reader.string();
					break;
				case 11:
					message.to = reader.string();
					break;
				case 12:
					message.vmError = reader.string();
					break;
				case 13:
					message.logs.push(Log.decode(reader, reader.uint32()));
					break;
				case 14:
					message.logsBloom = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<Receipt>): Receipt {
		const message = createBaseReceipt();
		message.txType = object.txType ?? 0;
		message.cumulativeGasUsed =
			object.cumulativeGasUsed !== undefined && object.cumulativeGasUsed !== null ? BigInt(object.cumulativeGasUsed.toString()) : BigInt(0);
		message.contractAddress = object.contractAddress ?? '';
		message.txHashHex = object.txHashHex ?? '';
		message.gasUsed = object.gasUsed !== undefined && object.gasUsed !== null ? BigInt(object.gasUsed.toString()) : BigInt(0);
		message.effectiveGasPrice =
			object.effectiveGasPrice !== undefined && object.effectiveGasPrice !== null ? BigInt(object.effectiveGasPrice.toString()) : BigInt(0);
		message.blockNumber = object.blockNumber !== undefined && object.blockNumber !== null ? BigInt(object.blockNumber.toString()) : BigInt(0);
		message.transactionIndex = object.transactionIndex ?? 0;
		message.status = object.status ?? 0;
		message.from = object.from ?? '';
		message.to = object.to ?? '';
		message.vmError = object.vmError ?? '';
		message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
		message.logsBloom = object.logsBloom ?? new Uint8Array();
		return message;
	},
	fromAmino(object: ReceiptAmino): Receipt {
		const message = createBaseReceipt();
		if (object.tx_type !== undefined && object.tx_type !== null) {
			message.txType = object.tx_type;
		}
		if (object.cumulative_gas_used !== undefined && object.cumulative_gas_used !== null) {
			message.cumulativeGasUsed = BigInt(object.cumulative_gas_used);
		}
		if (object.contract_address !== undefined && object.contract_address !== null) {
			message.contractAddress = object.contract_address;
		}
		if (object.tx_hash_hex !== undefined && object.tx_hash_hex !== null) {
			message.txHashHex = object.tx_hash_hex;
		}
		if (object.gas_used !== undefined && object.gas_used !== null) {
			message.gasUsed = BigInt(object.gas_used);
		}
		if (object.effective_gas_price !== undefined && object.effective_gas_price !== null) {
			message.effectiveGasPrice = BigInt(object.effective_gas_price);
		}
		if (object.block_number !== undefined && object.block_number !== null) {
			message.blockNumber = BigInt(object.block_number);
		}
		if (object.transaction_index !== undefined && object.transaction_index !== null) {
			message.transactionIndex = object.transaction_index;
		}
		if (object.status !== undefined && object.status !== null) {
			message.status = object.status;
		}
		if (object.from !== undefined && object.from !== null) {
			message.from = object.from;
		}
		if (object.to !== undefined && object.to !== null) {
			message.to = object.to;
		}
		if (object.vm_error !== undefined && object.vm_error !== null) {
			message.vmError = object.vm_error;
		}
		message.logs = object.logs?.map((e) => Log.fromAmino(e)) || [];
		if (object.logsBloom !== undefined && object.logsBloom !== null) {
			message.logsBloom = bytesFromBase64(object.logsBloom);
		}
		return message;
	},
	toAmino(message: Receipt): ReceiptAmino {
		const obj: any = {};
		obj.tx_type = message.txType === 0 ? undefined : message.txType;
		obj.cumulative_gas_used = message.cumulativeGasUsed !== BigInt(0) ? message.cumulativeGasUsed.toString() : undefined;
		obj.contract_address = message.contractAddress === '' ? undefined : message.contractAddress;
		obj.tx_hash_hex = message.txHashHex === '' ? undefined : message.txHashHex;
		obj.gas_used = message.gasUsed !== BigInt(0) ? message.gasUsed.toString() : undefined;
		obj.effective_gas_price = message.effectiveGasPrice !== BigInt(0) ? message.effectiveGasPrice.toString() : undefined;
		obj.block_number = message.blockNumber !== BigInt(0) ? message.blockNumber.toString() : undefined;
		obj.transaction_index = message.transactionIndex === 0 ? undefined : message.transactionIndex;
		obj.status = message.status === 0 ? undefined : message.status;
		obj.from = message.from === '' ? undefined : message.from;
		obj.to = message.to === '' ? undefined : message.to;
		obj.vm_error = message.vmError === '' ? undefined : message.vmError;
		if (message.logs) {
			obj.logs = message.logs.map((e) => (e ? Log.toAmino(e) : undefined));
		} else {
			obj.logs = message.logs;
		}
		obj.logsBloom = message.logsBloom ? base64FromBytes(message.logsBloom) : undefined;
		return obj;
	},
	fromAminoMsg(object: ReceiptAminoMsg): Receipt {
		return Receipt.fromAmino(object.value);
	},
	fromProtoMsg(message: ReceiptProtoMsg): Receipt {
		return Receipt.decode(message.value);
	},
	toProto(message: Receipt): Uint8Array {
		return Receipt.encode(message).finish();
	},
	toProtoMsg(message: Receipt): ReceiptProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.Receipt',
			value: Receipt.encode(message).finish()
		};
	}
};
