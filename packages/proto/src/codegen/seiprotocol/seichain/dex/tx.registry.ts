//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract, MsgContractDepositRent, MsgUnregisterContract, MsgRegisterPairs, MsgUpdatePriceTickSize, MsgUpdateQuantityTickSize, MsgUnsuspendContract } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/seiprotocol.seichain.dex.MsgPlaceOrders", MsgPlaceOrders], ["/seiprotocol.seichain.dex.MsgCancelOrders", MsgCancelOrders], ["/seiprotocol.seichain.dex.MsgRegisterContract", MsgRegisterContract], ["/seiprotocol.seichain.dex.MsgContractDepositRent", MsgContractDepositRent], ["/seiprotocol.seichain.dex.MsgUnregisterContract", MsgUnregisterContract], ["/seiprotocol.seichain.dex.MsgRegisterPairs", MsgRegisterPairs], ["/seiprotocol.seichain.dex.MsgUpdatePriceTickSize", MsgUpdatePriceTickSize], ["/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize", MsgUpdateQuantityTickSize], ["/seiprotocol.seichain.dex.MsgUnsuspendContract", MsgUnsuspendContract]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    placeOrders(value: MsgPlaceOrders) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
        value: MsgPlaceOrders.encode(value).finish()
      };
    },
    cancelOrders(value: MsgCancelOrders) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
        value: MsgCancelOrders.encode(value).finish()
      };
    },
    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
        value: MsgRegisterContract.encode(value).finish()
      };
    },
    contractDepositRent(value: MsgContractDepositRent) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
        value: MsgContractDepositRent.encode(value).finish()
      };
    },
    unregisterContract(value: MsgUnregisterContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
        value: MsgUnregisterContract.encode(value).finish()
      };
    },
    registerPairs(value: MsgRegisterPairs) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
        value: MsgRegisterPairs.encode(value).finish()
      };
    },
    updatePriceTickSize(value: MsgUpdatePriceTickSize) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
        value: MsgUpdatePriceTickSize.encode(value).finish()
      };
    },
    updateQuantityTickSize(value: MsgUpdateQuantityTickSize) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
        value: MsgUpdateQuantityTickSize.encode(value).finish()
      };
    },
    unsuspendContract(value: MsgUnsuspendContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
        value: MsgUnsuspendContract.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    placeOrders(value: MsgPlaceOrders) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
        value
      };
    },
    cancelOrders(value: MsgCancelOrders) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
        value
      };
    },
    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
        value
      };
    },
    contractDepositRent(value: MsgContractDepositRent) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
        value
      };
    },
    unregisterContract(value: MsgUnregisterContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
        value
      };
    },
    registerPairs(value: MsgRegisterPairs) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
        value
      };
    },
    updatePriceTickSize(value: MsgUpdatePriceTickSize) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
        value
      };
    },
    updateQuantityTickSize(value: MsgUpdateQuantityTickSize) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
        value
      };
    },
    unsuspendContract(value: MsgUnsuspendContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
        value
      };
    }
  },
  fromPartial: {
    placeOrders(value: MsgPlaceOrders) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgPlaceOrders",
        value: MsgPlaceOrders.fromPartial(value)
      };
    },
    cancelOrders(value: MsgCancelOrders) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgCancelOrders",
        value: MsgCancelOrders.fromPartial(value)
      };
    },
    registerContract(value: MsgRegisterContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgRegisterContract",
        value: MsgRegisterContract.fromPartial(value)
      };
    },
    contractDepositRent(value: MsgContractDepositRent) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgContractDepositRent",
        value: MsgContractDepositRent.fromPartial(value)
      };
    },
    unregisterContract(value: MsgUnregisterContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUnregisterContract",
        value: MsgUnregisterContract.fromPartial(value)
      };
    },
    registerPairs(value: MsgRegisterPairs) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgRegisterPairs",
        value: MsgRegisterPairs.fromPartial(value)
      };
    },
    updatePriceTickSize(value: MsgUpdatePriceTickSize) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUpdatePriceTickSize",
        value: MsgUpdatePriceTickSize.fromPartial(value)
      };
    },
    updateQuantityTickSize(value: MsgUpdateQuantityTickSize) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUpdateQuantityTickSize",
        value: MsgUpdateQuantityTickSize.fromPartial(value)
      };
    },
    unsuspendContract(value: MsgUnsuspendContract) {
      return {
        typeUrl: "/seiprotocol.seichain.dex.MsgUnsuspendContract",
        value: MsgUnsuspendContract.fromPartial(value)
      };
    }
  }
};