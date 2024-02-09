import { isValidSeiAddress } from '@sei-js/core';

/**
 * Shortens a sei address to display it in the format sei...xxxxx where xxxxx is the last five characters of the address.
 * Used to display sei address in an easily identifiable way.
 * @param address The address to truncate
 * @returns A shortened version of the address in the format sei...xxxxx. Returns the input address if it is not a valid sei address.
 */
export const truncateAddress = (address: string) => {
	if (!isValidSeiAddress(address)) {
		return address;
	}
	return `${address.slice(0, 3)}....${address.slice(address.length - 5)}`;
};
