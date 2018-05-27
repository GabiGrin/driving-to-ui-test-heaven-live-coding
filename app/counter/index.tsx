import * as React from 'react';

export type CounterState = {
	value: number;
};

export type CounterProps = {
	initialValue?: number;
}

export class Counter extends React.Component<CounterProps, CounterState> {

	state = {
		value: this.props.initialValue || 0
	};

	increment = () => this.setState({value: this.state.value + 1});

	// decrement = () => this.setState({value: this.state.value - 1});

	render() {
		return (<div className='counter'>
			{/* <button onClick={this.decrement} className='decriment'>-</button> */}
			<span className='value'>{this.state.value}</span>
			<button onClick={this.increment} className='increment'>+</button>
		</div>);
	}
}
