import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { TextEncoder } from 'util';
import { connect } from './connect';

// Needed to generate an offline signer
global.TextEncoder = TextEncoder;

describe('connect', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should throw an error if window is undefined', async () => {
    windowSpy.mockImplementation(() => undefined);

    const key = 'keplr';
    const chainId = 'atlantic-1';
    await expect(connect(key, chainId)).rejects.toThrowError();
  });

  it('should throw an error if no wallet is installed', async () => {
    windowSpy.mockImplementation(() => ({}));

    const key = 'keplr';
    const chainId = 'atlantic-1';
    await expect(connect(key, chainId)).rejects.toThrowError();
  });

  it('should return offlineSigner and accounts', async () => {
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(
      'trip parent program index any save apple extra marble nothing please pulp'
    );
    const accounts = await offlineSigner.getAccounts();
    windowSpy.mockImplementation(() => ({
      keplr: {
        getOfflineSigner: () => offlineSigner,
        experimentalSuggestChain: () => undefined,
        enable: () => undefined,
      },
    }));

    const key = 'keplr';
    const chainId = 'atlantic-1';
    await expect(connect(key, chainId)).resolves.toEqual({
      offlineSigner,
      accounts,
    });
  });
});
