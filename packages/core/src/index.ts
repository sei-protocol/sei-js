// Polyfill process and buffer for browser
import * as process from 'process';
import { Buffer } from 'buffer';

// Only polyfill if they don't exist
if (typeof self.process === 'undefined') {
	Object.assign(self, { process });
}

if (typeof self.Buffer === 'undefined') {
	Object.assign(self, { Buffer });
}

// Existing global becomes globalThis
if (typeof globalThis === 'undefined') {
	Object.assign(self, { global: self });
}

export * from './lib';
