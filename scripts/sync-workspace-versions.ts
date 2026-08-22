import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { applyEdits, modify, type ParseError, parse } from 'jsonc-parser';

const root = join(import.meta.dir, '..');
const packagesDir = join(root, 'packages');
const lockfilePath = join(root, 'bun.lock');

export interface WorkspaceManifest {
	name: string;
	path: string;
	private?: boolean;
	version?: string;
}

interface SyncResult {
	lockfile: string;
	skippedPrivate: string[];
	updated: number;
}

export const syncWorkspaceVersions = (lockfile: string, manifests: WorkspaceManifest[]): SyncResult => {
	const parseErrors: ParseError[] = [];
	const parsedLockfile = parse(lockfile, parseErrors, { allowTrailingComma: true }) as {
		workspaces?: Record<string, { name?: string; version?: string }>;
	};

	if (parseErrors.length > 0 || !parsedLockfile.workspaces) {
		throw new Error(`Could not parse bun.lock workspace metadata (${parseErrors.length} parse errors)`);
	}

	let synchronizedLockfile = lockfile;
	let updated = 0;
	const skippedPrivate: string[] = [];

	for (const manifest of manifests) {
		if (manifest.private) {
			skippedPrivate.push(manifest.name);
			continue;
		}
		if (!manifest.version) {
			throw new Error(`Published workspace ${manifest.name} has no version`);
		}

		const lockWorkspace = parsedLockfile.workspaces[manifest.path];
		if (lockWorkspace?.name !== manifest.name || typeof lockWorkspace.version !== 'string') {
			throw new Error(`Could not find published workspace ${manifest.name} in bun.lock metadata`);
		}

		if (lockWorkspace.version === manifest.version) continue;

		const edits = modify(synchronizedLockfile, ['workspaces', manifest.path, 'version'], manifest.version, {
			formattingOptions: { eol: '\n', insertSpaces: true, tabSize: 2 }
		});
		synchronizedLockfile = applyEdits(synchronizedLockfile, edits);
		updated += 1;
	}

	return { lockfile: synchronizedLockfile, skippedPrivate, updated };
};

if (import.meta.main) {
	const manifests: WorkspaceManifest[] = [];
	for (const entry of await readdir(packagesDir, { withFileTypes: true })) {
		if (!entry.isDirectory()) continue;

		const workspacePath = `packages/${entry.name}`;
		const manifestFile = Bun.file(join(packagesDir, entry.name, 'package.json'));
		if (!(await manifestFile.exists())) continue;

		const manifest = (await manifestFile.json()) as { name?: string; private?: boolean; version?: string };
		if (!manifest.name) throw new Error(`${workspacePath}/package.json has no package name`);
		manifests.push({ name: manifest.name, path: workspacePath, private: manifest.private, version: manifest.version });
	}

	const lockfile = await Bun.file(lockfilePath).text();
	const result = syncWorkspaceVersions(lockfile, manifests);
	for (const packageName of result.skippedPrivate) console.warn(`Skipping private workspace ${packageName}`);
	if (result.updated > 0) await Bun.write(lockfilePath, result.lockfile);
	console.log(`Synchronized ${result.updated} workspace versions in bun.lock`);
}
