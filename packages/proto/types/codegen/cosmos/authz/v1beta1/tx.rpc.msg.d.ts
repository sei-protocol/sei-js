import { Rpc } from "@osmonauts/helpers";
import { MsgGrant, MsgGrantResponse, MsgExec, MsgExecResponse, MsgRevoke, MsgRevokeResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    grant(request: MsgGrant): Promise<MsgGrantResponse>;
    exec(request: MsgExec): Promise<MsgExecResponse>;
    revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    grant(request: MsgGrant): Promise<MsgGrantResponse>;
    exec(request: MsgExec): Promise<MsgExecResponse>;
    revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
}
