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

enum FrontendScaffolding {
	Vite = 'vite',
	Next = 'next'
}

interface WizardOptions {
	name?: string;
	framework?: FrontendScaffolding;
}

const promptFramework = async () => {
	const { appFramework } = await inquirer.prompt([
		{
			type: 'list',
			name: 'appFramework',
			message: 'Select an app framework to use?',
			choices: Object.values(FrontendScaffolding)
		}
	]);

	return appFramework;
};

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

	if (options.framework) {
		const validFrameworks = Object.values(FrontendScaffolding);
		if (!validFrameworks.includes(options.framework)) {
			console.log(`Invalid Framework '${options.framework}' provided. Framework must be one of: [${validFrameworks.join(', ')}]`);
			valid = false;
		}
	}

	return valid;
};

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

	const appFramework = options.framework || (await promptFramework());

	const templateName = `${appFramework}-template`;
	const templatePath = path.join(__dirname, 'templates', templateName);
	const dst = path.join(process.cwd(), dAppName);
	await fs.promises.cp(templatePath, dst, { recursive: true });

	console.log(`Project setup complete! Using template ${templateName}\n`);
	console.log(`To start your app, run: \n > cd ${dAppName} \n > yarn \n > yarn dev\n`);
}

program
	.command('app')
	.description('Create a new SEI dApp')
	.option('-n, --name <name>', 'Specify the name of your dApp. Name must be a valid package name.')
	.option('-f, --framework <framework>', `Specify the app framework to use: [${Object.values(FrontendScaffolding).join(', ')}]`)
	.action(async (options: WizardOptions) => {
		try {
			await runWizard(options);
		} catch (error) {
			console.error('An error occurred:', error);
		}
	});

program.parse(process.argv);
