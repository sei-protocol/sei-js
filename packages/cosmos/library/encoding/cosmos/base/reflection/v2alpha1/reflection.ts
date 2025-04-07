import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	AppDescriptor as AppDescriptor_type,
	AuthnDescriptor as AuthnDescriptor_type,
	ChainDescriptor as ChainDescriptor_type,
	CodecDescriptor as CodecDescriptor_type,
	ConfigurationDescriptor as ConfigurationDescriptor_type,
	GetAuthnDescriptorRequest as GetAuthnDescriptorRequest_type,
	GetAuthnDescriptorResponse as GetAuthnDescriptorResponse_type,
	GetChainDescriptorRequest as GetChainDescriptorRequest_type,
	GetChainDescriptorResponse as GetChainDescriptorResponse_type,
	GetCodecDescriptorRequest as GetCodecDescriptorRequest_type,
	GetCodecDescriptorResponse as GetCodecDescriptorResponse_type,
	GetConfigurationDescriptorRequest as GetConfigurationDescriptorRequest_type,
	GetConfigurationDescriptorResponse as GetConfigurationDescriptorResponse_type,
	GetQueryServicesDescriptorRequest as GetQueryServicesDescriptorRequest_type,
	GetQueryServicesDescriptorResponse as GetQueryServicesDescriptorResponse_type,
	GetTxDescriptorRequest as GetTxDescriptorRequest_type,
	GetTxDescriptorResponse as GetTxDescriptorResponse_type,
	InterfaceAcceptingMessageDescriptor as InterfaceAcceptingMessageDescriptor_type,
	InterfaceDescriptor as InterfaceDescriptor_type,
	InterfaceImplementerDescriptor as InterfaceImplementerDescriptor_type,
	MsgDescriptor as MsgDescriptor_type,
	QueryMethodDescriptor as QueryMethodDescriptor_type,
	QueryServiceDescriptor as QueryServiceDescriptor_type,
	QueryServicesDescriptor as QueryServicesDescriptor_type,
	SigningModeDescriptor as SigningModeDescriptor_type,
	TxDescriptor as TxDescriptor_type
} from "../../../../../types/cosmos/base/reflection/v2alpha1";

import type { DeepPartial, Exact, MessageFns } from "../../../../common";

export interface AppDescriptor extends AppDescriptor_type {}
export interface TxDescriptor extends TxDescriptor_type {}
export interface AuthnDescriptor extends AuthnDescriptor_type {}
export interface SigningModeDescriptor extends SigningModeDescriptor_type {}
export interface ChainDescriptor extends ChainDescriptor_type {}
export interface CodecDescriptor extends CodecDescriptor_type {}
export interface InterfaceDescriptor extends InterfaceDescriptor_type {}
export interface InterfaceImplementerDescriptor extends InterfaceImplementerDescriptor_type {}
export interface InterfaceAcceptingMessageDescriptor extends InterfaceAcceptingMessageDescriptor_type {}
export interface ConfigurationDescriptor extends ConfigurationDescriptor_type {}
export interface MsgDescriptor extends MsgDescriptor_type {}
export interface GetAuthnDescriptorRequest extends GetAuthnDescriptorRequest_type {}
export interface GetAuthnDescriptorResponse extends GetAuthnDescriptorResponse_type {}
export interface GetChainDescriptorRequest extends GetChainDescriptorRequest_type {}
export interface GetChainDescriptorResponse extends GetChainDescriptorResponse_type {}
export interface GetCodecDescriptorRequest extends GetCodecDescriptorRequest_type {}
export interface GetCodecDescriptorResponse extends GetCodecDescriptorResponse_type {}
export interface GetConfigurationDescriptorRequest extends GetConfigurationDescriptorRequest_type {}
export interface GetConfigurationDescriptorResponse extends GetConfigurationDescriptorResponse_type {}
export interface GetQueryServicesDescriptorRequest extends GetQueryServicesDescriptorRequest_type {}
export interface GetQueryServicesDescriptorResponse extends GetQueryServicesDescriptorResponse_type {}
export interface GetTxDescriptorRequest extends GetTxDescriptorRequest_type {}
export interface GetTxDescriptorResponse extends GetTxDescriptorResponse_type {}
export interface QueryServicesDescriptor extends QueryServicesDescriptor_type {}
export interface QueryServiceDescriptor extends QueryServiceDescriptor_type {}
export interface QueryMethodDescriptor extends QueryMethodDescriptor_type {}

