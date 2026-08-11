import { cp, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const typesDirectory = join(packageRoot, 'dist/types');
const commonJsTypesDirectory = join(packageRoot, 'dist/types-cjs');

await writeFile(join(packageRoot, 'dist/cjs/package.json'), '{"type":"commonjs"}\n');
await cp(typesDirectory, commonJsTypesDirectory, { recursive: true });
await writeFile(join(commonJsTypesDirectory, 'package.json'), '{"type":"commonjs"}\n');
