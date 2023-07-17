import * as _102 from "./api/http";
import * as _103 from "./protobuf/any";
import * as _104 from "./protobuf/descriptor";
import * as _105 from "./protobuf/duration";
import * as _106 from "./protobuf/empty";
import * as _107 from "./protobuf/timestamp";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _102.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Http;
            fromPartial(object: any): _102.Http;
        };
        HttpRule: {
            encode(message: _102.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.HttpRule;
            fromPartial(object: any): _102.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _102.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.CustomHttpPattern;
            fromPartial(object: any): _102.CustomHttpPattern;
        };
    };
    const protobuf: {
        Timestamp: {
            encode(message: _107.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Timestamp;
            fromPartial(object: any): _107.Timestamp;
        };
        Empty: {
            encode(_: _106.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Empty;
            fromPartial(_: any): _106.Empty;
        };
        Duration: {
            encode(message: _105.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.Duration;
            fromPartial(object: any): _105.Duration;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _104.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _104.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _104.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _104.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _104.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _104.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _104.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _104.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _104.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _104.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _104.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _104.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _104.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _104.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _104.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _104.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _104.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _104.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _104.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _104.FieldOptions_CType;
        FieldOptions_JSType: typeof _104.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _104.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _104.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _104.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _104.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorSet;
            fromPartial(object: any): _104.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _104.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileDescriptorProto;
            fromPartial(object: any): _104.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _104.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto;
            fromPartial(object: any): _104.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _104.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto_ExtensionRange;
            fromPartial(object: any): _104.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _104.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DescriptorProto_ReservedRange;
            fromPartial(object: any): _104.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _104.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ExtensionRangeOptions;
            fromPartial(object: any): _104.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _104.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FieldDescriptorProto;
            fromPartial(object: any): _104.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _104.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.OneofDescriptorProto;
            fromPartial(object: any): _104.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _104.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumDescriptorProto;
            fromPartial(object: any): _104.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _104.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: any): _104.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _104.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumValueDescriptorProto;
            fromPartial(object: any): _104.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _104.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ServiceDescriptorProto;
            fromPartial(object: any): _104.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _104.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MethodDescriptorProto;
            fromPartial(object: any): _104.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _104.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FileOptions;
            fromPartial(object: any): _104.FileOptions;
        };
        MessageOptions: {
            encode(message: _104.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MessageOptions;
            fromPartial(object: any): _104.MessageOptions;
        };
        FieldOptions: {
            encode(message: _104.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.FieldOptions;
            fromPartial(object: any): _104.FieldOptions;
        };
        OneofOptions: {
            encode(message: _104.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.OneofOptions;
            fromPartial(object: any): _104.OneofOptions;
        };
        EnumOptions: {
            encode(message: _104.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumOptions;
            fromPartial(object: any): _104.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _104.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.EnumValueOptions;
            fromPartial(object: any): _104.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _104.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.ServiceOptions;
            fromPartial(object: any): _104.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _104.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.MethodOptions;
            fromPartial(object: any): _104.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _104.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UninterpretedOption;
            fromPartial(object: any): _104.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _104.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.UninterpretedOption_NamePart;
            fromPartial(object: any): _104.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _104.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SourceCodeInfo;
            fromPartial(object: any): _104.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _104.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.SourceCodeInfo_Location;
            fromPartial(object: any): _104.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _104.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GeneratedCodeInfo;
            fromPartial(object: any): _104.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _104.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.GeneratedCodeInfo_Annotation;
            fromPartial(object: any): _104.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _103.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Any;
            fromPartial(object: any): _103.Any;
        };
    };
}
