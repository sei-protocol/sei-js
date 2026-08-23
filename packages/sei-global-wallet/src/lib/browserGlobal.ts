import processShim from 'process/browser.js';

type BrowserGlobal = typeof globalThis & {
	global?: typeof globalThis;
	process?: typeof processShim;
};

const runtime = globalThis as BrowserGlobal;

const install = (key: 'global' | 'process', value: unknown) => {
	Object.defineProperty(runtime, key, {
		configurable: true,
		enumerable: false,
		value,
		writable: true
	});
};

// Dynamic 4.x reads Node-style globals in browser and edge-like runtimes, but
// its own polyfills can execute later after bundling. Install only missing
// values and preserve anything the consumer already set.
if (typeof runtime.global === 'undefined') {
	install('global', runtime);
}

if (typeof runtime.process === 'undefined') {
	// Every library loaded after this point shares the shim, and
	// `process/browser.js` ships an empty `env`. Libraries that branch on
	// `process.env.NODE_ENV !== 'production'` would otherwise take their
	// development path inside a production bundle.
	processShim.env.NODE_ENV ??= 'production';
	install('process', processShim);
}
