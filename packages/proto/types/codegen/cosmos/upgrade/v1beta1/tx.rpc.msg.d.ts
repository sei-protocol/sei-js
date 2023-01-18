import { Rpc } from "@osmonauts/helpers";
import { MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse, MsgCancelUpgrade, MsgCancelUpgradeResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    softwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
    cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    softwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
    cancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}
