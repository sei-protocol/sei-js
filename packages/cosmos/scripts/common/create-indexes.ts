import { promises } from "node:fs";
import path from "node:path";

const createIndexFile = async (dirPath: string): Promise<void> => {
	try {
		const files = await promises.readdir(dirPath);
		const tsFiles = files.filter((file) => file.endsWith(".ts") && file !== "index.ts");

		if (tsFiles.length === 0) return;

		// Generate export statements for each file in the directory
		const exports = tsFiles.map((file) => {
			const fileNameWithoutExt = path.basename(file, ".ts");
			return `export * from './${fileNameWithoutExt}';`;
		});

		const indexFilePath = path.join(dirPath, "index.ts");
		await promises.writeFile(indexFilePath, `// @ts-nocheck\n\n${exports.join("\n")}`, "utf-8");
	} catch (error) {
		console.error(`Error processing directory ${dirPath}:`, error);
	}
};

export const createIndexesForDirectory = async (rootDir: string): Promise<void> => {
	try {
		const items = await promises.readdir(rootDir, { withFileTypes: true });
		for (const item of items) {
			const itemPath = path.join(rootDir, item.name);
			if (item.isDirectory()) {
				// Recursively check subdirectories
				await createIndexesForDirectory(itemPath);
				await createIndexFile(itemPath);
			}
		}
	} catch (error) {
		console.error(`Error iterating through ${rootDir}:`, error);
	}
};
