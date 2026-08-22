export const STALE_DYNAMIC_VERSION = '4.96.1';

const DYNAMIC_PACKAGE_LOCATION = /(?:^|\/)node_modules\/@dynamic-labs\//;

export const isDynamicLabsLockLocation = (location: string) => DYNAMIC_PACKAGE_LOCATION.test(location);

export const findStaleDynamicPackages = (packages: Record<string, { version?: string }>, staleVersion = STALE_DYNAMIC_VERSION) =>
	Object.entries(packages).filter(([location, metadata]) => isDynamicLabsLockLocation(location) && metadata.version === staleVersion);
