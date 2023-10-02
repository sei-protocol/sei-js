const useESModules = process.env.BABEL_ENV === 'esm';

module.exports = (api) => {
	api.cache(() => process.env.BABEL_ENV);
	return {
		plugins: [
			['@babel/transform-runtime', { useESModules }],
			'@babel/proposal-object-rest-spread',
			'@babel/proposal-class-properties',
			'@babel/plugin-proposal-nullish-coalescing-operator',
			'@babel/plugin-proposal-optional-chaining',
			'@babel/plugin-proposal-numeric-separator',
			'@babel/proposal-export-default-from'
		],
		presets: useESModules ? ['@babel/typescript'] : ['@babel/typescript', '@babel/env']
	};
};
