import ReactDOM from 'react-dom';

export const simulateClick = (element) => {
	const event = document.createEvent('HTMLEvents');
	event.initEvent('click', true, false);
	element.dispatchEvent(event);
};

export const renderComponent = (component) => {
	const container = document.createElement('div');
	ReactDOM.render(component, container);
	document.body.appendChild(container);
	return container;
}
