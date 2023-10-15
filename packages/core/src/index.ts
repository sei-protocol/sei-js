// Check if in browser environment
if (typeof window !== 'undefined') {
	const process = require('process');
	const Buffer = require('buffer').Buffer;

	// Polyfill process and buffer environment variables
	Object.assign(globalThis, {
		process,
		global: globalThis,
		Buffer
	});
}

export * from './lib';
