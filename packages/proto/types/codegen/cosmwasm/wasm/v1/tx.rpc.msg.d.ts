import { Rpc } from "@osmonauts/helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
}
