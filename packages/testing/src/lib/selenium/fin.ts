import { By, until, WebDriver } from 'selenium-webdriver';

const WAIT_TIME = 5000;
export const setupWallet = async (driver: WebDriver, extensionId: string, seedPhrase: string, password: string) => {
	await driver.get(`chrome-extension://${extensionId}/tabs/welcome.html`);

	const createWalletButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Restore a wallet')]")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(createWalletButton), WAIT_TIME);
	await driver.sleep(1000);
	await createWalletButton.click();

	const passwordInput = await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Enter your new password']")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(passwordInput), WAIT_TIME);
	await passwordInput.click();
	await passwordInput.sendKeys(password);

	const confirmPasswordInput = await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Re-enter your new password']")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(confirmPasswordInput), WAIT_TIME);
	await confirmPasswordInput.click();
	await confirmPasswordInput.sendKeys(password);

	const checkBox = await driver.wait(until.elementLocated(By.xpath('//*[@id="__plasmo"]/main/div/div/div[2]/form/div[3]/div/div')), WAIT_TIME);
	await driver.wait(until.elementIsVisible(checkBox), WAIT_TIME);
	await checkBox.click();

	const createPasswordButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Create Password')]")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(createPasswordButton), WAIT_TIME);
	await createPasswordButton.click();

	const restoreWalletButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Restore a wallet')]")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(restoreWalletButton), WAIT_TIME);
	await restoreWalletButton.click();

	// const passphraseButton = await driver.wait(until.elementLocated(By.xpath('//*[@id="__plasmo"]/main/div[2]/div/div[2]/div[1]/div/div[2]/div')), 100000);
	const passphraseButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Using a passphrase / private key')]")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(passphraseButton), WAIT_TIME);
	await passphraseButton.click();

	const seedPhraseInput = await driver.wait(until.elementLocated(By.xpath("//textarea[@placeholder='cake pizza cat...']")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(seedPhraseInput), WAIT_TIME);
	await seedPhraseInput.click();
	await seedPhraseInput.sendKeys(seedPhrase);

	const restoreButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Restore')]")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(restoreButton), WAIT_TIME);
	await restoreButton.click();

	const clearButton = await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Clear')]")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(clearButton), WAIT_TIME);
	await clearButton.click();

	const nameInput = await driver.wait(until.elementLocated(By.xpath("//input[@value='']")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(nameInput), WAIT_TIME);
	await nameInput.click();
	await nameInput.sendKeys('Automated Wallet');

	const startUsingButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Start Using')]")), WAIT_TIME);
	await driver.wait(until.elementIsVisible(startUsingButton), WAIT_TIME);
	await startUsingButton.click();
};

export const connectToApp = async (driver: WebDriver, connect = true) => {
	if (connect) {
		const connectButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Connect')]")), WAIT_TIME);
		await driver.wait(until.elementIsVisible(connectButton), WAIT_TIME);
		await connectButton.click();
	} else {
		const rejectButton = await driver.wait(until.elementLocated(By.xpath("//button[contains(text(), 'Reject')]")), WAIT_TIME);
		await driver.wait(until.elementIsVisible(rejectButton), WAIT_TIME);
		await rejectButton.click();
	}
};

export const confirmTransaction = async (driver: WebDriver, confirm = true) => {
	//Confirm or reject transaction
};

export const unlockWallet = async (driver: WebDriver, password: string) => {
	//Unlock wallet with password
};
