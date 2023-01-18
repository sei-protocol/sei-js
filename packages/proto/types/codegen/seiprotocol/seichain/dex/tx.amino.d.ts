import { AminoMsg } from "@cosmjs/amino";
import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract } from "./tx";
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
        };
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
};
