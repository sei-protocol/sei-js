import { ChainInfo, SupportedWallet, WalletWindowKey } from './types';

const KEPLR_WALLET: SupportedWallet = {
  windowKey: 'keplr',
};

const LEAP_WALLET: SupportedWallet = {
  windowKey: 'leap',
};

const FALCON_WALLET: SupportedWallet = {
  windowKey: 'falcon',
};

const COIN_98_WALLET: SupportedWallet = {
  windowKey: 'coin98',
};

const FIN_WALLET: SupportedWallet = {
  windowKey: 'fin',
};

export const SUPPORTED_WALLETS: SupportedWallet[] = [
  KEPLR_WALLET,
  LEAP_WALLET,
  COIN_98_WALLET,
  FALCON_WALLET,
  FIN_WALLET
];

const DEFAULT_CHAIN_INFO = {
  chainName: 'Sei Testnet',
  chainId: 'atlantic-1',
  restUrl: 'https://sei-chain-incentivized.com/sei-chain-app/',
  rpcUrl: 'https://sei-chain-incentivized.com/sei-chain-tm/',
};

export const getChainSuggest = (chainInfo: ChainInfo = {}) => {
  const prefix = 'sei';
  const { chainId, chainName, rpcUrl, restUrl } = {
    ...DEFAULT_CHAIN_INFO,
    ...chainInfo,
  };

  return {
    chainId: chainId,
    chainName: chainName,
    rpc: rpcUrl,
    rest: restUrl,
    bip44: {
      coinType: 118,
    },
    bech32Config: {
      bech32PrefixAccAddr: prefix,
      bech32PrefixAccPub: `${prefix}pub`,
      bech32PrefixValAddr: `${prefix}valoper`,
      bech32PrefixValPub: `${prefix}valoperpub`,
      bech32PrefixConsAddr: `${prefix}valcons`,
      bech32PrefixConsPub: `${prefix}valconspub`,
    },
    currencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6,
      },
      {
        coinDenom: 'USDC',
        coinMinimalDenom: 'uusdc',
        coinDecimals: 6,
        coinGeckoId: 'usd-coin',
      },
      {
        coinDenom: 'ATOM',
        coinMinimalDenom: 'uatom',
        coinDecimals: 6,
        coinGeckoId: 'cosmos',
      },
      {
        coinDenom: 'WETH',
        coinMinimalDenom:
          'ibc/C2A89D98873BB55B62CE86700DFACA646EC80352E8D03CC6CF34DD44E46DC75D',
        coinDecimals: 18,
        coinGeckoId: 'weth',
      },
      {
        coinDenom: 'WBTC',
        coinMinimalDenom:
          'ibc/42BCC21A2B784E813F8878739FD32B4AA2D0A68CAD94F4C88B9EA98609AB0CCD',
        coinDecimals: 8,
        coinGeckoId: 'bitcoin',
      },
      {
        coinDenom: 'aUSDC',
        coinMinimalDenom:
          'ibc/6D45A5CD1AADE4B527E459025AC1A5AEF41AE99091EF3069F3FEAACAFCECCD21',
        coinDecimals: 6,
        coinGeckoId: 'usd-coin',
      },
      {
        coinDenom: 'UST2',
        coinMinimalDenom:
          'factory/sei1466nf3zuxpya8q9emxukd7vftaf6h4psr0a07srl5zw74zh84yjqpeheyc/uust2',
        coinDecimals: 6,
      },
      {
        coinDenom: 'uCeler',
        coinMinimalDenom:
          'factory/sei174t9p63nzlmsycmd9x9zxx3ejq9lp2y9f69rp9/uceler',
        coinDecimals: 6,
      },
    ],
    feeCurrencies: [
      {
        coinDenom: 'SEI',
        coinMinimalDenom: 'usei',
        coinDecimals: 6,
      },
    ],
    stakeCurrency: {
      coinDenom: 'SEI',
      coinMinimalDenom: 'usei',
      coinDecimals: 6,
    },
    coinType: 118,
    features: ['stargate', 'ibc-transfer', 'cosmwasm'],
  };
};

export const suggestChain = async (
  inputWallet: WalletWindowKey,
  chainInfo?: ChainInfo
) => {
  if (typeof window === 'undefined' || !window) {
    throw new Error('Window is undefined.');
  }

  const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;
  const walletProvider = window[windowKey];
  if (!walletProvider) {
    throw new Error(`Wallet ${inputWallet} is not installed.`);
  }

  const config = getChainSuggest(chainInfo);
  await walletProvider.experimentalSuggestChain(config);
};
