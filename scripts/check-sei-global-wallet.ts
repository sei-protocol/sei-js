import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { highestVersion, normalizeNpmViewVersions, parseNpmViewResult } from './dynamic-package-contract.js';
import { collectDynamicLineVersions, findDynamicLineConflicts, formatDynamicLineConflicts, listDynamicPackageInstallations } from './dynamic-package-lock.js';

interface ProcessResult {
	exitCode: number;
	stderr: string;
	stdout: string;
}

interface AuditReport {
	metadata?: {
		vulnerabilities?: {
			total?: number;
		};
	};
	vulnerabilities?: Record<string, unknown>;
}

interface PackResult {
	filename: string;
	files: Array<{ path: string }>;
}

interface PackageLock {
	packages: Record<string, { dependencies?: Record<string, string>; version?: string }>;
}

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const packageDir = join(root, 'packages/sei-global-wallet');
// Documented in packages/sei-global-wallet/README.md: skips the clean npm
// consumers and the whole Bun path, so it never substitutes for a full run.
const fastCheck = process.env.SEI_GLOBAL_WALLET_FAST_CHECK === '1';
const acceptedBunAdvisories: readonly string[] = ['GHSA-378v-28hj-76wf', 'GHSA-58qx-3vcg-4xpx', 'GHSA-96hv-2xvq-fx4p'];

const manifest = JSON.parse(await readFile(join(packageDir, 'package.json'), 'utf8')) as {
	dependencies: Record<string, string>;
	peerDependencies: Record<string, string>;
};
const dynamicRange = manifest.dependencies['@dynamic-labs/global-wallet-client'];

// The published manifest carries a range so consumers inherit upstream fixes;
// exactness belongs to the lockfile, not the contract.
const assertSatisfiesDynamicRange = (version: string | undefined, label: string) => {
	assert(version, `${label} did not resolve @dynamic-labs/global-wallet-client`);
	assert(Bun.semver.satisfies(version, dynamicRange), `${label} resolved @dynamic-labs/global-wallet-client@${version}, outside the declared ${dynamicRange}`);
	return version;
};

const assertMajor = (version: string | undefined, major: string, label: string) => {
	assert(version, `${label} was not installed`);
	assert(version.startsWith(`${major}.`), `${label} resolved ${version}, expected ${major}.x`);
};

const ghsaIdsIn = (value: unknown) => JSON.stringify(value).match(/GHSA-[a-z0-9-]+/gi) ?? [];

const reportWaiverProgress = (message: string) => {
	console.warn(`[waiver] ${message}`);
};

const run = async (command: string[], cwd: string, allowFailure = false): Promise<ProcessResult> => {
	const child = Bun.spawn(command, {
		cwd,
		env: process.env,
		stderr: 'pipe',
		stdout: 'pipe'
	});
	const [stdout, stderr, exitCode] = await Promise.all([new Response(child.stdout).text(), new Response(child.stderr).text(), child.exited]);

	if (!allowFailure && exitCode !== 0) {
		throw new Error(`${command.join(' ')} failed in ${cwd}\n${stderr}${stdout}`);
	}

	return { exitCode, stderr, stdout };
};

const parseJsonOutput = <T>(output: string): T => {
	const plain = output;
	const objectStart = plain.indexOf('{');
	const arrayStart = plain.indexOf('[');
	const start = objectStart === -1 ? arrayStart : arrayStart === -1 ? objectStart : Math.min(objectStart, arrayStart);
	const end = Math.max(plain.lastIndexOf('}'), plain.lastIndexOf(']'));
	assert(start >= 0 && end >= start, `Expected JSON output, received:\n${plain}`);
	return JSON.parse(plain.slice(start, end + 1)) as T;
};

const writeJson = (path: string, value: unknown) => writeFile(path, `${JSON.stringify(value, null, 2)}\n`);

const viewJson = async <T>(specifier: string, field: string): Promise<T | undefined> => {
	const command = ['npm', 'view', specifier, field, '--json'];
	return parseNpmViewResult<T>(await run(command, root, true), command.join(' '));
};

const viewVersions = async (specifier: string) => normalizeNpmViewVersions(await viewJson<string | string[]>(specifier, 'version'));

/**
 * Dynamic pins `@dynamic-labs/ethereum-aa` as an exact peer of the client and
 * pins its internal packages to the client's version, so the AA version these
 * consumers install has to track whatever `dynamicRange` resolves to now rather
 * than a constant here. A stale pin does not fail the install: npm cannot place
 * the newer client's exact peer next to an older root copy, so it nests the
 * client under this package and duplicates the whole Dynamic runtime instead.
 */
const resolveDynamicContract = async () => {
	const clientVersions = await viewVersions(`@dynamic-labs/global-wallet-client@${dynamicRange}`);
	assert(clientVersions.length > 0, `No @dynamic-labs/global-wallet-client version satisfies the declared ${dynamicRange}`);
	const client = highestVersion(clientVersions);

	const peers = await viewJson<Record<string, string>>(`@dynamic-labs/global-wallet-client@${client}`, 'peerDependencies');
	const aaRange = peers?.['@dynamic-labs/ethereum-aa'];
	assert(aaRange, `@dynamic-labs/global-wallet-client@${client} no longer declares an @dynamic-labs/ethereum-aa peer`);

	// Resolved to a concrete version, not passed through as a range, so the lock
	// assertions below stay exact even if Dynamic ever loosens the peer.
	const aaVersions = await viewVersions(`@dynamic-labs/ethereum-aa@${aaRange}`);
	assert(aaVersions.length > 0, `No @dynamic-labs/ethereum-aa version satisfies the ${aaRange} peer of @dynamic-labs/global-wallet-client@${client}`);

	return { client, ethereumAa: highestVersion(aaVersions) };
};

