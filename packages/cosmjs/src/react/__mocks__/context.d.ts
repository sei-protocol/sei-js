/// <reference types="jest" />
export declare const ATLANTIC_2_CONFIG: {
    rpcUrl: string;
    restUrl: string;
    chainId: string;
};
export declare const DEFAULT_TEST_CONTEXT: {
    offlineSigner: any;
    rpcUrl: string;
    restUrl: string;
    chainId: string;
    setConnectionError: jest.Mock<any, any, any>;
    accounts: any[];
    setTargetWallet: jest.Mock<any, any, any>;
    showConnectModal: boolean;
    setShowConnectModal: jest.Mock<any, any, any>;
    connect: jest.Mock<any, any, any>;
    wallets: import("../../wallet").SeiWallet[];
    disconnect: jest.Mock<any, any, any>;
};
