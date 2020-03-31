import React, {Component} from 'react';
import { connect } from 'react-redux';
import CalcButton from '../CalcButton';
import Display from '../Display';
import { StoreInterface } from '../../interfaces';
import { updateValue, removeValue, clearValue } from '../../actions/common';

const componentActions = {
	actionType: (value: string | number): void => undefined,
};

interface CalculatorProps {
	equation: string,
	updateValue: typeof componentActions.actionType,
	removeValue: typeof componentActions.actionType,
	clearValue: typeof componentActions.actionType,
}

class Calculator extends Component<CalculatorProps> {
	constructor(props: CalculatorProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}
	onClick(value: number | string) {
		this.props.updateValue(value);
	}

	render() {
		const { equation, removeValue, clearValue } = this.props;

		return (
			<div className='calculator'>
				<CalcButton value={'AC'} action={clearValue} />
				<br/>
				<CalcButton value={1} action={this.onClick} />
				<CalcButton value={2} action={this.onClick} />
				<CalcButton value={3} action={this.onClick} />
				<br/>
				<CalcButton value={4} action={this.onClick} />
				<CalcButton value={5} action={this.onClick} />
				<CalcButton value={6} action={this.onClick} />
				<br/>
				<CalcButton value={7} action={this.onClick} />
				<CalcButton value={8} action={this.onClick} />
				<CalcButton value={9} action={this.onClick} />
				<br/>
				<CalcButton value={0} action={this.onClick} />
				<br/>
				<CalcButton value={'+'} action={this.onClick} />
				<CalcButton value={'-'} action={this.onClick} />
				<CalcButton value={'/'} action={this.onClick} />
				<CalcButton value={'*'} action={this.onClick} />
				<br/>
				<CalcButton value={'('} action={this.onClick} />
				<CalcButton value={')'} action={this.onClick} />
				<br/>
				<CalcButton value={'='} action={this.onClick} />
				<CalcButton value={'delete'} action={removeValue} />
				<br/><br/>
				<CalcButton value={'X'} action={this.onClick} />

				<Display value={equation} />
			</div>
		);
	}
}

const mapStateToProps = (state: StoreInterface) => {
	const { common: { equation } } = state;

	return { equation };
};

export default connect(mapStateToProps, { updateValue, removeValue, clearValue })(Calculator);
