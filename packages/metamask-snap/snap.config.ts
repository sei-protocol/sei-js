import { resolve } from 'path';
import type { SnapConfig } from '@metamask/snaps-cli';

const config: SnapConfig = {
	bundler: 'webpack',
	input: resolve(__dirname, 'src/index.ts'),
	server: {
		port: 8080
	},
	polyfills: {
		buffer: true,
		crypto: true,
		path: true,
		process: true,
		stream: true
	}
};

export default config;
