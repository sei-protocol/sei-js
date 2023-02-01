import { Rpc } from "@osmonauts/helpers";
import { MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    verifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
