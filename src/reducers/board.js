const boardDefaultState = {
	holes: [
		{
			status: 'filled',
			moveChecks: { '3': 1, '5': 2 }
		},
		{
			status: 'filled',
			moveChecks: { '6': 3, '8': 4 }
		},
		{
			status: 'filled',
			moveChecks: { '7': 4, '9': 5 }
		},
		{
			status: 'filled',
			moveChecks: { '0': 1, '5': 4, '12': 7, '10': 6 }
		},
		{
			status: 'filled',
			moveChecks: { '11': 7, '13': 8 }
		},
		{
			status: 'filled',
			moveChecks: { '0': 2, '3': 4, '12': 8, '14': 9 }
		},
		{
			status: 'filled',
			moveChecks: { '1': 3, '8': 7 }
		},
		{
			status: 'filled',
			moveChecks: { '2': 4, '9': 8 }
		},
		{
			status: 'filled',
			moveChecks: { '1': 4, '6': 7 }
		},
		{
			status: 'filled',
			moveChecks: { '2': 5, '7': 8 }
		},
		{
			status: 'filled',
			moveChecks: { '3': 6, '12': 11 }
		},
		{
			status: 'filled',
			moveChecks: { '4': 7, '13': 12 }
		},
		{
			status: 'filled',
			moveChecks: { '10': 11, '3': 7, '5': 8, '14': 13 }
		},
		{
			status: 'filled',
			moveChecks: { '11': 12, '4': 8 }
		},
		{
			status: 'filled',
			moveChecks: { '12': 13, '5': 9 }
		}
	],
	pendingHole: null
};

export const boardReducer = (state = boardDefaultState, action) => {
	let holes = state.holes;
	switch (action.type) {
		case 'REMOVE_PEG':
			state.holes[action.pegIndex].status = 'empty';
			return { ...state, holes };
		case 'ADD_PEG':
			state.holes[action.pegIndex].status = 'filled';
			return { ...state, holes };
		case 'SET_PENDING_HOLE':
			return {
				...state,
				pendingHole: action.pendingHole
			};
		case 'RESET_BOARD':
			const filledHoles = holes.map(hole => ({
				...hole,
				status: 'filled'
			}));
			return {
				...state,
				holes: filledHoles
			};
		default:
			return state;
	}
};

export default boardReducer;
