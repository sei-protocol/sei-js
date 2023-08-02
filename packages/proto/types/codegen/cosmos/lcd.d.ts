export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    cosmos: {
        auth: {
            v1beta1: import("./auth/v1beta1/query.lcd").LCDQueryClient;
        };
        authz: {
            v1beta1: import("./authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("./bank/v1beta1/query.lcd").LCDQueryClient;
        };
        distribution: {
            v1beta1: import("./distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1beta1: import("./gov/v1beta1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("./staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("./tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("./upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
}>;
