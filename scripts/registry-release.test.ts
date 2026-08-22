import { describe, expect, test } from 'bun:test';
import { checkRegistryImageUrl, retainedRegistryImageUrls } from './check-registry-images';
import {
	ASSETLIST_REMOTE,
	CHAIN_REGISTRY_REMOTE,
	checkRegistrySubmodules,
	parseRecordedGitlink,
	REVIEWED_ASSETLIST_REVISION,
	type RegistrySubmoduleEnvironment
} from './check-registry-submodules';

const COMMUNITY_PATH = 'packages/registry/community-assetlist';
const CHAIN_PATH = 'packages/registry/chain-registry';
const CHAIN_REVISION = '855440d90df49246498d0870c6be5de5af56dada';

interface FixtureState {
	recorded: Record<string, string>;
	checkout: Record<string, string>;
	initialized: Record<string, boolean>;
	status: Record<string, string>;
	configuredRemote: Record<string, string>;
	checkoutRemote: Record<string, string>;
	indexEntry: Record<string, string>;
}

function createSubmoduleFixture(overrides: { [key in keyof FixtureState]?: Partial<FixtureState[key]> } = {}): {
	environment: RegistrySubmoduleEnvironment;
	nestedGitPaths: string[];
} {
	const recorded = {
		[COMMUNITY_PATH]: REVIEWED_ASSETLIST_REVISION,
		[CHAIN_PATH]: CHAIN_REVISION,
		...overrides.recorded
	};
	const state: FixtureState = {
		recorded,
		checkout: {
			[COMMUNITY_PATH]: recorded[COMMUNITY_PATH],
			[CHAIN_PATH]: recorded[CHAIN_PATH],
			...overrides.checkout
		},
		initialized: {
			[COMMUNITY_PATH]: true,
			[CHAIN_PATH]: true,
			...overrides.initialized
		},
		status: {
			[COMMUNITY_PATH]: '',
			[CHAIN_PATH]: '',
			...overrides.status
		},
		configuredRemote: {
			[COMMUNITY_PATH]: ASSETLIST_REMOTE,
			[CHAIN_PATH]: CHAIN_REGISTRY_REMOTE,
			...overrides.configuredRemote
		},
		checkoutRemote: {
			[COMMUNITY_PATH]: ASSETLIST_REMOTE,
			[CHAIN_PATH]: CHAIN_REGISTRY_REMOTE,
			...overrides.checkoutRemote
		},
		indexEntry: {
			[COMMUNITY_PATH]: `160000 ${recorded[COMMUNITY_PATH]} 0\t${COMMUNITY_PATH}`,
			[CHAIN_PATH]: `160000 ${recorded[CHAIN_PATH]} 0\t${CHAIN_PATH}`,
			...overrides.indexEntry
		}
	};
	const nestedGitPaths: string[] = [];

	return {
		nestedGitPaths,
		environment: {
			isInitialized: (path) => state.initialized[path] ?? false,
			git: (args) => {
				if (args[0] === 'config') {
					const key = args[4] ?? '';
					const path = key.slice('submodule.'.length, -'.url'.length);
					return state.configuredRemote[path] ?? '';
				}
				if (args[0] === 'ls-files') {
					const path = args[3] ?? '';
					return state.indexEntry[path] ?? '';
				}
				if (args[0] === '-C') {
					const path = args[1] ?? '';
					nestedGitPaths.push(path);
					if (args[2] === 'rev-parse') return state.checkout[path] ?? '';
					if (args[2] === 'status') return state.status[path] ?? '';
					if (args[2] === 'remote') return state.checkoutRemote[path] ?? '';
				}

				throw new Error(`Unexpected fixture git command: ${args.join(' ')}`);
			}
		}
	};
}

