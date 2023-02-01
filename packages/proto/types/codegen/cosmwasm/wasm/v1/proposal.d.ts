import { AccessConfig, AccessConfigSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiatePermission: AccessConfig;
}
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiate_permission: AccessConfigSDKType;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: Long;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinSDKType[];
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM codesudo */
    codeId: Long;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM codesudo */
    code_id: Long;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    runAs: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: CoinSDKType[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    new_admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    codeIds: Long[];
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    code_ids: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    codeIds: Long[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposalSDKType {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    code_ids: Long[];
}
export declare const StoreCodeProposal: {
    encode(message: StoreCodeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreCodeProposal;
    fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal;
};
export declare const InstantiateContractProposal: {
    encode(message: InstantiateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstantiateContractProposal;
    fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal;
};
export declare const MigrateContractProposal: {
    encode(message: MigrateContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MigrateContractProposal;
    fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal;
};
export declare const SudoContractProposal: {
    encode(message: SudoContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SudoContractProposal;
    fromPartial(object: DeepPartial<SudoContractProposal>): SudoContractProposal;
};
export declare const ExecuteContractProposal: {
    encode(message: ExecuteContractProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExecuteContractProposal;
    fromPartial(object: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal;
};
export declare const UpdateAdminProposal: {
    encode(message: UpdateAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateAdminProposal;
    fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal;
};
export declare const ClearAdminProposal: {
    encode(message: ClearAdminProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClearAdminProposal;
    fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal;
};
export declare const PinCodesProposal: {
    encode(message: PinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PinCodesProposal;
    fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal;
};
export declare const UnpinCodesProposal: {
    encode(message: UnpinCodesProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnpinCodesProposal;
    fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal;
};
