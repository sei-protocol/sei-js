const DYNAMIC_PACKAGE_LOCATION = /(?:^|\/)node_modules\/(@dynamic-labs\/[^/]+)$/;

/** Returns the `@dynamic-labs/*` package a lock location installs, at any nesting depth. */
export const dynamicLockPackageName = (location: string) => location.match(DYNAMIC_PACKAGE_LOCATION)?.[1];

const majorOf = (version: string) => version.split('.')[0];

/**
 * Maps every `@dynamic-labs/*` package that resolved within one major line to
 * the versions it resolved to. Other majors are excluded because they belong to
 * unrelated dependents — `zksync-sso` ships its own Dynamic 5.x line — and are
 * not the runtime this package loads.
 */
export const collectDynamicLineVersions = (packages: Record<string, { version?: string }>, lineVersion: string) => {
	const line = majorOf(lineVersion);
	const versions = new Map<string, Set<string>>();

	for (const [location, metadata] of Object.entries(packages)) {
		const name = dynamicLockPackageName(location);
		if (!name || !metadata.version || majorOf(metadata.version) !== line) continue;

		versions.set(name, (versions.get(name) ?? new Set<string>()).add(metadata.version));
	}

	return versions;
};

/**
 * Dynamic pins its internal packages to the client's exact version, so any name
 * resolving to two versions inside that line means a stale nested subtree
 * survived. Checking for disagreement rather than for a known-bad version keeps
 * this meaningful across Dynamic upgrades.
 */
export const findDynamicLineConflicts = (packages: Record<string, { version?: string }>, lineVersion: string) =>
	[...collectDynamicLineVersions(packages, lineVersion)]
		.filter(([, versions]) => versions.size > 1)
		.map(([name, versions]) => [name, [...versions].sort()] as const)
		.sort(([left], [right]) => left.localeCompare(right));

export const formatDynamicLineConflicts = (conflicts: ReturnType<typeof findDynamicLineConflicts>) =>
	conflicts.map(([name, versions]) => `${name}@{${versions.join(', ')}}`).join(', ');
