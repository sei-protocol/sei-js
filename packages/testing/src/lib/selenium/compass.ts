import { By, until, WebDriver } from 'selenium-webdriver';

export const setupWallet = async (driver: WebDriver, extensionId: string, seedPhrase: string, password: string) => {
	await driver.get(`chrome-extension://${extensionId}/tabs/welcome.html`);

	const createWalletButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Restore a wallet')]")), 100000);
	await driver.wait(until.elementIsVisible(createWalletButton), 5000);
	await createWalletButton.click();

	const passwordInput = await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Enter your new password']")), 100000);
	await driver.wait(until.elementIsVisible(passwordInput), 5000);
	await passwordInput.click();
	await passwordInput.sendKeys(password);

	const confirmPasswordInput = await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Re-enter your new password']")), 100000);
	await driver.wait(until.elementIsVisible(confirmPasswordInput), 5000);
	await confirmPasswordInput.click();
	await confirmPasswordInput.sendKeys(password);

	const checkBox = await driver.wait(until.elementLocated(By.xpath('//*[@id="__plasmo"]/main/div/div/div[2]/form/div[3]/div/div')), 100000);
	await driver.wait(until.elementIsVisible(checkBox), 5000);
	await checkBox.click();

	const createPasswordButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Create Password')]")), 100000);
	await driver.wait(until.elementIsVisible(createPasswordButton), 5000);
	await createPasswordButton.click();

	const restoreWalletButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Restore a wallet')]")), 100000);
	await driver.wait(until.elementIsVisible(restoreWalletButton), 5000);
	await restoreWalletButton.click();

	const passphraseButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Using a passphrase')]")), 100000);
	await driver.wait(until.elementIsVisible(passphraseButton), 5000);
	await passphraseButton.click();

	const seedPhraseInput = await driver.wait(until.elementLocated(By.xpath("//textarea[@placeholder='cake pizza cat...']")), 100000);
	await driver.wait(until.elementIsVisible(seedPhraseInput), 5000);
	await seedPhraseInput.click();
	await seedPhraseInput.sendKeys(seedPhrase);
};

export const confirmTransaction = async (driver: WebDriver, confirm = true) => {
	//Confirm or reject transaction
};

export const unlockWallet = async (driver: WebDriver, password: string) => {
	//Unlock wallet with password
};
