import { Rpc } from "@osmonauts/helpers";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
    revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
    revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
}
