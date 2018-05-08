import * as React from 'react';
import { assert } from 'chai';
import { Counter } from '.';
import { renderComponent, simulateClick } from '../test-utils';

const createDriver = (element: HTMLElement) => {
	return {
		value: () => {
			const rawValue = element.querySelector('.value').textContent;
			return parseInt(rawValue);
		},
		increment: () => {
			const incBtn = element.querySelector('.increment');
			simulateClick(incBtn);
		},
		decrement: () => {
			const decBtn = element.querySelector('.decrement');
			simulateClick(decBtn);
		}
	}
}

describe('counter', () => {

	it('shows 0 as default value', () => {
		const element = renderComponent(<Counter/>);
		const driver = createDriver(element);
		assert.equal(driver.value(), 0);
	});

	it('increments value', () => {
		const element = renderComponent(<Counter/>);
		const driver = createDriver(element);

		driver.increment();
		assert.equal(driver.value(), 1);
	});

	it('decrements value', () => {
		const element = renderComponent(<Counter/>);
		const driver = createDriver(element);

		driver.decrement();
		assert.equal(driver.value(), -1);
	});

	it('shows initial value', () => {
		const element = renderComponent(<Counter initialValue={7}/>);
		const driver = createDriver(element);

		assert.equal(driver.value(), 7);
	});

});
