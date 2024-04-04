module.exports = {
	entryPoints: ['packages/evm', 'packages/cosmjs', 'packages/proto', 'packages/registry'],
	name: '@sei-js',
	entryPointStrategy: 'packages',
	includeVersion: false,
	customCss: './typedoc.theme.css',
	readme: 'TYPEDOC-README.md',
	plugin: ['typedoc-material-theme'],
	themeColor: '#9d1f19',
	navigation: {
		includeCategories: true,
		includeGroups: true,
		includeFolders: true
	},
	categorizeByGroup: false,
	compilerOptions: {
		module: 'Node16',
		strict: true,
		composite: true,
		declaration: true,
		declarationMap: true
	}
};
