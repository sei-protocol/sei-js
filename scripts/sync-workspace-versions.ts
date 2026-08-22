import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = join(import.meta.dir, '..');
const packagesDir = join(root, 'packages');
const lockfilePath = join(root, 'bun.lock');
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

let lockfile = await Bun.file(lockfilePath).text();
let updated = 0;

for (const entry of await readdir(packagesDir, { withFileTypes: true })) {
	if (!entry.isDirectory()) continue;

	const workspacePath = `packages/${entry.name}`;
	const manifestFile = Bun.file(join(packagesDir, entry.name, 'package.json'));
	if (!(await manifestFile.exists())) continue;

	const manifest = (await manifestFile.json()) as { name?: string; version?: string };
	if (!manifest.name || !manifest.version) continue;

	const pattern = new RegExp(`("${escapeRegExp(workspacePath)}": \\{\\n\\s+"name": "${escapeRegExp(manifest.name)}",\\n\\s+"version": ")[^"]+(")`);

	if (!pattern.test(lockfile)) {
		throw new Error(`Could not find ${manifest.name} in bun.lock workspace metadata`);
	}

	lockfile = lockfile.replace(pattern, `$1${manifest.version}$2`);
	updated += 1;
}

await Bun.write(lockfilePath, lockfile);
console.log(`Synchronized ${updated} workspace versions in bun.lock`);