export const AppDescriptor: MessageFns<AppDescriptor, "cosmos.base.reflection.v2alpha1.AppDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.AppDescriptor" as const,

	encode(message: AppDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.authn !== undefined) {
			AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).join();
		}
		if (message.chain !== undefined) {
			ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).join();
		}
		if (message.codec !== undefined) {
			CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).join();
		}
		if (message.configuration !== undefined) {
			ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).join();
		}
		if (message.query_services !== undefined) {
			QueryServicesDescriptor.encode(message.query_services, writer.uint32(42).fork()).join();
		}
		if (message.tx !== undefined) {
			TxDescriptor.encode(message.tx, writer.uint32(50).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AppDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAppDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.authn = AuthnDescriptor.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.chain = ChainDescriptor.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.codec = CodecDescriptor.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.query_services = QueryServicesDescriptor.decode(reader, reader.uint32());
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.tx = TxDescriptor.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AppDescriptor {
		return {
			authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
			chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
			codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
			configuration: isSet(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
			query_services: isSet(object.query_services) ? QueryServicesDescriptor.fromJSON(object.query_services) : undefined,
			tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
		};
	},

	toJSON(message: AppDescriptor): unknown {
		const obj: any = {};
		if (message.authn !== undefined) {
			obj.authn = AuthnDescriptor.toJSON(message.authn);
		}
		if (message.chain !== undefined) {
			obj.chain = ChainDescriptor.toJSON(message.chain);
		}
		if (message.codec !== undefined) {
			obj.codec = CodecDescriptor.toJSON(message.codec);
		}
		if (message.configuration !== undefined) {
			obj.configuration = ConfigurationDescriptor.toJSON(message.configuration);
		}
		if (message.query_services !== undefined) {
			obj.query_services = QueryServicesDescriptor.toJSON(message.query_services);
		}
		if (message.tx !== undefined) {
			obj.tx = TxDescriptor.toJSON(message.tx);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AppDescriptor>, I>>(base?: I): AppDescriptor {
		return AppDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AppDescriptor>, I>>(object: I): AppDescriptor {
		const message = createBaseAppDescriptor();
		message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
		message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
		message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
		message.configuration =
			object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
		message.query_services =
			object.query_services !== undefined && object.query_services !== null ? QueryServicesDescriptor.fromPartial(object.query_services) : undefined;
		message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
		return message;
	}
};

export const TxDescriptor: MessageFns<TxDescriptor, "cosmos.base.reflection.v2alpha1.TxDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.TxDescriptor" as const,

	encode(message: TxDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.fullname !== "") {
			writer.uint32(10).string(message.fullname);
		}
		for (const v of message.msgs) {
			MsgDescriptor.encode(v!, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): TxDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseTxDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.fullname = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): TxDescriptor {
		return {
			fullname: isSet(object.fullname) ? globalThis.String(object.fullname) : "",
			msgs: globalThis.Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgDescriptor.fromJSON(e)) : []
		};
	},

	toJSON(message: TxDescriptor): unknown {
		const obj: any = {};
		if (message.fullname !== "") {
			obj.fullname = message.fullname;
		}
		if (message.msgs?.length) {
			obj.msgs = message.msgs.map((e) => MsgDescriptor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<TxDescriptor>, I>>(base?: I): TxDescriptor {
		return TxDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<TxDescriptor>, I>>(object: I): TxDescriptor {
		const message = createBaseTxDescriptor();
		message.fullname = object.fullname ?? "";
		message.msgs = object.msgs?.map((e) => MsgDescriptor.fromPartial(e)) || [];
		return message;
	}
};

export const AuthnDescriptor: MessageFns<AuthnDescriptor, "cosmos.base.reflection.v2alpha1.AuthnDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.AuthnDescriptor" as const,

	encode(message: AuthnDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.sign_modes) {
			SigningModeDescriptor.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): AuthnDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseAuthnDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sign_modes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): AuthnDescriptor {
		return {
			sign_modes: globalThis.Array.isArray(object?.sign_modes) ? object.sign_modes.map((e: any) => SigningModeDescriptor.fromJSON(e)) : []
		};
	},

	toJSON(message: AuthnDescriptor): unknown {
		const obj: any = {};
		if (message.sign_modes?.length) {
			obj.sign_modes = message.sign_modes.map((e) => SigningModeDescriptor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<AuthnDescriptor>, I>>(base?: I): AuthnDescriptor {
		return AuthnDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<AuthnDescriptor>, I>>(object: I): AuthnDescriptor {
		const message = createBaseAuthnDescriptor();
		message.sign_modes = object.sign_modes?.map((e) => SigningModeDescriptor.fromPartial(e)) || [];
		return message;
	}
};

export const SigningModeDescriptor: MessageFns<SigningModeDescriptor, "cosmos.base.reflection.v2alpha1.SigningModeDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.SigningModeDescriptor" as const,

	encode(message: SigningModeDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.number !== 0) {
			writer.uint32(16).int32(message.number);
		}
		if (message.authn_info_provider_method_fullname !== "") {
			writer.uint32(26).string(message.authn_info_provider_method_fullname);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SigningModeDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSigningModeDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.number = reader.int32();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.authn_info_provider_method_fullname = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SigningModeDescriptor {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			number: isSet(object.number) ? globalThis.Number(object.number) : 0,
			authn_info_provider_method_fullname: isSet(object.authn_info_provider_method_fullname)
				? globalThis.String(object.authn_info_provider_method_fullname)
				: ""
		};
	},

	toJSON(message: SigningModeDescriptor): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.number !== 0) {
			obj.number = Math.round(message.number);
		}
		if (message.authn_info_provider_method_fullname !== "") {
			obj.authn_info_provider_method_fullname = message.authn_info_provider_method_fullname;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SigningModeDescriptor>, I>>(base?: I): SigningModeDescriptor {
		return SigningModeDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SigningModeDescriptor>, I>>(object: I): SigningModeDescriptor {
		const message = createBaseSigningModeDescriptor();
		message.name = object.name ?? "";
		message.number = object.number ?? 0;
		message.authn_info_provider_method_fullname = object.authn_info_provider_method_fullname ?? "";
		return message;
	}
};

export const ChainDescriptor: MessageFns<ChainDescriptor, "cosmos.base.reflection.v2alpha1.ChainDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.ChainDescriptor" as const,

	encode(message: ChainDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.id !== "") {
			writer.uint32(10).string(message.id);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ChainDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseChainDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.id = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ChainDescriptor {
		return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
	},

	toJSON(message: ChainDescriptor): unknown {
		const obj: any = {};
		if (message.id !== "") {
			obj.id = message.id;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ChainDescriptor>, I>>(base?: I): ChainDescriptor {
		return ChainDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ChainDescriptor>, I>>(object: I): ChainDescriptor {
		const message = createBaseChainDescriptor();
		message.id = object.id ?? "";
		return message;
	}
};

export const CodecDescriptor: MessageFns<CodecDescriptor, "cosmos.base.reflection.v2alpha1.CodecDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.CodecDescriptor" as const,

	encode(message: CodecDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.interfaces) {
			InterfaceDescriptor.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): CodecDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseCodecDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): CodecDescriptor {
		return {
			interfaces: globalThis.Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => InterfaceDescriptor.fromJSON(e)) : []
		};
	},

	toJSON(message: CodecDescriptor): unknown {
		const obj: any = {};
		if (message.interfaces?.length) {
			obj.interfaces = message.interfaces.map((e) => InterfaceDescriptor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<CodecDescriptor>, I>>(base?: I): CodecDescriptor {
		return CodecDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<CodecDescriptor>, I>>(object: I): CodecDescriptor {
		const message = createBaseCodecDescriptor();
		message.interfaces = object.interfaces?.map((e) => InterfaceDescriptor.fromPartial(e)) || [];
		return message;
	}
};

export const InterfaceDescriptor: MessageFns<InterfaceDescriptor, "cosmos.base.reflection.v2alpha1.InterfaceDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.InterfaceDescriptor" as const,

	encode(message: InterfaceDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.fullname !== "") {
			writer.uint32(10).string(message.fullname);
		}
		for (const v of message.interface_accepting_messages) {
			InterfaceAcceptingMessageDescriptor.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.interface_implementers) {
			InterfaceImplementerDescriptor.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): InterfaceDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInterfaceDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.fullname = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.interface_accepting_messages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.interface_implementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InterfaceDescriptor {
		return {
			fullname: isSet(object.fullname) ? globalThis.String(object.fullname) : "",
			interface_accepting_messages: globalThis.Array.isArray(object?.interface_accepting_messages)
				? object.interface_accepting_messages.map((e: any) => InterfaceAcceptingMessageDescriptor.fromJSON(e))
				: [],
			interface_implementers: globalThis.Array.isArray(object?.interface_implementers)
				? object.interface_implementers.map((e: any) => InterfaceImplementerDescriptor.fromJSON(e))
				: []
		};
	},

	toJSON(message: InterfaceDescriptor): unknown {
		const obj: any = {};
		if (message.fullname !== "") {
			obj.fullname = message.fullname;
		}
		if (message.interface_accepting_messages?.length) {
			obj.interface_accepting_messages = message.interface_accepting_messages.map((e) => InterfaceAcceptingMessageDescriptor.toJSON(e));
		}
		if (message.interface_implementers?.length) {
			obj.interface_implementers = message.interface_implementers.map((e) => InterfaceImplementerDescriptor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InterfaceDescriptor>, I>>(base?: I): InterfaceDescriptor {
		return InterfaceDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InterfaceDescriptor>, I>>(object: I): InterfaceDescriptor {
		const message = createBaseInterfaceDescriptor();
		message.fullname = object.fullname ?? "";
		message.interface_accepting_messages = object.interface_accepting_messages?.map((e) => InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
		message.interface_implementers = object.interface_implementers?.map((e) => InterfaceImplementerDescriptor.fromPartial(e)) || [];
		return message;
	}
};

export const InterfaceImplementerDescriptor: MessageFns<InterfaceImplementerDescriptor, "cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor" as const,

	encode(message: InterfaceImplementerDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.fullname !== "") {
			writer.uint32(10).string(message.fullname);
		}
		if (message.type_url !== "") {
			writer.uint32(18).string(message.type_url);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): InterfaceImplementerDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInterfaceImplementerDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.fullname = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.type_url = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InterfaceImplementerDescriptor {
		return {
			fullname: isSet(object.fullname) ? globalThis.String(object.fullname) : "",
			type_url: isSet(object.type_url) ? globalThis.String(object.type_url) : ""
		};
	},

	toJSON(message: InterfaceImplementerDescriptor): unknown {
		const obj: any = {};
		if (message.fullname !== "") {
			obj.fullname = message.fullname;
		}
		if (message.type_url !== "") {
			obj.type_url = message.type_url;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InterfaceImplementerDescriptor>, I>>(base?: I): InterfaceImplementerDescriptor {
		return InterfaceImplementerDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InterfaceImplementerDescriptor>, I>>(object: I): InterfaceImplementerDescriptor {
		const message = createBaseInterfaceImplementerDescriptor();
		message.fullname = object.fullname ?? "";
		message.type_url = object.type_url ?? "";
		return message;
	}
};

export const InterfaceAcceptingMessageDescriptor: MessageFns<
	InterfaceAcceptingMessageDescriptor,
	"cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor"
> = {
	$type: "cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor" as const,

	encode(message: InterfaceAcceptingMessageDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.fullname !== "") {
			writer.uint32(10).string(message.fullname);
		}
		for (const v of message.field_descriptor_names) {
			writer.uint32(18).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInterfaceAcceptingMessageDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.fullname = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.field_descriptor_names.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InterfaceAcceptingMessageDescriptor {
		return {
			fullname: isSet(object.fullname) ? globalThis.String(object.fullname) : "",
			field_descriptor_names: globalThis.Array.isArray(object?.field_descriptor_names)
				? object.field_descriptor_names.map((e: any) => globalThis.String(e))
				: []
		};
	},

	toJSON(message: InterfaceAcceptingMessageDescriptor): unknown {
		const obj: any = {};
		if (message.fullname !== "") {
			obj.fullname = message.fullname;
		}
		if (message.field_descriptor_names?.length) {
			obj.field_descriptor_names = message.field_descriptor_names;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InterfaceAcceptingMessageDescriptor>, I>>(base?: I): InterfaceAcceptingMessageDescriptor {
		return InterfaceAcceptingMessageDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InterfaceAcceptingMessageDescriptor>, I>>(object: I): InterfaceAcceptingMessageDescriptor {
		const message = createBaseInterfaceAcceptingMessageDescriptor();
		message.fullname = object.fullname ?? "";
		message.field_descriptor_names = object.field_descriptor_names?.map((e) => e) || [];
		return message;
	}
};

export const ConfigurationDescriptor: MessageFns<ConfigurationDescriptor, "cosmos.base.reflection.v2alpha1.ConfigurationDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.ConfigurationDescriptor" as const,

	encode(message: ConfigurationDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.bech32_account_address_prefix !== "") {
			writer.uint32(10).string(message.bech32_account_address_prefix);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ConfigurationDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseConfigurationDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.bech32_account_address_prefix = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ConfigurationDescriptor {
		return {
			bech32_account_address_prefix: isSet(object.bech32_account_address_prefix) ? globalThis.String(object.bech32_account_address_prefix) : ""
		};
	},

	toJSON(message: ConfigurationDescriptor): unknown {
		const obj: any = {};
		if (message.bech32_account_address_prefix !== "") {
			obj.bech32_account_address_prefix = message.bech32_account_address_prefix;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ConfigurationDescriptor>, I>>(base?: I): ConfigurationDescriptor {
		return ConfigurationDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ConfigurationDescriptor>, I>>(object: I): ConfigurationDescriptor {
		const message = createBaseConfigurationDescriptor();
		message.bech32_account_address_prefix = object.bech32_account_address_prefix ?? "";
		return message;
	}
};

export const MsgDescriptor: MessageFns<MsgDescriptor, "cosmos.base.reflection.v2alpha1.MsgDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.MsgDescriptor" as const,

	encode(message: MsgDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.msg_type_url !== "") {
			writer.uint32(10).string(message.msg_type_url);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MsgDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMsgDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.msg_type_url = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MsgDescriptor {
		return { msg_type_url: isSet(object.msg_type_url) ? globalThis.String(object.msg_type_url) : "" };
	},

	toJSON(message: MsgDescriptor): unknown {
		const obj: any = {};
		if (message.msg_type_url !== "") {
			obj.msg_type_url = message.msg_type_url;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MsgDescriptor>, I>>(base?: I): MsgDescriptor {
		return MsgDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MsgDescriptor>, I>>(object: I): MsgDescriptor {
		const message = createBaseMsgDescriptor();
		message.msg_type_url = object.msg_type_url ?? "";
		return message;
	}
};

export const GetAuthnDescriptorRequest: MessageFns<GetAuthnDescriptorRequest, "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest" as const,

	encode(_: GetAuthnDescriptorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetAuthnDescriptorRequest();
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

	fromJSON(_: any): GetAuthnDescriptorRequest {
		return {};
	},

	toJSON(_: GetAuthnDescriptorRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetAuthnDescriptorRequest>, I>>(base?: I): GetAuthnDescriptorRequest {
		return GetAuthnDescriptorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorRequest>, I>>(_: I): GetAuthnDescriptorRequest {
		const message = createBaseGetAuthnDescriptorRequest();
		return message;
	}
};

export const GetAuthnDescriptorResponse: MessageFns<GetAuthnDescriptorResponse, "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse" as const,

	encode(message: GetAuthnDescriptorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.authn !== undefined) {
			AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetAuthnDescriptorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.authn = AuthnDescriptor.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetAuthnDescriptorResponse {
		return { authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined };
	},

	toJSON(message: GetAuthnDescriptorResponse): unknown {
		const obj: any = {};
		if (message.authn !== undefined) {
			obj.authn = AuthnDescriptor.toJSON(message.authn);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetAuthnDescriptorResponse>, I>>(base?: I): GetAuthnDescriptorResponse {
		return GetAuthnDescriptorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorResponse>, I>>(object: I): GetAuthnDescriptorResponse {
		const message = createBaseGetAuthnDescriptorResponse();
		message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
		return message;
	}
};

export const GetChainDescriptorRequest: MessageFns<GetChainDescriptorRequest, "cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest" as const,

	encode(_: GetChainDescriptorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetChainDescriptorRequest();
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

	fromJSON(_: any): GetChainDescriptorRequest {
		return {};
	},

	toJSON(_: GetChainDescriptorRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetChainDescriptorRequest>, I>>(base?: I): GetChainDescriptorRequest {
		return GetChainDescriptorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetChainDescriptorRequest>, I>>(_: I): GetChainDescriptorRequest {
		const message = createBaseGetChainDescriptorRequest();
		return message;
	}
};

export const GetChainDescriptorResponse: MessageFns<GetChainDescriptorResponse, "cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse" as const,

	encode(message: GetChainDescriptorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.chain !== undefined) {
			ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetChainDescriptorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.chain = ChainDescriptor.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetChainDescriptorResponse {
		return { chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined };
	},

	toJSON(message: GetChainDescriptorResponse): unknown {
		const obj: any = {};
		if (message.chain !== undefined) {
			obj.chain = ChainDescriptor.toJSON(message.chain);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetChainDescriptorResponse>, I>>(base?: I): GetChainDescriptorResponse {
		return GetChainDescriptorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetChainDescriptorResponse>, I>>(object: I): GetChainDescriptorResponse {
		const message = createBaseGetChainDescriptorResponse();
		message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
		return message;
	}
};

export const GetCodecDescriptorRequest: MessageFns<GetCodecDescriptorRequest, "cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest" as const,

	encode(_: GetCodecDescriptorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetCodecDescriptorRequest();
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

	fromJSON(_: any): GetCodecDescriptorRequest {
		return {};
	},

	toJSON(_: GetCodecDescriptorRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetCodecDescriptorRequest>, I>>(base?: I): GetCodecDescriptorRequest {
		return GetCodecDescriptorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorRequest>, I>>(_: I): GetCodecDescriptorRequest {
		const message = createBaseGetCodecDescriptorRequest();
		return message;
	}
};

export const GetCodecDescriptorResponse: MessageFns<GetCodecDescriptorResponse, "cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse" as const,

	encode(message: GetCodecDescriptorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.codec !== undefined) {
			CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetCodecDescriptorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.codec = CodecDescriptor.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetCodecDescriptorResponse {
		return { codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined };
	},

	toJSON(message: GetCodecDescriptorResponse): unknown {
		const obj: any = {};
		if (message.codec !== undefined) {
			obj.codec = CodecDescriptor.toJSON(message.codec);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetCodecDescriptorResponse>, I>>(base?: I): GetCodecDescriptorResponse {
		return GetCodecDescriptorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorResponse>, I>>(object: I): GetCodecDescriptorResponse {
		const message = createBaseGetCodecDescriptorResponse();
		message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
		return message;
	}
};

export const GetConfigurationDescriptorRequest: MessageFns<
	GetConfigurationDescriptorRequest,
	"cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest"
> = {
	$type: "cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest" as const,

	encode(_: GetConfigurationDescriptorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetConfigurationDescriptorRequest();
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

	fromJSON(_: any): GetConfigurationDescriptorRequest {
		return {};
	},

	toJSON(_: GetConfigurationDescriptorRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetConfigurationDescriptorRequest>, I>>(base?: I): GetConfigurationDescriptorRequest {
		return GetConfigurationDescriptorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetConfigurationDescriptorRequest>, I>>(_: I): GetConfigurationDescriptorRequest {
		const message = createBaseGetConfigurationDescriptorRequest();
		return message;
	}
};

export const GetConfigurationDescriptorResponse: MessageFns<
	GetConfigurationDescriptorResponse,
	"cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse"
> = {
	$type: "cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse" as const,

	encode(message: GetConfigurationDescriptorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.config !== undefined) {
			ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetConfigurationDescriptorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetConfigurationDescriptorResponse {
		return { config: isSet(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined };
	},

	toJSON(message: GetConfigurationDescriptorResponse): unknown {
		const obj: any = {};
		if (message.config !== undefined) {
			obj.config = ConfigurationDescriptor.toJSON(message.config);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetConfigurationDescriptorResponse>, I>>(base?: I): GetConfigurationDescriptorResponse {
		return GetConfigurationDescriptorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetConfigurationDescriptorResponse>, I>>(object: I): GetConfigurationDescriptorResponse {
		const message = createBaseGetConfigurationDescriptorResponse();
		message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
		return message;
	}
};

export const GetQueryServicesDescriptorRequest: MessageFns<
	GetQueryServicesDescriptorRequest,
	"cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest"
> = {
	$type: "cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest" as const,

	encode(_: GetQueryServicesDescriptorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetQueryServicesDescriptorRequest();
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

	fromJSON(_: any): GetQueryServicesDescriptorRequest {
		return {};
	},

	toJSON(_: GetQueryServicesDescriptorRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetQueryServicesDescriptorRequest>, I>>(base?: I): GetQueryServicesDescriptorRequest {
		return GetQueryServicesDescriptorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetQueryServicesDescriptorRequest>, I>>(_: I): GetQueryServicesDescriptorRequest {
		const message = createBaseGetQueryServicesDescriptorRequest();
		return message;
	}
};

export const GetQueryServicesDescriptorResponse: MessageFns<
	GetQueryServicesDescriptorResponse,
	"cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse"
> = {
	$type: "cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse" as const,

	encode(message: GetQueryServicesDescriptorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.queries !== undefined) {
			QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetQueryServicesDescriptorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetQueryServicesDescriptorResponse {
		return { queries: isSet(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined };
	},

	toJSON(message: GetQueryServicesDescriptorResponse): unknown {
		const obj: any = {};
		if (message.queries !== undefined) {
			obj.queries = QueryServicesDescriptor.toJSON(message.queries);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetQueryServicesDescriptorResponse>, I>>(base?: I): GetQueryServicesDescriptorResponse {
		return GetQueryServicesDescriptorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetQueryServicesDescriptorResponse>, I>>(object: I): GetQueryServicesDescriptorResponse {
		const message = createBaseGetQueryServicesDescriptorResponse();
		message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
		return message;
	}
};

export const GetTxDescriptorRequest: MessageFns<GetTxDescriptorRequest, "cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest" as const,

	encode(_: GetTxDescriptorRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorRequest {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxDescriptorRequest();
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

	fromJSON(_: any): GetTxDescriptorRequest {
		return {};
	},

	toJSON(_: GetTxDescriptorRequest): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxDescriptorRequest>, I>>(base?: I): GetTxDescriptorRequest {
		return GetTxDescriptorRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxDescriptorRequest>, I>>(_: I): GetTxDescriptorRequest {
		const message = createBaseGetTxDescriptorRequest();
		return message;
	}
};

export const GetTxDescriptorResponse: MessageFns<GetTxDescriptorResponse, "cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse"> = {
	$type: "cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse" as const,

	encode(message: GetTxDescriptorResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.tx !== undefined) {
			TxDescriptor.encode(message.tx, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorResponse {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGetTxDescriptorResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.tx = TxDescriptor.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GetTxDescriptorResponse {
		return { tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined };
	},

	toJSON(message: GetTxDescriptorResponse): unknown {
		const obj: any = {};
		if (message.tx !== undefined) {
			obj.tx = TxDescriptor.toJSON(message.tx);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GetTxDescriptorResponse>, I>>(base?: I): GetTxDescriptorResponse {
		return GetTxDescriptorResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GetTxDescriptorResponse>, I>>(object: I): GetTxDescriptorResponse {
		const message = createBaseGetTxDescriptorResponse();
		message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
		return message;
	}
};

export const QueryServicesDescriptor: MessageFns<QueryServicesDescriptor, "cosmos.base.reflection.v2alpha1.QueryServicesDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.QueryServicesDescriptor" as const,

	encode(message: QueryServicesDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.query_services) {
			QueryServiceDescriptor.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryServicesDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.query_services.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryServicesDescriptor {
		return {
			query_services: globalThis.Array.isArray(object?.query_services) ? object.query_services.map((e: any) => QueryServiceDescriptor.fromJSON(e)) : []
		};
	},

	toJSON(message: QueryServicesDescriptor): unknown {
		const obj: any = {};
		if (message.query_services?.length) {
			obj.query_services = message.query_services.map((e) => QueryServiceDescriptor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryServicesDescriptor>, I>>(base?: I): QueryServicesDescriptor {
		return QueryServicesDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryServicesDescriptor>, I>>(object: I): QueryServicesDescriptor {
		const message = createBaseQueryServicesDescriptor();
		message.query_services = object.query_services?.map((e) => QueryServiceDescriptor.fromPartial(e)) || [];
		return message;
	}
};

export const QueryServiceDescriptor: MessageFns<QueryServiceDescriptor, "cosmos.base.reflection.v2alpha1.QueryServiceDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.QueryServiceDescriptor" as const,

	encode(message: QueryServiceDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.fullname !== "") {
			writer.uint32(10).string(message.fullname);
		}
		if (message.is_module !== false) {
			writer.uint32(16).bool(message.is_module);
		}
		for (const v of message.methods) {
			QueryMethodDescriptor.encode(v!, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryServiceDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.fullname = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.is_module = reader.bool();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryServiceDescriptor {
		return {
			fullname: isSet(object.fullname) ? globalThis.String(object.fullname) : "",
			is_module: isSet(object.is_module) ? globalThis.Boolean(object.is_module) : false,
			methods: globalThis.Array.isArray(object?.methods) ? object.methods.map((e: any) => QueryMethodDescriptor.fromJSON(e)) : []
		};
	},

	toJSON(message: QueryServiceDescriptor): unknown {
		const obj: any = {};
		if (message.fullname !== "") {
			obj.fullname = message.fullname;
		}
		if (message.is_module !== false) {
			obj.is_module = message.is_module;
		}
		if (message.methods?.length) {
			obj.methods = message.methods.map((e) => QueryMethodDescriptor.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryServiceDescriptor>, I>>(base?: I): QueryServiceDescriptor {
		return QueryServiceDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryServiceDescriptor>, I>>(object: I): QueryServiceDescriptor {
		const message = createBaseQueryServiceDescriptor();
		message.fullname = object.fullname ?? "";
		message.is_module = object.is_module ?? false;
		message.methods = object.methods?.map((e) => QueryMethodDescriptor.fromPartial(e)) || [];
		return message;
	}
};

export const QueryMethodDescriptor: MessageFns<QueryMethodDescriptor, "cosmos.base.reflection.v2alpha1.QueryMethodDescriptor"> = {
	$type: "cosmos.base.reflection.v2alpha1.QueryMethodDescriptor" as const,

	encode(message: QueryMethodDescriptor, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.full_query_path !== "") {
			writer.uint32(18).string(message.full_query_path);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): QueryMethodDescriptor {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQueryMethodDescriptor();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.full_query_path = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QueryMethodDescriptor {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			full_query_path: isSet(object.full_query_path) ? globalThis.String(object.full_query_path) : ""
		};
	},

	toJSON(message: QueryMethodDescriptor): unknown {
		const obj: any = {};
		if (message.name !== "") {
			obj.name = message.name;
		}
		if (message.full_query_path !== "") {
			obj.full_query_path = message.full_query_path;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QueryMethodDescriptor>, I>>(base?: I): QueryMethodDescriptor {
		return QueryMethodDescriptor.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QueryMethodDescriptor>, I>>(object: I): QueryMethodDescriptor {
		const message = createBaseQueryMethodDescriptor();
		message.name = object.name ?? "";
		message.full_query_path = object.full_query_path ?? "";
		return message;
	}
};

function createBaseAppDescriptor(): AppDescriptor {
	return {
		authn: undefined,
		chain: undefined,
		codec: undefined,
		configuration: undefined,
		query_services: undefined,
		tx: undefined
	};
}

function createBaseTxDescriptor(): TxDescriptor {
	return { fullname: "", msgs: [] };
}

function createBaseAuthnDescriptor(): AuthnDescriptor {
	return { sign_modes: [] };
}

function createBaseSigningModeDescriptor(): SigningModeDescriptor {
	return { name: "", number: 0, authn_info_provider_method_fullname: "" };
}

function createBaseChainDescriptor(): ChainDescriptor {
	return { id: "" };
}

function createBaseCodecDescriptor(): CodecDescriptor {
	return { interfaces: [] };
}

function createBaseInterfaceDescriptor(): InterfaceDescriptor {
	return { fullname: "", interface_accepting_messages: [], interface_implementers: [] };
}

function createBaseInterfaceImplementerDescriptor(): InterfaceImplementerDescriptor {
	return { fullname: "", type_url: "" };
}

function createBaseInterfaceAcceptingMessageDescriptor(): InterfaceAcceptingMessageDescriptor {
	return { fullname: "", field_descriptor_names: [] };
}

function createBaseConfigurationDescriptor(): ConfigurationDescriptor {
	return { bech32_account_address_prefix: "" };
}

function createBaseMsgDescriptor(): MsgDescriptor {
	return { msg_type_url: "" };
}

function createBaseGetAuthnDescriptorRequest(): GetAuthnDescriptorRequest {
	return {};
}

function createBaseGetAuthnDescriptorResponse(): GetAuthnDescriptorResponse {
	return { authn: undefined };
}

function createBaseGetChainDescriptorRequest(): GetChainDescriptorRequest {
	return {};
}

function createBaseGetChainDescriptorResponse(): GetChainDescriptorResponse {
	return { chain: undefined };
}

function createBaseGetCodecDescriptorRequest(): GetCodecDescriptorRequest {
	return {};
}

function createBaseGetCodecDescriptorResponse(): GetCodecDescriptorResponse {
	return { codec: undefined };
}

function createBaseGetConfigurationDescriptorRequest(): GetConfigurationDescriptorRequest {
	return {};
}

function createBaseGetConfigurationDescriptorResponse(): GetConfigurationDescriptorResponse {
	return { config: undefined };
}

function createBaseGetQueryServicesDescriptorRequest(): GetQueryServicesDescriptorRequest {
	return {};
}

function createBaseGetQueryServicesDescriptorResponse(): GetQueryServicesDescriptorResponse {
	return { queries: undefined };
}

function createBaseGetTxDescriptorRequest(): GetTxDescriptorRequest {
	return {};
}

function createBaseGetTxDescriptorResponse(): GetTxDescriptorResponse {
	return { tx: undefined };
}

function createBaseQueryServicesDescriptor(): QueryServicesDescriptor {
	return { query_services: [] };
}

function createBaseQueryServiceDescriptor(): QueryServiceDescriptor {
	return { fullname: "", is_module: false, methods: [] };
}

function createBaseQueryMethodDescriptor(): QueryMethodDescriptor {
	return { name: "", full_query_path: "" };
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/cosmos.base.reflection.v2alpha1.AppDescriptor", AppDescriptor as never],
	["/cosmos.base.reflection.v2alpha1.TxDescriptor", TxDescriptor as never],
	["/cosmos.base.reflection.v2alpha1.AuthnDescriptor", AuthnDescriptor as never],
	["/cosmos.base.reflection.v2alpha1.ChainDescriptor", ChainDescriptor as never],
	["/cosmos.base.reflection.v2alpha1.CodecDescriptor", CodecDescriptor as never],
	["/cosmos.base.reflection.v2alpha1.MsgDescriptor", MsgDescriptor as never]
];
export const aminoConverters = {
	"/cosmos.base.reflection.v2alpha1.AppDescriptor": {
		aminoType: "cosmos-sdk/AppDescriptor",
		toAmino: (message: AppDescriptor) => ({ ...message }),
		fromAmino: (object: AppDescriptor) => ({ ...object })
	},

	"/cosmos.base.reflection.v2alpha1.TxDescriptor": {
		aminoType: "cosmos-sdk/TxDescriptor",
		toAmino: (message: TxDescriptor) => ({ ...message }),
		fromAmino: (object: TxDescriptor) => ({ ...object })
	},

	"/cosmos.base.reflection.v2alpha1.AuthnDescriptor": {
		aminoType: "cosmos-sdk/AuthnDescriptor",
		toAmino: (message: AuthnDescriptor) => ({ ...message }),
		fromAmino: (object: AuthnDescriptor) => ({ ...object })
	},

	"/cosmos.base.reflection.v2alpha1.ChainDescriptor": {
		aminoType: "cosmos-sdk/ChainDescriptor",
		toAmino: (message: ChainDescriptor) => ({ ...message }),
		fromAmino: (object: ChainDescriptor) => ({ ...object })
	},

	"/cosmos.base.reflection.v2alpha1.CodecDescriptor": {
		aminoType: "cosmos-sdk/CodecDescriptor",
		toAmino: (message: CodecDescriptor) => ({ ...message }),
		fromAmino: (object: CodecDescriptor) => ({ ...object })
	},

	"/cosmos.base.reflection.v2alpha1.MsgDescriptor": {
		aminoType: "cosmos-sdk/MsgDescriptor",
		toAmino: (message: MsgDescriptor) => ({ ...message }),
		fromAmino: (object: MsgDescriptor) => ({ ...object })
	}
};
