#!/usr/bin/env node
import inquirer from 'inquirer';
import boxen from 'boxen';

import { promptFrontend, setupFrontend } from './setup/frontend.js';
import { promptEVMLibrary, promptRpcIntegrations, RPCIntegrationType, setupRpcIntegrations } from './setup/rpcIntegrations.js';
import { promptStylingFramework, setupStylingFrameworks } from './setup/stylingFrameworks.js';

import path from 'path';
import fs, { promises } from 'fs';

// Print welcome message
console.log(
	boxen('Welcome to the SEI DApp Generator!', {
		padding: 1,
		margin: 1,
		borderStyle: 'double',
		borderColor: '#932C23'
	})
);

//TODO (P2): Add ability to pass in flags to skip prompts using commander

export const setupWalletConnectButton = async (dAppName: string, rpcIntegrationType: RPCIntegrationType) => {
	const componentsDirPath = path.join(dAppName, 'src', 'components');

	const filePath = path.join(componentsDirPath, 'WalletConnectButton.tsx');

	try {
		await promises.mkdir(componentsDirPath, { recursive: true });

		let templatePath: string;

		switch (rpcIntegrationType) {
			case RPCIntegrationType.CosmJS:
				templatePath = path.join('templates', 'components', 'cosmjs.tsx');
				break;
			case RPCIntegrationType.EVM:
				templatePath = path.join('templates', 'components', 'evm.tsx');
				break;
		}

		if (fs.existsSync(templatePath)) {
			fs.copyFileSync(templatePath, filePath);
			console.log('WalletConnectButton.tsx copied to project successfully.');
		} else {
			fs.writeFileSync(templatePath, filePath);
			console.log('WalletConnectButton.tsx written to project successfully.');
		}
		console.log('WalletConnectButton.tsx created or updated successfully in', componentsDirPath);
	} catch (error) {
		console.error('Error creating WalletConnectButton.tsx:', error);
	}
};

export const setupWalletProvider = async (dAppName: string, rpcIntegrationType: RPCIntegrationType) => {
	try {
		const providersDirPath = path.join(dAppName, 'src', 'providers');

		const filePath = path.join(providersDirPath, 'WalletProvider.tsx');
		await promises.mkdir(providersDirPath, { recursive: true });

		let templatePath: string;
		switch (rpcIntegrationType) {
			case RPCIntegrationType.CosmJS:
				templatePath = path.join('templates', 'providers', 'cosmjs.tsx');
				break;
			case RPCIntegrationType.EVM:
				templatePath = path.join('templates', 'providers', 'evm.tsx');
				break;
			default:
				throw new Error('Invalid RPC Integration Type');
		}

		if (fs.existsSync(templatePath)) {
			fs.copyFileSync(templatePath, filePath);
			console.log('WalletProvider copied to project successfully.');
		} else {
			fs.writeFileSync(templatePath, filePath);
			console.log('WalletProvider written to project successfully.');
		}
	} catch (error) {
		console.error('Error creating WalletProvider:', error);
	}
};

async function runWizard(): Promise<string> {
	const { dAppName } = await inquirer.prompt([
		{
			type: 'input',
			name: 'dAppName',
			message: 'What is your dApp (project) name?',
			validate: (input) => {
				const isValidPackageName = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/.test(input);
				return isValidPackageName || 'Invalid package name. Please use a valid npm package name.';
			}
		}
	]);

	const { frontendScaffolding } = await promptFrontend();
	const { rpcIntegrationType } = await promptRpcIntegrations();
	const { evmLibrary } = await promptEVMLibrary(rpcIntegrationType);
	const { stylingFramework } = await promptStylingFramework();

	await setupFrontend(dAppName, frontendScaffolding, stylingFramework, rpcIntegrationType);
	await setupRpcIntegrations(dAppName, rpcIntegrationType, frontendScaffolding, evmLibrary);
	await setupStylingFrameworks(dAppName, stylingFramework, frontendScaffolding);
	await setupWalletConnectButton(dAppName, rpcIntegrationType);
	await setupWalletProvider(dAppName, rpcIntegrationType);

	return 'Project setup complete!';
}

try {
	runWizard().then(console.log);
} catch (error) {
	console.error('An error occurred:', error);
}
