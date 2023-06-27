import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract, MsgContractDepositRent, MsgUnregisterContract, MsgRegisterPairs, MsgUpdatePriceTickSize, MsgUpdateQuantityTickSize, MsgUnsuspendContract } from "./tx";
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
        contractDepositRent(value: MsgContractDepositRent): {
            typeUrl: string;
            value: Uint8Array;
        };
        unregisterContract(value: MsgUnregisterContract): {
            typeUrl: string;
            value: Uint8Array;
        };
        registerPairs(value: MsgRegisterPairs): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePriceTickSize(value: MsgUpdatePriceTickSize): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateQuantityTickSize(value: MsgUpdateQuantityTickSize): {
            typeUrl: string;
            value: Uint8Array;
        };
        unsuspendContract(value: MsgUnsuspendContract): {
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
        contractDepositRent(value: MsgContractDepositRent): {
            typeUrl: string;
            value: MsgContractDepositRent;
        };
        unregisterContract(value: MsgUnregisterContract): {
            typeUrl: string;
            value: MsgUnregisterContract;
        };
        registerPairs(value: MsgRegisterPairs): {
            typeUrl: string;
            value: MsgRegisterPairs;
        };
        updatePriceTickSize(value: MsgUpdatePriceTickSize): {
            typeUrl: string;
            value: MsgUpdatePriceTickSize;
        };
        updateQuantityTickSize(value: MsgUpdateQuantityTickSize): {
            typeUrl: string;
            value: MsgUpdateQuantityTickSize;
        };
        unsuspendContract(value: MsgUnsuspendContract): {
            typeUrl: string;
            value: MsgUnsuspendContract;
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
        contractDepositRent(value: MsgContractDepositRent): {
            typeUrl: string;
            value: MsgContractDepositRent;
        };
        unregisterContract(value: MsgUnregisterContract): {
            typeUrl: string;
            value: MsgUnregisterContract;
        };
        registerPairs(value: MsgRegisterPairs): {
            typeUrl: string;
            value: MsgRegisterPairs;
        };
        updatePriceTickSize(value: MsgUpdatePriceTickSize): {
            typeUrl: string;
            value: MsgUpdatePriceTickSize;
        };
        updateQuantityTickSize(value: MsgUpdateQuantityTickSize): {
            typeUrl: string;
            value: MsgUpdateQuantityTickSize;
        };
        unsuspendContract(value: MsgUnsuspendContract): {
            typeUrl: string;
            value: MsgUnsuspendContract;
        };
    };
};
