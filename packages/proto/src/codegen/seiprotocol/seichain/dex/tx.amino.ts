import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { orderStatusFromJSON, orderTypeFromJSON, positionDirectionFromJSON, cancellationInitiatorFromJSON } from "./enums";
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
export const AminoConverter = {
  "/seiprotocol.seichain.dex.MsgPlaceOrders": {
    aminoType: "/seiprotocol.seichain.dex.MsgPlaceOrders",
    toAmino: ({
      creator,
      orders,
      contractAddr,
      funds
    }: MsgPlaceOrders): MsgPlaceOrdersAminoType["value"] => {
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
    }: MsgPlaceOrdersAminoType["value"]): MsgPlaceOrders => {
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
    }: MsgCancelOrders): MsgCancelOrdersAminoType["value"] => {
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
    }: MsgCancelOrdersAminoType["value"]): MsgCancelOrders => {
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
    }: MsgRegisterContract): MsgRegisterContractAminoType["value"] => {
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
          rentBalance: contract.rentBalance.toString(),
          suspended: contract.suspended,
          suspensionReason: contract.suspensionReason
        }
      };
    },
    fromAmino: ({
      creator,
      contract
    }: MsgRegisterContractAminoType["value"]): MsgRegisterContract => {
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
          rentBalance: Long.fromString(contract.rentBalance),
          suspended: contract.suspended,
          suspensionReason: contract.suspensionReason
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
    }: MsgContractDepositRent): MsgContractDepositRentAminoType["value"] => {
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
    }: MsgContractDepositRentAminoType["value"]): MsgContractDepositRent => {
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
    }: MsgUnregisterContract): MsgUnregisterContractAminoType["value"] => {
      return {
        creator,
        contractAddr
      };
    },
    fromAmino: ({
      creator,
      contractAddr
    }: MsgUnregisterContractAminoType["value"]): MsgUnregisterContract => {
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
    }: MsgRegisterPairs): MsgRegisterPairsAminoType["value"] => {
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
    }: MsgRegisterPairsAminoType["value"]): MsgRegisterPairs => {
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
    }: MsgUpdatePriceTickSize): MsgUpdatePriceTickSizeAminoType["value"] => {
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
    }: MsgUpdatePriceTickSizeAminoType["value"]): MsgUpdatePriceTickSize => {
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
    }: MsgUpdateQuantityTickSize): MsgUpdateQuantityTickSizeAminoType["value"] => {
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
    }: MsgUpdateQuantityTickSizeAminoType["value"]): MsgUpdateQuantityTickSize => {
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
  "/seiprotocol.seichain.dex.MsgUnsuspendContract": {
    aminoType: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
    toAmino: ({
      creator,
      contractAddr
    }: MsgUnsuspendContract): MsgUnsuspendContractAminoType["value"] => {
      return {
        creator,
        contractAddr
      };
    },
    fromAmino: ({
      creator,
      contractAddr
    }: MsgUnsuspendContractAminoType["value"]): MsgUnsuspendContract => {
      return {
        creator,
        contractAddr
      };
    }
  }
};