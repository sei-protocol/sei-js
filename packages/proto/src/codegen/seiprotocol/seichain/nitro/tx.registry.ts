import { GeneratedType, Registry } from '@cosmjs/proto-signing';
import { MsgRecordTransactionData } from './tx';
export const registry: ReadonlyArray<[string, GeneratedType]> = [['/seiprotocol.seichain.nitro.MsgRecordTransactionData', MsgRecordTransactionData]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    recordTransactionData(value: MsgRecordTransactionData) {
      return {
        typeUrl: '/seiprotocol.seichain.nitro.MsgRecordTransactionData',
        value: MsgRecordTransactionData.encode(value).finish()
      };
    }

  },
  withTypeUrl: {
    recordTransactionData(value: MsgRecordTransactionData) {
      return {
        typeUrl: '/seiprotocol.seichain.nitro.MsgRecordTransactionData',
        value
      };
    }

  },
  fromPartial: {
    recordTransactionData(value: MsgRecordTransactionData) {
      return {
        typeUrl: '/seiprotocol.seichain.nitro.MsgRecordTransactionData',
        value: MsgRecordTransactionData.fromPartial(value)
      };
    }

  }
};