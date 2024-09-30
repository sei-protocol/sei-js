import { promises as fs } from "node:fs";
import path from "node:path";
import ts from "typescript";
import { readSourceFile, runBiomeFix, traverseNodes, writeToFile } from "../common/utils";

export const extractRESTClient = async (sourceFilePath: string, destinationFilePath: string, relativePath: string): Promise<void> => {
	try {
		const sourceFile = await readSourceFile(sourceFilePath);

		const extractedDeclarations: Set<string> = new Set();
		const extractedImports: Set<string> = new Set();
		const typeNames: Set<string> = new Set();

		traverseNodes(sourceFile, (node) => {
			if (ts.isClassDeclaration(node)) {
				if (node.name?.text !== "Query") return; // Only grab Query Msg classes
				const nodeText = node.getText(sourceFile).trim();
				extractedDeclarations.add(nodeText);
			} else if (ts.isImportDeclaration(node)) {
				const importText = node.getText(sourceFile).trim().replace(/\.pb/g, ""); // Remove ".pb" from import paths
				extractedImports.add(importText);
			} else if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node) || ts.isEnumDeclaration(node)) {
				typeNames.add(node.name.text);
			}
		});

		// Instead of importing all types from the proto-generated file, we import from the generated types directory
		if (typeNames.size > 0) {
			const restImportPath = path.relative(path.dirname(destinationFilePath), path.join("generated/types", relativePath));
			const importStatement = `import { ${Array.from(typeNames).join(", ")} } from "${restImportPath}";`;
			extractedImports.add(importStatement);
		}

		// Build the file with the extracted content
		const result = [...Array.from(extractedImports), ...Array.from(extractedDeclarations)].join("\n\n");

		// Write the extracted content to the destination file if it's not empty and there are declarations (not only imports)
		if (result.trim() !== "" && extractedDeclarations.size > 0) {
			// Ensure output directory exists
			await fs.mkdir(path.dirname(destinationFilePath), { recursive: true });

			// Save the file then run biome fix to remove unused imports and clean up the code
			await writeToFile(destinationFilePath, result);
			await runBiomeFix(destinationFilePath);
		}
	} catch (error) {
		console.error("Error extracting REST library from proto-generated files.", error);
	}
};
