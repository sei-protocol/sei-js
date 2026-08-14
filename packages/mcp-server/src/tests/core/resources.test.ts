import { describe, expect, it } from 'bun:test';
import { parseBlockNumber } from '../../core/resources.js';

describe('parseBlockNumber', () => {
	it('accepts decimal and hexadecimal block numbers', () => {
		expect(parseBlockNumber('6699')).toBe(6699);
		expect(parseBlockNumber('0x1a2b')).toBe(6699);
	});

	it.each(['', '   ', '1e3', 'abc', '-1', '1.5', '9007199254740992'])('rejects invalid block number %s', (value) => {
		expect(() => parseBlockNumber(value)).toThrow(`Invalid block number: ${value}`);
	});
});
