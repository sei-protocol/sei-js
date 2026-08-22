export const BRAND_ASSET_HASHES = {
	'powered-by-sei-light.png': '2e34eff9ed947367797d5ab7936bad56e15bd5bde34c3d338bb051e20c1ebe0e',
	'sei-lockup-light.svg': 'dd74e3718d5aa5b45a4a681629b4012f439e5273a5587cbb9bbaad272636ea7a',
	'sei-mark.png': '659b876c0cd7b7d12d284ddd541c9900fb86abdb88c0d39c7561bdae9b6bffdf'
} as const;

export type BrandAssetName = keyof typeof BRAND_ASSET_HASHES;
