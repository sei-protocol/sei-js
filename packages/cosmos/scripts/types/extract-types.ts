import { promises as fs } from "node:fs";
import path from "node:path";
import ts from "typescript";
import { readSourceFile, runBiomeFix, traverseNodes, writeToFile } from "../common/utils";

// These get included in the proto registry for other functions, but are not necessary
const EXCLUDED_TYPES = new Set([
	"Builtin",
	"DeepPartial",
	"Exact",
	"KeysOfUnion",
	"MessageFns",
	"InitReq",
	"NotifyStreamEntityArrival",
	"JSONStringStreamController",
	"Primitive",
	"RequestPayload",
	"FlattenedRequestPayload",
]);

export const extractTypes = async (sourceFilePath: string, destinationFilePath: string): Promise<void> => {
	try {
		const sourceFile = await readSourceFile(sourceFilePath);

		const extractedDeclarations: string[] = [];
		const extractedImports: string[] = [];

		traverseNodes(sourceFile, (node: ts.Node) => {
			if (ts.isImportDeclaration(node)) {
				// ts-proto uses pb imports, we remove the .pb extension
				const importText = node.getText(sourceFile).trim().replace(".pb", "");
				extractedImports.push(importText);
			}
			// Grab all type aliases, interfaces, and enums from the source file
			else if (ts.isTypeAliasDeclaration(node) || ts.isInterfaceDeclaration(node) || ts.isEnumDeclaration(node)) {
				// We exclude some types that are not needed because those functions are only used in the @sei-js/encoding package
				if (!EXCLUDED_TYPES.has(node.name.text)) {
					const nodeText = node.getText(sourceFile).trim();
					// ts-proto adds `| undefined` to optional fields, this removes it as it's redundant
					const noOrUndefinedText = nodeText.replace(/ \| undefined/g, "");
					extractedDeclarations.push(noOrUndefinedText);
				}
			}
		});

		// Rebuild the file with the extracted types and imports if any were found
		if (extractedImports.length > 0 || extractedDeclarations.length > 0) {
			const result = [...extractedImports, ...extractedDeclarations].join("\n\n");

			// Ensure output directory exists
			await fs.mkdir(path.dirname(destinationFilePath), { recursive: true });

			// Save the file then run biome fix to remove unused imports and clean up the code
			await writeToFile(destinationFilePath, result);
			await runBiomeFix(destinationFilePath);
		}
	} catch (error) {
		console.error("Error extracting types from proto generated files:", error);
	}
};
