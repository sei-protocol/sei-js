import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import { connectToApp as connectAppToCompass, setupWallet as setupCompassWallet } from './compass';
import { connectToApp as connectAppToFin, setupWallet as setupFinWallet } from './fin';
import { COMPASS_LATEST_RELEASE, Extension, FIN_LATEST_RELEASE } from './registry';
import * as path from 'path';
import { promises as fs } from 'fs';

export const initializeWallet = async (driver: WebDriver, extension: Extension) => {
	if (!extension.id) {
		throw new Error('Extension id not found');
	}

	switch (extension.provider) {
		case 'compass':
			let handles = await driver.getAllWindowHandles();
			while (handles.length < 2) {
				await driver.sleep(100);
				handles = await driver.getAllWindowHandles();
			}
			await driver.close(); // Close the original tab
			await driver.switchTo().window(handles[1]); // Switch to the new tab

			await setupCompassWallet(driver, extension.id, 'betray knock armed museum gesture visit vapor text curious stove bomb rate', 'password1234');
			return;
		case 'fin':
			await setupFinWallet(driver, extension.id, 'betray knock armed museum gesture visit vapor text curious stove bomb rate', 'password1234');
			return;
	}
};

export const approveAppConnection = async (driver: WebDriver, extension: Extension) => {
	try {
		switch (extension.provider) {
			case 'compass':
				return await connectAppToCompass(driver, true);
			case 'fin':
				return await connectAppToFin(driver, true);
		}
	} catch (e) {
		console.log('error', e);
	}
};

export const switchToExtensionWindow = async (driver: WebDriver) => {
	const originalWindow = await driver.getWindowHandle();

	// Wait for the new window or tab
	await driver.wait(async () => (await driver.getAllWindowHandles()).length > 1, 10000, 'New window did not open in time');
	await driver.sleep(2000);

	// Loop through until we find a new window handle
	let handles = await driver.getAllWindowHandles();
	for (const handle of handles) {
		if (handle !== originalWindow) {
			await driver.switchTo().window(handle);
			break;
		}
	}
};

const createTempDir = async (dirPath: string): Promise<void> => {
	try {
		await fs.mkdir(dirPath, { recursive: true });
	} catch (err) {
		console.error(`Failed to create directory: ${err}`);
	}
};

const fileExists = async (filePath: string): Promise<boolean> => {
	try {
		const stats = await fs.stat(filePath);
		return stats.isDirectory();
	} catch (err) {
		return false;
	}
};

const getExtensionIds = async (userDataDir: string): Promise<string[]> => {
	const extensionsDir = path.join(userDataDir, 'Default', 'Local Extension Settings');
	let extensionIds: string[] = [];

	try {
		const doesDirExist = await fileExists(extensionsDir);
		if (doesDirExist) {
			extensionIds = await fs.readdir(extensionsDir);
		}
	} catch (err) {
		console.error(`Could not read directory: ${err}`);
	}

	return extensionIds;
};

const test = async (extension: Extension) => {
	const dirPath = path.resolve(__dirname, './instance-data');
	await fs.rm(dirPath, { recursive: true, force: true });

	const userDataDir = path.resolve(__dirname, './instance-data');

	await createTempDir(userDataDir);
	let options = new chrome.Options();

	options.addExtensions(extension.path);
	options.addArguments(`user-data-dir=${userDataDir}`);
	let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

	let extensionIds = await getExtensionIds(userDataDir);
	while (extensionIds.length === 0) {
		await driver.sleep(250);
		extensionIds = await getExtensionIds(userDataDir);
	}

	extension.id = extensionIds[0];

	try {
		await initializeWallet(driver, extension);

		await driver.get('https://app.sei.io');

		const checkbox = await driver.wait(until.elementLocated(By.xpath("//input[@type='checkbox']")), 100000);
		await driver.wait(until.elementIsVisible(checkbox), 5000);
		await checkbox.click();

		const agreeButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Agree')]")), 100000);
		await driver.wait(until.elementIsVisible(agreeButton), 5000);
		await agreeButton.click();

		const connectWalletButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'connect wallet')]")), 100000);
		await driver.wait(until.elementIsVisible(connectWalletButton), 5000);
		await connectWalletButton.click();

		const finButton = await driver.wait(until.elementLocated(By.xpath(`//p[contains(text(), '${extension.name}')]`)), 100000);
		await driver.wait(until.elementIsVisible(finButton), 5000);
		await finButton.click();

		await switchToExtensionWindow(driver);

		await approveAppConnection(driver, extension);
		await driver.switchTo().defaultContent();
	} catch (e) {
		console.error('ERROR', e);
	} finally {
		console.log('FINALLY');
		await driver.sleep(10000);
	}
};

test(FIN_LATEST_RELEASE);
