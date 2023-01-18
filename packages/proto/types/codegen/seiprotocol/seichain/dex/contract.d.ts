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
