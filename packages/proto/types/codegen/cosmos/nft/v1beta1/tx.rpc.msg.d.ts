import { Rpc } from "@osmonauts/helpers";
import { MsgSend, MsgSendResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    send(request: MsgSend): Promise<MsgSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    send(request: MsgSend): Promise<MsgSendResponse>;
}
