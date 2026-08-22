#!/usr/bin/env node

import fs from 'node:fs';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import boxen from 'boxen';
import { Command } from 'commander';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const program = new Command();

// Print welcome message
const printWelcomeMessage = () => {
	console.log(
		boxen('Welcome to the SEI DApp Generator!', {
			padding: 1,
			margin: 1,
			borderStyle: 'double',
			borderColor: '#600014'
		})
	);
};

interface WizardOptions {
	name?: string;
	extension?: string;
}

const MAX_NPM_PACKAGE_NAME_LENGTH = 214;
const validNpmProjectNameRe = /^[a-z0-9][a-z0-9._-]*$/;
const windowsReservedNameRe = /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i;

function isValidProjectName(projectName: unknown): projectName is string {
	if (typeof projectName !== 'string' || projectName.length === 0 || projectName.length > MAX_NPM_PACKAGE_NAME_LENGTH) {
		return false;
	}

	if (
		projectName === 'node_modules' ||
		projectName === 'favicon.ico' ||
		projectName.endsWith('.') ||
		windowsReservedNameRe.test(projectName) ||
		!validNpmProjectNameRe.test(projectName)
	) {
		return false;
	}

	return true;
}

const validateOptions = (options: WizardOptions): boolean => {
	let valid = true;

	if (options.name) {
		if (!isValidProjectName(options.name)) {
			console.error('Invalid package name. Please use a valid npm package name.');
			valid = false;
		}
	}

	return valid;
};

const extensionsPath = path.join(__dirname, 'extensions');

async function discoverExtensions(): Promise<string[]> {
	const extensions = await fs.promises.readdir(extensionsPath, { withFileTypes: true });
	return extensions.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);
}

async function listExtensions(): Promise<void> {
	try {
		const extensionDirs = await discoverExtensions();

		if (extensionDirs.length === 0) {
			console.log('No extensions available.');
			return;
		}

		console.log('Available extensions:');
		for (const ext of extensionDirs) {
			console.log(`  - ${ext}`);
		}
	} catch (_error) {
		console.log('No extensions directory found.');
	}
}

function isDirectChildName(name: string): boolean {
	return name.length > 0 && name !== '.' && name !== '..' && !name.includes('/') && !name.includes('\\') && !name.includes('\0');
}

interface ExtensionResolution {
	extension?: { name: string; source: string };
	warning?: string;
}

async function resolveExtension(extension: string | undefined): Promise<ExtensionResolution> {
	if (!extension) {
		return {};
	}

	if (!isDirectChildName(extension)) {
		throw new Error(`Invalid extension '${extension}'. Extensions must be selected by name from list-extensions.`);
	}

	let extensionDirs: string[];
	try {
		extensionDirs = await discoverExtensions();
	} catch (error) {
		if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
			throw error;
		}
		extensionDirs = [];
	}

	if (!extensionDirs.includes(extension)) {
		return { warning: `Warning: Extension '${extension}' not found. Continuing with base template.` };
	}

	return {
		extension: {
			name: extension,
			source: path.join(extensionsPath, extension)
		}
	};
}

async function copyDirectoryContents(source: string, destination: string, overwrite: boolean): Promise<void> {
	const entries = await fs.promises.readdir(source, { withFileTypes: true });

	for (const entry of entries) {
		await fs.promises.cp(path.join(source, entry.name), path.join(destination, entry.name), {
			recursive: true,
			force: overwrite,
			errorOnExist: !overwrite
		});
	}
}

async function writeProjectName(destination: string, projectName: string): Promise<void> {
	const manifestPath = path.join(destination, 'package.json');
	const manifest = JSON.parse(await fs.promises.readFile(manifestPath, 'utf8')) as Record<string, unknown>;
	manifest.name = projectName;
	await fs.promises.writeFile(manifestPath, `${JSON.stringify(manifest, null, '\t')}\n`);
}

async function runWizard(options: WizardOptions): Promise<void> {
	if (!validateOptions(options)) {
		process.exitCode = 1;
		return;
	}

	const extensionResolution = await resolveExtension(options.extension);

	printWelcomeMessage();
	if (extensionResolution.warning) {
		console.warn(extensionResolution.warning);
	}
	const extension = extensionResolution.extension;

	let dAppName = '';
	if (options.name) {
		dAppName = options.name;
	} else {
		const promptResult = await inquirer.prompt([
			{
				type: 'input',
				name: 'dAppName',
				message: 'What is your dApp (project) name?',
				validate: (input: string) => {
					return isValidProjectName(input) || 'Invalid package name. Please use a valid npm package name.';
				}
			}
		]);

		dAppName = promptResult.dAppName;
	}

	// Copy base template
	const templateName = 'next-template';
	const templatePath = path.join(__dirname, 'templates', templateName);
	const dst = path.join(process.cwd(), dAppName);
	let destinationCreated = false;

	try {
		try {
			await fs.promises.mkdir(dst);
			destinationCreated = true;
		} catch (error) {
			if ((error as NodeJS.ErrnoException).code === 'EEXIST') {
				throw new Error(`Destination '${dAppName}' already exists. Choose a different project name.`);
			}
			throw error;
		}

		await copyDirectoryContents(templatePath, dst, false);

		if (extension) {
			await copyDirectoryContents(extension.source, dst, true);
			console.log(`Applied extension: ${extension.name}`);
		}

		await fs.promises.rename(path.join(dst, 'gitignore'), path.join(dst, '.gitignore'));
		await writeProjectName(dst, dAppName);
	} catch (error) {
		if (destinationCreated) {
			await fs.promises.rm(dst, { recursive: true, force: true });
		}
		throw error;
	}

	const extensionText = extension ? ` with ${extension.name} extension` : '';
	console.log(`Project setup complete! Using template ${templateName}${extensionText}\n`);
	console.log(`To start your app, run: \n > cd "./${dAppName}" \n > bun install \n > bun run dev\n`);
}

program
	.command('app')
	.description('Create a new SEI dApp')
	.option('-n, --name <name>', 'Specify the name of your dApp. Name must be a valid package name.')
	.option('--extension <extension>', 'Specify an extension to apply to the base template')

	.action(async (options: WizardOptions) => {
		try {
			await runWizard(options);
		} catch (error) {
			console.error('An error occurred:', error instanceof Error ? error.message : error);
			process.exitCode = 1;
		}
	});

program
	.command('list-extensions')
	.description('List all available extensions')
	.action(async () => {
		try {
			await listExtensions();
		} catch (error) {
			console.error('An error occurred:', error instanceof Error ? error.message : error);
			process.exitCode = 1;
		}
	});

await program.parseAsync(process.argv);
