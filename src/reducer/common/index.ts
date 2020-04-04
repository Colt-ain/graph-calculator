import constants from '../../constants/';

const { ACTION_TYPES } = constants;

interface ActionInterface {
	payload: any;
	type: string;
}

const initialState = {
	counter: 0,
	equation: '',
	isValidEquation: true,
	min: 0,
	max: 10,
};

interface CommonInterface {
	counter: number;
	equation: string;
	isValidEquation: boolean;
	min: number;
	max: number;
}

export default function common(state: CommonInterface = initialState, action: ActionInterface): CommonInterface {
	const { type, payload } = action;

	switch (type) {
		case ACTION_TYPES.INCREMENT: {
			return { ...state, counter: state.counter + 1};
		}

		case ACTION_TYPES.DECREMENT: {
			return { ...state, counter: state.counter - 1};
		}

		case ACTION_TYPES.UPDATE_EQUATION: {
			return { ...state, equation: `${state.equation}${payload.equation}` };
		}

		case ACTION_TYPES.REMOVE_VALUE: {
			const { equation } = state;

			if (!equation.length) return state;

			return { ...state, equation: state.equation.substring(0, state.equation.length - 1) };
		}

		case ACTION_TYPES.CLEAR_VALUE: {
			return { ...state, equation: initialState.equation };
		}

		case ACTION_TYPES.SET_EXTREMES: {
			const { type, value } = payload;

			if (type === 'max') return { ...state, max: value };

			return { ...state, min: value };
		}

		case ACTION_TYPES.DRAW_GRAPH: {
			const { type, min, max } = payload;

			return { ...state };
		}

		default:
			return state;
	}
}
