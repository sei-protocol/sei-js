import { promises } from 'fs';
import path from 'path';
import fs from 'fs';

export const setupWalletConnectButton = async (dAppName: string) => {
	const componentsDirPath = path.join(dAppName, 'src', 'components');

	const filePath = path.join(componentsDirPath, 'WalletConnectButton.tsx');

	try {
		await promises.mkdir(componentsDirPath, { recursive: true });

		const templatePath = path.join('templates', 'components', 'WalletConnectButton.tsx');

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
