import type { SeiActionsJSON } from '@sei-js/actions/dist/types';
import UrlPattern from 'url-pattern';

export const getRootDomain = (url: string) => {
	const parsedUrl = new URL(url);
	return `${parsedUrl.protocol}//${parsedUrl.host}`;
};

export const getMatchingRule = (actionsJSON: SeiActionsJSON, url: string) => {
	const parsedUrl = new URL(url);
	const pathname = parsedUrl.pathname;

	for (const rule of actionsJSON.rules) {
		let pattern = rule.pathPattern;
		if (pattern.endsWith('/**')) {
			pattern = pattern.replace('/**', '(/*)?');
		}
		const urlPattern = new UrlPattern(pattern);
		if (urlPattern.match(pathname)) {
			return rule;
		}
	}

	return null;
};
