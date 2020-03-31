import React, { Component } from 'react';

const componentActions = {
	action: (value: number | string ): void => undefined,
};

interface PropsInterface {
	action: typeof componentActions.action,
	value: number | string
}

class CalcButton extends Component<PropsInterface> {
	constructor(props: PropsInterface) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		const { value, action } = this.props;

		action(value);
	}
	render() {
		const {value} = this.props;

		return(
			<button className='calc-btn' onClick={this.onClick}>{ value }</button>
		);
	}
}

export default CalcButton;
