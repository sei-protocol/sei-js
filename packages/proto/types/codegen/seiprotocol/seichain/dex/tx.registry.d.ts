import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        placeOrders(value: MsgPlaceOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelOrders(value: MsgCancelOrders): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerContract(value: MsgRegisterContract): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        placeOrders(value: MsgPlaceOrders): {
            typeUrl: string;
            value: MsgPlaceOrders;
        };
        cancelOrders(value: MsgCancelOrders): {
            typeUrl: string;
            value: MsgCancelOrders;
        };
        registerContract(value: MsgRegisterContract): {
            typeUrl: string;
            value: MsgRegisterContract;
        };
    };
    fromPartial: {
        placeOrders(value: MsgPlaceOrders): {
            typeUrl: string;
            value: MsgPlaceOrders;
        };
        cancelOrders(value: MsgCancelOrders): {
            typeUrl: string;
            value: MsgCancelOrders;
        };
        registerContract(value: MsgRegisterContract): {
            typeUrl: string;
            value: MsgRegisterContract;
        };
    };
};
