import { Rpc } from "@osmonauts/helpers";
import { MsgPlaceOrders, MsgPlaceOrdersResponse, MsgCancelOrders, MsgCancelOrdersResponse, MsgRegisterContract, MsgRegisterContractResponse } from "./tx";
/** Msg defines the RPC service */
export interface Msg {
    placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse>;
    cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse>;
    registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse>;
    cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse>;
    registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
}
