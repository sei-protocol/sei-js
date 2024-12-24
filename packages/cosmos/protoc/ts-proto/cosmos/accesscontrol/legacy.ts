// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: cosmos/accesscontrol/legacy.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AccessOperation } from "./accesscontrol";
import {
  AccessOperationSelectorType,
  accessOperationSelectorTypeFromJSON,
  accessOperationSelectorTypeToJSON,
} from "./constants";

export const protobufPackage = "cosmos.accesscontrol.v1beta1";

export interface LegacyAccessOperationWithSelector {
  operation?: AccessOperation | undefined;
  selector_type: AccessOperationSelectorType;
  selector: string;
}

export interface LegacyWasmDependencyMapping {
  enabled: boolean;
  access_ops: LegacyAccessOperationWithSelector[];
  reset_reason: string;
  contract_address: string;
}

function createBaseLegacyAccessOperationWithSelector(): LegacyAccessOperationWithSelector {
  return { operation: undefined, selector_type: 0, selector: "" };
}

export const LegacyAccessOperationWithSelector: MessageFns<
  LegacyAccessOperationWithSelector,
  "cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector"
> = {
  $type: "cosmos.accesscontrol.v1beta1.LegacyAccessOperationWithSelector" as const,

  encode(message: LegacyAccessOperationWithSelector, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operation !== undefined) {
      AccessOperation.encode(message.operation, writer.uint32(10).fork()).join();
    }
    if (message.selector_type !== 0) {
      writer.uint32(16).int32(message.selector_type);
    }
    if (message.selector !== "") {
      writer.uint32(26).string(message.selector);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LegacyAccessOperationWithSelector {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAccessOperationWithSelector();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operation = AccessOperation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.selector_type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.selector = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyAccessOperationWithSelector {
    return {
      operation: isSet(object.operation) ? AccessOperation.fromJSON(object.operation) : undefined,
      selector_type: isSet(object.selector_type) ? accessOperationSelectorTypeFromJSON(object.selector_type) : 0,
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
    };
  },

  toJSON(message: LegacyAccessOperationWithSelector): unknown {
    const obj: any = {};
    if (message.operation !== undefined) {
      obj.operation = AccessOperation.toJSON(message.operation);
    }
    if (message.selector_type !== 0) {
      obj.selector_type = accessOperationSelectorTypeToJSON(message.selector_type);
    }
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyAccessOperationWithSelector>, I>>(
    base?: I,
  ): LegacyAccessOperationWithSelector {
    return LegacyAccessOperationWithSelector.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyAccessOperationWithSelector>, I>>(
    object: I,
  ): LegacyAccessOperationWithSelector {
    const message = createBaseLegacyAccessOperationWithSelector();
    message.operation = (object.operation !== undefined && object.operation !== null)
      ? AccessOperation.fromPartial(object.operation)
      : undefined;
    message.selector_type = object.selector_type ?? 0;
    message.selector = object.selector ?? "";
    return message;
  },
};

function createBaseLegacyWasmDependencyMapping(): LegacyWasmDependencyMapping {
  return { enabled: false, access_ops: [], reset_reason: "", contract_address: "" };
}

export const LegacyWasmDependencyMapping: MessageFns<
  LegacyWasmDependencyMapping,
  "cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping"
> = {
  $type: "cosmos.accesscontrol.v1beta1.LegacyWasmDependencyMapping" as const,

  encode(message: LegacyWasmDependencyMapping, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.enabled !== false) {
      writer.uint32(8).bool(message.enabled);
    }
    for (const v of message.access_ops) {
      LegacyAccessOperationWithSelector.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.reset_reason !== "") {
      writer.uint32(26).string(message.reset_reason);
    }
    if (message.contract_address !== "") {
      writer.uint32(34).string(message.contract_address);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LegacyWasmDependencyMapping {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyWasmDependencyMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.access_ops.push(LegacyAccessOperationWithSelector.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reset_reason = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contract_address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LegacyWasmDependencyMapping {
    return {
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      access_ops: globalThis.Array.isArray(object?.access_ops)
        ? object.access_ops.map((e: any) => LegacyAccessOperationWithSelector.fromJSON(e))
        : [],
      reset_reason: isSet(object.reset_reason) ? globalThis.String(object.reset_reason) : "",
      contract_address: isSet(object.contract_address) ? globalThis.String(object.contract_address) : "",
    };
  },

  toJSON(message: LegacyWasmDependencyMapping): unknown {
    const obj: any = {};
    if (message.enabled !== false) {
      obj.enabled = message.enabled;
    }
    if (message.access_ops?.length) {
      obj.access_ops = message.access_ops.map((e) => LegacyAccessOperationWithSelector.toJSON(e));
    }
    if (message.reset_reason !== "") {
      obj.reset_reason = message.reset_reason;
    }
    if (message.contract_address !== "") {
      obj.contract_address = message.contract_address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LegacyWasmDependencyMapping>, I>>(base?: I): LegacyWasmDependencyMapping {
    return LegacyWasmDependencyMapping.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LegacyWasmDependencyMapping>, I>>(object: I): LegacyWasmDependencyMapping {
    const message = createBaseLegacyWasmDependencyMapping();
    message.enabled = object.enabled ?? false;
    message.access_ops = object.access_ops?.map((e) => LegacyAccessOperationWithSelector.fromPartial(e)) || [];
    message.reset_reason = object.reset_reason ?? "";
    message.contract_address = object.contract_address ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T, V extends string> {
  readonly $type: V;
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
