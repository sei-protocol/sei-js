import { Rpc } from "@osmonauts/helpers";
import { MsgSubmitEvidence, MsgSubmitEvidenceResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    submitEvidence(request: MsgSubmitEvidence): Promise<MsgSubmitEvidenceResponse>;
}
