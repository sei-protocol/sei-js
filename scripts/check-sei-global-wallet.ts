import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { findStaleDynamicPackages } from './dynamic-package-lock.js';

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
const temporaryRoot = await mkdtemp(join(tmpdir(), 'sei-global-wallet-release-'));
const fastCheck = process.env.SEI_GLOBAL_WALLET_FAST_CHECK === '1';
const acceptedBunAdvisories = ['GHSA-378v-28hj-76wf', 'GHSA-58qx-3vcg-4xpx', 'GHSA-96hv-2xvq-fx4p'] as const;

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

const fullConsumerManifest = (tarball: string, packageManager: 'bun' | 'npm') => ({
	name: 'sei-global-wallet-full-consumer',
	private: true,
	type: 'module',
	dependencies: {
		'@dynamic-labs/ethereum-aa': '4.96.3',
		'@sei-js/sei-global-wallet': `file:${tarball}`,
		'@solana/wallet-standard-features': '^1.2.0',
		'@solana/web3.js': '1.98.1',
		'@wallet-standard/base': '^1.0.1',
		'@wallet-standard/features': '^1.0.3',
		'@wallet-standard/wallet': '^1.1.0',
		'@zerodev/sdk': '5.5.7',
		'ethjs-unit': '0.1.6',
		'number-to-bn': '1.7.0',
		viem: '2.45.3',
		'zksync-sso': '0.2.0'
	},
	devDependencies: {
		esbuild: '0.28.2',
		typescript: '5.9.3',
		vite: '8.2.2'
	},
	overrides: packageManager === 'npm' ? npmSafeOverrides : baseSafeOverrides
});

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
	assert.notEqual(result.exitCode, 0, 'Bun AA consumer audit unexpectedly reported a clean dependency tree');
	const report = parseJsonOutput<Record<string, Array<{ severity?: string; url?: string }>>>(result.stdout);
	assert.deepEqual(Object.keys(report).sort(), ['bn.js', 'ws']);
	assert.equal(report['bn.js']?.length, 1);
	assert.equal(report['bn.js']?.[0]?.severity, 'moderate');
	assert.equal(report['bn.js']?.[0]?.url, 'https://github.com/advisories/GHSA-378v-28hj-76wf');
	assert.equal(report.ws?.length, 2);
	assert.deepEqual(
		report.ws?.map(({ severity, url }) => ({ severity, url })).sort((a, b) => (a.url ?? '').localeCompare(b.url ?? '')),
		[
			{
				severity: 'moderate',
				url: 'https://github.com/advisories/GHSA-58qx-3vcg-4xpx'
			},
			{
				severity: 'high',
				url: 'https://github.com/advisories/GHSA-96hv-2xvq-fx4p'
			}
		]
	);
	const serialized = JSON.stringify(report);
	const advisories = [...new Set(serialized.match(/GHSA-[a-z0-9-]+/gi) ?? [])].sort();
	assert.deepEqual(advisories, [...acceptedBunAdvisories].sort());
	assert.doesNotMatch(serialized, /axios|uuid/i);
};

const assertNpmDynamicGraph = (lock: PackageLock) => {
	assert.equal(lock.packages['node_modules/@dynamic-labs/global-wallet-client']?.version, '4.96.3');
	assert.equal(lock.packages['node_modules/@dynamic-labs/ethereum-aa']?.version, '4.96.3');

	const stale = findStaleDynamicPackages(lock.packages);
	assert.deepEqual(stale, [], `Unexpected stale Dynamic 4.96.1 npm resolutions: ${stale.map(([location]) => location).join(', ')}`);
};

