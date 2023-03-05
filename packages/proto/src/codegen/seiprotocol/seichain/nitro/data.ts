import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface TransactionData {
  slot: Long;
  signature: string;
  isVote: boolean;
  messageType: Long;
  legacyMessage: LegacyMessage;
  v0LoadedMessage: LoadedMessage;
  signatures: string[];
  messageHash: string;
  writeVersion: Long;
}
export interface TransactionDataSDKType {
  slot: Long;
  signature: string;
  is_vote: boolean;
  message_type: Long;
  legacy_message: LegacyMessageSDKType;
  v0_loaded_message: LoadedMessageSDKType;
  signatures: string[];
  message_hash: string;
  write_version: Long;
}
export interface LegacyMessage {
  header: MessageHeader;
  accountKeys: string[];
  recentBlockhash: string;
  instructions: CompiledInstruction[];
}
export interface LegacyMessageSDKType {
  header: MessageHeaderSDKType;
  account_keys: string[];
  recent_blockhash: string;
  instructions: CompiledInstructionSDKType[];
}
export interface LoadedMessage {
  message: Message;
  loadedAddresses: LoadedAddresses;
}
export interface LoadedMessageSDKType {
  message: MessageSDKType;
  loaded_addresses: LoadedAddressesSDKType;
}
export interface Message {
  header: MessageHeader;
  accountKeys: string[];
  recentBlockhash: string;
  instructions: CompiledInstruction[];
  addressTableLookups: MessageAddressTableLookup[];
}
export interface MessageSDKType {
  header: MessageHeaderSDKType;
  account_keys: string[];
  recent_blockhash: string;
  instructions: CompiledInstructionSDKType[];
  address_table_lookups: MessageAddressTableLookupSDKType[];
}
export interface MessageHeader {
  numRequiredSignatures: number;
  numReadonlySignedAccounts: number;
  numReadonlyUnsignedAccounts: number;
}
export interface MessageHeaderSDKType {
  num_required_signatures: number;
  num_readonly_signed_accounts: number;
  num_readonly_unsigned_accounts: number;
}
export interface CompiledInstruction {
  programIdIndex: number;
  accounts: number[];
  data: string;
}
export interface CompiledInstructionSDKType {
  program_id_index: number;
  accounts: number[];
  data: string;
}
export interface MessageAddressTableLookup {
  accountKey: string;
  writableIndexes: number[];
  readonlyIndexes: number[];
}
export interface MessageAddressTableLookupSDKType {
  account_key: string;
  writable_indexes: number[];
  readonly_indexes: number[];
}
export interface LoadedAddresses {
  writable: string[];
  readonly: string[];
}
export interface LoadedAddressesSDKType {
  writable: string[];
  readonly: string[];
}
export interface MerkleProof {
  commitment: string;
  hash: string[];
  direction: Long[];
}
export interface MerkleProofSDKType {
  commitment: string;
  hash: string[];
  direction: Long[];
}

function createBaseTransactionData(): TransactionData {
  return {
    slot: Long.UZERO,
    signature: "",
    isVote: false,
    messageType: Long.UZERO,
    legacyMessage: undefined,
    v0LoadedMessage: undefined,
    signatures: [],
    messageHash: "",
    writeVersion: Long.UZERO
  };
}

