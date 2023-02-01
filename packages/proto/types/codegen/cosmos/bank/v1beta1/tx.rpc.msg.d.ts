import { Rpc } from "@osmonauts/helpers";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    send(request: MsgSend): Promise<MsgSendResponse>;
    multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    send(request: MsgSend): Promise<MsgSendResponse>;
    multiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}
