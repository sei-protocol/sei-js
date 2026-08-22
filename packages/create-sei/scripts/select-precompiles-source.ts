export type PrecompilesSource = 'local' | 'registry';
export type RequestedPrecompilesSource = PrecompilesSource | 'auto';

export interface PrecompilesSourceState {
	currentVersion: string;
	pendingVersion?: string;
	requestedSource: RequestedPrecompilesSource;
	targetVersion: string;
}

export type PrecompilesSourceSelection =
	| { basis: 'current-manifest' | 'pending-release'; source: 'local' }
	| { basis: 'published-registry'; source: 'registry' };

export async function selectPrecompilesSource(
	state: PrecompilesSourceState,
	registryHasVersion: (version: string) => Promise<boolean>
): Promise<PrecompilesSourceSelection> {
	if (state.requestedSource === 'registry') {
		if (await registryHasVersion(state.targetVersion)) {
			return { basis: 'published-registry', source: 'registry' };
		}
		throw new Error(`@sei-js/precompiles@${state.targetVersion} is not published on npm.`);
	}

	if (state.pendingVersion === state.targetVersion) {
		return { basis: 'pending-release', source: 'local' };
	}

	if (state.pendingVersion === undefined && state.currentVersion === state.targetVersion) {
		return { basis: 'current-manifest', source: 'local' };
	}

	if (state.requestedSource === 'local') {
		throw new Error(
			`Local source does not match @sei-js/precompiles@${state.targetVersion}: current manifest is ${state.currentVersion} and Changesets computes ${
				state.pendingVersion ?? 'no pending release'
			}.`
		);
	}

	if (await registryHasVersion(state.targetVersion)) {
		return { basis: 'published-registry', source: 'registry' };
	}

	throw new Error(`Cannot validate @sei-js/precompiles@${state.targetVersion}: neither a matching local source nor the exact npm release is available.`);
}
