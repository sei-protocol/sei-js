export const HOISTED_ZOD_LOCK_KEY = 'zod';
export const MCP_SDK_ZOD_LOCK_KEY = '@modelcontextprotocol/sdk/zod';

/** Reads `name@version` from a bun.lock package tuple. */
export const bunLockResolvedVersion = (entry: unknown): string | undefined => {
	if (!Array.isArray(entry) || typeof entry[0] !== 'string') return undefined;
	const specifier = entry[0];
	const at = specifier.lastIndexOf('@');
	if (at <= 0) return undefined;
	return specifier.slice(at + 1);
};

/**
 * The MCP SDK accepts zod 3 or 4. If it resolves a different copy than the
 * hoisted workspace `zod`, `server.tool` / `server.prompt` compare two
 * incompatible recursive schema trees and `tsc` OOMs.
 */
export const findMcpSdkZodSplit = (packages: Record<string, unknown>) => {
	const hoisted = bunLockResolvedVersion(packages[HOISTED_ZOD_LOCK_KEY]);
	const nested = bunLockResolvedVersion(packages[MCP_SDK_ZOD_LOCK_KEY]);
	if (!hoisted) {
		throw new Error('bun.lock is missing a hoisted zod resolution');
	}
	if (nested && nested !== hoisted) {
		return { hoisted, nested };
	}
	return undefined;
};

export const formatMcpSdkZodSplit = (split: { hoisted: string; nested: string }) =>
	`@modelcontextprotocol/sdk resolved zod@${split.nested} while the workspace hoisted zod@${split.hoisted}`;
