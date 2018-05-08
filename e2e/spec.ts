import {Builder, ThenableWebDriver, By} from 'selenium-webdriver';
import { assert } from 'chai';

const createDriver = (wd: ThenableWebDriver) => {
	return {
		value: async () => {
			const rawValue = await wd.findElement(By.css('.counter .value')).getText();
			return parseInt(rawValue, 10);
		},
		increment: async () => {
			await wd.findElement(By.css('.counter .increment')).click();
		},
		decrement: async () => {
			await wd.findElement(By.css('.counter .decrement')).click();
		}
	}
}

describe('counter', () => {

	let browser;
	let wd: ThenableWebDriver;
	before(async () => {

		wd = new Builder()
		.forBrowser('chrome')
		.build();
		});

	after(() => wd.close());

	beforeEach(async () => {
		await wd.get('http://localhost:8080');
	});

	it('renders with default value 0', async () => {
		const driver = createDriver(wd);
		assert.equal(await driver.value(), 0);
	});

	it('increments value', async () => {
		const driver = createDriver(wd);

		await driver.increment();
		assert.equal(await driver.value(), 1);
	});

	it('decrements value', async () => {
		const driver = createDriver(wd);

		await driver.decrement();
		assert.equal(await driver.value(), -1);
	});
});