const assertBunDynamicGraph = (lockText: string) => {
	assert.match(lockText, /"@dynamic-labs\/global-wallet-client": \["@dynamic-labs\/global-wallet-client@4\.96\.3"/);
	assert.match(lockText, /"@dynamic-labs\/ethereum-aa": \["@dynamic-labs\/ethereum-aa@4\.96\.3"/);
	assert.doesNotMatch(lockText, /@dynamic-labs\/[^"]+@4\.96\.1/, 'Bun lockfile retained a stale Dynamic 4.96.1 resolution');
};

const assertBrowserMetafile = async (metafilePath: string, lock: PackageLock) => {
	const metafile = JSON.parse(await readFile(metafilePath, 'utf8')) as {
		inputs: Record<string, unknown>;
		outputs: Record<string, { imports?: Array<{ path: string }> }>;
	};
	const inputs = Object.keys(metafile.inputs);
	assert(inputs.some((path) => path.includes('node_modules/@dynamic-labs/global-wallet-client/')));
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
		assert.notEqual(version, '4.96.1', `Unexpected stale Dynamic runtime in bundle: ${path} -> ${lockLocation}@${version}`);
		resolvedDynamicInputs.set(lockLocation, version);
	}
	assert.equal(resolvedDynamicInputs.get('node_modules/@dynamic-labs/global-wallet-client'), '4.96.3');
	const runtimeImports = Object.values(metafile.outputs).flatMap((output) => output.imports ?? []);
	assert(!runtimeImports.some(({ path }) => path === 'node:worker_threads' || path === 'worker_threads'));
};

try {
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
		assert(lockedVersions('axios').includes('1.16.0'));
		assert(lockedVersions('uuid').includes('11.1.0'));
		const unwaivedAuditResult = await run(['npm', 'audit', '--json'], unwaivedDir, true);
		const unwaivedAudit = parseJsonOutput<AuditReport>(unwaivedAuditResult.stdout);
		assert(unwaivedAudit.vulnerabilities?.axios, 'Unwaived npm audit did not expose vulnerable axios');
		assert(unwaivedAudit.vulnerabilities?.uuid, 'Unwaived npm audit did not expose vulnerable uuid');

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
	}

	const npmConsumerDir = join(temporaryRoot, 'npm-full');
	await mkdir(npmConsumerDir);
	await writeJson(join(npmConsumerDir, 'package.json'), fullConsumerManifest(tarball, 'npm'));
	await setupConsumerFiles(npmConsumerDir);
	await run(['npm', 'install', '--no-audit', '--no-fund'], npmConsumerDir);
	const npmLock = JSON.parse(await readFile(join(npmConsumerDir, 'package-lock.json'), 'utf8')) as PackageLock;
	assertNpmDynamicGraph(npmLock);
	assert.equal(npmLock.packages['node_modules/ethjs-unit/node_modules/bn.js']?.version, '4.12.5');
	assert.equal(npmLock.packages['node_modules/number-to-bn/node_modules/bn.js']?.version, '4.12.5');
	assert.equal(npmLock.packages['node_modules/bn.js']?.version, '5.2.5');
	assert.equal(npmLock.packages['node_modules/ws']?.version, '8.21.0');
	assert.equal(npmLock.packages['node_modules/viem']?.dependencies?.ws, '8.18.3');
	assert.equal(npmLock.packages['node_modules/jayson']?.dependencies?.ws, '^7.5.10');
	assert.equal(npmLock.packages['node_modules/jayson/node_modules/ws']?.version, '7.5.13');
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
	assert.doesNotMatch(
		viteBuild.stderr,
		/(?:node:)?worker_threads.*externaliz|externaliz.*(?:node:)?worker_threads/i,
		`Vite externalized worker_threads:\n${viteBuild.stderr}`
	);
	const viteFiles = (await readdir(join(npmConsumerDir, 'vite-dist'))).filter((path) => path.endsWith('.js'));
	assert.equal(viteFiles.length, 1, `Expected one Vite bundle, found: ${viteFiles.join(', ')}`);
	await runBrowserBundle(join(npmConsumerDir, 'vite-dist', viteFiles[0]), true);
	assertAuditClean(parseJsonOutput<AuditReport>((await run(['npm', 'audit', '--json'], npmConsumerDir)).stdout), 'Full npm consumer');

	if (!fastCheck) {
		const bunConsumerDir = join(temporaryRoot, 'bun-full');
		await mkdir(bunConsumerDir);
		await writeJson(join(bunConsumerDir, 'package.json'), fullConsumerManifest(tarball, 'bun'));
		await setupConsumerFiles(bunConsumerDir);
		await run(['bun', 'install'], bunConsumerDir);
		const bunLock = await readFile(join(bunConsumerDir, 'bun.lock'), 'utf8');
		assertBunDynamicGraph(bunLock);
		assert.match(bunLock, /"bn\.js": \["bn\.js@5\.2\.5"/);
		assert.match(bunLock, /"ethjs-unit\/bn\.js": \["bn\.js@4\.11\.6"/);
		assert.match(bunLock, /"number-to-bn\/bn\.js": \["bn\.js@4\.11\.6"/);
		assert.match(bunLock, /"jayson\/ws": \["ws@7\.5\.13"/);
		assert.match(bunLock, /"ws": \["ws@8\.18\.3"/);
		await run(['bun', 'check-ssr.mjs'], bunConsumerDir);
		await run(['bun', 'check-local-aa.mjs'], bunConsumerDir);
		assertAcceptedBunAudit(await run(['bun', 'audit', '--json'], bunConsumerDir, true));
	}

	console.log(
		fastCheck
			? 'Sei Global Wallet fast npm consumer checks passed.'
			: `Sei Global Wallet consumer checks passed: npm scoped patched bn.js/ws8 while preserving Solana bn5/Jayson ws7 with a clean audit; Bun preserved compatible majors and accepted exactly ${acceptedBunAdvisories.join(', ')}.`
	);
} finally {
	await rm(temporaryRoot, { force: true, recursive: true });
}
