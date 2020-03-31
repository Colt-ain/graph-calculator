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

export const updateValue = (equation: string | number): any => {
	return (dispatch: AppDispatch): any => {
		dispatch({
			type: ACTION_TYPES.UPDATE_EQUATION,
			payload: { equation },
		});
	};
};

export const removeValue = (): any => {
	return (dispatch: AppDispatch): any => {
		dispatch({
			type: ACTION_TYPES.REMOVE_VALUE,
			payload: { },
		});
	};
};

export const clearValue = (): any => {
	return (dispatch: AppDispatch): any => {
		dispatch({
			type: ACTION_TYPES.CLEAR_VALUE,
			payload: { },
		});
	};
};
