/**
 * Smoke-check that documented @sei-js/precompiles subpath exports resolve
 * from the built output. Run after `bun run build`.
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkgDir = join(root, 'packages/precompiles');
const pkg = await Bun.file(join(pkgDir, 'package.json')).json();

const required = ['.', './ethers', './viem', './precompiles'] as const;
const missing: string[] = [];

for (const subpath of required) {
	const entry = pkg.exports?.[subpath];
	if (!entry) {
		missing.push(`${subpath} (missing from exports map)`);
		continue;
	}

	for (const cond of ['types', 'import', 'default'] as const) {
		const rel = entry[cond];
		if (typeof rel !== 'string') {
			missing.push(`${subpath} [${cond}]`);
			continue;
		}
		const abs = join(pkgDir, rel);
		if (!existsSync(abs)) {
			missing.push(`${subpath} [${cond}] -> ${rel}`);
		}
	}
}

const rootModule = await import(join(pkgDir, 'dist/index.js'));
const ethersModule = await import(join(pkgDir, 'dist/ethers/index.js'));
const viemModule = await import(join(pkgDir, 'dist/viem/index.js'));
const precompilesModule = await import(join(pkgDir, 'dist/precompiles/index.js'));

if (typeof ethersModule.getBankPrecompileEthersV6Contract !== 'function') {
	missing.push('getBankPrecompileEthersV6Contract is not a function');
}
for (const [name, chainId] of [
	['sei', 1329],
	['seiTestnet', 1328],
	['seiDevnet', 713715],
	['seiLocal', 713714]
] as const) {
	if (viemModule[name]?.id !== chainId) {
		missing.push(`${name} chain export missing or invalid`);
	}
	if (rootModule[name] !== viemModule[name]) {
		missing.push(`root and viem subpaths do not share ${name} chain identity`);
	}
}
if (!precompilesModule.BANK_PRECOMPILE_ADDRESS) {
	missing.push('BANK_PRECOMPILE_ADDRESS missing');
}
if (rootModule.BANK_PRECOMPILE_ABI !== precompilesModule.BANK_PRECOMPILE_ABI) {
	missing.push('root and precompiles subpaths do not share ABI identity');
}
if (rootModule.VIEM_BANK_PRECOMPILE_ABI !== viemModule.VIEM_BANK_PRECOMPILE_ABI) {
	missing.push('root and viem subpaths do not share ABI identity');
}
if (rootModule.getBankPrecompileEthersV6Contract !== ethersModule.getBankPrecompileEthersV6Contract) {
	missing.push('root and ethers subpaths do not share factory identity');
}

if (missing.length > 0) {
	console.error('Precompile export check failed:\n', missing.map((m) => `  - ${m}`).join('\n'));
	process.exit(1);
}

console.log('Precompile subpath exports OK:', required.join(', '));
