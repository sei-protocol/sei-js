import { toBech32 } from '../bech32';

describe('toBech32', () => {
	it('should convert Uint8Array to Bech32 string', () => {
		const mockUint8Array = new Uint8Array([175, 115, 84, 70, 170, 82, 239, 130, 112, 223, 200, 212, 232, 69, 202, 162, 67, 152, 14, 234]);
		const result = toBech32(mockUint8Array);
		expect(result).toBe('sei14ae4g3422thcyuxler2ws3w25fpesrh2uqmgm9');
	});

	it('should return different Bech32 strings for different inputs', () => {
		const mockUint8Array1 = new Uint8Array([175, 115, 84, 70, 170, 82, 239, 130, 112, 223, 200, 212, 232, 69, 202, 162, 67, 152, 14, 234]);
		const mockUint8Array2 = new Uint8Array([275, 115, 84, 70, 170, 82, 239, 130, 112, 223, 200, 212, 232, 69, 202, 162, 67, 152, 14, 234]);
		const result1 = toBech32(mockUint8Array1);
		const result2 = toBech32(mockUint8Array2);
		expect(result1).not.toBe(result2);
	});

	it('should throw an error when provided an empty Uint8Array', () => {
		const emptyAddress = new Uint8Array([]);
		expect(() => toBech32(emptyAddress)).toThrow('Invalid address length');
	});
});