// AA follows the resolved Dynamic client's exact peer; the remaining versions
// are the fixed compatibility set these consumers exercise. The published peer
// ranges stay wider on purpose, so an application that already carries one of
// these packages keeps resolving.
const makeTestedPeerVersions = (ethereumAa: string) =>
	({
		'@dynamic-labs/ethereum-aa': ethereumAa,
		'@solana/wallet-standard-features': '^1.2.0',
		'@solana/web3.js': '1.98.1',
		'@wallet-standard/base': '^1.0.1',
		'@wallet-standard/features': '^1.0.3',
		'@wallet-standard/wallet': '^1.1.0',
		'@zerodev/sdk': '5.5.7',
		viem: '2.45.3',
		'zksync-sso': '0.2.0'
	}) as const;

type TestedPeerVersions = ReturnType<typeof makeTestedPeerVersions>;

const assertTestedPeersFitPublishedRanges = (testedPeerVersions: TestedPeerVersions) => {
	// Guards the two from drifting: every version the harness installs has to be
	// allowed by the range the package publishes. This is what catches Dynamic
	// moving its own peer pin outside the range published here.
	for (const [name, tested] of Object.entries(testedPeerVersions)) {
		const declared = manifest.peerDependencies[name];
		if (!declared || tested.startsWith('^')) continue;

		assert(Bun.semver.satisfies(tested, declared), `Harness installs ${name}@${tested}, which the published ${name}@${declared} peer range excludes`);
	}
};

const baseSafeOverrides = {
	axios: '1.18.0',
	uuid: '11.1.1'
};
const npmRuntimeOverrides = {
	...baseSafeOverrides,
	viem: {
		ws: '8.21.0'
	}
};
const npmSafeOverrides = {
	...npmRuntimeOverrides,
	'ethjs-unit': {
		'bn.js': '4.12.5'
	},
	'number-to-bn': {
		'bn.js': '4.12.5'
	}
};

const walletOnlyManifest = (tarball: string, overrides?: Record<string, unknown>) => ({
	name: 'sei-global-wallet-audit-consumer',
	private: true,
	type: 'module',
	dependencies: {
		'@sei-js/sei-global-wallet': `file:${tarball}`
	},
	...(overrides ? { overrides } : {})
});

const fullConsumerManifest = (tarball: string, packageManager: 'bun' | 'npm', dynamicClientVersion: string, testedPeerVersions: TestedPeerVersions) => ({
	name: 'sei-global-wallet-full-consumer',
	private: true,
	type: 'module',
	dependencies: {
		...testedPeerVersions,
		'@dynamic-labs/global-wallet-client': dynamicClientVersion,
		'@sei-js/sei-global-wallet': `file:${tarball}`,
		'ethjs-unit': '0.1.6',
		'number-to-bn': '1.7.0'
	},
	devDependencies: {
		esbuild: '0.28.2',
		typescript: '5.9.3',
		vite: '8.2.2'
	},
	overrides: packageManager === 'npm' ? npmSafeOverrides : baseSafeOverrides
});

/**
 * Typechecks the entrypoints that need no optional peer, with `skipLibCheck`
 * off, inside a consumer where no optional peer is installed. The full consumer
 * installs every peer and skips lib checks, so it cannot catch an emitted
 * declaration that leaks a type from a peer the consumer never installed.
 */
const assertDeclarationsResolveWithoutOptionalPeers = async (consumerDir: string) => {
	await writeFile(
		join(consumerDir, 'strict-types.ts'),
		`import Wallet, { connect } from '@sei-js/sei-global-wallet';
import { eip6963ProviderInfo, registerEIP6963Provider, unregisterEIP6963Provider } from '@sei-js/sei-global-wallet/eip6963';
import { createEIP1193Provider } from '@sei-js/sei-global-wallet/ethereum';

void [Wallet, connect, eip6963ProviderInfo, registerEIP6963Provider, unregisterEIP6963Provider, createEIP1193Provider];
`
	);
	await writeJson(join(consumerDir, 'tsconfig.strict.json'), {
		compilerOptions: {
			lib: ['ES2022', 'DOM'],
			module: 'ESNext',
			moduleResolution: 'Bundler',
			noEmit: true,
			skipLibCheck: false,
			strict: true,
			target: 'ES2022'
		},
		files: ['strict-types.ts']
	});

	// Uses the workspace compiler so the minimal consumer stays free of a
	// TypeScript install, which would otherwise pollute its audit surface.
	const strictTypecheck = await run([join(root, 'node_modules/.bin/tsc'), '--project', 'tsconfig.strict.json'], consumerDir, true);
	const output = `${strictTypecheck.stdout}${strictTypecheck.stderr}`;
	// Upstream declarations are outside this package's control, so only fail on
	// diagnostics raised against what this package publishes.
	const ownDiagnostics = output
		.split('\n')
		.filter((line) => /@sei-js\/sei-global-wallet\/dist\/.*error TS/.test(line))
		.sort();
	assert.deepEqual(
		ownDiagnostics,
		[],
		`Published declarations do not resolve without optional peers installed:\n${ownDiagnostics.join('\n')}\n\nFull output:\n${output}`
	);
};

