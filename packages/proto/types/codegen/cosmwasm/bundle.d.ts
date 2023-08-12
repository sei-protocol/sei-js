import * as _44 from "./wasm/v1/genesis";
import * as _45 from "./wasm/v1/ibc";
import * as _46 from "./wasm/v1/proposal";
import * as _47 from "./wasm/v1/query";
import * as _48 from "./wasm/v1/tx";
import * as _49 from "./wasm/v1/types";
import * as _162 from "./wasm/v1/query.lcd";
import * as _163 from "./wasm/v1/query.rpc.Query";
import * as _164 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _164.MsgClientImpl;
            QueryClientImpl: typeof _163.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _47.QueryContractInfoRequest): Promise<_47.QueryContractInfoResponse>;
                contractHistory(request: _47.QueryContractHistoryRequest): Promise<_47.QueryContractHistoryResponse>;
                contractsByCode(request: _47.QueryContractsByCodeRequest): Promise<_47.QueryContractsByCodeResponse>;
                allContractState(request: _47.QueryAllContractStateRequest): Promise<_47.QueryAllContractStateResponse>;
                rawContractState(request: _47.QueryRawContractStateRequest): Promise<_47.QueryRawContractStateResponse>;
                smartContractState(request: _47.QuerySmartContractStateRequest): Promise<_47.QuerySmartContractStateResponse>;
                code(request: _47.QueryCodeRequest): Promise<_47.QueryCodeResponse>;
                codes(request?: _47.QueryCodesRequest): Promise<_47.QueryCodesResponse>;
                pinnedCodes(request?: _47.QueryPinnedCodesRequest): Promise<_47.QueryPinnedCodesResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _48.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _48.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _48.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _48.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _48.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _48.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _48.MsgStoreCode): {
                        typeUrl: string;
                        value: _48.MsgStoreCode;
                    };
                    instantiateContract(value: _48.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _48.MsgInstantiateContract;
                    };
                    executeContract(value: _48.MsgExecuteContract): {
                        typeUrl: string;
                        value: _48.MsgExecuteContract;
                    };
                    migrateContract(value: _48.MsgMigrateContract): {
                        typeUrl: string;
                        value: _48.MsgMigrateContract;
                    };
                    updateAdmin(value: _48.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _48.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _48.MsgClearAdmin): {
                        typeUrl: string;
                        value: _48.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _48.MsgStoreCode): {
                        typeUrl: string;
                        value: _48.MsgStoreCode;
                    };
                    instantiateContract(value: _48.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _48.MsgInstantiateContract;
                    };
                    executeContract(value: _48.MsgExecuteContract): {
                        typeUrl: string;
                        value: _48.MsgExecuteContract;
                    };
                    migrateContract(value: _48.MsgMigrateContract): {
                        typeUrl: string;
                        value: _48.MsgMigrateContract;
                    };
                    updateAdmin(value: _48.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _48.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _48.MsgClearAdmin): {
                        typeUrl: string;
                        value: _48.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _48.MsgStoreCode) => {
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
                    }) => _48.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _48.MsgInstantiateContract) => {
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
                    }) => _48.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _48.MsgExecuteContract) => {
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
                    }) => _48.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _48.MsgMigrateContract) => {
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
                    }) => _48.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _48.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _48.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _48.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _48.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _49.AccessType;
            accessTypeToJSON(object: _49.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _49.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _49.ContractCodeHistoryOperationType): string;
            AccessType: typeof _49.AccessType;
            AccessTypeSDKType: typeof _49.AccessType;
            ContractCodeHistoryOperationType: typeof _49.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _49.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _49.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.AccessTypeParam;
                fromPartial(object: any): _49.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _49.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.AccessConfig;
                fromPartial(object: any): _49.AccessConfig;
            };
            Params: {
                encode(message: _49.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Params;
                fromPartial(object: any): _49.Params;
            };
            CodeInfo: {
                encode(message: _49.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.CodeInfo;
                fromPartial(object: any): _49.CodeInfo;
            };
            ContractInfo: {
                encode(message: _49.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ContractInfo;
                fromPartial(object: any): _49.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _49.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ContractCodeHistoryEntry;
                fromPartial(object: any): _49.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _49.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.AbsoluteTxPosition;
                fromPartial(object: any): _49.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _49.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Model;
                fromPartial(object: any): _49.Model;
            };
            MsgStoreCode: {
                encode(message: _48.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgStoreCode;
                fromPartial(object: any): _48.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _48.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgStoreCodeResponse;
                fromPartial(object: any): _48.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _48.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgInstantiateContract;
                fromPartial(object: any): _48.MsgInstantiateContract;
            };
            MsgInstantiateContractResponse: {
                encode(message: _48.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgInstantiateContractResponse;
                fromPartial(object: any): _48.MsgInstantiateContractResponse;
            };
            MsgExecuteContract: {
                encode(message: _48.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgExecuteContract;
                fromPartial(object: any): _48.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _48.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgExecuteContractResponse;
                fromPartial(object: any): _48.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _48.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgMigrateContract;
                fromPartial(object: any): _48.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _48.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgMigrateContractResponse;
                fromPartial(object: any): _48.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _48.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgUpdateAdmin;
                fromPartial(object: any): _48.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _48.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgUpdateAdminResponse;
                fromPartial(_: any): _48.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _48.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgClearAdmin;
                fromPartial(object: any): _48.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _48.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgClearAdminResponse;
                fromPartial(_: any): _48.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _47.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractInfoRequest;
                fromPartial(object: any): _47.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _47.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractInfoResponse;
                fromPartial(object: any): _47.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _47.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractHistoryRequest;
                fromPartial(object: any): _47.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _47.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractHistoryResponse;
                fromPartial(object: any): _47.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _47.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractsByCodeRequest;
                fromPartial(object: any): _47.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _47.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryContractsByCodeResponse;
                fromPartial(object: any): _47.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _47.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllContractStateRequest;
                fromPartial(object: any): _47.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _47.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryAllContractStateResponse;
                fromPartial(object: any): _47.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _47.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryRawContractStateRequest;
                fromPartial(object: any): _47.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _47.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryRawContractStateResponse;
                fromPartial(object: any): _47.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _47.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QuerySmartContractStateRequest;
                fromPartial(object: any): _47.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _47.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QuerySmartContractStateResponse;
                fromPartial(object: any): _47.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _47.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodeRequest;
                fromPartial(object: any): _47.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _47.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.CodeInfoResponse;
                fromPartial(object: any): _47.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _47.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodeResponse;
                fromPartial(object: any): _47.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _47.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodesRequest;
                fromPartial(object: any): _47.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _47.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryCodesResponse;
                fromPartial(object: any): _47.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _47.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryPinnedCodesRequest;
                fromPartial(object: any): _47.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _47.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryPinnedCodesResponse;
                fromPartial(object: any): _47.QueryPinnedCodesResponse;
            };
            StoreCodeProposal: {
                encode(message: _46.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.StoreCodeProposal;
                fromPartial(object: any): _46.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _46.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.InstantiateContractProposal;
                fromPartial(object: any): _46.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _46.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.MigrateContractProposal;
                fromPartial(object: any): _46.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _46.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.SudoContractProposal;
                fromPartial(object: any): _46.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _46.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ExecuteContractProposal;
                fromPartial(object: any): _46.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _46.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.UpdateAdminProposal;
                fromPartial(object: any): _46.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _46.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.ClearAdminProposal;
                fromPartial(object: any): _46.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _46.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.PinCodesProposal;
                fromPartial(object: any): _46.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _46.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.UnpinCodesProposal;
                fromPartial(object: any): _46.UnpinCodesProposal;
            };
            MsgIBCSend: {
                encode(message: _45.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgIBCSend;
                fromPartial(object: any): _45.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _45.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.MsgIBCCloseChannel;
                fromPartial(object: any): _45.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _44.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState;
                fromPartial(object: any): _44.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _44.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenesisState_GenMsgs;
                fromPartial(object: any): _44.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _44.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Code;
                fromPartial(object: any): _44.Code;
            };
            Contract: {
                encode(message: _44.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Contract;
                fromPartial(object: any): _44.Contract;
            };
            Sequence: {
                encode(message: _44.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Sequence;
                fromPartial(object: any): _44.Sequence;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _164.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _47.QueryContractInfoRequest): Promise<_47.QueryContractInfoResponse>;
                        contractHistory(request: _47.QueryContractHistoryRequest): Promise<_47.QueryContractHistoryResponse>;
                        contractsByCode(request: _47.QueryContractsByCodeRequest): Promise<_47.QueryContractsByCodeResponse>;
                        allContractState(request: _47.QueryAllContractStateRequest): Promise<_47.QueryAllContractStateResponse>;
                        rawContractState(request: _47.QueryRawContractStateRequest): Promise<_47.QueryRawContractStateResponse>;
                        smartContractState(request: _47.QuerySmartContractStateRequest): Promise<_47.QuerySmartContractStateResponse>;
                        code(request: _47.QueryCodeRequest): Promise<_47.QueryCodeResponse>;
                        codes(request?: _47.QueryCodesRequest): Promise<_47.QueryCodesResponse>;
                        pinnedCodes(request?: _47.QueryPinnedCodesRequest): Promise<_47.QueryPinnedCodesResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            cosmwasm: {
                wasm: {
                    v1: _162.LCDQueryClient;
                };
            };
        }>;
    };
}
