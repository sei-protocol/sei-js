import { sha256 as Sha256Hash } from 'sha.js';

/**
 * Returns the sha256 encoded hash of the given data.
 * @param data The data to encode.
 * @returns The sha256 encoded hash of the given data.
 */
export const sha256 = (data: Uint8Array): Uint8Array => {
	return new Uint8Array(new Sha256Hash().update(data).digest());
};
