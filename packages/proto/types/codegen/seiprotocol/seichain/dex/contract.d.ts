import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface ContractInfo {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfo[];
    numIncomingDependencies: Long;
}
export interface ContractInfoSDKType {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfoSDKType[];
    numIncomingDependencies: Long;
}
export interface ContractInfoV2 {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfo[];
    numIncomingDependencies: Long;
    creator: string;
    rentBalance: Long;
}
export interface ContractInfoV2SDKType {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependencies: ContractDependencyInfoSDKType[];
    numIncomingDependencies: Long;
    creator: string;
    rentBalance: Long;
}
export interface ContractDependencyInfo {
    dependency: string;
    immediateElderSibling: string;
    immediateYoungerSibling: string;
}
export interface ContractDependencyInfoSDKType {
    dependency: string;
    immediateElderSibling: string;
    immediateYoungerSibling: string;
}
export interface LegacyContractInfo {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependentContractAddrs: string[];
}
export interface LegacyContractInfoSDKType {
    codeId: Long;
    contractAddr: string;
    needHook: boolean;
    needOrderMatching: boolean;
    dependentContractAddrs: string[];
}
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromPartial(object: DeepPartial<ContractInfo>): ContractInfo;
};
export declare const ContractInfoV2: {
    encode(message: ContractInfoV2, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoV2;
    fromPartial(object: DeepPartial<ContractInfoV2>): ContractInfoV2;
};
export declare const ContractDependencyInfo: {
    encode(message: ContractDependencyInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractDependencyInfo;
    fromPartial(object: DeepPartial<ContractDependencyInfo>): ContractDependencyInfo;
};
export declare const LegacyContractInfo: {
    encode(message: LegacyContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyContractInfo;
    fromPartial(object: DeepPartial<LegacyContractInfo>): LegacyContractInfo;
};
