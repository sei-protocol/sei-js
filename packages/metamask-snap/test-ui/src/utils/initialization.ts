import { MetaMaskInpageProvider } from '@metamask/providers';
import { GetSnapsResponse, Snap } from '../types';
import { getSnapEthereumProvider } from '@sei-js/core';

/**
 * Get the installed snaps in MetaMask.
 *
 * @param provider - The MetaMask inpage provider.
 * @returns The snaps installed in MetaMask.
 */
export const getSnaps = async (provider?: MetaMaskInpageProvider): Promise<GetSnapsResponse> =>
	(await (provider ?? (await getSnapEthereumProvider())).request({
		method: 'wallet_getSnaps'
	})) as unknown as GetSnapsResponse;

/**
 * Connect a snap to MetaMask.
 *
 * @param snapId - The ID of the snap.
 * @param params - The params to pass with the snap to connect.
 */
export const connectSnap = async (snapId: string, params: Record<'version' | string, unknown> = {}) => {
	const provider = await getSnapEthereumProvider();
	await provider.request({
		method: 'wallet_requestSnaps',
		params: {
			[snapId]: params
		}
	});
};

/**
 * Get the snap from MetaMask.
 *
 * @param snapOrigin - The snap origin (id) to get.
 * @param version - The version of the snap to install (optional).
 * @returns The snap object returned by the extension.
 */
export const getSnap = async (snapOrigin: string, version?: string): Promise<Snap | undefined> => {
	try {
		const snaps = await getSnaps();

		return Object.values(snaps).find((snap) => snap.id === snapOrigin && (!version || snap.version === version));
	} catch (e) {
		console.log('Failed to obtain installed snap', e);
		return undefined;
	}
};
