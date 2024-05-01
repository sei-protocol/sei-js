import { BinaryReader, BinaryWriter } from '../binary';
/**
 * XXTime fields indicate upgrade timestamps. For example, a ShanghaiTime
 * of 42198537129 means the chain upgraded to the Shanghai version at timestamp 42198537129.
 * A value of 0 means the upgrade is included in the genesis of the EVM on Sei.
 * -1 means upgrade not reached yet.
 */
export interface ChainConfig {
	cancunTime: bigint;
	pragueTime: bigint;
	verkleTime: bigint;
}
export interface ChainConfigProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.ChainConfig';
	value: Uint8Array;
}
/**
 * XXTime fields indicate upgrade timestamps. For example, a ShanghaiTime
 * of 42198537129 means the chain upgraded to the Shanghai version at timestamp 42198537129.
 * A value of 0 means the upgrade is included in the genesis of the EVM on Sei.
 * -1 means upgrade not reached yet.
 */
export interface ChainConfigAmino {
	cancun_time?: string;
	prague_time?: string;
	verkle_time?: string;
}
export interface ChainConfigAminoMsg {
	type: '/seiprotocol.seichain.evm.ChainConfig';
	value: ChainConfigAmino;
}
/**
 * XXTime fields indicate upgrade timestamps. For example, a ShanghaiTime
 * of 42198537129 means the chain upgraded to the Shanghai version at timestamp 42198537129.
 * A value of 0 means the upgrade is included in the genesis of the EVM on Sei.
 * -1 means upgrade not reached yet.
 */
export interface ChainConfigSDKType {
	cancun_time: bigint;
	prague_time: bigint;
	verkle_time: bigint;
}
function createBaseChainConfig(): ChainConfig {
	return {
		cancunTime: BigInt(0),
		pragueTime: BigInt(0),
		verkleTime: BigInt(0)
	};
}
export const ChainConfig = {
	typeUrl: '/seiprotocol.seichain.evm.ChainConfig',
	encode(message: ChainConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.cancunTime !== BigInt(0)) {
			writer.uint32(8).int64(message.cancunTime);
		}
		if (message.pragueTime !== BigInt(0)) {
			writer.uint32(16).int64(message.pragueTime);
		}
		if (message.verkleTime !== BigInt(0)) {
			writer.uint32(24).int64(message.verkleTime);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): ChainConfig {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseChainConfig();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.cancunTime = reader.int64();
					break;
				case 2:
					message.pragueTime = reader.int64();
					break;
				case 3:
					message.verkleTime = reader.int64();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<ChainConfig>): ChainConfig {
		const message = createBaseChainConfig();
		message.cancunTime = object.cancunTime !== undefined && object.cancunTime !== null ? BigInt(object.cancunTime.toString()) : BigInt(0);
		message.pragueTime = object.pragueTime !== undefined && object.pragueTime !== null ? BigInt(object.pragueTime.toString()) : BigInt(0);
		message.verkleTime = object.verkleTime !== undefined && object.verkleTime !== null ? BigInt(object.verkleTime.toString()) : BigInt(0);
		return message;
	},
	fromAmino(object: ChainConfigAmino): ChainConfig {
		const message = createBaseChainConfig();
		if (object.cancun_time !== undefined && object.cancun_time !== null) {
			message.cancunTime = BigInt(object.cancun_time);
		}
		if (object.prague_time !== undefined && object.prague_time !== null) {
			message.pragueTime = BigInt(object.prague_time);
		}
		if (object.verkle_time !== undefined && object.verkle_time !== null) {
			message.verkleTime = BigInt(object.verkle_time);
		}
		return message;
	},
	toAmino(message: ChainConfig): ChainConfigAmino {
		const obj: any = {};
		obj.cancun_time = message.cancunTime !== BigInt(0) ? message.cancunTime.toString() : undefined;
		obj.prague_time = message.pragueTime !== BigInt(0) ? message.pragueTime.toString() : undefined;
		obj.verkle_time = message.verkleTime !== BigInt(0) ? message.verkleTime.toString() : undefined;
		return obj;
	},
	fromAminoMsg(object: ChainConfigAminoMsg): ChainConfig {
		return ChainConfig.fromAmino(object.value);
	},
	fromProtoMsg(message: ChainConfigProtoMsg): ChainConfig {
		return ChainConfig.decode(message.value);
	},
	toProto(message: ChainConfig): Uint8Array {
		return ChainConfig.encode(message).finish();
	},
	toProtoMsg(message: ChainConfig): ChainConfigProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.ChainConfig',
			value: ChainConfig.encode(message).finish()
		};
	}
};
