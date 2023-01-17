import { getChainSuggest, suggestChain } from './config';

describe('getChainSuggest', () => {
  it('should return a chain config', async () => {
    const chainId = 'atlantic-1';
    const restUrl = 'https://rest-url';
    const rpcUrl = 'https://rpc-url';
    expect(getChainSuggest(chainId, restUrl, rpcUrl)).toEqual({
      chainId: 'atlantic-1',
      chainName: 'Sei Testnet',
      rpc: rpcUrl,
      rest: restUrl,
      bip44: {
        coinType: 118,
      },
      bech32Config: {
        bech32PrefixAccAddr: 'sei',
        bech32PrefixAccPub: `seipub`,
        bech32PrefixValAddr: `seivaloper`,
        bech32PrefixValPub: `seivaloperpub`,
        bech32PrefixConsAddr: `seivalcons`,
        bech32PrefixConsPub: `seivalconspub`,
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
    });
  });
});

describe('suggestChain', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should throw an error if no wallet is installed', async () => {
    windowSpy.mockImplementation(() => ({}));

    const key = 'keplr';
    await expect(suggestChain(key)).rejects.toThrowError();
  });

  it('should call experimentalSuggestChain and return undefined', async () => {
    windowSpy.mockImplementation(() => ({
      keplr: {
        experimentalSuggestChain: () => undefined,
      },
    }));

    const key = 'keplr';
    await expect(suggestChain(key)).resolves.toBeUndefined();
  });
});
