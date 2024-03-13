import inquirer from 'inquirer';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import * as fs from 'fs';
import { FrontendScaffolding } from './frontend.js';

const exec = promisify(execCallback);

export enum StylingFramework {
	TailwindCSS = 'Tailwind CSS',
	SASSModules = 'SASS Modules',
	None = 'None'
}

export const promptStylingFramework = async () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'stylingFramework',
			message: 'Do you want any pre-installed styling framework?',
			choices: [StylingFramework.None, StylingFramework.TailwindCSS, StylingFramework.SASSModules]
		}
	]);
};

const addTailwindDirectivesToAppCSS = async (dAppName: string, frontendScaffolding: FrontendScaffolding) => {
	let appCssPath: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			appCssPath = path.join(dAppName, 'src', 'App.css');
			break;
		case FrontendScaffolding.NextJs:
			appCssPath = path.join(dAppName, 'styles', 'global.css');
			break;
	}

	const tailwindDirectives = `@tailwind base;
@tailwind components;
@tailwind utilities;

#root {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}`;

	try {
		fs.writeFileSync(appCssPath, tailwindDirectives);
		console.log('Tailwind directives added to global css file.');
	} catch (error) {
		console.error('Failed to add Tailwind directives to global css file:', error);
	}
};

const addTailwindConfig = async (dAppName: string, frontendScaffolding: FrontendScaffolding) => {
	let tailwindConfigFileName: string;

	switch (frontendScaffolding) {
		case FrontendScaffolding.Vite:
			tailwindConfigFileName = `config-vite.ts`;
			break;
		case FrontendScaffolding.NextJs:
			tailwindConfigFileName = `config-nextjs.ts`;
			break;
	}

	const templatePath = path.join('templates', 'tailwind', tailwindConfigFileName);
	const destinationPath = path.join(dAppName, 'tailwind.config.js');

	fs.copyFileSync(templatePath, destinationPath);
	console.log('tailwind.config.js copied to project successfully.');
};

export const setupStylingFrameworks = async (dAppName: string, selectedFramework: StylingFramework, frontendScaffolding: FrontendScaffolding) => {
	switch (selectedFramework) {
		case StylingFramework.TailwindCSS:
			await exec(`yarn add -D tailwindcss postcss autoprefixer`, { cwd: `./${dAppName}` });
			await exec(`npx tailwindcss init -p`, { cwd: `./${dAppName}` });
			await addTailwindDirectivesToAppCSS(dAppName, frontendScaffolding);
			await addTailwindConfig(dAppName, frontendScaffolding);
			return;
		case StylingFramework.SASSModules:
			await exec(`yarn add -D sass`, { cwd: `./${dAppName}` });
			return;
		case StylingFramework.None:
			return;
	}
};
