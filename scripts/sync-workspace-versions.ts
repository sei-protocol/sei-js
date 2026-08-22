import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { applyEdits, modify, type ParseError, parse } from 'jsonc-parser';

const root = join(import.meta.dir, '..');
const packagesDir = join(root, 'packages');
const lockfilePath = join(root, 'bun.lock');

let lockfile = await Bun.file(lockfilePath).text();
const parseErrors: ParseError[] = [];
const parsedLockfile = parse(lockfile, parseErrors, { allowTrailingComma: true }) as {
	workspaces?: Record<string, { name?: string; version?: string }>;
};

if (parseErrors.length > 0 || !parsedLockfile.workspaces) {
	throw new Error(`Could not parse bun.lock workspace metadata (${parseErrors.length} parse errors)`);
}

let updated = 0;

for (const entry of await readdir(packagesDir, { withFileTypes: true })) {
	if (!entry.isDirectory()) continue;

	const workspacePath = `packages/${entry.name}`;
	const manifestFile = Bun.file(join(packagesDir, entry.name, 'package.json'));
	if (!(await manifestFile.exists())) continue;

	const manifest = (await manifestFile.json()) as { name?: string; private?: boolean; version?: string };
	if (!manifest.name || !manifest.version) continue;
	if (manifest.private) {
		console.warn(`Skipping private workspace ${manifest.name}`);
		continue;
	}

	const lockWorkspace = parsedLockfile.workspaces[workspacePath];
	if (lockWorkspace?.name !== manifest.name || typeof lockWorkspace.version !== 'string') {
		throw new Error(`Could not find published workspace ${manifest.name} in bun.lock metadata`);
	}

	if (lockWorkspace.version === manifest.version) continue;

	const edits = modify(lockfile, ['workspaces', workspacePath, 'version'], manifest.version, {
		formattingOptions: { eol: '\n', insertSpaces: true, tabSize: 2 }
	});
	lockfile = applyEdits(lockfile, edits);
	updated += 1;
}

if (updated > 0) await Bun.write(lockfilePath, lockfile);
console.log(`Synchronized ${updated} workspace versions in bun.lock`);
