import { describe, expect, test } from '@jest/globals';
import { utils } from '../../../core/services/utils.js';

describe('Utils Module', () => {
	describe('parseEther', () => {
		test('should convert ether to wei', () => {
			// Test parseEther with a string value
			const result = utils.parseEther('1.0');
			expect(result).toBe(1000000000000000000n);

			// Test with a different value
			const result2 = utils.parseEther('2.5');
			expect(result2).toBe(2500000000000000000n);

			// Test with zero
			const result3 = utils.parseEther('0');
			expect(result3).toBe(0n);
		});
	});

	describe('formatJson', () => {
		test('should format an object to JSON with bigint handling', () => {
			// Test with an object containing bigint
			const obj = {
				amount: 1000000000000000000n,
				name: 'test',
				nested: {
					value: 123456789n
				}
			};

			const result = utils.formatJson(obj);

			// Parse the result back to verify
			const parsed = JSON.parse(result);

			// Check that the bigints were converted to strings
			expect(parsed.amount).toBe('1000000000000000000');
			expect(parsed.name).toBe('test');
			expect(parsed.nested.value).toBe('123456789');

			// Check that the formatting includes indentation
			expect(result).toContain('  "amount": "1000000000000000000"');
		});

		test('should handle objects without bigints', () => {
			const obj = {
				name: 'test',
				value: 123,
				nested: {
					flag: true
				}
			};

			const result = utils.formatJson(obj);
			const parsed = JSON.parse(result);

			expect(parsed.name).toBe('test');
			expect(parsed.value).toBe(123);
			expect(parsed.nested.flag).toBe(true);
		});
	});

	describe('validateAddress', () => {
		test('should return the address if it is valid', () => {
			// Valid EVM address
			const validAddress = '0x1234567890123456789012345678901234567890';
			const result = utils.validateAddress(validAddress);
			expect(result).toBe(validAddress);

			// Valid address with mixed case
			const mixedCaseAddress = '0xAbCdEf1234567890123456789012345678901234';
			const result2 = utils.validateAddress(mixedCaseAddress);
			expect(result2).toBe(mixedCaseAddress);
		});

		test('should throw an error if the address is invalid', () => {
			// Address too short
			const shortAddress = '0x123456';
			expect(() => utils.validateAddress(shortAddress)).toThrow('Invalid address');

			// Address without 0x prefix
			const noPrefixAddress = '1234567890123456789012345678901234567890';
			expect(() => utils.validateAddress(noPrefixAddress)).toThrow('Invalid address');

			// Address with invalid characters
			const invalidCharsAddress = '0x123456789012345678901234567890123456789G';
			expect(() => utils.validateAddress(invalidCharsAddress)).toThrow('Invalid address');

			// Empty address
			expect(() => utils.validateAddress('')).toThrow('Invalid address');
		});
	});
});