export const TransactionData = {
  encode(message: TransactionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.slot.isZero()) {
      writer.uint32(8).uint64(message.slot);
    }

    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }

    if (message.isVote === true) {
      writer.uint32(24).bool(message.isVote);
    }

    if (!message.messageType.isZero()) {
      writer.uint32(32).uint64(message.messageType);
    }

    if (message.legacyMessage !== undefined) {
      LegacyMessage.encode(message.legacyMessage, writer.uint32(42).fork()).ldelim();
    }

    if (message.v0LoadedMessage !== undefined) {
      LoadedMessage.encode(message.v0LoadedMessage, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.signatures) {
      writer.uint32(58).string(v!);
    }

    if (message.messageHash !== "") {
      writer.uint32(66).string(message.messageHash);
    }

    if (!message.writeVersion.isZero()) {
      writer.uint32(72).uint64(message.writeVersion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.slot = (reader.uint64() as Long);
          break;

        case 2:
          message.signature = reader.string();
          break;

        case 3:
          message.isVote = reader.bool();
          break;

        case 4:
          message.messageType = (reader.uint64() as Long);
          break;

        case 5:
          message.legacyMessage = LegacyMessage.decode(reader, reader.uint32());
          break;

        case 6:
          message.v0LoadedMessage = LoadedMessage.decode(reader, reader.uint32());
          break;

        case 7:
          message.signatures.push(reader.string());
          break;

        case 8:
          message.messageHash = reader.string();
          break;

        case 9:
          message.writeVersion = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TransactionData>): TransactionData {
    const message = createBaseTransactionData();
    message.slot = object.slot !== undefined && object.slot !== null ? Long.fromValue(object.slot) : Long.UZERO;
    message.signature = object.signature ?? "";
    message.isVote = object.isVote ?? false;
    message.messageType = object.messageType !== undefined && object.messageType !== null ? Long.fromValue(object.messageType) : Long.UZERO;
    message.legacyMessage = object.legacyMessage !== undefined && object.legacyMessage !== null ? LegacyMessage.fromPartial(object.legacyMessage) : undefined;
    message.v0LoadedMessage = object.v0LoadedMessage !== undefined && object.v0LoadedMessage !== null ? LoadedMessage.fromPartial(object.v0LoadedMessage) : undefined;
    message.signatures = object.signatures?.map(e => e) || [];
    message.messageHash = object.messageHash ?? "";
    message.writeVersion = object.writeVersion !== undefined && object.writeVersion !== null ? Long.fromValue(object.writeVersion) : Long.UZERO;
    return message;
  }

};

function createBaseLegacyMessage(): LegacyMessage {
  return {
    header: undefined,
    accountKeys: [],
    recentBlockhash: "",
    instructions: []
  };
}

export const LegacyMessage = {
  encode(message: LegacyMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      MessageHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.accountKeys) {
      writer.uint32(18).string(v!);
    }

    if (message.recentBlockhash !== "") {
      writer.uint32(26).string(message.recentBlockhash);
    }

    for (const v of message.instructions) {
      CompiledInstruction.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = MessageHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.accountKeys.push(reader.string());
          break;

        case 3:
          message.recentBlockhash = reader.string();
          break;

        case 4:
          message.instructions.push(CompiledInstruction.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LegacyMessage>): LegacyMessage {
    const message = createBaseLegacyMessage();
    message.header = object.header !== undefined && object.header !== null ? MessageHeader.fromPartial(object.header) : undefined;
    message.accountKeys = object.accountKeys?.map(e => e) || [];
    message.recentBlockhash = object.recentBlockhash ?? "";
    message.instructions = object.instructions?.map(e => CompiledInstruction.fromPartial(e)) || [];
    return message;
  }

};

function createBaseLoadedMessage(): LoadedMessage {
  return {
    message: undefined,
    loadedAddresses: undefined
  };
}

export const LoadedMessage = {
  encode(message: LoadedMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.message !== undefined) {
      Message.encode(message.message, writer.uint32(10).fork()).ldelim();
    }

    if (message.loadedAddresses !== undefined) {
      LoadedAddresses.encode(message.loadedAddresses, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadedMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadedMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.message = Message.decode(reader, reader.uint32());
          break;

        case 2:
          message.loadedAddresses = LoadedAddresses.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LoadedMessage>): LoadedMessage {
    const message = createBaseLoadedMessage();
    message.message = object.message !== undefined && object.message !== null ? Message.fromPartial(object.message) : undefined;
    message.loadedAddresses = object.loadedAddresses !== undefined && object.loadedAddresses !== null ? LoadedAddresses.fromPartial(object.loadedAddresses) : undefined;
    return message;
  }

};

function createBaseMessage(): Message {
  return {
    header: undefined,
    accountKeys: [],
    recentBlockhash: "",
    instructions: [],
    addressTableLookups: []
  };
}

export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      MessageHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.accountKeys) {
      writer.uint32(18).string(v!);
    }

    if (message.recentBlockhash !== "") {
      writer.uint32(26).string(message.recentBlockhash);
    }

    for (const v of message.instructions) {
      CompiledInstruction.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.addressTableLookups) {
      MessageAddressTableLookup.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.header = MessageHeader.decode(reader, reader.uint32());
          break;

        case 2:
          message.accountKeys.push(reader.string());
          break;

        case 3:
          message.recentBlockhash = reader.string();
          break;

        case 4:
          message.instructions.push(CompiledInstruction.decode(reader, reader.uint32()));
          break;

        case 5:
          message.addressTableLookups.push(MessageAddressTableLookup.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Message>): Message {
    const message = createBaseMessage();
    message.header = object.header !== undefined && object.header !== null ? MessageHeader.fromPartial(object.header) : undefined;
    message.accountKeys = object.accountKeys?.map(e => e) || [];
    message.recentBlockhash = object.recentBlockhash ?? "";
    message.instructions = object.instructions?.map(e => CompiledInstruction.fromPartial(e)) || [];
    message.addressTableLookups = object.addressTableLookups?.map(e => MessageAddressTableLookup.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMessageHeader(): MessageHeader {
  return {
    numRequiredSignatures: 0,
    numReadonlySignedAccounts: 0,
    numReadonlyUnsignedAccounts: 0
  };
}

export const MessageHeader = {
  encode(message: MessageHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.numRequiredSignatures !== 0) {
      writer.uint32(8).uint32(message.numRequiredSignatures);
    }

    if (message.numReadonlySignedAccounts !== 0) {
      writer.uint32(16).uint32(message.numReadonlySignedAccounts);
    }

    if (message.numReadonlyUnsignedAccounts !== 0) {
      writer.uint32(24).uint32(message.numReadonlyUnsignedAccounts);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageHeader();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numRequiredSignatures = reader.uint32();
          break;

        case 2:
          message.numReadonlySignedAccounts = reader.uint32();
          break;

        case 3:
          message.numReadonlyUnsignedAccounts = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MessageHeader>): MessageHeader {
    const message = createBaseMessageHeader();
    message.numRequiredSignatures = object.numRequiredSignatures ?? 0;
    message.numReadonlySignedAccounts = object.numReadonlySignedAccounts ?? 0;
    message.numReadonlyUnsignedAccounts = object.numReadonlyUnsignedAccounts ?? 0;
    return message;
  }

};

function createBaseCompiledInstruction(): CompiledInstruction {
  return {
    programIdIndex: 0,
    accounts: [],
    data: ""
  };
}

export const CompiledInstruction = {
  encode(message: CompiledInstruction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.programIdIndex !== 0) {
      writer.uint32(8).uint32(message.programIdIndex);
    }

    writer.uint32(18).fork();

    for (const v of message.accounts) {
      writer.uint32(v);
    }

    writer.ldelim();

    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CompiledInstruction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompiledInstruction();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.programIdIndex = reader.uint32();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.accounts.push(reader.uint32());
            }
          } else {
            message.accounts.push(reader.uint32());
          }

          break;

        case 3:
          message.data = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<CompiledInstruction>): CompiledInstruction {
    const message = createBaseCompiledInstruction();
    message.programIdIndex = object.programIdIndex ?? 0;
    message.accounts = object.accounts?.map(e => e) || [];
    message.data = object.data ?? "";
    return message;
  }

};

function createBaseMessageAddressTableLookup(): MessageAddressTableLookup {
  return {
    accountKey: "",
    writableIndexes: [],
    readonlyIndexes: []
  };
}

export const MessageAddressTableLookup = {
  encode(message: MessageAddressTableLookup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountKey !== "") {
      writer.uint32(10).string(message.accountKey);
    }

    writer.uint32(18).fork();

    for (const v of message.writableIndexes) {
      writer.uint32(v);
    }

    writer.ldelim();
    writer.uint32(26).fork();

    for (const v of message.readonlyIndexes) {
      writer.uint32(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MessageAddressTableLookup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessageAddressTableLookup();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.accountKey = reader.string();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.writableIndexes.push(reader.uint32());
            }
          } else {
            message.writableIndexes.push(reader.uint32());
          }

          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.readonlyIndexes.push(reader.uint32());
            }
          } else {
            message.readonlyIndexes.push(reader.uint32());
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MessageAddressTableLookup>): MessageAddressTableLookup {
    const message = createBaseMessageAddressTableLookup();
    message.accountKey = object.accountKey ?? "";
    message.writableIndexes = object.writableIndexes?.map(e => e) || [];
    message.readonlyIndexes = object.readonlyIndexes?.map(e => e) || [];
    return message;
  }

};

