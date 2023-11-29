module.exports = (api) => {
	const babelEnv = process.env.BABEL_ENV || 'esm';

	api.cache(() => babelEnv);

	const isESM = babelEnv === 'esm';

	const commonjsPresets = [
		[
			'@babel/preset-env',
			{
				modules: 'commonjs'
			}
		],
		'@babel/preset-typescript'
	];

	const esmPresets = ['@babel/preset-env', '@babel/preset-typescript'];

	return {
		presets: isESM ? esmPresets : commonjsPresets,
		plugins: ['@babel/plugin-transform-runtime'],
		ignore: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.spec.js', '**/*.spec.jsx', '**/__tests__/**/*', '**/__mocks__/**/*']
	};
};
