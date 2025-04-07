import { announceEip6963Provider, createEIP1193Provider } from '@dynamic-labs/global-wallet-client/ethereum';
import { EIP6963Emitter } from '../EIP6963Emitter';
import Wallet from '../wallet';

jest.mock('@dynamic-labs/global-wallet-client/ethereum', () => ({
	announceEip6963Provider: jest.fn(),
	createEIP1193Provider: jest.fn()
}));

jest.mock('../wallet', () => ({}));
jest.mock('../config', () => ({
	config: {
		walletIcon: 'icon-url',
		environmentId: 'env-id',
		walletName: 'SEI Wallet',
		eip6963: {
			rdns: 'com.sei.wallet'
		}
	}
}));

describe('EIP6963Emitter', () => {
	it('should announce the provider with correct config and provider instance', () => {
		const mockProvider = { foo: 'bar' };
		(createEIP1193Provider as jest.Mock).mockReturnValue(mockProvider);

		EIP6963Emitter();

		expect(createEIP1193Provider).toHaveBeenCalledWith(Wallet);
		expect(announceEip6963Provider).toHaveBeenCalledWith({
			info: {
				icon: 'icon-url',
				uuid: 'env-id',
				name: 'SEI Wallet',
				rdns: 'com.sei.wallet'
			},
			provider: mockProvider
		});
	});
});
