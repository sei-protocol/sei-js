import type { GeneratedType } from "@cosmjs/proto-signing";

import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

import type {
	DescriptorProtoExtensionRange as DescriptorProtoExtensionRange_type,
	DescriptorProtoReservedRange as DescriptorProtoReservedRange_type,
	DescriptorProto as DescriptorProto_type,
	EnumDescriptorProtoEnumReservedRange as EnumDescriptorProtoEnumReservedRange_type,
	EnumDescriptorProto as EnumDescriptorProto_type,
	EnumOptions as EnumOptions_type,
	EnumValueDescriptorProto as EnumValueDescriptorProto_type,
	EnumValueOptions as EnumValueOptions_type,
	ExtensionRangeOptionsDeclaration as ExtensionRangeOptionsDeclaration_type,
	ExtensionRangeOptions as ExtensionRangeOptions_type,
	FeatureSetDefaultsFeatureSetEditionDefault as FeatureSetDefaultsFeatureSetEditionDefault_type,
	FeatureSetDefaults as FeatureSetDefaults_type,
	FeatureSet as FeatureSet_type,
	FieldDescriptorProto as FieldDescriptorProto_type,
	FieldOptionsEditionDefault as FieldOptionsEditionDefault_type,
	FieldOptionsFeatureSupport as FieldOptionsFeatureSupport_type,
	FieldOptions as FieldOptions_type,
	FileDescriptorProto as FileDescriptorProto_type,
	FileDescriptorSet as FileDescriptorSet_type,
	FileOptions as FileOptions_type,
	GeneratedCodeInfoAnnotation as GeneratedCodeInfoAnnotation_type,
	GeneratedCodeInfo as GeneratedCodeInfo_type,
	MessageOptions as MessageOptions_type,
	MethodDescriptorProto as MethodDescriptorProto_type,
	MethodOptions as MethodOptions_type,
	OneofDescriptorProto as OneofDescriptorProto_type,
	OneofOptions as OneofOptions_type,
	ServiceDescriptorProto as ServiceDescriptorProto_type,
	ServiceOptions as ServiceOptions_type,
	SourceCodeInfoLocation as SourceCodeInfoLocation_type,
	SourceCodeInfo as SourceCodeInfo_type,
	UninterpretedOptionNamePart as UninterpretedOptionNamePart_type,
	UninterpretedOption as UninterpretedOption_type
} from "../../../types/google/protobuf";

import {
	Edition,
	ExtensionRangeOptionsVerificationState,
	FeatureSetEnumType,
	FeatureSetFieldPresence,
	FeatureSetJsonFormat,
	FeatureSetMessageEncoding,
	FeatureSetRepeatedFieldEncoding,
	FeatureSetUtf8Validation,
	FieldDescriptorProtoLabel,
	FieldDescriptorProtoType,
	FieldOptionsCType,
	FieldOptionsJSType,
	FieldOptionsOptionRetention,
	FieldOptionsOptionTargetType,
	FileOptionsOptimizeMode,
	GeneratedCodeInfoAnnotationSemantic,
	MethodOptionsIdempotencyLevel
} from "../../../types/google/protobuf";

import type { DeepPartial, Exact, MessageFns } from "../../common";

export interface FileDescriptorSet extends FileDescriptorSet_type {}
export interface FileDescriptorProto extends FileDescriptorProto_type {}
export interface DescriptorProto extends DescriptorProto_type {}
export interface DescriptorProtoExtensionRange extends DescriptorProtoExtensionRange_type {}
export interface DescriptorProtoReservedRange extends DescriptorProtoReservedRange_type {}
export interface ExtensionRangeOptions extends ExtensionRangeOptions_type {}
export interface ExtensionRangeOptionsDeclaration extends ExtensionRangeOptionsDeclaration_type {}
export interface FieldDescriptorProto extends FieldDescriptorProto_type {}
export interface OneofDescriptorProto extends OneofDescriptorProto_type {}
export interface EnumDescriptorProto extends EnumDescriptorProto_type {}
export interface EnumDescriptorProtoEnumReservedRange extends EnumDescriptorProtoEnumReservedRange_type {}
export interface EnumValueDescriptorProto extends EnumValueDescriptorProto_type {}
export interface ServiceDescriptorProto extends ServiceDescriptorProto_type {}
export interface MethodDescriptorProto extends MethodDescriptorProto_type {}
export interface FileOptions extends FileOptions_type {}
export interface MessageOptions extends MessageOptions_type {}
export interface FieldOptions extends FieldOptions_type {}
export interface FieldOptionsEditionDefault extends FieldOptionsEditionDefault_type {}
export interface FieldOptionsFeatureSupport extends FieldOptionsFeatureSupport_type {}
export interface OneofOptions extends OneofOptions_type {}
export interface EnumOptions extends EnumOptions_type {}
export interface EnumValueOptions extends EnumValueOptions_type {}
export interface ServiceOptions extends ServiceOptions_type {}
export interface MethodOptions extends MethodOptions_type {}
export interface UninterpretedOption extends UninterpretedOption_type {}
export interface UninterpretedOptionNamePart extends UninterpretedOptionNamePart_type {}
export interface FeatureSet extends FeatureSet_type {}
export interface FeatureSetDefaults extends FeatureSetDefaults_type {}
export interface FeatureSetDefaultsFeatureSetEditionDefault extends FeatureSetDefaultsFeatureSetEditionDefault_type {}
export interface SourceCodeInfo extends SourceCodeInfo_type {}
export interface SourceCodeInfoLocation extends SourceCodeInfoLocation_type {}
export interface GeneratedCodeInfo extends GeneratedCodeInfo_type {}
export interface GeneratedCodeInfoAnnotation extends GeneratedCodeInfoAnnotation_type {}

