import { Params, ParamsAmino, ParamsSDKType } from './params';
import { BinaryReader, BinaryWriter } from '../binary';
/** AddressAssociation represents an association between a Cosmos and an Ethereum address. */
export interface AddressAssociation {
	/** Sei address */
	seiAddress: string;
	/** Ethereum address */
	ethAddress: string;
}
export interface AddressAssociationProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.AddressAssociation';
	value: Uint8Array;
}
/** AddressAssociation represents an association between a Cosmos and an Ethereum address. */
export interface AddressAssociationAmino {
	/** Sei address */
	sei_address?: string;
	/** Ethereum address */
	eth_address?: string;
}
export interface AddressAssociationAminoMsg {
	type: '/seiprotocol.seichain.evm.AddressAssociation';
	value: AddressAssociationAmino;
}
/** AddressAssociation represents an association between a Cosmos and an Ethereum address. */
export interface AddressAssociationSDKType {
	sei_address: string;
	eth_address: string;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
	params: Params | undefined;
	/** List of address associations */
	addressAssociations: AddressAssociation[];
}
export interface GenesisStateProtoMsg {
	typeUrl: '/seiprotocol.seichain.evm.GenesisState';
	value: Uint8Array;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateAmino {
	params?: ParamsAmino | undefined;
	/** List of address associations */
	address_associations?: AddressAssociationAmino[];
}
export interface GenesisStateAminoMsg {
	type: '/seiprotocol.seichain.evm.GenesisState';
	value: GenesisStateAmino;
}
/** GenesisState defines the evm module's genesis state. */
export interface GenesisStateSDKType {
	params: ParamsSDKType | undefined;
	address_associations: AddressAssociationSDKType[];
}
function createBaseAddressAssociation(): AddressAssociation {
	return {
		seiAddress: '',
		ethAddress: ''
	};
}
export const AddressAssociation = {
	typeUrl: '/seiprotocol.seichain.evm.AddressAssociation',
	encode(message: AddressAssociation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.seiAddress !== '') {
			writer.uint32(10).string(message.seiAddress);
		}
		if (message.ethAddress !== '') {
			writer.uint32(18).string(message.ethAddress);
		}
		return writer;
	},
	decode(input: BinaryReader | Uint8Array, length?: number): AddressAssociation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAddressAssociation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.seiAddress = reader.string();
					break;
				case 2:
					message.ethAddress = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},
	fromPartial(object: Partial<AddressAssociation>): AddressAssociation {
		const message = createBaseAddressAssociation();
		message.seiAddress = object.seiAddress ?? '';
		message.ethAddress = object.ethAddress ?? '';
		return message;
	},
	fromAmino(object: AddressAssociationAmino): AddressAssociation {
		const message = createBaseAddressAssociation();
		if (object.sei_address !== undefined && object.sei_address !== null) {
			message.seiAddress = object.sei_address;
		}
		if (object.eth_address !== undefined && object.eth_address !== null) {
			message.ethAddress = object.eth_address;
		}
		return message;
	},
	toAmino(message: AddressAssociation): AddressAssociationAmino {
		const obj: any = {};
		obj.sei_address = message.seiAddress === '' ? undefined : message.seiAddress;
		obj.eth_address = message.ethAddress === '' ? undefined : message.ethAddress;
		return obj;
	},
	fromAminoMsg(object: AddressAssociationAminoMsg): AddressAssociation {
		return AddressAssociation.fromAmino(object.value);
	},
	fromProtoMsg(message: AddressAssociationProtoMsg): AddressAssociation {
		return AddressAssociation.decode(message.value);
	},
	toProto(message: AddressAssociation): Uint8Array {
		return AddressAssociation.encode(message).finish();
	},
	toProtoMsg(message: AddressAssociation): AddressAssociationProtoMsg {
		return {
			typeUrl: '/seiprotocol.seichain.evm.AddressAssociation',
			value: AddressAssociation.encode(message).finish()
		};
	}
};
function createBaseGenesisState(): GenesisState {
	return {
		params: Params.fromPartial({}),
		addressAssociations: []
	};
}
export const GenesisState = {
	typeUrl: '/seiprotocol.seichain.evm.GenesisState',
	encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.addressAssociations) {
			AddressAssociation.encode(v!, writer.uint32(18).fork()).ldelim();
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
					message.addressAssociations.push(AddressAssociation.decode(reader, reader.uint32()));
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
		message.addressAssociations = object.addressAssociations?.map((e) => AddressAssociation.fromPartial(e)) || [];
		return message;
	},
	fromAmino(object: GenesisStateAmino): GenesisState {
		const message = createBaseGenesisState();
		if (object.params !== undefined && object.params !== null) {
			message.params = Params.fromAmino(object.params);
		}
		message.addressAssociations = object.address_associations?.map((e) => AddressAssociation.fromAmino(e)) || [];
		return message;
	},
	toAmino(message: GenesisState): GenesisStateAmino {
		const obj: any = {};
		obj.params = message.params ? Params.toAmino(message.params) : undefined;
		if (message.addressAssociations) {
			obj.address_associations = message.addressAssociations.map((e) => (e ? AddressAssociation.toAmino(e) : undefined));
		} else {
			obj.address_associations = message.addressAssociations;
		}
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
			typeUrl: '/seiprotocol.seichain.evm.GenesisState',
			value: GenesisState.encode(message).finish()
		};
	}
};
