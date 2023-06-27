import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRecordTransactionData, MsgSubmitFraudChallenge } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/seiprotocol.seichain.nitro.MsgRecordTransactionData", MsgRecordTransactionData], ["/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge", MsgSubmitFraudChallenge]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    recordTransactionData(value: MsgRecordTransactionData) {
      return {
        typeUrl: "/seiprotocol.seichain.nitro.MsgRecordTransactionData",
        value: MsgRecordTransactionData.encode(value).finish()
      };
    },
    submitFraudChallenge(value: MsgSubmitFraudChallenge) {
      return {
        typeUrl: "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge",
        value: MsgSubmitFraudChallenge.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    recordTransactionData(value: MsgRecordTransactionData) {
      return {
        typeUrl: "/seiprotocol.seichain.nitro.MsgRecordTransactionData",
        value
      };
    },
    submitFraudChallenge(value: MsgSubmitFraudChallenge) {
      return {
        typeUrl: "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge",
        value
      };
    }
  },
  fromPartial: {
    recordTransactionData(value: MsgRecordTransactionData) {
      return {
        typeUrl: "/seiprotocol.seichain.nitro.MsgRecordTransactionData",
        value: MsgRecordTransactionData.fromPartial(value)
      };
    },
    submitFraudChallenge(value: MsgSubmitFraudChallenge) {
      return {
        typeUrl: "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge",
        value: MsgSubmitFraudChallenge.fromPartial(value)
      };
    }
  }
};