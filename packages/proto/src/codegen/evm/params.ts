import { BinaryReader, BinaryWriter } from '../binary';
import { Decimal } from '@cosmjs/math';
import { bytesFromBase64, base64FromBytes } from '../helpers';
/** Params defines the parameters for the module. */
export interface Params {
	/**
	 * string base_denom = 1 [
	 *   (gogoproto.moretags)   = "yaml:\"base_denom\"",
	 *   (gogoproto.jsontag) = "base_denom"
	 * ];
	 */
	priorityNormalizer: string;
	baseFeePerGas: string;
	minimumFeePerGas: string;
	/**
	 * ChainConfig chain_config = 5 [(gogoproto.moretags) = "yaml:\"chain_config\"", (gogoproto.nullable) = false];
	 *   string chain_id = 6 [
	 *   (gogoproto.moretags)   = "yaml:\"chain_id\"",
	 *   (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
	 *   (gogoproto.nullable)   = false,
	 *   (gogoproto.jsontag) = "chain_id"
	 * ];
	 * repeated string whitelisted_codehashes_bank_send = 7 [
	 *   (gogoproto.moretags)   = "yaml:\"whitelisted_codehashes_bank_send\"",
	 *   (gogoproto.jsontag) = "whitelisted_codehashes_bank_send"
	 * ];
	 */
	whitelistedCwCodeHashesForDelegateCall: Uint8Array[];
}
export interface ParamsProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.Params';
	value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
	/**
	 * string base_denom = 1 [
	 *   (gogoproto.moretags)   = "yaml:\"base_denom\"",
	 *   (gogoproto.jsontag) = "base_denom"
	 * ];
	 */
	priority_normalizer: string;
	base_fee_per_gas: string;
	minimum_fee_per_gas: string;
	/**
	 * ChainConfig chain_config = 5 [(gogoproto.moretags) = "yaml:\"chain_config\"", (gogoproto.nullable) = false];
	 *   string chain_id = 6 [
	 *   (gogoproto.moretags)   = "yaml:\"chain_id\"",
	 *   (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
	 *   (gogoproto.nullable)   = false,
	 *   (gogoproto.jsontag) = "chain_id"
	 * ];
	 * repeated string whitelisted_codehashes_bank_send = 7 [
	 *   (gogoproto.moretags)   = "yaml:\"whitelisted_codehashes_bank_send\"",
	 *   (gogoproto.jsontag) = "whitelisted_codehashes_bank_send"
	 * ];
	 */
	whitelisted_cw_code_hashes_for_delegate_call: string[];
}
export interface ParamsAminoMsg {
	type: '/seiprotocol.seichain.evm.Params';
	value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
	priority_normalizer: string;
	base_fee_per_gas: string;
	minimum_fee_per_gas: string;
	whitelisted_cw_code_hashes_for_delegate_call: Uint8Array[];
}
function createBaseParams(): Params {
	return {
		priorityNormalizer: '',
		baseFeePerGas: '',
		minimumFeePerGas: '',
		whitelistedCwCodeHashesForDelegateCall: []
	};
}
export const Params = {
	typeUrl: '/seiprotocol.seichain.evm.Params',
	encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.priorityNormalizer !== '') {
			writer.uint32(18).string(Decimal.fromUserInput(message.priorityNormalizer, 18).atomics);
		}
		if (message.baseFeePerGas !== '') {
			writer.uint32(26).string(Decimal.fromUserInput(message.baseFeePerGas, 18).atomics);
		}
		if (message.minimumFeePerGas !== '') {
			writer.uint32(34).string(Decimal.fromUserInput(message.minimumFeePerGas, 18).atomics);
		}
		for (const v of message.whitelistedCwCodeHashesForDelegateCall) {
			writer.uint32(66).bytes(v!);
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
				case 2:
					message.priorityNormalizer = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 3:
					message.baseFeePerGas = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 4:
					message.minimumFeePerGas = Decimal.fromAtomics(reader.string(), 18).toString();
					break;
				case 8:
					message.whitelistedCwCodeHashesForDelegateCall.push(reader.bytes());
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
		message.priorityNormalizer = object.priorityNormalizer ?? '';
		message.baseFeePerGas = object.baseFeePerGas ?? '';
		message.minimumFeePerGas = object.minimumFeePerGas ?? '';
		message.whitelistedCwCodeHashesForDelegateCall = object.whitelistedCwCodeHashesForDelegateCall?.map((e) => e) || [];
		return message;
	},
	fromAmino(object: ParamsAmino): Params {
		const message = createBaseParams();
		if (object.priority_normalizer !== undefined && object.priority_normalizer !== null) {
			message.priorityNormalizer = object.priority_normalizer;
		}
		if (object.base_fee_per_gas !== undefined && object.base_fee_per_gas !== null) {
			message.baseFeePerGas = object.base_fee_per_gas;
		}
		if (object.minimum_fee_per_gas !== undefined && object.minimum_fee_per_gas !== null) {
			message.minimumFeePerGas = object.minimum_fee_per_gas;
		}
		message.whitelistedCwCodeHashesForDelegateCall = object.whitelisted_cw_code_hashes_for_delegate_call?.map((e) => bytesFromBase64(e)) || [];
		return message;
	},
	toAmino(message: Params): ParamsAmino {
		const obj: any = {};
		obj.priority_normalizer = message.priorityNormalizer ?? '';
		obj.base_fee_per_gas = message.baseFeePerGas ?? '';
		obj.minimum_fee_per_gas = message.minimumFeePerGas ?? '';
		if (message.whitelistedCwCodeHashesForDelegateCall) {
			obj.whitelisted_cw_code_hashes_for_delegate_call = message.whitelistedCwCodeHashesForDelegateCall.map((e) => base64FromBytes(e));
		} else {
			obj.whitelisted_cw_code_hashes_for_delegate_call = message.whitelistedCwCodeHashesForDelegateCall;
		}
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
			typeUrl: '/seiprotocol.seichain.evm.Params',
			value: Params.encode(message).finish()
		};
	}
};
