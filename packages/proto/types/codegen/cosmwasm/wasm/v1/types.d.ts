import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** AccessType permission types */
export declare enum AccessType {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    ACCESS_TYPE_UNSPECIFIED = 0,
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    ACCESS_TYPE_NOBODY = 1,
    /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */
    ACCESS_TYPE_ONLY_ADDRESS = 2,
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    ACCESS_TYPE_EVERYBODY = 3,
    UNRECOGNIZED = -1
}
/** AccessType permission types */
export declare enum AccessTypeSDKType {
    /** ACCESS_TYPE_UNSPECIFIED - AccessTypeUnspecified placeholder for empty value */
    ACCESS_TYPE_UNSPECIFIED = 0,
    /** ACCESS_TYPE_NOBODY - AccessTypeNobody forbidden */
    ACCESS_TYPE_NOBODY = 1,
    /** ACCESS_TYPE_ONLY_ADDRESS - AccessTypeOnlyAddress restricted to an address */
    ACCESS_TYPE_ONLY_ADDRESS = 2,
    /** ACCESS_TYPE_EVERYBODY - AccessTypeEverybody unrestricted */
    ACCESS_TYPE_EVERYBODY = 3,
    UNRECOGNIZED = -1
}
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationTypeSDKType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
/** AccessTypeParam */
export interface AccessTypeParam {
    value: AccessType;
}
/** AccessTypeParam */
export interface AccessTypeParamSDKType {
    value: AccessTypeSDKType;
}
/** AccessConfig access control type. */
export interface AccessConfig {
    permission: AccessType;
    address: string;
}
/** AccessConfig access control type. */
export interface AccessConfigSDKType {
    permission: AccessTypeSDKType;
    address: string;
}
/** Params defines the set of wasm parameters. */
export interface Params {
    codeUploadAccess: AccessConfig;
    instantiateDefaultPermission: AccessType;
    maxWasmCodeSize: Long;
}
/** Params defines the set of wasm parameters. */
export interface ParamsSDKType {
    code_upload_access: AccessConfigSDKType;
    instantiate_default_permission: AccessTypeSDKType;
    max_wasm_code_size: Long;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    /** CodeHash is the unique identifier created by wasmvm */
    codeHash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiateConfig: AccessConfig;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfoSDKType {
    /** CodeHash is the unique identifier created by wasmvm */
    code_hash: Uint8Array;
    /** Creator address who initially stored the code */
    creator: string;
    /** InstantiateConfig access control to apply on contract creation, optional */
    instantiate_config: AccessConfigSDKType;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    codeId: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /**
     * Created Tx position when the contract was instantiated.
     * This data should kept internal and not be exposed via query results. Just
     * use for sorting
     */
    created: AbsoluteTxPosition;
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension: Any;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfoSDKType {
    /** CodeID is the reference to the stored Wasm code */
    code_id: Long;
    /** Creator address who initially instantiated the contract */
    creator: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Label is optional metadata to be stored with a contract instance. */
    label: string;
    /**
     * Created Tx position when the contract was instantiated.
     * This data should kept internal and not be exposed via query results. Just
     * use for sorting
     */
    created: AbsoluteTxPositionSDKType;
    ibc_port_id: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     */
    extension: AnySDKType;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Updated Tx position when the operation was executed. */
    updated: AbsoluteTxPosition;
    msg: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntrySDKType {
    operation: ContractCodeHistoryOperationTypeSDKType;
    /** CodeID is the reference to the stored WASM code */
    code_id: Long;
    /** Updated Tx position when the operation was executed. */
    updated: AbsoluteTxPositionSDKType;
    msg: Uint8Array;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    blockHeight: Long;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    txIndex: Long;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 */
export interface AbsoluteTxPositionSDKType {
    /** BlockHeight is the block the contract was created at */
    block_height: Long;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     */
    tx_index: Long;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    key: Uint8Array;
    /** base64-encode raw value */
    value: Uint8Array;
}
/** Model is a struct that holds a KV pair */
export interface ModelSDKType {
    /** hex-encode key to read it better (this is often ascii) */
    key: Uint8Array;
    /** base64-encode raw value */
    value: Uint8Array;
}
export declare const AccessTypeParam: {
    encode(message: AccessTypeParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessTypeParam;
    fromPartial(object: DeepPartial<AccessTypeParam>): AccessTypeParam;
};
export declare const AccessConfig: {
    encode(message: AccessConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccessConfig;
    fromPartial(object: DeepPartial<AccessConfig>): AccessConfig;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeInfo;
    fromPartial(object: DeepPartial<CodeInfo>): CodeInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractInfo;
    fromPartial(object: DeepPartial<ContractInfo>): ContractInfo;
};
export declare const ContractCodeHistoryEntry: {
    encode(message: ContractCodeHistoryEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ContractCodeHistoryEntry;
    fromPartial(object: DeepPartial<ContractCodeHistoryEntry>): ContractCodeHistoryEntry;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AbsoluteTxPosition;
    fromPartial(object: DeepPartial<AbsoluteTxPosition>): AbsoluteTxPosition;
};
export declare const Model: {
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Model;
    fromPartial(object: DeepPartial<Model>): Model;
};
