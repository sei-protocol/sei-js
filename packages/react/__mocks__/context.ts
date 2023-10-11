import { COMPASS_WALLET, FIN_WALLET, KEPLR_WALLET } from '@sei-js/core';

export const ATLANTIC_2_CONFIG = { rpcUrl: 'https://rpc.atlantic-2.seinetwork.io', restUrl: 'https://rest.atlantic-2.seinetwork.io', chainId: 'atlantic-2' };

export const DEFAULT_TEST_CONTEXT = {
	offlineSigner: undefined,
	rpcUrl: ATLANTIC_2_CONFIG.rpcUrl,
	restUrl: ATLANTIC_2_CONFIG.restUrl,
	chainId: ATLANTIC_2_CONFIG.chainId,
	setConnectionError: jest.fn(),
	accounts: [],
	setTargetWallet: jest.fn(),
	showConnectModal: true,
	setShowConnectModal: jest.fn(),
	connect: jest.fn(),
	wallets: [COMPASS_WALLET, FIN_WALLET, KEPLR_WALLET],
	disconnect: jest.fn()
};
