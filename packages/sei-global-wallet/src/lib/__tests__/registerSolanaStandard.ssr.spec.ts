import { afterAll, beforeAll, describe, expect, it, jest } from 'bun:test';
import { createSolanaWallet, registerWallet } from '../dynamicSolana';
import { registerSolanaStandard } from '../registerSolanaStandard';

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

describe('registerSolanaStandard during SSR', () => {
	const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');

	beforeAll(() => {
		Reflect.deleteProperty(globalThis, 'window');
	});

	afterAll(() => {
		if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
		else Reflect.deleteProperty(globalThis, 'window');
	});

	it('returns undefined without creating or registering a wallet', () => {
		expect(registerSolanaStandard()).toBeUndefined();
		expect(createSolanaWallet).not.toHaveBeenCalled();
		expect(registerWallet).not.toHaveBeenCalled();
	});
});
