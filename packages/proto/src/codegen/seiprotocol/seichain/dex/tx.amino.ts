import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { orderStatusFromJSON, orderTypeFromJSON, positionDirectionFromJSON, cancellationInitiatorFromJSON } from "./enums";
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
          statusDescription: el0.statusDescription,
          nominal: el0.nominal,
          triggerPrice: el0.triggerPrice,
          triggerStatus: el0.triggerStatus
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
          statusDescription: el0.statusDescription,
          nominal: el0.nominal,
          triggerPrice: el0.triggerPrice,
          triggerStatus: el0.triggerStatus
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
          numIncomingDependencies: contract.numIncomingDependencies.toString(),
          creator: contract.creator,
          rentBalance: contract.rentBalance.toString()
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
          numIncomingDependencies: Long.fromString(contract.numIncomingDependencies),
          creator: contract.creator,
          rentBalance: Long.fromString(contract.rentBalance)
        }
      };
    }
  },
  "/seiprotocol.seichain.dex.MsgContractDepositRent": {
    aminoType: "/seiprotocol.seichain.dex.MsgContractDepositRent",
    toAmino: ({
      contractAddr,
      amount,
      sender
    }: MsgContractDepositRent): AminoMsgContractDepositRent["value"] => {
      return {
        contractAddr,
        amount: amount.toString(),
        sender
      };
    },
    fromAmino: ({
      contractAddr,
      amount,
      sender
    }: AminoMsgContractDepositRent["value"]): MsgContractDepositRent => {
      return {
        contractAddr,
        amount: Long.fromString(amount),
        sender
      };
    }
  },
  "/seiprotocol.seichain.dex.MsgUnregisterContract": {
    aminoType: "/seiprotocol.seichain.dex.MsgUnregisterContract",
    toAmino: ({
      creator,
      contractAddr
    }: MsgUnregisterContract): AminoMsgUnregisterContract["value"] => {
      return {
        creator,
        contractAddr
      };
    },
    fromAmino: ({
      creator,
      contractAddr
    }: AminoMsgUnregisterContract["value"]): MsgUnregisterContract => {
      return {
        creator,
        contractAddr
      };
    }
  },
  "/seiprotocol.seichain.dex.MsgRegisterPairs": {
    aminoType: "/seiprotocol.seichain.dex.MsgRegisterPairs",
    toAmino: ({
      creator,
      batchcontractpair
    }: MsgRegisterPairs): AminoMsgRegisterPairs["value"] => {
      return {
        creator,
        batchcontractpair: batchcontractpair.map(el0 => ({
          contractAddr: el0.contractAddr,
          pairs: el0.pairs.map(el1 => ({
            priceDenom: el1.priceDenom,
            assetDenom: el1.assetDenom,
            priceTicksize: el1.priceTicksize,
            quantityTicksize: el1.quantityTicksize
          }))
        }))
      };
    },
    fromAmino: ({
      creator,
      batchcontractpair
    }: AminoMsgRegisterPairs["value"]): MsgRegisterPairs => {
      return {
        creator,
        batchcontractpair: batchcontractpair.map(el0 => ({
          contractAddr: el0.contractAddr,
          pairs: el0.pairs.map(el1 => ({
            priceDenom: el1.priceDenom,
            assetDenom: el1.assetDenom,
            priceTicksize: el1.priceTicksize,
            quantityTicksize: el1.quantityTicksize
          }))
        }))
      };
    }
  },
  "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize": {
    aminoType: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
    toAmino: ({
      creator,
      tickSizeList
    }: MsgUpdatePriceTickSize): AminoMsgUpdatePriceTickSize["value"] => {
      return {
        creator,
        tickSizeList: tickSizeList.map(el0 => ({
          pair: {
            priceDenom: el0.pair.priceDenom,
            assetDenom: el0.pair.assetDenom,
            priceTicksize: el0.pair.priceTicksize,
            quantityTicksize: el0.pair.quantityTicksize
          },
          ticksize: el0.ticksize,
          contractAddr: el0.contractAddr
        }))
      };
    },
    fromAmino: ({
      creator,
      tickSizeList
    }: AminoMsgUpdatePriceTickSize["value"]): MsgUpdatePriceTickSize => {
      return {
        creator,
        tickSizeList: tickSizeList.map(el0 => ({
          pair: {
            priceDenom: el0.pair.priceDenom,
            assetDenom: el0.pair.assetDenom,
            priceTicksize: el0.pair.priceTicksize,
            quantityTicksize: el0.pair.quantityTicksize
          },
          ticksize: el0.ticksize,
          contractAddr: el0.contractAddr
        }))
      };
    }
  },
  "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize": {
    aminoType: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
    toAmino: ({
      creator,
      tickSizeList
    }: MsgUpdateQuantityTickSize): AminoMsgUpdateQuantityTickSize["value"] => {
      return {
        creator,
        tickSizeList: tickSizeList.map(el0 => ({
          pair: {
            priceDenom: el0.pair.priceDenom,
            assetDenom: el0.pair.assetDenom,
            priceTicksize: el0.pair.priceTicksize,
            quantityTicksize: el0.pair.quantityTicksize
          },
          ticksize: el0.ticksize,
          contractAddr: el0.contractAddr
        }))
      };
    },
    fromAmino: ({
      creator,
      tickSizeList
    }: AminoMsgUpdateQuantityTickSize["value"]): MsgUpdateQuantityTickSize => {
      return {
        creator,
        tickSizeList: tickSizeList.map(el0 => ({
          pair: {
            priceDenom: el0.pair.priceDenom,
            assetDenom: el0.pair.assetDenom,
            priceTicksize: el0.pair.priceTicksize,
            quantityTicksize: el0.pair.quantityTicksize
          },
          ticksize: el0.ticksize,
          contractAddr: el0.contractAddr
        }))
      };
    }
  }
};