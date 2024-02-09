/**
 * Generates a color in rgba format given a hex color code and opacity value.
 * @param color A 7 digit string in hex color code format (#RRGGBB) including the '#'.
 * @param opacity The opacity value. This should be a number between 0 - 1
 * @returns The color with the added opacity value in rgba format
 */
export const addOpacityToColor = (color: string, opacity: number) => {
	// Check if the hex color is valid
	if (!/^#[0-9A-Fa-f]{6}$/.test(color)) {
		throw new Error('Invalid hex color');
	}

	// Check if the opacity is a valid number between 0 and 1
	if (opacity < 0 || opacity > 1) {
		throw new Error('Invalid opacity value');
	}

	const r = parseInt(color.substring(1, 3), 16);
	const g = parseInt(color.substring(3, 5), 16);
	const b = parseInt(color.substring(5, 7), 16);

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
