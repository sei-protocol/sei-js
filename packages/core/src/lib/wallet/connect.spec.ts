import { connect } from './connect';

describe('connect', () => {
  let windowSpy: jest.SpyInstance;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should throw an error if window is undefined', () => {
    windowSpy.mockImplementation(() => undefined);

    const key = 'keplr';
    const chainId = 'atlantic-1';
    expect(() => connect(key, chainId)).rejects.toThrowError();
  });

  it('should throw an error if no wallet is installed', () => {
    windowSpy.mockImplementation(() => ({}));

    const key = 'keplr';
    const chainId = 'atlantic-1';
    expect(() => connect(key, chainId)).rejects.toThrowError();
  });
});
