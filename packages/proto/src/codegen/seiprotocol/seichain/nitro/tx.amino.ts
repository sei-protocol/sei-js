import { AminoMsg } from '@cosmjs/amino';
import { Long } from '@osmonauts/helpers';
import { MsgRecordTransactionData } from './tx';
export interface AminoMsgRecordTransactionData extends AminoMsg {
  type: '/seiprotocol.seichain.nitro.MsgRecordTransactionData';
  value: {
    sender: string;
    slot: string;
    stateRoot: string;
    txs: string[];
  };
}
export const AminoConverter = {
  '/seiprotocol.seichain.nitro.MsgRecordTransactionData': {
    aminoType: '/seiprotocol.seichain.nitro.MsgRecordTransactionData',
    toAmino: ({
      sender,
      slot,
      stateRoot,
      txs
    }: MsgRecordTransactionData): AminoMsgRecordTransactionData['value'] => {
      return {
        sender,
        slot: slot.toString(),
        stateRoot,
        txs
      };
    },
    fromAmino: ({
      sender,
      slot,
      stateRoot,
      txs
    }: AminoMsgRecordTransactionData['value']): MsgRecordTransactionData => {
      return {
        sender,
        slot: Long.fromString(slot),
        stateRoot,
        txs
      };
    }
  }
};