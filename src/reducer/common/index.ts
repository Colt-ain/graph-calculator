import constants from '../../constants/';

const { ACTION_TYPES } = constants;

interface ActionInterface {
	payload: any;
	type: string;
}

const initialState = {
	counter: 0,
};

interface CommonInterface {
	counter: number;
}

export default function common(state: CommonInterface  = initialState, action: ActionInterface): CommonInterface {
	const { type } = action;

	switch (type) {
		case ACTION_TYPES.INCREMENT: {
			return { ...state, counter: state.counter + 1};
		}

		case ACTION_TYPES.DECREMENT: {
			return { ...state, counter: state.counter - 1};
		}

		default:
			return state;
	}
}
