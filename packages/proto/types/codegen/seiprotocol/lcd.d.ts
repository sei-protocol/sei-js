export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
    seiprotocol: {
        seichain: {
            dex: import("./seichain/dex/query.lcd").LCDQueryClient;
            epoch: import("./seichain/epoch/query.lcd").LCDQueryClient;
            mint: import("./seichain/mint/v1beta1/query.lcd").LCDQueryClient;
            oracle: import("./seichain/oracle/query.lcd").LCDQueryClient;
            tokenfactory: import("./seichain/tokenfactory/query.lcd").LCDQueryClient;
        };
    };
}>;