function createBaseLoadedAddresses(): LoadedAddresses {
  return {
    writable: [],
    readonly: []
  };
}

export const LoadedAddresses = {
  encode(message: LoadedAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.writable) {
      writer.uint32(10).string(v!);
    }

    for (const v of message.readonly) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadedAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadedAddresses();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.writable.push(reader.string());
          break;

        case 2:
          message.readonly.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<LoadedAddresses>): LoadedAddresses {
    const message = createBaseLoadedAddresses();
    message.writable = object.writable?.map(e => e) || [];
    message.readonly = object.readonly?.map(e => e) || [];
    return message;
  }

};

function createBaseMerkleProof(): MerkleProof {
  return {
    commitment: "",
    hash: [],
    direction: []
  };
}

export const MerkleProof = {
  encode(message: MerkleProof, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.commitment !== "") {
      writer.uint32(10).string(message.commitment);
    }

    for (const v of message.hash) {
      writer.uint32(18).string(v!);
    }

    writer.uint32(26).fork();

    for (const v of message.direction) {
      writer.int64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MerkleProof {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.commitment = reader.string();
          break;

        case 2:
          message.hash.push(reader.string());
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.direction.push((reader.int64() as Long));
            }
          } else {
            message.direction.push((reader.int64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MerkleProof>): MerkleProof {
    const message = createBaseMerkleProof();
    message.commitment = object.commitment ?? "";
    message.hash = object.hash?.map(e => e) || [];
    message.direction = object.direction?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};