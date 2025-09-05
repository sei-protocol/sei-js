/**
 * Sei Chain Release Management
 *
 * This module provides functionality to fetch available Sei chain releases
 * from the GitHub repository.
 */

export interface SeiRelease {
	tag: string;
	name: string;
	published_at: string;
	prerelease: boolean;
	draft: boolean;
	html_url: string;
	tarball_url: string;
	zipball_url: string;
}

/**
 * Get available Sei chain releases from GitHub
 * Uses the GitHub API to fetch release information
 */
export async function getSeiReleases(): Promise<SeiRelease[]> {
	try {
		const response = await fetch('https://api.github.com/repos/sei-protocol/sei-chain/releases');

		if (!response.ok) {
			throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
		}

		const releases = (await response.json()) as SeiRelease[];

		// Sort by published date (newest first)
		return releases.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());
	} catch (error) {
		// Fallback to hardcoded versions if API fails
		console.warn('Failed to fetch releases from GitHub API, using fallback versions:', error);

		return [];
	}
}
