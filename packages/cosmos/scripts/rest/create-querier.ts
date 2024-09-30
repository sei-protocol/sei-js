import fs from "node:fs";
import path from "node:path";
import { runBiomeFix, writeToFile } from "../common/utils";

// Recursive function to collect all Query exports in subdirectories and construct Querier object
const collectQueriesRecursively = async (
	dir: string,
	rootDir: string,
	importStatements: string[],
	parentNamespace: Record<string, any>,
	currentKey: string,
) => {
	const items = await fs.promises.readdir(dir, { withFileTypes: true });

	const hasQueryFile = items.some((item) => item.isFile() && item.name === "query.ts");

	if (hasQueryFile) {
		// If 'query.ts' exists, import it and assign the alias directly to the parent namespace
		const relativePath = path.relative(rootDir, path.join(dir, "query")).replace(/\\/g, "/");

		// Replace non-alphanumeric characters (like slashes) with underscores
		const alias = path.relative(rootDir, dir).replace(/[^a-zA-Z0-9]/g, "_");

		// Add import statement for the Query from the 'query.ts' file
		importStatements.push(`import { Query as ${alias} } from "./${relativePath}";`);

		// Assign the alias directly to the parent namespace
		parentNamespace[currentKey] = alias;
	} else {
		// Otherwise, create a new namespace and recurse into subdirectories
		const currentNamespace: Record<string, any> = {};
		parentNamespace[currentKey] = currentNamespace;

		for (const item of items) {
			if (item.isDirectory()) {
				const itemPath = path.join(dir, item.name);
				// Recursively process subdirectories
				await collectQueriesRecursively(itemPath, rootDir, importStatements, currentNamespace, item.name);
			}
		}
	}
};

// Function to generate an index file with a Querier object
export const generateQueryIndexFile = async (rootDir: string): Promise<void> => {
	try {
		const querierObject: Record<string, any> = {};
		const importStatements: string[] = [];

		// Start recursively collecting queries from the root directory
		await collectQueriesRecursively(rootDir, rootDir, importStatements, querierObject, "Querier");

		// Extract the constructed Querier object
		const constructedQuerier = querierObject["Querier"];

		// Helper function to format Querier object for export
		const formatQuerierObject = (obj: any, level = 0): string => {
			if (typeof obj === "string") {
				return obj;
			}
			return `{${Object.entries(obj)
				.map(([key, value]) => `${key}: ${formatQuerierObject(value, level + 1)}`)
				.join(",")}}`;
		};

		// Create the content of the index.ts file
		const indexContent = `${importStatements.join("\n")}\n\nexport const Querier = ${formatQuerierObject(constructedQuerier)};`;
		const outputFilePath = path.join(rootDir, "index.ts");
		await writeToFile(outputFilePath, indexContent);
		await runBiomeFix(outputFilePath);
		console.log(`Generated index file at ${outputFilePath}`);
	} catch (error) {
		console.error("Error generating index file:", error);
	}
};
