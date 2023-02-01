"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_WALLETS = exports.getChainSuggest = void 0;
const baseDenomTokenId = `factory/sei1466nf3zuxpya8q9emxukd7vftaf6h4psr0a07srl5zw74zh84yjqpeheyc/uust2`;
const prefix = 'sei';
const getChainSuggest = (chainId = 'atlantic-1', restUrl = 'https://sei-chain-incentivized.com/sei-chain-app', rpcUrl = 'https://sei-chain-incentivized.com/sei-chain-tm/') => {
    return {
        chainId: chainId,
        chainName: 'Sei Testnet',
        rpc: rpcUrl,
        rest: restUrl,
        bip44: {
            coinType: 118
        },
        bech32Config: {
            bech32PrefixAccAddr: prefix,
            bech32PrefixAccPub: `${prefix}pub`,
            bech32PrefixValAddr: `${prefix}valoper`,
            bech32PrefixValPub: `${prefix}valoperpub`,
            bech32PrefixConsAddr: `${prefix}valcons`,
            bech32PrefixConsPub: `${prefix}valconspub`
        },
        currencies: [
            {
                coinDenom: 'SEI',
                coinMinimalDenom: 'usei',
                coinDecimals: 6
            },
            {
                coinDenom: 'USDC',
                coinMinimalDenom: 'uusdc',
                coinDecimals: 6,
                coinGeckoId: 'usd-coin'
            },
            {
                coinDenom: 'ATOM',
                coinMinimalDenom: 'uatom',
                coinDecimals: 6,
                coinGeckoId: 'cosmos'
            },
            {
                coinDenom: 'WETH',
                coinMinimalDenom: 'ibc/C2A89D98873BB55B62CE86700DFACA646EC80352E8D03CC6CF34DD44E46DC75D',
                coinDecimals: 18,
                coinGeckoId: 'weth'
            },
            {
                coinDenom: 'WBTC',
                coinMinimalDenom: 'ibc/42BCC21A2B784E813F8878739FD32B4AA2D0A68CAD94F4C88B9EA98609AB0CCD',
                coinDecimals: 8,
                coinGeckoId: 'bitcoin'
            },
            {
                coinDenom: 'aUSDC',
                coinMinimalDenom: 'ibc/6D45A5CD1AADE4B527E459025AC1A5AEF41AE99091EF3069F3FEAACAFCECCD21',
                coinDecimals: 6,
                coinGeckoId: 'usd-coin'
            },
            {
                coinDenom: 'UST2',
                coinMinimalDenom: baseDenomTokenId,
                coinDecimals: 6
            }
        ],
        feeCurrencies: [
            {
                coinDenom: 'SEI',
                coinMinimalDenom: 'usei',
                coinDecimals: 6
            }
        ],
        stakeCurrency: {
            coinDenom: 'SEI',
            coinMinimalDenom: 'usei',
            coinDecimals: 6
        },
        coinType: 118,
        features: ['stargate', 'ibc-transfer', 'cosmwasm']
    };
};
exports.getChainSuggest = getChainSuggest;
const KEPLR_WALLET = {
    windowKey: 'keplr'
};
const LEAP_WALLET = {
    windowKey: 'leap'
};
const FALCON_WALLET = {
    windowKey: 'falcon'
};
const COIN_98_WALLET = {
    windowKey: 'coin98'
};
exports.SUPPORTED_WALLETS = [KEPLR_WALLET, LEAP_WALLET, COIN_98_WALLET, FALCON_WALLET];
