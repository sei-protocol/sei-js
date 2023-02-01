export declare const getQueryClient: (restEndpoint: string) => Promise<{
    cosmos: {
        authz: {
            v1beta1: import("@sei-js/proto/types/codegen/cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("@sei-js/proto/types/codegen/cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("@sei-js/proto/types/codegen/cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1: import("@sei-js/proto/types/codegen/cosmos/gov/v1/query.lcd").LCDQueryClient;
            v1beta1: import("@sei-js/proto/types/codegen/cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("@sei-js/proto/types/codegen/cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("@sei-js/proto/types/codegen/cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("@sei-js/proto/types/codegen/cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
    seiprotocol: {
        seichain: {
            dex: import("@sei-js/proto/types/codegen/seiprotocol/seichain/dex/query.lcd").LCDQueryClient;
            epoch: import("@sei-js/proto/types/codegen/seiprotocol/seichain/epoch/query.lcd").LCDQueryClient;
            mint: import("@sei-js/proto/types/codegen/seiprotocol/seichain/mint/v1beta1/query.lcd").LCDQueryClient;
            nitro: import("@sei-js/proto/types/codegen/seiprotocol/seichain/nitro/query.lcd").LCDQueryClient;
            oracle: import("@sei-js/proto/types/codegen/seiprotocol/seichain/oracle/query.lcd").LCDQueryClient;
            tokenfactory: import("@sei-js/proto/types/codegen/seiprotocol/seichain/tokenfactory/query.lcd").LCDQueryClient;
        };
    };
}>;
