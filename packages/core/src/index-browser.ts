// Check if in browser environment
if (typeof self !== 'undefined') {
	const process = require('process');
	const Buffer = require('buffer').Buffer;

	// Polyfill process and buffer environment variables
	Object.assign(self, {
		process,
		global: self,
		Buffer
	});
}

export * from './lib';
