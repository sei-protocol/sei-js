import { exec } from "node:child_process";
import { promises as fs, existsSync } from "node:fs";
import { basename } from "node:path";
import path from "node:path";
import util from "node:util";
import ts from "typescript";

const execAsync = util.promisify(exec);

// Run biome fix on a file to remove unused imports and clean up the code
export const runBiomeFix = async (filePath: string) => {
	try {
		if (!existsSync(filePath)) return;

		await execAsync(`npx biome check ${filePath} --write`);
	} catch (error) {
		// @biome-ignore
		console.log(error);
	}
};

// Read a file and return a TypeScript source file
export const readSourceFile = async (sourceFilePath: string): Promise<ts.SourceFile> => {
	try {
		const fileContent = await fs.readFile(sourceFilePath, "utf-8");
		return ts.createSourceFile(basename(sourceFilePath), fileContent, ts.ScriptTarget.ESNext, true);
	} catch (error) {
		console.error(`Failed to read the file at ${sourceFilePath}:`, error);
		throw error;
	}
};

// Recursively traverse all nodes in a TypeScript source file
export const traverseNodes = (sourceFile: ts.SourceFile, visitCallback: (node: ts.Node) => void) => {
	const visit = (node: ts.SourceFile) => {
		visitCallback(node);
		ts.forEachChild(node, visitCallback); // Recursively visit child nodes
	};
	visit(sourceFile);
};

// Write the extracted result to a file
export const writeToFile = async (destinationFilePath: string, result: string) => {
	try {
		if (!result) return;

		await fs.writeFile(destinationFilePath, result, "utf-8");
	} catch (error) {
		console.error(`Failed to write to the file at ${destinationFilePath}:`, error);
		throw error;
	}
};

// Recursively iterate through a directory and return all `.ts` file paths.
export const getAllTsFiles = async (dir: string): Promise<string[]> => {
	let tsFiles: string[] = [];
	const files = await fs.readdir(dir, { withFileTypes: true });

	for (const file of files) {
		const fullPath = path.join(dir, file.name);

		if (file.isDirectory()) {
			tsFiles = tsFiles.concat(await getAllTsFiles(fullPath));
		} else if (file.isFile() && file.name.endsWith(".ts")) {
			tsFiles.push(fullPath);
		}
	}

	return tsFiles;
};

// Find if a specific variable (registry or amino converters) exists in a file
export const findExportInFile = (sourceFile: ts.SourceFile, variableName: string) => {
	let found = false;

	const visitor = (node: ts.Node) => {
		if (
			ts.isVariableStatement(node) &&
			node.declarationList.declarations.some((declaration) => ts.isIdentifier(declaration.name) && declaration.name.text === variableName)
		) {
			found = true;
		}
		ts.forEachChild(node, visitor);
	};

	ts.forEachChild(sourceFile, visitor);
	return found;
};
