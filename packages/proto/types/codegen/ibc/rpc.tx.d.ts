import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    cosmos: {
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: import("./applications/transfer/v1/tx.rpc.msg").MsgClientImpl;
            };
        };
        core: {
            channel: {
                v1: import("./core/channel/v1/tx.rpc.msg").MsgClientImpl;
            };
            client: {
                v1: import("./core/client/v1/tx.rpc.msg").MsgClientImpl;
            };
            connection: {
                v1: import("./core/connection/v1/tx.rpc.msg").MsgClientImpl;
            };
        };
    };
}>;
