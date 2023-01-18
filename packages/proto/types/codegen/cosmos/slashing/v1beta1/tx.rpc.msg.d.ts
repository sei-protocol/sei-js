import { Rpc } from "@osmonauts/helpers";
import { MsgUnjail, MsgUnjailResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
