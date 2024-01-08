import { resolve } from 'path';
import type { SnapConfig } from '@metamask/snaps-cli';

const config: SnapConfig = {
	bundler: 'webpack',
	input: resolve(__dirname, 'src/index.ts'),
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		clean: true,
		minimize: true
	},
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
