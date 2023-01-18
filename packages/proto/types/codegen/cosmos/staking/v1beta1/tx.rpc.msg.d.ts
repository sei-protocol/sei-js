import { Rpc } from "@osmonauts/helpers";
import { MsgCreateValidator, MsgCreateValidatorResponse, MsgEditValidator, MsgEditValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgUndelegate, MsgUndelegateResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    editValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    beginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
}
