import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgPlaceOrders, MsgCancelOrders, MsgRegisterContract } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/seiprotocol.seichain.dex.MsgPlaceOrders", MsgPlaceOrders], ["/seiprotocol.seichain.dex.MsgCancelOrders", MsgCancelOrders], ["/seiprotocol.seichain.dex.MsgRegisterContract", MsgRegisterContract]];
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
    }

  }
};