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

const { getBankPrecompileEthersV6Contract } = await import(join(pkgDir, 'dist/ethers/index.js'));
const { seiLocal } = await import(join(pkgDir, 'dist/viem/index.js'));
const { BANK_PRECOMPILE_ADDRESS } = await import(join(pkgDir, 'dist/precompiles/index.js'));

if (typeof getBankPrecompileEthersV6Contract !== 'function') {
	missing.push('getBankPrecompileEthersV6Contract is not a function');
}
if (!seiLocal?.id) {
	missing.push('seiLocal chain export missing');
}
if (!BANK_PRECOMPILE_ADDRESS) {
	missing.push('BANK_PRECOMPILE_ADDRESS missing');
}

if (missing.length > 0) {
	console.error('Precompile export check failed:\n', missing.map((m) => `  - ${m}`).join('\n'));
	process.exit(1);
}

console.log('Precompile subpath exports OK:', required.join(', '));
