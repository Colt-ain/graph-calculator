import constants from '../../constants';
import { AppDispatch } from '../../store';

const { ACTION_TYPES } = constants;

export const incrementCounter = (): any => {
	return (dispatch: AppDispatch): any => {
		dispatch({
			type: ACTION_TYPES.INCREMENT,
			payload: {},
		});
	};
};

export const decrementCounter = (): any => {
	return (dispatch: AppDispatch): any => {
		dispatch({
			type: ACTION_TYPES.DECREMENT,
			payload: {},
		});
	};
};
