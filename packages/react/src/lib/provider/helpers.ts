import { COMPASS_WALLET, FIN_WALLET, KEPLR_WALLET, LEAP_WALLET, SeiWallet } from '@sei-js/core';

/**
 * Returns a pre-configured SeiWallet object based on the inputted wallet name.
 * @param windowKey A string representing the name of the wallet.
 * @returns A pre-configured SeiWallet object corresponding to the input wallet name.
 */
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
		default:
			return undefined;
	}
};
