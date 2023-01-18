import { Rpc } from "@osmonauts/helpers";
import { MsgRecordTransactionData, MsgRecordTransactionDataResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    recordTransactionData(request: MsgRecordTransactionData): Promise<MsgRecordTransactionDataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    recordTransactionData(request: MsgRecordTransactionData): Promise<MsgRecordTransactionDataResponse>;
}
