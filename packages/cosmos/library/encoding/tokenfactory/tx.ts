import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import { AllowList, Metadata } from "../cosmos/bank/v1beta1/bank";

import { Coin } from "../cosmos/base/v1beta1/coin";

import type {
	MsgBurnResponse as MsgBurnResponse_type,
	MsgBurn as MsgBurn_type,
	MsgChangeAdminResponse as MsgChangeAdminResponse_type,
	MsgChangeAdmin as MsgChangeAdmin_type,
	MsgCreateDenomResponse as MsgCreateDenomResponse_type,
	MsgCreateDenom as MsgCreateDenom_type,
	MsgMintResponse as MsgMintResponse_type,
	MsgMint as MsgMint_type,
	MsgSetDenomMetadataResponse as MsgSetDenomMetadataResponse_type,
	MsgSetDenomMetadata as MsgSetDenomMetadata_type,
	MsgUpdateDenomResponse as MsgUpdateDenomResponse_type,
	MsgUpdateDenom as MsgUpdateDenom_type
} from "../../types/tokenfactory";

import type { DeepPartial, Exact, MessageFns } from "../common";

export interface MsgCreateDenom extends MsgCreateDenom_type {}
export interface MsgCreateDenomResponse extends MsgCreateDenomResponse_type {}
export interface MsgMint extends MsgMint_type {}
export interface MsgMintResponse extends MsgMintResponse_type {}
export interface MsgBurn extends MsgBurn_type {}
export interface MsgBurnResponse extends MsgBurnResponse_type {}
export interface MsgChangeAdmin extends MsgChangeAdmin_type {}
export interface MsgChangeAdminResponse extends MsgChangeAdminResponse_type {}
export interface MsgSetDenomMetadata extends MsgSetDenomMetadata_type {}
export interface MsgSetDenomMetadataResponse extends MsgSetDenomMetadataResponse_type {}
export interface MsgUpdateDenom extends MsgUpdateDenom_type {}
export interface MsgUpdateDenomResponse extends MsgUpdateDenomResponse_type {}

