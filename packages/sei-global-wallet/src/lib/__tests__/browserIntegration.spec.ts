import { afterAll, beforeAll, describe, expect, it } from 'bun:test';

class MemoryStorage implements Storage {
	readonly #values = new Map<string, string>();

	get length() {
		return this.#values.size;
	}

	clear() {
		this.#values.clear();
	}

	getItem(key: string) {
		return this.#values.get(key) ?? null;
	}

	key(index: number) {
		return [...this.#values.keys()][index] ?? null;
	}

	removeItem(key: string) {
		this.#values.delete(key);
	}

	setItem(key: string, value: string) {
		this.#values.set(key, value);
	}
}

describe('browser registrations', () => {
	const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
	const originalStorage = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
	const browserWindow = new EventTarget();

	beforeAll(() => {
		Object.defineProperty(globalThis, 'window', {
			configurable: true,
			value: browserWindow
		});
		Object.defineProperty(globalThis, 'localStorage', {
			configurable: true,
			value: new MemoryStorage()
		});
	});

	afterAll(() => {
		if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
		else delete (globalThis as { window?: unknown }).window;

		if (originalStorage) Object.defineProperty(globalThis, 'localStorage', originalStorage);
		else delete (globalThis as { localStorage?: unknown }).localStorage;
	});

	it('announces EIP-6963 immediately and on every request', async () => {
		const announcements: CustomEvent[] = [];
		browserWindow.addEventListener('eip6963:announceProvider', (event) => {
			announcements.push(event as CustomEvent);
		});

		const eip6963 = await import('../../eip6963');

		expect(announcements).toHaveLength(1);
		expect(announcements[0].detail.info).toEqual(eip6963.eip6963ProviderInfo);
		expect(typeof announcements[0].detail.provider.request).toBe('function');

		browserWindow.dispatchEvent(new Event('eip6963:requestProvider'));
		browserWindow.dispatchEvent(new Event('eip6963:requestProvider'));
		expect(announcements).toHaveLength(3);
		expect(announcements[1].detail).toBe(announcements[0].detail);
		expect(announcements[2].detail).toBe(announcements[0].detail);

		eip6963.unregisterEIP6963Provider();
		browserWindow.dispatchEvent(new Event('eip6963:requestProvider'));
		expect(announcements).toHaveLength(3);
	});

	it('registers a real Solana wallet-standard provider', async () => {
		const wallets: Array<{ icon: string; name: string }> = [];
		browserWindow.addEventListener('wallet-standard:register-wallet', (event) => {
			(event as CustomEvent).detail({
				register: (wallet: { icon: string; name: string }) => wallets.push(wallet)
			});
		});

		await import('../../solana');

		expect(wallets).toHaveLength(1);
		expect(wallets[0].name).toBe('Sei Global Wallet');
		expect(wallets[0].icon).toMatch(/^data:image\/svg\+xml;base64,/);

		browserWindow.dispatchEvent(
			new CustomEvent('wallet-standard:app-ready', {
				detail: {
					register: (wallet: { icon: string; name: string }) => wallets.push(wallet)
				}
			})
		);
		expect(wallets).toHaveLength(2);
		expect(wallets[1]).toBe(wallets[0]);
	});
});
