import inquirer from 'inquirer';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const exec = promisify(execCallback);

export enum RPCIntegrationType {
	EVM = 'EVM',
	CosmJS = 'CosmJS'
}

export enum FrontendScaffolding {
	Vite = 'Vite',
	NextJs = 'Next.js'
}

export enum EVMLibrary {
	Wagmi = 'wagmi'
}

export const promptRpcIntegrations = async () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'rpcIntegrationType',
			message: 'Select the wallet connection type you want to include:',
			choices: [RPCIntegrationType.EVM, RPCIntegrationType.CosmJS],
			validate: (answer) => {
				if (answer.length < 1) {
					return 'You must choose at least one RPC connection type.';
				}
				return true;
			}
		}
	]);
};

export const promptEVMLibrary = async (rpcIntegrationType: RPCIntegrationType): Promise<{ evmLibrary?: EVMLibrary }> => {
	if (rpcIntegrationType !== RPCIntegrationType.EVM) return {};

	return inquirer.prompt([
		{
			type: 'list',
			name: 'evmLibrary',
			message: 'Choose your preferred EVM library:',
			choices: [EVMLibrary.Wagmi]
		}
	]);
};

const setupEvmLibrary = async (dAppName: string, evmLibrary: EVMLibrary) => {
	switch (evmLibrary) {
		case EVMLibrary.Wagmi:
			await exec(`yarn add wagmi viem@2.x @tanstack/react-query @interchain-ui/react`, {
				cwd: `./${dAppName}`
			});
			console.log('Wagmi library installed successfully.');
			return;
	}
};

const addCosmJSCosmosKitCssImport = async (dAppName: string, frontendScaffolding: FrontendScaffolding) => {
	let appCssPath: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			appCssPath = path.join(dAppName, 'src', 'App.tsx');
			break;
		case FrontendScaffolding.NextJs:
			appCssPath = path.join(dAppName, 'pages', '_app.tsx');
			break;
	}

	const interChainImport = `import '@interchain-ui/react/styles';\n\n`;

	try {
		const currentContent = fs.readFileSync(appCssPath, 'utf-8');
		fs.writeFileSync(appCssPath, interChainImport + currentContent);
		console.log('Tailwind directives added to global css file.');
	} catch (error) {
		console.error('Failed to add Tailwind directives to global css file:', error);
	}
};

export const setupRpcIntegrations = async (
	dAppName: string,
	rpcIntegrations: RPCIntegrationType,
	frontendScaffolding: FrontendScaffolding,
	evmLibrary?: EVMLibrary
) => {
	switch (rpcIntegrations) {
		case RPCIntegrationType.CosmJS:
			await exec(`yarn add @sei-js/cosmjs@0.0.0-internal-evm-20240302031324 cosmos-kit chain-registry @cosmos-kit/react @interchain-ui/react`, {
				cwd: `./${dAppName}`
			});
			await addCosmJSCosmosKitCssImport(dAppName, frontendScaffolding);
			console.log('CosmJS library installed successfully.');
			return;
		case RPCIntegrationType.EVM:
			if (!evmLibrary) {
				throw new Error('EVM library is required for EVM integration!');
			}

			await setupEvmLibrary(dAppName, evmLibrary);
			return;
	}
};
