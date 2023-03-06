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

function createBaseContractInfo(): ContractInfo {
  return {
    codeId: Long.UZERO,
    contractAddr: "",
    needHook: false,
    needOrderMatching: false,
    dependencies: [],
    numIncomingDependencies: Long.ZERO
  };
}

export const ContractInfo = {
  encode(message: ContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    if (message.needHook === true) {
      writer.uint32(24).bool(message.needHook);
    }

    if (message.needOrderMatching === true) {
      writer.uint32(32).bool(message.needOrderMatching);
    }

    for (const v of message.dependencies) {
      ContractDependencyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.numIncomingDependencies.isZero()) {
      writer.uint32(48).int64(message.numIncomingDependencies);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        case 3:
          message.needHook = reader.bool();
          break;

        case 4:
          message.needOrderMatching = reader.bool();
          break;

        case 5:
          message.dependencies.push(ContractDependencyInfo.decode(reader, reader.uint32()));
          break;

        case 6:
          message.numIncomingDependencies = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractInfo>): ContractInfo {
    const message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.contractAddr = object.contractAddr ?? "";
    message.needHook = object.needHook ?? false;
    message.needOrderMatching = object.needOrderMatching ?? false;
    message.dependencies = object.dependencies?.map(e => ContractDependencyInfo.fromPartial(e)) || [];
    message.numIncomingDependencies = object.numIncomingDependencies !== undefined && object.numIncomingDependencies !== null ? Long.fromValue(object.numIncomingDependencies) : Long.ZERO;
    return message;
  }

};

function createBaseContractInfoV2(): ContractInfoV2 {
  return {
    codeId: Long.UZERO,
    contractAddr: "",
    needHook: false,
    needOrderMatching: false,
    dependencies: [],
    numIncomingDependencies: Long.ZERO,
    creator: "",
    rentBalance: Long.UZERO
  };
}

export const ContractInfoV2 = {
  encode(message: ContractInfoV2, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    if (message.needHook === true) {
      writer.uint32(24).bool(message.needHook);
    }

    if (message.needOrderMatching === true) {
      writer.uint32(32).bool(message.needOrderMatching);
    }

    for (const v of message.dependencies) {
      ContractDependencyInfo.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    if (!message.numIncomingDependencies.isZero()) {
      writer.uint32(48).int64(message.numIncomingDependencies);
    }

    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }

    if (!message.rentBalance.isZero()) {
      writer.uint32(64).uint64(message.rentBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfoV2 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractInfoV2();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        case 3:
          message.needHook = reader.bool();
          break;

        case 4:
          message.needOrderMatching = reader.bool();
          break;

        case 5:
          message.dependencies.push(ContractDependencyInfo.decode(reader, reader.uint32()));
          break;

        case 6:
          message.numIncomingDependencies = (reader.int64() as Long);
          break;

        case 7:
          message.creator = reader.string();
          break;

        case 8:
          message.rentBalance = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractInfoV2>): ContractInfoV2 {
    const message = createBaseContractInfoV2();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.contractAddr = object.contractAddr ?? "";
    message.needHook = object.needHook ?? false;
    message.needOrderMatching = object.needOrderMatching ?? false;
    message.dependencies = object.dependencies?.map(e => ContractDependencyInfo.fromPartial(e)) || [];
    message.numIncomingDependencies = object.numIncomingDependencies !== undefined && object.numIncomingDependencies !== null ? Long.fromValue(object.numIncomingDependencies) : Long.ZERO;
    message.creator = object.creator ?? "";
    message.rentBalance = object.rentBalance !== undefined && object.rentBalance !== null ? Long.fromValue(object.rentBalance) : Long.UZERO;
    return message;
  }

};

function createBaseContractDependencyInfo(): ContractDependencyInfo {
  return {
    dependency: "",
    immediateElderSibling: "",
    immediateYoungerSibling: ""
  };
}

export const ContractDependencyInfo = {
  encode(message: ContractDependencyInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dependency !== "") {
      writer.uint32(10).string(message.dependency);
    }

    if (message.immediateElderSibling !== "") {
      writer.uint32(18).string(message.immediateElderSibling);
    }

    if (message.immediateYoungerSibling !== "") {
      writer.uint32(26).string(message.immediateYoungerSibling);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContractDependencyInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractDependencyInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.dependency = reader.string();
          break;

        case 2:
          message.immediateElderSibling = reader.string();
          break;

        case 3:
          message.immediateYoungerSibling = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<ContractDependencyInfo>): ContractDependencyInfo {
    const message = createBaseContractDependencyInfo();
    message.dependency = object.dependency ?? "";
    message.immediateElderSibling = object.immediateElderSibling ?? "";
    message.immediateYoungerSibling = object.immediateYoungerSibling ?? "";
    return message;
  }

};

function createBaseLegacyContractInfo(): LegacyContractInfo {
  return {
    codeId: Long.UZERO,
    contractAddr: "",
    needHook: false,
    needOrderMatching: false,
    dependentContractAddrs: []
  };
}

export const LegacyContractInfo = {
  encode(message: LegacyContractInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }

    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }

    if (message.needHook === true) {
      writer.uint32(24).bool(message.needHook);
    }

    if (message.needOrderMatching === true) {
      writer.uint32(32).bool(message.needOrderMatching);
    }

    for (const v of message.dependentContractAddrs) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyContractInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyContractInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;

        case 2:
          message.contractAddr = reader.string();
          break;

        case 3:
          message.needHook = reader.bool();
          break;

        case 4:
          message.needOrderMatching = reader.bool();
          break;

        case 5:
          message.dependentContractAddrs.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LegacyContractInfo>): LegacyContractInfo {
    const message = createBaseLegacyContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.contractAddr = object.contractAddr ?? "";
    message.needHook = object.needHook ?? false;
    message.needOrderMatching = object.needOrderMatching ?? false;
    message.dependentContractAddrs = object.dependentContractAddrs?.map(e => e) || [];
    return message;
  }

};