describe('registry release data', () => {
	test('accepts exact reviewed gitlinks, clean checkouts, and configured remotes', () => {
		const { environment } = createSubmoduleFixture();
		expect(REVIEWED_ASSETLIST_REVISION).toBe('964ca87f7cff8d8791ad1e994628fa410faae61e');
		expect(() => checkRegistrySubmodules(environment)).not.toThrow();
	});

	test('requires a stage-0 gitlink index entry', () => {
		expect(() => parseRecordedGitlink(`100644 ${REVIEWED_ASSETLIST_REVISION} 0\t${COMMUNITY_PATH}`, COMMUNITY_PATH)).toThrow(
			'is not recorded as a stage-0 gitlink'
		);
	});

	test('rejects a community gitlink that is not the reviewed revision', () => {
		const { environment } = createSubmoduleFixture({
			recorded: { [COMMUNITY_PATH]: '831406ba8cbe41f3f620c4e7a8ddca67405b5512' }
		});
		expect(() => checkRegistrySubmodules(environment)).toThrow('does not match reviewed revision');
	});

	test('rejects a checkout that differs from its recorded gitlink', () => {
		const { environment } = createSubmoduleFixture({
			checkout: { [CHAIN_PATH]: '1111111111111111111111111111111111111111' }
		});
		expect(() => checkRegistrySubmodules(environment)).toThrow(`${CHAIN_PATH} checkout`);
	});

	test('rejects dirty submodule worktrees', () => {
		const { environment } = createSubmoduleFixture({
			status: { [CHAIN_PATH]: ' M chains.json' }
		});
		expect(() => checkRegistrySubmodules(environment)).toThrow(`${CHAIN_PATH} has local changes`);
	});

	test('rejects missing or uninitialized worktrees before nested git commands', () => {
		const { environment, nestedGitPaths } = createSubmoduleFixture({
			initialized: { [COMMUNITY_PATH]: false }
		});
		expect(() => checkRegistrySubmodules(environment)).toThrow('is missing or uninitialized');
		expect(nestedGitPaths).not.toContain(COMMUNITY_PATH);
	});

	test('rejects unexpected configured and checkout remotes', () => {
		const wrongConfigured = createSubmoduleFixture({
			configuredRemote: { [CHAIN_PATH]: 'https://example.com/wrong.git' }
		});
		expect(() => checkRegistrySubmodules(wrongConfigured.environment)).toThrow('unexpected configured remote');

		const wrongCheckout = createSubmoduleFixture({
			checkoutRemote: { [CHAIN_PATH]: 'https://example.com/wrong.git' }
		});
		expect(() => checkRegistrySubmodules(wrongCheckout.environment)).toThrow('checkout has unexpected origin');
	});

	test('collects only deterministic retained image URLs without making network requests', () => {
		const urls = retainedRegistryImageUrls();
		expect(urls).toHaveLength(48);
		expect(urls).toEqual([...urls].sort());
		expect(urls.every((url) => url.startsWith('https://'))).toBeTrue();
	});

	test('retries a transient image response once with backoff', async () => {
		const statuses = [429, 200];
		const delays: number[] = [];
		let requests = 0;
		const failure = await checkRegistryImageUrl('https://example.com/image.png', {
			retryDelayMs: 25,
			dependencies: {
				request: async () => {
					requests += 1;
					return new Response(null, { status: statuses.shift() });
				},
				sleep: async (milliseconds) => {
					delays.push(milliseconds);
				}
			}
		});

		expect(failure).toBeUndefined();
		expect(requests).toBe(2);
		expect(delays).toEqual([25]);
	});

	test('fails after one retry for persistent transient image responses', async () => {
		const statuses = [503, 500];
		const delays: number[] = [];
		let requests = 0;
		const failure = await checkRegistryImageUrl('https://example.com/image.png', {
			retryDelayMs: 25,
			dependencies: {
				request: async () => {
					requests += 1;
					return new Response(null, { status: statuses.shift() });
				},
				sleep: async (milliseconds) => {
					delays.push(milliseconds);
				}
			}
		});

		expect(failure).toContain('HTTP 500');
		expect(requests).toBe(2);
		expect(delays).toEqual([25]);
	});
});
