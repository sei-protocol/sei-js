/**
 * A pre-configured asset list with the native Sei token for use with Cosmos Kit.
 * @category Cosmos Kit
 */
export const COSMOS_KIT_ASSET_LIST = {
	chain_name: 'sei',
	assets: [
		{
			name: 'Sei',
			description: 'The native token of Sei',
			symbol: 'SEI',
			base: 'usei',
			display: 'sei',
			denom_units: [
				{
					denom: 'usei',
					exponent: 0
				},
				{
					denom: 'sei',
					exponent: 6
				}
			],
			images: [
				{
					svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.svg',
					png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sei/images/sei.png'
				}
			]
		}
	]
};
