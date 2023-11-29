import { byteArrayToHex, longResponseToNumber, sanitizedUint8Array } from '../utils';
import { RawLong } from '../types';

describe('sanitizedUint8Array', () => {
	it('should convert an object to Uint8Array', () => {
		const input = { a: 1, b: 2, c: 3 };
		const expected = new Uint8Array([1, 2, 3]);
		expect(sanitizedUint8Array(input)).toEqual(expected);
	});

	it('should handle empty object', () => {
		const input = {};
		const expected = new Uint8Array([]);
		expect(sanitizedUint8Array(input)).toEqual(expected);
	});

	it('should return 0 for invalid object', () => {
		const input = { test: 'an_invalid_object' };
		const expected = new Uint8Array([0]);
		expect(sanitizedUint8Array(input)).toEqual(expected);
	});
});

describe('longResponseToNumber', () => {
	it('should convert RawLong to number', () => {
		const input: RawLong = { low: 123, high: 0, unsigned: true };
		const expected = 123;
		expect(longResponseToNumber(input)).toEqual(expected);
	});

	it('should handle negative numbers', () => {
		const input: RawLong = { low: 4294967295, high: 4294967295, unsigned: false };
		const expected = -1;
		expect(longResponseToNumber(input)).toEqual(expected);
	});

	it('should fail for invalid RawLong type', () => {
		const input = { not: 1, valid: 3, keys: 'false' };
		const expected = 0;
		expect(longResponseToNumber(input as unknown as RawLong)).toEqual(expected);
	});
});

describe('byteArrayToHex', () => {
	it('should convert Uint8Array to hexadecimal string', () => {
		const input = new Uint8Array([1, 15, 255]);
		const expected = '010fff';
		expect(byteArrayToHex(input)).toEqual(expected);
	});

	it('should handle empty Uint8Array', () => {
		const input = new Uint8Array([]);
		const expected = '';
		expect(byteArrayToHex(input)).toEqual(expected);
	});

	it('should handle values larger than ff in hex by using only lowest 8 bits', () => {
		//The expected value expected is set to '63'. This is the hexadecimal representation of the lowest 8 bits of 355, which is 10110011 in binary. The lowest 8 bits are 0110011, which corresponds to '63' in hexadecimal.
		const input = new Uint8Array([355]);
		const expected = '63';
		expect(byteArrayToHex(input)).toEqual(expected);
	});
});
