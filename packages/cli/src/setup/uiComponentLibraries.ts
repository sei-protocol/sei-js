import inquirer from 'inquirer';
import util from 'util';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';

const execAsync = util.promisify(exec);

export enum FrontendScaffolding {
	Vite = 'Vite',
	NextJs = 'Next.js'
}

export enum UIComponentLibrary {
	Mantine = 'Mantine',
	ShadcnUI = 'shadcn/ui',
	None = 'None'
}

export const promptUIComponentLibrary = async () => {
	return inquirer.prompt([
		{
			type: 'list',
			name: 'uiComponentLibrary',
			message: 'Do you want to integrate a UI Component Library? These libraries help for fast, consistent, and accessible UI development?',
			choices: [UIComponentLibrary.None, UIComponentLibrary.Mantine, UIComponentLibrary.ShadcnUI]
		}
	]);
};

const writeAppFile = async (dAppName: string) => {
	const templatePath = path.join('templates', 'app.tsx');
	const destinationPath = path.join(dAppName, 'src', 'App.tsx');

	try {
		if (fs.existsSync(templatePath)) {
			fs.copyFileSync(templatePath, destinationPath);
			console.log('App.tsx copied to project successfully.');
		} else {
			fs.writeFileSync(templatePath, destinationPath);
			console.log('App.tsx written to project successfully.');
		}
	} catch (error) {
		console.error('Failed to write main.tsx to project:', error);
	}
};

const addPostCssConfig = async (dAppName: string) => {
	const templatePath = path.join('templates', 'postcss', 'config.ts');
	const destinationPath = path.join(dAppName, 'postcss.config.cjs');

	if (fs.existsSync(templatePath)) {
		fs.copyFileSync(templatePath, destinationPath);
		console.log('tailwind.config.js copied to project successfully.');
	} else {
		fs.writeFileSync(templatePath, destinationPath);
		console.log('tailwind.config.js written to project successfully.');
	}
};

export const setupUIComponentLibrary = async (dAppName: string, selectedLibrary: UIComponentLibrary) => {
	switch (selectedLibrary) {
		case UIComponentLibrary.Mantine:
			console.log('Installing Mantine...');
			try {
				await execAsync(`yarn add @mantine/core @mantine/hooks`, { cwd: `./${dAppName}` });
				await execAsync(`yarn add --dev postcss postcss-preset-mantine postcss-simple-vars`, { cwd: `./${dAppName}` });
				await addPostCssConfig(dAppName);
				await writeAppFile(dAppName);
				console.log('Mantine installed successfully.');
			} catch (error) {
				console.error('Failed to install Mantine:', error);
			}
			break;
	}
};
