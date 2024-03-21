import inquirer from 'inquirer';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import * as fs from 'fs';
import { FrontendScaffolding } from './frontend.js';

const exec = promisify(execCallback);

export enum StylingFramework {
	TailwindCSS = 'Tailwind CSS',
	Mantine = 'Mantine',
	CSS = 'CSS'
}

export const promptStylingFramework = async () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'stylingFramework',
			message: 'Do you want any pre-installed styling framework?',
			choices: [StylingFramework.Mantine, StylingFramework.TailwindCSS, StylingFramework.CSS]
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
`;

	try {
		// Read existing content
		let existingContent = '';
		if (fs.existsSync(appCssPath)) {
			existingContent = fs.readFileSync(appCssPath, 'utf8');
		}

		// Concatenate Tailwind directives with existing content
		const newContent = tailwindDirectives + existingContent;

		// Write new content back to the file
		fs.writeFileSync(appCssPath, newContent);

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
		case StylingFramework.Mantine:
			await exec(`yarn add @mantine/core @mantine/hooks`, { cwd: `./${dAppName}` });
			await exec(`yarn add --dev postcss postcss-preset-mantine postcss-simple-vars`, { cwd: `./${dAppName}` });
			return;
		case StylingFramework.CSS:
			return;
	}
};
