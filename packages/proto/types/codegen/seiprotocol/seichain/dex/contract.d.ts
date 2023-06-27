import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    suspended: boolean;
    suspensionReason: string;
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
    suspended: boolean;
    suspensionReason: string;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
export interface ContractDependencyInfo {
    dependency: string;
    immediateElderSibling: string;
    immediateYoungerSibling: string;
}
/**
 * suppose A is first registered and depends on X, then B is added and depends on X,
 * and then C is added and depends on X, then A is the elder sibling to B and B is
 * the younger sibling to A, and B is the elder sibling to C and C is the younger to B
 */
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
