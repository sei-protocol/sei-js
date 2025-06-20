module.exports = {
	entryPoints: ['packages/precompiles', 'packages/cosmjs', 'packages/cosmos', 'packages/create-sei', 'packages/registry', 'packages/sei-account', 'packages/ledger'],
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
