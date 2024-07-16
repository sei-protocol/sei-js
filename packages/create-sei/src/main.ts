#!/usr/bin/env node
import inquirer from 'inquirer';
import boxen from 'boxen';

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Print welcome message
console.log(
	boxen('Welcome to the SEI DApp Generator!', {
		padding: 1,
		margin: 1,
		borderStyle: 'double',
		borderColor: '#932C23'
	})
);

enum FrontendScaffolding {
	Vite = 'vite',
	Next = 'next'
}

export enum RPCIntegrationType {
	EVM = 'evm',
	CosmJS = 'cosmos'
}

export enum EVMLibrary {
	Wagmi = 'wagmi'
}

const promptFramework = async () => {
	const {appFramework} = await inquirer.prompt([
		{
			type: 'list',
			name: 'appFramework',
			message: 'Select an app framework to use?',
			choices: [FrontendScaffolding.Vite, FrontendScaffolding.Next]
		}
	]);

	return appFramework;
}

const promptRpcIntegrations = async () => {
	const {rpcIntegrationType} = await inquirer.prompt([
		{
			type: 'list',
			name: 'rpcIntegrationType',
			message: 'Select the wallet connection type you want to include:',
			choices: [RPCIntegrationType.EVM, RPCIntegrationType.CosmJS]
		}
	]);

	return rpcIntegrationType;
};

const promptEVMLibrary = async () => {
	const {evmLibrary} = await inquirer.prompt([
		{
			type: 'list',
			name: 'evmLibrary',
			message: 'Choose your preferred EVM library:',
			choices: [EVMLibrary.Wagmi]
		}
	]);

	return evmLibrary;
};

//TODO (P2): Add ability to pass in flags to skip prompts using commander

async function runWizard(): Promise<void> {

	const { dAppName } = await inquirer.prompt([
		{
			type: 'input',
			name: 'dAppName',
			message: 'What is your dApp (project) name?',
			validate: (input: string) => {
				const isValidPackageName = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/.test(input);
				return isValidPackageName || 'Invalid package name. Please use a valid npm package name.';
			}
		}
	]);

	const appFramework = await promptFramework();
	let appConnectionType = await promptRpcIntegrations();
	if (appConnectionType == RPCIntegrationType.EVM) {
		appConnectionType = await promptEVMLibrary();
	}

	const templateName = `${appFramework}-${appConnectionType}-template`;
	const templatePath = path.join(__dirname, 'templates', templateName)
	const dst = path.join(process.cwd(), dAppName)
	await fs.promises.cp(templatePath,  dst, {recursive: true})

	console.log('Project setup complete!\n');
	console.log(`To start your app, run: \n > cd ${dAppName} \n > yarn \n > yarn dev\n`);
}

(async () => {
	try {
		await runWizard()
	} catch (error) {
		console.error('An error occurred:', error);
	}
})();

