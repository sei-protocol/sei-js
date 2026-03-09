import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import boxen from "boxen";
import inquirer from "inquirer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface WizardOptions {
	name?: string;
	extension?: string;
}

// Print welcome message
export const printWelcomeMessage = () => {
	console.log(
		boxen("Welcome to the SEI DApp Generator!", {
			padding: 1,
			margin: 1,
			borderStyle: "double",
			borderColor: "#932C23",
		}),
	);
};

export function isValidDirectoryName(dirName: string) {
	const illegalRe = /[<>:"/\\|?*]/g;
	const windowsReservedRe = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
	const trailingRe = /[. ]+$/;
	const validNpmPackageRe =
		/^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;

	if (typeof dirName !== "string" || dirName.length === 0) {
		return false;
	}

	// Check for illegal characters, Windows reserved names, trailing spaces/dots
	if (
		illegalRe.test(dirName) ||
		windowsReservedRe.test(dirName) ||
		trailingRe.test(dirName) ||
		!validNpmPackageRe.test(dirName)
	) {
		return false;
	}

	return true;
}

export const validateOptions = (options: WizardOptions): boolean => {
	let valid = true;

	if (options.name) {
		if (!isValidDirectoryName(options.name)) {
			console.log("Invalid package name. Please use a valid npm package name.");
			valid = false;
		}
	}

	return valid;
};

export async function listExtensions(baseDir = __dirname): Promise<void> {
	const extensionsPath = path.join(baseDir, "extensions");

	try {
		const extensions = await fs.promises.readdir(extensionsPath, {
			withFileTypes: true,
		});
		const extensionDirs = extensions
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => dirent.name);

		if (extensionDirs.length === 0) {
			console.log("No extensions available.");
			return;
		}

		console.log("Available extensions:");
		for (const ext of extensionDirs) {
			console.log(`  - ${ext}`);
		}
	} catch {
		console.log("No extensions directory found.");
	}
}

export async function runWizard(
	options: WizardOptions,
	baseDir = __dirname,
): Promise<void> {
	if (!validateOptions(options)) {
		return;
	}

	printWelcomeMessage();

	let dAppName = "";
	if (options.name) {
		dAppName = options.name;
	} else {
		const promptResult = await inquirer.prompt([
			{
				type: "input",
				name: "dAppName",
				message: "What is your dApp (project) name?",
				validate: (input: string) => {
					return (
						isValidDirectoryName(input) ||
						"Invalid package name. Please use a valid npm package name."
					);
				},
			},
		]);

		dAppName = promptResult.dAppName;
	}

	// Copy base template
	const templateName = "next-template";
	const templatePath = path.join(baseDir, "templates", templateName);
	const dst = path.join(process.cwd(), dAppName);
	await fs.promises.cp(templatePath, dst, { recursive: true });

	// Apply extension if specified
	if (options.extension) {
		const extensionPath = path.join(baseDir, "extensions", options.extension);

		try {
			await fs.promises.access(extensionPath);
			await fs.promises.cp(extensionPath, dst, { recursive: true });
			console.log(`Applied extension: ${options.extension}`);
		} catch {
			console.log(
				`Warning: Extension '${options.extension}' not found. Continuing with base template.`,
			);
		}
	}

	const extensionText = options.extension
		? ` with ${options.extension} extension`
		: "";
	console.log(
		`Project setup complete! Using template ${templateName}${extensionText}\n`,
	);
	console.log(
		`To start your app, run: \n > cd ${dAppName} \n > bun install \n > bun dev\n`,
	);
}
