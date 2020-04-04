import React, {Component} from 'react';
import { connect } from 'react-redux';
import CalcButton from '../CalcButton';
import Display from '../Display';
import Extremes from '../Extremes';
import { StoreInterface } from '../../interfaces';
import { updateValue, removeValue, clearValue, drawGraph } from '../../actions/common';

const componentActions = {
	actionType: (value: string | number): void => undefined,
	drawGraph: (equation: string): void => undefined,
};

interface CalculatorProps {
	equation: string,
	isValidEquation: boolean,
	updateValue: typeof componentActions.actionType,
	removeValue: typeof componentActions.actionType,
	clearValue: typeof componentActions.actionType,
	drawGraph: typeof componentActions.drawGraph,
}

class Calculator extends Component<CalculatorProps> {
	constructor(props: CalculatorProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
		this.onDraw = this.onDraw.bind(this);
	}

	onClick(value: number | string) {
		this.props.updateValue(value);
	}

	onDraw() {
		const { drawGraph, equation, isValidEquation } = this.props;

		if (!isValidEquation) return;

		const AppId = '2ETLA8-5QEXVGU2W4';

		// fetch(`https://api.wolframalpha.com/v2/query?input=x*3&format=image&output=XML&appid=${AppId}`, {
		// 	method: 'GET',
		// 	headers: {
		// 		'Access-Control-Allow-Origin': "*",
		// 	}
		// })
		// 	.then(res => {
		// 		console.log(res);
		// 		return res.text();
		// 	})
		// 	.then(data => {
		// 		console.log(data)
		// 	})
		// 	.catch(err => console.error(err));

		// const WolframAlphaAPI = require('wolfram-alpha-api');
		// const waApi = WolframAlphaAPI(AppId);
		//
		//
		// let results = await waApi.query("integrate 2x");

		drawGraph(equation);
	}

	render() {
		const { equation, removeValue, clearValue, isValidEquation } = this.props;

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
				<br/><br/>
				<Extremes setExtremes={() => {}} min={''} max={''} />
				<br/><br/>
				<br/><br/>
				<Display value={equation} isValid={isValidEquation} />
				<CalcButton value={'draw'} action={this.onDraw} />
			</div>
		);
	}
}

const mapStateToProps = (state: StoreInterface) => {
	const { common: { equation, isValidEquation } } = state;

	return { equation, isValidEquation };
};

export default connect(mapStateToProps,
	{ updateValue, removeValue, clearValue, drawGraph })
(Calculator);