const setupConsumerFiles = async (consumerDir: string) => {
	await writeFile(
		join(consumerDir, 'check-ssr.mjs'),
		`import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
const [root, eip6963, ethereum, solana, zerodev] = await Promise.all([
	import('@sei-js/sei-global-wallet'),
	import('@sei-js/sei-global-wallet/eip6963'),
	import('@sei-js/sei-global-wallet/ethereum'),
	import('@sei-js/sei-global-wallet/solana'),
	import('@sei-js/sei-global-wallet/zerodev')
]);
assert.equal(root.default, root.Wallet);
assert.equal(typeof root.connect, 'function');
assert.equal(typeof eip6963.registerEIP6963Provider, 'function');
assert.equal(typeof ethereum.createEIP1193Provider, 'function');
assert.equal(typeof solana.createSolanaWallet, 'function');
assert.equal(typeof solana.registerSolanaStandard, 'function');
assert.equal(typeof zerodev.createKernelClient, 'function');
const iconBytes = Buffer.from(eip6963.eip6963ProviderInfo.icon.split(',')[1], 'base64');
assert.equal(iconBytes.at(-1), 10);
assert.equal(createHash('sha256').update(iconBytes).digest('hex'), 'e288cd08b510afbc19f1ea85c990397de2cad2077459a6833d64e26f86b761fa');
console.log('SSR entrypoints OK');
`
	);
	await writeFile(
		join(consumerDir, 'check-edge-native.mjs'),
		`import assert from 'node:assert/strict';

Reflect.deleteProperty(globalThis, 'global');
Reflect.deleteProperty(globalThis, 'process');
const [root, eip6963, ethereum, solana, zerodev] = await Promise.all([
	import('@sei-js/sei-global-wallet'),
	import('@sei-js/sei-global-wallet/eip6963'),
	import('@sei-js/sei-global-wallet/ethereum'),
	import('@sei-js/sei-global-wallet/solana'),
	import('@sei-js/sei-global-wallet/zerodev')
]);
assert.equal(globalThis.global, globalThis);
assert.equal(globalThis.process?.browser, true);
assert.equal(root.default, root.Wallet);
assert.equal(typeof eip6963.registerEIP6963Provider, 'function');
assert.equal(typeof ethereum.createEIP1193Provider, 'function');
assert.equal(typeof solana.createSolanaWallet, 'function');
assert.equal(typeof zerodev.createKernelClient, 'function');
`
	);
	await writeFile(
		join(consumerDir, 'check-local-aa.mjs'),
		`import assert from 'node:assert/strict';
import ethjsUnit from 'ethjs-unit';
import numberToBN from 'number-to-bn';
import { getEcdsaValidator, PaymasterTypeEnum } from '@dynamic-labs/ethereum-aa';
import { Connection, PublicKey } from '@solana/web3.js';
import { KernelEIP1193Provider } from '@zerodev/sdk/providers';

const converted = numberToBN('0x2a');
assert.equal(converted.constructor.wordSize, 26);
assert.equal(converted.toString(10), '42');
assert.equal(ethjsUnit.toWei('1', 'ether').toString(10), '1000000000000000000');
assert.equal(PaymasterTypeEnum.NONE, 'NONE');
assert.equal(typeof getEcdsaValidator(), 'function');
const publicKey = new PublicKey('11111111111111111111111111111111');
assert.equal(publicKey.toBase58(), '11111111111111111111111111111111');
const connection = new Connection('http://127.0.0.1:8899', 'confirmed');
assert.equal(connection.rpcEndpoint, 'http://127.0.0.1:8899');

const address = '0x0000000000000000000000000000000000000042';
const kernelClient = {
	account: { address },
	transport: {
		request() {
			throw new Error('network transport must not be called');
		}
	}
};
const provider = new KernelEIP1193Provider(kernelClient);
assert.deepEqual(await provider.request({ method: 'eth_accounts' }), [address]);
let emitted = false;
provider.on('accountsChanged', () => {
	emitted = true;
});
provider.emit('accountsChanged', [address]);
assert.equal(emitted, true);
`
	);
	await writeFile(
		join(consumerDir, 'browser-setup.mjs'),
		`globalThis.__eipAnnouncements = [];
globalThis.__solanaWallets = [];
window.addEventListener('eip6963:announceProvider', (event) => {
	globalThis.__eipAnnouncements.push(event.detail);
});
window.addEventListener('wallet-standard:register-wallet', (event) => {
	event.detail({
		register(wallet) {
			globalThis.__solanaWallets.push(wallet);
		}
	});
});
`
	);
	await writeFile(
		join(consumerDir, 'browser-entry.mjs'),
		`import './browser-setup.mjs';
import Wallet, { connect } from '@sei-js/sei-global-wallet';
import { eip6963ProviderInfo } from '@sei-js/sei-global-wallet/eip6963';
import { createEIP1193Provider } from '@sei-js/sei-global-wallet/ethereum';
import { createSolanaWallet } from '@sei-js/sei-global-wallet/solana';

window.dispatchEvent(new Event('eip6963:requestProvider'));
window.dispatchEvent(new Event('eip6963:requestProvider'));
globalThis.__walletCheck = {
	announcements: globalThis.__eipAnnouncements.length,
	globalReady: global === globalThis,
	icon: eip6963ProviderInfo.icon,
	name: eip6963ProviderInfo.name,
	root: typeof Wallet === 'object' && typeof connect === 'function',
	solanaRegistrations: globalThis.__solanaWallets.length,
	subpaths:
		typeof createEIP1193Provider === 'function' &&
		typeof createSolanaWallet === 'function'
};
`
	);
	await writeFile(
		join(consumerDir, 'browser-esbuild-entry.mjs'),
		`import './browser-entry.mjs';
import { createKernelClient } from '@sei-js/sei-global-wallet/zerodev';
import { KernelEIP1193Provider } from '@zerodev/sdk/providers';

const address = '0x0000000000000000000000000000000000000042';
const provider = new KernelEIP1193Provider({
	account: { address },
	transport: {
		request() {
			throw new Error('browser check must not use the network');
		}
	}
});
const publicExportOperation = createKernelClient({ wallet: {} }).then(
	() => false,
	(error) => error instanceof Error && error.message === 'Client not present'
);
const providerOperation = provider
	.request({ method: 'eth_accounts' })
	.then((accounts) => accounts.length === 1 && accounts[0] === address);
globalThis.__walletCheck.zerodev = Promise.all([publicExportOperation, providerOperation]).then((checks) => checks.every(Boolean));
`
	);
	await writeFile(
		join(consumerDir, 'edge-entry.mjs'),
		`import Wallet, { connect } from '@sei-js/sei-global-wallet';
import { registerEIP6963Provider } from '@sei-js/sei-global-wallet/eip6963';
import { createEIP1193Provider } from '@sei-js/sei-global-wallet/ethereum';
import { createSolanaWallet } from '@sei-js/sei-global-wallet/solana';
import { createKernelClient } from '@sei-js/sei-global-wallet/zerodev';

globalThis.__edgeCheck = {
	aliases: global === globalThis && process.browser === true,
	entrypoints:
		typeof Wallet === 'object' &&
		typeof connect === 'function' &&
		typeof registerEIP6963Provider === 'function' &&
		typeof createEIP1193Provider === 'function' &&
		typeof createSolanaWallet === 'function' &&
		typeof createKernelClient === 'function'
};
`
	);
	await writeFile(
		join(consumerDir, 'typecheck.ts'),
		`import Wallet, { connect } from '@sei-js/sei-global-wallet';
import {
	type EIP6963ProviderDetail,
	eip6963ProviderInfo,
	registerEIP6963Provider
} from '@sei-js/sei-global-wallet/eip6963';
import { createEIP1193Provider } from '@sei-js/sei-global-wallet/ethereum';
import { createSolanaWallet, registerSolanaStandard } from '@sei-js/sei-global-wallet/solana';
import { createKernelClient } from '@sei-js/sei-global-wallet/zerodev';

const detail: EIP6963ProviderDetail | undefined = undefined;
void [Wallet, connect, detail, eip6963ProviderInfo, registerEIP6963Provider, createEIP1193Provider, createSolanaWallet, registerSolanaStandard, createKernelClient];
`
	);
	await writeJson(join(consumerDir, 'tsconfig.json'), {
		compilerOptions: {
			lib: ['ES2022', 'DOM'],
			module: 'ESNext',
			moduleResolution: 'Bundler',
			noEmit: true,
			skipLibCheck: true,
			strict: true,
			target: 'ES2022'
		},
		files: ['typecheck.ts']
	});
	await writeFile(
		join(consumerDir, 'vite.config.mjs'),
		`import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			entry: fileURLToPath(new URL('./browser-esbuild-entry.mjs', import.meta.url)),
			fileName: 'wallet',
			formats: ['iife'],
			name: 'SeiWalletConsumerCheck'
		},
		minify: false,
		outDir: 'vite-dist'
	}
});
`
	);
};

