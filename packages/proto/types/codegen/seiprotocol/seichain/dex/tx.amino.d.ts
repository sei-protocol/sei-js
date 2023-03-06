import { AminoMsg } from "@cosmjs/amino";
import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract, MsgContractDepositRent, MsgUnregisterContract, MsgRegisterPairs, MsgUpdatePriceTickSize, MsgUpdateQuantityTickSize } from "./tx";
export interface AminoMsgPlaceOrders extends AminoMsg {
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
export interface AminoMsgCancelOrders extends AminoMsg {
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
export interface AminoMsgRegisterContract extends AminoMsg {
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
        };
    };
}
export interface AminoMsgContractDepositRent extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgContractDepositRent";
    value: {
        contractAddr: string;
        amount: string;
        sender: string;
    };
}
export interface AminoMsgUnregisterContract extends AminoMsg {
    type: "/seiprotocol.seichain.dex.MsgUnregisterContract";
    value: {
        creator: string;
        contractAddr: string;
    };
}
export interface AminoMsgRegisterPairs extends AminoMsg {
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
export interface AminoMsgUpdatePriceTickSize extends AminoMsg {
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
export interface AminoMsgUpdateQuantityTickSize extends AminoMsg {
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
export declare const AminoConverter: {
    "/seiprotocol.seichain.dex.MsgPlaceOrders": {
        aminoType: string;
        toAmino: ({ creator, orders, contractAddr, funds }: MsgPlaceOrders) => AminoMsgPlaceOrders["value"];
        fromAmino: ({ creator, orders, contractAddr, funds }: AminoMsgPlaceOrders["value"]) => MsgPlaceOrders;
    };
    "/seiprotocol.seichain.dex.MsgCancelOrders": {
        aminoType: string;
        toAmino: ({ creator, cancellations, contractAddr }: MsgCancelOrders) => AminoMsgCancelOrders["value"];
        fromAmino: ({ creator, cancellations, contractAddr }: AminoMsgCancelOrders["value"]) => MsgCancelOrders;
    };
    "/seiprotocol.seichain.dex.MsgRegisterContract": {
        aminoType: string;
        toAmino: ({ creator, contract }: MsgRegisterContract) => AminoMsgRegisterContract["value"];
        fromAmino: ({ creator, contract }: AminoMsgRegisterContract["value"]) => MsgRegisterContract;
    };
    "/seiprotocol.seichain.dex.MsgContractDepositRent": {
        aminoType: string;
        toAmino: ({ contractAddr, amount, sender }: MsgContractDepositRent) => AminoMsgContractDepositRent["value"];
        fromAmino: ({ contractAddr, amount, sender }: AminoMsgContractDepositRent["value"]) => MsgContractDepositRent;
    };
    "/seiprotocol.seichain.dex.MsgUnregisterContract": {
        aminoType: string;
        toAmino: ({ creator, contractAddr }: MsgUnregisterContract) => AminoMsgUnregisterContract["value"];
        fromAmino: ({ creator, contractAddr }: AminoMsgUnregisterContract["value"]) => MsgUnregisterContract;
    };
    "/seiprotocol.seichain.dex.MsgRegisterPairs": {
        aminoType: string;
        toAmino: ({ creator, batchcontractpair }: MsgRegisterPairs) => AminoMsgRegisterPairs["value"];
        fromAmino: ({ creator, batchcontractpair }: AminoMsgRegisterPairs["value"]) => MsgRegisterPairs;
    };
    "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
        aminoType: string;
        toAmino: ({ creator, tickSizeList }: MsgUpdatePriceTickSize) => AminoMsgUpdatePriceTickSize["value"];
        fromAmino: ({ creator, tickSizeList }: AminoMsgUpdatePriceTickSize["value"]) => MsgUpdatePriceTickSize;
    };
    "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
        aminoType: string;
        toAmino: ({ creator, tickSizeList }: MsgUpdateQuantityTickSize) => AminoMsgUpdateQuantityTickSize["value"];
        fromAmino: ({ creator, tickSizeList }: AminoMsgUpdateQuantityTickSize["value"]) => MsgUpdateQuantityTickSize;
    };
};
