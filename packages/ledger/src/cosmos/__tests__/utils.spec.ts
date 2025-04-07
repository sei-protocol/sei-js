// utils.spec.ts
import { createTransportAndApp, getAddresses } from '../utils';

jest.mock('@ledgerhq/hw-transport-node-hid');
jest.mock('@zondax/ledger-sei');

import Transport from '@ledgerhq/hw-transport-node-hid';
import { SeiApp } from '@zondax/ledger-sei';

describe('Ledger utils', () => {
	const mockTransport = {};
	const mockGetEVMAddress = jest.fn();
	const mockGetCosmosAddress = jest.fn();

	beforeEach(() => {
		(Transport.create as jest.Mock).mockResolvedValue(mockTransport);

		(SeiApp as unknown as jest.Mock).mockImplementation(() => ({
			getEVMAddress: mockGetEVMAddress,
			getCosmosAddress: mockGetCosmosAddress
		}));

		mockGetEVMAddress.mockReset();
		mockGetCosmosAddress.mockReset();
	});

	it('createTransportAndApp returns correct transport and app', async () => {
		const result = await createTransportAndApp();

		expect(Transport.create).toHaveBeenCalled();
		expect(SeiApp).toHaveBeenCalledWith(mockTransport);
		expect(result).toEqual({
			transport: mockTransport,
			app: expect.any(Object)
		});
	});

	it('getAddresses returns both EVM and native address', async () => {
		const mockEvmAddress = '0x123';
		const mockNativeAddress = { address: 'sei123', pubKey: 'abcd' };

		mockGetEVMAddress.mockResolvedValueOnce(mockEvmAddress);
		mockGetCosmosAddress.mockResolvedValueOnce(mockNativeAddress);

		const { app } = await createTransportAndApp();
		const path = "m/44'/60'/0'/0/0";
		const result = await getAddresses(app, path);

		expect(mockGetEVMAddress).toHaveBeenCalledWith(path);
		expect(mockGetCosmosAddress).toHaveBeenCalledWith(path);
		expect(result).toEqual({
			evmAddress: mockEvmAddress,
			nativeAddress: mockNativeAddress
		});
	});
});
