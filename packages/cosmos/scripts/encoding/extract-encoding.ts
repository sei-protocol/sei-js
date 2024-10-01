import { promises as fs } from "node:fs";
import path from "node:path";
import ts from "typescript";
import { readSourceFile, runBiomeFix, traverseNodes, writeToFile } from "../common/utils";

// List of specific types that we always want to import from "common.ts"
const COMMON_TYPES = new Set(["Builtin", "DeepPartial", "Exact", "KeysOfUnion", "MessageFns"]);

const parseRegistryAndAmino = async (nodeText: string, registryEntries: string[], aminoConverters: string[]) => {
	const messageMatch = nodeText.match(/MessageFns<(\w+), "(.*?)">/);
	if (messageMatch) {
		const [_, messageName, typeUrl] = messageMatch;

		// Generate registry entry
		registryEntries.push(`["/${typeUrl}", ${messageName} as never]`);

		// Calculate aminoType
		let aminoType = typeUrl;
		if (typeUrl.startsWith("cosmos")) {
			const msgType = typeUrl.split(".").pop();
			aminoType = `cosmos-sdk/${msgType}`;
		}

		// Generate Amino converters
		aminoConverters.push(`
  "/${typeUrl}": {
    aminoType: "${aminoType}",
    toAmino: (message: ${messageName}) => ({ ...message }),
    fromAmino: (object: ${messageName}) => ({ ...object }),
  }`);
	}
};

export const extractEncoding = async (sourceFilePath: string, destinationFilePath: string, relativePath: string): Promise<void> => {
	try {
		const sourceFile = await readSourceFile(sourceFilePath);

		const importsToCopy: string[] = ['import type { GeneratedType } from "@cosmjs/proto-signing";'];
		const enumsToCopy: string[] = [];
		const typesToCopy: Set<string> = new Set();
		const typesToImport: Set<string> = new Set();
		const functionsToCopy: string[] = [];
		const constantsToCopy: string[] = [];

		// Used in @cosmjs/stargate clients
		const registryEntries: string[] = [];
		const aminoConverters: string[] = [];

		// Redefine an interface for imported types to fix a TypeScript error
		const interfaceDeclarations: string[] = [];

		traverseNodes(sourceFile, (node) => {
			// Extract constants from the source file
			if (ts.isVariableStatement(node) && node.declarationList.flags & ts.NodeFlags.Const) {
				const variableDeclarations = node.declarationList.declarations;

				for (const declaration of variableDeclarations) {
					if (ts.isIdentifier(declaration.name)) {
						const varName = declaration.name.text;

						if (varName === "protobufPackage") return; // Skip this constant

						const nodeText = node.getText(sourceFile).trim();
						parseRegistryAndAmino(nodeText, registryEntries, aminoConverters);
						constantsToCopy.push(`${nodeText}\n`);
					}
				}
			} else if (ts.isFunctionDeclaration(node)) {
				const nodeText = node.getText(sourceFile).trim();
				functionsToCopy.push(`${nodeText}\n`);
			} else if (ts.isImportDeclaration(node)) {
				const importText = node.getText(sourceFile).trim();
				importsToCopy.push(importText);
			} else if (ts.isEnumDeclaration(node)) {
				enumsToCopy.push(node.name.text);
			} else if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node)) {
				const typeName = node.name.text;
				if (COMMON_TYPES.has(typeName)) {
					// Store that this common value is used for import later
					typesToImport.add(typeName);
				} else {
					// collect typename for imports and interface declarations
					typesToCopy.add(typeName);
				}
			}
		});

		// Create the custom import statement for the collected types from "@sei-js/types"
		if (typesToCopy.size > 0) {
			const splitPath = relativePath.split("/");
			const path = splitPath.slice(0, splitPath.length - 1).join("/");

			const relativePathToTypes = `${getRelativePathToEncodingRoot(relativePath)}..`;

			const importStatement = `import type { ${Array.from(typesToCopy)
				.map((type) => `${type} as ${type}_type`)
				.join(", ")} } from "${relativePathToTypes}/types/${path}";`;
			importsToCopy.push(importStatement);

			// Create the interface declarations for each type. This is necessary to fix a TypeScript error.
			interfaceDeclarations.push(
				Array.from(typesToCopy)
					.map((type) => `export interface ${type} extends ${type}_type {}`)
					.join("\n"),
			);
		}

		if (enumsToCopy.length > 0) {
			const splitPath = relativePath.split("/");
			const path = splitPath.slice(0, splitPath.length - 1).join("/");
			const relativePathToTypes = `${getRelativePathToEncodingRoot(relativePath)}..`;

			const importStatement = `import { ${enumsToCopy.join(", ")} } from "${relativePathToTypes}/types/${path}";`;
			importsToCopy.push(importStatement);
		}

		// Add the import from "common.ts" for the common types if any are found
		if (typesToImport.size > 0) {
			const relativePathToCommon = `${getRelativePathToEncodingRoot(relativePath)}common`;

			const commonImportStatement = `import { ${Array.from(typesToImport).join(", ")} } from "${relativePathToCommon}";`;
			importsToCopy.push(commonImportStatement);
		}

		// Build the result text
		let result = [...importsToCopy, ...interfaceDeclarations, ...constantsToCopy, ...functionsToCopy].join("\n\n");

		// Add the registry entry at the end of the file
		if (registryEntries.length > 0) {
			const registryDeclaration = `export const registry: Array<[string, GeneratedType]> = [\n  ${registryEntries.join(",\n  ")}\n];`;
			result += registryDeclaration;
		}

		// Add the amino converters at the end of the file
		if (aminoConverters.length > 0) {
			const aminoDeclaration = `export const aminoConverters = {\n  ${aminoConverters.join(",\n  ")}\n};`;
			result += aminoDeclaration;
		}

		if (result.trim() !== "") {
			// Ensure output directory exists
			await fs.mkdir(path.dirname(destinationFilePath), { recursive: true });

			await writeToFile(destinationFilePath, result);
			await runBiomeFix(destinationFilePath);
		}
	} catch (error) {
		console.error("Error extracting const and function declarations:", error);
	}
};

const getRelativePathToEncodingRoot = (relativePath: string): string => {
	// Count the number of directories in the relative path
	const depth = relativePath.split("/").length - 1;

	// Build the string with the appropriate number of '../'
	return "../".repeat(depth);
};
