import { By, Locator, until, WebDriver } from 'selenium-webdriver';

const WAIT_TIME = 50000;
const INITIAL_LOAD_TIME = 1500;
const INTERACTION_DELAY_TIME = 250;

const naturallyFindAndClick = async (driver: WebDriver, locator: Locator) => {
	const item = await driver.wait(until.elementLocated(locator), WAIT_TIME);
	await driver.wait(until.elementIsVisible(item), WAIT_TIME);
	await driver.sleep(INTERACTION_DELAY_TIME);
	await item.click();
	return item;
};

export const setupWallet = async (driver: WebDriver, extensionId: string, seedPhrase: string, password: string) => {
	await driver.sleep(INITIAL_LOAD_TIME);

	await naturallyFindAndClick(driver, By.css("[data-testing-id='import-seed-phrase']"));

	const seedPhraseInput = await naturallyFindAndClick(driver, By.css("[data-testing-id='enter-phrase']"));
	await seedPhraseInput.sendKeys(seedPhrase);

	await naturallyFindAndClick(driver, By.css("[data-testing-id='btn-import-wallet']"));

	await naturallyFindAndClick(driver, By.css("[data-testing-id='wallet-1']"));

	await naturallyFindAndClick(driver, By.css("[data-testing-id='btn-select-wallet-proceed']"));

	const passwordInput = await naturallyFindAndClick(driver, By.css("[data-testing-id='input-password']"));
	await passwordInput.sendKeys(password);

	const confirmPasswordInput = await naturallyFindAndClick(driver, By.css("[data-testing-id='input-confirm-password']"));
	await confirmPasswordInput.sendKeys(password);

	await naturallyFindAndClick(driver, By.css("[data-testing-id='btn-password-proceed']"));

	driver.wait(until.elementLocated(By.css("[data-testing-id='ready-wallet-ele']")), WAIT_TIME);
};

export const connectToApp = async (driver: WebDriver, connect = true) => {
	if (connect) {
		return await naturallyFindAndClick(driver, By.xpath("//*[contains(text(), 'Connect')]"));
	} else {
		return await naturallyFindAndClick(driver, By.xpath("//*[contains(text(), 'Cancel')]"));
	}
};

export const confirmTransaction = async (driver: WebDriver, confirm = true) => {
	//Confirm or reject transaction
};

export const unlockWallet = async (driver: WebDriver, password: string) => {
	//Unlock wallet with password
};
