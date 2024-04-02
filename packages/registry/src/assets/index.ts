import AssetListJSON from '../../kingnodes-assetlist/assetlist.json';
import { Network } from '../index';

export interface DenomUnit {
	denom: string;
	exponent: number;
}

export interface Asset {
	name: string;
	description: string;
	symbol: string;
	base: string;
	display: string;
	denom_units: DenomUnit[];
	images: {
		png?: string;
		svg?: string;
	};
	coingecko_id?: string;
	type_asset?: string;
}

export type NetworkAssets = {
	[network in Network]: Asset[];
};

export const AssetList: NetworkAssets = AssetListJSON as NetworkAssets;
