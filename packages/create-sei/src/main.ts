#!/usr/bin/env node
import boxen from 'boxen';
import inquirer from 'inquirer';

import fs from 'node:fs';
import path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Command } from 'commander';

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
			borderColor: '#932C23'
		})
	);
};

interface WizardOptions {
	name?: string;
	extension?: string;
}

function isValidDirectoryName(dirName) {
	const illegalRe = /[<>:"/\\|?*]/g;
	const windowsReservedRe = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
	const trailingRe = /[. ]+$/;
	const validNpmPackageRe = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/;

	if (typeof dirName !== 'string' || dirName.length === 0) {
		return false;
	}

	// Check for illegal characters, Windows reserved names, trailing spaces/dots
	if (illegalRe.test(dirName) || windowsReservedRe.test(dirName) || trailingRe.test(dirName) || !validNpmPackageRe.test(dirName)) {
		return false;
	}

	return true;
}

const validateOptions = (options: WizardOptions): boolean => {
	let valid = true;

	if (options.name) {
		if (!isValidDirectoryName(options.name)) {
			console.log('Invalid package name. Please use a valid npm package name.');
			valid = false;
		}
	}

	return valid;
};

async function listExtensions(): Promise<void> {
	const extensionsPath = path.join(__dirname, 'extensions');

	try {
		const extensions = await fs.promises.readdir(extensionsPath, { withFileTypes: true });
		const extensionDirs = extensions.filter((dirent) => dirent.isDirectory()).map((dirent) => dirent.name);

		if (extensionDirs.length === 0) {
			console.log('No extensions available.');
			return;
		}

		console.log('Available extensions:');
		for (const ext of extensionDirs) {
			console.log(`  - ${ext}`);
		}
	} catch (error) {
		console.log('No extensions directory found.');
	}
}

async function runWizard(options: WizardOptions): Promise<void> {
	if (!validateOptions(options)) {
		return;
	}

	printWelcomeMessage();

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
					return isValidDirectoryName(input) || 'Invalid package name. Please use a valid npm package name.';
				}
			}
		]);

		dAppName = promptResult.dAppName;
	}

	// Copy base template
	const templateName = 'next-template';
	const templatePath = path.join(__dirname, 'templates', templateName);
	const dst = path.join(process.cwd(), dAppName);
	await fs.promises.cp(templatePath, dst, { recursive: true });

	// Apply extension if specified
	if (options.extension) {
		const extensionPath = path.join(__dirname, 'extensions', options.extension);

		try {
			await fs.promises.access(extensionPath);
			await fs.promises.cp(extensionPath, dst, { recursive: true });
			console.log(`Applied extension: ${options.extension}`);
		} catch (error) {
			console.log(`Warning: Extension '${options.extension}' not found. Continuing with base template.`);
		}
	}

	const extensionText = options.extension ? ` with ${options.extension} extension` : '';
	console.log(`Project setup complete! Using template ${templateName}${extensionText}\n`);
	console.log(`To start your app, run: \n > cd ${dAppName} \n > pnpm \n > pnpm dev\n`);
}

program
	.command('app')
	.description('Create a new SEI dApp')
	.option('--name <name>', 'Specify the name of your dApp. Name must be a valid package name.')
	.option('--extension <extension>', 'Specify an extension to apply to the base template')

	.action(async (options: WizardOptions) => {
		try {
			await runWizard(options);
		} catch (error) {
			console.error('An error occurred:', error);
		}
	});

program
	.command('list-extensions')
	.description('List all available extensions')
	.action(async () => {
		try {
			await listExtensions();
		} catch (error) {
			console.error('An error occurred:', error);
		}
	});

program.parse(process.argv);
