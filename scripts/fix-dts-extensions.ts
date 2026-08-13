import { existsSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.argv[2] ?? 'dist';

const walk = async (dir: string): Promise<string[]> => {
	const entries = await readdir(dir, { withFileTypes: true });
	const files: string[] = [];
	for (const entry of entries) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await walk(path)));
		} else if (entry.name.endsWith('.d.ts') && !entry.name.endsWith('.d.ts.map')) {
			files.push(path);
		}
	}
	return files;
};

const relativeImport = /(from\s+|import\s*\()\s*(['"])(\.[^'"]+)\2/g;

for (const file of await walk(root)) {
	const text = await readFile(file, 'utf8');
	const next = text.replace(relativeImport, (full, prefix: string, quote: string, spec: string) => {
		if (/\.(js|mjs|cjs|json)$/.test(spec)) {
			return full;
		}
		if (existsSync(join(dirname(file), spec, 'index.d.ts'))) {
			return `${prefix}${quote}${spec}/index.js${quote}`;
		}
		return `${prefix}${quote}${spec}.js${quote}`;
	});
	if (next !== text) {
		await writeFile(file, next);
	}
}
