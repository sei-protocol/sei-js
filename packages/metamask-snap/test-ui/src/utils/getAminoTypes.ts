import { createWasmAminoConverters } from '@cosmjs/cosmwasm-stargate';
import { AminoTypes, createStakingAminoConverters } from '@cosmjs/stargate';

const createDefaultTypes = () => {
	return {
		...createWasmAminoConverters(),
		...createStakingAminoConverters('sei')
	};
};

export const getAminoTypes = () => {
	const defaultTypes = createDefaultTypes();
	return new AminoTypes(defaultTypes);
};
