export const isValidCSSColor = (color) => {
	//validate hex
	const s = new Option().style;
	s.color = color;
	return s.color !== '' && color.startsWith('#');
};
