import { describe, expect, it } from 'bun:test';

// Runs in its own module registry (`bun test --isolate`), so the shim's
// import-time side effect is observed exactly once against absent globals.
describe('browser global shim with nothing defined', () => {
	it('installs global and a process shim that reports a production NODE_ENV', async () => {
		const originalGlobal = Object.getOwnPropertyDescriptor(globalThis, 'global');
		const originalProcess = Object.getOwnPropertyDescriptor(globalThis, 'process');
		Reflect.deleteProperty(globalThis, 'global');
		Reflect.deleteProperty(globalThis, 'process');

		try {
			await import('../browserGlobal.js');

			const runtime = globalThis as typeof globalThis & {
				global?: unknown;
				process?: { browser?: boolean; env?: Record<string, string | undefined>; nextTick?: unknown };
			};

			expect(runtime.global).toBe(globalThis);
			expect(runtime.process?.browser).toBe(true);
			expect(typeof runtime.process?.nextTick).toBe('function');
			// Without this, libraries gating on NODE_ENV take their development
			// branch inside a production browser bundle.
			expect(runtime.process?.env?.NODE_ENV).toBe('production');
		} finally {
			if (originalGlobal) Object.defineProperty(globalThis, 'global', originalGlobal);
			if (originalProcess) Object.defineProperty(globalThis, 'process', originalProcess);
		}
	});
});
