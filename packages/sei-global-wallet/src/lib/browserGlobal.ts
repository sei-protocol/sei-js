import processShim from 'process/browser.js';

type BrowserGlobal = typeof globalThis & {
	global?: typeof globalThis;
	process?: typeof processShim;
};

const runtime = globalThis as BrowserGlobal;

// Dynamic 4.x reads Node-style globals in browser and edge-like runtimes, but
// its own polyfills can execute later after bundling. Install only missing
// values and preserve anything the consumer already set.
if (typeof runtime.global === 'undefined') {
	Object.defineProperty(runtime, 'global', {
		configurable: true,
		enumerable: false,
		value: runtime,
		writable: true
	});
}

if (typeof runtime.process === 'undefined') {
	Object.defineProperty(runtime, 'process', {
		configurable: true,
		enumerable: false,
		value: processShim,
		writable: true
	});
}
