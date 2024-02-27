/**
 * Validates that the given color is a valid hex color code.
 * @param color The color to validate
 * @returns A boolean representing whether the given color string is a valid hex color code.
 */
export const isValidCSSColor = (color) => {
	//validate hex
	const s = new Option().style;
	s.color = color;
	return s.color !== '' && color.startsWith('#');
};
