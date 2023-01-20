import { Rpc } from "@osmonauts/helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  seiprotocol: {
    seichain: {
      dex: new (await import("./seichain/dex/tx.rpc.msg")).MsgClientImpl(rpc),
      nitro: new (await import("./seichain/nitro/tx.rpc.msg")).MsgClientImpl(rpc),
      oracle: new (await import("./seichain/oracle/tx.rpc.msg")).MsgClientImpl(rpc),
      tokenfactory: new (await import("./seichain/tokenfactory/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});