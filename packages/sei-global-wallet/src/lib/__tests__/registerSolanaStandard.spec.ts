import { afterAll, beforeAll, describe, expect, it, jest } from 'bun:test';
import { createSolanaWallet, registerWallet } from '../dynamicSolana';
import { registerSolanaStandard } from '../registerSolanaStandard';
import Wallet from '../wallet';

jest.mock('../dynamicSolana', () => ({
	createSolanaWallet: jest.fn(),
	registerWallet: jest.fn()
}));

jest.mock('../wallet', () => ({}));
jest.mock('../config', () => ({
	config: {
		walletIcon: 'test-icon',
		walletName: 'SEI Wallet'
	}
}));

describe('registerSolanaStandard', () => {
	const originalWindow = globalThis.window;

	beforeAll(() => {
		Object.defineProperty(globalThis, 'window', {
			configurable: true,
			value: {}
		});
	});

	afterAll(() => {
		Object.defineProperty(globalThis, 'window', {
			configurable: true,
			value: originalWindow
		});
	});

	it('creates and registers one wallet-standard provider', () => {
		const mockWalletObject = { id: 'sei' } as unknown as ReturnType<typeof createSolanaWallet>;
		(createSolanaWallet as unknown as jest.Mock).mockReturnValue(mockWalletObject);

		const wallet = registerSolanaStandard();

		expect(createSolanaWallet).toHaveBeenCalledWith(
			{
				icon: 'test-icon',
				name: 'SEI Wallet'
			},
			Wallet
		);

		expect(registerWallet).toHaveBeenCalledWith(mockWalletObject);
		expect(wallet).toBe(mockWalletObject);
		expect(registerSolanaStandard()).toBe(mockWalletObject);
		expect(createSolanaWallet).toHaveBeenCalledTimes(1);
		expect(registerWallet).toHaveBeenCalledTimes(1);
	});
});