const makeStorage = (): Storage => {
	const values = new Map<string, string>();
	return {
		get length() {
			return values.size;
		},
		clear: () => values.clear(),
		getItem: (key) => values.get(key) ?? null,
		key: (index) => [...values.keys()][index] ?? null,
		removeItem: (key) => values.delete(key),
		setItem: (key, value) => values.set(key, String(value))
	};
};

const runBrowserBundle = async (bundlePath: string, expectZeroDev: boolean) => {
	const eventTarget = new EventTarget();
	const storage = makeStorage();
	const context: Record<string, unknown> = {
		AbortController,
		Blob,
		CustomEvent,
		Event,
		EventTarget,
		MessageChannel,
		TextDecoder,
		TextEncoder,
		URL,
		URLSearchParams,
		addEventListener: eventTarget.addEventListener.bind(eventTarget),
		atob,
		btoa,
		clearInterval,
		clearTimeout,
		console: {
			...console,
			debug: () => {},
			error: () => {}
		},
		crypto: webcrypto,
		dispatchEvent: eventTarget.dispatchEvent.bind(eventTarget),
		fetch,
		localStorage: storage,
		navigator: {},
		performance,
		queueMicrotask,
		removeEventListener: eventTarget.removeEventListener.bind(eventTarget),
		sessionStorage: makeStorage(),
		setInterval,
		setTimeout,
		structuredClone
	};
	context.globalThis = context;
	context.self = context;
	context.window = context;

	const bundle = await readFile(bundlePath, 'utf8');
	assert(!bundle.includes('node:worker_threads'), `${bundlePath} contains a node:worker_threads browser runtime path`);
	assert(!bundle.includes('"worker_threads"'), `${bundlePath} contains a worker_threads browser runtime path`);
	try {
		vm.runInNewContext(bundle, context, {
			filename: bundlePath,
			timeout: 10_000
		});
	} catch (error) {
		const message =
			typeof error === 'object' && error && 'stack' in error && typeof error.stack === 'string'
				? error.stack
				: error instanceof Error
					? error.message
					: String(error);
		const line = Number(message.match(/:(\d+):\d+/)?.[1]);
		const lines = bundle.split('\n');
		const nearbySource = Number.isFinite(line) ? lines.slice(Math.max(0, line - 4), line + 3).join('\n') : '';
		const shimLine = lines.findIndex((sourceLine) => sourceLine.includes('Dynamic 4.x reads'));
		const shimSource = shimLine >= 0 ? lines.slice(shimLine, shimLine + 28).join('\n') : 'browser shim not found';
		throw new Error(`${message}\n${nearbySource}\n--- browser shim (line ${shimLine + 1}) ---\n${shimSource}`);
	}

	const result = context.__walletCheck as {
		announcements: number;
		globalReady: boolean;
		icon: string;
		name: string;
		root: boolean;
		solanaRegistrations: number;
		subpaths: boolean;
		zerodev?: boolean | Promise<boolean>;
	};
	assert(result, `Browser bundle did not produce a result: ${bundlePath}`);
	assert.equal(result.globalReady, true);
	assert.equal(result.root, true);
	assert.equal(result.subpaths, true);
	if (expectZeroDev) assert.equal(await result.zerodev, true);
	assert.equal(result.announcements, 3);
	assert.equal(result.solanaRegistrations, 1);
	assert.equal(result.name, 'Sei Global Wallet');
	assert.match(result.icon, /^data:image\/svg\+xml;base64,/);
};

