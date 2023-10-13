import { isValidSeiAddress } from '@sei-js/core';

export const truncateAddress = (address: string) => {
	if (!isValidSeiAddress(address)) {
		return address;
	}
	return `${address.slice(0, 3)}....${address.slice(address.length - 5)}`;
};
