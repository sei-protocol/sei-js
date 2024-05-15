import { MessageDependencyMapping, MessageDependencyMappingAmino, MessageDependencyMappingSDKType, WasmDependencyMapping, WasmDependencyMappingAmino, WasmDependencyMappingSDKType } from "../accesscontrol/accesscontrol";
import { BinaryReader, BinaryWriter } from "../../binary";
export interface MsgUpdateResourceDependencyMappingProposal {
  title: string;
  description: string;
  messageDependencyMapping: MessageDependencyMapping[];
}
export interface MsgUpdateResourceDependencyMappingProposalProtoMsg {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal";
  value: Uint8Array;
}
export interface MsgUpdateResourceDependencyMappingProposalAmino {
  title: string;
  description: string;
  message_dependency_mapping?: MessageDependencyMappingAmino[];
}
export interface MsgUpdateResourceDependencyMappingProposalAminoMsg {
  type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposal";
  value: MsgUpdateResourceDependencyMappingProposalAmino;
}
export interface MsgUpdateResourceDependencyMappingProposalSDKType {
  title: string;
  description: string;
  message_dependency_mapping: MessageDependencyMappingSDKType[];
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFile {
  title: string;
  description: string;
  deposit: string;
  messageDependencyMapping: MessageDependencyMapping[];
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile";
  value: Uint8Array;
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileAmino {
  title: string;
  description: string;
  deposit: string;
  message_dependency_mapping?: MessageDependencyMappingAmino[];
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg {
  type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalJsonFile";
  value: MsgUpdateResourceDependencyMappingProposalJsonFileAmino;
}
export interface MsgUpdateResourceDependencyMappingProposalJsonFileSDKType {
  title: string;
  description: string;
  deposit: string;
  message_dependency_mapping: MessageDependencyMappingSDKType[];
}
export interface MsgUpdateResourceDependencyMappingProposalResponse {}
export interface MsgUpdateResourceDependencyMappingProposalResponseProtoMsg {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse";
  value: Uint8Array;
}
export interface MsgUpdateResourceDependencyMappingProposalResponseAmino {}
export interface MsgUpdateResourceDependencyMappingProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalResponse";
  value: MsgUpdateResourceDependencyMappingProposalResponseAmino;
}
export interface MsgUpdateResourceDependencyMappingProposalResponseSDKType {}
export interface MsgUpdateWasmDependencyMappingProposal {
  title: string;
  description: string;
  contractAddress: string;
  wasmDependencyMapping: WasmDependencyMapping | undefined;
}
export interface MsgUpdateWasmDependencyMappingProposalProtoMsg {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal";
  value: Uint8Array;
}
export interface MsgUpdateWasmDependencyMappingProposalAmino {
  title: string;
  description: string;
  contract_address: string;
  wasm_dependency_mapping?: WasmDependencyMappingAmino | undefined;
}
export interface MsgUpdateWasmDependencyMappingProposalAminoMsg {
  type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposal";
  value: MsgUpdateWasmDependencyMappingProposalAmino;
}
export interface MsgUpdateWasmDependencyMappingProposalSDKType {
  title: string;
  description: string;
  contract_address: string;
  wasm_dependency_mapping: WasmDependencyMappingSDKType | undefined;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFile {
  title: string;
  description: string;
  deposit: string;
  contractAddress: string;
  wasmDependencyMapping: WasmDependencyMapping | undefined;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile";
  value: Uint8Array;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileAmino {
  title: string;
  description: string;
  deposit: string;
  contract_address: string;
  wasm_dependency_mapping?: WasmDependencyMappingAmino | undefined;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg {
  type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposalJsonFile";
  value: MsgUpdateWasmDependencyMappingProposalJsonFileAmino;
}
export interface MsgUpdateWasmDependencyMappingProposalJsonFileSDKType {
  title: string;
  description: string;
  deposit: string;
  contract_address: string;
  wasm_dependency_mapping: WasmDependencyMappingSDKType | undefined;
}
function createBaseMsgUpdateResourceDependencyMappingProposal(): MsgUpdateResourceDependencyMappingProposal {
  return {
    title: "",
    description: "",
    messageDependencyMapping: []
  };
}
export const MsgUpdateResourceDependencyMappingProposal = {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal",
  encode(message: MsgUpdateResourceDependencyMappingProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.messageDependencyMapping) {
      MessageDependencyMapping.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResourceDependencyMappingProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.messageDependencyMapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateResourceDependencyMappingProposal>): MsgUpdateResourceDependencyMappingProposal {
    const message = createBaseMsgUpdateResourceDependencyMappingProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.messageDependencyMapping = object.messageDependencyMapping?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateResourceDependencyMappingProposalAmino): MsgUpdateResourceDependencyMappingProposal {
    const message = createBaseMsgUpdateResourceDependencyMappingProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.messageDependencyMapping = object.message_dependency_mapping?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateResourceDependencyMappingProposal): MsgUpdateResourceDependencyMappingProposalAmino {
    const obj: any = {};
    obj.title = message.title ?? "";
    obj.description = message.description ?? "";
    if (message.messageDependencyMapping) {
      obj.message_dependency_mapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
    } else {
      obj.message_dependency_mapping = message.messageDependencyMapping;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateResourceDependencyMappingProposalAminoMsg): MsgUpdateResourceDependencyMappingProposal {
    return MsgUpdateResourceDependencyMappingProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateResourceDependencyMappingProposal): MsgUpdateResourceDependencyMappingProposalAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposal",
      value: MsgUpdateResourceDependencyMappingProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateResourceDependencyMappingProposalProtoMsg): MsgUpdateResourceDependencyMappingProposal {
    return MsgUpdateResourceDependencyMappingProposal.decode(message.value);
  },
  toProto(message: MsgUpdateResourceDependencyMappingProposal): Uint8Array {
    return MsgUpdateResourceDependencyMappingProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateResourceDependencyMappingProposal): MsgUpdateResourceDependencyMappingProposalProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposal",
      value: MsgUpdateResourceDependencyMappingProposal.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateResourceDependencyMappingProposalJsonFile(): MsgUpdateResourceDependencyMappingProposalJsonFile {
  return {
    title: "",
    description: "",
    deposit: "",
    messageDependencyMapping: []
  };
}
export const MsgUpdateResourceDependencyMappingProposalJsonFile = {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile",
  encode(message: MsgUpdateResourceDependencyMappingProposalJsonFile, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.deposit !== "") {
      writer.uint32(26).string(message.deposit);
    }
    for (const v of message.messageDependencyMapping) {
      MessageDependencyMapping.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposalJsonFile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.deposit = reader.string();
          break;
        case 4:
          message.messageDependencyMapping.push(MessageDependencyMapping.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateResourceDependencyMappingProposalJsonFile>): MsgUpdateResourceDependencyMappingProposalJsonFile {
    const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.deposit = object.deposit ?? "";
    message.messageDependencyMapping = object.messageDependencyMapping?.map(e => MessageDependencyMapping.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateResourceDependencyMappingProposalJsonFileAmino): MsgUpdateResourceDependencyMappingProposalJsonFile {
    const message = createBaseMsgUpdateResourceDependencyMappingProposalJsonFile();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    message.messageDependencyMapping = object.message_dependency_mapping?.map(e => MessageDependencyMapping.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateResourceDependencyMappingProposalJsonFile): MsgUpdateResourceDependencyMappingProposalJsonFileAmino {
    const obj: any = {};
    obj.title = message.title ?? "";
    obj.description = message.description ?? "";
    obj.deposit = message.deposit ?? "";
    if (message.messageDependencyMapping) {
      obj.message_dependency_mapping = message.messageDependencyMapping.map(e => e ? MessageDependencyMapping.toAmino(e) : undefined);
    } else {
      obj.message_dependency_mapping = message.messageDependencyMapping;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg): MsgUpdateResourceDependencyMappingProposalJsonFile {
    return MsgUpdateResourceDependencyMappingProposalJsonFile.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateResourceDependencyMappingProposalJsonFile): MsgUpdateResourceDependencyMappingProposalJsonFileAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalJsonFile",
      value: MsgUpdateResourceDependencyMappingProposalJsonFile.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg): MsgUpdateResourceDependencyMappingProposalJsonFile {
    return MsgUpdateResourceDependencyMappingProposalJsonFile.decode(message.value);
  },
  toProto(message: MsgUpdateResourceDependencyMappingProposalJsonFile): Uint8Array {
    return MsgUpdateResourceDependencyMappingProposalJsonFile.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateResourceDependencyMappingProposalJsonFile): MsgUpdateResourceDependencyMappingProposalJsonFileProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalJsonFile",
      value: MsgUpdateResourceDependencyMappingProposalJsonFile.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateResourceDependencyMappingProposalResponse(): MsgUpdateResourceDependencyMappingProposalResponse {
  return {};
}
export const MsgUpdateResourceDependencyMappingProposalResponse = {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse",
  encode(_: MsgUpdateResourceDependencyMappingProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateResourceDependencyMappingProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateResourceDependencyMappingProposalResponse>): MsgUpdateResourceDependencyMappingProposalResponse {
    const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
    return message;
  },
  fromAmino(_: MsgUpdateResourceDependencyMappingProposalResponseAmino): MsgUpdateResourceDependencyMappingProposalResponse {
    const message = createBaseMsgUpdateResourceDependencyMappingProposalResponse();
    return message;
  },
  toAmino(_: MsgUpdateResourceDependencyMappingProposalResponse): MsgUpdateResourceDependencyMappingProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateResourceDependencyMappingProposalResponseAminoMsg): MsgUpdateResourceDependencyMappingProposalResponse {
    return MsgUpdateResourceDependencyMappingProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateResourceDependencyMappingProposalResponse): MsgUpdateResourceDependencyMappingProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateResourceDependencyMappingProposalResponse",
      value: MsgUpdateResourceDependencyMappingProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateResourceDependencyMappingProposalResponseProtoMsg): MsgUpdateResourceDependencyMappingProposalResponse {
    return MsgUpdateResourceDependencyMappingProposalResponse.decode(message.value);
  },
  toProto(message: MsgUpdateResourceDependencyMappingProposalResponse): Uint8Array {
    return MsgUpdateResourceDependencyMappingProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateResourceDependencyMappingProposalResponse): MsgUpdateResourceDependencyMappingProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateResourceDependencyMappingProposalResponse",
      value: MsgUpdateResourceDependencyMappingProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateWasmDependencyMappingProposal(): MsgUpdateWasmDependencyMappingProposal {
  return {
    title: "",
    description: "",
    contractAddress: "",
    wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
  };
}
export const MsgUpdateWasmDependencyMappingProposal = {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal",
  encode(message: MsgUpdateWasmDependencyMappingProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.wasmDependencyMapping !== undefined) {
      WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWasmDependencyMappingProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWasmDependencyMappingProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.wasmDependencyMapping = WasmDependencyMapping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateWasmDependencyMappingProposal>): MsgUpdateWasmDependencyMappingProposal {
    const message = createBaseMsgUpdateWasmDependencyMappingProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateWasmDependencyMappingProposalAmino): MsgUpdateWasmDependencyMappingProposal {
    const message = createBaseMsgUpdateWasmDependencyMappingProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
      message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
    }
    return message;
  },
  toAmino(message: MsgUpdateWasmDependencyMappingProposal): MsgUpdateWasmDependencyMappingProposalAmino {
    const obj: any = {};
    obj.title = message.title ?? "";
    obj.description = message.description ?? "";
    obj.contract_address = message.contractAddress ?? "";
    obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWasmDependencyMappingProposalAminoMsg): MsgUpdateWasmDependencyMappingProposal {
    return MsgUpdateWasmDependencyMappingProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateWasmDependencyMappingProposal): MsgUpdateWasmDependencyMappingProposalAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposal",
      value: MsgUpdateWasmDependencyMappingProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateWasmDependencyMappingProposalProtoMsg): MsgUpdateWasmDependencyMappingProposal {
    return MsgUpdateWasmDependencyMappingProposal.decode(message.value);
  },
  toProto(message: MsgUpdateWasmDependencyMappingProposal): Uint8Array {
    return MsgUpdateWasmDependencyMappingProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWasmDependencyMappingProposal): MsgUpdateWasmDependencyMappingProposalProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposal",
      value: MsgUpdateWasmDependencyMappingProposal.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateWasmDependencyMappingProposalJsonFile(): MsgUpdateWasmDependencyMappingProposalJsonFile {
  return {
    title: "",
    description: "",
    deposit: "",
    contractAddress: "",
    wasmDependencyMapping: WasmDependencyMapping.fromPartial({})
  };
}
export const MsgUpdateWasmDependencyMappingProposalJsonFile = {
  typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile",
  encode(message: MsgUpdateWasmDependencyMappingProposalJsonFile, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.deposit !== "") {
      writer.uint32(26).string(message.deposit);
    }
    if (message.contractAddress !== "") {
      writer.uint32(34).string(message.contractAddress);
    }
    if (message.wasmDependencyMapping !== undefined) {
      WasmDependencyMapping.encode(message.wasmDependencyMapping, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateWasmDependencyMappingProposalJsonFile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.deposit = reader.string();
          break;
        case 4:
          message.contractAddress = reader.string();
          break;
        case 5:
          message.wasmDependencyMapping = WasmDependencyMapping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateWasmDependencyMappingProposalJsonFile>): MsgUpdateWasmDependencyMappingProposalJsonFile {
    const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.deposit = object.deposit ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.wasmDependencyMapping = object.wasmDependencyMapping !== undefined && object.wasmDependencyMapping !== null ? WasmDependencyMapping.fromPartial(object.wasmDependencyMapping) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateWasmDependencyMappingProposalJsonFileAmino): MsgUpdateWasmDependencyMappingProposalJsonFile {
    const message = createBaseMsgUpdateWasmDependencyMappingProposalJsonFile();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = object.deposit;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.wasm_dependency_mapping !== undefined && object.wasm_dependency_mapping !== null) {
      message.wasmDependencyMapping = WasmDependencyMapping.fromAmino(object.wasm_dependency_mapping);
    }
    return message;
  },
  toAmino(message: MsgUpdateWasmDependencyMappingProposalJsonFile): MsgUpdateWasmDependencyMappingProposalJsonFileAmino {
    const obj: any = {};
    obj.title = message.title ?? "";
    obj.description = message.description ?? "";
    obj.deposit = message.deposit ?? "";
    obj.contract_address = message.contractAddress ?? "";
    obj.wasm_dependency_mapping = message.wasmDependencyMapping ? WasmDependencyMapping.toAmino(message.wasmDependencyMapping) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg): MsgUpdateWasmDependencyMappingProposalJsonFile {
    return MsgUpdateWasmDependencyMappingProposalJsonFile.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateWasmDependencyMappingProposalJsonFile): MsgUpdateWasmDependencyMappingProposalJsonFileAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateWasmDependencyMappingProposalJsonFile",
      value: MsgUpdateWasmDependencyMappingProposalJsonFile.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg): MsgUpdateWasmDependencyMappingProposalJsonFile {
    return MsgUpdateWasmDependencyMappingProposalJsonFile.decode(message.value);
  },
  toProto(message: MsgUpdateWasmDependencyMappingProposalJsonFile): Uint8Array {
    return MsgUpdateWasmDependencyMappingProposalJsonFile.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateWasmDependencyMappingProposalJsonFile): MsgUpdateWasmDependencyMappingProposalJsonFileProtoMsg {
    return {
      typeUrl: "/cosmos.accesscontrol.v1beta1.MsgUpdateWasmDependencyMappingProposalJsonFile",
      value: MsgUpdateWasmDependencyMappingProposalJsonFile.encode(message).finish()
    };
  }
};