const runEdgeBundle = async (bundlePath: string) => {
	const context: Record<string, unknown> = {
		AbortController,
		Blob,
		CustomEvent,
		Event,
		EventTarget,
		MessageChannel,
		TextDecoder,
		TextEncoder,
		URL,
		URLSearchParams,
		atob,
		btoa,
		clearInterval,
		clearTimeout,
		console,
		crypto: webcrypto,
		fetch,
		performance,
		queueMicrotask,
		setInterval,
		setTimeout,
		structuredClone
	};
	context.globalThis = context;
	context.self = context;

	const bundle = await readFile(bundlePath, 'utf8');
	assert(!bundle.includes('node:worker_threads'), `${bundlePath} contains a node:worker_threads edge runtime path`);
	assert(!bundle.includes('"worker_threads"'), `${bundlePath} contains a worker_threads edge runtime path`);
	vm.runInNewContext(bundle, context, {
		filename: bundlePath,
		timeout: 10_000
	});
	assert.deepEqual(context.__edgeCheck, {
		aliases: true,
		entrypoints: true
	});
};

const assertAuditClean = (report: AuditReport, label: string) => {
	assert.equal(report.metadata?.vulnerabilities?.total ?? Object.keys(report.vulnerabilities ?? {}).length, 0, `${label} audit was not clean`);
};

const assertAcceptedBunAudit = (result: ProcessResult) => {
	if (result.exitCode === 0) {
		reportWaiverProgress(
			'the Bun AA consumer now audits clean: every accepted advisory was fixed upstream. Delete the waiver from packages/sei-global-wallet/README.md and acceptedBunAdvisories in this script.'
		);
		return;
	}

	const report = parseJsonOutput<Record<string, Array<{ severity?: string; url?: string }>>>(result.stdout);
	const auditFindings = Object.values(report).flat();
	const missingGhsa = auditFindings.filter((finding) => ghsaIdsIn(finding).length === 0);
	assert.deepEqual(missingGhsa, [], `Bun AA consumer findings without a GHSA id: ${JSON.stringify(missingGhsa)}`);

	const reported = new Set(auditFindings.flatMap((finding) => ghsaIdsIn(finding)).map((advisory) => advisory.toLowerCase()));
	const accepted = new Set(acceptedBunAdvisories.map((advisory) => advisory.toLowerCase()));

	// A subset check, not an exact set: the advisory database changes on its own
	// schedule, so a withdrawn or upstream-fixed advisory must not fail an
	// unrelated pull request, while any new exposure still must.
	const unwaived = [...reported].filter((advisory) => !accepted.has(advisory)).sort();
	assert.deepEqual(
		unwaived,
		[],
		`Bun AA consumer reported advisories outside the accepted waiver: ${unwaived.join(', ')}. Assess them and update packages/sei-global-wallet/README.md before releasing.`
	);

	const fixed = acceptedBunAdvisories.filter((advisory) => !reported.has(advisory.toLowerCase()));
	if (fixed.length > 0) {
		reportWaiverProgress(
			`Bun no longer reports ${fixed.join(', ')}. Narrow the waiver in packages/sei-global-wallet/README.md and acceptedBunAdvisories in this script.`
		);
	}

	// The documented Axios and UUID overrides must still be taking effect.
	// Match only those package names as Bun audit keys, not last path segments
	// (`@lukeed/uuid`) or advisory titles that happen to contain "uuid".
	const blockedOverridePackages = Object.keys(report).filter((name) => name === 'axios' || name === 'uuid');
	assert.deepEqual(
		blockedOverridePackages,
		[],
		`Bun AA consumer still reports ${blockedOverridePackages.join(', ')}; the documented Axios and UUID overrides are not taking effect.`
	);
	console.log(
		`Bun AA consumer advisories, all within the waiver: ${Object.entries(report)
			.map(([name, findings]) => `${name} (${findings.map(({ severity }) => severity).join(', ')})`)
			.join('; ')}`
	);
};

