import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { findExportInFile, runBiomeFix, writeToFile } from '../common/utils';

// Configurations
const REGISTRY_CONFIG = {
	fileName: 'registry.ts',
	varName: 'registry',
	exportName: 'seiProtoRegistry',
	suffix: '_registry'
};

const AMINO_CONFIG = {
	fileName: 'amino.ts',
	varName: 'aminoConverters',
	exportName: 'aminoConverters: AminoConverters',
	suffix: '_amino'
};

// Helper function to create a unique and descriptive alias
const createAliasFromFilePath = (filePath: string, rootDir: string): string =>
	path
		.relative(rootDir, filePath)
		.replace(/\\/g, '/')
		.replace(/\.ts$/, '')
		.replace(/[^a-zA-Z0-9]/g, '_');

// Process TypeScript file to detect if it contains a specific export
const processTsFile = async (filePath: string, varName: string, foundFiles: string[]): Promise<void> => {
	try {
		const fileContent = await fs.promises.readFile(filePath, 'utf-8');
		const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest, true);

		if (findExportInFile(sourceFile, varName)) {
			foundFiles.push(filePath);
		}
	} catch (error) {
		console.error(`Error processing file ${filePath}:`, error);
	}
};

// Recursively iterate directories to find registry or amino converters
const iterateDirectoriesAndFindExports = async (dirPath: string, varName: string, foundFiles: string[]): Promise<void> => {
	const items = await fs.promises.readdir(dirPath, { withFileTypes: true });
	await Promise.all(
		items.map(async (item) => {
			const itemPath = path.join(dirPath, item.name);
			if (item.isDirectory()) {
				await iterateDirectoriesAndFindExports(itemPath, varName, foundFiles);
			} else if (item.isFile() && item.name.endsWith('.ts')) {
				await processTsFile(itemPath, varName, foundFiles);
			}
		})
	);
};

// Generalized function to create registry or amino converter file
const createFile = async (
	rootDir: string,
	foundFiles: string[],
	config: { fileName: string; varName: string; exportName: string; suffix: string }
): Promise<void> => {
	try {
		if (foundFiles.length === 0) return;

		// Sort files alphabetically by their relative import path
		const sortedFiles = [...foundFiles].sort((a, b) => {
			const pathA = path.relative(rootDir, a).replace(/\\/g, "/");
			const pathB = path.relative(rootDir, b).replace(/\\/g, "/");
			return pathA.localeCompare(pathB);
		});

		const imports: string[] = config.varName === "aminoConverters" ? ["import { AminoConverters } from '@cosmjs/stargate';"] : [];
		const arrayEntries: string[] = [];

		sortedFiles.forEach((filePath) => {
			const importPath = path.relative(rootDir, filePath).replace(/\\/g, "/").replace(/\.ts$/, "");
			const alias = createAliasFromFilePath(filePath, rootDir) + config.suffix;
			imports.push(`import { ${config.varName} as ${alias} } from './${importPath}';`);
			arrayEntries.push(`...${alias}`);
		});

		let fileContent = `${imports.join('\n')}\n\nexport const ${config.exportName}  = [${arrayEntries.join(',')}];`;
		if (config.varName === 'aminoConverters') {
			fileContent = `${imports.join('\n')}\n\nexport const ${config.exportName}  = {${arrayEntries.join(',')}};`;
		}
		const outputFilePath = path.join(rootDir, config.fileName);
		await writeToFile(outputFilePath, fileContent.trim());
		await runBiomeFix(outputFilePath);
		console.log(`Generated ${config.exportName} file in ${outputFilePath}`);
	} catch (error) {
		console.error(`Error creating ${config.exportName} file:`, error);
	}
};

// Main function to orchestrate registry and amino converters generation
export const buildCombinedProtoRegistryAndAminoConverters = async (): Promise<void> => {
	console.log('Building combined proto registry and amino converters...');

	const rootDir = './library/encoding';
	const registries: string[] = [];
	const aminoConverters: string[] = [];

	await iterateDirectoriesAndFindExports(rootDir, REGISTRY_CONFIG.varName, registries);
	await iterateDirectoriesAndFindExports(rootDir, AMINO_CONFIG.varName, aminoConverters);

	await createFile(rootDir, registries, REGISTRY_CONFIG);
	await createFile(rootDir, aminoConverters, AMINO_CONFIG);
};