export const MsgCreateDenom: MessageFns<MsgCreateDenom, "seiprotocol.seichain.tokenfactory.MsgCreateDenom"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgCreateDenom" as const,

	encode(message: MsgCreateDenom, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.subdenom !== "") {
			writer.uint32(18).string(message.subdenom);
		}
		if (message.allow_list !== undefined) {
			AllowList.encode(message.allow_list, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenom {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCreateDenom();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.subdenom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.allow_list = AllowList.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgCreateDenom {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			subdenom: isSet(object.subdenom) ? globalThis.String(object.subdenom) : "",
			allow_list: isSet(object.allow_list) ? AllowList.fromJSON(object.allow_list) : undefined
		};
	},

	toJSON(message: MsgCreateDenom): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.subdenom !== "") {
			obj.subdenom = message.subdenom;
		}
		if (message.allow_list !== undefined) {
			obj.allow_list = AllowList.toJSON(message.allow_list);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(base?: I): MsgCreateDenom {
		return MsgCreateDenom.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
		const message = createBaseMsgCreateDenom();
		message.sender = object.sender ?? "";
		message.subdenom = object.subdenom ?? "";
		message.allow_list = object.allow_list !== undefined && object.allow_list !== null ? AllowList.fromPartial(object.allow_list) : undefined;
		return message;
	}
};

export const MsgCreateDenomResponse: MessageFns<MsgCreateDenomResponse, "seiprotocol.seichain.tokenfactory.MsgCreateDenomResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgCreateDenomResponse" as const,

	encode(message: MsgCreateDenomResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.new_token_denom !== "") {
			writer.uint32(10).string(message.new_token_denom);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDenomResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgCreateDenomResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.new_token_denom = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgCreateDenomResponse {
		return { new_token_denom: isSet(object.new_token_denom) ? globalThis.String(object.new_token_denom) : "" };
	},

	toJSON(message: MsgCreateDenomResponse): unknown {
		const obj: any = {};
		if (message.new_token_denom !== "") {
			obj.new_token_denom = message.new_token_denom;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(base?: I): MsgCreateDenomResponse {
		return MsgCreateDenomResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(object: I): MsgCreateDenomResponse {
		const message = createBaseMsgCreateDenomResponse();
		message.new_token_denom = object.new_token_denom ?? "";
		return message;
	}
};

export const MsgMint: MessageFns<MsgMint, "seiprotocol.seichain.tokenfactory.MsgMint"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgMint" as const,

	encode(message: MsgMint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgMint {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgMint();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.amount = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgMint {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
		};
	},

	toJSON(message: MsgMint): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.amount !== undefined) {
			obj.amount = Coin.toJSON(message.amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgMint>, I>>(base?: I): MsgMint {
		return MsgMint.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgMint>, I>>(object: I): MsgMint {
		const message = createBaseMsgMint();
		message.sender = object.sender ?? "";
		message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
		return message;
	}
};

export const MsgMintResponse: MessageFns<MsgMintResponse, "seiprotocol.seichain.tokenfactory.MsgMintResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgMintResponse" as const,

	encode(_: MsgMintResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgMintResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgMintResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgMintResponse {
		return {};
	},

	toJSON(_: MsgMintResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgMintResponse>, I>>(base?: I): MsgMintResponse {
		return MsgMintResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgMintResponse>, I>>(_: I): MsgMintResponse {
		const message = createBaseMsgMintResponse();
		return message;
	}
};

export const MsgBurn: MessageFns<MsgBurn, "seiprotocol.seichain.tokenfactory.MsgBurn"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgBurn" as const,

	encode(message: MsgBurn, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.amount !== undefined) {
			Coin.encode(message.amount, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgBurn {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgBurn();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.amount = Coin.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgBurn {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
		};
	},

	toJSON(message: MsgBurn): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.amount !== undefined) {
			obj.amount = Coin.toJSON(message.amount);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgBurn>, I>>(base?: I): MsgBurn {
		return MsgBurn.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
		const message = createBaseMsgBurn();
		message.sender = object.sender ?? "";
		message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
		return message;
	}
};

export const MsgBurnResponse: MessageFns<MsgBurnResponse, "seiprotocol.seichain.tokenfactory.MsgBurnResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgBurnResponse" as const,

	encode(_: MsgBurnResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgBurnResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgBurnResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgBurnResponse {
		return {};
	},

	toJSON(_: MsgBurnResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(base?: I): MsgBurnResponse {
		return MsgBurnResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(_: I): MsgBurnResponse {
		const message = createBaseMsgBurnResponse();
		return message;
	}
};

export const MsgChangeAdmin: MessageFns<MsgChangeAdmin, "seiprotocol.seichain.tokenfactory.MsgChangeAdmin"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgChangeAdmin" as const,

	encode(message: MsgChangeAdmin, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.new_admin !== "") {
			writer.uint32(26).string(message.new_admin);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdmin {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgChangeAdmin();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.new_admin = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgChangeAdmin {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			new_admin: isSet(object.new_admin) ? globalThis.String(object.new_admin) : ""
		};
	},

	toJSON(message: MsgChangeAdmin): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.new_admin !== "") {
			obj.new_admin = message.new_admin;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgChangeAdmin>, I>>(base?: I): MsgChangeAdmin {
		return MsgChangeAdmin.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgChangeAdmin>, I>>(object: I): MsgChangeAdmin {
		const message = createBaseMsgChangeAdmin();
		message.sender = object.sender ?? "";
		message.denom = object.denom ?? "";
		message.new_admin = object.new_admin ?? "";
		return message;
	}
};

export const MsgChangeAdminResponse: MessageFns<MsgChangeAdminResponse, "seiprotocol.seichain.tokenfactory.MsgChangeAdminResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgChangeAdminResponse" as const,

	encode(_: MsgChangeAdminResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgChangeAdminResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgChangeAdminResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgChangeAdminResponse {
		return {};
	},

	toJSON(_: MsgChangeAdminResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgChangeAdminResponse>, I>>(base?: I): MsgChangeAdminResponse {
		return MsgChangeAdminResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgChangeAdminResponse>, I>>(_: I): MsgChangeAdminResponse {
		const message = createBaseMsgChangeAdminResponse();
		return message;
	}
};

export const MsgSetDenomMetadata: MessageFns<MsgSetDenomMetadata, "seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgSetDenomMetadata" as const,

	encode(message: MsgSetDenomMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.metadata !== undefined) {
			Metadata.encode(message.metadata, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadata {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSetDenomMetadata();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.metadata = Metadata.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgSetDenomMetadata {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
		};
	},

	toJSON(message: MsgSetDenomMetadata): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.metadata !== undefined) {
			obj.metadata = Metadata.toJSON(message.metadata);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSetDenomMetadata>, I>>(base?: I): MsgSetDenomMetadata {
		return MsgSetDenomMetadata.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSetDenomMetadata>, I>>(object: I): MsgSetDenomMetadata {
		const message = createBaseMsgSetDenomMetadata();
		message.sender = object.sender ?? "";
		message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
		return message;
	}
};

export const MsgSetDenomMetadataResponse: MessageFns<MsgSetDenomMetadataResponse, "seiprotocol.seichain.tokenfactory.MsgSetDenomMetadataResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgSetDenomMetadataResponse" as const,

	encode(_: MsgSetDenomMetadataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDenomMetadataResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgSetDenomMetadataResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgSetDenomMetadataResponse {
		return {};
	},

	toJSON(_: MsgSetDenomMetadataResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgSetDenomMetadataResponse>, I>>(base?: I): MsgSetDenomMetadataResponse {
		return MsgSetDenomMetadataResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgSetDenomMetadataResponse>, I>>(_: I): MsgSetDenomMetadataResponse {
		const message = createBaseMsgSetDenomMetadataResponse();
		return message;
	}
};

export const MsgUpdateDenom: MessageFns<MsgUpdateDenom, "seiprotocol.seichain.tokenfactory.MsgUpdateDenom"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgUpdateDenom" as const,

	encode(message: MsgUpdateDenom, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.sender !== "") {
			writer.uint32(10).string(message.sender);
		}
		if (message.denom !== "") {
			writer.uint32(18).string(message.denom);
		}
		if (message.allow_list !== undefined) {
			AllowList.encode(message.allow_list, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenom {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateDenom();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sender = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.denom = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.allow_list = AllowList.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateDenom {
		return {
			sender: isSet(object.sender) ? globalThis.String(object.sender) : "",
			denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
			allow_list: isSet(object.allow_list) ? AllowList.fromJSON(object.allow_list) : undefined
		};
	},

	toJSON(message: MsgUpdateDenom): unknown {
		const obj: any = {};
		if (message.sender !== "") {
			obj.sender = message.sender;
		}
		if (message.denom !== "") {
			obj.denom = message.denom;
		}
		if (message.allow_list !== undefined) {
			obj.allow_list = AllowList.toJSON(message.allow_list);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(base?: I): MsgUpdateDenom {
		return MsgUpdateDenom.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUpdateDenom>, I>>(object: I): MsgUpdateDenom {
		const message = createBaseMsgUpdateDenom();
		message.sender = object.sender ?? "";
		message.denom = object.denom ?? "";
		message.allow_list = object.allow_list !== undefined && object.allow_list !== null ? AllowList.fromPartial(object.allow_list) : undefined;
		return message;
	}
};

export const MsgUpdateDenomResponse: MessageFns<MsgUpdateDenomResponse, "seiprotocol.seichain.tokenfactory.MsgUpdateDenomResponse"> = {
	$type: "seiprotocol.seichain.tokenfactory.MsgUpdateDenomResponse" as const,

	encode(_: MsgUpdateDenomResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDenomResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgUpdateDenomResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): MsgUpdateDenomResponse {
		return {};
	},

	toJSON(_: MsgUpdateDenomResponse): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(base?: I): MsgUpdateDenomResponse {
		return MsgUpdateDenomResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgUpdateDenomResponse>, I>>(_: I): MsgUpdateDenomResponse {
		const message = createBaseMsgUpdateDenomResponse();
		return message;
	}
};

function createBaseMsgCreateDenom(): MsgCreateDenom {
	return { sender: "", subdenom: "", allow_list: undefined };
}

function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
	return { new_token_denom: "" };
}

function createBaseMsgMint(): MsgMint {
	return { sender: "", amount: undefined };
}

function createBaseMsgMintResponse(): MsgMintResponse {
	return {};
}

function createBaseMsgBurn(): MsgBurn {
	return { sender: "", amount: undefined };
}

function createBaseMsgBurnResponse(): MsgBurnResponse {
	return {};
}

function createBaseMsgChangeAdmin(): MsgChangeAdmin {
	return { sender: "", denom: "", new_admin: "" };
}

function createBaseMsgChangeAdminResponse(): MsgChangeAdminResponse {
	return {};
}

function createBaseMsgSetDenomMetadata(): MsgSetDenomMetadata {
	return { sender: "", metadata: undefined };
}

function createBaseMsgSetDenomMetadataResponse(): MsgSetDenomMetadataResponse {
	return {};
}

function createBaseMsgUpdateDenom(): MsgUpdateDenom {
	return { sender: "", denom: "", allow_list: undefined };
}

function createBaseMsgUpdateDenomResponse(): MsgUpdateDenomResponse {
	return {};
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/seiprotocol.seichain.tokenfactory.MsgCreateDenom", MsgCreateDenom as never],
	["/seiprotocol.seichain.tokenfactory.MsgMint", MsgMint as never],
	["/seiprotocol.seichain.tokenfactory.MsgMintResponse", MsgMintResponse as never],
	["/seiprotocol.seichain.tokenfactory.MsgBurn", MsgBurn as never],
	["/seiprotocol.seichain.tokenfactory.MsgBurnResponse", MsgBurnResponse as never],
	["/seiprotocol.seichain.tokenfactory.MsgChangeAdmin", MsgChangeAdmin as never],
	["/seiprotocol.seichain.tokenfactory.MsgUpdateDenom", MsgUpdateDenom as never]
];
export const aminoConverters = {
	"/seiprotocol.seichain.tokenfactory.MsgCreateDenom": {
		aminoType: "tokenfactory/MsgCreateDenom",
		toAmino: (message: MsgCreateDenom) => ({ ...message }),
		fromAmino: (object: MsgCreateDenom) => ({ ...object })
	},

	"/seiprotocol.seichain.tokenfactory.MsgMint": {
		aminoType: "tokenfactory/MsgMint",
		toAmino: (message: MsgMint) => ({ ...message }),
		fromAmino: (object: MsgMint) => ({ ...object })
	},

	"/seiprotocol.seichain.tokenfactory.MsgMintResponse": {
		aminoType: "tokenfactory/MsgMintResponse",
		toAmino: (message: MsgMintResponse) => ({ ...message }),
		fromAmino: (object: MsgMintResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.tokenfactory.MsgBurn": {
		aminoType: "tokenfactory/MsgBurn",
		toAmino: (message: MsgBurn) => ({ ...message }),
		fromAmino: (object: MsgBurn) => ({ ...object })
	},

	"/seiprotocol.seichain.tokenfactory.MsgBurnResponse": {
		aminoType: "tokenfactory/MsgBurnResponse",
		toAmino: (message: MsgBurnResponse) => ({ ...message }),
		fromAmino: (object: MsgBurnResponse) => ({ ...object })
	},

	"/seiprotocol.seichain.tokenfactory.MsgChangeAdmin": {
		aminoType: "tokenfactory/MsgChangeAdmin",
		toAmino: (message: MsgChangeAdmin) => ({ ...message }),
		fromAmino: (object: MsgChangeAdmin) => ({ ...object })
	},

	"/seiprotocol.seichain.tokenfactory.MsgUpdateDenom": {
		aminoType: "tokenfactory/MsgUpdateDenom",
		toAmino: (message: MsgUpdateDenom) => ({ ...message }),
		fromAmino: (object: MsgUpdateDenom) => ({ ...object })
	}
};
