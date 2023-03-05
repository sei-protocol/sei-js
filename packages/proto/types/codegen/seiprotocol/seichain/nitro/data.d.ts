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
export declare const TransactionData: {
    encode(message: TransactionData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TransactionData;
    fromPartial(object: DeepPartial<TransactionData>): TransactionData;
};
export declare const LegacyMessage: {
    encode(message: LegacyMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LegacyMessage;
    fromPartial(object: DeepPartial<LegacyMessage>): LegacyMessage;
};
export declare const LoadedMessage: {
    encode(message: LoadedMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoadedMessage;
    fromPartial(object: DeepPartial<LoadedMessage>): LoadedMessage;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromPartial(object: DeepPartial<Message>): Message;
};
export declare const MessageHeader: {
    encode(message: MessageHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageHeader;
    fromPartial(object: DeepPartial<MessageHeader>): MessageHeader;
};
export declare const CompiledInstruction: {
    encode(message: CompiledInstruction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CompiledInstruction;
    fromPartial(object: DeepPartial<CompiledInstruction>): CompiledInstruction;
};
export declare const MessageAddressTableLookup: {
    encode(message: MessageAddressTableLookup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MessageAddressTableLookup;
    fromPartial(object: DeepPartial<MessageAddressTableLookup>): MessageAddressTableLookup;
};
export declare const LoadedAddresses: {
    encode(message: LoadedAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LoadedAddresses;
    fromPartial(object: DeepPartial<LoadedAddresses>): LoadedAddresses;
};
export declare const MerkleProof: {
    encode(message: MerkleProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerkleProof;
    fromPartial(object: DeepPartial<MerkleProof>): MerkleProof;
};
