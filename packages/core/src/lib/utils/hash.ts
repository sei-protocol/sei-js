import { sha256 as Sha256Hash } from 'sha.js';

export const sha256 = (data: Uint8Array): Uint8Array => {
	return new Uint8Array(new Sha256Hash().update(data).digest());
};
