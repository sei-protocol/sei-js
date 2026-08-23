import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const REVIEWED_ASSETLIST_REVISION = '964ca87f7cff8d8791ad1e994628fa410faae61e';
export const ASSETLIST_REMOTE = 'https://github.com/Seitrace/sei-assetlist.git';
export const CHAIN_REGISTRY_REMOTE = 'https://github.com/sei-protocol/chain-registry.git';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const decoder = new TextDecoder();

const registrySubmodules = [
	{
		path: 'packages/registry/community-assetlist',
		configName: 'packages/registry/community-assetlist',
		expectedRemote: ASSETLIST_REMOTE,
		expectedRevision: REVIEWED_ASSETLIST_REVISION
	},
	{
		path: 'packages/registry/chain-registry',
		configName: 'packages/registry/chain-registry',
		expectedRemote: CHAIN_REGISTRY_REMOTE
	}
] as const;

export interface RegistrySubmoduleEnvironment {
	git(args: readonly string[]): string;
	isInitialized(path: string): boolean;
}

function git(args: readonly string[]): string {
	const result = Bun.spawnSync(['git', ...args], {
		cwd: root,
		stdout: 'pipe',
		stderr: 'pipe'
	});
	const stdout = decoder.decode(result.stdout).trim();
	const stderr = decoder.decode(result.stderr).trim();

	if (result.exitCode !== 0) {
		throw new Error(`git ${args.join(' ')} failed${stderr ? `: ${stderr}` : ''}`);
	}

	return stdout;
}

const defaultEnvironment: RegistrySubmoduleEnvironment = {
	git,
	isInitialized: (path) => existsSync(join(root, path, '.git'))
};

export function parseRecordedGitlink(indexEntry: string, path: string): string {
	const lines = indexEntry.split('\n').filter((line) => line !== '');
	if (lines.length !== 1) {
		throw new Error(`${path} must have exactly one index entry`);
	}

	const match = /^160000 ([0-9a-f]+) 0\t(.+)$/.exec(lines[0]);
	if (match === null || match[2] !== path) {
		throw new Error(`${path} is not recorded as a stage-0 gitlink`);
	}

	return match[1];
}

export function checkRegistrySubmodules(environment: RegistrySubmoduleEnvironment = defaultEnvironment): void {
	for (const submodule of registrySubmodules) {
		const configuredRemote = environment.git(['config', '--file', '.gitmodules', '--get', `submodule.${submodule.configName}.url`]);
		if (configuredRemote !== submodule.expectedRemote) {
			throw new Error(`${submodule.path} has unexpected configured remote: ${configuredRemote || '(missing)'}`);
		}

		const recordedRevision = parseRecordedGitlink(environment.git(['ls-files', '--stage', '--', submodule.path]), submodule.path);
		if ('expectedRevision' in submodule && recordedRevision !== submodule.expectedRevision) {
			throw new Error(`${submodule.path} recorded gitlink ${recordedRevision} does not match reviewed revision ${submodule.expectedRevision}`);
		}

		if (!environment.isInitialized(submodule.path)) {
			throw new Error(`${submodule.path} is missing or uninitialized; run git submodule update --init --recursive`);
		}

		const checkoutRevision = environment.git(['-C', submodule.path, 'rev-parse', 'HEAD']);
		if (checkoutRevision !== recordedRevision) {
			throw new Error(`${submodule.path} checkout ${checkoutRevision} does not match recorded gitlink ${recordedRevision}`);
		}

		const status = environment.git(['-C', submodule.path, 'status', '--porcelain', '--untracked-files=all']);
		if (status !== '') {
			throw new Error(`${submodule.path} has local changes:\n${status}`);
		}

		const checkoutRemote = environment.git(['-C', submodule.path, 'remote', 'get-url', 'origin']);
		if (checkoutRemote !== submodule.expectedRemote) {
			throw new Error(`${submodule.path} checkout has unexpected origin: ${checkoutRemote}`);
		}
	}
}

if (import.meta.main) {
	checkRegistrySubmodules();
	console.log(`Verified clean registry submodules and reviewed asset-list ${REVIEWED_ASSETLIST_REVISION}.`);
}
