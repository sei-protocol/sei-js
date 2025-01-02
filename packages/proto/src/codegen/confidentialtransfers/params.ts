import { BinaryReader, BinaryWriter } from '../binary';
/** Params defines the parameters for the confidential tokens module. */
export interface Params {
	enableCtModule: boolean;
	rangeProofGasCost: bigint;
}
export interface ParamsProtoMsg {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.Params';
	value: Uint8Array;
}
/** Params defines the parameters for the confidential tokens module. */
export interface ParamsAmino {
	enable_ct_module?: boolean;
	range_proof_gas_cost?: string;
}
export interface ParamsAminoMsg {
	type: '/seiprotocol.seichain.confidentialtransfers.Params';
	value: ParamsAmino;
}
/** Params defines the parameters for the confidential tokens module. */
export interface ParamsSDKType {
	enable_ct_module: boolean;
	range_proof_gas_cost: bigint;
}
function createBaseParams(): Params {
	return {
		enableCtModule: false,
		rangeProofGasCost: BigInt(0)
	};
}
export const Params = {
	typeUrl: '/seiprotocol.seichain.confidentialtransfers.Params',
	encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.enableCtModule === true) {
			writer.uint32(8).bool(message.enableCtModule);
		}
		if (message.rangeProofGasCost !== BigInt(0)) {
			writer.uint32(16).uint64(message.rangeProofGasCost);
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
					message.enableCtModule = reader.bool();
					break;
				case 2:
					message.rangeProofGasCost = reader.uint64();
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
		message.enableCtModule = object.enableCtModule ?? false;
		message.rangeProofGasCost =
			object.rangeProofGasCost !== undefined && object.rangeProofGasCost !== null ? BigInt(object.rangeProofGasCost.toString()) : BigInt(0);
		return message;
	},
	fromAmino(object: ParamsAmino): Params {
		const message = createBaseParams();
		if (object.enable_ct_module !== undefined && object.enable_ct_module !== null) {
			message.enableCtModule = object.enable_ct_module;
		}
		if (object.range_proof_gas_cost !== undefined && object.range_proof_gas_cost !== null) {
			message.rangeProofGasCost = BigInt(object.range_proof_gas_cost);
		}
		return message;
	},
	toAmino(message: Params): ParamsAmino {
		const obj: any = {};
		obj.enable_ct_module = message.enableCtModule === false ? undefined : message.enableCtModule;
		obj.range_proof_gas_cost = message.rangeProofGasCost !== BigInt(0) ? message.rangeProofGasCost.toString() : undefined;
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
			typeUrl: '/seiprotocol.seichain.confidentialtransfers.Params',
			value: Params.encode(message).finish()
		};
	}
};
