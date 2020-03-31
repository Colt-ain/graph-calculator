import React, {Component} from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../actions/common';
import { StoreInterface } from '../../interfaces';

const actions = {
	incrementCounter: (): void => undefined,
	decrementCounter: (): void => undefined,
};

interface CounterInterface {
	incrementCounter: typeof actions.incrementCounter;
	decrementCounter: typeof actions.decrementCounter;
	counter: number,
}

class Counter extends Component<CounterInterface> {
	render() {
		const { incrementCounter, decrementCounter, counter } = this.props;

		return (
			<div className='counter'>
				<h1>Counter</h1>
				<br/>
				<button className='btn' onClick={decrementCounter}>Decrement</button>
				<button className='btn' onClick={incrementCounter}>Increment</button>
				<br/>
				<h2>{ counter }</h2>
			</div>
		);
	}
}

type mapStateToPropsType = {
	counter: number;
};

const mapStateToProps = (state: StoreInterface): mapStateToPropsType => {
	return { counter: state.common.counter };
};

export default connect(mapStateToProps, { incrementCounter, decrementCounter })(Counter);
