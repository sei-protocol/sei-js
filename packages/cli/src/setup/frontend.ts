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
	SASSModules = 'SASS Modules',
	None = 'None'
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

const writeMainFile = async (dAppName: string, frontendScaffolding: FrontendScaffolding) => {
	let templatePath: string;
	let destinationPath: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			templatePath = path.join('templates', 'vite-main.tsx');
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

const setupAppFile = async (dAppName: string, frontendScaffolding: FrontendScaffolding, stylingFramework: StylingFramework) => {
	let destinationPath: string;
	let templatePath: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			destinationPath = path.join(dAppName, 'src', 'App.tsx');
			switch (stylingFramework) {
				case StylingFramework.TailwindCSS:
					templatePath = path.join('templates', 'vite-app-tailwind.tsx');
					break;
				case StylingFramework.SASSModules:
					templatePath = path.join('templates', 'vite-app-sass.tsx');
					break;
				case StylingFramework.None:
					templatePath = path.join('templates', 'vite-app.tsx');
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
				case StylingFramework.SASSModules:
					templatePath = path.join('templates', 'next-app-sass.tsx');
					break;
				case StylingFramework.None:
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
				case StylingFramework.SASSModules:
					templatePath = path.join('templates', 'styles', 'defaults-vite.css');
					const sassTemplatePath = path.join('templates', 'styles', 'defaults-vite.module.sass');
					const sassDestinationPath = path.join(dAppName, 'src', 'App.module.sass');
					fs.copyFileSync(sassTemplatePath, sassDestinationPath);
					break;
				case StylingFramework.None:
					templatePath = path.join('templates', 'styles', 'defaults-vite-css.css');
					break;
			}
			break;
		case FrontendScaffolding.NextJs:
			destinationPath = path.join(dAppName, 'styles', 'global.css');
			templatePath = path.join('templates', 'styles', 'defaults-next.css');

			break;
	}

	fs.copyFileSync(templatePath, destinationPath);
	console.log('Global styles copied to project successfully.');
};

export const setupFrontend = async (dAppName: string, selectedFramework: FrontendScaffolding, stylingFramework: StylingFramework) => {
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

	await writeMainFile(dAppName, selectedFramework);
	await setupAppFile(dAppName, selectedFramework, stylingFramework);
	await setupViteConfig(dAppName);
	await setupGlobalStyles(dAppName, selectedFramework, stylingFramework);

	await execAsync(`yarn add -D @esbuild-plugins/node-globals-polyfill`, { cwd: `./${dAppName}` });
};
