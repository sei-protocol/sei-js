import Long from 'long';
import { EthereumProvider, RawLong } from './types';

export const sanitizedUint8Array = (value: any) => {
	const valueArray = Object.values(value).map((val) => val as number);
	return new Uint8Array(valueArray);
};

export const longResponseToNumber = (longObj: RawLong): number => {
	return new Long(longObj.low, longObj.high, longObj.unsigned).toNumber();
};

export const byteArrayToHex = (byteArray: Uint8Array) => {
	return Array.from(byteArray, (byte) => ('0' + (byte & 0xff).toString(16)).slice(-2)).join('');
};

/**
 * The "fool-proof" version of getting the ethereum provider suggested by
 * https://github.com/Montoya/snap-connect-test/blob/0dad2dd53ab2ecbf4b4369230d3aaaeca08c6dae/index.html#L41
 *
 * @returns the ethereum provider which supports snaps
 */
export const getSnapEthereumProvider = async (): Promise<EthereumProvider> => {
	let mmFound = false;
	if ('detected' in window.ethereum) {
		for (const provider of window.ethereum.detected) {
			try {
				// Detect snaps support
				await provider.request({
					method: 'wallet_getSnaps'
				});
				// enforces MetaMask as provider
				window.ethereum.setProvider(provider);

				mmFound = true;
				// @ts-ignore
				return provider;
			} catch {
				// no-op
			}
		}
	}

	if (!mmFound && 'providers' in window.ethereum) {
		for (const provider of window.ethereum.providers) {
			try {
				// Detect snaps support
				await provider.request({
					method: 'wallet_getSnaps'
				});

				// @ts-ignore
				window.ethereum = provider;

				mmFound = true;
				// @ts-ignore
				return provider;
			} catch {
				// no-op
			}
		}
	}

	return window.ethereum;
};

export const sendReqToSnap = async (method: string, params: any, snapId: string): Promise<any> => {
	const provider = await getSnapEthereumProvider();
	return provider.request({
		method: 'wallet_invokeSnap',
		params: {
			snapId,
			request: {
				method,
				params
			}
		}
	});
};
