import puppeteer from 'puppeteer';
import { assert } from 'chai';


const createDriver = (page: puppeteer.Page) => {
	return {
		value: async () => {
			return page.evaluate(() => document.querySelector('.counter .value').textContent);
		},
		increment: async () => {
			await page.click('.counter .increment');
		},
		decrement: async () => {
			await page.click('.counter .decrement');
		}
	};
};

/*
const page = await browser.newPage();
	await page.goto(url, {waitUntil: 'networkidle2'});
	return page;

	browser = await puppeteer.launch();

	let browser: puppeteer.Browser;

*/

describe('counter', () => {

	let browser;
	let page: puppeteer.Page;

	before(async () => {
		browser = await puppeteer.launch({headless: false, slowMo: 200});
		page = await browser.newPage();
	});

	after(() => browser.close());

	beforeEach(async () => {
		await page.goto('http://localhost:8080', {waitUntil: 'networkidle2'});
	});

	it('renders with default value 0', async () => {
		const driver = createDriver(page);
		assert.equal(await driver.value(), 0);
	});

	it('increments value', async () => {
		const driver = createDriver(page);

		await driver.increment();
		assert.equal(await driver.value(), 1);
	});

	it('decrements value', async () => {
		const driver = createDriver(page);

		await driver.decrement();
		assert.equal(await driver.value(), -1);
	});
});

