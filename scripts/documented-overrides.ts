const JSON_BLOCK = /```json\n([\s\S]*?)```/g;

/**
 * Reads the `overrides` object out of every fenced JSON block in a README
 * section, in document order.
 *
 * The package publishes its override guidance as prose, but overrides are
 * root-only in npm and Bun, so those blocks are the only thing an application
 * can act on. Returning them as data lets the verifier assert that what is
 * documented is what it installs, instead of leaving several hand-maintained
 * copies to drift away from the tested set.
 */
export const documentedOverrideBlocks = (markdown: string, heading: string) => {
	const sectionStart = markdown.indexOf(`## ${heading}`);
	if (sectionStart === -1) throw new Error(`README has no "## ${heading}" section`);

	const afterHeading = markdown.slice(sectionStart + heading.length);
	const nextHeading = afterHeading.indexOf('\n## ');
	const section = nextHeading === -1 ? afterHeading : afterHeading.slice(0, nextHeading);

	return [...section.matchAll(JSON_BLOCK)].map(([, body], index) => {
		let parsed: { overrides?: Record<string, unknown> };
		try {
			parsed = JSON.parse(body) as { overrides?: Record<string, unknown> };
		} catch (error) {
			throw new Error(`"${heading}" JSON block ${index + 1} is not valid JSON: ${error instanceof Error ? error.message : String(error)}`);
		}

		if (!parsed.overrides) throw new Error(`"${heading}" JSON block ${index + 1} has no "overrides" key`);
		return parsed.overrides;
	});
};