const assertNpmDynamicGraph = (lock: PackageLock, expectedClientVersion: string, expectedAaVersion: string) => {
	const hoisted = lock.packages['node_modules/@dynamic-labs/global-wallet-client']?.version;
	// An install that succeeds without a hoisted client means npm could not place
	// the client's exact peers at the root and nested it instead, which duplicates
	// the Dynamic runtime rather than failing. Name those locations, because
	// "did not resolve" would point at a dependency that is in fact installed.
	if (!hoisted) {
		const nested = listDynamicPackageInstallations(lock.packages, '@dynamic-labs/global-wallet-client');
		assert.deepEqual(nested, [], `npm consumer nested @dynamic-labs/global-wallet-client instead of hoisting it: ${nested.join(', ')}`);
	}

	const resolved = assertSatisfiesDynamicRange(hoisted, 'npm consumer');
	assert.equal(resolved, expectedClientVersion, `npm consumer resolved client ${resolved}, expected the preflight contract ${expectedClientVersion}`);
	assert.equal(lock.packages['node_modules/@dynamic-labs/ethereum-aa']?.version, expectedAaVersion);

	const conflicts = findDynamicLineConflicts(lock.packages, resolved);
	assert.deepEqual(conflicts, [], `npm consumer kept a stale Dynamic ${resolved} subtree: ${formatDynamicLineConflicts(conflicts)}`);

	return resolved;
};

const assertBunDynamicGraph = (lockText: string, expectedClientVersion: string, expectedAaVersion: string) => {
	// Bun records every resolution as a "<name>@<version>" specifier rather than
	// as install locations, so group the specifiers instead of lock paths.
	const versions = new Map<string, Set<string>>();
	for (const [, name, version] of lockText.matchAll(/"(@dynamic-labs\/[^"@/]+)@([^"]+)"/g)) {
		versions.set(name, (versions.get(name) ?? new Set()).add(version));
	}

	const walletClient = [...(versions.get('@dynamic-labs/global-wallet-client') ?? [])];
	assert.equal(walletClient.length, 1, `Bun consumer resolved multiple Dynamic clients: ${walletClient.join(', ')}`);
	const resolved = assertSatisfiesDynamicRange(walletClient[0], 'Bun consumer');
	assert.equal(resolved, expectedClientVersion, `Bun consumer resolved client ${resolved}, expected the preflight contract ${expectedClientVersion}`);
	assert(
		[...(versions.get('@dynamic-labs/ethereum-aa') ?? [])].includes(expectedAaVersion),
		`Bun consumer did not resolve @dynamic-labs/ethereum-aa@${expectedAaVersion}`
	);

	// Same major-line invariant as the npm graph: versions outside the client's
	// major belong to unrelated dependents, such as zksync-sso's Dynamic 5.x.
	const line = `${resolved.split('.')[0]}.`;
	const conflicts = [...versions]
		.map(([name, resolved]) => [name, [...resolved].filter((version) => version.startsWith(line)).sort()] as const)
		.filter(([, inLine]) => inLine.length > 1)
		.map(([name, inLine]) => `${name}@{${inLine.join(', ')}}`)
		.sort();
	assert.deepEqual(conflicts, [], `Bun consumer kept a stale Dynamic ${resolved} subtree: ${conflicts.join(', ')}`);
};

const assertBrowserMetafile = async (metafilePath: string, lock: PackageLock) => {
	const metafile = JSON.parse(await readFile(metafilePath, 'utf8')) as {
		inputs: Record<string, unknown>;
		outputs: Record<string, { imports?: Array<{ path: string }> }>;
	};
	const inputs = Object.keys(metafile.inputs);
	assert(inputs.some((path) => path.includes('node_modules/@dynamic-labs/global-wallet-client/')));
	const clientVersion = assertSatisfiesDynamicRange(lock.packages['node_modules/@dynamic-labs/global-wallet-client']?.version, 'Browser bundle lockfile');
	const lineVersions = collectDynamicLineVersions(lock.packages, clientVersion);
	const resolvedDynamicInputs = new Map<string, string>();
	for (const path of inputs) {
		const normalizedPath = path.replaceAll('\\', '/');
		const marker = 'node_modules/@dynamic-labs/';
		const packageMarker = normalizedPath.lastIndexOf(marker);
		if (packageMarker === -1) continue;

		const packageStart = packageMarker + 'node_modules/'.length;
		const packageName = normalizedPath.slice(packageStart).split('/').slice(0, 2).join('/');
		const lockStart = normalizedPath.indexOf('node_modules/');
		const lockLocation = normalizedPath.slice(lockStart, packageStart + packageName.length);
		const version = lock.packages[lockLocation]?.version;
		assert(version, `Metafile input did not resolve to its nearest npm lock installation: ${path} -> ${lockLocation}`);
		const inLine = [...(lineVersions.get(packageName) ?? [])];
		// The lock is already asserted conflict-free within the client's major
		// line, so a bundled input from that line must be its single version.
		if (inLine.length > 0) {
			assert.deepEqual(inLine, [version], `Bundle pulled a stale Dynamic runtime: ${path} -> ${lockLocation}@${version}, expected ${inLine.join(', ')}`);
		}
		resolvedDynamicInputs.set(packageName, version);
	}
	assert.equal(
		resolvedDynamicInputs.get('@dynamic-labs/global-wallet-client'),
		clientVersion,
		'Browser bundle did not load the Dynamic client the lockfile resolved'
	);
	const runtimeImports = Object.values(metafile.outputs).flatMap((output) => output.imports ?? []);
	assert(!runtimeImports.some(({ path }) => path === 'node:worker_threads' || path === 'worker_threads'));
};

