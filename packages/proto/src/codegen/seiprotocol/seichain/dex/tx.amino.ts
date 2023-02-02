//@ts-nocheck
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { orderStatusFromJSON, orderTypeFromJSON, positionDirectionFromJSON, cancellationInitiatorFromJSON } from "./enums";
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
export const AminoConverter = {
  "/seiprotocol.seichain.dex.MsgPlaceOrders": {
    aminoType: "/seiprotocol.seichain.dex.MsgPlaceOrders",
    toAmino: ({
      creator,
      orders,
      contractAddr,
      funds
    }: MsgPlaceOrders): AminoMsgPlaceOrders["value"] => {
      return {
        creator,
        orders: orders.map(el0 => ({
          id: el0.id.toString(),
          status: el0.status,
          account: el0.account,
          contractAddr: el0.contractAddr,
          price: el0.price,
          quantity: el0.quantity,
          priceDenom: el0.priceDenom,
          assetDenom: el0.assetDenom,
          orderType: el0.orderType,
          positionDirection: el0.positionDirection,
          data: el0.data,
          statusDescription: el0.statusDescription
        })),
        contractAddr,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      creator,
      orders,
      contractAddr,
      funds
    }: AminoMsgPlaceOrders["value"]): MsgPlaceOrders => {
      return {
        creator,
        orders: orders.map(el0 => ({
          id: Long.fromString(el0.id),
          status: orderStatusFromJSON(el0.status),
          account: el0.account,
          contractAddr: el0.contractAddr,
          price: el0.price,
          quantity: el0.quantity,
          priceDenom: el0.priceDenom,
          assetDenom: el0.assetDenom,
          orderType: orderTypeFromJSON(el0.orderType),
          positionDirection: positionDirectionFromJSON(el0.positionDirection),
          data: el0.data,
          statusDescription: el0.statusDescription
        })),
        contractAddr,
        funds: funds.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/seiprotocol.seichain.dex.MsgCancelOrders": {
    aminoType: "/seiprotocol.seichain.dex.MsgCancelOrders",
    toAmino: ({
      creator,
      cancellations,
      contractAddr
    }: MsgCancelOrders): AminoMsgCancelOrders["value"] => {
      return {
        creator,
        cancellations: cancellations.map(el0 => ({
          id: el0.id.toString(),
          initiator: el0.initiator,
          creator: el0.creator,
          contractAddr: el0.contractAddr,
          priceDenom: el0.priceDenom,
          assetDenom: el0.assetDenom,
          positionDirection: el0.positionDirection,
          price: el0.price
        })),
        contractAddr
      };
    },
    fromAmino: ({
      creator,
      cancellations,
      contractAddr
    }: AminoMsgCancelOrders["value"]): MsgCancelOrders => {
      return {
        creator,
        cancellations: cancellations.map(el0 => ({
          id: Long.fromString(el0.id),
          initiator: cancellationInitiatorFromJSON(el0.initiator),
          creator: el0.creator,
          contractAddr: el0.contractAddr,
          priceDenom: el0.priceDenom,
          assetDenom: el0.assetDenom,
          positionDirection: positionDirectionFromJSON(el0.positionDirection),
          price: el0.price
        })),
        contractAddr
      };
    }
  },
  "/seiprotocol.seichain.dex.MsgRegisterContract": {
    aminoType: "/seiprotocol.seichain.dex.MsgRegisterContract",
    toAmino: ({
      creator,
      contract
    }: MsgRegisterContract): AminoMsgRegisterContract["value"] => {
      return {
        creator,
        contract: {
          codeId: contract.codeId.toString(),
          contractAddr: contract.contractAddr,
          needHook: contract.needHook,
          needOrderMatching: contract.needOrderMatching,
          dependencies: contract.dependencies.map(el0 => ({
            dependency: el0.dependency,
            immediateElderSibling: el0.immediateElderSibling,
            immediateYoungerSibling: el0.immediateYoungerSibling
          })),
          numIncomingDependencies: contract.numIncomingDependencies.toString()
        }
      };
    },
    fromAmino: ({
      creator,
      contract
    }: AminoMsgRegisterContract["value"]): MsgRegisterContract => {
      return {
        creator,
        contract: {
          codeId: Long.fromString(contract.codeId),
          contractAddr: contract.contractAddr,
          needHook: contract.needHook,
          needOrderMatching: contract.needOrderMatching,
          dependencies: contract.dependencies.map(el1 => ({
            dependency: el1.dependency,
            immediateElderSibling: el1.immediateElderSibling,
            immediateYoungerSibling: el1.immediateYoungerSibling
          })),
          numIncomingDependencies: Long.fromString(contract.numIncomingDependencies)
        }
      };
    }
  }
};