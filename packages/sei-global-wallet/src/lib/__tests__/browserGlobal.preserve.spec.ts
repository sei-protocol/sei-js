import { describe, expect, it } from 'bun:test';

// Separate file so `bun test --isolate` gives this the only import of the shim
// in its registry, with both globals already present.
describe('browser global shim with consumer values present', () => {
	it('leaves consumer-defined global and process untouched', async () => {
		const originalGlobal = Object.getOwnPropertyDescriptor(globalThis, 'global');
		const originalProcess = Object.getOwnPropertyDescriptor(globalThis, 'process');
		const consumerGlobal = { sentinel: 'consumer-global' };
		const consumerProcess = { env: { NODE_ENV: 'development' }, sentinel: 'consumer-process' };
		Object.defineProperty(globalThis, 'global', { configurable: true, value: consumerGlobal, writable: true });
		Object.defineProperty(globalThis, 'process', { configurable: true, value: consumerProcess, writable: true });

		try {
			await import('../browserGlobal.js');

			// Read through Reflect so the ambient Node global typings do not narrow
			// the comparison against these sentinels.
			const installedGlobal: unknown = Reflect.get(globalThis, 'global');
			const installedProcess: unknown = Reflect.get(globalThis, 'process');

			expect(installedGlobal).toBe(consumerGlobal);
			expect(installedProcess).toBe(consumerProcess);
			// The shim must not rewrite an environment the consumer chose.
			expect(consumerProcess.env.NODE_ENV).toBe('development');
		} finally {
			if (originalGlobal) Object.defineProperty(globalThis, 'global', originalGlobal);
			else Reflect.deleteProperty(globalThis, 'global');

			if (originalProcess) Object.defineProperty(globalThis, 'process', originalProcess);
			else Reflect.deleteProperty(globalThis, 'process');
		}
	});
});
