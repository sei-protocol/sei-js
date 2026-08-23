import { afterEach, beforeEach, describe, expect, it, jest } from 'bun:test';
import { createEIP1193Provider } from '../dynamicEthereum';
import { type EIP6963ProviderDetail, eip6963ProviderInfo, registerEIP6963Provider, unregisterEIP6963Provider } from '../EIP6963Emitter';
import Wallet from '../wallet';

jest.mock('../dynamicEthereum', () => ({
	createEIP1193Provider: jest.fn()
}));

jest.mock('../wallet', () => ({}));

describe('EIP6963Emitter', () => {
	const originalWindow = globalThis.window;

	beforeEach(() => {
		unregisterEIP6963Provider();
		Object.defineProperty(globalThis, 'window', {
			configurable: true,
			value: new EventTarget()
		});
		jest.clearAllMocks();
	});

	afterEach(() => {
		unregisterEIP6963Provider();
		Object.defineProperty(globalThis, 'window', {
			configurable: true,
			value: originalWindow
		});
	});

	it('announces immediately and again for every request', () => {
		const mockProvider = { foo: 'bar' } as unknown as EIP6963ProviderDetail['provider'];
		(createEIP1193Provider as unknown as jest.Mock).mockReturnValue(mockProvider);
		const announcements: EIP6963ProviderDetail[] = [];
		window.addEventListener('eip6963:announceProvider', (event) => {
			announcements.push((event as CustomEvent<EIP6963ProviderDetail>).detail);
		});

		const cleanup = registerEIP6963Provider();

		expect(createEIP1193Provider).toHaveBeenCalledWith(Wallet);
		expect(announcements).toEqual([
			{
				info: eip6963ProviderInfo,
				provider: mockProvider
			}
		]);

		window.dispatchEvent(new Event('eip6963:requestProvider'));
		window.dispatchEvent(new Event('eip6963:requestProvider'));

		expect(announcements).toHaveLength(3);
		expect(announcements[1]).toBe(announcements[0]);
		expect(announcements[2]).toBe(announcements[0]);

		cleanup();
		window.dispatchEvent(new Event('eip6963:requestProvider'));
		expect(announcements).toHaveLength(3);
	});

	it('keeps one active request listener per registration', () => {
		const mockProvider = { foo: 'bar' } as unknown as EIP6963ProviderDetail['provider'];
		(createEIP1193Provider as unknown as jest.Mock).mockReturnValue(mockProvider);
		const announcements: EIP6963ProviderDetail[] = [];
		window.addEventListener('eip6963:announceProvider', (event) => {
			announcements.push((event as CustomEvent<EIP6963ProviderDetail>).detail);
		});

		const firstCleanup = registerEIP6963Provider();
		const secondCleanup = registerEIP6963Provider();

		expect(secondCleanup).toBe(firstCleanup);
		expect(createEIP1193Provider).toHaveBeenCalledTimes(1);

		window.dispatchEvent(new Event('eip6963:requestProvider'));
		expect(announcements).toHaveLength(2);
	});

	it('does nothing during SSR', () => {
		Object.defineProperty(globalThis, 'window', {
			configurable: true,
			value: undefined
		});

		const cleanup = registerEIP6963Provider();

		expect(createEIP1193Provider).not.toHaveBeenCalled();
		expect(cleanup()).toBeUndefined();
	});

	it('exports stable provider info', () => {
		expect(eip6963ProviderInfo.name).toBe('Sei Global Wallet');
		expect(eip6963ProviderInfo.rdns).toBe('io.sei.global-wallet');
		expect(eip6963ProviderInfo.uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
		expect(Object.isFrozen(eip6963ProviderInfo)).toBe(true);
	});
});
