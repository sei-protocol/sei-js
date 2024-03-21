import util from 'util';
import { exec } from 'child_process';
import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';

const execAsync = util.promisify(exec);

export enum FrontendScaffolding {
	Vite = 'Vite',
	NextJs = 'Next.js'
}

export enum StylingFramework {
	TailwindCSS = 'Tailwind CSS',
	Mantine = 'Mantine',
	CSS = 'CSS'
}

export enum RPCIntegrationType {
	EVM = 'EVM',
	CosmJS = 'CosmJS'
}

export const promptFrontend = async () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'frontendScaffolding',
			message: 'Select a frontend framework to scaffold your project:',
			choices: [FrontendScaffolding.Vite, FrontendScaffolding.NextJs]
		}
	]);
};

const setupViteConfig = async (dAppName: string) => {
	const templatePath = path.join('templates', 'vite', 'config.ts');
	const destinationPath = path.join(dAppName, 'vite.config.ts');

	fs.copyFileSync(templatePath, destinationPath);
	console.log('vite.config.ts copied to project successfully.');
};

const writeMainFile = async (dAppName: string, frontendScaffolding: FrontendScaffolding, stylingFramework: StylingFramework) => {
	let templatePath: string;
	let destinationPath: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			if (stylingFramework === StylingFramework.Mantine) {
				templatePath = path.join('templates', 'vite-main-mantine.tsx');
			} else {
				templatePath = path.join('templates', 'vite-main.tsx');
			}
			destinationPath = path.join(dAppName, 'src', 'main.tsx');
			break;
		case FrontendScaffolding.NextJs:
			templatePath = path.join('templates', 'next-main.tsx');
			destinationPath = path.join(dAppName, 'pages', '_app.tsx');
			break;
	}

	try {
		if (fs.existsSync(templatePath)) {
			fs.copyFileSync(templatePath, destinationPath);
			console.log('main.tsx copied to project successfully.');
		} else {
			fs.writeFileSync(templatePath, destinationPath);
			console.log('main.tsx written to project successfully.');
		}
	} catch (error) {
		console.error('Failed to write main.tsx to project:', error);
	}
};

const setupAppFile = async (
	dAppName: string,
	frontendScaffolding: FrontendScaffolding,
	stylingFramework: StylingFramework,
	rpcIntegrationType: RPCIntegrationType
) => {
	let destinationPath: string;
	let templatePath: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			destinationPath = path.join(dAppName, 'src', 'App.tsx');

			switch (stylingFramework) {
				case StylingFramework.TailwindCSS:
					if (rpcIntegrationType === RPCIntegrationType.EVM) {
						templatePath = path.join('templates', 'vite-app-evm-tailwind.tsx');
					} else {
						templatePath = path.join('templates', 'vite-app-cosmjs-tailwind.tsx');
					}
					break;
				case StylingFramework.Mantine:
					if (rpcIntegrationType === RPCIntegrationType.EVM) {
						templatePath = path.join('templates', 'vite-app-evm-mantine.tsx');
					} else {
						templatePath = path.join('templates', 'vite-app-cosmjs-mantine.tsx');
					}
					break;
				case StylingFramework.CSS:
					if (rpcIntegrationType === RPCIntegrationType.EVM) {
						templatePath = path.join('templates', 'vite-app-evm-css.tsx');
					} else {
						templatePath = path.join('templates', 'vite-app-cosmjs-css.tsx');
					}
					break;
			}
			break;
		case FrontendScaffolding.NextJs:
			//Remove the default index.js file
			fs.unlinkSync(path.join(dAppName, 'pages', 'index.js'));

			destinationPath = path.join(dAppName, 'pages', 'index.tsx');
			switch (stylingFramework) {
				case StylingFramework.TailwindCSS:
					templatePath = path.join('templates', 'next-app-tailwind.tsx');
					break;
				case StylingFramework.Mantine:
					templatePath = path.join('templates', 'next-app-mantine.tsx');
					break;
				case StylingFramework.CSS:
					templatePath = path.join('templates', 'next-app.tsx');
					break;
			}
			break;
	}

	fs.copyFileSync(templatePath, destinationPath);
	console.log('App.tsx copied to project successfully.');
};

const setupGlobalStyles = async (dAppName: string, frontendScaffolding: FrontendScaffolding, stylingFramework: StylingFramework) => {
	let destinationPath: string;
	let templatePath: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			destinationPath = path.join(dAppName, 'src', 'App.css');

			switch (stylingFramework) {
				case StylingFramework.TailwindCSS:
					templatePath = path.join('templates', 'styles', 'defaults-vite.css');
					break;
				case StylingFramework.Mantine:
					templatePath = path.join('templates', 'styles', 'defaults-mantine.css');
					break;
				case StylingFramework.CSS:
					templatePath = path.join('templates', 'styles', 'defaults-vite-css.css');
					break;
			}
			break;
		case FrontendScaffolding.NextJs:
			templatePath = path.join('templates', 'styles', 'defaults-next.css');
			destinationPath = path.join(dAppName, 'styles', 'global.css');
			break;
	}

	fs.copyFileSync(templatePath, destinationPath);
	console.log('Global styles copied to project successfully.');
};

export const setupFrontend = async (
	dAppName: string,
	selectedFramework: FrontendScaffolding,
	stylingFramework: StylingFramework,
	rpcIntegrationType: RPCIntegrationType
) => {
	switch (selectedFramework) {
		case FrontendScaffolding.Vite:
			console.log('Creating Vite project...');
			try {
				await execAsync(`yarn create vite ${dAppName} --template react-ts`);
				break;
			} catch (error) {
				console.error('Failed to create Vite project:', error);
				break;
			}
		case FrontendScaffolding.NextJs:
			console.log('Creating Next.js project...');
			try {
				await execAsync(`npx create-next-app@latest ${dAppName} --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"`);
				break;
			} catch (error) {
				console.error('Failed to create Next.js project:', error);
				break;
			}
	}

	await writeMainFile(dAppName, selectedFramework, stylingFramework);
	await setupAppFile(dAppName, selectedFramework, stylingFramework, rpcIntegrationType);
	await setupViteConfig(dAppName);
	await setupGlobalStyles(dAppName, selectedFramework, stylingFramework);

	await execAsync(`yarn add -D @esbuild-plugins/node-globals-polyfill`, { cwd: `./${dAppName}` });
};
