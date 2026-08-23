/**
 * `.changeset` stores `config.json` and `README.md` next to the changesets themselves, so
 * only the remaining markdown entries describe releases that Changesets has yet to consume.
 */
export function hasPendingChangesets(changesetDirectoryEntries: string[]): boolean {
	return changesetDirectoryEntries.some((entry) => entry.endsWith('.md') && entry !== 'README.md');
}
