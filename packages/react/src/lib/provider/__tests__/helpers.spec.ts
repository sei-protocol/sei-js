import { COMPASS_WALLET, FIN_WALLET, KEPLR_WALLET, LEAP_WALLET, SeiWallet } from '@sei-js/core';
import { findWalletByWindowKey } from '../helpers';

describe('findWalletByWindowKey', () => {
	it('should return COMPASS_WALLET for compass windowKey', () => {
		const result: SeiWallet | undefined = findWalletByWindowKey('compass');
		expect(result).toBe(COMPASS_WALLET);
	});

	it('should return LEAP_WALLET for leap windowKey', () => {
		const result: SeiWallet | undefined = findWalletByWindowKey('leap');
		expect(result).toBe(LEAP_WALLET);
	});

	it('should return KEPLR_WALLET for keplr windowKey', () => {
		const result: SeiWallet | undefined = findWalletByWindowKey('keplr');
		expect(result).toBe(KEPLR_WALLET);
	});

	it('should return FIN_WALLET for fin windowKey', () => {
		const result: SeiWallet | undefined = findWalletByWindowKey('fin');
		expect(result).toBe(FIN_WALLET);
	});

	it('should return undefined for unknown windowKey', () => {
		const result: SeiWallet | undefined = findWalletByWindowKey('unknown');
		expect(result).toBeUndefined();
	});
});
