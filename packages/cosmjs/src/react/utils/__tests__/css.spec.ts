import { isValidCSSColor } from '../css';
import 'jest';

describe('isValidCSSColor', () => {
	it('should validate hex color with six characters', () => {
		expect(isValidCSSColor('#ff5733')).toBe(true);
		expect(isValidCSSColor('#FFFFFF')).toBe(true);
		expect(isValidCSSColor('#123456')).toBe(true);
	});

	it('should validate hex color with valid alpha channels', () => {
		expect(isValidCSSColor('#ff573384')).toBe(true);
		expect(isValidCSSColor('#FFFFFF33')).toBe(true);
		expect(isValidCSSColor('#12345648')).toBe(true);
	});

	it('should invalidate non-hex colors', () => {
		expect(isValidCSSColor('ff5733')).toBe(false);
		expect(isValidCSSColor('red')).toBe(false);
		expect(isValidCSSColor('123456')).toBe(false);
		expect(isValidCSSColor('#gggggg')).toBe(false);
		expect(isValidCSSColor('#12345')).toBe(false);
		expect(isValidCSSColor('rgba(123,32,39')).toBe(false);
	});
});
