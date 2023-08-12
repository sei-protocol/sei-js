import * as _51 from "./protobuf/any";
import * as _52 from "./protobuf/descriptor";
import * as _53 from "./protobuf/duration";
import * as _54 from "./protobuf/empty";
import * as _55 from "./protobuf/timestamp";
export declare namespace google {
    const protobuf: {
        Timestamp: {
            encode(message: _55.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Timestamp;
            fromPartial(object: any): _55.Timestamp;
        };
        Empty: {
            encode(_: _54.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Empty;
            fromPartial(_: any): _54.Empty;
        };
        Duration: {
            encode(message: _53.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Duration;
            fromPartial(object: any): _53.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _52.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _52.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _52.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _52.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _52.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _52.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _52.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _52.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _52.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _52.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _52.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _52.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _52.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _52.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _52.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _52.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _52.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _52.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _52.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _52.FieldOptions_CType;
        FieldOptions_JSType: typeof _52.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _52.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _52.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _52.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _52.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.FileDescriptorSet;
            fromPartial(object: any): _52.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _52.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.FileDescriptorProto;
            fromPartial(object: any): _52.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _52.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DescriptorProto;
            fromPartial(object: any): _52.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _52.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _52.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _52.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.DescriptorProto_ReservedRange;
            fromPartial(object: any): _52.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _52.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ExtensionRangeOptions;
            fromPartial(object: any): _52.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _52.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.FieldDescriptorProto;
            fromPartial(object: any): _52.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _52.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.OneofDescriptorProto;
            fromPartial(object: any): _52.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _52.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.EnumDescriptorProto;
            fromPartial(object: any): _52.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _52.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _52.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _52.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.EnumValueDescriptorProto;
            fromPartial(object: any): _52.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _52.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ServiceDescriptorProto;
            fromPartial(object: any): _52.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _52.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MethodDescriptorProto;
            fromPartial(object: any): _52.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _52.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.FileOptions;
            fromPartial(object: any): _52.FileOptions;
        };
        MessageOptions: {
            encode(message: _52.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MessageOptions;
            fromPartial(object: any): _52.MessageOptions;
        };
        FieldOptions: {
            encode(message: _52.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.FieldOptions;
            fromPartial(object: any): _52.FieldOptions;
        };
        OneofOptions: {
            encode(message: _52.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.OneofOptions;
            fromPartial(object: any): _52.OneofOptions;
        };
        EnumOptions: {
            encode(message: _52.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.EnumOptions;
            fromPartial(object: any): _52.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _52.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.EnumValueOptions;
            fromPartial(object: any): _52.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _52.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.ServiceOptions;
            fromPartial(object: any): _52.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _52.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.MethodOptions;
            fromPartial(object: any): _52.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _52.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.UninterpretedOption;
            fromPartial(object: any): _52.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _52.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.UninterpretedOption_NamePart;
            fromPartial(object: any): _52.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _52.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SourceCodeInfo;
            fromPartial(object: any): _52.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _52.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SourceCodeInfo_Location;
            fromPartial(object: any): _52.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _52.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GeneratedCodeInfo;
            fromPartial(object: any): _52.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _52.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _52.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _51.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Any;
            fromPartial(object: any): _51.Any;
        };
    };
}
