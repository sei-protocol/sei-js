import { Rpc } from "@osmonauts/helpers";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
    updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
    upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
    submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
    updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
    upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
    submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse>;
}
