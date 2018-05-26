import puppeteer from 'puppeteer';
import { assert } from 'chai';
import { Page } from 'puppeteer';

export const createPuppeteerDriver = (page: Page) => {
	return {
		value: async () => {
			return page.$eval('.counter .value', (e) => e.textContent);
		},
		increment: async () => {
			await page.click('.counter .increment');
		}
	};
};

describe('counter', () => {

	let browser;
	let page: Page;

	before(async () => {
		browser = await puppeteer.launch({headless: false, slowMo: 200});
		page = await browser.newPage();
	});

	after(() => browser.close());

	beforeEach(async () => {
		await page.goto('http://localhost:8080', {waitUntil: 'networkidle2'});
	});

	it('renders with default value 0', async () => {
		const driver = createPuppeteerDriver(page);
		assert.equal(await driver.value(), '0');
	});

	it('increments the value', async () => {
		const driver = createPuppeteerDriver(page);

		await driver.increment();
		assert.equal(await driver.value(), '1');
	});
});

