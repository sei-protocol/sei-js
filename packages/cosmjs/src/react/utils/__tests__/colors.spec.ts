import { addOpacityToColor } from '../colors';

describe('addOpacityToColor', () => {
	it('converts hex color to RGBA', () => {
		expect(addOpacityToColor('#ff5733', 0.5)).toBe('rgba(255, 87, 51, 0.5)');
	});

	it('handles full opacity', () => {
		expect(addOpacityToColor('#00ff00', 1)).toBe('rgba(0, 255, 0, 1)');
	});

	it('handles zero opacity', () => {
		expect(addOpacityToColor('#0000ff', 0)).toBe('rgba(0, 0, 255, 0)');
	});

	it('handles invalid hex color', () => {
		expect(() => addOpacityToColor('#xyz', 0.5)).toThrow('Invalid hex color');
		expect(() => addOpacityToColor('123456', 0.5)).toThrow('Invalid hex color');
	});

	it('handles invalid opacity values', () => {
		expect(() => addOpacityToColor('#ff5733', -1)).toThrow('Invalid opacity value');
		expect(() => addOpacityToColor('#ff5733', 2)).toThrow('Invalid opacity value');
	});
});
