import React, {Component} from 'react';
import { StoreInterface } from '../../interfaces';
import { setExtremes } from '../../actions/common';
import { connect } from 'react-redux';

const actions = {
	setExtremes: (type: string, value: string): void => undefined,
};

interface propsInterface {
	min: string;
	max: string;
	setExtremes: typeof actions.setExtremes;
}

class Extremes extends Component<propsInterface> {
	constructor(props: propsInterface) {
		super(props);

		this.onMinChange = this.onMinChange.bind(this);
		this.onMaxChange = this.onMaxChange.bind(this);
	}

	onMinChange(e: any) {
		const min: string = e.target.value;
		const { setExtremes } = this.props;

		if (!setExtremes) return;

		setExtremes('min', min);
	}

	onMaxChange(e: any) {
		const max: string = e.target.value;
		const { setExtremes } = this.props;

		if (!setExtremes) return;

		setExtremes('max', max);
	}

	render() {
		const { min, max } = this.props;

		return (
			<div>
				<label htmlFor="min">Minimum: </label>
				<input onChange={this.onMinChange} id='min' type="number" value={min}/>
				<label htmlFor="max">Maximum: </label>
				<input onChange={this.onMaxChange} id='max' type="number" value={max}/>
			</div>
		);
	}
}

const mapStateToProps = (state: StoreInterface): any => {
	const { common: { min, max } } = state;

	return { min, max };
};

export default connect(mapStateToProps, { setExtremes })(Extremes);
