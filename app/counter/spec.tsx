import * as React from 'react';
import { assert } from 'chai';
import { Counter } from '.';
import { renderComponent, simulateClick } from '../test-utils';

export const createReactDriver = (element: HTMLElement) => {
	return {
		value: () => {
			return element.querySelector('.value').textContent;
		},
		increment: () => {
			const incBtn = element.querySelector('.increment');
			simulateClick(incBtn);
		}
	}
}

describe('counter', () => {

	it('shows 0 as default value', () => {
		const element = renderComponent(<Counter/>);
		const driver = createReactDriver(element);
		assert.equal(driver.value(), '0');
	});

	it('increments value', () => {
		const element = renderComponent(<Counter/>);
		const driver = createReactDriver(element);

		driver.increment();
		assert.equal(driver.value(), '1');
	});

});
