import { AminoMsg } from "@cosmjs/amino";
import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract, MsgContractDepositRent, MsgUnregisterContract, MsgRegisterPairs, MsgUpdatePriceTickSize, MsgUpdateQuantityTickSize, MsgUnsuspendContract } from "./tx";
export interface MsgPlaceOrdersAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgPlaceOrders";
    value: {
        creator: string;
        orders: {
            id: string;
            status: number;
            account: string;
            contractAddr: string;
            price: string;
            quantity: string;
            priceDenom: string;
            assetDenom: string;
            orderType: number;
            positionDirection: number;
            data: string;
            statusDescription: string;
            nominal: string;
            triggerPrice: string;
            triggerStatus: boolean;
        }[];
        contractAddr: string;
        funds: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface MsgCancelOrdersAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgCancelOrders";
    value: {
        creator: string;
        cancellations: {
            id: string;
            initiator: number;
            creator: string;
            contractAddr: string;
            priceDenom: string;
            assetDenom: string;
            positionDirection: number;
            price: string;
        }[];
        contractAddr: string;
    };
}
export interface MsgRegisterContractAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgRegisterContract";
    value: {
        creator: string;
        contract: {
            codeId: string;
            contractAddr: string;
            needHook: boolean;
            needOrderMatching: boolean;
            dependencies: {
                dependency: string;
                immediateElderSibling: string;
                immediateYoungerSibling: string;
            }[];
            numIncomingDependencies: string;
            creator: string;
            rentBalance: string;
            suspended: boolean;
            suspensionReason: string;
        };
    };
}
export interface MsgContractDepositRentAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgContractDepositRent";
    value: {
        contractAddr: string;
        amount: string;
        sender: string;
    };
}
export interface MsgUnregisterContractAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUnregisterContract";
    value: {
        creator: string;
        contractAddr: string;
    };
}
export interface MsgRegisterPairsAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgRegisterPairs";
    value: {
        creator: string;
        batchcontractpair: {
            contractAddr: string;
            pairs: {
                priceDenom: string;
                assetDenom: string;
                priceTicksize: string;
                quantityTicksize: string;
            }[];
        }[];
    };
}
export interface MsgUpdatePriceTickSizeAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize";
    value: {
        creator: string;
        tickSizeList: {
            pair: {
                priceDenom: string;
                assetDenom: string;
                priceTicksize: string;
                quantityTicksize: string;
            };
            ticksize: string;
            contractAddr: string;
        }[];
    };
}
export interface MsgUpdateQuantityTickSizeAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize";
    value: {
        creator: string;
        tickSizeList: {
            pair: {
                priceDenom: string;
                assetDenom: string;
                priceTicksize: string;
                quantityTicksize: string;
            };
            ticksize: string;
            contractAddr: string;
        }[];
    };
}
export interface MsgUnsuspendContractAminoType extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUnsuspendContract";
    value: {
        creator: string;
        contractAddr: string;
    };
}
export declare const AminoConverter: {
    "/seiprotocol.seichain.dex.MsgPlaceOrders": {
        aminoType: string;
        toAmino: ({ creator, orders, contractAddr, funds }: MsgPlaceOrders) => MsgPlaceOrdersAminoType["value"];
        fromAmino: ({ creator, orders, contractAddr, funds }: MsgPlaceOrdersAminoType["value"]) => MsgPlaceOrders;
    };
    "/seiprotocol.seichain.dex.MsgCancelOrders": {
        aminoType: string;
        toAmino: ({ creator, cancellations, contractAddr }: MsgCancelOrders) => MsgCancelOrdersAminoType["value"];
        fromAmino: ({ creator, cancellations, contractAddr }: MsgCancelOrdersAminoType["value"]) => MsgCancelOrders;
    };
    "/seiprotocol.seichain.dex.MsgRegisterContract": {
        aminoType: string;
        toAmino: ({ creator, contract }: MsgRegisterContract) => MsgRegisterContractAminoType["value"];
        fromAmino: ({ creator, contract }: MsgRegisterContractAminoType["value"]) => MsgRegisterContract;
    };
    "/seiprotocol.seichain.dex.MsgContractDepositRent": {
        aminoType: string;
        toAmino: ({ contractAddr, amount, sender }: MsgContractDepositRent) => MsgContractDepositRentAminoType["value"];
        fromAmino: ({ contractAddr, amount, sender }: MsgContractDepositRentAminoType["value"]) => MsgContractDepositRent;
    };
    "/seiprotocol.seichain.dex.MsgUnregisterContract": {
        aminoType: string;
        toAmino: ({ creator, contractAddr }: MsgUnregisterContract) => MsgUnregisterContractAminoType["value"];
        fromAmino: ({ creator, contractAddr }: MsgUnregisterContractAminoType["value"]) => MsgUnregisterContract;
    };
    "/seiprotocol.seichain.dex.MsgRegisterPairs": {
        aminoType: string;
        toAmino: ({ creator, batchcontractpair }: MsgRegisterPairs) => MsgRegisterPairsAminoType["value"];
        fromAmino: ({ creator, batchcontractpair }: MsgRegisterPairsAminoType["value"]) => MsgRegisterPairs;
    };
    "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
        aminoType: string;
        toAmino: ({ creator, tickSizeList }: MsgUpdatePriceTickSize) => MsgUpdatePriceTickSizeAminoType["value"];
        fromAmino: ({ creator, tickSizeList }: MsgUpdatePriceTickSizeAminoType["value"]) => MsgUpdatePriceTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
        aminoType: string;
        toAmino: ({ creator, tickSizeList }: MsgUpdateQuantityTickSize) => MsgUpdateQuantityTickSizeAminoType["value"];
        fromAmino: ({ creator, tickSizeList }: MsgUpdateQuantityTickSizeAminoType["value"]) => MsgUpdateQuantityTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
        aminoType: string;
        toAmino: ({ creator, contractAddr }: MsgUnsuspendContract) => MsgUnsuspendContractAminoType["value"];
        fromAmino: ({ creator, contractAddr }: MsgUnsuspendContractAminoType["value"]) => MsgUnsuspendContract;
    };
};
