import { Rpc } from "../../../helpers";
import { MsgPlaceOrders, MsgPlaceOrdersResponse, MsgCancelOrders, MsgCancelOrdersResponse, MsgRegisterContract, MsgRegisterContractResponse, MsgContractDepositRent, MsgContractDepositRentResponse, MsgUnregisterContract, MsgUnregisterContractResponse, MsgRegisterPairs, MsgRegisterPairsResponse, MsgUpdatePriceTickSize, MsgUpdateTickSizeResponse, MsgUpdateQuantityTickSize, MsgUnsuspendContract, MsgUnsuspendContractResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse>;
    cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse>;
    registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
    contractDepositRent(request: MsgContractDepositRent): Promise<MsgContractDepositRentResponse>;
    unregisterContract(request: MsgUnregisterContract): Promise<MsgUnregisterContractResponse>;
    registerPairs(request: MsgRegisterPairs): Promise<MsgRegisterPairsResponse>;
    updatePriceTickSize(request: MsgUpdatePriceTickSize): Promise<MsgUpdateTickSizeResponse>;
    updateQuantityTickSize(request: MsgUpdateQuantityTickSize): Promise<MsgUpdateTickSizeResponse>;
    unsuspendContract(request: MsgUnsuspendContract): Promise<MsgUnsuspendContractResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    placeOrders(request: MsgPlaceOrders): Promise<MsgPlaceOrdersResponse>;
    cancelOrders(request: MsgCancelOrders): Promise<MsgCancelOrdersResponse>;
    registerContract(request: MsgRegisterContract): Promise<MsgRegisterContractResponse>;
    contractDepositRent(request: MsgContractDepositRent): Promise<MsgContractDepositRentResponse>;
    unregisterContract(request: MsgUnregisterContract): Promise<MsgUnregisterContractResponse>;
    registerPairs(request: MsgRegisterPairs): Promise<MsgRegisterPairsResponse>;
    updatePriceTickSize(request: MsgUpdatePriceTickSize): Promise<MsgUpdateTickSizeResponse>;
    updateQuantityTickSize(request: MsgUpdateQuantityTickSize): Promise<MsgUpdateTickSizeResponse>;
    unsuspendContract(request: MsgUnsuspendContract): Promise<MsgUnsuspendContractResponse>;
}