export const FileDescriptorSet: MessageFns<FileDescriptorSet, "google.protobuf.FileDescriptorSet"> = {
	$type: "google.protobuf.FileDescriptorSet" as const,

	encode(message: FileDescriptorSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.file) {
			FileDescriptorProto.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorSet {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFileDescriptorSet();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FileDescriptorSet {
		return {
			file: globalThis.Array.isArray(object?.file) ? object.file.map((e: any) => FileDescriptorProto.fromJSON(e)) : []
		};
	},

	toJSON(message: FileDescriptorSet): unknown {
		const obj: any = {};
		if (message.file?.length) {
			obj.file = message.file.map((e) => FileDescriptorProto.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FileDescriptorSet>, I>>(base?: I): FileDescriptorSet {
		return FileDescriptorSet.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FileDescriptorSet>, I>>(object: I): FileDescriptorSet {
		const message = createBaseFileDescriptorSet();
		message.file = object.file?.map((e) => FileDescriptorProto.fromPartial(e)) || [];
		return message;
	}
};

export const FileDescriptorProto: MessageFns<FileDescriptorProto, "google.protobuf.FileDescriptorProto"> = {
	$type: "google.protobuf.FileDescriptorProto" as const,

	encode(message: FileDescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.package !== undefined && message.package !== "") {
			writer.uint32(18).string(message.package);
		}
		for (const v of message.dependency) {
			writer.uint32(26).string(v!);
		}
		writer.uint32(82).fork();
		for (const v of message.public_dependency) {
			writer.int32(v);
		}
		writer.join();
		writer.uint32(90).fork();
		for (const v of message.weak_dependency) {
			writer.int32(v);
		}
		writer.join();
		for (const v of message.message_type) {
			DescriptorProto.encode(v!, writer.uint32(34).fork()).join();
		}
		for (const v of message.enum_type) {
			EnumDescriptorProto.encode(v!, writer.uint32(42).fork()).join();
		}
		for (const v of message.service) {
			ServiceDescriptorProto.encode(v!, writer.uint32(50).fork()).join();
		}
		for (const v of message.extension) {
			FieldDescriptorProto.encode(v!, writer.uint32(58).fork()).join();
		}
		if (message.options !== undefined) {
			FileOptions.encode(message.options, writer.uint32(66).fork()).join();
		}
		if (message.source_code_info !== undefined) {
			SourceCodeInfo.encode(message.source_code_info, writer.uint32(74).fork()).join();
		}
		if (message.syntax !== undefined && message.syntax !== "") {
			writer.uint32(98).string(message.syntax);
		}
		if (message.edition !== undefined && message.edition !== 0) {
			writer.uint32(112).int32(message.edition);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FileDescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFileDescriptorProto();
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

					message.package = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.dependency.push(reader.string());
					continue;
				case 10:
					if (tag === 80) {
						message.public_dependency.push(reader.int32());

						continue;
					}

					if (tag === 82) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.public_dependency.push(reader.int32());
						}

						continue;
					}

					break;
				case 11:
					if (tag === 88) {
						message.weak_dependency.push(reader.int32());

						continue;
					}

					if (tag === 90) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.weak_dependency.push(reader.int32());
						}

						continue;
					}

					break;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.message_type.push(DescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.options = FileOptions.decode(reader, reader.uint32());
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.source_code_info = SourceCodeInfo.decode(reader, reader.uint32());
					continue;
				case 12:
					if (tag !== 98) {
						break;
					}

					message.syntax = reader.string();
					continue;
				case 14:
					if (tag !== 112) {
						break;
					}

					message.edition = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FileDescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			package: isSet(object.package) ? globalThis.String(object.package) : "",
			dependency: globalThis.Array.isArray(object?.dependency) ? object.dependency.map((e: any) => globalThis.String(e)) : [],
			public_dependency: globalThis.Array.isArray(object?.public_dependency) ? object.public_dependency.map((e: any) => globalThis.Number(e)) : [],
			weak_dependency: globalThis.Array.isArray(object?.weak_dependency) ? object.weak_dependency.map((e: any) => globalThis.Number(e)) : [],
			message_type: globalThis.Array.isArray(object?.message_type) ? object.message_type.map((e: any) => DescriptorProto.fromJSON(e)) : [],
			enum_type: globalThis.Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e)) : [],
			service: globalThis.Array.isArray(object?.service) ? object.service.map((e: any) => ServiceDescriptorProto.fromJSON(e)) : [],
			extension: globalThis.Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e)) : [],
			options: isSet(object.options) ? FileOptions.fromJSON(object.options) : undefined,
			source_code_info: isSet(object.source_code_info) ? SourceCodeInfo.fromJSON(object.source_code_info) : undefined,
			syntax: isSet(object.syntax) ? globalThis.String(object.syntax) : "",
			edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0
		};
	},

	toJSON(message: FileDescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.package !== undefined && message.package !== "") {
			obj.package = message.package;
		}
		if (message.dependency?.length) {
			obj.dependency = message.dependency;
		}
		if (message.public_dependency?.length) {
			obj.public_dependency = message.public_dependency.map((e) => Math.round(e));
		}
		if (message.weak_dependency?.length) {
			obj.weak_dependency = message.weak_dependency.map((e) => Math.round(e));
		}
		if (message.message_type?.length) {
			obj.message_type = message.message_type.map((e) => DescriptorProto.toJSON(e));
		}
		if (message.enum_type?.length) {
			obj.enum_type = message.enum_type.map((e) => EnumDescriptorProto.toJSON(e));
		}
		if (message.service?.length) {
			obj.service = message.service.map((e) => ServiceDescriptorProto.toJSON(e));
		}
		if (message.extension?.length) {
			obj.extension = message.extension.map((e) => FieldDescriptorProto.toJSON(e));
		}
		if (message.options !== undefined) {
			obj.options = FileOptions.toJSON(message.options);
		}
		if (message.source_code_info !== undefined) {
			obj.source_code_info = SourceCodeInfo.toJSON(message.source_code_info);
		}
		if (message.syntax !== undefined && message.syntax !== "") {
			obj.syntax = message.syntax;
		}
		if (message.edition !== undefined && message.edition !== 0) {
			obj.edition = editionToJSON(message.edition);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FileDescriptorProto>, I>>(base?: I): FileDescriptorProto {
		return FileDescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FileDescriptorProto>, I>>(object: I): FileDescriptorProto {
		const message = createBaseFileDescriptorProto();
		message.name = object.name ?? "";
		message.package = object.package ?? "";
		message.dependency = object.dependency?.map((e) => e) || [];
		message.public_dependency = object.public_dependency?.map((e) => e) || [];
		message.weak_dependency = object.weak_dependency?.map((e) => e) || [];
		message.message_type = object.message_type?.map((e) => DescriptorProto.fromPartial(e)) || [];
		message.enum_type = object.enum_type?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
		message.service = object.service?.map((e) => ServiceDescriptorProto.fromPartial(e)) || [];
		message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
		message.options = object.options !== undefined && object.options !== null ? FileOptions.fromPartial(object.options) : undefined;
		message.source_code_info =
			object.source_code_info !== undefined && object.source_code_info !== null ? SourceCodeInfo.fromPartial(object.source_code_info) : undefined;
		message.syntax = object.syntax ?? "";
		message.edition = object.edition ?? 0;
		return message;
	}
};

export const DescriptorProto: MessageFns<DescriptorProto, "google.protobuf.DescriptorProto"> = {
	$type: "google.protobuf.DescriptorProto" as const,

	encode(message: DescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		for (const v of message.field) {
			FieldDescriptorProto.encode(v!, writer.uint32(18).fork()).join();
		}
		for (const v of message.extension) {
			FieldDescriptorProto.encode(v!, writer.uint32(50).fork()).join();
		}
		for (const v of message.nested_type) {
			DescriptorProto.encode(v!, writer.uint32(26).fork()).join();
		}
		for (const v of message.enum_type) {
			EnumDescriptorProto.encode(v!, writer.uint32(34).fork()).join();
		}
		for (const v of message.extension_range) {
			DescriptorProtoExtensionRange.encode(v!, writer.uint32(42).fork()).join();
		}
		for (const v of message.oneof_decl) {
			OneofDescriptorProto.encode(v!, writer.uint32(66).fork()).join();
		}
		if (message.options !== undefined) {
			MessageOptions.encode(message.options, writer.uint32(58).fork()).join();
		}
		for (const v of message.reserved_range) {
			DescriptorProtoReservedRange.encode(v!, writer.uint32(74).fork()).join();
		}
		for (const v of message.reserved_name) {
			writer.uint32(82).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDescriptorProto();
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

					message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.nested_type.push(DescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.enum_type.push(EnumDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.extension_range.push(DescriptorProtoExtensionRange.decode(reader, reader.uint32()));
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.oneof_decl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.options = MessageOptions.decode(reader, reader.uint32());
					continue;
				case 9:
					if (tag !== 74) {
						break;
					}

					message.reserved_range.push(DescriptorProtoReservedRange.decode(reader, reader.uint32()));
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.reserved_name.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			field: globalThis.Array.isArray(object?.field) ? object.field.map((e: any) => FieldDescriptorProto.fromJSON(e)) : [],
			extension: globalThis.Array.isArray(object?.extension) ? object.extension.map((e: any) => FieldDescriptorProto.fromJSON(e)) : [],
			nested_type: globalThis.Array.isArray(object?.nested_type) ? object.nested_type.map((e: any) => DescriptorProto.fromJSON(e)) : [],
			enum_type: globalThis.Array.isArray(object?.enum_type) ? object.enum_type.map((e: any) => EnumDescriptorProto.fromJSON(e)) : [],
			extension_range: globalThis.Array.isArray(object?.extension_range)
				? object.extension_range.map((e: any) => DescriptorProtoExtensionRange.fromJSON(e))
				: [],
			oneof_decl: globalThis.Array.isArray(object?.oneof_decl) ? object.oneof_decl.map((e: any) => OneofDescriptorProto.fromJSON(e)) : [],
			options: isSet(object.options) ? MessageOptions.fromJSON(object.options) : undefined,
			reserved_range: globalThis.Array.isArray(object?.reserved_range) ? object.reserved_range.map((e: any) => DescriptorProtoReservedRange.fromJSON(e)) : [],
			reserved_name: globalThis.Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: DescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.field?.length) {
			obj.field = message.field.map((e) => FieldDescriptorProto.toJSON(e));
		}
		if (message.extension?.length) {
			obj.extension = message.extension.map((e) => FieldDescriptorProto.toJSON(e));
		}
		if (message.nested_type?.length) {
			obj.nested_type = message.nested_type.map((e) => DescriptorProto.toJSON(e));
		}
		if (message.enum_type?.length) {
			obj.enum_type = message.enum_type.map((e) => EnumDescriptorProto.toJSON(e));
		}
		if (message.extension_range?.length) {
			obj.extension_range = message.extension_range.map((e) => DescriptorProtoExtensionRange.toJSON(e));
		}
		if (message.oneof_decl?.length) {
			obj.oneof_decl = message.oneof_decl.map((e) => OneofDescriptorProto.toJSON(e));
		}
		if (message.options !== undefined) {
			obj.options = MessageOptions.toJSON(message.options);
		}
		if (message.reserved_range?.length) {
			obj.reserved_range = message.reserved_range.map((e) => DescriptorProtoReservedRange.toJSON(e));
		}
		if (message.reserved_name?.length) {
			obj.reserved_name = message.reserved_name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DescriptorProto>, I>>(base?: I): DescriptorProto {
		return DescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DescriptorProto>, I>>(object: I): DescriptorProto {
		const message = createBaseDescriptorProto();
		message.name = object.name ?? "";
		message.field = object.field?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
		message.extension = object.extension?.map((e) => FieldDescriptorProto.fromPartial(e)) || [];
		message.nested_type = object.nested_type?.map((e) => DescriptorProto.fromPartial(e)) || [];
		message.enum_type = object.enum_type?.map((e) => EnumDescriptorProto.fromPartial(e)) || [];
		message.extension_range = object.extension_range?.map((e) => DescriptorProtoExtensionRange.fromPartial(e)) || [];
		message.oneof_decl = object.oneof_decl?.map((e) => OneofDescriptorProto.fromPartial(e)) || [];
		message.options = object.options !== undefined && object.options !== null ? MessageOptions.fromPartial(object.options) : undefined;
		message.reserved_range = object.reserved_range?.map((e) => DescriptorProtoReservedRange.fromPartial(e)) || [];
		message.reserved_name = object.reserved_name?.map((e) => e) || [];
		return message;
	}
};

export const DescriptorProtoExtensionRange: MessageFns<DescriptorProtoExtensionRange, "google.protobuf.DescriptorProto.ExtensionRange"> = {
	$type: "google.protobuf.DescriptorProto.ExtensionRange" as const,

	encode(message: DescriptorProtoExtensionRange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.start !== undefined && message.start !== 0) {
			writer.uint32(8).int32(message.start);
		}
		if (message.end !== undefined && message.end !== 0) {
			writer.uint32(16).int32(message.end);
		}
		if (message.options !== undefined) {
			ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProtoExtensionRange {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDescriptorProtoExtensionRange();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.start = reader.int32();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.end = reader.int32();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.options = ExtensionRangeOptions.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DescriptorProtoExtensionRange {
		return {
			start: isSet(object.start) ? globalThis.Number(object.start) : 0,
			end: isSet(object.end) ? globalThis.Number(object.end) : 0,
			options: isSet(object.options) ? ExtensionRangeOptions.fromJSON(object.options) : undefined
		};
	},

	toJSON(message: DescriptorProtoExtensionRange): unknown {
		const obj: any = {};
		if (message.start !== undefined && message.start !== 0) {
			obj.start = Math.round(message.start);
		}
		if (message.end !== undefined && message.end !== 0) {
			obj.end = Math.round(message.end);
		}
		if (message.options !== undefined) {
			obj.options = ExtensionRangeOptions.toJSON(message.options);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DescriptorProtoExtensionRange>, I>>(base?: I): DescriptorProtoExtensionRange {
		return DescriptorProtoExtensionRange.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DescriptorProtoExtensionRange>, I>>(object: I): DescriptorProtoExtensionRange {
		const message = createBaseDescriptorProtoExtensionRange();
		message.start = object.start ?? 0;
		message.end = object.end ?? 0;
		message.options = object.options !== undefined && object.options !== null ? ExtensionRangeOptions.fromPartial(object.options) : undefined;
		return message;
	}
};

export const DescriptorProtoReservedRange: MessageFns<DescriptorProtoReservedRange, "google.protobuf.DescriptorProto.ReservedRange"> = {
	$type: "google.protobuf.DescriptorProto.ReservedRange" as const,

	encode(message: DescriptorProtoReservedRange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.start !== undefined && message.start !== 0) {
			writer.uint32(8).int32(message.start);
		}
		if (message.end !== undefined && message.end !== 0) {
			writer.uint32(16).int32(message.end);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): DescriptorProtoReservedRange {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDescriptorProtoReservedRange();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.start = reader.int32();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.end = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DescriptorProtoReservedRange {
		return {
			start: isSet(object.start) ? globalThis.Number(object.start) : 0,
			end: isSet(object.end) ? globalThis.Number(object.end) : 0
		};
	},

	toJSON(message: DescriptorProtoReservedRange): unknown {
		const obj: any = {};
		if (message.start !== undefined && message.start !== 0) {
			obj.start = Math.round(message.start);
		}
		if (message.end !== undefined && message.end !== 0) {
			obj.end = Math.round(message.end);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DescriptorProtoReservedRange>, I>>(base?: I): DescriptorProtoReservedRange {
		return DescriptorProtoReservedRange.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DescriptorProtoReservedRange>, I>>(object: I): DescriptorProtoReservedRange {
		const message = createBaseDescriptorProtoReservedRange();
		message.start = object.start ?? 0;
		message.end = object.end ?? 0;
		return message;
	}
};

export const ExtensionRangeOptions: MessageFns<ExtensionRangeOptions, "google.protobuf.ExtensionRangeOptions"> = {
	$type: "google.protobuf.ExtensionRangeOptions" as const,

	encode(message: ExtensionRangeOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		for (const v of message.declaration) {
			ExtensionRangeOptionsDeclaration.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(402).fork()).join();
		}
		if (message.verification !== undefined && message.verification !== 1) {
			writer.uint32(24).int32(message.verification);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExtensionRangeOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.declaration.push(ExtensionRangeOptionsDeclaration.decode(reader, reader.uint32()));
					continue;
				case 50:
					if (tag !== 402) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.verification = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ExtensionRangeOptions {
		return {
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: [],
			declaration: globalThis.Array.isArray(object?.declaration) ? object.declaration.map((e: any) => ExtensionRangeOptionsDeclaration.fromJSON(e)) : [],
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			verification: isSet(object.verification) ? extensionRangeOptionsVerificationStateFromJSON(object.verification) : 1
		};
	},

	toJSON(message: ExtensionRangeOptions): unknown {
		const obj: any = {};
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		if (message.declaration?.length) {
			obj.declaration = message.declaration.map((e) => ExtensionRangeOptionsDeclaration.toJSON(e));
		}
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.verification !== undefined && message.verification !== 1) {
			obj.verification = extensionRangeOptionsVerificationStateToJSON(message.verification);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ExtensionRangeOptions>, I>>(base?: I): ExtensionRangeOptions {
		return ExtensionRangeOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ExtensionRangeOptions>, I>>(object: I): ExtensionRangeOptions {
		const message = createBaseExtensionRangeOptions();
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		message.declaration = object.declaration?.map((e) => ExtensionRangeOptionsDeclaration.fromPartial(e)) || [];
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.verification = object.verification ?? 1;
		return message;
	}
};

export const ExtensionRangeOptionsDeclaration: MessageFns<ExtensionRangeOptionsDeclaration, "google.protobuf.ExtensionRangeOptions.Declaration"> = {
	$type: "google.protobuf.ExtensionRangeOptions.Declaration" as const,

	encode(message: ExtensionRangeOptionsDeclaration, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.number !== undefined && message.number !== 0) {
			writer.uint32(8).int32(message.number);
		}
		if (message.full_name !== undefined && message.full_name !== "") {
			writer.uint32(18).string(message.full_name);
		}
		if (message.type !== undefined && message.type !== "") {
			writer.uint32(26).string(message.type);
		}
		if (message.reserved !== undefined && message.reserved !== false) {
			writer.uint32(40).bool(message.reserved);
		}
		if (message.repeated !== undefined && message.repeated !== false) {
			writer.uint32(48).bool(message.repeated);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ExtensionRangeOptionsDeclaration {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseExtensionRangeOptionsDeclaration();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.number = reader.int32();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.full_name = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.type = reader.string();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.reserved = reader.bool();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.repeated = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ExtensionRangeOptionsDeclaration {
		return {
			number: isSet(object.number) ? globalThis.Number(object.number) : 0,
			full_name: isSet(object.full_name) ? globalThis.String(object.full_name) : "",
			type: isSet(object.type) ? globalThis.String(object.type) : "",
			reserved: isSet(object.reserved) ? globalThis.Boolean(object.reserved) : false,
			repeated: isSet(object.repeated) ? globalThis.Boolean(object.repeated) : false
		};
	},

	toJSON(message: ExtensionRangeOptionsDeclaration): unknown {
		const obj: any = {};
		if (message.number !== undefined && message.number !== 0) {
			obj.number = Math.round(message.number);
		}
		if (message.full_name !== undefined && message.full_name !== "") {
			obj.full_name = message.full_name;
		}
		if (message.type !== undefined && message.type !== "") {
			obj.type = message.type;
		}
		if (message.reserved !== undefined && message.reserved !== false) {
			obj.reserved = message.reserved;
		}
		if (message.repeated !== undefined && message.repeated !== false) {
			obj.repeated = message.repeated;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ExtensionRangeOptionsDeclaration>, I>>(base?: I): ExtensionRangeOptionsDeclaration {
		return ExtensionRangeOptionsDeclaration.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ExtensionRangeOptionsDeclaration>, I>>(object: I): ExtensionRangeOptionsDeclaration {
		const message = createBaseExtensionRangeOptionsDeclaration();
		message.number = object.number ?? 0;
		message.full_name = object.full_name ?? "";
		message.type = object.type ?? "";
		message.reserved = object.reserved ?? false;
		message.repeated = object.repeated ?? false;
		return message;
	}
};

export const FieldDescriptorProto: MessageFns<FieldDescriptorProto, "google.protobuf.FieldDescriptorProto"> = {
	$type: "google.protobuf.FieldDescriptorProto" as const,

	encode(message: FieldDescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.number !== undefined && message.number !== 0) {
			writer.uint32(24).int32(message.number);
		}
		if (message.label !== undefined && message.label !== 1) {
			writer.uint32(32).int32(message.label);
		}
		if (message.type !== undefined && message.type !== 1) {
			writer.uint32(40).int32(message.type);
		}
		if (message.type_name !== undefined && message.type_name !== "") {
			writer.uint32(50).string(message.type_name);
		}
		if (message.extendee !== undefined && message.extendee !== "") {
			writer.uint32(18).string(message.extendee);
		}
		if (message.default_value !== undefined && message.default_value !== "") {
			writer.uint32(58).string(message.default_value);
		}
		if (message.oneof_index !== undefined && message.oneof_index !== 0) {
			writer.uint32(72).int32(message.oneof_index);
		}
		if (message.json_name !== undefined && message.json_name !== "") {
			writer.uint32(82).string(message.json_name);
		}
		if (message.options !== undefined) {
			FieldOptions.encode(message.options, writer.uint32(66).fork()).join();
		}
		if (message.proto3_optional !== undefined && message.proto3_optional !== false) {
			writer.uint32(136).bool(message.proto3_optional);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FieldDescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFieldDescriptorProto();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.number = reader.int32();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.label = reader.int32() as any;
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.type = reader.int32() as any;
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.type_name = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.extendee = reader.string();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.default_value = reader.string();
					continue;
				case 9:
					if (tag !== 72) {
						break;
					}

					message.oneof_index = reader.int32();
					continue;
				case 10:
					if (tag !== 82) {
						break;
					}

					message.json_name = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.options = FieldOptions.decode(reader, reader.uint32());
					continue;
				case 17:
					if (tag !== 136) {
						break;
					}

					message.proto3_optional = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FieldDescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			number: isSet(object.number) ? globalThis.Number(object.number) : 0,
			label: isSet(object.label) ? fieldDescriptorProtoLabelFromJSON(object.label) : 1,
			type: isSet(object.type) ? fieldDescriptorProtoTypeFromJSON(object.type) : 1,
			type_name: isSet(object.type_name) ? globalThis.String(object.type_name) : "",
			extendee: isSet(object.extendee) ? globalThis.String(object.extendee) : "",
			default_value: isSet(object.default_value) ? globalThis.String(object.default_value) : "",
			oneof_index: isSet(object.oneof_index) ? globalThis.Number(object.oneof_index) : 0,
			json_name: isSet(object.json_name) ? globalThis.String(object.json_name) : "",
			options: isSet(object.options) ? FieldOptions.fromJSON(object.options) : undefined,
			proto3_optional: isSet(object.proto3_optional) ? globalThis.Boolean(object.proto3_optional) : false
		};
	},

	toJSON(message: FieldDescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.number !== undefined && message.number !== 0) {
			obj.number = Math.round(message.number);
		}
		if (message.label !== undefined && message.label !== 1) {
			obj.label = fieldDescriptorProtoLabelToJSON(message.label);
		}
		if (message.type !== undefined && message.type !== 1) {
			obj.type = fieldDescriptorProtoTypeToJSON(message.type);
		}
		if (message.type_name !== undefined && message.type_name !== "") {
			obj.type_name = message.type_name;
		}
		if (message.extendee !== undefined && message.extendee !== "") {
			obj.extendee = message.extendee;
		}
		if (message.default_value !== undefined && message.default_value !== "") {
			obj.default_value = message.default_value;
		}
		if (message.oneof_index !== undefined && message.oneof_index !== 0) {
			obj.oneof_index = Math.round(message.oneof_index);
		}
		if (message.json_name !== undefined && message.json_name !== "") {
			obj.json_name = message.json_name;
		}
		if (message.options !== undefined) {
			obj.options = FieldOptions.toJSON(message.options);
		}
		if (message.proto3_optional !== undefined && message.proto3_optional !== false) {
			obj.proto3_optional = message.proto3_optional;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FieldDescriptorProto>, I>>(base?: I): FieldDescriptorProto {
		return FieldDescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FieldDescriptorProto>, I>>(object: I): FieldDescriptorProto {
		const message = createBaseFieldDescriptorProto();
		message.name = object.name ?? "";
		message.number = object.number ?? 0;
		message.label = object.label ?? 1;
		message.type = object.type ?? 1;
		message.type_name = object.type_name ?? "";
		message.extendee = object.extendee ?? "";
		message.default_value = object.default_value ?? "";
		message.oneof_index = object.oneof_index ?? 0;
		message.json_name = object.json_name ?? "";
		message.options = object.options !== undefined && object.options !== null ? FieldOptions.fromPartial(object.options) : undefined;
		message.proto3_optional = object.proto3_optional ?? false;
		return message;
	}
};

export const OneofDescriptorProto: MessageFns<OneofDescriptorProto, "google.protobuf.OneofDescriptorProto"> = {
	$type: "google.protobuf.OneofDescriptorProto" as const,

	encode(message: OneofDescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.options !== undefined) {
			OneofOptions.encode(message.options, writer.uint32(18).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): OneofDescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseOneofDescriptorProto();
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

					message.options = OneofOptions.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): OneofDescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			options: isSet(object.options) ? OneofOptions.fromJSON(object.options) : undefined
		};
	},

	toJSON(message: OneofDescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.options !== undefined) {
			obj.options = OneofOptions.toJSON(message.options);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<OneofDescriptorProto>, I>>(base?: I): OneofDescriptorProto {
		return OneofDescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<OneofDescriptorProto>, I>>(object: I): OneofDescriptorProto {
		const message = createBaseOneofDescriptorProto();
		message.name = object.name ?? "";
		message.options = object.options !== undefined && object.options !== null ? OneofOptions.fromPartial(object.options) : undefined;
		return message;
	}
};

export const EnumDescriptorProto: MessageFns<EnumDescriptorProto, "google.protobuf.EnumDescriptorProto"> = {
	$type: "google.protobuf.EnumDescriptorProto" as const,

	encode(message: EnumDescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		for (const v of message.value) {
			EnumValueDescriptorProto.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.options !== undefined) {
			EnumOptions.encode(message.options, writer.uint32(26).fork()).join();
		}
		for (const v of message.reserved_range) {
			EnumDescriptorProtoEnumReservedRange.encode(v!, writer.uint32(34).fork()).join();
		}
		for (const v of message.reserved_name) {
			writer.uint32(42).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEnumDescriptorProto();
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

					message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.options = EnumOptions.decode(reader, reader.uint32());
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.reserved_range.push(EnumDescriptorProtoEnumReservedRange.decode(reader, reader.uint32()));
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.reserved_name.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EnumDescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			value: globalThis.Array.isArray(object?.value) ? object.value.map((e: any) => EnumValueDescriptorProto.fromJSON(e)) : [],
			options: isSet(object.options) ? EnumOptions.fromJSON(object.options) : undefined,
			reserved_range: globalThis.Array.isArray(object?.reserved_range)
				? object.reserved_range.map((e: any) => EnumDescriptorProtoEnumReservedRange.fromJSON(e))
				: [],
			reserved_name: globalThis.Array.isArray(object?.reserved_name) ? object.reserved_name.map((e: any) => globalThis.String(e)) : []
		};
	},

	toJSON(message: EnumDescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.value?.length) {
			obj.value = message.value.map((e) => EnumValueDescriptorProto.toJSON(e));
		}
		if (message.options !== undefined) {
			obj.options = EnumOptions.toJSON(message.options);
		}
		if (message.reserved_range?.length) {
			obj.reserved_range = message.reserved_range.map((e) => EnumDescriptorProtoEnumReservedRange.toJSON(e));
		}
		if (message.reserved_name?.length) {
			obj.reserved_name = message.reserved_name;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EnumDescriptorProto>, I>>(base?: I): EnumDescriptorProto {
		return EnumDescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EnumDescriptorProto>, I>>(object: I): EnumDescriptorProto {
		const message = createBaseEnumDescriptorProto();
		message.name = object.name ?? "";
		message.value = object.value?.map((e) => EnumValueDescriptorProto.fromPartial(e)) || [];
		message.options = object.options !== undefined && object.options !== null ? EnumOptions.fromPartial(object.options) : undefined;
		message.reserved_range = object.reserved_range?.map((e) => EnumDescriptorProtoEnumReservedRange.fromPartial(e)) || [];
		message.reserved_name = object.reserved_name?.map((e) => e) || [];
		return message;
	}
};

export const EnumDescriptorProtoEnumReservedRange: MessageFns<EnumDescriptorProtoEnumReservedRange, "google.protobuf.EnumDescriptorProto.EnumReservedRange"> = {
	$type: "google.protobuf.EnumDescriptorProto.EnumReservedRange" as const,

	encode(message: EnumDescriptorProtoEnumReservedRange, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.start !== undefined && message.start !== 0) {
			writer.uint32(8).int32(message.start);
		}
		if (message.end !== undefined && message.end !== 0) {
			writer.uint32(16).int32(message.end);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EnumDescriptorProtoEnumReservedRange {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEnumDescriptorProtoEnumReservedRange();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.start = reader.int32();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.end = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EnumDescriptorProtoEnumReservedRange {
		return {
			start: isSet(object.start) ? globalThis.Number(object.start) : 0,
			end: isSet(object.end) ? globalThis.Number(object.end) : 0
		};
	},

	toJSON(message: EnumDescriptorProtoEnumReservedRange): unknown {
		const obj: any = {};
		if (message.start !== undefined && message.start !== 0) {
			obj.start = Math.round(message.start);
		}
		if (message.end !== undefined && message.end !== 0) {
			obj.end = Math.round(message.end);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EnumDescriptorProtoEnumReservedRange>, I>>(base?: I): EnumDescriptorProtoEnumReservedRange {
		return EnumDescriptorProtoEnumReservedRange.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EnumDescriptorProtoEnumReservedRange>, I>>(object: I): EnumDescriptorProtoEnumReservedRange {
		const message = createBaseEnumDescriptorProtoEnumReservedRange();
		message.start = object.start ?? 0;
		message.end = object.end ?? 0;
		return message;
	}
};

export const EnumValueDescriptorProto: MessageFns<EnumValueDescriptorProto, "google.protobuf.EnumValueDescriptorProto"> = {
	$type: "google.protobuf.EnumValueDescriptorProto" as const,

	encode(message: EnumValueDescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.number !== undefined && message.number !== 0) {
			writer.uint32(16).int32(message.number);
		}
		if (message.options !== undefined) {
			EnumValueOptions.encode(message.options, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EnumValueDescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEnumValueDescriptorProto();
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

					message.options = EnumValueOptions.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EnumValueDescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			number: isSet(object.number) ? globalThis.Number(object.number) : 0,
			options: isSet(object.options) ? EnumValueOptions.fromJSON(object.options) : undefined
		};
	},

	toJSON(message: EnumValueDescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.number !== undefined && message.number !== 0) {
			obj.number = Math.round(message.number);
		}
		if (message.options !== undefined) {
			obj.options = EnumValueOptions.toJSON(message.options);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EnumValueDescriptorProto>, I>>(base?: I): EnumValueDescriptorProto {
		return EnumValueDescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EnumValueDescriptorProto>, I>>(object: I): EnumValueDescriptorProto {
		const message = createBaseEnumValueDescriptorProto();
		message.name = object.name ?? "";
		message.number = object.number ?? 0;
		message.options = object.options !== undefined && object.options !== null ? EnumValueOptions.fromPartial(object.options) : undefined;
		return message;
	}
};

export const ServiceDescriptorProto: MessageFns<ServiceDescriptorProto, "google.protobuf.ServiceDescriptorProto"> = {
	$type: "google.protobuf.ServiceDescriptorProto" as const,

	encode(message: ServiceDescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		for (const v of message.method) {
			MethodDescriptorProto.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.options !== undefined) {
			ServiceOptions.encode(message.options, writer.uint32(26).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ServiceDescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseServiceDescriptorProto();
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

					message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.options = ServiceOptions.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ServiceDescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			method: globalThis.Array.isArray(object?.method) ? object.method.map((e: any) => MethodDescriptorProto.fromJSON(e)) : [],
			options: isSet(object.options) ? ServiceOptions.fromJSON(object.options) : undefined
		};
	},

	toJSON(message: ServiceDescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.method?.length) {
			obj.method = message.method.map((e) => MethodDescriptorProto.toJSON(e));
		}
		if (message.options !== undefined) {
			obj.options = ServiceOptions.toJSON(message.options);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ServiceDescriptorProto>, I>>(base?: I): ServiceDescriptorProto {
		return ServiceDescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ServiceDescriptorProto>, I>>(object: I): ServiceDescriptorProto {
		const message = createBaseServiceDescriptorProto();
		message.name = object.name ?? "";
		message.method = object.method?.map((e) => MethodDescriptorProto.fromPartial(e)) || [];
		message.options = object.options !== undefined && object.options !== null ? ServiceOptions.fromPartial(object.options) : undefined;
		return message;
	}
};

export const MethodDescriptorProto: MessageFns<MethodDescriptorProto, "google.protobuf.MethodDescriptorProto"> = {
	$type: "google.protobuf.MethodDescriptorProto" as const,

	encode(message: MethodDescriptorProto, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name !== undefined && message.name !== "") {
			writer.uint32(10).string(message.name);
		}
		if (message.input_type !== undefined && message.input_type !== "") {
			writer.uint32(18).string(message.input_type);
		}
		if (message.output_type !== undefined && message.output_type !== "") {
			writer.uint32(26).string(message.output_type);
		}
		if (message.options !== undefined) {
			MethodOptions.encode(message.options, writer.uint32(34).fork()).join();
		}
		if (message.client_streaming !== undefined && message.client_streaming !== false) {
			writer.uint32(40).bool(message.client_streaming);
		}
		if (message.server_streaming !== undefined && message.server_streaming !== false) {
			writer.uint32(48).bool(message.server_streaming);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MethodDescriptorProto {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMethodDescriptorProto();
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

					message.input_type = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.output_type = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.options = MethodOptions.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.client_streaming = reader.bool();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.server_streaming = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MethodDescriptorProto {
		return {
			name: isSet(object.name) ? globalThis.String(object.name) : "",
			input_type: isSet(object.input_type) ? globalThis.String(object.input_type) : "",
			output_type: isSet(object.output_type) ? globalThis.String(object.output_type) : "",
			options: isSet(object.options) ? MethodOptions.fromJSON(object.options) : undefined,
			client_streaming: isSet(object.client_streaming) ? globalThis.Boolean(object.client_streaming) : false,
			server_streaming: isSet(object.server_streaming) ? globalThis.Boolean(object.server_streaming) : false
		};
	},

	toJSON(message: MethodDescriptorProto): unknown {
		const obj: any = {};
		if (message.name !== undefined && message.name !== "") {
			obj.name = message.name;
		}
		if (message.input_type !== undefined && message.input_type !== "") {
			obj.input_type = message.input_type;
		}
		if (message.output_type !== undefined && message.output_type !== "") {
			obj.output_type = message.output_type;
		}
		if (message.options !== undefined) {
			obj.options = MethodOptions.toJSON(message.options);
		}
		if (message.client_streaming !== undefined && message.client_streaming !== false) {
			obj.client_streaming = message.client_streaming;
		}
		if (message.server_streaming !== undefined && message.server_streaming !== false) {
			obj.server_streaming = message.server_streaming;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MethodDescriptorProto>, I>>(base?: I): MethodDescriptorProto {
		return MethodDescriptorProto.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MethodDescriptorProto>, I>>(object: I): MethodDescriptorProto {
		const message = createBaseMethodDescriptorProto();
		message.name = object.name ?? "";
		message.input_type = object.input_type ?? "";
		message.output_type = object.output_type ?? "";
		message.options = object.options !== undefined && object.options !== null ? MethodOptions.fromPartial(object.options) : undefined;
		message.client_streaming = object.client_streaming ?? false;
		message.server_streaming = object.server_streaming ?? false;
		return message;
	}
};

export const FileOptions: MessageFns<FileOptions, "google.protobuf.FileOptions"> = {
	$type: "google.protobuf.FileOptions" as const,

	encode(message: FileOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.java_package !== undefined && message.java_package !== "") {
			writer.uint32(10).string(message.java_package);
		}
		if (message.java_outer_classname !== undefined && message.java_outer_classname !== "") {
			writer.uint32(66).string(message.java_outer_classname);
		}
		if (message.java_multiple_files !== undefined && message.java_multiple_files !== false) {
			writer.uint32(80).bool(message.java_multiple_files);
		}
		if (message.java_generate_equals_and_hash !== undefined && message.java_generate_equals_and_hash !== false) {
			writer.uint32(160).bool(message.java_generate_equals_and_hash);
		}
		if (message.java_string_check_utf8 !== undefined && message.java_string_check_utf8 !== false) {
			writer.uint32(216).bool(message.java_string_check_utf8);
		}
		if (message.optimize_for !== undefined && message.optimize_for !== 1) {
			writer.uint32(72).int32(message.optimize_for);
		}
		if (message.go_package !== undefined && message.go_package !== "") {
			writer.uint32(90).string(message.go_package);
		}
		if (message.cc_generic_services !== undefined && message.cc_generic_services !== false) {
			writer.uint32(128).bool(message.cc_generic_services);
		}
		if (message.java_generic_services !== undefined && message.java_generic_services !== false) {
			writer.uint32(136).bool(message.java_generic_services);
		}
		if (message.py_generic_services !== undefined && message.py_generic_services !== false) {
			writer.uint32(144).bool(message.py_generic_services);
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			writer.uint32(184).bool(message.deprecated);
		}
		if (message.cc_enable_arenas !== undefined && message.cc_enable_arenas !== true) {
			writer.uint32(248).bool(message.cc_enable_arenas);
		}
		if (message.objc_class_prefix !== undefined && message.objc_class_prefix !== "") {
			writer.uint32(290).string(message.objc_class_prefix);
		}
		if (message.csharp_namespace !== undefined && message.csharp_namespace !== "") {
			writer.uint32(298).string(message.csharp_namespace);
		}
		if (message.swift_prefix !== undefined && message.swift_prefix !== "") {
			writer.uint32(314).string(message.swift_prefix);
		}
		if (message.php_class_prefix !== undefined && message.php_class_prefix !== "") {
			writer.uint32(322).string(message.php_class_prefix);
		}
		if (message.php_namespace !== undefined && message.php_namespace !== "") {
			writer.uint32(330).string(message.php_namespace);
		}
		if (message.php_metadata_namespace !== undefined && message.php_metadata_namespace !== "") {
			writer.uint32(354).string(message.php_metadata_namespace);
		}
		if (message.ruby_package !== undefined && message.ruby_package !== "") {
			writer.uint32(362).string(message.ruby_package);
		}
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(402).fork()).join();
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FileOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFileOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.java_package = reader.string();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.java_outer_classname = reader.string();
					continue;
				case 10:
					if (tag !== 80) {
						break;
					}

					message.java_multiple_files = reader.bool();
					continue;
				case 20:
					if (tag !== 160) {
						break;
					}

					message.java_generate_equals_and_hash = reader.bool();
					continue;
				case 27:
					if (tag !== 216) {
						break;
					}

					message.java_string_check_utf8 = reader.bool();
					continue;
				case 9:
					if (tag !== 72) {
						break;
					}

					message.optimize_for = reader.int32() as any;
					continue;
				case 11:
					if (tag !== 90) {
						break;
					}

					message.go_package = reader.string();
					continue;
				case 16:
					if (tag !== 128) {
						break;
					}

					message.cc_generic_services = reader.bool();
					continue;
				case 17:
					if (tag !== 136) {
						break;
					}

					message.java_generic_services = reader.bool();
					continue;
				case 18:
					if (tag !== 144) {
						break;
					}

					message.py_generic_services = reader.bool();
					continue;
				case 23:
					if (tag !== 184) {
						break;
					}

					message.deprecated = reader.bool();
					continue;
				case 31:
					if (tag !== 248) {
						break;
					}

					message.cc_enable_arenas = reader.bool();
					continue;
				case 36:
					if (tag !== 290) {
						break;
					}

					message.objc_class_prefix = reader.string();
					continue;
				case 37:
					if (tag !== 298) {
						break;
					}

					message.csharp_namespace = reader.string();
					continue;
				case 39:
					if (tag !== 314) {
						break;
					}

					message.swift_prefix = reader.string();
					continue;
				case 40:
					if (tag !== 322) {
						break;
					}

					message.php_class_prefix = reader.string();
					continue;
				case 41:
					if (tag !== 330) {
						break;
					}

					message.php_namespace = reader.string();
					continue;
				case 44:
					if (tag !== 354) {
						break;
					}

					message.php_metadata_namespace = reader.string();
					continue;
				case 45:
					if (tag !== 362) {
						break;
					}

					message.ruby_package = reader.string();
					continue;
				case 50:
					if (tag !== 402) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FileOptions {
		return {
			java_package: isSet(object.java_package) ? globalThis.String(object.java_package) : "",
			java_outer_classname: isSet(object.java_outer_classname) ? globalThis.String(object.java_outer_classname) : "",
			java_multiple_files: isSet(object.java_multiple_files) ? globalThis.Boolean(object.java_multiple_files) : false,
			java_generate_equals_and_hash: isSet(object.java_generate_equals_and_hash) ? globalThis.Boolean(object.java_generate_equals_and_hash) : false,
			java_string_check_utf8: isSet(object.java_string_check_utf8) ? globalThis.Boolean(object.java_string_check_utf8) : false,
			optimize_for: isSet(object.optimize_for) ? fileOptionsOptimizeModeFromJSON(object.optimize_for) : 1,
			go_package: isSet(object.go_package) ? globalThis.String(object.go_package) : "",
			cc_generic_services: isSet(object.cc_generic_services) ? globalThis.Boolean(object.cc_generic_services) : false,
			java_generic_services: isSet(object.java_generic_services) ? globalThis.Boolean(object.java_generic_services) : false,
			py_generic_services: isSet(object.py_generic_services) ? globalThis.Boolean(object.py_generic_services) : false,
			deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
			cc_enable_arenas: isSet(object.cc_enable_arenas) ? globalThis.Boolean(object.cc_enable_arenas) : true,
			objc_class_prefix: isSet(object.objc_class_prefix) ? globalThis.String(object.objc_class_prefix) : "",
			csharp_namespace: isSet(object.csharp_namespace) ? globalThis.String(object.csharp_namespace) : "",
			swift_prefix: isSet(object.swift_prefix) ? globalThis.String(object.swift_prefix) : "",
			php_class_prefix: isSet(object.php_class_prefix) ? globalThis.String(object.php_class_prefix) : "",
			php_namespace: isSet(object.php_namespace) ? globalThis.String(object.php_namespace) : "",
			php_metadata_namespace: isSet(object.php_metadata_namespace) ? globalThis.String(object.php_metadata_namespace) : "",
			ruby_package: isSet(object.ruby_package) ? globalThis.String(object.ruby_package) : "",
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: FileOptions): unknown {
		const obj: any = {};
		if (message.java_package !== undefined && message.java_package !== "") {
			obj.java_package = message.java_package;
		}
		if (message.java_outer_classname !== undefined && message.java_outer_classname !== "") {
			obj.java_outer_classname = message.java_outer_classname;
		}
		if (message.java_multiple_files !== undefined && message.java_multiple_files !== false) {
			obj.java_multiple_files = message.java_multiple_files;
		}
		if (message.java_generate_equals_and_hash !== undefined && message.java_generate_equals_and_hash !== false) {
			obj.java_generate_equals_and_hash = message.java_generate_equals_and_hash;
		}
		if (message.java_string_check_utf8 !== undefined && message.java_string_check_utf8 !== false) {
			obj.java_string_check_utf8 = message.java_string_check_utf8;
		}
		if (message.optimize_for !== undefined && message.optimize_for !== 1) {
			obj.optimize_for = fileOptionsOptimizeModeToJSON(message.optimize_for);
		}
		if (message.go_package !== undefined && message.go_package !== "") {
			obj.go_package = message.go_package;
		}
		if (message.cc_generic_services !== undefined && message.cc_generic_services !== false) {
			obj.cc_generic_services = message.cc_generic_services;
		}
		if (message.java_generic_services !== undefined && message.java_generic_services !== false) {
			obj.java_generic_services = message.java_generic_services;
		}
		if (message.py_generic_services !== undefined && message.py_generic_services !== false) {
			obj.py_generic_services = message.py_generic_services;
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			obj.deprecated = message.deprecated;
		}
		if (message.cc_enable_arenas !== undefined && message.cc_enable_arenas !== true) {
			obj.cc_enable_arenas = message.cc_enable_arenas;
		}
		if (message.objc_class_prefix !== undefined && message.objc_class_prefix !== "") {
			obj.objc_class_prefix = message.objc_class_prefix;
		}
		if (message.csharp_namespace !== undefined && message.csharp_namespace !== "") {
			obj.csharp_namespace = message.csharp_namespace;
		}
		if (message.swift_prefix !== undefined && message.swift_prefix !== "") {
			obj.swift_prefix = message.swift_prefix;
		}
		if (message.php_class_prefix !== undefined && message.php_class_prefix !== "") {
			obj.php_class_prefix = message.php_class_prefix;
		}
		if (message.php_namespace !== undefined && message.php_namespace !== "") {
			obj.php_namespace = message.php_namespace;
		}
		if (message.php_metadata_namespace !== undefined && message.php_metadata_namespace !== "") {
			obj.php_metadata_namespace = message.php_metadata_namespace;
		}
		if (message.ruby_package !== undefined && message.ruby_package !== "") {
			obj.ruby_package = message.ruby_package;
		}
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FileOptions>, I>>(base?: I): FileOptions {
		return FileOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FileOptions>, I>>(object: I): FileOptions {
		const message = createBaseFileOptions();
		message.java_package = object.java_package ?? "";
		message.java_outer_classname = object.java_outer_classname ?? "";
		message.java_multiple_files = object.java_multiple_files ?? false;
		message.java_generate_equals_and_hash = object.java_generate_equals_and_hash ?? false;
		message.java_string_check_utf8 = object.java_string_check_utf8 ?? false;
		message.optimize_for = object.optimize_for ?? 1;
		message.go_package = object.go_package ?? "";
		message.cc_generic_services = object.cc_generic_services ?? false;
		message.java_generic_services = object.java_generic_services ?? false;
		message.py_generic_services = object.py_generic_services ?? false;
		message.deprecated = object.deprecated ?? false;
		message.cc_enable_arenas = object.cc_enable_arenas ?? true;
		message.objc_class_prefix = object.objc_class_prefix ?? "";
		message.csharp_namespace = object.csharp_namespace ?? "";
		message.swift_prefix = object.swift_prefix ?? "";
		message.php_class_prefix = object.php_class_prefix ?? "";
		message.php_namespace = object.php_namespace ?? "";
		message.php_metadata_namespace = object.php_metadata_namespace ?? "";
		message.ruby_package = object.ruby_package ?? "";
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const MessageOptions: MessageFns<MessageOptions, "google.protobuf.MessageOptions"> = {
	$type: "google.protobuf.MessageOptions" as const,

	encode(message: MessageOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.message_set_wire_format !== undefined && message.message_set_wire_format !== false) {
			writer.uint32(8).bool(message.message_set_wire_format);
		}
		if (message.no_standard_descriptor_accessor !== undefined && message.no_standard_descriptor_accessor !== false) {
			writer.uint32(16).bool(message.no_standard_descriptor_accessor);
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			writer.uint32(24).bool(message.deprecated);
		}
		if (message.map_entry !== undefined && message.map_entry !== false) {
			writer.uint32(56).bool(message.map_entry);
		}
		if (message.deprecated_legacy_json_field_conflicts !== undefined && message.deprecated_legacy_json_field_conflicts !== false) {
			writer.uint32(88).bool(message.deprecated_legacy_json_field_conflicts);
		}
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(98).fork()).join();
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MessageOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMessageOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.message_set_wire_format = reader.bool();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.no_standard_descriptor_accessor = reader.bool();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.deprecated = reader.bool();
					continue;
				case 7:
					if (tag !== 56) {
						break;
					}

					message.map_entry = reader.bool();
					continue;
				case 11:
					if (tag !== 88) {
						break;
					}

					message.deprecated_legacy_json_field_conflicts = reader.bool();
					continue;
				case 12:
					if (tag !== 98) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MessageOptions {
		return {
			message_set_wire_format: isSet(object.message_set_wire_format) ? globalThis.Boolean(object.message_set_wire_format) : false,
			no_standard_descriptor_accessor: isSet(object.no_standard_descriptor_accessor) ? globalThis.Boolean(object.no_standard_descriptor_accessor) : false,
			deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
			map_entry: isSet(object.map_entry) ? globalThis.Boolean(object.map_entry) : false,
			deprecated_legacy_json_field_conflicts: isSet(object.deprecated_legacy_json_field_conflicts)
				? globalThis.Boolean(object.deprecated_legacy_json_field_conflicts)
				: false,
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: MessageOptions): unknown {
		const obj: any = {};
		if (message.message_set_wire_format !== undefined && message.message_set_wire_format !== false) {
			obj.message_set_wire_format = message.message_set_wire_format;
		}
		if (message.no_standard_descriptor_accessor !== undefined && message.no_standard_descriptor_accessor !== false) {
			obj.no_standard_descriptor_accessor = message.no_standard_descriptor_accessor;
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			obj.deprecated = message.deprecated;
		}
		if (message.map_entry !== undefined && message.map_entry !== false) {
			obj.map_entry = message.map_entry;
		}
		if (message.deprecated_legacy_json_field_conflicts !== undefined && message.deprecated_legacy_json_field_conflicts !== false) {
			obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
		}
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MessageOptions>, I>>(base?: I): MessageOptions {
		return MessageOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MessageOptions>, I>>(object: I): MessageOptions {
		const message = createBaseMessageOptions();
		message.message_set_wire_format = object.message_set_wire_format ?? false;
		message.no_standard_descriptor_accessor = object.no_standard_descriptor_accessor ?? false;
		message.deprecated = object.deprecated ?? false;
		message.map_entry = object.map_entry ?? false;
		message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts ?? false;
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const FieldOptions: MessageFns<FieldOptions, "google.protobuf.FieldOptions"> = {
	$type: "google.protobuf.FieldOptions" as const,

	encode(message: FieldOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.ctype !== undefined && message.ctype !== 0) {
			writer.uint32(8).int32(message.ctype);
		}
		if (message.packed !== undefined && message.packed !== false) {
			writer.uint32(16).bool(message.packed);
		}
		if (message.jstype !== undefined && message.jstype !== 0) {
			writer.uint32(48).int32(message.jstype);
		}
		if (message.lazy !== undefined && message.lazy !== false) {
			writer.uint32(40).bool(message.lazy);
		}
		if (message.unverified_lazy !== undefined && message.unverified_lazy !== false) {
			writer.uint32(120).bool(message.unverified_lazy);
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			writer.uint32(24).bool(message.deprecated);
		}
		if (message.weak !== undefined && message.weak !== false) {
			writer.uint32(80).bool(message.weak);
		}
		if (message.debug_redact !== undefined && message.debug_redact !== false) {
			writer.uint32(128).bool(message.debug_redact);
		}
		if (message.retention !== undefined && message.retention !== 0) {
			writer.uint32(136).int32(message.retention);
		}
		writer.uint32(154).fork();
		for (const v of message.targets) {
			writer.int32(v);
		}
		writer.join();
		for (const v of message.edition_defaults) {
			FieldOptionsEditionDefault.encode(v!, writer.uint32(162).fork()).join();
		}
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(170).fork()).join();
		}
		if (message.feature_support !== undefined) {
			FieldOptionsFeatureSupport.encode(message.feature_support, writer.uint32(178).fork()).join();
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FieldOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFieldOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.ctype = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.packed = reader.bool();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.jstype = reader.int32() as any;
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.lazy = reader.bool();
					continue;
				case 15:
					if (tag !== 120) {
						break;
					}

					message.unverified_lazy = reader.bool();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.deprecated = reader.bool();
					continue;
				case 10:
					if (tag !== 80) {
						break;
					}

					message.weak = reader.bool();
					continue;
				case 16:
					if (tag !== 128) {
						break;
					}

					message.debug_redact = reader.bool();
					continue;
				case 17:
					if (tag !== 136) {
						break;
					}

					message.retention = reader.int32() as any;
					continue;
				case 19:
					if (tag === 152) {
						message.targets.push(reader.int32() as any);

						continue;
					}

					if (tag === 154) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.targets.push(reader.int32() as any);
						}

						continue;
					}

					break;
				case 20:
					if (tag !== 162) {
						break;
					}

					message.edition_defaults.push(FieldOptionsEditionDefault.decode(reader, reader.uint32()));
					continue;
				case 21:
					if (tag !== 170) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 22:
					if (tag !== 178) {
						break;
					}

					message.feature_support = FieldOptionsFeatureSupport.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FieldOptions {
		return {
			ctype: isSet(object.ctype) ? fieldOptionsCTypeFromJSON(object.ctype) : 0,
			packed: isSet(object.packed) ? globalThis.Boolean(object.packed) : false,
			jstype: isSet(object.jstype) ? fieldOptionsJSTypeFromJSON(object.jstype) : 0,
			lazy: isSet(object.lazy) ? globalThis.Boolean(object.lazy) : false,
			unverified_lazy: isSet(object.unverified_lazy) ? globalThis.Boolean(object.unverified_lazy) : false,
			deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
			weak: isSet(object.weak) ? globalThis.Boolean(object.weak) : false,
			debug_redact: isSet(object.debug_redact) ? globalThis.Boolean(object.debug_redact) : false,
			retention: isSet(object.retention) ? fieldOptionsOptionRetentionFromJSON(object.retention) : 0,
			targets: globalThis.Array.isArray(object?.targets) ? object.targets.map((e: any) => fieldOptionsOptionTargetTypeFromJSON(e)) : [],
			edition_defaults: globalThis.Array.isArray(object?.edition_defaults)
				? object.edition_defaults.map((e: any) => FieldOptionsEditionDefault.fromJSON(e))
				: [],
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			feature_support: isSet(object.feature_support) ? FieldOptionsFeatureSupport.fromJSON(object.feature_support) : undefined,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: FieldOptions): unknown {
		const obj: any = {};
		if (message.ctype !== undefined && message.ctype !== 0) {
			obj.ctype = fieldOptionsCTypeToJSON(message.ctype);
		}
		if (message.packed !== undefined && message.packed !== false) {
			obj.packed = message.packed;
		}
		if (message.jstype !== undefined && message.jstype !== 0) {
			obj.jstype = fieldOptionsJSTypeToJSON(message.jstype);
		}
		if (message.lazy !== undefined && message.lazy !== false) {
			obj.lazy = message.lazy;
		}
		if (message.unverified_lazy !== undefined && message.unverified_lazy !== false) {
			obj.unverified_lazy = message.unverified_lazy;
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			obj.deprecated = message.deprecated;
		}
		if (message.weak !== undefined && message.weak !== false) {
			obj.weak = message.weak;
		}
		if (message.debug_redact !== undefined && message.debug_redact !== false) {
			obj.debug_redact = message.debug_redact;
		}
		if (message.retention !== undefined && message.retention !== 0) {
			obj.retention = fieldOptionsOptionRetentionToJSON(message.retention);
		}
		if (message.targets?.length) {
			obj.targets = message.targets.map((e) => fieldOptionsOptionTargetTypeToJSON(e));
		}
		if (message.edition_defaults?.length) {
			obj.edition_defaults = message.edition_defaults.map((e) => FieldOptionsEditionDefault.toJSON(e));
		}
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.feature_support !== undefined) {
			obj.feature_support = FieldOptionsFeatureSupport.toJSON(message.feature_support);
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FieldOptions>, I>>(base?: I): FieldOptions {
		return FieldOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FieldOptions>, I>>(object: I): FieldOptions {
		const message = createBaseFieldOptions();
		message.ctype = object.ctype ?? 0;
		message.packed = object.packed ?? false;
		message.jstype = object.jstype ?? 0;
		message.lazy = object.lazy ?? false;
		message.unverified_lazy = object.unverified_lazy ?? false;
		message.deprecated = object.deprecated ?? false;
		message.weak = object.weak ?? false;
		message.debug_redact = object.debug_redact ?? false;
		message.retention = object.retention ?? 0;
		message.targets = object.targets?.map((e) => e) || [];
		message.edition_defaults = object.edition_defaults?.map((e) => FieldOptionsEditionDefault.fromPartial(e)) || [];
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.feature_support =
			object.feature_support !== undefined && object.feature_support !== null ? FieldOptionsFeatureSupport.fromPartial(object.feature_support) : undefined;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const FieldOptionsEditionDefault: MessageFns<FieldOptionsEditionDefault, "google.protobuf.FieldOptions.EditionDefault"> = {
	$type: "google.protobuf.FieldOptions.EditionDefault" as const,

	encode(message: FieldOptionsEditionDefault, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.edition !== undefined && message.edition !== 0) {
			writer.uint32(24).int32(message.edition);
		}
		if (message.value !== undefined && message.value !== "") {
			writer.uint32(18).string(message.value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FieldOptionsEditionDefault {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFieldOptionsEditionDefault();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 3:
					if (tag !== 24) {
						break;
					}

					message.edition = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.value = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FieldOptionsEditionDefault {
		return {
			edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
			value: isSet(object.value) ? globalThis.String(object.value) : ""
		};
	},

	toJSON(message: FieldOptionsEditionDefault): unknown {
		const obj: any = {};
		if (message.edition !== undefined && message.edition !== 0) {
			obj.edition = editionToJSON(message.edition);
		}
		if (message.value !== undefined && message.value !== "") {
			obj.value = message.value;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FieldOptionsEditionDefault>, I>>(base?: I): FieldOptionsEditionDefault {
		return FieldOptionsEditionDefault.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FieldOptionsEditionDefault>, I>>(object: I): FieldOptionsEditionDefault {
		const message = createBaseFieldOptionsEditionDefault();
		message.edition = object.edition ?? 0;
		message.value = object.value ?? "";
		return message;
	}
};

export const FieldOptionsFeatureSupport: MessageFns<FieldOptionsFeatureSupport, "google.protobuf.FieldOptions.FeatureSupport"> = {
	$type: "google.protobuf.FieldOptions.FeatureSupport" as const,

	encode(message: FieldOptionsFeatureSupport, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.edition_introduced !== undefined && message.edition_introduced !== 0) {
			writer.uint32(8).int32(message.edition_introduced);
		}
		if (message.edition_deprecated !== undefined && message.edition_deprecated !== 0) {
			writer.uint32(16).int32(message.edition_deprecated);
		}
		if (message.deprecation_warning !== undefined && message.deprecation_warning !== "") {
			writer.uint32(26).string(message.deprecation_warning);
		}
		if (message.edition_removed !== undefined && message.edition_removed !== 0) {
			writer.uint32(32).int32(message.edition_removed);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FieldOptionsFeatureSupport {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFieldOptionsFeatureSupport();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.edition_introduced = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.edition_deprecated = reader.int32() as any;
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.deprecation_warning = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.edition_removed = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FieldOptionsFeatureSupport {
		return {
			edition_introduced: isSet(object.edition_introduced) ? editionFromJSON(object.edition_introduced) : 0,
			edition_deprecated: isSet(object.edition_deprecated) ? editionFromJSON(object.edition_deprecated) : 0,
			deprecation_warning: isSet(object.deprecation_warning) ? globalThis.String(object.deprecation_warning) : "",
			edition_removed: isSet(object.edition_removed) ? editionFromJSON(object.edition_removed) : 0
		};
	},

	toJSON(message: FieldOptionsFeatureSupport): unknown {
		const obj: any = {};
		if (message.edition_introduced !== undefined && message.edition_introduced !== 0) {
			obj.edition_introduced = editionToJSON(message.edition_introduced);
		}
		if (message.edition_deprecated !== undefined && message.edition_deprecated !== 0) {
			obj.edition_deprecated = editionToJSON(message.edition_deprecated);
		}
		if (message.deprecation_warning !== undefined && message.deprecation_warning !== "") {
			obj.deprecation_warning = message.deprecation_warning;
		}
		if (message.edition_removed !== undefined && message.edition_removed !== 0) {
			obj.edition_removed = editionToJSON(message.edition_removed);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FieldOptionsFeatureSupport>, I>>(base?: I): FieldOptionsFeatureSupport {
		return FieldOptionsFeatureSupport.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FieldOptionsFeatureSupport>, I>>(object: I): FieldOptionsFeatureSupport {
		const message = createBaseFieldOptionsFeatureSupport();
		message.edition_introduced = object.edition_introduced ?? 0;
		message.edition_deprecated = object.edition_deprecated ?? 0;
		message.deprecation_warning = object.deprecation_warning ?? "";
		message.edition_removed = object.edition_removed ?? 0;
		return message;
	}
};

export const OneofOptions: MessageFns<OneofOptions, "google.protobuf.OneofOptions"> = {
	$type: "google.protobuf.OneofOptions" as const,

	encode(message: OneofOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(10).fork()).join();
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): OneofOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseOneofOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): OneofOptions {
		return {
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: OneofOptions): unknown {
		const obj: any = {};
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<OneofOptions>, I>>(base?: I): OneofOptions {
		return OneofOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<OneofOptions>, I>>(object: I): OneofOptions {
		const message = createBaseOneofOptions();
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const EnumOptions: MessageFns<EnumOptions, "google.protobuf.EnumOptions"> = {
	$type: "google.protobuf.EnumOptions" as const,

	encode(message: EnumOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.allow_alias !== undefined && message.allow_alias !== false) {
			writer.uint32(16).bool(message.allow_alias);
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			writer.uint32(24).bool(message.deprecated);
		}
		if (message.deprecated_legacy_json_field_conflicts !== undefined && message.deprecated_legacy_json_field_conflicts !== false) {
			writer.uint32(48).bool(message.deprecated_legacy_json_field_conflicts);
		}
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(58).fork()).join();
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EnumOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEnumOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 16) {
						break;
					}

					message.allow_alias = reader.bool();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.deprecated = reader.bool();
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.deprecated_legacy_json_field_conflicts = reader.bool();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EnumOptions {
		return {
			allow_alias: isSet(object.allow_alias) ? globalThis.Boolean(object.allow_alias) : false,
			deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
			deprecated_legacy_json_field_conflicts: isSet(object.deprecated_legacy_json_field_conflicts)
				? globalThis.Boolean(object.deprecated_legacy_json_field_conflicts)
				: false,
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: EnumOptions): unknown {
		const obj: any = {};
		if (message.allow_alias !== undefined && message.allow_alias !== false) {
			obj.allow_alias = message.allow_alias;
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			obj.deprecated = message.deprecated;
		}
		if (message.deprecated_legacy_json_field_conflicts !== undefined && message.deprecated_legacy_json_field_conflicts !== false) {
			obj.deprecated_legacy_json_field_conflicts = message.deprecated_legacy_json_field_conflicts;
		}
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EnumOptions>, I>>(base?: I): EnumOptions {
		return EnumOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EnumOptions>, I>>(object: I): EnumOptions {
		const message = createBaseEnumOptions();
		message.allow_alias = object.allow_alias ?? false;
		message.deprecated = object.deprecated ?? false;
		message.deprecated_legacy_json_field_conflicts = object.deprecated_legacy_json_field_conflicts ?? false;
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const EnumValueOptions: MessageFns<EnumValueOptions, "google.protobuf.EnumValueOptions"> = {
	$type: "google.protobuf.EnumValueOptions" as const,

	encode(message: EnumValueOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.deprecated !== undefined && message.deprecated !== false) {
			writer.uint32(8).bool(message.deprecated);
		}
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(18).fork()).join();
		}
		if (message.debug_redact !== undefined && message.debug_redact !== false) {
			writer.uint32(24).bool(message.debug_redact);
		}
		if (message.feature_support !== undefined) {
			FieldOptionsFeatureSupport.encode(message.feature_support, writer.uint32(34).fork()).join();
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): EnumValueOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEnumValueOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.deprecated = reader.bool();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.debug_redact = reader.bool();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.feature_support = FieldOptionsFeatureSupport.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): EnumValueOptions {
		return {
			deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			debug_redact: isSet(object.debug_redact) ? globalThis.Boolean(object.debug_redact) : false,
			feature_support: isSet(object.feature_support) ? FieldOptionsFeatureSupport.fromJSON(object.feature_support) : undefined,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: EnumValueOptions): unknown {
		const obj: any = {};
		if (message.deprecated !== undefined && message.deprecated !== false) {
			obj.deprecated = message.deprecated;
		}
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.debug_redact !== undefined && message.debug_redact !== false) {
			obj.debug_redact = message.debug_redact;
		}
		if (message.feature_support !== undefined) {
			obj.feature_support = FieldOptionsFeatureSupport.toJSON(message.feature_support);
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<EnumValueOptions>, I>>(base?: I): EnumValueOptions {
		return EnumValueOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EnumValueOptions>, I>>(object: I): EnumValueOptions {
		const message = createBaseEnumValueOptions();
		message.deprecated = object.deprecated ?? false;
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.debug_redact = object.debug_redact ?? false;
		message.feature_support =
			object.feature_support !== undefined && object.feature_support !== null ? FieldOptionsFeatureSupport.fromPartial(object.feature_support) : undefined;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const ServiceOptions: MessageFns<ServiceOptions, "google.protobuf.ServiceOptions"> = {
	$type: "google.protobuf.ServiceOptions" as const,

	encode(message: ServiceOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(274).fork()).join();
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			writer.uint32(264).bool(message.deprecated);
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): ServiceOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseServiceOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 34:
					if (tag !== 274) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 33:
					if (tag !== 264) {
						break;
					}

					message.deprecated = reader.bool();
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ServiceOptions {
		return {
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: ServiceOptions): unknown {
		const obj: any = {};
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.deprecated !== undefined && message.deprecated !== false) {
			obj.deprecated = message.deprecated;
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ServiceOptions>, I>>(base?: I): ServiceOptions {
		return ServiceOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ServiceOptions>, I>>(object: I): ServiceOptions {
		const message = createBaseServiceOptions();
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.deprecated = object.deprecated ?? false;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const MethodOptions: MessageFns<MethodOptions, "google.protobuf.MethodOptions"> = {
	$type: "google.protobuf.MethodOptions" as const,

	encode(message: MethodOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.deprecated !== undefined && message.deprecated !== false) {
			writer.uint32(264).bool(message.deprecated);
		}
		if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
			writer.uint32(272).int32(message.idempotency_level);
		}
		if (message.features !== undefined) {
			FeatureSet.encode(message.features, writer.uint32(282).fork()).join();
		}
		for (const v of message.uninterpreted_option) {
			UninterpretedOption.encode(v!, writer.uint32(7994).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): MethodOptions {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseMethodOptions();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 33:
					if (tag !== 264) {
						break;
					}

					message.deprecated = reader.bool();
					continue;
				case 34:
					if (tag !== 272) {
						break;
					}

					message.idempotency_level = reader.int32() as any;
					continue;
				case 35:
					if (tag !== 282) {
						break;
					}

					message.features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 999:
					if (tag !== 7994) {
						break;
					}

					message.uninterpreted_option.push(UninterpretedOption.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): MethodOptions {
		return {
			deprecated: isSet(object.deprecated) ? globalThis.Boolean(object.deprecated) : false,
			idempotency_level: isSet(object.idempotency_level) ? methodOptionsIdempotencyLevelFromJSON(object.idempotency_level) : 0,
			features: isSet(object.features) ? FeatureSet.fromJSON(object.features) : undefined,
			uninterpreted_option: globalThis.Array.isArray(object?.uninterpreted_option)
				? object.uninterpreted_option.map((e: any) => UninterpretedOption.fromJSON(e))
				: []
		};
	},

	toJSON(message: MethodOptions): unknown {
		const obj: any = {};
		if (message.deprecated !== undefined && message.deprecated !== false) {
			obj.deprecated = message.deprecated;
		}
		if (message.idempotency_level !== undefined && message.idempotency_level !== 0) {
			obj.idempotency_level = methodOptionsIdempotencyLevelToJSON(message.idempotency_level);
		}
		if (message.features !== undefined) {
			obj.features = FeatureSet.toJSON(message.features);
		}
		if (message.uninterpreted_option?.length) {
			obj.uninterpreted_option = message.uninterpreted_option.map((e) => UninterpretedOption.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<MethodOptions>, I>>(base?: I): MethodOptions {
		return MethodOptions.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<MethodOptions>, I>>(object: I): MethodOptions {
		const message = createBaseMethodOptions();
		message.deprecated = object.deprecated ?? false;
		message.idempotency_level = object.idempotency_level ?? 0;
		message.features = object.features !== undefined && object.features !== null ? FeatureSet.fromPartial(object.features) : undefined;
		message.uninterpreted_option = object.uninterpreted_option?.map((e) => UninterpretedOption.fromPartial(e)) || [];
		return message;
	}
};

export const UninterpretedOption: MessageFns<UninterpretedOption, "google.protobuf.UninterpretedOption"> = {
	$type: "google.protobuf.UninterpretedOption" as const,

	encode(message: UninterpretedOption, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.name) {
			UninterpretedOptionNamePart.encode(v!, writer.uint32(18).fork()).join();
		}
		if (message.identifier_value !== undefined && message.identifier_value !== "") {
			writer.uint32(26).string(message.identifier_value);
		}
		if (message.positive_int_value !== undefined && message.positive_int_value !== 0) {
			writer.uint32(32).uint64(message.positive_int_value);
		}
		if (message.negative_int_value !== undefined && message.negative_int_value !== 0) {
			writer.uint32(40).int64(message.negative_int_value);
		}
		if (message.double_value !== undefined && message.double_value !== 0) {
			writer.uint32(49).double(message.double_value);
		}
		if (message.string_value !== undefined && message.string_value.length !== 0) {
			writer.uint32(58).bytes(message.string_value);
		}
		if (message.aggregate_value !== undefined && message.aggregate_value !== "") {
			writer.uint32(66).string(message.aggregate_value);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOption {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseUninterpretedOption();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					if (tag !== 18) {
						break;
					}

					message.name.push(UninterpretedOptionNamePart.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.identifier_value = reader.string();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.positive_int_value = longToNumber(reader.uint64());
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.negative_int_value = longToNumber(reader.int64());
					continue;
				case 6:
					if (tag !== 49) {
						break;
					}

					message.double_value = reader.double();
					continue;
				case 7:
					if (tag !== 58) {
						break;
					}

					message.string_value = reader.bytes();
					continue;
				case 8:
					if (tag !== 66) {
						break;
					}

					message.aggregate_value = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): UninterpretedOption {
		return {
			name: globalThis.Array.isArray(object?.name) ? object.name.map((e: any) => UninterpretedOptionNamePart.fromJSON(e)) : [],
			identifier_value: isSet(object.identifier_value) ? globalThis.String(object.identifier_value) : "",
			positive_int_value: isSet(object.positive_int_value) ? globalThis.Number(object.positive_int_value) : 0,
			negative_int_value: isSet(object.negative_int_value) ? globalThis.Number(object.negative_int_value) : 0,
			double_value: isSet(object.double_value) ? globalThis.Number(object.double_value) : 0,
			string_value: isSet(object.string_value) ? bytesFromBase64(object.string_value) : new Uint8Array(0),
			aggregate_value: isSet(object.aggregate_value) ? globalThis.String(object.aggregate_value) : ""
		};
	},

	toJSON(message: UninterpretedOption): unknown {
		const obj: any = {};
		if (message.name?.length) {
			obj.name = message.name.map((e) => UninterpretedOptionNamePart.toJSON(e));
		}
		if (message.identifier_value !== undefined && message.identifier_value !== "") {
			obj.identifier_value = message.identifier_value;
		}
		if (message.positive_int_value !== undefined && message.positive_int_value !== 0) {
			obj.positive_int_value = Math.round(message.positive_int_value);
		}
		if (message.negative_int_value !== undefined && message.negative_int_value !== 0) {
			obj.negative_int_value = Math.round(message.negative_int_value);
		}
		if (message.double_value !== undefined && message.double_value !== 0) {
			obj.double_value = message.double_value;
		}
		if (message.string_value !== undefined && message.string_value.length !== 0) {
			obj.string_value = base64FromBytes(message.string_value);
		}
		if (message.aggregate_value !== undefined && message.aggregate_value !== "") {
			obj.aggregate_value = message.aggregate_value;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<UninterpretedOption>, I>>(base?: I): UninterpretedOption {
		return UninterpretedOption.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<UninterpretedOption>, I>>(object: I): UninterpretedOption {
		const message = createBaseUninterpretedOption();
		message.name = object.name?.map((e) => UninterpretedOptionNamePart.fromPartial(e)) || [];
		message.identifier_value = object.identifier_value ?? "";
		message.positive_int_value = object.positive_int_value ?? 0;
		message.negative_int_value = object.negative_int_value ?? 0;
		message.double_value = object.double_value ?? 0;
		message.string_value = object.string_value ?? new Uint8Array(0);
		message.aggregate_value = object.aggregate_value ?? "";
		return message;
	}
};

export const UninterpretedOptionNamePart: MessageFns<UninterpretedOptionNamePart, "google.protobuf.UninterpretedOption.NamePart"> = {
	$type: "google.protobuf.UninterpretedOption.NamePart" as const,

	encode(message: UninterpretedOptionNamePart, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.name_part !== "") {
			writer.uint32(10).string(message.name_part);
		}
		if (message.is_extension !== false) {
			writer.uint32(16).bool(message.is_extension);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): UninterpretedOptionNamePart {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseUninterpretedOptionNamePart();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.name_part = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.is_extension = reader.bool();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): UninterpretedOptionNamePart {
		return {
			name_part: isSet(object.name_part) ? globalThis.String(object.name_part) : "",
			is_extension: isSet(object.is_extension) ? globalThis.Boolean(object.is_extension) : false
		};
	},

	toJSON(message: UninterpretedOptionNamePart): unknown {
		const obj: any = {};
		if (message.name_part !== "") {
			obj.name_part = message.name_part;
		}
		if (message.is_extension !== false) {
			obj.is_extension = message.is_extension;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<UninterpretedOptionNamePart>, I>>(base?: I): UninterpretedOptionNamePart {
		return UninterpretedOptionNamePart.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<UninterpretedOptionNamePart>, I>>(object: I): UninterpretedOptionNamePart {
		const message = createBaseUninterpretedOptionNamePart();
		message.name_part = object.name_part ?? "";
		message.is_extension = object.is_extension ?? false;
		return message;
	}
};

export const FeatureSet: MessageFns<FeatureSet, "google.protobuf.FeatureSet"> = {
	$type: "google.protobuf.FeatureSet" as const,

	encode(message: FeatureSet, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.field_presence !== undefined && message.field_presence !== 0) {
			writer.uint32(8).int32(message.field_presence);
		}
		if (message.enum_type !== undefined && message.enum_type !== 0) {
			writer.uint32(16).int32(message.enum_type);
		}
		if (message.repeated_field_encoding !== undefined && message.repeated_field_encoding !== 0) {
			writer.uint32(24).int32(message.repeated_field_encoding);
		}
		if (message.utf8_validation !== undefined && message.utf8_validation !== 0) {
			writer.uint32(32).int32(message.utf8_validation);
		}
		if (message.message_encoding !== undefined && message.message_encoding !== 0) {
			writer.uint32(40).int32(message.message_encoding);
		}
		if (message.json_format !== undefined && message.json_format !== 0) {
			writer.uint32(48).int32(message.json_format);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FeatureSet {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFeatureSet();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.field_presence = reader.int32() as any;
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.enum_type = reader.int32() as any;
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.repeated_field_encoding = reader.int32() as any;
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.utf8_validation = reader.int32() as any;
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.message_encoding = reader.int32() as any;
					continue;
				case 6:
					if (tag !== 48) {
						break;
					}

					message.json_format = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FeatureSet {
		return {
			field_presence: isSet(object.field_presence) ? featureSetFieldPresenceFromJSON(object.field_presence) : 0,
			enum_type: isSet(object.enum_type) ? featureSetEnumTypeFromJSON(object.enum_type) : 0,
			repeated_field_encoding: isSet(object.repeated_field_encoding) ? featureSetRepeatedFieldEncodingFromJSON(object.repeated_field_encoding) : 0,
			utf8_validation: isSet(object.utf8_validation) ? featureSetUtf8ValidationFromJSON(object.utf8_validation) : 0,
			message_encoding: isSet(object.message_encoding) ? featureSetMessageEncodingFromJSON(object.message_encoding) : 0,
			json_format: isSet(object.json_format) ? featureSetJsonFormatFromJSON(object.json_format) : 0
		};
	},

	toJSON(message: FeatureSet): unknown {
		const obj: any = {};
		if (message.field_presence !== undefined && message.field_presence !== 0) {
			obj.field_presence = featureSetFieldPresenceToJSON(message.field_presence);
		}
		if (message.enum_type !== undefined && message.enum_type !== 0) {
			obj.enum_type = featureSetEnumTypeToJSON(message.enum_type);
		}
		if (message.repeated_field_encoding !== undefined && message.repeated_field_encoding !== 0) {
			obj.repeated_field_encoding = featureSetRepeatedFieldEncodingToJSON(message.repeated_field_encoding);
		}
		if (message.utf8_validation !== undefined && message.utf8_validation !== 0) {
			obj.utf8_validation = featureSetUtf8ValidationToJSON(message.utf8_validation);
		}
		if (message.message_encoding !== undefined && message.message_encoding !== 0) {
			obj.message_encoding = featureSetMessageEncodingToJSON(message.message_encoding);
		}
		if (message.json_format !== undefined && message.json_format !== 0) {
			obj.json_format = featureSetJsonFormatToJSON(message.json_format);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FeatureSet>, I>>(base?: I): FeatureSet {
		return FeatureSet.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FeatureSet>, I>>(object: I): FeatureSet {
		const message = createBaseFeatureSet();
		message.field_presence = object.field_presence ?? 0;
		message.enum_type = object.enum_type ?? 0;
		message.repeated_field_encoding = object.repeated_field_encoding ?? 0;
		message.utf8_validation = object.utf8_validation ?? 0;
		message.message_encoding = object.message_encoding ?? 0;
		message.json_format = object.json_format ?? 0;
		return message;
	}
};

export const FeatureSetDefaults: MessageFns<FeatureSetDefaults, "google.protobuf.FeatureSetDefaults"> = {
	$type: "google.protobuf.FeatureSetDefaults" as const,

	encode(message: FeatureSetDefaults, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.defaults) {
			FeatureSetDefaultsFeatureSetEditionDefault.encode(v!, writer.uint32(10).fork()).join();
		}
		if (message.minimum_edition !== undefined && message.minimum_edition !== 0) {
			writer.uint32(32).int32(message.minimum_edition);
		}
		if (message.maximum_edition !== undefined && message.maximum_edition !== 0) {
			writer.uint32(40).int32(message.maximum_edition);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaults {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFeatureSetDefaults();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.defaults.push(FeatureSetDefaultsFeatureSetEditionDefault.decode(reader, reader.uint32()));
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.minimum_edition = reader.int32() as any;
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.maximum_edition = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FeatureSetDefaults {
		return {
			defaults: globalThis.Array.isArray(object?.defaults) ? object.defaults.map((e: any) => FeatureSetDefaultsFeatureSetEditionDefault.fromJSON(e)) : [],
			minimum_edition: isSet(object.minimum_edition) ? editionFromJSON(object.minimum_edition) : 0,
			maximum_edition: isSet(object.maximum_edition) ? editionFromJSON(object.maximum_edition) : 0
		};
	},

	toJSON(message: FeatureSetDefaults): unknown {
		const obj: any = {};
		if (message.defaults?.length) {
			obj.defaults = message.defaults.map((e) => FeatureSetDefaultsFeatureSetEditionDefault.toJSON(e));
		}
		if (message.minimum_edition !== undefined && message.minimum_edition !== 0) {
			obj.minimum_edition = editionToJSON(message.minimum_edition);
		}
		if (message.maximum_edition !== undefined && message.maximum_edition !== 0) {
			obj.maximum_edition = editionToJSON(message.maximum_edition);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FeatureSetDefaults>, I>>(base?: I): FeatureSetDefaults {
		return FeatureSetDefaults.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FeatureSetDefaults>, I>>(object: I): FeatureSetDefaults {
		const message = createBaseFeatureSetDefaults();
		message.defaults = object.defaults?.map((e) => FeatureSetDefaultsFeatureSetEditionDefault.fromPartial(e)) || [];
		message.minimum_edition = object.minimum_edition ?? 0;
		message.maximum_edition = object.maximum_edition ?? 0;
		return message;
	}
};

export const FeatureSetDefaultsFeatureSetEditionDefault: MessageFns<
	FeatureSetDefaultsFeatureSetEditionDefault,
	"google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault"
> = {
	$type: "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault" as const,

	encode(message: FeatureSetDefaultsFeatureSetEditionDefault, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		if (message.edition !== undefined && message.edition !== 0) {
			writer.uint32(24).int32(message.edition);
		}
		if (message.overridable_features !== undefined) {
			FeatureSet.encode(message.overridable_features, writer.uint32(34).fork()).join();
		}
		if (message.fixed_features !== undefined) {
			FeatureSet.encode(message.fixed_features, writer.uint32(42).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): FeatureSetDefaultsFeatureSetEditionDefault {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFeatureSetDefaultsFeatureSetEditionDefault();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 3:
					if (tag !== 24) {
						break;
					}

					message.edition = reader.int32() as any;
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.overridable_features = FeatureSet.decode(reader, reader.uint32());
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.fixed_features = FeatureSet.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FeatureSetDefaultsFeatureSetEditionDefault {
		return {
			edition: isSet(object.edition) ? editionFromJSON(object.edition) : 0,
			overridable_features: isSet(object.overridable_features) ? FeatureSet.fromJSON(object.overridable_features) : undefined,
			fixed_features: isSet(object.fixed_features) ? FeatureSet.fromJSON(object.fixed_features) : undefined
		};
	},

	toJSON(message: FeatureSetDefaultsFeatureSetEditionDefault): unknown {
		const obj: any = {};
		if (message.edition !== undefined && message.edition !== 0) {
			obj.edition = editionToJSON(message.edition);
		}
		if (message.overridable_features !== undefined) {
			obj.overridable_features = FeatureSet.toJSON(message.overridable_features);
		}
		if (message.fixed_features !== undefined) {
			obj.fixed_features = FeatureSet.toJSON(message.fixed_features);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FeatureSetDefaultsFeatureSetEditionDefault>, I>>(base?: I): FeatureSetDefaultsFeatureSetEditionDefault {
		return FeatureSetDefaultsFeatureSetEditionDefault.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FeatureSetDefaultsFeatureSetEditionDefault>, I>>(object: I): FeatureSetDefaultsFeatureSetEditionDefault {
		const message = createBaseFeatureSetDefaultsFeatureSetEditionDefault();
		message.edition = object.edition ?? 0;
		message.overridable_features =
			object.overridable_features !== undefined && object.overridable_features !== null ? FeatureSet.fromPartial(object.overridable_features) : undefined;
		message.fixed_features = object.fixed_features !== undefined && object.fixed_features !== null ? FeatureSet.fromPartial(object.fixed_features) : undefined;
		return message;
	}
};

export const SourceCodeInfo: MessageFns<SourceCodeInfo, "google.protobuf.SourceCodeInfo"> = {
	$type: "google.protobuf.SourceCodeInfo" as const,

	encode(message: SourceCodeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.location) {
			SourceCodeInfoLocation.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSourceCodeInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.location.push(SourceCodeInfoLocation.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SourceCodeInfo {
		return {
			location: globalThis.Array.isArray(object?.location) ? object.location.map((e: any) => SourceCodeInfoLocation.fromJSON(e)) : []
		};
	},

	toJSON(message: SourceCodeInfo): unknown {
		const obj: any = {};
		if (message.location?.length) {
			obj.location = message.location.map((e) => SourceCodeInfoLocation.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SourceCodeInfo>, I>>(base?: I): SourceCodeInfo {
		return SourceCodeInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SourceCodeInfo>, I>>(object: I): SourceCodeInfo {
		const message = createBaseSourceCodeInfo();
		message.location = object.location?.map((e) => SourceCodeInfoLocation.fromPartial(e)) || [];
		return message;
	}
};

export const SourceCodeInfoLocation: MessageFns<SourceCodeInfoLocation, "google.protobuf.SourceCodeInfo.Location"> = {
	$type: "google.protobuf.SourceCodeInfo.Location" as const,

	encode(message: SourceCodeInfoLocation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		writer.uint32(10).fork();
		for (const v of message.path) {
			writer.int32(v);
		}
		writer.join();
		writer.uint32(18).fork();
		for (const v of message.span) {
			writer.int32(v);
		}
		writer.join();
		if (message.leading_comments !== undefined && message.leading_comments !== "") {
			writer.uint32(26).string(message.leading_comments);
		}
		if (message.trailing_comments !== undefined && message.trailing_comments !== "") {
			writer.uint32(34).string(message.trailing_comments);
		}
		for (const v of message.leading_detached_comments) {
			writer.uint32(50).string(v!);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): SourceCodeInfoLocation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseSourceCodeInfoLocation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag === 8) {
						message.path.push(reader.int32());

						continue;
					}

					if (tag === 10) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.path.push(reader.int32());
						}

						continue;
					}

					break;
				case 2:
					if (tag === 16) {
						message.span.push(reader.int32());

						continue;
					}

					if (tag === 18) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.span.push(reader.int32());
						}

						continue;
					}

					break;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.leading_comments = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.trailing_comments = reader.string();
					continue;
				case 6:
					if (tag !== 50) {
						break;
					}

					message.leading_detached_comments.push(reader.string());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): SourceCodeInfoLocation {
		return {
			path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.Number(e)) : [],
			span: globalThis.Array.isArray(object?.span) ? object.span.map((e: any) => globalThis.Number(e)) : [],
			leading_comments: isSet(object.leading_comments) ? globalThis.String(object.leading_comments) : "",
			trailing_comments: isSet(object.trailing_comments) ? globalThis.String(object.trailing_comments) : "",
			leading_detached_comments: globalThis.Array.isArray(object?.leading_detached_comments)
				? object.leading_detached_comments.map((e: any) => globalThis.String(e))
				: []
		};
	},

	toJSON(message: SourceCodeInfoLocation): unknown {
		const obj: any = {};
		if (message.path?.length) {
			obj.path = message.path.map((e) => Math.round(e));
		}
		if (message.span?.length) {
			obj.span = message.span.map((e) => Math.round(e));
		}
		if (message.leading_comments !== undefined && message.leading_comments !== "") {
			obj.leading_comments = message.leading_comments;
		}
		if (message.trailing_comments !== undefined && message.trailing_comments !== "") {
			obj.trailing_comments = message.trailing_comments;
		}
		if (message.leading_detached_comments?.length) {
			obj.leading_detached_comments = message.leading_detached_comments;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<SourceCodeInfoLocation>, I>>(base?: I): SourceCodeInfoLocation {
		return SourceCodeInfoLocation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<SourceCodeInfoLocation>, I>>(object: I): SourceCodeInfoLocation {
		const message = createBaseSourceCodeInfoLocation();
		message.path = object.path?.map((e) => e) || [];
		message.span = object.span?.map((e) => e) || [];
		message.leading_comments = object.leading_comments ?? "";
		message.trailing_comments = object.trailing_comments ?? "";
		message.leading_detached_comments = object.leading_detached_comments?.map((e) => e) || [];
		return message;
	}
};

export const GeneratedCodeInfo: MessageFns<GeneratedCodeInfo, "google.protobuf.GeneratedCodeInfo"> = {
	$type: "google.protobuf.GeneratedCodeInfo" as const,

	encode(message: GeneratedCodeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		for (const v of message.annotation) {
			GeneratedCodeInfoAnnotation.encode(v!, writer.uint32(10).fork()).join();
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfo {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGeneratedCodeInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.annotation.push(GeneratedCodeInfoAnnotation.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GeneratedCodeInfo {
		return {
			annotation: globalThis.Array.isArray(object?.annotation) ? object.annotation.map((e: any) => GeneratedCodeInfoAnnotation.fromJSON(e)) : []
		};
	},

	toJSON(message: GeneratedCodeInfo): unknown {
		const obj: any = {};
		if (message.annotation?.length) {
			obj.annotation = message.annotation.map((e) => GeneratedCodeInfoAnnotation.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GeneratedCodeInfo>, I>>(base?: I): GeneratedCodeInfo {
		return GeneratedCodeInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GeneratedCodeInfo>, I>>(object: I): GeneratedCodeInfo {
		const message = createBaseGeneratedCodeInfo();
		message.annotation = object.annotation?.map((e) => GeneratedCodeInfoAnnotation.fromPartial(e)) || [];
		return message;
	}
};

export const GeneratedCodeInfoAnnotation: MessageFns<GeneratedCodeInfoAnnotation, "google.protobuf.GeneratedCodeInfo.Annotation"> = {
	$type: "google.protobuf.GeneratedCodeInfo.Annotation" as const,

	encode(message: GeneratedCodeInfoAnnotation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
		writer.uint32(10).fork();
		for (const v of message.path) {
			writer.int32(v);
		}
		writer.join();
		if (message.source_file !== undefined && message.source_file !== "") {
			writer.uint32(18).string(message.source_file);
		}
		if (message.begin !== undefined && message.begin !== 0) {
			writer.uint32(24).int32(message.begin);
		}
		if (message.end !== undefined && message.end !== 0) {
			writer.uint32(32).int32(message.end);
		}
		if (message.semantic !== undefined && message.semantic !== 0) {
			writer.uint32(40).int32(message.semantic);
		}
		return writer;
	},

	decode(input: BinaryReader | Uint8Array, length?: number): GeneratedCodeInfoAnnotation {
		const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
		const end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseGeneratedCodeInfoAnnotation();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag === 8) {
						message.path.push(reader.int32());

						continue;
					}

					if (tag === 10) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.path.push(reader.int32());
						}

						continue;
					}

					break;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.source_file = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.begin = reader.int32();
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.end = reader.int32();
					continue;
				case 5:
					if (tag !== 40) {
						break;
					}

					message.semantic = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skip(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): GeneratedCodeInfoAnnotation {
		return {
			path: globalThis.Array.isArray(object?.path) ? object.path.map((e: any) => globalThis.Number(e)) : [],
			source_file: isSet(object.source_file) ? globalThis.String(object.source_file) : "",
			begin: isSet(object.begin) ? globalThis.Number(object.begin) : 0,
			end: isSet(object.end) ? globalThis.Number(object.end) : 0,
			semantic: isSet(object.semantic) ? generatedCodeInfoAnnotationSemanticFromJSON(object.semantic) : 0
		};
	},

	toJSON(message: GeneratedCodeInfoAnnotation): unknown {
		const obj: any = {};
		if (message.path?.length) {
			obj.path = message.path.map((e) => Math.round(e));
		}
		if (message.source_file !== undefined && message.source_file !== "") {
			obj.source_file = message.source_file;
		}
		if (message.begin !== undefined && message.begin !== 0) {
			obj.begin = Math.round(message.begin);
		}
		if (message.end !== undefined && message.end !== 0) {
			obj.end = Math.round(message.end);
		}
		if (message.semantic !== undefined && message.semantic !== 0) {
			obj.semantic = generatedCodeInfoAnnotationSemanticToJSON(message.semantic);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<GeneratedCodeInfoAnnotation>, I>>(base?: I): GeneratedCodeInfoAnnotation {
		return GeneratedCodeInfoAnnotation.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<GeneratedCodeInfoAnnotation>, I>>(object: I): GeneratedCodeInfoAnnotation {
		const message = createBaseGeneratedCodeInfoAnnotation();
		message.path = object.path?.map((e) => e) || [];
		message.source_file = object.source_file ?? "";
		message.begin = object.begin ?? 0;
		message.end = object.end ?? 0;
		message.semantic = object.semantic ?? 0;
		return message;
	}
};

export function editionFromJSON(object: any): Edition {
	switch (object) {
		case 0:
		case "EDITION_UNKNOWN":
			return Edition.EDITION_UNKNOWN;
		case 900:
		case "EDITION_LEGACY":
			return Edition.EDITION_LEGACY;
		case 998:
		case "EDITION_PROTO2":
			return Edition.EDITION_PROTO2;
		case 999:
		case "EDITION_PROTO3":
			return Edition.EDITION_PROTO3;
		case 1000:
		case "EDITION_2023":
			return Edition.EDITION_2023;
		case 1001:
		case "EDITION_2024":
			return Edition.EDITION_2024;
		case 1:
		case "EDITION_1_TEST_ONLY":
			return Edition.EDITION_1_TEST_ONLY;
		case 2:
		case "EDITION_2_TEST_ONLY":
			return Edition.EDITION_2_TEST_ONLY;
		case 99997:
		case "EDITION_99997_TEST_ONLY":
			return Edition.EDITION_99997_TEST_ONLY;
		case 99998:
		case "EDITION_99998_TEST_ONLY":
			return Edition.EDITION_99998_TEST_ONLY;
		case 99999:
		case "EDITION_99999_TEST_ONLY":
			return Edition.EDITION_99999_TEST_ONLY;
		case 2147483647:
		case "EDITION_MAX":
			return Edition.EDITION_MAX;
		case -1:
		case "UNRECOGNIZED":
		default:
			return Edition.UNRECOGNIZED;
	}
}

export function editionToJSON(object: Edition): string {
	switch (object) {
		case Edition.EDITION_UNKNOWN:
			return "EDITION_UNKNOWN";
		case Edition.EDITION_LEGACY:
			return "EDITION_LEGACY";
		case Edition.EDITION_PROTO2:
			return "EDITION_PROTO2";
		case Edition.EDITION_PROTO3:
			return "EDITION_PROTO3";
		case Edition.EDITION_2023:
			return "EDITION_2023";
		case Edition.EDITION_2024:
			return "EDITION_2024";
		case Edition.EDITION_1_TEST_ONLY:
			return "EDITION_1_TEST_ONLY";
		case Edition.EDITION_2_TEST_ONLY:
			return "EDITION_2_TEST_ONLY";
		case Edition.EDITION_99997_TEST_ONLY:
			return "EDITION_99997_TEST_ONLY";
		case Edition.EDITION_99998_TEST_ONLY:
			return "EDITION_99998_TEST_ONLY";
		case Edition.EDITION_99999_TEST_ONLY:
			return "EDITION_99999_TEST_ONLY";
		case Edition.EDITION_MAX:
			return "EDITION_MAX";
		case Edition.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function extensionRangeOptionsVerificationStateFromJSON(object: any): ExtensionRangeOptionsVerificationState {
	switch (object) {
		case 0:
		case "DECLARATION":
			return ExtensionRangeOptionsVerificationState.DECLARATION;
		case 1:
		case "UNVERIFIED":
			return ExtensionRangeOptionsVerificationState.UNVERIFIED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return ExtensionRangeOptionsVerificationState.UNRECOGNIZED;
	}
}

export function extensionRangeOptionsVerificationStateToJSON(object: ExtensionRangeOptionsVerificationState): string {
	switch (object) {
		case ExtensionRangeOptionsVerificationState.DECLARATION:
			return "DECLARATION";
		case ExtensionRangeOptionsVerificationState.UNVERIFIED:
			return "UNVERIFIED";
		case ExtensionRangeOptionsVerificationState.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function fieldDescriptorProtoTypeFromJSON(object: any): FieldDescriptorProtoType {
	switch (object) {
		case 1:
		case "TYPE_DOUBLE":
			return FieldDescriptorProtoType.TYPE_DOUBLE;
		case 2:
		case "TYPE_FLOAT":
			return FieldDescriptorProtoType.TYPE_FLOAT;
		case 3:
		case "TYPE_INT64":
			return FieldDescriptorProtoType.TYPE_INT64;
		case 4:
		case "TYPE_UINT64":
			return FieldDescriptorProtoType.TYPE_UINT64;
		case 5:
		case "TYPE_INT32":
			return FieldDescriptorProtoType.TYPE_INT32;
		case 6:
		case "TYPE_FIXED64":
			return FieldDescriptorProtoType.TYPE_FIXED64;
		case 7:
		case "TYPE_FIXED32":
			return FieldDescriptorProtoType.TYPE_FIXED32;
		case 8:
		case "TYPE_BOOL":
			return FieldDescriptorProtoType.TYPE_BOOL;
		case 9:
		case "TYPE_STRING":
			return FieldDescriptorProtoType.TYPE_STRING;
		case 10:
		case "TYPE_GROUP":
			return FieldDescriptorProtoType.TYPE_GROUP;
		case 11:
		case "TYPE_MESSAGE":
			return FieldDescriptorProtoType.TYPE_MESSAGE;
		case 12:
		case "TYPE_BYTES":
			return FieldDescriptorProtoType.TYPE_BYTES;
		case 13:
		case "TYPE_UINT32":
			return FieldDescriptorProtoType.TYPE_UINT32;
		case 14:
		case "TYPE_ENUM":
			return FieldDescriptorProtoType.TYPE_ENUM;
		case 15:
		case "TYPE_SFIXED32":
			return FieldDescriptorProtoType.TYPE_SFIXED32;
		case 16:
		case "TYPE_SFIXED64":
			return FieldDescriptorProtoType.TYPE_SFIXED64;
		case 17:
		case "TYPE_SINT32":
			return FieldDescriptorProtoType.TYPE_SINT32;
		case 18:
		case "TYPE_SINT64":
			return FieldDescriptorProtoType.TYPE_SINT64;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FieldDescriptorProtoType.UNRECOGNIZED;
	}
}

export function fieldDescriptorProtoTypeToJSON(object: FieldDescriptorProtoType): string {
	switch (object) {
		case FieldDescriptorProtoType.TYPE_DOUBLE:
			return "TYPE_DOUBLE";
		case FieldDescriptorProtoType.TYPE_FLOAT:
			return "TYPE_FLOAT";
		case FieldDescriptorProtoType.TYPE_INT64:
			return "TYPE_INT64";
		case FieldDescriptorProtoType.TYPE_UINT64:
			return "TYPE_UINT64";
		case FieldDescriptorProtoType.TYPE_INT32:
			return "TYPE_INT32";
		case FieldDescriptorProtoType.TYPE_FIXED64:
			return "TYPE_FIXED64";
		case FieldDescriptorProtoType.TYPE_FIXED32:
			return "TYPE_FIXED32";
		case FieldDescriptorProtoType.TYPE_BOOL:
			return "TYPE_BOOL";
		case FieldDescriptorProtoType.TYPE_STRING:
			return "TYPE_STRING";
		case FieldDescriptorProtoType.TYPE_GROUP:
			return "TYPE_GROUP";
		case FieldDescriptorProtoType.TYPE_MESSAGE:
			return "TYPE_MESSAGE";
		case FieldDescriptorProtoType.TYPE_BYTES:
			return "TYPE_BYTES";
		case FieldDescriptorProtoType.TYPE_UINT32:
			return "TYPE_UINT32";
		case FieldDescriptorProtoType.TYPE_ENUM:
			return "TYPE_ENUM";
		case FieldDescriptorProtoType.TYPE_SFIXED32:
			return "TYPE_SFIXED32";
		case FieldDescriptorProtoType.TYPE_SFIXED64:
			return "TYPE_SFIXED64";
		case FieldDescriptorProtoType.TYPE_SINT32:
			return "TYPE_SINT32";
		case FieldDescriptorProtoType.TYPE_SINT64:
			return "TYPE_SINT64";
		case FieldDescriptorProtoType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function fieldDescriptorProtoLabelFromJSON(object: any): FieldDescriptorProtoLabel {
	switch (object) {
		case 1:
		case "LABEL_OPTIONAL":
			return FieldDescriptorProtoLabel.LABEL_OPTIONAL;
		case 3:
		case "LABEL_REPEATED":
			return FieldDescriptorProtoLabel.LABEL_REPEATED;
		case 2:
		case "LABEL_REQUIRED":
			return FieldDescriptorProtoLabel.LABEL_REQUIRED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FieldDescriptorProtoLabel.UNRECOGNIZED;
	}
}

export function fieldDescriptorProtoLabelToJSON(object: FieldDescriptorProtoLabel): string {
	switch (object) {
		case FieldDescriptorProtoLabel.LABEL_OPTIONAL:
			return "LABEL_OPTIONAL";
		case FieldDescriptorProtoLabel.LABEL_REPEATED:
			return "LABEL_REPEATED";
		case FieldDescriptorProtoLabel.LABEL_REQUIRED:
			return "LABEL_REQUIRED";
		case FieldDescriptorProtoLabel.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function fileOptionsOptimizeModeFromJSON(object: any): FileOptionsOptimizeMode {
	switch (object) {
		case 1:
		case "SPEED":
			return FileOptionsOptimizeMode.SPEED;
		case 2:
		case "CODE_SIZE":
			return FileOptionsOptimizeMode.CODE_SIZE;
		case 3:
		case "LITE_RUNTIME":
			return FileOptionsOptimizeMode.LITE_RUNTIME;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FileOptionsOptimizeMode.UNRECOGNIZED;
	}
}

export function fileOptionsOptimizeModeToJSON(object: FileOptionsOptimizeMode): string {
	switch (object) {
		case FileOptionsOptimizeMode.SPEED:
			return "SPEED";
		case FileOptionsOptimizeMode.CODE_SIZE:
			return "CODE_SIZE";
		case FileOptionsOptimizeMode.LITE_RUNTIME:
			return "LITE_RUNTIME";
		case FileOptionsOptimizeMode.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function fieldOptionsCTypeFromJSON(object: any): FieldOptionsCType {
	switch (object) {
		case 0:
		case "STRING":
			return FieldOptionsCType.STRING;
		case 1:
		case "CORD":
			return FieldOptionsCType.CORD;
		case 2:
		case "STRING_PIECE":
			return FieldOptionsCType.STRING_PIECE;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FieldOptionsCType.UNRECOGNIZED;
	}
}

export function fieldOptionsCTypeToJSON(object: FieldOptionsCType): string {
	switch (object) {
		case FieldOptionsCType.STRING:
			return "STRING";
		case FieldOptionsCType.CORD:
			return "CORD";
		case FieldOptionsCType.STRING_PIECE:
			return "STRING_PIECE";
		case FieldOptionsCType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function fieldOptionsJSTypeFromJSON(object: any): FieldOptionsJSType {
	switch (object) {
		case 0:
		case "JS_NORMAL":
			return FieldOptionsJSType.JS_NORMAL;
		case 1:
		case "JS_STRING":
			return FieldOptionsJSType.JS_STRING;
		case 2:
		case "JS_NUMBER":
			return FieldOptionsJSType.JS_NUMBER;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FieldOptionsJSType.UNRECOGNIZED;
	}
}

export function fieldOptionsJSTypeToJSON(object: FieldOptionsJSType): string {
	switch (object) {
		case FieldOptionsJSType.JS_NORMAL:
			return "JS_NORMAL";
		case FieldOptionsJSType.JS_STRING:
			return "JS_STRING";
		case FieldOptionsJSType.JS_NUMBER:
			return "JS_NUMBER";
		case FieldOptionsJSType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function fieldOptionsOptionRetentionFromJSON(object: any): FieldOptionsOptionRetention {
	switch (object) {
		case 0:
		case "RETENTION_UNKNOWN":
			return FieldOptionsOptionRetention.RETENTION_UNKNOWN;
		case 1:
		case "RETENTION_RUNTIME":
			return FieldOptionsOptionRetention.RETENTION_RUNTIME;
		case 2:
		case "RETENTION_SOURCE":
			return FieldOptionsOptionRetention.RETENTION_SOURCE;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FieldOptionsOptionRetention.UNRECOGNIZED;
	}
}

export function fieldOptionsOptionRetentionToJSON(object: FieldOptionsOptionRetention): string {
	switch (object) {
		case FieldOptionsOptionRetention.RETENTION_UNKNOWN:
			return "RETENTION_UNKNOWN";
		case FieldOptionsOptionRetention.RETENTION_RUNTIME:
			return "RETENTION_RUNTIME";
		case FieldOptionsOptionRetention.RETENTION_SOURCE:
			return "RETENTION_SOURCE";
		case FieldOptionsOptionRetention.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function fieldOptionsOptionTargetTypeFromJSON(object: any): FieldOptionsOptionTargetType {
	switch (object) {
		case 0:
		case "TARGET_TYPE_UNKNOWN":
			return FieldOptionsOptionTargetType.TARGET_TYPE_UNKNOWN;
		case 1:
		case "TARGET_TYPE_FILE":
			return FieldOptionsOptionTargetType.TARGET_TYPE_FILE;
		case 2:
		case "TARGET_TYPE_EXTENSION_RANGE":
			return FieldOptionsOptionTargetType.TARGET_TYPE_EXTENSION_RANGE;
		case 3:
		case "TARGET_TYPE_MESSAGE":
			return FieldOptionsOptionTargetType.TARGET_TYPE_MESSAGE;
		case 4:
		case "TARGET_TYPE_FIELD":
			return FieldOptionsOptionTargetType.TARGET_TYPE_FIELD;
		case 5:
		case "TARGET_TYPE_ONEOF":
			return FieldOptionsOptionTargetType.TARGET_TYPE_ONEOF;
		case 6:
		case "TARGET_TYPE_ENUM":
			return FieldOptionsOptionTargetType.TARGET_TYPE_ENUM;
		case 7:
		case "TARGET_TYPE_ENUM_ENTRY":
			return FieldOptionsOptionTargetType.TARGET_TYPE_ENUM_ENTRY;
		case 8:
		case "TARGET_TYPE_SERVICE":
			return FieldOptionsOptionTargetType.TARGET_TYPE_SERVICE;
		case 9:
		case "TARGET_TYPE_METHOD":
			return FieldOptionsOptionTargetType.TARGET_TYPE_METHOD;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FieldOptionsOptionTargetType.UNRECOGNIZED;
	}
}

export function fieldOptionsOptionTargetTypeToJSON(object: FieldOptionsOptionTargetType): string {
	switch (object) {
		case FieldOptionsOptionTargetType.TARGET_TYPE_UNKNOWN:
			return "TARGET_TYPE_UNKNOWN";
		case FieldOptionsOptionTargetType.TARGET_TYPE_FILE:
			return "TARGET_TYPE_FILE";
		case FieldOptionsOptionTargetType.TARGET_TYPE_EXTENSION_RANGE:
			return "TARGET_TYPE_EXTENSION_RANGE";
		case FieldOptionsOptionTargetType.TARGET_TYPE_MESSAGE:
			return "TARGET_TYPE_MESSAGE";
		case FieldOptionsOptionTargetType.TARGET_TYPE_FIELD:
			return "TARGET_TYPE_FIELD";
		case FieldOptionsOptionTargetType.TARGET_TYPE_ONEOF:
			return "TARGET_TYPE_ONEOF";
		case FieldOptionsOptionTargetType.TARGET_TYPE_ENUM:
			return "TARGET_TYPE_ENUM";
		case FieldOptionsOptionTargetType.TARGET_TYPE_ENUM_ENTRY:
			return "TARGET_TYPE_ENUM_ENTRY";
		case FieldOptionsOptionTargetType.TARGET_TYPE_SERVICE:
			return "TARGET_TYPE_SERVICE";
		case FieldOptionsOptionTargetType.TARGET_TYPE_METHOD:
			return "TARGET_TYPE_METHOD";
		case FieldOptionsOptionTargetType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function methodOptionsIdempotencyLevelFromJSON(object: any): MethodOptionsIdempotencyLevel {
	switch (object) {
		case 0:
		case "IDEMPOTENCY_UNKNOWN":
			return MethodOptionsIdempotencyLevel.IDEMPOTENCY_UNKNOWN;
		case 1:
		case "NO_SIDE_EFFECTS":
			return MethodOptionsIdempotencyLevel.NO_SIDE_EFFECTS;
		case 2:
		case "IDEMPOTENT":
			return MethodOptionsIdempotencyLevel.IDEMPOTENT;
		case -1:
		case "UNRECOGNIZED":
		default:
			return MethodOptionsIdempotencyLevel.UNRECOGNIZED;
	}
}

export function methodOptionsIdempotencyLevelToJSON(object: MethodOptionsIdempotencyLevel): string {
	switch (object) {
		case MethodOptionsIdempotencyLevel.IDEMPOTENCY_UNKNOWN:
			return "IDEMPOTENCY_UNKNOWN";
		case MethodOptionsIdempotencyLevel.NO_SIDE_EFFECTS:
			return "NO_SIDE_EFFECTS";
		case MethodOptionsIdempotencyLevel.IDEMPOTENT:
			return "IDEMPOTENT";
		case MethodOptionsIdempotencyLevel.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function featureSetFieldPresenceFromJSON(object: any): FeatureSetFieldPresence {
	switch (object) {
		case 0:
		case "FIELD_PRESENCE_UNKNOWN":
			return FeatureSetFieldPresence.FIELD_PRESENCE_UNKNOWN;
		case 1:
		case "EXPLICIT":
			return FeatureSetFieldPresence.EXPLICIT;
		case 2:
		case "IMPLICIT":
			return FeatureSetFieldPresence.IMPLICIT;
		case 3:
		case "LEGACY_REQUIRED":
			return FeatureSetFieldPresence.LEGACY_REQUIRED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FeatureSetFieldPresence.UNRECOGNIZED;
	}
}

export function featureSetFieldPresenceToJSON(object: FeatureSetFieldPresence): string {
	switch (object) {
		case FeatureSetFieldPresence.FIELD_PRESENCE_UNKNOWN:
			return "FIELD_PRESENCE_UNKNOWN";
		case FeatureSetFieldPresence.EXPLICIT:
			return "EXPLICIT";
		case FeatureSetFieldPresence.IMPLICIT:
			return "IMPLICIT";
		case FeatureSetFieldPresence.LEGACY_REQUIRED:
			return "LEGACY_REQUIRED";
		case FeatureSetFieldPresence.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function featureSetEnumTypeFromJSON(object: any): FeatureSetEnumType {
	switch (object) {
		case 0:
		case "ENUM_TYPE_UNKNOWN":
			return FeatureSetEnumType.ENUM_TYPE_UNKNOWN;
		case 1:
		case "OPEN":
			return FeatureSetEnumType.OPEN;
		case 2:
		case "CLOSED":
			return FeatureSetEnumType.CLOSED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FeatureSetEnumType.UNRECOGNIZED;
	}
}

export function featureSetEnumTypeToJSON(object: FeatureSetEnumType): string {
	switch (object) {
		case FeatureSetEnumType.ENUM_TYPE_UNKNOWN:
			return "ENUM_TYPE_UNKNOWN";
		case FeatureSetEnumType.OPEN:
			return "OPEN";
		case FeatureSetEnumType.CLOSED:
			return "CLOSED";
		case FeatureSetEnumType.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function featureSetRepeatedFieldEncodingFromJSON(object: any): FeatureSetRepeatedFieldEncoding {
	switch (object) {
		case 0:
		case "REPEATED_FIELD_ENCODING_UNKNOWN":
			return FeatureSetRepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN;
		case 1:
		case "PACKED":
			return FeatureSetRepeatedFieldEncoding.PACKED;
		case 2:
		case "EXPANDED":
			return FeatureSetRepeatedFieldEncoding.EXPANDED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FeatureSetRepeatedFieldEncoding.UNRECOGNIZED;
	}
}

export function featureSetRepeatedFieldEncodingToJSON(object: FeatureSetRepeatedFieldEncoding): string {
	switch (object) {
		case FeatureSetRepeatedFieldEncoding.REPEATED_FIELD_ENCODING_UNKNOWN:
			return "REPEATED_FIELD_ENCODING_UNKNOWN";
		case FeatureSetRepeatedFieldEncoding.PACKED:
			return "PACKED";
		case FeatureSetRepeatedFieldEncoding.EXPANDED:
			return "EXPANDED";
		case FeatureSetRepeatedFieldEncoding.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function featureSetUtf8ValidationFromJSON(object: any): FeatureSetUtf8Validation {
	switch (object) {
		case 0:
		case "UTF8_VALIDATION_UNKNOWN":
			return FeatureSetUtf8Validation.UTF8_VALIDATION_UNKNOWN;
		case 2:
		case "VERIFY":
			return FeatureSetUtf8Validation.VERIFY;
		case 3:
		case "NONE":
			return FeatureSetUtf8Validation.NONE;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FeatureSetUtf8Validation.UNRECOGNIZED;
	}
}

export function featureSetUtf8ValidationToJSON(object: FeatureSetUtf8Validation): string {
	switch (object) {
		case FeatureSetUtf8Validation.UTF8_VALIDATION_UNKNOWN:
			return "UTF8_VALIDATION_UNKNOWN";
		case FeatureSetUtf8Validation.VERIFY:
			return "VERIFY";
		case FeatureSetUtf8Validation.NONE:
			return "NONE";
		case FeatureSetUtf8Validation.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function featureSetMessageEncodingFromJSON(object: any): FeatureSetMessageEncoding {
	switch (object) {
		case 0:
		case "MESSAGE_ENCODING_UNKNOWN":
			return FeatureSetMessageEncoding.MESSAGE_ENCODING_UNKNOWN;
		case 1:
		case "LENGTH_PREFIXED":
			return FeatureSetMessageEncoding.LENGTH_PREFIXED;
		case 2:
		case "DELIMITED":
			return FeatureSetMessageEncoding.DELIMITED;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FeatureSetMessageEncoding.UNRECOGNIZED;
	}
}

export function featureSetMessageEncodingToJSON(object: FeatureSetMessageEncoding): string {
	switch (object) {
		case FeatureSetMessageEncoding.MESSAGE_ENCODING_UNKNOWN:
			return "MESSAGE_ENCODING_UNKNOWN";
		case FeatureSetMessageEncoding.LENGTH_PREFIXED:
			return "LENGTH_PREFIXED";
		case FeatureSetMessageEncoding.DELIMITED:
			return "DELIMITED";
		case FeatureSetMessageEncoding.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function featureSetJsonFormatFromJSON(object: any): FeatureSetJsonFormat {
	switch (object) {
		case 0:
		case "JSON_FORMAT_UNKNOWN":
			return FeatureSetJsonFormat.JSON_FORMAT_UNKNOWN;
		case 1:
		case "ALLOW":
			return FeatureSetJsonFormat.ALLOW;
		case 2:
		case "LEGACY_BEST_EFFORT":
			return FeatureSetJsonFormat.LEGACY_BEST_EFFORT;
		case -1:
		case "UNRECOGNIZED":
		default:
			return FeatureSetJsonFormat.UNRECOGNIZED;
	}
}

export function featureSetJsonFormatToJSON(object: FeatureSetJsonFormat): string {
	switch (object) {
		case FeatureSetJsonFormat.JSON_FORMAT_UNKNOWN:
			return "JSON_FORMAT_UNKNOWN";
		case FeatureSetJsonFormat.ALLOW:
			return "ALLOW";
		case FeatureSetJsonFormat.LEGACY_BEST_EFFORT:
			return "LEGACY_BEST_EFFORT";
		case FeatureSetJsonFormat.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

export function generatedCodeInfoAnnotationSemanticFromJSON(object: any): GeneratedCodeInfoAnnotationSemantic {
	switch (object) {
		case 0:
		case "NONE":
			return GeneratedCodeInfoAnnotationSemantic.NONE;
		case 1:
		case "SET":
			return GeneratedCodeInfoAnnotationSemantic.SET;
		case 2:
		case "ALIAS":
			return GeneratedCodeInfoAnnotationSemantic.ALIAS;
		case -1:
		case "UNRECOGNIZED":
		default:
			return GeneratedCodeInfoAnnotationSemantic.UNRECOGNIZED;
	}
}

export function generatedCodeInfoAnnotationSemanticToJSON(object: GeneratedCodeInfoAnnotationSemantic): string {
	switch (object) {
		case GeneratedCodeInfoAnnotationSemantic.NONE:
			return "NONE";
		case GeneratedCodeInfoAnnotationSemantic.SET:
			return "SET";
		case GeneratedCodeInfoAnnotationSemantic.ALIAS:
			return "ALIAS";
		case GeneratedCodeInfoAnnotationSemantic.UNRECOGNIZED:
		default:
			return "UNRECOGNIZED";
	}
}

function createBaseFileDescriptorSet(): FileDescriptorSet {
	return { file: [] };
}

function createBaseFileDescriptorProto(): FileDescriptorProto {
	return {
		name: "",
		package: "",
		dependency: [],
		public_dependency: [],
		weak_dependency: [],
		message_type: [],
		enum_type: [],
		service: [],
		extension: [],
		options: undefined,
		source_code_info: undefined,
		syntax: "",
		edition: 0
	};
}

function createBaseDescriptorProto(): DescriptorProto {
	return {
		name: "",
		field: [],
		extension: [],
		nested_type: [],
		enum_type: [],
		extension_range: [],
		oneof_decl: [],
		options: undefined,
		reserved_range: [],
		reserved_name: []
	};
}

function createBaseDescriptorProtoExtensionRange(): DescriptorProtoExtensionRange {
	return { start: 0, end: 0, options: undefined };
}

function createBaseDescriptorProtoReservedRange(): DescriptorProtoReservedRange {
	return { start: 0, end: 0 };
}

function createBaseExtensionRangeOptions(): ExtensionRangeOptions {
	return { uninterpreted_option: [], declaration: [], features: undefined, verification: 1 };
}

function createBaseExtensionRangeOptionsDeclaration(): ExtensionRangeOptionsDeclaration {
	return { number: 0, full_name: "", type: "", reserved: false, repeated: false };
}

function createBaseFieldDescriptorProto(): FieldDescriptorProto {
	return {
		name: "",
		number: 0,
		label: 1,
		type: 1,
		type_name: "",
		extendee: "",
		default_value: "",
		oneof_index: 0,
		json_name: "",
		options: undefined,
		proto3_optional: false
	};
}

function createBaseOneofDescriptorProto(): OneofDescriptorProto {
	return { name: "", options: undefined };
}

function createBaseEnumDescriptorProto(): EnumDescriptorProto {
	return { name: "", value: [], options: undefined, reserved_range: [], reserved_name: [] };
}

function createBaseEnumDescriptorProtoEnumReservedRange(): EnumDescriptorProtoEnumReservedRange {
	return { start: 0, end: 0 };
}

function createBaseEnumValueDescriptorProto(): EnumValueDescriptorProto {
	return { name: "", number: 0, options: undefined };
}

function createBaseServiceDescriptorProto(): ServiceDescriptorProto {
	return { name: "", method: [], options: undefined };
}

function createBaseMethodDescriptorProto(): MethodDescriptorProto {
	return {
		name: "",
		input_type: "",
		output_type: "",
		options: undefined,
		client_streaming: false,
		server_streaming: false
	};
}

function createBaseFileOptions(): FileOptions {
	return {
		java_package: "",
		java_outer_classname: "",
		java_multiple_files: false,
		java_generate_equals_and_hash: false,
		java_string_check_utf8: false,
		optimize_for: 1,
		go_package: "",
		cc_generic_services: false,
		java_generic_services: false,
		py_generic_services: false,
		deprecated: false,
		cc_enable_arenas: true,
		objc_class_prefix: "",
		csharp_namespace: "",
		swift_prefix: "",
		php_class_prefix: "",
		php_namespace: "",
		php_metadata_namespace: "",
		ruby_package: "",
		features: undefined,
		uninterpreted_option: []
	};
}

function createBaseMessageOptions(): MessageOptions {
	return {
		message_set_wire_format: false,
		no_standard_descriptor_accessor: false,
		deprecated: false,
		map_entry: false,
		deprecated_legacy_json_field_conflicts: false,
		features: undefined,
		uninterpreted_option: []
	};
}

function createBaseFieldOptions(): FieldOptions {
	return {
		ctype: 0,
		packed: false,
		jstype: 0,
		lazy: false,
		unverified_lazy: false,
		deprecated: false,
		weak: false,
		debug_redact: false,
		retention: 0,
		targets: [],
		edition_defaults: [],
		features: undefined,
		feature_support: undefined,
		uninterpreted_option: []
	};
}

function createBaseFieldOptionsEditionDefault(): FieldOptionsEditionDefault {
	return { edition: 0, value: "" };
}

function createBaseFieldOptionsFeatureSupport(): FieldOptionsFeatureSupport {
	return { edition_introduced: 0, edition_deprecated: 0, deprecation_warning: "", edition_removed: 0 };
}

function createBaseOneofOptions(): OneofOptions {
	return { features: undefined, uninterpreted_option: [] };
}

function createBaseEnumOptions(): EnumOptions {
	return {
		allow_alias: false,
		deprecated: false,
		deprecated_legacy_json_field_conflicts: false,
		features: undefined,
		uninterpreted_option: []
	};
}

function createBaseEnumValueOptions(): EnumValueOptions {
	return {
		deprecated: false,
		features: undefined,
		debug_redact: false,
		feature_support: undefined,
		uninterpreted_option: []
	};
}

function createBaseServiceOptions(): ServiceOptions {
	return { features: undefined, deprecated: false, uninterpreted_option: [] };
}

function createBaseMethodOptions(): MethodOptions {
	return { deprecated: false, idempotency_level: 0, features: undefined, uninterpreted_option: [] };
}

function createBaseUninterpretedOption(): UninterpretedOption {
	return {
		name: [],
		identifier_value: "",
		positive_int_value: 0,
		negative_int_value: 0,
		double_value: 0,
		string_value: new Uint8Array(0),
		aggregate_value: ""
	};
}

function createBaseUninterpretedOptionNamePart(): UninterpretedOptionNamePart {
	return { name_part: "", is_extension: false };
}

function createBaseFeatureSet(): FeatureSet {
	return {
		field_presence: 0,
		enum_type: 0,
		repeated_field_encoding: 0,
		utf8_validation: 0,
		message_encoding: 0,
		json_format: 0
	};
}

function createBaseFeatureSetDefaults(): FeatureSetDefaults {
	return { defaults: [], minimum_edition: 0, maximum_edition: 0 };
}

function createBaseFeatureSetDefaultsFeatureSetEditionDefault(): FeatureSetDefaultsFeatureSetEditionDefault {
	return { edition: 0, overridable_features: undefined, fixed_features: undefined };
}

function createBaseSourceCodeInfo(): SourceCodeInfo {
	return { location: [] };
}

function createBaseSourceCodeInfoLocation(): SourceCodeInfoLocation {
	return { path: [], span: [], leading_comments: "", trailing_comments: "", leading_detached_comments: [] };
}

function createBaseGeneratedCodeInfo(): GeneratedCodeInfo {
	return { annotation: [] };
}

function createBaseGeneratedCodeInfoAnnotation(): GeneratedCodeInfoAnnotation {
	return { path: [], source_file: "", begin: 0, end: 0, semantic: 0 };
}

function bytesFromBase64(b64: string): Uint8Array {
	if ((globalThis as any).Buffer) {
		return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
	} else {
		const bin = globalThis.atob(b64);
		const arr = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; ++i) {
			arr[i] = bin.charCodeAt(i);
		}
		return arr;
	}
}

function base64FromBytes(arr: Uint8Array): string {
	if ((globalThis as any).Buffer) {
		return globalThis.Buffer.from(arr).toString("base64");
	} else {
		const bin: string[] = [];
		arr.forEach((byte) => {
			bin.push(globalThis.String.fromCharCode(byte));
		});
		return globalThis.btoa(bin.join(""));
	}
}

function longToNumber(int64: { toString(): string }): number {
	const num = globalThis.Number(int64.toString());
	if (num > globalThis.Number.MAX_SAFE_INTEGER) {
		throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
	}
	if (num < globalThis.Number.MIN_SAFE_INTEGER) {
		throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
	}
	return num;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
export const registry: Array<[string, GeneratedType]> = [
	["/google.protobuf.FileDescriptorSet", FileDescriptorSet as never],
	["/google.protobuf.FileDescriptorProto", FileDescriptorProto as never],
	["/google.protobuf.DescriptorProto", DescriptorProto as never],
	["/google.protobuf.DescriptorProto.ExtensionRange", DescriptorProtoExtensionRange as never],
	["/google.protobuf.DescriptorProto.ReservedRange", DescriptorProtoReservedRange as never],
	["/google.protobuf.ExtensionRangeOptions", ExtensionRangeOptions as never],
	["/google.protobuf.ExtensionRangeOptions.Declaration", ExtensionRangeOptionsDeclaration as never],
	["/google.protobuf.FieldDescriptorProto", FieldDescriptorProto as never],
	["/google.protobuf.OneofDescriptorProto", OneofDescriptorProto as never],
	["/google.protobuf.EnumDescriptorProto", EnumDescriptorProto as never],
	["/google.protobuf.EnumDescriptorProto.EnumReservedRange", EnumDescriptorProtoEnumReservedRange as never],
	["/google.protobuf.EnumValueDescriptorProto", EnumValueDescriptorProto as never],
	["/google.protobuf.ServiceDescriptorProto", ServiceDescriptorProto as never],
	["/google.protobuf.MethodDescriptorProto", MethodDescriptorProto as never],
	["/google.protobuf.FileOptions", FileOptions as never],
	["/google.protobuf.MessageOptions", MessageOptions as never],
	["/google.protobuf.FieldOptions", FieldOptions as never],
	["/google.protobuf.FieldOptions.EditionDefault", FieldOptionsEditionDefault as never],
	["/google.protobuf.FieldOptions.FeatureSupport", FieldOptionsFeatureSupport as never],
	["/google.protobuf.OneofOptions", OneofOptions as never],
	["/google.protobuf.EnumOptions", EnumOptions as never],
	["/google.protobuf.EnumValueOptions", EnumValueOptions as never],
	["/google.protobuf.ServiceOptions", ServiceOptions as never],
	["/google.protobuf.MethodOptions", MethodOptions as never],
	["/google.protobuf.UninterpretedOption", UninterpretedOption as never],
	["/google.protobuf.UninterpretedOption.NamePart", UninterpretedOptionNamePart as never],
	["/google.protobuf.FeatureSet", FeatureSet as never],
	["/google.protobuf.FeatureSetDefaults", FeatureSetDefaults as never],
	["/google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault", FeatureSetDefaultsFeatureSetEditionDefault as never],
	["/google.protobuf.SourceCodeInfo", SourceCodeInfo as never],
	["/google.protobuf.SourceCodeInfo.Location", SourceCodeInfoLocation as never],
	["/google.protobuf.GeneratedCodeInfo", GeneratedCodeInfo as never],
	["/google.protobuf.GeneratedCodeInfo.Annotation", GeneratedCodeInfoAnnotation as never]
];
export const aminoConverters = {
	"/google.protobuf.FileDescriptorSet": {
		aminoType: "google.protobuf.FileDescriptorSet",
		toAmino: (message: FileDescriptorSet) => ({ ...message }),
		fromAmino: (object: FileDescriptorSet) => ({ ...object })
	},

	"/google.protobuf.FileDescriptorProto": {
		aminoType: "google.protobuf.FileDescriptorProto",
		toAmino: (message: FileDescriptorProto) => ({ ...message }),
		fromAmino: (object: FileDescriptorProto) => ({ ...object })
	},

	"/google.protobuf.DescriptorProto": {
		aminoType: "google.protobuf.DescriptorProto",
		toAmino: (message: DescriptorProto) => ({ ...message }),
		fromAmino: (object: DescriptorProto) => ({ ...object })
	},

	"/google.protobuf.DescriptorProto.ExtensionRange": {
		aminoType: "google.protobuf.DescriptorProto.ExtensionRange",
		toAmino: (message: DescriptorProtoExtensionRange) => ({ ...message }),
		fromAmino: (object: DescriptorProtoExtensionRange) => ({ ...object })
	},

	"/google.protobuf.DescriptorProto.ReservedRange": {
		aminoType: "google.protobuf.DescriptorProto.ReservedRange",
		toAmino: (message: DescriptorProtoReservedRange) => ({ ...message }),
		fromAmino: (object: DescriptorProtoReservedRange) => ({ ...object })
	},

	"/google.protobuf.ExtensionRangeOptions": {
		aminoType: "google.protobuf.ExtensionRangeOptions",
		toAmino: (message: ExtensionRangeOptions) => ({ ...message }),
		fromAmino: (object: ExtensionRangeOptions) => ({ ...object })
	},

	"/google.protobuf.ExtensionRangeOptions.Declaration": {
		aminoType: "google.protobuf.ExtensionRangeOptions.Declaration",
		toAmino: (message: ExtensionRangeOptionsDeclaration) => ({ ...message }),
		fromAmino: (object: ExtensionRangeOptionsDeclaration) => ({ ...object })
	},

	"/google.protobuf.FieldDescriptorProto": {
		aminoType: "google.protobuf.FieldDescriptorProto",
		toAmino: (message: FieldDescriptorProto) => ({ ...message }),
		fromAmino: (object: FieldDescriptorProto) => ({ ...object })
	},

	"/google.protobuf.OneofDescriptorProto": {
		aminoType: "google.protobuf.OneofDescriptorProto",
		toAmino: (message: OneofDescriptorProto) => ({ ...message }),
		fromAmino: (object: OneofDescriptorProto) => ({ ...object })
	},

	"/google.protobuf.EnumDescriptorProto": {
		aminoType: "google.protobuf.EnumDescriptorProto",
		toAmino: (message: EnumDescriptorProto) => ({ ...message }),
		fromAmino: (object: EnumDescriptorProto) => ({ ...object })
	},

	"/google.protobuf.EnumDescriptorProto.EnumReservedRange": {
		aminoType: "google.protobuf.EnumDescriptorProto.EnumReservedRange",
		toAmino: (message: EnumDescriptorProtoEnumReservedRange) => ({ ...message }),
		fromAmino: (object: EnumDescriptorProtoEnumReservedRange) => ({ ...object })
	},

	"/google.protobuf.EnumValueDescriptorProto": {
		aminoType: "google.protobuf.EnumValueDescriptorProto",
		toAmino: (message: EnumValueDescriptorProto) => ({ ...message }),
		fromAmino: (object: EnumValueDescriptorProto) => ({ ...object })
	},

	"/google.protobuf.ServiceDescriptorProto": {
		aminoType: "google.protobuf.ServiceDescriptorProto",
		toAmino: (message: ServiceDescriptorProto) => ({ ...message }),
		fromAmino: (object: ServiceDescriptorProto) => ({ ...object })
	},

	"/google.protobuf.MethodDescriptorProto": {
		aminoType: "google.protobuf.MethodDescriptorProto",
		toAmino: (message: MethodDescriptorProto) => ({ ...message }),
		fromAmino: (object: MethodDescriptorProto) => ({ ...object })
	},

	"/google.protobuf.FileOptions": {
		aminoType: "google.protobuf.FileOptions",
		toAmino: (message: FileOptions) => ({ ...message }),
		fromAmino: (object: FileOptions) => ({ ...object })
	},

	"/google.protobuf.MessageOptions": {
		aminoType: "google.protobuf.MessageOptions",
		toAmino: (message: MessageOptions) => ({ ...message }),
		fromAmino: (object: MessageOptions) => ({ ...object })
	},

	"/google.protobuf.FieldOptions": {
		aminoType: "google.protobuf.FieldOptions",
		toAmino: (message: FieldOptions) => ({ ...message }),
		fromAmino: (object: FieldOptions) => ({ ...object })
	},

	"/google.protobuf.FieldOptions.EditionDefault": {
		aminoType: "google.protobuf.FieldOptions.EditionDefault",
		toAmino: (message: FieldOptionsEditionDefault) => ({ ...message }),
		fromAmino: (object: FieldOptionsEditionDefault) => ({ ...object })
	},

	"/google.protobuf.FieldOptions.FeatureSupport": {
		aminoType: "google.protobuf.FieldOptions.FeatureSupport",
		toAmino: (message: FieldOptionsFeatureSupport) => ({ ...message }),
		fromAmino: (object: FieldOptionsFeatureSupport) => ({ ...object })
	},

	"/google.protobuf.OneofOptions": {
		aminoType: "google.protobuf.OneofOptions",
		toAmino: (message: OneofOptions) => ({ ...message }),
		fromAmino: (object: OneofOptions) => ({ ...object })
	},

	"/google.protobuf.EnumOptions": {
		aminoType: "google.protobuf.EnumOptions",
		toAmino: (message: EnumOptions) => ({ ...message }),
		fromAmino: (object: EnumOptions) => ({ ...object })
	},

	"/google.protobuf.EnumValueOptions": {
		aminoType: "google.protobuf.EnumValueOptions",
		toAmino: (message: EnumValueOptions) => ({ ...message }),
		fromAmino: (object: EnumValueOptions) => ({ ...object })
	},

	"/google.protobuf.ServiceOptions": {
		aminoType: "google.protobuf.ServiceOptions",
		toAmino: (message: ServiceOptions) => ({ ...message }),
		fromAmino: (object: ServiceOptions) => ({ ...object })
	},

	"/google.protobuf.MethodOptions": {
		aminoType: "google.protobuf.MethodOptions",
		toAmino: (message: MethodOptions) => ({ ...message }),
		fromAmino: (object: MethodOptions) => ({ ...object })
	},

	"/google.protobuf.UninterpretedOption": {
		aminoType: "google.protobuf.UninterpretedOption",
		toAmino: (message: UninterpretedOption) => ({ ...message }),
		fromAmino: (object: UninterpretedOption) => ({ ...object })
	},

	"/google.protobuf.UninterpretedOption.NamePart": {
		aminoType: "google.protobuf.UninterpretedOption.NamePart",
		toAmino: (message: UninterpretedOptionNamePart) => ({ ...message }),
		fromAmino: (object: UninterpretedOptionNamePart) => ({ ...object })
	},

	"/google.protobuf.FeatureSet": {
		aminoType: "google.protobuf.FeatureSet",
		toAmino: (message: FeatureSet) => ({ ...message }),
		fromAmino: (object: FeatureSet) => ({ ...object })
	},

	"/google.protobuf.FeatureSetDefaults": {
		aminoType: "google.protobuf.FeatureSetDefaults",
		toAmino: (message: FeatureSetDefaults) => ({ ...message }),
		fromAmino: (object: FeatureSetDefaults) => ({ ...object })
	},

	"/google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault": {
		aminoType: "google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault",
		toAmino: (message: FeatureSetDefaultsFeatureSetEditionDefault) => ({ ...message }),
		fromAmino: (object: FeatureSetDefaultsFeatureSetEditionDefault) => ({ ...object })
	},

	"/google.protobuf.SourceCodeInfo": {
		aminoType: "google.protobuf.SourceCodeInfo",
		toAmino: (message: SourceCodeInfo) => ({ ...message }),
		fromAmino: (object: SourceCodeInfo) => ({ ...object })
	},

	"/google.protobuf.SourceCodeInfo.Location": {
		aminoType: "google.protobuf.SourceCodeInfo.Location",
		toAmino: (message: SourceCodeInfoLocation) => ({ ...message }),
		fromAmino: (object: SourceCodeInfoLocation) => ({ ...object })
	},

	"/google.protobuf.GeneratedCodeInfo": {
		aminoType: "google.protobuf.GeneratedCodeInfo",
		toAmino: (message: GeneratedCodeInfo) => ({ ...message }),
		fromAmino: (object: GeneratedCodeInfo) => ({ ...object })
	},

	"/google.protobuf.GeneratedCodeInfo.Annotation": {
		aminoType: "google.protobuf.GeneratedCodeInfo.Annotation",
		toAmino: (message: GeneratedCodeInfoAnnotation) => ({ ...message }),
		fromAmino: (object: GeneratedCodeInfoAnnotation) => ({ ...object })
	}
};
