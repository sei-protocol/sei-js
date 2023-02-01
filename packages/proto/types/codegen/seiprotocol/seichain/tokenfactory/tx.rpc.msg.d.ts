import { Rpc } from "@osmonauts/helpers";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
}
