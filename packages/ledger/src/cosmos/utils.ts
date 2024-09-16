import Transport from '@ledgerhq/hw-transport-node-hid';
import { SeiApp } from '@zondax/ledger-sei';
import { GenericeResponseAddress } from '@zondax/ledger-sei/dist/types';

export type CreateSeiAppResponse = { app: SeiApp; transport: Transport };
/**
 * Creates a transport and app instance
 *
 * @returns {Promise<{transport: Transport, app: SeiApp}>} transport and app instances
 */
export const createTransportAndApp = async (): Promise<CreateSeiAppResponse> => {
	const transport = (await Transport.create()) as Transport;
	const app = new SeiApp(transport);
	return { transport, app };
};

export type GetAddressesResponse = { evmAddress: { publicKey: string; address: string; chainCode?: string | undefined }; nativeAddress: GenericeResponseAddress };

/**
 * Get the EVM and Cosmos addresses from the Ledger device
 * @param app Ledger Sei app instance
 * @param path hd derivation path (e.g. "m/44'/60'/0'/0/0")
 *
 * @returns {Promise<{evmAddress: string, nativeAddress: string}>} EVM and Cosmos address objects containing
 * address and public key
 */
export const getAddresses = async (app: SeiApp, path: string): Promise<GetAddressesResponse> => {
	const evmAddress = await app.getEVMAddress(path);
	const nativeAddress = await app.getCosmosAddress(path);
	return { evmAddress, nativeAddress };
};
