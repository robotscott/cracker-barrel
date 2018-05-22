const gameDefaultState = {
	gameStatus: 'Not Started',
	removeFirstPeg: false
};

export const gameReducer = (state = gameDefaultState, action) => {
	switch (action.type) {
		case 'START_GAME':
			return {
				gameStatus: action.gameStatus,
				removeFirstPeg: true
			};
		case 'END_GAME':
			return {
				...state,
				gameStatus: action.gameStatus
			};
		case 'END_FIRST_MOVE':
			return {
				...state,
				removeFirstPeg: false
			};
		default:
			return state;
	}
};

export default gameReducer;
