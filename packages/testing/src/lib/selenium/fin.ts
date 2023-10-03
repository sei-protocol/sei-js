import { By, Locator, until, WebDriver } from 'selenium-webdriver';

const WAIT_TIME = 5000;
const INITIAL_LOAD_TIME = 4500;
const INTERACTION_DELAY_TIME = 300;

const naturallyFindAndClick = async (driver: WebDriver, locator: Locator) => {
	const item = await driver.wait(until.elementLocated(locator), WAIT_TIME);
	await driver.wait(until.elementIsVisible(item), WAIT_TIME);
	await driver.sleep(INTERACTION_DELAY_TIME);
	await item.click();
	await driver.sleep(INTERACTION_DELAY_TIME);
	return item;
};

export const setupWallet = async (driver: WebDriver, extensionId: string, seedPhrase: string, password: string) => {
	await driver.get(`chrome-extension://${extensionId}/tabs/welcome.html`);
	await driver.sleep(INITIAL_LOAD_TIME);

	await naturallyFindAndClick(driver, By.xpath("//*[contains(text(), 'Restore a wallet')]"));

	const passwordInput = await naturallyFindAndClick(driver, By.xpath("//input[@placeholder='Enter your new password']"));
	await passwordInput.sendKeys(password);

	const confirmPasswordInput = await naturallyFindAndClick(driver, By.xpath("//input[@placeholder='Re-enter your new password']"));
	await confirmPasswordInput.sendKeys(password);

	await naturallyFindAndClick(driver, By.xpath('//*[@id="__plasmo"]/main/div/div/div[2]/form/div[3]/div/div'));

	await naturallyFindAndClick(driver, By.xpath("//*[contains(text(), 'Create Password')]"));

	await naturallyFindAndClick(driver, By.xpath("//*[contains(text(), 'Using a passphrase / private key')]"));

	const seedPhraseInput = await naturallyFindAndClick(driver, By.xpath("//textarea[@placeholder='cake pizza cat...']"));
	await seedPhraseInput.sendKeys(seedPhrase);

	await naturallyFindAndClick(driver, By.xpath("//button[contains(text(), 'Restore')]"));

	await naturallyFindAndClick(driver, By.xpath("//*[contains(text(), 'Clear')]"));

	const nameInput = await naturallyFindAndClick(driver, By.xpath("//input[@value='']"));
	await nameInput.sendKeys('Automated Wallet');

	await naturallyFindAndClick(driver, By.xpath("//button[contains(text(), 'Start Using')]"));
};

export const connectToApp = async (driver: WebDriver, connect = true) => {
	if (connect) {
		return await naturallyFindAndClick(driver, By.xpath("//button[contains(text(), 'Connect')]"));
	} else {
		return await naturallyFindAndClick(driver, By.xpath("//button[contains(text(), 'Reject')]"));
	}
};

export const confirmTransaction = async (driver: WebDriver, confirm = true) => {
	//Confirm or reject transaction
};

export const unlockWallet = async (driver: WebDriver, password: string) => {
	//Unlock wallet with password
};
