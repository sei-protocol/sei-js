import { sha256 } from '../hash';

describe('sha256', () => {
	it('should return a Uint8Array hash of the given data', () => {
		const data = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

		const evalHash = sha256(data);
		const expectedHash = new Uint8Array([
			31, 130, 90, 162, 240, 2, 14, 247, 207, 145, 223, 163, 13, 164, 102, 141, 121, 28, 93, 72, 36, 252, 142, 65, 53, 75, 137, 236, 5, 121, 90, 179
		]);

		expect(evalHash).toBeInstanceOf(Uint8Array);
		expect(evalHash).toEqual(expectedHash);
	});

	it('should return different hashes for different data', () => {
		const data1 = new Uint8Array([0, 1, 2, 3, 4, 5]);
		const data2 = new Uint8Array([5, 4, 3, 2, 1, 0]);

		// When
		const hash1 = sha256(data1);
		const hash2 = sha256(data2);

		expect(hash1).not.toEqual(hash2);
	});
});
