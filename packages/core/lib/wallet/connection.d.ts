import { WalletConnect, WalletWindowKey } from './types';
declare global {
    interface Window {
        keplr: {
            getOfflineSigner: (string: any) => Promise<any>;
            experimentalSuggestChain: (object: any) => void;
            enable: (chainId: any) => void;
        };
        leap: {
            getOfflineSigner: (string: any) => Promise<any>;
            experimentalSuggestChain: (object: any) => void;
            enable: (chainId: any) => void;
        };
        coin98: {
            cosmos: (chain: any) => Promise<any>;
        };
        falcon: {
            getOfflineSigner: (string: any) => Promise<any>;
            experimentalSuggestChain: (object: any) => void;
            enable: (chainId: any) => void;
        };
    }
}
export declare const connect: (inputWallet: WalletWindowKey, chainId?: string, restUrl?: string, rpcUrl?: string) => Promise<WalletConnect | undefined>;
