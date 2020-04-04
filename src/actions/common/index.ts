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

export const setExtremes = ( type: string, value: string): any => {
	return (dispatch: AppDispatch): any => {
		dispatch({
			type: ACTION_TYPES.SET_EXTREMES,
			payload: { type, value },
		});
	};
};

function countEquation(equation: string, min: number, max: number) {
	const equationArray = equation.split('+').map(item => {
		if (typeof +item === 'number' && !isNaN(+item)) return +item;

		return item;
	});
	const isItOperator = function(symbol: number | undefined | string) {
		const operators = ['+', '-', '*', '/'];

		return operators.includes(symbol + '');
	};

	// сделаем перечень значений функций
	const count = 100;
	const step = Math.round(((max - min) / count)*100)/100;
	let current = +min;
	let xArr = [current];

	for (let i = 1; i < count; i++) {
		current = Math.round((current + step)*100)/100;

		xArr.push(current);
	}

	console.log(xArr);

	const yArr = xArr.map((x) => {
		return equationArray
			.map(item => {
				if (item === 'X') return x;

				return item;
			})
			.reduce((acc, item:number | undefined | string, i, arr) => {
				if (isItOperator(item) &&
					arr[i - 1]
					&& typeof arr[i - 1] === 'number'
					&& arr[i + 1]
					&& typeof arr[i + 1] === 'number') {
					switch (item) {
						case '+': {
							// @ts-ignore
							return arr[i - 1] + arr[i + 1];
						}
						case '-':
							// @ts-ignore
							return arr[i - 1] - arr[i + 1];
						case '/':
							// @ts-ignore
							return arr[i - 1] / arr[i + 1];
						case '*':
							// @ts-ignore
							return arr[i - 1] * arr[i + 1];
						default: return acc;
					}
				}

				return acc;

			}, 0);
	});

	debugger
}

export const drawGraph = function(equation: string): any {


	return (dispatch: AppDispatch, getState: any): any => {
		const { common: { min, max }} = getState();

		const graphEquals = countEquation(equation, min, max);

		dispatch({
			type: ACTION_TYPES.DRAW_GRAPH,
			payload: { equation, min, max },
		});
	};
};
