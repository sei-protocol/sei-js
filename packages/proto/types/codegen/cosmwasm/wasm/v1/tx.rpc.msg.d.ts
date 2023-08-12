import { Rpc } from "../../../helpers";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /** Instantiate creates a new smart contract instance for the given code id. */
    instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /** Execute submits the given message data to a smart contract */
    executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    /** UpdateAdmin sets a new   admin for a smart contract */
    updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    /** ClearAdmin removes any admin stored for a smart contract */
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
