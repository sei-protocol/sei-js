interface ProcessResult {
	exitCode: number;
	stderr: string;
	stdout: string;
}

const npmErrorCode = (output: string) => {
	try {
		return (JSON.parse(output) as { error?: { code?: string } }).error?.code;
	} catch {
		return undefined;
	}
};

/**
 * Parses `npm view --json` without turning an absent field or version into an
 * unrelated JSON syntax error. Other registry failures retain their diagnostics.
 */
export const parseNpmViewResult = <T>(result: ProcessResult, command: string): T | undefined => {
	const plain = result.stdout.trim();
	if (result.exitCode !== 0) {
		if (npmErrorCode(plain) === 'E404') return undefined;
		throw new Error(`${command} failed\n${result.stderr}${result.stdout}`);
	}

	return plain ? (JSON.parse(plain) as T) : undefined;
};

/** `npm view <range> version --json` returns a scalar or array by match count. */
export const normalizeNpmViewVersions = (versions: string | string[] | undefined) => (versions === undefined ? [] : [versions].flat());

export const highestVersion = (versions: readonly string[]) =>
	versions.reduce((highest, version) => (Bun.semver.order(version, highest) > 0 ? version : highest));
