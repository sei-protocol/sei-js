import * as _1 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _1.ScalarType;
    scalarTypeToJSON(object: _1.ScalarType): string;
    ScalarType: typeof _1.ScalarType;
    ScalarTypeSDKType: typeof _1.ScalarType;
    InterfaceDescriptor: {
        encode(message: _1.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.InterfaceDescriptor;
        fromPartial(object: any): _1.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _1.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.ScalarDescriptor;
        fromPartial(object: any): _1.ScalarDescriptor;
    };
};