const temporaryRoot = await mkdtemp(join(tmpdir(), 'sei-global-wallet-release-'));
try {
	const dynamicContract = await resolveDynamicContract();
	console.log(
		`Dynamic ${dynamicRange} resolves to global-wallet-client@${dynamicContract.client}, whose peer contract pins @dynamic-labs/ethereum-aa@${dynamicContract.ethereumAa}.`
	);
	const testedPeerVersions = makeTestedPeerVersions(dynamicContract.ethereumAa);
	assertTestedPeersFitPublishedRanges(testedPeerVersions);

	await run(['bun', 'run', '--cwd', packageDir, 'build'], root);
	const pack = await run(['npm', 'pack', '--json', '--pack-destination', temporaryRoot], packageDir);
	const [packResult] = parseJsonOutput<PackResult[]>(pack.stdout);
	assert(packResult, 'npm pack returned no package');
	const packedPaths = packResult.files.map(({ path }) => path);
	for (const entrypoint of ['index', 'eip6963', 'ethereum', 'solana', 'zerodev']) {
		assert(packedPaths.includes(`dist/${entrypoint}.js`), `Missing dist/${entrypoint}.js`);
		assert(packedPaths.includes(`dist/${entrypoint}.d.ts`), `Missing dist/${entrypoint}.d.ts`);
	}
	assert(packedPaths.every((path) => path.startsWith('dist/') || ['LICENSE', 'README.md', 'package.json'].includes(path)));
	assert(!packedPaths.some((path) => path.includes('__tests__') || path.startsWith('src/')));
	const tarball = join(temporaryRoot, packResult.filename);

	if (!fastCheck) {
		const unwaivedDir = join(temporaryRoot, 'npm-unwaived');
		await mkdir(unwaivedDir);
		await writeJson(join(unwaivedDir, 'package.json'), walletOnlyManifest(tarball));
		await run(['npm', 'install', '--no-audit', '--no-fund'], unwaivedDir);
		const unwaivedLock = JSON.parse(await readFile(join(unwaivedDir, 'package-lock.json'), 'utf8')) as {
			packages: Record<string, { version?: string }>;
		};
		const lockedVersions = (name: string) =>
			Object.entries(unwaivedLock.packages)
				.filter(([location]) => location === `node_modules/${name}` || location.endsWith(`/node_modules/${name}`))
				.map(([, metadata]) => metadata.version);
		const unwaivedAuditResult = await run(['npm', 'audit', '--json'], unwaivedDir, true);
		const unwaivedAudit = parseJsonOutput<AuditReport>(unwaivedAuditResult.stdout);
		// Reported, not asserted: an unwaived consumer going clean means Dynamic
		// corrected its transitive pins, which must not read as a CI failure.
		const stillVulnerable = ['axios', 'uuid'].filter((name) => unwaivedAudit.vulnerabilities?.[name]);
		if (stillVulnerable.length === 0) {
			reportWaiverProgress(
				'an npm consumer without overrides now audits clean: Dynamic corrected its transitive axios and uuid pins. Remove the override guidance from packages/sei-global-wallet/README.md and the changeset.'
			);
		} else {
			console.log(`Overrides still required for ${stillVulnerable.map((name) => `${name}@${[...new Set(lockedVersions(name))].join('/')}`).join(', ')}`);
		}

		const waivedDir = join(temporaryRoot, 'npm-waived');
		await mkdir(waivedDir);
		await writeJson(join(waivedDir, 'package.json'), walletOnlyManifest(tarball, npmRuntimeOverrides));
		await run(['npm', 'install', '--no-audit', '--no-fund'], waivedDir);
		await run(
			[
				'node',
				'--input-type=module',
				'--eval',
				"await Promise.all([import('@sei-js/sei-global-wallet'), import('@sei-js/sei-global-wallet/eip6963'), import('@sei-js/sei-global-wallet/ethereum')]);"
			],
			waivedDir
		);
		const waivedAudit = parseJsonOutput<AuditReport>((await run(['npm', 'audit', '--json'], waivedDir)).stdout);
		assertAuditClean(waivedAudit, 'Waived npm consumer');
		await assertDeclarationsResolveWithoutOptionalPeers(waivedDir);
	}

	const npmConsumerDir = join(temporaryRoot, 'npm-full');
	await mkdir(npmConsumerDir);
	await writeJson(join(npmConsumerDir, 'package.json'), fullConsumerManifest(tarball, 'npm', dynamicContract.client, testedPeerVersions));
	await setupConsumerFiles(npmConsumerDir);
	await run(['npm', 'install', '--no-audit', '--no-fund'], npmConsumerDir);
	const npmLock = JSON.parse(await readFile(join(npmConsumerDir, 'package-lock.json'), 'utf8')) as PackageLock;
	assertNpmDynamicGraph(npmLock, dynamicContract.client, dynamicContract.ethereumAa);
	assert.equal(npmLock.packages['node_modules/ethjs-unit/node_modules/bn.js']?.version, '4.12.5');
	assert.equal(npmLock.packages['node_modules/number-to-bn/node_modules/bn.js']?.version, '4.12.5');
	assertMajor(npmLock.packages['node_modules/bn.js']?.version, '5', 'hoisted bn.js');
	assert.equal(npmLock.packages['node_modules/ws']?.version, '8.21.0');
	assert.equal(npmLock.packages['node_modules/viem']?.dependencies?.ws, '8.18.3');
	assert.equal(npmLock.packages['node_modules/jayson']?.dependencies?.ws, '^7.5.10');
	assertMajor(npmLock.packages['node_modules/jayson/node_modules/ws']?.version, '7', 'jayson nested ws');
	await run(['node', 'check-ssr.mjs'], npmConsumerDir);
	await run(['node', 'check-edge-native.mjs'], npmConsumerDir);
	await run(['node', 'check-local-aa.mjs'], npmConsumerDir);
	await run(['npx', '--no-install', 'tsc', '--project', 'tsconfig.json'], npmConsumerDir);
	await run(
		[
			'npx',
			'--no-install',
			'esbuild',
			'browser-esbuild-entry.mjs',
			'--bundle',
			'--format=iife',
			'--platform=browser',
			'--outfile=browser-esbuild.js',
			'--metafile=browser-meta.json'
		],
		npmConsumerDir
	);
	await assertBrowserMetafile(join(npmConsumerDir, 'browser-meta.json'), npmLock);
	await runBrowserBundle(join(npmConsumerDir, 'browser-esbuild.js'), true);
	await run(
		[
			'npx',
			'--no-install',
			'esbuild',
			'edge-entry.mjs',
			'--bundle',
			'--format=iife',
			'--platform=browser',
			'--outfile=edge-esbuild.js',
			'--metafile=edge-meta.json'
		],
		npmConsumerDir
	);
	await assertBrowserMetafile(join(npmConsumerDir, 'edge-meta.json'), npmLock);
	await runEdgeBundle(join(npmConsumerDir, 'edge-esbuild.js'));
	const viteBuild = await run(['npx', '--no-install', 'vite', 'build'], npmConsumerDir);
	// Vite routes externalization warnings through its own logger, which writes
	// to stdout in most versions, so scan both streams.
	const viteOutput = `${viteBuild.stdout}\n${viteBuild.stderr}`;
	assert.doesNotMatch(
		viteOutput,
		/(?:node:)?worker_threads.*externaliz|externaliz.*(?:node:)?worker_threads/i,
		`Vite externalized worker_threads:\n${viteOutput}`
	);
	const viteFiles = (await readdir(join(npmConsumerDir, 'vite-dist'))).filter((path) => path.endsWith('.js'));
	assert.equal(viteFiles.length, 1, `Expected one Vite bundle, found: ${viteFiles.join(', ')}`);
	await runBrowserBundle(join(npmConsumerDir, 'vite-dist', viteFiles[0]), true);
	assertAuditClean(parseJsonOutput<AuditReport>((await run(['npm', 'audit', '--json'], npmConsumerDir)).stdout), 'Full npm consumer');

	if (!fastCheck) {
		const bunConsumerDir = join(temporaryRoot, 'bun-full');
		await mkdir(bunConsumerDir);
		await writeJson(join(bunConsumerDir, 'package.json'), fullConsumerManifest(tarball, 'bun', dynamicContract.client, testedPeerVersions));
		await setupConsumerFiles(bunConsumerDir);
		await run(['bun', 'install'], bunConsumerDir);
		const bunLock = await readFile(join(bunConsumerDir, 'bun.lock'), 'utf8');
		assertBunDynamicGraph(bunLock, dynamicContract.client, dynamicContract.ethereumAa);
		assert.match(bunLock, /"bn\.js": \["bn\.js@5\./);
		assert.match(bunLock, /"ethjs-unit\/bn\.js": \["bn\.js@4\./);
		assert.match(bunLock, /"number-to-bn\/bn\.js": \["bn\.js@4\./);
		assert.match(bunLock, /"jayson\/ws": \["ws@7\./);
		assert.match(bunLock, /"ws": \["ws@8\./);
		await run(['bun', 'check-ssr.mjs'], bunConsumerDir);
		await run(['bun', 'check-local-aa.mjs'], bunConsumerDir);
		assertAcceptedBunAudit(await run(['bun', 'audit', '--json'], bunConsumerDir, true));
	}

	console.log(
		fastCheck
			? 'Sei Global Wallet fast npm consumer checks passed.'
			: 'Sei Global Wallet consumer checks passed: npm scoped patched bn.js/ws8 while preserving Solana bn5/Jayson ws7 with a clean audit; Bun preserved compatible majors within the accepted advisory waiver.'
	);
} finally {
	await rm(temporaryRoot, { force: true, recursive: true });
}
