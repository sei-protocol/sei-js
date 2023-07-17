import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const cosmwasmAminoConverters: {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: string;
        toAmino: ({ sender, wasmByteCode, instantiatePermission }: import("./wasm/v1/tx").MsgStoreCode) => {
            sender: string;
            wasm_byte_code: string;
            instantiate_permission: {
                permission: number;
                address: string;
            };
        };
        fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
            sender: string;
            wasm_byte_code: string;
            instantiate_permission: {
                permission: number;
                address: string;
            };
        }) => import("./wasm/v1/tx").MsgStoreCode;
    };
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: ({ sender, admin, codeId, label, msg, funds }: import("./wasm/v1/tx").MsgInstantiateContract) => {
            sender: string;
            admin: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
            sender: string;
            admin: string;
            code_id: string;
            label: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        }) => import("./wasm/v1/tx").MsgInstantiateContract;
    };
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: string;
        toAmino: ({ sender, contract, msg, funds }: import("./wasm/v1/tx").MsgExecuteContract) => {
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
        fromAmino: ({ sender, contract, msg, funds }: {
            sender: string;
            contract: string;
            msg: Uint8Array;
            funds: {
                denom: string;
                amount: string;
            }[];
        }) => import("./wasm/v1/tx").MsgExecuteContract;
    };
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: string;
        toAmino: ({ sender, contract, codeId, msg }: import("./wasm/v1/tx").MsgMigrateContract) => {
            sender: string;
            contract: string;
            code_id: string;
            msg: Uint8Array;
        };
        fromAmino: ({ sender, contract, code_id, msg }: {
            sender: string;
            contract: string;
            code_id: string;
            msg: Uint8Array;
        }) => import("./wasm/v1/tx").MsgMigrateContract;
    };
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: string;
        toAmino: ({ sender, newAdmin, contract }: import("./wasm/v1/tx").MsgUpdateAdmin) => {
            sender: string;
            new_admin: string;
            contract: string;
        };
        fromAmino: ({ sender, new_admin, contract }: {
            sender: string;
            new_admin: string;
            contract: string;
        }) => import("./wasm/v1/tx").MsgUpdateAdmin;
    };
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: string;
        toAmino: ({ sender, contract }: import("./wasm/v1/tx").MsgClearAdmin) => {
            sender: string;
            contract: string;
        };
        fromAmino: ({ sender, contract }: {
            sender: string;
            contract: string;
        }) => import("./wasm/v1/tx").MsgClearAdmin;
    };
};
export declare const cosmwasmProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCosmwasmClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCosmwasmClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
