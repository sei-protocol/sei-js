import GasInfoJSON from '../../chain-registry/gas.json';
import { Network } from '../index';

export interface ModuleAdjustments {
	dex: {
		sudo_gas_price: number;
		order_placement: number;
		order_cancellation: number;
	};
}

export interface ChainGasInfo {
	denom: string;
	min_gas_price: number;
	module_adjustments: ModuleAdjustments;
}

export type GasInfoType = {
	[network in Network]: ChainGasInfo;
};

export const GasInfo: GasInfoType = GasInfoJSON as GasInfoType;
