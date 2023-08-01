import { COMPASS_WALLET, FIN_WALLET, KEPLR_WALLET, LEAP_WALLET, SHELL_WALLET, SeiWallet } from '@sei-js/core';

export const findWalletByWindowKey = (windowKey: string): SeiWallet | undefined => {
	switch (windowKey) {
		case 'compass':
			return COMPASS_WALLET;
		case 'leap':
			return LEAP_WALLET;
		case 'keplr':
			return KEPLR_WALLET;
		case 'fin':
			return FIN_WALLET;
		case 'shellwallet':
			return SHELL_WALLET;
		default:
			return undefined;
	}
};
