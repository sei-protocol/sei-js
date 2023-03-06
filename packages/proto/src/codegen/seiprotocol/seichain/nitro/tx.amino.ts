import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgRecordTransactionData, MsgSubmitFraudChallenge } from "./tx";
export interface AminoMsgRecordTransactionData extends AminoMsg {
  type: "/seiprotocol.seichain.nitro.MsgRecordTransactionData";
  value: {
    sender: string;
    slot: string;
    stateRoot: string;
    txs: string[];
  };
}
export interface AminoMsgSubmitFraudChallenge extends AminoMsg {
  type: "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge";
  value: {
    sender: string;
    startSlot: string;
    endSlot: string;
    fraudStatePubKey: string;
    merkleProof: {
      commitment: string;
      hash: string[];
      direction: Long[];
    };
    accountStates: {
      pubkey: string;
      owner: string;
      lamports: string;
      slot: string;
      executable: boolean;
      rent_epoch: string;
      data: string;
    }[];
    programs: {
      pubkey: string;
      owner: string;
      lamports: string;
      slot: string;
      executable: boolean;
      rent_epoch: string;
      data: string;
    }[];
    sysvarAccounts: {
      pubkey: string;
      owner: string;
      lamports: string;
      slot: string;
      executable: boolean;
      rent_epoch: string;
      data: string;
    }[];
  };
}
export const AminoConverter = {
  "/seiprotocol.seichain.nitro.MsgRecordTransactionData": {
    aminoType: "/seiprotocol.seichain.nitro.MsgRecordTransactionData",
    toAmino: ({
      sender,
      slot,
      stateRoot,
      txs
    }: MsgRecordTransactionData): AminoMsgRecordTransactionData["value"] => {
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
    }: AminoMsgRecordTransactionData["value"]): MsgRecordTransactionData => {
      return {
        sender,
        slot: Long.fromString(slot),
        stateRoot,
        txs
      };
    }
  },
  "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge": {
    aminoType: "/seiprotocol.seichain.nitro.MsgSubmitFraudChallenge",
    toAmino: ({
      sender,
      startSlot,
      endSlot,
      fraudStatePubKey,
      merkleProof,
      accountStates,
      programs,
      sysvarAccounts
    }: MsgSubmitFraudChallenge): AminoMsgSubmitFraudChallenge["value"] => {
      return {
        sender,
        startSlot: startSlot.toString(),
        endSlot: endSlot.toString(),
        fraudStatePubKey,
        merkleProof: {
          commitment: merkleProof.commitment,
          hash: merkleProof.hash,
          direction: merkleProof.direction.map(el0 => el0.toString())
        },
        accountStates: accountStates.map(el0 => ({
          pubkey: el0.pubkey,
          owner: el0.owner,
          lamports: el0.lamports.toString(),
          slot: el0.slot.toString(),
          executable: el0.executable,
          rent_epoch: el0.rentEpoch.toString(),
          data: el0.data
        })),
        programs: programs.map(el0 => ({
          pubkey: el0.pubkey,
          owner: el0.owner,
          lamports: el0.lamports.toString(),
          slot: el0.slot.toString(),
          executable: el0.executable,
          rent_epoch: el0.rentEpoch.toString(),
          data: el0.data
        })),
        sysvarAccounts: sysvarAccounts.map(el0 => ({
          pubkey: el0.pubkey,
          owner: el0.owner,
          lamports: el0.lamports.toString(),
          slot: el0.slot.toString(),
          executable: el0.executable,
          rent_epoch: el0.rentEpoch.toString(),
          data: el0.data
        }))
      };
    },
    fromAmino: ({
      sender,
      startSlot,
      endSlot,
      fraudStatePubKey,
      merkleProof,
      accountStates,
      programs,
      sysvarAccounts
    }: AminoMsgSubmitFraudChallenge["value"]): MsgSubmitFraudChallenge => {
      return {
        sender,
        startSlot: Long.fromString(startSlot),
        endSlot: Long.fromString(endSlot),
        fraudStatePubKey,
        merkleProof: {
          commitment: merkleProof.commitment,
          hash: merkleProof.hash,
          direction: merkleProof.direction.map(el1 => Long.fromString(el1))
        },
        accountStates: accountStates.map(el0 => ({
          pubkey: el0.pubkey,
          owner: el0.owner,
          lamports: Long.fromString(el0.lamports),
          slot: Long.fromString(el0.slot),
          executable: el0.executable,
          rentEpoch: Long.fromString(el0.rent_epoch),
          data: el0.data
        })),
        programs: programs.map(el0 => ({
          pubkey: el0.pubkey,
          owner: el0.owner,
          lamports: Long.fromString(el0.lamports),
          slot: Long.fromString(el0.slot),
          executable: el0.executable,
          rentEpoch: Long.fromString(el0.rent_epoch),
          data: el0.data
        })),
        sysvarAccounts: sysvarAccounts.map(el0 => ({
          pubkey: el0.pubkey,
          owner: el0.owner,
          lamports: Long.fromString(el0.lamports),
          slot: Long.fromString(el0.slot),
          executable: el0.executable,
          rentEpoch: Long.fromString(el0.rent_epoch),
          data: el0.data
        }))
      };
    }
  }
};