import * as process from 'process';
import { Buffer } from 'buffer';

// Polyfill process and buffer for browser
Object.assign(self, {
	process,
	global: self,
	Buffer
});

export * from './lib';
